import React from 'react';
import { Heart, ShieldCheck, UserCheck } from 'lucide-react';

export const PinkBanner: React.FC = () => {
  return (
    <div className="bg-brand-pink overflow-hidden py-3 relative z-20 shadow-lg shadow-pink-900/20">
      {/* Inline styles for the marquee animation since we can't modify tailwind.config easily */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: 200%;
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
      
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* We repeat the content to create a seamless loop */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center space-x-8 mx-4 text-white font-bold tracking-widest text-sm md:text-base uppercase">
            <span className="flex items-center gap-2"><ShieldCheck size={20} /> SEGURIDAD TOTAL</span>
            <span className="text-pink-200">•</span>
            <span className="flex items-center gap-2 text-yellow-300"><Heart size={20} fill="currentColor" /> EXCLUSIVO MUJERES</span>
            <span className="text-pink-200">•</span>
            <span className="flex items-center gap-2"><UserCheck size={20} /> CHOFERES MUJERES</span>
            <span className="text-pink-200">•</span>
            <span>POMPEYO EXPRESS</span>
            <span className="text-pink-200">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
