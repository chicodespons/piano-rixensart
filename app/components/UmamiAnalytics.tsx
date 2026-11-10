// Umami analytics tag — copied into a site by the /add-analytics skill (sites-ops/templates).
// Cookieless, so it needs no consent hook. `domains` restricts tracking to the prod
// hostname(s), so dev/staging deploys of the same code never send data.
// The website ID is public (like a GA measurement ID) and safe to commit.
import Script from 'next/script';

const UMAMI_URL = 'https://analytics.dedycker.dev'; // e.g. https://analytics.dedycker.dev
const UMAMI_WEBSITE_ID = 'e9030435-ec4a-4d37-8476-770dd68a3fe3';
const UMAMI_DOMAINS = 'pianorixensart.be,www.pianorixensart.be'; // comma-separated prod hostnames

export default function UmamiAnalytics() {
  return (
    <Script
      src={`${UMAMI_URL}/script.js`}
      data-website-id={UMAMI_WEBSITE_ID}
      data-domains={UMAMI_DOMAINS}
      strategy='afterInteractive'
    />
  );
}
