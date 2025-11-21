import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  direction = 'up', 
  delay = 0,
  threshold = 0.15
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state based on intersection. 
        // This allows re-animating when scrolling back up/down into view.
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -10% 0px', // Offset slightly so animation triggers when element is well inside viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getTransformClass = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100 blur-none scale-100';
    
    // Add blur and slight scale down for a more premium "Apple-like" reveal effect
    switch (direction) {
      case 'up': return 'translate-y-20 opacity-0 blur-sm scale-95';
      case 'down': return '-translate-y-20 opacity-0 blur-sm scale-95';
      case 'left': return '-translate-x-20 opacity-0 blur-sm scale-95';
      case 'right': return 'translate-x-20 opacity-0 blur-sm scale-95';
      default: return 'translate-y-20 opacity-0 blur-sm';
    }
  };

  return (
    <div
      ref={ref}
      // Using a custom cubic-bezier for a smoother, more natural "spring" feel
      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform transform-gpu ${getTransformClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};