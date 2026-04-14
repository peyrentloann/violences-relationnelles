'use client';

import { X } from 'lucide-react';

export default function QuickExit() {
  const handleExit = () => {
    // Remplace l'entrée courante dans l'historique → le bouton "retour" ne revient pas ici
    window.location.replace('https://www.google.com');
  };

  return (
    <button
      onClick={handleExit}
      className="fixed bottom-5 right-4 z-50 flex items-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-4 py-3 rounded-full font-bold text-sm shadow-2xl transition-colors"
      aria-label="Quitter le site immédiatement"
    >
      <X size={16} strokeWidth={3} aria-hidden />
      Quitter le site
    </button>
  );
}
