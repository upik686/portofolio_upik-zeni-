import React, { useState } from 'react';
import { ORGANIZATIONS, OrganizationItem, Language, UI_COPY } from '../data/portfolioData';
import { ChevronDown } from 'lucide-react';

interface OrgProps {
  darkMode: boolean;
  lang: Language;
}

export const OrganizationTimeline: React.FC<OrgProps> = ({ darkMode, lang }) => {
  const [mobileOpenIdx, setMobileOpenIdx] = useState<number | null>(null);
  const copy = UI_COPY[lang];

  return (
    <section
      id="organisasi"
      className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 sm:mb-12 border-b pb-4 border-slate-200 dark:border-white/10 gap-2">
          <div>
            <span className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-2">
              {copy.org.sectionLabel}
            </span>
            <h2
              className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {copy.org.title}
            </h2>
          </div>
          <span className="font-mono text-xs text-slate-500">
            {copy.org.subtitle}
          </span>
        </div>

        {/* Mobile (< md): Title-only Tap-to-Expand List */}
        <div className="md:hidden space-y-2.5">
          {ORGANIZATIONS.map((org: OrganizationItem, index: number) => {
            const isOpen = mobileOpenIdx === index;
            return (
              <div
                key={`mob-org-${index}`}
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
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                      {org.year} &middot; {org.organization}
                    </div>
                    <h3
                      className={`font-display text-sm font-bold leading-snug mt-0.5 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {org.role[lang]}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-500' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-2 border-t border-slate-200/70 dark:border-white/10 animate-panel-enter">
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase mb-1.5">
                      {org.categoryLabel[lang]}
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {org.highlight[lang]}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tablet & Laptop (md+): Horizontal Editorial Year-Pillar Rows */}
        <div className="hidden md:block space-y-4">
          {ORGANIZATIONS.map((org: OrganizationItem, index: number) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center card-interactive ${
                darkMode
                  ? 'bg-[#101622] border-white/10 hover:border-blue-400/40 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-blue-500/40 shadow-2xs'
              }`}
            >
              {/* Year & Category Column */}
              <div className="md:col-span-3 md:pr-6 md:border-r border-slate-200 dark:border-white/10">
                <div className="font-mono text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                  {org.year}
                </div>
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase mt-0.5">
                  {org.categoryLabel[lang]}
                </div>
              </div>

              {/* Role & Highlight Column */}
              <div className="md:col-span-9">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                  <h3
                    className={`font-display text-lg font-bold tracking-tight ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {org.role[lang]}
                  </h3>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-300">
                    {org.organization}
                  </span>
                </div>

                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {org.highlight[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
