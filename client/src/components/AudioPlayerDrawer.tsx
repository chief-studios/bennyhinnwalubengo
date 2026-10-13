import React, { useState, useEffect } from 'react';
import type { PodcastEpisode } from '../types';
import { Play, Pause, X, Volume2, VolumeX, SkipBack, SkipForward, Radio } from 'lucide-react';

interface AudioPlayerDrawerProps {
  episode: PodcastEpisode | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onClose: () => void;
}

export const AudioPlayerDrawer: React.FC<AudioPlayerDrawerProps> = ({
  episode,
  isPlaying,
  onTogglePlay,
  onClose,
}) => {
  const [progress, setProgress] = useState(15);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!episode) return null;

  return (
    <aside
      aria-label="Podcast Audio Player"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0A1128]/95 backdrop-blur-md border-t border-white/15 px-4 sm:px-8 py-3.5 shadow-2xl animate-slideUp text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Episode Info */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-12 h-12 rounded-sm overflow-hidden flex-shrink-0 border border-white/20">
            <img
              src={episode.imageUrl}
              alt={episode.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0A1128]/30" />
          </div>

          <div className="min-w-0 flex-1 md:max-w-xs">
            <div className="flex items-center gap-2">
              <span className="font-sans text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider">
                {episode.number}
              </span>
              <span className="text-[10px] uppercase text-white/50 tracking-wider">
                · {episode.category}
              </span>
            </div>
            <h4 className="font-serif text-sm font-semibold truncate text-[#F8F9FA]">
              {episode.title}
            </h4>
            <p className="font-sans text-[11px] text-white/60 truncate">
              The Hinnfluence Podcast
            </p>
          </div>
        </div>

        {/* Player Controls & Scrubber */}
        <div className="flex flex-col items-center gap-2 w-full md:max-w-xl">
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setProgress((p) => Math.max(0, p - 5))}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Rewind 15 seconds"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onTogglePlay}
              className="w-9 h-9 rounded-full bg-[#D4AF37] hover:bg-[#E3C45B] text-[#0A1128] flex items-center justify-center transition-all shadow-md active:scale-95"
              aria-label={isPlaying ? 'Pause Episode' : 'Play Episode'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-[#0A1128]" />
              ) : (
                <Play className="w-4 h-4 fill-[#0A1128] ml-0.5" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setProgress((p) => Math.min(100, p + 5))}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Fast forward 15 seconds"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full flex items-center gap-3">
            <span className="text-[10px] font-mono text-white/50">
              {Math.floor((progress * 42) / 100)}:12
            </span>
            <div
              className="flex-1 h-1.5 bg-white/15 rounded-full overflow-hidden cursor-pointer relative"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickPos = (e.clientX - rect.left) / rect.width;
                setProgress(clickPos * 100);
              }}
            >
              <div
                className="h-full bg-[#D4AF37] rounded-full transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[10px] font-mono text-white/50">42:00</span>
          </div>
        </div>

        {/* Volume & Close */}
        <div className="flex items-center gap-4 self-end md:self-center">
          {isPlaying && (
            <div className="hidden lg:flex items-center gap-1 px-2.5 py-1 bg-white/5 rounded-xs border border-white/10 text-[#D4AF37] text-[10px] font-mono tracking-wider">
              <Radio className="w-3 h-3 animate-pulse" />
              <span>STREAMING</span>
            </div>
          )}

          <button
            type="button"
            onClick={() => setIsMuted(!isMuted)}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="text-white/60 hover:text-[#D4AF37] transition-colors p-1"
            aria-label="Close audio player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
