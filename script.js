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
 * FUTURE — Firebase Auth (Option B):
 *   When subscription gating is implemented, the fetch('data.json') call will be
 *   replaced with a Firestore query that returns only the sessions the logged-in
 *   user is subscribed to. The render() and updateUI() functions below will remain
 *   unchanged — only the data source changes.
 * =============================================================================
 */


/* =============================================================================
   UI CONSTANTS
   These are visual fallbacks used when a program has no thumbnail image.
   They live here (not in data.json) because they are UI concerns, not content.
   ============================================================================= */

/**
 * Font Awesome icon class names used as card thumbnail icons when no
 * real image (thumb) is available. Cycles by card index.
 * @type {string[]}
 */
const ICONS = [
  'fa-headphones',
  'fa-apple-whole',
  'fa-heart-pulse',
  'fa-brain',
  'fa-leaf'
];

/**
 * CSS class names for gradient fallback backgrounds on card thumbnails.
 * Defined in style.css (.g0 through .g4). Cycles by card index.
 * @type {string[]}
 */
const GRADS = ['g0', 'g1', 'g2', 'g3', 'g4'];


/* =============================================================================
   APPLICATION STATE
   These variables track what the user is currently viewing and doing.
   All are module-level so every function can read/write them.
   ============================================================================= */

/** @type {Array}   All session data loaded from data.json */
let DATA = [];

/** @type {Array}   All language options loaded from data.json */
let LANGUAGES = [];

/** @type {number}  Index of the currently active session in DATA[] */
let sessIdx = 0;

/** @type {string}  Language code of the currently selected language e.g. 'en' */
let lang = 'en';

/** @type {Set<number>} Indices of currently selected cards in the grid */
let selected = new Set();

/** @type {boolean} Whether the sidebar is in minimised (icon-only) mode */
let mini = false;


/* =============================================================================
   DATA LOADING
   Fetches data.json and initialises the app.
   ============================================================================= */

/**
 * Loads all session/language data from data.json, then renders the initial view.
 * Shows a user-friendly error message if the file cannot be loaded.
 *
 * NOTE: Requires an HTTP server — will not work over file:// protocol.
 */
function loadData() {
  fetch('data.json')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(appData => {
      /* Populate state from the loaded JSON */
      DATA      = appData.sessions;
      LANGUAGES = appData.languages;

      /* Hide loading indicator and show the grid */
      const loadingEl = document.getElementById('loading-state');
      if (loadingEl) loadingEl.style.display = 'none';

      /* Initial render with default session (index 0) and language ('en') */
      render();
    })
    .catch(error => {
      console.error('Serene Audio: Failed to load data.json —', error);

      /* Show a friendly error in the grid area */
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
   Controls expand / collapse behaviour and mobile drawer.
   ============================================================================= */

/**
 * Toggles the sidebar between full-width and icon-only (mini) mode.
 * On desktop: adjusts sidebar width and main content margin via CSS classes.
 * On mobile: sidebar is hidden; use openMobile() / closeMobile() instead.
 */
function toggleSidebar() {
  mini = !mini;
  document.getElementById('sidebar').classList.toggle('mini', mini);
  document.getElementById('main').classList.toggle('wide', mini);
  document.getElementById('tab-icon').className = mini
    ? 'fa-solid fa-chevron-right'
    : 'fa-solid fa-chevron-left';
}

/**
 * Opens the sidebar as a slide-in drawer (mobile only).
 * Activates the dark overlay behind the drawer.
 */
function openMobile() {
  document.getElementById('sidebar').classList.add('mobile-open');
  document.getElementById('overlay').classList.add('show');
}

/**
 * Closes the mobile sidebar drawer and hides the overlay.
 */
function closeMobile() {
  document.getElementById('sidebar').classList.remove('mobile-open');
  document.getElementById('overlay').classList.remove('show');
}


/* =============================================================================
   SESSION SELECTION
   Handles switching between top-level sessions (e.g. Weight Loss, Relaxation).
   ============================================================================= */

/**
 * Switches the active session and re-renders the card grid.
 * Clears any current card selection on session change.
 *
 * @param {number} idx - Zero-based index into the DATA array.
 * @param {HTMLElement} el - The sidebar nav item element that was clicked.
 */
function selectSess(idx, el) {
  sessIdx = idx;
  selected.clear();

  /* Update active state on sidebar nav items */
  document.querySelectorAll('.sb-item[data-idx]').forEach(i => i.classList.remove('active'));
  el.classList.add('active');

  closeMobile();
  render();
}


/* =============================================================================
   LANGUAGE SWITCHER
   Globe button in topbar opens a popover listing all available languages.
   ============================================================================= */

/**
 * Dynamically builds the language option list inside the popover.
 * Called every time the popover opens to ensure the active language is marked.
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
    /* Stop propagation so clicking an option doesn't immediately close via document listener */
    div.onclick = e => { e.stopPropagation(); switchLang(l.code); };
    container.appendChild(div);
  });
}

/**
 * Toggles the language popover open/closed.
 * If already open, closes it. If closed, rebuilds options and opens it.
 *
 * @param {MouseEvent} e - The click event from the globe button.
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

/**
 * Closes the language popover and resets the globe button's open state.
 */
function closeLangPopover() {
  document.getElementById('lang-popover').classList.remove('open');
  document.getElementById('lang-globe-btn').classList.remove('open');
}

/**
 * Switches the active language, clears selection, and re-renders.
 * Also updates the language code label shown in the globe button.
 *
 * @param {string} code - Language code to switch to e.g. 'de', 'fr', 'it'.
 */
function switchLang(code) {
  lang = code;
  selected.clear();
  closeLangPopover();
  document.getElementById('lang-current-code').textContent = code.toUpperCase();
  render();
}

/*
 * Global click listener — closes popover and any open card info popups
 * whenever the user clicks anywhere outside of them.
 */
document.addEventListener('click', e => {
  if (!document.getElementById('lang-wrap').contains(e.target)) {
    closeLangPopover();
  }
  document.querySelectorAll('.card-info-popup.open').forEach(p => p.classList.remove('open'));
});


/* =============================================================================
   RENDER
   Builds the card grid for the current session + language combination.
   ============================================================================= */

/**
 * Renders the full card grid for the currently selected session and language.
 * Falls back to English ('en') if the selected language has no programs yet.
 * Also updates the topbar session icon and title.
 *
 * Cards are built from innerHTML for performance with 45+ items.
 * Each card includes: checkbox, info button, info popup, thumbnail, title, download button.
 */
function render() {
  const session   = DATA[sessIdx];
  const progs     = session.programs[lang] || session.programs['en'];
  const langLabel = LANGUAGES.find(l => l.code === lang)?.label || lang;

  /* Update topbar */
  document.getElementById('tb-icon').innerHTML    = `<i class="fa-solid ${session.icon}"></i>`;
  document.getElementById('tb-title').textContent = session.name;

  const grid = document.getElementById('grid');
  grid.innerHTML = '';

  progs.forEach((program, i) => {
    const card = document.createElement('div');
    card.className = 'card' + (selected.has(i) ? ' selected' : '');
    card.onclick   = () => toggleCard(i, card);

    /*
     * Escape helper — prevents XSS when injecting program titles into
     * HTML attribute strings (e.g. onclick handlers).
     * @param {string} str
     * @returns {string}
     */
    const esc = str => str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');

    /*
     * Thumbnail logic:
     *   - If the program has a `thumb` URL (Google Drive image), use it as a
     *     CSS background-image on the thumb div. The icon overlay is hidden.
     *   - If no `thumb`, fall back to a CSS gradient class + icon overlay.
     */
    const thumbStyle = program.thumb
      ? `style="background-image:url('${program.thumb}');background-size:cover;background-position:center top"`
      : '';
    const thumbClass = program.thumb ? '' : GRADS[i % GRADS.length];
    const iconHTML   = program.thumb
      ? ''
      : `<div class="card-thumb-ico"><i class="fa-solid ${ICONS[i % ICONS.length]}"></i></div>`;

    card.innerHTML = `
      <div class="card-inner">

        <!-- Circular checkbox: fades in on hover, stays visible when selected -->
        <div class="card-cb"><i class="fa-solid fa-check"></i></div>

        <!-- Info button: fades in on hover, stays visible when selected -->
        <div class="card-info-btn" onclick="toggleInfoPopup(event, this)">
          <i class="fa-solid fa-info"></i>
        </div>

        <!--
          Info popup: shows full title + duration + file size + language.
          Positioned absolute; opens on info button click; closes on outside click.
        -->
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

        <!--
          Thumbnail: real Google Drive image when available, CSS gradient fallback otherwise.
          Duration pill tag overlaid at bottom-left.
        -->
        <div class="card-thumb">
          <div class="card-thumb-bg ${thumbClass}" ${thumbStyle}></div>
          <div class="card-thumb-shimmer"></div>
          ${iconHTML}
          <div class="card-thumb-shade"></div>
          <div class="card-dur-tag">
            <i class="fa-regular fa-clock"></i> ${program.dur}
          </div>
        </div>

        <!-- Card body: title (2-line clamp) + full-width Download button -->
        <div class="card-body">
          <div class="card-title">${program.title}</div>
          <a href="${program.url}"
             class="card-dl"
             target="_blank"
             rel="noopener"
             onclick="event.stopPropagation(); toast('Downloading: ${esc(program.title)}', 'success')">
            <i class="fa-solid fa-download"></i> Download
          </a>
        </div>

      </div>`;

    grid.appendChild(card);
  });

  updateUI();
}


/* =============================================================================
   INFO POPUP
   Per-card information panel toggled by the (ⓘ) button.
   ============================================================================= */

/**
 * Toggles the info popup for a specific card.
 * Closes any other open popups first so only one is ever visible at a time.
 *
 * @param {MouseEvent} e    - Click event (stopped from bubbling to card onclick).
 * @param {HTMLElement} btn - The info button element that was clicked.
 */
function toggleInfoPopup(e, btn) {
  e.stopPropagation();

  /* The popup is the next sibling element after the info button */
  const popup   = btn.nextElementSibling;
  const wasOpen = popup.classList.contains('open');

  /* Close all other open popups */
  document.querySelectorAll('.card-info-popup.open').forEach(p => p.classList.remove('open'));

  /* Toggle this one */
  if (!wasOpen) popup.classList.add('open');
}


/* =============================================================================
   CARD SELECTION
   Users can select multiple cards for bulk download.
   ============================================================================= */

/**
 * Toggles the selected state of a single card.
 * Adds/removes the card index from the `selected` Set and syncs the UI.
 *
 * @param {number}      idx - The card's position index in the current program list.
 * @param {HTMLElement} el  - The card DOM element.
 */
function toggleCard(idx, el) {
  selected.has(idx) ? selected.delete(idx) : selected.add(idx);
  el.classList.toggle('selected', selected.has(idx));
  updateUI();
}

/**
 * Selects all cards if not all are selected; deselects all if all are selected.
 * Acts as a toggle: "Select All" ↔ "Deselect All".
 */
function toggleAll() {
  const total = DATA[sessIdx].programs[lang]?.length || 0;

  if (selected.size === total) {
    /* All selected → deselect all */
    selected.clear();
    document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
  } else {
    /* Some or none selected → select all */
    for (let i = 0; i < total; i++) selected.add(i);
    document.querySelectorAll('.card').forEach(c => c.classList.add('selected'));
  }

  updateUI();
}

/**
 * Clears all selected cards and resets related UI elements.
 */
function clearSel() {
  selected.clear();
  document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
  updateUI();
}

/**
 * Syncs all selection-related UI elements to current state:
 *   - Selection count pill (shows/hides and updates count)
 *   - Download Selected button (enabled/disabled)
 *   - Clear button (shows/hides)
 *   - Select All / Deselect All label toggle
 */
function updateUI() {
  const n     = selected.size;
  const total = DATA[sessIdx].programs[lang]?.length || 0;

  document.getElementById('sel-cnt').textContent = n;
  document.getElementById('sel-pill').classList.toggle('show', n > 0);
  document.getElementById('dl-sel-btn').disabled = n === 0;
  document.getElementById('clr-btn').style.display = n > 0 ? 'inline-flex' : 'none';

  document.getElementById('sel-all-btn').innerHTML = n === total
    ? '<i class="fa-solid fa-square-xmark"></i> Deselect All'
    : '<i class="fa-regular fa-square-check"></i> Select All';
}


/* =============================================================================
   DOWNLOAD
   Triggers sequential file downloads via temporary anchor elements.
   ============================================================================= */

/**
 * Downloads only the currently selected programs.
 * Fires downloads sequentially with a 380ms delay between each to avoid
 * browsers blocking simultaneous download attempts.
 */
function downloadSel() {
  const progs = DATA[sessIdx].programs[lang];
  const list  = [...selected].map(i => progs[i]);
  fire(list);
  toast(`Downloading ${list.length} program${list.length > 1 ? 's' : ''}…`, 'success');
}

/**
 * Downloads all programs in the current session and language.
 */
function downloadAll() {
  const progs     = DATA[sessIdx].programs[lang];
  const langLabel = LANGUAGES.find(l => l.code === lang)?.label || lang;
  fire(progs);
  toast(`Downloading all ${progs.length} programs — ${langLabel}`, 'success');
}

/**
 * Fires a sequential series of file downloads.
 * Creates a temporary <a> element for each program, clicks it programmatically,
 * then removes it. A 380ms delay between each prevents browser download blocking.
 *
 * @param {Array} list - Array of program objects with a `url` field.
 */
function fire(list) {
  list.forEach((program, i) => {
    setTimeout(() => {
      const a = document.createElement('a');
      a.href = program.url;
      a.target = '_blank';
      a.rel = 'noopener';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, i * 380);
  });
}


/* =============================================================================
   TOAST NOTIFICATIONS
   Brief feedback messages that appear bottom-right and auto-dismiss.
   ============================================================================= */

/**
 * Shows a toast notification that auto-dismisses after 3.2 seconds.
 *
 * @param {string} msg  - The message to display.
 * @param {string} type - One of 'success' | 'info' | 'error'. Defaults to 'info'.
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

  /* Auto-dismiss: fade out then remove from DOM */
  setTimeout(() => {
    t.style.animation = 'tOut .28s var(--ease) forwards';
    setTimeout(() => t.remove(), 280);
  }, 3200);
}


/* =============================================================================
   INITIALISE
   Entry point — load data then start the app.
   ============================================================================= */
loadData();