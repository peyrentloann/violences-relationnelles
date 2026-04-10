import { ExternalLink } from 'lucide-react';

export default function ControleCoercitif() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="border-2 border-[#3D6B4F] rounded-2xl p-6 md:p-8 bg-[#E8F5E9]">
          <h2 className="text-2xl font-bold text-[#3D6B4F] mb-4">
            Le Contrôle Coercitif
          </h2>
          <p className="text-[#2D2D2D] mb-6">
            Bien souvent, un des partenaires tente par plusieurs moyens et stratégies d'exercer une domination sur l'autre. Pour en savoir plus sur le contrôle coercitif et identifier les formes de pouvoir, tu peux visiter le site :
          </p>
          <a
            href="https://controlecoercitif.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#3D6B4F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#5B8C6A] transition-colors"
          >
            controlecoercitif.ca
            <ExternalLink size={16} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
