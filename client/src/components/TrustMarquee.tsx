import React from 'react';
import { TRUST_PARTNERS } from '../data/content';

export const TrustMarquee: React.FC = () => {
  // Duplicate array 3 times to ensure infinite smooth marquee without gaps on ultra-wide screens
  const marqueeItems = [...TRUST_PARTNERS, ...TRUST_PARTNERS, ...TRUST_PARTNERS];

  return (
    <section
      aria-label="Media and Institutional Features"
      className="relative w-full bg-[#0d1424] border-y border-white/[0.08] py-5 sm:py-6 overflow-hidden z-20"
    >
      {/* Left and Right Fade Gradients for Seamless Entrance/Exit */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0d1424] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0d1424] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-4 md:gap-8">
        {/* Label on left or above */}
        <div className="flex-shrink-0 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/60" />
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#F8F9FA]/50 font-medium whitespace-nowrap">
            As featured in
          </span>
        </div>

        {/* Marquee Track */}
        <div className="w-full overflow-hidden marquee-container">
          <div className="animate-marquee flex items-center gap-10 sm:gap-16 py-1">
            {marqueeItems.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center gap-3 group transition-opacity duration-300 hover:opacity-100"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#D4AF37] transition-colors" />
                <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-[#F8F9FA]/65 group-hover:text-[#F8F9FA] transition-colors whitespace-nowrap">
                  {partner.name}
                </span>
                {partner.role && (
                  <span className="hidden xl:inline text-[10px] font-mono tracking-wider text-white/30 uppercase">
                    ({partner.role})
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
