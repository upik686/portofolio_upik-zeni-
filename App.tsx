import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroProfile } from './components/HeroProfile';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { DocumentationGallery } from './components/DocumentationGallery';
import { SkillsSection } from './components/SkillsSection';
import { OrganizationTimeline } from './components/OrganizationTimeline';
import { CertificatesSection } from './components/CertificatesSection';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { Language } from './data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('upik_theme');
      if (saved === 'light') return false;
      if (saved === 'dark') return true;
    } catch {
      // ignore
    }
    return true;
  });

  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('upik_lang');
      if (saved === 'en' || saved === 'id') return saved;
    } catch {
      // ignore
    }
    return 'id';
  });

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('upik_theme', darkMode ? 'dark' : 'light');
    } catch {
      // ignore
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('upik_lang', lang);
    } catch {
      // ignore
    }
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="portfolio-root"
      className={`min-h-screen w-full overflow-x-hidden relative transition-colors duration-500 selection:bg-blue-500 selection:text-white ${
        darkMode ? 'bg-[#080b12] text-slate-100' : 'bg-[#f8fafc] text-slate-900'
      }`}
    >
      {/* Subtle Animated Ambient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-dot-matrix opacity-45 dark:opacity-55 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_82%)]" />
        <div
          className={`animate-ambient-a absolute -top-32 -left-24 w-[440px] h-[440px] rounded-full blur-3xl ${
            darkMode ? 'bg-blue-600/10' : 'bg-blue-400/12'
          }`}
        />
        <div
          className={`animate-ambient-b absolute top-[42%] -right-32 w-[460px] h-[460px] rounded-full blur-3xl ${
            darkMode ? 'bg-sky-500/8' : 'bg-sky-400/10'
          }`}
        />
        <div
          className={`animate-ambient-a absolute -bottom-36 left-1/3 w-[380px] h-[380px] rounded-full blur-3xl ${
            darkMode ? 'bg-blue-500/8' : 'bg-blue-300/12'
          }`}
        />
        <div
          className={`animate-orbit-slow hidden md:block absolute -top-44 -right-44 w-[520px] h-[520px] rounded-full border border-dashed ${
            darkMode ? 'border-blue-400/[0.08]' : 'border-blue-600/[0.08]'
          }`}
        />
        <div
          className={`animate-orbit-slow hidden md:block absolute -bottom-52 -left-48 w-[480px] h-[480px] rounded-full border ${
            darkMode ? 'border-sky-400/[0.06]' : 'border-blue-500/[0.07]'
          }`}
          style={{ animationDirection: 'reverse' }}
        />
      </div>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        lang={lang}
        setLang={setLang}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      <main id="main-content" className="relative z-10">
        <HeroProfile
          darkMode={darkMode}
          lang={lang}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />

        <ExperienceSection darkMode={darkMode} lang={lang} />

        <ProjectsSection darkMode={darkMode} lang={lang} />

        <DocumentationGallery darkMode={darkMode} lang={lang} />

        <SkillsSection darkMode={darkMode} lang={lang} />

        <OrganizationTimeline darkMode={darkMode} lang={lang} />

        <CertificatesSection darkMode={darkMode} lang={lang} />

        <ContactSection
          darkMode={darkMode}
          lang={lang}
          onOpenContactModal={() => setIsContactModalOpen(true)}
        />
      </main>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        darkMode={darkMode}
        lang={lang}
      />

      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          type="button"
          onClick={scrollToTop}
          aria-label={lang === 'id' ? 'Kembali ke atas' : 'Scroll to top'}
          className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center border shadow-xl cursor-pointer btn-interactive ${
            darkMode
              ? 'bg-[#101622]/90 border-blue-400/30 text-blue-300 hover:bg-blue-600 hover:text-white shadow-black/40'
              : 'bg-white/90 border-slate-200 text-blue-700 hover:bg-blue-600 hover:text-white shadow-md'
          }`}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
