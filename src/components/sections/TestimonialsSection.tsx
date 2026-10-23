import React from 'react';
import { ArrowRight, Building2, Factory, Snowflake, Wrench } from 'lucide-react';
import { Button } from '../ui/Button';
import { NOA_VIEWBOX, noaCities, noaProvinces } from './noaMap';

interface TestimonialsSectionProps {
  onConnect?: () => void;
}

const sectors = [
  {
    icon: Snowflake,
    title: 'Cadena de frío y consumo masivo',
    description:
      'Embotelladoras, frigoríficos y comercializadoras de equipos que gestionan sus heladeras y freezers con ColdTrack.',
  },
  {
    icon: Factory,
    title: 'Industria regional',
    description:
      'Sectores como el azucarero o la gestión de residuos, donde aplicamos telemetría, automatización y diagnóstico preventivo.',
  },
  {
    icon: Building2,
    title: 'Empresas y organizaciones',
    description:
      'Compañías que nos confían el desarrollo de sus sistemas web y móviles a medida y su infraestructura en la nube.',
  },
  {
    icon: Wrench,
    title: 'Socios técnicos',
    description:
      'Talleres y proveedores de servicio técnico de la región que trabajan junto a nosotros a través de nuestras plataformas.',
  },
];

// Posiciones de las etiquetas de provincia (en % del mapa)
const provinceLabels: Record<string, { x: number; y: number }> = {
  Jujuy: { x: 40, y: 12 },
  Salta: { x: 74, y: 20 },
  Tucumán: { x: 60, y: 44 },
  Catamarca: { x: 30, y: 52 },
  'Santiago del Estero': { x: 76, y: 62 },
  'La Rioja': { x: 22, y: 78 },
};

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onConnect }) => {
  return (
    <section id="clients" className="bg-ink px-4 sm:px-10 lg:px-20 pt-20 pb-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center">
          <h2 className="section-title">
            Nuestros <span className="text-brand">Clientes</span>
          </h2>
          <p className="mt-6 text-base text-white">
            Empresas del Noroeste Argentino que transforman su operación junto a TucSoft
          </p>

          <div className="mt-5 inline-flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-ink-deep">
              <span className="w-4 h-4 rounded-full bg-brand" />
              <span className="text-white">Sede TucSoft</span>
            </span>
            <span className="flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-ink-deep">
              <span className="w-4 h-4 rounded-full bg-white" />
              <span className="text-white">Cobertura en el NOA</span>
            </span>
          </div>
        </div>

        <div className="mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-[minmax(0,440px)_1fr] gap-12 lg:gap-16 items-center">
          <div className="relative w-full max-w-[440px] mx-auto">
            <svg viewBox={NOA_VIEWBOX} className="w-full h-auto" role="img" aria-label="Mapa del Noroeste Argentino">
              {noaProvinces.map((province) => {
                const isHome = province.name === 'Tucumán';
                return (
                  <path
                    key={province.name}
                    d={province.d}
                    className={isHome ? 'fill-brand/25 stroke-brand' : 'fill-ink-deep stroke-ink-card'}
                    strokeWidth={2}
                    strokeLinejoin="round"
                  />
                );
              })}
            </svg>

            {noaProvinces.map((province) => {
              const label = provinceLabels[province.name];
              const isHome = province.name === 'Tucumán';
              return (
                <span
                  key={province.name}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 text-[11px] sm:text-xs uppercase tracking-wider whitespace-nowrap pointer-events-none ${
                    isHome ? 'text-brand font-medium' : 'text-white/40'
                  }`}
                  style={{ left: `${label.x}%`, top: `${label.y}%` }}
                >
                  {province.name}
                </span>
              );
            })}

            {noaCities.map((city) => {
              const isHome = city.name === 'San Miguel de Tucumán';
              return (
                <span
                  key={city.name}
                  title={city.name}
                  className={`absolute rounded-full -translate-x-1/2 -translate-y-1/2 ${
                    isHome ? 'w-4 h-4 bg-brand' : city.capital ? 'w-2.5 h-2.5 bg-white' : 'w-1.5 h-1.5 bg-white/80'
                  }`}
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                >
                  {isHome && <span className="absolute inset-0 rounded-full bg-brand animate-ping" />}
                </span>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sectors.map(({ icon: Icon, title, description }) => (
              <article key={title} className="bg-ink-deep rounded-lg shadow-card p-6 transition-colors hover:bg-ink-card">
                <Icon size={28} strokeWidth={1.75} className="text-brand mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-[15px] leading-[22px] text-white">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 lg:mt-24 bg-ink-deep border border-white/10 rounded-lg px-6 sm:px-10 py-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-[720px]">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              ¿Listo para <span className="text-brand">Innovar?</span>
            </h2>
            <p className="mt-4 text-base leading-6 text-white/80">
              Contactanos para agendar una reunión técnica sobre tu proyecto y descubrir cómo podemos
              satisfacer tus necesidades tecnológicas.
            </p>
          </div>

          <Button variant="primary" size="lg" onClick={onConnect} className="group whitespace-nowrap w-full md:w-auto">
            <span>Hablemos</span>
            <ArrowRight size={22} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
