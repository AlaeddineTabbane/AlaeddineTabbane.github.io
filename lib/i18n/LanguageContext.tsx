'use client';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { Dictionary, Lang } from './types';
import { dictionaries } from './index';

interface Ctx { lang: Lang; t: Dictionary; setLang: (l: Lang) => void; toggle: () => void }
const LanguageContext = createContext<Ctx | null>(null);
const STORAGE_KEY = 'portfolio-lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = (typeof window !== 'undefined' && window.localStorage.getItem(STORAGE_KEY)) as Lang | null;
    if (saved === 'en' || saved === 'fr') setLangState(saved);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    }
  }, []);

  const toggle = useCallback(() => setLang(lang === 'en' ? 'fr' : 'en'), [lang, setLang]);

  return (
    <LanguageContext.Provider value={{ lang, t: dictionaries[lang], setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
