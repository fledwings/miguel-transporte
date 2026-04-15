import React from 'react';
import { motion } from 'framer-motion';

const CLIENTS = [
  { name: "Refresco", src: "https://sensible-spoonbill-485.convex.cloud/api/storage/2fbb43fe-eefe-484c-9d83-cffc5f35606d" },
  { name: "JUMEX", src: "https://sensible-spoonbill-485.convex.cloud/api/storage/f466a77c-06df-4cff-8eb2-5ca065f2d641", className: "h-8 md:h-10" },
  { name: "Gestamp", src: "https://sensible-spoonbill-485.convex.cloud/api/storage/92af85c7-29e9-4036-91af-67edf64b883e" },
  { name: "Gonvauto", src: "https://sensible-spoonbill-485.convex.cloud/api/storage/e0f43f45-46f3-46e9-a8a8-023b7d6bd6be" },
  { name: "PFINDER", src: "https://sensible-spoonbill-485.convex.cloud/api/storage/0d9c9e20-49a6-440b-b1d6-aed2bea7803a" }
];

export function Clients() {
  return (
    <section id="clientes" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-sm font-semibold text-slate-400 tracking-widest uppercase mb-10">
          Empresas líderes que confían en nosotros
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-20">
          {CLIENTS.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center transition-all duration-300"
            >
              {client.src ? (
                <img src={client.src} alt={client.name} className={`object-contain max-w-[160px] ${client.className || "h-12 md:h-14"}`} />
              ) : (
                <span className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight">
                  {client.name || client}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
