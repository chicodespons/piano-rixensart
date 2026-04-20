'use client';

import { useState } from 'react';

export function PageHeader({ title, subtitle, color, emoji, textColor }: {
  title: string; subtitle?: string; color: string; emoji: string; textColor?: string;
}) {
  const tc = textColor || 'white';
  return (
    <div style={{ background: color, padding: '64px 24px 52px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -30, left: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', pointerEvents: 'none' }} />
      <div style={{ fontSize: 56, marginBottom: 14, lineHeight: 1 }}>{emoji}</div>
      <h1 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 'clamp(30px,5vw,54px)', color: tc, textShadow: '2px 3px 0 rgba(0,0,0,0.12)', marginBottom: 10, margin: '0 0 10px' }}>{title}</h1>
      {subtitle && <p style={{ fontFamily: 'Quicksand, sans-serif', fontSize: 20, color: tc === 'white' ? 'rgba(255,255,255,0.88)' : 'rgba(0,0,0,0.65)', fontWeight: 500, margin: 0 }}>{subtitle}</p>}
    </div>
  );
}

export function FeatureList({ features, color }: { features: readonly string[]; color: string }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {features.map((f, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 0', borderBottom: i < features.length - 1 ? '1px solid #f0f0f0' : 'none', fontFamily: 'Fredoka, sans-serif', fontSize: 17 }}>
          <span style={{ width: 28, height: 28, borderRadius: '50%', background: color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, flexShrink: 0, fontWeight: 700 }}>✓</span>
          {f}
        </li>
      ))}
    </ul>
  );
}

export function CTAButton({ label, onClick, color, textColor }: {
  label: string; onClick: () => void; color?: string; textColor?: string;
}) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '14px 32px', borderRadius: 50, border: 'none', cursor: 'pointer',
        fontFamily: 'Fredoka, sans-serif', fontSize: 18, fontWeight: 600,
        background: color || '#ec407a', color: textColor || 'white',
        boxShadow: hover ? '0 8px 24px rgba(0,0,0,0.22)' : '0 4px 14px rgba(0,0,0,0.14)',
        transform: hover ? 'scale(1.05) translateY(-2px)' : 'scale(1)',
        transition: 'all 0.2s'
      }}
    >{label}</button>
  );
}
