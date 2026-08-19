/* ==========================================================================
   CASE STUDY — data + render engine
   --------------------------------------------------------------------------
   One shared page (case-study.html) renders whichever project is named in
   the URL (?p=<key>). Every fact below is drawn from the project PDFs in
   images/case-study-info/ — personas, target-user statements, screen
   purposes and design foci are quoted or closely paraphrased from those
   documents, not invented. Where a project's source material does not
   document an explicit audience (Vidyapeeth360, Lumière Salon), the research
   section says so plainly and reasons from the product's own context
   instead of presenting a guess as documented research.

   The hero reuses the exact image already shown in the main Projects
   section of the portfolio — no generated device mockup.

   Add a project: copy a block in CASE_STUDY_PAGES, add its key to
   CSP_ORDER, then point a project card at it with data-project="<key>"
   (script.js's FULL_PAGE_STUDIES list routes it here automatically).

   01  Content — case study pages
   02  Section builders
   03  Render + mount
   04  Section scroll-spy + smooth scroll
   05  Hero parallax
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
    heroImage: { src: 'images/vidyapeeth-updated-ui.png', alt: 'Vidyapeeth360 landing page — institution management platform' },
    liveLink: { label: 'Visit Vidyapeeth360 ↗', href: 'https://vidyapeeth360.com' },

    overview: 'Vidyapeeth360 is an institution management platform for schools, colleges and coaching institutes. My role was the landing page and product showcase — the surface where a visiting institution first understands what the product does and decides whether to try it.',
    problem: 'A management platform covers admissions, fees, attendance, communication and reporting — a lot of breadth to explain on one page. The landing experience needed to communicate the product clearly, show the interface honestly, and hold together at every screen size without turning into a wall of features.',

    audience: {
      intro: "Vidyapeeth360's own materials describe the product for schools, colleges and coaching institutes, but don't document a formal user-research study. Reasoning from that context: a landing page like this has two audiences — the institution staff actually deciding whether to adopt the platform, and the wider group who would use it once it's adopted.",
      personas: [
        {
          role: 'The Institution Decision-Maker', context: 'The person actually reading the landing page — an administrator or owner evaluating platforms on behalf of their school, college or coaching institute.',
          goals: ['Understand what the platform does, quickly', 'Judge whether it fits an institution like theirs', 'Feel confident enough to book a demo or start a trial'],
          needs: ['A clear, jargon-free explanation of the product', 'Evidence the product is built for institutions, not generic businesses', 'A low-friction next step with no hidden cost'],
          painPoints: ['Management software often reads as generic, not institution-specific', 'Long feature lists with no obvious starting point', 'Uncertainty about cost or commitment before talking to anyone']
        },
        {
          role: 'Everyday Platform Users (Teachers, Students, Parents)', context: "Inferred from the product category, not from the landing page itself — the people who'd use Vidyapeeth360 day to day once an institution adopts it.",
          goals: ['Get timely information — attendance, fees, announcements'],
          needs: ['A mobile-friendly experience, since not everyone is at a desk'],
          painPoints: ['Institutional software has historically prioritised admin workflows over everyday users']
        }
      ]
    },
    needs: [
      { title: 'Clarity', text: 'A visiting administrator needs to understand what Vidyapeeth360 does within seconds — no jargon, no guessing.' },
      { title: 'Credibility', text: "Institutional buyers weigh software against their organisation's reputation — the page needs to feel as considered as the institutions it serves." },
      { title: 'Structure', text: 'Admissions, fees, attendance, communication and reporting is a lot of ground — information needs a clear order, not a feature dump.' },
      { title: 'Cross-device access', text: 'Decision-makers browse on a laptop in the office and check back on a phone later — the page has to hold up on both.' }
    ],
    painPoints: [
      { problem: 'Generic-feeling management software', why: "Institutions are cautious about technology that doesn't feel purpose-built for education — a generic SaaS look undermines trust before the pitch even lands.", implication: 'A distinct blue-and-orange identity and institution-specific language (fees, admissions, attendance) instead of a borrowed generic tech look.' },
      { problem: 'Feature overload with no starting point', why: 'A platform touching admissions, fees, attendance, communication and reporting can overwhelm a first-time visitor if everything competes for attention at once.', implication: 'The page is structured around a small number of clear sections — Aira AI, mobile access, why Vidyapeeth360 — instead of one dense feature grid.' },
      { problem: 'Uncertainty about cost or commitment', why: 'A decision-maker hesitates to click "start trial" if pricing or commitment is unclear.', implication: 'Self-serve onboarding is presented directly, with low-pressure CTAs — "start free trial", "book a demo" — and no forced sales call.' }
    ],
    uxGoals: [
      { title: 'Clarity', text: 'Communicate what the platform does within the first screen.' },
      { title: 'Credibility', text: 'Build a visual language institutional buyers can trust.' },
      { title: 'Hierarchy', text: 'Structure a broad feature set into a scannable order.' },
      { title: 'Responsiveness', text: 'Hold up cleanly from an office desktop to a phone on the go.' },
      { title: 'Iteration', text: 'Treat the page as something to test and refine, not ship once.' }
    ],
    chains: [
      { need: 'Institutional buyers need to trust a product built specifically for education, not generic business software.', insight: 'Generic SaaS visual language reads as untrustworthy in an education context.', decision: 'Blue establishes trust and technology; orange adds warmth and energy — a palette distinct from generic SaaS blue-on-white.' },
      { need: 'A visiting administrator needs to understand the product within seconds.', insight: "The first interaction should communicate the product's value without requiring exploration.", decision: 'A strong hero statement with concise supporting content and product-focused visual hierarchy.' },
      { need: 'The platform covers a lot of ground — admissions, fees, attendance, reporting.', insight: 'High-priority information should be visually scannable rather than densely listed.', decision: 'Modular sections (Aira AI, mobile access, trust/features), each with one clear idea, instead of a single feature-dense block.' }
    ],
    userFlow: ['Discover', 'Understand the value', 'Build trust', 'Start free trial'],

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

    contribution: ['Logo and visual identity', 'Landing page UI/UX', 'Responsive layouts', 'Figma AI exploration', 'Frontend implementation (HTML/CSS/JS)', 'Iterative refinement with Claude'],
    outcome: 'The landing page and product showcase were designed and then implemented in HTML, CSS and JavaScript as part of my work at HelpRevX — a modern, SaaS-inspired direction that pairs a distinct brand identity with a responsive product presentation.',
    quote: { text: 'AI accelerated the exploration; design thinking decided what was worth keeping.', cite: 'On working with Figma AI and Claude' }
  },

  'helprevx': {
    num: '02', title: 'HelpRevX', kicker: 'Case Study · Brand Identity System',
    tagline: 'A first step toward a modern, scalable brand identity — logo, colour system and applications, built during my design internship.',
    accentA: '#2c5ff9', accentB: '#ff4102',
    role: 'Brand & Visual Design (Internship)', tools: 'Figma', timeline: 'HelpRevX internship · 2026',
    heroImage: { src: 'images/helprevx-updated-ui.png', alt: 'HelpRevX brand direction — logo mark and wordmark' },
    liveLink: { label: 'Visit HelpRevX ↗', href: 'https://www.helprevx.com/' },

    overview: 'An initial exploration of the HelpRevX visual identity, developed during my internship — establishing a recognisable, flexible mark before the wider brand system expands.',
    problem: 'The mark needed to carry three ideas at once — AI and technology, business growth, and trust — and still hold up as a full lockup, a standalone icon, and a compact application across light and dark surfaces.',

    audience: {
      intro: "HelpRevX is an AI and business-growth platform that helps companies improve customer support, automation, revenue and operations. Rather than a product-user persona, this project's audience is the identity's audience: the businesses HelpRevX sells to, and the internal team that has to apply the brand consistently.",
      personas: [
        {
          role: "HelpRevX's Business Audience", context: 'Companies evaluating HelpRevX as an AI-powered support, automation and growth platform — the identity has to earn their attention before the product does.',
          goals: ['Recognise HelpRevX as a credible AI and growth-technology company', 'Trust the brand enough to evaluate the product itself'],
          needs: ['A mark that signals AI/technology, growth and trust at once', 'Consistent presentation across every touchpoint they encounter'],
          painPoints: ['Many AI-branded companies look interchangeable — a sharp icon and a generic gradient', 'A logo that only works as a hero graphic breaks the moment it has to be a favicon or a social avatar']
        }
      ]
    },
    needs: [
      { title: 'Technology signal', text: 'The mark needs to read as modern and AI-relevant at a glance.' },
      { title: 'Growth energy', text: 'Colour and form need to feel forward-moving, not static.' },
      { title: 'Trust', text: 'Geometry needs to feel deliberate and balanced, not improvised.' },
      { title: 'Scalability', text: 'The identity needs to survive a favicon, a social avatar, a dark slide and a printed card equally.' }
    ],
    painPoints: [
      { problem: 'AI-branded companies often look interchangeable', why: "A generic tech gradient and geometric icon is the default look for AI startups — it doesn't help HelpRevX stand out or feel specifically theirs.", implication: 'Landed on a distinctive four-colour system — blue, orange, yellow and green — around a circular symbol, rather than a single-gradient AI cliché.' },
      { problem: 'A mark that only works as a hero graphic', why: 'Real brand usage is mostly small — favicons, social avatars, app icons — not full-size lockups.', implication: 'Tested the icon standalone and in compact formats from the start, not as an afterthought.' }
    ],
    uxGoals: [
      { title: 'Recognition', text: 'A mark distinctive enough to recall after one viewing.' },
      { title: 'Flexibility', text: 'Works as icon-only, full lockup, dark and light.' },
      { title: 'Credibility', text: 'Reads as trustworthy to a business audience, not just decorative.' },
      { title: 'Growth', text: 'Colour and form carry forward-moving energy.' }
    ],
    chains: [
      { need: 'The brand needs to signal AI/technology credibility to a business audience.', insight: 'A mark built only from a generic gradient and geometric shape reads as decoration, not conviction.', decision: 'A circular symbol with a considered four-colour system, tested across dark and light before finalising.' },
      { need: 'The identity needs to survive far smaller than a hero lockup.', insight: 'Most real brand touchpoints are small — an icon has to work standalone.', decision: 'Explored and finalised a standalone icon mark alongside the full wordmark lockup.' }
    ],

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

    contribution: ['Logo design', 'Colour system', 'Typography direction', 'Brand applications across light/dark/compact formats'],
    outcome: 'This exploration is an initial step in the ongoing HelpRevX brand identity process — a direction that can now be developed into a broader system across digital products, communication and marketing touchpoints.',
    quote: { text: "This is just the beginning — I'm excited to keep contributing to HelpRevX's visual identity and share more updates soon.", cite: 'On this project, during my internship at HelpRevX' }
  },

  'nexus-ai': {
    num: '04', title: 'Nexus AI', kicker: 'Case Study · AI Platform Dashboard',
    tagline: 'A developer dashboard concept for managing an AI API platform — usage analytics, model management and team controls in one calm, data-dense interface.',
    accentA: '#22d3ee', accentB: '#6366f1',
    role: 'UI/UX Design', tools: 'Figma', timeline: '1stop.ai internship · Live industry project',
    heroImage: { src: 'images/nexus-ai-updated-ui.png', alt: 'Nexus AI SaaS dashboard interface' },
    liveLink: { label: 'View Figma Prototype ↗', href: 'https://www.figma.com/proto/0yUj5Y35NkNUyKN02YCJEh/Untitled?node-id=3-2&t=p6REn8GLBAXU8wuW-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A46' },

    overview: 'Nexus AI is a dashboard concept for developers, ML engineers and platform teams building on an AI API — real-time usage, model management, API keys and team activity in one place.',
    problem: 'A platform like this surfaces a lot of state at once — revenue, live traffic, model performance, team activity — for several different kinds of users. Without a deliberate structure it turns into a wall of panels nobody can read quickly, so the interface needed hierarchy before it needed decoration.',

    audience: {
      intro: "Nexus AI's own product brief names four groups who'd use a dashboard like this, each pulling it in a different direction.",
      personas: [
        { role: 'The Developer', context: 'Individual API consumer — the most frequent user of the dashboard.', goals: ['Keep the integration healthy day to day'], needs: ['Monitor usage, manage keys, view logs', 'See a KPI overview immediately on login', 'Debug issues via a live API call feed'], painPoints: ['Losing track of key-security hygiene without a clear rotate/revoke flow', 'No fast way to jump between pages without hunting through menus'] },
        { role: 'The Team Lead', context: "Engineering manager overseeing the team's usage.", goals: ['Track cost and growth across the team'], needs: ['View team usage, cost controls and model performance', 'See revenue and usage trends at a glance'], painPoints: ['Cost and usage data scattered across views instead of summarised'] },
        { role: 'The Data Analyst', context: 'Focused on the numbers behind the product.', goals: ['Understand revenue, query volume and conversion'], needs: ['Revenue, query volume and conversion charts', 'Trends over a selectable time range'], painPoints: ['Raw numbers without visual trend context are slow to act on'] },
        { role: 'The Admin', context: 'Platform administrator.', goals: ['Keep access and billing under control'], needs: ['User management, billing and global settings', 'Manage team members and roles'], painPoints: ['Permissions and user management buried instead of centralised'] }
      ]
    },
    needs: [
      { title: 'Glanceability', text: 'Revenue, users, queries and conversion need to read correctly in the first two seconds on the page.' },
      { title: 'One-click access', text: "Every persona's core task — logs, keys, models, team — should sit one click away." },
      { title: 'Trust in the data', text: 'Live and near-live data (the API feed, KPI trends) needs to feel current, not stale.' },
      { title: 'Deliberate control', text: 'Security-sensitive actions, like rotating a key, need to be fast but never accidental.' }
    ],
    painPoints: [
      { problem: 'Too much state, no hierarchy', why: 'Revenue, live traffic, model performance and team activity competing for attention at once turns a dashboard into a wall of panels nobody can read quickly.', implication: 'Built the navigation and page structure first — Analytics, Models, API, Team as clear groups — before any visual styling.' },
      { problem: 'Security-sensitive actions need to stay deliberate', why: 'Developers need to rotate or revoke API keys quickly, but a mistaken key action is costly.', implication: 'Inline copy/rotate/revoke actions per row, with scoped permissions set explicitly at key creation.' },
      { problem: 'Four personas, one shared surface', why: "A developer's daily-use dashboard and an admin's occasional settings visit are very different tasks on the same shell.", implication: 'A collapsible sidebar keeps daily-use sections close by default, while admin-only areas stay reachable but not dominant.' }
    ],
    uxGoals: [
      { title: 'Clarity', text: 'Four KPIs readable at a glance on login.' },
      { title: 'Efficiency', text: 'Every core task one click from the sidebar.' },
      { title: 'Trust', text: 'Live data that visibly feels live — count-up numbers, a live feed.' },
      { title: 'Consistency', text: 'One token-based dark system across every view.' },
      { title: 'Control', text: 'Security-sensitive actions stay deliberate, not accidental.' }
    ],
    chains: [
      { need: 'Different personas need a different primary view of the same dashboard.', insight: 'A single fixed layout would force every persona to wade through screens meant for someone else.', decision: "A collapsible sidebar grouped into Analytics, Models, API and Team, so each persona's task sits one click away." },
      { need: 'Developers need to assess platform health the moment they log in.', insight: 'The first screen should answer "is everything OK?" before anything else.', decision: 'Four KPI cards animate in with a count-up on load, backed by a live API feed.' },
      { need: 'Security-sensitive actions need to be fast but deliberate.', insight: 'A key action needs to be reachable in one click, but never a silent one.', decision: 'Inline copy/rotate/revoke actions with explicit scoped permissions set at key creation.' }
    ],
    userFlow: ['Log in', 'Scan the overview', 'Explore models & analytics', 'Manage keys or team'],

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

    contribution: ['Persona & IA definition', 'Navigation structure', 'Token-based design system', 'High-fidelity screens', 'Interaction spec'],
    outcome: 'Delivered as a complete, high-fidelity Figma prototype — five core views, a token-based design system and a documented interaction spec — exploring how a data-dense developer product can still feel calm and legible.'
  },

  'healthpulse': {
    num: '03', title: 'HealthPulse', kicker: 'Case Study · Fitness Mobile App',
    tagline: 'A personal health companion — fitness tracking, AI coaching, nutrition and sleep, unified into one premium mobile experience.',
    accentA: '#22c55e', accentB: '#3b82f6',
    role: 'UI/UX Design', tools: 'Figma', timeline: '1stop.ai internship · Live industry project',
    heroImage: { src: 'images/fitness-app-updated-ui.png', alt: 'HealthPulse fitness mobile app screens' },
    liveLink: { label: 'View Figma Prototype ↗', href: 'https://www.figma.com/proto/CeN7dDfT8hcLvVoxc4stW7/Fitness-app?node-id=1-2&t=NucdH87rw0pPbLWD-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1' },

    overview: 'HealthPulse unifies fitness tracking, AI coaching, nutrition logging and sleep analytics into a single mobile product — a data-rich alternative to a generic step counter, targeted at health-conscious users aged roughly 22–45.',
    problem: "A fitness app has to make progress legible at a glance, while staying usable mid-workout when attention and precision are both low — and it has to serve several different people, from the competitive athlete to the total beginner, through the same set of screens.",

    audience: {
      intro: "HealthPulse's own product brief names four personas, each pulling the app toward a different priority.",
      personas: [
        { role: 'The Athlete', context: 'Active gym-goer, 25–35, tracks workouts daily.', goals: ['Stay on a structured training routine'], needs: ['Structured workout plans', 'Real-time metrics during a session'], painPoints: ['Losing track of pace or progress mid-workout without a live view'] },
        { role: 'The Optimizer', context: 'Health-data enthusiast who tracks sleep and HRV.', goals: ['Understand recovery, not just effort'], needs: ['Detailed analytics', 'AI-generated insights, not just raw numbers'], painPoints: ['Raw data without interpretation is hard to act on'] },
        { role: 'The Beginner', context: 'Starting a fitness journey, needs motivation.', goals: ['Build a consistent habit'], needs: ['Guided onboarding', 'Habit streaks for motivation'], painPoints: ['An intimidating, feature-dense app discourages a first session'] },
        { role: 'The Wellness Seeker', context: 'Focused on stress, sleep and nutrition rather than performance.', goals: ['See health holistically, not just fitness'], needs: ['A holistic health score', 'Recommendations across sleep, nutrition and stress'], painPoints: ['Most fitness apps centre on workouts and treat sleep/nutrition as secondary'] }
      ]
    },
    needs: [
      { title: 'Glanceability', text: "A full day's status — steps, heart rate, sleep, water, calories — needs to read in one glance." },
      { title: 'Motivation', text: 'Progress needs to feel visible and rewarded, not just logged.' },
      { title: 'Guidance', text: 'Users at very different fitness levels need the app to meet them where they are.' },
      { title: 'Calm under pressure', text: 'Mid-workout, the interface needs to stay legible with minimal attention.' }
    ],
    painPoints: [
      { problem: 'Four personas, one home screen', why: 'The Athlete wants live metrics, the Wellness Seeker wants a holistic score — a single dashboard has to serve both without favouring one.', implication: "A bento-grid dashboard surfaces steps, heart rate, sleep, water and calories side by side, so each persona's priority metric is visible without navigating away." },
      { problem: 'Attention is low mid-workout', why: "A workout screen has to stay usable when the user's focus is on the exercise, not the phone.", implication: 'The active workout screen uses a large countdown display, a simple rep counter and a live heart-rate feed — nothing that requires reading.' },
      { problem: 'A beginner can be discouraged on day one', why: 'The Beginner persona needs motivation, not a wall of options.', implication: 'Onboarding leads with a short animated preview of three headline metrics before asking for anything, and a streak counter reinforces habit-building early.' }
    ],
    uxGoals: [
      { title: 'Clarity', text: "A full day's health status readable in one glance." },
      { title: 'Motivation', text: 'Streaks and progress visuals reinforce consistency.' },
      { title: 'Calm focus', text: 'The active-workout screen stays legible under low attention.' },
      { title: 'Guidance', text: "AI coaching and insights support users who don't know where to start." },
      { title: 'Consistency', text: 'One dark, token-based system across all thirteen screens.' }
    ],
    chains: [
      { need: "Users need to see a full day's health status without digging.", insight: 'Five different metrics competing for attention need one shared visual language, not five different widget styles.', decision: 'A bento-grid dashboard — steps, heart rate, sleep, water, calories — as uniform cards.' },
      { need: 'A beginner needs motivation, not a wall of features.', insight: 'The very first screen sets the tone for whether the app feels approachable.', decision: 'Onboarding opens with three animated metric-preview rings before any setup is required.' },
      { need: 'Attention is low mid-workout.', insight: 'A workout screen has to be readable at a glance, not read carefully.', decision: 'A large countdown timer, a simple rep counter and a live heart-rate feed — no dense text.' }
    ],
    userFlow: ['Onboard', 'Plan a workout', 'Train', 'Reflect & track'],

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

    contribution: ['Persona mapping', 'Core flow design', 'Bento-grid dashboard', 'Component library', 'Interaction spec'],
    outcome: 'Delivered as a complete, high-fidelity Figma prototype — thirteen screens, a token-based dark design system and a documented interaction spec — completed as one of the live industry projects during the 1stop.ai internship.'
  },

  'grocery': {
    num: '05', title: 'ClearCart', kicker: 'Case Study · Grocery Delivery App',
    tagline: 'A mobile-first grocery delivery app designed around speed, clarity and confidence — from browsing to checkout to live order tracking.',
    accentA: '#22c55e', accentB: '#f97316',
    role: 'UI/UX Design', tools: 'Figma', timeline: 'Training project · 1stop.ai internship',
    heroImage: { src: 'images/grossery-app-screens.jpg', alt: 'Grocery delivery app interface' },
    liveLink: { label: 'View Figma Prototype ↗', href: 'https://www.figma.com/design/3UCc6ejcmwpeTIXT2vMypd/Untitled?node-id=58-67&t=JbVbIBs9ipQzxdHF-1' },

    overview: 'ClearCart is a mobile-first grocery delivery app designed around speed, clarity and confidence — from browsing to checkout to live order tracking.',
    problem: 'Grocery ordering mixes three different behaviours — fast browsing, careful comparison and repeat purchasing — that all have to work in one small screen without slowing the user down.',

    audience: {
      intro: "ClearCart's own brief defines a single, clear target user rather than multiple personas.",
      personas: [
        { role: 'The Everyday Orderer', context: 'A working professional or household ordering groceries daily, weekly or monthly.', goals: ['Get groceries ordered with minimal friction'], needs: ['Fast decisions, not endless browsing', 'Clear pricing with no surprises at checkout', 'Confidence that an order is actually on its way'], painPoints: ['Browsing fatigue when an app pushes exploration over speed', 'Uncertainty about total cost until the final checkout step', 'Anxiety once an order is placed, with no visibility into its status'] }
      ]
    },
    needs: [
      { title: 'Speed', text: 'Fast decisions, not browsing forever — minimal friction from home to checkout.' },
      { title: 'Clarity', text: 'Price, quantity and total need to be visible at every step, with no surprise costs.' },
      { title: 'Confidence', text: 'Once an order is placed, status needs to be visible and reassuring.' }
    ],
    painPoints: [
      { problem: 'Browsing that turns into scrolling fatigue', why: "The target user wants fast decisions, not browsing forever — a cluttered home screen defeats that instinct immediately.", implication: 'Category cards, a persistent search bar and a featured-items list on Home, so the fastest path is also the first thing visible.' },
      { problem: 'Checkout surprises erode trust', why: 'A cart that hides delivery fees until the last step makes users hesitate to complete an order.', implication: 'Subtotal, delivery fee and total are all shown together in the cart before checkout.' },
      { problem: 'Post-purchase anxiety', why: 'Once money has changed hands, not knowing where an order is creates real anxiety.', implication: "Order Tracking is built around reducing anxiety specifically — a status timeline, live map and ETA, not a static message." }
    ],
    uxGoals: [
      { title: 'Speed', text: 'Minimise steps between opening the app and adding to cart.' },
      { title: 'Clarity', text: 'Price and quantity visible everywhere a decision is being made.' },
      { title: 'Confidence', text: 'No surprise costs, and visible reassurance after checkout.' },
      { title: 'Consistency', text: 'One component system — cards, states, spacing — across every screen.' }
    ],
    chains: [
      { need: 'Users want fast decisions, not browsing forever.', insight: 'Category-first navigation gets a user to a relevant item faster than an undifferentiated product list.', decision: 'Home leads with category cards and a persistent search bar, not a single long feed.' },
      { need: 'Users need confidence that an order is actually on its way.', insight: 'Anxiety after checkout comes from not knowing what happens next.', decision: 'A dedicated Order Tracking screen with a status timeline, live map and ETA.' }
    ],
    userFlow: ['Discover', 'Decide', 'Review cart', 'Track order'],

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

    contribution: ['App concept & naming (ClearCart)', 'Screen design (5 core screens)', 'Figma component system', 'Order-tracking flow'],
    outcome: 'Delivered as a complete Figma prototype — ClearCart — covering the full order journey from Home to Order Tracking.'
  },

  'edtech': {
    num: '06', title: 'SkillForge', kicker: 'Case Study · EdTech Landing Page',
    tagline: 'An EdTech landing page designed to communicate value, trust and outcomes to career-focused learners in one scannable page.',
    accentA: '#3b82f6', accentB: '#facc15',
    role: 'UI/UX Design', tools: 'Figma', timeline: 'Training project · 1stop.ai internship',
    heroImage: { src: 'images/ed-tech-landing-page.png', alt: 'EdTech landing page interface' },
    liveLink: { label: 'View Figma Prototype ↗', href: 'https://www.figma.com/design/Qtg1U5OpH5EfcnHMY6aKlS/project-3?node-id=110-138&t=JNrnq1Ho5P3NBYa1-1' },

    overview: 'SkillForge is an EdTech landing page designed to communicate value, trust and outcomes to career-focused learners in one scannable page.',
    problem: 'Prospective students are scanning, skeptical and impatient — the page has to prove credibility and communicate outcomes fast, or they leave before reaching a course.',

    audience: {
      intro: "SkillForge's own brief defines its audience explicitly, down to how they behave on the page.",
      personas: [
        { role: 'The Career-Focused Learner', context: 'Students and early professionals, career switchers or skill-upgraders, roughly 18–35.', goals: ['Find a course that credibly leads to a real outcome — a job, a skill, growth'], needs: ['A clear understanding of what is offered before committing', 'Proof before trust — stats, logos, testimonials', 'Outcomes stated plainly, not vague promises'], painPoints: ['They are scanning, skeptical, and impatient — vague claims or slow-to-parse pages lose them immediately'] }
      ]
    },
    needs: [
      { title: 'Immediate clarity', text: "What the platform is, who it's for, and the outcome, stated in the first screen." },
      { title: 'Proof before trust', text: 'Stats, logos and testimonials need to appear early, not buried.' },
      { title: 'Comparability', text: 'Course options need a consistent card format so options can be judged at a glance.' },
      { title: 'Decisive answers', text: 'Course Details needs to directly answer "is this right for me?"' }
    ],
    painPoints: [
      { problem: 'Skeptical, impatient visitors', why: 'The audience is explicitly scanning, skeptical, and impatient — a slow reveal of value loses them before they reach a course.', implication: 'The hero leads with headline + subtext stating what, for whom, and the outcome, plus trust signals, all above the fold.' },
      { problem: 'Vague promises instead of outcomes', why: 'Career-focused learners want outcomes, not vague promises — "will this get me a job or a skill" is the real question.', implication: 'Course Details states syllabus, duration, format and career outcomes explicitly, alongside clear pricing.' },
      { problem: 'Comparing options takes too long', why: 'A learner evaluating multiple courses needs to compare them at a glance, not open every one.', implication: 'A consistent course-card system — title, description, duration, CTA — repeated across the listing.' }
    ],
    uxGoals: [
      { title: 'Clarity', text: 'Communicate what, for whom, and the outcome in the first screen.' },
      { title: 'Trust', text: 'Surface proof — stats, logos, testimonials — before asking for commitment.' },
      { title: 'Comparability', text: 'Consistent course cards for fast scanning.' },
      { title: 'Decisiveness', text: 'Course Details answers "is this right for me?" directly.' },
      { title: 'Confidence', text: 'Remove ambiguity around cost and next steps.' }
    ],
    chains: [
      { need: 'Skeptical, impatient visitors need proof before trust.', insight: 'Trust signals need to appear immediately, not after a long pitch.', decision: 'Stats, partner logos and a testimonial snippet placed directly in the hero section.' },
      { need: 'Learners want outcomes, not vague promises.', insight: 'A course page needs to answer "is this right for me?" without requiring a call.', decision: 'Course Details states syllabus, duration, format, outcomes and pricing all on one screen.' },
      { need: 'Comparing courses needs to be fast.', insight: 'Inconsistent listings force a learner to re-orient on every course.', decision: 'One repeatable course-card format across the entire listing.' }
    ],
    userFlow: ['Discover value', 'Compare courses', 'Decide', 'Enroll'],

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

    contribution: ['Platform naming (SkillForge)', 'Home, Listing, Details & About pages', 'Course-card system', 'Trust/testimonial sections'],
    outcome: 'Delivered as a complete Figma prototype — SkillForge — from first impression through course detail and a trust-building About page.'
  },

  'seller-dashboard': {
    num: '07', title: 'Seller Dashboard', kicker: 'Case Study · Ecommerce Seller Dashboard',
    tagline: 'A mobile dashboard that gives a small ecommerce seller a quick snapshot of business health, without a full analytics suite to dig through.',
    accentA: '#0ea5e9', accentB: '#eab308',
    role: 'UI/UX Design', tools: 'Figma', timeline: 'Self-directed project',
    heroImage: { src: 'images/seller-dasboard-mobie-ui.png', alt: 'Ecommerce seller dashboard mobile interface' },
    liveLink: { label: 'View Figma Prototype ↗', href: 'https://www.figma.com/design/gQxAOjJwmmCRWIXDZsMlf4/Untitled?node-id=63-251&t=TBE7EHe4BnYwmyY7-1' },

    overview: 'A mobile dashboard that gives a small ecommerce seller a quick snapshot of business health — revenue, orders and performance — without a full analytics suite to dig through.',
    problem: 'A small seller checks their store from their phone throughout the day and wants glanceable answers, not deep analysis — the interface has to work as a five-second check-in.',

    audience: {
      intro: "The dashboard's own brief defines its target user directly.",
      personas: [
        { role: 'The Small Seller', context: 'A small ecommerce seller who checks their store from their phone throughout the day.', goals: ['Know how the business is doing without sitting down to analyse it'], needs: ['Quick insights, not deep analysis', 'Glanceable data — revenue, orders, pending, visitors — in one view'], painPoints: ['A phone-first check-in has no patience for a desktop-style analytics suite'] }
      ]
    },
    needs: [
      { title: 'Glanceability', text: 'Revenue, orders and pending status readable at a glance.' },
      { title: 'Simplicity', text: 'Trends over raw numbers — clean charts, not a numbers overload.' },
      { title: 'Control', text: 'Managing orders and settings needs to stay a short, simple list, not a maze.' }
    ],
    painPoints: [
      { problem: "Deep analysis doesn't fit a phone check-in", why: 'The target user explicitly wants quick insights, not deep analysis, and checks in from their phone throughout the day.', implication: 'The Overview leads with one large revenue card and a small set of quick-status cards — nothing requiring a session to parse.' },
      { problem: 'Numbers without trend context are slow to act on', why: 'A number alone — "24 orders today" — doesn\'t tell a seller if that\'s good or bad.', implication: 'Analytics is limited to two clean trend charts — revenue and order volume — with a simple time-range toggle, deliberately avoiding a numbers overload.' }
    ],
    uxGoals: [
      { title: 'Glanceability', text: 'Business health readable in a five-second check-in.' },
      { title: 'Simplicity', text: 'Trends over raw numbers; no chart clutter.' },
      { title: 'Consistency', text: 'One reusable component library across all four screens.' },
      { title: 'Control', text: 'Managing orders and settings stays a short, clear list.' }
    ],
    chains: [
      { need: 'A seller wants quick insights, not deep analysis.', insight: 'A phone check-in has no patience for a dashboard that requires interpretation.', decision: 'The Overview opens with one large revenue card and glanceable status cards for orders and visitors.' },
      { need: "A number alone doesn't say if the business is doing well.", insight: 'Trend, not magnitude, is what a busy seller actually needs to see.', decision: 'Two clean trend charts — revenue, order volume — with a simple time-range toggle, instead of a dense stats table.' }
    ],
    userFlow: ['Check in', 'Read trends', 'Manage orders', 'Adjust settings'],

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

    contribution: ['Screen design (Overview, Analytics, Orders, Settings)', 'Component library', 'Status-tag system'],
    outcome: 'Delivered as a complete Figma prototype with a reusable component library for navigation, cards and status tags.'
  },

  'salon': {
    num: '08', title: 'Lumière Salon', kicker: 'Case Study · Responsive Website',
    tagline: 'A fully responsive four-page website for a spa and salon business, designed independently for desktop, tablet and mobile.',
    accentA: '#d97706', accentB: '#78350f',
    role: 'UI/UX Design', tools: 'Figma', timeline: 'Training project · 1stop.ai internship',
    heroImage: { src: 'images/saloon-responsive-web.png', alt: 'Responsive salon website interface' },
    liveLink: { label: 'View Figma Prototype ↗', href: 'https://www.figma.com/design/hqwpUOLWHIe5r9prhSEfgz/Untitled?node-id=0-1&t=fYm7eR7E0AwGg7vx-1' },

    overview: 'Lumière Salon is a fully responsive four-page website for a spa and salon business, designed independently for desktop, tablet and mobile.',
    problem: 'Service businesses sell on atmosphere, but the practical information — services, pricing, booking — still has to be one tap away, and the layout has to hold together across three very different screen sizes.',

    audience: {
      intro: "The brief for this project asked for a target user to be defined for whichever business theme was chosen (a salon, here), but doesn't document one directly — the personas below are reasoned from the page's own content: service pricing, team bios and repeated \"Book Your Appointment\" CTAs.",
      personas: [
        { role: 'The Prospective Client', context: 'Someone researching a salon or spa before booking — comparing services, price and trust before committing.', goals: ['Decide whether this salon feels right before booking'], needs: ['A clear sense of the services offered and their price', 'Reassurance from the team and the space itself', "A booking action that's never far away"], painPoints: ["Service businesses are chosen on trust and atmosphere as much as price — a page that only lists services without personality won't convert"] }
      ]
    },
    needs: [
      { title: 'Atmosphere', text: 'The page needs to sell a feeling, not just a service list.' },
      { title: 'Transparency', text: 'Services and pricing need to be visible without a phone call.' },
      { title: 'Easy booking', text: 'A booking CTA needs to stay within reach on every page.' }
    ],
    painPoints: [
      { problem: 'Service businesses sell on atmosphere, not just information', why: "A purely functional services list won't differentiate one salon from another — trust and feeling matter as much as price.", implication: 'A full-bleed photographic hero and a warm, editorial cream-and-terracotta palette carry the atmosphere before any service is listed.' },
      { problem: 'Booking friction across devices', why: "A visitor deciding on mobile shouldn't lose the booking action while scrolling.", implication: 'A "Book Your Appointment" CTA repeats at the top and bottom of every page, redesigned per breakpoint rather than just shrunk.' }
    ],
    uxGoals: [
      { title: 'Atmosphere', text: 'Full-bleed photography and warm tone carry trust before copy does.' },
      { title: 'Transparency', text: 'Services, pricing and team visible without a call.' },
      { title: 'Consistency', text: 'One service-card system across Home, Services and About.' },
      { title: 'Responsiveness', text: 'Each breakpoint designed on its own, not scaled down.' }
    ],
    chains: [
      { need: 'A visitor needs to feel the space before trusting the service list.', insight: 'A service business is chosen on atmosphere as much as information.', decision: 'A full-bleed photographic hero with a warm cream/terracotta palette, before any service or price appears.' },
      { need: 'A booking action needs to stay reachable at every point on the page.', insight: 'Losing the CTA while scrolling is a lost conversion.', decision: 'A "Book Your Appointment" CTA repeated at both the top and bottom of every page.' }
    ],
    userFlow: ['Discover', 'Explore services', 'Build trust', 'Book'],

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

    contribution: ['Site naming (Lumière Salon)', 'Four pages × three breakpoints', 'Service-card system', 'Booking-focused CTAs'],
    outcome: 'Delivered as a complete Figma prototype — Lumière Salon — with dedicated desktop, tablet and mobile layouts for every page.'
  }
};

const CSP_ORDER = ['vidyapeeth360', 'helprevx', 'healthpulse', 'nexus-ai', 'grocery', 'edtech', 'seller-dashboard', 'salon'];


/* ══════════════════════════════════════════════════════════════════════
   02. SECTION BUILDERS
   ══════════════════════════════════════════════════════════════════════ */
function cspSectionList(p) {
  const s = [{ id: 'overview', label: 'Overview' }];
  if (p.audience || p.needs?.length || p.painPoints?.length) s.push({ id: 'research', label: 'Research' });
  if (p.uxGoals?.length || p.chains?.length) s.push({ id: 'goals', label: 'Goals' });
  if (p.userFlow?.length || p.process?.length || p.cards?.length) s.push({ id: 'process', label: 'Process' });
  if (p.screens?.length) s.push({ id: 'screens', label: 'Screens' });
  if (p.outcome || p.quote || p.contribution?.length) s.push({ id: 'result', label: 'Result' });
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

function cspPersonaHTML(per) {
  return `
    <div class="csp__persona">
      <p class="csp__persona-role">${esc(per.role)}</p>
      ${per.context ? `<p class="csp__persona-ctx">${esc(per.context)}</p>` : ''}
      <div class="csp__persona-grid">
        <div class="csp__persona-col"><h5>Goals</h5><ul>${per.goals.map((g) => `<li>${esc(g)}</li>`).join('')}</ul></div>
        <div class="csp__persona-col"><h5>Needs</h5><ul>${per.needs.map((n) => `<li>${esc(n)}</li>`).join('')}</ul></div>
        <div class="csp__persona-col"><h5>Pain points</h5><ul>${per.painPoints.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
      </div>
    </div>`;
}

function cspResearch(p) {
  if (!p.audience && !p.needs?.length && !p.painPoints?.length) return '';
  let body = '';
  if (p.audience) {
    body += `<p class="csp__sec-lede reveal">${esc(p.audience.intro)}</p>`;
    if (p.audience.personas?.length) {
      body += `<div class="csp__personas reveal" data-delay="80">${p.audience.personas.map(cspPersonaHTML).join('')}</div>`;
    }
  }
  if (p.needs?.length) {
    body += `
      <div class="csp__sub">
        <p class="csp__sub-k">User Needs</p>
        <h3 class="csp__sub-t">What they need from the product</h3>
      </div>
      <div class="csp__nums reveal" data-delay="60">${p.needs.map((n, i) => `
        <div class="csp__num"><span class="csp__num-n">${String(i + 1).padStart(2, '0')}</span><h4>${esc(n.title)}</h4><p>${esc(n.text)}</p></div>`).join('')}</div>`;
  }
  if (p.painPoints?.length) {
    body += `
      <div class="csp__sub">
        <p class="csp__sub-k">Pain Points</p>
        <h3 class="csp__sub-t">Where the experience could break down</h3>
      </div>
      <div class="csp__pains reveal" data-delay="60">${p.painPoints.map((pt) => `
        <div class="csp__pain">
          <p class="csp__pain-problem">${esc(pt.problem)}</p>
          <div class="csp__pain-body">
            <p class="csp__pain-why">${esc(pt.why)}</p>
            <p class="csp__pain-tag">Design implication</p>
            <p class="csp__pain-implication">${esc(pt.implication)}</p>
          </div>
        </div>`).join('')}</div>`;
  }
  return `
  <section class="csp__sec" id="research">
    <div class="wrap">
      <div class="csp__sec-head reveal">
        <p class="csp__sec-k">Research</p>
        <h2 class="csp__sec-t">Understanding the user</h2>
      </div>
      ${body}
    </div>
  </section>`;
}

function cspGoals(p) {
  if (!p.uxGoals?.length && !p.chains?.length) return '';
  let body = '';
  if (p.uxGoals?.length) {
    body += `<div class="csp__nums reveal" data-delay="60">${p.uxGoals.map((g, i) => `
      <div class="csp__num"><span class="csp__num-n">${String(i + 1).padStart(2, '0')}</span><h4>${esc(g.title)}</h4><p>${esc(g.text)}</p></div>`).join('')}</div>`;
  }
  if (p.chains?.length) {
    body += `
      <div class="csp__sub">
        <p class="csp__sub-k">From Need to Decision</p>
        <h3 class="csp__sub-t">How research shaped the design</h3>
      </div>
      <div class="csp__chain reveal" data-delay="60">${p.chains.map((c) => `
        <div class="csp__chain-i">
          <div class="csp__chain-row"><span class="csp__chain-tag">Need</span><p>${esc(c.need)}</p></div>
          <div class="csp__chain-row"><span class="csp__chain-tag">Insight</span><p>${esc(c.insight)}</p></div>
          <div class="csp__chain-row csp__chain-row--decision"><span class="csp__chain-tag">Decision</span><p>${esc(c.decision)}</p></div>
        </div>`).join('')}</div>`;
  }
  return `
  <section class="csp__sec" id="goals">
    <div class="wrap">
      <div class="csp__sec-head reveal">
        <p class="csp__sec-k">Goals</p>
        <h2 class="csp__sec-t">UX goals</h2>
      </div>
      ${body}
    </div>
  </section>`;
}

function cspProcess(p) {
  if (!p.userFlow?.length && !p.process?.length && !p.cards?.length) return '';
  let body = '';
  if (p.userFlow?.length) {
    body += `
      <div class="csp__sub" style="margin-top:0">
        <p class="csp__sub-k">User Flow</p>
        <h3 class="csp__sub-t">The path through the product</h3>
      </div>
      <div class="csp__flow reveal" data-delay="60">${p.userFlow.map((step, i) => `
        ${i > 0 ? `<span class="csp__flow-arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>` : ''}
        <span class="csp__flow-step">${esc(step)}</span>`).join('')}</div>`;
  }
  if (p.process?.length) {
    body += `
      <div class="csp__sub">
        <p class="csp__sub-k">Process</p>
        <h3 class="csp__sub-t">How it came together</h3>
      </div>
      <div class="csp__steps reveal" data-delay="60">
        ${p.process.map((s) => `<div class="csp__step"><div><h4>${esc(s.h)}</h4><p>${esc(s.p)}</p></div></div>`).join('')}
      </div>`;
  }
  if (p.cards?.length) {
    body += `
      <div class="csp__sub">
        <p class="csp__sub-k">Design</p>
        <h3 class="csp__sub-t">${esc(p.cardsHeading || 'Key decisions')}</h3>
      </div>
      <div class="csp__cards reveal" data-delay="60">
        ${p.cards.map((c) => `<div class="csp__card"><h4>${esc(c.h)}</h4><p>${esc(c.p)}</p></div>`).join('')}
      </div>`;
  }
  if (p.learnings?.length) {
    body += `
      <div class="csp__sub">
        <p class="csp__sub-k">Reflection</p>
        <h3 class="csp__sub-t">What I learned</h3>
      </div>
      <ul class="csp__l-list reveal" data-delay="60">${p.learnings.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>`;
  }
  return `
  <section class="csp__sec" id="process">
    <div class="wrap">
      <div class="csp__sec-head reveal">
        <p class="csp__sec-k">Process</p>
        <h2 class="csp__sec-t">Design direction</h2>
      </div>
      ${body}
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
  if (!p.outcome && !p.quote && !p.contribution?.length) return '';
  return `
  <section class="csp__sec" id="result">
    <div class="wrap">
      <div class="csp__sec-head reveal">
        <p class="csp__sec-k">Result</p>
        <h2 class="csp__sec-t">Where it landed</h2>
      </div>
      ${p.contribution?.length ? `
      <div class="csp__sub" style="margin-top:0">
        <p class="csp__sub-k">Contribution</p>
      </div>
      <ul class="csp__l-list reveal" data-delay="40">${p.contribution.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>` : ''}
      ${p.outcome ? `
      <div class="reveal" data-delay="80" style="margin-top:1.85rem">
        <p class="csp__sub-k" style="margin-bottom:.6rem">Outcome</p>
        <p>${esc(p.outcome)}</p>
      </div>` : ''}
      ${p.quote ? `
      <blockquote class="csp__quote reveal" data-delay="160" style="margin-top:2rem">
        <p>${esc(p.quote.text)}</p>
        <cite>${esc(p.quote.cite)}</cite>
      </blockquote>` : ''}
    </div>
  </section>`;
}


/* ══════════════════════════════════════════════════════════════════════
   03. RENDER + MOUNT
   ══════════════════════════════════════════════════════════════════════ */
function cspHeroImage(page) {
  const img = page.heroImage;
  return `
  <span class="csp__hero-image-glow" aria-hidden="true"></span>
  <a class="csp__hero-image" href="${esc(img.src)}" data-lightbox="${esc(img.src)}" data-lightbox-alt="${esc(img.alt)}" data-cursor="view">
    <img src="${esc(img.src)}" alt="${esc(img.alt)}" loading="eager" fetchpriority="high" decoding="async" />
  </a>`;
}

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
        ${cspHeroImage(p)}
      </div>
    </div>
  </section>

  <nav class="csp__nav" aria-label="Case study sections">
    <div class="wrap csp__nav-in">
      <a class="csp__nav-back mag" href="index.html#work" data-cursor="btn">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
        Back to Work
      </a>
      <div class="csp__nav-links">
        ${sections.map((s) => `<a href="#${s.id}">${esc(s.label)}</a>`).join('')}
      </div>
    </div>
  </nav>

  ${cspOverview(p)}
  ${cspResearch(p)}
  ${cspGoals(p)}
  ${cspProcess(p)}
  ${cspScreens(p)}
  ${cspResult(p)}

  <section class="csp__next">
    <div class="csp__next-glow" aria-hidden="true"></div>
    <div class="wrap csp__next-in">
      <p class="csp__next-k reveal">Want to see the project in context?</p>
      <div class="csp__cta-row reveal" data-delay="40">
        ${p.liveLink ? `<a class="csp__cta-btn csp__cta-btn--fill" href="${esc(p.liveLink.href)}" target="_blank" rel="noopener noreferrer" data-cursor="btn">${esc(p.liveLink.label)}</a>` : ''}
        <a class="csp__cta-btn csp__cta-btn--out" href="index.html#contact" data-cursor="btn">Let's Work Together →</a>
      </div>

      <div class="csp__next-divider reveal" data-delay="80" aria-hidden="true"></div>

      <p class="csp__next-k reveal" data-delay="100">Next case study</p>
      <h2 class="csp__next-t reveal" data-delay="140">${esc(CASE_STUDY_PAGES[cspNextKey(p.key)].title)}</h2>
      <a class="csp__next-link reveal mag" data-delay="180" href="case-study.html?p=${esc(cspNextKey(p.key))}" data-cursor="btn">
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
   04. SECTION SCROLL-SPY + SMOOTH SCROLL
   ══════════════════════════════════════════════════════════════════════ */
function cspWireSectionNav() {
  const links = $$('.csp__nav-links a');
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
   05. HERO PARALLAX — a whisper of drift on the project image
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
