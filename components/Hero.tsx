import React, { useEffect, useState } from 'react';
import { ArrowRight, ShieldCheck, BadgeCheck, Car, Users, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallbackSrc;
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-24 pb-12 md:pt-20 md:pb-0 overflow-hidden">
      {/* Background Image with Overlay and Parallax Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/pompeyo-edificio.jpg" 
          onError={(e) => handleImageError(e, "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")}
          alt="Base Pompeyo Express Comitán" 
          className="w-full h-[120%] object-cover object-center will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }} // Moves slower than scroll for parallax
        />
        {/* Darker gradient overlay to make glass cards pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-900/85 to-gray-900/70 md:bg-gradient-to-r md:from-gray-950/95 md:via-gray-900/80 md:to-brand-orange/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 text-white py-8 md:py-12">
          <ScrollReveal direction="right" delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs md:text-sm font-medium tracking-wide text-gray-200">Servicio activo en Comitán, Chiapas</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
              Tu taxi seguro en <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">POMPEYO EXPRESS</span>
            </h1>
            
            {/* New Pink Mode Badge */}
            <div className="inline-flex items-center gap-2 bg-pink-600/20 border border-pink-500/50 backdrop-blur-md px-4 py-2 rounded-full mb-8 animate-pulse shadow-[0_0_20px_rgba(236,72,153,0.3)]">
              <Sparkles size={16} className="text-pink-400" />
              <span className="text-pink-100 font-bold text-sm tracking-wide">CONTAMOS CON TAXI ROSA PARA MUJERES</span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed font-light">
              La flota más confiable de <strong>Comitán</strong>. Viaja cómodo en nuestros <strong>Nissan Versa</strong> con aire acondicionado y monitoreo satelital.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <div className="flex flex-wrap gap-3 mb-10">
              <div className="group cursor-default px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 text-sm text-gray-200 flex items-center gap-2 transition-colors hover:border-brand-orange/50 hover:bg-gray-800/80">
                  <div className="p-1 bg-gray-700/50 rounded-md group-hover:bg-brand-orange/20 transition-colors">
                    <Car size={16} className="text-brand-orange transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" /> 
                  </div>
                  Taxi General
              </div>
              <div className="group cursor-default px-4 py-2 bg-brand-pink/10 backdrop-blur-sm rounded-lg border border-brand-pink/50 text-sm text-pink-200 flex items-center gap-2 transition-colors hover:bg-brand-pink/20 shadow-[0_0_10px_rgba(236,72,153,0.2)]">
                   <div className="p-1 bg-pink-900/30 rounded-md group-hover:bg-brand-pink/30 transition-colors">
                    <Users size={16} className="text-brand-pink transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" /> 
                  </div>
                  Taxi Rosa
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#services" className="px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 group w-full sm:w-auto hover:-translate-y-0.5 hover:shadow-orange-500/40">
                Ver Unidades <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center w-full sm:w-auto hover:-translate-y-0.5 hover:shadow-lg">
                Ubicación
              </a>
            </div>
          </ScrollReveal>

          {/* Modern Glass Cards - High Contrast & Distinct */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            {/* Card 1: Monitoreo */}
            <ScrollReveal direction="up" delay={400} className="flex items-center gap-5 p-5 rounded-2xl bg-gray-950/70 backdrop-blur-xl border border-white/20 hover:border-brand-orange/40 hover:bg-gray-900/80 transition-all duration-300 group hover:-translate-y-1 shadow-2xl shadow-black/50">
              <div className="flex-shrink-0 p-3.5 rounded-xl bg-gradient-to-br from-brand-orange/20 to-orange-600/10 border border-brand-orange/20 text-brand-orange group-hover:scale-105 transition-transform duration-300 shadow-inner">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-tight tracking-wide group-hover:text-brand-orange transition-colors">Monitoreo 24/7</p>
                <p className="text-sm text-gray-300 font-medium mt-0.5">Viaje seguro</p>
              </div>
            </ScrollReveal>

            {/* Card 2: Unidades */}
            <ScrollReveal direction="up" delay={500} className="flex items-center gap-5 p-5 rounded-2xl bg-gray-950/70 backdrop-blur-xl border border-white/20 hover:border-brand-pink/40 hover:bg-gray-900/80 transition-all duration-300 group hover:-translate-y-1 shadow-2xl shadow-black/50">
              <div className="flex-shrink-0 p-3.5 rounded-xl bg-gradient-to-br from-brand-pink/20 to-pink-600/10 border border-brand-pink/20 text-brand-pink group-hover:scale-105 transition-transform duration-300 shadow-inner">
                <Car size={28} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-tight tracking-wide group-hover:text-brand-pink transition-colors">Unidades Versa</p>
                <p className="text-sm text-gray-300 font-medium mt-0.5">Modelos Recientes</p>
              </div>
            </ScrollReveal>

            {/* Card 3: Certificados */}
            <ScrollReveal direction="up" delay={600} className="flex items-center gap-5 p-5 rounded-2xl bg-gray-950/70 backdrop-blur-xl border border-white/20 hover:border-blue-400/40 hover:bg-gray-900/80 transition-all duration-300 group hover:-translate-y-1 shadow-2xl shadow-black/50">
              <div className="flex-shrink-0 p-3.5 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 text-blue-400 group-hover:scale-105 transition-transform duration-300 shadow-inner">
                <BadgeCheck size={28} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-tight tracking-wide group-hover:text-blue-400 transition-colors">Certificados</p>
                <p className="text-sm text-gray-300 font-medium mt-0.5">Conductores Pro</p>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* Floating Car Cards - Hidden on mobile to save space */}
        <div className="hidden md:block w-1/3 relative h-[600px] pointer-events-none">
          <ScrollReveal direction="left" delay={500} className="absolute top-24 right-0 pointer-events-auto bg-white p-4 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 w-64 z-20 border-b-4 border-brand-orange group">
             <div className="h-36 bg-gray-100 rounded-xl mb-3 overflow-hidden relative">
                 <img 
                    src="/pompeyo-general.jpg" 
                    onError={(e) => handleImageError(e, "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=400&q=80")}
                    alt="Taxi Gris" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                 />
                 <div className="absolute top-2 right-2 bg-brand-orange text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                   1014
                 </div>
             </div>
             <div className="flex justify-between items-center">
                <div>
                    <p className="font-bold text-gray-900 text-lg leading-none mb-1">Taxi General</p>
                    <p className="text-xs text-gray-500">Disponible 24/7</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                  <ArrowRight size={14} />
                </div>
             </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={700} className="absolute top-56 right-12 pointer-events-auto bg-white p-4 rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500 w-64 z-30 border-b-4 border-brand-pink group">
             <div className="h-36 bg-pink-50 rounded-xl mb-3 overflow-hidden relative">
                 <img 
                    src="/pompeyo-rosa.jpg" 
                    onError={(e) => handleImageError(e, "https://images.unsplash.com/photo-1621993202323-2433e8c74146?auto=format&fit=crop&w=400&q=80")}
                    alt="Taxi Rosa" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                 />
                  <div className="absolute top-2 right-2 bg-brand-pink text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                   0499
                 </div>
             </div>
             <div className="flex justify-between items-center">
                <div>
                    <p className="font-bold text-gray-900 text-lg leading-none mb-1">Taxi Rosa</p>
                    <p className="text-xs text-gray-500">Exclusivo Mujeres</p>
                </div>
                 <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-brand-pink">
                  <ArrowRight size={14} />
                </div>
             </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};