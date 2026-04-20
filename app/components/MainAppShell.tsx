import type { Lang, PageKey } from '../lib/translations';
import MusicalBackground from './MusicalBackground';
import Footer from './Footer';
import Navbar from './Navbar';

interface MainAppShellProps {
  lang: Lang;
  page: PageKey;
  children: React.ReactNode;
}

export default function MainAppShell({ lang, page, children }: MainAppShellProps) {
  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Fredoka, sans-serif' }}>
      <MusicalBackground />
      <Navbar lang={lang} page={page} />
      <main style={{ minHeight: '80vh', position: 'relative', zIndex: 1 }}>{children}</main>
      <Footer lang={lang} />
    </div>
  );
}
