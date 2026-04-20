'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useApp } from '../../lib/AppContext';
import { T } from '../../lib/translations';
import { CTAButton } from '../shared';

export default function HomePage() {
  const { lang, setPage } = useApp();
  const t = T[lang].home;
  const pricing = T[lang].pricing;

  const services = [
    { key: 'piano' as const, emoji: '🎹', color: '#ec407a', title: t.pianoTitle, desc: t.pianoDesc },
    { key: 'awakening' as const, emoji: '🌟', color: '#ff9800', title: t.awakeningTitle, desc: t.awakeningDesc },
    { key: 'theory' as const, emoji: '🎼', color: '#42a5f5', title: t.theoryTitle, desc: t.theoryDesc },
    { key: 'transcription' as const, emoji: '📝', color: '#2e7d32', title: t.transcriptionTitle, desc: t.transcriptionDesc },
  ];

  return (
    <div>
      {/* Hero */}
      <div style={{ position: 'relative', minHeight: '88vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/piano-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.35)' }} />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '48px 24px', maxWidth: 860, margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 'clamp(36px,6vw,72px)', color: 'white', textShadow: '2px 4px 12px rgba(0,0,0,0.5)', marginBottom: 16, lineHeight: 1.15 }}>
            🎵 {t.heroTitle} 🎶
          </h1>
          <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: 'clamp(18px,2.5vw,26px)', color: 'rgba(255,255,255,0.9)', fontWeight: 600, marginBottom: 12 }}>{t.heroSubtitle}</p>
          <p style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 'clamp(15px,2vw,21px)', color: 'rgba(255,255,255,0.8)', marginBottom: 40, maxWidth: 640, margin: '0 auto 40px' }}>{t.heroDesc}</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <CTAButton label={t.bookBtn} onClick={() => setPage('contact')} color="#ec407a" />
            <CTAButton label={t.discoverBtn} onClick={() => setPage('piano')} color="#42a5f5" />
          </div>
        </div>
      </div>

      {/* Services */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px 40px' }}>
        <h2 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 42, textAlign: 'center', color: '#333', marginBottom: 48 }}>{t.servicesTitle}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {services.map(s => (
            <ServiceCard key={s.key} s={s} onClick={() => setPage(s.key)} learnMore={t.learnMore} />
          ))}
        </div>
      </div>

      {/* Inclusive banner */}
      <div style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)', margin: '0 24px 72px', borderRadius: 28, padding: '40px 36px', maxWidth: 1152, marginLeft: 'auto', marginRight: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 52, flexShrink: 0 }}>♿</div>
          <div>
            <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 28, color: '#333', marginBottom: 8 }}>{t.inclusiveTitle}</h3>
            <p style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 17, color: '#555', lineHeight: 1.65, maxWidth: 700, margin: 0 }}>{t.inclusiveDesc}</p>
          </div>
        </div>
      </div>

      {/* Meet Ivana */}
      <div style={{ maxWidth: 1100, margin: '0 auto 80px', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <Image src="/ivana.jpg" alt="Ivana Mailleux" width={260} height={260} style={{ borderRadius: '50%', objectFit: 'cover', border: '6px solid #ec407a', boxShadow: '0 8px 32px rgba(236,64,122,0.3)' }} />
          </div>
          <div>
            <h2 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 38, color: '#333', marginBottom: 14 }}>{t.meetTitle}</h2>
            <p style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 18, color: '#555', lineHeight: 1.7, marginBottom: 24 }}>{t.meetDesc}</p>
            <CTAButton label={t.meetBtn} onClick={() => setPage('about')} color="#ec407a" />
          </div>
        </div>
      </div>

      {/* Pricing preview */}
      <div style={{ background: '#1a1a2e', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 40, color: 'white', textAlign: 'center', marginBottom: 40 }}>🎵 {t.pricingPreviewTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 32 }}>
            {pricing.plans.map((p, i) => (
              <div key={i} style={{ background: p.color, borderRadius: 20, padding: '28px 24px', textAlign: 'center', color: p.textColor }}>
                {p.badge && <div style={{ fontSize: 12, fontWeight: 700, background: 'rgba(255,255,255,0.25)', borderRadius: 20, padding: '3px 12px', display: 'inline-block', marginBottom: 10, fontFamily: 'Fredoka, sans-serif' }}>{p.badge}</div>}
                <div style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 44 }}>{p.price}<span style={{ fontSize: 18 }}>{p.unit}</span></div>
                <div style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 14, marginTop: 6, opacity: 0.85 }}>{p.slots}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <CTAButton label={t.pricingBtn} onClick={() => setPage('pricing')} color="#f4d03f" textColor="#333" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ s, onClick, learnMore }: { s: { emoji: string; color: string; title: string; desc: string }; onClick: () => void; learnMore: string }) {
  const [hover, setHover] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'white', border: 'none', borderRadius: 24, padding: '32px 24px',
        textAlign: 'center', cursor: 'pointer',
        boxShadow: hover ? '0 12px 32px rgba(0,0,0,0.14)' : '0 4px 20px rgba(0,0,0,0.08)',
        transition: 'all 0.22s', fontFamily: 'Fredoka, sans-serif',
        transform: hover ? 'translateY(-6px)' : 'translateY(0)'
      }}
    >
      <div style={{ width: 72, height: 72, borderRadius: '50%', background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 32 }}>{s.emoji}</div>
      <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 22, color: '#333', marginBottom: 10 }}>{s.title}</h3>
      <p style={{ color: '#666', fontSize: 15, lineHeight: 1.6, margin: '0 0 16px' }}>{s.desc}</p>
      <div style={{ color: s.color, fontWeight: 600, fontSize: 14 }}>{learnMore}</div>
    </button>
  );
}
