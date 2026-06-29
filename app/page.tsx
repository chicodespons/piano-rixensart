import type { Metadata } from 'next';
import type { Lang, PageKey } from './lib/translations';
import MainAppShell from './components/MainAppShell';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ServicePage from './components/pages/ServicePage';
import PricingPage from './components/pages/PricingPage';
import ContactPage from './components/pages/ContactPage';
import {
  buildAlternateLanguages,
  buildCanonicalUrl,
  buildKeywords,
  buildPageDescription,
  buildPageTitle,
  BUSINESS_DETAILS,
  DEFAULT_LANGUAGE,
  DEFAULT_PAGE,
  getPageCopy,
  isLang,
  isPageKey,
  LANGUAGE_LOCALES,
  SITE_NAME,
  SITE_URL,
} from './lib/site-data';
import { T } from './lib/translations';

interface HomePageProps {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

function getStringParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function getResolvedState(params: Record<string, string | string[] | undefined>) {
  const langParam = getStringParam(params.lang);
  const pageParam = getStringParam(params.page);

  const lang: Lang = isLang(langParam ?? null) ? (langParam as Lang) : DEFAULT_LANGUAGE;
  const page: PageKey = isPageKey(pageParam ?? null) ? (pageParam as PageKey) : DEFAULT_PAGE;

  return { lang, page };
}

export async function generateMetadata({ searchParams }: HomePageProps): Promise<Metadata> {
  const params = (await searchParams) ?? {};
  const { lang, page } = getResolvedState(params);
  const canonical = buildCanonicalUrl(lang, page);

  return {
    metadataBase: new URL(SITE_URL),
    title: buildPageTitle(lang, page),
    description: buildPageDescription(lang, page),
    keywords: buildKeywords(lang),
    alternates: {
      canonical,
      languages: buildAlternateLanguages(page),
    },
    openGraph: {
      type: 'website',
      url: canonical,
      title: buildPageTitle(lang, page),
      description: buildPageDescription(lang, page),
      siteName: SITE_NAME,
      locale: LANGUAGE_LOCALES[lang],
      images: [
        {
          url: BUSINESS_DETAILS.image,
          width: 1200,
          height: 630,
          alt: BUSINESS_DETAILS.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: buildPageTitle(lang, page),
      description: buildPageDescription(lang, page),
      images: [BUSINESS_DETAILS.image],
    },
  };
}

export default async function Home({ searchParams }: HomePageProps) {
  const params = (await searchParams) ?? {};
  const { lang, page } = getResolvedState(params);

  return (
    <>
      <StructuredData lang={lang} page={page} />
      <MainAppShell lang={lang} page={page}>
        <CurrentPage lang={lang} page={page} />
      </MainAppShell>
    </>
  );
}

function CurrentPage({ lang, page }: { lang: Lang; page: PageKey }) {
  switch (page) {
    case 'home':
      return <HomePage lang={lang} />;
    case 'about':
      return <AboutPage lang={lang} />;
    case 'piano':
      return <ServicePage lang={lang} pageKey="piano" color="#ec407a" emoji="🎹" />;
    case 'theory':
      return <ServicePage lang={lang} pageKey="theory" color="#42a5f5" emoji="🎼" />;
    case 'transcription':
      return <ServicePage lang={lang} pageKey="transcription" color="#2e7d32" emoji="📝" />;
    case 'pricing':
      return <PricingPage lang={lang} />;
    case 'contact':
      return <ContactPage lang={lang} />;
    default:
      return <HomePage lang={lang} />;
  }
}

function StructuredData({ lang, page }: { lang: Lang; page: PageKey }) {
  const pageCopy = getPageCopy(lang, page);
  const canonical = buildCanonicalUrl(lang, page);
  const translations = T[lang];
  const ui = translations.ui;

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'MusicSchool',
    '@id': `${SITE_URL}/#music-school`,
    name: BUSINESS_DETAILS.name,
    alternateName: SITE_NAME,
    description: ui.structuredDataDescription,
    url: SITE_URL,
    image: `${SITE_URL}${BUSINESS_DETAILS.image}`,
    email: BUSINESS_DETAILS.email,
    areaServed: BUSINESS_DETAILS.areaServed,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rixensart',
      addressRegion: 'Brabant-Wallon',
      addressCountry: 'BE',
    },
    knowsLanguage: ['fr', 'nl', 'en'],
    offers: [
      T[lang].piano.title,
      T[lang].theory.title,
      T[lang].transcription.title,
    ],
  };

  const serviceSchemaByPage: Partial<Record<PageKey, Record<string, unknown>>> = {
    piano: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: translations.piano.title,
      description: translations.piano.desc,
      provider: { '@id': `${SITE_URL}/#music-school` },
      areaServed: BUSINESS_DETAILS.areaServed,
      serviceType: translations.piano.title,
      offers: {
        '@type': 'Offer',
        url: canonical,
        availability: 'https://schema.org/InStock',
      },
    },
    theory: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: translations.theory.title,
      description: translations.theory.desc,
      provider: { '@id': `${SITE_URL}/#music-school` },
      areaServed: BUSINESS_DETAILS.areaServed,
      serviceType: translations.theory.title,
    },
    transcription: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: translations.transcription.title,
      description: translations.transcription.desc,
      provider: { '@id': `${SITE_URL}/#music-school` },
      areaServed: BUSINESS_DETAILS.areaServed,
      serviceType: translations.transcription.title,
    },
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageCopy.title,
    description: pageCopy.description,
    url: canonical,
    inLanguage: LANGUAGE_LOCALES[lang],
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      '@id': `${SITE_URL}/#music-school`,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      {serviceSchemaByPage[page] ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemaByPage[page]) }} />
      ) : null}
    </>
  );
}
