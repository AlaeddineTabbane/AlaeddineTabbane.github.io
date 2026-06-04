'use client';
import { Mail, MapPin, Download } from 'lucide-react';
import { useLang } from '@/lib/i18n/LanguageContext';
import { Section } from '@/components/Section';
import { SectionReveal } from '@/components/SectionReveal';
import { HudFrame } from '@/components/HudFrame';
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';

export function Contact() {
  const { t, lang } = useLang();
  const cv = lang === 'fr' ? '/cv/Alaeddine-Tabbane-FR.pdf' : '/cv/Alaeddine-Tabbane-EN.pdf';
  return (
    <Section id="contact">
      <SectionReveal>
        <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-cyan">// {t.contact.heading}</h2>
        <HudFrame label="// get_in_touch">
          <p className="max-w-2xl text-lg leading-relaxed text-[#c8d1ea]">{t.contact.blurb}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href={`mailto:${t.contact.email}`} className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-bluey px-6 font-semibold text-[#04101a]" style={{ boxShadow: '0 8px 34px rgba(94,234,255,.4)' }}>
              <Mail className="h-4 w-4" /> {t.contact.emailCta}
            </a>
            <a href={cv} download className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#2a3354] px-5 text-ink hover:border-cyan hover:text-cyan"><Download className="h-4 w-4" /> {t.hero.downloadCv}</a>
            <a href="https://github.com/AlaeddineTabbane" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#2a3354] px-5 text-ink hover:border-cyan hover:text-cyan"><GithubIcon className="h-4 w-4" /> GitHub</a>
            <a href="https://www.linkedin.com/in/alaeddine-tabbane/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-[#2a3354] px-5 text-ink hover:border-cyan hover:text-cyan"><LinkedinIcon className="h-4 w-4" /> LinkedIn</a>
            <span className="inline-flex min-h-[48px] items-center gap-2 px-2 font-mono text-sm text-mut"><MapPin className="h-4 w-4" /> {t.contact.location}</span>
          </div>
        </HudFrame>
      </SectionReveal>
    </Section>
  );
}
