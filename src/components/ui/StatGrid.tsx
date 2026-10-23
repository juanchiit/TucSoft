import React from 'react';

interface Stat {
  value: string;
  label: string;
}

interface StatGridProps {
  stats: Stat[];
  surface?: string;
}

export const StatGrid: React.FC<StatGridProps> = ({ stats, surface = 'bg-ink' }) => (
  <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
    {stats.map((stat) => (
      <div key={stat.label} className={`${surface} flex flex-col gap-3 px-6 py-8 sm:px-8`}>
        <dt className="order-2 text-xs sm:text-sm uppercase tracking-widest text-white/60 leading-snug">
          {stat.label}
        </dt>
        <dd className="order-1 text-4xl lg:text-5xl font-bold text-brand leading-none tabular-nums">
          {stat.value}
        </dd>
      </div>
    ))}
  </dl>
);
