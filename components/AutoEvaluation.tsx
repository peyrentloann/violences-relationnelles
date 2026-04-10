'use client';

import { useState } from 'react';

const questions = [
  'Est-ce que je me sens respecté·e ?',
  "Est-ce que je peux m'affirmer sans avoir peur ?",
  'Est-ce que je me sens libre ?',
  "Est-ce que je conseillerais ma relation à un·e ami·e ?",
  'Est-ce que mon partenaire me respecte ?',
];

type Answers = (boolean | null)[];

export default function AutoEvaluation() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>(Array(questions.length).fill(null));
  const [done, setDone] = useState(false);

  const answer = (val: boolean) => {
    const next = [...answers];
    next[current] = val;
    setAnswers(next);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setCurrent(0);
    setAnswers(Array(questions.length).fill(null));
    setDone(false);
  };

  const hasNon = answers.some(a => a === false);
  const progress = done ? 100 : (current / questions.length) * 100;

  return (
    <section id="evaluation" className="py-14 px-4 bg-[#E8F5E9]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-[#3D6B4F] text-center mb-2">
          Questions à te poser
        </h2>
        <p className="text-center text-sm text-[#2D2D2D] mb-6">
          En cas de doute, voici des questions à te poser...
        </p>

        {/* Barre de progression */}
        <div className="w-full bg-[#A8D5B5] rounded-full h-2 mb-6">
          <div
            className="bg-[#3D6B4F] h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>

        {!done ? (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#A8D5B5] text-center">
            <p className="text-xs text-[#5B8C6A] font-medium mb-3">
              Question {current + 1} sur {questions.length}
            </p>
            <p className="text-xl font-semibold text-[#2D2D2D] mb-8 leading-snug">
              {questions[current]}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => answer(true)}
                className="flex-1 py-4 bg-[#4CAF50] text-white rounded-2xl font-bold text-lg hover:bg-green-600 transition-colors"
              >
                Oui
              </button>
              <button
                onClick={() => answer(false)}
                className="flex-1 py-4 bg-[#5B8C6A] text-white rounded-2xl font-bold text-lg hover:bg-[#3D6B4F] transition-colors"
              >
                Non
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#A8D5B5] text-center">
            <div className="mb-6">
              {hasNon ? (
                <>
                  <p className="text-xl font-bold text-[#3D6B4F] mb-3">
                    Tu mérites de te sentir bien dans ta relation.
                  </p>
                  <p className="text-[#2D2D2D] mb-5 text-base">
                    Certaines de tes réponses pourraient indiquer des points d'attention. N'hésite pas à consulter les ressources disponibles — tu n'es pas seul·e.
                  </p>
                  <a
                    href="#ressources"
                    className="inline-block w-full bg-[#3D6B4F] text-white px-6 py-4 rounded-2xl font-bold text-base hover:bg-[#5B8C6A] transition-colors"
                  >
                    Voir les ressources
                  </a>
                </>
              ) : (
                <>
                  <p className="text-xl font-bold text-[#3D6B4F] mb-3">
                    C'est encourageant !
                  </p>
                  <p className="text-[#2D2D2D] text-base">
                    Tes réponses semblent indiquer que tu te sens bien dans ta relation. Continue d'être à l'écoute de toi-même.
                  </p>
                </>
              )}
            </div>

            {/* Résumé */}
            <div className="flex flex-wrap gap-2 justify-center mb-5">
              {questions.map((q, i) => (
                <span
                  key={i}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium text-white ${
                    answers[i] ? 'bg-[#4CAF50]' : 'bg-[#5B8C6A]'
                  }`}
                  title={q}
                >
                  {i + 1}. {answers[i] ? 'Oui' : 'Non'}
                </span>
              ))}
            </div>

            <button
              onClick={reset}
              className="text-sm text-[#5B8C6A] underline hover:text-[#3D6B4F]"
            >
              Recommencer
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
