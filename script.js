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
   08  Parallax (+ 08b work stage, 08c timeline, 08c2 process,
       08d about words, 08e certifications scroll-spy)
   09  Case study panel
   10  Lightbox (+ 10b ambient dust, 10c hero beams)
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
    cover: 'images/vidyapeeth-hero.png',
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
    cover: 'images/helprevx-brand.png',
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
    cover: 'images/healthplus-fitness-app.jpg',
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
    cover: 'images/nexusai.jpg',
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
    cover: 'images/grossery-app-screens.jpg',
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
    cover: 'images/ed-tech-landing-page.png',
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
    cover: 'images/seller-dasboard-mobie-ui.png',
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
    cover: 'images/saloon-responsive-web.png',
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

/* These four have a full case-study write-up (case-study.js) and open as a
   dedicated page instead of the slide-in panel above. */
const FULL_PAGE_STUDIES = ['vidyapeeth360', 'helprevx', 'healthpulse', 'nexus-ai'];


/* ══════════════════════════════════════════════════════════════════════
   01b. SERVICES  —  capability data for the Services panel
   ----------------------------------------------------------------------
   Every fact shown in a service panel is pulled live from CASE_STUDIES,
   EXPERIENCE and CERTIFICATIONS below — nothing is written twice. Add a
   project/role/certificate once, tag it, and it surfaces everywhere it's
   relevant on its own. A service with no matching projects falls back
   to a plain "coming soon" line rather than ever inventing one.
   ══════════════════════════════════════════════════════════════════════ */
const EXPERIENCE = [
  {
    key: 'helprevx', org: 'HelpRevX', role: 'UI/UX & Frontend Intern', year: 'May 2026 — Jul 2026',
    txt: 'Designed the HelpRevX brand identity and Brand Kit, and created Vidyapeeth\'s logo and responsive landing page using HTML, CSS, and JavaScript.',
    tags: ['web', 'uiux', 'branding', 'saas', 'frontend']
  },
  {
    key: '1stop', org: '1stop.ai', role: 'UI/UX Design Intern', year: 'Dec 2025 — Apr 2026',
    txt: 'Completed UI/UX training and internship projects, including HealthPulse and Nexus AI, focusing on product design, prototyping, responsive interfaces, dark-themed systems, and reusable components.',
    tags: ['uiux', 'mobile', 'saas', 'web']
  }
  /* ASME NIT Rourkela and Axiom NIT Rourkela stay out of this list on
     purpose — creative-direction/video-editing roles for a college
     society aren't a specific design service, so they'd have nowhere
     honest to surface in a service panel. They still show in full in
     the main Experience section below. */
];

const CERTIFICATIONS = [
  {
    key: 'helprevx-cert', title: 'UI/UX Developer — HelpRevX',
    issuer: 'HelpRevX · May 20 – Jul 20, 2026',
    href: 'assets/certificates/helprevx-certificate.jpg',
    tags: ['uiux', 'frontend']
  },
  {
    key: '1stop-cert', title: 'UI-UX Internship Program — 1stop',
    issuer: '1stop · Dec 1, 2025 – Apr 1, 2026',
    href: 'assets/certificates/1stop-certificate.jpg',
    tags: ['uiux']
  }
  /* The Design, Prototyping & Advance Manufacturing certificate is
     industrial-design/physical-manufacturing, not one of the six
     services below, so it's left untagged here — it still shows in
     the main Certifications section, just never inside a service panel. */
];

/* Which CASE_STUDIES tag(s) count as a match for each service */
const SERVICE_PROJECT_TAGS = {
  web: ['Web', 'Landing Page', 'Responsive Design'],
  uiux: ['UI/UX', 'UX'],
  branding: ['Branding'],
  saas: ['SaaS', 'Dashboard'],
  mobile: ['Mobile App']
};

/** Frontend has no project *tag* of its own — Vidyapeeth360 is the one
 *  project with real, documented code work (tools list HTML/CSS/JS,
 *  contribution lists "Frontend implementation"), so that's the actual
 *  signal for that service rather than a tag that doesn't exist. */
function projectsForService(key) {
  return Object.keys(CASE_STUDIES).filter((k) => {
    const p = CASE_STUDIES[k];
    if (key === 'frontend') return /\bHTML\b/.test(p.tools);
    return (SERVICE_PROJECT_TAGS[key] || []).some((t) => p.tags.includes(t));
  });
}

const SERVICES = {
  web: {
    num: '01', title: 'Web Design',
    card: 'Clean, conversion-minded website design.',
    blurb: 'Structured, responsive websites and landing pages built around clear hierarchy, a considered type system and a layout that holds together at every screen size.',
    skills: ['Figma', 'UI Design', 'Responsive Design', 'Design Systems', 'Web Layout', 'Prototyping']
  },
  uiux: {
    num: '02', title: 'UI/UX Design',
    card: 'Interfaces that are intuitive and easy to use.',
    blurb: 'Designing intuitive digital experiences from structure to interaction — research, flows and interface design that stay usable under real conditions.',
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Interaction Design', 'Design Systems', 'Usability']
  },
  branding: {
    num: '03', title: 'Branding',
    card: 'Identity systems — logo, colour, typography.',
    blurb: 'Brand identity systems built to be applied, not just admired — logo, colour, typography and documented guidelines that hold up across every surface.',
    skills: ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Color Systems', 'Typography', 'Visual Identity', 'Brand Strategy']
  },
  saas: {
    num: '04', title: 'SaaS Design',
    card: 'Dashboard and product UI for SaaS platforms.',
    blurb: 'Dashboard and product UI for data-heavy platforms — information architecture, layout density and hierarchy that keep complex state readable.',
    skills: ['Dashboard Design', 'Product Design', 'Design Systems', 'UX Architecture', 'Data Visualization', 'Responsive UI', 'User Flows']
  },
  mobile: {
    num: '05', title: 'Mobile App Design',
    card: 'Intuitive mobile experiences designed for real users.',
    blurb: 'Mobile-first interfaces designed for real use — legible at a glance, usable one-handed, and consistent across a full flow of screens.',
    skills: ['Mobile UI', 'Mobile UX', 'User Flows', 'Wireframing', 'Prototyping', 'Responsive Design', 'Interaction Design']
  },
  frontend: {
    num: '06', title: 'Frontend Development',
    card: 'Clean, responsive and high-performance websites.',
    blurb: 'Turning approved designs into responsive, production-ready interfaces — clean HTML, CSS and JavaScript implemented straight from Figma.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design', 'Frontend Development', 'GitHub', 'Figma-to-Code', 'UI Implementation']
  }
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
      txt.textContent = view ? 'View ↗' : '';
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
    /* Mouse parallax on the atmospheric light (desktop only, max 15px) */
    const light = $('#heroLight');
    if (light && FINE && !REDUCED && DESKTOP()) {
      let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;

      const loop = () => {
        cx += (tx - cx) * 0.06;
        cy += (ty - cy) * 0.06;
        light.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
        raf = (Math.abs(tx - cx) > .1 || Math.abs(ty - cy) > .1) ? requestAnimationFrame(loop) : null;
      };

      addEventListener('mousemove', (e) => {
        if (scrollY > innerHeight) return;              // only while the hero is on screen
        tx = ((e.clientX / innerWidth) - .5) * 30;      // ±15px
        ty = ((e.clientY / innerHeight) - .5) * 30;
        if (!raf) raf = requestAnimationFrame(loop);
      }, { passive: true });
    }

    /* Cinematic exit — the hero drifts up and dims as you scroll away.
       Transform + opacity only, and lerped rather than snapped to scrollY
       so a fast flick or a notchy trackpad still reads as one continuous
       drift instead of a jump cut. */
    const hin = $('.hero__in'), cue = $('.hero__scroll');
    if (hin && !REDUCED) {
      let sy = 0, hraf = null;

      const paintHero = () => {
        const vh = innerHeight;
        if (sy <= vh * 1.25) {
          const p = Math.min(1, sy / (vh * 0.72));
          hin.style.transform = `translate3d(0, ${(-sy * 0.16).toFixed(1)}px, 0)`;
          hin.style.opacity = (1 - p).toFixed(3);
          if (light) light.style.opacity = (1 - p * 0.9).toFixed(3);
          if (cue) cue.style.opacity = sy > 60 ? '0' : '';
        }
      };
      const heroLoop = () => {
        sy += (scrollY - sy) * 0.15;
        paintHero();
        hraf = (Math.abs(scrollY - sy) > 0.4) ? requestAnimationFrame(heroLoop) : null;
      };
      onScroll(() => { if (!hraf) hraf = requestAnimationFrame(heroLoop); });
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
   08b. WORK STAGE  —  the scroll-driven Selected Work showcase
   ----------------------------------------------------------------------
   Desktop + motion: the stage is tall, its viewport pins, and scroll
   position maps to a continuous index x ∈ [0, N-1]. A lerped copy of x
   trails the raw scroll-derived value by a few frames — that trailing lag
   is what makes the crossfade read as flowing motion rather than content
   snapped 1:1 to the scrollbar. Each slide's distance from the smoothed
   index drives opacity, translate and scale, so project 01 dissolves into
   02 as one continuous story. Mobile / reduced motion: the class never
   goes on and the slides read as a normal stacked flow.
   ══════════════════════════════════════════════════════════════════════ */
const Workstage = {
  init() {
    const stage = $('#wstage');
    if (!stage) return;

    const slides = $$('.slides > .slide', stage);
    const moods  = $$('.wstage__mood > .mood', stage);
    const curEl  = $('#wprogCur', stage);
    const fillEl = $('#wprogFill', stage);
    const rail   = $$('.wprog2 > li', stage);          // decorative right-side dot rail
    const N = slides.length;
    if (N < 2) return;

    /* Cache each slide's moving parts once, keyed off the elements
       themselves — cheaper than re-querying every animation frame. */
    const parts = slides.map((s) => ({
      cover: $('.slide__cover', s),
      kids: $$('.slide__copy > *', s),                  // n, title, desc, tags, arrow — in reading order
    }));

    let on = false, x = 0, raf = null;

    const targetX = () => {
      const r = stage.getBoundingClientRect();
      const span = r.height - innerHeight;
      if (span <= 0) return 0;
      const t = Math.min(1, Math.max(0, -r.top / span));
      return t * (N - 1);
    };

    /* Stacked sheets, not a crossfade: each slide sits at translateY(0)
       once settled. d = val - i is negative while a slide is still
       climbing in from below (entry phase), positive once the NEXT
       slide starts sliding over it (cover phase) — the two phases meet
       at d=0 with matching values on both sides, so there's no seam. */
    const render = (val) => {
      slides.forEach((s, i) => {
        const { kids, cover } = parts[i];
        const d = val - i;
        const entry = Math.min(1, Math.max(0, 1 + d));   // 0→1 as it arrives (d: -1→0)
        const coverAmt = Math.min(1, Math.max(0, d));    // 0→1 as the next one covers it (d: 0→1)

        s.style.visibility = d <= -1.02 ? 'hidden' : 'visible';
        s.style.pointerEvents = Math.abs(d) < .5 ? 'auto' : 'none';

        const ty = (1 - entry) * 100;                              // 100% → 0%
        const scale = d < 0 ? 0.98 + entry * 0.02 : 1 - coverAmt * 0.03;
        s.style.transform = `translate3d(0, ${ty.toFixed(2)}%, 0) scale(${scale.toFixed(4)})`;

        /* Ramp faster than linear so the outgoing sheet is already deep
           into near-black well before coverAmt hits 1 — that's what
           hides any last-fraction-of-a-percent lag between this sheet
           settling and the next one's edge fully arriving over it. */
        if (cover) cover.style.opacity = (Math.sqrt(coverAmt) * .85).toFixed(3);

        /* Text: fades + lifts in, each child a hair behind the last —
           a real scroll-tied stagger, not a CSS delay (JS already owns
           this transform every frame; a transition would just fight it). */
        kids.forEach((el, ci) => {
          const e2 = Math.min(1, Math.max(0, entry - ci * .05));
          el.style.opacity = e2.toFixed(3);
          el.style.transform = `translate3d(0, ${((1 - e2) * 18).toFixed(1)}px, 0)`;
        });
      });

      /* Mood beds crossfade on the same curve as their slide */
      moods.forEach((m, i) => { m.style.opacity = Math.max(0, 1 - Math.abs(val - i) * 1.5).toFixed(3); });

      /* 01 / 04 + a continuous fill — no per-step snapping */
      const act = Math.min(N - 1, Math.max(0, Math.round(val)));
      if (curEl) curEl.textContent = String(act + 1).padStart(2, '0');
      if (fillEl) fillEl.style.setProperty('--p', (val / (N - 1)).toFixed(3));
      rail.forEach((li, i) => li.classList.toggle('on', i === act));
    };

    const loop = () => {
      if (!on) { raf = null; return; }
      const t = targetX();
      x += (t - x) * 0.15;                              // the flow: trail the true position, don't snap to it
      render(x);
      raf = (Math.abs(t - x) > 0.0015) ? requestAnimationFrame(loop) : null;
    };
    const kick = () => { if (on && !raf) raf = requestAnimationFrame(loop); };

    const sync = () => {
      const want = DESKTOP() && !REDUCED;
      if (want === on) return;
      on = want;
      stage.classList.toggle('wstage--on', on);
      if (on) { x = targetX(); render(x); kick(); }
      else slides.forEach((s, i) => {
        s.style.cssText = '';
        const { kids, cover } = parts[i];
        if (cover) cover.style.opacity = '';
        kids.forEach((el) => { el.style.opacity = ''; el.style.transform = ''; });
      });
    };

    sync();
    onScroll(kick);
    addEventListener('resize', () => { sync(); if (on) kick(); });

    /* Cursor-based 3D tilt + a whisper of parallax on the mockup — desktop,
       fine pointer, motion allowed only. Kept independent of the rAF loop
       above: it only updates on mousemove, and the CSS transition on
       .slide__tilt is what eases it back to neutral on mouseleave. Kept
       to 1–2° so it reads as a whisper, not a flip. */
    if (FINE && DESKTOP() && !REDUCED) {
      slides.forEach((s) => {
        const hit = $('.hit', s);                       // the actual top layer receiving pointer events
        const media = $('.slide__media', s);
        const tilt = $('.slide__tilt', s);
        if (!hit || !media || !tilt) return;
        hit.addEventListener('mousemove', (e) => {
          const r = media.getBoundingClientRect();
          const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
          if (!inside) { tilt.style.transform = ''; return; }
          const px = (e.clientX - r.left) / r.width - .5;
          const py = (e.clientY - r.top) / r.height - .5;
          tilt.style.transform =
            `rotateX(${(-py * 2).toFixed(2)}deg) rotateY(${(px * 2.4).toFixed(2)}deg) translate3d(${(px * 6).toFixed(1)}px, ${(py * 6).toFixed(1)}px, 0)`;
        });
        hit.addEventListener('mouseleave', () => { tilt.style.transform = ''; });
      });
    }
  }
};


/* ══════════════════════════════════════════════════════════════════════
   08c. EXPERIENCE TIMELINE  —  scroll-progress line + live row
   ══════════════════════════════════════════════════════════════════════ */
/* Rows themselves are handled entirely by the standard .reveal system
   (each .exp__i fades/rises into place once and stays put — see Reveal
   above). This module only drives the decorative accent line's fill
   as the list scrolls past the viewport centre; it never touches row
   opacity, so nothing dims, dims out, or gets treated as "active". */
const Timeline = {
  init() {
    const list = $('.exp');
    if (!list || REDUCED) return;

    onScroll(() => {
      const vh = innerHeight;
      const lr = list.getBoundingClientRect();
      if (lr.bottom < -100 || lr.top > vh + 100) return;

      const mid = vh * 0.52;
      const p = Math.min(1, Math.max(0, (mid - lr.top) / lr.height));
      list.style.setProperty('--fill', (p * 100).toFixed(1) + '%');
    });
  }
};


/* ══════════════════════════════════════════════════════════════════════
   08c2. PROCESS  —  scroll-filled connector, nodes ignite in sequence
   ══════════════════════════════════════════════════════════════════════ */
const Process = {
  init() {
    const proc = $('#proc');
    if (!proc) return;
    const items = $$('.proc__i', proc);
    const n = items.length;
    if (!n) return;

    if (REDUCED) { items.forEach((it) => it.classList.add('is-on')); return; }

    onScroll(() => {
      const r = proc.getBoundingClientRect(), vh = innerHeight;
      if (r.bottom < 0 || r.top > vh) return;

      /* 0 as an edge appears at the bottom of the viewport, 1 once it's
         climbed to ~15% from the top — one full viewport's worth of
         scroll to ignite, so it reads as a deliberate reveal rather
         than firing before the row is even comfortably in view. The
         line fill tracks the row as a whole (only visible on the
         desktop single-row layout); each node's own ignition is keyed
         off ITS OWN position, not the row's — on desktop every node
         shares the row's top so this reduces to the same sequential
         reveal, but on the mobile stacked layout each step still
         ignites as it individually scrolls into place. */
      const pace = (top) => Math.min(1, Math.max(0, (vh - top) / (vh * 0.85)));
      proc.style.setProperty('--p', pace(r.top).toFixed(3));
      items.forEach((it, i) => {
        const p = pace(it.getBoundingClientRect().top);
        it.classList.toggle('is-on', p >= (i + .2) / n);
      });
    });
  }
};


/* ══════════════════════════════════════════════════════════════════════
   08d. ABOUT STATEMENT  —  words brighten with scroll
   ══════════════════════════════════════════════════════════════════════ */
const AboutWords = {
  init() {
    const t = $('#aboutTitle');
    if (!t || REDUCED) return;                          // reduced motion: plain text

    const words = t.textContent.trim().split(/\s+/);
    t.innerHTML = words.map((w) => `<span class="w">${esc(w)}</span>`).join(' ');
    t.classList.add('about__statement--live');
    const ws = $$('.w', t);
    /* A small per-word stagger — so words that cross the threshold together
       still ripple in left to right instead of popping in as one block */
    ws.forEach((w, i) => { w.style.transitionDelay = `${Math.min(i, 10) * 22}ms`; });

    onScroll(() => {
      const r = t.getBoundingClientRect(), vh = innerHeight;
      if (r.top > vh || r.bottom < 0) return;
      const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.38)));
      const n = Math.round(p * ws.length);
      ws.forEach((w, i) => w.classList.toggle('on', i < n));
    });
  }
};


/* ══════════════════════════════════════════════════════════════════════
   08e. CERTIFICATIONS  —  sticky-scroll: whichever item sits at the
   viewport centre lights up on the left and swaps the image on the
   right. Item 1 is marked active in the HTML so there's no flash before
   JS runs; IntersectionObserver takes over from the first scroll.
   ══════════════════════════════════════════════════════════════════════ */
const Certs = {
  init() {
    const list = $('#certsList');
    const stage = $('.certs__stage');
    if (!list || !stage) return;
    const items = $$('.certs__item', list);
    const images = $$('.certs__img', stage);
    const idx = $('#certsIdx');
    if (!items.length || !('IntersectionObserver' in window)) return;

    const setActive = (n) => {
      items.forEach((it) => it.classList.toggle('is-on', it.dataset.cert === n));
      images.forEach((im) => im.classList.toggle('is-on', im.dataset.cert === n));
      if (idx) idx.textContent = n.padStart(2, '0');
    };

    /* A thin band at the exact viewport centre — only the item currently
       crossing it fires isIntersecting */
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) setActive(en.target.dataset.cert); });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    items.forEach((it) => spy.observe(it));

    /* Continuous proximity fade — each item eases its opacity/lift toward
       the viewport centre as you scroll, instead of snapping the moment
       it crosses the IntersectionObserver band above. A lerp'd rAF loop
       (rather than writing scroll position straight to style) is what
       keeps fast/trackpad scrolling from feeling stepped. */
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = items.map(() => 0);
    const current = items.map(() => 0);
    let queued = false;

    const measure = () => {
      const vh = innerHeight, mid = vh / 2;
      items.forEach((it, i) => {
        const r = it.getBoundingClientRect();
        const dist = Math.abs((r.top + r.height / 2) - mid);
        targets[i] = 1 - Math.min(dist / (vh * .65), 1);
      });
      queued = false;
    };

    const tick = () => {
      items.forEach((it, i) => {
        current[i] += (targets[i] - current[i]) * .12;
        it.style.setProperty('--prox', current[i].toFixed(4));
      });
      requestAnimationFrame(tick);
    };

    const queueMeasure = () => { if (!queued) { queued = true; requestAnimationFrame(measure); } };

    addEventListener('scroll', queueMeasure, { passive: true });
    addEventListener('resize', queueMeasure, { passive: true });
    measure();
    requestAnimationFrame(tick);
  }
};


/* ══════════════════════════════════════════════════════════════════════
   09. PANEL  —  progressive disclosure: case studies AND services share
   one sliding sheet (#cs). [data-project] opens a case study, [data-service]
   opens a service's capability view; either can be nested inside the
   other (a project card inside a service view opens right over it).
   Services are also hash-routable — #services/<key> — so a service view
   is shareable/bookmarkable without a page reload.
   ══════════════════════════════════════════════════════════════════════ */
const Panel = {
  last: null,

  init() {
    const cs = $('#cs');
    if (!cs) return;

    document.addEventListener('click', (e) => {
      const p = e.target.closest('[data-project]');
      if (p && CASE_STUDIES[p.dataset.project]) {
        e.preventDefault();
        const key = p.dataset.project;
        if (FULL_PAGE_STUDIES.includes(key)) { location.href = 'case-study.html?p=' + key; return; }
        this.openProject(key);
        return;
      }
      const s = e.target.closest('[data-service]');
      if (s && SERVICES[s.dataset.service]) { e.preventDefault(); this.openService(s.dataset.service); }
    });

    cs.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) this.close(); });
    addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
      if (e.key === 'Tab' && !cs.hidden) this.trap(e, cs);
    });

    /* A bookmarked/shared #services/<key> link opens straight to that
       service; back/forward through history closes or reopens it. */
    const route = () => {
      const m = location.hash.match(/^#services\/([\w-]+)$/);
      if (m && SERVICES[m[1]]) this.openService(m[1], false);
      else if (!cs.hidden && $('#csBody .svcd')) this.close();
    };
    addEventListener('popstate', route);
    route();
  },

  /* Keep keyboard focus inside the dialog */
  trap(e, root) {
    const f = $$('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])', root);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  },

  openProject(key) {
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
    $('.cs__sheet', cs).classList.remove('cs__sheet--wide');
    document.body.classList.add('lock');
    $('.cs__sheet', cs).scrollTop = 0;
    $('.cs__x', cs)?.focus();
  },

  openService(key, pushHash = true) {
    const s = SERVICES[key];
    const cs = $('#cs'), body = $('#csBody');
    if (!s || !cs || !body) return;

    this.last = document.activeElement;

    const projectKeys = projectsForService(key);
    const exp = EXPERIENCE.filter((e) => e.tags.includes(key));
    const certs = CERTIFICATIONS.filter((c) => c.tags.includes(key));

    const projects = projectKeys.length ? `<ul class="svcd__projects">${projectKeys.map((pk, i) => {
      const p = CASE_STUDIES[pk];
      return `
        <li class="svcd__proj" style="--i:${i}">
          <button class="hit" type="button" data-project="${esc(pk)}" data-cursor="view" aria-label="Open case study: ${esc(p.title)}">Open case study</button>
          <figure><img src="${esc(p.cover)}" alt="${esc(p.title)} — project visual" loading="lazy" decoding="async" /></figure>
          <div class="svcd__proj-copy">
            <h5>${esc(p.title)}</h5>
            <p>${esc(p.sub)}</p>
            <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
            <span class="arrow">View case study
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </span>
          </div>
        </li>`;
    }).join('')}</ul>` : `<p class="svcd__soon">Selected ${esc(s.title.toLowerCase())} work coming soon.</p>`;

    const expBlock = exp.length ? `
      <section class="cs__b">
        <h4>Experience</h4>
        <ul class="svcd__exp">${exp.map((e, i) => `
          <li style="--i:${i}">
            <div class="svcd__exp-lead"><h5>${esc(e.org)}</h5><span>${esc(e.role)}</span></div>
            <p>${esc(e.txt)}</p>
          </li>`).join('')}</ul>
      </section>` : '';

    const certBlock = certs.length ? `
      <section class="cs__b">
        <h4>Certifications</h4>
        <ul class="svcd__certs">${certs.map((c, i) => `
          <li style="--i:${i}">
            <a href="${esc(c.href)}" data-lightbox="${esc(c.href)}" data-lightbox-alt="${esc(c.title)}" data-cursor="view">
              <span>${esc(c.title)}</span><em>${esc(c.issuer)}</em>
            </a>
          </li>`).join('')}</ul>
      </section>` : '';

    body.innerHTML = `
      <div class="cs-pad svcd">
        <p class="cs__n">${esc(s.num)} — Service</p>
        <h2 class="cs__t" id="csTitle">${esc(s.title)}</h2>
        <p class="cs__sub">${esc(s.blurb)}</p>

        <div class="svcd__grid">
          <div class="svcd__left">
            <section class="cs__b">
              <h4>Skills &amp; Tools</h4>
              <ul class="tags svcd__skills">${s.skills.map((sk, i) => `<li style="--i:${i}">${esc(sk)}</li>`).join('')}</ul>
            </section>
          </div>
          <div class="svcd__right">
            <section class="cs__b">
              <h4>Selected Projects</h4>
              ${projects}
            </section>
            ${expBlock}
            ${certBlock}
          </div>
        </div>

        <a class="btn btn--out svcd__cta" href="#work" data-close data-cursor="btn">Explore related work
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    `;

    cs.hidden = false;
    $('.cs__sheet', cs).classList.add('cs__sheet--wide');
    document.body.classList.add('lock');
    $('.cs__sheet', cs).scrollTop = 0;
    $('.cs__x', cs)?.focus();
    if (pushHash) history.pushState(null, '', '#services/' + key);
  },

  close() {
    const cs = $('#cs');
    if (!cs || cs.hidden) return;
    cs.hidden = true;
    document.body.classList.remove('lock');
    this.last?.focus();
    if (/^#services\//.test(location.hash)) history.pushState(null, '', location.pathname + location.search);
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
   10b. AMBIENT DUST  —  a few slow-drifting particles, desktop only
   ══════════════════════════════════════════════════════════════════════ */
const Dust = {
  init() {
    const box = $('#dust');
    if (!box || REDUCED || innerWidth < 700) return;

    const COUNT = 9;   /* kept sparse so the hero stays calm */
    const rand = (min, max) => min + Math.random() * (max - min);
    let html = '';

    for (let i = 0; i < COUNT; i++) {
      const dur = rand(16, 30);
      html +=
        `<i style="left:${rand(0, 100).toFixed(2)}%;top:${rand(50, 100).toFixed(2)}%;` +
        `--o:${rand(.12, .32).toFixed(2)};` +
        `width:${Math.random() < .22 ? 3 : 2}px;height:${Math.random() < .22 ? 3 : 2}px;` +
        `animation-duration:${dur.toFixed(1)}s;animation-delay:${(-Math.random() * dur).toFixed(1)}s"></i>`;
    }
    box.innerHTML = html;
  }
};


/* ══════════════════════════════════════════════════════════════════════
   10c. HERO BEAMS  —  vertical light tracks behind the headline
   ----------------------------------------------------------------------
   Builds the hero's vertical grid of tracks into #heroBeams. Each track
   is one <i>; CSS draws the resting line and animates a glowing streak
   (::before) and a floating dot (::after) from the custom props set here.
   Track counts thin out with the same responsive tiers as the CSS, and
   positions carry a little jitter so the field never reads as a pattern.
   Reduced motion: only the resting tracks are built — no streaks, no dots.
   ══════════════════════════════════════════════════════════════════════ */
const Beams = {
  init() {
    const box = $('#heroBeams');
    if (!box) return;

    const rand = (a, b) => a + Math.random() * (b - a);
    const tierFor = () => innerWidth <= 640 ? 'mobile' : innerWidth <= 1024 ? 'tablet' : 'desktop';
    let tier = null;

    /* Streak colours — violet / magenta / indigo / lilac, all on-palette */
    const COLORS = [
      'rgba(124,58,237,.95)',
      'rgba(217,70,239,.85)',
      'rgba(99,102,241,.9)',
      'rgba(192,132,252,.95)'
    ];

    const build = () => {
      tier = tierFor();
      const n = tier === 'mobile' ? { tracks: 18, beams: 9, dots: 6 }
              : tier === 'tablet' ? { tracks: 28, beams: 15, dots: 8 }
              :                     { tracks: 40, beams: 22, dots: 10 };

      /* Near-even spacing with jitter, so beams always ride a visible track */
      const xs = Array.from({ length: n.tracks }, (_, i) =>
        (i + .5) / n.tracks * 100 + rand(-1.1, 1.1));

      /* Deal out which tracks carry a streak and which carry a dot */
      const deck = [...xs.keys()].sort(() => Math.random() - .5);
      const beamIdx = new Set(deck.slice(0, n.beams));
      const dotIdx  = new Set(deck.slice(n.beams, n.beams + n.dots));

      let html = '';
      xs.forEach((x, i) => {
        let cls = '', vars = `--x:${x.toFixed(2)}%`;
        if (!REDUCED && beamIdx.has(i)) {
          cls += ' b-up';   /* travels bottom → top only */
          vars += `;--c:${COLORS[i % COLORS.length]}`
                + `;--bh:${rand(16, 32).toFixed(0)}vh`
                + `;--d:${rand(7, 15).toFixed(1)}s`
                + `;--bdl:${(-rand(0, 15)).toFixed(1)}s`;   /* negative: mid-flight on load */
        }
        if (dotIdx.has(i)) {
          cls += ' b-dot';
          vars += `;--py:${rand(18, 82).toFixed(0)}%`
                + `;--pd:${rand(10, 20).toFixed(1)}s`
                + `;--pdl:${(-rand(0, 20)).toFixed(1)}s`;
        }
        html += `<i class="${cls.trim()}" style="${vars}"></i>`;
      });
      box.innerHTML = html;
    };

    build();

    /* Rebuild only when the responsive tier actually changes */
    let rTO = null;
    addEventListener('resize', () => {
      clearTimeout(rTO);
      rTO = setTimeout(() => { if (tierFor() !== tier) build(); }, 150);
    });
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
  Workstage.init();
  Timeline.init();
  Process.init();
  AboutWords.init();
  Certs.init();
  Panel.init();
  Lightbox.init();
  Dust.init();
  Beams.init();
  Clock.init();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
