import React from 'react';
import { Activity, Bot, MapPin, Server, Thermometer, TriangleAlert } from 'lucide-react';

export interface Asset {
  id: string;
  name: string;
  location: string;
  temperature: number;
  health: number;
}

interface AssetCardProps {
  asset: Asset;
  showDiagnosis: boolean;
  onDiagnose: () => void;
}

const MAX_SAFE_TEMPERATURE = 8;

export const AssetCard: React.FC<AssetCardProps> = ({ asset, showDiagnosis, onDiagnose }) => {
  const hasFault = asset.temperature > MAX_SAFE_TEMPERATURE;

  return (
    <article className="theme-dark flex flex-col rounded-xl border border-white/10 bg-[#0f1729] overflow-hidden">
      <div
        className={`h-0.5 bg-gradient-to-r ${
          hasFault ? 'from-orange-500 to-red-500' : 'from-blue-500 to-cyan-400'
        }`}
      />

      <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-md border border-blue-500/40 text-blue-400">
            <Server size={14} />
          </span>
          <span className="font-mono text-xs font-semibold text-white">{asset.id}</span>
        </div>
        <span
          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] ${
            hasFault
              ? 'border-red-500/30 bg-red-500/10 text-red-400'
              : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
          }`}
        >
          {hasFault ? <TriangleAlert size={11} /> : <Activity size={11} />}
          {hasFault ? 'Posible Falla' : 'Operativo'}
        </span>
      </div>

      <div className="flex-1 px-4 py-4">
        <h4 className="text-base font-semibold text-white">{asset.name}</h4>
        <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
          <MapPin size={12} className="shrink-0" />
          {asset.location}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-4 rounded-lg border border-white/10 bg-[#0b1120] p-3">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400">Temp. interna</span>
            <div
              className={`mt-1 flex items-center gap-1 text-xl font-semibold tabular-nums ${
                hasFault ? 'text-red-400' : 'text-white'
              }`}
            >
              <Thermometer size={16} className={hasFault ? 'text-red-400' : 'text-blue-400'} />
              {asset.temperature.toFixed(1)}°C
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-slate-400">
              <span>Salud IoT</span>
              <span className="text-xs font-semibold text-white tabular-nums">{asset.health}%</span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className={`h-full rounded-full ${asset.health < 50 ? 'bg-red-500' : 'bg-gradient-to-r from-blue-500 to-cyan-400'}`}
                style={{ width: `${asset.health}%` }}
              />
            </div>
          </div>
        </div>

        {hasFault && showDiagnosis && (
          <p className="mt-3 rounded-lg border border-blue-500/30 bg-blue-500/10 p-3 text-xs leading-5 text-slate-200">
            <span className="font-semibold text-blue-300">Diagnóstico IA: </span>
            ciclos de compresor irregulares, posible falla de termostato. Orden de reparación lista para
            derivar a un taller local.
          </p>
        )}
      </div>

      <div className="flex gap-2 px-4 pb-4">
        <span className="flex-1 rounded-md border border-white/10 bg-[#0b1120] py-2.5 text-center text-xs font-medium text-white">
          Telemetría
        </span>
        {hasFault && (
          <button
            onClick={onDiagnose}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 py-2.5 text-xs font-medium text-white hover:brightness-110 transition"
          >
            <Bot size={14} />
            Diagnóstico IA
          </button>
        )}
      </div>
    </article>
  );
};
