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
        // Only update state if it actually changes to avoid unnecessary re-renders
        if (entry.isIntersecting !== isVisible) {
            setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -10% 0px',
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
  }, [threshold, isVisible]);

  const getTransformClass = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100 scale-100';
    
    // Removed 'blur' filter for better performance on mobile devices ("Lag fix")
    switch (direction) {
      case 'up': return 'translate-y-20 opacity-0 scale-95';
      case 'down': return '-translate-y-20 opacity-0 scale-95';
      case 'left': return '-translate-x-20 opacity-0 scale-95';
      case 'right': return 'translate-x-20 opacity-0 scale-95';
      default: return 'translate-y-20 opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      // Changed 'transition-all' to specific properties to prevent layout thrashing and improve FPS
      className={`transition-[transform,opacity] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[transform,opacity] transform-gpu ${getTransformClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};