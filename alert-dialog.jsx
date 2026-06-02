import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Map, Route, Warehouse, ShieldAlert } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SERVICES = [
  {
    id: 'ftl',
    title: 'FTL (Full Truck Load)',
    description: 'Transporte de carga completa dedicado exclusivamente a tu mercancía, garantizando tiempos de entrega y máxima seguridad.',
    icon: Truck,
    color: 'bg-red-100 text-red-600',
  },
  {
    id: 'door-to-door',
    title: 'DOOR TO DOOR MX-EU IMPO-EXPO',
    description: 'Servicio integral de importación y exportación puerta a puerta entre México y Estados Unidos sin interrupciones.',
    icon: Map,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    id: 'ruta-lechera',
    title: 'Ruta Lechera',
    description: 'Recolección y entrega en múltiples puntos estratégicos para optimizar tus procesos de distribución (Milk Run).',
    icon: Route,
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: 'resguardo',
    title: 'Resguardo en Patio',
    description: 'Instalaciones seguras para el resguardo de mercancías y unidades con vigilancia 24/7 y control de acceso.',
    icon: Warehouse,
    color: 'bg-amber-100 text-amber-600',
  },
  {
    id: 'custodia',
    title: 'Custodia Armada',
    description: 'Protección especializada para mercancías de alto valor con personal capacitado y monitoreo satelital en tiempo real.',
    icon: ShieldAlert,
    color: 'bg-rose-100 text-rose-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-red-600 font-semibold tracking-wide uppercase text-sm mb-3">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Soluciones Logísticas a la Medida</h3>
          <p className="text-lg text-slate-600">
            Ofrecemos un portafolio completo de servicios de transporte diseñados para optimizar tu cadena de suministro con los más altos estándares.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            // Make the first two items span differently or just keep uniform grid
            // For 5 items, the last 2 can be centered or take full width in some configs
            return (
              <motion.div key={service.id} variants={itemVariants} className={index === 3 ? "lg:col-start-1" : index === 4 ? "lg:col-start-2" : ""}>
                <Card className="h-full border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <h4 className={`font-bold text-slate-900 mb-3 uppercase ${service.id === 'door-to-door' ? 'text-[15px] min-[360px]:text-[17px] min-[375px]:text-[18px] min-[390px]:text-[19px] min-[414px]:text-[20px] sm:text-[24px] md:text-[22px] lg:text-[18px] xl:text-[22px] whitespace-nowrap tracking-[-0.06em]' : 'text-lg sm:text-xl'}`}>{service.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
