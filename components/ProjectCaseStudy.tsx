'use client';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLang } from '@/lib/i18n/LanguageContext';
import { Section } from '@/components/Section';
import { HudFrame } from '@/components/HudFrame';
import { TechTag } from '@/components/TechTag';

export function ProjectCaseStudy({ slug }: { slug: string }) {
  const { t } = useLang();
  const p = t.projects.items.find((x) => x.slug === slug);
  if (!p) {
    return (
      <Section>
        <Link href="/projects" className="font-mono text-xs text-cyan">← {t.projects.pageTitle}</Link>
        <p className="mt-6 text-mut">Project not found.</p>
      </Section>
    );
  }
  return (
    <Section>
      <Link href="/projects" className="inline-flex items-center gap-1.5 font-mono text-xs text-mut hover:text-cyan"><ArrowLeft className="h-3.5 w-3.5" /> {t.projects.pageTitle}</Link>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-cyan">// {t.projects.caseStudy}</p>
      <h1 className="mt-2 text-4xl font-extrabold text-holo">{p.name}</h1>
      <p className="mt-2 text-lg text-mut">{p.tagline}</p>
      <p className="mt-1 font-mono text-xs text-mut">{p.year} · {p.role}</p>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#c8d1ea]">{p.summary}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <HudFrame label={`// ${t.projects.problemLabel}`}><p className="text-[15px] leading-relaxed text-[#c8d1ea]">{p.problem}</p></HudFrame>
        <HudFrame label={`// ${t.projects.solutionLabel}`}><p className="text-[15px] leading-relaxed text-[#c8d1ea]">{p.solution}</p></HudFrame>
      </div>

      <h2 className="mt-8 font-mono text-sm uppercase tracking-widest text-cyan">// {t.projects.resultsLabel}</h2>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {p.results.map((r, i) => (
          <li key={i} className="rounded-lg border border-line bg-white/[0.02] px-4 py-3 text-sm text-[#c8d1ea]">{r}</li>
        ))}
      </ul>

      <h2 className="mt-8 font-mono text-sm uppercase tracking-widest text-cyan">// {t.projects.stackLabel}</h2>
      <div className="mt-3 flex flex-wrap gap-2">{p.stack.map((s) => <TechTag key={s}>{s}</TechTag>)}</div>
    </Section>
  );
}
