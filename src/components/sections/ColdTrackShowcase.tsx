import React, { useState } from 'react';
import { Activity, BrainCircuit, Bluetooth, ClipboardList, Cpu, Handshake, Wrench } from 'lucide-react';
import { StatGrid } from '../ui/StatGrid';
import { type Asset, AssetCard } from '../ui/AssetCard';

const sampleAsset: Asset = {
  id: 'REF-TUC-002',
  name: 'Visicooler 500L',
  location: 'Supermercado Norte - Las Talitas',
  temperature: 12.8,
  health: 45,
};

const features = [
  {
    icon: BrainCircuit,
    title: 'Diagnóstico Automático con IA',
    description:
      'Un motor de inteligencia artificial analiza las métricas del equipo y determina el origen exacto de la falla.',
  },
  {
    icon: Cpu,
    title: 'Sensor IoT Universal',
    description:
      'Se instala en heladeras, exhibidoras y freezers de las marcas líderes del mercado, sin importar el fabricante.',
  },
  {
    icon: ClipboardList,
    title: 'Órdenes de Reparación Directas',
    description:
      'El técnico llega con la falla ya identificada: sin visitas previas de evaluación ni reclamos telefónicos.',
  },
  {
    icon: Handshake,
    title: 'Plataforma de Partnering',
    description:
      'Agrupa y asigna el trabajo a talleres de refrigeración locales, con presupuestos y trazabilidad digital.',
  },
];

const goals = [
  { value: '90%', label: 'Marcas de heladeras compatibles' },
  { value: '-30%', label: 'Costos de mantenimiento' },
  { value: '50', label: 'Talleres técnicos en el NOA' },
  { value: '<5s', label: 'Sincronización Bluetooth' },
];

const steps = [
  {
    icon: Cpu,
    title: 'Sensor IoT en el Equipo',
    description:
      'Dispositivo compacto y universal que monitorea parámetros críticos: temperatura, ciclos de trabajo y consumo eléctrico en tiempo real.',
  },
  {
    icon: Bluetooth,
    title: 'Telemetría sin Fricciones',
    description:
      'El preventista o comerciante sincroniza los datos al acercarse con su dispositivo móvil mediante conexión Bluetooth de alta velocidad.',
  },
  {
    icon: BrainCircuit,
    title: 'Diagnóstico Asistido por IA',
    description:
      'Nuestro motor central en la nube analiza patrones de series temporales y determina el origen exacto de la falla con precisión clínica.',
  },
  {
    icon: Wrench,
    title: 'Asignación y Reparación Ágil',
    description:
      'La orden de trabajo se envía con hoja de ruta y especificación de repuestos a un taller local certificado de nuestra plataforma.',
  },
];

export const ColdTrackShowcase: React.FC = () => {
  const [showDiagnosis, setShowDiagnosis] = useState(true);

  return (
    <section id="coldtrack" className="bg-ink py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand text-sm font-medium uppercase tracking-widest mb-3">
              <Activity size={14} />
              <span>Producto insignia TucSoft</span>
            </div>
            <h2 className="section-title">
              Cold<span className="text-brand">Track</span>
            </h2>
          </div>
          <p className="text-white text-base leading-6 max-w-xl">
            Nuestro primer proyecto oficial y producto estrella: un sistema de gestión para el
            mantenimiento y la reparación de equipos de frío comercial, pensado para embotelladoras,
            frigoríficos y comercializadoras que dependen de sus heladeras y freezers.
          </p>
        </div>

        <div className="mb-16">
          <StatGrid stats={goals} surface="bg-ink-deep" />
          <p className="mt-4 text-sm text-white/60">Objetivos de ColdTrack para su primer año de implementación.</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
          <div className="xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-6 sm:p-8 rounded-lg transition-colors hover:bg-ink-card">
                <Icon size={32} strokeWidth={1.75} className="text-brand mb-5" />
                <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
                <p className="text-base leading-6 text-white">{description}</p>
              </div>
            ))}
          </div>

          <div className="xl:col-span-5 w-full max-w-xl mx-auto">
            <div className="shadow-card rounded-xl">
              <AssetCard
                asset={sampleAsset}
                showDiagnosis={showDiagnosis}
                onDiagnose={() => setShowDiagnosis(!showDiagnosis)}
              />
            </div>
            <p className="mt-4 text-sm text-white/60">Así se ve un equipo con falla en el panel de ColdTrack.</p>
          </div>
        </div>

        <div id="como-funciona" className="pt-20 lg:pt-24">
          <div className="text-center mb-12 lg:mb-14">
            <span className="text-brand text-sm font-medium uppercase tracking-widest">
              El ecosistema ColdTrack
            </span>
            <h2 className="section-title mt-3">
              Cómo <span className="text-brand">Funciona</span>
            </h2>
            <p className="mt-4 text-base text-white">
              De la detección automática a la reparación exitosa en el menor tiempo posible
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map(({ icon: Icon, title, description }, idx) => (
              <li
                key={title}
                className="bg-ink-deep rounded-lg p-6 sm:p-8 flex flex-col xl:flex-row gap-4 xl:gap-8 transition-colors hover:bg-ink-card"
              >
                <span className="text-5xl xl:text-[80px] font-bold leading-none text-brand/40 shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <Icon size={28} strokeWidth={1.75} className="text-brand mb-4" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">{title}</h3>
                  <p className="text-base leading-6 text-white">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
