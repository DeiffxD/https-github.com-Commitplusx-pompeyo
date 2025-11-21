import React from 'react';
import { TaxiType } from '../types';
import { CheckCircle2, PhoneCall, Shield, Users, UserCheck, BadgeCheck, Shirt, Sparkles, Heart } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const taxiTypes: TaxiType[] = [
  {
    id: 'general',
    name: 'Taxi General',
    description: 'Unidades Nissan Versa identificadas con franjas naranjas y grises. Servicio seguro para todo el público en Comitán operado por profesionales.',
    features: ['Para todo público', 'Unidad Modelo: Nissan Versa', 'Aire Acondicionado', 'Operadores con Uniforme Gris/Naranja'],
    colorClass: 'border-brand-orange',
    buttonColorClass: 'bg-brand-orange hover:bg-orange-600',
    imageAlt: 'Taxi General Unidad 1014',
  },
  {
    id: 'rosa',
    name: 'Taxi Rosa (Mujeres)',
    description: 'Servicio exclusivo conducido por mujeres altamente capacitadas y uniformadas. Priorizamos la tranquilidad de pasajeras y niños con trato especializado.',
    features: ['Exclusivo Mujeres y Niños', 'Conductoras con Uniforme Rosa', 'Unidad Modelo: Nissan Versa', 'Protocolos de Seguridad Femenina'],
    colorClass: 'border-brand-pink',
    buttonColorClass: 'bg-brand-pink hover:bg-pink-600',
    imageAlt: 'Taxi Rosa Unidad 0499',
  }
];

export const Services: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallbackSrc;
  };

  return (
    <section id="services" className="py-12 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" className="text-center mb-10 md:mb-16">
          <span className="text-brand-orange font-bold tracking-wider uppercase text-sm">Nuestros Servicios</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Elige tu unidad Pompeyo Express</h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Flota moderna 100% Nissan Versa con conductores certificados.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20 items-start">
          {taxiTypes.map((taxi, index) => (
            <ScrollReveal 
              key={taxi.id} 
              direction="up"
              delay={index * 200} // Stagger effect
              className={`
                flex flex-col rounded-3xl transition-all duration-500 overflow-hidden
                ${taxi.id === 'rosa' 
                  ? 'bg-white shadow-[0_20px_50px_-12px_rgba(236,72,153,0.25)] ring-4 ring-brand-pink/10 transform md:-translate-y-4 z-10 scale-[1.02]' 
                  : 'bg-white shadow-xl hover:shadow-2xl border-t-8 border-brand-orange'}
              `}
            >
              {taxi.id === 'rosa' && (
                <div className="bg-gradient-to-r from-brand-pink to-pink-500 text-white text-center py-2 font-bold tracking-widest text-xs uppercase flex items-center justify-center gap-2">
                   <Sparkles size={14} /> Recomendado para Ellas <Sparkles size={14} />
                </div>
              )}
              
              <div className="h-56 md:h-64 overflow-hidden relative group">
                <div className={`w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110 ${taxi.id === 'general' ? 'bg-gray-100' : 'bg-pink-50'}`}>
                    <img 
                        src={taxi.id === 'general' ? "/pompeyo-general.jpg" : "/pompeyo-rosa.jpg"}
                        onError={(e) => handleImageError(e, taxi.id === 'general' 
                            ? "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                            : "https://images.unsplash.com/photo-1621993202323-2433e8c74146?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80")}
                        alt={taxi.imageAlt}
                        className="w-full h-full object-cover opacity-95"
                    />
                </div>
                
                <div className={`absolute top-4 right-4 px-4 py-1 rounded-full text-white text-sm font-bold shadow-md ${taxi.id === 'general' ? 'bg-brand-orange' : 'bg-brand-pink'}`}>
                  {taxi.id === 'general' ? 'Unidad 1014' : 'Unidad 0499'}
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                     <p className="text-white font-mono text-sm opacity-90 flex items-center gap-2">
                       {taxi.id === 'rosa' && <Heart size={14} fill="currentColor" className="text-pink-400"/>}
                       Nissan Versa | Modelo Reciente
                     </p>
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl md:text-2xl font-bold ${taxi.id === 'rosa' ? 'text-brand-pink' : 'text-gray-900'}`}>{taxi.name}</h3>
                    {taxi.id === 'rosa' && <div className="p-2 bg-pink-100 rounded-full"><Users className="text-brand-pink" size={24} /></div>}
                    {taxi.id === 'general' && <div className="p-2 bg-orange-100 rounded-full"><Shield className="text-brand-orange" size={24} /></div>}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                  {taxi.description}
                </p>

                <div className={`mb-8 p-4 rounded-xl ${taxi.id === 'rosa' ? 'bg-pink-50 border border-pink-100' : 'bg-gray-50'}`}>
                    <h4 className={`font-semibold text-sm mb-3 uppercase tracking-wide ${taxi.id === 'rosa' ? 'text-brand-pink' : 'text-gray-900'}`}>Incluye:</h4>
                    <ul className="space-y-3">
                    {taxi.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <CheckCircle2 className={`w-4 h-4 mr-3 flex-shrink-0 ${taxi.id === 'general' ? 'text-brand-orange' : 'text-brand-pink'}`} />
                        {feature}
                        </li>
                    ))}
                    </ul>
                </div>

                <div className="mt-auto">
                    <a href="tel:9631742491" className={`w-full py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg ${taxi.buttonColorClass} ${taxi.id === 'rosa' ? 'shadow-pink-500/40' : 'shadow-orange-500/20'}`}>
                    <PhoneCall size={20} />
                    Pedir {taxi.name}
                    </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Safety & Drivers Section */}
        <div className="border-t border-gray-200 pt-12 md:pt-20">
            <ScrollReveal direction="up" className="text-center mb-8 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Conductores Profesionales y Seguros</h3>
                <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-sm md:text-base">En Pompeyo Express, la seguridad comienza por quien conduce.</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <ScrollReveal direction="up" delay={100} className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Shirt size={32} />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 text-center">Identidad y Uniforme</h4>
                    <p className="text-gray-600 text-center text-sm md:text-base">
                        Todos nuestros operadores portan uniforme oficial. 
                        <br/>
                        <span className="text-brand-pink font-semibold">Rosa</span> para conductoras y <span className="text-brand-orange font-semibold">Gris/Naranja</span> para conductores. Fácil identificación.
                    </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={200} className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 ring-2 ring-pink-100">
                    <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <UserCheck size={32} />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 text-center">Mujeres Capacitadas</h4>
                    <p className="text-gray-600 text-center text-sm md:text-base">
                        Nuestras operadoras de Taxi Rosa reciben capacitación especial en seguridad y trato amable, garantizando confianza total en cada viaje.
                    </p>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={300} className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                    <div className="w-14 h-14 bg-orange-100 text-brand-orange rounded-full flex items-center justify-center mb-6 mx-auto">
                        <BadgeCheck size={32} />
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 text-center">Verificación Constante</h4>
                    <p className="text-gray-600 text-center text-sm md:text-base">
                        Cada conductor pasa por filtros estrictos de confianza. Tarjetón visible y unidad monitoreada 24/7 para tu paz mental.
                    </p>
                </ScrollReveal>
            </div>
        </div>

      </div>
    </section>
  );
};