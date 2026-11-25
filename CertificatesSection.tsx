import React, { useState } from 'react';
import { CERTIFICATIONS, CertificateItem, Language, UI_COPY } from '../data/portfolioData';
import { ShieldCheck, CheckCircle2, FileBadge, ChevronDown } from 'lucide-react';

interface CertProps {
  darkMode: boolean;
  lang: Language;
}

export const CertificatesSection: React.FC<CertProps> = ({ darkMode, lang }) => {
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(null);
  const copy = UI_COPY[lang];

  return (
    <section
      id="sertifikasi"
      className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 sm:mb-12 border-b pb-4 border-slate-200 dark:border-white/10 gap-2">
          <div>
            <span className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-2">
              {copy.certs.sectionLabel}
            </span>
            <h2
              className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {copy.certs.title}
            </h2>
          </div>
          <span className="font-mono text-xs text-slate-500">
            {copy.certs.subtitle}
          </span>
        </div>

        {/* Mobile (< md): Title-only Tap-to-Expand Certificate List */}
        <div className="md:hidden space-y-3">
          {CERTIFICATIONS.map((cert: CertificateItem, index: number) => {
            const isOpen = mobileOpenIdx === index;
            return (
              <div
                key={`mob-cert-${index}`}
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
                  onClick={() => setMobileOpenIdx(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full p-4 flex items-center justify-between gap-3 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-500 dark:text-blue-300 shrink-0">
                      <FileBadge className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold tabular-nums">
                        <span>{cert.year}</span>
                        {cert.grade && (
                          <>
                            <span>&middot;</span>
                            <span className="text-emerald-600 dark:text-emerald-400">
                              {cert.grade[lang]}
                            </span>
                          </>
                        )}
                      </div>
                      <h3
                        className={`font-display text-sm font-bold leading-snug ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {cert.title[lang]}
                      </h3>
                      <p className="text-xs text-blue-600 dark:text-blue-300/90 truncate">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-3 border-t border-slate-200/70 dark:border-white/10 space-y-3 animate-panel-enter">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
                        {copy.certs.scopeTitle}
                      </span>
                      <div className="space-y-1.5">
                        {cert.skills[lang].map((skill, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
                            <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2.5 border-t border-slate-200/70 dark:border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                      <span className="text-slate-500 dark:text-slate-400">
                        {copy.certs.regNo}{' '}
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                          {cert.credentialId}
                        </span>
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{copy.certs.verified}</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tablet & Laptop (md+): Certificate Cards Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert: CertificateItem, index: number) => (
            <div
              key={index}
              className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between card-interactive ${
                darkMode
                  ? 'bg-[#101622] border-white/10 hover:border-blue-400/40 shadow-lg shadow-black/30'
                  : 'bg-white border-slate-200 hover:border-blue-500/40 shadow-md shadow-slate-200/50'
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-xs font-mono">
                  <span className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1.5 tabular-nums">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {copy.certs.validityPrefix} {cert.year}
                  </span>
                  {cert.grade && (
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      {cert.grade[lang]}
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-500 dark:text-blue-300 shrink-0">
                    <FileBadge className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className={`font-display text-lg sm:text-xl font-bold tracking-tight ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {cert.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-300/90 mt-0.5">
                      {copy.certs.issuerPrefix} {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 mt-5">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                    {copy.certs.scopeTitle}
                  </span>
                  {cert.skills[lang].map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 shrink-0" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono gap-2">
                <div className="text-slate-500 dark:text-slate-400">
                  <span>{copy.certs.regNo}</span>{' '}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold tabular-nums">
                    {cert.credentialId}
                  </span>
                </div>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{copy.certs.verified}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
