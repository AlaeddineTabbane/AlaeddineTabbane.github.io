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
