import type { Dictionary } from './types';

export const en: Dictionary = {
  nav: { about: 'About', stack: 'Stack', experience: 'Experience', projects: 'Projects', contact: 'Contact', openToWork: 'Open to work', backHome: 'Back to home' },
  hero: {
    kicker: '// SENIOR FULL-STACK ENGINEER · TECH LEAD',
    tagline: 'I build real-time, full-stack products — Web, Android & iOS from a single codebase. 6+ years across MERN, Angular/Ionic and fintech systems, shipping with AI-assisted workflows.',
    viewWork: 'View work',
    downloadCv: 'Download CV',
    metrics: [
      { value: '25K', label: 'concurrent users' },
      { value: '95%', label: 'test coverage' },
      { value: '6+ yrs', label: 'engineering' },
      { value: '3', label: 'platforms, 1 codebase' },
    ],
  },
  about: {
    heading: 'About',
    bio: [
      'Tech Lead with 6+ years building full-stack systems across MERN, Angular/Ionic, and microservices. I deliver Web, Android, and iOS from a single codebase and lead teams through code review, CI/CD automation, and AI-assisted workflows that measurably shorten delivery cycles.',
      'I work best where real-time data, fintech, and performance intersect — translating business goals into scalable architecture, end to end.',
    ],
    facts: [
      { label: 'Location', value: 'Nabeul, Tunisia · Remote-first' },
      { label: 'Languages', value: 'Arabic (native) · French (B2) · English (B2)' },
      { label: 'Focus', value: 'Real-time · Fintech · Cross-platform' },
    ],
  },
  skills: {
    heading: 'Stack',
    groups: [
      { label: 'Frontend', items: ['React', 'Next.js', 'Angular', 'Ionic', 'TypeScript', 'HTML5/CSS3', 'Bootstrap'] },
      { label: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Spring Boot (Java 17)', 'REST', 'WebSockets', 'Microservices'] },
      { label: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Oracle', 'SQL Server', 'Firebase', 'Elasticsearch'] },
      { label: 'DevOps / Cloud', items: ['GitLab CI/CD', 'Jenkins', 'Docker', 'AWS EC2'] },
      { label: 'Testing', items: ['Playwright (E2E)', 'Vitest', 'Jest'] },
      { label: 'Auth / Observability', items: ['Auth0 (SSO)', 'Sentry'] },
      { label: 'AI Tooling', items: ['Claude Code', 'Cursor AI'] },
    ],
  },
  experience: {
    heading: 'Experience',
    subtitle: 'Recent roles',
    viewAll: 'View full career',
    pageTitle: 'Career',
    roles: [
      { company: 'FinGenesis', title: 'Full-Stack Engineer (ScanAlpha)', period: 'Jul 2025 — Present', location: 'Remote', bullets: ['Delivered Web + Android + iOS from one Ionic + Angular codebase, cutting platform maintenance overhead vs. native builds.', 'Architected a real-time Node.js + Express + WebSockets backend supporting 25,000 concurrent users.', 'Raised automated test coverage to 95% (Vitest + Playwright E2E) in GitLab CI/CD, cutting manual QA effort 50%.', 'Shipped through App Store & Google Play with zero critical security findings; added Auth0 SSO + Sentry.'], tech: ['Ionic', 'Angular', 'TypeScript', 'Node.js', 'WebSockets', 'Playwright', 'GitLab CI/CD', 'Auth0', 'Sentry'], link: 'https://scanalpha.ai/' },
      { company: 'Navoy', title: 'Co-Founder & Technical Lead (MERN)', period: 'Apr 2024 — Jul 2025', location: 'Remote', bullets: ['Architected and shipped on the MERN stack (Next.js, NestJS, PostgreSQL, MongoDB) from MVP to production.', 'Led & mentored a 3-engineer team, delivering milestones on schedule through code review and best-practice enforcement.', 'Standardized Claude Code & Cursor AI team-wide, accelerating delivery ~30%.'], tech: ['Next.js', 'NestJS', 'Node.js', 'MongoDB', 'PostgreSQL', 'Microservices', 'Claude Code', 'Cursor'], link: 'https://navoy.io/' },
      { company: 'Devwise', title: 'Full-Stack Software Engineer (Freelance)', period: 'Jun 2024 — Jul 2025', location: 'Remote', bullets: ['Built responsive Angular interfaces backed by Spring Boot (Java 17) services to enterprise standards.', 'Optimized Oracle & SQL Server databases, improving query performance and front-to-back integration.'], tech: ['Angular', 'Spring Boot', 'Java 17', 'Oracle', 'SQL Server', 'Docker', 'Jenkins'], link: 'https://www.devwise.tn/' },
      { company: 'Market 360 Degrees', title: 'Technical Lead (Node.js / React.js)', period: 'Aug 2023 — Apr 2024', location: 'Tunis, Tunisia', bullets: ['Directed a React.js/Node.js team shipping new features and modernizing the existing codebase.', 'Enforced code quality via reviews + coding standards; owned client communication and delivery.'], tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Elasticsearch'] },
      { company: 'Alight', title: 'Technical Lead, Front-End → Software Developer', period: 'Jul 2020 — Aug 2023', location: 'Tunisia', bullets: ['Led a front-end team delivering responsive React + SharePoint SPFX interfaces on time and to quality standards.', 'Built enterprise intranets, document management and Power Apps automation for Cofat, Merck, Metafinaz and Université Centrale.', 'Drove performance optimization, cross-browser compatibility and accessibility while mentoring team members.'], tech: ['React', 'TypeScript', 'SharePoint SPFX', 'JavaScript', 'Bootstrap', 'Node.js'], link: 'http://alightmea.com/' },
      { company: 'GOMYCODE', title: 'Front-End Instructor (ReactJS)', period: 'Jun 2021 — Jun 2022', location: 'Tunisia · Part-time', bullets: ['Taught ReactJS to bootcamp students: ES6, JSX, components, props & state, hooks, React Router, Redux, and consuming REST APIs.', 'Mentored learners hands-on from fundamentals to shipping working React applications.'], tech: ['React', 'JavaScript (ES6)', 'Redux', 'React Router'] },
      { company: 'Inscrypt', title: 'Full-Stack Developer', period: 'Feb 2019 — Jun 2020', location: 'Tunisia', bullets: ['Shipped a teleconsultation platform with real-time video (WebRTC, Socket.io).', "Built Vinko's startup–expert matching demo on React + Node + MongoDB (AWS EC2)."], tech: ['React', 'Node.js', 'Firebase', 'MongoDB', 'WebRTC', 'Socket.io', 'AWS EC2'] },
    ],
  },
  projects: {
    heading: 'Projects',
    subtitle: 'Selected work',
    viewAll: 'All projects',
    pageTitle: 'Projects',
    caseStudy: 'Case study',
    problemLabel: 'Problem',
    solutionLabel: 'Architecture & Approach',
    resultsLabel: 'Results',
    stackLabel: 'Stack',
    items: [
      { slug: 'scanalpha', name: 'ScanAlpha', tagline: 'AI market-intelligence platform for active traders — Web, Android & iOS', year: '2025', role: 'Full-Stack Engineer', stack: ['Ionic', 'Angular', 'TypeScript', 'Node.js', 'WebSockets', 'Playwright', 'Auth0', 'Sentry'], links: [{ label: 'scanalpha.ai', href: 'https://scanalpha.ai/' }], summary: 'A fintech platform that scans the market for high-probability trade setups, forecasts price, and scores sentiment — delivered across Web, Android & iOS from a single codebase over a real-time backend.', problem: 'Active traders burn hours scanning hundreds of tickers and second-guessing entries. The goal: deliver Wall-Street-grade analysis to Web, Android and iOS in real time, without maintaining three native codebases.', solution: 'Built one Ionic + Angular codebase for all platforms over a real-time Node.js + Express + WebSockets backend. Shipped product surfaces including Prime Opportunity scanning across hundreds of tickers, multi-day price forecasting, news-to-sentiment scoring, an "Ask Alpha" AI analyst, and Replay/Pinpoint backtest-audit tools. Wired Vitest + Playwright E2E into GitLab CI/CD, with Auth0 SSO and Sentry observability.', results: ['25,000 concurrent users supported on the real-time backend', '95% automated test coverage; 50% less manual QA effort', '60% faster mobile startup time', 'Zero critical security findings across store releases'] },
      { slug: 'navoy', name: 'Navoy', tagline: 'AI travel agent — a full itinerary, with hotels & transfers booked in minutes', year: '2024', role: 'Co-Founder & Tech Lead', stack: ['Next.js', 'NestJS', 'Node.js', 'MongoDB', 'PostgreSQL', 'Microservices'], links: [{ label: 'navoy.io', href: 'https://navoy.io/' }], summary: 'An AI travel platform that turns a few preferences into a complete day-by-day itinerary and books hotels and transfers in one place — co-founded and led from MVP to production.', problem: 'Trip planning means juggling dozens of tabs: AI assistants plan but cannot book; OTAs book but do not intelligently plan. Bridge both in one product, with real, verified pricing.', solution: 'Architected and shipped on the MERN stack (Next.js, NestJS, PostgreSQL, MongoDB): AI-generated itineraries that adapt to real-world changes, direct hotel & transfer booking across 2.9M+ properties, group planning with shared voting, and real-time price verification. Led a 3-engineer team and standardized AI-assisted workflows (Claude Code, Cursor).', results: ['Shipped from MVP to production; backed by AWS, Google, Microsoft & NVIDIA startup programs', 'Featured on Product Hunt', '~30% faster delivery via standardized AI-assisted workflows', 'Milestones delivered on schedule with a 3-engineer team'] },
      { slug: 'trading-bot', name: 'Automated Trading Bot', tagline: 'Algorithmic Price-Action strategies with risk modelling', year: '2021–2023', role: 'Freelance Engineer', stack: ['Node.js', 'React', 'MongoDB', 'AWS EC2'], links: [], summary: 'A fully automated trading platform turning Price-Action strategies into algorithms, with backtesting and live dashboards.', problem: 'Systematize discretionary Price-Action trading strategies and monitor their performance continuously.', solution: 'Engineered strategies into algorithms with statistical risk-management models, built automated backtesting, and a Node.js + React platform surfacing 24h performance dashboards.', results: ['Automated backtesting of complex strategies', 'Continuous performance monitoring via 24h dashboards', 'Statistical risk-management optimization'] },
      { slug: 'teleconsultation', name: 'Teleconsultation Platform', tagline: 'Real-time video consultation web app', year: '2019–2020', role: 'Full-Stack Developer', stack: ['React', 'Node.js', 'Firebase', 'WebRTC', 'Socket.io', 'Redux'], links: [], summary: 'A web application enabling real-time video consultations for a clinical psychologist.', problem: 'Enable secure, real-time remote consultations between practitioner and patients in the browser.', solution: 'Built a React + Node.js app with WebRTC for peer-to-peer video and Socket.io for signalling and real-time state, backed by Firebase.', results: ['Real-time in-browser video consultations', 'Delivered end-to-end as an early-career full-stack build'] },
    ],
    moreTitle: 'Freelance & other work',
    more: [
      { name: 'Yamentech', desc: 'E-commerce store with a custom CMS for an IT-product retailer.', stack: ['React', 'Bootstrap', 'PHP'], href: 'https://yamentech.com' },
      { name: 'Mobishop', desc: 'E-commerce store with a custom CMS for an IT-product retailer.', stack: ['React', 'Bootstrap', 'PHP'], href: '' },
      { name: 'Aframe', desc: 'Marketing site presenting wooden-house models.', stack: ['Bootstrap', 'HTML5', 'CSS3', 'jQuery'], href: '' },
    ],
    enterpriseTitle: 'Enterprise & SharePoint work',
    enterprise: [
      { name: 'BeExpert — Corporate LMS (Alight)', desc: 'Front-end tech lead on Alight\'s corporate learning platform — a collaborative, modern, intelligent LMS.', stack: ['React', 'TypeScript', 'SharePoint SPFX'], href: '' },
      { name: 'Zignals Digital Workplace (Alight)', desc: 'Built the Teams Governance feature for Alight\'s Microsoft 365 digital-workplace platform.', stack: ['React', 'SharePoint SPFX', 'Microsoft Teams', 'Node.js'], href: '' },
      { name: 'Enterprise SharePoint intranets', desc: 'SPFX intranets, document management and Power Apps automation for Cofat, Merck, Metafinaz and Université Centrale.', stack: ['React', 'SharePoint SPFX', 'Power Apps', 'Office 365'], href: '' },
    ],
  },
  contact: {
    heading: 'Contact',
    blurb: "Open to Senior Full-Stack / Tech Lead roles (remote-first), fintech & real-time builds, and architecture consulting. I reply to every message.",
    emailCta: 'Email me',
    email: 'alaeddine.tabbane@gmail.com',
    location: 'Nabeul, Tunisia',
  },
  footer: { builtWith: 'Built with Next.js · Deployed on GitHub Pages' },
};
