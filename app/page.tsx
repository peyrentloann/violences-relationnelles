import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TypesViolences from '@/components/TypesViolences';
import CycleViolence from '@/components/CycleViolence';
import RelationsMalsaines from '@/components/RelationsMalsaines';
import Violentometre from '@/components/Violentometre';
import Consentement from '@/components/Consentement';
import AutoEvaluation from '@/components/AutoEvaluation';
import RelationsSaines from '@/components/RelationsSaines';
import VoxPop from '@/components/VoxPop';
import ControleCoercitif from '@/components/ControleCoercitif';
import Ressources from '@/components/Ressources';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TypesViolences />
        <CycleViolence />
        <RelationsMalsaines />
        <Violentometre />
        <Consentement />
        <AutoEvaluation />
        <RelationsSaines />
        <VoxPop />
        <ControleCoercitif />
        <Ressources />
      </main>
      <Footer />
    </>
  );
}
