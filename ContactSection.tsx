import React, { useState } from 'react';
import { PROFILE, Language, UI_COPY } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, MapPin } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
  lang: Language;
  onOpenContactModal: () => void;
}

export const ContactSection: React.FC<ContactProps> = ({
  darkMode,
  lang,
  onOpenContactModal,
}) => {
  const [copied, setCopied] = useState(false);
  const copy = UI_COPY[lang];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      id="kontak"
      className="py-20 border-t border-slate-200 dark:border-white/10 relative overflow-hidden"
    >
      {/* Subtle bottom blue glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.45) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Block */}
        <div
          className={`p-8 sm:p-12 rounded-3xl border mb-16 relative overflow-hidden text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8 ${
            darkMode
              ? 'bg-gradient-to-br from-[#111827] to-[#0b101b] border-blue-400/30 shadow-2xl shadow-black/50'
              : 'bg-gradient-to-br from-white to-blue-50/60 border-blue-500/25 shadow-xl shadow-blue-500/5'
          }`}
        >
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold mb-3">
              {copy.contact.eyebrow}
            </div>
            <h2
              className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance ${
                darkMode ? 'text-white' : 'text-slate-950'
              }`}
            >
              {copy.contact.title}
            </h2>
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {copy.contact.desc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={onOpenContactModal}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 cursor-pointer btn-interactive"
            >
              <span>{copy.contact.sendBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                copy.contact.emailSubjectPrefill
              )}&body=${encodeURIComponent(copy.contact.emailBodyPrefill)}`}
              className={`px-5 py-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 btn-interactive ${
                darkMode
                  ? 'bg-white/5 border-white/10 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400/30'
                  : 'bg-white border-slate-200 text-blue-700 hover:bg-blue-50'
              }`}
            >
              <Mail className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <span>{copy.contact.directEmailBtn}</span>
            </a>
          </div>
        </div>

        {/* Contact Information Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 pb-12 border-b border-slate-200 dark:border-white/10">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center text-blue-500 dark:text-blue-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                {copy.contact.emailLabel}
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`text-sm font-semibold flex items-center gap-2 cursor-pointer text-left btn-interactive ${
                  darkMode ? 'text-white hover:text-blue-300' : 'text-slate-900 hover:text-blue-700'
                }`}
              >
                <span>{PROFILE.email}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-50" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center text-blue-500 dark:text-blue-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                {copy.contact.locationLabel}
              </div>
              <div className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {lang === 'id' ? PROFILE.location : PROFILE.locationEn}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>&copy; 2026 {copy.contact.rights}</div>
        </div>
      </div>
    </footer>
  );
};
