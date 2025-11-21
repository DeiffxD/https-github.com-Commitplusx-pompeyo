import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Gallery: React.FC = () => {
  // Helper to handle image fallback if the user hasn't uploaded their local files yet
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    e.currentTarget.onerror = null; // Prevent infinite loop
    e.currentTarget.src = fallbackSrc;
  };

  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-8 md:mb-12">
          <span className="text-brand-orange font-bold tracking-wider uppercase text-sm">Nuestras Instalaciones</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">Galería Pompeyo Express</h2>
          <p className="mt-4 text-base md:text-lg text-gray-500">
            Ubicados en el corazón de Comitán, listos para servirte.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          
          {/* 1. The Yellow Building Photo (Vertical/Large) */}
          <ScrollReveal direction="up" delay={0} className="md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden group shadow-lg">
            <img 
              src="/pompeyo-edificio.jpg" 
              onError={(e) => handleImageError(e, "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")}
              alt="Base Pompeyo Express Edificio Amarillo" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="font-bold text-lg">Nuestra Base</h3>
                <p className="text-xs text-gray-200">Instalaciones modernas y seguras</p>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. The Front View of Two Taxis (Landscape) */}
          <ScrollReveal direction="up" delay={200} className="md:col-span-2 md:row-span-1 relative rounded-2xl overflow-hidden group shadow-lg">
             <img 
              src="/pompeyo-frente.jpg" 
              onError={(e) => handleImageError(e, "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80")}
              alt="Unidades Nissan Versa Frente" 
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
            />
             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold shadow-sm">
               Unidades Recientes
             </div>
          </ScrollReveal>

          {/* 3. The Angled Side View (Landscape) */}
          <ScrollReveal direction="up" delay={300} className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden group shadow-lg">
            <img 
              src="/pompeyo-lado.jpg" 
              onError={(e) => handleImageError(e, "https://images.unsplash.com/photo-1621993202323-2433e8c74146?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")}
              alt="Taxis Vista Lateral" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </ScrollReveal>

          {/* 4. The Full Fleet Lineup (Landscape) */}
          <ScrollReveal direction="up" delay={400} className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden group shadow-lg">
            <img 
              src="/pompeyo-flota.jpg" 
              onError={(e) => handleImageError(e, "https://images.unsplash.com/photo-1565514020176-7c50a5839b23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")}
              alt="Flota Completa" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
             <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <span className="text-white font-bold border border-white px-4 py-2 rounded-full">Ver Flota</span>
             </div>
          </ScrollReveal>

        </div>
        
        <p className="text-center text-sm text-gray-400 mt-6 italic">
          * Imágenes reales de nuestras unidades y base en Comitán.
        </p>
      </div>
    </section>
  );
};