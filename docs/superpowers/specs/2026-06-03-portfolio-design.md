# Design Spec — Alaeddine Tabbane Personal Portfolio

**Date:** 2026-06-03
**Status:** Approved (design phase)
**Author:** Alaeddine Tabbane (with Claude Code)

---

## 1. Purpose & Goals

A personal portfolio website to present Alaeddine Tabbane (Senior Full-Stack Engineer & Tech Lead) to recruiters and potential clients, built with Next.js + Tailwind and deployed to GitHub Pages.

**Success criteria:**
- Distinctive, memorable visual identity ("Holo Data HUD" aesthetic) — not generic AI slop.
- Communicates positioning (real-time, fintech, full-stack, cross-platform, AI-assisted delivery) within 5 seconds.
- Content sourced from existing CV + LinkedIn material (already written in `C:\Users\alaed\MEGAsync\documents\cv\`).
- Bilingual (EN/FR), responsive, accessible, fast.
- Lives at a clean URL on GitHub Pages, redeploys automatically on push.

**Audience:** Technical recruiters, hiring managers, and prospective freelance clients (remote-first, international + francophone).

---

## 2. Visual Direction — "Holo Data HUD"

Validated via interactive mockup (`hero-holo-v2.html`). Dark, futuristic, fintech/real-time flavored.

**Palette (CSS variables):**
- `--bg: #070a12` (near-black navy), `--bg2: #0a0f1d`
- `--ink: #e9eefb`, `--mut: #8a97b8`
- Accents: `--cyan: #5eeaff`, `--blue: #8a9bff`, `--mag: #ff5ea0`, `--mint: #23e5b0`
- `--line: rgba(120,160,255,.18)` (grid/borders)

**Typography (`next/font`):**
- Display: **Sora** (weights 400–800)
- Mono / labels / data: **IBM Plex Mono** (400–600)

**Signature elements:**
- Iridescent gradient name (cyan → blue → magenta) with soft glow (`drop-shadow`).
- HUD frames: thin borders with cyan/magenta corner brackets + mono `// label`.
- Atmosphere: faded grid background, drifting aurora glow blobs (glow dialed *up* per user preference), faint scanlines.
- Metric "data bars" rendered as small gradient bar charts.
- Live "Open to work" pulse pill in nav.

**Motion:** Framer Motion — staggered fade-up on hero load, reveal-on-scroll per section, subtle aurora drift. Respect `prefers-reduced-motion`.

**Theme:** Dark-only by design (no light/dark toggle — YAGNI).

---

## 3. Architecture

**Stack:**
- Next.js (App Router) with `output: 'export'` (fully static).
- `images.unoptimized: true` (required for static export); `.nojekyll` in output.
- Tailwind CSS (+ CSS variables for the Holo palette).
- Framer Motion (animation).
- lucide-react (icons).
- `next/font` for Sora + IBM Plex Mono.

**Pattern:** Hub + detail pages. Home is a single-scroll page of *summaries*; sections that need depth link to dedicated static routes.

**Routes:**
- `app/page.tsx` — Home (single scroll).
- `app/experience/page.tsx` — Full career timeline (all roles, complete detail).
- `app/projects/page.tsx` — All projects grid.
- `app/projects/[slug]/page.tsx` — Per-project case study; static pages via `generateStaticParams`.

**Shared layout:** `app/layout.tsx` wraps everything with `LanguageProvider`, global `Nav` (with language toggle + open-to-work pill) and `Footer`. Detail pages include a "← Back to home" affordance.

**Component breakdown (each one clear, isolated, testable):**
- `components/Nav.tsx`, `components/LanguageToggle.tsx`, `components/Footer.tsx`
- Home sections: `Hero.tsx`, `About.tsx`, `Skills.tsx`, `ExperienceSummary.tsx`, `ProjectsSummary.tsx`, `Contact.tsx`
- Detail: `ExperienceTimeline.tsx`, `ProjectGrid.tsx`, `ProjectCaseStudy.tsx`
- Primitives: `HudFrame.tsx`, `DataBars.tsx`, `GlowBackground.tsx`, `SectionReveal.tsx` (scroll-reveal wrapper), `TechTag.tsx`

---

## 4. Internationalization (EN/FR)

- Content lives in typed dictionaries: `lib/i18n/en.ts` and `lib/i18n/fr.ts` (same shape, validated by a shared `Dictionary` type).
- `LanguageContext` + `useLang()` hook provide `{ lang, t, setLang }`.
- Toggle in nav (EN | FR); choice persisted to `localStorage`; default EN.
- Works across all routes (provider in root layout).
- CV download serves the PDF matching the active language (EN/FR) from `/public`.
- Primary `<html lang>` and meta default to English for SEO.

**Content source of truth:** existing files in the cv folder:
- `Alaeddine-Tabbane-Senior-EN-Elite.md` / `.docx`
- `Alaeddine-Tabbane-Senior-FR-Elite.md` / `.docx`
- `Alaeddine-Tabbane-LinkedIn-Optimized.md` (positioning, About copy, project framing)

---

## 5. Content Map

**Hero:** name, kicker (`// SENIOR FULL-STACK ENGINEER · TECH LEAD`), tagline, 4 HUD metrics (25K concurrent users · 95% test coverage · 6+ yrs · 3 platforms / 1 codebase), CTAs (View work, Download CV), socials (GitHub, LinkedIn, email).

**About (summary, inline):** short bio + **headshot** + quick facts (Nabeul, Tunisia · open to remote · Arabic native / French B2 / English B2).

**Skills / Stack (full, inline):** categorized chips — Frontend · Backend · Databases · DevOps/Cloud · Testing · Auth/Obs · AI Tooling.

**Experience (summary on home → `/experience`):** Home shows 3 most-recent roles as compact cards. Full page lists all: FinGenesis, Navoy, Devwise, Market 360 Degrees, Alight (Lead → Developer), Inscrypt — role, dates, 2–3 quantified bullets, tech tags.

**Projects (summary on home → `/projects` + `/projects/[slug]`):** Home shows top 3–4 cards. Candidate case studies: ScanAlpha (FinGenesis), Navoy, Automated Trading Bot, Teleconsultation platform. Case study = overview, role, problem → architecture → stack → results/metrics, links, screenshots. Projects without enough shareable detail remain summary cards only (no empty pages).

**Contact (inline):** `mailto:` button + GitHub + LinkedIn + location; CV download repeated. No backend.

**Footer:** copyright + "built with Next.js".

**Metrics honesty note:** all numbers come from the approved résumé (25K concurrent users, 95% coverage, 50% QA reduction, 60% startup, ~30% delivery, team of 3). No fabricated figures. If real revenue/user totals exist, they can be added later.

---

## 6. Assets Required (collected during build)

- **Headshot** — professional photo (LinkedIn headshot acceptable). User to provide file or point to it (check `C:\Users\alaed\Downloads` / cv folder).
- **CV PDFs** — EN + FR, generated from existing `.docx`/`.md`, placed in `/public`.
- **Favicon** — generated "AT." mark.
- **Project screenshots** — optional, per case study; where unavailable, use stylized HUD placeholders.

---

## 7. Deployment

- **Repo:** `AlaeddineTabbane.github.io` (GitHub user/root pages repo) → live at `https://alaeddinetabbane.github.io` (no basePath prefix needed).
- **Local path:** `C:\Users\alaed\projects\AlaeddineTabbane.github.io` (outside MEGAsync to avoid syncing `node_modules`).
- **CI/CD:** GitHub Actions workflow — on push to `main`: install → `next build` (static export to `out/`) → deploy to GitHub Pages (via `actions/deploy-pages`). Pages source = GitHub Actions.
- **`.gitignore`:** `node_modules`, `.next`, `out`, env files.

---

## 8. Verification

- `npm run build` completes with no errors; static export emitted to `out/`.
- Local preview (`npx serve out`) — all routes load, EN/FR toggle works, CV downloads, links correct, responsive at mobile/tablet/desktop breakpoints.
- `prefers-reduced-motion` honored.
- Basic a11y pass (semantic landmarks, alt text on headshot, focus states, color contrast on body text).
- After first deploy: confirm the live `https://alaeddinetabbane.github.io` URL renders correctly.

---

## 9. Out of Scope (YAGNI)

- Blog / CMS.
- Contact-form backend (email + social links only).
- Analytics.
- Light/dark theme toggle (dark-only by design).
- Per-language URL routes (client-side toggle is sufficient).
- Server-side rendering / API routes (incompatible with static export; not needed).
