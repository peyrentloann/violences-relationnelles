'use client';

import { useState } from 'react';
import { Check, X, RotateCcw } from 'lucide-react';
import FadeIn from './FadeIn';

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

type Answer = 'oui' | 'non' | null;

export default function Consentement() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(Array(criteres.length).fill(null));
  const [done, setDone] = useState(false);

  const answer = (val: Answer) => {
    const next = [...answers];
    next[current] = val;
    setAnswers(next);
    if (current < criteres.length - 1) {
      setTimeout(() => setCurrent(current + 1), 250);
    } else {
      setTimeout(() => setDone(true), 250);
    }
  };

  const reset = () => {
    setCurrent(0);
    setAnswers(Array(criteres.length).fill(null));
    setDone(false);
  };

  const score = answers.filter(a => a === 'oui').length;
  const allOui = score === criteres.length;

  return (
    <section id="consentement" className="py-14 px-4 bg-white">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold text-[#3D6B4F] text-center mb-1">
            Le Consentement
          </h2>
          <p className="text-center text-sm text-[#5B8C6A] mb-6">
            Mon consentement est présent quand…
          </p>
        </FadeIn>

        {!done ? (
          <FadeIn delay={100}>
            {/* Dots de progression */}
            <div className="flex justify-center gap-1.5 mb-6">
              {criteres.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 20 : 8,
                    height: 8,
                    backgroundColor:
                      answers[i] === 'oui' ? '#4CAF50'
                      : answers[i] === 'non' ? '#A8D5B5'
                      : i === current ? '#3D6B4F'
                      : '#E8F5E9',
                  }}
                />
              ))}
            </div>

            {/* Carte question */}
            <div className="bg-[#E8F5E9] rounded-3xl p-8 mb-5 min-h-[140px] flex items-center justify-center border border-[#A8D5B5]">
              <p className="text-[#2D2D2D] text-lg font-semibold text-center leading-snug">
                {criteres[current]}
              </p>
            </div>

            {/* Compteur */}
            <p className="text-center text-xs text-[#5B8C6A] mb-4">
              {current + 1} / {criteres.length}
            </p>

            {/* Boutons */}
            <div className="flex gap-3">
              <button
                onClick={() => answer('non')}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-white border-2 border-[#A8D5B5] text-[#5B8C6A] rounded-2xl font-bold text-base hover:border-[#5B8C6A] transition-all active:scale-95"
              >
                <X size={18} /> Non
              </button>
              <button
                onClick={() => answer('oui')}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#3D6B4F] text-white rounded-2xl font-bold text-base hover:bg-[#5B8C6A] transition-all active:scale-95"
              >
                <Check size={18} /> Oui
              </button>
            </div>
          </FadeIn>
        ) : (
          <FadeIn>
            {/* Résultat */}
            <div className="text-center mb-6">
              {/* Cercle score */}
              <div className="relative w-28 h-28 mx-auto mb-5">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#E8F5E9" strokeWidth="10" />
                  <circle
                    cx="50" cy="50" r="42" fill="none"
                    stroke={allOui ? '#4CAF50' : '#5B8C6A'}
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${(score / criteres.length) * 264} 264`}
                    style={{ transition: 'stroke-dasharray 0.8s ease' }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black text-[#3D6B4F]">{score}</span>
                  <span className="text-xs text-[#5B8C6A]">/ {criteres.length}</span>
                </div>
              </div>

              {allOui ? (
                <>
                  <p className="text-xl font-bold text-[#3D6B4F] mb-2">Ton consentement est présent ✓</p>
                  <p className="text-sm text-[#5B8C6A]">Tous les critères sont réunis.</p>
                </>
              ) : (
                <>
                  <p className="text-xl font-bold text-[#3D6B4F] mb-2">Prends le temps de réfléchir</p>
                  <p className="text-sm text-[#5B8C6A] max-w-xs mx-auto">
                    Certains critères ne sont pas réunis. Ça peut valoir la peine d'en parler à quelqu'un de confiance.
                  </p>
                </>
              )}
            </div>

            {/* Récapitulatif compact */}
            <div className="grid grid-cols-3 gap-1.5 mb-6">
              {criteres.map((c, i) => (
                <div
                  key={i}
                  title={c}
                  className={`rounded-xl py-2 px-1 text-center text-xs font-bold ${
                    answers[i] === 'oui'
                      ? 'bg-[#4CAF50] text-white'
                      : 'bg-[#E8F5E9] text-[#5B8C6A]'
                  }`}
                >
                  {i + 1}. {answers[i] === 'oui' ? '✓' : '–'}
                </div>
              ))}
            </div>

            <button
              onClick={reset}
              className="w-full flex items-center justify-center gap-2 py-3 border border-[#A8D5B5] rounded-2xl text-sm text-[#5B8C6A] hover:bg-[#E8F5E9] transition-colors"
            >
              <RotateCcw size={14} /> Recommencer
            </button>
          </FadeIn>
        )}

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
