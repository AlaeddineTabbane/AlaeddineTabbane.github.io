import type { Dictionary } from './types';

export const fr: Dictionary = {
  nav: { work: 'Travaux', about: 'À propos', stack: 'Stack', experience: 'Expérience', projects: 'Projets', contact: 'Contact', openToWork: 'Ouvert aux opportunités', backHome: "Retour à l'accueil" },
  hero: {
    kicker: '// INGÉNIEUR FULL-STACK SENIOR · TECH LEAD',
    tagline: "Je conçois des produits full-stack temps réel — Web, Android et iOS depuis une seule base de code. 6+ ans en MERN, Angular/Ionic et systèmes fintech, avec des workflows assistés par IA.",
    viewWork: 'Voir les travaux',
    downloadCv: 'Télécharger le CV',
    metrics: [
      { value: '25K', label: 'utilisateurs simultanés' },
      { value: '95%', label: 'couverture de tests' },
      { value: '6+ ans', label: "d'ingénierie" },
      { value: '3', label: 'plateformes, 1 base de code' },
    ],
  },
  about: {
    heading: 'À propos',
    bio: [
      "Tech Lead avec plus de 6 ans d'expérience en systèmes full-stack (MERN, Angular/Ionic, microservices). Je livre Web, Android et iOS depuis une seule base de code et j'encadre des équipes via la revue de code, l'automatisation CI/CD et des workflows assistés par IA qui réduisent mesurablement les cycles de livraison.",
      "Je suis le plus à l'aise à l'intersection du temps réel, de la fintech et de la performance — traduisant les objectifs métier en architectures évolutives, de bout en bout.",
    ],
    facts: [
      { label: 'Localisation', value: 'Nabeul, Tunisie · Remote-first' },
      { label: 'Langues', value: 'Arabe (natif) · Français (B2) · Anglais (B2)' },
      { label: 'Focus', value: 'Temps réel · Fintech · Multiplateforme' },
    ],
  },
  skills: {
    heading: 'Stack',
    groups: [
      { label: 'Frontend', items: ['React', 'Next.js', 'Angular', 'Ionic', 'TypeScript', 'HTML5/CSS3', 'Bootstrap'] },
      { label: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'Spring Boot (Java 17)', 'REST', 'WebSockets', 'Microservices'] },
      { label: 'Bases de données', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Oracle', 'SQL Server', 'Firebase', 'Elasticsearch'] },
      { label: 'DevOps / Cloud', items: ['GitLab CI/CD', 'Jenkins', 'Docker', 'AWS EC2'] },
      { label: 'Tests', items: ['Playwright (E2E)', 'Vitest', 'Jest'] },
      { label: 'Auth / Observabilité', items: ['Auth0 (SSO)', 'Sentry'] },
      { label: 'Outils IA', items: ['Claude Code', 'Cursor AI'] },
    ],
  },
  experience: {
    heading: 'Expérience',
    subtitle: 'Postes récents',
    viewAll: 'Voir tout le parcours',
    pageTitle: 'Parcours',
    roles: [
      { company: 'FinGenesis', title: 'Ingénieur Full-Stack (ScanAlpha)', period: 'Juil. 2025 — Présent', location: 'Remote', bullets: ['Livré Web + Android + iOS depuis une seule base de code Ionic + Angular, réduisant les coûts de maintenance vs. natif.', 'Conçu un backend temps réel Node.js + Express + WebSockets supportant 25 000 utilisateurs simultanés.', 'Porté la couverture de tests à 95 % (Vitest + Playwright E2E) dans GitLab CI/CD, réduisant la QA manuelle de 50 %.', 'Publié sur App Store & Google Play sans faille de sécurité critique ; Auth0 SSO + Sentry.'], tech: ['Ionic', 'Angular', 'TypeScript', 'Node.js', 'WebSockets', 'Playwright', 'GitLab CI/CD', 'Auth0', 'Sentry'] },
      { company: 'Navoy', title: 'Co-Fondateur & Tech Lead (MERN)', period: 'Avr. 2024 — Juil. 2025', location: 'Remote', bullets: ['Conçu et livré sur la stack MERN (Next.js, NestJS, PostgreSQL, MongoDB) du MVP à la production.', 'Encadré une équipe de 3 ingénieurs, livrant les jalons dans les délais via revue de code et bonnes pratiques.', "Standardisé Claude Code & Cursor AI à l'échelle de l'équipe, accélérant la livraison d'environ 30 %."], tech: ['Next.js', 'NestJS', 'Node.js', 'MongoDB', 'PostgreSQL', 'Microservices', 'Claude Code', 'Cursor'] },
      { company: 'Devwise', title: 'Ingénieur Full-Stack (Freelance)', period: 'Juin 2024 — Juil. 2025', location: 'Remote', bullets: ['Développé des interfaces Angular responsives adossées à des services Spring Boot (Java 17).', 'Optimisé des bases Oracle & SQL Server, améliorant les performances et l\'intégration front-back.'], tech: ['Angular', 'Spring Boot', 'Java 17', 'Oracle', 'SQL Server', 'Docker', 'Jenkins'] },
      { company: 'Market 360 Degrees', title: 'Tech Lead (Node.js / React.js)', period: 'Août 2023 — Avr. 2024', location: 'Tunis, Tunisie', bullets: ['Dirigé une équipe React.js/Node.js livrant de nouvelles fonctionnalités et modernisant le code existant.', 'Assuré la qualité via revues et standards ; géré la communication client et la livraison.'], tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Elasticsearch'] },
      { company: 'Alight', title: 'Tech Lead Front-End → Développeur', period: 'Juil. 2020 — Août 2023', location: 'Tunisie', bullets: ['Dirigé une équipe front-end livrant des interfaces React + SharePoint SPFX responsives, dans les délais.', 'Livré des solutions pour 5+ grands comptes dont Cofat & Merck — intranets, GED, Power Apps sur mesure.'], tech: ['React', 'TypeScript', 'SharePoint SPFX', 'JavaScript', 'Bootstrap', 'Node.js'] },
      { company: 'Inscrypt', title: 'Développeur Full-Stack', period: 'Févr. 2019 — Juin 2020', location: 'Tunisie', bullets: ['Livré une plateforme de téléconsultation avec vidéo temps réel (WebRTC, Socket.io).', 'Construit la démo de mise en relation startups–experts de Vinko (React + Node + MongoDB, AWS EC2).'], tech: ['React', 'Node.js', 'Firebase', 'MongoDB', 'WebRTC', 'Socket.io', 'AWS EC2'] },
    ],
  },
  projects: {
    heading: 'Projets',
    subtitle: 'Travaux sélectionnés',
    viewAll: 'Tous les projets',
    pageTitle: 'Projets',
    caseStudy: 'Étude de cas',
    problemLabel: 'Problème',
    solutionLabel: 'Architecture & Approche',
    resultsLabel: 'Résultats',
    stackLabel: 'Stack',
    items: [
      { slug: 'scanalpha', name: 'ScanAlpha', tagline: 'Plateforme fintech temps réel sur Web, Android & iOS', year: '2025', role: 'Ingénieur Full-Stack', stack: ['Ionic', 'Angular', 'TypeScript', 'Node.js', 'WebSockets', 'Playwright', 'Auth0', 'Sentry'], summary: 'Une plateforme fintech livrant des services financiers sur trois plateformes depuis une seule base de code, avec un backend temps réel à l\'échelle.', problem: 'Livrer une expérience fintech sécurisée et temps réel sur Web, Android et iOS sans maintenir trois bases de code natives.', solution: 'Une seule base de code Ionic + Angular pour toutes les plateformes, un service Node.js + Express + WebSockets pour la synchronisation en direct, Vitest + Playwright E2E dans GitLab CI/CD, Auth0 SSO et Sentry.', results: ['25 000 utilisateurs simultanés supportés', '95 % de couverture de tests ; 50 % de QA manuelle en moins', 'Temps de démarrage mobile 60 % plus rapide', 'Zéro faille de sécurité critique en production'] },
      { slug: 'navoy', name: 'Navoy', tagline: 'SaaS MERN, co-fondé et piloté du MVP à la production', year: '2024', role: 'Co-Fondateur & Tech Lead', stack: ['Next.js', 'NestJS', 'Node.js', 'MongoDB', 'PostgreSQL', 'Microservices'], summary: "Un SaaS MERN où j'ai piloté l'architecture sur tout le cycle de vie produit et encadré une petite équipe.", problem: 'Amener un produit SaaS de zéro à une plateforme évolutive et prête pour la production avec une petite équipe.', solution: "Conçu et livré sur la stack MERN, encadré une équipe de 3 ingénieurs, et standardisé les workflows assistés par IA (Claude Code, Cursor).", results: ['Livré du MVP à la production', "~30 % de livraison plus rapide via l'IA", 'Jalons livrés dans les délais avec 3 ingénieurs'] },
      { slug: 'trading-bot', name: 'Bot de Trading Automatisé', tagline: 'Stratégies Price-Action algorithmiques avec gestion du risque', year: '2021–2023', role: 'Ingénieur Freelance', stack: ['Node.js', 'React', 'MongoDB', 'AWS EC2'], summary: 'Une plateforme de trading entièrement automatisée transformant des stratégies Price-Action en algorithmes, avec backtesting et tableaux de bord.', problem: 'Systématiser des stratégies de trading discrétionnaires et suivre leur performance en continu.', solution: 'Stratégies transformées en algorithmes avec modèles statistiques de gestion du risque, backtesting automatisé, et plateforme Node.js + React avec tableaux de bord 24h.', results: ['Backtesting automatisé de stratégies complexes', 'Suivi de performance continu (tableaux de bord 24h)', 'Optimisation par gestion statistique du risque'] },
      { slug: 'teleconsultation', name: 'Plateforme de Téléconsultation', tagline: 'Application web de consultation vidéo temps réel', year: '2019–2020', role: 'Développeur Full-Stack', stack: ['React', 'Node.js', 'Firebase', 'WebRTC', 'Socket.io', 'Redux'], summary: 'Une application web permettant des consultations vidéo en temps réel pour une psychologue clinicienne.', problem: 'Permettre des consultations à distance sécurisées et en temps réel entre praticienne et patients, dans le navigateur.', solution: 'Une app React + Node.js avec WebRTC pour la vidéo pair-à-pair et Socket.io pour la signalisation, adossée à Firebase.', results: ['Consultations vidéo temps réel dans le navigateur', 'Livré de bout en bout en début de carrière'] },
    ],
  },
  contact: {
    heading: 'Contact',
    blurb: "Ouvert aux postes Senior Full-Stack / Tech Lead (remote-first), aux projets fintech & temps réel, et au conseil en architecture. Je réponds à chaque message.",
    emailCta: 'Écrivez-moi',
    email: 'alaeddine.tabbane@gmail.com',
  },
  footer: { builtWith: 'Conçu avec Next.js · Déployé sur GitHub Pages' },
};
