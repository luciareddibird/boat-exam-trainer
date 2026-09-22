/* 小型船舶操縦士 学科試験対策 - 問題データ
   Boat Operator Written Exam Trainer - Question Bank
   category: 'general' | 'rules' | 'operation'
   diagram (optional): { boats: [{x,y,angle,label,type}], mark:{x,y} }
     angle: 0=up(north), 90=right, 180=down, 270=left
     type: 'power' | 'sail' | 'fishing'
*/
window.QUESTIONS = [

/* ============ GENERAL / RULES FOR OPERATORS (general) ============ */
{
  id:"g01", category:"general",
  en:{q:"Of the following descriptions about what you should keep in mind when navigating a boat, which one is INAPPROPRIATE?",
    choices:[
      "There may be obstacles or reefs under the part of the water surface where more whitecaps are forming than the surrounding area.",
      "When you navigate with your back to the sunlight, you may sometimes fail to spot a ship or debris ahead of your boat.",
      "Where there is a strong tidal current, the speed of the boat may pick up or slow down unexpectedly.",
      "If you do not keep track of the position of your boat, you may approach a dangerous area without knowing it."]},
  jp:{q:"操船時の心得に関する次の記述のうち、不適切なものはどれか。",
    choices:[
      "白波が周囲より多く立っている水面の下には、障害物や暗礁がある場合がある。",
      "太陽を背にして航行すると、前方の船や漂流物を見落とすことがある。",
      "潮流の強い場所では、船速が思いがけず速くなったり遅くなったりすることがある。",
      "自船の位置を把握していないと、知らないうちに危険な区域に近づくことがある。"]},
  answer:1,
  hint:{en:"Glare that blinds you comes from facing the sun, not from having it behind you. With the sun at your back, visibility ahead is usually good.",
    jp:"逆光で見えにくくなるのは太陽の方を向いたときであり、太陽を背にしていれば前方はむしろ見やすい。"}
},
{
  id:"g02", category:"general",
  en:{q:"Of the following descriptions about what the skipper should know about fishing boats, which one is APPROPRIATE?",
    choices:[
      "The manner of fishing varies; a fishing boat may be drifting, anchoring, etc.",
      "Regardless of how fishing is done, fishing equipment is always towed from the stern of each boat.",
      "Since such a boat hardly moves while its net is lifted, you can pass close by the boat.",
      "If a fishing boat is on your course, you should request it to give way by sounding the whistle."]},
  jp:{q:"漁船に関して操縦者が知っておくべきこととして適切なものはどれか。",
    choices:[
      "漁法は様々で、漂流していたり錨泊していたりする漁船もある。",
      "漁法にかかわらず、漁具は必ず船尾から曳いている。",
      "網を引き上げている間はほとんど動かないので、近くを通過してもよい。",
      "自船の進路上に漁船がいる場合は、汽笛を鳴らして進路を譲るよう求めるべきである。"]},
  answer:0,
  hint:{en:"Fishing methods vary greatly, so never assume a fishing boat's behavior — keep a wide berth and give way to it.",
    jp:"漁法は多種多様なので思い込みは禁物。むしろ漁船には広く進路を譲るのが原則。"}
},
{
  id:"g03", category:"general",
  en:{q:"Of the following statements about the placement of fishing equipment, which one is INAPPROPRIATE?",
    choices:[
      "When waves are high, fishing equipment may be difficult to spot because it is hidden in the waves.",
      "The shape and size of the fishing equipment used are the same nationwide.",
      "A plastic bottle may be used in place of a buoy.",
      "A bamboo pole with a flag may be used as a marker of fishing equipment."]},
  jp:{q:"漁具の設置に関する記述のうち、不適切なものはどれか。",
    choices:[
      "波が高いと、漁具が波に隠れて見つけにくいことがある。",
      "使用される漁具の形状・大きさは全国で統一されている。",
      "ブイの代わりにペットボトルが使われることもある。",
      "漁具の目印として旗を付けた竹竿が使われることもある。"]},
  answer:1,
  hint:{en:"Fishing gear markers vary by region and fisherman — there is no nationwide standard shape or size.",
    jp:"漁具の標識は地域や漁業者によって様々で、全国統一の規格はない。"}
},
{
  id:"g04", category:"general",
  en:{q:"Which of the following is the major cause of the grounding of a pleasure boat?",
    choices:["Improper boat handling","Improper engine handling","Insufficient water area study","Insufficient inspection of the hull"]},
  jp:{q:"プレジャーボートの乗り揚げ事故の主な原因はどれか。",
    choices:["不適切な操船","不適切な機関の取り扱い","水域調査の不足","船体点検の不足"]},
  answer:2,
  hint:{en:"Most groundings trace back to not studying the chart/water area beforehand — always check depths and hazards before departure.",
    jp:"乗り揚げの多くは事前の水路調査不足が原因。出航前に海図等で水深・障害物を確認することが重要。"}
},
{
  id:"g05", category:"general",
  en:{q:"Which of the following actions by the skipper is ILLEGAL?",
    choices:[
      "Navigating the boat with its Ship Inspection Certificate on board",
      "Navigating the boat with its Ship Inspection Record Book left at home",
      "Navigating the boat with legally required equipment on board",
      "Navigating the boat in compliance with the maximum number of persons allowed on board"]},
  jp:{q:"船長の行為として違法なものはどれか。",
    choices:[
      "船舶検査証書を船に備え置いて航行すること",
      "船舶検査記録簿を自宅に置いたまま航行すること",
      "法定備品を備えて航行すること",
      "定員の範囲内で航行すること"]},
  answer:1,
  hint:{en:"Required certificates/record books must stay aboard the vessel at all times — leaving them at home is a violation.",
    jp:"法定の証書・記録簿は常に船に備え置く義務があり、自宅に置いたままの航行は違反となる。"}
},
{
  id:"g06", category:"general",
  en:{q:"Which of the following is INAPPROPRIATE as a place to contact for information on how to dispose of unwanted boats?",
    choices:["Fire department","Japan Coast Guard","Local municipality","Marina"]},
  jp:{q:"不要になった船の処分方法について相談する先として不適切なものはどれか。",
    choices:["消防署","海上保安庁","地方自治体","マリーナ"]},
  answer:0,
  hint:{en:"The fire department has no role in boat disposal — try FRP boat recycling programs, your municipality, the Coast Guard, or your marina.",
    jp:"消防署は船の処分に関与しない。FRP船リサイクル制度や自治体、海上保安庁、マリーナに相談する。"}
},
{
  id:"g07", category:"general",
  en:{q:"Of the following descriptions about what the skipper should keep in mind with regard to fellow passengers, which one is INAPPROPRIATE?",
    choices:[
      "To make sure that fellow passengers do not jump on or off the boat when they board or disembark",
      "To let fellow passengers wear life jackets after sea conditions have worsened",
      "To instruct fellow passengers to keep a low posture during navigation for safety",
      "To tell fellow passengers not to lean out of the boat so as to prevent them from falling overboard"]},
  jp:{q:"同乗者への配慮として不適切なものはどれか。",
    choices:[
      "乗り降りの際に飛び乗り・飛び降りをしないよう徹底する",
      "海が荒れてきてから同乗者に救命胴衣を着用させる",
      "安全のため航行中は同乗者に低い姿勢を保たせる",
      "転落防止のため身を乗り出さないよう伝える"]},
  answer:1,
  hint:{en:"Life jackets must be worn from the start of the voyage — not only after conditions get rough.",
    jp:"救命胴衣は出航前から常時着用させるべきで、荒れてから着用させるのでは遅い。"}
},
{
  id:"g08", category:"general",
  en:{q:"Which of the following is INAPPROPRIATE as an action to take if an accident occurs in a boat?",
    choices:[
      "To check the damage and judge whether the boat can navigate on its own",
      "To try not to send a distress signal unduly, even if the boat needs rescue",
      "To judge whether to report the accident to the Japan Coast Guard or police depending on where it occurred",
      "To provide as much rescue and cooperation as possible upon witnessing another boat suffering an accident"]},
  jp:{q:"事故発生時の行動として不適切なものはどれか。",
    choices:[
      "損傷を確認し、自力航行が可能か判断する",
      "救助が必要な状況でも、むやみに遭難信号を発しないようにする",
      "事故発生場所に応じて海上保安庁や警察へ通報するか判断する",
      "他船の事故を目撃した場合、できる限り救助・協力する"]},
  answer:1,
  hint:{en:"If rescue is truly needed, send a distress signal without hesitation — delaying it out of caution is dangerous.",
    jp:"救助が本当に必要な場合は、ためらわず遭難信号を発信すべきである。"}
},
{
  id:"g09", category:"general",
  en:{q:"Which of the following does NOT fall into the category of \"reckless navigation\" prohibited by the rules to be observed by the skipper of a boat?",
    choices:["Stopping suddenly upon spotting a swimmer","Making a sharp turn near a swimmer","Zigzagging near a swimmer","Navigating at high speed around a swimmer"]},
  jp:{q:"操縦者が守るべき規則で禁止される「危険操縦」に該当しないものはどれか。",
    choices:["遊泳者を見つけて急停止すること","遊泳者の近くで急旋回すること","遊泳者の近くでジグザグ航行すること","遊泳者の周りを高速で航行すること"]},
  answer:0,
  hint:{en:"Stopping suddenly to avoid a swimmer is a safety response, not reckless navigation — the other three needlessly endanger swimmers.",
    jp:"急停止は遊泳者を守るための行動であり危険操縦ではない。他の3つは遊泳者を危険にさらす行為。"}
},
{
  id:"g10", category:"general",
  en:{q:"Of the following descriptions about the handling of the permit of boat's operator, which one is WRONG?",
    choices:[
      "The permit of boat's operator must not be lent or transferred to his/her own family.",
      "When boarding a boat as the skipper, you must keep the permit of boat's operator on the boat.",
      "When your name has changed, you must apply for the correction of the permit of boat's operator.",
      "When the permit of boat's operator expires after its 10-year validity period, you must return it to the government."]},
  jp:{q:"操縦免許証の取り扱いに関する記述のうち、誤っているものはどれか。",
    choices:[
      "操縦免許証は家族であっても貸し借りしてはならない。",
      "船長として乗船するときは、操縦免許証を船に備えなければならない。",
      "氏名が変わったときは、記載事項の訂正を申請しなければならない。",
      "有効期間(5年)が切れたときは、国に返納しなければならない。"]},
  answer:3,
  hint:{en:"An expired license simply becomes invalid — there is no requirement to physically return it to the government; you renew it instead.",
    jp:"免許の有効期間が切れても返納義務はなく、更新手続きを行えばよい。"}
},
{
  id:"g11", category:"general",
  en:{q:"Which of the following handles paperwork related to the registration of a boat?",
    choices:["Prefectural office","Japan Craft Inspection Organization (JCI)","Marine equipment manufacturer","District Transport Bureau of the Ministry of Land, Infrastructure, Transport and Tourism"]},
  jp:{q:"小型船舶の登録に関する事務を扱うのはどこか。",
    choices:["都道府県庁","日本小型船舶検査機構(JCI)","舟艇メーカー","地方運輸局"]},
  answer:1,
  hint:{en:"Small vessel registration is handled through the Japan Craft Inspection Organization (JCI), acting as the registration agency.",
    jp:"小型船舶の登録事務は日本小型船舶検査機構(JCI)が窓口となっている。"}
},
{
  id:"g12", category:"general",
  en:{q:"Of the following descriptions about environmental consciousness, which one is INAPPROPRIATE?",
    choices:[
      "Bilge water containing oil or oil waste should not be dumped because it may greatly affect fishery.",
      "Litter and filthy matter should not be dumped because they may contaminate shores and beaches.",
      "Leftovers and baits should not be dumped because they may disrupt the living environment of creatures.",
      "Objects other than those that sink to the sea floor should not be dumped, implying that objects which do sink may be dumped."]},
  jp:{q:"環境への配慮に関する記述のうち、不適切なものはどれか。",
    choices:[
      "油やビルジを含む水は漁業に影響するため排出してはならない。",
      "ゴミや汚物は海岸を汚すため捨ててはならない。",
      "残飯や餌は生物の生活環境を乱すため捨ててはならない。",
      "沈むもの以外は捨ててはならない、つまり沈むものなら捨ててもよい。"]},
  answer:3,
  hint:{en:"Nothing should ever be dumped overboard, sinking or not — the idea that sinking objects are acceptable to dump is false.",
    jp:"沈む・沈まないに関わらず、いかなるものも海に捨ててはならない。"}
},

{
  id:"g13", category:"general",
  en:{q:"Of the following descriptions about what you should keep in mind when navigating a boat, which one is APPROPRIATE?",
    choices:[
      "Even if you feel anxious about the weather while navigating, you should not hesitate to continue navigating.",
      "You may navigate at a higher speed as long as you can ensure your own safety.",
      "You do not need a means of communication with the shore when you navigate near a coast.",
      "Sunlight reflecting off the water surface may make it difficult to observe the water surface conditions."]},
  jp:{q:"操船時の心得として適切なものはどれか。",
    choices:[
      "天候に不安を感じても、航行をためらわず続けるべきである。",
      "自分の安全さえ確保できれば高速で航行してよい。",
      "沿岸を航行する場合、陸上との通信手段は不要である。",
      "水面反射する太陽光により、水面の状況把握が困難になることがある。"]},
  answer:3,
  hint:{en:"Glare from sunlight reflecting off the water is a real hazard to observation — always keep communication means on board, too.",
    jp:"太陽光の水面反射はまぶしく水面監視の妨げになる。陸との連絡手段も常に確保すること。"}
},
{
  id:"g14", category:"general",
  en:{q:"Of the following descriptions about what the skipper should know about large vessels, which one is INAPPROPRIATE?",
    choices:[
      "When navigating in front of the bow of a large vessel, if its bridge cannot be seen from your boat, consider that your boat is in the vessel's dead angle.",
      "Since a large vessel has high-performance nautical instruments, you should assume it will detect the danger of collision before your boat does and give way.",
      "If your boat is in the shadow of another ship, consider that your boat may have disappeared off the radar of the large vessel.",
      "When it is windy and waves are heavy, consider that the crew of a large vessel may not notice your boat among the waves."]},
  jp:{q:"大型船に関して知っておくべきこととして不適切なものはどれか。",
    choices:[
      "大型船の船首前方を航行する際、ブリッジから自船が見えないなら死角に入っていると考える。",
      "大型船は高性能な航海計器を積んでいるので、自船より先に衝突の危険を察知し避けてくれると考えてよい。",
      "他船の陰に隠れているとき、自船がレーダーから消えている可能性を考える。",
      "風が強く波が高いときは、大型船の乗組員が波間の自船に気付いていない可能性を考える。"]},
  answer:1,
  hint:{en:"Never assume a large vessel will detect and avoid you — huge blind spots and long stopping distances mean small boats must actively keep clear.",
    jp:"大型船が自船を発見して避けてくれるという思い込みは危険。死角や制動距離を踏まえ小型船側が積極的に避けるべき。"}
},
{
  id:"g15", category:"general",
  en:{q:"With regard to fishing equipment such as a set net, which of the following descriptions about what you should keep in mind is APPROPRIATE?",
    choices:[
      "You can navigate at high speed between the buoys of the net extending toward the shore.",
      "You can find out where fishing equipment is installed by contacting the local fisheries cooperative, marina, etc.",
      "When fishing within a set net area, you should just be careful about the net and anchor ropes.",
      "When mooring to buoys, you should fasten ropes to multiple buoys of the fishing equipment."]},
  jp:{q:"定置網などの漁具に関して注意すべきこととして適切なものはどれか。",
    choices:[
      "陸に向かって延びる網のブイの間なら高速で航行してもよい。",
      "地元の漁協やマリーナなどに問い合わせれば漁具の設置場所が分かる。",
      "定置網の区域内で釣りをする場合は、網や錨綱に注意すればよい。",
      "係留する際は、漁具の複数のブイにロープを結んでよい。"]},
  answer:1,
  hint:{en:"Ask the local fisheries cooperative or marina beforehand — never navigate through or moor to fishing gear.",
    jp:"事前に漁協やマリーナへ確認するのが基本。漁具の中を航行したり係留したりしてはならない。"}
},
{
  id:"g16", category:"general",
  en:{q:"Of the following combinations of a marine accident involving a pleasure boat and its major cause, which one is CORRECT?",
    choices:[
      "Loss of control (Engine failure) --- Insufficient attention to weather and sea conditions",
      "Collision --- Poor lookout",
      "Capsizing --- Failure to check the boat position",
      "Grounding --- Improper boat handling"]},
  jp:{q:"プレジャーボートの海難事故とその主な原因の組み合わせとして正しいものはどれか。",
    choices:[
      "運転不能(機関故障)---気象・海象への注意不足",
      "衝突---見張り不十分",
      "転覆---船位確認不足",
      "乗り揚げ---不適切な操船"]},
  answer:1,
  hint:{en:"Collisions are overwhelmingly caused by poor lookout — the other pairings mismatch cause and accident type.",
    jp:"衝突事故の主因は見張り不十分。他の組み合わせは原因と事故の対応が誤り。"}
},
{
  id:"g17", category:"general",
  en:{q:"The following statements (A) and (B) describe the responsibilities of the skipper of a boat. Judge whether they are correct or wrong.\n(A) The skipper is not subject to civil liability for an accident caused by a fellow passenger.\n(B) The skipper may be held criminally liable for an accident that causes casualties.",
    choices:["Only (A) is correct.","Only (B) is correct.","Both are correct.","Both are wrong."]},
  jp:{q:"船長の責任に関する次の(A)(B)の正誤を判断せよ。\n(A) 同乗者が原因の事故について船長は民事責任を負わない。\n(B) 死傷者が出た事故について船長が刑事責任を問われることがある。",
    choices:["(A)のみ正しい","(B)のみ正しい","両方正しい","両方誤り"]},
  answer:1,
  hint:{en:"The skipper bears overall safety responsibility and can face both civil and criminal liability, even for a passenger's actions.",
    jp:"船長は船の安全管理責任者であり、同乗者の行為であっても民事・刑事責任を問われ得る。"}
},
{
  id:"g18", category:"general",
  en:{q:"Of the following descriptions about what the skipper should keep in mind, which one is INAPPROPRIATE?",
    choices:[
      "The skipper should navigate within the navigation area consistent with both the permit of boat's operator and the boat that they board.",
      "The skipper should navigate inside a water route even if that water route is busy and has large vessels passing through it.",
      "The skipper should moor at a location for which they have a mooring contract or permission, and should not moor illegally.",
      "When leaving or entering port early in the morning or at night, the skipper should be careful not to cause a nuisance to nearby residents."]},
  jp:{q:"操縦者の心得として不適切なものはどれか。",
    choices:[
      "免許の種類と乗船する船の双方に適合した水域で航行すべきである。",
      "大型船が行き交う混雑した航路内であっても、その航路内を航行すべきである。",
      "係留契約や許可を得た場所に係留し、無断係留はしないべきである。",
      "早朝・夜間の出入港時は近隣住民に迷惑をかけないよう注意すべきである。"]},
  answer:1,
  hint:{en:"Small boats should avoid busy shipping lanes used by large vessels whenever possible, not deliberately navigate inside them.",
    jp:"大型船が行き交う航路内は、可能な限り避けて航行すべきである。"}
},
{
  id:"g19", category:"general",
  en:{q:"Of the following descriptions about what you should keep in mind when creating a navigation plan, which one is INAPPROPRIATE?",
    choices:[
      "Fuel consumption is not always constant and changes depending on the conditions of the water area.",
      "It is necessary to look for a shelter port and facilities in advance that can be used in case of bad weather.",
      "When multiple vessels navigate together, each vessel varies in performance, such as speed and cruising distance.",
      "It is not necessary to conduct a prior study using a nautical chart or other material if you are familiar with the water area."]},
  jp:{q:"航海計画作成時の心得として不適切なものはどれか。",
    choices:[
      "燃料消費量は一定ではなく、水域の状況により変化する。",
      "荒天時に利用できる避難港や施設を事前に調べておく必要がある。",
      "複数隻で航行する場合、船ごとに速力や航続距離などの性能が異なる。",
      "水域に慣れていれば海図等での事前調査は不要である。"]},
  answer:3,
  hint:{en:"Even familiar waters change (tides, hazards, seasonal conditions) — always study the chart beforehand regardless of experience.",
    jp:"慣れた水域でも潮や障害物の状況は変化するため、事前の海図調査は常に必要である。"}
},
{
  id:"g20", category:"general",
  en:{q:"Which of the following is INAPPROPRIATE as an action to take if an accident occurs at sea?",
    choices:[
      "If you are in need of rescue, you should send a distress signal to ask nearby vessels for help.",
      "When asking for help, you should give the rescuer accurate information about where your vessel is and how the accident occurred.",
      "If you fall overboard, you should take off your clothes for more freedom of movement and swim toward the shore with all of your energy.",
      "If you spot the accident of another vessel, you should go to its rescue unless your own vessel is in danger."]},
  jp:{q:"海上で事故が発生した場合の行動として不適切なものはどれか。",
    choices:[
      "救助が必要な場合、遭難信号を発して近くの船に助けを求める。",
      "救助を求める際は、自船の位置や事故の状況を正確に伝える。",
      "海に落ちた場合は、動きやすいよう衣服を脱ぎ全力で岸まで泳ぐ。",
      "他船の事故を発見した場合、自船に危険が及ばない限り救助に向かう。"]},
  answer:2,
  hint:{en:"Keep your clothes on for buoyancy and warmth, stay calm, and conserve energy while signaling for help — do not exhaust yourself swimming.",
    jp:"衣服は浮力や保温になるため着たままにし、体力を温存して救助を待つのが基本。"}
},
{
  id:"g21", category:"general",
  en:{q:"Which of the following is NOT set forth as a rule to be observed by the skipper of a boat? (Law for Boat's Operators)",
    choices:[
      "The skipper must get enough sleep and maintain sufficient health management before boarding.",
      "The skipper must collect information about the weather, water channel, etc. before departure.",
      "The skipper must check the amount of fuel, life-saving equipment, etc. before departure.",
      "The skipper must take every necessary measure to save human lives in case of an accident."]},
  jp:{q:"小型船舶操縦者法で定める操縦者の遵守事項に含まれないものはどれか。",
    choices:[
      "乗船前に十分な睡眠と体調管理を行うこと。",
      "出航前に気象・水路の情報を収集すること。",
      "出航前に燃料や救命設備等を点検すること。",
      "事故の際は人命救助のため必要な措置を講じること。"]},
  answer:0,
  hint:{en:"Weather/route research, pre-departure checks, and rescue duties are all explicitly legislated. Personal health/sleep is good advice but not a specific legal item.",
    jp:"気象情報収集・発航前点検・人命救助は法定事項。睡眠・体調管理は一般的な心構えであり法定の遵守事項ではない。"}
},
{
  id:"g22", category:"general",
  en:{q:"In which of the following cases does the permit of boat's operator become INVALID?",
    choices:[
      "The holder sold their boat to another person.",
      "The holder did not renew their permit before it expired.",
      "The holder moved to live abroad.",
      "The holder changed their name when they got married."]},
  jp:{q:"操縦免許証が無効になるのはどの場合か。",
    choices:[
      "免許保有者が船を他人に売却した場合",
      "免許保有者が有効期間内に更新をしなかった場合",
      "免許保有者が海外に移住した場合",
      "免許保有者が結婚して姓が変わった場合"]},
  answer:1,
  hint:{en:"The license is personal, not tied to a specific boat — it becomes invalid only when it expires without renewal.",
    jp:"免許は人に対するもので船とは無関係。更新を怠り有効期間が切れると無効になる。"}
},
{
  id:"g23", category:"general",
  en:{q:"Which of the following refers to the act of registration to be performed when the boat owner changes as the boat is sold or inherited?",
    choices:["Initial Registration","Transfer of Ownership","Registration Change","Cancellation of Registration"]},
  jp:{q:"売買や相続で船の所有者が変わったときに行う登録の種類はどれか。",
    choices:["新規登録","移転登録","変更登録","抹消登録"]},
  answer:1,
  hint:{en:"A change of owner is recorded through a \"Transfer of Ownership\" (移転登録) registration.",
    jp:"所有者の変更は「移転登録」で手続きする。"}
},
{
  id:"g24", category:"general",
  en:{q:"Of the following descriptions about environmental consciousness, which one is INAPPROPRIATE?",
    choices:[
      "When replenishing fuel or lubricating oil, prepare an oil adsorbent material, etc. ready just in case.",
      "Leftovers and baits should be dumped into the sea because they may be a valuable source of nutrition for marine life.",
      "Litter generated during navigation should be kept on board and taken home for disposal ashore.",
      "Dumping plastic litter into the sea has a negative impact on the marine ecosystem."]},
  jp:{q:"環境への配慮に関する記述のうち、不適切なものはどれか。",
    choices:[
      "給油・給油時には万一に備え油吸着材を用意しておく。",
      "残飯や餌は海洋生物の貴重な栄養源になるので海に捨ててよい。",
      "航行中に出たゴミは船内に保管し、持ち帰って陸上で処分する。",
      "プラスチックごみの投棄は海洋生態系に悪影響を及ぼす。"]},
  answer:1,
  hint:{en:"Food waste must never be dumped overboard — it still pollutes and disrupts marine habitats.",
    jp:"残飯や餌であっても投棄は禁止。生活環境を乱す原因になる。"}
},

/* ============ STEERING AND SAILING RULES (rules) ============ */
{
  id:"r01", category:"rules",
  en:{q:"Power-driven vessel A sees power-driven vessel B approaching nearly bow-to-bow with a risk of collision. Which navigation rule applies? (Law for Preventing Collisions at Sea)",
    choices:[
      "To alter course to port greatly and give a maneuvering signal indicating a port turn",
      "To alter course to starboard so as to pass on the port side of vessel B",
      "To repeat a short blast on the whistle to warn vessel B",
      "To keep the course and speed while observing the movement of vessel B"]},
  jp:{q:"動力船Aが、ほぼ正面から接近する動力船Bと衝突のおそれがある場合の航法として正しいものはどれか。(海上衝突予防法)",
    choices:[
      "大きく左転し、左転の操船信号を行う。",
      "右転し、B船を左舷側に見てかわす。",
      "短音を繰り返し鳴らしB船に警告する。",
      "B船の動静を見ながら針路・速力を保つ。"]},
  diagram:{boats:[{x:60,y:135,angle:0,label:"A",type:"power"},{x:140,y:35,angle:180,label:"B",type:"power"}]},
  answer:1,
  hint:{en:"Head-on situation: both vessels must turn to STARBOARD so they pass port side to port side (Rule 14).",
    jp:"正面(行き会い)の状況では、両船とも右舷に転じてお互いを左舷に見て航過するのが原則(規則14条)。"}
},
{
  id:"r02", category:"rules",
  en:{q:"Of the following statements concerning the navigation rule of the overtaking vessel, which one is WRONG?",
    choices:[
      "A vessel overtaking any other vessel must keep out of the way of the vessel being overtaken.",
      "A vessel being overtaken by any other vessel must keep its current course and speed.",
      "At night, a vessel approaching from a position where the SIDELIGHTS of the vessel ahead can be seen must be deemed an overtaking vessel.",
      "When the own vessel cannot confirm whether it is an overtaking vessel, it must be deemed to be an overtaking vessel."]},
  jp:{q:"追越し船の航法に関する記述のうち、誤っているものはどれか。",
    choices:[
      "追越し船は、追い越される船の進路を避けなければならない。",
      "追い越される船は、針路・速力を保たなければならない。",
      "夜間、前方の船の舷灯が見える位置から接近する船は追越し船とみなされる。",
      "自船が追越し船かどうか確認できないときは、追越し船とみなさなければならない。"]},
  answer:2,
  hint:{en:"A vessel is deemed overtaking only if it can see ONLY the other vessel's sternlight — seeing the sidelights means it is not overtaking.",
    jp:"追越し船とみなされるのは船尾灯のみが見える位置から接近する場合。舷灯が見える場合は追越しにはあたらない。"}
},
{
  id:"r03", category:"rules",
  en:{q:"Two power-driven vessels underway cross each other's course with a risk of collision. Which figure shows an action that vessel A MUST NOT take unless absolutely necessary, when it becomes clear the give-way vessel is not taking appropriate action?",
    choices:["Alter course to starboard","Operate astern propulsion","Alter course to port","Stop the engine"]},
  jp:{q:"2隻の動力船が横切り、衝突のおそれがある場合、避航船が適切な動作をとらないことが明らかになったときでも、保持船Aが絶対に必要な場合を除きとってはならない行動はどれか。",
    choices:["右転する","後進をかける","左転する","機関を停止する"]},
  answer:2,
  hint:{en:"The stand-on vessel must never turn to PORT for a vessel on her own port side unless it becomes unavoidable (Rule 17).",
    jp:"保持船は、絶対に必要な場合を除き、自船の左舷側にある船のために左転してはならない(規則17条)。"}
},
{
  id:"r04", category:"rules",
  en:{q:"Which of the following is CORRECT about what you should keep in mind when taking action to avoid collision?",
    choices:[
      "The give-way action must be taken only after the vessel gets sufficiently close to the other vessel.",
      "The speed must be altered gradually in small increments.",
      "The course must be altered in small steps of angle.",
      "A sufficient distance must be kept from the other vessel."]},
  jp:{q:"衝突を避けるための動作に関して正しいものはどれか。",
    choices:[
      "避航動作は相手船に十分接近してからとればよい。",
      "速力は少しずつ小刻みに変更する。",
      "針路は小刻みに変更する。",
      "他船との間に十分な距離を保つ。"]},
  answer:3,
  hint:{en:"Actions must be taken early, and be large enough to be readily apparent to the other vessel, while keeping a safe distance.",
    jp:"避航動作は早期に、かつ相手にはっきり分かる大幅な変更で行い、十分な距離を保つ必要がある。"}
},
{
  id:"r05", category:"rules",
  en:{q:"There is a risk that power-driven vessel A and a vessel engaged in fishing (B) may collide, as shown in the figure. Which navigation rule applies?",
    choices:[
      "Vessel A must keep its course and speed, and vessel B must give way to vessel A.",
      "Vessel B must keep its course and speed, and vessel A must give way to vessel B.",
      "Vessels A and B must each alter course to starboard to give way to the other vessel.",
      "The vessel navigating at higher speed must give way to the other."]},
  jp:{q:"動力船Aと漁ろうに従事している船舶Bが衝突のおそれがある場合の航法として正しいものはどれか。",
    choices:[
      "A船が針路・速力を保ち、B船がA船を避ける。",
      "B船が針路・速力を保ち、A船がB船を避ける。",
      "A・B船とも右転して互いに避ける。",
      "速力の速い方の船が避ける。"]},
  diagram:{boats:[{x:60,y:130,angle:20,label:"A",type:"power"},{x:150,y:120,angle:250,label:"B",type:"fishing"}],mark:{x:100,y:95}},
  answer:1,
  hint:{en:"A vessel engaged in fishing has right of way over an ordinary power-driven vessel (Rule 18) — A must give way to B.",
    jp:"漁ろうに従事している船舶は動力船に対して優先権があり(規則18条)、A船はB船を避けなければならない。"}
},
{
  id:"r06", category:"rules",
  en:{q:"Which of the following is NOT specified as a factor to take into account when determining a safe speed? (Law for Preventing Collisions at Sea)",
    choices:["State of visibility","Traffic density","Own vessel's maneuverability","Other vessel's speed"]},
  jp:{q:"安全な速力を決定する際に考慮すべき要素として定められていないものはどれか。",
    choices:["視界の状態","交通の輻輳(ふくそう)状況","自船の操縦性能","他船の速力"]},
  answer:3,
  hint:{en:"Rule 6 lists visibility, traffic density, maneuverability, background lights, weather/sea state, draft vs. depth, and radar — not \"the other vessel's speed\" specifically.",
    jp:"規則6条の要素は視界・輻輳状況・操縦性能・背景光・気象海象・喫水と水深の関係・レーダー性能等で、「他船の速力」単独は含まれない。"}
},
{
  id:"r07", category:"rules",
  en:{q:"When vessel A is to overtake vessel B in a narrow channel but cannot overtake safely without vessel B's cooperation, how must vessel A indicate its intention to overtake?",
    choices:["To give the prescribed whistle signal","To give the prescribed light signal","To put up the prescribed day shape","To put up the prescribed international code flag"]},
  jp:{q:"狭い水道で、B船の協力なしには安全に追い越せない場合、A船はB船に追越しの意思をどう伝えるべきか。",
    choices:["定められた汽笛信号を行う","定められた発光信号を行う","定められた形象物を掲げる","定められた国際信号旗を掲げる"]},
  answer:0,
  hint:{en:"The intention to overtake in a narrow channel must be signaled with the prescribed WHISTLE (sound) signal.",
    jp:"狭い水道での追越しの意思表示は、定められた汽笛信号によって行う。"}
},
{
  id:"r08", category:"rules",
  en:{q:"Of the following combinations of a type of legally required light and its color, which one is WRONG?",
    choices:["Masthead light --- Yellow","Starboard sidelight --- Green","Port sidelight --- Red","Sternlight --- White"]},
  jp:{q:"灯火の種類と色の組み合わせのうち、誤っているものはどれか。",
    choices:["マスト灯 --- 黄色","右舷灯 --- 緑色","左舷灯 --- 赤色","船尾灯 --- 白色"]},
  answer:0,
  hint:{en:"The masthead light is WHITE, not yellow — port=red, starboard=green, stern=white are correct.",
    jp:"マスト灯は白色。左舷灯=赤、右舷灯=緑、船尾灯=白が正しい組み合わせ。"}
},
{
  id:"r09", category:"rules",
  en:{q:"Of the following combinations of a shape to be exhibited by a vessel during the day and the type of vessel exhibiting it, which one is CORRECT?",
    choices:["A single black ball --- Vessel at anchor","Two diamonds with a ball between them --- Vessel engaged in fishing","A single cone (point down) --- Vessel engaged in a towing operation","A single diamond --- Vessel not under command"]},
  jp:{q:"昼間に掲げる形象物と船舶の種類の組み合わせとして正しいものはどれか。",
    choices:["黒色球形1個 --- 錨泊船","ひし形2個の間に球形 --- 漁ろうに従事する船舶","円すい形1個(頂点下向き) --- 引き船作業中の船舶","ひし形1個 --- 運転不自由船"]},
  answer:0,
  hint:{en:"A single black ball means \"at anchor.\" Fishing uses two cones apex-to-apex, long tows use a diamond, and not-under-command uses two black balls.",
    jp:"黒色球形1個は錨泊船。漁ろう従事船は頂点を合わせた円すい形2個、長い引き船は ひし形1個、運転不自由船は球形2個が正しい。"}
},
{
  id:"r10", category:"rules",
  en:{q:"Which of the following vessels must give \"one prolonged blast at intervals not exceeding 2 minutes\" in a water area where visibility is restricted?",
    choices:["Vessel engaged in fishing","Anchored vessel restricted in her ability to maneuver","Power-driven vessel underway having speed through the water","Vessel not under command"]},
  jp:{q:"視界制限状態にある水域で「2分を超えない間隔での長音1回」を行う船舶はどれか。",
    choices:["漁ろうに従事している船舶","錨泊中の操縦性能制限船","対水速力のある航行中の動力船","運転不自由船"]},
  answer:2,
  hint:{en:"A power-driven vessel underway and making way sounds one prolonged blast every 2 minutes (Rule 35a); other vessel types use different signal patterns.",
    jp:"航行中で対水速力のある動力船は2分以内ごとに長音1回を吹鳴する(規則35条(a))。他の船種は異なる信号を使う。"}
},
{
  id:"r11", category:"rules",
  en:{q:"Which of the following is WRONG as a navigation rule to be observed with respect to a passage within a port? (Port Regulations Law)",
    choices:[
      "A vessel navigating in a passage must give way to another vessel entering the passage from outside.",
      "When a vessel meets another vessel head-on in a passage, it must navigate on the starboard side.",
      "Vessels must not navigate in parallel with one another in a passage.",
      "A vessel must not overtake another vessel in a passage."]},
  jp:{q:"港内の航路における航法として誤っているものはどれか。(港則法)",
    choices:[
      "航路内を航行する船舶は、航路の外から航路に入ろうとする船舶の進路を避けなければならない。",
      "航路内で他の船舶と行き会うときは、右side(右側)を航行しなければならない。",
      "航路内では並列して航行してはならない。",
      "航路内では他の船舶を追い越してはならない。"]},
  answer:0,
  hint:{en:"It is actually the vessel ENTERING the passage from outside that must give way to vessels already navigating within it — not the other way around.",
    jp:"実際は、航路の外から入ろうとする船舶の方が、既に航路内を航行している船舶の進路を避けなければならない。"}
},
{
  id:"r12", category:"rules",
  en:{q:"(NOTE: \"Launch, etc.\" means a power-driven vessel under 20 gross tonnage, a barge, a boat, or a vessel operated mainly by oars/paddles.) Of the following statements concerning a \"Launch, etc.\", which one is CORRECT? (Port Regulations Law)",
    choices:[
      "A Launch, etc. may berth anywhere within a port.",
      "A Launch, etc. may be moored to a mooring buoy within a port at any time.",
      "A Launch, etc. is not required to navigate a passage when entering or leaving a port.",
      "A Launch, etc. is not required to give way to any other vessel that is not a Launch, etc. within a port."]},
  jp:{q:"(注:「汽艇等」とは総トン数20トン未満の動力船、はしけ、ボート、主にオールで運転する船をいう。) 汽艇等に関する記述のうち、正しいものはどれか。(港則法)",
    choices:[
      "汽艇等は港内のどこにでも係留してよい。",
      "汽艇等は港内の係留浮標にいつでも係留してよい。",
      "汽艇等は港の出入りに際して航路を航行する義務はない。",
      "汽艇等は港内で汽艇等以外の船舶に進路を譲る義務はない。"]},
  answer:2,
  hint:{en:"Small \"Launch, etc.\" vessels are exempt from the obligation to use the designated fairway (passage) when entering/leaving port.",
    jp:"汽艇等は、出入港の際に航路を航行する義務が免除されている。"}
},
{
  id:"r13", category:"rules",
  en:{q:"Of the following combinations of a sea area subject to the Maritime Traffic Safety Law and its traffic route, which one is WRONG?",
    choices:["Tokyo Bay --- Uraga Suido Traffic Route","Ise Bay --- Irago Suido Traffic Route","Seto Inland Sea --- Naka-no-Se Traffic Route","Seto Inland Sea --- Mizushima Traffic Route"]},
  jp:{q:"海上交通安全法の適用海域と航路の組み合わせのうち、誤っているものはどれか。",
    choices:["東京湾 --- 浦賀水道航路","伊勢湾 --- 伊良湖水道航路","瀬戸内海 --- 来島海峡航路","瀬戸内海 --- 水島航路"]},
  answer:3,
  hint:{en:"\"Mizushima\" is a port area, not one of the law's designated traffic routes in the Seto Inland Sea (which include Bisan Seto, Kurushima Kaikyo, Naka-no-Se, etc.).",
    jp:"水島は港であり、海上交通安全法上の指定航路ではない(瀬戸内海の航路は備讃瀬戸・来島海峡・中ノ瀬等)。"}
},
{
  id:"r14", category:"rules",
  en:{q:"Of the following statements concerning traffic rules to be applied in rivers and lakes, which one is WRONG?",
    choices:[
      "In some rivers, the navigation method for vessels is prescribed by the Ministry of Land, Infrastructure, Transport and Tourism pursuant to the River Law.",
      "In some rivers, the navigation of vessels is restricted by a local municipality pursuant to an ordinance.",
      "There are local municipalities that prohibit dangerous acts involving a motorboat or other vessel pursuant to an ordinance.",
      "No penalty such as a fine is imposed even if the traffic rules prescribed in an ordinance are violated."]},
  jp:{q:"河川・湖沼における交通ルールに関する記述のうち、誤っているものはどれか。",
    choices:[
      "河川法に基づき国土交通省が航行方法を定めている河川もある。",
      "条例により地方自治体が船の航行を制限している河川もある。",
      "条例によりモーターボート等の危険行為を禁止している自治体もある。",
      "条例で定めた交通ルールに違反しても罰則(罰金等)は科されない。"]},
  answer:3,
  hint:{en:"Ordinance violations typically DO carry penalties such as fines — this statement is false.",
    jp:"条例違反には通常、罰金等の罰則が科される。"}
},
{
  id:"r15", category:"rules",
  en:{q:"When two power-driven vessels underway at night see the masthead light and BOTH the starboard and port sidelights of each other ahead, and there is a risk of collision, what rule must be observed?",
    choices:["Each vessel must alter course to starboard to give way to the other vessel.","Each vessel must alter course to port to give way to the other vessel.","The vessel navigating at higher speed must give way to the other.","The vessel navigating at lower speed must give way to the other."]},
  jp:{q:"夜間、2隻の動力船が互いに相手のマスト灯と両舷灯を前方に見て衝突のおそれがある場合の航法はどれか。",
    choices:["互いに右転して避ける。","互いに左転して避ける。","速力の速い方が避ける。","速力の遅い方が避ける。"]},
  diagram:{boats:[{x:60,y:135,angle:0,label:"A",type:"power"},{x:140,y:35,angle:180,label:"B",type:"power"}]},
  answer:0,
  hint:{en:"Seeing both sidelights ahead means a head-on meeting — both vessels alter course to starboard (Rule 14).",
    jp:"両舷灯が前方に見えるのは正面から行き会う状況で、双方とも右転するのが原則(規則14条)。"}
},
{
  id:"r16", category:"rules",
  en:{q:"Vessel A (fishing vessel), while overtaking sailing vessel B, must observe which navigation rule?",
    choices:["Vessel A must navigate while keeping its course.","Vessel B must alter course to leeward.","Vessel A must give way to vessel B.","Vessel B must navigate with its sail shortened."]},
  jp:{q:"漁ろうに従事する船舶Aが帆船Bを追い越す場合の航法として正しいものはどれか。",
    choices:["A船は針路を保ったまま航行する。","B船は風下側へ針路を変える。","A船がB船を避けなければならない。","B船は帆を縮めて航行する。"]},
  answer:2,
  hint:{en:"The overtaking rule always overrides other priority rules — the overtaking vessel must keep clear, even of a normally lower-priority vessel.",
    jp:"追越しの規定は他の優先順位規定に優先する。追い越す船は常に避航しなければならない。"}
},
{
  id:"r17", category:"rules",
  en:{q:"There is a risk that two power-driven vessels underway may collide, as shown: vessel B is approaching from vessel A's starboard side. Which of the following is correct as the navigation rule to be observed by vessel A?",
    choices:["Vessel A must stop the engine and wait for vessel B to pass.","Vessel A must alter course to starboard and give a maneuvering signal indicating a starboard turn.","Vessel A must alter course to port and give a maneuvering signal indicating a port turn.","Vessel A must navigate with due caution while keeping its current course and speed."]},
  jp:{q:"2隻の動力船が図のように衝突のおそれがあり、B船がA船の右舷側から接近している。A船が取るべき航法として正しいものはどれか。",
    choices:["機関を止めてB船の通過を待つ。","右転し、右転の操船信号を行う。","左転し、左転の操船信号を行う。","注意しながら針路・速力を保つ。"]},
  diagram:{boats:[{x:60,y:140,angle:0,label:"A",type:"power"},{x:165,y:60,angle:220,label:"B",type:"power"}],mark:{x:100,y:100}},
  answer:1,
  hint:{en:"In a crossing situation, the vessel that has the other on her own starboard side is the give-way vessel and must turn to starboard.",
    jp:"横切り関係では、相手船を自船の右舷側に見る船が避航船となり、右転しなければならない(規則15条)。"}
},
{
  id:"r18", category:"rules",
  en:{q:"Law for Preventing Collisions at Sea clearly states that the captain and crew are not exempt from liability for failing to take the precautions specified in the law. Which of the following does NOT fall under the stipulated precautions?",
    choices:["Operating the vessel in accordance with proper navigation rules","Meeting the standards for boarding","Displaying lights and shapes","Giving the required signals"]},
  jp:{q:"海上衝突予防法は、法定の注意義務を怠ったことによる責任を船長・乗組員が免れないことを定めている。この注意義務に含まれないものはどれか。",
    choices:["適切な航法に従って操船すること","乗船基準を満たすこと","灯火・形象物を表示すること","必要な信号を行うこと"]},
  answer:1,
  hint:{en:"\"Meeting the standards for boarding\" concerns passenger capacity, not the navigational rules covered by the Collision Regulations liability clause.",
    jp:"「乗船基準を満たす」は定員に関する事項であり、衝突予防法上の航法遵守義務には含まれない。"}
},
{
  id:"r19", category:"rules",
  en:{q:"Of the following conditions, which does NOT fall into the category of \"restricted visibility\"? (Law for Preventing Collisions at Sea)",
    choices:["Fog","Dark night","Mist","Heavy rainstorms"]},
  jp:{q:"次のうち「視界制限状態」に該当しないものはどれか。(海上衝突予防法)",
    choices:["霧","暗夜(闇夜)","もや","強い降雨"]},
  answer:1,
  hint:{en:"\"Restricted visibility\" refers to atmospheric obscuration such as fog, mist, or heavy rain — ordinary darkness at night alone is not included in the legal definition.",
    jp:"視界制限状態は霧・もや・強い降雨等による視界の悪化を指し、単なる夜間の暗さは含まれない。"}
},
{
  id:"r20", category:"rules",
  en:{q:"Which of the following is the shape that a vessel restricted in her ability to maneuver (12m or more in length) must exhibit during the day?",
    choices:["A single black ball","A black ball, a black diamond, and a black ball, shown vertically","Two black balls shown vertically","A single black diamond"]},
  jp:{q:"操縦性能制限船(長さ12m以上)が昼間に掲げるべき形象物はどれか。",
    choices:["黒色球形1個","球形・ひし形・球形を縦に1個ずつ","黒色球形2個を縦に","黒色ひし形1個"]},
  answer:1,
  hint:{en:"Restricted-in-ability-to-maneuver vessels show ball-diamond-ball vertically; a single ball is \"at anchor\" and two balls is \"not under command.\"",
    jp:"操縦性能制限船は球形・ひし形・球形を縦に掲げる。球形1個は錨泊船、球形2個は運転不自由船。"}
},
{
  id:"r21", category:"rules",
  en:{q:"Which sound signal must a vessel less than 12 meters in length give at intervals not exceeding 2 minutes in restricted visibility?",
    choices:["One short blast and two prolonged blasts on the whistle","Four short blasts on the whistle","Three prolonged blasts on the whistle","Some other efficient sound signal"]},
  jp:{q:"長さ12m未満の船舶が視界制限状態で2分を超えない間隔で行うべき音響信号はどれか。",
    choices:["短音1回と長音2回","短音4回","長音3回","その他の有効な音響による信号"]},
  answer:3,
  hint:{en:"A vessel under 12m need not give the standard whistle signals; it must instead make some other efficient sound signal at least every 2 minutes.",
    jp:"長さ12m未満の船舶は所定の吹鳴義務が免除される代わりに、2分を超えない間隔で他の有効な音響信号を行えばよい。"}
},
{
  id:"r22", category:"rules",
  en:{q:"Which of the following is WRONG as a navigation rule to be observed with respect to a passage within a port?",
    choices:[
      "A vessel must not cast anchor within a passage unless absolutely necessary or permitted to do so.",
      "When a vessel meets another vessel head-on in a passage, it must navigate on the starboard side.",
      "When a vessel has a slower vessel ahead of it in a passage, it must overtake that slower vessel.",
      "A vessel must not navigate in parallel with another vessel in a passage."]},
  jp:{q:"港内の航路における航法として誤っているものはどれか。",
    choices:[
      "やむを得ない場合や許可がある場合を除き、航路内で投錨してはならない。",
      "航路内で他船と行き会うときは右側を航行する。",
      "前方に遅い船がいる場合、必ず追い越さなければならない。",
      "航路内で他船と並列して航行してはならない。"]},
  answer:2,
  hint:{en:"Overtaking within a passage is generally PROHIBITED, not mandatory — you must not overtake in a passage.",
    jp:"航路内での追越しは原則として禁止されており、追い越さなければならないというのは誤り。"}
},
{
  id:"r23", category:"rules",
  en:{q:"Which of the following terms fits the blank: \"A vessel that must navigate the traffic routes prescribed in the Maritime Traffic Safety Law has a ( ) or more.\"",
    choices:["capacity of 5 passengers","length of 50 meters","gross tonnage of 50 tons","width of 5 meters"]},
  jp:{q:"「海上交通安全法の航路を航行しなければならない船舶は、( )以上の船舶である。」の空欄に当てはまるものはどれか。",
    choices:["旅客定員5名","長さ50メートル","総トン数50トン","幅5メートル"]},
  answer:1,
  hint:{en:"The Maritime Traffic Safety Law's mandatory traffic-route rule applies to vessels of 50 meters or more in LENGTH.",
    jp:"海上交通安全法の航路航行義務は、長さ50メートル以上の船舶に適用される。"}
},
{
  id:"r24", category:"rules",
  en:{q:"Which of the following river traffic signs means \"No wake\"?",
    choices:[
      "Red frame, black \"N\" with a diagonal slash and upward arrows",
      "Red frame, black double vertical bars with arrows up and down",
      "Red frame, black wavy line with a diagonal slash",
      "Red frame, black circular arrow with a diagonal slash"]},
  jp:{q:"次の河川標識のうち「引き波発生禁止」を意味するものはどれか。",
    choices:[
      "「N」の文字に斜線と上向き矢印",
      "上下矢印を挟む2本の縦棒",
      "波形の線に斜線",
      "円形の矢印に斜線"]},
  answer:2,
  hint:{en:"A wavy line crossed out by a diagonal slash represents \"no wake\" — a wave symbol is the intuitive marker for wake restriction.",
    jp:"波形の記号に斜線を引いた標識が「引き波発生禁止」を表す。"}
},
{
  id:"r25", category:"rules",
  en:{q:"Which of the following is the mark shown in the figure, with two black upward-pointing cone topmarks and black-over-yellow coloring?",
    choices:["North cardinal mark","East cardinal mark","South cardinal mark","West cardinal mark"]},
  jp:{q:"黒色三角(頂点上向き)を2つ重ねた頭標を持ち、上部が黒色、下部が黄色の標識は何を表すか。",
    choices:["北方位標識","東方位標識","南方位標識","西方位標識"]},
  answer:0,
  hint:{en:"Two cones pointing UP (like an arrow to the sky) with black-over-yellow marks the North Cardinal Mark: \"safe water is to the north.\"",
    jp:"頂点が2つとも上を向く円すい形の頭標(黒上・黄下)は北方位標識で、「安全水域は北側」を意味する。"}
},
{
  id:"r26", category:"rules",
  en:{q:"Of the following combinations of the light type of light abbreviation \"Oc R 10s\" and the color of the light, which one is CORRECT?",
    choices:["Single occulting light --- Green","Single flashing light --- Red","Single occulting light --- Red","Single flashing light --- Green"]},
  jp:{q:"灯質記号「Oc R 10s」の光り方と色の組み合わせとして正しいものはどれか。",
    choices:["単閃光 --- 緑","単明暗光 --- 赤","単明暗光 --- 赤","単閃光 --- 緑"]},
  answer:2,
  hint:{en:"\"Oc\" = occulting (mostly lit, brief eclipses), \"R\" = red, \"10s\" = 10-second period — so it is a single occulting RED light.",
    jp:"Oc=明暗光(点灯時間が消灯時間より長い)、R=赤、10s=周期10秒。したがって「単明暗光・赤」が正しい。"}
},

/* ============ OPERATION (operation) ============ */
{
  id:"o01", category:"operation",
  en:{q:"When a planing vessel (deep-V type) at high speed and a displacement vessel moving forward each make a steady turn by turning the rudder to starboard, what state is the hull of each vessel generally in?",
    choices:["The planing vessel tilts to starboard, and the displacement vessel tilts to port.","The planing vessel tilts to port, and the displacement vessel tilts to starboard.","Both vessels tilt to starboard.","Both vessels tilt to port."]},
  jp:{q:"プレーニング艇(高速)と排水量型船がそれぞれ舵を右に切って定常旋回するとき、船体は一般にどのような状態になるか。",
    choices:["プレーニング艇は右へ、排水量型船は左へ傾く。","プレーニング艇は左へ、排水量型船は右へ傾く。","両船とも右へ傾く。","両船とも左へ傾く。"]},
  answer:0,
  hint:{en:"A planing hull banks INTO the turn (like a motorcycle), while a displacement hull heels OUTWARD, away from the turn.",
    jp:"プレーニング艇は旋回の内側(舵を切った方向)へ傾き、排水量型船は逆に外側へ傾く。"}
},
{
  id:"o02", category:"operation",
  en:{q:"Which of the following sediment is most suitable for anchorage?",
    choices:["Rock","Sand","Stone","Coral"]},
  jp:{q:"びょう地(錨泊地)として最も適した底質はどれか。",
    choices:["岩","砂","石","サンゴ"]},
  answer:1,
  hint:{en:"Sand (or mud) gives an anchor good holding power; rock, stone, and coral give poor holding and can damage the anchor or reef.",
    jp:"砂(または泥)は錨の保持力が良い。岩・石・サンゴは保持力が悪く、錨や環境を傷める。"}
},
{
  id:"o03", category:"operation",
  en:{q:"Of the following statements that describe the stability of a boat, which one is INAPPROPRIATE?",
    choices:[
      "The pitching and rolling of a boat become gentler (lighter) when the height of the center of gravity becomes high.",
      "The height of the center of gravity becomes high when all passengers stand up at the same time.",
      "The height of the center of gravity becomes low when heavy cargo is loaded only at a low place.",
      "The height of the center of gravity becomes high when the deck is not well drained and water accumulates."]},
  jp:{q:"船の復原性に関する記述のうち、不適切なものはどれか。",
    choices:[
      "重心の位置が高くなると、ピッチングやローリングは穏やかになる。",
      "乗員全員が同時に立ち上がると重心が高くなる。",
      "重い荷物を低い場所にのみ積むと重心が低くなる。",
      "甲板の排水が悪く水が溜まると重心が高くなる。"]},
  answer:0,
  hint:{en:"A higher center of gravity actually makes rolling SLOWER but LARGER in amplitude — more dangerous, not gentler.",
    jp:"重心が高くなると、動揺の周期はゆっくりになるが振幅は大きくなり、むしろ危険性が増す。"}
},
{
  id:"o04", category:"operation",
  en:{q:"Which of the following is INAPPROPRIATE as an action to take if you have poor visibility due to fog during navigation?",
    choices:["To turn on legally required lights","To head to the shore at full speed","To put more people on the lookout","To stop the vessel and then measure the water depth"]},
  jp:{q:"航行中、霧で視界不良になった場合の行動として不適切なものはどれか。",
    choices:["法定の灯火を点灯する。","全速力で岸へ向かう。","見張り員を増やす。","船を止めて水深を測る。"]},
  answer:1,
  hint:{en:"Never proceed at full speed in fog — reduce speed and proceed with extreme caution.",
    jp:"霧の中で全速力を出すのは大変危険。速力を落とし慎重に航行すべきである。"}
},
{
  id:"o05", category:"operation",
  en:{q:"Of the following descriptions about what you should keep in mind when towing water skis or a wakeboard with a boat, which one is INAPPROPRIATE?",
    choices:[
      "To prevent accidents, water skis or a wakeboard should not be towed in a water area crowded with other vessels or swimmers.",
      "Gesture signs should be determined in advance to ensure communication with the player.",
      "The player is more prone to sway outward when the boat turns at SLOW speed than when turning at HIGH speed.",
      "A person exclusively assigned to look out for the player should be on board."]},
  jp:{q:"水上スキーやウェイクボードを引く際の注意点として不適切なものはどれか。",
    choices:[
      "事故防止のため、混雑した水域では曳航しない。",
      "プレーヤーとの合図をあらかじめ決めておく。",
      "旋回時、低速の方が高速時より外側に大きく振られやすい。",
      "プレーヤーを専属で見張る者を乗せる。"]},
  answer:2,
  hint:{en:"The opposite is true: the player swings out MORE when the boat turns at HIGH speed, due to greater centrifugal force.",
    jp:"実際は逆で、高速で旋回する方が遠心力が大きく、プレーヤーは外側へ大きく振られやすい。"}
},
{
  id:"o06", category:"operation",
  en:{q:"Of the following statements concerning GPS, which one is APPROPRIATE?",
    choices:["GPS is a positioning system that uses artificial satellites.","Current positions can be found only in the Northern Hemisphere of the earth.","Measurement accuracy sharply drops during the daytime, compared to during the nighttime.","The current position cannot be calculated in heavy weather."]},
  jp:{q:"GPSに関する記述のうち、適切なものはどれか。",
    choices:["GPSは人工衛星を利用した測位システムである。","現在位置は北半球でしか求められない。","昼間は夜間に比べ測定精度が著しく低下する。","悪天候では現在位置を計算できない。"]},
  answer:0,
  hint:{en:"GPS works worldwide, day or night, in any weather, because it relies on satellite radio signals, not visibility.",
    jp:"GPSは衛星からの電波を利用するため、昼夜・天候・場所を問わず世界中で使用できる。"}
},
{
  id:"o07", category:"operation",
  en:{q:"The following statements (A) and (B) describe the definition of latitude and longitude. Judge whether they are correct or wrong.\n(A) Latitude represents how far an arbitrary point is from the Equator, up to 90 degrees north and south.\n(B) Longitude represents how far an arbitrary point is from the Prime Meridian, up to 180 degrees east and west.",
    choices:["Only (A) is correct.","Only (B) is correct.","Both are correct.","Both are wrong."]},
  jp:{q:"緯度・経度の定義に関する次の(A)(B)の正誤を判断せよ。\n(A) 緯度は赤道からの角度で、南北それぞれ90度まで表す。\n(B) 経度は本初子午線からの角度で、東西それぞれ180度まで表す。",
    choices:["(A)のみ正しい","(B)のみ正しい","両方正しい","両方誤り"]},
  answer:2,
  hint:{en:"Both definitions are textbook-correct: latitude 0-90°N/S from the Equator, longitude 0-180°E/W from the Prime Meridian.",
    jp:"どちらも教科書通りの正しい定義である。緯度は赤道基準で0～90度、経度は本初子午線基準で0～180度。"}
},
{
  id:"o08", category:"operation",
  en:{q:"Which of the following combinations of the light type of light abbreviation \"Oc\" and its description is CORRECT?",
    choices:[
      "Oc = the light is on for a duration LONGER than the duration of darkness, within one period.",
      "Oc = the light flashes very briefly, with darkness lasting longer than the light within one period.",
      "Oc = the color of the light changes repeatedly without ever going dark.",
      "Oc = the light is on for exactly half of each period, alternating evenly with darkness."]},
  jp:{q:"灯質記号「Oc(明暗光)」の説明として正しいものはどれか。",
    choices:[
      "1周期のうち、点灯時間が消灯時間より長い。",
      "1周期のうち、消灯時間が点灯時間より長く、ごく短く光る。",
      "消灯することなく色が繰り返し変化する。",
      "1周期のうち、点灯と消灯がちょうど半分ずつである。"]},
  answer:0,
  hint:{en:"Occulting (Oc) lights are lit MOST of the time, with brief moments of darkness — the opposite of a flashing (Fl) light.",
    jp:"明暗光(Oc)は点灯時間の方が長く、ごく短い消灯(暗間)が入るのが特徴。閃光(Fl)とは逆。"}
},
{
  id:"o09", category:"operation",
  en:{q:"The following statements (A) and (B) describe a tide table. Judge whether they are correct or wrong.\n(A) A tide table is published by the Japan Coast Guard once every three years.\n(B) The tides of ports other than the standard ports can be identified by correcting the tides of the standard ports.",
    choices:["Only (A) is correct.","Only (B) is correct.","Both are correct.","Both are wrong."]},
  jp:{q:"潮汐表に関する次の(A)(B)の正誤を判断せよ。\n(A) 潮汐表は海上保安庁が3年に一度発行している。\n(B) 標準港以外の港の潮汐は、標準港の潮汐を補正して求められる。",
    choices:["(A)のみ正しい","(B)のみ正しい","両方正しい","両方誤り"]},
  answer:1,
  hint:{en:"Tide tables are published EVERY YEAR, not every three years; (B) correctly describes how non-standard port tides are calculated.",
    jp:"潮汐表は毎年発行される(3年に一度ではない)。(B)の標準港補正による算出方法は正しい。"}
},
{
  id:"o10", category:"operation",
  en:{q:"Which of the following is represented by nautical chart symbol \"M\" (sediment)?",
    choices:["Mud","Stone","Rock","Sand"]},
  jp:{q:"海図の底質記号「M」が表すものはどれか。",
    choices:["泥(Mud)","石(Stone)","岩(Rock)","砂(Sand)"]},
  answer:0,
  hint:{en:"\"M\" stands for Mud. Sand is S, Rock is R, Stone is St.",
    jp:"「M」は泥(Mud)を表す。砂はS、岩はR、石はStで表される。"}
},
{
  id:"o11", category:"operation",
  en:{q:"Which of the following names of a part of the hull fits: \"This is located in the center of the bottom of the hull and runs from bow to stern to maintain the longitudinal strength of the hull.\"",
    choices:["Keel","Frame","Transom","Gunwale"]},
  jp:{q:"「船底中央を船首から船尾まで通り、船体の縦強度を保つ」部材の名称はどれか。",
    choices:["キール(竜骨)","フレーム(肋骨)","トランサム","ガンネル"]},
  answer:0,
  hint:{en:"The keel is the backbone of the hull, running bow to stern along the centerline of the bottom.",
    jp:"キール(竜骨)は船体の背骨にあたる部材で、船底中央を船首から船尾まで通っている。"}
},
{
  id:"o12", category:"operation",
  en:{q:"In which of the following cases is the figure-of-eight knot APPROPRIATE?",
    choices:["When tying an anchor rope to an anchor ring","When preventing a rope from slipping off a pulley block","When tying two ropes of two different types that each have a different thickness","When tying two ropes of two different types that have the same thickness"]},
  jp:{q:"エイトノット(figure-of-eight knot)が適する場面はどれか。",
    choices:["錨綱を錨環に結ぶとき","ロープが滑車から抜けるのを防ぐとき","太さの異なる2本のロープを結ぶとき","太さの同じ2本のロープを結ぶとき"]},
  answer:1,
  hint:{en:"A figure-eight is a stopper knot that keeps a rope's end from slipping through a block or fairlead.",
    jp:"エイトノットはロープの端に作るストッパーノットで、滑車などから抜けるのを防ぐ。"}
},
{
  id:"o13", category:"operation",
  en:{q:"Which is the most appropriate method of tying two ropes of two different types that each have a different thickness?",
    choices:["Clove hitch","Figure-of-eight knot","Half hitch","Double sheet bend"]},
  jp:{q:"太さの異なる2種類のロープを結ぶのに最も適した方法はどれか。",
    choices:["クラブヒッチ","エイトノット","ハーフヒッチ","ダブルシートベンド"]},
  answer:3,
  hint:{en:"A sheet bend (double for very different thicknesses) is specifically designed to join two ropes of different diameters.",
    jp:"シートベンド(太さの差が大きい場合はダブル)は、太さの異なる2本のロープを結ぶのに適した結び方。"}
},
{
  id:"o14", category:"operation",
  en:{q:"The items below are inspected before departure. In which of the following cases is it INAPPROPRIATE for the vessel to depart with the item in the condition described?",
    choices:["The mooring rope is not damaged or frayed.","Heavy cargo is loaded at a low place.","The air vent screw of the fuel tank is closed.","The hatch is closed."]},
  jp:{q:"出航前点検に関して、その状態で出航するのが不適切なものはどれか。",
    choices:["係留ロープに損傷や擦り切れがない。","重い荷物を低い場所に積んでいる。","燃料タンクの空気抜きねじが閉まっている。","ハッチが閉まっている。"]},
  answer:2,
  hint:{en:"The fuel tank's air vent screw must be OPEN before departure to allow proper air flow — leaving it closed can starve the engine of fuel.",
    jp:"燃料タンクの空気抜きねじは出航前に開けておく必要がある。閉じたままだと燃料の流れに支障が出る。"}
},
{
  id:"o15", category:"operation",
  en:{q:"Which of the following is most appropriate as a characteristic of a four-stroke engine when compared to a two-stroke engine of similar displacement?",
    choices:["Fuel efficiency is poorer.","The main body is heavier.","The structure is simpler.","Noise is louder."]},
  jp:{q:"同排気量の2ストロークエンジンと比較した4ストロークエンジンの特徴として適切なものはどれか。",
    choices:["燃費が悪い。","本体が重い。","構造が単純。","騒音が大きい。"]},
  answer:1,
  hint:{en:"Four-stroke engines have more components (valvetrain, etc.), making them heavier, but generally more fuel-efficient and quieter.",
    jp:"4ストロークは弁機構などがあるため部品が多く重くなる。一方、燃費は良く静粛性は高い。"}
},
{
  id:"o16", category:"operation",
  en:{q:"When the battery fluid has naturally decreased, what should the battery be refilled with?",
    choices:["Distilled water","Sulfuric acid","Hydrochloric acid","Alcohol"]},
  jp:{q:"バッテリー液が自然に減少した場合、何を補充すべきか。",
    choices:["蒸留水","硫酸","塩酸","アルコール"]},
  answer:0,
  hint:{en:"Only water evaporates from battery fluid over time — top it up with distilled water, never acid.",
    jp:"自然に減るのは水分のみなので、蒸留水を補充する。酸を追加してはならない。"}
},
{
  id:"o17", category:"operation",
  en:{q:"Which of the following is INAPPROPRIATE as an item to check after starting the engine of a vessel equipped with an inboard-outdrive engine?",
    choices:[
      "Checking that the readings of meters are not abnormal",
      "Checking that the sound of the engine and the vibration of the hull are not abnormal",
      "Putting the drive unit ABOVE the water surface and checking that the exhaust gas color is not abnormal",
      "Checking that the needle of the engine tachometer moves accordingly as the remote-control lever is operated"]},
  jp:{q:"船内外機のエンジン始動後の点検項目として不適切なものはどれか。",
    choices:[
      "各種メーターの表示が異常でないか確認する。",
      "エンジン音や船体の振動に異常がないか確認する。",
      "ドライブユニットを水面より上げて排気の色を確認する。",
      "リモコンレバー操作に応じてタコメーターの針が動くか確認する。"]},
  answer:2,
  hint:{en:"Never lift the drive unit out of the water while the engine is running — the cooling water intake would be exposed, risking overheating damage.",
    jp:"エンジン運転中にドライブユニットを水面上に上げてはならない。冷却水取入口が露出しオーバーヒートの危険がある。"}
},
{
  id:"o18", category:"operation",
  en:{q:"If an unfamiliar noise is heard from the engine during navigation, which of the following is most appropriate as the first action to take?",
    choices:["To stop the engine","To increase the rotation speed of the engine","To maintain the rotation speed of the engine","To decrease the rotation speed of the engine"]},
  jp:{q:"航行中にエンジンから異音がした場合、最初にとるべき行動として適切なものはどれか。",
    choices:["エンジンを停止する。","回転数を上げる。","回転数を維持する。","回転数を下げる。"]},
  answer:0,
  hint:{en:"Stop the engine first to prevent further damage, then investigate the cause of the noise.",
    jp:"まずエンジンを停止して被害の拡大を防ぎ、その後原因を調べる。"}
},
{
  id:"o19", category:"operation",
  en:{q:"Of the following statements concerning the method of cleansing the cooling water system of an outboard engine before storing the boat on land for a long time, which one is APPROPRIATE?",
    choices:[
      "The cooling water system should be cleansed by injecting clear water from the cooling water intake while keeping the engine idling in neutral.",
      "The cooling water system should be cleansed with the remote-control lever put in forward gear while checking the rotation of the propeller.",
      "The cooling water system should be cleansed with the cooling water inspection hole closed so that cooling water is discharged only from the drain outlet.",
      "After the cleansing work, the clear water should be kept inside the engine to remove the remaining salt."]},
  jp:{q:"アウトボードエンジンを長期間陸置き保管する前の冷却水系統の清掃方法として適切なものはどれか。",
    choices:[
      "ニュートラルでアイドリングさせながら、冷却水取入口からきれいな水を注入して洗浄する。",
      "プロペラの回転を確認しながら、リモコンレバーを前進に入れて洗浄する。",
      "冷却水点検口を閉じ、排水口からのみ排水されるようにして洗浄する。",
      "洗浄後、塩分を除去するため真水をエンジン内に残しておく。"]},
  answer:0,
  hint:{en:"Flush with fresh water via the intake (using flush muffs) with the engine idling in NEUTRAL — never run it in gear on land, and always drain fully afterward.",
    jp:"ニュートラルでアイドリングさせながら取入口から真水を注入して洗浄するのが正しい方法。陸上でギアを入れて回してはならない。"}
},
{
  id:"o20", category:"operation",
  en:{q:"Which of the following combinations of a weather symbol (Japanese style) and the weather it represents is CORRECT?",
    choices:["An open circle (○) --- Clear and sunny","A filled circle with dots (rain pattern) --- Rain","A double circle (◎) --- Snow","A circle with an X inside (⊗) --- Fair"]},
  jp:{q:"日本式天気記号と天気の組み合わせとして正しいものはどれか。",
    choices:["○(白丸) --- 快晴","雨を表す記号 --- 雨","◎(二重丸) --- 雪","⊗(丸にバツ) --- 晴れ"]},
  answer:0,
  hint:{en:"A simple open circle (○) is the universal symbol for clear/sunny weather on Japanese weather charts.",
    jp:"日本式天気図では、白丸(○)が快晴を表す基本記号である。"}
},
{
  id:"o21", category:"operation",
  en:{q:"Which of the following shows the correct flow of air inside a low pressure system area near the sea surface in the Northern Hemisphere?",
    choices:["Air spirals COUNTERCLOCKWISE, converging inward toward the center (L).","Air spirals CLOCKWISE, converging inward toward the center (L).","Air spirals COUNTERCLOCKWISE, diverging outward from the center (L).","Air spirals CLOCKWISE, diverging outward from the center (L)."]},
  jp:{q:"北半球の海面付近における低気圧(L)内部の正しい空気の流れはどれか。",
    choices:["反時計回りに中心(L)へ向かって収束する。","時計回りに中心(L)へ向かって収束する。","反時計回りに中心(L)から外へ発散する。","時計回りに中心(L)から外へ発散する。"]},
  answer:0,
  hint:{en:"In the Northern Hemisphere, low-pressure systems draw air in counterclockwise due to the Coriolis effect.",
    jp:"北半球の低気圧は、コリオリ力の影響で反時計回りに中心へ空気が吹き込む。"}
},
{
  id:"o22", category:"operation",
  en:{q:"Which of the following is appropriate as the term that fits in the blank: \"A tide refers to the vertical rise and fall of the sea level caused by the gravitational effects of the moon and sun. The typical time interval from one high tide to the next is approximately ( ).\"",
    choices:["4 hours","6 hours","8 hours","12 hours"]},
  jp:{q:"「潮汐とは、月・太陽の引力による海面の周期的な昇降で、満潮から次の満潮までの典型的な間隔は約( )である。」の空欄に当てはまるものはどれか。",
    choices:["4時間","6時間","8時間","12時間"]},
  answer:3,
  hint:{en:"The semi-diurnal tide cycle repeats roughly every 12 hours 25 minutes — about 12 hours is the standard interval.",
    jp:"半日周潮の周期は約12時間25分で、選択肢の中では「12時間」が最も近い。"}
},
{
  id:"o23", category:"operation",
  en:{q:"Which of the following is correct as the explanation of \"broaching\" that requires caution when you navigate in heavy weather?",
    choices:[
      "It refers to a situation where control of the rudder is lost when a vessel is navigating a following sea, causing the stern to sway sideways and the vessel to fall on its side.",
      "It refers to a situation where the bow of a vessel navigating a head sea is raised by waves and slammed down onto the water surface.",
      "It refers to a situation where the bow of a vessel receiving waves from right ahead sways side to side, making the rudder ineffective and causing the vessel to meander greatly.",
      "It refers to a situation where the rolling period of a vessel is synchronized with the wave period when the vessel receives broadside waves, causing it to fall on its side."]},
  jp:{q:"荒天航行時に注意すべき「ブローチング」の説明として正しいものはどれか。",
    choices:[
      "追い波航行中に舵の効きを失い、船尾が横に振られて船が横転する状態。",
      "向かい波航行中に船首が波で持ち上げられ、水面に叩きつけられる状態。",
      "正面からの波で船首が左右に振られ、舵が効かなくなり大きく蛇行する状態。",
      "船体の横揺れ周期と波の周期が同調し、横波を受けて転覆する状態。"]},
  answer:0,
  hint:{en:"Broaching-to happens in a following sea: the stern is thrown sideways, the vessel turns broadside to the waves and risks capsizing.",
    jp:"ブローチングは追い波中に発生し、船尾が振られて船が波に対し横向きになり転覆の危険が生じる現象。"}
},
{
  id:"o24", category:"operation",
  en:{q:"Which of the following is the most appropriate sequence of steps to be taken if a boat underway runs aground on a shoal?\n① Check the boat position and tides ② Stop the engine ③ Check the hull for damage",
    choices:["③ → ① → ②","③ → ② → ①","② → ③ → ①","② → ① → ③"]},
  jp:{q:"航行中に浅瀬に乗り揚げた場合の対応として最も適切な順序はどれか。\n①船位・潮汐の確認 ②機関停止 ③船体損傷の確認",
    choices:["③ → ① → ②","③ → ② → ①","② → ③ → ①","② → ① → ③"]},
  answer:2,
  hint:{en:"First stop the engine (prevent further damage), then check the hull, then check position/tides to plan how to get free — never reverse immediately.",
    jp:"まず機関を停止して被害拡大を防ぎ、船体を点検、その後船位・潮汐を確認してから対応を判断する。いきなり後進してはならない。"}
},
{
  id:"o25", category:"operation",
  en:{q:"Which of the following is inappropriate as an action that you should take if an accident occurs to a boat?",
    choices:[
      "If a boat runs aground on a shoal, it is necessary to operate astern propulsion immediately.",
      "If a boat collides with another vessel, priority should be given to saving human lives.",
      "If a boat collides with another vessel, the two vessels should not be separated immediately.",
      "If a fire breaks out, it is necessary to navigate so as to put the source of the fire on the leeward side while making a fire fighting effort."]},
  jp:{q:"事故発生時の対応として不適切なものはどれか。",
    choices:[
      "浅瀬に乗り揚げたら直ちに後進をかける。",
      "他船と衝突したら人命救助を最優先する。",
      "他船と衝突した場合、直ちに両船を切り離さない。",
      "火災発生時は出火箇所を風下側にして消火にあたる。"]},
  answer:0,
  hint:{en:"Do not reverse immediately after grounding — first check the situation and hull damage, as backing off carelessly can worsen the damage.",
    jp:"乗り揚げた直後にいきなり後進すると損傷を拡大させる恐れがある。まず状況・船体損傷を確認する。"}
},
{
  id:"o26", category:"operation",
  en:{q:"Of the following statements that describe what you should keep in mind with regard to vessel handling when docking a displacement vessel with a right-handed propeller to a quay on the STARBOARD side of the vessel, which one is INAPPROPRIATE?",
    choices:[
      "You should determine the approach angle with respect to the docking point based on the wind and current, and proceed at slow speed.",
      "You should set the engine to neutral a little before the docking point and proceed through inertia.",
      "To get the stern closer to the quay side, you should operate astern propulsion a little strongly right beside the docking point with the rudder kept in the central position.",
      "After the vessel comes to a stop, you should run the mooring rope to the quay and have the hull drawn in."]},
  jp:{q:"右回りプロペラの排水量型船を右舷側の岸壁に着岸させる際の操船として不適切なものはどれか。",
    choices:[
      "風潮流を考慮して着岸点への進入角度を決め、低速で進入する。",
      "着岸点の手前でニュートラルにし、惰力で進む。",
      "着岸点付近で舵を中央に保ったまま強めに後進をかけ、船尾を岸壁に寄せる。",
      "船が停止したら係留ロープを岸壁にとり、船体を引き寄せる。"]},
  answer:2,
  hint:{en:"A right-handed propeller in astern pulls the stern to PORT — using strong astern here would push the stern AWAY from a starboard-side quay, not toward it.",
    jp:"右回りプロペラは後進時に船尾を左に振る性質(キック)がある。右舷着岸でこれを行うと船尾は岸壁から離れてしまう。"}
},
{
  id:"o27", category:"operation",
  en:{q:"Of the following statements that describe the stability of a vessel, which one is INAPPROPRIATE?",
    choices:[
      "The height of the center of gravity of a vessel becomes high when it has cargo at high places.",
      "A vessel becomes bottom heavy when it has cargo at low places.",
      "When a vessel navigates in the bottom heavy condition, it becomes difficult for it to return to its original state if it tilts.",
      "The stability of a vessel improves when cargo is evenly distributed across it."]},
  jp:{q:"船の復原性に関する記述のうち、不適切なものはどれか。",
    choices:[
      "高い場所に荷物を積むと重心が高くなる。",
      "低い場所に荷物を積むと底荷状態(重心が低い状態)になる。",
      "底荷状態で航行すると、傾いたときに元の状態に戻りにくくなる。",
      "荷物を均等に配置すると復原性が向上する。"]},
  answer:2,
  hint:{en:"A bottom-heavy (low center of gravity) vessel is actually MORE stable and returns upright MORE easily, not with difficulty.",
    jp:"底荷状態(重心が低い)はむしろ復原性が良く、傾いても元に戻りやすい。この記述は逆で誤り。"}
},
{
  id:"o28", category:"operation",
  en:{q:"Which of the following is most appropriate as a head mark to be used when navigating in a narrow channel?",
    choices:["The stern of a vessel navigating ahead","The top of a mountain in the foreground","A transit line between two landmarks in the foreground","A conspicuous buoy in the foreground"]},
  jp:{q:"狭い水道を航行する際の見通し線(山立て)として最も適切なものはどれか。",
    choices:["前方を航行する船の船尾","手前にある山の頂上","手前にある2つの目標物を結ぶ見通し線","手前にある目立つブイ"]},
  answer:2,
  hint:{en:"A transit (range) line formed by aligning two fixed landmarks gives a steady, reliable course reference — a technique known as \"yamadate.\"",
    jp:"2つの固定目標を一直線に見通す「山立て」による見通し線が、安定した進路の目安として最も確実である。"}
},
{
  id:"o29", category:"operation",
  en:{q:"When a displacement vessel with a right-handed propeller that stopped on a calm water surface operates astern propulsion with the rudder turned to starboard as much as possible, how does it generally move? (Assume no effects of wind or current.)",
    choices:[
      "The stern kicks to port, and the boat backs while curving to port.",
      "The stern kicks to starboard, and the boat backs while curving to starboard.",
      "The boat backs in a perfectly straight line regardless of the rudder.",
      "The bow swings sharply to starboard while the boat remains nearly stationary."]},
  jp:{q:"静水面で停止している右回りプロペラの排水量型船が、舵を右いっぱいに切って後進をかけると、一般にどのように動くか(風潮流の影響はないものとする)。",
    choices:[
      "船尾が左に振られ、左に回頭しながら後進する。",
      "船尾が右に振られ、右に回頭しながら後進する。",
      "舵の向きに関わらず、ほぼ直進して後進する。",
      "船体はほぼ停止したまま船首だけ右に大きく振れる。"]},
  answer:0,
  hint:{en:"A right-handed propeller \"walks\" the stern to port in astern gear (prop walk) — this effect usually dominates over rudder input at low speed.",
    jp:"右回りプロペラは後進時に船尾を左へ振る「キック(プロップウォーク)」が生じ、低速では舵の効きよりこの効果が優る。"}
},
{
  id:"o30", category:"operation",
  en:{q:"Which of the following statements about the cause of a vessel's wake appearing oblique to its fore-and-aft line while navigating on a constant heading is most appropriate?",
    choices:[
      "Because the vessel is receiving wind from the side, causing leeway (drift) that makes the wake appear oblique to the keel line.",
      "Because the compass deviation is not properly corrected.",
      "Because the propeller is rotating to the left.",
      "Because the vessel's engine is running at excessive speed."]},
  jp:{q:"一定の針路で航行する船の航跡が、船体の中心線に対して斜めに見える主な原因として最も適切なものはどれか。",
    choices:[
      "横風を受けて圧流(leeway)が生じ、航跡が中心線に対し斜めに見えるため。",
      "コンパスの自差が適切に補正されていないため。",
      "プロペラが左回転しているため。",
      "エンジンの回転数が過大なため。"]},
  answer:0,
  hint:{en:"Crosswind pushes the hull sideways (leeway); the boat crabs slightly into the wind to hold its course, so the wake trailing behind appears angled from the keel line.",
    jp:"横風による圧流(leeway)で船体がわずかに風上を向いて進むため、航跡が船体中心線に対して斜めに見える。"}
},
{
  id:"o31", category:"operation",
  en:{q:"Of the following, which combination of the light abbreviation and its correct meaning is CORRECT for the term used with light buoys?",
    choices:[
      "\"Fl\" --- the light flashes briefly with darkness lasting longer than the light within one period.",
      "\"Fl\" --- the light is lit continuously without ever going dark.",
      "\"Iso\" --- the light and darkness alternate randomly with no fixed period.",
      "\"Oc\" --- the light flashes briefly with darkness lasting longer than the light within one period."]},
  jp:{q:"灯浮標などで使われる灯質記号とその意味の組み合わせとして正しいものはどれか。",
    choices:[
      "「Fl(閃光)」--- 1周期のうち消灯時間の方が点灯時間より長く、短く光る。",
      "「Fl(閃光)」--- 消灯することなく常時点灯する。",
      "「Iso(等明暗光)」--- 点灯・消灯の時間が不規則に変化する。",
      "「Oc(明暗光)」--- 1周期のうち消灯時間の方が点灯時間より長く、短く光る。"]},
  answer:0,
  hint:{en:"\"Fl\" (flashing) means the light is dark most of the time with brief flashes — the opposite pattern from \"Oc\" (occulting).",
    jp:"「Fl(閃光)」は消灯時間の方が長く短く光る。逆に「Oc(明暗光)」は点灯時間の方が長い。"}
},
{
  id:"o32", category:"operation",
  en:{q:"Of the following descriptions about how to handle a battery during the off season, which one is INAPPROPRIATE?",
    choices:[
      "The battery should be recharged at regular intervals and its state of charge tracked.",
      "The battery fluid level should be kept within specified limits.",
      "The cables should be kept connected to ensure electricity flows constantly.",
      "The battery should be detached and stored indoors when it is not used for a long time."]},
  jp:{q:"オフシーズン中のバッテリー管理として不適切なものはどれか。",
    choices:[
      "定期的に充電し、充電状態を確認する。",
      "バッテリー液量を規定範囲に保つ。",
      "常に電気が流れるよう配線を接続したままにする。",
      "長期間使わない場合は取り外し屋内で保管する。"]},
  answer:2,
  hint:{en:"Cables should be DISCONNECTED during long-term storage to prevent parasitic drain — keeping them connected is the wrong advice.",
    jp:"長期保管時はむしろ配線を外し、自然放電を防ぐべきである。接続したままにするのは誤り。"}
},
{
  id:"o33", category:"operation",
  en:{q:"The figure shows a part of a surface weather chart around Japan with a warm front, and point (A) lies just ahead of the front. Which of the following shows the wind direction and weather at point (A)?",
    choices:["Southeast --- Rain","Southeast --- Snow","Northwest --- Snow","Northwest --- Rain"]},
  jp:{q:"日本付近の地上天気図の一部(温暖前線)が示されており、地点(A)は前線のすぐ前方にある。地点(A)の風向・天気として正しいものはどれか。",
    choices:["南東 --- 雨","南東 --- 雪","北西 --- 雪","北西 --- 雨"]},
  answer:0,
  hint:{en:"Ahead of a warm front in the temperate zone, winds are typically southeasterly and bring widespread rain.",
    jp:"温暖前線の前方(進行方向側)では南東寄りの風が吹き、広い範囲で雨となることが多い。"}
},
{
  id:"o34", category:"operation",
  en:{q:"Which of the following is NOT deemed to be a precursor to a gale?",
    choices:["Cumulonimbus cloud forming in the western sky","Lightning in the western sky at night","Western horizon appearing uneven when the sea surface is calm","A sun halo or moon halo, regardless of its position in the sky"]},
  jp:{q:"次のうち、強風・時化(しけ)の前兆として一般的に扱われないものはどれか。",
    choices:["西の空に積乱雲が発生すること","夜間、西の空に雷光が見えること","海面が穏やかなのに西の水平線が乱れて見えること","太陽・月にかさ(暈)が見えること(方角を問わず)"]},
  answer:3,
  hint:{en:"A halo forms around wherever the sun or moon happens to be — its meaning as a weather precursor does not depend on which direction that happens to be.",
    jp:"かさ(暈)は太陽や月の位置に関係なく現れる現象で、方角自体には気象学的な意味がない。"}
},
{
  id:"o35", category:"operation",
  en:{q:"Of the following statements concerning the tidal range, which one is CORRECT?",
    choices:[
      "It refers to the difference between the nearly highest high water and the nearly lowest low water.",
      "It refers to the difference in the sea level between two high tides and two low tides that respectively occur in a day.",
      "It refers to the difference in the sea level between a high tide and the succeeding low tide.",
      "It refers to the difference between the sea level and the nearly lowest low water at a given time."]},
  jp:{q:"干満差(潮差)に関する記述のうち、正しいものはどれか。",
    choices:[
      "1日のほぼ最高水位とほぼ最低水位との差を指す。",
      "1日に起こる2回の満潮・2回の干潮の海面差を指す。",
      "満潮とその次の干潮との海面差を指す。",
      "ある時点の海面とほぼ最低水位との差を指す。"]},
  answer:2,
  hint:{en:"Tidal range is the vertical difference between one high tide and the low tide that immediately follows it.",
    jp:"干満差は、ある満潮とその直後に続く干潮との海面の高さの差をいう。"}
},
{
  id:"o36", category:"operation",
  en:{q:"The following statements (A) and (B) describe a nautical chart. Judge whether they are correct or wrong.\n(A) Since the water depth shown on a nautical chart is measured from the water level deemed to be lowest, the actual water depth is often deeper than indicated.\n(B) In finding the position of a vessel drawn on a nautical chart, latitude is identified using the scales on the left or right side and longitude is identified using the scales on the top or bottom side.",
    choices:["Only (A) is correct.","Only (B) is correct.","Both are correct.","Both are wrong."]},
  jp:{q:"海図に関する次の(A)(B)の正誤を判断せよ。\n(A) 海図の水深は最低水面を基準に測るため、実際の水深は表示より深いことが多い。\n(B) 海図上の船位を求める際、緯度は左右の目盛り、経度は上下の目盛りを用いる。",
    choices:["(A)のみ正しい","(B)のみ正しい","両方正しい","両方誤り"]},
  answer:2,
  hint:{en:"Both are correct: chart depths use a low-water datum (so actual depth is usually more), and latitude reads from the side scale while longitude reads from the top/bottom scale.",
    jp:"どちらも正しい。海図の水深は最低水面基準(実際はより深いことが多い)、緯度は左右目盛り、経度は上下目盛りで読む。"}
},
{
  id:"o37", category:"operation",
  en:{q:"Which of the following is represented by nautical chart symbol \"2kn →\" (a plain arrow with a speed value)?",
    choices:["Flood tide stream","Overfalls","Ebb tide stream","Ocean current"]},
  jp:{q:"海図記号「2kn →」(速度を伴う矢印)が表すものはどれか。",
    choices:["上げ潮流","タイドレース(潮目の乱れ)","下げ潮流","海流"]},
  answer:3,
  hint:{en:"A plain, unfeathered arrow with a speed value denotes an ocean current; feathered arrows are used for flood/ebb tidal streams.",
    jp:"羽根の付いていない単純な矢印に速度を付したものは海流を表す。上げ潮・下げ潮の潮流は羽根付き矢印で表す。"}
},
{
  id:"o38", category:"operation",
  en:{q:"On a boat, the bow eye (a metal ring used to attach a trailer winch strap) is located where?",
    choices:["At the very front, at the bottom of the bow, near the waterline","On the top of the windshield frame","At the stern, on the gunwale","On the side of the hull, amidships"]},
  jp:{q:"ボートのバウアイ(トレーラーのウインチベルトを掛ける金具)がある位置はどこか。",
    choices:["船首の最前部、船底寄りの水線付近","フロントガラス上部","船尾のガンネル部分","船体中央の側面"]},
  answer:0,
  hint:{en:"The bow eye sits at the very front-bottom of the hull, near the waterline, so a trailer winch strap can pull the boat straight onto the trailer.",
    jp:"バウアイは船首最前部の水線付近にあり、トレーラーへ真っ直ぐ引き上げられるよう配置されている。"}
},
{
  id:"o39", category:"operation",
  en:{q:"Which is the most appropriate method for tying a mooring rope to an anchor ring or a similar fixed ring?",
    choices:["Clove hitch or round turn with two half hitches","Figure-of-eight knot","Sheet bend","Bowline formed with a slip knot only"]},
  jp:{q:"錨環など固定リングにロープを結ぶ方法として最も適切なものはどれか。",
    choices:["クラブヒッチ、またはラウンドターン・ツーハーフヒッチ","エイトノット","シートベンド","スリップノットのみのもやい結び"]},
  answer:0,
  hint:{en:"A clove hitch or round turn with two half hitches securely fastens a rope to a ring or post and is easy to release when needed.",
    jp:"クラブヒッチやラウンドターン・ツーハーフヒッチは、リングや棒にロープをしっかり固定でき、必要な時にほどきやすい。"}
},
{
  id:"o40", category:"operation",
  en:{q:"The items below are inspected before departure. In which of the following cases is it INAPPROPRIATE for the vessel to depart with the item in the condition described?",
    choices:["The propeller is not chipped or deformed.","The hull is floating steadily.","The bottom plug is open.","The hatch is closed."]},
  jp:{q:"出航前点検に関して、その状態で出航するのが不適切なものはどれか。",
    choices:["プロペラに欠けや変形がない。","船体が安定して浮いている。","ボトムプラグ(排水栓)が開いている。","ハッチが閉まっている。"]},
  answer:2,
  hint:{en:"The bottom (drain) plug must be CLOSED before departure — leaving it open lets water flood into the hull.",
    jp:"ボトムプラグ(排水栓)は出航前に必ず閉めておく必要がある。開いたままだと浸水する。"}
},
{
  id:"o41", category:"operation",
  en:{q:"Of the following statements concerning the role of engine oil in a four-stroke engine, which one is INAPPROPRIATE?",
    choices:[
      "To remove the heat generated by burning and friction",
      "To reduce the friction between the rotating shaft and the bearing, etc.",
      "To turn fuel oil into a spray efficiently",
      "To keep the space between the cylinder and the piston airtight"]},
  jp:{q:"4ストロークエンジンにおけるエンジンオイルの役割として不適切なものはどれか。",
    choices:[
      "燃焼や摩擦で生じる熱を除去する。",
      "回転軸と軸受け等の摩擦を減らす。",
      "燃料を効率よく霧状にする。",
      "シリンダーとピストンの間を気密に保つ。"]},
  answer:2,
  hint:{en:"Atomizing fuel into a spray is the job of the fuel injector/carburetor, not the engine oil.",
    jp:"燃料を霧状にするのは噴射装置やキャブレターの役割であり、エンジンオイルの役割ではない。"}
},
{
  id:"o42", category:"operation",
  en:{q:"Of the following statements that describe what you should keep in mind when inspecting the engine before departure, which one is INAPPROPRIATE?",
    choices:[
      "You should check that there is no oil accumulated in the engine room.",
      "You should start the engine, rev it up hard immediately, and then check each part of it.",
      "You should check movable parts not only visually but also by actually moving them.",
      "You should check whether the oil level and the coolant level are within specified limits."]},
  jp:{q:"出航前のエンジン点検で心がけるべきこととして不適切なものはどれか。",
    choices:[
      "機関室に油が溜まっていないか確認する。",
      "始動後すぐに回転数を大きく上げて各部を点検する。",
      "可動部は目視だけでなく実際に動かして確認する。",
      "オイルや冷却水の量が規定の範囲内か確認する。"]},
  answer:1,
  hint:{en:"Never rev a cold engine hard right after starting — warm it up gradually at idle before increasing speed.",
    jp:"始動直後に急激に回転数を上げてはいけない。アイドリングで暖機してから徐々に上げる。"}
},
{
  id:"o43", category:"operation",
  en:{q:"Of the following statements that describe what you should keep in mind when starting, warming up, or stopping the engine, which one is INAPPROPRIATE?",
    choices:[
      "In a vessel with an outboard or inboard-outdrive engine, you should start the engine AFTER tilting up the propeller.",
      "In a diesel engine, you should start the engine after preheating it as needed.",
      "You should warm up the engine while checking the cooling water thermometer and the status of alarm devices.",
      "You should stop the engine after it cools down in an idle state as needed."]},
  jp:{q:"エンジンの始動・暖機・停止に関して不適切なものはどれか。",
    choices:[
      "船外機・船内外機は、プロペラをチルトアップしてから始動する。",
      "ディーゼルエンジンは必要に応じて予熱してから始動する。",
      "冷却水温度計やアラーム装置の状態を確認しながら暖機する。",
      "必要に応じてアイドリングで冷やしてから停止する。"]},
  answer:0,
  hint:{en:"Never tilt the propeller/drive unit up before starting — it must stay in the water so cooling water can circulate from the very first moment the engine runs.",
    jp:"始動前にプロペラを上げてはいけない。冷却水を確保するため、始動時はドライブユニットを水中に入れておく必要がある。"}
},
{
  id:"o44", category:"operation",
  en:{q:"Of the following combinations of an abnormal meter reading and the action to take, which one is INAPPROPRIATE?",
    choices:[
      "The cooling water thermometer reading is high --- Check whether the cooling water intake is clogged.",
      "The ammeter needle is on the negative side --- Check the wiring connection part of the alternator.",
      "The oil pressure gauge reading is low --- Measure the amount of engine oil.",
      "The fuel level gauge reading is too low when the fuel tank is full --- Check whether the fuel cock is open or closed."]},
  jp:{q:"メーターの異常な表示とその際にとるべき行動の組み合わせのうち、不適切なものはどれか。",
    choices:[
      "冷却水温度計が高い --- 冷却水取入口の詰まりを確認する。",
      "電流計の針がマイナス側 --- オルタネーターの配線接続部を確認する。",
      "油圧計が低い --- エンジンオイルの量を計測する。",
      "満タンなのに燃料計が低いままを示す --- 燃料コックの開閉を確認する。"]},
  answer:3,
  hint:{en:"A gauge misreading despite a full tank points to a faulty gauge/sender or wiring, not the fuel cock (which affects fuel flow, not the reading itself).",
    jp:"満タンなのに表示が低いのは燃料計本体や配線の不具合が疑われ、燃料コックの開閉確認では対処できない。"}
},
{
  id:"o45", category:"operation",
  en:{q:"Which of the following is most appropriate as the explanation of the cause of a vessel's grounding accident?",
    choices:[
      "Failure to check the boat's position and study the water area chart in advance",
      "Excessive maintenance of the engine",
      "Wearing a life jacket at all times",
      "Keeping a proper lookout at all times"]},
  jp:{q:"乗り揚げ事故の原因として最も適切な説明はどれか。",
    choices:[
      "事前の船位確認・水路調査の不足",
      "エンジンの過剰なメンテナンス",
      "常時の救命胴衣着用",
      "常時の適切な見張り"]},
  answer:0,
  hint:{en:"Grounding accidents are overwhelmingly caused by failing to study the water area and check position beforehand.",
    jp:"乗り揚げ事故の大半は、事前の水路調査・船位確認の不足が原因である。"}
},
{
  id:"o46", category:"operation",
  en:{q:"Of the following statements concerning what you should keep in mind when creating a navigation plan for a long voyage, which one is INAPPROPRIATE?",
    choices:[
      "You should plan the route while allowing for a margin in fuel and time.",
      "You should determine alternate shelter ports in case of sudden bad weather.",
      "You should decide the plan alone and not share it with anyone ashore.",
      "You should account for differences in performance when navigating with other vessels."]},
  jp:{q:"長距離航海の計画作成時の心得として不適切なものはどれか。",
    choices:[
      "燃料や時間に余裕を持たせて計画する。",
      "急な悪天候に備え、避難港の候補を決めておく。",
      "計画は自分だけで決め、陸上の誰にも知らせない。",
      "他船と航行する場合は性能差を考慮する。"]},
  answer:2,
  hint:{en:"Always share your float plan (route, schedule, crew) with someone ashore — never keep it to yourself, in case of emergency.",
    jp:"航海計画(経路・予定・乗員等)は必ず陸上の家族や関係者に知らせておくべきであり、自分だけで抱えてはいけない。"}
},
{
  id:"o47", category:"operation",
  en:{q:"Of the following statements about mooring a boat, which one is most APPROPRIATE?",
    choices:[
      "Mooring lines should be led as straight and taut as possible with no allowance for tide changes.",
      "Fenders should be positioned to prevent the hull from directly contacting the quay.",
      "A single mooring line at the bow is sufficient regardless of weather conditions.",
      "Mooring lines should always be made of the thinnest rope available to save space."]},
  jp:{q:"係留に関する記述のうち、最も適切なものはどれか。",
    choices:[
      "潮位変化を考慮せず、ロープはできるだけ張った状態にする。",
      "フェンダーを配置し、船体が岸壁に直接当たらないようにする。",
      "天候に関わらず船首の1本のロープだけで十分である。",
      "省スペースのため、係留ロープは常に最も細いものを使う。"]},
  answer:1,
  hint:{en:"Fenders protect the hull from contact damage; mooring lines need slack for tide changes and multiple lines for security.",
    jp:"フェンダーで船体を保護するのが基本。ロープは潮位変化に対応できるよう余裕を持たせ、複数本使うのが望ましい。"}
},
{
  id:"o48", category:"operation",
  en:{q:"Which of the following is most appropriate as an action to take immediately before departure regarding weather information?",
    choices:[
      "Check the latest weather forecast and marine warnings for the intended route.",
      "Rely only on the sky's appearance and skip checking any official forecast.",
      "Check the forecast for the destination only, ignoring the route in between.",
      "Assume weather conditions will not change during a short trip."]},
  jp:{q:"出航直前の気象情報確認として最も適切なものはどれか。",
    choices:[
      "航路全体の最新の気象予報・海上警報を確認する。",
      "空模様だけで判断し、公式な予報の確認は省略する。",
      "目的地の予報だけを確認し、途中の経路は無視する。",
      "短時間の航海なら天候は変わらないと考える。"]},
  answer:0,
  hint:{en:"Always check official forecasts and marine warnings for the entire route, not just the destination or a visual guess.",
    jp:"目的地だけでなく航路全体の最新予報・海上警報を必ず確認する。"}
},
{
  id:"o49", category:"operation",
  en:{q:"Of the following statements about towing another disabled boat, which one is INAPPROPRIATE?",
    choices:[
      "The towline should be attached to a strong point on both vessels.",
      "Towing speed should be kept low, especially at the start.",
      "The towline length should be adjusted to suit sea conditions.",
      "The towed vessel's steering can be left completely unattended throughout the tow."]},
  jp:{q:"故障した他船を曳航する際の注意点として不適切なものはどれか。",
    choices:[
      "曳航索は両船の強固な部分に取り付ける。",
      "特に曳き始めは速力を低く保つ。",
      "曳航索の長さは海象に応じて調整する。",
      "被曳航船の操舵は曳航中ずっと無人でよい。"]},
  answer:3,
  hint:{en:"The towed vessel should always have someone at the helm to steer and to release the line quickly if needed — leaving it unattended is unsafe.",
    jp:"被曳航船には常に操舵できる人を配置し、必要な際に索を放せるようにしておくべきである。"}
},
{
  id:"o50", category:"operation",
  en:{q:"Which of the following is the most appropriate first action when a fellow passenger falls overboard?",
    choices:[
      "Immediately throw a life ring or buoyant object toward the person and keep watching them without looking away.",
      "Turn the boat around at full speed without watching the person in the water.",
      "Wait until reaching shore before taking any action.",
      "Ask the person to swim to the boat while you continue at cruising speed."]},
  jp:{q:"同乗者が海に転落した場合、最初にとるべき最も適切な行動はどれか。",
    choices:[
      "直ちに浮き輪等を投げ入れ、その人から目を離さず見続ける。",
      "落水者を見ずに全速力で旋回する。",
      "岸に着くまで何もしない。",
      "巡航速力のまま、落水者に自力で泳いでくるよう求める。"]},
  answer:0,
  hint:{en:"Throw a flotation device immediately and never lose sight of the person in the water — losing visual contact is the biggest risk in a man-overboard situation.",
    jp:"直ちに浮力体を投げ入れ、絶対に落水者から目を離さないこと。見失うことが最大のリスクとなる。"}
}
];
