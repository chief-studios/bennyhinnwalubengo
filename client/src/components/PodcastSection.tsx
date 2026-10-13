import React from 'react';
import { PODCAST_EPISODES } from '../data/content';
import type { PodcastEpisode } from '../types';
import { Play, Clock } from 'lucide-react';

interface PodcastSectionProps {
  onPlayEpisode: (episode: PodcastEpisode) => void;
  activeEpisodeId?: string | null;
  isPlaying?: boolean;
}

export const PodcastSection: React.FC<PodcastSectionProps> = ({
  onPlayEpisode,
  activeEpisodeId,
  isPlaying,
}) => {
  return (
    <section
      id="podcast"
      className="relative w-full bg-[#0A1128] py-28 md:py-36 border-b border-white/[0.08] overflow-hidden"
      aria-label="The Hinnfluence Podcast Hub"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Ideas that shape a generation
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#F8F9FA] tracking-tight leading-[1.1] mb-6">
            The Hinnfluence{' '}
            <span className="text-[#D4AF37] italic font-serif">
              Podcast.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#F8F9FA]/80 font-light leading-relaxed mb-8">
            Conversations with significant people on leadership, mentorship, mindset, and the work of building a consequential life.
          </p>

          {/* Platform Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Spotify Button */}
            <a
              href="#podcast"
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-[#D4AF37]/50 rounded-sm font-sans text-xs uppercase tracking-[0.16em] text-[#F8F9FA] transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label="Listen to The Hinnfluence Podcast on Spotify"
            >
              {/* Spotify SVG icon */}
              <svg className="w-4 h-4 fill-[#1DB954]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.308a.747.747 0 01-1.028.248c-2.812-1.718-6.353-2.107-10.523-1.155a.75.75 0 01-.336-1.462c4.568-1.042 8.5-.6 11.64 1.341a.748.748 0 01.247 1.028zm1.47-3.267a.936.936 0 01-1.286.309c-3.218-1.978-8.125-2.55-11.932-1.393a.937.937 0 11-.546-1.792c4.354-1.322 9.774-.683 13.455 1.59a.936.936 0 01.309 1.286zm.126-3.41c-3.858-2.29-10.222-2.502-13.886-1.39a1.124 1.124 0 01-.655-2.15c4.218-1.28 11.248-1.036 15.69 1.6a1.124 1.124 0 01-1.15 1.94z"/>
              </svg>
              <span>Spotify</span>
            </a>

            {/* Apple Podcasts Button */}
            <a
              href="#podcast"
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-[#D4AF37]/50 rounded-sm font-sans text-xs uppercase tracking-[0.16em] text-[#F8F9FA] transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label="Listen to The Hinnfluence Podcast on Apple Podcasts"
            >
              {/* Apple Podcasts SVG icon */}
              <svg className="w-4 h-4 fill-[#F8F9FA]" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Apple Podcasts</span>
            </a>
          </div>
        </div>

        {/* Latest Episodes 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PODCAST_EPISODES.map((ep) => {
            const isCurrentlyPlaying = activeEpisodeId === ep.id && isPlaying;

            return (
              <article
                key={ep.id}
                className="group relative bg-[#121212] border border-white/10 hover:border-[#D4AF37]/50 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4AF37]/10"
              >
                {/* Thumbnail Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  <img
                    src={ep.imageUrl}
                    alt={ep.imageAlt}
                    className="w-full h-full object-cover transition-all duration-700 ease-out saturate-[0.6] grayscale-[0.35] group-hover:saturate-100 group-hover:grayscale-0 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark Vignette / Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 bg-[#0A1128]/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 rounded-xs">
                      {ep.number}
                    </span>

                    <span className="font-sans text-[10px] uppercase tracking-[0.16em] px-2.5 py-1 bg-white/10 backdrop-blur-md text-white/90 rounded-xs">
                      {ep.category}
                    </span>
                  </div>

                  {/* Gold Circular Play Button Overlay */}
                  <button
                    type="button"
                    onClick={() => onPlayEpisode(ep)}
                    aria-label={`Play episode ${ep.title}`}
                    className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#D4AF37] hover:bg-[#E3C45B] text-[#0A1128] flex items-center justify-center transition-all duration-300 shadow-xl shadow-black/60 group-hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white z-20"
                  >
                    {isCurrentlyPlaying ? (
                      <span className="flex items-center gap-1">
                        <span className="w-1 h-4 bg-[#0A1128] animate-bounce" />
                        <span className="w-1 h-4 bg-[#0A1128] animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1 h-4 bg-[#0A1128] animate-bounce [animation-delay:0.4s]" />
                      </span>
                    ) : (
                      <Play className="w-5 h-5 fill-[#0A1128] ml-0.5" />
                    )}
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-white/50 text-xs mb-3 font-sans">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{ep.duration}</span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#F8F9FA] group-hover:text-[#D4AF37] transition-colors leading-snug mb-3">
                      {ep.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#F8F9FA]/70 leading-relaxed font-light mb-6">
                      {ep.description}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onPlayEpisode(ep)}
                      className="font-sans text-xs uppercase tracking-[0.18em] text-[#D4AF37] hover:text-[#E3C45B] font-semibold transition-colors flex items-center gap-1.5 focus:outline-none"
                    >
                      <span>{isCurrentlyPlaying ? 'Now Playing' : 'Listen Now'}</span>
                    </button>
                    <span className="text-[10px] uppercase font-sans tracking-widest text-white/40">
                      The Hinnfluence
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Podcast host statement banner */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <p className="font-serif text-sm sm:text-base italic text-[#F8F9FA]/60">
            “When we engage minds of consequence, we leave blueprints for a generation that will govern tomorrow.”
          </p>
          <p className="font-sans text-xs uppercase tracking-widest text-[#D4AF37] mt-2">
            — Bennyhinn Walubengo
          </p>
        </div>
      </div>
    </section>
  );
};
