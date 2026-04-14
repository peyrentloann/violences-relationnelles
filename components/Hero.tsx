'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Brain, Swords, MessageSquare, HeartCrack, FileX, Wallet, LifeBuoy } from 'lucide-react';

const types = [
  { icon: Brain, label: 'Psychologique' },
  { icon: Swords, label: 'Physique' },
  { icon: MessageSquare, label: 'Verbale' },
  { icon: HeartCrack, label: 'Sexuelle' },
  { icon: FileX, label: 'Administrative' },
  { icon: Wallet, label: 'Économique' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[92dvh] flex flex-col items-center justify-center px-6 overflow-hidden bg-[#3D6B4F]">

      {/* Cercles décoratifs */}
      <div className="absolute top-[-80px] right-[-80px] w-64 h-64 rounded-full bg-[#5B8C6A] opacity-40" />
      <div className="absolute bottom-[-60px] left-[-60px] w-48 h-48 rounded-full bg-[#2A5038] opacity-50" />
      <div className="absolute top-1/2 left-[-40px] w-32 h-32 rounded-full bg-[#5B8C6A] opacity-20" />

      {/* Contenu */}
      <div
        className={`relative z-10 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        {/* Badge */}
        <span className="inline-block bg-[#A8D5B5] text-[#2A5038] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
          Projet de fin d'études
        </span>

        {/* Titre */}
        <h1 className="text-4xl font-black text-white leading-tight mb-2">
          Les violences<br />
          <span className="text-[#A8D5B5]">relationnelles</span>
        </h1>

        <p className="text-[#A8D5B5] text-sm mb-6 max-w-xs mx-auto leading-relaxed">
          Reconnais, comprends, agis. Un guide interactif pour mieux identifier les violences dans les relations.
        </p>

        {/* Types de violences — grille icônes */}
        <div
          className={`grid grid-cols-3 gap-2 mb-6 max-w-xs mx-auto transition-all duration-700 delay-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {types.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              style={{ transitionDelay: `${300 + i * 80}ms` }}
              className={`flex flex-col items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl py-3 px-2 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            >
              <Icon size={22} className="text-[#A8D5B5]" aria-hidden />
              <span className="text-white text-xs font-medium leading-tight text-center">{label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="#ressources"
            className="inline-flex items-center gap-2 bg-[#A8D5B5] text-[#2A5038] px-8 py-4 rounded-full font-bold text-base shadow-xl hover:bg-white transition-colors"
          >
            <LifeBuoy size={20} aria-hidden />
            Besoin d'aide ?
          </a>

          <a
            href="#types"
            className="inline-flex flex-col items-center gap-2 group"
          >
            <span className="bg-white/20 text-white border border-white/40 px-8 py-3 rounded-full font-semibold text-base hover:bg-white/30 transition-colors">
              Explorer le site
            </span>
            <ChevronDown
              size={20}
              className="text-white/60 animate-bounce mt-1"
              aria-hidden
            />
          </a>
        </div>
      </div>

      {/* Vague du bas */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-px">
        <svg viewBox="0 0 375 40" preserveAspectRatio="none" className="w-full h-10 fill-white block">
          <path d="M0,40 C100,0 275,40 375,10 L375,40 Z" />
        </svg>
      </div>
    </section>
  );
}
