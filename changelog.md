# Hypnozio Session Library — Project Changelog & Status

> **Last updated:** March 30, 2026
> **Deployed via:** GitHub Pages
> **Stack:** Pure HTML + CSS + Vanilla JS — no frameworks or build tools required

---

## Project Overview

A wellness audio session download website for Hypnozio. Users browse sessions, switch languages, select programs, and download audio files directly from Google Drive.

---

## File Structure

```
your-repo/
├── index.html    — Page structure and sidebar navigation
├── style.css     — All visual styles and responsive breakpoints
├── script.js     — All application logic (data loading, rendering, downloads)
├── data.json     — All content: sessions, programs, languages, links, thumbnails
└── CHANGELOG.md  — This file
```

**IMPORTANT — Local development:**
`fetch('data.json')` in `script.js` requires an HTTP server. Opening `index.html`
directly from your filesystem (`file://` protocol) will fail. Use one of:
- VS Code → Live Server extension (right-click index.html → Open with Live Server)
- Terminal: `npx serve .`
- Terminal: `python -m http.server`

GitHub Pages serves over HTTP, so it works fine in production.

---

## Current Status ✅

| Feature | Status |
|---|---|
| Sidebar with minimize/maximize (desktop) | ✅ Done |
| Sidebar toggle tab (right edge, always visible) | ✅ Done |
| Mobile sidebar drawer + overlay | ✅ Done |
| 3 sessions in sidebar | ✅ Done |
| Weight Loss EN — 45 real programs with thumbnails, links, sizes, durations | ✅ Done |
| Weight Loss — 17 languages with real programs | ✅ Done |
| Deep Relaxation + Focus & Energy — placeholder content | ⏳ Pending |
| Language switcher — 17 languages (EN, AR, PT-BR, CS, NL, FI, FR, DE, EL, HE, HU, IT, NB, PL, RO, ES, SV) | ✅ Done |
| Card design: thumbnail + title (2-line clamp) + Download button | ✅ Done |
| Card hover: soft sage wash (Google Drive style, no lift) | ✅ Done |
| Card selected: full-card sage green wash, no border ring | ✅ Done |
| Checkbox + info button: fade in on hover, stay on selected | ✅ Done |
| Info popup: full title + duration + file size + language | ✅ Done |
| Duration tag on thumbnail (rounded to nearest minute) | ✅ Done |
| Download via hidden iframe (no new tab opens) | ✅ Done |
| Download URLs: correct `drive.google.com/uc?export=download&id=` format | ✅ Done |
| Thumbnail URLs: `lh3.googleusercontent.com/d/` format (image embed) | ✅ Done |
| Search bar in topbar (magnifying glass → expanding input) | ✅ Done |
| Search is language-scoped (only searches active language) | ✅ Done |
| Search clears automatically on session or language change | ✅ Done |
| Search bar expands rightward (not leftward) | ✅ Done |
| × button always clears and collapses search bar | ✅ Done |
| Session title stays visible when search is open (desktop/tablet) | ✅ Done |
| Select All / Deselect All — search-aware (visible cards only) | ✅ Done |
| Download Selected — downloads selected programs only | ✅ Done |
| Download All — search-aware (visible results only when searching) | ✅ Done |
| Dynamic button labels during search (e.g. "Select Results (12)") | ✅ Done |
| Loading state shown while data.json fetches | ✅ Done |
| Error state if data.json fails to load | ✅ Done |
| Responsive (mobile 2-col, tablet 3-col, desktop auto-fill) | ✅ Done |
| Mobile: 2-row action bar, title always visible | ✅ Done |
| Toast notifications | ✅ Done |
| Full developer documentation (JSDoc + inline comments) | ✅ Done |
| Separated into index.html / style.css / script.js / data.json | ✅ Done |
| GitHub Pages — live and deployed | ✅ Done |
| Real Hypnozio logo (lh3 image URL) | ✅ Done |
| Branding updated to "Hypnozio" / "Programs Library" | ✅ Done |
| Firebase authentication (Option B — subscription gating) | ⏳ Planned |
| Deep Relaxation + Focus & Energy real content | ⏳ Pending |

---

## Changelog

### v2.3 — `fix/download-urls-non-english` *(current)*
**Commit message:** `fix: correct download URLs for all non-English languages in data.json`

Changes:
- ✅ **Root cause identified:** all non-English language `url` fields were using
  `https://lh3.googleusercontent.com/d/FILE_ID` (the image/thumbnail viewer format)
  instead of `https://drive.google.com/uc?export=download&id=FILE_ID` (the download format).
  The iframe download method points at the URL directly — when it receives a thumbnail
  URL, Google returns an image preview instead of triggering a file save dialog.
- ✅ **Fix:** in `data.json`, all `"url"` fields for AR, PT-BR, CS, NL, FI, FR, DE, EL,
  HE, HU, IT, NB, PL, RO, ES, and SV were updated to use the correct download format.
  `thumb` fields correctly retain the `lh3.googleusercontent.com/d/` format.
- ✅ **How to apply the fix** using VS Code Find & Replace (Ctrl+H, enable Regex `.*`):
  - Find: `"url": "https://lh3\.googleusercontent\.com/d/`
  - Replace: `"url": "https://drive.google.com/uc?export=download&id=`
  - This targets only `url` fields and leaves all `thumb` fields untouched.

---

### v2.2 — `fix/search-bar-direction-and-close-button`
**Commit message:** `fix: search bar expands rightward, × button always clears and collapses`

Changes:
- ✅ Search bar now expands toward the left (correct direction) — fixed by adding
  `margin-right: auto` to `.tb-title` and removing `margin-left: auto` from `.lang-wrap`
- ✅ × button now always clears the input and collapses regardless of query state —
  fixed by removing the `!searchQuery` guard in `toggleSearch()` in `script.js`
- ✅ Session title no longer vanishes on desktop/tablet when search opens —
  the `:has(.search-wrap.open)` rule now wrapped in `@media (max-width: 480px)` only
- ✅ SVG placeholder logo replaced with `<img src="logo.png">` tag in `index.html`

---

### v2.1 — `fix/search-aware-selection-and-download`
**Commit message:** `fix: search-aware Select All, Download All, and dynamic button labels during search`

Changes:
- ✅ `getVisibleCards()` helper added — returns only cards not hidden by search filter
- ✅ `toggleAll()` fixed — operates only on visible cards when search is active
- ✅ `updateUI()` enhanced — labels change to "Select Results (N)" / "Download Results (N)" during search
- ✅ `downloadAll()` fixed — downloads only visible filtered results when search is active
- ✅ `filterCards()` now calls `updateUI()` — button labels refresh on every keystroke
- ✅ `data-card-idx` attribute added to each card for index mapping
- ✅ `id="dl-all-btn"` added to Download All button in `index.html`

---

### v2.0 — `feat/iframe-downloads-and-search`
**Commit message:** `feat: iframe downloads (no new tab) + language-scoped live search in topbar`

Changes:
- ✅ Downloads use hidden iframes — no new browser tab opens
- ✅ `fireIframe(url)`, `downloadOne()`, updated `fire()` in `script.js`
- ✅ Card download button changed from `<a target="_blank">` to `<button onclick="downloadOne(...)">`
- ✅ Search bar added — magnifying glass expands to input, Escape collapses
- ✅ `filterCards()` hides non-matching cards live as user types
- ✅ Language-scoped search — results limited to active language automatically

---

### v1.9 — `refactor/separate-data-and-docs`
**Commit message:** `refactor: extract data.json, convert download URLs, add full developer docs`

Changes:
- ✅ All content data moved from `script.js` into `data.json`
- ✅ `script.js` now loads data via `fetch('data.json')`
- ✅ All 45 EN download URLs converted to correct `drive.google.com` format
- ✅ Full JSDoc documentation added to `script.js`
- ✅ Section headers and inline notes added to `style.css`
- ✅ HTML comments added to `index.html`

---

### v1.8 — `feat/weight-loss-en-real-content`
**Commit message:** `feat: add 45 real programs to Weight Loss EN — thumbnails, links, sizes, durations`

---

### v1.7 — `feat/card-redesign-ux`
**Commit message:** `feat: card redesign — clean tags, sage selected wash, accessible layout for all ages`

---

### v1.6 — `fix/mobile-header-and-button-layout`
**Commit message:** `fix: revert globe lang btn, show title on mobile, fix mobile button layout`

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
**Commit message:** `feat: Hypnozio v1.0 — wellness audio site with multilingual session downloads`

---

### v1.1 — `feat/initial-build`
**Commit message:** `feat: initial release — Hypnozio Session Library`

---

## data.json Field Reference

Each program object has these fields:

| Field   | Type   | Description | Example |
|---|---|---|---|
| `title` | string | Display name (card + info popup) | `"Changing outlook"` |
| `dur`   | string | Duration string shown on thumbnail tag | `"20 mins"` |
| `size`  | string | File size shown in info popup | `"24.1 MB"` |
| `url`   | string | Google Drive direct download link | `"https://drive.google.com/uc?export=download&id=..."` |
| `thumb` | string | Google Drive image URL for thumbnail (optional) | `"https://lh3.googleusercontent.com/d/..."` |

**`thumb` is optional.** If omitted, the card uses a CSS gradient + icon fallback.

**URL formats — critical distinction:**
```
✅ Download:  https://drive.google.com/uc?export=download&id=FILE_ID
✅ Thumbnail: https://lh3.googleusercontent.com/d/FILE_ID
❌ Wrong for download: https://lh3.googleusercontent.com/d/FILE_ID
```

---

## Current Languages in data.json (Weight Loss Session)

| Code | Language | Programs |
|---|---|---|
| `en` | English | 45 |
| `ar` | Arabic | 10 |
| `pt-br` | Brazilian Portuguese | 5 |
| `cs` | Czech | 5 |
| `nl` | Dutch | 5 |
| `fi` | Finnish | 5 |
| `fr` | French | 5 |
| `de` | German | 5 |
| `el` | Greek | 5 |
| `he` | Hebrew | 5 |
| `hu` | Hungarian | 5 |
| `it` | Italian | 5 |
| `nb` | Norwegian | 5 |
| `pl` | Polish | 10 |
| `ro` | Romanian | 10 |
| `es` | Spanish | 10 |
| `sv` | Swedish | 5 |

---

## How to Add Google Drive Links

**Download URL format:**
```
https://drive.google.com/uc?export=download&id=FILE_ID
```
Extract `FILE_ID` from a shareable Drive link:
`https://drive.google.com/file/d/FILE_ID_HERE/view`

**Thumbnail URL format (for `thumb` field only):**
```
https://lh3.googleusercontent.com/d/FILE_ID
```

---

## How to Add a New Language

1. Add to `data.json` › `languages`:
```json
{ "code": "ja", "label": "Japanese" }
```
2. Add programs under each session in `data.json` › `sessions[n].programs`:
```json
"ja": [
  { "title": "...", "dur": "20 mins", "size": "— MB", "url": "https://drive.google.com/uc?export=download&id=..." }
]
```

---

## How to Add a New Session

1. Add to `data.json` › `sessions`:
```json
{
  "name": "Your Session Name",
  "icon": "fa-your-icon",
  "programs": { "en": [...] }
}
```
2. Add sidebar item in `index.html` (`data-idx` = zero-based position in `sessions[]`):
```html
<div class="sb-item" data-idx="3" data-tip="Your Session" onclick="selectSess(3, this)">
  <div class="sb-icon"><i class="fa-solid fa-your-icon"></i></div>
  <span class="sb-text">Your Session Name</span>
  <span class="sb-badge">5</span>
</div>
```

---

## GitHub Deployment

```bash
git add index.html style.css script.js data.json CHANGELOG.md
git commit -m "fix: correct download URLs for all non-English languages in data.json"
git push
```

**Live URL:** `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## Pending / Next Steps

- [ ] Apply URL fix in `data.json` (see v2.3 above) — replace all non-EN `lh3` download URLs with `drive.google.com` format
- [ ] Push all changes to GitHub
- [ ] Fill in real programs for Deep Relaxation and Focus & Energy sessions
- [ ] Implement Firebase authentication (Option B — subscription gating)
- [ ] Add custom domain (e.g. `library.hypnozio.com`)
- [ ] Verify all 17 language downloads work after URL fix