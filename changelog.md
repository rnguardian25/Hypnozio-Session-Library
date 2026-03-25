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
| Topbar: session icon + title (always visible) | ✅ Done |
| Topbar: globe → lang code → popover | ✅ Done |
| Card thumbnail: duration tag only (no mod, no lang tags) | ✅ Done |
| Card body: title + full-width Download button | ✅ Done |
| Card title: 17px, 2-line clamp, high contrast | ✅ Done |
| Card hover: soft sage wash, no lift (Google Drive style) | ✅ Done |
| Card selected: full-card sage green wash, no border ring | ✅ Done |
| Checkbox + info btn: fade in on hover / stay on selected | ✅ Done |
| Info popup: title + duration + file size + language | ✅ Done |
| File size field in data (`size: '— MB'` placeholder) | ✅ Done |
| Select All / Deselect All / Clear | ✅ Done |
| Download Selected + Download All | ✅ Done |
| Mobile: 2-row action bar, title always visible | ✅ Done |
| Responsive (mobile, tablet, desktop) | ✅ Done |
| Toast notifications | ✅ Done |
| Google Drive links (placeholder `#`) | ⏳ Pending |
| Real file sizes | ⏳ Pending — replace `— MB` with actual sizes |
| Card thumbnail images | ⏳ Pending |
| Logo image | ⏳ Pending |
| More languages | ⏳ Planned |
| GitHub Pages deployment | ✅ Instructions provided |

---

## Changelog

### v1.8 — `feat/weight-loss-en-real-content` *(current)*
**Commit message:** `feat: add 45 real programs to Weight Loss EN — thumbnails, links, sizes, durations`

Changes:
- ✅ Weight Loss → English now has all 45 real programs (was 5 placeholder entries)
- ✅ All 45 real thumbnail images from Google Drive (`lh3.googleusercontent.com`)
- ✅ All 45 real download links from Google Drive
- ✅ All 45 real file sizes (9.1 MB – 27 MB)
- ✅ All 45 durations rounded to nearest minute
- ✅ Sidebar badge updated from `5` → `45` for Weight Loss session
- ✅ Card renderer updated: uses real `thumb` image as background when present, falls back to CSS gradient when not set (all other sessions/languages still use gradients cleanly)
- ✅ Icon overlay hidden when real thumbnail image is present
- ✅ All other sessions (Deep Relaxation, Focus & Energy) and all other languages (DE, FR, IT) unchanged
- ✅ Changelog updated

---

### v1.7 — `feat/card-redesign-ux` *(current)*
**Commit message:** `feat: card redesign — clean tags, sage selected wash, accessible layout for all ages`

Changes:
- ✅ Module number tag removed from thumbnail
- ✅ Language tag removed from thumbnail
- ✅ Duration shown as pill tag on thumbnail bottom-left (clock + time)
- ✅ Info popup: module removed → file size added (`— MB` placeholder)
- ✅ Selected state: full-card sage wash, no border ring (Google Drive style)
- ✅ Hover: very subtle sage tint, no lift/transform
- ✅ Checkbox + info btn fade in on hover, always visible when selected
- ✅ Title 17px, high contrast, easy to read for all ages
- ✅ Download button full-width, tall, easy to tap (44px+ touch target)
- ✅ `size` field added to all DATA program objects

---

### v1.6 — `fix/mobile-header-and-button-layout`
**Commit message:** `fix: revert globe lang btn, show title on mobile, fix mobile button layout`

Changes:
- ✅ Globe icon reverted, flags removed everywhere
- ✅ Session title always visible on mobile (truncates, never hides)
- ✅ Button text labels never hidden on mobile
- ✅ Mobile: Row 1 = selection buttons, Row 2 = download buttons (right-aligned)

---

### v1.5 — `feat/flag-lang-and-ux-buttons`
**Commit message:** `feat: country flag language switcher, sticky lang btn, right-aligned download buttons`

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

## Data Field Reference

Each program object now has 4 fields:
```js
{ title: 'Program Name', dur: '22 min', size: '— MB', url: '#' }
```

| Field | Description | Status |
|---|---|---|
| `title` | Program display name | ✅ Filled |
| `dur` | Duration string e.g. `'22 min'` | ✅ Filled |
| `size` | File size e.g. `'48 MB'` | ⏳ Replace `'— MB'` when known |
| `url` | Google Drive download link | ⏳ Replace `'#'` |

---

## How to Add Google Drive Links + File Sizes

Replace `url: '#'` and `size: '— MB'` for each program:
```js
{ title: '...', dur: '22 min', size: '48 MB', url: 'https://drive.google.com/uc?export=download&id=FILE_ID' }
```

---

## How to Add a New Language

```js
// In LANGUAGES array:
{ code: 'es', label: 'Spanish' },

// In each session's programs object:
es: [
  { title: '...', dur: '22 min', size: '— MB', url: '#' },
  // 5 total
]
```

---

## How to Add a New Session

```js
// In DATA array:
{ name: 'Your Session', icon: 'fa-YOUR-ICON', programs: { en:[...], de:[...], fr:[...], it:[...] } }
```

```html
<!-- In sidebar HTML (data-idx = 0-based position in DATA): -->
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
git commit -m "feat: card redesign — clean tags, sage selected wash, accessible layout for all ages"
git push
```

**Live URL:** `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## Pending / Next Steps

- [ ] Replace all `url: '#'` with real Google Drive download links
- [ ] Replace all `size: '— MB'` with actual file sizes
- [ ] Replace placeholder card thumbnails with real images
- [ ] Replace SVG placeholder logo with real brand logo
- [ ] Rename sessions 2 & 3 if needed
- [ ] Add more languages as needed
- [ ] Verify GitHub Pages deployment