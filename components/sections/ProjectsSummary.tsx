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
