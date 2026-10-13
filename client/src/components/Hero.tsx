import React from 'react';
import { Play, ChevronDown, Calendar, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenBookingModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A1128] pt-20 md:pt-0"
      aria-label="Bennyhinn Walubengo Introduction"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1778847195151-1f560657a248?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=90&w=2000"
          alt="Keynote speaker delivering an address on an illuminated auditorium stage"
          className="w-full h-full object-cover object-right md:object-center transform scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />

        {/* Strong Left Midnight Gradient for High-Contrast Editorial Reading */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/95 via-45% md:via-[#0A1128]/85 md:via-55% to-[#0A1128]/40" />

        {/* Top and Bottom Subtle Edge Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent via-40% to-[#0A1128]/75" />

        {/* Film-grain texture */}
        <div className="absolute inset-0 film-grain pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl">
          {/* Small Top Label */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 mb-6 md:mb-8 rounded-sm bg-white/[0.04] border border-white/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#D4AF37] font-semibold">
              Keynote Speaker · Author · Political Visionary
            </p>
          </div>

          {/* Oversized Serif Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#F8F9FA] tracking-tight leading-[1.05] mb-6 md:mb-8">
            More Than Your <br className="hidden sm:inline" />
            <span className="text-[#D4AF37] italic font-serif font-normal">
              Average Leader.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#F8F9FA]/85 font-light tracking-wide max-w-2xl leading-relaxed mb-10 md:mb-12">
            Author <span className="text-[#D4AF37] mx-1.5">|</span> Corporate Trainer <span className="text-[#D4AF37] mx-1.5">|</span> Architect of <span className="text-white font-medium">#Vision2029</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            {/* Primary Gold CTA */}
            <button
              type="button"
              onClick={() => {
                if (onOpenBookingModal) {
                  onOpenBookingModal();
                } else {
                  handleScrollTo('contact');
                }
              }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4AF37] hover:bg-[#E3C45B] text-[#0A1128] font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] rounded-sm transition-all duration-200 shadow-xl shadow-[#D4AF37]/20 hover:shadow-2xl hover:shadow-[#D4AF37]/30 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <Calendar className="w-4 h-4 text-[#0A1128]" />
              <span>Book for Event</span>
            </button>

            {/* Secondary Outlined Button */}
            <button
              type="button"
              onClick={() => handleScrollTo('podcast')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent hover:bg-white/[0.06] text-[#F8F9FA] border border-white/20 hover:border-[#D4AF37]/60 font-sans font-medium text-xs sm:text-sm uppercase tracking-[0.18em] rounded-sm transition-all duration-200 backdrop-blur-xs hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                <Play className="w-2.5 h-2.5 fill-[#D4AF37] ml-0.5" />
              </div>
              <span>Listen to Podcast</span>
            </button>
          </div>

          {/* Credibility micro-badge */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Brand Ambassador, PLO Lumumba Foundation</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
            <div>
              <span>Founder, The Voice of Benny Organization</span>
            </div>
          </div>
        </div>
      </div>

      {/* "Scroll to discover" indicator on large screens */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 pointer-events-none opacity-70 hover:opacity-100 transition-opacity">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#F8F9FA]/60 font-medium">
          Scroll to discover
        </span>
        <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
      </div>
    </section>
  );
};
