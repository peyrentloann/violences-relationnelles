'use client';

import { useState, useRef } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from './FadeIn';

const typesConsentement = [
  {
    titre: 'Consentement clair',
    texte: "L'accord doit être communiqué clairement, par des paroles, des gestes ou les deux. Le silence ou l'absence de résistance physique ne valent pas un consentement.",
  },
  {
    titre: 'Consentement libre',
    texte: "La personne doit donner son consentement librement, savoir à quoi elle consent, et ce pour chaque activité et en tout temps. Les partenaires doivent être pleinement en état de consentir — impossible en état d'intoxication ou de sommeil.",
  },
  {
    titre: 'Consentement enthousiaste',
    texte: "Il ne peut être obtenu à l'aide de menaces ou de chantage. Aucune pression ne doit être exercée. Les gestes doivent être une expression de désir et de plaisir.",
  },
  {
    titre: 'Consentement sécuritaire',
    texte: "L'accord doit être donné sans peur des représailles ou de la réaction de l'autre. Si le partenaire insiste, use de menaces ou de chantage pour obtenir un oui, ce n'est pas un consentement.",
  },
];

function TypeConsentement({ titre, texte }: { titre: string; texte: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className={`w-full text-left border rounded-2xl p-4 transition-all cursor-pointer ${open ? 'border-[#5B8C6A] bg-[#E8F5E9]' : 'border-[#A8D5B5] bg-white'}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-semibold text-[#3D6B4F] text-sm">{titre}</span>
        <ChevronDown size={16} className={`text-[#5B8C6A] flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </div>
      {open && <p className="text-sm text-[#2D2D2D] mt-3 leading-relaxed">{texte}</p>}
    </button>
  );
}

const criteres = [
  "Je n'ai pas peur des conséquences si je dis non.",
  "Je me sens bien dans mon cœur, dans ma tête et dans mon corps.",
  "Je n'ai pas peur que l'autre me fasse mal ou se fâche.",
  "L'autre personne arrête lorsque je le lui demande.",
  "L'autre personne est gentille avec moi.",
  "L'autre ne cherche pas à me faire changer d'avis par la pression ou la menace.",
  "L'activité se fait sans cadeau, sans argent et sans rien en retour.",
  "Il n'y a pas de contexte d'autorité ou de position de confiance.",
  "Je ne suis pas intoxiqué·e, endormi·e ou inconscient·e.",
];

export default function Consentement() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(criteres.length - 1, c + 1));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section id="consentement" className="py-14 px-4 bg-white">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold text-[#3D6B4F] text-center mb-3">
            Le consentement
          </h2>
          <p className="text-sm text-[#2D2D2D] text-center mb-6 leading-relaxed">
            Le consentement sexuel est un accord <strong>clair et enthousiaste</strong> qu'une personne donne librement à son ou sa partenaire. Un consentement exprimé dans le passé n'est pas valide au présent — il doit être constant et peut être retiré à tout moment.
          </p>

          <div className="flex flex-col gap-2 mb-8">
            {typesConsentement.map((t) => (
              <TypeConsentement key={t.titre} titre={t.titre} texte={t.texte} />
            ))}
          </div>

          <div className="bg-[#fff8ee] border border-[#eec068] rounded-2xl p-4 mb-8 text-sm text-[#2D2D2D] leading-relaxed">
            <p className="font-bold text-[#3D6B4F] mb-1">Définition — Agression sexuelle</p>
            <p>Une agression sexuelle est un geste à caractère sexuel, avec ou sans contact physique, commis sans le consentement de la personne visée. Il s'agit d'un acte visant à assujettir une autre personne à ses propres désirs par un abus de pouvoir, par l'utilisation de la force ou de la contrainte, ou sous la menace implicite ou explicite.</p>
            <p className="mt-2 font-semibold text-[#5B8C6A]">Le consentement n'est pas valable s'il est donné par une personne âgée de moins de 16 ans ou en situation de dépendance.</p>
          </div>

          <p className="text-center text-sm text-[#5B8C6A] mb-6 font-medium">
            Mon consentement est présent quand…
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          {/* Dots */}
          <div className="flex justify-center gap-1.5 mb-5">
            {criteres.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300 focus:outline-none"
                style={{
                  width: i === current ? 20 : 8,
                  height: 8,
                  backgroundColor: i === current ? '#3D6B4F' : '#E8F5E9',
                }}
              />
            ))}
          </div>

          {/* Carte swipeable */}
          <div
            className="bg-[#E8F5E9] rounded-3xl p-8 mb-4 min-h-[140px] flex items-center justify-center border border-[#A8D5B5] select-none cursor-grab active:cursor-grabbing"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <p className="text-[#2D2D2D] text-lg font-semibold text-center leading-snug">
              {criteres[current]}
            </p>
          </div>

          {/* Compteur + navigation */}
          <div className="flex items-center justify-between px-1">
            <button
              onClick={prev}
              disabled={current === 0}
              className="p-2 rounded-full text-[#5B8C6A] disabled:opacity-20 hover:bg-[#E8F5E9] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-xs text-[#5B8C6A]">{current + 1} / {criteres.length}</span>
            <button
              onClick={next}
              disabled={current === criteres.length - 1}
              className="p-2 rounded-full text-[#5B8C6A] disabled:opacity-20 hover:bg-[#E8F5E9] transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </FadeIn>

        {/* Message clé */}
        <div className="mt-6 border-2 border-[#3D6B4F] rounded-2xl p-5 bg-[#E8F5E9]">
          <p className="text-[#3D6B4F] font-bold text-base text-center">
            Le consentement peut être retiré à n'importe quel moment, de manière verbale ou non verbale !!
          </p>
        </div>
      </div>
    </section>
  );
}
