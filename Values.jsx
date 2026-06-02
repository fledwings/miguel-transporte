import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue, useMotionValueEvent, animate } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const usaStates = [
  "Alabama", "Arizona", "Arkansas", "North Carolina", "South Carolina", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Illinois", "Indiana", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Mississippi", "Missouri", "New Hampshire", "New Jersey", "New York", "New Mexico", "Ohio", "Oklahoma", "Pennsylvania", "Rhode Island", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "West Virginia", "Wisconsin", "Washington D.C."
];

const mxDestinations = [
  "Aguascalientes", "Campeche", "Chihuahua (Ciudad Juárez)", "Ciudad de México", "Ciudad Hidalgo, Chiapas", "Coahuila (Saltillo)", "Estado de México (Toluca)", "Guanajuato (León)", "Guerrero (Acapulco)", "Hidalgo (Pachuca)", "Jalisco (Guadalajara)", "Morelos (Cuernavaca)", "Nuevo León (Monterrey)", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo (Cancún)", "San Luis Potosí", "Tabasco (Villahermosa)", "Tamaulipas (Nuevo Laredo)", "Tlaxcala", "Veracruz (Xalapa)", "Yucatán (Mérida)", "Rutas a convenir"
];

export function Coverage() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  
  const topFade = useMotionValue(0);
  const bottomFade = useMotionValue(40); // default to scrolling down

  useMotionValueEvent(scrollY, "change", (current) => {
    const prev = scrollY.getPrevious();
    if (!prev) return;
    
    const diff = current - prev;
    if (diff > 5) { // scrolling down (added threshold to avoid jitter)
      animate(topFade, 0, { duration: 0.4 });
      animate(bottomFade, 40, { duration: 0.4 });
    } else if (diff < -5) { // scrolling up
      animate(topFade, 40, { duration: 0.4 });
      animate(bottomFade, 0, { duration: 0.4 });
    }
  });

  const bottomSolid = useTransform(bottomFade, v => 100 - v);
  const maskImage = useMotionTemplate`linear-gradient(to bottom, transparent 0%, black ${topFade}%, black ${bottomSolid}%, transparent 100%)`;

  return (
    <section ref={sectionRef} id="cobertura" className="py-24 bg-blue-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{ maskImage, WebkitMaskImage: maskImage }}>
        <img 
          src="https://sensible-spoonbill-485.convex.cloud/api/storage/6e3ccb44-9125-4e5e-99a5-1aba76919dad" 
          alt="Coverage Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80" />
      </motion.div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3">Alcance Binacional</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Cobertura Estratégica Sin Fronteras</h3>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              Nuestra red logística abarca las principales rutas comerciales de Norteamérica, asegurando que tu mercancía llegue a su destino sin importar las distancias.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-left bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400">
                    <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div className="text-4xl font-extrabold text-white mb-2">{mxDestinations.length}</div>
                    <div className="text-emerald-400 font-medium mb-1">Destinos en México</div>
                    <p className="text-sm text-blue-200">Cubriendo los principales nodos industriales y puertos del país.</p>
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-white text-slate-900 border-none shadow-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-xl text-emerald-600 flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      {mxDestinations.length} Destinos en México
                    </DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                    <ul className="space-y-2">
                      {mxDestinations.map((dest, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-700">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                          <span>{dest}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-left bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <div className="bg-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Navigation className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="text-4xl font-extrabold text-white mb-2">36</div>
                    <div className="text-blue-400 font-medium mb-1">Estados en USA</div>
                    <p className="text-sm text-blue-200">Operaciones logísticas a través de las rutas más importantes.</p>
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-white text-slate-900 border-none shadow-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-xl text-blue-600 flex items-center gap-2">
                      <Navigation className="h-5 w-5" />
                      36 Estados en USA
                    </DialogTitle>
                  </DialogHeader>
                  <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {usaStates.map((state, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-700">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          <span>{state}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[500px] bg-blue-800/50 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center p-8"
          >
            {/* Visual representation of a map instead of an actual complex map to keep it clean */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-900/40" />
            
            <div className="relative z-10 w-full text-center">
              <div className="inline-flex flex-col gap-6 w-full max-w-sm">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/20 transition-colors rounded-xl border border-white/10 backdrop-blur-sm w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <span className="font-semibold text-white">Estados Unidos</span>
                      <span className="text-blue-300">36 Estados</span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-white text-slate-900 border-none shadow-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-xl text-blue-600 flex items-center gap-2">
                        <Navigation className="h-5 w-5" />
                        36 Estados en USA
                      </DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {usaStates.map((state, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-700">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                            <span>{state}</span>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
                
                <div className="flex items-center justify-center">
                  <div className="w-1 h-16 bg-gradient-to-b from-blue-400/50 to-emerald-400/50 rounded-full" />
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/20 transition-colors rounded-xl border border-white/10 backdrop-blur-sm w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400">
                      <span className="font-semibold text-white">México</span>
                      <span className="text-emerald-400">{mxDestinations.length} Destinos</span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-white text-slate-900 border-none shadow-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-xl text-emerald-600 flex items-center gap-2">
                        <MapPin className="h-5 w-5" />
                        {mxDestinations.length} Destinos en México
                      </DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                      <ul className="space-y-2">
                        {mxDestinations.map((dest, i) => (
                          <li key={i} className="flex items-center gap-2 text-slate-700">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                            <span>{dest}</span>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
