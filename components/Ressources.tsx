import { Phone, Globe } from 'lucide-react';
import FadeIn from './FadeIn';

const ressources = [
  {
    nom: 'CALACS des Rivières Haute Yasmaska Brome-Missisquoi',
    detail: 'Service en personne et/ou téléphonique',
    tel: '450-375-3338',
    site: 'https://calacsdesrivieres.ca',
    siteLabel: 'calacsdesrivieres.ca',
  },
  {
    nom: 'Maison Alice Desmarais',
    detail: "Maison d'hébergement pour femme avec/ou sans enfants",
    tel: '450-378-9297',
    site: 'https://maisonad.org',
    siteLabel: 'maisonad.org',
  },
  {
    nom: 'SOS Violence Conjugale',
    detail: "Ligne d'aide provinciale 24h/7",
    tel: '1 800-363-9010',
    site: 'https://sosviolenceconjugale.ca/fr',
    siteLabel: 'sosviolenceconjugale.ca',
  },
];

export default function Ressources() {
  return (
    <section id="ressources" className="py-14 px-4 bg-[#3D6B4F]">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-2">
          Ressources
        </h2>
        <p className="text-[#A8D5B5] text-center mb-8">
          Tu n'es pas seul·e. De l'aide est disponible.
        </p>

        <div className="flex flex-col gap-4">
          {ressources.map((r, i) => (
            <FadeIn key={i} delay={i * 100}>
            <div className="bg-white rounded-2xl p-5 flex flex-col gap-3">
              <div>
                <h3 className="font-bold text-[#3D6B4F] text-base mb-1">{r.nom}</h3>
                <p className="text-sm text-[#2D2D2D]">{r.detail}</p>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={`tel:${r.tel.replace(/\s/g, '')}`}
                  className="flex items-center justify-center gap-2 bg-[#3D6B4F] text-white px-4 py-3.5 rounded-2xl text-base font-semibold hover:bg-[#5B8C6A] transition-colors"
                >
                  <Phone size={16} aria-hidden />
                  {r.tel}
                </a>
                <a
                  href={r.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-[#5B8C6A] text-[#3D6B4F] px-4 py-3.5 rounded-2xl text-base font-semibold hover:bg-[#E8F5E9] transition-colors"
                >
                  <Globe size={16} aria-hidden />
                  {r.siteLabel}
                </a>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
