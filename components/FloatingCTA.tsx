import React from 'react';
import { Phone } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  return (
    <a 
      href="tel:9631742491"
      className="fixed bottom-6 right-6 md:hidden z-50 bg-brand-orange text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce"
      aria-label="Llamar Taxi"
    >
      <Phone size={28} fill="currentColor" />
    </a>
  );
};