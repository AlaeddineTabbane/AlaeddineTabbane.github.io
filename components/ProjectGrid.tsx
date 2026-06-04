'use client';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
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
      <h2 className="mb-6 mt-16 font-mono text-sm uppercase tracking-widest text-cyan">// {t.projects.enterpriseTitle}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.enterprise.map((m) => (
          <div key={m.name} className="flex h-full flex-col rounded-xl border border-line bg-white/[0.02] p-5">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-semibold text-ink">{m.name}</h3>
              {m.href && (
                <a href={m.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${m.name}`} className="text-mut transition hover:text-cyan">
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#c8d1ea]">{m.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">{m.stack.map((s) => <TechTag key={s}>{s}</TechTag>)}</div>
          </div>
        ))}
      </div>
      <h2 className="mb-6 mt-16 font-mono text-sm uppercase tracking-widest text-cyan">// {t.projects.moreTitle}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.more.map((m) => (
          <div key={m.name} className="flex h-full flex-col rounded-xl border border-line bg-white/[0.02] p-5">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-semibold text-ink">{m.name}</h3>
              {m.href && (
                <a href={m.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${m.name}`} className="text-mut transition hover:text-cyan">
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#c8d1ea]">{m.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">{m.stack.map((s) => <TechTag key={s}>{s}</TechTag>)}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
