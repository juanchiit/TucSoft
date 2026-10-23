import React, { useState } from 'react';
import logo from '../../assets/logo-tucsoft.png';
import { services } from '../../data/services';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12c0-5.52-4.48-10-10-10z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <rect x="7" y="7" width="10" height="10" rx="3" fill="none" stroke="#101010" strokeWidth="1.6" />
    <circle cx="12" cy="12" r="2.4" fill="none" stroke="#101010" strokeWidth="1.6" />
    <circle cx="15" cy="9" r="0.8" fill="#101010" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden>
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path d="M8.2 10.2h1.7v5.6H8.2zM9.05 7.6a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9zM11.1 10.2h1.6v.77c.24-.45.82-.9 1.68-.9 1.8 0 2.12 1.18 2.12 2.7v3.03h-1.68v-2.7c0-.64-.01-1.47-.9-1.47-.9 0-1.04.7-1.04 1.42v2.75h-1.68z" fill="#101010" />
  </svg>
);

const links = [
  { label: 'Inicio', href: '#' },
  { label: 'Servicios', href: '#services' },
  { label: 'Nosotros', href: '#mission' },
  { label: 'ColdTrack', href: '#coldtrack' },
  { label: 'Clientes', href: '#clients' },
];


export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="font-montserrat text-white">
      <div className="bg-ink-deep px-4 sm:px-10 lg:px-[117px] py-12">
        <div className="max-w-[1126px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[360px_1px_auto_auto_1px_1fr] gap-x-6 gap-y-10 lg:gap-x-10 xl:gap-x-14">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#" className="inline-block">
              <img src={logo} alt="TucSoft" className="h-10 w-auto" />
            </a>
            <p className="mt-6 text-[15px] leading-[22px]">
              Creemos en crecer juntos, impulsando empresas mediante la tecnología y resolviendo sus
              necesidades de software con planificación estratégica y desarrollo.
            </p>

            <form onSubmit={handleSubscribe} className="mt-4 flex h-12 border border-brand max-w-[360px]">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresá tu email"
                className="flex-1 min-w-0 bg-transparent px-4 text-sm text-white placeholder:text-white/80 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-brand hover:bg-brand-hover px-3 text-sm font-semibold whitespace-nowrap transition-colors"
              >
                {subscribed ? '¡Suscripto!' : 'Unirme al Newsletter'}
              </button>
            </form>

            <div className="mt-4 flex items-center gap-4 text-brand">
              <a href="#" aria-label="Facebook" className="hover:text-brand-hover"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram" className="hover:text-brand-hover"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-brand-hover"><LinkedinIcon /></a>
            </div>
          </div>

          <span className="hidden lg:block w-px bg-brand self-stretch mt-9" />

          <div>
            <h4 className="text-xl font-medium text-brand">Enlaces</h4>
            <ul className="mt-6 lg:mt-8 space-y-4 lg:space-y-6 text-sm font-medium xl:whitespace-nowrap">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-brand transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-medium text-brand">Servicios</h4>
            <ul className="mt-6 lg:mt-8 space-y-4 lg:space-y-6 text-sm font-medium xl:whitespace-nowrap">
              {services.map(({ title }) => (
                <li key={title}>
                  <a href="#services" className="hover:text-brand transition-colors">{title}</a>
                </li>
              ))}
            </ul>
          </div>

          <span className="hidden lg:block w-px bg-brand self-stretch mt-9" />

          <div className="col-span-2 md:col-span-1 lg:text-center">
            <h4 className="text-xl font-medium text-brand">Contacto</h4>
            <div className="mt-6 lg:mt-8 space-y-3 text-[15px] leading-[23px]">
              <p className="font-medium">info@tucsoft.com</p>
              <p className="font-normal">
                San Miguel de Tucumán,
                <br />
                Argentina
              </p>
              <p className="font-normal">+54 381 400-7800</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-ink py-4 text-center text-[13px]">
        ©{new Date().getFullYear()} - TucSoft | Todos los derechos reservados
      </div>
    </footer>
  );
};
