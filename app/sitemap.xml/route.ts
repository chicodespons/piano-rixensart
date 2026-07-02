
import {
  buildCanonicalUrl,
  DEFAULT_LANGUAGE,
  PAGE_ORDER,
  SUPPORTED_LANGUAGES,
} from '../lib/site-data';

function esc(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const dynamic = 'force-static';

export async function GET() {
  const lastmod = new Date().toISOString();

  const urls = PAGE_ORDER.flatMap((page) =>
    SUPPORTED_LANGUAGES.map((lang) => {
      const loc = esc(buildCanonicalUrl(lang, page));
      const changefreq = page === 'home' ? 'weekly' : 'monthly';
      const priority = page === 'home' ? '1.0' : page === 'contact' ? '0.9' : '0.8';

      const alternates = [
        ...SUPPORTED_LANGUAGES.map(
          (l) =>
            `<xhtml:link rel="alternate" hreflang="${l}" href="${esc(buildCanonicalUrl(l, page))}"/>`,
        ),
        `<xhtml:link rel="alternate" hreflang="x-default" href="${esc(buildCanonicalUrl(DEFAULT_LANGUAGE, page))}"/>`,
      ].join('');

      return (
        `<url>` +
        `<loc>${loc}</loc>` +
        `<lastmod>${lastmod}</lastmod>` +
        `<changefreq>${changefreq}</changefreq>` +
        `<priority>${priority}</priority>` +
        alternates +
        `</url>`
      );
    }),
  ).join('');

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ` +
    `xmlns:xhtml="http://www.w3.org/1999/xhtml">` +
    urls +
    `</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}