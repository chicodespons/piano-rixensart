import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Bubblegum_Sans, Fredoka, Quicksand } from 'next/font/google';
import './globals.css';
import UmamiAnalytics from './components/UmamiAnalytics';
import { BUSINESS_DETAILS, DEFAULT_LANGUAGE, SITE_NAME, SITE_URL, isLang } from './lib/site-data';

const bubblegumSans = Bubblegum_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bubblegum',
  display: 'swap',
});

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  display: 'swap',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: `${BUSINESS_DETAILS.name} | ${SITE_NAME}`,
    template: `%s`,
  },
  description:
    'Piano, solfège, éveil musical et transcription musicale à Rixensart pour enfants, adolescents et adultes.',
  authors: [{ name: BUSINESS_DETAILS.name }],
  creator: BUSINESS_DETAILS.name,
  publisher: BUSINESS_DETAILS.name,
  category: 'music lessons',
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Set by proxy.ts from ?lang= (the root layout can't read search params itself).
  const headerLang = (await headers()).get('x-site-lang');
  const htmlLang = isLang(headerLang) ? headerLang : DEFAULT_LANGUAGE;

  return (
    <html lang={htmlLang} className={`${bubblegumSans.variable} ${fredoka.variable} ${quicksand.variable}`}>
      <body>
        {children}
        <UmamiAnalytics />
      </body>
    </html>
  );
}
