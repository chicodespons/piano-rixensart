'use client';

import { useApp } from '../lib/AppContext';
import { T } from '../lib/translations';
import MusicalBackground from './MusicalBackground';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

export default function MainApp() {
  const { lang, page } = useApp();

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'piano': return <ServicePage t={T[lang].piano} color="#ec407a" emoji="🎹" />;
      case 'awakening': return <ServicePage t={T[lang].awakening} color="#ff9800" emoji="🌟" />;
      case 'theory': return <ServicePage t={T[lang].theory} color="#42a5f5" emoji="🎼" />;
      case 'transcription': return <ServicePage t={T[lang].transcription} color="#2e7d32" emoji="📝" />;
      case 'pricing': return <PricingPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', fontFamily: 'Fredoka, sans-serif' }}>
      <MusicalBackground />
      <Navbar />
      <main style={{ minHeight: '80vh', position: 'relative', zIndex: 1 }}>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
