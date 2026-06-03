# Alaeddine Tabbane Portfolio — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a bilingual (EN/FR), mobile-first personal portfolio for Alaeddine Tabbane with the "Holo Data HUD" aesthetic, as a static Next.js site on GitHub Pages.

**Architecture:** Next.js App Router exported as static HTML (`output: 'export'`). A hub home page of summaries links to detail routes (`/experience`, `/projects`, `/projects/[slug]`). Language is client-side: a `LanguageProvider` swaps typed `en`/`fr` dictionaries and persists to `localStorage`. Styling is Tailwind + CSS variables; animation is Framer Motion; icons are lucide-react.

**Tech Stack:** Next.js (App Router, static export), React, TypeScript, Tailwind CSS, Framer Motion, lucide-react, `next/font` (Sora + IBM Plex Mono), Vitest + React Testing Library (logic/render tests), GitHub Actions (deploy).

**Reference:** Approved spec at `docs/superpowers/specs/2026-06-03-portfolio-design.md`. Validated hero visual at `C:\Users\alaed\MEGAsync\documents\cv\.superpowers\brainstorm\2611-1780523832\content\hero-holo-v2.html`.

**Conventions used throughout:**
- All commands run from the project root `C:\Users\alaed\projects\AlaeddineTabbane.github.io` unless stated.
- Commit after each task. Commit message convention: `feat:`, `chore:`, `test:`, `style:`, `ci:`.
- Type names are fixed in Task 3 and reused verbatim everywhere: `Lang`, `Dictionary`, `Role`, `ProjectContent`, `ProjectMeta`.

---

## Task 0: Pre-flight (manual, user)

**These are blockers the agent cannot do; surface them but proceed with build tasks.**

- [ ] **Step 1: Confirm Node is available**

Run: `node -v && npm -v`
Expected: Node ≥ 18 (project tested on v24), npm present.

- [ ] **Step 2: Note GitHub repo creation is manual**

`gh` CLI is NOT installed. The user must, before Task 17 push:
1. Create a public GitHub repo named exactly `AlaeddineTabbane.github.io`.
2. In repo Settings → Pages → "Build and deployment" → Source = **GitHub Actions**.
Record this in the README (Task 17). No action needed now.

---

## Task 1: Scaffold Next.js app with static-export config

**Files:**
- Create: `package.json`, `next.config.mjs`, `tsconfig.json`, `postcss.config.mjs`, `tailwind.config.ts`, `.eslintrc.json`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `next-env.d.ts`
- Existing: `.gitignore` (already present), spec under `docs/`

- [ ] **Step 1: Initialize package.json and install dependencies**

Run from project root:
```bash
npm init -y
npm install next@latest react@latest react-dom@latest framer-motion lucide-react
npm install -D typescript @types/react @types/node @types/react-dom tailwindcss postcss autoprefixer eslint eslint-config-next vitest @testing-library/react @testing-library/jest-dom jsdom @vitejs/plugin-react
```
Expected: installs succeed, `node_modules/` created (gitignored).

- [ ] **Step 2: Replace package.json scripts**

Overwrite the `"scripts"` block in `package.json` with:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "vitest run",
    "test:watch": "vitest",
    "preview": "npx serve out"
  }
}
```

- [ ] **Step 3: Create next.config.mjs (static export)**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true, // ensures /experience/ resolves to a static folder on Pages
};

export default nextConfig;
```

- [ ] **Step 4: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "ES2020"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 5: Create postcss.config.mjs**

```js
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} },
};
```

- [ ] **Step 6: Create tailwind.config.ts**

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        bg2: 'var(--bg2)',
        ink: 'var(--ink)',
        mut: 'var(--mut)',
        cyan: 'var(--cyan)',
        bluey: 'var(--blue)',
        mag: 'var(--mag)',
        mint: 'var(--mint)',
        line: 'var(--line)',
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 7: Create .eslintrc.json**

```json
{ "extends": "next/core-web-vitals" }
```

- [ ] **Step 8: Create minimal app/globals.css (expanded in Task 2)**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 9: Create placeholder app/layout.tsx**

```tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Alaeddine Tabbane', description: 'Portfolio' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 10: Create placeholder app/page.tsx**

```tsx
export default function Home() {
  return <main style={{ padding: 40 }}>Portfolio scaffold OK</main>;
}
```

- [ ] **Step 11: Verify build produces static export**

Run: `npm run build`
Expected: build succeeds; an `out/` directory is created containing `index.html`. (Next prints "Exporting (static)".)

- [ ] **Step 12: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js static-export app with Tailwind"
```

---

## Task 2: Design tokens, fonts, and global atmosphere CSS

**Files:**
- Modify: `app/globals.css`, `app/layout.tsx`
- Create: `lib/fonts.ts`

- [ ] **Step 1: Create lib/fonts.ts (next/font)**

```ts
import { Sora, IBM_Plex_Mono } from 'next/font/google';

export const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

export const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});
```

- [ ] **Step 2: Wire fonts into app/layout.tsx body class**

Replace `app/layout.tsx` with:
```tsx
import type { Metadata } from 'next';
import './globals.css';
import { sora, plexMono } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Alaeddine Tabbane — Senior Full-Stack Engineer & Tech Lead',
  description:
    'Senior Full-Stack Engineer & Tech Lead. Real-time, fintech, full-stack — MERN, Angular/Ionic, cross-platform. 6+ years.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${plexMono.variable}`}>
      <body className="bg-bg text-ink font-sora antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Write full globals.css (tokens + atmosphere utilities)**

Overwrite `app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #070a12;
  --bg2: #0a0f1d;
  --ink: #e9eefb;
  --mut: #8a97b8;
  --cyan: #5eeaff;
  --blue: #8a9bff;
  --mag: #ff5ea0;
  --mint: #23e5b0;
  --line: rgba(120, 160, 255, 0.18);
}

html { scroll-behavior: smooth; }
body { overflow-x: hidden; }

/* Iridescent gradient text */
.text-holo {
  background: linear-gradient(108deg, #eaf2ff 6%, var(--cyan) 36%, var(--blue) 56%, var(--mag) 84%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 0 34px rgba(94, 234, 255, 0.35)) drop-shadow(0 0 60px rgba(255, 94, 160, 0.18));
}

/* Faded grid background layer */
.bg-grid {
  background-image: linear-gradient(var(--line) 1px, transparent 1px),
    linear-gradient(90deg, var(--line) 1px, transparent 1px);
  background-size: 46px 46px;
  -webkit-mask-image: radial-gradient(120% 90% at 50% 0%, #000 35%, transparent 80%);
  mask-image: radial-gradient(120% 90% at 50% 0%, #000 35%, transparent 80%);
}

/* Faint scanlines */
.scanlines {
  background: repeating-linear-gradient(transparent 0 3px, rgba(140, 200, 255, 0.022) 3px 4px);
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
}
```

- [ ] **Step 4: Verify build still passes**

Run: `npm run build`
Expected: success; fonts fetched at build time (no network errors).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "style: add Holo design tokens, next/font, atmosphere utilities"
```

---

## Task 3: i18n types + dictionaries (real content) + parity test

**Files:**
- Create: `lib/i18n/types.ts`, `lib/i18n/en.ts`, `lib/i18n/fr.ts`, `lib/i18n/index.ts`
- Create: `lib/data/projects.ts` (language-independent project meta)
- Test: `lib/i18n/__tests__/dictionaries.test.ts`
- Create: `vitest.config.ts`, `vitest.setup.ts`

- [ ] **Step 1: Create vitest config + setup**

`vitest.config.ts`:
```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  test: { environment: 'jsdom', setupFiles: ['./vitest.setup.ts'], globals: true },
  resolve: { alias: { '@': path.resolve(__dirname, '.') } },
});
```

`vitest.setup.ts`:
```ts
import '@testing-library/jest-dom';
```

- [ ] **Step 2: Define shared types (lib/i18n/types.ts)**

```ts
export type Lang = 'en' | 'fr';

export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export interface ProjectContent {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  summary: string;
  problem: string;
  solution: string;
  results: string[];
}

export interface Dictionary {
  nav: { work: string; about: string; stack: string; experience: string; projects: string; contact: string; openToWork: string; backHome: string };
  hero: { kicker: string; tagline: string; viewWork: string; downloadCv: string; metrics: { value: string; label: string }[] };
  about: { heading: string; bio: string[]; facts: { label: string; value: string }[] };
  skills: { heading: string; groups: { label: string; items: string[] }[] };
  experience: { heading: string; subtitle: string; viewAll: string; pageTitle: string; roles: Role[] };
  projects: { heading: string; subtitle: string; viewAll: string; pageTitle: string; caseStudy: string; problemLabel: string; solutionLabel: string; resultsLabel: string; stackLabel: string; items: ProjectContent[] };
  contact: { heading: string; blurb: string; emailCta: string; email: string };
  footer: { builtWith: string };
}
```

- [ ] **Step 3: Language-independent project meta (lib/data/projects.ts)**

Slugs and accents do not change per language; `generateStaticParams` uses this so it never depends on a dictionary.
```ts
export interface ProjectMeta { slug: string; hasCaseStudy: boolean; accent: 'cyan' | 'mag' | 'mint' }

export const PROJECTS_META: ProjectMeta[] = [
  { slug: 'scanalpha', hasCaseStudy: true, accent: 'cyan' },
  { slug: 'navoy', hasCaseStudy: true, accent: 'mint' },
  { slug: 'trading-bot', hasCaseStudy: true, accent: 'mag' },
  { slug: 'teleconsultation', hasCaseStudy: true, accent: 'cyan' },
];

export const PROJECT_SLUGS = PROJECTS_META.map((p) => p.slug);
export const hasCaseStudy = (slug: string) => PROJECTS_META.find((p) => p.slug === slug)?.hasCaseStudy ?? false;
```

- [ ] **Step 4: English dictionary (lib/i18n/en.ts)** — real content from the approved CV/LinkedIn

```ts
import type { Dictionary } from './types';

export const en: Dictionary = {
  nav: { work: 'Work', about: 'About', stack: 'Stack', experience: 'Experience', projects: 'Projects', contact: 'Contact', openToWork: 'Open to work', backHome: 'Back to home' },
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
      { company: 'FinGenesis', title: 'Full-Stack Engineer (ScanAlpha)', period: 'Jul 2025 — Present', location: 'Remote', bullets: ['Delivered Web + Android + iOS from one Ionic + Angular codebase, cutting platform maintenance overhead vs. native builds.', 'Architected a real-time Node.js + Express + WebSockets backend supporting 25,000 concurrent users.', 'Raised automated test coverage to 95% (Vitest + Playwright E2E) in GitLab CI/CD, cutting manual QA effort 50%.', 'Shipped through App Store & Google Play with zero critical security findings; added Auth0 SSO + Sentry.'], tech: ['Ionic', 'Angular', 'TypeScript', 'Node.js', 'WebSockets', 'Playwright', 'GitLab CI/CD', 'Auth0', 'Sentry'] },
      { company: 'Navoy', title: 'Co-Founder & Technical Lead (MERN)', period: 'Apr 2024 — Jul 2025', location: 'Remote', bullets: ['Architected and shipped on the MERN stack (Next.js, NestJS, PostgreSQL, MongoDB) from MVP to production.', 'Led & mentored a 3-engineer team, delivering milestones on schedule through code review and best-practice enforcement.', 'Standardized Claude Code & Cursor AI team-wide, accelerating delivery ~30%.'], tech: ['Next.js', 'NestJS', 'Node.js', 'MongoDB', 'PostgreSQL', 'Microservices', 'Claude Code', 'Cursor'] },
      { company: 'Devwise', title: 'Full-Stack Software Engineer (Freelance)', period: 'Jun 2024 — Jul 2025', location: 'Remote', bullets: ['Built responsive Angular interfaces backed by Spring Boot (Java 17) services to enterprise standards.', 'Optimized Oracle & SQL Server databases, improving query performance and front-to-back integration.'], tech: ['Angular', 'Spring Boot', 'Java 17', 'Oracle', 'SQL Server', 'Docker', 'Jenkins'] },
      { company: 'Market 360 Degrees', title: 'Technical Lead (Node.js / React.js)', period: 'Aug 2023 — Apr 2024', location: 'Tunis, Tunisia', bullets: ['Directed a React.js/Node.js team shipping new features and modernizing the existing codebase.', 'Enforced code quality via reviews + coding standards; owned client communication and delivery.'], tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Elasticsearch'] },
      { company: 'Alight', title: 'Technical Lead, Front-End → Software Developer', period: 'Jul 2020 — Aug 2023', location: 'Tunisia', bullets: ['Led a front-end team delivering responsive React + SharePoint SPFX interfaces on time and to quality standards.', 'Delivered solutions for 5+ enterprise clients incl. Cofat & Merck — intranets, document management, custom Power Apps.'], tech: ['React', 'TypeScript', 'SharePoint SPFX', 'JavaScript', 'Bootstrap', 'Node.js'] },
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
      { slug: 'scanalpha', name: 'ScanAlpha', tagline: 'Real-time fintech platform across Web, Android & iOS', year: '2025', role: 'Full-Stack Engineer', stack: ['Ionic', 'Angular', 'TypeScript', 'Node.js', 'WebSockets', 'Playwright', 'Auth0', 'Sentry'], summary: 'A fintech platform delivering financial services across three platforms from a single codebase, with a real-time backend at scale.', problem: 'Deliver a secure, real-time fintech experience to Web, Android, and iOS users without maintaining three separate native codebases.', solution: 'Built one Ionic + Angular codebase for all platforms, backed by a Node.js + Express + WebSockets service for live data sync. Wired Vitest + Playwright E2E into GitLab CI/CD, and added Auth0 SSO and Sentry observability.', results: ['25,000 concurrent users supported on the real-time backend', '95% automated test coverage; 50% less manual QA effort', '60% faster mobile startup time', 'Zero critical security findings across store releases'] },
      { slug: 'navoy', name: 'Navoy', tagline: 'MERN SaaS, co-founded and led from MVP to production', year: '2024', role: 'Co-Founder & Tech Lead', stack: ['Next.js', 'NestJS', 'Node.js', 'MongoDB', 'PostgreSQL', 'Microservices'], summary: 'A MERN SaaS where I owned architecture across the full product lifecycle and led a small engineering team.', problem: 'Take a SaaS product from zero to a production-ready, scalable platform with a small team and tight timelines.', solution: 'Designed and shipped on the MERN stack (Next.js, NestJS, PostgreSQL, MongoDB), led a 3-engineer team through code review and best practices, and standardized AI-assisted workflows (Claude Code, Cursor) across the team.', results: ['Shipped from MVP to production', '~30% faster delivery via standardized AI-assisted workflows', 'Milestones delivered on schedule with a 3-engineer team'] },
      { slug: 'trading-bot', name: 'Automated Trading Bot', tagline: 'Algorithmic Price-Action strategies with risk modelling', year: '2021–2023', role: 'Freelance Engineer', stack: ['Node.js', 'React', 'MongoDB', 'AWS EC2'], summary: 'A fully automated trading platform turning Price-Action strategies into algorithms, with backtesting and live dashboards.', problem: 'Systematize discretionary Price-Action trading strategies and monitor their performance continuously.', solution: 'Engineered strategies into algorithms with statistical risk-management models, built automated backtesting, and a Node.js + React platform surfacing 24h performance dashboards.', results: ['Automated backtesting of complex strategies', 'Continuous performance monitoring via 24h dashboards', 'Statistical risk-management optimization'] },
      { slug: 'teleconsultation', name: 'Teleconsultation Platform', tagline: 'Real-time video consultation web app', year: '2019–2020', role: 'Full-Stack Developer', stack: ['React', 'Node.js', 'Firebase', 'WebRTC', 'Socket.io', 'Redux'], summary: 'A web application enabling real-time video consultations for a clinical psychologist.', problem: 'Enable secure, real-time remote consultations between practitioner and patients in the browser.', solution: 'Built a React + Node.js app with WebRTC for peer-to-peer video and Socket.io for signalling and real-time state, backed by Firebase.', results: ['Real-time in-browser video consultations', 'Delivered end-to-end as an early-career full-stack build'] },
    ],
  },
  contact: {
    heading: 'Contact',
    blurb: "Open to Senior Full-Stack / Tech Lead roles (remote-first), fintech & real-time builds, and architecture consulting. I reply to every message.",
    emailCta: 'Email me',
    email: 'alaeddine.tabbane@gmail.com',
  },
  footer: { builtWith: 'Built with Next.js · Deployed on GitHub Pages' },
};
```

- [ ] **Step 5: French dictionary (lib/i18n/fr.ts)** — same shape, translated

```ts
import type { Dictionary } from './types';

export const fr: Dictionary = {
  nav: { work: 'Travaux', about: 'À propos', stack: 'Stack', experience: 'Expérience', projects: 'Projets', contact: 'Contact', openToWork: 'Ouvert aux opportunités', backHome: "Retour à l'accueil" },
  hero: {
    kicker: '// INGÉNIEUR FULL-STACK SENIOR · TECH LEAD',
    tagline: "Je conçois des produits full-stack temps réel — Web, Android et iOS depuis une seule base de code. 6+ ans en MERN, Angular/Ionic et systèmes fintech, avec des workflows assistés par IA.",
    viewWork: 'Voir les travaux',
    downloadCv: 'Télécharger le CV',
    metrics: [
      { value: '25K', label: 'utilisateurs simultanés' },
      { value: '95%', label: 'couverture de tests' },
      { value: '6+ ans', label: "d'ingénierie" },
      { value: '3', label: 'plateformes, 1 base de code' },
    ],
  },
  about: {
    heading: 'À propos',
    bio: [
      "Tech Lead avec plus de 6 ans d'expérience en systèmes full-stack (MERN, Angular/Ionic, microservices). Je livre Web, Android et iOS depuis une seule base de code et j'encadre des équipes via la revue de code, l'automatisation CI/CD et des workflows assistés par IA qui réduisent mesurablement les cycles de livraison.",
      "Je suis le plus à l'aise à l'intersection du temps réel, de la fintech et de la performance — traduisant les objectifs métier en architectures évolutives, de bout en bout.",
    ],
    facts: [
      { label: 'Localisation', value: 'Nabeul, Tunisie · Remote-first' },
      { label: 'Langues', value: 'Arabe (natif) · Français (B2) · Anglais (B2)' },
      { label: 'Focus', value: 'Temps réel · Fintech · Multiplateforme' },
    ],
  },
  skills: {
    heading: 'Stack',
    groups: [
      { label: 'Frontend', items: ['React', 'Next.js', 'Angular', 'Ionic', 'TypeScript', 'HTML5/CSS3', 'Bootstrap'] },
      { label: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Spring Boot (Java 17)', 'REST', 'WebSockets', 'Microservices'] },
      { label: 'Bases de données', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Oracle', 'SQL Server', 'Firebase', 'Elasticsearch'] },
      { label: 'DevOps / Cloud', items: ['GitLab CI/CD', 'Jenkins', 'Docker', 'AWS EC2'] },
      { label: 'Tests', items: ['Playwright (E2E)', 'Vitest', 'Jest'] },
      { label: 'Auth / Observabilité', items: ['Auth0 (SSO)', 'Sentry'] },
      { label: 'Outils IA', items: ['Claude Code', 'Cursor AI'] },
    ],
  },
  experience: {
    heading: 'Expérience',
    subtitle: 'Postes récents',
    viewAll: 'Voir tout le parcours',
    pageTitle: 'Parcours',
    roles: [
      { company: 'FinGenesis', title: 'Ingénieur Full-Stack (ScanAlpha)', period: 'Juil. 2025 — Présent', location: 'Remote', bullets: ['Livré Web + Android + iOS depuis une seule base de code Ionic + Angular, réduisant les coûts de maintenance vs. natif.', 'Conçu un backend temps réel Node.js + Express + WebSockets supportant 25 000 utilisateurs simultanés.', 'Porté la couverture de tests à 95 % (Vitest + Playwright E2E) dans GitLab CI/CD, réduisant la QA manuelle de 50 %.', 'Publié sur App Store & Google Play sans faille de sécurité critique ; Auth0 SSO + Sentry.'], tech: ['Ionic', 'Angular', 'TypeScript', 'Node.js', 'WebSockets', 'Playwright', 'GitLab CI/CD', 'Auth0', 'Sentry'] },
      { company: 'Navoy', title: 'Co-Fondateur & Tech Lead (MERN)', period: 'Avr. 2024 — Juil. 2025', location: 'Remote', bullets: ['Conçu et livré sur la stack MERN (Next.js, NestJS, PostgreSQL, MongoDB) du MVP à la production.', 'Encadré une équipe de 3 ingénieurs, livrant les jalons dans les délais via revue de code et bonnes pratiques.', "Standardisé Claude Code & Cursor AI à l'échelle de l'équipe, accélérant la livraison d'environ 30 %."], tech: ['Next.js', 'NestJS', 'Node.js', 'MongoDB', 'PostgreSQL', 'Microservices', 'Claude Code', 'Cursor'] },
      { company: 'Devwise', title: 'Ingénieur Full-Stack (Freelance)', period: 'Juin 2024 — Juil. 2025', location: 'Remote', bullets: ['Développé des interfaces Angular responsives adossées à des services Spring Boot (Java 17).', 'Optimisé des bases Oracle & SQL Server, améliorant les performances et l\'intégration front-back.'], tech: ['Angular', 'Spring Boot', 'Java 17', 'Oracle', 'SQL Server', 'Docker', 'Jenkins'] },
      { company: 'Market 360 Degrees', title: 'Tech Lead (Node.js / React.js)', period: 'Août 2023 — Avr. 2024', location: 'Tunis, Tunisie', bullets: ['Dirigé une équipe React.js/Node.js livrant de nouvelles fonctionnalités et modernisant le code existant.', 'Assuré la qualité via revues et standards ; géré la communication client et la livraison.'], tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Elasticsearch'] },
      { company: 'Alight', title: 'Tech Lead Front-End → Développeur', period: 'Juil. 2020 — Août 2023', location: 'Tunisie', bullets: ['Dirigé une équipe front-end livrant des interfaces React + SharePoint SPFX responsives, dans les délais.', 'Livré des solutions pour 5+ grands comptes dont Cofat & Merck — intranets, GED, Power Apps sur mesure.'], tech: ['React', 'TypeScript', 'SharePoint SPFX', 'JavaScript', 'Bootstrap', 'Node.js'] },
      { company: 'Inscrypt', title: 'Développeur Full-Stack', period: 'Févr. 2019 — Juin 2020', location: 'Tunisie', bullets: ['Livré une plateforme de téléconsultation avec vidéo temps réel (WebRTC, Socket.io).', 'Construit la démo de mise en relation startups–experts de Vinko (React + Node + MongoDB, AWS EC2).'], tech: ['React', 'Node.js', 'Firebase', 'MongoDB', 'WebRTC', 'Socket.io', 'AWS EC2'] },
    ],
  },
  projects: {
    heading: 'Projets',
    subtitle: 'Travaux sélectionnés',
    viewAll: 'Tous les projets',
    pageTitle: 'Projets',
    caseStudy: 'Étude de cas',
    problemLabel: 'Problème',
    solutionLabel: 'Architecture & Approche',
    resultsLabel: 'Résultats',
    stackLabel: 'Stack',
    items: [
      { slug: 'scanalpha', name: 'ScanAlpha', tagline: 'Plateforme fintech temps réel sur Web, Android & iOS', year: '2025', role: 'Ingénieur Full-Stack', stack: ['Ionic', 'Angular', 'TypeScript', 'Node.js', 'WebSockets', 'Playwright', 'Auth0', 'Sentry'], summary: 'Une plateforme fintech livrant des services financiers sur trois plateformes depuis une seule base de code, avec un backend temps réel à l\'échelle.', problem: 'Livrer une expérience fintech sécurisée et temps réel sur Web, Android et iOS sans maintenir trois bases de code natives.', solution: 'Une seule base de code Ionic + Angular pour toutes les plateformes, un service Node.js + Express + WebSockets pour la synchronisation en direct, Vitest + Playwright E2E dans GitLab CI/CD, Auth0 SSO et Sentry.', results: ['25 000 utilisateurs simultanés supportés', '95 % de couverture de tests ; 50 % de QA manuelle en moins', 'Temps de démarrage mobile 60 % plus rapide', 'Zéro faille de sécurité critique en production'] },
      { slug: 'navoy', name: 'Navoy', tagline: 'SaaS MERN, co-fondé et piloté du MVP à la production', year: '2024', role: 'Co-Fondateur & Tech Lead', stack: ['Next.js', 'NestJS', 'Node.js', 'MongoDB', 'PostgreSQL', 'Microservices'], summary: "Un SaaS MERN où j'ai piloté l'architecture sur tout le cycle de vie produit et encadré une petite équipe.", problem: 'Amener un produit SaaS de zéro à une plateforme évolutive et prête pour la production avec une petite équipe.', solution: "Conçu et livré sur la stack MERN, encadré une équipe de 3 ingénieurs, et standardisé les workflows assistés par IA (Claude Code, Cursor).", results: ['Livré du MVP à la production', "~30 % de livraison plus rapide via l'IA", 'Jalons livrés dans les délais avec 3 ingénieurs'] },
      { slug: 'trading-bot', name: 'Bot de Trading Automatisé', tagline: 'Stratégies Price-Action algorithmiques avec gestion du risque', year: '2021–2023', role: 'Ingénieur Freelance', stack: ['Node.js', 'React', 'MongoDB', 'AWS EC2'], summary: 'Une plateforme de trading entièrement automatisée transformant des stratégies Price-Action en algorithmes, avec backtesting et tableaux de bord.', problem: 'Systématiser des stratégies de trading discrétionnaires et suivre leur performance en continu.', solution: 'Stratégies transformées en algorithmes avec modèles statistiques de gestion du risque, backtesting automatisé, et plateforme Node.js + React avec tableaux de bord 24h.', results: ['Backtesting automatisé de stratégies complexes', 'Suivi de performance continu (tableaux de bord 24h)', 'Optimisation par gestion statistique du risque'] },
      { slug: 'teleconsultation', name: 'Plateforme de Téléconsultation', tagline: 'Application web de consultation vidéo temps réel', year: '2019–2020', role: 'Développeur Full-Stack', stack: ['React', 'Node.js', 'Firebase', 'WebRTC', 'Socket.io', 'Redux'], summary: 'Une application web permettant des consultations vidéo en temps réel pour une psychologue clinicienne.', problem: 'Permettre des consultations à distance sécurisées et en temps réel entre praticienne et patients, dans le navigateur.', solution: 'Une app React + Node.js avec WebRTC pour la vidéo pair-à-pair et Socket.io pour la signalisation, adossée à Firebase.', results: ['Consultations vidéo temps réel dans le navigateur', 'Livré de bout en bout en début de carrière'] },
    ],
  },
  contact: {
    heading: 'Contact',
    blurb: "Ouvert aux postes Senior Full-Stack / Tech Lead (remote-first), aux projets fintech & temps réel, et au conseil en architecture. Je réponds à chaque message.",
    emailCta: 'Écrivez-moi',
    email: 'alaeddine.tabbane@gmail.com',
  },
  footer: { builtWith: 'Conçu avec Next.js · Déployé sur GitHub Pages' },
};
```

- [ ] **Step 6: Dictionary index (lib/i18n/index.ts)**

```ts
import type { Dictionary, Lang } from './types';
import { en } from './en';
import { fr } from './fr';

export const dictionaries: Record<Lang, Dictionary> = { en, fr };
export type { Dictionary, Lang };
```

- [ ] **Step 7: Write the parity test (lib/i18n/__tests__/dictionaries.test.ts)**

```ts
import { describe, it, expect } from 'vitest';
import { en } from '../en';
import { fr } from '../fr';
import { PROJECT_SLUGS } from '@/lib/data/projects';

function shape(obj: unknown): unknown {
  if (Array.isArray(obj)) return obj.map(shape);
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(Object.keys(obj as object).sort().map((k) => [k, shape((obj as Record<string, unknown>)[k])]));
  }
  return typeof obj;
}

describe('dictionaries', () => {
  it('EN and FR have identical structure', () => {
    expect(shape(fr)).toEqual(shape(en));
  });

  it('EN and FR have the same number of experience roles', () => {
    expect(fr.experience.roles.length).toBe(en.experience.roles.length);
  });

  it('project slugs match PROJECTS_META in both languages', () => {
    expect(en.projects.items.map((p) => p.slug)).toEqual(PROJECT_SLUGS);
    expect(fr.projects.items.map((p) => p.slug)).toEqual(PROJECT_SLUGS);
  });

  it('hero has exactly 4 metrics in both languages', () => {
    expect(en.hero.metrics).toHaveLength(4);
    expect(fr.hero.metrics).toHaveLength(4);
  });
});
```

- [ ] **Step 8: Run the test — expect PASS**

Run: `npm test`
Expected: 4 tests pass. If the structure test fails, the dictionaries are out of sync — align keys/array lengths until green.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: typed EN/FR dictionaries with real content + parity tests"
```

---

## Task 4: LanguageProvider + useLang hook (+ test)

**Files:**
- Create: `lib/i18n/LanguageContext.tsx`
- Test: `lib/i18n/__tests__/LanguageContext.test.tsx`

- [ ] **Step 1: Write the provider/hook**

```tsx
'use client';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { Dictionary, Lang } from './types';
import { dictionaries } from './index';

interface Ctx { lang: Lang; t: Dictionary; setLang: (l: Lang) => void; toggle: () => void }
const LanguageContext = createContext<Ctx | null>(null);
const STORAGE_KEY = 'portfolio-lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = (typeof window !== 'undefined' && window.localStorage.getItem(STORAGE_KEY)) as Lang | null;
    if (saved === 'en' || saved === 'fr') setLangState(saved);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    }
  }, []);

  const toggle = useCallback(() => setLang(lang === 'en' ? 'fr' : 'en'), [lang, setLang]);

  return (
    <LanguageContext.Provider value={{ lang, t: dictionaries[lang], setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
```

- [ ] **Step 2: Write the test**

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider, useLang } from '../LanguageContext';

function Probe() {
  const { t, lang, toggle } = useLang();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="work">{t.nav.work}</span>
      <button onClick={toggle}>toggle</button>
    </div>
  );
}

describe('LanguageProvider', () => {
  it('defaults to English', () => {
    render(<LanguageProvider><Probe /></LanguageProvider>);
    expect(screen.getByTestId('lang').textContent).toBe('en');
    expect(screen.getByTestId('work').textContent).toBe('Work');
  });

  it('toggles to French and persists', () => {
    render(<LanguageProvider><Probe /></LanguageProvider>);
    fireEvent.click(screen.getByText('toggle'));
    expect(screen.getByTestId('lang').textContent).toBe('fr');
    expect(screen.getByTestId('work').textContent).toBe('Travaux');
    expect(window.localStorage.getItem('portfolio-lang')).toBe('fr');
  });
});
```

- [ ] **Step 3: Run — expect PASS**

Run: `npm test`
Expected: all tests pass (6 total now).

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: LanguageProvider + useLang hook with localStorage"
```

---

## Task 5: Visual primitives

**Files:**
- Create: `components/GlowBackground.tsx`, `components/HudFrame.tsx`, `components/DataBars.tsx`, `components/TechTag.tsx`, `components/SectionReveal.tsx`

- [ ] **Step 1: GlowBackground.tsx (fixed atmosphere layers)**

```tsx
export function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -left-36 -top-52 h-[600px] w-[600px] rounded-full opacity-80 blur-[110px]" style={{ background: 'radial-gradient(circle,#2a5bff,transparent 62%)' }} />
      <div className="absolute -right-40 -top-36 h-[540px] w-[540px] rounded-full opacity-60 blur-[110px]" style={{ background: 'radial-gradient(circle,#ff2e88,transparent 62%)' }} />
      <div className="absolute -bottom-60 left-[28%] h-[440px] w-[680px] rounded-full opacity-40 blur-[110px]" style={{ background: 'radial-gradient(circle,#23e5b0,transparent 62%)' }} />
      <div className="absolute inset-0 scanlines" />
    </div>
  );
}
```

- [ ] **Step 2: HudFrame.tsx (bordered box with corner brackets + mono label)**

```tsx
import type { ReactNode } from 'react';

export function HudFrame({ label, children, className = '' }: { label?: string; children: ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-2xl border border-line bg-white/[0.03] p-6 backdrop-blur-sm ${className}`} style={{ boxShadow: '0 0 50px rgba(60,110,255,.12), inset 0 0 40px rgba(94,234,255,.04)' }}>
      <span className="pointer-events-none absolute -left-px -top-px h-4 w-4 rounded-tl-2xl border-l-2 border-t-2 border-cyan" style={{ boxShadow: '-4px -4px 16px rgba(94,234,255,.4)' }} />
      <span className="pointer-events-none absolute -bottom-px -right-px h-4 w-4 rounded-br-2xl border-b-2 border-r-2 border-mag" style={{ boxShadow: '4px 4px 16px rgba(255,94,160,.4)' }} />
      {label && <span className="absolute -top-2.5 left-5 bg-bg px-2.5 font-mono text-[11px] tracking-widest text-mut">{label}</span>}
      {children}
    </div>
  );
}
```

- [ ] **Step 3: DataBars.tsx (gradient mini bar chart)**

```tsx
const HEIGHTS = [40, 70, 55, 100, 75];
export function DataBars({ heights = HEIGHTS }: { heights?: number[] }) {
  return (
    <div aria-hidden className="mt-2.5 flex h-[22px] items-end gap-1">
      {heights.map((h, i) => (
        <span key={i} className="block w-1.5 rounded-sm opacity-85" style={{ height: `${h}%`, background: 'linear-gradient(var(--cyan),var(--mag))', boxShadow: '0 0 8px rgba(94,234,255,.35)' }} />
      ))}
    </div>
  );
}
```

- [ ] **Step 4: TechTag.tsx (stack chip)**

```tsx
export function TechTag({ children }: { children: React.ReactNode }) {
  return <span className="inline-block rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-xs text-mut">{children}</span>;
}
```

- [ ] **Step 5: SectionReveal.tsx (scroll-reveal wrapper, respects reduced motion)**

```tsx
'use client';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export function SectionReveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 6: Verify build**

Run: `npm run build`
Expected: success (components compile; not yet used — that's fine).

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: Holo visual primitives (glow, HUD frame, data bars, tags, reveal)"
```

---

## Task 6: Section wrapper + IDs helper

**Files:**
- Create: `components/Section.tsx`

- [ ] **Step 1: Section.tsx (consistent max-width, padding, anchor id)**

```tsx
import type { ReactNode } from 'react';

export function Section({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 sm:px-7 md:py-24 ${className}`}>
      {children}
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "feat: Section layout wrapper"
```

---

## Task 7: Nav (responsive, hamburger drawer) + LanguageToggle + Footer

**Files:**
- Create: `components/LanguageToggle.tsx`, `components/Nav.tsx`, `components/Footer.tsx`

- [ ] **Step 1: LanguageToggle.tsx**

```tsx
'use client';
import { useLang } from '@/lib/i18n/LanguageContext';

export function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center rounded-full border border-line p-0.5 font-mono text-xs">
      {(['en', 'fr'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`min-h-[32px] min-w-[40px] rounded-full px-3 py-1 uppercase transition ${lang === l ? 'bg-cyan/15 text-cyan' : 'text-mut hover:text-ink'}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Nav.tsx (desktop links + mobile drawer; links work from any route via `/#id`)**

```tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useLang } from '@/lib/i18n/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { href: '/#about', label: t.nav.about },
    { href: '/#stack', label: t.nav.stack },
    { href: '/#experience', label: t.nav.experience },
    { href: '/#projects', label: t.nav.projects },
    { href: '/#contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-7">
        <Link href="/" className="text-lg font-extrabold tracking-wide">AT<span className="text-cyan" style={{ textShadow: '0 0 12px var(--cyan)' }}>.</span></Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-mut transition hover:text-ink">{l.label}</Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <span className="flex items-center gap-2 rounded-full border border-mint/50 bg-mint/[0.09] px-3 py-1.5 font-mono text-xs text-mint" style={{ boxShadow: '0 0 18px rgba(35,229,176,.25)' }}>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" style={{ boxShadow: '0 0 10px var(--mint)' }} />
            {t.nav.openToWork}
          </span>
          <LanguageToggle />
        </div>

        <button className="flex min-h-[44px] min-w-[44px] items-center justify-center md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6 text-ink" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col gap-6 border-l border-line bg-bg2 p-6">
            <button className="self-end flex min-h-[44px] min-w-[44px] items-center justify-center" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6 text-ink" />
            </button>
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 text-base text-ink hover:bg-white/5">{l.label}</Link>
              ))}
            </div>
            <div className="mt-2"><LanguageToggle /></div>
            <span className="flex w-fit items-center gap-2 rounded-full border border-mint/50 bg-mint/[0.09] px-3 py-1.5 font-mono text-xs text-mint">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
              {t.nav.openToWork}
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 3: Footer.tsx**

```tsx
'use client';
import { useLang } from '@/lib/i18n/LanguageContext';

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line/60 px-5 py-8 text-center font-mono text-xs text-mut">
      <p>© {'{'}new Date{'}'} Alaeddine Tabbane</p>
      <p className="mt-1">{t.footer.builtWith}</p>
    </footer>
  );
}
```
NOTE: replace the year line with a static year to keep the export deterministic:
```tsx
<p>© 2026 Alaeddine Tabbane</p>
```
(Use the literal `© 2026 Alaeddine Tabbane` — do not call `new Date()` in the component.)

- [ ] **Step 4: Wire provider + Nav + Footer into app/layout.tsx**

Replace the `<body>` contents:
```tsx
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { GlowBackground } from '@/components/GlowBackground';
// ...
      <body className="bg-bg text-ink font-sora antialiased">
        <LanguageProvider>
          <GlowBackground />
          <Nav />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
```

- [ ] **Step 5: Verify build + lint**

Run: `npm run build`
Expected: success.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: responsive Nav with mobile drawer, LanguageToggle, Footer"
```

---

## Task 8: Hero section

**Files:**
- Create: `components/sections/Hero.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Hero.tsx (port of validated mockup, using tokens + i18n)**

```tsx
'use client';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { useLang } from '@/lib/i18n/LanguageContext';
import { HudFrame } from '@/components/HudFrame';
import { DataBars } from '@/components/DataBars';

const BAR_SETS = [[40,70,55,100,75],[50,65,85,95,70],[30,50,70,85,100],[60,80,45,90,65]];

export function Hero() {
  const { t, lang } = useLang();
  const cv = lang === 'fr' ? '/cv/Alaeddine-Tabbane-FR.pdf' : '/cv/Alaeddine-Tabbane-EN.pdf';
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-12 pt-16 sm:px-7 md:pt-24">
      <p className="mb-5 font-mono text-[13px] tracking-widest text-cyan" style={{ textShadow: '0 0 14px rgba(94,234,255,.5)' }}>{t.hero.kicker}</p>
      <h1 className="text-holo font-extrabold leading-[0.98] tracking-tight" style={{ fontSize: 'clamp(44px,8vw,86px)' }}>Alaeddine<br />Tabbane</h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#c8d1ea]">{t.hero.tagline}</p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link href="/#projects" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-bluey px-6 font-semibold text-[#04101a]" style={{ boxShadow: '0 8px 34px rgba(94,234,255,.45)' }}>
          {t.hero.viewWork} <ArrowRight className="h-4 w-4" />
        </Link>
        <a href={cv} download className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-[#2a3354] bg-white/[0.02] px-6 font-semibold text-ink hover:border-cyan hover:text-cyan">
          <Download className="h-4 w-4" /> {t.hero.downloadCv}
        </a>
      </div>

      <div className="mt-7 flex gap-3">
        <a href="https://github.com/AlaeddineTabbane" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#232c49] text-mut transition hover:border-cyan hover:text-cyan"><Github className="h-5 w-5" /></a>
        <a href="https://www.linkedin.com/in/alaeddine-tabbane/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#232c49] text-mut transition hover:border-cyan hover:text-cyan"><Linkedin className="h-5 w-5" /></a>
        <a href={`mailto:${t.contact.email}`} aria-label="Email" className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#232c49] text-mut transition hover:border-cyan hover:text-cyan"><Mail className="h-5 w-5" /></a>
      </div>

      <HudFrame label="// IMPACT.metrics" className="mt-14">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {t.hero.metrics.map((m, i) => (
            <div key={m.label}>
              <div className="text-3xl font-extrabold" style={{ background: 'linear-gradient(120deg,#fff,var(--cyan))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', filter: 'drop-shadow(0 0 16px rgba(94,234,255,.4))' }}>{m.value}</div>
              <div className="mt-1 font-mono text-[11.5px] text-mut">{m.label}</div>
              <DataBars heights={BAR_SETS[i]} />
            </div>
          ))}
        </div>
      </HudFrame>
    </section>
  );
}
```

- [ ] **Step 2: Render Hero in app/page.tsx**

```tsx
import { Hero } from '@/components/sections/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

- [ ] **Step 3: Verify visually in dev**

Run: `npm run dev`, open `http://localhost:3000`.
Expected: hero matches the approved mockup (gradient name, glowing metrics, CTAs). Stop dev (Ctrl+C) after checking.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: Hero section from validated Holo mockup"
```

---

## Task 9: About, Skills, Contact sections

**Files:**
- Create: `components/sections/About.tsx`, `components/sections/Skills.tsx`, `components/sections/Contact.tsx`
- Asset: `public/headshot.jpg` (copied in Task 13; component references it now)

- [ ] **Step 1: About.tsx (headshot + bio + facts; stacks on mobile)**

```tsx
'use client';
import Image from 'next/image';
import { useLang } from '@/lib/i18n/LanguageContext';
import { Section } from '@/components/Section';
import { SectionReveal } from '@/components/SectionReveal';
import { HudFrame } from '@/components/HudFrame';

export function About() {
  const { t } = useLang();
  return (
    <Section id="about">
      <SectionReveal>
        <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-cyan">// {t.about.heading}</h2>
        <div className="grid items-start gap-8 md:grid-cols-[260px_1fr]">
          <HudFrame className="mx-auto w-full max-w-[260px] p-3">
            <Image src="/headshot.jpg" alt="Alaeddine Tabbane" width={520} height={620} className="h-auto w-full rounded-xl object-cover" priority />
          </HudFrame>
          <div>
            {t.about.bio.map((p, i) => (
              <p key={i} className={`text-lg leading-relaxed text-[#c8d1ea] ${i > 0 ? 'mt-4' : ''}`}>{p}</p>
            ))}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {t.about.facts.map((f) => (
                <div key={f.label} className="rounded-xl border border-line bg-white/[0.02] p-3">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-mut">{f.label}</div>
                  <div className="mt-1 text-sm text-ink">{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </Section>
  );
}
```

- [ ] **Step 2: Skills.tsx (categorized chips, wrap fluidly)**

```tsx
'use client';
import { useLang } from '@/lib/i18n/LanguageContext';
import { Section } from '@/components/Section';
import { SectionReveal } from '@/components/SectionReveal';
import { TechTag } from '@/components/TechTag';

export function Skills() {
  const { t } = useLang();
  return (
    <Section id="stack">
      <SectionReveal>
        <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-cyan">// {t.skills.heading}</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {t.skills.groups.map((g) => (
            <div key={g.label} className="rounded-xl border border-line bg-white/[0.02] p-4">
              <div className="mb-3 font-mono text-xs uppercase tracking-widest text-mut">{g.label}</div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => <TechTag key={it}>{it}</TechTag>)}
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </Section>
  );
}
```

- [ ] **Step 3: Contact.tsx (mailto + socials)**

```tsx
'use client';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useLang } from '@/lib/i18n/LanguageContext';
import { Section } from '@/components/Section';
import { SectionReveal } from '@/components/SectionReveal';
import { HudFrame } from '@/components/HudFrame';

export function Contact() {
  const { t } = useLang();
  return (
    <Section id="contact">
      <SectionReveal>
        <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-cyan">// {t.contact.heading}</h2>
        <HudFrame label="// get_in_touch">
          <p className="max-w-2xl text-lg leading-relaxed text-[#c8d1ea]">{t.contact.blurb}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href={`mailto:${t.contact.email}`} className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-bluey px-6 font-semibold text-[#04101a]" style={{ boxShadow: '0 8px 34px rgba(94,234,255,.4)' }}>
              <Mail className="h-4 w-4" /> {t.contact.emailCta}
            </a>
            <a href="https://github.com/AlaeddineTabbane" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#2a3354] px-5 text-ink hover:border-cyan hover:text-cyan"><Github className="h-4 w-4" /> GitHub</a>
            <a href="https://www.linkedin.com/in/alaeddine-tabbane/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#2a3354] px-5 text-ink hover:border-cyan hover:text-cyan"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <span className="inline-flex min-h-[48px] items-center gap-2 px-2 font-mono text-sm text-mut"><MapPin className="h-4 w-4" /> Nabeul, Tunisia</span>
          </div>
        </HudFrame>
      </SectionReveal>
    </Section>
  );
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: success. (Build will succeed even though `public/headshot.jpg` is added in Task 13; `next/image` with `unoptimized` does not fail the build on a missing file — but add the asset before final verification. If the build *does* complain, temporarily create an empty placeholder and replace in Task 13.)

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: About, Skills, Contact sections"
```

---

## Task 10: Experience & Projects summaries (home) + assemble home

**Files:**
- Create: `components/sections/ExperienceSummary.tsx`, `components/sections/ProjectsSummary.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: ExperienceSummary.tsx (3 most-recent roles + link to /experience)**

```tsx
'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLang } from '@/lib/i18n/LanguageContext';
import { Section } from '@/components/Section';
import { SectionReveal } from '@/components/SectionReveal';
import { TechTag } from '@/components/TechTag';

export function ExperienceSummary() {
  const { t } = useLang();
  const roles = t.experience.roles.slice(0, 3);
  return (
    <Section id="experience">
      <SectionReveal>
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-mono text-sm uppercase tracking-widest text-cyan">// {t.experience.heading}</h2>
          <Link href="/experience" className="inline-flex items-center gap-1.5 font-mono text-xs text-mut hover:text-cyan">{t.experience.viewAll} <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
        <div className="grid gap-4">
          {roles.map((r) => (
            <div key={r.company + r.period} className="rounded-xl border border-line bg-white/[0.02] p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-ink">{r.title} <span className="text-cyan">· {r.company}</span></h3>
                <span className="font-mono text-xs text-mut">{r.period}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#c8d1ea]">{r.bullets[0]}</p>
              <div className="mt-3 flex flex-wrap gap-2">{r.tech.slice(0, 6).map((tch) => <TechTag key={tch}>{tch}</TechTag>)}</div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </Section>
  );
}
```

- [ ] **Step 2: ProjectsSummary.tsx (top cards + link to /projects)**

```tsx
'use client';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLang } from '@/lib/i18n/LanguageContext';
import { Section } from '@/components/Section';
import { SectionReveal } from '@/components/SectionReveal';
import { TechTag } from '@/components/TechTag';
import { hasCaseStudy } from '@/lib/data/projects';

export function ProjectsSummary() {
  const { t } = useLang();
  const items = t.projects.items.slice(0, 4);
  return (
    <Section id="projects">
      <SectionReveal>
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-mono text-sm uppercase tracking-widest text-cyan">// {t.projects.heading}</h2>
          <Link href="/projects" className="inline-flex items-center gap-1.5 font-mono text-xs text-mut hover:text-cyan">{t.projects.viewAll} <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((p) => {
            const Card = (
              <div className="group h-full rounded-xl border border-line bg-white/[0.02] p-5 transition hover:border-cyan/60">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
                  {hasCaseStudy(p.slug) && <ArrowUpRight className="h-4 w-4 text-mut transition group-hover:text-cyan" />}
                </div>
                <p className="mt-1 text-sm text-mut">{p.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#c8d1ea]">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">{p.stack.slice(0, 5).map((s) => <TechTag key={s}>{s}</TechTag>)}</div>
              </div>
            );
            return hasCaseStudy(p.slug)
              ? <Link key={p.slug} href={`/projects/${p.slug}`} className="block h-full">{Card}</Link>
              : <div key={p.slug}>{Card}</div>;
          })}
        </div>
      </SectionReveal>
    </Section>
  );
}
```

- [ ] **Step 3: Assemble full home page (app/page.tsx)**

```tsx
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { ExperienceSummary } from '@/components/sections/ExperienceSummary';
import { ProjectsSummary } from '@/components/sections/ProjectsSummary';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <ExperienceSummary />
      <ProjectsSummary />
      <Contact />
    </main>
  );
}
```

- [ ] **Step 4: Verify build + dev preview**

Run: `npm run build` then `npm run dev` and scroll the page.
Expected: all sections render, EN/FR toggle updates every section, reveal animations fire.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: experience & projects summaries; assemble home page"
```

---

## Task 11: /experience detail page (full timeline)

**Files:**
- Create: `components/ExperienceTimeline.tsx`, `app/experience/page.tsx`

- [ ] **Step 1: ExperienceTimeline.tsx (left rail on mobile, all roles)**

```tsx
'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLang } from '@/lib/i18n/LanguageContext';
import { Section } from '@/components/Section';
import { SectionReveal } from '@/components/SectionReveal';
import { TechTag } from '@/components/TechTag';

export function ExperienceTimeline() {
  const { t } = useLang();
  return (
    <Section>
      <Link href="/" className="inline-flex items-center gap-1.5 font-mono text-xs text-mut hover:text-cyan"><ArrowLeft className="h-3.5 w-3.5" /> {t.nav.backHome}</Link>
      <h1 className="mb-10 mt-4 text-4xl font-extrabold text-holo">{t.experience.pageTitle}</h1>
      <div className="relative border-l border-line pl-6">
        {t.experience.roles.map((r, i) => (
          <SectionReveal key={r.company + r.period} delay={i * 0.05} className="relative mb-10">
            <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-cyan bg-bg" style={{ boxShadow: '0 0 10px var(--cyan)' }} />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold text-ink">{r.title} <span className="text-cyan">· {r.company}</span></h2>
              <span className="font-mono text-xs text-mut">{r.period} · {r.location}</span>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-[#c8d1ea]">
              {r.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">{r.tech.map((tch) => <TechTag key={tch}>{tch}</TechTag>)}</div>
          </SectionReveal>
        ))}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: app/experience/page.tsx**

```tsx
import type { Metadata } from 'next';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';

export const metadata: Metadata = { title: 'Experience — Alaeddine Tabbane' };

export default function ExperiencePage() {
  return <main><ExperienceTimeline /></main>;
}
```

- [ ] **Step 3: Verify build emits /experience/index.html**

Run: `npm run build`
Expected: `out/experience/index.html` exists.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: /experience full timeline page"
```

---

## Task 12: /projects grid + /projects/[slug] case study (static params)

**Files:**
- Create: `components/ProjectGrid.tsx`, `components/ProjectCaseStudy.tsx`, `app/projects/page.tsx`, `app/projects/[slug]/page.tsx`

- [ ] **Step 1: ProjectGrid.tsx**

```tsx
'use client';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { useLang } from '@/lib/i18n/LanguageContext';
import { Section } from '@/components/Section';
import { SectionReveal } from '@/components/SectionReveal';
import { TechTag } from '@/components/TechTag';
import { hasCaseStudy } from '@/lib/data/projects';

export function ProjectGrid() {
  const { t } = useLang();
  return (
    <Section>
      <Link href="/" className="inline-flex items-center gap-1.5 font-mono text-xs text-mut hover:text-cyan"><ArrowLeft className="h-3.5 w-3.5" /> {t.nav.backHome}</Link>
      <h1 className="mb-10 mt-4 text-4xl font-extrabold text-holo">{t.projects.pageTitle}</h1>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((p, i) => {
          const inner = (
            <div className="group flex h-full flex-col rounded-xl border border-line bg-white/[0.02] p-5 transition hover:border-cyan/60">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-semibold text-ink">{p.name}</h2>
                {hasCaseStudy(p.slug) && <ArrowUpRight className="h-4 w-4 text-mut transition group-hover:text-cyan" />}
              </div>
              <p className="mt-1 font-mono text-xs text-mut">{p.year} · {p.role}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#c8d1ea]">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">{p.stack.slice(0, 5).map((s) => <TechTag key={s}>{s}</TechTag>)}</div>
            </div>
          );
          return (
            <SectionReveal key={p.slug} delay={i * 0.05} className="h-full">
              {hasCaseStudy(p.slug) ? <Link href={`/projects/${p.slug}`} className="block h-full">{inner}</Link> : inner}
            </SectionReveal>
          );
        })}
      </div>
    </Section>
  );
}
```

- [ ] **Step 2: ProjectCaseStudy.tsx (looks up localized content by slug)**

```tsx
'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLang } from '@/lib/i18n/LanguageContext';
import { Section } from '@/components/Section';
import { HudFrame } from '@/components/HudFrame';
import { TechTag } from '@/components/TechTag';

export function ProjectCaseStudy({ slug }: { slug: string }) {
  const { t } = useLang();
  const p = t.projects.items.find((x) => x.slug === slug);
  if (!p) {
    return (
      <Section>
        <Link href="/projects" className="font-mono text-xs text-cyan">← {t.projects.pageTitle}</Link>
        <p className="mt-6 text-mut">Project not found.</p>
      </Section>
    );
  }
  return (
    <Section>
      <Link href="/projects" className="inline-flex items-center gap-1.5 font-mono text-xs text-mut hover:text-cyan"><ArrowLeft className="h-3.5 w-3.5" /> {t.projects.pageTitle}</Link>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-cyan">// {t.projects.caseStudy}</p>
      <h1 className="mt-2 text-4xl font-extrabold text-holo">{p.name}</h1>
      <p className="mt-2 text-lg text-mut">{p.tagline}</p>
      <p className="mt-1 font-mono text-xs text-mut">{p.year} · {p.role}</p>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#c8d1ea]">{p.summary}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <HudFrame label={`// ${t.projects.problemLabel}`}><p className="text-[15px] leading-relaxed text-[#c8d1ea]">{p.problem}</p></HudFrame>
        <HudFrame label={`// ${t.projects.solutionLabel}`}><p className="text-[15px] leading-relaxed text-[#c8d1ea]">{p.solution}</p></HudFrame>
      </div>

      <h2 className="mt-8 font-mono text-sm uppercase tracking-widest text-cyan">// {t.projects.resultsLabel}</h2>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {p.results.map((r, i) => (
          <li key={i} className="rounded-lg border border-line bg-white/[0.02] px-4 py-3 text-sm text-[#c8d1ea]">{r}</li>
        ))}
      </ul>

      <h2 className="mt-8 font-mono text-sm uppercase tracking-widest text-cyan">// {t.projects.stackLabel}</h2>
      <div className="mt-3 flex flex-wrap gap-2">{p.stack.map((s) => <TechTag key={s}>{s}</TechTag>)}</div>
    </Section>
  );
}
```

- [ ] **Step 3: app/projects/page.tsx**

```tsx
import type { Metadata } from 'next';
import { ProjectGrid } from '@/components/ProjectGrid';

export const metadata: Metadata = { title: 'Projects — Alaeddine Tabbane' };

export default function ProjectsPage() {
  return <main><ProjectGrid /></main>;
}
```

- [ ] **Step 4: app/projects/[slug]/page.tsx (generateStaticParams from PROJECT_SLUGS)**

```tsx
import { ProjectCaseStudy } from '@/components/ProjectCaseStudy';
import { PROJECT_SLUGS } from '@/lib/data/projects';

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <main><ProjectCaseStudy slug={params.slug} /></main>;
}
```

- [ ] **Step 5: Verify static export emits one HTML per project**

Run: `npm run build`
Expected: `out/projects/index.html`, `out/projects/scanalpha/index.html`, `out/projects/navoy/index.html`, `out/projects/trading-bot/index.html`, `out/projects/teleconsultation/index.html` all exist.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: /projects grid + per-project case-study pages (static params)"
```

---

## Task 13: Assets — headshot, CV PDFs, favicon

**Files:**
- Create: `public/headshot.jpg`, `public/cv/Alaeddine-Tabbane-EN.pdf`, `public/cv/Alaeddine-Tabbane-FR.pdf`, `app/icon.svg`

- [ ] **Step 1: Copy the headshot into public/**

Run (Git Bash):
```bash
mkdir -p public/cv
cp "C:/Users/alaed/Downloads/fb-profile.jpg" public/headshot.jpg
```
NOTE for the user: if you have a front-facing LinkedIn headshot you prefer, drop it in as `public/headshot.jpg` (overwrite). The About `Image` is 520×620 — a portrait crop looks best.

- [ ] **Step 2: Copy CV PDFs into public/cv/**

The repo already has EN/FR résumés as PDF/DOCX in the cv folder. Copy the existing PDFs (or export from the `.docx`):
```bash
cp "C:/Users/alaed/MEGAsync/documents/cv/Alaeddine Tabbane-EN.pdf" public/cv/Alaeddine-Tabbane-EN.pdf
cp "C:/Users/alaed/MEGAsync/documents/cv/Alaeddine-Tabbane-FR.pdf" public/cv/Alaeddine-Tabbane-FR.pdf
```
NOTE: these are the original CV PDFs. If you want the *elite* rewrite PDFs instead, generate them from `Alaeddine-Tabbane-Senior-EN-Elite.docx` / `-FR-Elite.docx` and copy those. Filenames must stay `Alaeddine-Tabbane-EN.pdf` / `Alaeddine-Tabbane-FR.pdf` to match the Hero `cv` paths.

- [ ] **Step 3: Create favicon app/icon.svg ("AT." mark)**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#070a12"/>
  <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="800" fill="#5eeaff">AT</text>
  <circle cx="49" cy="42" r="3" fill="#ff5ea0"/>
</svg>
```

- [ ] **Step 4: Verify build includes assets**

Run: `npm run build`
Expected: success; `out/headshot.jpg`, `out/cv/Alaeddine-Tabbane-EN.pdf`, `out/cv/Alaeddine-Tabbane-FR.pdf` present.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: add headshot, CV PDFs, favicon"
```

---

## Task 14: GitHub Pages deploy workflow + README + SEO niceties

**Files:**
- Create: `.github/workflows/deploy.yml`, `public/.nojekyll`, `README.md`, `app/not-found.tsx`, `public/robots.txt`

- [ ] **Step 1: Add public/.nojekyll (prevents Jekyll mangling _next)**

Create an empty file `public/.nojekyll` (no content).

- [ ] **Step 2: app/not-found.tsx (static 404)**

```tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center px-5 text-center">
      <p className="font-mono text-sm text-cyan">// 404</p>
      <h1 className="mt-2 text-5xl font-extrabold text-holo">Lost in space</h1>
      <Link href="/" className="mt-6 inline-flex min-h-[48px] items-center rounded-xl border border-[#2a3354] px-6 text-ink hover:border-cyan hover:text-cyan">Back home</Link>
    </main>
  );
}
```

- [ ] **Step 3: public/robots.txt**

```
User-agent: *
Allow: /
Sitemap: https://alaeddinetabbane.github.io/sitemap.xml
```

- [ ] **Step 4: GitHub Actions workflow (.github/workflows/deploy.yml)**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 5: README.md (with the manual GitHub steps)**

```markdown
# AlaeddineTabbane.github.io

Personal portfolio — Next.js (static export) + Tailwind + Framer Motion. Bilingual EN/FR, "Holo Data HUD" aesthetic. Live: https://alaeddinetabbane.github.io

## Develop
\`\`\`bash
npm install
npm run dev      # http://localhost:3000
npm test         # unit tests (Vitest)
npm run build    # static export to ./out
npm run preview  # serve ./out locally
\`\`\`

## Deploy (one-time setup)
1. Create a public GitHub repo named exactly **AlaeddineTabbane.github.io**.
2. Repo **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Push to \`main\`. The workflow in \`.github/workflows/deploy.yml\` builds and deploys automatically.

## Content
All copy lives in \`lib/i18n/en.ts\` and \`lib/i18n/fr.ts\`. CV PDFs and headshot are in \`public/\`.
```

- [ ] **Step 6: Verify build still passes and .nojekyll is emitted**

Run: `npm run build`
Expected: success; `out/.nojekyll` present.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "ci: GitHub Pages deploy workflow; 404, robots, README, .nojekyll"
```

---

## Task 15: Full verification pass (build, preview, responsive, a11y)

**Files:** none (verification only). Fix issues in the relevant component and re-commit.

- [ ] **Step 1: Clean build**

Run: `rm -rf out .next && npm run build`
Expected: no errors/warnings that fail the build.

- [ ] **Step 2: Run unit tests**

Run: `npm test`
Expected: all green.

- [ ] **Step 3: Preview the static export**

Run: `npm run preview` (serves `out/` at a localhost port).
Check every route loads: `/`, `/experience/`, `/projects/`, `/projects/scanalpha/`, `/projects/navoy/`, `/projects/trading-bot/`, `/projects/teleconsultation/`.

- [ ] **Step 4: Functional checks in browser**

- EN/FR toggle flips every section and persists after refresh (localStorage).
- "Download CV" downloads the language-matching PDF.
- GitHub/LinkedIn/email links are correct.
- Nav anchor links scroll to sections; from a detail page, `/#about` returns home and scrolls.

- [ ] **Step 5: Responsive checks (devtools device toolbar)**

At widths 320, 375, 768, 1024, 1440:
- No horizontal scrollbar at any width.
- Mobile (<768): hamburger opens the drawer; links + toggle + pill reachable; drawer closes on link tap.
- Hero metrics: 2-up on mobile, 4-up on desktop. CTAs stack full-width on mobile.
- About: photo stacks above text on mobile, side-by-side on `md`+.
- Projects grid: 1 col mobile → 2 → 3 (lg). Timeline single rail on mobile.
- Tap targets ≥44px (nav buttons, CTAs already min-h-[44–48px]).

- [ ] **Step 6: Accessibility checks**

- Headshot has alt text (it does: "Alaeddine Tabbane").
- Keyboard: Tab through nav, toggle, CTAs, project links; visible focus.
- `prefers-reduced-motion`: enable in devtools → reveal animations and smooth-scroll disabled.
- Body text ≥16px on mobile; verify contrast of `--mut` text on `--bg` for any small text (bump to `--ink` if a label is hard to read).

- [ ] **Step 7: Fix + commit any issues found**

```bash
git add -A
git commit -m "fix: responsive/a11y polish from verification pass"
```

---

## Task 16: First deploy (user-assisted)

**Files:** none.

- [ ] **Step 1: User creates the GitHub repo**

User action (outside this tool, since `gh` is not installed): create public repo `AlaeddineTabbane.github.io`, then set **Settings → Pages → Source = GitHub Actions**.

- [ ] **Step 2: Add remote and push**

```bash
git remote add origin https://github.com/AlaeddineTabbane/AlaeddineTabbane.github.io.git
git push -u origin main
```
NOTE: pushing over HTTPS will prompt for credentials — the user must use a GitHub Personal Access Token (or set up the Git Credential Manager / SSH). If `gh` gets installed later, `gh auth login` handles this.

- [ ] **Step 3: Watch the Actions run**

In the repo → Actions tab, confirm the "Deploy to GitHub Pages" workflow succeeds.

- [ ] **Step 4: Verify live site**

Open `https://alaeddinetabbane.github.io`.
Expected: site renders; all routes work; EN/FR toggle works; CV downloads; no console errors. If assets 404, confirm `.nojekyll` is present and Pages source is "GitHub Actions".

- [ ] **Step 5: Final commit (if any fixes)**

```bash
git add -A && git commit -m "fix: post-deploy adjustments" && git push
```

---

## Self-Review Notes (author)

- **Spec coverage:** Visual identity (Tasks 2,5,8) · responsive/mobile-first (Tasks 7,15 + mobile rules throughout) · EN/FR i18n (Tasks 3,4 + used everywhere) · hub+detail routes (Tasks 8–12) · content map (Task 3 dictionaries; Tasks 8–12 render) · assets (Task 13) · deploy to Pages (Task 14,16) · verification incl. responsive + a11y (Task 15) · out-of-scope respected (no backend/CMS/analytics/theme toggle).
- **Headshot dependency:** About (Task 9) references `/headshot.jpg`; asset lands in Task 13. Build tolerates this with `unoptimized` images; final verification (Task 15) runs after the asset exists.
- **Type consistency:** `Lang`, `Dictionary`, `Role`, `ProjectContent`, `ProjectMeta` defined in Task 3 and reused verbatim. `useLang()` returns `{ lang, t, setLang, toggle }` (Task 4) — consumers use exactly these.
- **Static-export correctness:** `generateStaticParams` (Task 12) derives slugs from language-independent `PROJECT_SLUGS` (Task 3), so it never depends on the active dictionary. `trailingSlash: true` + `.nojekyll` ensure Pages serves nested routes and `_next` assets.
- **Determinism:** Footer uses a literal year (no `new Date()`), keeping the export reproducible.
```
