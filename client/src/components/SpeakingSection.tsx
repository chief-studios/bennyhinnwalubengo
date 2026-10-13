import React from 'react';
import { SPEAKING_TOPICS } from '../data/content';
import { Calendar, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface SpeakingSectionProps {
  onOpenBookingModal?: () => void;
}

export const SpeakingSection: React.FC<SpeakingSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section
      id="speak"
      className="relative w-full bg-[#121212] py-28 md:py-36 border-b border-white/[0.08]"
      aria-label="Speaking Engagements and Corporate Training"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Keynotes & Masterclasses
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#F8F9FA] tracking-tight leading-[1.1]">
              Commanding the Stage.{' '}
              <span className="text-[#D4AF37] italic font-serif">
                Transforming Culture.
              </span>
            </h2>
          </div>

          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => {
                if (onOpenBookingModal) {
                  onOpenBookingModal();
                } else {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#D4AF37] hover:bg-[#E3C45B] text-[#0A1128] font-sans font-semibold text-xs uppercase tracking-[0.18em] rounded-sm transition-all duration-200 shadow-lg shadow-[#D4AF37]/15 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4 text-[#0A1128]" />
              <span>Inquire for Speaking</span>
              <ArrowUpRight className="w-4 h-4 text-[#0A1128]" />
            </button>
          </div>
        </div>

        {/* 3-Column Speaking Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SPEAKING_TOPICS.map((topic) => (
            <div
              key={topic.number}
              className="group bg-[#1A1A1A] p-8 sm:p-10 border border-white/10 hover:border-[#D4AF37]/50 rounded-sm transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-[#D4AF37]/5"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-3xl font-light text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors">
                    {topic.number}
                  </span>
                  <span className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-[#D4AF37] transition-all duration-300" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#F8F9FA] group-hover:text-white transition-colors mb-3 leading-snug">
                  {topic.title}
                </h3>

                <p className="font-sans text-xs uppercase tracking-wider text-[#D4AF37] font-medium mb-4">
                  {topic.subtitle}
                </p>

                <p className="font-sans text-sm text-[#F8F9FA]/70 leading-relaxed font-light mb-8">
                  {topic.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                <span className="tracking-wide">Focus:</span>
                <span className="text-white/80 font-medium text-right">
                  {topic.targetAudience}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Event Formats Banner */}
        <div className="bg-[#0A1128] border border-white/10 p-8 sm:p-10 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#F8F9FA]">
              Available for Global & Pan-African Engagements
            </h4>
            <p className="font-sans text-sm text-[#F8F9FA]/70 max-w-xl">
              Keynotes, corporate retreats, executive debates, academic commencement addresses, and leadership workshops delivered in person or virtually.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Full-Day Leadership Retreats</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Executive Oratory Coaching</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>National Conventions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
