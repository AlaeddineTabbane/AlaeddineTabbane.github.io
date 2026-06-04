import type { MetadataRoute } from 'next';
import { PROJECT_SLUGS } from '@/lib/data/projects';

export const dynamic = 'force-static';

const BASE = 'https://alaeddinetabbane.github.io';
const LAST = '2026-06-04';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', 'experience', 'projects'].map((p) => ({
    url: p ? `${BASE}/${p}/` : `${BASE}/`,
    lastModified: LAST,
  }));
  const projectRoutes = PROJECT_SLUGS.map((slug) => ({
    url: `${BASE}/projects/${slug}/`,
    lastModified: LAST,
  }));
  return [...staticRoutes, ...projectRoutes];
}
