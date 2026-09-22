# 小型船舶操縦士 学科試験トレーナー / Boat License Exam Trainer

ランダム出題・弱点優先・日英対応の小型船舶操縦士学科試験ミニ模試アプリです。

A randomized, bilingual (JP/EN) practice app for the small craft operator (boat license) written exam, with weak-point-priority question selection.

## 特徴 / Features

- 🇯🇵 / 🇬🇧 日英切り替え可能 (Bilingual JP/EN toggle, switchable mid-quiz)
- ⏱ 5分・10分・15分・30分・模試(70分/50問)から選択 (Choose 5/10/15/30 min, or a full 70-min/50-question mock exam matching the real test)
- 📈 間違えた問題ほど優先的に再出題される重み付きランダム出題 (Weighted random selection that prioritizes previously-missed questions, tracked in `localStorage`)
- 💡 誤答時にミニヒントを表示 (Mini hints shown on incorrect answers to deepen understanding)
- 🌊 シンプルなマリンデザイン (Simple marine-themed UI)
- 📊 結果画面で合格率・分野別正答率・見直しポイントを表示 (Result screen with pass-rate gauge, category breakdown, and a review list)

## 使い方 / Usage

Static site — no build step. Open `index.html` directly, or serve it locally:

```bash
# PowerShell (Windows)
powershell -ExecutionPolicy Bypass -File serve.ps1
# then open http://localhost:8099
```

Or deploy as-is to GitHub Pages / Netlify / any static host.

## 免責 / Disclaimer

本アプリは自主学習用の非公式教材です。最新の法令・試験情報は必ず公式情報でご確認ください。

This is an unofficial, self-study tool. Always confirm the latest regulations and exam details with official sources.

## ファイル構成 / Structure

- `index.html` — App shell
- `style.css` — Marine-themed styling
- `i18n.js` — UI string dictionary (JP/EN)
- `data.js` — Question bank (100 questions, bilingual, with hints and diagram data)
- `app.js` — App logic (timer, weighted question selection, scoring, SVG diagram rendering)
- `images/topimage.png` — Top screen hero image
