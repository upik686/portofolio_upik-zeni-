import React, { useState, useEffect } from 'react';
import { PROFILE, Language, UI_COPY } from '../data/portfolioData';
import { Mail, Lock, Copy, Check, Send, X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  lang: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  darkMode,
  lang,
}) => {
  const copy = UI_COPY[lang];
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [messageTopic, setMessageTopic] = useState(copy.modal.topics[0]);
  const [messageBody, setMessageBody] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  useEffect(() => {
    setMessageTopic(UI_COPY[lang].modal.topics[0]);
  }, [lang]);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portofolio Upik Zeni] ${messageTopic} - ${senderName}`);
    const body = encodeURIComponent(
      `${lang === 'id' ? 'Halo Upik Zeni' : 'Hello Upik Zeni'},\n\n${senderName} (${senderEmail}).\n\n${messageBody}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      onClose();
    }, 2200);
  };

  return (
    <div
      id="contact-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        id="contact-modal-card"
        className={`max-w-lg w-full max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl p-6 sm:p-8 relative ${
          darkMode
            ? 'bg-[#101622] border-blue-400/30 text-white'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-slate-200/70 dark:bg-white/10 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-white/20 cursor-pointer btn-interactive"
          aria-label={copy.modal.closeLabel}
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6 pr-8">
          <div className="text-xs font-mono text-blue-500 dark:text-blue-400 font-semibold mb-1.5">
            {copy.modal.eyebrow}
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
            {copy.modal.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {copy.modal.subtitle}
          </p>
        </div>

        {/* Privacy-safe Email & Contact Request Notice */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
          <button
            type="button"
            onClick={copyEmail}
            className={`p-3 rounded-xl border text-left flex flex-col justify-between cursor-pointer card-interactive ${
              darkMode
                ? 'bg-white/5 border-white/10 hover:bg-white/10'
                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {copy.modal.emailLabel}
              </span>
              {copiedEmail ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </div>
            <span className="text-xs font-mono font-medium truncate">{PROFILE.email}</span>
          </button>

          <div
            className={`p-3 rounded-xl border text-left flex flex-col justify-between ${
              darkMode
                ? 'bg-white/5 border-white/10'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
              <Lock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{copy.modal.privacyNoteLabel}</span>
            </div>
            <span className="text-[11px] leading-snug text-slate-500 dark:text-slate-300">
              {copy.modal.privacyNoteValue}
            </span>
          </div>
        </div>

        <form onSubmit={handleSendMessage} className="space-y-3.5">
          <div>
            <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              {copy.modal.nameLabel}
            </label>
            <input
              type="text"
              required
              placeholder={copy.modal.namePlaceholder}
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none transition-colors ${
                darkMode
                  ? 'bg-[#080b12] border-white/10 text-white focus:border-blue-400'
                  : 'bg-white border-slate-200 text-slate-900 focus:border-blue-500'
              }`}
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              {copy.modal.senderEmailLabel}
            </label>
            <input
              type="email"
              required
              placeholder={copy.modal.senderEmailPlaceholder}
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none transition-colors ${
                darkMode
                  ? 'bg-[#080b12] border-white/10 text-white focus:border-blue-400'
                  : 'bg-white border-slate-200 text-slate-900 focus:border-blue-500'
              }`}
            />
          </div>

          <div>
            <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              {copy.modal.topicLabel}
            </label>
            <select
              value={messageTopic}
              onChange={(e) => setMessageTopic(e.target.value)}
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none transition-colors ${
                darkMode
                  ? 'bg-[#080b12] border-white/10 text-white focus:border-blue-400'
                  : 'bg-white border-slate-200 text-slate-900 focus:border-blue-500'
              }`}
            >
              {copy.modal.topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
              {copy.modal.messageLabel}
            </label>
            <textarea
              rows={3}
              required
              placeholder={copy.modal.messagePlaceholder}
              value={messageBody}
              onChange={(e) => setMessageBody(e.target.value)}
              className={`w-full px-3.5 py-2.5 rounded-xl text-xs border outline-none transition-colors resize-none ${
                darkMode
                  ? 'bg-[#080b12] border-white/10 text-white focus:border-blue-400'
                  : 'bg-white border-slate-200 text-slate-900 focus:border-blue-500'
              }`}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 cursor-pointer btn-interactive"
          >
            {sentSuccess ? (
              <>
                <Check className="w-4 h-4" />
                <span>{copy.modal.openingEmail}</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>{copy.modal.submit}</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
