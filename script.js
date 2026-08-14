/* ==========================================================================
   SAHIL DAS — PORTFOLIO / script.js
   --------------------------------------------------------------------------
   01  Content — case studies (edit copy here)
   02  Utilities
   03  Intro
   04  Cursor + magnetic
   05  Nav (auto-hide, mobile menu, scroll spy) + chrome
   06  Scroll reveal
   07  Hero light
   08  Parallax
   09  Case study panel
   10  Lightbox
   11  Live clock
   12  Init
   ========================================================================== */

/* ══════════════════════════════════════════════════════════════════════
   01. CONTENT
   ----------------------------------------------------------------------
   The page shows the short version; the panel holds the detail.
   Add a project: copy a block, then give its card data-project="<key>".
   ══════════════════════════════════════════════════════════════════════ */
const CASE_STUDIES = {

  'vidyapeeth360': {
    num: '01',
    title: 'Vidyapeeth360',
    sub: 'Institution Management Platform',
    tags: ['UI/UX', 'SaaS', 'Web'],
    cover: 'images/vidyapeeth-landingpage.jpg',
    role: 'UI/UX Designer + Frontend',
    tools: 'Figma · HTML · CSS · JavaScript',
    timeline: 'HelpRevX internship, 2026',
    overview: 'Vidyapeeth360 is an institution management platform. I designed the landing page and the product showcase experience — the surface where a visiting institution first understands what the product does.',
    problem: 'A management platform covers a lot of ground, and that breadth is difficult to communicate on a single page. The landing experience needed to explain the product clearly, show the interface honestly, and hold together across every screen size.',
    approach: [
      'Structured the page around a clear content hierarchy, from positioning to product detail',
      'Designed a product showcase that presents the dashboard experience in context',
      'Built a consistent type scale, spacing rhythm and component set for the page',
      'Planned responsive behaviour for mobile, tablet and desktop from the start'
    ],
    design: 'The visual direction stays restrained so the product interface carries the attention: generous whitespace, a defined type hierarchy, and repeated section patterns that make a long page feel navigable.',
    outcome: 'The landing page and product showcase were designed and then implemented in HTML, CSS and JavaScript as part of my work at HelpRevX.',
    contribution: [
      'Landing page UI/UX',
      'Dashboard showcase',
      'Visual hierarchy',
      'Responsive layouts',
      'Frontend implementation'
    ],
    gallery: []
  },

  'helprevx': {
    num: '02',
    title: 'HelpRevX',
    sub: 'Brand Identity System',
    tags: ['Branding', 'Product Design'],
    cover: 'images/HelpRevX-logo.jpg',
    role: 'Brand & Visual Design',
    tools: 'Figma · Illustrator',
    timeline: 'HelpRevX internship, 2026',
    overview: 'I designed the HelpRevX brand identity and visual system — logo, colour system, typography, iconography and brand guidelines.',
    problem: 'The company needed one coherent identity that would hold up across product interfaces, marketing surfaces and internal documents — not just a logo.',
    approach: [
      'Defined the logo and its construction, spacing and usage rules',
      'Built a colour system with defined roles rather than a loose palette',
      'Set a typographic scale for product and marketing contexts',
      'Drew an icon set that shares a single geometric language',
      'Documented everything as a Brand Kit others could apply without me'
    ],
    design: 'The system is built to be applied, not admired: every token has a stated role, and the guidelines show correct and incorrect usage side by side so the identity survives contact with real work.',
    outcome: 'Delivered as the HelpRevX brand identity and Brand Kit, used across the company\'s digital product experience.',
    contribution: ['Logo design', 'Colour system', 'Typography', 'Iconography', 'Brand guidelines'],
    gallery: ['images/helprevx-design-system.png']
  },

  'healthpulse': {
    num: '03',
    title: 'HealthPulse',
    sub: 'Fitness Mobile App',
    tags: ['Mobile App', 'UX'],
    cover: 'images/healthplus-app.avif',
    role: 'UI/UX Design',
    tools: 'Figma',
    timeline: 'Live industry project · 1stop.ai internship',
    overview: 'An internship project focused on designing a fitness-oriented mobile product experience.',
    problem: 'A fitness app has to make progress legible at a glance while staying usable mid-workout, when attention and precision are both low.',
    approach: [
      'Mapped the core user flows before drawing any interface',
      'Wireframed the primary screens and navigation structure',
      'Designed high-fidelity mobile screens on a consistent grid',
      'Built reusable components so the screens stay systematic'
    ],
    design: 'Mobile-first layouts with large touch targets, a clear information hierarchy for tracking data, and a component set that keeps every screen consistent.',
    outcome: 'Delivered as one of two live industry projects during the 1stop.ai UI/UX internship.',
    contribution: ['User flows', 'Wireframes', 'High-fidelity mobile UI', 'Component library'],
    gallery: []
  },

  'nexus-ai': {
    num: '04',
    title: 'Nexus AI',
    sub: 'SaaS Web Dashboard',
    tags: ['SaaS', 'Dashboard', 'UI/UX'],
    cover: 'images/nexus-ai-dashboard.avif',
    role: 'UI/UX Design',
    tools: 'Figma',
    timeline: 'Live industry project · 1stop.ai internship',
    overview: 'A SaaS dashboard concept focused on structured navigation, information hierarchy, and AI-product experience.',
    problem: 'AI products surface a lot of state at once. Without a deliberate structure, a dashboard turns into a wall of panels that no one can read quickly.',
    approach: [
      'Defined the information architecture and navigation model first',
      'Set a layout grid and density rules for data-heavy views',
      'Designed the component set — tables, cards, panels, controls',
      'Used hierarchy and spacing to separate primary actions from detail'
    ],
    design: 'A structured shell with persistent navigation, a restrained neutral interface so data reads clearly, and accent colour reserved for actions and states.',
    outcome: 'Delivered as one of two live industry projects during the 1stop.ai UI/UX internship.',
    contribution: ['Information architecture', 'Navigation structure', 'Dashboard UI', 'Component design'],
    gallery: []
  },

  'grocery': {
    num: '05',
    title: 'Grocery Delivery App',
    sub: 'Mobile UI',
    tags: ['Mobile App', 'UI/UX'],
    cover: 'images/grocery-app.png.avif',
    role: 'UI/UX Design',
    tools: 'Figma',
    timeline: 'Training project · 1stop.ai internship',
    overview: 'A grocery and food delivery mobile experience designed as part of the 1stop.ai UI/UX training programme.',
    problem: 'Grocery ordering involves browsing, searching and repeat purchasing — three different behaviours that have to coexist in one small interface.',
    approach: [
      'Structured browse, search and cart into a single navigation model',
      'Wireframed the ordering flow end to end',
      'Designed high-fidelity screens on a consistent mobile grid'
    ],
    design: 'Category-led browsing, a persistent cart, and product cards that stay readable at small sizes.',
    outcome: 'Completed as one of three training projects in the 1stop.ai UI/UX internship.',
    contribution: ['User flows', 'Wireframes', 'Mobile UI design'],
    gallery: []
  },

  'edtech': {
    num: '06',
    title: 'EdTech Landing Page',
    sub: 'Landing page',
    tags: ['Landing Page', 'UI/UX'],
    cover: 'images/edtech-landingpage.avif',
    role: 'UI/UX Design',
    tools: 'Figma',
    timeline: 'Training project · 1stop.ai internship',
    overview: 'A conversion-focused education landing page built around clear hierarchy and structured content sections.',
    problem: 'Education products have to establish credibility fast, then guide a visitor to a single next step without burying it.',
    approach: [
      'Sequenced sections so the page answers questions in the order they are asked',
      'Set a type scale that keeps long-form content readable',
      'Designed responsive layouts for each section rather than scaling one down'
    ],
    design: 'A modular section system with a strong headline hierarchy and one clearly dominant call to action.',
    outcome: 'Completed as one of three training projects in the 1stop.ai UI/UX internship.',
    contribution: ['Content structure', 'Landing page UI', 'Responsive layouts'],
    gallery: []
  },

  'seller-dashboard': {
    num: '07',
    title: 'Seller Dashboard',
    sub: 'Dashboard concept',
    tags: ['Dashboard', 'UI/UX'],
    cover: 'images/Ecommerce%20Seller%20Dashboard.avif',
    role: 'UI/UX Design',
    tools: 'Figma',
    timeline: 'Self-directed project',
    overview: 'A seller-side dashboard concept organising orders, listings and performance data into a clear information structure.',
    problem: 'Sellers move between very different tasks — fulfilling orders, editing listings, checking performance — and a flat layout forces them to hunt for each one.',
    approach: [
      'Grouped tasks into distinct areas with a persistent navigation shell',
      'Designed table and card patterns for dense data',
      'Established hierarchy between overview metrics and detail views'
    ],
    design: 'A neutral interface with accent colour reserved for status and actions, so data stays the loudest thing on screen.',
    outcome: 'Delivered as a complete dashboard concept in Figma.',
    contribution: ['Information architecture', 'Dashboard UI', 'Component design'],
    gallery: []
  },

  'salon': {
    num: '08',
    title: 'Salon Website',
    sub: 'Responsive web',
    tags: ['Responsive Design', 'UI/UX'],
    cover: 'images/saloon-responsive.avif',
    role: 'UI/UX Design',
    tools: 'Figma',
    timeline: 'Training project · 1stop.ai internship',
    overview: 'A salon website designed with a visual-first layout and responsive behaviour across all breakpoints.',
    problem: 'Service businesses sell on atmosphere, but the practical information — services, pricing, booking — still has to be one tap away.',
    approach: [
      'Balanced large visual sections against a clear service and booking path',
      'Designed layouts individually for mobile, tablet and desktop',
      'Kept the booking action reachable from every section'
    ],
    design: 'Editorial imagery paired with a restrained type system and an always-visible booking action.',
    outcome: 'Completed as one of three training projects in the 1stop.ai UI/UX internship.',
    contribution: ['Visual design', 'Responsive layouts', 'Service & booking flow'],
    gallery: []
  }

  /* 'responsive-website' was retired from the page to keep Explorations to
     four selected pieces. Re-add a card with data-project to bring it back. */
};


/* ══════════════════════════════════════════════════════════════════════
   02. UTILITIES
   ══════════════════════════════════════════════════════════════════════ */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE    = matchMedia('(hover: hover) and (pointer: fine)').matches;
const DESKTOP = () => innerWidth > 1024;

const esc = (s) => String(s ?? '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/** rAF-throttled scroll subscription. */
function onScroll(fn) {
  let queued = false;
  addEventListener('scroll', () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { fn(); queued = false; });
  }, { passive: true });
  fn();
}


/* ══════════════════════════════════════════════════════════════════════
   03. INTRO  (≤ 1.3s)
   ══════════════════════════════════════════════════════════════════════ */
const Intro = {
  init() {
    const el = $('#intro'), name = $('#introName'), tag = $('#introTag'), bar = $('#introBar');
    const done = () => {
      document.body.classList.remove('lock');
      document.body.classList.add('ready');
    };
    if (!el) { done(); return; }

    document.body.classList.add('lock');

    if (REDUCED) {
      el.remove();
      done();
      return;
    }

    const at = (ms, fn) => setTimeout(fn, ms);
    at(80,   () => { name.classList.add('on'); bar.style.width = '100%'; });
    at(430,  () => tag.classList.add('on'));
    at(1050, () => { el.classList.add('gone'); done(); });
    at(1950, () => el.remove());
  }
};


/* ══════════════════════════════════════════════════════════════════════
   04. CURSOR + MAGNETIC
   ══════════════════════════════════════════════════════════════════════ */
const Cursor = {
  init() {
    const cur = $('#cur'), txt = $('#curTxt');
    if (!cur || !FINE || REDUCED || !DESKTOP()) return;

    let x = 0, y = 0, cx = 0, cy = 0;

    addEventListener('mousemove', (e) => {
      x = e.clientX; y = e.clientY;
      document.body.classList.add('cur-on');
    }, { passive: true });

    (function loop() {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      cur.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
      requestAnimationFrame(loop);
    })();

    document.addEventListener('mouseover', (e) => {
      const view = e.target.closest('[data-cursor="view"]');
      const btn  = e.target.closest('a, button, [data-cursor="btn"]');
      cur.classList.toggle('view-on', !!view);
      cur.classList.toggle('btn-on', !!btn && !view);
      txt.textContent = view ? 'View' : '';
    });

    document.addEventListener('mouseleave', () => document.body.classList.remove('cur-on'));
  }
};

const Magnetic = {
  init() {
    if (!FINE || REDUCED) return;
    $$('.mag').forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - r.left - r.width / 2) * 0.18;
        const dy = (e.clientY - r.top - r.height / 2) * 0.24;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }
};


/* ══════════════════════════════════════════════════════════════════════
   05. NAV + SCROLL CHROME
   ══════════════════════════════════════════════════════════════════════ */
const Nav = {
  init() {
    const nav = $('#nav'), burger = $('#burger'), menu = $('#menu');
    const bar = $('#progressBar'), top = $('#toTop');

    /* Compact on scroll, hidden while reading down, back on the way up */
    let lastY = scrollY;
    onScroll(() => {
      const y = scrollY;
      const h = document.documentElement.scrollHeight - innerHeight;

      nav.classList.toggle('stuck', y > 16);
      const goingDown = y > lastY + 4;
      const goingUp   = y < lastY - 4;
      if (goingDown && y > 220 && !menu.classList.contains('open')) nav.classList.add('hide');
      else if (goingUp || y <= 220) nav.classList.remove('hide');
      lastY = y;

      if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
      if (top) top.classList.toggle('on', y > 800);
    });

    top?.addEventListener('click', () => scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' }));

    /* Mobile menu */
    const close = () => {
      burger.classList.remove('open');
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Open menu');
      document.body.classList.remove('lock');
    };
    burger.addEventListener('click', () => {
      const open = !menu.classList.contains('open');
      burger.classList.toggle('open', open);
      menu.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('lock', open);
      if (open) nav.classList.remove('hide');
    });
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) close(); });
    addEventListener('resize', () => { if (innerWidth > 1024) close(); });
    addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    /* Scroll spy */
    const links = $$('.menu__link');
    const map = new Map();
    links.forEach((l) => {
      const sec = document.getElementById(l.getAttribute('href').slice(1));
      if (sec) map.set(sec, l);
    });
    if ('IntersectionObserver' in window && map.size) {
      const spy = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          links.forEach((l) => l.classList.remove('on'));
          map.get(en.target)?.classList.add('on');
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      map.forEach((_, sec) => spy.observe(sec));
    }
  }
};


/* ══════════════════════════════════════════════════════════════════════
   06. SCROLL REVEAL
   ══════════════════════════════════════════════════════════════════════ */
const Reveal = {
  init() {
    const items = $$('.reveal');
    if (!('IntersectionObserver' in window) || REDUCED) {
      items.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target;
        el.style.transitionDelay = `${el.dataset.delay || 0}ms`;
        el.classList.add('in');
        obs.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -70px 0px' });
    items.forEach((el) => io.observe(el));
  }
};


/* ══════════════════════════════════════════════════════════════════════
   07. HERO — light follows the pointer, gently
   ══════════════════════════════════════════════════════════════════════ */
const Hero = {
  init() {
    const light = $('#heroLight');
    if (light && FINE && !REDUCED && DESKTOP()) {
      let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;

      const loop = () => {
        cx += (tx - cx) * 0.06;
        cy += (ty - cy) * 0.06;
        light.style.translate = `calc(-50% + ${cx.toFixed(2)}px) calc(-50% + ${cy.toFixed(2)}px)`;
        raf = (Math.abs(tx - cx) > .1 || Math.abs(ty - cy) > .1) ? requestAnimationFrame(loop) : null;
      };

      addEventListener('mousemove', (e) => {
        if (scrollY > innerHeight) return;              // only while the hero is on screen
        tx = ((e.clientX / innerWidth) - .5) * 26;      // ±13px
        ty = ((e.clientY / innerHeight) - .5) * 26;
        if (!raf) raf = requestAnimationFrame(loop);
      }, { passive: true });
    }

    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
  }
};


/* ══════════════════════════════════════════════════════════════════════
   08. PARALLAX  (transform-only, off-screen work skipped)
   ══════════════════════════════════════════════════════════════════════ */
const Parallax = {
  init() {
    const items = $$('[data-parallax]');
    if (!items.length || REDUCED) return;

    onScroll(() => {
      const vh = innerHeight;
      items.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -240 || r.top > vh + 240) return;
        const speed = parseFloat(el.dataset.parallax) || 0.02;
        const offset = (r.top + r.height / 2 - vh / 2) * -speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
      });
    });
  }
};


/* ══════════════════════════════════════════════════════════════════════
   09. CASE STUDY PANEL  —  progressive disclosure: the detail lives here
   ══════════════════════════════════════════════════════════════════════ */
const Panel = {
  last: null,

  init() {
    const cs = $('#cs');
    if (!cs) return;

    document.addEventListener('click', (e) => {
      const t = e.target.closest('[data-project]');
      if (!t || !CASE_STUDIES[t.dataset.project]) return;
      e.preventDefault();
      this.open(t.dataset.project);
    });

    cs.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) this.close(); });
    addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
      if (e.key === 'Tab' && !cs.hidden) this.trap(e, cs);
    });
  },

  /* Keep keyboard focus inside the dialog */
  trap(e, root) {
    const f = $$('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])', root);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  },

  open(key) {
    const p = CASE_STUDIES[key];
    const cs = $('#cs'), body = $('#csBody');
    if (!p || !cs || !body) return;

    this.last = document.activeElement;
    const list = (a) => `<ul class="cs__l">${a.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;

    body.innerHTML = `
      <figure class="cs__hero">
        <img src="${esc(p.cover)}" alt="${esc(p.title)} — project visual" loading="lazy" decoding="async" />
      </figure>

      <div class="cs-pad">
        <p class="cs__n">${esc(p.num)} — Case study</p>
        <h2 class="cs__t" id="csTitle">${esc(p.title)}</h2>
        <p class="cs__sub">${esc(p.sub)}</p>
        <ul class="tags cs__tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>

        <dl class="cs__meta">
          <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
          <div><dt>Tools</dt><dd>${esc(p.tools)}</dd></div>
          <div><dt>Context</dt><dd>${esc(p.timeline)}</dd></div>
        </dl>

        <section class="cs__b"><h4>Overview</h4><p>${esc(p.overview)}</p></section>
        <section class="cs__b"><h4>Problem</h4><p>${esc(p.problem)}</p></section>
        <section class="cs__b"><h4>Approach</h4>${list(p.approach)}</section>
        <section class="cs__b"><h4>Design</h4><p>${esc(p.design)}</p></section>
        <section class="cs__b"><h4>Contribution</h4>${list(p.contribution)}</section>
        <section class="cs__b"><h4>Outcome</h4><p>${esc(p.outcome)}</p></section>
        ${p.gallery && p.gallery.length ? `
          <section class="cs__b">
            <h4>Gallery</h4>
            <div class="cs__g">
              ${p.gallery.map((src, i) => `
                <figure><img src="${esc(src)}" alt="${esc(p.title)} — image ${i + 1}" loading="lazy" decoding="async" /></figure>
              `).join('')}
            </div>
          </section>` : ''}
      </div>
    `;

    cs.hidden = false;
    document.body.classList.add('lock');
    $('.cs__sheet', cs).scrollTop = 0;
    $('.cs__x', cs)?.focus();
  },

  close() {
    const cs = $('#cs');
    if (!cs || cs.hidden) return;
    cs.hidden = true;
    document.body.classList.remove('lock');
    this.last?.focus();
  }
};


/* ══════════════════════════════════════════════════════════════════════
   10. LIGHTBOX  —  any [data-lightbox="path"] trigger
   ══════════════════════════════════════════════════════════════════════ */
const Lightbox = {
  last: null,

  init() {
    const lb = $('#lb'), img = $('#lbImg');
    if (!lb || !img) return;

    document.addEventListener('click', (e) => {
      const t = e.target.closest('[data-lightbox]');
      if (!t) return;
      e.preventDefault();
      this.last = document.activeElement;
      img.src = t.dataset.lightbox;
      img.alt = t.dataset.lightboxAlt || '';
      lb.hidden = false;
      document.body.classList.add('lock');
      $('.lb__x', lb)?.focus();
    });

    const close = () => {
      if (lb.hidden) return;
      lb.hidden = true;
      document.body.classList.remove('lock');
      this.last?.focus();
    };
    lb.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) close(); });
    addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }
};


/* ══════════════════════════════════════════════════════════════════════
   11. LIVE CLOCK  (local time in the footer)
   ══════════════════════════════════════════════════════════════════════ */
const Clock = {
  init() {
    const el = $('#localTime');
    if (!el) return;
    const tick = () => {
      try {
        const t = new Intl.DateTimeFormat('en-IN', {
          hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata'
        }).format(new Date());
        el.textContent = `Rourkela, India — ${t} IST`;
      } catch (_) {
        el.textContent = 'Rourkela, India';
      }
    };
    tick();
    setInterval(tick, 30000);
  }
};


/* ══════════════════════════════════════════════════════════════════════
   12. INIT
   ══════════════════════════════════════════════════════════════════════ */
function init() {
  Intro.init();
  Nav.init();
  Reveal.init();
  Hero.init();
  Cursor.init();
  Magnetic.init();
  Parallax.init();
  Panel.init();
  Lightbox.init();
  Clock.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
