'use client';

import { useState } from 'react';

type Zone = 'rouge' | 'orange' | 'vert';

const items: { zone: Zone; num: number; text: string }[] = [
  // Zone rouge (bas → haut = danger croissant, mais on affiche haut → bas visuellement)
  { zone: 'rouge', num: 23, text: 'Te menace avec une arme' },
  { zone: 'rouge', num: 22, text: "T'oblige à avoir des relations sexuelles" },
  { zone: 'rouge', num: 21, text: 'Te touche les parties intimes sans ton consentement' },
  { zone: 'rouge', num: 20, text: 'Te pousse, te tire, te gifle, te secoue, te frappe' },
  { zone: 'rouge', num: 19, text: 'Menace de diffuser des photos intimes de toi' },
  { zone: 'rouge', num: 18, text: 'Menace de se suicider à cause de toi' },
  { zone: 'rouge', num: 17, text: '« Pète les plombs » lorsque quelque chose lui déplaît' },
  { zone: 'rouge', num: 16, text: "T'humilie et te traite de folle quand tu lui fais des reproches" },
  { zone: 'rouge', num: 15, text: "T'oblige à regarder des films pornos" },
  { zone: 'rouge', num: 14, text: "T'isole de ta famille et de tes proches" },
  // Zone orange
  { zone: 'orange', num: 13, text: "Insiste pour que tu lui envoies des photos intimes" },
  { zone: 'orange', num: 12, text: 'Fouille tes textos, mails, applis' },
  { zone: 'orange', num: 11, text: 'Contrôle tes sorties, habits, maquillage' },
  { zone: 'orange', num: 10, text: 'Te manipule' },
  { zone: 'orange', num: 9, text: 'Est jaloux et possessif en permanence' },
  { zone: 'orange', num: 8, text: 'Se moque de toi en public' },
  { zone: 'orange', num: 7, text: 'Rabaisse tes opinions et tes projets' },
  { zone: 'orange', num: 6, text: 'Te fait du chantage si tu refuses de faire quelque chose' },
  // Zone verte
  { zone: 'vert', num: 5, text: "S'assure de ton accord pour ce que vous faites ensemble" },
  { zone: 'vert', num: 4, text: 'Est content quand tu te sens épanouie' },
  { zone: 'vert', num: 3, text: 'A confiance en toi' },
  { zone: 'vert', num: 2, text: 'Accepte tes amies, amis et ta famille' },
  { zone: 'vert', num: 1, text: 'Respecte tes décisions, tes désirs et tes goûts' },
];

const zoneConfig = {
  rouge: {
    bg: 'bg-red-50',
    activeBg: 'bg-red-100',
    border: 'border-red-200',
    activeBorder: 'border-[#D32F2F]',
    badge: 'bg-[#D32F2F]',
    label: 'Tu es en danger',
    dot: 'bg-[#D32F2F]',
  },
  orange: {
    bg: 'bg-orange-50',
    activeBg: 'bg-orange-100',
    border: 'border-orange-200',
    activeBorder: 'border-[#F57C00]',
    badge: 'bg-[#F57C00]',
    label: 'Vigilance',
    dot: 'bg-[#F57C00]',
  },
  vert: {
    bg: 'bg-green-50',
    activeBg: 'bg-green-100',
    border: 'border-green-200',
    activeBorder: 'border-[#4CAF50]',
    badge: 'bg-[#4CAF50]',
    label: 'Relation saine',
    dot: 'bg-[#4CAF50]',
  },
};

const zones = [
  { key: 'rouge', title: '🔴 Protège-toi, demande de l\'aide', subtitle: 'Tu es en danger quand il…' },
  { key: 'orange', title: '🟠 Vigilance, dis stop !', subtitle: 'Il y a de la violence quand il…' },
  { key: 'vert', title: '🟢 Profite, ta relation est saine', subtitle: 'quand il…' },
] as const;

export default function Violentometre() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <section id="violentometre" className="py-14 px-4 bg-[#E8F5E9]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-[#3D6B4F] text-center mb-2">
          Le Violentomètre
        </h2>
        <p className="text-center text-sm text-[#2D2D2D] mb-6">
          Appuie sur un item pour le mettre en surbrillance
        </p>

        <div className="flex gap-3">
          {/* Thermomètre vertical */}
          <div className="flex-shrink-0 flex flex-col items-center w-5">
            <div className="w-5 h-3 bg-[#D32F2F] rounded-t-full" />
            <div className="w-3 flex-1 flex flex-col">
              <div className="bg-[#D32F2F]" style={{ flex: 10 }} />
              <div className="bg-[#F57C00]" style={{ flex: 8 }} />
              <div className="bg-[#4CAF50]" style={{ flex: 5 }} />
            </div>
            <div className="w-6 h-6 rounded-full bg-[#4CAF50] border-2 border-white shadow" />
          </div>

          {/* Items */}
          <div className="flex-1">
            {zones.map(zone => (
              <div key={zone.key} className="mb-4">
                <div className={`text-white rounded-xl px-4 py-3 mb-2 ${zoneConfig[zone.key].badge}`}>
                  <p className="font-bold text-sm">{zone.title}</p>
                  <p className="text-xs opacity-90 mt-0.5">{zone.subtitle}</p>
                </div>
                {items
                  .filter(item => item.zone === zone.key)
                  .map(item => {
                    const cfg = zoneConfig[item.zone];
                    const isActive = activeItem === item.num;
                    return (
                      <button
                        key={item.num}
                        onClick={() => setActiveItem(isActive ? null : item.num)}
                        className={`w-full text-left flex items-start gap-3 px-3 py-3 rounded-xl border mb-1.5 transition-all text-sm ${
                          isActive
                            ? `${cfg.activeBg} ${cfg.activeBorder} shadow-sm`
                            : `${cfg.bg} ${cfg.border}`
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-full ${cfg.badge} text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5`}>
                          {item.num}
                        </span>
                        <span className="text-[#2D2D2D] text-base leading-snug">{item.text}</span>
                      </button>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
