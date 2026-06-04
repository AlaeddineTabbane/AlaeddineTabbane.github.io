'use client';
import Link from 'next/link';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { useLang } from '@/lib/i18n/LanguageContext';
import { HudFrame } from '@/components/HudFrame';
import { DataBars } from '@/components/DataBars';
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';

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
