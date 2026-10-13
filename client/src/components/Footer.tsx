import React, { useState } from 'react';
import { NAV_ITEMS } from '../data/content';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  // Keynote booking form state in the contact hub
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Keynote Address');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryError, setInquiryError] = useState('');

  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      setNewsletterError('Please provide your email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      setNewsletterError('Please provide a valid email address.');
      return;
    }

    setNewsletterError('');
    setNewsletterSubmitted(true);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryEmail.trim() || !inquiryMessage.trim()) {
      setInquiryError('Please complete all required fields.');
      return;
    }
    setInquiryError('');
    setInquirySubmitted(true);
  };

  const handleScrollTo = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#0A1128] pt-24 pb-12 border-t border-white/10 text-[#F8F9FA]"
      aria-label="Footer and Contact Hub"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Contact / Event Booking Direct Portal */}
        <ScrollReveal variant="fade-up">
          <div className="mb-20 pb-20 border-b border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                  Executive Engagements
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 leading-snug">
                Invite Bennyhinn to Your Stage or Boardroom.
              </h3>
              <p className="font-sans text-sm text-[#F8F9FA]/75 leading-relaxed mb-6 font-light">
                For keynote presentations, corporate leadership retreats, executive debate moderating, or media interviews, submit your request or reach out directly.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-[#F8F9FA]/90">
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <a
                    href="mailto:officialbennyhinnwalubengo@gmail.com"
                    className="hover:text-[#D4AF37] transition-colors font-sans"
                  >
                    officialbennyhinnwalubengo@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#121212] p-6 sm:p-8 border border-white/10 rounded-sm">
              {inquirySubmitted ? (
                <div className="p-8 text-center animate-fadeIn" role="status">
                  <CheckCircle2 className="w-10 h-10 text-[#D4AF37] mx-auto mb-3" />
                  <h4 className="font-serif text-2xl font-bold text-white mb-2">
                    Inquiry Received
                  </h4>
                  <p className="font-sans text-sm text-white/70 max-w-md mx-auto mb-6">
                    Thank you, {inquiryName}. The Voice of Benny executive office will review your request and respond within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setInquirySubmitted(false);
                      setInquiryName('');
                      setInquiryEmail('');
                      setInquiryMessage('');
                    }}
                    className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} noValidate className="space-y-4">
                  <h4 className="font-serif text-xl font-bold text-white mb-4">
                    Direct Booking Inquiry
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inquiry-name" className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-sans">
                        Your Full Name *
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Dr. Jane Okonkwo"
                        required
                        className="w-full px-4 py-3 bg-[#0A1128] border border-white/15 focus:border-[#D4AF37] rounded-sm font-sans text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-email" className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-sans">
                        Work / Official Email *
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="jane@organization.org"
                        required
                        className="w-full px-4 py-3 bg-[#0A1128] border border-white/15 focus:border-[#D4AF37] rounded-sm font-sans text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry-type" className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-sans">
                      Engagement Category
                    </label>
                    <select
                      id="inquiry-type"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0A1128] border border-white/15 focus:border-[#D4AF37] rounded-sm font-sans text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Keynote Address">Keynote Address (Conference / Summit)</option>
                      <option value="Corporate Masterclass">Corporate Executive Masterclass</option>
                      <option value="University Lecture">Academic / University Convocation</option>
                      <option value="Vision 2029 Partnership">#Vision 2029 Strategic Partnership</option>
                      <option value="Media Interview">Media / Broadcast Interview</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="inquiry-message" className="block text-xs uppercase tracking-wider text-white/60 mb-1.5 font-sans">
                      Event Details & Proposed Date *
                    </label>
                    <textarea
                      id="inquiry-message"
                      rows={3}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder="Outline event theme, expected audience size, dates, and location..."
                      required
                      className="w-full px-4 py-3 bg-[#0A1128] border border-white/15 focus:border-[#D4AF37] rounded-sm font-sans text-sm text-white placeholder:text-white/30 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {inquiryError && (
                    <p className="font-sans text-xs text-red-400 font-medium" role="alert">
                      {inquiryError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#E3C45B] text-[#0A1128] font-sans font-semibold text-xs uppercase tracking-[0.16em] rounded-sm transition-all duration-200 shadow-md"
                  >
                    <span>Submit Booking Inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* 3-Column Midnight Footer */}
        <ScrollReveal variant="fade-up" delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
            {/* Column 1: Join the Vision Newsletter */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-serif text-2xl font-bold text-white tracking-tight">
              Join the Vision.
            </h4>
            <p className="font-sans text-sm text-[#F8F9FA]/70 leading-relaxed font-light max-w-sm">
              Receive new Hinnfluence conversations, leadership insights, and updates from the road to ten million lives.
            </p>

            {newsletterSubmitted ? (
              <div
                className="bg-[#D4AF37]/15 border border-[#D4AF37]/40 p-4 rounded-sm"
                role="status"
                aria-live="polite"
              >
                <p className="font-sans text-sm text-[#D4AF37] font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>You are now part of the vision.</span>
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} noValidate className="space-y-2">
                <div className="flex max-w-md">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address for newsletter
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterError) setNewsletterError('');
                    }}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 bg-[#121212] border border-white/15 focus:border-[#D4AF37] rounded-l-sm font-sans text-sm text-white placeholder:text-white/35 focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Submit newsletter subscription"
                    className="px-5 py-3 bg-[#D4AF37] hover:bg-[#E3C45B] text-[#0A1128] font-semibold rounded-r-sm transition-colors flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {newsletterError && (
                  <p className="font-sans text-xs text-red-400" role="alert">
                    {newsletterError}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="font-sans text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Navigation
            </h5>
            <ul className="space-y-2.5 font-sans text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(item.href);
                    }}
                    className="text-[#F8F9FA]/70 hover:text-white hover:text-[#D4AF37] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media & Institutional Affiliations */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <h5 className="font-sans text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-3">
                Connect
              </h5>
              <div className="flex items-center gap-3">
                {/* LinkedIn */}
                <a
                  href="#contact"
                  aria-label="Connect on LinkedIn"
                  className="w-10 h-10 rounded-sm bg-white/[0.04] border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 flex items-center justify-center text-white/80 hover:text-[#D4AF37] transition-all"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="#contact"
                  aria-label="Follow on X"
                  className="w-10 h-10 rounded-sm bg-white/[0.04] border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 flex items-center justify-center text-white/80 hover:text-[#D4AF37] transition-all"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#contact"
                  aria-label="Follow on Instagram"
                  className="w-10 h-10 rounded-sm bg-white/[0.04] border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 flex items-center justify-center text-white/80 hover:text-[#D4AF37] transition-all"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="#contact"
                  aria-label="Subscribe on YouTube"
                  className="w-10 h-10 rounded-sm bg-white/[0.04] border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 flex items-center justify-center text-white/80 hover:text-[#D4AF37] transition-all"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Affiliations */}
            <div className="pt-2 border-t border-white/10 space-y-1 text-xs">
              <p className="font-sans uppercase tracking-[0.2em] text-[#D4AF37] font-semibold text-[10px]">
                Ambassador
              </p>
              <p className="font-serif text-base font-semibold text-white">
                PLO Lumumba Foundation
              </p>
              <p className="text-[11px] text-white/50">
                Championing continental Pan-African leadership & civic integrity.
              </p>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-sans">
          <p>
            &copy; {currentYear} Bennyhinn Walubengo. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span>Inquiries:</span>
            <a
              href="mailto:officialbennyhinnwalubengo@gmail.com"
              className="text-[#D4AF37] hover:underline"
            >
              officialbennyhinnwalubengo@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
