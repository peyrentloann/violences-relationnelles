export default function Hero() {
  const keywords = ['Psychologique', 'Physique', 'Verbale', 'Sexuelle', 'Administrative', 'Économique'];

  return (
    <section className="bg-gradient-to-b from-[#A8D5B5] to-[#E8F5E9] py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-[#3D6B4F] mb-6 animate-fade-in">
        Les Violences Relationnelles
      </h1>

      {/* Silhouettes SVG + keywords */}
      <div className="relative inline-flex items-center justify-center my-8">
        <svg
          viewBox="0 0 320 160"
          className="w-64 md:w-80"
          aria-label="Groupe de personnes diversifiées"
        >
          {/* 5 silhouettes de personnes */}
          {[40, 80, 120, 160, 200, 240, 280].map((x, i) => (
            <g key={i} transform={`translate(${x}, 10)`}>
              <circle cx="20" cy="18" r="10" fill="#5B8C6A" opacity={0.7 + i * 0.04} />
              <rect x="12" y="30" width="16" height={28 + (i % 3) * 4} rx="4" fill="#5B8C6A" opacity={0.7 + i * 0.04} />
              <line x1="12" y1="38" x2="2" y2="52" stroke="#5B8C6A" strokeWidth="4" strokeLinecap="round" opacity={0.7 + i * 0.04} />
              <line x1="28" y1="38" x2="38" y2="52" stroke="#5B8C6A" strokeWidth="4" strokeLinecap="round" opacity={0.7 + i * 0.04} />
            </g>
          ))}
        </svg>
      </div>

      {/* Keywords en badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-xl mx-auto">
        {keywords.map(kw => (
          <span
            key={kw}
            className="bg-white text-[#3D6B4F] border border-[#5B8C6A] px-4 py-1.5 rounded-full text-sm font-medium shadow-sm"
          >
            {kw}
          </span>
        ))}
      </div>

      <a
        href="#types"
        className="inline-block bg-[#3D6B4F] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#5B8C6A] transition-colors shadow-md"
      >
        Explorer
      </a>
    </section>
  );
}
