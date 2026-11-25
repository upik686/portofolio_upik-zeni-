import React, { useState } from 'react';
import { PROFILE, Language, UI_COPY } from '../data/portfolioData';
import { AVATAR_IMAGE } from '../data/avatar';
import { ShimmerImage } from './ShimmerImage';
import {
  Copy,
  Check,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Cpu,
  CheckCircle2,
  MapPin,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react';

interface HeroProfileProps {
  darkMode: boolean;
  lang: Language;
  onOpenContactModal: () => void;
}

export const HeroProfile: React.FC<HeroProfileProps> = ({
  darkMode,
  lang,
  onOpenContactModal,
}) => {
  const [copied, setCopied] = useState(false);
  const [openCardIdx, setOpenCardIdx] = useState<number | null>(null);
  const copy = UI_COPY[lang];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="profil"
      className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden"
    >
      {/* Subtle cool blue ambient glow behind the profile */}
      <div
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[480px] rounded-full blur-3xl opacity-20 transition-colors duration-500"
        style={{
          background: darkMode
            ? 'radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(56,189,248,0.14) 50%, transparent 80%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(37,99,235,0.06) 60%, transparent 80%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Hero-Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14">
          {/* Bio & Profile Info (Second on mobile, Left on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start text-left">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-2">
              {copy.hero.eyebrow}
            </div>

            <h1
              className={`font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-4 text-balance ${
                darkMode ? 'text-slate-50' : 'text-slate-950'
              }`}
            >
              Upik Zeni <br className="hidden sm:inline" />
              <span className="text-blue-500 dark:text-blue-400">Alin Triyani</span>
            </h1>

            {/* Location */}
            <div
              className={`inline-flex items-center gap-1.5 text-xs font-mono mb-5 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
              <span>{copy.hero.locationLine}</span>
            </div>

            {/* Bio with "lebih sering dipanggil Jeni" */}
            <p
              className={`text-base sm:text-[17px] leading-relaxed mb-4 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {copy.hero.bioMain}
            </p>

            <p
              className={`text-xs sm:text-sm leading-relaxed mb-7 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {copy.hero.bioSub}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              <button
                type="button"
                onClick={onOpenContactModal}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold text-sm tracking-wide shadow-lg shadow-blue-600/25 hover:shadow-blue-500/35 flex items-center gap-2 cursor-pointer btn-interactive"
              >
                <span>{copy.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className={`px-4 py-3 rounded-xl border text-sm font-medium flex items-center gap-2 cursor-pointer btn-interactive ${
                  darkMode
                    ? 'bg-white/5 border-white/15 text-slate-200 hover:bg-white/10 hover:border-blue-400/40'
                    : 'bg-white border-slate-200 text-slate-800 hover:bg-blue-50/60 hover:border-blue-500/40 shadow-xs'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-500 dark:text-emerald-400 font-semibold">
                      {copy.hero.emailCopied}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{copy.hero.copyEmail}</span>
                  </>
                )}
              </button>
            </div>

            {/* 3 Core Focuses */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full pt-5 border-t border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2 text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0" />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                  {copy.hero.focus1}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0" />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                  {copy.hero.focus2}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0" />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                  {copy.hero.focus3}
                </span>
              </div>
            </div>
          </div>

          {/* Clean Portrait Photo Frame (First/Top on mobile, Right on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[350px]">
              <div
                className={`absolute -inset-2 rounded-3xl border pointer-events-none ${
                  darkMode ? 'border-blue-500/20 bg-blue-500/5' : 'border-blue-600/15 bg-blue-100/40'
                }`}
              />

              <div
                className={`relative rounded-2xl overflow-hidden border shadow-2xl card-interactive ${
                  darkMode
                    ? 'bg-[#101622] border-white/15 shadow-black/80'
                    : 'bg-white border-slate-200 shadow-slate-300/60'
                }`}
              >
                <div
                  className={`relative aspect-[681/1040] w-full overflow-hidden ${
                    darkMode ? 'bg-[#0c111b]' : 'bg-slate-100'
                  }`}
                >
                  <ShimmerImage
                    src={AVATAR_IMAGE}
                    alt={PROFILE.name}
                    loading="eager"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute top-3 left-3 z-20 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono text-blue-300 border border-blue-400/30">
                    {copy.hero.portraitBadge}
                  </div>
                </div>

                {/* Bottom Snapshot Info */}
                <div
                  className={`p-3.5 border-t flex items-center justify-between gap-3 text-xs ${
                    darkMode ? 'bg-[#0c111b] border-white/10' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className={`font-bold leading-none truncate ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                        {copy.hero.snapshotRole1}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                        {copy.hero.snapshotOrg1}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pl-3 border-l border-slate-200 dark:border-white/10 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                      <GraduationCap className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <div className={`font-bold leading-none truncate ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                        {copy.hero.snapshotRole2}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                        {copy.hero.snapshotOrg2}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile (< sm): Title-only Tap-to-Expand Summary List */}
        <div className="sm:hidden space-y-2.5">
          {[
            {
              href: '#pengalaman',
              icon: <Cpu className="w-4 h-4" />,
              label: copy.hero.cards.iotLabel,
              title: copy.hero.cards.iotTitle,
              desc: copy.hero.cards.iotDesc,
            },
            {
              href: '#pengalaman',
              icon: <Briefcase className="w-4 h-4" />,
              label: copy.hero.cards.workLabel,
              title: copy.hero.cards.workTitle,
              desc: copy.hero.cards.workDesc,
            },
            {
              href: '#profil',
              icon: <GraduationCap className="w-4 h-4" />,
              label: copy.hero.cards.eduLabel,
              title: copy.hero.cards.eduTitle,
              desc: copy.hero.cards.eduDesc,
            },
            {
              href: '#sertifikasi',
              icon: <ShieldCheck className="w-4 h-4" />,
              label: copy.hero.cards.certLabel,
              title: copy.hero.cards.certTitle,
              desc: copy.hero.cards.certDesc,
            },
          ].map((card, idx) => {
            const isOpen = openCardIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border overflow-hidden transition-colors ${
                  isOpen
                    ? darkMode
                      ? 'bg-[#121b2d] border-blue-400/50'
                      : 'bg-blue-50/70 border-blue-400'
                    : darkMode
                    ? 'bg-[#101622] border-white/10'
                    : 'bg-white border-slate-200 shadow-2xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenCardIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full p-4 flex items-center justify-between gap-3 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-400/25 flex items-center justify-center text-blue-500 dark:text-blue-400 shrink-0">
                      {card.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
                        {card.label}
                      </div>
                      <div className={`text-sm font-bold truncate ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {card.title}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-500' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 border-t border-slate-200/70 dark:border-white/10 animate-panel-enter">
                    <p className={`text-xs leading-relaxed mb-2.5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {card.desc}
                    </p>
                    <a
                      href={card.href}
                      className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <span>{lang === 'id' ? 'Lihat bagian' : 'View section'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tablet & Laptop (sm+): Uniform 4-Column Summary Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          <a
            href="#pengalaman"
            className={`h-full p-5 rounded-2xl border flex flex-col text-left card-interactive ${
              darkMode
                ? 'bg-[#101622] border-white/10 hover:border-blue-400/40'
                : 'bg-white border-slate-200 hover:border-blue-500/40 shadow-sm'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center text-blue-500 dark:text-blue-400 mb-3 shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider mb-1">
              {copy.hero.cards.iotLabel}
            </div>
            <div className={`text-sm font-bold mb-1.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {copy.hero.cards.iotTitle}
            </div>
            <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {copy.hero.cards.iotDesc}
            </p>
          </a>

          <a
            href="#pengalaman"
            className={`h-full p-5 rounded-2xl border flex flex-col text-left card-interactive ${
              darkMode
                ? 'bg-[#101622] border-white/10 hover:border-blue-400/40'
                : 'bg-white border-slate-200 hover:border-blue-500/40 shadow-sm'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-sky-500/15 border border-sky-400/25 flex items-center justify-center text-sky-500 dark:text-sky-400 mb-3 shrink-0">
              <Briefcase className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-mono text-sky-600 dark:text-sky-400 font-semibold uppercase tracking-wider mb-1">
              {copy.hero.cards.workLabel}
            </div>
            <div className={`text-sm font-bold mb-1.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {copy.hero.cards.workTitle}
            </div>
            <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {copy.hero.cards.workDesc}
            </p>
          </a>

          <a
            href="#profil"
            className={`h-full p-5 rounded-2xl border flex flex-col text-left card-interactive ${
              darkMode
                ? 'bg-[#101622] border-white/10 hover:border-blue-400/40'
                : 'bg-white border-slate-200 hover:border-blue-500/40 shadow-sm'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center text-blue-500 dark:text-blue-400 mb-3 shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider mb-1">
              {copy.hero.cards.eduLabel}
            </div>
            <div className={`text-sm font-bold mb-1.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {copy.hero.cards.eduTitle}
            </div>
            <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {copy.hero.cards.eduDesc}
            </p>
          </a>

          <a
            href="#sertifikasi"
            className={`h-full p-5 rounded-2xl border flex flex-col text-left card-interactive ${
              darkMode
                ? 'bg-[#101622] border-white/10 hover:border-blue-400/40'
                : 'bg-white border-slate-200 hover:border-blue-500/40 shadow-sm'
            }`}
          >
            <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center text-blue-500 dark:text-blue-400 mb-3 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider mb-1">
              {copy.hero.cards.certLabel}
            </div>
            <div className={`text-sm font-bold mb-1.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {copy.hero.cards.certTitle}
            </div>
            <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {copy.hero.cards.certDesc}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
