import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// The site has one route ("/") whose language comes from the ?lang= query param.
// The root layout can't read search params, so pass the language on as a request header
// (request headers only — never sent to the browser). Kept self-contained, as Proxy
// shouldn't rely on shared modules; keep in sync with SUPPORTED_LANGUAGES in app/lib/site-data.ts.
const LANGS = ['fr', 'nl', 'en'];
const DEFAULT_LANG = 'fr';

export function proxy(request: NextRequest) {
  const requested = request.nextUrl.searchParams.get('lang');
  const lang = requested && LANGS.includes(requested) ? requested : DEFAULT_LANG;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-site-lang', lang); // always overwrite, so clients can't inject a value

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: '/',
};
