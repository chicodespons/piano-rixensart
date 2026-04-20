import Image from 'next/image';
import { PageHeader, FeatureList, CTAButton } from '../shared';
import { T, type Lang } from '../../lib/translations';

interface AboutPageProps {
  lang: Lang;
}

export default function AboutPage({ lang }: AboutPageProps) {
  const translations = T[lang];
  const about = translations.about;
  const contact = translations.contact;
  const ui = translations.ui;

  const params = new URLSearchParams();
  if (lang !== 'fr') {
    params.set('lang', lang);
  }
  params.set('page', 'contact');

  return (
    <div>
      <PageHeader title={about.title} subtitle={about.subtitle} color="#ec407a" emoji="🎹" />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 56, alignItems: 'start' }}>
          <div style={{ textAlign: 'center' }}>
            <Image
              src="/ivana.jpg"
              alt={ui.portraitAlt}
              width={280}
              height={280}
              style={{ borderRadius: '50%', objectFit: 'cover', border: '6px solid #ec407a', boxShadow: '0 10px 40px rgba(236,64,122,0.25)', marginBottom: 32 }}
            />
            <div style={{ background: 'white', borderRadius: 20, padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', textAlign: 'left' }}>
              <h2 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 22, color: '#ec407a', marginBottom: 14 }}>⭐ {about.specialtiesTitle}</h2>
              <FeatureList features={about.specialties} color="#ec407a" />
            </div>
          </div>
          <div>
            {about.bio.split('\n\n').map((paragraph) => (
              <p key={paragraph} style={{ fontFamily: 'Fredoka, sans-serif', fontSize: 18, color: '#444', lineHeight: 1.8, marginBottom: 20 }}>
                {paragraph}
              </p>
            ))}
            <div style={{ background: 'linear-gradient(135deg,#f3e5f5,#e3f2fd)', borderRadius: 20, padding: '24px 28px', marginTop: 24 }}>
              <h2 style={{ fontFamily: "'Bubblegum Sans', cursive", fontSize: 22, color: '#333', marginBottom: 14 }}>🎵 {about.projectsTitle}</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {about.projects.map((project, index) => (
                  <li
                    key={project}
                    style={{
                      fontFamily: 'Fredoka, sans-serif',
                      fontSize: 17,
                      color: '#444',
                      padding: '7px 0',
                      borderBottom: index < about.projects.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                    }}
                  >
                    {project}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ marginTop: 32 }}>
              <CTAButton label={contact.submitBtn} href={`/?${params.toString()}`} color="#ec407a" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
