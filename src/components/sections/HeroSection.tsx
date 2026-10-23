import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { HeroOrb } from '../ui/HeroOrb';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow min-h-[560px] lg:min-h-[635px] flex items-center pt-32 pb-20 px-4 sm:px-10 lg:px-20">
        <div className="max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,380px)] xl:grid-cols-[1fr_minmax(0,420px)] items-center gap-8">
          <div>
            <h1 className="font-poppins font-medium uppercase text-white leading-tight">
              <span className="block text-2xl sm:text-3xl lg:text-[36px]">Software e</span>
              <span className="block text-[32px] sm:text-5xl lg:text-[56px] text-brand my-1 lg:my-2">
                inteligencia artificial
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-[36px]">hecho en Tucumán</span>
            </h1>

            <p className="mt-6 max-w-[560px] text-base leading-6 text-white">
              TucSoft es una empresa de desarrollo de software e inteligencia artificial. Llevamos adelante
              proyectos propios y de terceros para que las empresas del NOA transformen sus procesos con
              software, IoT y datos.
            </p>

            <Button
              variant="outline"
              size="lg"
              className="mt-6 group"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Comencemos a Innovar</span>
              <ArrowRight size={22} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <HeroOrb className="hidden lg:block w-full max-w-[420px] justify-self-end" />
        </div>
      </div>

    </section>
  );
};
