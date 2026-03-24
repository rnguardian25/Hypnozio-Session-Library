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
| Topbar: session icon + title (always visible, truncates on small screens) | ✅ Done |
| Topbar: globe icon → lang code → popover (no flags, no initials) | ✅ Done |
| Globe lang btn always sticky right in topbar | ✅ Done |
| Hero section | ❌ Removed |
| Card format (thumbnail, title, download btn) | ✅ Done |
| Card title truncated to 2 lines + ⓘ info popup | ✅ Done |
| Action row: left group (pill + Select All + Clear) · right group (Download Selected + Download All) | ✅ Done |
| Mobile action row: Row 1 = selection buttons · Row 2 = download buttons (right-aligned) | ✅ Done |
| Button text labels always visible (never hidden on mobile) | ✅ Done |
| On ≤520px: Download buttons each fill half the row | ✅ Done |
| Select All / Deselect All | ✅ Done |
| Download Selected + Download All | ✅ Done |
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

### v1.6 — `fix/mobile-header-and-button-layout` *(current)*
**Commit message:** `fix: revert globe lang btn, show title on mobile, fix mobile button layout`

Changes made:
- ✅ **#1 — Language button reverted to globe icon** — removed flag emoji entirely; button now shows globe icon + lang code (e.g. `🌐 EN`) + caret
- ✅ **#2 — Removed initials/label from lang button left side** — button contains only: globe icon · code · caret. No redundant text alongside
- ✅ **#3 — Session title always shown on mobile** — removed `display: none` on `.tb-title` at mobile breakpoints; title truncates gracefully via `text-overflow: ellipsis` at all sizes, including 14px on ≤520px
- ✅ **#4 — Button text labels never hidden** — removed `.btn-label-full` hide rules entirely; all button text is always visible regardless of screen size
- ✅ **#5 — Mobile button layout fixed (2 rows):**
  - Row 1: `[● N selected] [Select All / Deselect All] [Clear]`
  - Row 2: `[Download Selected] [Download All]` — right-aligned
  - On ≤520px: Download buttons each expand to fill half the row side-by-side
- ✅ **#6 — Changelog updated**
- ✅ Lang popover: code + name only (no flags anywhere)

---

### v1.5 — `feat/flag-lang-and-ux-buttons`
**Commit message:** `feat: country flag language switcher, sticky lang btn, right-aligned download buttons`

Changes made:
- ✅ Country flag emoji added to language button and popover
- ✅ Language button made sticky right at all screen sizes
- ✅ Action row split: selection controls left, download buttons right
- ✅ On very small screens, button labels were hidden (reverted in v1.6)

---

### v1.4 — `revert-header-section`
**Commit message:** `revert: restore topbar header, remove hero, move lang switcher and sel-pill to action row`

---

### v1.3 — `fix/ui-improvements`
**Commit message:** `fix: sidebar tab, English default, globe lang switcher, remove redundant header, card title truncation`

---

### v1.2 — `redesign/wellness-theme`
**Commit message:** `feat: Serene Audio v1.0 — wellness audio site with multilingual session downloads`

---

### v1.1 — `feat/initial-build`
**Commit message:** `feat: initial release — Serene Audio wellness session site`

---

## Sessions & Programs

### Session 1 — Weight Loss Session · `fa-fire-flame-curved`
| Module | EN | DE | FR | IT |
|---|---|---|---|---|
| Module 1 | Weight Loss Introduction | Gewichtsverlust Einführung | Introduction à la perte de poids | Introduzione alla perdita di peso |
| Module 2 | Calorie Burning Boost | Kalorienverbrennung Boost | Brûleur de graisses intensif | Bruciagrassi intenso |
| Module 3 | Healthy Eating Habits | Gesunde Ernährung | Alimentation saine & consciente | Alimentazione consapevole |
| Module 4 | Motivation & Mindset Booster | Motivations-Booster | Motivation & confiance en soi | Motivazione & fiducia |
| Module 5 | Deep Relaxation for Weight Loss | Tiefenentspannung & Abnehmen | Relaxation profonde & minceur | Rilassamento profondo & dimagrire |

### Session 2 — Deep Relaxation Session · `fa-cloud-moon`
| Module | EN | DE | FR | IT |
|---|---|---|---|---|
| Module 1 | Relaxation Fundamentals | Tiefenentspannung Grundlagen | Fondamentaux de la relaxation | Fondamenti del rilassamento |
| Module 2 | Deep Sleep & Recovery | Schlaf & Erholung | Sommeil profond & réparateur | Sonno profondo & ristoratore |
| Module 3 | Breathing Exercises for Calm | Atemübungen für innere Ruhe | Exercices de respiration douce | Esercizi di respirazione dolce |
| Module 4 | Releasing Stress & Letting Go | Stress abbauen & loslassen | Libérer le stress & lâcher prise | Liberarsi dallo stress |
| Module 5 | Inner Peace & Stillness | Innerer Frieden | Paix intérieure profonde | Pace interiore profonda |

### Session 3 — Focus & Energy Session · `fa-seedling`
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
| `--sidebar-bg2` | `#1f3025` | Sidebar hover |
| `--surface` | `#ffffff` | Cards, popovers, topbar |
| `--surface2` | `#f4f8f4` | Subtle hover |
| `--sage` | `#5f9070` | Primary accent |
| `--sage-light` | `#82b494` | Lighter accent |
| `--sage-pale` | `#d4e8da` | Pale accent backgrounds |
| `--text-dark` | `#182418` | Headings |
| `--muted` | `#6e9078` | Secondary text |

### Typography
- **Display:** `Cormorant Garamond` (serif)
- **UI / Body:** `Jost` (sans-serif, weights 300–600)

---

## How to Add a New Language

1. Add to `LANGUAGES` array in `index.html`:
```js
{ code: 'es', label: 'Spanish' },
```
2. Add matching programs under each session in `DATA`:
```js
es: [
  { title: '...', dur: '22 min', mod: 'Módulo 1', url: '#' },
  // 5 total
]
```

---

## How to Add Google Drive Links

Replace every `url: '#'` with:
```
https://drive.google.com/uc?export=download&id=YOUR_FILE_ID
```

---

## How to Add a New Session

1. Add to `DATA`:
```js
{ name: 'Your Session', icon: 'fa-YOUR-ICON', programs: { en:[...], de:[...], fr:[...], it:[...] } }
```
2. Add sidebar item (0-based `data-idx`):
```html
<div class="sb-item" data-idx="3" data-tip="Your Session" onclick="selectSess(3,this)">
  <div class="sb-icon"><i class="fa-solid fa-YOUR-ICON"></i></div>
  <span class="sb-text">Your Session Name</span>
  <span class="sb-badge">5</span>
</div>
```

---

## GitHub Deployment

```bash
git add index.html CHANGELOG.md
git commit -m "fix: revert globe lang btn, show title on mobile, fix mobile button layout"
git push
```

**Live URL:** `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## Pending / Next Steps

- [ ] Replace all `url: '#'` with real Google Drive download links
- [ ] Replace placeholder card thumbnails with real images
- [ ] Replace SVG placeholder logo with real brand logo
- [ ] Rename sessions 2 & 3 if needed
- [ ] Add more languages as needed
- [ ] Add more sessions as needed
- [ ] Verify GitHub Pages deployment