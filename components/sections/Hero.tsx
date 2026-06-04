'use client';
import Link from 'next/link';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { useLang } from '@/lib/i18n/LanguageContext';
import { HudFrame } from '@/components/HudFrame';
import { DataBars } from '@/components/DataBars';

const BAR_SETS = [[40,70,55,100,75],[50,65,85,95,70],[30,50,70,85,100],[60,80,45,90,65]];

/* Brand icons not shipped in lucide-react ≥1.x — inline SVGs */
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

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
        <a href="https://github.com/AlaeddineTabbane" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#232c49] text-mut transition hover:border-cyan hover:text-cyan"><GithubIcon className="h-5 w-5" /></a>
        <a href="https://www.linkedin.com/in/alaeddine-tabbane/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#232c49] text-mut transition hover:border-cyan hover:text-cyan"><LinkedinIcon className="h-5 w-5" /></a>
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
