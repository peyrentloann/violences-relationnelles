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
          <p className="text-sm text-[#5B8C6A] mt-3">
            Des jeunes témoignent
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="mx-auto w-full max-w-[280px]">
            <div
              className="relative w-full rounded-2xl overflow-hidden border-4 border-[#5B8C6A] shadow-[0_12px_40px_rgba(61,107,79,0.3)]"
              style={{ paddingBottom: 'calc(16 / 9 * 100%)' }}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/generated-video-1.mp4"
                controls
                playsInline
              />
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
