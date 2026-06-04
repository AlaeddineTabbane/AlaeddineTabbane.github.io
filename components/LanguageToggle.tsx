'use client';
import { useLang } from '@/lib/i18n/LanguageContext';

export function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center rounded-full border border-line p-0.5 font-mono text-xs">
      {(['en', 'fr'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`min-h-[32px] min-w-[40px] rounded-full px-3 py-1 uppercase transition ${lang === l ? 'bg-cyan/15 text-cyan' : 'text-mut hover:text-ink'}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
