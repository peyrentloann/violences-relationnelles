'use client';

import { useState } from 'react';
import { Swords, Brain, AlertTriangle, HeartCrack, Zap, Laptop, FlaskConical, ChevronDown } from 'lucide-react';
import FadeIn from './FadeIn';

const types = [
  {
    icon: Swords,
    titre: 'Violence physique',
    description: 'Utilisation de la force pour blesser, contrôler ou intimider.',
    caracterise: ['Pousser, frapper, gifler', 'Retenir ou immobiliser', 'Lancer des objets', 'Briser des objets'],
  },
  {
    icon: Brain,
    titre: 'Violence psychologique',
    description: "Atteinte à l'estime de soi et à l'identité par des comportements répétés.",
    caracterise: ['Humiliation et rabaissement', 'Manipulation et chantage émotionnel', 'Isolement social', 'Critiques constantes'],
  },
  {
    icon: AlertTriangle,
    titre: 'Violence verbale',
    description: 'Usage des mots pour blesser, menacer ou contrôler.',
    caracterise: ["Cris et hurlements", "Insultes et noms d'oiseaux", "Menaces directes ou voilées"],
  },
  {
    icon: HeartCrack,
    titre: 'Violence sexuelle',
    description: 'Tout acte sexuel imposé sans consentement libre et éclairé.',
    caracterise: ['Pression ou insistance répétée', 'Chantage affectif ou matériel', 'Actes sans consentement'],
  },
  {
    icon: Zap,
    titre: 'Les micro-agressions',
    description: 'Comportements blessants, souvent banalisés, répétés dans le temps.',
    caracterise: ["Blagues insultantes", "Commentaires déplacés sur l'apparence", "Gestes ou regards intimidants"],
  },
  {
    icon: Laptop,
    titre: 'Cyberviolence',
    description: 'Violences exercées via les écrans et les réseaux sociaux.',
    caracterise: ["Messages excessifs ou harcelants", "Surveillance des comptes et appareils", "Harcèlement en ligne, diffusion d'images"],
  },
  {
    icon: FlaskConical,
    titre: 'Soumission chimique',
    description: 'Administration de substances à une personne à son insu pour la contrôler.',
    caracterise: ["Ajout de drogue ou d'alcool dans un verre", "Médicaments donnés sans consentement", "Objectif : réduire la capacité à résister"],
  },
];

export default function TypesViolences() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="types" className="py-14 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold text-[#3D6B4F] text-center mb-8">
            Types de violences relationnelles
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
                    <h3 className="font-semibold text-[#3D6B4F] text-base flex-1">{type.titre}</h3>
                    <ChevronDown
                      size={18}
                      className={`text-[#5B8C6A] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden
                    />
                  </div>
                  {isOpen && (
                    <div className="mt-3 ml-12">
                      <p className="text-sm text-[#2D2D2D] mb-2">{type.description}</p>
                      <p className="text-xs font-semibold text-[#3D6B4F] uppercase tracking-wide mb-1.5">
                        Se caractérise par :
                      </p>
                      <ul className="flex flex-col gap-1">
                        {type.caracterise.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[#2D2D2D]">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5B8C6A] flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
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
