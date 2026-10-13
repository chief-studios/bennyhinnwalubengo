import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data/content';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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

      // Simple active section spy
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A1128]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
          : 'bg-[#0A1128]/75 backdrop-blur-sm border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Left: Minimalist Text Logo */}
        <a
          href="#home"
          className="group flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm px-1"
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
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#F8F9FA] hover:text-[#D4AF37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-sm transition-colors"
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

      {/* Mobile Full-Screen Menu */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 top-[65px] bg-[#0A1128] z-40 md:hidden transition-all duration-300 ease-in-out flex flex-col justify-between px-8 py-10 border-t border-white/10 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col space-y-6 pt-4">
          <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Directory
          </p>
          <nav className="flex flex-col space-y-5" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                className="font-serif text-2xl text-[#F8F9FA] hover:text-[#D4AF37] transition-colors flex items-center justify-between group py-1"
                style={{
                  transitionDelay: `${index * 40}ms`,
                }}
              >
                <span>{item.label}</span>
                <span className="font-sans text-xs tracking-widest text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                  0{index + 1}
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
          <button
            type="button"
            onClick={handleBookClick}
            tabIndex={isMobileMenuOpen ? 0 : -1}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#D4AF37] hover:bg-[#E3C45B] text-[#0A1128] font-sans font-semibold text-sm uppercase tracking-[0.18em] rounded-sm transition-all shadow-lg shadow-[#D4AF37]/20"
          >
            <span>Book Benny</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <p className="text-center font-sans text-xs text-white/50 tracking-wider">
            Keynote Speaker · Author · Political Visionary
          </p>
        </div>
      </div>
    </header>
  );
};
