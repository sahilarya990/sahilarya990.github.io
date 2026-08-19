/* ==========================================================================
   PORTFOLIO KNOWLEDGE BASE
   --------------------------------------------------------------------------
   Structured facts the AI assistant (chatbot.js) draws answers from. Every
   fact here is real — pulled from the actual page content (About, Experience,
   Certifications, Contact) and the case-study data in script.js/case-study.js.
   Nothing is invented. If something isn't in here, the assistant says so
   rather than guessing.

   Loaded on both index.html and case-study.html so the assistant works the
   same everywhere. Edit this file to keep the assistant up to date — it
   never needs touching chatbot.js itself.
   ========================================================================== */
const PORTFOLIO_KB = {

  profile: {
    name: 'Sahil Das',
    title: 'UI/UX Designer',
    tagline: 'I design digital experiences that feel as good as they look.',
    location: 'Rourkela, India',
    education: 'B.Tech in Industrial Design, NIT Rourkela — pre-final year',
    focus: ['UI/UX Design', 'Product Design', 'Brand Identity', 'Design Systems', 'Frontend Development'],
    tools: ['Figma', 'VS Code', 'GitHub'],
    bio: [
      "I'm a pre-final year B.Tech student who enjoys turning complex ideas into intuitive, user-centred digital experiences — across UI/UX design, branding and product thinking. My journey has taken me from designing for college clubs to leading creative teams as Creative Head at ASME and Axiom, NIT Rourkela.",
      "During my internship at HelpRevX, I designed the HelpRevX and Vidyapeeth360 logos, built the HelpRevX brand identity and kit, and designed the Vidyapeeth360 landing page — collaborating with Claude through GitHub to build and refine responsive interfaces along the way.",
      "I'm always experimenting with new tools and AI-assisted workflows, working toward growing as a Product Designer who builds scalable, user-centric products."
    ]
  },

  skills: {
    'UI/UX Design': ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Interaction Design', 'Design Systems', 'Usability'],
    'Web Design': ['Figma', 'UI Design', 'Responsive Design', 'Design Systems', 'Web Layout', 'Prototyping'],
    'Branding': ['Brand Identity', 'Logo Design', 'Brand Guidelines', 'Color Systems', 'Typography', 'Visual Identity', 'Brand Strategy'],
    'SaaS / Product Design': ['Dashboard Design', 'Product Design', 'Design Systems', 'UX Architecture', 'Data Visualization', 'Responsive UI', 'User Flows'],
    'Mobile Design': ['Mobile UI', 'Mobile UX', 'User Flows', 'Wireframing', 'Prototyping', 'Responsive Design', 'Interaction Design'],
    'Frontend Development': ['HTML', 'CSS', 'JavaScript', 'Responsive Web Design', 'Frontend Development', 'GitHub', 'Figma-to-Code', 'UI Implementation'],
    'AI-assisted workflow': ['Figma AI', 'Claude (AI-assisted development)']
  },

  /* Every project now has a full case-study page at case-study.html?p=<key> */
  projects: [
    {
      key: 'vidyapeeth360', title: 'Vidyapeeth360', category: 'EdTech · UI/UX · Frontend',
      blurb: 'An institution-management platform for schools, colleges and coaching institutes.',
      summary: "Vidyapeeth360 is an institution-management/EdTech platform where Sahil worked on the visual identity and responsive landing page.",
      contribution: ['Logo and visual identity', 'Landing page UI/UX', 'Responsive layouts', 'Figma AI exploration', 'AI-assisted frontend development (HTML/CSS/JS)', 'Iterative refinement using Claude'],
      note: 'The only project where Sahil also handled frontend implementation (Claude + HTML/CSS/JS) — every other project was designed in Figma.'
    },
    {
      key: 'helprevx', title: 'HelpRevX', category: 'Brand Identity · UI/UX',
      blurb: "HelpRevX's own brand identity system, designed during Sahil's internship there.",
      summary: 'HelpRevX is a brand-identity project — the logo, colour system and visual language for the company Sahil interned at.',
      contribution: ['Logo design', 'Brand Kit', 'Colour system (blue, orange, yellow, green)', 'Typography', 'Applications across light/dark/compact formats'],
      note: null
    },
    {
      key: 'nexus-ai', title: 'Nexus AI', category: 'SaaS Dashboard · UI/UX',
      blurb: 'A developer dashboard concept for managing an AI API platform.',
      summary: 'Nexus AI is a dashboard concept for developers, ML engineers and platform teams — usage analytics, model management, API keys and team activity.',
      contribution: ['Persona mapping', 'Navigation & information architecture', 'Token-based dark design system', 'Five high-fidelity Figma screens', 'Interaction/motion spec'],
      note: 'Designed entirely in Figma, delivered as a high-fidelity prototype (no coded build).'
    },
    {
      key: 'healthpulse', title: 'HealthPulse', category: 'Fitness App · UI/UX',
      blurb: 'A mobile health companion — fitness tracking, AI coaching, nutrition and sleep.',
      summary: 'HealthPulse unifies fitness tracking, AI coaching, nutrition logging and sleep analytics into one mobile product.',
      contribution: ['Persona mapping', 'Core user-flow design', 'Bento-grid dashboard', 'Component library', 'Interaction spec for thirteen screens'],
      note: 'Designed entirely in Figma, delivered as a high-fidelity prototype (no coded build).'
    },
    {
      key: 'grocery', title: 'ClearCart', category: 'Grocery Delivery App · UI/UX',
      blurb: 'A mobile-first grocery delivery app — browsing, cart and live order tracking.',
      summary: 'ClearCart is a grocery delivery app covering the full order journey from Home to Order Tracking.',
      contribution: ['Five core screens (Home, Browse, Item Details, Cart, Order Tracking)', 'Figma component system', 'Order-tracking status timeline'],
      note: null
    },
    {
      key: 'edtech', title: 'SkillForge', category: 'EdTech Landing Page · UI/UX',
      blurb: 'A conversion-focused EdTech landing page for career-focused learners.',
      summary: 'SkillForge is an EdTech landing page designed to communicate value, trust and course outcomes.',
      contribution: ['Home, Course Listing, Course Details and About pages', 'Course-card system', 'Trust/testimonial sections'],
      note: null
    },
    {
      key: 'seller-dashboard', title: 'Seller Dashboard', category: 'Ecommerce Dashboard · UI/UX',
      blurb: 'A mobile dashboard giving a small ecommerce seller a quick snapshot of business health.',
      summary: 'A seller-side mobile dashboard — Overview, Analytics, Orders and Settings — built as a self-directed project.',
      contribution: ['Overview, Analytics, Orders & Settings screens', 'Reusable component library', 'Status-tag order list'],
      note: null
    },
    {
      key: 'salon', title: 'Lumière Salon', category: 'Responsive Website · UI/UX',
      blurb: 'A fully responsive four-page website for a spa and salon business.',
      summary: 'Lumière Salon is a responsive website — Home, About, Services and Contact — designed independently for desktop, tablet and mobile.',
      contribution: ['Four pages designed per breakpoint', 'Service-card grid system', 'Booking-focused CTAs'],
      note: null
    }
  ],

  experience: [
    {
      org: 'HelpRevX', role: 'UI/UX & Frontend Intern', period: 'May 2026 — Jul 2026',
      description: "Designed the HelpRevX brand identity and Brand Kit, and created Vidyapeeth360's logo and responsive landing page using HTML, CSS and JavaScript."
    },
    {
      org: '1stop.ai', role: 'UI/UX Training & Internship', period: 'Dec 2025 — Apr 2026',
      description: 'Completed UI/UX training and internship projects, including HealthPulse and Nexus AI, focusing on product design, prototyping, responsive interfaces, dark-themed systems and reusable components.'
    },
    {
      org: 'Axiom — Mathematical Club, NIT Rourkela', role: 'Creative Head', period: 'May 2025 — Present',
      description: 'Leading creative design and visual communication, including posters, event promotions, social media content and campaign creatives.'
    },
    {
      org: 'ASME — Mechanical Club, NIT Rourkela', role: 'Creative Head', period: 'May 2026 — Present',
      description: 'Leading visual communication and creative direction across event branding, promotional creatives, posters and social media graphics.'
    }
  ],

  certifications: [
    { title: 'UI/UX Developer — HelpRevX', issuer: 'HelpRevX', period: 'May 20 – Jul 20, 2026' },
    { title: 'Design, Prototyping & Advance Manufacturing', issuer: 'Dept. of Industrial Design, NIT Rourkela', period: 'May 25 & 29, 2026' },
    { title: 'UI-UX Internship Program — 1stop', issuer: '1stop', period: 'Dec 1, 2025 – Apr 1, 2026' }
  ],

  services: ['Web Design', 'UI/UX Design', 'Branding', 'SaaS Design', 'Mobile App Design', 'Frontend Development'],

  contact: {
    email: 'sahilarya2552@gmail.com',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/sahilarya990'
  }
};
