'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { label: 'Types de violences', href: '#types' },
  { label: 'Cycle', href: '#cycle' },
  { label: 'Relations malsaines', href: '#malsaines' },
  { label: 'Violentomètre', href: '#violentometre' },
  { label: 'Consentement', href: '#consentement' },
  { label: 'Auto-évaluation', href: '#evaluation' },
  { label: 'Relations saines', href: '#saines' },
  { label: 'Ressources', href: '#ressources' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = navItems.map(item => item.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#A8D5B5] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <span className="font-bold text-[#3D6B4F] text-sm">Violences Relationnelles</span>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={`px-2 py-1 text-xs rounded transition-colors font-medium ${
                item.href === '#ressources'
                  ? 'bg-[#3D6B4F] text-white hover:bg-[#5B8C6A]'
                  : active === item.href.replace('#', '')
                  ? 'bg-[#E8F5E9] text-[#3D6B4F]'
                  : 'text-[#2D2D2D] hover:text-[#3D6B4F] hover:bg-[#E8F5E9]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile — bouton hamburger */}
        <button
          className="lg:hidden p-3 -mr-2 text-[#3D6B4F]"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#A8D5B5] px-4 py-3 flex flex-col gap-1">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                item.href === '#ressources'
                  ? 'bg-[#3D6B4F] text-white'
                  : 'text-[#2D2D2D] hover:bg-[#E8F5E9] hover:text-[#3D6B4F]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:18003639010"
            className="flex items-center justify-center gap-2 px-4 py-3 bg-[#E8F5E9] text-[#3D6B4F] rounded-xl text-base font-bold mt-2 border border-[#A8D5B5]"
          >
            <Phone size={16} /> 1 800-363-9010
          </a>
        </div>
      )}
    </header>
  );
}
