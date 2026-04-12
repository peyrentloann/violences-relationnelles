'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FadeIn from './FadeIn';

const signes = [
  {
    titre: 'Manque de respect',
    description: 'Ton partenaire te rabaisse ou te fait sentir que tu n\'es pas à la hauteur.',
    caracterise: ['Insultes et moqueries', 'Rabaissement répété', 'Tu ne te sens pas "assez" pour ton partenaire'],
  },
  {
    titre: 'Manipulation',
    description: 'Ton partenaire retourne les situations à son avantage et te fait douter de toi.',
    caracterise: ['Ne reconnaît jamais ses torts', 'Retourne les conflits contre toi', 'Te fait croire que "c\'est toi le problème"'],
  },
  {
    titre: 'Tous les types de violences relationnelles',
    description: 'Peu importe le type de violence, en subir une est un signe que la relation est malsaine.',
    caracterise: ['Violence physique, verbale ou psychologique', 'Cyberviolence ou soumission chimique', 'Même une seule forme suffit à alerter'],
  },
  {
    titre: 'Communication non libre',
    description: 'Tu n\'oses pas t\'exprimer librement par peur de la réaction de ton partenaire.',
    caracterise: ['Tu hésites à nommer tes ressentis', 'Peur que ton partenaire se fâche', 'Impossible de discuter après un conflit'],
  },
  {
    titre: 'Consentement brimé',
    description: 'Ton partenaire ne respecte pas tes limites ou tu as peur d\'exprimer tes vraies envies.',
    caracterise: ['Tes envies et refus ne sont pas respectés', 'Tu as peur de dire non', 'Pression sur tes choix personnels'],
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
        <FadeIn>
          <h2 className="text-2xl font-bold text-[#3D6B4F] text-center mb-8">
            Relations malsaines
          </h2>
        </FadeIn>

        {/* Accordion signes */}
        <div className="space-y-2 mb-10">
          {signes.map((signe, i) => (
            <FadeIn key={i} delay={i * 70}>
            <div className="border border-[#A8D5B5] rounded-2xl overflow-hidden">
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
                <div className="px-5 pb-4 text-sm text-[#2D2D2D] border-t border-[#E8F5E9]">
                  <p className="pt-3 mb-2">{signe.description}</p>
                  <p className="text-xs font-semibold text-[#3D6B4F] uppercase tracking-wide mb-1.5">Se caractérise par :</p>
                  <ul className="flex flex-col gap-1">
                    {signe.caracterise.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5B8C6A] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            </FadeIn>
          ))}
        </div>

        {/* Conséquences */}
        <FadeIn delay={100}>
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
        </FadeIn>
      </div>
    </section>
  );
}
