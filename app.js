(function(){
"use strict";

/* ---------------- persistent wrong-count storage ---------------- */
const STORAGE_KEY = "boatExam_wrongCounts_v1";
let wrongCounts = {};
try{
  const raw = localStorage.getItem(STORAGE_KEY);
  if(raw) wrongCounts = JSON.parse(raw) || {};
}catch(e){ wrongCounts = {}; }

function saveWrongCounts(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(wrongCounts)); }catch(e){/* ignore */}
}

/* ---------------- app state ---------------- */
const state = {
  lang: "jp",
  selectedMinutes: null, // number or "mock"
  screen: "top",
  session: null,
  voiceMode: false,
  voiceMuted: false
};

const QUESTIONS = window.QUESTIONS;
const QMAP = {};
QUESTIONS.forEach(q=>QMAP[q.id]=q);

/* ---------------- i18n helpers ---------------- */
function t(key){
  const dict = window.I18N[state.lang];
  return dict && dict[key] !== undefined ? dict[key] : key;
}
function applyStaticI18n(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if(typeof val === "string") el.textContent = val;
  });
  document.getElementById("langToggle").textContent = t("langBtnLabel");
  document.documentElement.lang = state.lang === "jp" ? "ja" : "en";
}

/* ---------------- weighted random selection ---------------- */
function weightedShuffle(ids){
  return ids.map(id=>{
    const w = 1 + (wrongCounts[id]||0) * 2.2;
    const r = Math.random() || 0.0001;
    const key = Math.pow(r, 1/w);
    return {id, key};
  }).sort((a,b)=>b.key-a.key).map(x=>x.id);
}
function plainShuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function buildMockQueue(){
  const grIds = QUESTIONS.filter(q=>q.category!=="operation").map(q=>q.id);
  const opIds = QUESTIONS.filter(q=>q.category==="operation").map(q=>q.id);
  const gr = weightedShuffle(grIds).slice(0,26);
  const op = weightedShuffle(opIds).slice(0,24);
  return plainShuffle(gr.concat(op));
}
function buildTimedBatch(excludeFirstId){
  const all = QUESTIONS.map(q=>q.id);
  let order = weightedShuffle(all);
  if(excludeFirstId && order[0] === excludeFirstId && order.length>1){
    [order[0], order[1]] = [order[1], order[0]];
  }
  return order;
}

/* ---------------- screen switching ---------------- */
function showScreen(name){
  state.screen = name;
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById("screen-"+name).classList.add("active");
}

/* ================= TOP SCREEN ================= */
const durationGrid = document.getElementById("durationGrid");
const startBtn = document.getElementById("startBtn");
const statsRow = document.getElementById("statsRow");

durationGrid.addEventListener("click", (e)=>{
  const btn = e.target.closest(".duration-btn");
  if(!btn) return;
  state.selectedMinutes = btn.dataset.minutes === "mock" ? "mock" : parseInt(btn.dataset.minutes,10);
  document.querySelectorAll(".duration-btn").forEach(b=>b.classList.remove("selected"));
  btn.classList.add("selected");
  startBtn.disabled = false;
  startBtn.textContent = t("startBtnLabel");
});

startBtn.addEventListener("click", ()=>{
  if(state.selectedMinutes === null) return;
  startSession(state.selectedMinutes);
});

function renderTopStats(){
  const totalMistakes = Object.values(wrongCounts).reduce((a,b)=>a+b,0);
  const trackedQs = Object.keys(wrongCounts).filter(k=>wrongCounts[k]>0).length;
  statsRow.innerHTML = "";
  if(trackedQs>0){
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = state.lang==="jp"
      ? `これまでの間違い: ${totalMistakes}回 (${trackedQs}問)`
      : `Past mistakes: ${totalMistakes} (${trackedQs} questions)`;
    statsRow.appendChild(chip);
  }
}

/* ================= QUIZ SCREEN ================= */
const timeLeftEl = document.getElementById("timeLeft");
const timeBarEl = document.getElementById("timeBar");
const qCounterEl = document.getElementById("qCounter");
const qScoreEl = document.getElementById("qScore");
const catTagEl = document.getElementById("catTag");
const qTextEl = document.getElementById("qText");
const choicesWrapEl = document.getElementById("choicesWrap");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

function startSession(minutes){
  const isMock = minutes === "mock";
  const durationSec = isMock ? 70*60 : minutes*60;
  const queue = isMock ? buildMockQueue() : buildTimedBatch(null);

  state.session = {
    isMock,
    durationSec,
    remainingSec: durationSec,
    queue,
    index: 0,
    answers: [],       // {id, category, correct}
    current: null,     // {id, answered, chosenIndex}
    timerId: null,
    ended: false
  };

  showScreen("quiz");
  qScoreEl.textContent = "0";
  loadQuestionAt(0);
  startTimer();
}

function startTimer(){
  updateTimerUI();
  const s = state.session;
  s.timerId = setInterval(()=>{
    s.remainingSec--;
    if(s.remainingSec <= 0){
      s.remainingSec = 0;
      updateTimerUI();
      clearInterval(s.timerId);
      finishSession();
      return;
    }
    updateTimerUI();
  }, 1000);
}
function updateTimerUI(){
  const s = state.session;
  const m = Math.floor(s.remainingSec/60);
  const sec = s.remainingSec%60;
  timeLeftEl.textContent = `${m}:${sec<10?"0":""}${sec}`;
  const pct = Math.max(0, (s.remainingSec/s.durationSec)*100);
  timeBarEl.style.width = pct+"%";
  if(pct < 15) timeBarEl.style.background = "linear-gradient(90deg,#e76f51,#ffb499)";
}

function loadQuestionAt(index){
  const s = state.session;
  if(index >= s.queue.length){
    if(s.isMock){ finishSession(); return; }
    const lastId = s.queue[s.queue.length-1];
    s.queue = s.queue.concat(buildTimedBatch(lastId));
  }
  s.index = index;
  s.current = { id: s.queue[index], answered:false, chosenIndex:null };
  renderQuiz();
  maybeSpeakQuestion();
}

function renderQuiz(){
  const s = state.session;
  const q = QMAP[s.current.id];
  const L = q[state.lang];

  qCounterEl.textContent = s.isMock ? `${s.index+1} / ${s.queue.length}` : `${s.index+1}`;
  qScoreEl.textContent = s.answers.filter(a=>a.correct).length;

  catTagEl.className = "cat-tag " + q.category;
  const catLabel = t("statCategory")[q.category];
  catTagEl.textContent = catLabel;

  qTextEl.textContent = L.q;

  choicesWrapEl.innerHTML = "";
  // diagram
  const existingDiagram = document.querySelector(".diagram-wrap");
  if(existingDiagram) existingDiagram.remove();
  if(q.diagram){
    const dw = document.createElement("div");
    dw.className = "diagram-wrap";
    dw.appendChild(buildDiagramSVG(q.diagram));
    qTextEl.insertAdjacentElement("afterend", dw);
  }

  const marks = ["A","B","C","D"];
  L.choices.forEach((choiceText, idx)=>{
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-btn";
    btn.innerHTML = `<span class="choice-mark">${marks[idx]}</span><span>${escapeHtml(choiceText)}</span>`;
    btn.addEventListener("click", ()=>onChoiceClick(idx, btn));
    choicesWrapEl.appendChild(btn);
  });

  feedbackEl.className = "feedback";
  feedbackEl.innerHTML = "";
  nextBtn.classList.remove("show");

  // restore state if navigating back into an already-answered question (not used currently, but safe)
  if(s.current.answered){
    lockChoices(q, s.current.chosenIndex);
    showFeedback(q, s.current.chosenIndex === q.answer);
    nextBtn.classList.add("show");
  }
}

function escapeHtml(str){
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function onChoiceClick(idx, btnEl){
  const s = state.session;
  if(s.current.answered) return;
  stopListening();
  stopSpeaking();
  const q = QMAP[s.current.id];
  const correct = idx === q.answer;

  s.current.answered = true;
  s.current.chosenIndex = idx;
  s.answers.push({id:q.id, category:q.category, correct});

  if(!correct){
    wrongCounts[q.id] = (wrongCounts[q.id]||0) + 1;
    saveWrongCounts();
  }

  lockChoices(q, idx);
  showFeedback(q, correct);
  qScoreEl.textContent = s.answers.filter(a=>a.correct).length;

  const isLast = s.isMock && (s.index+1 >= s.queue.length);
  nextBtn.querySelector("span").textContent = isLast ? t("finish") : t("next");
  nextBtn.classList.add("show");

  maybeSpeakFeedback(q, correct, isLast);
}

function goToNextQuestion(){
  const s = state.session;
  if(!s || s.ended) return;
  if(s.isMock && s.index+1 >= s.queue.length){
    finishSession();
    return;
  }
  loadQuestionAt(s.index+1);
}

function lockChoices(q, chosenIndex){
  const btns = choicesWrapEl.querySelectorAll(".choice-btn");
  btns.forEach((btn, idx)=>{
    btn.disabled = true;
    if(idx === q.answer) btn.classList.add("correct");
    else if(idx === chosenIndex) btn.classList.add("wrong");
    else btn.classList.add("dim");
  });
}

function showFeedback(q, correct){
  feedbackEl.className = "feedback show " + (correct ? "correct" : "wrong");
  const L = q[state.lang];
  let html = `<div class="fb-title">${correct ? "✓ " + t("correctFeedback") : "✗ " + t("wrongFeedback")}</div>`;
  if(!correct){
    html += `<div class="fb-hint"><b>${t("hintLabel")}:</b> ${escapeHtml(q.hint[state.lang])}</div>`;
  }
  feedbackEl.innerHTML = html;
}

nextBtn.addEventListener("click", ()=>{
  stopVoice();
  goToNextQuestion();
});

function finishSession(){
  const s = state.session;
  if(s.ended) return;
  s.ended = true;
  if(s.timerId) clearInterval(s.timerId);
  stopVoice();
  showScreen("result");
  renderResult();
}

/* ---------------- diagram rendering ---------------- */
function buildDiagramSVG(cfg){
  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 200 170");

  (cfg.boats||[]).forEach(b=>{
    const g = document.createElementNS(NS, "g");
    g.setAttribute("transform", `translate(${b.x},${b.y}) rotate(${b.angle})`);

    if(b.type === "sail"){
      const sail = document.createElementNS(NS,"path");
      sail.setAttribute("d","M0,-26 L9,4 L-1,4 Z");
      sail.setAttribute("fill","#cfe3ff");
      sail.setAttribute("stroke","#1a3d7c");
      sail.setAttribute("stroke-width","1");
      g.appendChild(sail);
    }

    const hull = document.createElementNS(NS,"path");
    hull.setAttribute("d","M0,-15 C6,-8 7,3 4,13 L-4,13 C-7,3 -6,-8 0,-15 Z");
    hull.setAttribute("class","boat-shape" + (b.type==="fishing" ? " fishing" : b.type==="sail" ? " sail" : ""));
    g.appendChild(hull);

    if(b.type === "fishing"){
      const net = document.createElementNS(NS,"circle");
      net.setAttribute("cx","0"); net.setAttribute("cy","20"); net.setAttribute("r","5");
      net.setAttribute("fill","none"); net.setAttribute("stroke","#e76f51"); net.setAttribute("stroke-width","1.5");
      g.appendChild(net);
    }

    svg.appendChild(g);

    const label = document.createElementNS(NS,"text");
    label.setAttribute("x", b.x + 14);
    label.setAttribute("y", b.y + 4);
    label.setAttribute("class","boat-label");
    label.textContent = b.label;
    svg.appendChild(label);
  });

  if(cfg.mark){
    const g = document.createElementNS(NS,"g");
    const s = 6;
    const l1 = document.createElementNS(NS,"line");
    l1.setAttribute("x1", cfg.mark.x-s); l1.setAttribute("y1", cfg.mark.y-s);
    l1.setAttribute("x2", cfg.mark.x+s); l1.setAttribute("y2", cfg.mark.y+s);
    l1.setAttribute("class","mark-x");
    const l2 = document.createElementNS(NS,"line");
    l2.setAttribute("x1", cfg.mark.x-s); l2.setAttribute("y1", cfg.mark.y+s);
    l2.setAttribute("x2", cfg.mark.x+s); l2.setAttribute("y2", cfg.mark.y-s);
    l2.setAttribute("class","mark-x");
    g.appendChild(l1); g.appendChild(l2);
    svg.appendChild(g);
  }
  return svg;
}

/* ================= RESULT SCREEN ================= */
const passRateHeading = document.getElementById("passRateHeading");
const rateArc = document.getElementById("rateArc");
const rateNum = document.getElementById("rateNum");
const resultSummary = document.getElementById("resultSummary");
const catBreakdown = document.getElementById("catBreakdown");
const weakList = document.getElementById("weakList");
const retryBtn = document.getElementById("retryBtn");

const CIRC = 2*Math.PI*52; // ~326.7

function renderResult(){
  const s = state.session;
  const total = s.answers.length;
  const correct = s.answers.filter(a=>a.correct).length;
  const pct = total>0 ? Math.round((correct/total)*100) : 0;

  passRateHeading.textContent = state.lang==="jp" ? "結果発表" : "Your Result";
  rateNum.textContent = pct;
  const offset = CIRC - (CIRC * pct/100);
  rateArc.style.strokeDasharray = CIRC;
  requestAnimationFrame(()=>{ rateArc.style.strokeDashoffset = offset; });
  rateArc.style.stroke = pct>=65 ? "#2a9d63" : pct>=45 ? "#f2a154" : "#e76f51";

  let msgKey = pct>=80 ? "resultPassHigh" : pct>=50 ? "resultPassMid" : "resultPassLow";
  const correctWord = state.lang==="jp" ? "正解" : "correct";
  resultSummary.innerHTML = `${correct} / ${total} ${correctWord} &nbsp;·&nbsp; ${t(msgKey)}<br><span style="font-size:0.78rem;opacity:0.75;">${t("passRefNote")}</span>`;

  // category breakdown
  catBreakdown.innerHTML = "";
  ["general","rules","operation"].forEach(cat=>{
    const catAnswers = s.answers.filter(a=>a.category===cat);
    if(catAnswers.length===0) return;
    const catCorrect = catAnswers.filter(a=>a.correct).length;
    const catPct = Math.round((catCorrect/catAnswers.length)*100);
    const chip = document.createElement("div");
    chip.className = "cat-chip";
    chip.innerHTML = `<b>${catPct}%</b>${t("statCategory")[cat]} (${catCorrect}/${catAnswers.length})`;
    catBreakdown.appendChild(chip);
  });

  // weak list: wrong answers this session, most-missed overall first
  weakList.innerHTML = "";
  const wrongThisSession = s.answers.filter(a=>!a.correct);
  if(wrongThisSession.length === 0){
    const div = document.createElement("div");
    div.className = "weak-none";
    div.textContent = t("weakNone");
    weakList.appendChild(div);
  }else{
    const uniqueIds = [...new Set(wrongThisSession.map(a=>a.id))]
      .sort((a,b)=>(wrongCounts[b]||0)-(wrongCounts[a]||0));
    uniqueIds.forEach(id=>{
      const q = QMAP[id];
      const L = q[state.lang];
      const item = document.createElement("div");
      item.className = "weak-item";
      item.innerHTML = `<div class="wi-q">${escapeHtml(L.q.split("\n")[0])}</div>
        <div class="wi-ans">${state.lang==="jp"?"正解":"Answer"}: ${escapeHtml(L.choices[q.answer])}</div>
        <div class="wi-hint">${escapeHtml(q.hint[state.lang])}</div>`;
      weakList.appendChild(item);
    });
  }

  renderTopStats();
}

retryBtn.addEventListener("click", ()=>{
  stopVoice();
  state.selectedMinutes = null;
  document.querySelectorAll(".duration-btn").forEach(b=>b.classList.remove("selected"));
  startBtn.disabled = true;
  startBtn.textContent = t("selectFirst");
  renderTopStats();
  showScreen("top");
});

/* ================= LANGUAGE TOGGLE ================= */
document.getElementById("langToggle").addEventListener("click", ()=>{
  stopVoice();
  state.lang = state.lang === "jp" ? "en" : "jp";
  applyStaticI18n();
  updateVoiceToggleUI();
  renderTopStats();
  if(state.screen === "quiz" && state.session){
    renderQuiz();
    if(state.session.current && !state.session.current.answered) maybeSpeakQuestion();
  }else if(state.screen === "result" && state.session){
    renderResult();
  }
  if(state.selectedMinutes !== null && startBtn.disabled === false){
    startBtn.textContent = t("startBtnLabel");
  }
});

/* ================= VOICE MODE ================= */
const voiceModeToggle = document.getElementById("voiceModeToggle");
const voiceUnsupportedNote = document.getElementById("voiceUnsupportedNote");
const voiceStatusBar = document.getElementById("voiceStatusBar");
const voiceStatusText = document.getElementById("voiceStatusText");
const voiceMicBtn = document.getElementById("voiceMicBtn");
const voiceMuteBtn = document.getElementById("voiceMuteBtn");

const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition || null;
const synthAvailable = "speechSynthesis" in window;
const recognitionAvailable = !!SpeechRecognitionCtor;

let recognizer = null;
let recognizerActive = false;
let retriedListen = false;

const VOICE_KEYWORDS = {
  jp: [
    ["a","エー","えー","1","いち","①"],
    ["b","ビー","びー","2","に","②"],
    ["c","シー","しー","3","さん","③"],
    ["d","ディー","でぃー","4","よん","し","④"]
  ],
  en: [
    ["a","1","one"],
    ["b","2","two"],
    ["c","3","three"],
    ["d","4","four"]
  ]
};

function speechLang(){ return state.lang === "jp" ? "ja-JP" : "en-GB"; }

/* Pick the best-matching installed voice so English is read in a British
   accent (not a Japanese-accented fallback voice) when one is available. */
let cachedVoices = [];
function refreshVoiceCache(){
  if(synthAvailable){
    try{ cachedVoices = window.speechSynthesis.getVoices() || []; }catch(e){ cachedVoices = []; }
  }
}
if(synthAvailable){
  refreshVoiceCache();
  window.speechSynthesis.onvoiceschanged = refreshVoiceCache;
}

function pickVoice(lang){
  if(!cachedVoices.length) return null;
  if(lang === "ja-JP"){
    return cachedVoices.find(v=>v.lang === "ja-JP") ||
      cachedVoices.find(v=>v.lang && v.lang.startsWith("ja")) || null;
  }
  // English: prefer an explicit British voice, then any "en-GB" locale,
  // then fall back to any other English voice rather than a non-English one.
  const byNameGB = cachedVoices.find(v=>v.lang==="en-GB" && /uk|british|gb/i.test(v.name));
  if(byNameGB) return byNameGB;
  const exactGB = cachedVoices.find(v=>v.lang==="en-GB");
  if(exactGB) return exactGB;
  const anyGB = cachedVoices.find(v=>v.lang && v.lang.toLowerCase().startsWith("en-gb"));
  if(anyGB) return anyGB;
  const anyEnglish = cachedVoices.find(v=>v.lang && v.lang.toLowerCase().startsWith("en"));
  return anyEnglish || null;
}

function updateVoiceToggleUI(){
  voiceModeToggle.classList.toggle("on", state.voiceMode);
  voiceModeToggle.setAttribute("aria-pressed", state.voiceMode ? "true" : "false");
}

function setVoiceStatus(text, listening){
  voiceStatusText.textContent = text;
  voiceStatusBar.classList.toggle("listening", !!listening);
}

if(!synthAvailable){
  voiceModeToggle.hidden = true;
}else if(!recognitionAvailable){
  voiceUnsupportedNote.hidden = false;
}

// 'unknown' | 'granted' | 'denied' — tracked so we only show the mic
// permission prompt once, at a clear, predictable moment (the voice-mode
// toggle click), instead of it silently failing later mid-quiz.
let micPermission = "unknown";

function primeMicPermission(){
  if(!recognitionAvailable || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
    return Promise.resolve(true); // nothing we can prime; let SpeechRecognition try on its own
  }
  return navigator.mediaDevices.getUserMedia({audio:true}).then((stream)=>{
    stream.getTracks().forEach(track=>track.stop());
    micPermission = "granted";
    return true;
  }).catch(()=>{
    micPermission = "denied";
    return false;
  });
}

voiceModeToggle.addEventListener("click", ()=>{
  const turningOn = !state.voiceMode;
  state.voiceMode = turningOn;
  updateVoiceToggleUI();
  if(!turningOn){
    stopVoice();
    return;
  }
  if(recognitionAvailable && micPermission !== "granted"){
    voiceStatusBar.hidden = false;
    setVoiceStatus(state.lang==="jp" ? "🎤 マイクの使用許可を確認しています…" : "🎤 Requesting microphone permission…", false);
    primeMicPermission().then((ok)=>{
      if(!state.voiceMode) return;
      if(ok){
        voiceStatusBar.hidden = true;
      }else{
        setVoiceStatus(state.lang==="jp"
          ? "🎤 マイクが許可されていません。ブラウザのアドレスバーのマイクアイコンから許可してください。"
          : "🎤 Microphone blocked. Allow it via the mic icon in your browser's address bar.", false);
      }
    });
  }
});

voiceMicBtn.addEventListener("click", ()=>{
  const s = state.session;
  if(!s || !s.current || s.current.answered) return;
  // This button means "repeat that" — re-read the question and choices out
  // loud, then listen again. (Silently jumping straight to listening, with
  // no audible confirmation, made the button look unresponsive in a
  // hands-free / eyes-free workflow.)
  retriedListen = false;
  stopListening();
  maybeSpeakQuestion();
});

voiceMuteBtn.addEventListener("click", ()=>{
  state.voiceMuted = !state.voiceMuted;
  voiceMuteBtn.setAttribute("data-i18n", state.voiceMuted ? "voiceUnmuteBtn" : "voiceMuteBtn");
  voiceMuteBtn.textContent = state.voiceMuted ? t("voiceUnmuteBtn") : t("voiceMuteBtn");
  if(state.voiceMuted){
    stopSpeaking();
    stopListening();
    setVoiceStatus(t("voiceIdle"), false);
  }else if(state.session && state.session.current && !state.session.current.answered){
    maybeSpeakQuestion();
  }
});

/* Monotonically-increasing tokens let us tell a "real" finish/error apart
   from an old utterance or recognizer session being cancelled by our own
   code (e.g. starting a new question while a previous one is still
   speaking). Without this, a cancelled utterance's onend/onerror would
   fire the STALE callback and could jump straight to listening mode
   mid-sentence, or misreport a valid answer as "not heard". */
let speechToken = 0;
let listenToken = 0;

// Chrome silently stops long utterances (~15s) unless kept alive with a
// pause/resume nudge. Without this, a question+choices utterance can be
// cut off partway through and fire "onend" as if it had finished normally.
let keepAliveTimer = null;
function startKeepAlive(){
  stopKeepAlive();
  keepAliveTimer = setInterval(()=>{
    if(synthAvailable && window.speechSynthesis.speaking){
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }
  }, 9000);
}
function stopKeepAlive(){
  if(keepAliveTimer){ clearInterval(keepAliveTimer); keepAliveTimer = null; }
}

function speak(text, onEnd){
  const myToken = ++speechToken;
  if(!synthAvailable || state.voiceMuted || !state.voiceMode){
    if(onEnd) onEnd();
    return;
  }
  try{
    window.speechSynthesis.cancel();
    const lang = speechLang();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    const voice = pickVoice(lang);
    if(voice) utter.voice = voice;
    utter.rate = 1.0;
    const finish = ()=>{
      if(myToken !== speechToken) return; // superseded by a newer speak() call — ignore
      stopKeepAlive();
      if(onEnd) onEnd();
    };
    utter.onend = finish;
    utter.onerror = finish;
    window.speechSynthesis.speak(utter);
    startKeepAlive();
  }catch(e){
    if(myToken === speechToken && onEnd) onEnd();
  }
}

function stopSpeaking(){
  speechToken++; // invalidate any in-flight utterance's callback
  stopKeepAlive();
  if(synthAvailable){
    try{ window.speechSynthesis.cancel(); }catch(e){/* ignore */}
  }
}

function stopListening(){
  listenToken++; // invalidate the current recognizer's callbacks immediately
  if(recognizer && recognizerActive){
    try{ recognizer.abort(); }catch(e){/* ignore */}
  }
  recognizerActive = false;
}

function stopVoice(){
  stopSpeaking();
  stopListening();
  voiceStatusBar.hidden = true;
}

function matchChoiceFromTranscript(raw){
  const text = raw.toLowerCase().replace(/[.,。、！？!?\s]/g,"");
  const keywordSets = VOICE_KEYWORDS[state.lang];
  for(let i=0;i<keywordSets.length;i++){
    for(const kw of keywordSets[i]){
      const k = kw.toLowerCase();
      if(state.lang === "en"){
        if(text === k) return i;
      }else{
        if(text.includes(k)) return i;
      }
    }
  }
  return -1;
}

function startListening(){
  const s = state.session;
  if(!recognitionAvailable || !state.voiceMode || state.voiceMuted) return;
  if(!s || !s.current || s.current.answered) return;

  stopListening(); // bumps listenToken, so the OLD recognizer's late events become no-ops
  const myToken = listenToken;

  voiceStatusBar.hidden = false;
  setVoiceStatus(state.lang==="jp" ? "🎤 マイクを準備しています…" : "🎤 Preparing microphone…", false);

  // Give the browser a beat to fully release any just-aborted recognition
  // session before starting a new one — starting immediately after abort()
  // can throw "recognition has already started" and fail with no visible
  // feedback at all.
  setTimeout(()=>{
    if(myToken !== listenToken) return; // superseded before we even got going
    const s0 = state.session;
    if(!s0 || !s0.current || s0.current.answered) return;
    reallyStartListening(myToken);
  }, 60);
}

function reallyStartListening(myToken){
  recognizer = new SpeechRecognitionCtor();
  recognizer.lang = speechLang();
  recognizer.continuous = false;
  // Interim results let us react the instant a guess matches a choice,
  // instead of waiting for the recognizer to decide the phrase is
  // "final" — which normally requires detecting a pause after the user
  // stops talking and was the main cause of sluggish-feeling answers.
  recognizer.interimResults = true;
  recognizer.maxAlternatives = 4;

  let started = false;
  recognizer.onstart = ()=>{
    if(myToken !== listenToken) return;
    started = true;
    setVoiceStatus(t("voiceListening"), true);
  };

  recognizer.onresult = (event)=>{
    if(myToken !== listenToken) return;
    const s2 = state.session;
    if(!s2 || !s2.current || s2.current.answered) return;

    let matched = -1;
    let isFinal = false;
    for(let r=0; r<event.results.length; r++){
      const result = event.results[r];
      if(result.isFinal) isFinal = true;
      for(let i=0;i<result.length;i++){
        matched = matchChoiceFromTranscript(result[i].transcript);
        if(matched !== -1) break;
      }
      if(matched !== -1) break;
    }

    if(matched !== -1){
      retriedListen = false;
      stopListening(); // got it — stop right away instead of waiting for finalization
      const btns = choicesWrapEl.querySelectorAll(".choice-btn");
      if(btns[matched]) onChoiceClick(matched, btns[matched]);
    }else if(isFinal){
      // Only give up once the recognizer itself is done with this phrase —
      // an interim non-match just means "keep listening, not done yet".
      handleNotHeard();
    }
  };
  recognizer.onerror = (event)=>{
    if(myToken !== listenToken){ recognizerActive = false; return; }
    recognizerActive = false;
    // "aborted" happens whenever OUR OWN code calls stopListening()/abort() —
    // e.g. the user tapped a choice, or a fresh listen was started. That is
    // not a real failure and must not trigger the "didn't catch that" flow.
    if(event.error === "aborted") return;
    if(event.error === "not-allowed" || event.error === "service-not-allowed"){
      voiceStatusBar.hidden = false;
      setVoiceStatus(state.lang==="jp" ? "🎤 マイクの使用が許可されていません" : "🎤 Microphone access was not granted", false);
      return;
    }
    const s2 = state.session;
    if(s2 && s2.current && !s2.current.answered) handleNotHeard();
  };
  recognizer.onend = ()=>{
    if(myToken !== listenToken) return;
    recognizerActive = false;
  };

  try{
    recognizer.start();
    recognizerActive = true;
    voiceStatusBar.hidden = false;
    setVoiceStatus(t("voiceListening"), true);
  }catch(e){
    // start() can throw synchronously (most commonly "recognition has
    // already started") if the browser hasn't fully released the mic from
    // a just-aborted session yet. Previously this failed with zero visible
    // feedback — now we retry once after a short pause, then give up with
    // a clear message so the user can tap "Listen again".
    recognizerActive = false;
    if(myToken !== listenToken) return;
    setTimeout(()=>{
      if(myToken !== listenToken) return;
      const s2 = state.session;
      if(!s2 || !s2.current || s2.current.answered) return;
      try{
        recognizer.start();
        recognizerActive = true;
        setVoiceStatus(t("voiceListening"), true);
      }catch(e2){
        recognizerActive = false;
        setVoiceStatus(state.lang==="jp"
          ? "🎤 マイクを開始できませんでした。もう一度お試しください。"
          : "🎤 Couldn't start the microphone. Please try again.", false);
      }
    }, 400);
    return;
  }

  // Watchdog: if the browser never fires onstart/onresult/onerror/onend
  // (rare, but happens with some mic driver issues), don't leave the UI
  // stuck showing "listening" forever.
  setTimeout(()=>{
    if(myToken !== listenToken) return;
    if(!started && recognizerActive){
      stopListening();
      const s2 = state.session;
      if(s2 && s2.current && !s2.current.answered) handleNotHeard();
    }
  }, 6000);
}

function handleNotHeard(){
  const s = state.session;
  if(!s || !s.current || s.current.answered) return;
  if(retriedListen){
    retriedListen = false;
    voiceStatusBar.hidden = false;
    setVoiceStatus(t("voiceNotHeard"), false);
    speak(t("voiceNotHeard"));
    return;
  }
  retriedListen = true;
  startListening();
}

function maybeSpeakQuestion(){
  if(!state.voiceMode || state.voiceMuted || !synthAvailable) return;
  const s = state.session;
  if(!s || !s.current) return;
  const q = QMAP[s.current.id];
  const L = q[state.lang];
  retriedListen = false;

  voiceStatusBar.hidden = false;
  setVoiceStatus(t("voiceSpeaking"), false);

  const marks = ["A","B","C","D"];
  const parts = [L.q.replace(/\n/g," ")];
  L.choices.forEach((c,i)=>parts.push(`${marks[i]}. ${c}`));
  const text = parts.join(state.lang==="jp" ? "。 " : ". ");

  speak(text, ()=>{
    const s2 = state.session;
    if(!s2 || !s2.current || s2.current.answered) return;
    if(recognitionAvailable){
      // Small pause so the mic doesn't pick up the tail end of the TTS
      // audio (feedback/echo) as if it were the user's answer.
      setTimeout(()=>{
        const s3 = state.session;
        if(!s3 || !s3.current || s3.current.answered || !state.voiceMode || state.voiceMuted) return;
        startListening();
      }, 150);
    }else{
      setVoiceStatus(state.lang==="jp" ? "選択肢をタップして回答してください" : "Tap a choice to answer", false);
    }
  });
}

function maybeSpeakFeedback(q, correct, isLast){
  if(!state.voiceMode || state.voiceMuted || !synthAvailable) return;
  stopListening();
  voiceStatusBar.hidden = false;
  setVoiceStatus(t("voiceSpeaking"), false);

  let text = correct ? t("correctFeedback") : (t("wrongFeedback") + (state.lang==="jp"?"。 ":". ") + q.hint[state.lang]);

  speak(text, ()=>{
    const s = state.session;
    if(!s || s.ended) return;
    const nextMsgKey = isLast ? "voiceResultsReady" : "voiceAdvancing";
    setVoiceStatus(t(nextMsgKey), false);
    speak(t(nextMsgKey), ()=>{
      goToNextQuestion();
    });
  });
}

/* ================= INIT ================= */
applyStaticI18n();
updateVoiceToggleUI();
renderTopStats();
showScreen("top");

})();
