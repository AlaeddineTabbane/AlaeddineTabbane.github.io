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
