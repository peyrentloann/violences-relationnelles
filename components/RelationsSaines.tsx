import { Heart, MessageCircle, ShieldCheck, Unlock, Scale, HandHeart, Shield, Handshake, Sparkles, CheckCircle } from 'lucide-react';
import FadeIn from './FadeIn';

const items = [
  { icon: Heart, label: 'Respect mutuel', desc: 'Vos différences sont accueillies, pas critiquées.' },
  { icon: MessageCircle, label: 'Communication ouverte', desc: 'Vous pouvez tout dire sans avoir peur de la réaction.' },
  { icon: ShieldCheck, label: 'Confiance & loyauté', desc: 'Vous vous faites confiance, sans avoir besoin de contrôler.' },
  { icon: Unlock, label: 'Indépendance', desc: 'Chacun garde sa vie, ses amis, ses passions.' },
  { icon: Scale, label: 'Égalité', desc: 'Les décisions se prennent ensemble, à parts égales.' },
  { icon: HandHeart, label: 'Soutien', desc: 'Vous vous encouragez à grandir et à être heureux·se.' },
  { icon: Shield, label: 'Sécurité', desc: 'Tu te sens en sécurité émotionnellement et physiquement.' },
  { icon: Handshake, label: 'Gestion des conflits', desc: 'Les désaccords se règlent avec respect, pas avec violence.' },
  { icon: Sparkles, label: 'Affection & intimité', desc: 'Le consentement est toujours présent et respecté.' },
  { icon: CheckCircle, label: 'Consentement', desc: 'Chaque geste est voulu et librement choisi.' },
];

export default function RelationsSaines() {
  return (
    <section id="saines" className="py-14 px-4 bg-white">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <p className="text-center text-xs font-bold tracking-[0.2em] uppercase text-[#5B8C6A] mb-3">
            À quoi ça ressemble
          </p>
          <h2 className="text-4xl font-black text-[#3D6B4F] text-center leading-tight mb-2">
            Une relation<br />
            <span className="text-[#5B8C6A]">saine</span>
          </h2>
          <p className="text-center text-sm text-[#5B8C6A] mb-10">
            Ces piliers sont présents dans une relation équilibrée ✓
          </p>
        </FadeIn>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={i} delay={i * 60} direction="left">
                <div className="flex items-start gap-4 bg-[#E8F5E9] rounded-2xl px-5 py-4 border border-[#A8D5B5]">
                  <div className="w-10 h-10 rounded-xl bg-[#3D6B4F] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-white" aria-hidden />
                  </div>
                  <div>
                    <p className="font-bold text-[#3D6B4F] text-base">{item.label}</p>
                    <p className="text-[#5B8C6A] text-sm mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
