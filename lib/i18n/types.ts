export type Lang = 'en' | 'fr';

export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
  link?: string;
}

export interface ProjectContent {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  links: { label: string; href: string }[];
  summary: string;
  problem: string;
  solution: string;
  results: string[];
}

export interface Dictionary {
  nav: { about: string; stack: string; experience: string; projects: string; contact: string; openToWork: string; backHome: string };
  hero: { kicker: string; tagline: string; viewWork: string; downloadCv: string; metrics: { value: string; label: string }[] };
  about: { heading: string; bio: string[]; facts: { label: string; value: string }[] };
  skills: { heading: string; groups: { label: string; items: string[] }[] };
  experience: { heading: string; subtitle: string; viewAll: string; pageTitle: string; roles: Role[] };
  projects: { heading: string; subtitle: string; viewAll: string; pageTitle: string; caseStudy: string; problemLabel: string; solutionLabel: string; resultsLabel: string; stackLabel: string; items: ProjectContent[] };
  contact: { heading: string; blurb: string; emailCta: string; email: string; location: string };
  footer: { builtWith: string };
}
