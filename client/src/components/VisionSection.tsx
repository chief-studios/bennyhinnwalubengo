import React from 'react';
import { ArrowUpRight, Globe2, Building2, GraduationCap, HeartHandshake } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface VisionSectionProps {
  onPartnerClick?: () => void;
}

export const VisionSection: React.FC<VisionSectionProps> = ({ onPartnerClick }) => {
  const handleScrollToContact = () => {
    if (onPartnerClick) {
      onPartnerClick();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const touchpoints = [
    {
      icon: GraduationCap,
      title: 'Schools & Universities',
      desc: 'Oratory, debate, and youth leadership incubators.',
    },
    {
      icon: Building2,
      title: 'Corporate & Civic',
      desc: 'Executive training and ethical governance frameworks.',
    },
    {
      icon: Globe2,
      title: 'Broadcast Media',
      desc: 'The Hinnfluence Podcast and nationwide televised forums.',
    },
    {
      icon: HeartHandshake,
      title: 'NGOs & Faith Org',
      desc: 'Grassroots community mentorship and character formation.',
    },
  ];

  return (
    <section
      id="vision2029"
      className="relative w-full bg-[#1A1A1A] py-28 md:py-36 overflow-hidden border-b border-white/[0.08]"
      aria-label="Vision 2029 National and Generational Assignment"
    >
      {/* Subtle Gold Grid Background fading toward edges */}
      <div className="absolute inset-0 gold-grid pointer-events-none opacity-60" />

      {/* Radial soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 text-center">
        {/* Section Label & Large Heading */}
        <ScrollReveal variant="fade-up">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-sm bg-white/[0.03] border border-white/10 backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              A national vision · A generational assignment
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-[#F8F9FA] tracking-tight leading-none mb-8">
            #Vision <span className="text-[#D4AF37]">2029</span>
          </h2>
        </ScrollReveal>

        {/* Supporting Copy */}
        <ScrollReveal variant="fade-up" delay={150}>
          <p className="font-sans text-base sm:text-xl text-[#F8F9FA]/85 font-light leading-relaxed max-w-3xl mx-auto mb-16">
            A bold commitment to impact ten million lives through leadership and communication—across media, physical and virtual platforms, schools, churches, NGOs, and vision-aligned organizations.
          </p>
        </ScrollReveal>

        {/* Strategic Vehicles / Touchpoints Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-20 text-left">
          {touchpoints.map((tp, idx) => {
            const Icon = tp.icon;
            return (
              <ScrollReveal
                key={tp.title}
                variant="fade-up"
                delay={idx * 100}
                className="h-full"
              >
                <div className="p-5 bg-black/30 border border-white/10 rounded-sm h-full flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors">
                  <div>
                    <Icon className="w-5 h-5 text-[#D4AF37] mb-2" />
                    <h3 className="font-sans font-semibold text-xs sm:text-sm text-white uppercase tracking-wider mb-1">
                      {tp.title}
                    </h3>
                  </div>
                  <p className="font-sans text-xs text-white/50">
                    {tp.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Horizontal Divider with: "10,000,000 lives" */}
        <ScrollReveal variant="scale-up" delay={150}>
          <div className="relative my-16 sm:my-24 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-white/15" />
            </div>
            <div className="relative bg-[#1A1A1A] px-6 py-2 border border-white/15 rounded-sm">
              <span className="font-serif text-sm sm:text-base tracking-[0.25em] uppercase text-[#D4AF37] font-bold">
                10,000,000 lives
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Large Central Pull Quote */}
        <ScrollReveal variant="blur" delay={200} duration={900} className="max-w-4xl mx-auto mb-14">
          <blockquote className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#F8F9FA] leading-[1.2] tracking-tight">
            “Together, let us build our country,{' '}
            <span className="text-[#D4AF37] italic font-serif">
              brick by brick.
            </span>”
          </blockquote>
        </ScrollReveal>

        {/* CTA: "Partner with the vision" */}
        <ScrollReveal variant="fade-up" delay={250}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] hover:bg-[#E3C45B] text-[#0A1128] font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] rounded-sm transition-all duration-200 shadow-xl shadow-[#D4AF37]/20 hover:shadow-2xl hover:shadow-[#D4AF37]/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Partner with the vision</span>
              <ArrowUpRight className="w-4 h-4 text-[#0A1128]" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
