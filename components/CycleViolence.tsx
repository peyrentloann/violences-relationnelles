'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';

const phases = [
  {
    num: 1,
    label: 'Tension',
    description: "Tu te dis que c'est juste une mauvaise passe.",
    angle: 315,
    color: '#7CB9A8',
  },
  {
    num: 2,
    label: 'Agression',
    description: 'Tu te sens choqué·e, confus·e ou coupable.',
    angle: 45,
    color: '#4A8C72',
  },
  {
    num: 3,
    label: 'Justification',
    description: "Tu commences à douter de ta perception, ton partenaire te dit qu'il va changer",
    angle: 135,
    color: '#3D6B4F',
  },
  {
    num: 4,
    label: 'Réconciliation',
    description: 'Tu veux y croire. Tu te fais "gaslight" par ton partenaire',
    angle: 225,
    color: '#2A5038',
  },
];

export default function CycleViolence() {
  const [active, setActive] = useState<number | null>(null);

  const cx = 180, cy = 180, r = 108;

  function polarToXY(angleDeg: number, radius: number) {
    const rad = (angleDeg - 90) * (Math.PI / 180);
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
  }

  // Arc entre deux angles
  function describeArc(startAngle: number, endAngle: number, radius: number) {
    const start = polarToXY(startAngle, radius);
    const end = polarToXY(endAngle, radius);
    const large = endAngle - startAngle > 180 ? 1 : 0;
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${large} 1 ${end.x} ${end.y}`;
  }

  const arcColors = ['#A8D5B5', '#7CB9A8', '#5B8C6A', '#3D6B4F'];

  return (
    <section id="cycle" className="py-14 px-4 bg-[#E8F5E9]">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold text-[#3D6B4F] text-center mb-2">
            Le cycle de la violence
          </h2>
          <p className="text-center text-sm text-[#2D2D2D] mb-6">
            Appuie sur chaque phase pour en savoir plus
          </p>
        </FadeIn>

        {/* Diagramme SVG */}
        <FadeIn delay={150}>
          <div className="flex justify-center mb-6 overflow-visible">
            <svg viewBox="0 0 360 360" className="w-full max-w-[560px]" overflow="visible" aria-label="Cycle de la violence">
              <defs>
                {/* Marqueurs de flèche, un par couleur d'arc */}
                {arcColors.map((color, i) => (
                  <marker key={i} id={`arrow-${i}`} markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                    <polygon points="0,1 0,9 9,5" fill={color} />
                  </marker>
                ))}
              </defs>

              {/* Arcs colorés pour chaque quart */}
              {phases.map((phase, i) => {
                const startAngle = phase.angle - 90;
                const endAngle = phase.angle - 90 + 90;
                const isActive = active === i;
                return (
                  <path
                    key={i}
                    d={describeArc(startAngle, endAngle, r)}
                    fill="none"
                    stroke={isActive ? phase.color : arcColors[i]}
                    strokeWidth={isActive ? 22 : 16}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-width 0.3s, stroke 0.3s' }}
                  />
                );
              })}

              {/* Flèches entre chaque phase (aux midpoints des arcs) */}
              {[0, 90, 180, 270].map((midAngle, i) => (
                <path
                  key={i}
                  d={describeArc(midAngle - 1, midAngle + 1, r)}
                  fill="none"
                  stroke="transparent"
                  strokeWidth="1"
                  markerEnd={`url(#arrow-${i})`}
                />
              ))}

              {/* Cercle central */}
              <circle cx={cx} cy={cy} r="62" fill="white" />
              <circle cx={cx} cy={cy} r="62" fill="none" stroke="#A8D5B5" strokeWidth="1.5" strokeDasharray="4 4" />
              <text x={cx} y={cy - 8} textAnchor="middle" fill="#3D6B4F" fontSize="12" fontWeight="800" letterSpacing="2">CYCLE</text>
              <text x={cx} y={cy + 9} textAnchor="middle" fill="#5B8C6A" fontSize="11">de violence</text>
              <text x={cx} y={cy + 25} textAnchor="middle" fill="#A8D5B5" fontSize="9">↻ recommence</text>

              {/* Noeuds phases */}
              {phases.map((phase, i) => {
                const pos = polarToXY(phase.angle, r);
                const isActive = active === i;
                return (
                  <g key={i} onClick={() => setActive(isActive ? null : i)} className="cursor-pointer">
                    {/* Halo */}
                    {isActive && (
                      <circle cx={pos.x} cy={pos.y} r="36" fill={phase.color} opacity="0.2" />
                    )}
                    {/* Cercle principal */}
                    <circle
                      cx={pos.x} cy={pos.y} r="28"
                      fill={isActive ? phase.color : 'white'}
                      stroke={phase.color}
                      strokeWidth="3"
                      style={{ transition: 'all 0.3s' }}
                    />
                    {/* Numéro */}
                    <text
                      x={pos.x} y={pos.y - 5}
                      textAnchor="middle" fill={isActive ? 'white' : phase.color}
                      fontSize="16" fontWeight="900"
                    >
                      {phase.num}
                    </text>
                    {/* Label */}
                    <text
                      x={pos.x} y={pos.y + 9}
                      textAnchor="middle" fill={isActive ? 'white' : phase.color}
                      fontSize="8" fontWeight="600"
                    >
                      {phase.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={200}>
          {active !== null ? (
            <div className="bg-white rounded-2xl p-5 border-2 shadow-sm" style={{ borderColor: phases[active].color }}>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="w-9 h-9 text-white rounded-full flex items-center justify-center font-black text-base flex-shrink-0"
                  style={{ backgroundColor: phases[active].color }}
                >
                  {phases[active].num}
                </span>
                <h3 className="font-bold text-[#3D6B4F] text-lg">{phases[active].label}</h3>
              </div>
              <p className="text-[#2D2D2D] text-base">{phases[active].description}</p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-4 border border-[#A8D5B5]">
              {phases.map((phase, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-full text-left flex items-center gap-3 py-3 px-2 rounded-xl hover:bg-[#E8F5E9] transition-colors"
                >
                  <span
                    className="w-7 h-7 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0"
                    style={{ backgroundColor: phase.color }}
                  >
                    {phase.num}
                  </span>
                  <span className="font-semibold text-[#3D6B4F] text-sm">{phase.label}</span>
                </button>
              ))}
            </div>
          )}
        </FadeIn>

        <div className="mt-6 bg-[#3D6B4F] rounded-2xl px-5 py-4 text-center">
          <p className="text-white font-bold text-base">
            ⚠️ Le cycle recommence, souvent plus vite et plus fort.
          </p>
        </div>
      </div>
    </section>
  );
}
