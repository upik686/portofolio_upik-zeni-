import React, { useState } from 'react';
import { EXPERIENCES, ExperienceItem, Language, UI_COPY } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  Cpu,
  Layers,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
  lang: Language;
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ darkMode, lang }) => {
  const [selectedId, setSelectedId] = useState<string>(EXPERIENCES[0].id);
  const [mobileOpenId, setMobileOpenId] = useState<string | null>(null);
  const [isSwitching, setIsSwitching] = useState(false);
  const copy = UI_COPY[lang];

  const activeExp: ExperienceItem =
    EXPERIENCES.find((e) => e.id === selectedId) || EXPERIENCES[0];

  const handleSelect = (id: string) => {
    if (id === selectedId) return;
    setSelectedId(id);
    setIsSwitching(true);
    setTimeout(() => setIsSwitching(false), 160);
  };

  return (
    <section
      id="pengalaman"
      className="py-12 sm:py-16 md:py-24 border-t border-slate-200 dark:border-white/10 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 sm:mb-12 border-b pb-4 border-slate-200 dark:border-white/10 gap-2">
          <div>
            <span className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-2">
              {copy.experience.sectionLabel}
            </span>
            <h2
              className={`font-display text-2xl sm:text-4xl font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {copy.experience.title}
            </h2>
          </div>
          <span className="font-mono text-xs text-blue-600 dark:text-blue-400">
            {copy.experience.hint}
          </span>
        </div>

        {/* Mobile (< lg): Title-only Accordion (tap a role to reveal description) */}
        <div className="lg:hidden space-y-3">
          {EXPERIENCES.map((exp: ExperienceItem) => {
            const isOpen = mobileOpenId === exp.id;
            const Icon =
              exp.categoryKey === 'iot'
                ? Cpu
                : exp.categoryKey === 'work'
                ? Briefcase
                : Building2;

            return (
              <div
                key={`mobile-exp-${exp.id}`}
                className={`rounded-2xl border overflow-hidden transition-colors ${
                  isOpen
                    ? darkMode
                      ? 'bg-[#101622] border-blue-400/50 shadow-lg shadow-black/40'
                      : 'bg-white border-blue-500 shadow-md shadow-blue-500/10'
                    : darkMode
                    ? 'bg-[#0e1420]/90 border-white/10'
                    : 'bg-white border-slate-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setMobileOpenId(isOpen ? null : exp.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 flex items-center justify-between gap-3 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                        isOpen
                          ? 'bg-blue-600 border-blue-500 text-white'
                          : darkMode
                          ? 'bg-white/5 border-white/10 text-blue-400'
                          : 'bg-slate-100 border-slate-200 text-blue-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.type[lang]}
                        </span>
                        <span>&middot;</span>
                        <span className="tabular-nums">{exp.period[lang]}</span>
                      </div>
                      <h3
                        className={`font-display text-sm font-bold leading-snug ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {exp.role[lang]}
                      </h3>
                      <p className="text-xs text-blue-600 dark:text-blue-300/90 truncate">
                        {exp.organization[lang]}
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
                  <div className="px-4 pb-4 pt-3 border-t border-slate-200 dark:border-white/10 space-y-4 animate-panel-enter">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-blue-500" />
                        {exp.location}
                      </span>
                      <span>&middot;</span>
                      <span className="font-mono text-blue-600 dark:text-blue-400">
                        {exp.visualTag[lang]}
                      </span>
                    </div>

                    <p
                      className={`text-xs leading-relaxed ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      {exp.description[lang]}
                    </p>

                    <div>
                      <h4 className="text-[11px] font-mono tracking-wider uppercase text-blue-600 dark:text-blue-400 font-semibold mb-2 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        {copy.experience.responsibilitiesTitle}
                      </h4>
                      <ol className="space-y-2 list-decimal list-inside marker:font-mono marker:text-xs marker:font-bold marker:text-blue-500 dark:marker:text-blue-400">
                        {exp.bullets[lang].map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className={`text-xs leading-relaxed ${
                              darkMode ? 'text-slate-300' : 'text-slate-700'
                            }`}
                          >
                            {bullet}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-2">
                      <p className={`text-[11px] font-medium ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                        {exp.skills[lang].join(' · ')}
                      </p>
                      <a
                        href="#dokumentasi"
                        className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {copy.experience.seeDocs} &darr;
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Laptop & Desktop (lg+): Interactive Master-Detail Career Explorer */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Selectable Role List */}
          <div className="lg:col-span-5 space-y-3">
            {EXPERIENCES.map((exp: ExperienceItem) => {
              const isSelected = exp.id === selectedId;
              const Icon =
                exp.categoryKey === 'iot'
                  ? Cpu
                  : exp.categoryKey === 'work'
                  ? Briefcase
                  : Building2;

              return (
                <button
                  key={exp.id}
                  id={`exp-card-${exp.id}`}
                  type="button"
                  onClick={() => handleSelect(exp.id)}
                  aria-pressed={isSelected}
                  className={`w-full p-4 sm:p-5 rounded-2xl border text-left flex items-start justify-between gap-3 cursor-pointer card-interactive ${
                    isSelected
                      ? darkMode
                        ? 'bg-[#121b2d] border-blue-400/60 shadow-lg shadow-blue-950/40'
                        : 'bg-blue-50/70 border-blue-500 shadow-md shadow-blue-500/10'
                      : darkMode
                      ? 'bg-[#0e1420]/90 border-white/10 hover:border-blue-400/30'
                      : 'bg-white border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                        isSelected
                          ? 'bg-blue-600 border-blue-500 text-white'
                          : darkMode
                          ? 'bg-white/5 border-white/10 text-blue-400'
                          : 'bg-slate-100 border-slate-200 text-blue-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono mb-1">
                        <span
                          className={
                            isSelected
                              ? 'text-blue-600 dark:text-blue-300 font-bold'
                              : 'text-slate-500 dark:text-slate-400'
                          }
                        >
                          {exp.type[lang]}
                        </span>
                        <span className="text-slate-400">&middot;</span>
                        <span className="text-slate-500 dark:text-slate-400 tabular-nums">
                          {exp.period[lang]}
                        </span>
                      </div>

                      <h3
                        className={`font-display text-base font-bold leading-snug ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {exp.role[lang]}
                      </h3>

                      <p className="text-xs font-medium text-blue-600 dark:text-blue-300/90 mt-0.5 truncate">
                        {exp.organization[lang]}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 mt-1 transition-transform duration-200 ${
                      isSelected
                        ? 'text-blue-500 dark:text-blue-300 translate-x-0.5'
                        : 'text-slate-400 opacity-50'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Detail Stage */}
          <div className="lg:col-span-7">
            <div
              key={activeExp.id}
              className={`rounded-2xl border p-5 sm:p-8 animate-panel-enter ${
                darkMode
                  ? 'bg-[#101622] border-blue-400/30 shadow-xl shadow-black/50'
                  : 'bg-white border-slate-200 shadow-lg shadow-slate-200/60'
              }`}
            >
              {isSwitching ? (
                <div className="space-y-4 py-4">
                  <div className="h-4 w-1/3 rounded skeleton-shimmer" />
                  <div className="h-7 w-2/3 rounded skeleton-shimmer" />
                  <div className="h-4 w-1/2 rounded skeleton-shimmer" />
                  <div className="h-24 w-full rounded-xl skeleton-shimmer mt-4" />
                  <div className="h-4 w-5/6 rounded skeleton-shimmer" />
                  <div className="h-4 w-4/6 rounded skeleton-shimmer" />
                </div>
              ) : (
                <>
                  {/* Detail Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-5 border-b border-slate-200 dark:border-white/10">
                    <div>
                      <div className="text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold mb-1">
                        {activeExp.visualTag[lang]}
                      </div>
                      <h3
                        className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
                          darkMode ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {activeExp.role[lang]}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5">
                        <span className="font-semibold text-blue-600 dark:text-blue-300">
                          {activeExp.organization[lang]}
                        </span>
                        <span>&middot;</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {activeExp.location}
                        </span>
                        <span>&middot;</span>
                        <span className="inline-flex items-center gap-1 tabular-nums">
                          <Calendar className="w-3.5 h-3.5" />
                          {activeExp.period[lang]}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Context */}
                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    {activeExp.description[lang]}
                  </p>

                  {/* Numbered Achievements */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono tracking-wider uppercase text-blue-600 dark:text-blue-400 font-semibold mb-3 flex items-center gap-1.5">
                      <Layers className="w-4 h-4" />
                      {copy.experience.responsibilitiesTitle}
                    </h4>

                    <ol className="space-y-2.5 list-decimal list-inside marker:font-mono marker:text-xs marker:font-bold marker:text-blue-500 dark:marker:text-blue-400">
                      {activeExp.bullets[lang].map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className={`text-xs sm:text-sm leading-relaxed ${
                            darkMode ? 'text-slate-300' : 'text-slate-700'
                          }`}
                        >
                          {bullet}
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Skills & Footer Link */}
                  <div className="pt-5 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block mb-1">
                        {copy.experience.toolsTitle}
                      </span>
                      <p
                        className={`text-xs font-medium ${
                          darkMode ? 'text-blue-200' : 'text-blue-800'
                        }`}
                      >
                        {activeExp.skills[lang].join(' · ')}
                      </p>
                    </div>

                    <a
                      href="#dokumentasi"
                      className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap shrink-0"
                    >
                      {copy.experience.seeDocs} &darr;
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
