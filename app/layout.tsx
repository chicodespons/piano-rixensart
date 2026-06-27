import type { Metadata } from 'next';
import { Bubblegum_Sans, Fredoka, Quicksand } from 'next/font/google';
import './globals.css';
import { BUSINESS_DETAILS, SITE_NAME, SITE_URL } from './lib/site-data';

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
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang?: string }>;
}>) {
  const resolvedParams = await params;
  const htmlLang = resolvedParams?.lang ?? 'fr';

  return (
    <html lang={htmlLang} className={`${bubblegumSans.variable} ${fredoka.variable} ${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
