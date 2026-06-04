'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useLang } from '@/lib/i18n/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);
  const links = [
    { href: '/#about', label: t.nav.about },
    { href: '/#stack', label: t.nav.stack },
    { href: '/#experience', label: t.nav.experience },
    { href: '/#projects', label: t.nav.projects },
    { href: '/#contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-7">
        <Link href="/" className="text-lg font-extrabold tracking-wide">AT<span className="text-cyan" style={{ textShadow: '0 0 12px var(--cyan)' }}>.</span></Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-mut transition hover:text-ink">{l.label}</Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <span className="flex items-center gap-2 rounded-full border border-mint/50 bg-mint/[0.09] px-3 py-1.5 font-mono text-xs text-mint" style={{ boxShadow: '0 0 18px rgba(35,229,176,.25)' }}>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" style={{ boxShadow: '0 0 10px var(--mint)' }} />
            {t.nav.openToWork}
          </span>
          <LanguageToggle />
        </div>

        <button className="flex min-h-[44px] min-w-[44px] items-center justify-center md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="h-6 w-6 text-ink" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col gap-6 border-l border-line bg-bg2 p-6">
            <button className="self-end flex min-h-[44px] min-w-[44px] items-center justify-center" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6 text-ink" />
            </button>
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-3 text-base text-ink hover:bg-white/5">{l.label}</Link>
              ))}
            </div>
            <div className="mt-2"><LanguageToggle /></div>
            <span className="flex w-fit items-center gap-2 rounded-full border border-mint/50 bg-mint/[0.09] px-3 py-1.5 font-mono text-xs text-mint">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
              {t.nav.openToWork}
            </span>
          </div>
        </div>
      )}
    </header>
  );
}
