import React, { useState, useEffect } from 'react';
import { Menu, X, Car, Phone, Facebook, Instagram, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled && !isOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="relative z-50 flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className={`p-2 rounded-full transition-colors duration-300 ${isOpen || scrolled ? 'bg-brand-orange text-white' : 'bg-white text-brand-orange'}`}>
              <Car size={24} strokeWidth={2.5} />
            </div>
            <span className={`font-extrabold text-xl tracking-tighter transition-colors duration-300 ${isOpen || scrolled ? 'text-gray-900' : 'text-white drop-shadow-md'} ${isOpen ? '!text-white' : ''}`}>
              POMPEYO <span className={isOpen ? 'text-white' : 'text-brand-orange'}>EXPRESS</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-brand-orange ${scrolled ? 'text-gray-700' : 'text-white shadow-sm'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:9631742491"
              className="bg-brand-orange text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-orange-600 transition-transform hover:scale-105 shadow-lg"
            >
              <Phone size={18} />
              Pedir Taxi
            </a>
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-all duration-300 focus:outline-none ${
                isOpen 
                  ? 'bg-white text-brand-orange rotate-90 shadow-lg' 
                  : scrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Circular Reveal */}
      <div 
        className="md:hidden fixed inset-0 z-40 bg-brand-orange flex flex-col items-center justify-center transition-all duration-700 ease-in-out"
        style={{ 
          clipPath: isOpen ? 'circle(150% at calc(100% - 40px) 40px)' : 'circle(0% at calc(100% - 40px) 40px)',
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
      >
         <div className={`flex flex-col items-center space-y-8 transition-opacity duration-500 delay-100 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold text-white hover:text-gray-200 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-8 w-full flex flex-col items-center gap-6">
              <a
                href="tel:9631742491"
                className="bg-white text-brand-orange px-8 py-4 rounded-full font-bold text-xl flex items-center gap-3 shadow-xl active:scale-95 transition-transform"
              >
                <Phone size={24} />
                Llamar Ahora
              </a>
              
              <div className="flex gap-6 text-white/80 mt-4">
                 <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Facebook /></a>
                 <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Instagram /></a>
                 <a href="#about" onClick={() => setIsOpen(false)} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><MapPin /></a>
              </div>
            </div>
         </div>
      </div>
    </nav>
  );
};