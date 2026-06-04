import type { Metadata } from 'next';
import { ProjectGrid } from '@/components/ProjectGrid';

const title = 'Projects — Alaeddine Tabbane';
const description =
  'Selected work — fintech, real-time and full-stack products. Case studies with stack, architecture and results.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url: '/projects/',
    siteName: 'Alaeddine Tabbane — Portfolio',
    title,
    description,
    images: [{ url: '/og/projects.png', width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og/projects.png'] },
};

export default function ProjectsPage() {
  return <main><ProjectGrid /></main>;
}
