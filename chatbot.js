/* ==========================================================================
   PORTFOLIO AI ASSISTANT
   --------------------------------------------------------------------------
   Loads after script.js (reuses $, $$, esc, REDUCED, onScroll) and after
   data/portfolio-data.js (reuses the PORTFOLIO_KB global). Self-contained:
   safe to include on any page — every selector is null-guarded, and the
   panel markup itself is what makes the button/panel exist at all.

   01  Local answer engine (intent matching + response builders)
   02  AIService — adapter boundary for a real AI API later
   03  Chat UI (open/close, send, render, chips, typing indicator)
   04  Init
   ========================================================================== */

/* ══════════════════════════════════════════════════════════════════════
   01. LOCAL ANSWER ENGINE
   --------------------------------------------------------------------------
   A lightweight, dependency-free intent matcher — no external NLP, no
   network call. Topics are checked in priority order (specific project /
   company mentions before generic "projects" or "experience" catch-alls)
   and the first topic with a keyword hit wins. Everything it says is
   assembled from PORTFOLIO_KB; nothing here is free-text invention.
   ══════════════════════════════════════════════════════════════════════ */
const AI_FALLBACK = "I don't have that information in Sahil's portfolio yet.";

const AI_PROJECT_ALIASES = {
  'vidyapeeth360': ['vidyapeeth360', 'vidyapeeth 360', 'vidyapeeth'],
  'helprevx': ['helprevx', 'help rev x'],
  'nexus-ai': ['nexus ai', 'nexus-ai', 'nexusai', 'nexus'],
  'healthpulse': ['healthpulse', 'health pulse', 'fitness app', 'health app'],
  'grocery': ['clearcart', 'clear cart', 'grocery'],
  'edtech': ['skillforge', 'skill forge', 'edtech', 'ed tech'],
  'seller-dashboard': ['seller dashboard', 'ecommerce dashboard', 'e-commerce dashboard', 'seller'],
  'salon': ['lumiere', 'lumière', 'salon']
};

function aiNormalize(s) {
  return String(s || '').toLowerCase().trim().replace(/\s+/g, ' ');
}

function aiHasAny(text, words) { return words.some((w) => text.includes(w)); }

function aiFindProject(key) { return PORTFOLIO_KB.projects.find((p) => p.key === key); }

function aiMatchIntent(raw) {
  const t = aiNormalize(raw);
  if (!t) return { type: 'empty' };

  if (aiHasAny(t, ['thank', 'thanks', 'thx'])) return { type: 'thanks' };
  if (/^(hi|hey|hello|yo|sup)\b/.test(t) || aiHasAny(t, ['good morning', 'good evening', 'good afternoon'])) return { type: 'greeting' };
  if (aiHasAny(t, ['what can you do', 'help me', 'what should i ask', "what's this"])) return { type: 'meta' };

  /* Specific project mentions — checked before the generic "projects" catch-all */
  for (const key in AI_PROJECT_ALIASES) {
    if (aiHasAny(t, AI_PROJECT_ALIASES[key])) return { type: 'project', key };
  }

  /* Specific-company experience mentions, before the generic "experience" catch-all */
  if (t.includes('helprevx') && aiHasAny(t, ['intern', 'work at', 'worked at', 'role', 'job', 'did he do'])) return { type: 'exp-company', org: 'HelpRevX' };
  /* "1stop.ai" isn't a project name, so any mention of it (unlike "helprevx") can go
     straight to the experience answer without needing an accompanying "intern"/"role" word. */
  if (aiHasAny(t, ['1stop', 'one stop'])) return { type: 'exp-company', org: '1stop.ai' };

  if (aiHasAny(t, ['internship', 'internships'])) return { type: 'internships' };
  if (aiHasAny(t, ['contact', 'hire', 'reach him', 'reach out', 'email', 'linkedin', 'github', 'get in touch', 'work together', 'collaborate', 'available for work'])) return { type: 'contact' };
  if (aiHasAny(t, ['frontend', 'front-end', 'front end', 'html', 'css', 'javascript', 'developer', 'coding', 'code'])) return { type: 'frontend' };
  if (aiHasAny(t, ['branding', 'brand identity', 'logo work', 'logo design'])) return { type: 'branding' };
  if (aiHasAny(t, ['ui/ux', 'ui ux', 'uiux', 'user experience', 'user interface'])) return { type: 'uiux' };
  if (aiHasAny(t, ['education', 'college', 'university', 'degree', 'studying', 'nit rourkela', 'student'])) return { type: 'education' };
  if (aiHasAny(t, ['skill', 'capable', 'proficient', 'tech stack', 'technologies', 'tools does he use', 'figma', 'what can sahil do', 'what can he do'])) return { type: 'skills' };
  if (aiHasAny(t, ['experience', 'worked', 'journey', 'career', 'background at work'])) return { type: 'experience' };
  if (aiHasAny(t, ['project', 'projects', 'portfolio work', 'case stud', 'built', 'show me his work', 'what has he built', 'what has he done'])) return { type: 'projects' };
  if (aiHasAny(t, ['about sahil', 'who is sahil', 'who are you', 'tell me about sahil', 'about you', 'profile', 'bio', 'specialize', 'specialise', 'who made this'])) return { type: 'about' };

  return { type: 'unknown' };
}

/* Each responder returns { text, cards?, actions?, chips? } */
const AI_RESPONDERS = {
  empty() { return { text: 'Go ahead — ask me anything about Sahil\'s work, skills or experience.' }; },

  greeting() {
    return {
      text: "Hey! I'm here to help you explore Sahil's work — his design projects, skills, experience or how to get in touch. What would you like to know?",
      chips: AI_SUGGESTIONS
    };
  },

  thanks() { return { text: "You're welcome! Anything else you'd like to know about Sahil's work?" }; },

  meta() {
    return {
      text: 'Ask me about Sahil\'s projects, skills, design/frontend experience, internships, or how to get in touch — I\'ll pull the answer straight from his portfolio.',
      chips: AI_SUGGESTIONS
    };
  },

  about() {
    const p = PORTFOLIO_KB.profile;
    return {
      text: `${p.bio[0]}\n\n${p.bio[1]}`,
      actions: [{ label: 'View About', href: 'index.html#about' }]
    };
  },

  skills() {
    const s = PORTFOLIO_KB.skills;
    const lines = Object.keys(s).map((cat) => `• ${cat} — ${s[cat].slice(0, 4).join(', ')}`).join('\n');
    return {
      text: `Sahil works across UI/UX design, branding, product/SaaS design and frontend development, with an AI-assisted workflow (Figma AI, Claude) layered on top.\n\n${lines}`,
      actions: [{ label: 'View Services', href: 'index.html#services' }]
    };
  },

  projects() {
    return {
      text: "Here's Sahil's work — every project below has a full case study.",
      cards: PORTFOLIO_KB.projects
    };
  },

  project(key) {
    const p = aiFindProject(key);
    if (!p) return AI_RESPONDERS.unknown();
    const bullets = p.contribution.map((c) => `• ${c}`).join('\n');
    const note = p.note ? `\n\n${p.note}` : '';
    return {
      text: `${p.summary}\n\nHis contribution included:\n${bullets}${note}`,
      actions: [{ label: 'View Case Study', href: `case-study.html?p=${p.key}` }]
    };
  },

  experience() {
    const lines = PORTFOLIO_KB.experience.map((e) => `• ${e.org} — ${e.role} (${e.period})`).join('\n');
    return {
      text: `A timeline of design, UI/UX, development and creative-leadership experience:\n\n${lines}`,
      actions: [{ label: 'View Experience', href: 'index.html#experience' }]
    };
  },

  internships() {
    const list = PORTFOLIO_KB.experience.filter((e) => /intern/i.test(e.role));
    const text = list.map((e) => `**${e.org}** — ${e.role} (${e.period})\n${e.description}`).join('\n\n');
    return { text, actions: [{ label: 'View Experience', href: 'index.html#experience' }] };
  },

  'exp-company'(org) {
    const e = PORTFOLIO_KB.experience.find((x) => x.org.toLowerCase().includes(org.toLowerCase()));
    if (!e) return AI_RESPONDERS.unknown();
    return {
      text: `At ${e.org}, Sahil worked as ${e.role} (${e.period}).\n\n${e.description}`,
      actions: [{ label: 'View Experience', href: 'index.html#experience' }]
    };
  },

  education() {
    const p = PORTFOLIO_KB.profile;
    return { text: `Sahil is pursuing a ${p.education}, based in ${p.location}.` };
  },

  uiux() {
    return {
      text: 'UI/UX is Sahil\'s core focus — research, wireframing, interaction design and design systems, applied across SaaS dashboards, mobile apps and marketing sites.',
      cards: PORTFOLIO_KB.projects.filter((p) => p.category.includes('UI/UX')).slice(0, 4)
    };
  },

  frontend() {
    const vp = aiFindProject('vidyapeeth360');
    return {
      text: `Sahil's primary focus is UI/UX and product design, with hands-on frontend development from his work on Vidyapeeth360 — where he implemented the landing page in HTML, CSS and JavaScript, using Claude as an AI pair-programming tool through GitHub.\n\nHis frontend skillset: ${PORTFOLIO_KB.skills['Frontend Development'].join(', ')}.`,
      actions: [{ label: 'View Case Study', href: `case-study.html?p=${vp.key}` }]
    };
  },

  branding() {
    return {
      text: 'Sahil\'s branding work centres on HelpRevX\'s own brand identity — logo, colour system and typography — plus the Vidyapeeth360 logo and visual identity.',
      cards: [aiFindProject('helprevx'), aiFindProject('vidyapeeth360')]
    };
  },

  contact() {
    const c = PORTFOLIO_KB.contact;
    return {
      text: "You can reach Sahil directly, or find him on LinkedIn and GitHub.",
      actions: [
        { label: "Let's work together", href: `mailto:${c.email}` },
        { label: 'LinkedIn', href: c.linkedin, external: true },
        { label: 'GitHub', href: c.github, external: true }
      ]
    };
  },

  unknown() { return { text: AI_FALLBACK, chips: AI_SUGGESTIONS }; }
};

const AI_SUGGESTIONS = ['About Sahil', 'Skills', 'Projects', 'Experience', 'Internships', 'UI/UX', 'Frontend Development', 'Contact'];

const AI_SUGGESTION_INTENTS = {
  'About Sahil': 'About Sahil', 'Skills': 'What are his skills?', 'Projects': 'Show me his projects',
  'Experience': 'Tell me about his experience', 'Internships': 'Tell me about his internships',
  'UI/UX': 'Tell me about his UI/UX work', 'Frontend Development': 'Does he have frontend experience?',
  'Contact': 'How can I contact Sahil?'
};

function aiAnswer(raw) {
  const intent = aiMatchIntent(raw);
  const fn = AI_RESPONDERS[intent.type];
  if (!fn) return AI_RESPONDERS.unknown();
  return intent.key ? fn(intent.key) : intent.org ? fn(intent.org) : fn();
}


/* ══════════════════════════════════════════════════════════════════════
   02. AI SERVICE — adapter boundary
   --------------------------------------------------------------------------
   Everything above is the offline fallback. If a real AI API is wired up
   later, swap the body of getResponse() to call a server/serverless
   endpoint that holds the API key — never call a third-party AI API with
   a key from browser code. The rest of the UI doesn't need to change.
   ══════════════════════════════════════════════════════════════════════ */
const AIService = {
  async getResponse(userText) {
    return aiAnswer(userText);
  }
};


/* ══════════════════════════════════════════════════════════════════════
   03. CHAT UI
   ══════════════════════════════════════════════════════════════════════ */
const AI = {
  open: false,
  greeted: false,
  lastFocus: null,

  init() {
    const btn = $('#aiBtn'), panel = $('#aiPanel');
    if (!btn || !panel || typeof PORTFOLIO_KB === 'undefined') return;

    this.btn = btn;
    this.panel = panel;
    this.win = $('.aic__win', panel);
    this.body = $('#aicBody');
    this.form = $('#aicForm');
    this.input = $('#aicInput');
    this.send = $('#aicSend');

    btn.addEventListener('click', () => this.toggle());
    panel.addEventListener('click', (e) => { if (e.target.closest('[data-ai-close]')) this.closePanel(); });
    addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.open) this.closePanel();
      if (e.key === 'Tab' && this.open) this.trap(e);
    });

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = this.input.value.trim();
      if (!text) return;
      this.input.value = '';
      this.autoSize();
      this.toggleSend();
      this.handleSend(text);
    });

    this.input.addEventListener('input', () => { this.autoSize(); this.toggleSend(); });
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.form.requestSubmit(); }
    });

    /* Quick-reply chips (delegated — chips are re-rendered per message) */
    this.body.addEventListener('click', (e) => {
      const chip = e.target.closest('[data-ai-chip]');
      if (chip) { this.handleSend(AI_SUGGESTION_INTENTS[chip.dataset.aiChip] || chip.dataset.aiChip); return; }

      /* Already on index.html? Smooth-scroll to the section instead of a full reload. */
      const link = e.target.closest('a[href^="index.html#"]');
      if (link && this.onHomePage()) {
        e.preventDefault();
        this.closePanel();
        const id = link.getAttribute('href').split('#')[1];
        setTimeout(() => $('#' + id)?.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth' }), REDUCED ? 0 : 260);
      }
    });

    this.toggleSend();
  },

  onHomePage() {
    const p = location.pathname.replace(/\/+$/, '');
    return p === '' || /\/index\.html$/.test(p);
  },

  toggle() { this.open ? this.closePanel() : this.openPanel(); },

  openPanel() {
    this.lastFocus = document.activeElement;
    this.panel.hidden = false;
    requestAnimationFrame(() => this.panel.classList.add('is-on'));
    document.body.classList.add('lock');
    this.btn.setAttribute('aria-expanded', 'true');
    this.open = true;
    if (!this.greeted) { this.greeted = true; this.showWelcome(); }
    setTimeout(() => this.input.focus(), REDUCED ? 0 : 320);
  },

  closePanel() {
    this.panel.classList.remove('is-on');
    document.body.classList.remove('lock');
    this.btn.setAttribute('aria-expanded', 'false');
    this.open = false;
    this.lastFocus?.focus();
    setTimeout(() => { if (!this.open) this.panel.hidden = true; }, REDUCED ? 0 : 380);
  },

  trap(e) {
    const f = $$('a[href], button:not([disabled]), textarea, [tabindex]:not([tabindex="-1"])', this.win);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  },

  autoSize() {
    this.input.style.height = 'auto';
    this.input.style.height = Math.min(this.input.scrollHeight, 120) + 'px';
  },

  toggleSend() { this.send.disabled = !this.input.value.trim(); },

  showWelcome() {
    this.renderBot({
      text: "Hi! I'm Portfolio AI Assistant ✦\n\nI can tell you about Sahil's design work, development skills, projects, internships, experience, and more.\n\nWhat would you like to know?",
      chips: AI_SUGGESTIONS
    });
  },

  async handleSend(text) {
    this.renderUser(text);
    this.showTyping();
    const delay = REDUCED ? 0 : 420 + Math.random() * 380;
    const response = await AIService.getResponse(text);
    await new Promise((r) => setTimeout(r, delay));
    this.hideTyping();
    this.renderBot(response);
  },

  renderUser(text) {
    const el = document.createElement('div');
    el.className = 'aic__msg aic__msg--user';
    el.innerHTML = `<div class="aic__bubble">${esc(text)}</div>`;
    this.body.appendChild(el);
    this.scrollToEnd();
  },

  renderBot(res) {
    const el = document.createElement('div');
    el.className = 'aic__msg aic__msg--bot';
    const fmt = (s) => esc(s).replace(/\n/g, '<br>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    const paras = res.text.split('\n\n').map((p) => `<p>${fmt(p)}</p>`).join('');
    el.innerHTML = `
      <span class="aic__ic" aria-hidden="true">${AI_SPARK_SVG}</span>
      <div class="aic__bubble">
        ${paras}
        ${res.cards ? this.cardsHTML(res.cards) : ''}
        ${res.actions ? this.actionsHTML(res.actions) : ''}
        ${res.chips ? this.chipsHTML(res.chips) : ''}
      </div>`;
    this.body.appendChild(el);
    this.scrollToEnd();
  },

  cardsHTML(cards) {
    return `<div class="aic__cards">${cards.filter(Boolean).map((p) => `
      <a class="aic__card" href="case-study.html?p=${esc(p.key)}">
        <span class="aic__card-t">${esc(p.title)}</span>
        <span class="aic__card-cat">${esc(p.category)}</span>
        <span class="aic__card-d">${esc(p.blurb)}</span>
        <span class="aic__card-go">View case study
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </a>`).join('')}</div>`;
  },

  actionsHTML(actions) {
    return `<div class="aic__actions">${actions.map((a) => `
      <a class="aic__act" href="${esc(a.href)}" ${a.external ? 'target="_blank" rel="noopener noreferrer"' : ''} data-cursor="btn">
        ${esc(a.label)}
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>`).join('')}</div>`;
  },

  chipsHTML(chips) {
    return `<div class="aic__chips-inline">${chips.map((c) => `<button type="button" class="aic__chip" data-ai-chip="${esc(c)}">${esc(c)}</button>`).join('')}</div>`;
  },

  showTyping() {
    const el = document.createElement('div');
    el.className = 'aic__msg aic__msg--bot aic__msg--typing';
    el.id = 'aicTyping';
    el.innerHTML = `<span class="aic__ic" aria-hidden="true">${AI_SPARK_SVG}</span><div class="aic__bubble aic__dots"><i></i><i></i><i></i></div>`;
    this.body.appendChild(el);
    this.scrollToEnd();
  },

  hideTyping() { $('#aicTyping', this.body)?.remove(); },

  scrollToEnd() {
    this.body.scrollTo({ top: this.body.scrollHeight, behavior: REDUCED ? 'auto' : 'smooth' });
  }
};

const AI_SPARK_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z"/></svg>';

AI.init();
