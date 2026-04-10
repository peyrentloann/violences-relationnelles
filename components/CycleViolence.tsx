'use client';

import { useState } from 'react';

const phases = [
  {
    num: 1,
    label: 'Tension',
    description: 'Tu te dis que c\'est juste une mauvaise passe.',
    angle: 315,
  },
  {
    num: 2,
    label: 'Agression',
    description: 'Tu te sens choqué·e, confus·e ou coupable.',
    angle: 45,
  },
  {
    num: 3,
    label: 'Justification',
    description: 'Tu commences à douter de ta perception, ton partenaire te dit qu\'il va changer',
    angle: 135,
  },
  {
    num: 4,
    label: 'Réconciliation',
    description: 'Tu veux y croire. Tu te fais "gaslight" par ton partenaire',
    angle: 225,
  },
];

export default function CycleViolence() {
  const [active, setActive] = useState<number | null>(null);

  const cx = 160, cy = 160, r = 100;

  function polarToXY(angleDeg: number, radius: number) {
    const rad = (angleDeg - 90) * (Math.PI / 180);
    return {
      x: cx + radius * Math.cos(rad),
      y: cy + radius * Math.sin(rad),
    };
  }

  return (
    <section id="cycle" className="py-16 px-4 bg-[#E8F5E9]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#3D6B4F] text-center mb-4">
          Le Cycle de la Violence
        </h2>
        <p className="text-center text-sm text-[#2D2D2D] mb-8">
          Clique sur chaque phase pour en savoir plus
        </p>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Diagramme SVG */}
          <div className="flex-shrink-0">
            <svg viewBox="0 0 320 320" className="w-64 md:w-72" aria-label="Cycle de la violence">
              {/* Cercle de fond */}
              <circle cx={cx} cy={cy} r={r} fill="none" stroke="#A8D5B5" strokeWidth="20" />

              {/* Flèches circulaires */}
              <path
                d={`M ${polarToXY(270, r).x} ${polarToXY(270, r).y} A ${r} ${r} 0 1 1 ${polarToXY(268, r).x} ${polarToXY(268, r).y}`}
                fill="none"
                stroke="#5B8C6A"
                strokeWidth="3"
                markerEnd="url(#arrow)"
              />
              <defs>
                <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="#5B8C6A" />
                </marker>
              </defs>

              {/* Phases */}
              {phases.map((phase, i) => {
                const pos = polarToXY(phase.angle, r);
                const isActive = active === i;
                return (
                  <g key={i} onClick={() => setActive(isActive ? null : i)} className="cursor-pointer">
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="22"
                      fill={isActive ? '#3D6B4F' : '#5B8C6A'}
                      className="transition-all"
                    />
                    <text
                      x={pos.x}
                      y={pos.y - 4}
                      textAnchor="middle"
                      fill="white"
                      fontSize="13"
                      fontWeight="bold"
                    >
                      {phase.num}
                    </text>
                    <text
                      x={pos.x}
                      y={pos.y + 9}
                      textAnchor="middle"
                      fill="white"
                      fontSize="7"
                    >
                      {phase.label}
                    </text>
                  </g>
                );
              })}

              {/* Centre */}
              <text x={cx} y={cy - 6} textAnchor="middle" fill="#3D6B4F" fontSize="9" fontWeight="bold">
                CYCLE
              </text>
              <text x={cx} y={cy + 6} textAnchor="middle" fill="#3D6B4F" fontSize="9">
                de violence
              </text>
            </svg>
          </div>

          {/* Description */}
          <div className="flex-1">
            {active !== null ? (
              <div className="bg-white rounded-xl p-6 border border-[#5B8C6A] shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#3D6B4F] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {phases[active].num}
                  </span>
                  <h3 className="font-bold text-[#3D6B4F] text-lg">{phases[active].label}</h3>
                </div>
                <p className="text-[#2D2D2D]">{phases[active].description}</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl p-6 border border-[#A8D5B5]">
                <div className="space-y-3">
                  {phases.map((phase, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className="w-full text-left flex items-start gap-3 p-2 rounded-lg hover:bg-[#E8F5E9] transition-colors"
                    >
                      <span className="w-6 h-6 bg-[#5B8C6A] text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        {phase.num}
                      </span>
                      <div>
                        <span className="font-semibold text-[#3D6B4F] text-sm">{phase.label}</span>
                        <p className="text-xs text-[#2D2D2D] mt-0.5">{phase.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <p className="mt-4 text-sm italic text-[#3D6B4F] font-medium text-center">
              Le cycle recommence, souvent plus vite et plus fort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
