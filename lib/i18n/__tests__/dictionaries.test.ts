import { describe, it, expect } from 'vitest';
import { en } from '../en';
import { fr } from '../fr';
import { PROJECT_SLUGS } from '@/lib/data/projects';

function shape(obj: unknown): unknown {
  if (Array.isArray(obj)) return obj.map(shape);
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(Object.keys(obj as object).sort().map((k) => [k, shape((obj as Record<string, unknown>)[k])]));
  }
  return typeof obj;
}

describe('dictionaries', () => {
  it('EN and FR have identical structure', () => {
    expect(shape(fr)).toEqual(shape(en));
  });

  it('EN and FR have the same number of experience roles', () => {
    expect(fr.experience.roles.length).toBe(en.experience.roles.length);
  });

  it('project slugs match PROJECTS_META in both languages', () => {
    expect(en.projects.items.map((p) => p.slug)).toEqual(PROJECT_SLUGS);
    expect(fr.projects.items.map((p) => p.slug)).toEqual(PROJECT_SLUGS);
  });

  it('hero has exactly 4 metrics in both languages', () => {
    expect(en.hero.metrics).toHaveLength(4);
    expect(fr.hero.metrics).toHaveLength(4);
  });
});
