import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Globe, Clock, Phone } from 'lucide-react';

export function Hero() {
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 flex items-center min-h-[80vh]">
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://sensible-spoonbill-485.convex.cloud/api/storage/f2d56eea-8408-4592-8703-9ff76f9f51b5")',
          opacity: backgroundOpacity
        }}
      />
      <motion.div 
        className="absolute inset-0 z-0 bg-slate-900/70" 
        style={{ opacity: backgroundOpacity }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent z-0 pointer-events-none" />
      
      <div className="absolute top-24 left-0 right-0 z-20 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-white/10 text-white text-[10px] sm:text-sm font-semibold border border-white/20 backdrop-blur-sm pointer-events-auto"
          >
            <ShieldCheck className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>Logística Segura y Confiable</span>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-2 lg:whitespace-nowrap">
            <span className="block mb-2">TLT</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">TRANSPORT & LOGISTICS</span>
          </h1>
          
          <h2 className="text-base sm:text-2xl lg:text-3xl font-bold text-white/80 tracking-[0.2em] mb-6">
            MOVING WITH TRUST
          </h2>
          
          <p className="text-sm sm:text-base text-slate-200 mb-8 max-w-xl leading-relaxed mx-auto">
            Soluciones integrales de transporte y logística a nivel nacional e internacional. Conectamos México y Estados Unidos con eficiencia, seguridad y puntualidad garantizada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Button onClick={scrollToContact} size="lg" className="bg-red-600 hover:bg-red-700 text-white font-semibold h-14 px-8 rounded-xl shadow-lg shadow-red-900/20 border-0">
              <span>Cotizar Servicio</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 rounded-xl border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 backdrop-blur-sm">
              <a href="tel:+16464688285">
                <Phone className="mr-2 h-5 w-5" />
                Llamar ahora
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-slate-300">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Globe className="h-5 w-5 text-red-400" />
              Cobertura Internacional
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <Clock className="h-5 w-5 text-red-400" />
              Soporte 24/7
            </div>
            <div className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheck className="h-5 w-5 text-red-400" />
              Entregas Seguras
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
