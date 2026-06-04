export interface ProjectMeta { slug: string; hasCaseStudy: boolean; accent: 'cyan' | 'mag' | 'mint' }

export const PROJECTS_META: ProjectMeta[] = [
  { slug: 'scanalpha', hasCaseStudy: true, accent: 'cyan' },
  { slug: 'navoy', hasCaseStudy: true, accent: 'mint' },
  { slug: 'trading-bot', hasCaseStudy: true, accent: 'mag' },
  { slug: 'teleconsultation', hasCaseStudy: true, accent: 'cyan' },
];

export const PROJECT_SLUGS = PROJECTS_META.map((p) => p.slug);
export const hasCaseStudy = (slug: string) => PROJECTS_META.find((p) => p.slug === slug)?.hasCaseStudy ?? false;
