import type { Dictionary } from './types';

export const fr: Dictionary = {
  nav: { about: 'À propos', stack: 'Stack', experience: 'Expérience', projects: 'Projets', contact: 'Contact', openToWork: 'Ouvert aux opportunités', backHome: "Retour à l'accueil" },
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
      { company: 'FinGenesis', title: 'Ingénieur Full-Stack (ScanAlpha)', period: 'Juil. 2025 — Présent', location: 'Remote', bullets: ['Livré Web + Android + iOS depuis une seule base de code Ionic + Angular, réduisant les coûts de maintenance vs. natif.', 'Conçu un backend temps réel Node.js + Express + WebSockets supportant 25 000 utilisateurs simultanés.', 'Porté la couverture de tests à 95 % (Vitest + Playwright E2E) dans GitLab CI/CD, réduisant la QA manuelle de 50 %.', 'Publié sur App Store & Google Play sans faille de sécurité critique ; Auth0 SSO + Sentry.'], tech: ['Ionic', 'Angular', 'TypeScript', 'Node.js', 'WebSockets', 'Playwright', 'GitLab CI/CD', 'Auth0', 'Sentry'], link: 'https://scanalpha.ai/' },
      { company: 'Navoy', title: 'Co-Fondateur & Tech Lead (MERN)', period: 'Avr. 2024 — Juil. 2025', location: 'Remote', bullets: ['Conçu et livré sur la stack MERN (Next.js, NestJS, PostgreSQL, MongoDB) du MVP à la production.', 'Encadré une équipe de 3 ingénieurs, livrant les jalons dans les délais via revue de code et bonnes pratiques.', "Standardisé Claude Code & Cursor AI à l'échelle de l'équipe, accélérant la livraison d'environ 30 %."], tech: ['Next.js', 'NestJS', 'Node.js', 'MongoDB', 'PostgreSQL', 'Microservices', 'Claude Code', 'Cursor'], link: 'https://navoy.io/' },
      { company: 'Devwise', title: 'Ingénieur Full-Stack (Freelance)', period: 'Juin 2024 — Juil. 2025', location: 'Remote', bullets: ['Développé des interfaces Angular responsives adossées à des services Spring Boot (Java 17).', 'Optimisé des bases Oracle & SQL Server, améliorant les performances et l\'intégration front-back.'], tech: ['Angular', 'Spring Boot', 'Java 17', 'Oracle', 'SQL Server', 'Docker', 'Jenkins'], link: 'https://www.devwise.tn/' },
      { company: 'Market 360 Degrees', title: 'Tech Lead (Node.js / React.js)', period: 'Août 2023 — Avr. 2024', location: 'Tunis, Tunisie', bullets: ['Dirigé une équipe React.js/Node.js livrant de nouvelles fonctionnalités et modernisant le code existant.', 'Assuré la qualité via revues et standards ; géré la communication client et la livraison.'], tech: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Elasticsearch'] },
      { company: 'Alight', title: 'Tech Lead Front-End → Développeur', period: 'Juil. 2020 — Août 2023', location: 'Tunisie', bullets: ['Dirigé une équipe front-end livrant des interfaces React + SharePoint SPFX responsives, dans les délais et selon les standards de qualité.', "Construit des intranets d'entreprise, de la gestion documentaire et de l'automatisation Power Apps pour Cofat, Merck, Metafinaz et Université Centrale.", "Piloté la performance, la compatibilité multi-navigateurs et l'accessibilité ; encadré les membres de l'équipe."], tech: ['React', 'TypeScript', 'SharePoint SPFX', 'JavaScript', 'Bootstrap', 'Node.js'], link: 'http://alightmea.com/' },
      { company: 'GOMYCODE', title: 'Formateur Front-End (ReactJS)', period: 'Juin 2021 — Juin 2022', location: 'Tunisie · Temps partiel', bullets: ["Formé des étudiants à ReactJS : ES6, JSX, composants, props & state, hooks, React Router, Redux et consommation d'API REST.", "Accompagné les apprenants des fondamentaux jusqu'à la livraison d'applications React fonctionnelles."], tech: ['React', 'JavaScript (ES6)', 'Redux', 'React Router'] },
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
      { slug: 'scanalpha', name: 'ScanAlpha', tagline: "Plateforme d'intelligence de marché par IA pour traders — Web, Android & iOS", year: '2025', role: 'Ingénieur Full-Stack', stack: ['Ionic', 'Angular', 'TypeScript', 'Node.js', 'WebSockets', 'Playwright', 'Auth0', 'Sentry'], links: [{ label: 'scanalpha.ai', href: 'https://scanalpha.ai/' }], summary: 'Une plateforme fintech qui scanne le marché pour repérer les configurations à forte probabilité, prévoit les prix et évalue le sentiment — livrée sur Web, Android & iOS depuis une seule base de code, sur un backend temps réel.', problem: "Les traders actifs passent des heures à scanner des centaines de titres et à douter de leurs entrées. L'objectif : livrer une analyse de niveau Wall Street sur Web, Android et iOS en temps réel, sans maintenir trois bases de code natives.", solution: "Une seule base de code Ionic + Angular pour toutes les plateformes, sur un backend temps réel Node.js + Express + WebSockets. Surfaces produit livrées : scan « Prime Opportunity » sur des centaines de titres, prévision de prix multi-jours, scoring de sentiment à partir de l'actualité, un analyste IA « Ask Alpha », et des outils d'audit Replay/Pinpoint. Vitest + Playwright E2E dans GitLab CI/CD, Auth0 SSO et Sentry.", results: ['25 000 utilisateurs simultanés supportés', '95 % de couverture de tests ; 50 % de QA manuelle en moins', 'Temps de démarrage mobile 60 % plus rapide', 'Zéro faille de sécurité critique en production'] },
      { slug: 'navoy', name: 'Navoy', tagline: 'Agent de voyage IA — un itinéraire complet, hôtels & transferts réservés en minutes', year: '2024', role: 'Co-Fondateur & Tech Lead', stack: ['Next.js', 'NestJS', 'Node.js', 'MongoDB', 'PostgreSQL', 'Microservices'], links: [{ label: 'navoy.io', href: 'https://navoy.io/' }], summary: "Une plateforme de voyage IA qui transforme quelques préférences en un itinéraire complet jour par jour et réserve hôtels et transferts au même endroit — co-fondée et pilotée du MVP à la production.", problem: "Planifier un voyage, c'est jongler avec des dizaines d'onglets : les assistants IA planifient mais ne réservent pas ; les OTA réservent mais ne planifient pas intelligemment. Réunir les deux dans un seul produit, avec des prix réels et vérifiés.", solution: "Conçu et livré sur la stack MERN (Next.js, NestJS, PostgreSQL, MongoDB) : itinéraires générés par IA qui s'adaptent aux changements réels, réservation directe d'hôtels & transferts sur plus de 2,9 M de logements, planification de groupe avec votes partagés, et vérification des prix en temps réel. Encadré une équipe de 3 ingénieurs et standardisé les workflows assistés par IA (Claude Code, Cursor).", results: ['Livré du MVP à la production ; soutenu par les programmes startup AWS, Google, Microsoft & NVIDIA', 'Mis en avant sur Product Hunt', "~30 % de livraison plus rapide via l'IA", 'Jalons livrés dans les délais avec 3 ingénieurs'] },
      { slug: 'trading-bot', name: 'Bot de Trading Automatisé', tagline: 'Stratégies Price-Action algorithmiques avec gestion du risque', year: '2021–2023', role: 'Ingénieur Freelance', stack: ['Node.js', 'React', 'MongoDB', 'AWS EC2'], links: [], summary: 'Une plateforme de trading entièrement automatisée transformant des stratégies Price-Action en algorithmes, avec backtesting et tableaux de bord.', problem: 'Systématiser des stratégies de trading discrétionnaires et suivre leur performance en continu.', solution: 'Stratégies transformées en algorithmes avec modèles statistiques de gestion du risque, backtesting automatisé, et plateforme Node.js + React avec tableaux de bord 24h.', results: ['Backtesting automatisé de stratégies complexes', 'Suivi de performance continu (tableaux de bord 24h)', 'Optimisation par gestion statistique du risque'] },
      { slug: 'teleconsultation', name: 'Plateforme de Téléconsultation', tagline: 'Application web de consultation vidéo temps réel', year: '2019–2020', role: 'Développeur Full-Stack', stack: ['React', 'Node.js', 'Firebase', 'WebRTC', 'Socket.io', 'Redux'], links: [], summary: 'Une application web permettant des consultations vidéo en temps réel pour une psychologue clinicienne.', problem: 'Permettre des consultations à distance sécurisées et en temps réel entre praticienne et patients, dans le navigateur.', solution: 'Une app React + Node.js avec WebRTC pour la vidéo pair-à-pair et Socket.io pour la signalisation, adossée à Firebase.', results: ['Consultations vidéo temps réel dans le navigateur', 'Livré de bout en bout en début de carrière'] },
    ],
    moreTitle: 'Freelance & autres travaux',
    more: [
      { name: 'Yamentech', desc: 'Boutique e-commerce avec CMS sur mesure pour un détaillant de produits IT.', stack: ['React', 'Bootstrap', 'PHP'], href: 'https://yamentech.com' },
      { name: 'Mobishop', desc: 'Boutique e-commerce avec CMS sur mesure pour un détaillant de produits IT.', stack: ['React', 'Bootstrap', 'PHP'], href: '' },
      { name: 'Aframe', desc: 'Site vitrine présentant des modèles de maisons en bois.', stack: ['Bootstrap', 'HTML5', 'CSS3', 'jQuery'], href: '' },
    ],
    enterpriseTitle: 'Entreprise & SharePoint',
    enterprise: [
      { name: 'BeExpert — LMS d\'entreprise (Alight)', desc: "Tech lead front-end sur la plateforme d'apprentissage d'Alight — un LMS collaboratif, moderne et intelligent.", stack: ['React', 'TypeScript', 'SharePoint SPFX'], href: '' },
      { name: 'Zignals Digital Workplace (Alight)', desc: "Développé la fonctionnalité Teams Governance pour la plateforme digital-workplace Microsoft 365 d'Alight.", stack: ['React', 'SharePoint SPFX', 'Microsoft Teams', 'Node.js'], href: '' },
      { name: 'Intranets SharePoint d\'entreprise', desc: 'Intranets SPFX, gestion documentaire et automatisation Power Apps pour Cofat, Merck, Metafinaz et Université Centrale.', stack: ['React', 'SharePoint SPFX', 'Power Apps', 'Office 365'], href: '' },
    ],
  },
  contact: {
    heading: 'Contact',
    blurb: "Ouvert aux postes Senior Full-Stack / Tech Lead (remote-first), aux projets fintech & temps réel, et au conseil en architecture. Je réponds à chaque message.",
    emailCta: 'Écrivez-moi',
    email: 'alaeddine.tabbane@gmail.com',
    location: 'Nabeul, Tunisie',
  },
  footer: { builtWith: 'Conçu avec Next.js · Déployé sur GitHub Pages' },
};
