import { PageHeader, FeatureList, CTAButton } from '../shared';
import { T, type Lang, type PageKey } from '../../lib/translations';

interface ServicePageProps {
  lang: Lang;
  pageKey: Extract<PageKey, 'piano' | 'awakening' | 'theory' | 'transcription'>;
  color: string;
  emoji: string;
  textColor?: string;
}

export default function ServicePage({ lang, pageKey, color, emoji, textColor }: ServicePageProps) {
  const translations = T[lang];
  const service = translations[pageKey];
  const ui = translations.ui;
  const location = 'location' in service ? service.location : undefined;
  const offerTitle = 'offerTitle' in service ? service.offerTitle : undefined;
  const quoteNote = 'quoteNote' in service ? service.quoteNote : undefined;
  const offerButtonLabel = 'offerBtn' in service ? service.offerBtn : undefined;
  const contactHref = buildHref(lang, 'contact');
  const pricingHref = buildHref(lang, 'pricing');

  return (
    <div>
      <PageHeader title={service.title} subtitle={service.subtitle} color={color} emoji={emoji} textColor={textColor} />
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 24px' }}>
        {location ? (
          <p style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 16, color: '#888', marginBottom: 36 }}>{location}</p>
        ) : null}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48 }}>
          <div>
            {service.desc.split('\n\n').map((paragraph) => (
              <p key={paragraph} style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 18, color: '#444', lineHeight: 1.8, marginBottom: 18 }}>
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <div style={{ background: 'white', borderRadius: 20, padding: '28px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', marginBottom: 28 }}>
              <h2 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 22, color, marginBottom: 18 }}>{offerTitle || ui.learningTitle}</h2>
              <FeatureList features={service.features} color={color} />
            </div>
            {quoteNote ? (
              <div style={{ background: '#f1f8e9', borderRadius: 16, padding: '20px 24px', marginBottom: 24, borderLeft: `4px solid ${color}` }}>
                <p style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 16, color, margin: 0, fontWeight: 600 }}>{quoteNote}</p>
              </div>
            ) : null}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <CTAButton label={service.ctaBtn} href={contactHref} color={color} textColor={textColor || 'white'} />
              {offerButtonLabel ? <CTAButton label={offerButtonLabel} href={pricingHref} color="#555" /> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function buildHref(lang: Lang, page: PageKey) {
  const params = new URLSearchParams();

  if (lang !== 'fr') {
    params.set('lang', lang);
  }

  if (page !== 'home') {
    params.set('page', page);
  }

  const query = params.toString();
  return query ? `/?${query}` : '/';
}
