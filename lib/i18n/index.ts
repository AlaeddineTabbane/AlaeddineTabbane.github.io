import type { Dictionary, Lang } from './types';
import { en } from './en';
import { fr } from './fr';

export const dictionaries: Record<Lang, Dictionary> = { en, fr };
export type { Dictionary, Lang };
