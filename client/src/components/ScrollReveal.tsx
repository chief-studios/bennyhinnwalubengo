import React, { useEffect, useRef, useState } from 'react';

export type RevealVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-in'
  | 'slide-left'
  | 'slide-right'
  | 'scale-up'
  | 'blur';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 750,
  threshold = 0.02,
  className = '',
  as: Component = 'div',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const [effectiveDelay, setEffectiveDelay] = useState(delay);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const isMobile = window.innerWidth < 768;
    // On small screens, reduce long desktop stagger delays so items animate immediately upon scroll
    setEffectiveDelay(isMobile ? Math.min(delay, 80) : delay);

    // Initial check in case element is already in view on load
    const checkIfInView = () => {
      if (!elementRef.current) return false;
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // Trigger when element top enters the viewport (with generous buffer for mobile)
      const buffer = isMobile ? 30 : -20;
      if (rect.top <= windowHeight + buffer && rect.bottom >= 0) {
        setIsVisible(true);
        return true;
      }
      return false;
    };

    if (checkIfInView()) {
      return;
    }

    // IntersectionObserver with responsive rootMargin & threshold
    const hasIntersectionObserver = typeof window !== 'undefined' && 'IntersectionObserver' in window;
    if (hasIntersectionObserver) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              setIsVisible(true);
              if (elementRef.current) {
                observer.unobserve(elementRef.current);
              }
            }
          });
        },
        {
          threshold: isMobile ? 0.01 : threshold,
          rootMargin: isMobile ? '0px 0px 40px 0px' : '0px 0px -20px 0px',
        }
      );

      const currentEl = elementRef.current;
      if (currentEl) {
        observer.observe(currentEl);
      }

      return () => {
        if (currentEl) {
          observer.unobserve(currentEl);
        }
      };
    } else {
      // Fallback scroll listener for environments without IntersectionObserver
      const handleScroll = () => {
        if (checkIfInView()) {
          window.removeEventListener('scroll', handleScroll);
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [delay, threshold]);


  const getVariantClass = () => {
    switch (variant) {
      case 'fade-up':
        return 'reveal-fade-up';
      case 'fade-down':
        return 'reveal-fade-down';
      case 'slide-left':
        return 'reveal-slide-left';
      case 'slide-right':
        return 'reveal-slide-right';
      case 'scale-up':
        return 'reveal-scale-up';
      case 'blur':
        return 'reveal-blur';
      case 'fade-in':
      default:
        return '';
    }
  };

  const style: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${effectiveDelay}ms`,
  };

  return (
    <Component
      ref={elementRef}
      style={style}
      className={`reveal-init ${getVariantClass()} ${
        isVisible ? 'reveal-active' : ''
      } ${className}`}
    >
      {children}
    </Component>
  );
};
