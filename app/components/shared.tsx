'use client';

import { useState } from 'react';
import NavigationLink from './NavigationLink';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  color: string;
  emoji: string;
  textColor?: string;
}

export function PageHeader({ title, subtitle, color, emoji, textColor }: PageHeaderProps) {
  const foreground = textColor ?? 'white';

  return (
    <div
      style={{
        background: color,
        padding: '64px 24px 52px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -40,
          right: -40,
          width: 160,
          height: 160,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.12)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -30,
          left: -30,
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ fontSize: 56, marginBottom: 14, lineHeight: 1 }}>{emoji}</div>
      <h1
        style={{
          fontFamily: "'Bubblegum Sans', cursive",
          fontSize: 'clamp(30px,5vw,54px)',
          color: foreground,
          textShadow: '2px 3px 0 rgba(0,0,0,0.12)',
          margin: '0 0 10px',
        }}
      >
        {title}
      </h1>
      {subtitle ? (
        <p
          style={{
            fontFamily: 'Quicksand, sans-serif',
            fontSize: 20,
            color: foreground === 'white' ? 'rgba(255,255,255,0.88)' : 'rgba(0,0,0,0.65)',
            fontWeight: 500,
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function FeatureList({ features, color, checkColor = 'white' }: { features: readonly string[]; color: string; checkColor?: string }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {features.map((feature, index) => (
        <li
          key={feature}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '11px 0',
            borderBottom: index < features.length - 1 ? '1px solid #f0f0f0' : 'none',
            fontFamily: 'Fredoka, sans-serif',
            fontSize: 17,
          }}
        >
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: color,
              color: checkColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 14,
              flexShrink: 0,
              fontWeight: 700,
            }}
          >
            ✓
          </span>
          {feature}
        </li>
      ))}
    </ul>
  );
}

interface CTAButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  color?: string;
  textColor?: string;
  buttonType?: 'button' | 'submit' | 'reset';
}

export function CTAButton({
  label,
  href,
  onClick,
  color = '#ec407a',
  textColor = 'white',
  buttonType = 'button',
}: CTAButtonProps) {
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const transform = pressed ? 'scale(0.97) translateY(1px)' : hover ? 'scale(1.05) translateY(-2px)' : 'scale(1)';
  const boxShadow = pressed ? '0 2px 8px rgba(0,0,0,0.16)' : hover ? '0 8px 24px rgba(0,0,0,0.22)' : '0 4px 14px rgba(0,0,0,0.14)';
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '14px 32px',
    borderRadius: 50,
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: 'Fredoka, sans-serif',
    fontSize: 18,
    fontWeight: 600,
    background: color,
    color: textColor,
    boxShadow,
    transform,
    transition: 'all 0.16s ease',
    willChange: 'transform, box-shadow',
  } as const;

  if (href) {
    return (
      <NavigationLink
        href={href}
        onClick={() => {
          setPressed(true);
          window.setTimeout(() => setPressed(false), 140);
          onClick?.();
        }}
        style={baseStyle}
      >
        {label}
      </NavigationLink>
    );
  }

  return (
    <button
      type={buttonType}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPressed(false);
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          setPressed(true);
        }
      }}
      onKeyUp={() => setPressed(false)}
      style={baseStyle}
    >
      {label}
    </button>
  );
}
