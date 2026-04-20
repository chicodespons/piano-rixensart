'use client';

import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import NavigationLink from './NavigationLink';
import { NAV_COLORS, NAV_KEYS, NAV_TEXT, T, type Lang, type PageKey } from '../lib/translations';

interface NavbarProps {
  lang: Lang;
  page: PageKey;
}

export default function Navbar({ lang, page }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const navigation = T[lang].nav;
  const ui = T[lang].ui;

  const getHref = (key: PageKey) => {
    const params = new URLSearchParams();

    if (lang !== 'fr') {
      params.set('lang', lang);
    }

    if (key !== 'home') {
      params.set('page', key);
    }

    const query = params.toString();
    return query ? `/?${query}` : '/';
  };

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255,255,255,0.94)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
        fontFamily: 'Fredoka, sans-serif',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          <NavigationLink
            href={getHref('home')}
            ariaLabel={ui.homepageLinkLabel}
            style={{
              textDecoration: 'none',
              fontFamily: "'Bubblegum Sans', cursive",
              fontSize: 24,
              color: '#ec407a',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: 0,
            }}
          >
            🎹 Ivana Mailleux
          </NavigationLink>

          <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexWrap: 'wrap' }} className="desk-nav">
            {NAV_KEYS.map((key, index) => {
              const isActive = page === key;

              return (
                <NavigationLink
                  key={key}
                  href={getHref(key)}
                  ariaLabel={navigation[key]}
                  style={{
                    padding: '7px 13px',
                    borderRadius: 50,
                    textDecoration: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Fredoka, sans-serif',
                    fontSize: 13.5,
                    fontWeight: isActive ? 600 : 400,
                    background: isActive ? NAV_COLORS[index] : '#f0f0f0',
                    color: isActive ? NAV_TEXT[index] : '#555',
                    boxShadow: isActive ? '0 3px 10px rgba(0,0,0,0.18)' : 'none',
                    transition: 'all 0.18s',
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  {navigation[key]}
                </NavigationLink>
              );
            })}
            <LanguageSwitcher lang={lang} />
          </div>

          <button
            type="button"
            className="mob-burger"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-label={ui.mobileMenuLabel}
            style={{
              display: 'none',
              padding: '9px 14px',
              borderRadius: 50,
              border: 'none',
              background: '#ec407a',
              color: 'white',
              fontSize: 20,
              cursor: 'pointer',
            }}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        {open && (
          <div style={{ paddingBottom: 12 }}>
            <div style={{ marginBottom: 10 }}>
              <LanguageSwitcher lang={lang} compact onChange={() => setOpen(false)} />
            </div>
            {NAV_KEYS.map((key, index) => {
              const isActive = page === key;

              return (
                <NavigationLink
                  key={key}
                  href={getHref(key)}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 18px',
                    borderRadius: 50,
                    textDecoration: 'none',
                    marginBottom: 5,
                    cursor: 'pointer',
                    fontFamily: 'Fredoka, sans-serif',
                    fontSize: 15,
                    background: isActive ? NAV_COLORS[index] : '#f5f5f5',
                    color: isActive ? NAV_TEXT[index] : '#444',
                    fontWeight: 500,
                  }}
                >
                  {navigation[key]}
                </NavigationLink>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
