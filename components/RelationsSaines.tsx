import FadeIn from './FadeIn';

const bulles = [
  { label: 'Respect mutuel', size: 'text-base', px: 'px-5', py: 'py-3', bg: 'bg-[#3D6B4F]', text: 'text-white' },
  { label: 'Communication ouverte', size: 'text-sm', px: 'px-4', py: 'py-2.5', bg: 'bg-[#A8D5B5]', text: 'text-[#2D5C38]' },
  { label: 'Confiance', size: 'text-lg', px: 'px-6', py: 'py-3.5', bg: 'bg-[#5B8C6A]', text: 'text-white' },
  { label: 'Indépendance et autonomie', size: 'text-sm', px: 'px-4', py: 'py-2.5', bg: 'bg-white', text: 'text-[#3D6B4F]', border: 'border-2 border-[#A8D5B5]' },
  { label: 'Égalité', size: 'text-base', px: 'px-5', py: 'py-3', bg: 'bg-[#A8D5B5]', text: 'text-[#2D5C38]' },
  { label: 'Soutien', size: 'text-xl', px: 'px-7', py: 'py-4', bg: 'bg-[#3D6B4F]', text: 'text-white' },
  { label: 'Loyauté', size: 'text-sm', px: 'px-4', py: 'py-2.5', bg: 'bg-white', text: 'text-[#3D6B4F]', border: 'border-2 border-[#5B8C6A]' },
  { label: 'Sécurité émotionnelle', size: 'text-sm', px: 'px-4', py: 'py-2.5', bg: 'bg-[#5B8C6A]', text: 'text-white' },
  { label: 'Encouragement', size: 'text-base', px: 'px-5', py: 'py-3', bg: 'bg-[#A8D5B5]', text: 'text-[#2D5C38]' },
  { label: 'Consentement', size: 'text-lg', px: 'px-6', py: 'py-3.5', bg: 'bg-white', text: 'text-[#3D6B4F]', border: 'border-2 border-[#3D6B4F]' },
  { label: 'Gestion des conflits', size: 'text-sm', px: 'px-4', py: 'py-2.5', bg: 'bg-[#3D6B4F]', text: 'text-white' },
  { label: 'Affection', size: 'text-base', px: 'px-5', py: 'py-3', bg: 'bg-[#A8D5B5]', text: 'text-[#2D5C38]' },
];

export default function RelationsSaines() {
  return (
    <section id="saines" className="py-14 px-4 bg-[#E8F5E9]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-[#3D6B4F] text-center mb-2">
          Relations Saines
        </h2>
        <p className="text-center text-sm text-[#5B8C6A] mb-10">
          Une relation saine, ça ressemble à ça
        </p>

        {/* Nuage de bulles */}
        <div className="flex flex-wrap justify-center gap-3">
          {bulles.map((b, i) => (
            <FadeIn key={i} delay={i * 50} direction="none">
              <span
                className={`rounded-full font-semibold ${b.size} ${b.px} ${b.py} ${b.bg} ${b.text} ${'border' in b ? b.border : ''} shadow-sm`}
              >
                {b.label}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
