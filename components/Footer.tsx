import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white py-8 px-4">
      <div className="max-w-xl mx-auto flex flex-col items-center gap-4 text-center">
        <div>
          <p className="text-sm text-gray-400">Projet de fin d'études</p>
          <p className="text-xs text-gray-500 mt-1">Les Violences Relationnelles</p>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <span className="text-sm text-gray-300">SOS Violence Conjugale</span>
          <a
            href="tel:18003639010"
            className="flex items-center justify-center gap-2 w-full max-w-xs bg-[#3D6B4F] text-white px-4 py-3.5 rounded-2xl text-base font-bold hover:bg-[#5B8C6A] transition-colors"
          >
            <Phone size={16} aria-hidden />
            1 800-363-9010
          </a>
        </div>
        <a
          href="#ressources"
          className="text-sm text-[#A8D5B5] underline hover:text-white transition-colors"
        >
          Voir toutes les ressources
        </a>
      </div>
    </footer>
  );
}
