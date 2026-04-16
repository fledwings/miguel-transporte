import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ShoppingCart, Clock, ShieldCheck, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const sectors = [
  { icon: Building2, label: 'Sector Automotriz' },
  { icon: ShoppingCart, label: 'Centros de Distribución (Supermercados)' },
  { icon: Clock, label: 'Industria JIT (Just in Time)' }
];

export function AboutUs() {
  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[size:20px_20px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold tracking-wider text-red-600 uppercase mb-2">Nosotros</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Más de 15 años de experiencia en transporte y logística
              </h3>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                En TLT Transport and Logistics, ofrecemos soluciones seguras, puntuales y eficientes para el mercado nacional e internacional. Nos enorgullecemos de conectar empresas y mercados con el más alto nivel de servicio.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl my-8">
                <p className="text-lg font-medium text-slate-800 italic">
                  "Brindar confianza, eficiencia y respaldo en cada kilómetro recorrido."
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Target className="h-5 w-5 text-red-600" />
                Sectores Atendidos
              </h4>
              <div className="space-y-4">
                {sectors.map((sector, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100"
                  >
                    <div className="bg-white p-2.5 rounded-lg shadow-sm border border-slate-100 text-red-600">
                      <sector.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-slate-700">{sector.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://sensible-spoonbill-485.convex.cloud/api/storage/9260cd65-f2f9-4f00-8e3d-aa4591b4149c" 
                alt="Logistics Operations" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 text-white text-center max-w-[85%] mx-auto md:max-w-full">
                  <ShieldCheck className="h-6 w-6 md:h-10 md:w-10 text-red-500 mx-auto mb-1.5 md:mb-3" />
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-300 font-semibold mb-0.5 md:mb-1">Nuestro Lema</p>
                  <p className="text-base sm:text-lg md:text-2xl font-bold tracking-wide">MOVING WITH TRUST</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-100 rounded-full blur-2xl opacity-50 z-[-1]" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-50 z-[-1]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
