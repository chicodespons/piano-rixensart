import { T, type Lang, type PageKey } from './translations';

export const SITE_URL = 'https://pianorixensart.be';
export const SITE_NAME = 'Piano Rixensart';
export const DEFAULT_LANGUAGE: Lang = 'fr';
export const DEFAULT_PAGE: PageKey = 'home';
export const LANGUAGE_LOCALES: Record<Lang, string> = {
  fr: 'fr-BE',
  nl: 'nl-BE',
  en: 'en-BE',
};

export const SUPPORTED_LANGUAGES: Lang[] = ['fr', 'nl', 'en'];

export const PAGE_ORDER: PageKey[] = [
  'home',
  'about',
  'piano',
  'theory',
  'transcription',
  'pricing',
  'contact',
];

export const PAGE_ACCENT_COLORS: Record<PageKey, string> = {
  home: '#ec407a',
  about: '#ff9800',
  piano: '#ec407a',
  theory: '#42a5f5',
  transcription: '#2e7d32',
  pricing: '#ef5350',
  contact: '#00bcd4',
};

export const PAGE_TEXT_COLORS: Record<PageKey, string> = {
  home: 'white',
  about: 'white',
  piano: 'white',
  theory: 'white',
  transcription: 'white',
  pricing: 'white',
  contact: 'white',
};

export const LANGUAGE_LABELS: Record<Lang, string> = {
  fr: 'Français',
  nl: 'Nederlands',
  en: 'English',
};

export const BUSINESS_DETAILS = {
  name: 'Ivana Mailleux',
  email: 'info@pianorixensart.be',
  areaServed: 'Rixensart, Brabant-Wallon, Belgique',
  image: '/ivana.jpg',
};

export function isLang(value: string | null): value is Lang {
  return SUPPORTED_LANGUAGES.includes(value as Lang);
}

export function isPageKey(value: string | null): value is PageKey {
  return PAGE_ORDER.includes(value as PageKey);
}

export function getPageCopy(lang: Lang, page: PageKey) {
  switch (page) {
    case 'home':
      return {
        title: T[lang].home.heroTitle,
        description: T[lang].home.heroDesc,
      };
    case 'about':
      return {
        title: T[lang].about.title,
        description: T[lang].about.bio.split('\n\n')[0],
      };
    case 'piano':
    case 'theory':
    case 'transcription':
      return {
        title: T[lang][page].title,
        description: T[lang][page].desc.split('\n\n')[0],
      };
    case 'pricing':
      return {
        title: T[lang].pricing.title,
        description: `${T[lang].pricing.subtitle}. ${T[lang].pricing.transcriptionNote}`,
      };
    case 'contact':
      return {
        title: T[lang].contact.title,
        description: T[lang].contact.subtitle,
      };
    default:
      return {
        title: T[lang].home.heroTitle,
        description: T[lang].home.heroDesc,
      };
  }
}

export function buildPageTitle(lang: Lang, page: PageKey) {
  const pageCopy = getPageCopy(lang, page);
  return `${pageCopy.title} | ${BUSINESS_DETAILS.name} | ${SITE_NAME}`;
}

export function buildPageDescription(lang: Lang, page: PageKey) {
  return getPageCopy(lang, page).description;
}

export function buildCanonicalUrl(lang: Lang, page: PageKey) {
  const params = new URLSearchParams();
  if (lang !== DEFAULT_LANGUAGE) {
    params.set('lang', lang);
  }
  if (page !== DEFAULT_PAGE) {
    params.set('page', page);
  }

  const query = params.toString();
  return query ? `${SITE_URL}/?${query}` : `${SITE_URL}/`;
}

export function buildKeywords(lang: Lang) {
  const common = [
    'piano lessons Rixensart',
    'cours de piano Rixensart',
    'piano teacher Brabant Wallon',
    'solfège Rixensart',
    'éveil musical Rixensart',
    'music theory lessons Belgium',
    'musical transcription service',
    'inclusive music lessons',
    BUSINESS_DETAILS.name,
  ];

  const localized = {
    fr: ['cours de piano à domicile', 'professeure de piano Rixensart', 'cours de musique Brabant-Wallon'],
    nl: ['pianoles Rixensart', 'muziekles Brabant-Wallon', 'muzikale transcriptie België'],
    en: ['piano lessons in Belgium', 'music lessons for children and adults', 'private piano teacher Rixensart'],
  } satisfies Record<Lang, string[]>;

  return [...common, ...localized[lang]];
}

export function buildAlternateLanguages(page: PageKey) {
  return {
    ...Object.fromEntries(
      SUPPORTED_LANGUAGES.map((lang) => [LANGUAGE_LOCALES[lang], buildCanonicalUrl(lang, page)]),
    ),
    'x-default': buildCanonicalUrl(DEFAULT_LANGUAGE, page),
  };
}
