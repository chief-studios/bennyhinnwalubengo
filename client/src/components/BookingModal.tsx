import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultTopic = 'Keynote Address',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [topic, setTopic] = useState(defaultTopic);
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setTopic(defaultTopic);
  }, [defaultTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      setError('Please provide your name and work email.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-xl bg-[#0A1128] border border-white/15 rounded-sm p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-[#D4AF37] transition-colors p-1"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <h3 className="font-serif text-3xl font-bold text-white mb-2">
              Engagement Request Received
            </h3>
            <p className="font-sans text-sm text-white/70 max-w-md mx-auto mb-6">
              Thank you, {fullName}. Bennyhinn’s executive coordination desk has received your request and will reach out with availability and rider details within 24 hours.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-[#D4AF37] hover:bg-[#E3C45B] text-[#0A1128] font-sans font-semibold text-xs uppercase tracking-wider rounded-sm"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Executive Desk
              </span>
              <h2
                id="booking-modal-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1"
              >
                Book Bennyhinn Walubengo
              </h2>
              <p className="font-sans text-xs sm:text-sm text-white/60 mt-1">
                For keynote speeches, leadership training, and institutional partnerships.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-name" className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-sans">
                    Full Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Name"
                    required
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-white/15 focus:border-[#D4AF37] rounded-sm text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-sans">
                    Email Address *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@organization.com"
                    required
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-white/15 focus:border-[#D4AF37] rounded-sm text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-org" className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-sans">
                    Organization / Company
                  </label>
                  <input
                    id="modal-org"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="Organization name"
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-white/15 focus:border-[#D4AF37] rounded-sm text-sm text-white placeholder:text-white/30 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="modal-date" className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-sans">
                    Target Event Date
                  </label>
                  <input
                    id="modal-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#121212] border border-white/15 focus:border-[#D4AF37] rounded-sm text-sm text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-topic" className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-sans">
                  Engagement Type
                </label>
                <select
                  id="modal-topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#121212] border border-white/15 focus:border-[#D4AF37] rounded-sm text-sm text-white focus:outline-none"
                >
                  <option value="Keynote Address">Keynote Address (Conference / Summit)</option>
                  <option value="Corporate Masterclass">Executive Leadership Masterclass</option>
                  <option value="Debate & Moderation">High-Level Debate & Moderation</option>
                  <option value="Vision 2029 Partnership">#Vision 2029 Strategic Partnership</option>
                  <option value="Media & Podcast Appearance">Media Interview / Guest Appearance</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-notes" className="block text-xs uppercase tracking-wider text-white/60 mb-1 font-sans">
                  Event Objectives & Details
                </label>
                <textarea
                  id="modal-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Expected attendees, event location or virtual platform, primary themes..."
                  className="w-full px-3.5 py-2.5 bg-[#121212] border border-white/15 focus:border-[#D4AF37] rounded-sm text-sm text-white placeholder:text-white/30 focus:outline-none resize-none"
                />
              </div>

              {error && (
                <p className="font-sans text-xs text-red-400" role="alert">
                  {error}
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#E3C45B] text-[#0A1128] font-sans font-semibold text-xs uppercase tracking-[0.16em] rounded-sm transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Transmit Booking Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
