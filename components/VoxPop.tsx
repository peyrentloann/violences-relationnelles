import FadeIn from './FadeIn';

export default function VoxPop() {
  return (
    <section className="py-14 px-4 bg-white overflow-hidden">
      <div className="max-w-xl mx-auto">

        <FadeIn className="text-center mb-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#5B8C6A] mb-3">
            Témoignages
          </p>
          <h2 className="text-5xl font-black text-[#3D6B4F] leading-none tracking-tight">
            VOX<br />
            <span className="text-[#A8D5B5] [-webkit-text-stroke:2px_#5B8C6A]">POP</span>
          </h2>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="mx-auto w-full max-w-[360px]">
            <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-[#A8D5B5]/40 bg-black">
              <video
                className="w-full h-auto block"
                controls
                playsInline
                preload="metadata"
                poster="/voxpop-poster.jpg"
              >
                <source src="/videos/voxpop.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="text-center text-sm text-[#5B8C6A] mt-4">
              Témoignages des jeunes du <span className="font-semibold text-[#3D6B4F]">Cégep de Granby</span>
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
