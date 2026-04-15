import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Flotilla', href: '#flotilla' },
  { name: 'Cobertura', href: '#cobertura' },
  { name: 'Clientes', href: '#clientes' },
  { name: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    setIsOpen(false);
    
    if (element) {
      setTimeout(() => {
        const navbarHeight = 80; // h-20 = 5rem = 80px
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without jumping
        window.history.pushState(null, '', href);
      }, 100);
    }
  };

  const hasBackground = isScrolled || isOpen;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      hasBackground 
        ? 'bg-white shadow-sm border-b border-slate-200' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img 
              src="https://sensible-spoonbill-485.convex.cloud/api/storage/1ea3079f-abba-4036-b49d-c23d60ed9bed" 
              alt="TLT Logo" 
              className="h-16 w-auto"
            />
            <span className={`font-medium ml-1 text-sm sm:text-base transition-colors duration-300 ${hasBackground ? 'text-slate-700' : 'text-slate-200'}`}>Transport & Logistics</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm font-semibold transition-colors duration-300 hover:text-red-600 ${hasBackground ? 'text-slate-700' : 'text-slate-200'}`}
              >
                {link.name}
              </a>
            ))}
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white font-medium"
              onClick={(e) => handleScrollTo(e, '#contacto')}
            >
              Cotizar Servicio
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none transition-colors duration-300 hover:text-red-600 ${hasBackground ? 'text-slate-700' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-red-600 hover:bg-slate-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={(e) => handleScrollTo(e, '#contacto')}
                >
                  Cotizar Servicio
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
