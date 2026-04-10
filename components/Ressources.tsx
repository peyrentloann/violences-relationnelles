import { Phone, Globe } from 'lucide-react';

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
    detail: 'Maison d\'hébergement pour femme avec/ou sans enfants',
    tel: '450-378-9297',
    site: 'https://maisonad.org',
    siteLabel: 'maisonad.org',
  },
  {
    nom: 'SOS Violence Conjugale',
    detail: 'Ligne d\'aide provinciale 24h/7',
    tel: '1 800-363-9010',
    site: 'https://sosviolenceconjugale.ca/fr',
    siteLabel: 'sosviolenceconjugale.ca',
  },
];

export default function Ressources() {
  return (
    <section id="ressources" className="py-16 px-4 bg-[#3D6B4F]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-3">
          Ressources
        </h2>
        <p className="text-[#A8D5B5] text-center mb-10">
          Tu n'es pas seul·e. De l'aide est disponible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ressources.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 flex flex-col gap-4"
            >
              <div>
                <h3 className="font-bold text-[#3D6B4F] text-sm mb-1">{r.nom}</h3>
                <p className="text-xs text-[#2D2D2D]">{r.detail}</p>
              </div>
              <div className="space-y-2 mt-auto">
                <a
                  href={`tel:${r.tel.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 bg-[#D32F2F] text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  <Phone size={14} aria-hidden />
                  {r.tel}
                </a>
                <a
                  href={r.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-[#5B8C6A] text-[#3D6B4F] px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-[#E8F5E9] transition-colors"
                >
                  <Globe size={14} aria-hidden />
                  {r.siteLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
