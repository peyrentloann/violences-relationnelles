import { Heart, MessageCircle, ShieldCheck, Unlock, Scale, HandHeart, Shield, Handshake, Sparkles, CheckCircle } from 'lucide-react';

const caracteristiques = [
  { icon: Heart, label: 'Respect mutuel' },
  { icon: MessageCircle, label: 'Communication ouverte et honnête' },
  { icon: ShieldCheck, label: 'Confiance et loyauté' },
  { icon: Unlock, label: 'Indépendance et autonomie' },
  { icon: Scale, label: 'Égalité et réciprocité' },
  { icon: HandHeart, label: 'Soutien et encouragement' },
  { icon: Shield, label: 'Sécurité émotionnelle et physique' },
  { icon: Handshake, label: 'Gestion respectueuse des conflits' },
  { icon: Sparkles, label: 'Affection et intimité' },
  { icon: CheckCircle, label: 'Consentement et respect' },
];

export default function RelationsSaines() {
  return (
    <section id="saines" className="py-14 px-4 bg-[#E8F5E9]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-[#3D6B4F] text-center mb-2">
          Relations Saines
        </h2>
        <p className="text-center text-sm text-[#5B8C6A] mb-6">
          Une relation saine, ça ressemble à ça ✓
        </p>

        <div className="flex flex-col gap-2">
          {caracteristiques.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl px-4 py-3.5 flex items-center gap-4 border border-[#A8D5B5]"
              >
                <div className="w-10 h-10 bg-[#A8D5B5] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#3D6B4F]" aria-hidden />
                </div>
                <span className="font-medium text-[#2D2D2D] text-base">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
