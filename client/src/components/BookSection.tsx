import React, { useState } from 'react';
import { Download, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';

export const BookSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please provide your email address to receive Chapter 1.');
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
    <section
      id="book"
      className="relative w-full bg-[#121212] py-28 md:py-36 border-y border-white/[0.08] overflow-hidden"
      aria-label="SPROUT Book Showcase by Bennyhinn Walubengo"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Desktop Two-Column Split Screen, Mobile Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-center">
          {/* Left Column: 3D CSS Book Mockup */}
          <div className="lg:col-span-5 flex items-center justify-center py-6">
            <div className="relative flex items-center justify-center">
              {/* Muted Gold Glow Behind Book */}
              <div className="absolute w-72 h-96 sm:w-80 sm:h-[450px] bg-[#D4AF37]/20 rounded-full blur-[60px] pointer-events-none" />

              {/* 3D Book Container */}
              <div className="book-perspective relative select-none">
                <div
                  className="book-container relative w-[250px] h-[375px] sm:w-[290px] sm:h-[435px] cursor-pointer rounded-r-md shadow-2xl"
                  style={{
                    boxShadow: '25px 25px 50px rgba(0,0,0,0.85), -5px 0 20px rgba(212,175,55,0.15)',
                  }}
                  tabIndex={0}
                  role="img"
                  aria-label="3D Book Cover of SPROUT by Bennyhinn Walubengo"
                >
                  {/* Front Cover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E3C45B] via-[#D4AF37] to-[#B38F24] p-7 sm:p-9 flex flex-col justify-between text-[#0A1128] rounded-r-md border-t border-r border-[#FFF5CC]/40 overflow-hidden">
                    {/* Metallic foil sheen gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

                    {/* Subtle book edge shadow overlay on left spine seam */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/25 via-black/10 to-transparent pointer-events-none" />

                    {/* Book Top: Author Name */}
                    <div className="relative z-10 text-center border-b border-[#0A1128]/15 pb-4">
                      <p className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#0A1128]">
                        Bennyhinn Walubengo
                      </p>
                    </div>

                    {/* Center: Sprout Symbol & Title */}
                    <div className="relative z-10 flex flex-col items-center my-auto py-2 text-center">
                      {/* Minimal Line-Art Sprouting Plant Symbol */}
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 text-[#0A1128]">
                        <svg
                          viewBox="0 0 64 64"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-full h-full drop-shadow-sm"
                          aria-hidden="true"
                        >
                          {/* Soil curve */}
                          <path d="M12 52c10-2 30-2 40 0" strokeWidth="2.5" />
                          {/* Main stem */}
                          <path d="M32 50c0-12 1-22 3-32" />
                          {/* Left sprout leaf */}
                          <path d="M34 32c-6-2-16 0-18-8 8-1 16 3 18 8z" />
                          {/* Right sprout leaf */}
                          <path d="M35 24c6-2 15 1 17-7-8-1-15 3-17 7z" />
                          {/* Top bud */}
                          <path d="M35 18c0-3 2-6 2-6s-4 2-4 5" />
                        </svg>
                      </div>

                      {/* Title: SPROUT */}
                      <h3 className="font-serif text-4xl sm:text-5xl font-black tracking-wider text-[#0A1128] leading-none mb-3">
                        SPROUT
                      </h3>

                      {/* Subtitle */}
                      <p className="font-serif italic text-xs sm:text-sm text-[#0A1128]/90 max-w-[210px] leading-snug">
                        “A story of resilience, purpose, and beginning again.”
                      </p>
                    </div>

                    {/* Book Bottom Badge */}
                    <div className="relative z-10 text-center border-t border-[#0A1128]/15 pt-3">
                      <p className="font-sans text-[9px] uppercase tracking-[0.2em] font-semibold text-[#0A1128]/80">
                        Official Edition · First Print
                      </p>
                    </div>
                  </div>

                  {/* 3D Dark Spine Effect */}
                  <div
                    className="book-spine absolute top-0 bottom-0 left-0 w-[42px] bg-gradient-to-r from-[#8E7019] via-[#A88520] to-[#735A14] flex items-center justify-center text-[#0A1128] shadow-inner"
                    style={{
                      transform: 'rotateY(-90deg) translateZ(0px)',
                    }}
                  >
                    <span
                      className="font-serif text-xs font-bold tracking-[0.25em] text-[#0A1128] uppercase whitespace-nowrap"
                      style={{ transform: 'rotate(-90deg)' }}
                    >
                      SPROUT · Bennyhinn Walubengo
                    </span>
                  </div>

                  {/* 3D Page Edge Thickness */}
                  <div
                    className="absolute top-[3px] bottom-[3px] right-[-14px] w-[14px] bg-gradient-to-r from-[#EDEAE2] via-[#F8F6F0] to-[#E2DDD3] rounded-r-xs shadow-md border-r border-[#DCD5C6]"
                    style={{
                      transform: 'rotateY(0deg)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Lead Magnet Form */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                  The Book
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#F8F9FA] tracking-tight leading-[1.1] mb-6">
                Documenting{' '}
                <span className="text-[#D4AF37] italic font-serif">
                  the Journey.
                </span>
              </h2>

              <p className="font-sans text-base sm:text-lg text-[#F8F9FA]/85 font-light leading-relaxed mb-6">
                SPROUT is a reflection on resilience: the courage to confront mistakes, learn from them, and rise with deeper purpose. Because becoming is rarely perfect—but it is always possible.
              </p>

              <div className="p-5 bg-white/[0.03] border border-white/10 rounded-sm mb-8 space-y-3">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                    Inside, Bennyhinn candidly shares his personal trials, the formulation of moral resilience, and the internal systems required to lead people when circumstances test your foundations.
                  </p>
                </div>
              </div>
            </div>

            {/* Lead Magnet Form */}
            <div className="bg-[#1A1A1A] p-6 sm:p-8 border border-white/10 rounded-sm shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-white">
                  Get Immediate Access
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-white/60 mb-6">
                Receive the complimentary prologue and full Chapter 1 delivered straight to your inbox.
              </p>

              {submitted ? (
                <div
                  className="bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-sm p-6 text-center animate-fadeIn"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                  <h4 className="font-serif text-xl text-[#F8F9FA] font-bold mb-1">
                    Thank you. Chapter 1 is on its way.
                  </h4>
                  <p className="font-sans text-xs text-white/70">
                    We’ve sent the manuscript excerpt to <strong className="text-white">{email}</strong>. Check your inbox momentarily.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setEmail('');
                    }}
                    className="mt-4 font-sans text-xs uppercase tracking-widest text-[#D4AF37] underline hover:text-[#E3C45B]"
                  >
                    Send to another email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label htmlFor="chapter-email" className="sr-only">
                      Email Address
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        id="chapter-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError('');
                        }}
                        placeholder="Enter your email address"
                        required
                        className="flex-1 px-4 py-3.5 bg-[#0A1128] border border-white/20 focus:border-[#D4AF37] rounded-sm font-sans text-sm text-[#F8F9FA] placeholder:text-white/40 focus:outline-none transition-colors"
                      />

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#E3C45B] text-[#0A1128] font-sans font-semibold text-xs uppercase tracking-[0.16em] rounded-sm transition-all duration-200 shadow-lg shadow-[#D4AF37]/20 whitespace-nowrap active:scale-[0.98]"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Chapter 1 Free</span>
                      </button>
                    </div>
                  </div>

                  {error && (
                    <p className="font-sans text-xs text-red-400 font-medium" role="alert">
                      {error}
                    </p>
                  )}

                  <p className="font-sans text-[11px] text-white/40">
                    No spam. Unsubscribe at any time with a single click.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
