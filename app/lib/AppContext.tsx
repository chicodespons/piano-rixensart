'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Lang, PageKey } from './translations';

interface AppState {
  lang: Lang;
  page: PageKey;
  setLang: (l: Lang) => void;
  setPage: (p: PageKey) => void;
}

const AppContext = createContext<AppState>({
  lang: 'fr', page: 'home',
  setLang: () => {}, setPage: () => {}
});

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangRaw] = useState<Lang>('fr');
  const [page, setPageRaw] = useState<PageKey>('home');

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('ivana-state') || '{}');
      if (stored.lang) setLangRaw(stored.lang);
      if (stored.page) setPageRaw(stored.page);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangRaw(l);
    try { localStorage.setItem('ivana-state', JSON.stringify({ lang: l, page })); } catch {}
  };

  const setPage = (p: PageKey) => {
    setPageRaw(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try { localStorage.setItem('ivana-state', JSON.stringify({ lang, page: p })); } catch {}
  };

  return (
    <AppContext.Provider value={{ lang, page, setLang, setPage }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
