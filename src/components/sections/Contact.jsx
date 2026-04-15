import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const company = formData.get('company');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const message = formData.get('message');

    const subject = `Nuevo mensaje de contacto de ${name} - ${company}`;
    const body = `Nombre: ${name}\nEmpresa: ${company}\nEmail: ${email}\nTeléfono: ${phone}\nServicio de Interés: ${service}\n\nMensaje:\n${message}`;

    window.location.href = `mailto:sales@logisticstlt.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contacto" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-red-600 font-semibold tracking-wide uppercase text-sm mb-3">Contacto</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">¿Listo para optimizar tu logística?</h3>
          <p className="text-lg text-slate-600">
            Comunícate con nuestro equipo de expertos para recibir una propuesta a la medida de tus necesidades de transporte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Información de Contacto</h4>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-red-100 p-3 rounded-lg text-red-600 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-slate-900 mb-1">Teléfonos</p>
                    <p className="text-slate-600 text-sm">
                      USA: <a href="tel:+16464688285" className="hover:text-red-600 hover:underline transition-colors">+1 646 468 8285</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg text-green-600 mt-1">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-slate-900 mb-1">WhatsApp</p>
                    <p className="text-slate-600 text-sm">
                      <a href="https://wa.me/16464688285" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 hover:underline transition-colors">
                        +1 646 468 8285
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg text-indigo-600 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold text-slate-900 mb-1">Email</p>
                    <a href="mailto:sales@logisticstlt.com" className="text-red-600 hover:underline text-sm font-medium">
                      sales@logisticstlt.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-rose-100 p-3 rounded-lg text-rose-600 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-4 space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-1">Sede México</p>
                      <a 
                        href="https://www.google.com/maps/search/?api=1&query=Carretera+Federal+México-Puebla+Km+93.5+Santa+María+Zacatepec,+Juan+C.+Bonilla,+Puebla+72660" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-600 text-sm hover:text-red-600 hover:underline transition-colors block"
                      >
                        Carretera Federal México-Puebla Km 93.5 Santa María Zacatepec, Juan C. Bonilla, Puebla 72660
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-1">Sede USA</p>
                      <p className="text-slate-600 text-sm">Oficina de Representación Comercial, Estados Unidos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Envíanos un mensaje</h4>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input id="name" name="name" placeholder="Ej. Juan Pérez" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" name="company" placeholder="Nombre de tu empresa" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" name="email" type="email" placeholder="correo@empresa.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+52 (000) 000 0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Servicio de Interés</Label>
                  <select 
                    id="service" 
                    name="service"
                    className="flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="ftl">FTL (Full Truck Load)</option>
                    <option value="door">DOOR TO DOOR MX-EU IMPO-EXPO</option>
                    <option value="ruta">Ruta Lechera</option>
                    <option value="resguardo">Resguardo en Patio</option>
                    <option value="custodia">Custodia Armada</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" name="message" placeholder="¿Cómo podemos ayudarte?" rows={4} required />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-base font-semibold">
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
