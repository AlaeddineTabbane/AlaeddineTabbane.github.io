import { ProjectCaseStudy } from '@/components/ProjectCaseStudy';
import { PROJECT_SLUGS } from '@/lib/data/projects';

export function generateStaticParams() {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <main>
      <ProjectCaseStudy slug={slug} />
    </main>
  );
}
