import React from 'react';

const sparkles = [
  { top: '8%', left: '22%', size: 6, delay: '0s' },
  { top: '18%', left: '84%', size: 4, delay: '1.2s' },
  { top: '72%', left: '8%', size: 5, delay: '2.1s' },
  { top: '88%', left: '64%', size: 7, delay: '0.6s' },
  { top: '46%', left: '96%', size: 4, delay: '1.8s' },
  { top: '4%', left: '58%', size: 3, delay: '2.6s' },
];

export const HeroOrb: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative aspect-square select-none pointer-events-none ${className}`} aria-hidden="true">
    <div className="orb-glow absolute inset-[6%] rounded-full" />

    <div className="orb-ring orb-ring-a absolute inset-0 rounded-full">
      <span className="orb-ring-dot" />
    </div>
    <div className="orb-ring orb-ring-b absolute inset-[9%] rounded-full">
      <span className="orb-ring-dot" />
    </div>

    <div className="orb-sphere absolute inset-[20%] rounded-full overflow-hidden">
      <div className="orb-blob orb-blob-1" />
      <div className="orb-blob orb-blob-2" />
      <div className="orb-blob orb-blob-3" />
      <div className="orb-blob orb-blob-4" />
      <div className="orb-shine absolute inset-0 rounded-full" />
    </div>

    {sparkles.map((s, i) => (
      <span
        key={i}
        className="orb-sparkle absolute rounded-full"
        style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }}
      />
    ))}
  </div>
);
