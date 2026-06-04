import type { Metadata } from 'next';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';

const title = 'Experience — Alaeddine Tabbane';
const description =
  '6+ years as a Senior Full-Stack Engineer & Tech Lead — MERN, Angular/Ionic, real-time and fintech across FinGenesis, Navoy, Alight and more.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url: '/experience/',
    siteName: 'Alaeddine Tabbane — Portfolio',
    title,
    description,
    images: [{ url: '/og/experience.png', width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og/experience.png'] },
};

export default function ExperiencePage() {
  return <main><ExperienceTimeline /></main>;
}
