import FadeIn from './FadeIn';

const sources = [
  {
    titre: 'CALACS des Rivières Haute Yasmaska Brome-Missisquoi',
    url: 'https://calacsdesrivieres.ca',
  },
  {
    titre: 'Contrôle coercitif',
    url: 'https://controlecoercitif.ca',
  },
  {
    titre: 'Formes et manifestations de la violence — fiche 2',
    auteur: 'Ordre des psychologues du Québec',
    url: null,
  },
  {
    titre: "Les formes subtiles de violence entre partenaires intimes : pistes pour le repérage et l'intervention",
    auteur: 'Ordre des psychologues du Québec',
    url: null,
  },
  {
    titre: 'Maison Alice Desmarais',
    url: 'https://maisonad.org',
  },
  {
    titre: 'SOS Violence Conjugale',
    url: 'https://sosviolenceconjugale.ca/fr',
  },
];

export default function Sources() {
  return (
    <section className="py-14 px-4 bg-[#f5f9f6]">
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-[#5B8C6A] text-center mb-6">
            Sources
          </h2>
        </FadeIn>
        <FadeIn delay={80}>
          <ol className="flex flex-col gap-3">
            {sources.map((s, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-xs font-bold text-[#A8D5B5] mt-0.5 w-5 flex-shrink-0">{i + 1}.</span>
                <div className="text-sm text-[#2D2D2D] leading-snug">
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3D6B4F] underline underline-offset-2 font-medium hover:text-[#5B8C6A] transition-colors"
                    >
                      {s.titre}
                    </a>
                  ) : (
                    <span className="font-medium text-[#3D6B4F]">{s.titre}</span>
                  )}
                  {s.auteur && (
                    <span className="text-[#5B8C6A]"> — {s.auteur}</span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </FadeIn>
      </div>
    </section>
  );
}
