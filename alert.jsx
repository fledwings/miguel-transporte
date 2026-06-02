import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Values() {
  return (
    <section id="valores" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-wider text-red-600 uppercase mb-2">Valores Corporativos</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Misión y Visión</h3>
            <div className="h-1 w-20 bg-red-600 mx-auto mt-6 rounded-full" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Misión Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Card className="h-full border-none shadow-xl bg-white overflow-hidden group">
              <div className="h-2 w-full bg-red-600 transform origin-left transition-transform group-hover:scale-x-100" />
              <CardContent className="p-8 lg:p-10 relative">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Compass className="w-32 h-32" />
                </div>
                
                <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <Compass className="h-8 w-8 text-red-600" />
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-6">Nuestra Misión</h4>
                
                <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
                  En <span className="font-semibold text-slate-800">TLT TRANSPORT AND LOGISTICS</span> ofrecemos soluciones de transporte y logística nacional e internacional que garantizan seguridad, eficiencia y puntualidad en cada entrega. 
                  <br /><br />
                  Complementamos nuestros servicios con almacenaje, distribución y monitoreo en tiempo real, a fin de generar confianza y tranquilidad a nuestros clientes. 
                  <br /><br />
                  Nuestro compromiso es ser un socio estratégico que impulse el crecimiento de las cadenas productivas mediante innovación, tecnología y un servicio personalizado.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Visión Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full"
          >
            <Card className="h-full border-none shadow-xl bg-white overflow-hidden group">
              <div className="h-2 w-full bg-slate-800 transform origin-left transition-transform group-hover:scale-x-100" />
              <CardContent className="p-8 lg:p-10 relative">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Eye className="w-32 h-32" />
                </div>
                
                <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                  <Eye className="h-8 w-8 text-slate-800" />
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-6">Nuestra Visión</h4>
                
                <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
                  Consolidarnos como una empresa líder en el transporte nacional e internacional, reconocida por la calidad de nuestros servicios, la modernización de nuestra flota y el uso de tecnología para la gestión logística.
                  <br /><br />
                  Incrementar nuestras operaciones en el mercado estadounidense, ofreciendo soluciones integrales que fortalezcan el comercio y la conectividad entre ambos países.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
