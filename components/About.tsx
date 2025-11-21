import React from 'react';
import { Award, Users, Heart, MapPin, Briefcase } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="right" className="relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-brand-pink/10 rounded-full blur-3xl"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1596525974404-e3f3458db41f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Equipo Pompeyo Express Comitán" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-8">
                <div className="flex items-center gap-2 text-brand-orange mb-1">
                    <MapPin size={18} />
                    <span className="font-bold text-xs md:text-sm uppercase tracking-widest">Comitán, Chiapas</span>
                </div>
                <p className="text-white font-bold text-xl md:text-2xl">Tu seguridad es nuestra ruta.</p>
              </div>
            </div>
            
            {/* Floating Stat Card - Hidden on small mobile */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-brand-orange hidden sm:block">
                <div className="flex items-center gap-3">
                    <Briefcase className="text-gray-500" />
                    <div>
                        <p className="font-bold text-gray-900">Personal Certificado</p>
                        <p className="text-xs text-gray-500">Conductores verificados</p>
                    </div>
                </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={200} className="order-1 lg:order-2">
            <span className="text-brand-orange font-bold tracking-wider uppercase text-sm">Nuestra Historia y Valores</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-6">Más que un taxi, un servicio profesional</h2>
            
            <div className="prose prose-lg text-gray-600 text-sm md:text-base">
              <p className="mb-4">
                En <strong>Pompeyo Express</strong>, nos hemos consolidado como el servicio de radio taxis más confiable de <strong>Comitán</strong>. No solo ofrecemos traslados, ofrecemos tranquilidad.
              </p>
              <p className="mb-4">
                Entendemos que la presencia cuenta. Por eso, implementamos un estricto <strong>código de vestimenta</strong> acorde a cada unidad. Nuestros conductores de taxi gris portan con orgullo su uniforme institucional, y nuestras conductoras de Taxi Rosa visten su uniforme distintivo, facilitando su identificación inmediata.
              </p>
              <p>
                Nuestra división de <strong>Taxis Rosas</strong> es operada 100% por mujeres capacitadas no solo en manejo, sino en protocolos de seguridad, creando un ambiente de respeto y confianza único en la ciudad.
              </p>
            </div>

            <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-100 text-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">Imagen Impecable</h4>
                    <p className="text-sm text-gray-500">Uniforme obligatorio y unidades limpias.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-100 text-brand-pink rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900">Confianza Rosa</h4>
                    <p className="text-sm text-gray-500">Conductoras expertas y amables.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};