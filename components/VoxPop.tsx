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
          <div className="mx-auto w-full max-w-[320px]">
            <div className="rounded-3xl border-2 border-dashed border-[#A8D5B5] bg-[#E8F5E9] px-8 py-12 text-center">
              <div className="text-4xl mb-4">🎙️</div>
              <p className="text-[#3D6B4F] font-bold text-lg mb-2">Vox pop à venir</p>
              <p className="text-sm text-[#5B8C6A]">Revenez nous voir le <span className="font-semibold text-[#3D6B4F]">20 avril</span> pour découvrir les témoignages de jeunes de notre école.</p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
