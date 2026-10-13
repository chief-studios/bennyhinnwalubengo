import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data/content';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = ['home', 'about', 'speak', 'podcast', 'book', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent page bleed
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookClick = () => {
    setIsMobileMenuOpen(false);
    if (onOpenBookingModal) {
      onOpenBookingModal();
    } else {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Sticky Top Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen
            ? 'bg-[#0A1128] border-b border-white/10 py-4 shadow-2xl'
            : isScrolled
              ? 'bg-[#0A1128]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
              : 'bg-[#0A1128]/85 backdrop-blur-sm border-b border-white/10 py-5'
        }`}
        style={isMobileMenuOpen ? { backgroundColor: '#0A1128' } : undefined}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Left: Minimalist Text Logo */}
          <a
            href="#home"
            className="group flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm px-1 z-50"
            aria-label="Bennyhinn Walubengo Home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
          >
            <span className="font-sans font-bold tracking-[0.2em] text-lg sm:text-xl text-[#F8F9FA] transition-colors group-hover:text-white">
              BENNYHINN
            </span>
            <span className="text-[#D4AF37] text-2xl font-serif font-black transition-transform group-hover:scale-125 inline-block leading-none">
              .
            </span>
          </a>

          {/* Center: Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isCurrent = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className={`relative font-sans text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 py-1 ${
                    isCurrent
                      ? 'text-[#D4AF37]'
                      : 'text-[#F8F9FA]/75 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isCurrent && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#D4AF37] rounded-full animate-fadeIn" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Gold CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={handleBookClick}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] hover:bg-[#E3C45B] text-[#0A1128] font-sans font-semibold text-xs uppercase tracking-[0.16em] rounded-sm transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/20 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label="Book Benny for a keynote, corporate training, or media engagement"
            >
              <span>Book Benny</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center z-50">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-[#F8F9FA] hover:text-[#D4AF37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm transition-colors bg-white/[0.04] border border-white/10"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#D4AF37]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay (Solid Midnight Navy, Opaque) */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 md:hidden flex flex-col justify-between pt-24 pb-8 px-6 sm:px-8 transition-all duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{
          backgroundColor: '#0A1128',
          minHeight: '100dvh',
          height: '100dvh',
        }}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Subtle Ambient Decorative Gradient (strictly within the solid dark canvas) */}
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-72 h-72 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

        {/* Navigation Content */}
        <div className="relative z-10 flex flex-col space-y-6 pt-2">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              Directory
            </p>
            <span className="font-sans text-[10px] tracking-widest text-white/40 uppercase">
              #Vision2029
            </span>
          </div>

          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item, index) => {
              const isCurrent = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  className={`font-serif text-2xl sm:text-3xl transition-all flex items-center justify-between group py-2.5 px-3 rounded-sm border ${
                    isCurrent
                      ? 'text-[#D4AF37] bg-white/[0.04] border-[#D4AF37]/30'
                      : 'text-[#F8F9FA] hover:text-[#D4AF37] border-transparent hover:border-white/10 hover:bg-white/[0.02]'
                  }`}
                  style={{
                    transitionDelay: `${index * 30}ms`,
                  }}
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="font-sans text-xs tracking-widest text-[#D4AF37] opacity-60 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom Booking CTA & Contact Details */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col gap-4 mt-auto">
          <button
            type="button"
            onClick={handleBookClick}
            tabIndex={isMobileMenuOpen ? 0 : -1}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#D4AF37] hover:bg-[#E3C45B] text-[#0A1128] font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] rounded-sm transition-all shadow-xl shadow-[#D4AF37]/20 active:scale-[0.98]"
          >
            <span>Book Benny</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-between text-xs text-white/50 pt-2 font-sans">
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="truncate max-w-[200px]">officialbennyhinnwalubengo@gmail.com</span>
            </div>
            <span className="text-[10px] uppercase text-[#D4AF37] tracking-wider">
              PLO Lumumba Amb.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
