import Image from 'next/image';
import { CTAButton } from '../shared';
import { T, type Lang, type PageKey } from '../../lib/translations';

interface HomePageProps {
  lang: Lang;
}

interface ServiceCardProps {
  service: {
    key: PageKey;
    emoji: string;
    color: string;
    title: string;
    description: string;
  };
  learnMoreLabel: string;
  href: string;
}

export default function HomePage({ lang }: HomePageProps) {
  const translations = T[lang];
  const home = translations.home;
  const pricing = translations.pricing;
  const ui = translations.ui;

  const services: ServiceCardProps['service'][] = [
    {
      key: 'piano',
      emoji: '🎹',
      color: '#ec407a',
      title: home.pianoTitle,
      description: home.pianoDesc,
    },
    {
      key: 'awakening',
      emoji: '🌟',
      color: '#ff9800',
      title: home.awakeningTitle,
      description: home.awakeningDesc,
    },
    {
      key: 'theory',
      emoji: '🎼',
      color: '#42a5f5',
      title: home.theoryTitle,
      description: home.theoryDesc,
    },
    {
      key: 'transcription',
      emoji: '📝',
      color: '#2e7d32',
      title: home.transcriptionTitle,
      description: home.transcriptionDesc,
    },
  ];

  const getHref = (page: PageKey) => {
    const params = new URLSearchParams();

    if (lang !== 'fr') {
      params.set('lang', lang);
    }

    if (page !== 'home') {
      params.set('page', page);
    }

    const query = params.toString();
    return query ? `/?${query}` : '/';
  };

  return (
    <div>
      <section
        style={{
          position: 'relative',
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/piano-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.35)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '48px 24px', maxWidth: 860, margin: '0 auto' }}>
          <h1
            style={{
              fontFamily: "'Bubblegum Sans', cursive",
              fontSize: 'clamp(36px,6vw,72px)',
              color: 'white',
              textShadow: '2px 4px 12px rgba(0,0,0,0.5)',
              marginBottom: 16,
              lineHeight: 1.15,
            }}
          >
            🎵 {home.heroTitle} 🎶
          </h1>
          <p
            style={{
              fontFamily: 'Quicksand, sans-serif',
              fontSize: 'clamp(18px,2.5vw,26px)',
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            {home.heroSubtitle}
          </p>
          <p
            style={{
              fontFamily: 'Fredoka, sans-serif',
              fontSize: 'clamp(15px,2vw,21px)',
              color: 'rgba(255,255,255,0.8)',
              maxWidth: 640,
              margin: '0 auto 40px',
              lineHeight: 1.6,
            }}
          >
            {home.heroDesc}
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <CTAButton label={home.bookBtn} href={getHref('contact')} color="#ec407a" />
            <CTAButton label={home.discoverBtn} href={getHref('piano')} color="#42a5f5" />
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px 40px' }}>
        <h2
          style={{
            fontFamily: "'Bubblegum Sans', cursive",
            fontSize: 42,
            textAlign: 'center',
            color: '#333',
            marginBottom: 48,
          }}
        >
          {home.servicesTitle}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {services.map((service) => (
            <ServiceCard
              key={service.key}
              service={service}
              href={getHref(service.key)}
              learnMoreLabel={home.learnMore}
            />
          ))}
        </div>
      </section>

      <section
        style={{
          background: 'linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)',
          margin: '0 24px 72px',
          borderRadius: 28,
          padding: '40px 36px',
          maxWidth: 1152,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ fontSize: 52, flexShrink: 0 }}>♿</div>
          <div>
            <h2 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 28, color: '#333', marginBottom: 8 }}>
              {home.inclusiveTitle}
            </h2>
            <p style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 17, color: '#555', lineHeight: 1.65, maxWidth: 700, margin: 0 }}>
              {home.inclusiveDesc}
            </p>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto 80px', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <Image
              src="/ivana.jpg"
              alt={ui.homePortraitAlt}
              width={260}
              height={260}
              priority
              style={{ borderRadius: '50%', objectFit: 'cover', border: '6px solid #ec407a', boxShadow: '0 8px 32px rgba(236,64,122,0.3)' }}
            />
          </div>
          <div>
            <h2 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 38, color: '#333', marginBottom: 14 }}>{home.meetTitle}</h2>
            <p style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 18, color: '#555', lineHeight: 1.7, marginBottom: 24 }}>{home.meetDesc}</p>
            <CTAButton label={home.meetBtn} href={getHref('about')} color="#ec407a" />
          </div>
        </div>
      </section>

      <section style={{ background: '#1a1a2e', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Bubblegum Sans', cursive",
              fontSize: 40,
              color: 'white',
              textAlign: 'center',
              marginBottom: 40,
            }}
          >
            🎵 {home.pricingPreviewTitle}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 32 }}>
            {pricing.plans.map((plan) => (
              <div
                key={`${plan.name}-${plan.price}`}
                style={{ background: plan.color, borderRadius: 20, padding: '28px 24px', textAlign: 'center', color: plan.textColor }}
              >
                {plan.badge ? (
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      background: 'rgba(255,255,255,0.25)',
                      borderRadius: 20,
                      padding: '3px 12px',
                      display: 'inline-block',
                      marginBottom: 10,
                      fontFamily: 'Fredoka, sans-serif',
                    }}
                  >
                    {plan.badge}
                  </div>
                ) : null}
                <div style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 44 }}>
                  {plan.price}
                  <span style={{ fontSize: 18 }}>{plan.unit}</span>
                </div>
                <div style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 14, marginTop: 6, opacity: 0.85 }}>{plan.slots}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <CTAButton label={home.pricingBtn} href={getHref('pricing')} color="#f4d03f" textColor="#333" />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ service, href, learnMoreLabel }: ServiceCardProps) {
  return (
    <article
      style={{
        background: 'white',
        borderRadius: 24,
        padding: '32px 24px',
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        fontFamily: 'Fredoka, sans-serif',
      }}
    >
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          background: service.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          fontSize: 32,
        }}
      >
        {service.emoji}
      </div>
      <h3 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 22, color: '#333', marginBottom: 10 }}>{service.title}</h3>
      <p style={{ color: '#666', fontSize: 15, lineHeight: 1.6, margin: '0 0 16px' }}>{service.description}</p>
      <CTAButton label={learnMoreLabel} href={href} color={service.color} />
    </article>
  );
}
