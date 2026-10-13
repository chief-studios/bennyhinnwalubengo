import React from 'react';
import { CORE_METRICS } from '../data/content';
import { ShieldCheck, Mic2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenBookingModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#0A1128] py-28 md:py-36 border-b border-white/[0.08] overflow-hidden"
      aria-label="About Bennyhinn Walubengo"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              The Voice of Benny · Profile
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#F8F9FA] tracking-tight leading-[1.1]">
            An Intellectual Catalyst for{' '}
            <span className="text-[#D4AF37] italic font-serif">
              Africa’s Next Decade.
            </span>
          </h2>
        </div>

        {/* Two-Column Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Authoritative Editorial Text */}
          <div className="lg:col-span-7 space-y-6 text-[#F8F9FA]/80 font-sans text-base sm:text-lg leading-relaxed font-light">
            <p className="text-xl sm:text-2xl font-serif text-[#F8F9FA] leading-snug">
              Leadership is neither an accidental title nor an inherited privilege. It is an intentional, rigorous assignment to forge clarity where others only produce noise.
            </p>
            <p>
              Bennyhinn Walubengo is a keynote speaker, published author, corporate trainer, and brand ambassador for the esteemed{' '}
              <strong className="text-white font-medium">PLO Lumumba Foundation</strong>. Through his flagship initiative,{' '}
              <strong className="text-white font-medium">The Voice of Benny Organization</strong>, he equips leaders across corporate boardrooms, universities, and civic institutions with the oratory depth and moral clarity required to navigate modern complexity.
            </p>
            <p>
              Having honed his craft on national and regional debate stages with multiple championship accolades, Bennyhinn bridges high-altitude political vision with grounded, actionable corporate strategy. As host of{' '}
              <span className="text-[#D4AF37] font-medium">The Hinnfluence Podcast</span>, he curates profound dialogues with Africa’s most consequential thinkers, challenging a rising generation to reject mediocrity and construct lasting institutional legacy.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <a
                href="#speak"
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#E3C45B] font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-colors group"
              >
                <span>Explore Keynote Engagements</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {onOpenBookingModal && (
                <button
                  type="button"
                  onClick={onOpenBookingModal}
                  className="font-sans text-xs uppercase tracking-[0.18em] text-white/70 hover:text-white transition-colors underline underline-offset-4"
                >
                  Partner With Organization
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Pull Quote & Credibility Badges */}
          <div className="lg:col-span-5 space-y-8">
            {/* Editorial Pull Quote Box */}
            <div className="bg-[#121212] p-8 md:p-10 border border-white/10 relative rounded-sm shadow-xl">
              <div className="absolute top-4 right-6 text-5xl font-serif text-[#D4AF37]/20 select-none">
                “
              </div>
              <p className="font-serif text-xl sm:text-2xl text-[#F8F9FA] italic leading-relaxed mb-6">
                “When an entire generation masters both the courage of their convictions and the eloquence of their speech, nations don’t just change—they are rebuilt.”
              </p>
              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-semibold text-sm text-white tracking-wide">
                    Bennyhinn Walubengo
                  </h4>
                  <p className="font-sans text-xs text-[#D4AF37] tracking-wider uppercase">
                    Author of SPROUT
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] text-xs font-serif font-bold">
                  BW
                </div>
              </div>
            </div>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/[0.02] border border-white/10 rounded-sm">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h5 className="font-sans font-semibold text-sm text-white mb-1">
                  Institutional Integrity
                </h5>
                <p className="text-xs text-white/60">
                  Ethical governance and accountable stewardship.
                </p>
              </div>

              <div className="p-4 bg-white/[0.02] border border-white/10 rounded-sm">
                <Mic2 className="w-5 h-5 text-[#D4AF37] mb-2" />
                <h5 className="font-sans font-semibold text-sm text-white mb-1">
                  Oratory Mastery
                </h5>
                <p className="text-xs text-white/60">
                  Award-winning rhetoric and persuasive discourse.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
          {CORE_METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] tracking-tight">
                {metric.value}
              </span>
              <span className="font-sans text-xs sm:text-sm font-semibold text-[#F8F9FA] uppercase tracking-wider mt-2">
                {metric.label}
              </span>
              <span className="font-sans text-xs text-[#F8F9FA]/50 mt-1">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
