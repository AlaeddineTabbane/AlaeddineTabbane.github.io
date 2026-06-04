import type { Metadata } from 'next';
import './globals.css';
import { sora, plexMono } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Alaeddine Tabbane — Senior Full-Stack Engineer & Tech Lead',
  description:
    'Senior Full-Stack Engineer & Tech Lead. Real-time, fintech, full-stack — MERN, Angular/Ionic, cross-platform. 6+ years.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${plexMono.variable}`}>
      <body className="bg-bg text-ink font-sora antialiased">{children}</body>
    </html>
  );
}
