// Smoke test for pianorixensart.be — read-only (GET requests only, the contact form is never submitted).
// Setup once:  npm ci && npx playwright install chromium
// Run:         BASE_URL=https://pianorixensart.be npx playwright test e2e
import { test, expect } from "@playwright/test";

const BASE_URL = (process.env.BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");

// app/lib/site-data.ts: one route ("/") switched by ?page=…&lang=… (defaults: page=home, lang=fr).
const LANGS = ["fr", "nl", "en"];
const PAGES = ["home", "about", "piano", "theory", "transcription", "pricing", "contact"];

const BROKEN_PAGE = /Application error|Internal Server Error|This page could not be found/i;

// Known third-party noise, matched narrowly (frame URL + message). Captcha iframes log this when the
// browser blocks third-party storage (headless Chromium always does); not a site bug.
const IGNORED_CONSOLE_ERRORS = [
  { frame: /^https:\/\/challenges\.cloudflare\.com\//, text: /^requestStorageAccess: Permission denied\.$/ },
];

function urlFor(lang: string, page: string) {
  const params = new URLSearchParams();
  if (lang !== "fr") params.set("lang", lang);
  if (page !== "home") params.set("page", page);
  const q = params.toString();
  return `${BASE_URL}/${q ? `?${q}` : ""}`;
}

for (const lang of LANGS) {
  for (const pageKey of PAGES) {
    test(`${lang} / ${pageKey} loads cleanly`, async ({ page }) => {
      const errors: string[] = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (m) => {
        if (m.type() !== "error") return;
        const from = m.location().url;
        if (IGNORED_CONSOLE_ERRORS.some((i) => i.frame.test(from) && i.text.test(m.text()))) return;
        errors.push(`${m.text()} (${from})`);
      });

      const url = urlFor(lang, pageKey);
      // Turnstile on the contact page keeps polling, so "networkidle" never comes there.
      const res = await page.goto(url, { waitUntil: pageKey === "contact" ? "load" : "networkidle" });
      expect(res?.status(), `HTTP status for ${url}`).toBeLessThan(400);
      await expect(page.locator("html"), "<html lang> follows ?lang=").toHaveAttribute("lang", lang);
      await expect(page.locator("body")).not.toContainText(BROKEN_PAGE);
      await expect(page.locator("h1, h2").first()).toBeVisible();
      if (pageKey === "contact") {
        await expect(page.locator("form").first(), "contact form is rendered").toBeVisible();
      }
      expect(errors, `browser errors on ${url}`).toEqual([]);
    });
  }
}

for (const path of ["/robots.txt", "/sitemap.xml"]) {
  test(`${path} is served`, async ({ request }) => {
    const res = await request.get(BASE_URL + path);
    expect(res.status()).toBe(200);
    expect((await res.text()).length).toBeGreaterThan(0);
  });
}
