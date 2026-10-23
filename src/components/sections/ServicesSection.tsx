import React, { useState } from 'react';
import { ArrowUpRight, CodeXml, Cpu, BrainCircuit, Workflow, Cloud, Headset } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeId, setActiveId] = useState('software');

  const services = [
    {
      id: 'software',
      icon: CodeXml,
      title: 'Desarrollo a Medida',
      description: 'Construimos aplicaciones web y móviles robustas y escalables, integrando frontend, backend y bases de datos.',
    },
    {
      id: 'iot',
      icon: Cpu,
      title: 'IoT y Telemetría',
      description: 'Conectamos equipos físicos con sensores inteligentes para registrar su rendimiento en tiempo real.',
    },
    {
      id: 'data-ia',
      icon: BrainCircuit,
      title: 'Datos e IA',
      description: 'Transformamos datos crudos en diagnósticos y alertas predictivas mediante modelos de inteligencia artificial.',
    },
    {
      id: 'automation',
      icon: Workflow,
      title: 'Automatización de Procesos',
      description: 'Digitalizamos flujos de trabajo manuales y burocráticos para eliminar tiempos muertos y errores humanos.',
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Infraestructura Cloud y DevOps',
      description: 'Desplegamos y operamos plataformas seguras y de alta disponibilidad con integración y entrega continua.',
    },
    {
      id: 'support',
      icon: Headset,
      title: 'Mantenimiento y Soporte',
      description: 'Acompañamos a nuestros clientes después de la entrega con soporte técnico y mantenimiento preventivo y correctivo.',
    },
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
          {services.map((service) => {
            const Icon = service.icon;
            const active = service.id === activeId;
            return (
              <a
                key={service.id}
                href="#"
                onMouseEnter={() => setActiveId(service.id)}
                onFocus={() => setActiveId(service.id)}
                onClick={(e) => e.preventDefault()}
                className={`group block p-8 transition-colors duration-200 ${
                  active ? 'bg-ink-card' : 'bg-transparent'
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <Icon size={32} strokeWidth={1.75} className="text-brand" />
                  <ArrowUpRight
                    size={24}
                    strokeWidth={2}
                    className="text-white group-hover:text-brand transition-colors"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-base leading-6 text-white">{service.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
