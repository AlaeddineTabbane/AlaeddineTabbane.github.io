import type { Metadata } from 'next';
import './globals.css';
import { sora, plexMono } from '@/lib/fonts';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { GlowBackground } from '@/components/GlowBackground';

export const metadata: Metadata = {
  title: 'Alaeddine Tabbane — Senior Full-Stack Engineer & Tech Lead',
  description:
    'Senior Full-Stack Engineer & Tech Lead. Real-time, fintech, full-stack — MERN, Angular/Ionic, cross-platform. 6+ years.',
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
