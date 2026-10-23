import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../../data/services';

interface ServicesSectionProps {
  onSelectService: (service: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="bg-ink pt-16 pb-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="section-title">
            Nuestros <span className="text-brand">Servicios</span>
          </h2>
          <p className="mt-4 text-base text-white">
            Lo que hacemos en cada proyecto, propio o de nuestros clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <button
              key={title}
              onClick={() => onSelectService(title)}
              className="group text-left p-6 sm:p-8 rounded-lg bg-ink-deep border border-white/5 transition-colors duration-200 hover:bg-ink-card hover:border-brand/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <div className="flex items-start justify-between mb-6">
                <Icon size={32} strokeWidth={1.75} className="text-brand" />
                <ArrowUpRight
                  size={24}
                  strokeWidth={2}
                  className="text-white/60 group-hover:text-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">{title}</h3>
              <p className="text-base leading-6 text-white/80">{description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
