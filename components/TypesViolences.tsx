'use client';

import { useState } from 'react';
import { Swords, Brain, AlertTriangle, HeartCrack, Zap, Laptop, FlaskConical } from 'lucide-react';

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
    <section id="types" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#3D6B4F] text-center mb-10">
          Types de Violences Relationnelles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {types.map((type, i) => {
            const Icon = type.icon;
            const isOpen = expanded === i;
            return (
              <button
                key={i}
                onClick={() => setExpanded(isOpen ? null : i)}
                className={`text-left border rounded-xl p-5 transition-all cursor-pointer ${
                  isOpen
                    ? 'border-[#5B8C6A] bg-[#E8F5E9] scale-[1.02] shadow-md'
                    : 'border-[#A8D5B5] bg-white hover:scale-[1.01] hover:shadow-sm hover:border-[#5B8C6A]'
                }`}
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-[#A8D5B5] rounded-lg">
                    <Icon size={18} className="text-[#3D6B4F]" aria-hidden />
                  </div>
                  <h3 className="font-semibold text-[#3D6B4F] text-sm">{type.titre}</h3>
                </div>
                <p className={`text-sm text-[#2D2D2D] transition-all ${isOpen ? 'block' : 'line-clamp-2'}`}>
                  {type.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
