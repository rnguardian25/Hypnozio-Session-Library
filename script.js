/**
 * =============================================================================
 * Serene Audio — script.js
 * =============================================================================
 * Main application logic for the Serene Audio wellness session website.
 *
 * ARCHITECTURE OVERVIEW:
 *   - All content data (sessions, programs, languages) is loaded from data.json
 *     via fetch() on page load. Nothing is hardcoded here.
 *   - UI state is tracked in module-level variables (sessIdx, lang, selected, mini).
 *   - render() rebuilds the card grid whenever the session or language changes.
 *   - filterCards() hides/shows cards based on searchQuery without re-rendering.
 *   - updateUI() syncs button states without re-rendering the grid.
 *
 * FILE DEPENDENCIES:
 *   index.html  — DOM structure this script controls
 *   style.css   — Visual styles (no JS-in-CSS here)
 *   data.json   — All session/program content and language definitions
 *
 * IMPORTANT — LOCAL vs HOSTED:
 *   fetch('data.json') requires an HTTP server. It will NOT work if you open
 *   index.html directly from your file system (file:// protocol) due to browser
 *   CORS restrictions. Always use one of:
 *     - GitHub Pages (recommended for production)
 *     - VS Code Live Server extension (for local development)
 *     - Any local HTTP server: `npx serve .` or `python -m http.server`
 *
 * ADDING NEW CONTENT:
 *   - New languages   → edit data.json › languages array
 *   - New programs    → edit data.json › sessions[n].programs[langCode]
 *   - New sessions    → edit data.json › sessions array AND add sidebar item in index.html
 *
 * DOWNLOAD METHOD — HIDDEN IFRAME:
 *   Downloads use a hidden <iframe> instead of target="_blank" anchor tags.
 *   This avoids opening new browser tabs while still working cross-origin with
 *   Google Drive. Each iframe is injected, pointed at the Drive download URL,
 *   and removed after 4 seconds once the download has been triggered.
 *
 * SEARCH BEHAVIOUR:
 *   Search is language-scoped — it only searches through the programs of the
 *   currently selected language. Switching language or session clears the search.
 *   Matching is case-insensitive and searches the program title field only.
 *
 * FUTURE — Firebase Auth (Option B):
 *   When subscription gating is implemented, the fetch('data.json') call will be
 *   replaced with a Firestore query that returns only the sessions the logged-in
 *   user is subscribed to. The render() and updateUI() functions below will remain
 *   unchanged — only the data source changes.
 * =============================================================================
 */


/* =============================================================================
   UI CONSTANTS
   Visual fallbacks used when a program has no thumbnail image.
   ============================================================================= */

/** @type {string[]} Font Awesome icon classes for gradient card fallbacks */
const ICONS = [
  'fa-headphones',
  'fa-apple-whole',
  'fa-heart-pulse',
  'fa-brain',
  'fa-leaf'
];

/** @type {string[]} CSS gradient class names defined in style.css (.g0–.g4) */
const GRADS = ['g0', 'g1', 'g2', 'g3', 'g4'];


/* =============================================================================
   APPLICATION STATE
   ============================================================================= */

/** @type {Array}      All session data loaded from data.json */
let DATA = [];

/** @type {Array}      All language options loaded from data.json */
let LANGUAGES = [];

/** @type {number}     Zero-based index of the active session in DATA[] */
let sessIdx = 0;

/** @type {string}     Language code of the active language e.g. 'en' */
let lang = 'en';

/** @type {Set<number>} Indices of currently selected cards */
let selected = new Set();

/** @type {boolean}    Whether the sidebar is in minimised (icon-only) mode */
let mini = false;

/** @type {string}     Current search query string — empty means no filter active */
let searchQuery = '';

/** @type {boolean}    Whether the search bar is expanded in the topbar */
let searchOpen = false;


/* =============================================================================
   DATA LOADING
   ============================================================================= */

/**
 * Loads all session/language data from data.json then renders the initial view.
 * Shows a friendly error if the file cannot be loaded.
 * NOTE: Requires an HTTP server — will not work over file:// protocol.
 */
function loadData() {
  fetch('data.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(appData => {
      DATA      = appData.sessions;
      LANGUAGES = appData.languages;

      const loadingEl = document.getElementById('loading-state');
      if (loadingEl) loadingEl.style.display = 'none';

      render();
    })
    .catch(error => {
      console.error('Serene Audio: Failed to load data.json —', error);
      const grid = document.getElementById('grid');
      if (grid) {
        grid.innerHTML = `
          <div style="grid-column:1/-1;padding:48px 20px;text-align:center;color:var(--muted)">
            <i class="fa-solid fa-triangle-exclamation" style="font-size:32px;margin-bottom:14px;display:block;opacity:.5"></i>
            <strong style="color:var(--text-dark);display:block;margin-bottom:6px">Could not load content</strong>
            <span style="font-size:13px">Make sure data.json is in the same folder and the site is served over HTTP.<br>
            Open your terminal in this folder and run: <code>npx serve .</code></span>
          </div>`;
      }
    });
}


/* =============================================================================
   SIDEBAR
   ============================================================================= */

/**
 * Toggles the sidebar between full-width and icon-only (mini) mode.
 */
function toggleSidebar() {
  mini = !mini;
  document.getElementById('sidebar').classList.toggle('mini', mini);
  document.getElementById('main').classList.toggle('wide', mini);
  document.getElementById('tab-icon').className = mini
    ? 'fa-solid fa-chevron-right'
    : 'fa-solid fa-chevron-left';
}

/** Opens the sidebar as a slide-in drawer (mobile only). */
function openMobile() {
  document.getElementById('sidebar').classList.add('mobile-open');
  document.getElementById('overlay').classList.add('show');
}

/** Closes the mobile sidebar drawer and hides the overlay. */
function closeMobile() {
  document.getElementById('sidebar').classList.remove('mobile-open');
  document.getElementById('overlay').classList.remove('show');
}


/* =============================================================================
   SESSION SELECTION
   ============================================================================= */

/**
 * Switches the active session, clears search + selection, and re-renders.
 * @param {number} idx - Zero-based index into DATA[].
 * @param {HTMLElement} el - The sidebar item that was clicked.
 */
function selectSess(idx, el) {
  sessIdx = idx;
  selected.clear();
  clearSearch();

  document.querySelectorAll('.sb-item[data-idx]').forEach(i => i.classList.remove('active'));
  el.classList.add('active');

  closeMobile();
  render();
}


/* =============================================================================
   LANGUAGE SWITCHER
   ============================================================================= */

/**
 * Builds the language option list inside the popover.
 * Called each time the popover opens to keep the active mark current.
 */
function buildLangOpts() {
  const container = document.getElementById('lang-opts-container');
  container.innerHTML = '';

  LANGUAGES.forEach(l => {
    const div = document.createElement('div');
    div.className = 'lang-opt' + (l.code === lang ? ' active' : '');
    div.innerHTML = `
      <span class="lang-opt-code">${l.code.toUpperCase()}</span>
      <span class="lang-opt-name">${l.label}</span>
      <i class="fa-solid fa-check lang-opt-check"></i>`;
    div.onclick = e => { e.stopPropagation(); switchLang(l.code); };
    container.appendChild(div);
  });
}

/**
 * Toggles the language popover open/closed.
 * @param {MouseEvent} e - Click event from the globe button.
 */
function toggleLangPopover(e) {
  e.stopPropagation();
  const pop    = document.getElementById('lang-popover');
  const btn    = document.getElementById('lang-globe-btn');
  const isOpen = pop.classList.contains('open');

  closeLangPopover();
  if (!isOpen) {
    buildLangOpts();
    pop.classList.add('open');
    btn.classList.add('open');
  }
}

/** Closes the language popover. */
function closeLangPopover() {
  document.getElementById('lang-popover').classList.remove('open');
  document.getElementById('lang-globe-btn').classList.remove('open');
}

/**
 * Switches the active language, clears search + selection, and re-renders.
 * @param {string} code - Language code e.g. 'de', 'fr', 'it'.
 */
function switchLang(code) {
  lang = code;
  selected.clear();
  clearSearch();
  closeLangPopover();
  document.getElementById('lang-current-code').textContent = code.toUpperCase();
  render();
}

/* Close lang popover and card info popups on outside click */
document.addEventListener('click', e => {
  if (!document.getElementById('lang-wrap').contains(e.target)) {
    closeLangPopover();
  }
  /* Also close search if click is outside search area */
  const searchWrap = document.getElementById('search-wrap');
  if (searchOpen && searchWrap && !searchWrap.contains(e.target)) {
    if (!searchQuery) collapseSearch();
  }
  document.querySelectorAll('.card-info-popup.open').forEach(p => p.classList.remove('open'));
});


/* =============================================================================
   SEARCH
   Language-scoped live search. Filters cards by title for the active language.
   Switching session or language always clears the search state.
   ============================================================================= */

/**
 * Toggles the search bar open or closed in the topbar.
 * When opening: expands the input and focuses it.
 * When closing with no query: collapses silently.
 * @param {MouseEvent} e - Click event from the search icon button.
 */
function toggleSearch(e) {
  e.stopPropagation();
  if (searchOpen) {
    /* × button: always clear and collapse, regardless of whether there's a query */
    collapseSearch();
  } else {
    expandSearch();
  }
}

/**
 * Expands the search bar and focuses the input field.
 */
function expandSearch() {
  searchOpen = true;
  const wrap  = document.getElementById('search-wrap');
  const input = document.getElementById('search-input');
  const btn   = document.getElementById('search-btn');

  wrap.classList.add('open');
  btn.querySelector('i').className = 'fa-solid fa-xmark'; /* Icon becomes X */
  input.focus();
}

/**
 * Collapses the search bar and clears any active search.
 */
function collapseSearch() {
  searchOpen  = false;
  searchQuery = '';

  const wrap  = document.getElementById('search-wrap');
  const input = document.getElementById('search-input');
  const btn   = document.getElementById('search-btn');

  wrap.classList.remove('open');
  input.value = '';
  btn.querySelector('i').className = 'fa-solid fa-magnifying-glass';

  /* Show all cards again */
  filterCards();
}

/**
 * Clears search state silently (used when session or language changes).
 * Does not animate — just resets state ready for the next render().
 */
function clearSearch() {
  searchQuery = '';
  searchOpen  = false;

  const wrap  = document.getElementById('search-wrap');
  const input = document.getElementById('search-input');
  const btn   = document.getElementById('search-btn');

  if (wrap)  wrap.classList.remove('open');
  if (input) input.value = '';
  if (btn)   btn.querySelector('i').className = 'fa-solid fa-magnifying-glass';
}

/**
 * Handles live input from the search field.
 * Updates searchQuery and immediately filters visible cards.
 * @param {Event} e - Input event from the search field.
 */
function onSearchInput(e) {
  searchQuery = e.target.value.trim().toLowerCase();
  filterCards();
}

/**
 * Handles keyboard events in the search field.
 * Escape key collapses the search bar.
 * @param {KeyboardEvent} e
 */
function onSearchKeydown(e) {
  if (e.key === 'Escape') collapseSearch();
}

/**
 * Filters the rendered card grid based on searchQuery.
 * - Empty query  → all cards shown.
 * - Active query → only cards whose title includes the query are shown.
 * - Shows a "no results" message when nothing matches.
 *
 * LANGUAGE SCOPE: Because cards are already rendered for the active language,
 * filtering them automatically limits results to that language only.
 * There is no cross-language result bleeding.
 */
function filterCards() {
  const cards   = document.querySelectorAll('#grid .card');
  const noRes   = document.getElementById('no-results');
  const query   = searchQuery;
  let   visible = 0;

  cards.forEach(card => {
    const title = card.querySelector('.card-title')?.textContent?.toLowerCase() || '';
    const match = !query || title.includes(query);
    card.style.display = match ? '' : 'none';
    if (match) visible++;
  });

  /* Show / hide "no results" empty state */
  if (noRes) {
    noRes.style.display = (query && visible === 0) ? 'flex' : 'none';
  }

  /* Sync button labels so Select/Download buttons reflect the filtered count */
  updateUI();
}


/* =============================================================================
   RENDER
   Builds the card grid for the current session + language combination.
   ============================================================================= */

/**
 * Renders the full card grid for the current session and language.
 * Falls back to English if the selected language has no programs yet.
 * Calls filterCards() after building so any active search is reapplied.
 */
function render() {
  const session   = DATA[sessIdx];
  const progs     = session.programs[lang] || session.programs['en'];
  const langLabel = LANGUAGES.find(l => l.code === lang)?.label || lang;

  /* Update topbar session icon and title */
  document.getElementById('tb-icon').innerHTML    = `<i class="fa-solid ${session.icon}"></i>`;
  document.getElementById('tb-title').textContent = session.name;

  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  /* Re-create the "no results" element inside the grid */
  const noRes = document.createElement('div');
  noRes.id = 'no-results';
  noRes.style.cssText = 'display:none;grid-column:1/-1;padding:48px 20px;text-align:center;' +
    'color:var(--muted);flex-direction:column;align-items:center;gap:10px';
  noRes.innerHTML = `
    <i class="fa-solid fa-magnifying-glass" style="font-size:28px;opacity:.35"></i>
    <strong style="color:var(--text-dark);font-size:15px">No programs found</strong>
    <span style="font-size:13px">No results for "<span id="no-res-term"></span>" in ${langLabel}.</span>`;
  grid.appendChild(noRes);

  progs.forEach((program, i) => {
    const card = document.createElement('div');
    card.className = 'card' + (selected.has(i) ? ' selected' : '');
    card.dataset.cardIdx = i;   /* index used by getVisibleCards(), toggleAll(), updateUI() */
    card.onclick   = () => toggleCard(i, card);

    /*
     * Escape helper — prevents XSS when injecting program titles
     * into HTML attribute strings (e.g. onclick toast calls).
     */
    const esc = str => str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');

    /* Thumbnail: real image or CSS gradient fallback */
    const thumbStyle = program.thumb
      ? `style="background-image:url('${program.thumb}');background-size:cover;background-position:center top"`
      : '';
    const thumbClass = program.thumb ? '' : GRADS[i % GRADS.length];
    const iconHTML   = program.thumb
      ? ''
      : `<div class="card-thumb-ico"><i class="fa-solid ${ICONS[i % ICONS.length]}"></i></div>`;

    card.innerHTML = `
      <div class="card-inner">

        <!-- Circular checkbox: fades in on hover, stays on selected -->
        <div class="card-cb"><i class="fa-solid fa-check"></i></div>

        <!-- Info button: fades in on hover, stays on selected -->
        <div class="card-info-btn" onclick="toggleInfoPopup(event, this)">
          <i class="fa-solid fa-info"></i>
        </div>

        <!-- Info popup: full title + duration + file size + language -->
        <div class="card-info-popup">
          <div class="card-info-popup-title">${program.title}</div>
          <div class="card-info-popup-row">
            <i class="fa-regular fa-clock"></i>
            <span>${program.dur}</span>
          </div>
          <div class="card-info-popup-row">
            <i class="fa-solid fa-file-audio"></i>
            <span>${program.size}</span>
          </div>
          <div class="card-info-popup-row">
            <i class="fa-solid fa-globe"></i>
            <span>${langLabel}</span>
          </div>
        </div>

        <!-- Thumbnail: real image or gradient fallback. Duration pill at bottom-left. -->
        <div class="card-thumb">
          <div class="card-thumb-bg ${thumbClass}" ${thumbStyle}></div>
          <div class="card-thumb-shimmer"></div>
          ${iconHTML}
          <div class="card-thumb-shade"></div>
          <div class="card-dur-tag">
            <i class="fa-regular fa-clock"></i> ${program.dur}
          </div>
        </div>

        <!-- Card body: title (2-line clamp) + full-width download button -->
        <div class="card-body">
          <div class="card-title">${program.title}</div>
          <!--
            Download button calls downloadOne() instead of using <a href>.
            This triggers the hidden iframe download method which avoids
            opening a new browser tab.
          -->
          <button class="card-dl"
                  onclick="event.stopPropagation(); downloadOne('${esc(program.url)}', '${esc(program.title)}')">
            <i class="fa-solid fa-download"></i> Download
          </button>
        </div>

      </div>`;

    grid.appendChild(card);
  });

  /* Re-apply any active search filter after rebuild */
  filterCards();
  updateUI();
}


/* =============================================================================
   INFO POPUP
   ============================================================================= */

/**
 * Toggles the info popup for a card. Closes all others first.
 * @param {MouseEvent} e    - Click event (stops propagation to card onclick).
 * @param {HTMLElement} btn - The info button element clicked.
 */
function toggleInfoPopup(e, btn) {
  e.stopPropagation();
  const popup   = btn.nextElementSibling;
  const wasOpen = popup.classList.contains('open');
  document.querySelectorAll('.card-info-popup.open').forEach(p => p.classList.remove('open'));
  if (!wasOpen) popup.classList.add('open');
}


/* =============================================================================
   CARD SELECTION
   ============================================================================= */

/**
 * Toggles a single card's selected state.
 * @param {number}      idx - Card index in the current program list.
 * @param {HTMLElement} el  - The card DOM element.
 */
function toggleCard(idx, el) {
  selected.has(idx) ? selected.delete(idx) : selected.add(idx);
  el.classList.toggle('selected', selected.has(idx));
  updateUI();
}

/**
 * Returns only the cards currently visible in the grid (not hidden by search).
 * Used by toggleAll(), updateUI(), and downloadAll() to be search-aware.
 * @returns {HTMLElement[]}
 */
function getVisibleCards() {
  return [...document.querySelectorAll('#grid .card')]
    .filter(c => c.style.display !== 'none');
}

/**
 * Selects / deselects cards based on what is currently visible.
 *
 * SEARCH-AWARE BEHAVIOUR:
 *   - No search active → operates on ALL cards (full program list).
 *   - Search active    → operates ONLY on visible (filtered) cards.
 *     Hidden cards that were previously selected keep their state untouched.
 *
 * Toggle logic:
 *   If every visible card is already selected → deselect all visible.
 *   Otherwise → select all visible.
 */
function toggleAll() {
  const visibleCards   = getVisibleCards();
  const visibleIndices = visibleCards.map(c => parseInt(c.dataset.cardIdx));
  const allSelected    = visibleIndices.every(idx => selected.has(idx));

  if (allSelected) {
    visibleIndices.forEach(idx => selected.delete(idx));
    visibleCards.forEach(c => c.classList.remove('selected'));
  } else {
    visibleIndices.forEach(idx => selected.add(idx));
    visibleCards.forEach(c => c.classList.add('selected'));
  }

  updateUI();
}

/** Clears all selected cards. */
function clearSel() {
  selected.clear();
  document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
  updateUI();
}

/**
 * Syncs all selection-related UI elements to the current state.
 *
 * SEARCH-AWARE:
 *   When a search is active, button labels change to reflect that only
 *   filtered results are being operated on, not the full program list.
 *   e.g. "Select Results (12)" instead of "Select All"
 *        "Download Results (12)" instead of "Download All"
 */
function updateUI() {
  const n            = selected.size;
  const visibleCards = getVisibleCards();
  const visibleCount = visibleCards.length;
  const visibleIndices = visibleCards.map(c => parseInt(c.dataset.cardIdx));
  const allVisibleSelected = visibleCount > 0 && visibleIndices.every(idx => selected.has(idx));
  const isSearching  = searchQuery.length > 0;
  const totalAll     = DATA[sessIdx].programs[lang]?.length || 0;

  /* Selection count pill */
  document.getElementById('sel-cnt').textContent = n;
  document.getElementById('sel-pill').classList.toggle('show', n > 0);
  document.getElementById('dl-sel-btn').disabled = n === 0;
  document.getElementById('clr-btn').style.display = n > 0 ? 'inline-flex' : 'none';

  /* Select All / Deselect All — label reflects search context */
  const selBtn = document.getElementById('sel-all-btn');
  if (isSearching) {
    selBtn.innerHTML = allVisibleSelected
      ? '<i class="fa-solid fa-square-xmark"></i> Deselect Results'
      : `<i class="fa-regular fa-square-check"></i> Select Results (${visibleCount})`;
  } else {
    selBtn.innerHTML = (n === totalAll)
      ? '<i class="fa-solid fa-square-xmark"></i> Deselect All'
      : '<i class="fa-regular fa-square-check"></i> Select All';
  }

  /* Download All — label reflects search context */
  const dlAllBtn = document.getElementById('dl-all-btn');
  if (dlAllBtn) {
    dlAllBtn.innerHTML = isSearching
      ? `<i class="fa-solid fa-folder-arrow-down"></i> Download Results (${visibleCount})`
      : '<i class="fa-solid fa-folder-arrow-down"></i> Download All';
  }
}


/* =============================================================================
   DOWNLOAD — HIDDEN IFRAME METHOD
   Uses a hidden <iframe> to trigger Google Drive downloads without opening
   a new browser tab. The iframe is injected into the DOM, pointed at the
   Drive download URL, then removed after 4 seconds.

   WHY IFRAME INSTEAD OF <a target="_blank">:
   - target="_blank" opens a new tab which disrupts the user experience.
   - Removing target="_blank" caused browsers to only fire the last download
     in a sequence due to cross-origin navigation restrictions.
   - The hidden iframe approach respects CORS while staying on the same page.
   ============================================================================= */

/**
 * Downloads a single program file using a hidden iframe.
 * Called by the individual card Download button.
 *
 * @param {string} url   - Google Drive download URL.
 * @param {string} title - Program title for the toast notification.
 */
function downloadOne(url, title) {
  fireIframe(url);
  toast(`Downloading: ${title}`, 'success');
}

/**
 * Downloads only the currently selected programs sequentially.
 */
function downloadSel() {
  const progs = DATA[sessIdx].programs[lang];
  const list  = [...selected].map(i => progs[i]);
  fire(list);
  toast(`Downloading ${list.length} program${list.length > 1 ? 's' : ''}…`, 'success');
}

/**
 * Downloads all programs in the current session and language.
 *
 * SEARCH-AWARE:
 *   When a search query is active, downloads only the visible (filtered)
 *   programs — not the entire session. This matches the updated button label
 *   "Download Results (N)" shown by updateUI() during search.
 */
function downloadAll() {
  const progs     = DATA[sessIdx].programs[lang];
  const langLabel = LANGUAGES.find(l => l.code === lang)?.label || lang;
  const isSearching = searchQuery.length > 0;

  if (isSearching) {
    /* Only download visible cards during search */
    const visibleIndices = getVisibleCards().map(c => parseInt(c.dataset.cardIdx));
    const list = visibleIndices.map(i => progs[i]).filter(Boolean);
    fire(list);
    toast(`Downloading ${list.length} result${list.length !== 1 ? 's' : ''}…`, 'success');
  } else {
    /* No search — download everything */
    fire(progs);
    toast(`Downloading all ${progs.length} programs — ${langLabel}`, 'success');
  }
}

/**
 * Fires sequential iframe downloads for a list of programs.
 * A 500ms delay between each prevents browsers from cancelling concurrent
 * download requests to the same domain.
 *
 * @param {Array} list - Array of program objects each with a `url` field.
 */
function fire(list) {
  list.forEach((program, i) => {
    setTimeout(() => fireIframe(program.url), i * 500);
  });
}

/**
 * Creates a hidden 0×0 iframe, sets its src to the download URL, then
 * removes it after 4 seconds. The browser intercepts the Drive response
 * headers and triggers the native file-save dialog without opening a tab.
 *
 * @param {string} url - The Google Drive direct download URL.
 */
function fireIframe(url) {
  const iframe = document.createElement('iframe');
  iframe.style.cssText = 'position:fixed;width:0;height:0;border:none;opacity:0;pointer-events:none;z-index:-1';
  iframe.src = url;
  document.body.appendChild(iframe);
  /* Remove after 4s — enough time for the download to have been initiated */
  setTimeout(() => {
    if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
  }, 4000);
}


/* =============================================================================
   TOAST NOTIFICATIONS
   ============================================================================= */

/**
 * Shows a toast notification that auto-dismisses after 3.2 seconds.
 * @param {string} msg  - Message text.
 * @param {string} type - 'success' | 'info' | 'error'. Defaults to 'info'.
 */
function toast(msg, type = 'info') {
  const icons = {
    success: 'fa-circle-check',
    info:    'fa-circle-info',
    error:   'fa-triangle-exclamation'
  };
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<i class="fa-solid ${icons[type] || icons.info} toast-ic"></i> ${msg}`;
  document.getElementById('toasts').appendChild(t);
  setTimeout(() => {
    t.style.animation = 'tOut .28s var(--ease) forwards';
    setTimeout(() => t.remove(), 280);
  }, 3200);
}


/* =============================================================================
   INITIALISE
   ============================================================================= */
loadData();