'use client';

import { useApp } from '../../lib/AppContext';
import { T } from '../../lib/translations';
import { PageHeader, CTAButton } from '../shared';

export default function PricingPage() {
  const { lang, setPage } = useApp();
  const t = T[lang].pricing;

  return (
    <div>
      <PageHeader title={t.title} subtitle={t.subtitle} color="#9c27b0" emoji="💰" />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28, marginBottom: 48 }}>
          {t.plans.map((p, i) => (
            <div key={i} style={{ background: p.color, borderRadius: 28, padding: '36px 28px', position: 'relative', boxShadow: '0 8px 32px rgba(0,0,0,0.12)', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }} />
              {p.badge && (
                <div style={{ fontSize: 12, fontWeight: 700, background: 'rgba(255,255,255,0.28)', borderRadius: 20, padding: '4px 14px', display: 'inline-block', marginBottom: 16, fontFamily: 'Fredoka, sans-serif', color: p.textColor }}>
                  {p.badge}
                </div>
              )}
              <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 24, color: p.textColor, marginBottom: 12 }}>{p.name}</h3>
              <div style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 56, color: p.textColor, lineHeight: 1, marginBottom: 4 }}>
                {p.price}<span style={{ fontSize: 20 }}>{p.unit}</span>
              </div>
              <div style={{ height: 2, background: 'rgba(255,255,255,0.3)', margin: '16px 0' }} />
              <div style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 15, color: p.textColor, opacity: 0.9, marginBottom: 6 }}>🕐 {p.slots}</div>
              <div style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 14, color: p.textColor, opacity: 0.8 }}>📚 {p.lessons}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#fafafa', borderRadius: 16, padding: '24px 28px', marginBottom: 32, fontFamily: 'Fredoka, sans-serif', fontSize: 15, color: '#555', lineHeight: 1.8 }}>
          <p style={{ marginBottom: 6 }}>{t.note1}</p>
          <p style={{ margin: 0 }}>{t.note2}</p>
        </div>

        <div style={{ background: '#f1f8e9', borderRadius: 16, padding: '20px 28px', marginBottom: 40, borderLeft: '4px solid #2e7d32' }}>
          <p style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 16, color: '#2e7d32', margin: 0 }}>📝 {t.transcriptionNote}</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <CTAButton label={t.ctaBtn} onClick={() => setPage('contact')} color="#ec407a" />
        </div>
      </div>
    </div>
  );
}
