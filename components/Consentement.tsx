'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

const criteres = [
  "Je n'ai pas peur des conséquences si je dis non.",
  "Je me sens bien dans mon cœur, dans ma tête et dans mon corps dans la situation.",
  "Je n'ai pas peur que l'autre me fasse mal physiquement ou que l'autre se fâche.",
  "L'autre personne arrête lorsque je le lui demande.",
  "L'autre personne est gentille avec moi.",
  "L'autre personne ne cherche pas à me faire changer d'avis si je n'en ai pas envie, en utilisant la menace, la violence, la pression ou autre.",
  "L'activité sexuelle se fait sans cadeau, sans argent et sans rien en retour (c'est juste pour le plaisir).",
  "Il n'y a pas de contexte d'autorité ou de position de confiance.",
  "Je ne suis pas intoxiqué·e par la drogue ou l'alcool, je ne dors pas et je ne suis pas inconscient·e au moment de l'activité sexuelle.",
];

export default function Consentement() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    const next = new Set(checked);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    setChecked(next);
  };

  const allChecked = checked.size === criteres.length;
  const someChecked = checked.size > 0;

  return (
    <section id="consentement" className="py-14 px-4 bg-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-[#3D6B4F] text-center mb-2">
          Le Consentement
        </h2>
        <p className="text-center text-sm text-[#2D2D2D] mb-6">
          Coche les critères qui s'appliquent à ta situation
        </p>

        <div className="space-y-2 mb-6">
          {criteres.map((critere, i) => {
            const isChecked = checked.has(i);
            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                className={`w-full text-left flex items-start gap-4 p-4 rounded-2xl border transition-all ${
                  isChecked
                    ? 'border-[#4CAF50] bg-green-50'
                    : 'border-[#A8D5B5] bg-white'
                }`}
                aria-pressed={isChecked}
              >
                <div
                  className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                    isChecked ? 'bg-[#4CAF50] border-[#4CAF50]' : 'border-[#A8D5B5]'
                  }`}
                  aria-hidden
                >
                  {isChecked && <Check size={13} className="text-white" strokeWidth={3} />}
                </div>
                <span className={`text-base leading-snug ${isChecked ? 'text-[#2D5C38]' : 'text-[#2D2D2D]'}`}>
                  {critere}
                </span>
              </button>
            );
          })}
        </div>

        {/* Message contextuel */}
        {someChecked && (
          <div className={`rounded-2xl p-5 border-2 mb-4 ${
            allChecked ? 'bg-green-50 border-[#4CAF50]' : 'bg-[#E8F5E9] border-[#5B8C6A]'
          }`}>
            {allChecked ? (
              <p className="text-[#2D5C38] font-medium text-base">
                Tous les critères sont cochés — les conditions du consentement semblent réunies.
              </p>
            ) : (
              <p className="text-[#3D6B4F] font-medium text-base">
                Certains critères ne sont pas cochés. Prends le temps de les relire — ils peuvent être des points d'attention importants.
              </p>
            )}
          </div>
        )}

        {/* Message important */}
        <div className="border-2 border-[#3D6B4F] rounded-2xl p-5 bg-[#E8F5E9]">
          <p className="text-[#3D6B4F] font-bold text-base text-center">
            Le consentement peut être retiré à n'importe quel moment, de manière verbale ou non verbale !!
          </p>
        </div>
      </div>
    </section>
  );
}
