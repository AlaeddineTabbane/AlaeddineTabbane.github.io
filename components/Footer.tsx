'use client';
import { useLang } from '@/lib/i18n/LanguageContext';

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line/60 px-5 py-8 text-center font-mono text-xs text-mut">
      <p>© 2026 Alaeddine Tabbane</p>
      <p className="mt-1">{t.footer.builtWith}</p>
    </footer>
  );
}
