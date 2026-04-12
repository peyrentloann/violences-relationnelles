import { ExternalLink } from 'lucide-react';

export default function ControleCoercitif() {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="border-2 border-[#3D6B4F] rounded-2xl p-6 bg-[#E8F5E9]">
          <h2 className="text-xl font-bold text-[#3D6B4F] mb-3">
            Le contrôle coercitif
          </h2>
          <p className="text-[#2D2D2D] text-base mb-5">
            Bien souvent, un des partenaires tente par plusieurs moyens et stratégies d'exercer une domination sur l'autre. Pour en savoir plus sur le contrôle coercitif et identifier les formes de pouvoir, tu peux visiter le site :
          </p>
          <a
            href="https://controlecoercitif.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#3D6B4F] text-white px-6 py-3.5 rounded-2xl font-semibold text-base hover:bg-[#5B8C6A] transition-colors"
          >
            controlecoercitif.ca
            <ExternalLink size={16} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
