import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white py-8 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <p className="text-sm text-gray-400">Projet de fin d'études</p>
          <p className="text-xs text-gray-500 mt-1">Les Violences Relationnelles</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-300">SOS Violence Conjugale :</span>
          <a
            href="tel:18003639010"
            className="flex items-center gap-2 bg-[#D32F2F] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-red-700 transition-colors"
          >
            <Phone size={13} aria-hidden />
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
