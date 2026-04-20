'use client';

import { useApp } from '../lib/AppContext';
import { T, NAV_KEYS, type PageKey } from '../lib/translations';

export default function Footer() {
  const { lang, setPage } = useApp();
  const t = T[lang];

  return (
    <footer style={{ background: '#1a1a2e', color: 'white', padding: '52px 24px 28px', fontFamily: 'Fredoka, sans-serif', marginTop: 80 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 32, marginBottom: 40 }}>
          <div>
            <div style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 26, color: '#ec407a', marginBottom: 10 }}>🎹 Ivana Mailleux</div>
            <p style={{ color: '#aaa', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Rixensart, Brabant-Wallon<br />Belgique 🇧🇪</p>
          </div>
          <div>
            <h4 style={{ color: '#f4d03f', marginBottom: 12, fontSize: 16, margin: '0 0 12px' }}>Navigation</h4>
            {NAV_KEYS.map(k => (
              <button key={k} onClick={() => setPage(k as PageKey)} style={{ display: 'block', background: 'none', border: 'none', color: '#aaa', cursor: 'pointer', padding: '3px 0', fontFamily: 'Fredoka, sans-serif', fontSize: 14 }}>
                {t.nav[k]}
              </button>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid #2d2d4e', paddingTop: 20, textAlign: 'center', color: '#555', fontSize: 13 }}>
          © {new Date().getFullYear()} Ivana Mailleux — Cours de Piano à Rixensart
        </div>
      </div>
    </footer>
  );
}
