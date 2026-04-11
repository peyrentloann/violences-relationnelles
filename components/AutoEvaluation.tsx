'use client';

import { useState } from 'react';
import { ThumbsUp, ThumbsDown, RotateCcw, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';

const questions = [
  { text: 'Je me sens respecté·e dans cette relation.', emoji: '🤝' },
  { text: 'Je peux m\'affirmer sans avoir peur des réactions.', emoji: '💬' },
  { text: 'Je me sens libre de mes choix et de mes amis.', emoji: '🕊️' },
  { text: 'Je conseillerais ma relation à un·e ami·e.', emoji: '💛' },
  { text: 'Mon partenaire me respecte tel·le que je suis.', emoji: '🌱' },
];

type Answers = (boolean | null)[];

export default function AutoEvaluation() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answers>(Array(questions.length).fill(null));
  const [done, setDone] = useState(false);
  const [exiting, setExiting] = useState(false);

  const answer = (val: boolean) => {
    const next = [...answers];
    next[current] = val;
    setAnswers(next);
    setExiting(true);
    setTimeout(() => {
      setExiting(false);
      if (current < questions.length - 1) {
        setCurrent(current + 1);
      } else {
        setDone(true);
      }
    }, 300);
  };

  const reset = () => {
    setCurrent(0);
    setAnswers(Array(questions.length).fill(null));
    setDone(false);
  };

  const score = answers.filter(a => a === true).length;
  const hasNon = answers.some(a => a === false);

  return (
    <section id="evaluation" className="py-14 px-4 bg-[#3D6B4F]">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <p className="text-center text-xs font-bold tracking-[0.2em] uppercase text-[#A8D5B5] mb-2">
            Auto-évaluation
          </p>
          <h2 className="text-2xl font-bold text-white text-center mb-1">
            Questions à te poser
          </h2>
          <p className="text-center text-sm text-[#A8D5B5] mb-8">
            En cas de doute sur ta relation…
          </p>
        </FadeIn>

        {!done ? (
          <FadeIn delay={100}>
            {/* Indicateur question X/Y */}
            <div className="flex items-center justify-between mb-4 px-1">
              <span className="text-[#A8D5B5] text-xs font-medium">{current + 1} / {questions.length}</span>
              <div className="flex gap-1.5">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === current ? 20 : 8,
                      height: 8,
                      backgroundColor: answers[i] === true
                        ? '#4CAF50'
                        : answers[i] === false
                        ? '#A8D5B5'
                        : i === current
                        ? 'white'
                        : 'rgba(255,255,255,0.2)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Carte question */}
            <div
              className="rounded-3xl p-8 mb-6 min-h-[200px] flex flex-col items-center justify-center text-center transition-all duration-300"
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                opacity: exiting ? 0 : 1,
                transform: exiting ? 'scale(0.95)' : 'scale(1)',
              }}
            >
              <span className="text-5xl mb-5">{questions[current].emoji}</span>
              <p className="text-white text-xl font-semibold leading-snug">
                {questions[current].text}
              </p>
            </div>

            {/* Boutons */}
            <div className="flex gap-4">
              <button
                onClick={() => answer(false)}
                className="flex-1 flex flex-col items-center gap-2 py-5 rounded-3xl font-bold text-sm transition-all active:scale-95"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.2)', color: '#A8D5B5' }}
              >
                <ThumbsDown size={22} />
                Non
              </button>
              <button
                onClick={() => answer(true)}
                className="flex-1 flex flex-col items-center gap-2 py-5 rounded-3xl font-bold text-sm bg-white text-[#3D6B4F] transition-all active:scale-95 shadow-lg"
              >
                <ThumbsUp size={22} />
                Oui
              </button>
            </div>
          </FadeIn>
        ) : (
          <FadeIn>
            {/* Résultat */}
            <div
              className="rounded-3xl p-7 mb-5 text-center"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              {/* Score en grands chiffres */}
              <div className="mb-5">
                <span className="text-7xl font-black text-white">{score}</span>
                <span className="text-2xl font-bold text-[#A8D5B5]"> / {questions.length}</span>
              </div>

              {hasNon ? (
                <>
                  <p className="text-white font-bold text-lg mb-2">Tu mérites de te sentir bien.</p>
                  <p className="text-[#A8D5B5] text-sm mb-5 leading-relaxed">
                    Certaines réponses méritent attention. Tu n'es pas seul·e — des ressources sont là pour toi.
                  </p>
                  <a
                    href="#ressources"
                    className="inline-flex items-center gap-2 bg-white text-[#3D6B4F] px-6 py-3 rounded-2xl font-bold text-sm"
                  >
                    Voir les ressources <ArrowRight size={16} />
                  </a>
                </>
              ) : (
                <>
                  <p className="text-white font-bold text-lg mb-2">C'est encourageant !</p>
                  <p className="text-[#A8D5B5] text-sm leading-relaxed">
                    Tes réponses semblent positives. Continue d'être à l'écoute de toi-même.
                  </p>
                </>
              )}
            </div>

            {/* Mini résumé horizontal */}
            <div className="flex gap-2 mb-5">
              {questions.map((q, i) => (
                <div
                  key={i}
                  title={q.text}
                  className="flex-1 rounded-2xl py-3 flex flex-col items-center gap-1"
                  style={{
                    backgroundColor: answers[i] ? '#4CAF50' : 'rgba(255,255,255,0.15)',
                  }}
                >
                  <span className="text-lg">{q.emoji}</span>
                  <span className="text-xs font-bold text-white">{answers[i] ? '✓' : '–'}</span>
                </div>
              ))}
            </div>

            <button
              onClick={reset}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm text-[#A8D5B5] transition-colors"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <RotateCcw size={14} /> Recommencer
            </button>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
