'use client';

import { useState } from 'react';
import { useApp } from '../lib/AppContext';
import { T, NAV_KEYS, NAV_COLORS, NAV_TEXT, type Lang, type PageKey } from '../lib/translations';

export default function Navbar() {
  const { lang, page, setLang, setPage } = useApp();
  const [open, setOpen] = useState(false);
  const t = T[lang].nav;

  const go = (key: PageKey) => { setPage(key); setOpen(false); };

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(10px)', boxShadow: '0 2px 20px rgba(0,0,0,0.08)', fontFamily: 'Fredoka, sans-serif' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

          <button onClick={() => go('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Bubblegum Sans', cursive", fontSize: 24, color: '#ec407a', display: 'flex', alignItems: 'center', gap: 8, padding: 0 }}>
            🎹 Ivana Mailleux
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexWrap: 'wrap' }} className="desk-nav">
            {NAV_KEYS.map((key, i) => (
              <button key={key} onClick={() => go(key)} style={{
                padding: '7px 13px', borderRadius: 50, border: 'none', cursor: 'pointer',
                fontFamily: 'Fredoka, sans-serif', fontSize: 13.5, fontWeight: page === key ? 600 : 400,
                background: page === key ? NAV_COLORS[i] : '#f0f0f0',
                color: page === key ? NAV_TEXT[i] : '#555',
                boxShadow: page === key ? '0 3px 10px rgba(0,0,0,0.18)' : 'none',
                transition: 'all 0.18s', transform: page === key ? 'scale(1.05)' : 'scale(1)'
              }}>{t[key]}</button>
            ))}
            <div style={{ display: 'flex', gap: 4, marginLeft: 6, borderLeft: '1px solid #eee', paddingLeft: 10 }}>
              {(['fr', 'nl', 'en'] as Lang[]).map(l => (
                <button key={l} onClick={() => setLang(l)} style={{
                  padding: '5px 10px', borderRadius: 50, border: `2px solid ${lang === l ? '#ec407a' : '#ddd'}`,
                  background: lang === l ? '#ec407a' : 'white', color: lang === l ? 'white' : '#777',
                  cursor: 'pointer', fontFamily: 'Fredoka, sans-serif', fontSize: 12, fontWeight: 700,
                  textTransform: 'uppercase', transition: 'all 0.18s'
                }}>{l}</button>
              ))}
            </div>
          </div>

          <button className="mob-burger" onClick={() => setOpen(!open)} style={{
            display: 'none', padding: '9px 14px', borderRadius: 50, border: 'none',
            background: '#ec407a', color: 'white', fontSize: 20, cursor: 'pointer'
          }}>{open ? '✕' : '☰'}</button>
        </div>

        {open && (
          <div style={{ paddingBottom: 12 }}>
            <div style={{ display: 'flex', gap: 4, marginBottom: 10 }}>
              {(['fr', 'nl', 'en'] as Lang[]).map(l => (
                <button key={l} onClick={() => setLang(l)} style={{
                  padding: '6px 12px', borderRadius: 50, border: `2px solid ${lang === l ? '#ec407a' : '#ddd'}`,
                  background: lang === l ? '#ec407a' : 'white', color: lang === l ? 'white' : '#777',
                  cursor: 'pointer', fontFamily: 'Fredoka, sans-serif', fontSize: 12, fontWeight: 700, textTransform: 'uppercase'
                }}>{l}</button>
              ))}
            </div>
            {NAV_KEYS.map((key, i) => (
              <button key={key} onClick={() => go(key)} style={{
                display: 'block', width: '100%', textAlign: 'left', padding: '10px 18px',
                borderRadius: 50, border: 'none', marginBottom: 5, cursor: 'pointer',
                fontFamily: 'Fredoka, sans-serif', fontSize: 15,
                background: page === key ? NAV_COLORS[i] : '#f5f5f5',
                color: page === key ? NAV_TEXT[i] : '#444', fontWeight: 500
              }}>{t[key]}</button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
