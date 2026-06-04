import type { Metadata } from 'next';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';

export const metadata: Metadata = { title: 'Experience — Alaeddine Tabbane' };

export default function ExperiencePage() {
  return <main><ExperienceTimeline /></main>;
}
