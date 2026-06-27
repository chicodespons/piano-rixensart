import type { MetadataRoute } from 'next';
import { buildCanonicalUrl, PAGE_ORDER, SUPPORTED_LANGUAGES } from './lib/site-data';

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGE_ORDER.flatMap((page) =>
    SUPPORTED_LANGUAGES.map((lang) => ({
      url: buildCanonicalUrl(lang, page),
      lastModified: new Date(),
      changeFrequency: page === 'home' ? 'weekly' : 'monthly',
      priority: page === 'home' ? 1 : page === 'contact' ? 0.9 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          SUPPORTED_LANGUAGES.map((language) => [language, buildCanonicalUrl(language, page)]),
        ),
      },
    })),
  );
}
