1. Metadata Implementation
Use the Next.js Metadata API. Do not use manual <head> tags.
Static Pages
Every page.tsx must export a metadata object:
Title: 50–60 characters. Unique to each page.
Description: 150–160 characters. Value-driven.
Canonical: Always define the primary URL to avoid duplicate content.
Dynamic Pages
Use generateMetadata() for blogs, products, or profiles:
Use the page params to fetch the specific object title.
Include fallback strings if the database title is missing.
if multilingual site , make metadata multilingual
2. Asset Optimization
Images (next/image)
Alt Text: Every image must have a descriptive alt attribute.
Priority: Add the priority prop to the Hero image (top of the page).
Sizing: Use width and height (or fill) to prevent layout shifts.
Fonts (next/font)
Use next/font/google or next/font/local.
Ensure display: 'swap' is active to keep text visible during load.
3. Technical Structure
Semantic HTML
Headers: Only one <h1>. Use <h2> and <h3> for hierarchy, never for styling.
Links: Use next/link for internal routing. Ensure aria-label is present if the link is an icon.
Automated Crawling
Sitemap: Create app/sitemap.ts to auto-generate a sitemap.xml.
Robots: Create app/robots.ts to allow/disallow specific paths.
4. Structured Data (JSON-LD)
For high-value pages, inject a JSON-LD script for Rich Snippets:
Organization: On the homepage.
Product/Article: On detail pages.
Breadcrumbs: On nested category pages.
5. Deployment Audit Checklist
Before completing a task, verify:
Every page has a unique <title> and description.
No images are using the standard <img> tag.
Mobile responsiveness is verified (no horizontal scrolling).
All internal links are functional.
The robots.txt and sitemap.xml are accessible at the root.
🚀 Key Goal: Achieve a 90+ SEO score on Google Lighthouse.

6. Internationalization (i18n) & Localization
When building a site with multiple languages, follow these rules to help search engines serve the correct version to the correct user.
Hreflang Tags
Use the alternates property in the Metadata API to define language variations:
Self-referencing: The page must link to itself and all other language versions.
x-default: Specify a default page for users whose language doesn't match any listed code.
typescript
// Example for app/layout.tsx or page.tsx
export const metadata = {
  alternates: {
    canonical: 'https://example.com',
    languages: {
      'en-US': 'https://example.com-US',
      'fr-FR': 'https://example.com',
      'x-default': 'https://example.com',
    },
  },
}

URL Structure
Subdirectories: Use /en/, /fr/, etc. This is the preferred method for Next.js.
Avoid Cookies: Do not rely on cookies or browser settings to change content; search engines won't see it. The language must be in the URL.
HTML Lang Attribute
Ensure the lang attribute in app/layout.tsx updates dynamically based on the current locale:
tsx
export default function RootLayout({ params: { lang } }) {
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  )

🌍 i18n Audit Checklist
Does every page have a rel="alternate" hreflang="..." tag?
Is there an x-default tag for unmatched regions?
Does the <html> tag match the current page language?
Are internal links updated to point to the correct language prefix (e.g., /fr/about)?

