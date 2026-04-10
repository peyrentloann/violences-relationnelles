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
    <section id="saines" className="py-14 px-4 bg-[#3D6B4F]">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-black text-white text-center mb-1">
            Relations Saines
          </h2>
          <p className="text-center text-[#A8D5B5] text-sm mb-10">
            Une relation saine, ça ressemble à ça ✓
          </p>
        </FadeIn>

        <div className="flex flex-col gap-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={i} delay={i * 60} direction="left">
                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/20">
                  <div className="w-10 h-10 rounded-xl bg-[#A8D5B5]/20 border border-[#A8D5B5]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={18} className="text-[#A8D5B5]" aria-hidden />
                  </div>
                  <div>
                    <p className="font-bold text-white text-base">{item.label}</p>
                    <p className="text-[#A8D5B5] text-sm mt-0.5 leading-snug">{item.desc}</p>
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
