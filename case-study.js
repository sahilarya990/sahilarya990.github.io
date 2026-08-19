/* ==========================================================================
   CASE STUDY — data + render engine
   --------------------------------------------------------------------------
   One shared page (case-study.html) renders whichever project is named in
   the URL (?p=<key>). All copy below is drawn from the real project files
   in images/case-study-info/ — nothing here is invented. Screens are the
   actual uploaded UI images; device mockups are CSS built around them.

   Add a project: copy a block in CASE_STUDY_PAGES, add its key to
   CSP_ORDER, then point a Selected Work / Services card at it with
   data-project="<key>" (script.js already routes any key found in both
   CASE_STUDIES and CASE_STUDY_PAGES to this full-page experience).

   01  Content — case study pages
   02  Section builders
   03  Device mockup builder
   04  Render + mount
   05  Section scroll-spy + smooth scroll
   06  Hero parallax
   ========================================================================== */

/* ══════════════════════════════════════════════════════════════════════
   01. CONTENT
   ══════════════════════════════════════════════════════════════════════ */
const CSP_IMG = 'images/case-study-info/';

const CASE_STUDY_PAGES = {

  'vidyapeeth360': {
    num: '01', title: 'Vidyapeeth360', kicker: 'Case Study · Institution Management Platform',
    tagline: 'Brand identity and a responsive landing page for an institution management platform — designed and then built end to end.',
    accentA: '#3b82f6', accentB: '#f97316',
    role: 'UI/UX Designer + Frontend', tools: 'Figma AI · Claude · GitHub · HTML/CSS/JS', timeline: 'HelpRevX internship · 2026',

    hero: { kind: 'laptop', img: CSP_IMG + 'vidyapeeth-ui-pic/dashboard-showcasing.png', alt: 'Vidyapeeth360 product dashboard' },

    overview: 'Vidyapeeth360 is an institution management platform for schools, colleges and coaching institutes. My role was the landing page and product showcase — the surface where a visiting institution first understands what the product does and decides whether to try it.',
    problem: 'A management platform covers admissions, fees, attendance, communication and reporting — a lot of breadth to explain on one page. The landing experience needed to communicate the product clearly, show the interface honestly, and hold together at every screen size without turning into a wall of features.',

    process: [
      { h: 'Explore', p: 'Figma AI generated an initial landing-page direction, which sped up early visual exploration considerably.' },
      { h: 'Evaluate', p: 'Every generated concept was reviewed against hierarchy, usability, spacing, responsiveness and visual consistency — not accepted as-is.' },
      { h: 'Build', p: 'Claude and GitHub supported an iterative implementation workflow, so the page was built and tested in the browser rather than left as a static mock.' },
      { h: 'Refine', p: 'Sections, typography, components, navigation, responsiveness and interaction states were progressively polished across several passes.' }
    ],

    cardsHeading: 'Identity decisions',
    cards: [
      { h: 'Logo', p: 'A recognisable symbol and wordmark designed to hold up across every digital touchpoint, from favicon to full lockup.' },
      { h: 'Colour', p: 'Blue establishes trust and technology; orange introduces warmth, energy and visual emphasis for key actions.' },
      { h: 'Typography', p: 'A clear, modern type treatment supports fast scanning and gives the page a SaaS-product feel rather than a brochure feel.' },
      { h: 'UI language', p: 'Dark surfaces, luminous accents, rounded components and restrained gradients create a premium, contemporary presentation.' }
    ],

    screens: [
      { src: CSP_IMG + 'vidyapeeth-ui-pic/vidyapeethNewlogo.png', alt: 'Vidyapeeth360 logo', caption: 'The Vidyapeeth360 logo — wordmark and mark designed for the brand.' },
      { src: CSP_IMG + 'vidyapeeth-ui-pic/screens (3.).png', alt: 'Vidyapeeth360 — Aira AI assistant section', caption: 'Aira AI — an assistant that answers fee, attendance and academic questions instantly.' },
      { src: CSP_IMG + 'vidyapeeth-ui-pic/screens (4.).png', alt: 'Vidyapeeth360 — mobile app section', caption: 'Mobile access for parents, students, teachers and owners, each with their own view.' },
      { src: CSP_IMG + 'vidyapeeth-ui-pic/screens (5).png', alt: 'Vidyapeeth360 — why us section', caption: 'Built for Indian institutions — multi-campus, role-based access, works on every device.' },
      { src: CSP_IMG + 'vidyapeeth-ui-pic/screens (8).png', alt: 'Vidyapeeth360 — onboarding form', caption: 'A self-serve signup flow — a school can register and go live in minutes.' }
    ],

    outcome: 'The landing page and product showcase were designed and then implemented in HTML, CSS and JavaScript as part of my work at HelpRevX — a modern, SaaS-inspired direction that pairs a distinct brand identity with a responsive product presentation.',
    quote: { text: 'AI accelerated the exploration; design thinking decided what was worth keeping.', cite: 'On working with Figma AI and Claude' }
  },

  'helprevx': {
    num: '02', title: 'HelpRevX', kicker: 'Case Study · Brand Identity System',
    tagline: 'A first step toward a modern, scalable brand identity — logo, colour system and applications, built during my design internship.',
    accentA: '#2c5ff9', accentB: '#ff4102',
    role: 'Brand & Visual Design (Internship)', tools: 'Figma', timeline: 'HelpRevX internship · 2026',

    hero: { kind: 'brand', img: CSP_IMG + 'helprevx-logo-andRelated-pic/helprevx (2).png', alt: 'HelpRevX logo lockup' },

    overview: 'An initial exploration of the HelpRevX visual identity, developed during my internship — establishing a recognisable, flexible mark before the wider brand system expands.',
    problem: 'The mark needed to carry three ideas at once — AI and technology, business growth, and trust — and still hold up as a full lockup, a standalone icon, and a compact application across light and dark surfaces.',

    process: [
      { h: 'Direction', p: 'Set four ideas to design against: AI & technology, business growth, trust, and a modern professional character.' },
      { h: 'Explore', p: 'Explored logo variations, colour tuning and layout studies in Figma, reviewing symbol and wordmark combinations side by side.' },
      { h: 'Systemise', p: 'Landed on a four-colour identity — blue, orange, yellow and green — built around a circular symbol and a clear wordmark.' },
      { h: 'Test', p: 'Tested the mark on dark and light backgrounds and in compact formats, to confirm it holds up beyond a single presentation board.' }
    ],

    cardsHeading: 'Design approach',
    cards: [
      { h: 'AI & technology', p: 'A modern, structured and digitally relevant visual language.' },
      { h: 'Business growth', p: 'Forward-moving form and energetic colour accents.' },
      { h: 'Trust', p: 'Clean geometry and a balanced, symmetrical composition.' },
      { h: 'Scalability', p: 'The system explored across light, dark and compact applications.' }
    ],

    screens: [
      { src: CSP_IMG + 'helprevx-logo-andRelated-pic/design-system.png', alt: 'HelpRevX colour system', caption: 'Colour system — five roles defined with exact hex values, from Primary Brand Blue (#2c5ff9) to Deep Blue (#2e0373).' },
      { src: CSP_IMG + 'helprevx-logo-andRelated-pic/helprevx (1).png', alt: 'HelpRevX format exploration', caption: 'Format exploration — the mark tested across black, dark and full-colour variations.' },
      { src: CSP_IMG + 'helprevx-logo-andRelated-pic/helprevx (3).png', alt: 'HelpRevX icon mark', caption: 'Icon mark — the standalone symbol, tested for compact and favicon-scale use.' },
      { src: CSP_IMG + 'helprevx-logo-andRelated-pic/helprevx (4).png', alt: 'HelpRevX full lockup on light background', caption: 'Full lockup — icon and wordmark together on a light background.' }
    ],

    learnings: [
      'A logo needs to work beyond a single presentation board.',
      'Colour and typography should support the brand idea, not compete with it.',
      'Exploring multiple variations early reveals stronger, more scalable directions.',
      'A good identity system stays recognisable across sizes, backgrounds and applications.'
    ],

    outcome: 'This exploration is an initial step in the ongoing HelpRevX brand identity process — a direction that can now be developed into a broader system across digital products, communication and marketing touchpoints.',
    quote: { text: "This is just the beginning — I'm excited to keep contributing to HelpRevX's visual identity and share more updates soon.", cite: 'On this project, during my internship at HelpRevX' }
  },

  'nexus-ai': {
    num: '04', title: 'Nexus AI', kicker: 'Case Study · AI Platform Dashboard',
    tagline: 'A developer dashboard concept for managing an AI API platform — usage analytics, model management and team controls in one calm, data-dense interface.',
    accentA: '#22d3ee', accentB: '#6366f1',
    role: 'UI/UX Design', tools: 'Figma', timeline: '1stop.ai internship · Live industry project',

    hero: { kind: 'laptop', img: CSP_IMG + 'nexus-ai-ui-pic/Dashboard.png', alt: 'Nexus AI dashboard' },

    overview: 'Nexus AI is a dashboard concept for developers, ML engineers and platform teams building on an AI API — real-time usage, model management, API keys and team activity in one place.',
    problem: 'A platform like this surfaces a lot of state at once — revenue, live traffic, model performance, team activity — for several different kinds of users. Without a deliberate structure it turns into a wall of panels nobody can read quickly, so the interface needed hierarchy before it needed decoration.',

    process: [
      { h: 'Map the personas', p: 'Identified four user types — the individual developer, the team lead, the data analyst and the platform admin — each needing a different primary view of the same dashboard.' },
      { h: 'Wireframe the structure', p: 'Wireframed the navigation shell in Figma first — a collapsible sidebar grouped into Analytics, Models, API and Team — before any visual styling, so every task sat one click away.' },
      { h: 'Build the design system', p: 'Built a token-based dark UI in Figma — cyan and violet as the two accents, consistent semantic colour for success, warning and error states, reusable card and table components.' },
      { h: 'Design the high-fidelity screens', p: 'Designed five high-fidelity screens in Figma and documented an interaction spec — count-up KPIs, sidebar collapse, card hover, scroll reveal — for handoff.' }
    ],

    cardsHeading: 'Key features',
    cards: [
      { h: 'Overview dashboard', p: 'Four KPI cards — revenue, users, queries, conversion — animate in with a count-up, alongside a live API feed.' },
      { h: 'Model Hub', p: 'A grid of model cards with status badges for active, beta and deprecated models.' },
      { h: 'API keys', p: 'A key-management table with inline copy, rotate and revoke actions, and scoped permissions on creation.' },
      { h: 'Command palette', p: 'A keyboard-first command palette for jumping to any page or action without leaving the keyboard.' }
    ],

    screens: [
      { src: CSP_IMG + 'nexus-ai-ui-pic/Analytics.png', alt: 'Nexus AI analytics view', caption: 'Analytics — usage trends, latency and error rate in one filterable view.' },
      { src: CSP_IMG + 'nexus-ai-ui-pic/Models.png', alt: 'Nexus AI model hub', caption: 'Model Hub — every model, its status and its usage at a glance.' },
      { src: CSP_IMG + 'nexus-ai-ui-pic/API.png', alt: 'Nexus AI API keys view', caption: 'API keys — scoped permissions with inline copy, rotate and revoke.' },
      { src: CSP_IMG + 'nexus-ai-ui-pic/Team.png', alt: 'Nexus AI team view', caption: 'Team — members, roles and recent activity.' }
    ],

    outcome: 'Delivered as a complete, high-fidelity Figma prototype — five core views, a token-based design system and a documented interaction spec — exploring how a data-dense developer product can still feel calm and legible.'
  },

  'healthpulse': {
    num: '03', title: 'HealthPulse', kicker: 'Case Study · Fitness Mobile App',
    tagline: 'A personal health companion — fitness tracking, AI coaching, nutrition and sleep, unified into one premium mobile experience.',
    accentA: '#22c55e', accentB: '#3b82f6',
    role: 'UI/UX Design', tools: 'Figma', timeline: '1stop.ai internship · Live industry project',

    hero: {
      kind: 'phones',
      main: { src: CSP_IMG + 'fitness-ap-ui-screens/Dashboard.png', alt: 'HealthPulse dashboard' },
      l: { src: CSP_IMG + 'fitness-ap-ui-screens/AICoachScreen.png', alt: 'HealthPulse AI coach' },
      r: { src: CSP_IMG + 'fitness-ap-ui-screens/Workout.png', alt: 'HealthPulse active workout' }
    },

    overview: 'HealthPulse unifies fitness tracking, AI coaching, nutrition logging and sleep analytics into a single mobile product — a data-rich alternative to a generic step counter.',
    problem: "A fitness app has to make progress legible at a glance, while staying usable mid-workout when attention and precision are both low — and it has to serve several different people, from the competitive athlete to the total beginner, through the same set of screens.",

    process: [
      { h: 'Map the personas', p: 'Defined four user types — the Athlete, the Optimizer, the Beginner and the Wellness Seeker — each pulling the product in a slightly different direction.' },
      { h: 'Wireframe the core loop', p: 'Wireframed onboarding → dashboard → workout → active session → completion as the primary path in Figma, before adding nutrition, sleep and AI coaching as supporting screens.' },
      { h: 'Design the dashboard', p: "Designed a bento-grid home screen in Figma — steps, heart rate, sleep, water, calories and a daily AI insight — so a full day's status reads in one glance." },
      { h: 'Build the component system', p: 'Built a reusable dark-mode component library in Figma and documented an interaction spec — screen transitions, ring progress, typing-dot AI responses — for handoff.' }
    ],

    cardsHeading: 'Key features',
    cards: [
      { h: 'Dashboard', p: 'A bento grid of health metrics plus a daily AI insight card and a streak counter.' },
      { h: 'Active workout', p: 'A live session view with countdown timer, rep counter and an animated heart-rate feed.' },
      { h: 'AI Coach', p: 'A chat interface with filterable topics — general, workout, nutrition, sleep, recovery.' },
      { h: 'Sleep & nutrition', p: 'Sleep-stage breakdown and a macro-tracked nutrition logger with quick-add meals.' }
    ],

    screens: [
      { src: CSP_IMG + 'fitness-ap-ui-screens/Onboarding.png', alt: 'HealthPulse onboarding', caption: 'Onboarding — setting up goals before the first session.' },
      { src: CSP_IMG + 'fitness-ap-ui-screens/Sleep.png', alt: 'HealthPulse sleep tracking', caption: 'Sleep — stage breakdown across deep, light, REM and awake time.' },
      { src: CSP_IMG + 'fitness-ap-ui-screens/Nutrition.png', alt: 'HealthPulse nutrition tracking', caption: 'Nutrition — macro tracking with quick-add meals.' },
      { src: CSP_IMG + 'fitness-ap-ui-screens/Progress.png', alt: 'HealthPulse progress tracking', caption: 'Progress — trends over time across every tracked metric.' }
    ],

    outcome: 'Delivered as a complete, high-fidelity Figma prototype — thirteen screens, a token-based dark design system and a documented interaction spec — completed as one of the live industry projects during the 1stop.ai internship.'
  },

  'grocery': {
    num: '05', title: 'ClearCart', kicker: 'Case Study · Grocery Delivery App',
    tagline: 'A mobile-first grocery delivery app designed around speed, clarity and confidence — from browsing to checkout to live order tracking.',
    accentA: '#22c55e', accentB: '#f97316',
    role: 'UI/UX Design', tools: 'Figma', timeline: 'Training project · 1stop.ai internship',

    hero: { kind: 'phone', img: CSP_IMG + 'grossery-app-ui/Screen 1.png', alt: 'ClearCart home screen' },

    overview: 'ClearCart is a mobile-first grocery delivery app designed around speed, clarity and confidence — from browsing to checkout to live order tracking.',
    problem: 'Grocery ordering mixes three different behaviours — fast browsing, careful comparison and repeat purchasing — that all have to work in one small screen without slowing the user down.',

    process: [
      { h: 'Design the core screens', p: 'Designed five core screens end to end: Home, Browse, Item Details, Cart and Order Tracking.' },
      { h: 'Structure browsing', p: 'Used category cards and a persistent search bar so browsing stays fast even with a full catalogue.' },
      { h: 'Build the component system', p: 'Built a Figma component system — frames, auto layout, variants, cards and lists — with consistent hover, active and disabled states.' },
      { h: 'Design order tracking', p: 'Designed Order Tracking as a status timeline with a live map and ETA, to reduce post-purchase anxiety.' }
    ],

    cardsHeading: 'Key features',
    cards: [
      { h: 'Home', p: 'Category-led browsing with a persistent search bar and a featured-items list.' },
      { h: 'Item Details', p: 'Clear product photography, price and a quantity stepper before add-to-cart.' },
      { h: 'Cart & checkout', p: 'Subtotal, delivery fee and total shown upfront — no surprise costs at checkout.' },
      { h: 'Order Tracking', p: 'A live status timeline with map, ETA and delivery partner details.' }
    ],

    screens: [
      { src: CSP_IMG + 'grossery-app-ui/Screen 3.png', alt: 'ClearCart item details', caption: 'Item Details — clear photography, price and a quantity stepper.' },
      { src: CSP_IMG + 'grossery-app-ui/Screen 4.png', alt: 'ClearCart cart', caption: 'Cart — subtotal, delivery fee and total, with no surprise costs.' },
      { src: CSP_IMG + 'grossery-app-ui/Screen 5.png', alt: 'ClearCart order tracking', caption: 'Order Tracking — live status timeline with map and ETA.' }
    ],

    outcome: 'Delivered as a complete Figma prototype — ClearCart — covering the full order journey from Home to Order Tracking.'
  },

  'edtech': {
    num: '06', title: 'SkillForge', kicker: 'Case Study · EdTech Landing Page',
    tagline: 'An EdTech landing page designed to communicate value, trust and outcomes to career-focused learners in one scannable page.',
    accentA: '#3b82f6', accentB: '#facc15',
    role: 'UI/UX Design', tools: 'Figma', timeline: 'Training project · 1stop.ai internship',

    hero: { kind: 'laptop', img: CSP_IMG + 'ed-tech-langingPage-ui/Screen 2 b.png', alt: 'SkillForge courses listing' },

    overview: 'SkillForge is an EdTech landing page designed to communicate value, trust and outcomes to career-focused learners in one scannable page.',
    problem: 'Prospective students are scanning, skeptical and impatient — the page has to prove credibility and communicate outcomes fast, or they leave before reaching a course.',

    process: [
      { h: 'Lead with outcomes', p: 'Led Home with a headline and subtext that states what the platform is, who it is for, and the outcome — not a generic tagline.' },
      { h: 'Design comparable course cards', p: 'Designed a consistent course-card system — title, description, duration, CTA — so learners can compare options at a glance.' },
      { h: 'Support the decision', p: 'Designed Course Details around one question: is this right for me? Overview, syllabus, duration, outcomes and pricing all live on one screen.' },
      { h: 'Build trust', p: 'Backed every claim with trust signals — stats, logos, testimonials — on the About page.' }
    ],

    cardsHeading: 'Key features',
    cards: [
      { h: 'Home', p: "A headline and subtext that states what SkillForge is, who it's for, and the outcome, backed by trust logos." },
      { h: 'Course Listing', p: 'Filterable course cards with category and format filters, rating, price and a clear CTA.' },
      { h: 'Course Details', p: 'A full syllabus breakdown by module, career outcomes, and a sticky enrollment card.' },
      { h: 'About', p: 'Platform story, success stats and learner testimonials to build credibility.' }
    ],

    screens: [
      { src: CSP_IMG + 'ed-tech-langingPage-ui/Screen 3/Course 1.png', alt: 'SkillForge course details', caption: 'Course Details — overview, modules, pricing and career outcomes on one screen.' }
    ],

    outcome: 'Delivered as a complete Figma prototype — SkillForge — from first impression through course detail and a trust-building About page.'
  },

  'seller-dashboard': {
    num: '07', title: 'Seller Dashboard', kicker: 'Case Study · Ecommerce Seller Dashboard',
    tagline: 'A mobile dashboard that gives a small ecommerce seller a quick snapshot of business health, without a full analytics suite to dig through.',
    accentA: '#0ea5e9', accentB: '#eab308',
    role: 'UI/UX Design', tools: 'Figma', timeline: 'Self-directed project',

    hero: {
      kind: 'phones',
      main: { src: CSP_IMG + 'e-commerce-ui-pic/Screen 1.png', alt: 'Seller dashboard overview' },
      l: { src: CSP_IMG + 'e-commerce-ui-pic/Screen 2.png', alt: 'Seller dashboard analytics' },
      r: { src: CSP_IMG + 'e-commerce-ui-pic/Screen 3.png', alt: 'Seller dashboard orders' }
    },

    overview: 'A mobile dashboard that gives a small ecommerce seller a quick snapshot of business health — revenue, orders and performance — without a full analytics suite to dig through.',
    problem: 'A small seller checks their store from their phone throughout the day and wants glanceable answers, not deep analysis — the interface has to work as a five-second check-in.',

    process: [
      { h: 'Define the target user', p: 'Designed for a small seller who checks their store from their phone throughout the day and wants glanceable answers, not deep analysis.' },
      { h: 'Lead with the Overview', p: 'Led the Overview screen with a large revenue card plus quick-glance stats for orders today and active visitors.' },
      { h: 'Simplify Analytics', p: 'Kept Analytics to two charts — a revenue trend and an order volume trend — with a 1D/1W/1M/1Y toggle, and a best-seller card.' },
      { h: 'Build the component library', p: 'Built a reusable Figma component library — nav bar, cards, status tags — so Orders and Settings stayed visually consistent.' }
    ],

    cardsHeading: 'Key features',
    cards: [
      { h: 'Overview', p: 'Total revenue, orders today, pending orders and active visitors in glanceable cards.' },
      { h: 'Analytics', p: 'Revenue and order-volume trend charts with a time-range toggle and a best-seller card.' },
      { h: 'Orders', p: 'A status-tagged order list — Pending, Shipped, Delivered — with order ID and amount.' },
      { h: 'Settings', p: 'Profile, notifications, dark mode and payment settings in a simple list.' }
    ],

    screens: [
      { src: CSP_IMG + 'e-commerce-ui-pic/Screen 4.png', alt: 'Seller dashboard settings', caption: 'Settings — profile, notifications and payment controls.' }
    ],

    outcome: 'Delivered as a complete Figma prototype with a reusable component library for navigation, cards and status tags.'
  },

  'salon': {
    num: '08', title: 'Lumière Salon', kicker: 'Case Study · Responsive Website',
    tagline: 'A fully responsive four-page website for a spa and salon business, designed independently for desktop, tablet and mobile.',
    accentA: '#d97706', accentB: '#78350f',
    role: 'UI/UX Design', tools: 'Figma', timeline: 'Training project · 1stop.ai internship',

    hero: { kind: 'laptop', img: CSP_IMG + 'responsive-web-saloon-uiPic/page 1-desktop.png', alt: 'Lumière Salon home page' },

    overview: 'Lumière Salon is a fully responsive four-page website for a spa and salon business, designed independently for desktop, tablet and mobile.',
    problem: 'Service businesses sell on atmosphere, but the practical information — services, pricing, booking — still has to be one tap away, and the layout has to hold together across three very different screen sizes.',

    process: [
      { h: 'Design each page independently', p: 'Designed four pages — Home, About, Services and Contact — each laid out separately for desktop, tablet and mobile, not scaled down from one version.' },
      { h: 'Lead with atmosphere', p: 'Led Home with a full-bleed hero photograph, a clear value proposition and a repeated "Book Your Appointment" CTA.' },
      { h: 'Keep services scannable', p: 'Used a consistent service-card grid — rating, description, price, book button — across all three breakpoints.' },
      { h: 'Simplify contact', p: 'Built the Contact page around a simple form plus a contact-info panel and map, so booking never feels like a chore.' }
    ],

    cardsHeading: 'Key features',
    cards: [
      { h: 'Home', p: 'A full-bleed hero, four signature-service highlights, and a closing "Ready for a Transformation?" CTA band.' },
      { h: 'About', p: 'Founding story, philosophy and a "Meet Our Expert" team grid.' },
      { h: 'Services', p: 'Eight services as ratable, priced cards — from Precision Hair Design to Bridal & Event Packages.' },
      { h: 'Contact', p: 'A booking form alongside contact info and a map, so enquiries convert on the spot.' }
    ],

    screens: [
      { src: CSP_IMG + 'responsive-web-saloon-uiPic/page 2-desktop.png', alt: 'Lumière Salon about page', caption: 'About — founding story, philosophy and the team.' },
      { src: CSP_IMG + 'responsive-web-saloon-uiPic/page 3-tablet.png', alt: 'Lumière Salon services page on tablet', caption: 'Services, on tablet — the same card system adapted to a narrower grid.' },
      { src: CSP_IMG + 'responsive-web-saloon-uiPic/page 4-desktop.png', alt: 'Lumière Salon contact page', caption: 'Contact — booking form, contact info and map.' }
    ],

    outcome: 'Delivered as a complete Figma prototype — Lumière Salon — with dedicated desktop, tablet and mobile layouts for every page.'
  }
};

const CSP_ORDER = ['vidyapeeth360', 'helprevx', 'healthpulse', 'nexus-ai', 'grocery', 'edtech', 'seller-dashboard', 'salon'];


/* ══════════════════════════════════════════════════════════════════════
   02. SECTION BUILDERS
   ══════════════════════════════════════════════════════════════════════ */
function cspSectionList(p) {
  const s = [{ id: 'overview', label: 'Overview' }];
  if (p.process?.length) s.push({ id: 'process', label: 'Process' });
  if (p.cards?.length) s.push({ id: 'design', label: 'Design' });
  if (p.screens?.length) s.push({ id: 'screens', label: 'Screens' });
  if (p.outcome || p.quote) s.push({ id: 'result', label: 'Result' });
  return s;
}

function cspOverview(p) {
  return `
  <section class="csp__sec" id="overview">
    <div class="wrap">
      <div class="csp__sec-head reveal">
        <p class="csp__sec-k">Overview</p>
        <h2 class="csp__sec-t">${esc(p.title)} at a glance</h2>
      </div>
      <div class="reveal" data-delay="60"><p>${esc(p.overview)}</p></div>
      ${p.problem ? `
      <div class="reveal" data-delay="120" style="margin-top:1.6rem">
        <p class="csp__sec-k" style="margin-bottom:.6rem">The challenge</p>
        <p>${esc(p.problem)}</p>
      </div>` : ''}
    </div>
  </section>`;
}

function cspProcess(p) {
  if (!p.process?.length) return '';
  return `
  <section class="csp__sec" id="process">
    <div class="wrap">
      <div class="csp__sec-head reveal">
        <p class="csp__sec-k">Process</p>
        <h2 class="csp__sec-t">How it came together</h2>
      </div>
      <div class="csp__steps reveal" data-delay="60">
        ${p.process.map((s) => `<div class="csp__step"><div><h4>${esc(s.h)}</h4><p>${esc(s.p)}</p></div></div>`).join('')}
      </div>
    </div>
  </section>`;
}

function cspDesign(p) {
  if (!p.cards?.length) return '';
  return `
  <section class="csp__sec" id="design">
    <div class="wrap">
      <div class="csp__sec-head reveal">
        <p class="csp__sec-k">Design</p>
        <h2 class="csp__sec-t">${esc(p.cardsHeading)}</h2>
      </div>
      <div class="csp__cards reveal" data-delay="60">
        ${p.cards.map((c) => `<div class="csp__card"><h4>${esc(c.h)}</h4><p>${esc(c.p)}</p></div>`).join('')}
      </div>
      ${p.learnings?.length ? `
      <div class="reveal" data-delay="120" style="margin-top:2.5rem">
        <p class="csp__sec-k" style="margin-bottom:1rem">What I learned</p>
        <ul class="csp__l-list">${p.learnings.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>
      </div>` : ''}
    </div>
  </section>`;
}

function cspScreens(p) {
  if (!p.screens?.length) return '';
  return `
  <section class="csp__sec" id="screens">
    <div class="wrap">
      <div class="csp__sec-head reveal">
        <p class="csp__sec-k">Screens</p>
        <h2 class="csp__sec-t">Selected screens</h2>
      </div>
      <div class="csp__screens reveal" data-delay="60">
        ${p.screens.map((s) => `
          <div class="csp__screen csp__shot">
            <figure>
              <a href="${esc(s.src)}" data-lightbox="${esc(s.src)}" data-lightbox-alt="${esc(s.alt || p.title)}" data-cursor="view">
                <img src="${esc(s.src)}" alt="${esc(s.alt || p.title)}" loading="lazy" decoding="async" />
              </a>
            </figure>
            <figcaption>${esc(s.caption)}</figcaption>
          </div>`).join('')}
      </div>
    </div>
  </section>`;
}

function cspResult(p) {
  if (!p.outcome && !p.quote) return '';
  return `
  <section class="csp__sec" id="result">
    <div class="wrap">
      <div class="csp__sec-head reveal">
        <p class="csp__sec-k">Result</p>
        <h2 class="csp__sec-t">Where it landed</h2>
      </div>
      ${p.outcome ? `<div class="reveal" data-delay="60"><p>${esc(p.outcome)}</p></div>` : ''}
      ${p.quote ? `
      <blockquote class="csp__quote reveal" data-delay="140">
        <p>${esc(p.quote.text)}</p>
        <cite>${esc(p.quote.cite)}</cite>
      </blockquote>` : ''}
    </div>
  </section>`;
}


/* ══════════════════════════════════════════════════════════════════════
   03. DEVICE MOCKUP BUILDER
   ══════════════════════════════════════════════════════════════════════ */
function cspDevice(hero, title) {
  const display = (src, alt, eager) => `<div class="csp-device__display"><img src="${esc(src)}" alt="${esc(alt || title)}" ${eager ? 'loading="eager" fetchpriority="high"' : 'loading="lazy"'} decoding="async" /></div>`;

  if (hero.kind === 'laptop') {
    return `
    <div class="csp-device csp-laptop" style="--csp-rot-y:-7deg;--csp-rot-x:4deg">
      <div class="csp-device__glow" aria-hidden="true"></div>
      <div class="csp-laptop__screen">
        <span class="csp-laptop__cam" aria-hidden="true"></span>
        ${display(hero.img, hero.alt, true)}
      </div>
      <div class="csp-laptop__base"><span class="csp-laptop__notch"></span></div>
    </div>`;
  }

  if (hero.kind === 'brand') {
    return `
    <div class="csp-device csp-brand">
      <div class="csp-device__glow" aria-hidden="true"></div>
      <div class="csp-brand__panel"><img src="${esc(hero.img)}" alt="${esc(hero.alt || title)}" loading="eager" fetchpriority="high" decoding="async" /></div>
    </div>`;
  }

  if (hero.kind === 'phones') {
    const phone = (data, cls, rot, eager) => `
      <div class="csp-device csp-phone ${cls}" style="--csp-rot-y:${rot}">
        ${cls === 'csp-phone--main' ? '<div class="csp-device__glow" aria-hidden="true"></div>' : ''}
        <div class="csp-phone__frame">
          <span class="csp-phone__notch" aria-hidden="true"></span>
          ${display(data.src, data.alt, eager)}
        </div>
      </div>`;
    return `
    <div class="csp-phones">
      ${phone(hero.l, 'csp-phone--l', '9deg', false)}
      ${phone(hero.main, 'csp-phone--main', '0deg', true)}
      ${phone(hero.r, 'csp-phone--r', '-9deg', false)}
    </div>`;
  }

  /* phone (single) */
  return `
  <div class="csp-device csp-phone" style="--csp-rot-y:-5deg">
    <div class="csp-device__glow" aria-hidden="true"></div>
    <div class="csp-phone__frame">
      <span class="csp-phone__notch" aria-hidden="true"></span>
      ${display(hero.img, hero.alt, true)}
    </div>
  </div>`;
}


/* ══════════════════════════════════════════════════════════════════════
   04. RENDER + MOUNT
   ══════════════════════════════════════════════════════════════════════ */
function cspRender(p) {
  const sections = cspSectionList(p);

  return `
  <a class="csp__back mag" href="index.html#work" data-cursor="btn">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
    Back to Work
  </a>

  <section class="csp__hero">
    <div class="csp__hero-glow" aria-hidden="true"></div>
    <div class="wrap csp__hero-in">
      <div class="csp__hero-copy">
        <span class="csp__n reveal">${esc(p.num)}</span>
        <p class="csp__k reveal" data-delay="60">${esc(p.kicker)}</p>
        <h1 class="csp__t reveal" data-delay="120">${esc(p.title)}</h1>
        <p class="csp__tag reveal" data-delay="180">${esc(p.tagline)}</p>
        <dl class="csp__meta reveal" data-delay="240">
          <div><dt>Role</dt><dd>${esc(p.role)}</dd></div>
          <div><dt>Tools</dt><dd>${esc(p.tools)}</dd></div>
          <div><dt>Timeline</dt><dd>${esc(p.timeline)}</dd></div>
        </dl>
      </div>
      <div class="csp__hero-visual reveal" data-delay="200">
        ${cspDevice(p.hero, p.title)}
      </div>
    </div>
  </section>

  <nav class="csp__nav" aria-label="Case study sections">
    <div class="wrap csp__nav-in">
      ${sections.map((s) => `<a href="#${s.id}">${esc(s.label)}</a>`).join('')}
    </div>
  </nav>

  ${cspOverview(p)}
  ${cspProcess(p)}
  ${cspDesign(p)}
  ${cspScreens(p)}
  ${cspResult(p)}

  <section class="csp__next">
    <div class="csp__next-glow" aria-hidden="true"></div>
    <div class="wrap csp__next-in">
      <p class="csp__next-k reveal">Next case study</p>
      <h2 class="csp__next-t reveal" data-delay="60">${esc(CASE_STUDY_PAGES[cspNextKey(p.key)].title)}</h2>
      <a class="csp__next-link reveal mag" data-delay="120" href="case-study.html?p=${esc(cspNextKey(p.key))}" data-cursor="btn">
        View case study
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  </section>`;
}

function cspNextKey(key) {
  const i = CSP_ORDER.indexOf(key);
  return CSP_ORDER[(i + 1) % CSP_ORDER.length];
}

function cspInit() {
  const root = document.getElementById('cspRoot');
  if (!root) return;

  const key = new URLSearchParams(location.search).get('p');
  const page = CASE_STUDY_PAGES[key];
  if (!page) { location.replace('index.html'); return; }
  page.key = key;

  document.body.dataset.csp = key;
  document.body.style.setProperty('--csp-a', page.accentA);
  document.body.style.setProperty('--csp-b', page.accentB);
  document.body.classList.add('ready');

  document.title = `${page.title} — Case Study — Sahil Das`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', page.tagline);

  root.innerHTML = cspRender(page);

  cspWireSectionNav();
  cspWireHeroParallax();
}


/* ══════════════════════════════════════════════════════════════════════
   05. SECTION SCROLL-SPY + SMOOTH SCROLL
   ══════════════════════════════════════════════════════════════════════ */
function cspWireSectionNav() {
  const links = $$('.csp__nav a');
  if (!links.length) return;

  links.forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.getElementById(a.getAttribute('href').slice(1));
      if (!target) return;
      e.preventDefault();
      const navH = $('#nav')?.offsetHeight || 70;
      const cspNavH = $('.csp__nav')?.offsetHeight || 0;
      const y = target.getBoundingClientRect().top + scrollY - navH - cspNavH - 12;
      scrollTo({ top: y, behavior: REDUCED ? 'auto' : 'smooth' });
    });
  });

  if (!('IntersectionObserver' in window)) return;
  const map = new Map();
  links.forEach((a) => {
    const sec = document.getElementById(a.getAttribute('href').slice(1));
    if (sec) map.set(sec, a);
  });
  if (!map.size) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      links.forEach((a) => a.classList.remove('on'));
      map.get(en.target)?.classList.add('on');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  map.forEach((_, sec) => io.observe(sec));
}


/* ══════════════════════════════════════════════════════════════════════
   06. HERO PARALLAX  —  a whisper of drift on the device mockup
   ══════════════════════════════════════════════════════════════════════ */
function cspWireHeroParallax() {
  const el = $('.csp__hero-visual');
  if (!el || REDUCED || !DESKTOP()) return;

  onScroll(() => {
    const r = el.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    el.style.transform = `translate3d(0, ${(r.top * 0.05).toFixed(2)}px, 0)`;
  });
}

cspInit();
