'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { LANGUAGE_LABELS, SUPPORTED_LANGUAGES } from '../lib/site-data';
import { T, type Lang } from '../lib/translations';

interface LanguageSwitcherProps {
  lang: Lang;
  compact?: boolean;
  onChange?: () => void;
}

export default function LanguageSwitcher({ lang, compact = false, onChange }: LanguageSwitcherProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ui = T[lang].ui;

  const updateLanguage = (nextLang: Lang) => {
    const params = new URLSearchParams(searchParams.toString());

    if (nextLang === 'fr') {
      params.delete('lang');
    } else {
      params.set('lang', nextLang);
    }

    const query = params.toString();
    router.push(query ? `/?${query}` : '/');
    onChange?.();
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: 4,
        marginLeft: compact ? 0 : 6,
        borderLeft: compact ? 'none' : '1px solid #eee',
        paddingLeft: compact ? 0 : 10,
      }}
    >
      {SUPPORTED_LANGUAGES.map((language) => (
        <button
          key={language}
          type="button"
          onClick={() => updateLanguage(language)}
          aria-label={`${ui.switchLanguageLabel} ${LANGUAGE_LABELS[language]}`}
          aria-pressed={lang === language}
          style={{
            padding: compact ? '6px 12px' : '5px 10px',
            borderRadius: 50,
            border: `2px solid ${lang === language ? '#ec407a' : '#ddd'}`,
            background: lang === language ? '#ec407a' : 'white',
            color: lang === language ? 'white' : '#777',
            cursor: 'pointer',
            fontFamily: 'Fredoka, sans-serif',
            fontSize: 12,
            fontWeight: 700,
            textTransform: 'uppercase',
            transition: 'all 0.18s',
          }}
        >
          {language}
        </button>
      ))}
    </div>
  );
}
