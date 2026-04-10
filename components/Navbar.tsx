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
                  ? 'bg-[#D32F2F] text-white hover:bg-red-700'
                  : active === item.href.replace('#', '')
                  ? 'bg-[#E8F5E9] text-[#3D6B4F]'
                  : 'text-[#2D2D2D] hover:text-[#3D6B4F] hover:bg-[#E8F5E9]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile */}
        <button
          className="lg:hidden p-2 text-[#3D6B4F]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-[#A8D5B5] px-4 py-3 flex flex-col gap-2">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                item.href === '#ressources'
                  ? 'bg-[#D32F2F] text-white'
                  : 'text-[#2D2D2D] hover:bg-[#E8F5E9] hover:text-[#3D6B4F]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:18003639010"
            className="flex items-center gap-2 px-3 py-2 bg-[#E8F5E9] text-[#3D6B4F] rounded text-sm font-bold mt-1"
          >
            <Phone size={14} /> 1 800-363-9010
          </a>
        </div>
      )}
    </header>
  );
}
