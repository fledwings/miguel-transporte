import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { Values } from '@/components/sections/Values';
import { Services } from '@/components/sections/Services';
import { Fleet } from '@/components/sections/Fleet';
import { Coverage } from '@/components/sections/Coverage';
import { Clients } from '@/components/sections/Clients';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main className="flex-grow ">
        <Hero />
        <AboutUs />
        <Values />
        <Services />
        <Fleet />
        <Coverage />
        <Clients />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
