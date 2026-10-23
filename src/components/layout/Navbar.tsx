import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import logo from '../../assets/logo-tucsoft.png';

interface NavbarProps {
  onOpenEstimate?: () => void;
}

const menuLinks = [
  { label: 'Servicios', href: '#services' },
  { label: 'Nosotros', href: '#mission' },
  { label: 'ColdTrack', href: '#coldtrack' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Clientes', href: '#clients' },
];

const EstimateLink: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="relative pb-2 whitespace-nowrap text-base lg:text-xl font-poppins font-normal text-white hover:text-brand transition-colors"
  >
    <span className="hidden sm:inline">Solicitar </span>Presupuesto
    <span className="absolute bottom-0 right-0 h-[2px] w-full sm:w-[62%] bg-current" />
  </button>
);

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimate }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 px-4 sm:px-10 lg:px-20 transition-colors duration-300 ${
          scrolled ? 'bg-ink/95 backdrop-blur py-4' : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-[1200px] mx-auto grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            className="group flex flex-col gap-[9px] w-10 sm:w-[50px] py-2"
          >
            <span className="block h-[3px] w-full bg-white group-hover:bg-brand transition-colors" />
            <span className="block h-[3px] w-3/5 bg-white group-hover:bg-brand transition-all group-hover:w-full" />
          </button>

          <a href="#" className="justify-self-center hover:opacity-90 transition-opacity">
            <img src={logo} alt="TucSoft" className="h-7 sm:h-10 w-auto" />
          </a>

          <div className="justify-self-end">
            <EstimateLink onClick={onOpenEstimate} />
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 hero-glow flex flex-col overflow-y-auto px-4 sm:px-10 lg:px-20 py-7">
          <div className="max-w-[1200px] w-full mx-auto grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
              className="text-white hover:text-brand transition-colors w-fit"
            >
              <X size={48} strokeWidth={1.5} />
            </button>
            <span />
            <div className="justify-self-end">
              <EstimateLink
                onClick={() => {
                  setMenuOpen(false);
                  onOpenEstimate?.();
                }}
              />
            </div>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center gap-6 sm:gap-12 py-8">
            {menuLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="w-full max-w-[420px] px-4 text-center pb-2 border-b border-white text-[28px] sm:text-5xl font-poppins font-medium uppercase text-white hover:text-brand hover:border-brand transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
