# AlaeddineTabbane.github.io

Personal portfolio — Next.js (static export) + Tailwind + Framer Motion. Bilingual EN/FR, "Holo Data HUD" aesthetic. Live: https://alaeddinetabbane.github.io

## Develop

```
npm install
npm run dev       # http://localhost:3000
npm test
npm run build     # static export to ./out
npm run preview
```

## Deploy (one-time setup)

1. Create a public GitHub repo named exactly **AlaeddineTabbane.github.io**.
2. Repo **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

## Content

All copy lives in `lib/i18n/en.ts` and `lib/i18n/fr.ts`. CV PDFs and headshot are in `public/`.
