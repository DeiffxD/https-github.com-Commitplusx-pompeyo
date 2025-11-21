import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-12 md:pt-20 pb-8 md:pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          
          {/* Brand Info */}
          <ScrollReveal direction="up" delay={0}>
            <h3 className="text-2xl font-extrabold mb-4 md:mb-6">
              POMPEYO <span className="text-brand-orange">EXPRESS</span>
            </h3>
            <p className="text-gray-400 mb-6 text-sm md:text-base">
              Servicio de taxi líder en la región. Seguridad, puntualidad y confort en cada kilómetro.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-brand-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-brand-pink transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal direction="up" delay={100}>
            <h4 className="text-lg font-bold mb-4 md:mb-6 border-b border-gray-700 pb-2 inline-block">Enlaces Rápidos</h4>
            <ul className="space-y-3 text-sm md:text-base">
              <li><a href="#home" className="text-gray-400 hover:text-brand-orange transition-colors">Inicio</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-orange transition-colors">Servicios</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-brand-orange transition-colors">Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-brand-orange transition-colors">Facturación</a></li>
            </ul>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="up" delay={200}>
            <h4 className="text-lg font-bold mb-4 md:mb-6 border-b border-gray-700 pb-2 inline-block">Contáctanos</h4>
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-orange flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">Av. Central Sur #123, Barrio Candelaria, Comitán, Chiapas.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-orange flex-shrink-0" size={20} />
                <a href="tel:9631742491" className="text-gray-400 hover:text-white transition-colors">963 174 2491</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-orange flex-shrink-0" size={20} />
                <a href="mailto:info@pompeyoexpress.com" className="text-gray-400 hover:text-white transition-colors">info@pompeyoexpress.com</a>
              </li>
            </ul>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal direction="up" delay={300} className="rounded-xl overflow-hidden h-52 md:h-60 bg-gray-800 relative">
             {/* Static Map Image Placeholder */}
            <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Map location" 
                className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Base Central
                </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} Pompeyo Express. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};