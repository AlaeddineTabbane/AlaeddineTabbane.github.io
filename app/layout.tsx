import type { Metadata } from 'next';
import './globals.css';
import { sora, plexMono } from '@/lib/fonts';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { GlowBackground } from '@/components/GlowBackground';

const SITE = 'https://alaeddinetabbane.github.io';
const TITLE = 'Alaeddine Tabbane — Senior Full-Stack Engineer & Tech Lead';
const DESCRIPTION =
  'Senior Full-Stack Engineer & Tech Lead. Real-time, fintech, full-stack — MERN, Angular/Ionic, cross-platform. 6+ years building products across Web, Android & iOS.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: 'Alaeddine Tabbane — Portfolio',
  authors: [{ name: 'Alaeddine Tabbane', url: SITE }],
  creator: 'Alaeddine Tabbane',
  keywords: [
    'Alaeddine Tabbane', 'Full-Stack Engineer', 'Tech Lead', 'React', 'Next.js',
    'Node.js', 'NestJS', 'TypeScript', 'Angular', 'Ionic', 'MERN', 'WebSockets',
    'Fintech', 'Real-time', 'Playwright', 'Cross-platform', 'Portfolio', 'Remote',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE,
    siteName: 'Alaeddine Tabbane — Portfolio',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Alaeddine Tabbane — Senior Full-Stack Engineer & Tech Lead',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${plexMono.variable}`}>
      <body className="bg-bg text-ink font-sora antialiased">
        <LanguageProvider>
          <GlowBackground />
          <Nav />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
