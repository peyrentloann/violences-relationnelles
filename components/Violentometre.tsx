'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';

type Zone = 'vert' | 'orange' | 'rouge';

const items: { zone: Zone; num: number; text: string }[] = [
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
  { zone: 'orange', num: 13, text: "Insiste pour que tu lui envoies des photos intimes" },
  { zone: 'orange', num: 12, text: 'Fouille tes textos, mails, applis' },
  { zone: 'orange', num: 11, text: 'Contrôle tes sorties, habits, maquillage' },
  { zone: 'orange', num: 10, text: 'Te manipule' },
  { zone: 'orange', num: 9, text: 'Est jaloux et possessif en permanence' },
  { zone: 'orange', num: 8, text: 'Se moque de toi en public' },
  { zone: 'orange', num: 7, text: 'Rabaisse tes opinions et tes projets' },
  { zone: 'orange', num: 6, text: 'Te fait du chantage si tu refuses de faire quelque chose' },
  { zone: 'vert', num: 5, text: "S'assure de ton accord pour ce que vous faites ensemble" },
  { zone: 'vert', num: 4, text: 'Est content quand tu te sens épanouie' },
  { zone: 'vert', num: 3, text: 'A confiance en toi' },
  { zone: 'vert', num: 2, text: 'Accepte tes amies, amis et ta famille' },
  { zone: 'vert', num: 1, text: 'Respecte tes décisions, tes désirs et tes goûts' },
];

const zones = [
  {
    key: 'vert' as Zone,
    emoji: '🟢',
    label: 'Relation saine',
    title: 'Profite, ta relation est saine',
    subtitle: 'quand ton partenaire…',
    color: '#4CAF50',
    bg: 'bg-green-50',
    border: 'border-green-200',
    activeBg: 'bg-green-100',
    activeBorder: 'border-[#4CAF50]',
    badge: 'bg-[#4CAF50]',
    tab: 'bg-[#4CAF50]',
  },
  {
    key: 'orange' as Zone,
    emoji: '🟠',
    label: 'Vigilance',
    title: 'Dis stop !',
    subtitle: 'Il y a de la violence quand il…',
    color: '#F57C00',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    activeBg: 'bg-orange-100',
    activeBorder: 'border-[#F57C00]',
    badge: 'bg-[#F57C00]',
    tab: 'bg-[#F57C00]',
  },
  {
    key: 'rouge' as Zone,
    emoji: '🔴',
    label: 'Danger',
    title: 'Protège-toi, demande de l\'aide',
    subtitle: 'Tu es en danger quand il…',
    color: '#D32F2F',
    bg: 'bg-red-50',
    border: 'border-red-200',
    activeBg: 'bg-red-100',
    activeBorder: 'border-[#D32F2F]',
    badge: 'bg-[#D32F2F]',
    tab: 'bg-[#D32F2F]',
  },
];

export default function Violentometre() {
  const [activeZone, setActiveZone] = useState<Zone>('vert');
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const zone = zones.find(z => z.key === activeZone)!;
  const zoneItems = items.filter(i => i.zone === activeZone).sort((a, b) => a.num - b.num);

  const handleZoneChange = (key: Zone) => {
    setActiveZone(key);
    setActiveItem(null);
  };

  return (
    <section id="violentometre" className="py-14 px-4 bg-[#E8F5E9]">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold text-[#3D6B4F] text-center mb-2">
            Le violentomètre
          </h2>
          <p className="text-center text-sm text-[#2D2D2D] mb-6">
            Sélectionne une zone pour explorer les comportements
          </p>
        </FadeIn>

        {/* Barre de progression */}
        <FadeIn delay={80}>
          <div className="relative h-3 rounded-full bg-white overflow-hidden mb-5 shadow-inner">
            {/* Fond tricolore fixe */}
            <div className="absolute inset-0 flex">
              <div className="flex-1 bg-[#4CAF50]" />
              <div className="flex-1 bg-[#F57C00]" />
              <div className="flex-1 bg-[#D32F2F]" />
            </div>
            {/* Curseur qui se déplace */}
            <div
              className="absolute top-0 h-full w-1/3 transition-all duration-400 rounded-full"
              style={{
                left: activeZone === 'vert' ? '0%' : activeZone === 'orange' ? '33.33%' : '66.66%',
                boxShadow: `0 0 0 2px white, 0 0 0 4px ${zone.color}`,
                backgroundColor: zone.color,
                opacity: 0.9,
              }}
            />
          </div>
        </FadeIn>

        {/* Tabs zones */}
        <FadeIn delay={100}>
        <div className="grid grid-cols-3 gap-2 mb-5">
          {zones.map(z => (
            <button
              key={z.key}
              onClick={() => handleZoneChange(z.key)}
              style={
                activeZone === z.key
                  ? { backgroundColor: z.color, borderColor: z.color }
                  : { borderColor: z.color }
              }
              className={`py-3 px-2 rounded-2xl text-center transition-all font-semibold text-sm border-2 ${
                activeZone === z.key
                  ? 'text-white shadow-md scale-[1.03]'
                  : 'bg-white text-[#2D2D2D]'
              }`}
            >
              {z.label}
            </button>
          ))}
        </div>
        </FadeIn>

        {/* En-tête zone active */}
        <div className={`${zone.tab} text-white rounded-2xl px-5 py-4 mb-4`}>
          <p className="font-bold text-base">{zone.title}</p>
          <p className="text-sm opacity-90 mt-0.5">{zone.subtitle}</p>
        </div>

        {/* Items */}
        <div className="space-y-2">
          {zoneItems.map(item => {
            const isActive = activeItem === item.num;
            return (
              <button
                key={item.num}
                onClick={() => setActiveItem(isActive ? null : item.num)}
                className={`w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-2xl border transition-all ${
                  isActive
                    ? `${zone.activeBg} ${zone.activeBorder} shadow-sm`
                    : `${zone.bg} ${zone.border}`
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-full ${zone.badge} text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}
                >
                  {item.num}
                </span>
                <span className={`text-base leading-snug ${isActive ? 'font-medium text-[#1a1a1a]' : 'text-[#2D2D2D]'}`}>
                  {item.text}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
