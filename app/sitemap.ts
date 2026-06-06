import type { MetadataRoute } from 'next';
import { PROJECT_SLUGS } from '@/lib/data/projects';

export const dynamic = 'force-static';

const BASE = 'https://alaeddinetabbane.github.io';
const LAST = '2026-06-06';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, lastModified: LAST, priority: 1.0 },
    { url: `${BASE}/cv/Alaeddine-Tabbane-EN.pdf`, lastModified: LAST, priority: 0.8 },
    { url: `${BASE}/cv/Alaeddine-Tabbane-FR.pdf`, lastModified: LAST, priority: 0.8 },
    { url: `${BASE}/experience/`, lastModified: LAST, priority: 0.9 },
    { url: `${BASE}/projects/`, lastModified: LAST, priority: 0.9 },
    ...PROJECT_SLUGS.map((slug) => ({
      url: `${BASE}/projects/${slug}/`,
      lastModified: LAST,
      priority: 0.8,
    })),
  ];
}
