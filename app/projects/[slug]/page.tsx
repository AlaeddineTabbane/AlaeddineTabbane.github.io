import type { Metadata } from 'next';
import { ProjectCaseStudy } from '@/components/ProjectCaseStudy';
import { PROJECT_SLUGS } from '@/lib/data/projects';
import { en } from '@/lib/i18n/en';

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = en.projects.items.find((x) => x.slug === slug);
  const title = p ? `${p.name} — Alaeddine Tabbane` : 'Project — Alaeddine Tabbane';
  const description = p ? p.summary : 'Case study.';
  const image = `/og/${slug}.png`;
  return {
    title,
    description,
    openGraph: {
      type: 'article',
      url: `/projects/${slug}/`,
      siteName: 'Alaeddine Tabbane — Portfolio',
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <main>
      <ProjectCaseStudy slug={slug} />
    </main>
  );
}
