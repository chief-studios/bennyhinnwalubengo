import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustMarquee } from './components/TrustMarquee';
import { AboutSection } from './components/AboutSection';
import { SpeakingSection } from './components/SpeakingSection';
import { PodcastSection } from './components/PodcastSection';
import { BookSection } from './components/BookSection';
import { VisionSection } from './components/VisionSection';
import { Footer } from './components/Footer';
import { AudioPlayerDrawer } from './components/AudioPlayerDrawer';
import { BookingModal } from './components/BookingModal';
import type { PodcastEpisode } from './types';

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Keynote Address');

  // Audio player state
  const [activeEpisode, setActiveEpisode] = useState<PodcastEpisode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpenBooking = (topic = 'Keynote Address') => {
    setSelectedTopic(topic);
    setIsBookingModalOpen(true);
  };

  const handlePlayEpisode = (episode: PodcastEpisode) => {
    if (activeEpisode?.id === episode.id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveEpisode(episode);
      setIsPlaying(true);
    }
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleCloseAudioDrawer = () => {
    setIsPlaying(false);
    setActiveEpisode(null);
  };

  return (
    <div className="min-h-screen bg-[#0A1128] text-[#F8F9FA] flex flex-col selection:bg-[#D4AF37] selection:text-[#0A1128]">
      {/* Fixed Sticky Header Navigation */}
      <Navbar onOpenBookingModal={() => handleOpenBooking('Keynote Address')} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Cinematic Hero */}
        <Hero onOpenBookingModal={() => handleOpenBooking('Keynote Address')} />

        {/* 2. Trust Marquee Bar */}
        <TrustMarquee />

        {/* 3. About Bennyhinn Section */}
        <AboutSection onOpenBookingModal={() => handleOpenBooking('Institutional Partnership')} />

        {/* 4. Keynotes & Corporate Training Section */}
        <SpeakingSection onOpenBookingModal={() => handleOpenBooking('Corporate Masterclass')} />

        {/* 5. The Hinnfluence Podcast Hub */}
        <PodcastSection
          onPlayEpisode={handlePlayEpisode}
          activeEpisodeId={activeEpisode?.id}
          isPlaying={isPlaying}
        />

        {/* 6. SPROUT Book Showcase with 3D CSS Book Mockup */}
        <BookSection />

        {/* 7. #Vision 2029 Generational Commitment */}
        <VisionSection onPartnerClick={() => handleOpenBooking('#Vision 2029 Partnership')} />
      </main>

      {/* 8. Multi-Column Midnight Footer */}
      <Footer />

      {/* Interactive Podcast Audio Player Drawer */}
      <AudioPlayerDrawer
        episode={activeEpisode}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onClose={handleCloseAudioDrawer}
      />

      {/* Keynote / Event Booking Dialog Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultTopic={selectedTopic}
      />
    </div>
  );
}

export default App;
