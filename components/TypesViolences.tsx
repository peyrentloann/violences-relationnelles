'use client';

import { useState } from 'react';
import { Swords, Brain, AlertTriangle, HeartCrack, Zap, Laptop, FlaskConical } from 'lucide-react';
import FadeIn from './FadeIn';

const types = [
  {
    icon: Swords,
    titre: 'Violence physique',
    description: 'Blessures, coups, pousser, retenir, briser des objets',
  },
  {
    icon: Brain,
    titre: 'Violence psychologique',
    description: 'Humiliation, manipulation, isolement, critiques constantes, chantage, rabaisser',
  },
  {
    icon: AlertTriangle,
    titre: 'Violence verbale',
    description: 'Cris, insultes, menaces',
  },
  {
    icon: HeartCrack,
    titre: 'Violence sexuelle',
    description: 'Pression, chantage, sans consentement',
  },
  {
    icon: Zap,
    titre: 'Les micro-agressions',
    description: 'Comportements bref ou non, de manière répétés, blague entre amis...',
  },
  {
    icon: Laptop,
    titre: 'Cyberviolence',
    description: 'Messages excessifs, harcèlement, surveillance...',
  },
  {
    icon: FlaskConical,
    titre: 'Soumission chimique',
    description: 'Usage de drogue contre la personne',
  },
];

export default function TypesViolences() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="types" className="py-14 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold text-[#3D6B4F] text-center mb-8">
            Types de Violences Relationnelles
          </h2>
        </FadeIn>
        <div className="flex flex-col gap-3">
          {types.map((type, i) => {
            const Icon = type.icon;
            const isOpen = expanded === i;
            return (
              <FadeIn key={i} delay={i * 60}>
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className={`w-full text-left border rounded-2xl p-4 transition-all cursor-pointer ${
                    isOpen
                      ? 'border-[#5B8C6A] bg-[#E8F5E9] shadow-sm'
                      : 'border-[#A8D5B5] bg-white'
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#A8D5B5] rounded-xl flex-shrink-0">
                      <Icon size={20} className="text-[#3D6B4F]" aria-hidden />
                    </div>
                    <h3 className="font-semibold text-[#3D6B4F] text-base">{type.titre}</h3>
                  </div>
                  {isOpen && (
                    <p className="text-sm text-[#2D2D2D] mt-3 ml-12">
                      {type.description}
                    </p>
                  )}
                </button>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
