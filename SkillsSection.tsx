import React, { useState } from 'react';
import { SKILLS, SkillItem, Language, UI_COPY } from '../data/portfolioData';
import { Search } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
  lang: Language;
}

export const SkillsSection: React.FC<SkillsProps> = ({ darkMode, lang }) => {
  const [filter, setFilter] = useState<'all' | 'technical' | 'soft'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);
  const copy = UI_COPY[lang];

  const handleFilterChange = (next: 'all' | 'technical' | 'soft') => {
    if (next === filter) return;
    setFilter(next);
    setIsFiltering(true);
    setTimeout(() => setIsFiltering(false), 180);
  };

  const filteredSkills = SKILLS.filter((skill: SkillItem) => {
    const matchesCategory = filter === 'all' || skill.category === filter;
    const matchesSearch = skill.name[lang]
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="keahlian"
      className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Sticky Control & Narrative Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-2">
                {copy.skills.sectionLabel}
              </span>
              <h2
                className={`font-display text-3xl sm:text-4xl font-bold tracking-tight mb-3 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                {copy.skills.title}
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {copy.skills.subtitle}
              </p>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={copy.skills.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs border transition-colors outline-none ${
                  darkMode
                    ? 'bg-[#101622] border-white/10 text-white placeholder:text-slate-500 focus:border-blue-400/60'
                    : 'bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500'
                }`}
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap lg:flex-col gap-2">
              <button
                type="button"
                onClick={() => handleFilterChange('all')}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold text-left flex items-center justify-between cursor-pointer btn-interactive ${
                  filter === 'all'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : darkMode
                    ? 'bg-white/5 text-slate-300 hover:bg-white/10'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{copy.skills.filterAll}</span>
                <span className="font-mono tabular-nums opacity-80">{SKILLS.length}</span>
              </button>
              <button
                type="button"
                onClick={() => handleFilterChange('technical')}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold text-left flex items-center justify-between cursor-pointer btn-interactive ${
                  filter === 'technical'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : darkMode
                    ? 'bg-white/5 text-slate-300 hover:bg-white/10'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{copy.skills.filterTech}</span>
                <span className="font-mono tabular-nums opacity-80">
                  {SKILLS.filter((s) => s.category === 'technical').length}
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleFilterChange('soft')}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold text-left flex items-center justify-between cursor-pointer btn-interactive ${
                  filter === 'soft'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : darkMode
                    ? 'bg-white/5 text-slate-300 hover:bg-white/10'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{copy.skills.filterSoft}</span>
                <span className="font-mono tabular-nums opacity-80">
                  {SKILLS.filter((s) => s.category === 'soft').length}
                </span>
              </button>
            </div>
          </div>

          {/* Right 2-Column Skills Grid */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-white/10 text-xs font-mono text-slate-500">
              <span className="tabular-nums">
                {filteredSkills.length} {copy.skills.countSuffix}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {isFiltering
                ? Array.from({ length: Math.min(filteredSkills.length || 6, 8) }).map((_, idx) => (
                    <div
                      key={`skill-skel-${idx}`}
                      className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${
                        darkMode ? 'bg-[#101622] border-white/10' : 'bg-white border-slate-200'
                      }`}
                    >
                      <div className="space-y-2 flex-1">
                        <div className="h-3.5 w-3/4 rounded skeleton-shimmer" />
                        <div className="h-2.5 w-1/3 rounded skeleton-shimmer" />
                      </div>
                      <div className="h-3 w-16 rounded skeleton-shimmer" />
                    </div>
                  ))
                : filteredSkills.map((skill: SkillItem, index: number) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border flex items-center justify-between gap-3 card-interactive ${
                        skill.highlight
                          ? darkMode
                            ? 'bg-[#101622] border-blue-400/30 hover:border-blue-400/60 shadow-sm'
                            : 'bg-white border-blue-500/30 hover:border-blue-500/60 shadow-2xs'
                          : darkMode
                          ? 'bg-[#0c111b] border-white/10 hover:border-white/20'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div
                          className={`text-xs sm:text-sm font-bold leading-tight ${
                            darkMode ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {skill.name[lang]}
                        </div>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                          {skill.category === 'technical'
                            ? copy.skills.techLabel
                            : copy.skills.softLabel}
                        </span>
                      </div>

                      <span
                        className={`text-[11px] font-mono font-medium shrink-0 ${
                          skill.highlight
                            ? 'text-blue-600 dark:text-blue-300'
                            : darkMode
                            ? 'text-slate-400'
                            : 'text-slate-600'
                        }`}
                      >
                        {skill.level[lang]}
                      </span>
                    </div>
                  ))}
            </div>

            {!isFiltering && filteredSkills.length === 0 && (
              <div className="text-center py-12">
                <p className="text-sm text-slate-500 dark:text-slate-400">{copy.skills.empty}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
