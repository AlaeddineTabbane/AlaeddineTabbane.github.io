import type { Metadata } from 'next';
import { ProjectGrid } from '@/components/ProjectGrid';

export const metadata: Metadata = { title: 'Projects — Alaeddine Tabbane' };

export default function ProjectsPage() {
  return <main><ProjectGrid /></main>;
}
