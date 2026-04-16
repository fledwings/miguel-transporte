import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const FLEET = [
  {
    title: 'Portacontenedores',
    image: 'https://sensible-spoonbill-485.convex.cloud/api/storage/26eb86ce-729e-413d-91f3-d6c188ee5bb7',
    options: ['Servicio Full: Carga util tipica: 52 Toneladas', 'Servicio Sencillo: Carga util tipica: 30 Toneladas'],
  },
  {
    title: 'Cajas Secas',
    image: 'https://sensible-spoonbill-485.convex.cloud/api/storage/529372c1-17c4-4047-8c53-5279546124fd',
    options: ['53 Pies (FT): Carga util tipica: 30 Toneladas', 'Unidad Torthon: Carga util tipica: 15 Toneladas'],
  },
  {
    title: 'Plataformas',
    image: 'https://sensible-spoonbill-485.convex.cloud/api/storage/fddbcfd2-4f92-46c4-b408-4196a768b86e',
    options: ['Servicio Full: Carga util tipica: 52 Toneladas', '3 Ejes: Carga util tipica: 36 Toneladas', 'Encortinada: Carga util tipica: 30 Toneladas', 'Torthon: Carga util tipica: 12 Toneladas'],
  },
];

export function Fleet() {
  return (
    <section id="flotilla" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-red-600 font-semibold tracking-wide uppercase text-sm mb-3">Nuestra Flotilla</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Modalidades de Transporte</h3>
            <p className="text-lg text-slate-600">
              Contamos con una flotilla moderna y diversa para adaptarnos a los requerimientos específicos de tu carga, garantizando la integridad de cada envío.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-red-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                <ul className="space-y-3">
                  {item.options.map((opt, i) => (
                    <li key={i} className="flex items-center text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                      <span className="font-medium text-sm">{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
