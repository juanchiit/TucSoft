import React from 'react';
import { BrainCircuit, CodeXml, Headset, Server } from 'lucide-react';
import { StatGrid } from '../ui/StatGrid';

const figures = [
  { value: '16', label: 'Profesionales' },
  { value: '4', label: 'Departamentos técnicos' },
  { value: '99.9%', label: 'Disponibilidad objetivo' },
  { value: '100%', label: 'Infraestructura cloud' },
];

const departments = [
  {
    icon: BrainCircuit,
    title: 'Transformación Digital',
    description: 'Automatización, IoT, datos e inteligencia artificial aplicada.',
  },
  {
    icon: CodeXml,
    title: 'Desarrollo',
    description: 'Diseño UX/UI, desarrollo fullstack y aseguramiento de la calidad.',
  },
  {
    icon: Server,
    title: 'Infraestructura y TI',
    description: 'DevOps y SecOps para entornos seguros y de alta disponibilidad.',
  },
  {
    icon: Headset,
    title: 'Mantenimiento y Soporte',
    description: 'Asistencia técnica y mantenimiento de los sistemas en producción.',
  },
];

export const WhyUsSection: React.FC = () => {
  return (
    <section id="nosotros" className="bg-ink-deep px-4 sm:px-10 lg:px-20 py-12 lg:py-14">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[720px]">
          <h2 className="section-title">
            ¿Por qué <span className="text-brand">Nosotros?</span>
          </h2>
          <p className="mt-4 text-base leading-6 text-white">
            TucSoft es una empresa tucumana de base tecnológica. Un equipo multidisciplinario liderado
            por nuestra área de Tecnología diseña, desarrolla, despliega y acompaña cada solución de punta
            a punta.
          </p>
        </div>

        <div className="mt-10">
          <StatGrid stats={figures} />
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map(({ icon: Icon, title, description }) => (
            <article key={title} className="bg-ink rounded-lg p-6 transition-colors hover:bg-ink-card">
              <Icon size={28} strokeWidth={1.75} className="text-brand mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-[15px] leading-[22px] text-white">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
