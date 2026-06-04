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
