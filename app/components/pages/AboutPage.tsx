'use client';

import Image from 'next/image';
import { useApp } from '../../lib/AppContext';
import { T } from '../../lib/translations';
import { PageHeader, FeatureList, CTAButton } from '../shared';

export default function AboutPage() {
  const { lang, setPage } = useApp();
  const t = T[lang].about;

  return (
    <div>
      <PageHeader title={t.title} subtitle={t.subtitle} color="#ec407a" emoji="🎹" />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56, alignItems: 'start' }}>
          <div style={{ textAlign: 'center' }}>
            <Image src="/ivana.jpg" alt="Ivana Mailleux" width={280} height={280} style={{ borderRadius: '50%', objectFit: 'cover', border: '6px solid #ec407a', boxShadow: '0 10px 40px rgba(236,64,122,0.25)', marginBottom: 32 }} />
            <div style={{ background: 'white', borderRadius: 20, padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', textAlign: 'left' }}>
              <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 22, color: '#ec407a', marginBottom: 14 }}>⭐ {t.specialtiesTitle}</h3>
              <FeatureList features={t.specialties} color="#ec407a" />
            </div>
          </div>
          <div>
            {t.bio.split('\n\n').map((para, i) => (
              <p key={i} style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 18, color: '#444', lineHeight: 1.8, marginBottom: 20 }}>{para}</p>
            ))}
            <div style={{ background: 'linear-gradient(135deg,#f3e5f5,#e3f2fd)', borderRadius: 20, padding: '24px 28px', marginTop: 24 }}>
              <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 22, color: '#333', marginBottom: 14 }}>🎵 {t.projectsTitle}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {t.projects.map((p, i) => (
                  <li key={i} style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 17, color: '#444', padding: '7px 0', borderBottom: i < t.projects.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none' }}>{p}</li>
                ))}
              </ul>
            </div>
            <div style={{ marginTop: 32 }}>
              <CTAButton label={T[lang].contact.submitBtn} onClick={() => setPage('contact')} color="#ec407a" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
