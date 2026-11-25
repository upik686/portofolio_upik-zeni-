import React, { useState } from 'react';
import { PROJECTS, ProjectItem, Language, UI_COPY } from '../data/portfolioData';
import { ShimmerImage } from './ShimmerImage';
import { CheckCircle, Users, ArrowUpRight, School, X } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsProps> = ({ darkMode, lang }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const copy = UI_COPY[lang];

  return (
    <section
      id="proyek"
      className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-12 border-b pb-4 border-slate-200 dark:border-white/10 gap-2">
          <div>
            <span className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 uppercase block mb-2">
              {copy.projects.sectionLabel}
            </span>
            <h2
              className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {copy.projects.title}
            </h2>
          </div>
          <span className="font-mono text-xs text-slate-500">
            {copy.projects.subtitle}
          </span>
        </div>

        {/* Symmetric Equal-Height Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {PROJECTS.map((proj: ProjectItem) => (
            <div
              key={proj.id}
              id={`project-card-${proj.id}`}
              onClick={() => setSelectedProject(proj)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedProject(proj);
                }
              }}
              className={`h-full rounded-2xl border overflow-hidden flex flex-col justify-between cursor-pointer text-left group card-interactive ${
                darkMode
                  ? 'bg-[#101622] border-white/10 hover:border-blue-400/40 shadow-lg shadow-black/40'
                  : 'bg-white border-slate-200 hover:border-blue-500/40 shadow-md shadow-slate-200/50'
              }`}
            >
              {/* Project Visual Preview (Hidden on mobile card face so mobile shows title-only; visible on laptop lg+) */}
              <div className="hidden lg:flex p-4 sm:p-5 pb-0 flex-col gap-3">
                <div
                  className={`relative aspect-video w-full rounded-xl overflow-hidden border ${
                    darkMode ? 'bg-[#080b12] border-white/10' : 'bg-slate-100 border-slate-200'
                  }`}
                >
                  <ShimmerImage
                    src={proj.image}
                    alt={proj.title[lang]}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono px-0.5">
                  <span
                    className={`px-2.5 py-1 rounded-md border ${
                      darkMode
                        ? 'bg-white/5 border-white/10 text-slate-300'
                        : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    {proj.year} &middot; {proj.partner}
                  </span>
                  {proj.stats && (
                    <span className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-300 font-semibold">
                      <Users className="w-3.5 h-3.5" />
                      <span>{proj.stats[lang]}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content Narrative */}
              <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5 lg:mb-2">
                    <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                      {proj.category[lang]}
                    </span>
                    <span className="lg:hidden text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {proj.year}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-lg sm:text-xl lg:text-2xl font-bold tracking-tight mb-1 lg:mb-1.5 ${
                      darkMode ? 'text-white' : 'text-slate-950'
                    }`}
                  >
                    {proj.title[lang]}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-300/90 flex items-center gap-1.5 mb-2 lg:mb-4">
                    <School className="w-3.5 h-3.5 shrink-0" />
                    <span>{proj.subtitle[lang]}</span>
                  </p>

                  <p
                    className={`hidden lg:block text-xs sm:text-sm leading-relaxed mb-5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {proj.description[lang]}
                  </p>

                  <ul className="hidden lg:block space-y-2 mb-6">
                    {proj.features[lang].slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-500 dark:text-blue-400 mt-0.5 shrink-0" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {proj.tools.join(' · ')}
                  </p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(proj);
                    }}
                    className={`px-4 py-2 rounded-xl border text-xs font-semibold inline-flex items-center justify-center gap-1.5 shrink-0 cursor-pointer btn-interactive ${
                      darkMode
                        ? 'bg-white/5 border-white/10 text-blue-300 hover:bg-blue-500/15 hover:border-blue-400/40'
                        : 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    <span>{copy.projects.learnMore}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className={`max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-2xl border shadow-2xl relative ${
                darkMode
                  ? 'bg-[#101622] border-blue-400/30 text-white'
                  : 'bg-white border-slate-200 text-slate-900'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-blue-500 dark:text-blue-400 uppercase tracking-widest">
                  {selectedProject.category[lang]}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-lg bg-slate-200/70 dark:bg-white/10 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-white/20 cursor-pointer btn-interactive"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h3 className="font-display text-2xl font-bold mb-1">
                {selectedProject.title[lang]}
              </h3>
              <p className="text-xs font-medium text-blue-500 dark:text-blue-400 mb-4">
                {selectedProject.subtitle[lang]}
              </p>

              <div
                className={`relative aspect-video w-full rounded-xl overflow-hidden border mb-4 ${
                  darkMode ? 'bg-[#080b12] border-white/10' : 'bg-slate-100 border-slate-200'
                }`}
              >
                <ShimmerImage
                  src={selectedProject.image}
                  alt={selectedProject.title[lang]}
                  loading="eager"
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-xs sm:text-sm leading-relaxed mb-6 opacity-90">
                {selectedProject.description[lang]}
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-500 dark:text-blue-400 font-semibold">
                  {copy.projects.modalAdvantages}
                </h4>
                {selectedProject.features[lang].map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs">
                    <CheckCircle className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono opacity-70">
                  {copy.projects.partnerPrefix} {selectedProject.partner}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer btn-interactive"
                >
                  {copy.projects.close}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
