import React from 'react';
import { Truck, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="bg-red-600 p-2 rounded-lg">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">TLT</span>
            </div>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Soluciones integrales de transporte y logística a nivel nacional e internacional. Conectando México y Estados Unidos.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-red-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-red-400 transition-colors">Servicios</a></li>
              <li><a href="#flotilla" className="hover:text-red-400 transition-colors">Flotilla</a></li>
              <li><a href="#cobertura" className="hover:text-red-400 transition-colors">Cobertura</a></li>
              <li><a href="#clientes" className="hover:text-red-400 transition-colors">Clientes</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicios" className="hover:text-red-400 transition-colors">FTL (Full Truck Load)</a></li>
              <li><a href="#servicios" className="hover:text-red-400 transition-colors">DOOR TO DOOR MX-EU IMPO-EXPO</a></li>
              <li><a href="#servicios" className="hover:text-red-400 transition-colors">Ruta Lechera</a></li>
              <li><a href="#servicios" className="hover:text-red-400 transition-colors">Resguardo en Patio</a></li>
              <li><a href="#servicios" className="hover:text-red-400 transition-colors">Custodia Armada</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li><span className="block text-slate-500 text-xs uppercase font-semibold">Ventas y Soporte</span>sales@logisticstlt.com</li>
              <li><span className="block text-slate-500 text-xs uppercase font-semibold">Teléfono USA</span>+1 646 468 8285</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} TLT Transport & Logistics. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
