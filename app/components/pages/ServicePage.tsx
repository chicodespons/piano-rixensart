'use client';

import { useApp } from '../../lib/AppContext';
import { PageHeader, FeatureList, CTAButton } from '../shared';
import type { PageKey } from '../../lib/translations';

interface ServiceData {
  title: string;
  subtitle: string;
  location?: string;
  desc: string;
  features: readonly string[];
  ctaBtn: string;
  offerBtn?: string;
  quoteNote?: string;
  offerTitle?: string;
}

interface Props {
  t: ServiceData;
  color: string;
  emoji: string;
  textColor?: string;
  children?: React.ReactNode;
}

export default function ServicePage({ t, color, emoji, textColor, children }: Props) {
  const { setPage } = useApp();

  return (
    <div>
      <PageHeader title={t.title} subtitle={t.subtitle} color={color} emoji={emoji} textColor={textColor} />
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 24px' }}>
        {t.location && (
          <p style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 16, color: '#888', marginBottom: 36 }}>{t.location}</p>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
          <div>
            {t.desc.split('\n\n').map((para, i) => (
              <p key={i} style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 18, color: '#444', lineHeight: 1.8, marginBottom: 18 }}>{para}</p>
            ))}
          </div>
          <div>
            <div style={{ background: 'white', borderRadius: 20, padding: '28px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', marginBottom: 28 }}>
              <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 22, color, marginBottom: 18 }}>
                {t.offerTitle || 'Ce que vous apprendrez'}
              </h3>
              <FeatureList features={t.features} color={color} />
            </div>
            {t.quoteNote && (
              <div style={{ background: '#f1f8e9', borderRadius: 16, padding: '20px 24px', marginBottom: 24, borderLeft: `4px solid ${color}` }}>
                <p style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 16, color, margin: 0, fontWeight: 600 }}>{t.quoteNote}</p>
              </div>
            )}
            {children}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <CTAButton label={t.ctaBtn} onClick={() => setPage('contact')} color={color} textColor={textColor || 'white'} />
              {t.offerBtn && (
                <CTAButton label={t.offerBtn} onClick={() => setPage('pricing')} color="#555" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
