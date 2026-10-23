import React from 'react';
import { Target, Eye } from 'lucide-react';

export const MissionVisionSection: React.FC = () => {
  return (
    <section id="mission" className="bg-ink-deep py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">
            Misión & <span className="text-brand">Visión</span>
          </h2>
          <p className="text-base text-white">
            Convertimos datos y procesos manuales en activos inteligentes para nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="bg-ink rounded-lg flex flex-col justify-between p-8 sm:p-10 transition-colors hover:bg-ink-card">
            <div>
              <div className="text-brand mb-6">
                <Target size={36} strokeWidth={1.75} />
              </div>

              <span className="text-sm font-medium text-brand tracking-widest uppercase">
                PROPÓSITO CENTRAL
              </span>

              <h3 className="text-3xl sm:text-4xl font-semibold text-white mt-2 mb-5 leading-tight">
                Nuestra Misión
              </h3>

              <p className="text-white text-base leading-6 mb-6">
                Proveer soluciones de vanguardia en software, IoT e inteligencia artificial que transformen los equipos y procesos de nuestros clientes en activos inteligentes, comenzando por el monitoreo y diagnóstico preventivo de la cadena de frío con ColdTrack.
              </p>
            </div>

            <div className="pt-5 border-t border-muted flex items-center justify-between text-sm text-white/70">
              <span>Software, IoT e IA</span>
              <span className="text-brand">Activos inteligentes</span>
            </div>
          </article>

          <article className="bg-ink rounded-lg flex flex-col justify-between p-8 sm:p-10 transition-colors hover:bg-ink-card">
            <div>
              <div className="text-brand mb-6">
                <Eye size={36} strokeWidth={1.75} />
              </div>

              <span className="text-sm font-medium text-brand tracking-widest uppercase">
                PROYECCIÓN FUTURA
              </span>

              <h3 className="text-3xl sm:text-4xl font-semibold text-white mt-2 mb-5 leading-tight">
                Nuestra Visión
              </h3>

              <p className="text-white text-base leading-6 mb-6">
                Ser para 2030 la empresa de referencia en software e inteligencia artificial del NOA, llevando al resto del mundo soluciones nacidas en Tucumán y convirtiendo a ColdTrack en el estándar tecnológico en gestión de equipos de frío.
              </p>
            </div>

            <div className="pt-5 border-t border-muted flex items-center justify-between text-sm text-white/70">
              <span>Horizonte 2030</span>
              <span className="text-brand">Del NOA al mundo</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
