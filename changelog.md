# Serene Audio — Project Changelog & Status

> **File:** `index.html` (renamed from `audio-sessions.html`)
> **Last updated:** March 24, 2026
> **Deployed via:** GitHub Pages
> **Stack:** Pure HTML + CSS + Vanilla JS (no frameworks, no dependencies except Google Fonts & Font Awesome CDN)

---

## Project Overview

A Google Drive-style audio session download website for wellness programs. Users can browse sessions, switch languages, select individual or multiple programs, and download them directly from Google Drive links.

---

## Current Status ✅

| Feature | Status |
|---|---|
| Sidebar with minimize/maximize | ✅ Done |
| Sidebar toggle tab (right edge, always visible) | ✅ Done |
| 3 sessions in sidebar | ✅ Done |
| 5 programs per session | ✅ Done |
| 4 languages per session (EN, DE, FR, IT) | ✅ Done |
| English as default language | ✅ Done |
| Topbar: session icon + session title | ✅ Done |
| Topbar: globe icon → language popover panel | ✅ Done |
| Easy to add more languages | ✅ Done |
| Hero section | ❌ Removed (reverted) |
| Card format (thumbnail, title, download btn) | ✅ Done |
| Card title truncated to 2 lines | ✅ Done |
| Info (ⓘ) button popup with full card details | ✅ Done |
| Selection count pill in action row (beside buttons) | ✅ Done |
| Select individual programs | ✅ Done |
| Select All / Deselect All | ✅ Done |
| Download Selected (multi-download) | ✅ Done |
| Download All (per session + language) | ✅ Done |
| Responsive (mobile, tablet, desktop) | ✅ Done |
| Mobile sidebar drawer + overlay | ✅ Done |
| Toast notifications | ✅ Done |
| Google Drive links (placeholder `#`) | ⏳ Pending — replace with real links |
| Card thumbnail images | ⏳ Pending — replace with real images |
| Logo image | ⏳ Pending — replace placeholder SVG |
| More languages | ⏳ Planned |
| GitHub Pages deployment | ✅ Instructions provided |

---

## Changelog

### v1.4 — `revert-header-section` *(current)*
**Commit message:** `revert: restore topbar header, remove hero, move lang switcher and sel-pill to action row`

Changes made:
- ✅ **Topbar restored** — session icon + session title + language switcher are back in the sticky header
- ✅ **Hero section removed** — no more dark banner block above the cards
- ✅ **Language switcher moved to topbar** — globe button with popover now lives in the top-right of the header bar, styled to match the light topbar (white bg, sage border, muted text)
- ✅ **Selection pill moved to action row** — `sel-pill` now sits inline as the first item in the action row, beside Select All, Clear, Download Selected, and Download All buttons
- ✅ **Changelog updated**

---

### v1.3 — `fix/ui-improvements`
**Commit message:** `fix: sidebar tab, English default, globe lang switcher, remove redundant header, card title truncation`

Changes made:
- ✅ Sidebar toggle tab added to right edge (always visible, even when minimized)
- ✅ English (EN) added as default language for all sessions
- ✅ Language switcher redesigned as globe icon → popover panel (future-proof for more languages)
- ✅ First topbar (icon + title + old lang bar) removed to reduce redundancy
- ✅ Hero section introduced; language switcher and session title moved there
- ✅ "Download All" removed from hero, kept only in action row
- ✅ Card titles truncated to 2 lines with `ⓘ` info button popup showing full details

---

### v1.2 — `redesign/wellness-theme`
**Commit message:** `feat: Serene Audio v1.0 — wellness audio site with multilingual session downloads`

Changes made:
- ✅ Full visual redesign — calm wellness aesthetic (sage greens, misty teals)
- ✅ Fonts changed to Cormorant Garamond (display) + Jost (UI)
- ✅ Card thumbnails use 5 unique CSS gradient combinations with shimmer effects
- ✅ Sidebar uses deep forest green (#1a2a20) with organic glow orbs
- ✅ Noise texture overlay added to background for depth
- ✅ Leaf SVG logo mark in sidebar header

---

### v1.1 — `feat/initial-build`
**Commit message:** `feat: initial release — Serene Audio wellness session site`

Changes made:
- ✅ Initial website built — dark theme, 3 sessions, DE/FR/IT languages
- ✅ Card grid layout with thumbnails, titles, download buttons
- ✅ Collapsible sidebar with logo, session list, tooltips on minimized state
- ✅ Single and multi-select download system
- ✅ Toast notifications
- ✅ Responsive for mobile/tablet/desktop

---

## Sessions & Programs

### Session 1 — Weight Loss Session
**Icon:** `fa-fire-flame-curved`

| Module | EN | DE | FR | IT |
|---|---|---|---|---|
| Module 1 | Weight Loss Introduction | Gewichtsverlust Einführung | Introduction à la perte de poids | Introduzione alla perdita di peso |
| Module 2 | Calorie Burning Boost | Kalorienverbrennung Boost | Brûleur de graisses intensif | Bruciagrassi intenso |
| Module 3 | Healthy Eating Habits | Gesunde Ernährung | Alimentation saine & consciente | Alimentazione consapevole |
| Module 4 | Motivation & Mindset Booster | Motivations-Booster | Motivation & confiance en soi | Motivazione & fiducia |
| Module 5 | Deep Relaxation for Weight Loss | Tiefenentspannung & Abnehmen | Relaxation profonde & minceur | Rilassamento profondo & dimagrire |

### Session 2 — Deep Relaxation Session
**Icon:** `fa-cloud-moon`

| Module | EN | DE | FR | IT |
|---|---|---|---|---|
| Module 1 | Relaxation Fundamentals | Tiefenentspannung Grundlagen | Fondamentaux de la relaxation | Fondamenti del rilassamento |
| Module 2 | Deep Sleep & Recovery | Schlaf & Erholung | Sommeil profond & réparateur | Sonno profondo & ristoratore |
| Module 3 | Breathing Exercises for Calm | Atemübungen für innere Ruhe | Exercices de respiration douce | Esercizi di respirazione dolce |
| Module 4 | Releasing Stress & Letting Go | Stress abbauen & loslassen | Libérer le stress & lâcher prise | Liberarsi dallo stress |
| Module 5 | Inner Peace & Stillness | Innerer Frieden | Paix intérieure profonde | Pace interiore profonda |

### Session 3 — Focus & Energy Session
**Icon:** `fa-seedling`

| Module | EN | DE | FR | IT |
|---|---|---|---|---|
| Module 1 | Concentration & Mental Clarity | Konzentration & geistige Klarheit | Concentration & clarté mentale | Concentrazione & chiarezza mentale |
| Module 2 | Morning Energy Activation | Morgenenergie Aktivierung | Activation énergétique du matin | Attivazione energetica mattutina |
| Module 3 | Productivity Flow State | Produktivitäts-Flow | Flow de productivité | Flusso di produttività |
| Module 4 | Building Mental Strength | Mentale Stärke aufbauen | Construire la force mentale | Costruire la forza mentale |
| Module 5 | Evening Regeneration | Abendliche Regeneration | Régénération du soir | Rigenerazione serale |

---

## Design System

### Color Palette
| Token | Value | Usage |
|---|---|---|
| `--bg` | `#eef2ee` | Page background |
| `--sidebar-bg` | `#1a2a20` | Sidebar + dark buttons |
| `--sidebar-bg2` | `#1f3025` | Sidebar hover states |
| `--surface` | `#ffffff` | Cards, popovers, topbar |
| `--surface2` | `#f4f8f4` | Subtle hover backgrounds |
| `--sage` | `#5f9070` | Primary accent |
| `--sage-light` | `#82b494` | Lighter accent |
| `--sage-pale` | `#d4e8da` | Pale accent backgrounds |
| `--text-dark` | `#182418` | Headings |
| `--text` | `#2a3c2e` | Body text |
| `--muted` | `#6e9078` | Secondary / placeholder text |

### Typography
- **Display / Headings:** `Cormorant Garamond` (serif, italic for titles)
- **UI / Body:** `Jost` (sans-serif, weights 300–600)

### Card Gradients (5 rotating)
| Class | Colors |
|---|---|
| `.g0` | `#cce0d4` → `#98c0aa` → `#5f9070` (sage green) |
| `.g1` | `#c2d8de` → `#88b8c8` → `#3d8290` (teal blue) |
| `.g2` | `#cfdec8` → `#a8c09a` → `#72966a` (muted green) |
| `.g3` | `#dcd8c4` → `#c0b890` → `#8a7a58` (warm earth) |
| `.g4` | `#ccd8dc` → `#9ab8c0` → `#5a8890` (cool slate) |

---

## How to Add a New Language

1. Find the `LANGUAGES` array near the top of the `<script>` in `index.html`:
```js
const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'de', label: 'German'  },
  { code: 'fr', label: 'French'  },
  { code: 'it', label: 'Italian' },
  // Add here:
  // { code: 'es', label: 'Spanish' },
];
```

2. Add a matching key under `programs` for each session in the `DATA` array:
```js
es: [
  { title: 'Introducción a la pérdida de peso', dur: '22 min', mod: 'Módulo 1', url: '#' },
  // ... 5 programs total
]
```

---

## How to Add Google Drive Links

Replace every `url: '#'` with a real Google Drive direct download link.

**Format:**
```
https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
```

**How to get the File ID:**
1. Upload your audio file to Google Drive
2. Right-click → **Get link** → set to **Anyone with the link**
3. Copy the ID from: `https://drive.google.com/file/d/FILE_ID_HERE/view`

---

## How to Add a New Session

1. Add entry to the `DATA` array:
```js
{
  name: 'Your Session Name',
  icon: 'fa-YOUR-ICON',
  programs: {
    en: [
      { title: '...', dur: '20 min', mod: 'Module 1', url: '#' },
      // 5 programs
    ],
    de: [ ... ], fr: [ ... ], it: [ ... ],
  }
}
```

2. Add sidebar item in HTML (`data-idx` must match position in `DATA` array, 0-based):
```html
<div class="sb-item" data-idx="3" data-tip="Your Session" onclick="selectSess(3,this)">
  <div class="sb-icon"><i class="fa-solid fa-YOUR-ICON"></i></div>
  <span class="sb-text">Your Session Name</span>
  <span class="sb-badge">5</span>
</div>
```

---

## How to Replace the Logo

```html
<div class="logo-mark">
  <img src="your-logo.png" style="width:24px;height:24px;object-fit:contain;" />
</div>
```
Update the brand name:
```html
<span class="logo-name">Your Brand Name</span>
```

---

## How to Replace Card Thumbnails

In the `render()` function, replace:
```js
<div class="card-thumb-bg ${GRADS[i % 5]}"></div>
```
with:
```js
<div class="card-thumb-bg" style="background-image:url('${p.image}');background-size:cover;background-position:center"></div>
```
Then add an `image` field to each program in `DATA`:
```js
{ title: '...', dur: '22 min', mod: 'Module 1', url: '#', image: 'images/wl-01.jpg' }
```

---

## GitHub Deployment

**Branch:** `main` · **Pages source:** `/ (root)` → `index.html`
**Live URL:** `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

```bash
# First time
git init
git add index.html CHANGELOG.md
git commit -m "feat: Serene Audio v1.0 — wellness audio site with multilingual session downloads"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# Each update
git add index.html CHANGELOG.md
git commit -m "your message here"
git push
```

---

## Pending / Next Steps

- [ ] Replace all `url: '#'` with real Google Drive download links
- [ ] Replace placeholder card thumbnails with real images
- [ ] Replace SVG placeholder logo with real brand logo
- [ ] Rename sessions 2 & 3 if needed (currently "Deep Relaxation" and "Focus & Energy")
- [ ] Add more languages as needed
- [ ] Add more sessions as needed
- [ ] Push to GitHub and verify GitHub Pages deployment