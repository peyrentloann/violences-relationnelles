'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const signes = [
  {
    titre: 'Manque de respect',
    description: 'Insultes, rabaissement, moqueries. Tu ne te sens pas "assez" pour ton partenaire.',
  },
  {
    titre: 'Manipulation',
    description: 'Le partenaire ne reconnaît pas ses torts et retourne les conflits contre toi. Il/elle te fait croire que "c\'est toi le problème".',
  },
  {
    titre: 'Tous les types de violences relationnelles',
    description: 'Peu importe le type de violence, si tu es victime de l\'une d\'entre elles, c\'est peut-être signe que tu es dans une relation malsaine.',
  },
  {
    titre: 'Communication non libre',
    description: 'Tu hésites à nommer tes ressentis à ton partenaire par peur qu\'il se fâche. Vous ne pouvez pas discuter ouvertement suite à un conflit pour régler les choses.',
  },
  {
    titre: 'Consentement brimé',
    description: 'Ton partenaire ne respecte pas tes envies ou tu as tout simplement peur de signaler tes véritables envies.',
  },
];

const consequences = [
  'Détresse psychologique',
  'Baisse de l\'estime de soi',
  'Sentiment de culpabilité',
  'Isolement social (conflits avec l\'entourage)',
  'Vivre de l\'anxiété et du stress au quotidien',
  'Dépression',
  'Troubles du sommeil',
];

export default function RelationsMalsaines() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="malsaines" className="py-14 px-4 bg-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-[#3D6B4F] text-center mb-8">
          Relations Malsaines
        </h2>

        {/* Accordion signes */}
        <div className="space-y-2 mb-10">
          {signes.map((signe, i) => (
            <div key={i} className="border border-[#A8D5B5] rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-[#E8F5E9] transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-[#3D6B4F] text-base pr-2">{signe.titre}</span>
                <ChevronDown
                  size={20}
                  className={`text-[#5B8C6A] transition-transform flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-base text-[#2D2D2D] border-t border-[#E8F5E9]">
                  <p className="pt-3">{signe.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Conséquences */}
        <div className="bg-[#3D6B4F] rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">
            Conséquences des relations malsaines
          </h3>
          <ul className="space-y-3">
            {consequences.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-white text-base">
                <span className="w-2 h-2 rounded-full bg-[#A8D5B5] flex-shrink-0 mt-2" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
