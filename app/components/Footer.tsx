import NavigationLink from './NavigationLink';
import { NAV_KEYS, T, type Lang, type PageKey } from '../lib/translations';

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const translations = T[lang];
  const ui = translations.ui;

  const getHref = (key: PageKey) => {
    const params = new URLSearchParams();

    if (lang !== 'fr') {
      params.set('lang', lang);
    }

    if (key !== 'home') {
      params.set('page', key);
    }

    const query = params.toString();
    return query ? `/?${query}` : '/';
  };

  return (
    <footer
      style={{
        background: '#1a1a2e',
        color: 'white',
        padding: '52px 24px 28px',
        fontFamily: 'Fredoka, sans-serif',
        marginTop: 80,
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 32,
            marginBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Bubblegum Sans', cursive",
                fontSize: 26,
                color: '#ec407a',
                marginBottom: 10,
              }}
            >
              🎹 Ivana Mailleux
            </div>
            <p style={{ color: '#aaa', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              Rixensart, Brabant-Wallon
              <br />
              Belgique 🇧🇪
            </p>
          </div>
          <div>
            <h4 style={{ color: '#f4d03f', margin: '0 0 12px', fontSize: 16 }}>{ui.footerNavigation}</h4>
            {NAV_KEYS.map((key) => (
              <NavigationLink
                key={key}
                href={getHref(key)}
                style={{
                  display: 'block',
                  color: '#aaa',
                  textDecoration: 'none',
                  padding: '3px 0',
                  fontFamily: 'Fredoka, sans-serif',
                  fontSize: 14,
                }}
              >
                {translations.nav[key]}
              </NavigationLink>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid #2d2d4e', paddingTop: 20, textAlign: 'center', color: '#555', fontSize: 13 }}>
          © {new Date().getFullYear()} {ui.copyright}
        </div>
      </div>
    </footer>
  );
}
