import React, { useState, useEffect } from 'react';
import { INITIAL_DOCUMENTATIONS, DocumentationItem, Language, UI_COPY } from '../data/portfolioData';
import { ShimmerImage } from './ShimmerImage';
import {
  Camera,
  Eye,
  RotateCcw,
  Check,
  X,
  Lock,
  Unlock,
  Info,
} from 'lucide-react';

interface DocumentationProps {
  darkMode: boolean;
  lang: Language;
}

const STORAGE_KEY = 'upik_portfolio_custom_docs_v2';

export const DocumentationGallery: React.FC<DocumentationProps> = ({ darkMode, lang }) => {
  const [docs, setDocs] = useState<DocumentationItem[]>(INITIAL_DOCUMENTATIONS);
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'work' | 'internship' | 'project' | 'organization'
  >('all');
  const [isGridLoading, setIsGridLoading] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{
    title: string;
    url: string;
    desc: string;
    place: string;
  } | null>(null);
  const [isOwnerMode, setIsOwnerMode] = useState(false);
  const [editingDocId, setEditingDocId] = useState<string | null>(null);
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const copy = UI_COPY[lang];

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: Record<string, string> = JSON.parse(saved);
        const merged = INITIAL_DOCUMENTATIONS.map((initialDoc) => {
          const customUrl = parsed[initialDoc.id];
          if (customUrl && !customUrl.includes(' ') && !customUrl.includes('tanpa judul')) {
            return { ...initialDoc, imageUrl: customUrl };
          }
          return initialDoc;
        });
        setDocs(merged);
      }
    } catch {
      setDocs(INITIAL_DOCUMENTATIONS);
    }
  }, []);

  const persistCustomImages = (updatedDocs: DocumentationItem[]) => {
    setDocs(updatedDocs);
    try {
      const map: Record<string, string> = {};
      updatedDocs.forEach((d) => {
        if (d.imageUrl) map[d.id] = d.imageUrl;
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
    } catch {
      // ignore
    }
  };

  const handleCategoryChange = (
    cat: 'all' | 'work' | 'internship' | 'project' | 'organization'
  ) => {
    if (cat === selectedCategory) return;
    setSelectedCategory(cat);
    setIsGridLoading(true);
    setTimeout(() => setIsGridLoading(false), 220);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, docId: string) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      const updated = docs.map((d) => (d.id === docId ? { ...d, imageUrl: dataUrl } : d));
      persistCustomImages(updated);
      setUploadSuccess(true);
      setTimeout(() => {
        setUploadSuccess(false);
        setEditingDocId(null);
      }, 1500);
    };
    reader.readAsDataURL(file);
  };

  const handleUrlSubmit = (docId: string) => {
    if (!customUrlInput.trim()) return;
    const updated = docs.map((d) =>
      d.id === docId ? { ...d, imageUrl: customUrlInput.trim() } : d
    );
    persistCustomImages(updated);
    setCustomUrlInput('');
    setUploadSuccess(true);
    setTimeout(() => {
      setUploadSuccess(false);
      setEditingDocId(null);
    }, 1500);
  };

  const handleResetImage = (docId: string) => {
    const updated = docs.map((d) => (d.id === docId ? { ...d, imageUrl: undefined } : d));
    persistCustomImages(updated);
    setEditingDocId(null);
  };

  const categories: Array<{
    key: 'all' | 'work' | 'internship' | 'project' | 'organization';
    label: string;
  }> = [
    { key: 'all', label: copy.gallery.filterAll },
    { key: 'work', label: copy.gallery.filterWork },
    { key: 'internship', label: copy.gallery.filterInternship },
    { key: 'project', label: copy.gallery.filterProject },
    { key: 'organization', label: copy.gallery.filterOrg },
  ];

  const filteredDocs = docs.filter((item) =>
    selectedCategory === 'all' ? true : item.categoryKey === selectedCategory
  );

  return (
    <section
      id="dokumentasi"
      className="py-16 md:py-24 border-t border-slate-200 dark:border-white/10 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 border-b pb-4 border-slate-200 dark:border-white/10 gap-3">
          <div>
            <span className="text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 uppercase flex items-center gap-1.5 mb-2">
              <Camera className="w-3.5 h-3.5" />
              {copy.gallery.sectionLabel}
            </span>
            <h2
              className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {copy.gallery.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsOwnerMode(!isOwnerMode);
              if (isOwnerMode) setEditingDocId(null);
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 border cursor-pointer btn-interactive ${
              isOwnerMode
                ? 'bg-blue-600 text-white font-bold border-blue-500 shadow-md'
                : darkMode
                ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            {isOwnerMode ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
            <span>{isOwnerMode ? copy.gallery.ownerModeOn : copy.gallery.ownerModeOff}</span>
          </button>
        </div>

        {/* Owner Mode Notice */}
        {isOwnerMode && (
          <div
            className={`p-4 rounded-xl border mb-6 text-xs flex items-start gap-3 ${
              darkMode
                ? 'bg-blue-500/10 border-blue-400/30 text-blue-200'
                : 'bg-blue-50 border-blue-200 text-blue-900'
            }`}
          >
            <Info className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="font-bold">{copy.gallery.ownerNoticeTitle}</span>{' '}
              {copy.gallery.ownerNoticeBody}
            </div>
          </div>
        )}

        {/* Category Filter Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => handleCategoryChange(cat.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide cursor-pointer btn-interactive ${
                  selectedCategory === cat.key
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/20'
                    : darkMode
                    ? 'bg-white/5 text-slate-300 hover:bg-white/10'
                    : 'bg-slate-200/70 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
            <span>{copy.gallery.tapHint}</span>
          </div>
        </div>

        {/* Dynamic Bento Grid (Featured wide card when showing All) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((item, idx) => {
            const currentImg = item.imageUrl || item.defaultPlaceholder;
            const isCustom = Boolean(item.imageUrl);
            const isEditing = isOwnerMode && editingDocId === item.id;
            const isFeatured = selectedCategory === 'all' && idx === 0;
            const badgeLabel = item.subCategory
              ? `${item.categoryLabel[lang]} · ${item.subCategory}`
              : item.categoryLabel[lang];

            if (isGridLoading) {
              return (
                <div
                  key={`skel-${item.id}`}
                  className={`rounded-2xl border overflow-hidden flex flex-col ${
                    isFeatured ? 'sm:col-span-2 lg:col-span-2' : ''
                  } ${darkMode ? 'bg-[#101622] border-white/10' : 'bg-white border-slate-200'}`}
                >
                  <div className="aspect-[16/10] w-full skeleton-shimmer" />
                  <div className="p-5 space-y-3">
                    <div className="h-3 w-2/3 rounded skeleton-shimmer" />
                    <div className="h-4 w-5/6 rounded skeleton-shimmer" />
                    <div className="h-3 w-full rounded skeleton-shimmer" />
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                id={`doc-card-${item.id}`}
                className={`rounded-2xl border overflow-hidden flex flex-col justify-between group card-interactive ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-2' : ''
                } ${
                  darkMode
                    ? 'bg-[#101622] border-white/10 hover:border-blue-400/40 shadow-lg shadow-black/30'
                    : 'bg-white border-slate-200 hover:border-blue-500/40 shadow-md shadow-slate-200/50'
                }`}
              >
                {/* Image Frame */}
                <div
                  className={`relative w-full aspect-video overflow-hidden cursor-pointer ${
                    darkMode ? 'bg-[#080b12]' : 'bg-slate-100'
                  }`}
                  onClick={() =>
                    setLightboxImage({
                      title: item.title[lang],
                      url: currentImg,
                      desc: item.description[lang],
                      place: `${item.locationOrOrg} (${item.year[lang]})`,
                    })
                  }
                >
                  <ShimmerImage
                    src={currentImg}
                    alt={item.title[lang]}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4 z-20">
                    <span className="px-3.5 py-2 rounded-xl bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md shadow-lg">
                      <Eye className="w-4 h-4" />
                      <span>{copy.gallery.viewFull}</span>
                    </span>
                  </div>
                </div>

                {/* Inline Upload Form (Owner Mode) */}
                {isEditing && (
                  <div
                    className={`p-4 border-b border-blue-400/30 text-xs ${
                      darkMode ? 'bg-blue-500/5 text-slate-200' : 'bg-blue-50 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-blue-500 dark:text-blue-400">
                        {copy.gallery.replaceTitle} {item.title[lang]}
                      </span>
                      <button
                        type="button"
                        onClick={() => setEditingDocId(null)}
                        className="text-slate-400 hover:text-white cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="mb-3">
                      <label className="block text-[11px] font-mono text-slate-400 mb-1">
                        {copy.gallery.pickFile}
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, item.id)}
                        className="block w-full text-[11px] text-slate-400 file:mr-2 file:py-1 file:px-2.5 file:rounded-md file:border-0 file:text-[11px] file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-500 cursor-pointer"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono text-slate-400">
                        {copy.gallery.orUrl}
                      </label>
                      <div className="flex gap-1.5">
                        <input
                          type="url"
                          placeholder="/kampus.jpg"
                          value={customUrlInput}
                          onChange={(e) => setCustomUrlInput(e.target.value)}
                          className={`flex-1 px-2.5 py-1.5 rounded-lg text-xs border outline-none ${
                            darkMode
                              ? 'bg-[#080b12] border-white/10 text-white'
                              : 'bg-white border-slate-200 text-slate-900'
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => handleUrlSubmit(item.id)}
                          className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-bold text-xs shrink-0 cursor-pointer btn-interactive"
                        >
                          {copy.gallery.save}
                        </button>
                      </div>
                    </div>

                    {isCustom && (
                      <button
                        type="button"
                        onClick={() => handleResetImage(item.id)}
                        className="mt-2.5 text-[11px] text-rose-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>{copy.gallery.resetDefault}</span>
                      </button>
                    )}

                    {uploadSuccess && (
                      <div className="mt-2 text-emerald-400 font-bold text-xs flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        <span>{copy.gallery.savedSuccess}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div
                    onClick={() =>
                      setLightboxImage({
                        title: item.title[lang],
                        url: currentImg,
                        desc: item.description[lang],
                        place: `${item.locationOrOrg} (${item.year[lang]})`,
                      })
                    }
                    className="cursor-pointer sm:cursor-default"
                  >
                    <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold mb-1">
                      {badgeLabel} &middot; {item.locationOrOrg} &middot; {item.year[lang]}
                      {isCustom && (
                        <span className="ml-1.5 text-emerald-500">({copy.gallery.customBadge})</span>
                      )}
                    </div>
                    <h3
                      className={`text-sm sm:text-base font-bold sm:mb-2 ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {item.title[lang]}
                    </h3>
                    <p
                      className={`hidden sm:block text-xs leading-relaxed ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {item.description[lang]}
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxImage({
                          title: item.title[lang],
                          url: currentImg,
                          desc: item.description[lang],
                          place: `${item.locationOrOrg} (${item.year[lang]})`,
                        })
                      }
                      className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer btn-interactive"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{copy.gallery.viewFull}</span>
                    </button>

                    {isOwnerMode && (
                      <button
                        type="button"
                        onClick={() => setEditingDocId(isEditing ? null : item.id)}
                        className="text-[11px] font-mono text-blue-500 dark:text-blue-300 hover:underline flex items-center gap-1 cursor-pointer btn-interactive"
                      >
                        <Camera className="w-3 h-3" />
                        <span>{isEditing ? copy.gallery.cancel : copy.gallery.changePhoto}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className={`max-w-3xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 rounded-2xl border shadow-2xl relative ${
                darkMode
                  ? 'bg-[#101622] border-blue-400/30 text-white'
                  : 'bg-white border-slate-200 text-slate-900'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-bold">
                    {lightboxImage.title}
                  </h4>
                  <p className="text-xs font-mono text-blue-500 dark:text-blue-400 mt-0.5">
                    {lightboxImage.place}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="w-8 h-8 rounded-lg bg-slate-200/70 dark:bg-white/10 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-white/20 cursor-pointer btn-interactive"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative w-full rounded-xl overflow-hidden mb-3 bg-black flex items-center justify-center min-h-[220px]">
                <ShimmerImage
                  src={lightboxImage.url}
                  alt={lightboxImage.title}
                  loading="eager"
                  containerClassName="w-full flex items-center justify-center relative"
                  className="w-full max-h-[55vh] object-contain"
                />
              </div>

              <p
                className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {lightboxImage.desc}
              </p>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs cursor-pointer btn-interactive"
                >
                  {copy.gallery.closeModal}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
