'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const keywords = ['Psychologique', 'Physique', 'Verbale', 'Sexuelle', 'Administrative', 'Économique'];

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
        <span className="inline-block bg-[#A8D5B5] text-[#2A5038] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
          Projet de fin d'études
        </span>

        {/* Titre */}
        <h1 className="text-4xl font-black text-white leading-tight mb-3">
          Les Violences<br />
          <span className="text-[#A8D5B5]">Relationnelles</span>
        </h1>

        <p className="text-[#A8D5B5] text-base mb-10 max-w-xs mx-auto leading-relaxed">
          Reconnais, comprends, agis. Un guide interactif pour mieux identifier les violences dans les relations.
        </p>

        {/* Keywords */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 max-w-sm mx-auto transition-all duration-700 delay-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {keywords.map((kw, i) => (
            <span
              key={kw}
              style={{ transitionDelay: `${300 + i * 80}ms` }}
              className={`bg-white/10 backdrop-blur-sm text-white border border-white/20 px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            >
              {kw}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#types"
          className="inline-flex flex-col items-center gap-2 group"
        >
          <span className="bg-white text-[#3D6B4F] px-10 py-4 rounded-full font-bold text-lg shadow-xl group-hover:bg-[#A8D5B5] transition-colors">
            Explorer
          </span>
          <ChevronDown
            size={20}
            className="text-white/60 animate-bounce mt-1"
            aria-hidden
          />
        </a>
      </div>

      {/* Vague du bas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 375 40" preserveAspectRatio="none" className="w-full h-10 fill-white">
          <path d="M0,40 C100,0 275,40 375,10 L375,40 Z" />
        </svg>
      </div>
    </section>
  );
}
