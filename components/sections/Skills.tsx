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
