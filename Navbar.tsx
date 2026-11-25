import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Language, UI_COPY } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  lang,
  setLang,
  onOpenContactModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#profil');
  const copy = UI_COPY[lang];

  const navLinks = [
    { name: copy.nav.profile, href: '#profil' },
    { name: copy.nav.experience, href: '#pengalaman' },
    { name: copy.nav.projects, href: '#proyek' },
    { name: copy.nav.gallery, href: '#dokumentasi' },
    { name: copy.nav.skills, href: '#keahlian' },
  ];

  useEffect(() => {
    const sectionIds = ['profil', 'pengalaman', 'proyek', 'dokumentasi', 'keahlian'];

    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const scrollPos = window.scrollY + 150;
      let current = '#profil';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = `#${id}`;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none"
    >
      {/* Floating Capsule Bar with UZ · Upik Zeni + Active Menu Highlight */}
      <div
        className={`pointer-events-auto max-w-6xl mx-auto h-12 sm:h-14 px-3 sm:px-5 rounded-full border flex items-center justify-between gap-2 sm:gap-3 transition-all duration-300 backdrop-blur-xl ${
          scrolled
            ? darkMode
              ? 'bg-[#0b101b]/92 border-blue-500/35 shadow-xl shadow-black/50'
              : 'bg-white/92 border-blue-600/20 shadow-lg shadow-slate-900/10'
            : darkMode
            ? 'bg-[#0e1422]/85 border-white/12 shadow-lg shadow-black/35'
            : 'bg-white/88 border-slate-200/90 shadow-md shadow-slate-900/5'
        }`}
      >
        {/* Left: Monogram & Name */}
        <a
          id="nav-logo"
          href="#profil"
          onClick={() => setActiveSection('#profil')}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group cursor-pointer"
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-display text-xs font-extrabold border transition-transform duration-200 group-hover:scale-105 ${
              darkMode
                ? 'bg-blue-500/20 border-blue-400/40 text-blue-300'
                : 'bg-blue-600/10 border-blue-600/30 text-blue-700'
            }`}
          >
            UZ
          </div>
          <span
            className={`font-display text-sm sm:text-base font-bold tracking-tight ${
              darkMode ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            Upik Zeni
          </span>
        </a>

        {/* Center: Desktop Navigation Links with Active Highlight */}
        <nav
          id="desktop-nav-links"
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-1"
        >
          {navLinks.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-200 btn-interactive ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                    : darkMode
                    ? 'text-slate-300 hover:text-blue-300 hover:bg-blue-500/10'
                    : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Language + Theme + Contact CTA + Mobile Menu Trigger */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Language Capsule Switch */}
          <div
            role="group"
            aria-label="Language switcher"
            className={`hidden sm:inline-flex items-center p-0.5 rounded-full border ${
              darkMode
                ? 'bg-[#080b12]/80 border-white/10'
                : 'bg-slate-100 border-slate-200'
            }`}
          >
            <button
              type="button"
              onClick={() => setLang('id')}
              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold cursor-pointer btn-interactive ${
                lang === 'id'
                  ? 'bg-blue-600 text-white'
                  : darkMode
                  ? 'text-slate-400 hover:text-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold cursor-pointer btn-interactive ${
                lang === 'en'
                  ? 'bg-blue-600 text-white'
                  : darkMode
                  ? 'text-slate-400 hover:text-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            id="theme-toggle-button"
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border cursor-pointer btn-interactive ${
              darkMode
                ? 'bg-[#121927] border-white/10 text-blue-300 hover:border-blue-400/50'
                : 'bg-slate-50 border-slate-200 text-blue-700 hover:border-blue-400'
            }`}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Contact CTA Capsule */}
          <button
            id="nav-contact-cta"
            type="button"
            onClick={onOpenContactModal}
            className={`hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer btn-interactive ${
              darkMode
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/25 hover:from-blue-400 hover:to-blue-500'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
            }`}
          >
            {copy.nav.cta}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-trigger"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className={`lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border cursor-pointer btn-interactive ${
              darkMode
                ? 'bg-[#121927] border-white/10 text-slate-200'
                : 'bg-slate-50 border-slate-200 text-slate-800'
            }`}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Floating Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className={`pointer-events-auto lg:hidden mt-2 max-w-6xl mx-auto rounded-3xl border px-4 py-4 backdrop-blur-xl shadow-2xl animate-panel-enter ${
            darkMode
              ? 'bg-[#0d1320]/95 border-blue-500/25 text-slate-200'
              : 'bg-white/95 border-slate-200 text-slate-800'
          }`}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.href);
                    setMobileMenuOpen(false);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : darkMode
                      ? 'hover:bg-blue-500/10 hover:text-blue-300'
                      : 'hover:bg-blue-50 hover:text-blue-700'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}

            <div className="mt-2 pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-2 sm:hidden">
              <div className="inline-flex items-center p-0.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#080b12]">
                <button
                  type="button"
                  onClick={() => setLang('id')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer btn-interactive ${
                    lang === 'id' ? 'bg-blue-600 text-white' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  ID
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer btn-interactive ${
                    lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  EN
                </button>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="flex-1 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold cursor-pointer btn-interactive"
              >
                {copy.nav.cta}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
