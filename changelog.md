# Serene Audio — Project Changelog & Status

> **Last updated:** March 27, 2026
> **Deployed via:** GitHub Pages
> **Stack:** Pure HTML + CSS + Vanilla JS — no frameworks or build tools required

---

## Project Overview

A wellness audio session download website. Users browse sessions, switch languages, select programs, and download audio files directly from Google Drive.

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
| All other sessions/languages — placeholder content | ⏳ Pending |
| Language switcher (globe → popover, 4 languages) | ✅ Done |
| Card design: thumbnail + title (2-line clamp) + Download button | ✅ Done |
| Card hover: soft sage wash (Google Drive style, no lift) | ✅ Done |
| Card selected: full-card sage green wash, no border ring | ✅ Done |
| Checkbox + info button: fade in on hover, stay on selected | ✅ Done |
| Info popup: full title + duration + file size + language | ✅ Done |
| Duration tag on thumbnail (rounded to nearest minute) | ✅ Done |
| Download via hidden iframe (no new tab opens) | ✅ Done |
| Search bar in topbar (globe icon → expanding input) | ✅ Done |
| Search is language-scoped (only searches active language) | ✅ Done |
| Search clears automatically on session or language change | ✅ Done |
| Select All / Deselect All — search-aware (visible cards only) | ✅ Done |
| Download Selected — downloads selected programs only | ✅ Done |
| Download All — search-aware (visible results only when searching) | ✅ Done |
| Dynamic button labels during search (e.g. "Select Results (12)") | ✅ Done |
| Download URLs: `drive.google.com/uc?export=download&id=` format | ✅ Done |
| Thumbnail URLs: `lh3.googleusercontent.com/d/` format (image embed) | ✅ Done |
| Loading state shown while data.json fetches | ✅ Done |
| Error state if data.json fails to load | ✅ Done |
| Responsive (mobile 2-col, tablet 3-col, desktop auto-fill) | ✅ Done |
| Mobile: 2-row action bar, title always visible | ✅ Done |
| Toast notifications | ✅ Done |
| Full developer documentation (JSDoc + inline comments) | ✅ Done |
| Separated into index.html / style.css / script.js / data.json | ✅ Done |
| GitHub Pages — live and deployed | ✅ Done |
| Real logo image | ⏳ Pending — replace SVG placeholder |
| Fill remaining sessions/languages in data.json | ⏳ Pending |
| Firebase authentication (Option B — subscription gating) | ⏳ Planned |

---

## Changelog

### v2.1 — `fix/search-aware-selection-and-download` *(current)*
**Commit message:** `fix: search-aware Select All, Download All, and dynamic button labels during search`

Changes:
- ✅ **`getVisibleCards()` helper added** — single source of truth that returns only cards not hidden by search; used by all selection and download functions
- ✅ **`toggleAll()` fixed** — now operates only on visible (filtered) cards when search is active; hidden cards are completely untouched; uses `data-card-idx` to map back to program data
- ✅ **`updateUI()` enhanced** — button labels update dynamically based on search state:
  - No search: `Select All` / `Deselect All` / `Download All`
  - Search active: `Select Results (N)` / `Deselect Results` / `Download Results (N)`
- ✅ **`downloadAll()` fixed** — when search is active, downloads only the visible filtered programs; when no search, downloads everything as before
- ✅ **`filterCards()` now calls `updateUI()`** — every keystroke immediately refreshes all button labels in sync with the visible card count
- ✅ **`data-card-idx` attribute** added to each rendered card so `getVisibleCards()` can correctly map visible DOM elements back to their program data indices
- ✅ **`id="dl-all-btn"`** added to Download All button in `index.html` so `updateUI()` can update its label text

---

### v2.0 — `feat/iframe-downloads-and-search`
**Commit message:** `feat: iframe downloads (no new tab) + language-scoped live search in topbar`

Changes:
- ✅ **Downloads now use hidden iframes** — no new browser tab opens on download
  - `fireIframe(url)` injects a 0×0 invisible iframe, sets its `src` to the Drive URL, removes it after 4 seconds
  - `downloadOne(url, title)` called by each card's Download button
  - `fire(list)` updated to call `fireIframe()` with 500ms sequential delay
  - Card download button changed from `<a target="_blank">` to `<button onclick="downloadOne(...)">`
- ✅ **Search bar added to topbar** — magnifying glass icon expands into an inline input field
  - `toggleSearch()`, `expandSearch()`, `collapseSearch()`, `clearSearch()` control open/close state
  - Icon becomes `×` when open; Escape key collapses the search bar
  - `onSearchInput()` handles live filtering; `onSearchKeydown()` handles keyboard shortcuts
  - `filterCards()` hides non-matching cards instantly as user types; shows "No programs found" empty state when nothing matches
- ✅ **Search is language-scoped** — results are automatically limited to the active language because cards are already rendered for that language only
- ✅ **Search clears on navigation** — switching session or language resets the search bar and shows all cards
- ✅ **Title hides when search expands** on narrow screens to give input room (CSS `:has()` selector)
- ✅ `#search-wrap`, `#search-btn`, `#search-input` added to `index.html` topbar
- ✅ Search bar styles added to `style.css` (Section 9)

---

### v1.9 — `refactor/separate-data-and-docs`
**Commit message:** `refactor: extract data.json, convert download URLs, add full developer docs`

Changes:
- ✅ All content data extracted from `script.js` into `data.json`
  - `sessions` array (all 3 sessions × 4 languages × programs)
  - `languages` array (EN, DE, FR, IT)
  - `_comment` and `_fields` keys document the JSON structure for editors
- ✅ All 45 Weight Loss EN `url` download links converted:
  - **Before:** `https://lh3.googleusercontent.com/d/FILE_ID`
  - **After:** `https://drive.google.com/uc?export=download&id=FILE_ID`
  - `thumb` image URLs stay as `lh3.googleusercontent.com/d/` (correct for image embedding)
- ✅ `script.js` updated to `fetch('data.json')` on load; all data removed from JS
- ✅ Loading indicator added to `index.html` grid area (shown while data.json loads)
- ✅ Error state added to `script.js` (friendly message if data.json fails to load)
- ✅ Full JSDoc documentation added to `script.js`:
  - File header with architecture overview, dependencies, and Firebase migration notes
  - Every function documented with description, `@param`, `@type` where applicable
  - Inline comments explain non-obvious logic (thumbnail fallback, download sequencing, etc.)
- ✅ Section documentation added to `style.css` (numbered table of contents, section headers, inline notes)
- ✅ HTML comments added to `index.html` (file structure, data-idx alignment, aria labels)
- ✅ `CHANGELOG.md` updated with v1.9

---

### v1.8 — `feat/weight-loss-en-real-content`
**Commit message:** `feat: add 45 real programs to Weight Loss EN — thumbnails, links, sizes, durations`

Changes:
- ✅ Weight Loss → English: 45 real programs replacing 5 placeholder entries
- ✅ All 45 real thumbnails, download links, file sizes, and rounded durations
- ✅ Sidebar badge updated from `5` → `45` for Weight Loss
- ✅ Card renderer supports real thumbnail images with gradient fallback

---

### v1.7 — `feat/card-redesign-ux`
**Commit message:** `feat: card redesign — clean tags, sage selected wash, accessible layout for all ages`

Changes:
- ✅ Module number and language tags removed from thumbnail
- ✅ Duration shown as pill tag (bottom-left of thumbnail)
- ✅ Info popup: module removed → file size added
- ✅ Selected state: full-card sage wash, no border ring (Google Drive style)
- ✅ Title 17px, large Download button for 30–70 age group accessibility

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
**Commit message:** `feat: Serene Audio v1.0 — wellness audio site with multilingual session downloads`

---

### v1.1 — `feat/initial-build`
**Commit message:** `feat: initial release — Serene Audio wellness session site`

---

## data.json Field Reference

Each program object has these fields:

| Field   | Type   | Description | Example |
|---|---|---|---|
| `title` | string | Display name (card + info popup) | `"Changing outlook"` |
| `dur`   | string | Duration (rounded to nearest minute) | `"20 mins"` |
| `size`  | string | File size | `"24.1 MB"` |
| `url`   | string | Google Drive download link | `"https://drive.google.com/uc?export=download&id=..."` |
| `thumb` | string | Google Drive image URL for thumbnail | `"https://lh3.googleusercontent.com/d/..."` |

**`thumb` is optional.** If omitted, the card uses a CSS gradient + icon fallback automatically.

**URL formats:**
```
Download: https://drive.google.com/uc?export=download&id=FILE_ID
Thumbnail: https://lh3.googleusercontent.com/d/FILE_ID
```

---

## How to Add a New Language

1. Add to `data.json` › `languages`:
```json
{ "code": "es", "label": "Spanish" }
```
2. Add programs for each session in `data.json` › `sessions[n].programs`:
```json
"es": [
  { "title": "...", "dur": "20 mins", "size": "— MB", "url": "#" }
]
```

---

## How to Add a New Session

1. Add to `data.json` › `sessions`:
```json
{
  "name": "Your Session Name",
  "icon": "fa-your-icon",
  "programs": {
    "en": [ { "title": "...", "dur": "20 mins", "size": "— MB", "url": "#" } ],
    "de": [], "fr": [], "it": []
  }
}
```
2. Add a sidebar item in `index.html` (inside `<nav class="sb-nav">`).
   `data-idx` must match the session's zero-based position in `data.json › sessions[]`:
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
# Push all files
git add index.html style.css script.js data.json CHANGELOG.md
git commit -m "refactor: extract data.json, convert download URLs, add full developer docs"
git push

# Enable GitHub Pages (one-time setup):
# Repo → Settings → Pages → Source: Deploy from branch → main / root → Save
```

**Live URL:** `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

---

## Pending / Next Steps

- [ ] Push v2.0 + v2.1 changes to GitHub (`script.js`, `index.html`, `style.css`)
- [ ] Fill in placeholder programs for Weight Loss DE, FR, IT
- [ ] Fill in real programs for Deep Relaxation and Focus & Energy sessions
- [ ] Replace SVG placeholder logo with real brand image
- [ ] Implement Firebase authentication (Option B — subscription gating)
- [ ] Add custom domain (e.g. `sessions.yourbrand.com`)
- [ ] Verify GitHub Pages deployment after each push