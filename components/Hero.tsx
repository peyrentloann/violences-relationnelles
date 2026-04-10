export default function Hero() {
  const keywords = ['Psychologique', 'Physique', 'Verbale', 'Sexuelle', 'Administrative', 'Économique'];

  return (
    <section className="bg-gradient-to-b from-[#A8D5B5] to-[#E8F5E9] py-16 px-6 text-center">
      <h1 className="text-3xl font-bold text-[#3D6B4F] mb-6 leading-tight">
        Les Violences<br />Relationnelles
      </h1>

      {/* Silhouettes SVG */}
      <div className="flex justify-center my-6">
        <svg
          viewBox="0 0 280 120"
          className="w-56"
          aria-label="Groupe de personnes diversifiées"
        >
          {[20, 60, 100, 140, 180, 220].map((x, i) => (
            <g key={i} transform={`translate(${x}, 8)`}>
              <circle cx="20" cy="16" r="9" fill="#5B8C6A" opacity={0.65 + i * 0.05} />
              <rect x="13" y="27" width="14" height={26 + (i % 3) * 4} rx="4" fill="#5B8C6A" opacity={0.65 + i * 0.05} />
              <line x1="13" y1="34" x2="4" y2="48" stroke="#5B8C6A" strokeWidth="3.5" strokeLinecap="round" opacity={0.65 + i * 0.05} />
              <line x1="27" y1="34" x2="36" y2="48" stroke="#5B8C6A" strokeWidth="3.5" strokeLinecap="round" opacity={0.65 + i * 0.05} />
            </g>
          ))}
        </svg>
      </div>

      {/* Keywords */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-sm mx-auto">
        {keywords.map(kw => (
          <span
            key={kw}
            className="bg-white text-[#3D6B4F] border border-[#5B8C6A] px-4 py-2 rounded-full text-sm font-medium shadow-sm"
          >
            {kw}
          </span>
        ))}
      </div>

      <a
        href="#types"
        className="inline-block w-full max-w-xs bg-[#3D6B4F] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#5B8C6A] transition-colors shadow-md"
      >
        Explorer
      </a>
    </section>
  );
}
