import React, { useEffect, useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { Button } from './Button';
import { serviceTitles } from '../../data/services';

interface EstimateModalProps {
  initialService: string;
  onClose: () => void;
}

const fieldClassName =
  'w-full bg-ink-deep border border-ink-card rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand';

export const EstimateModal: React.FC<EstimateModalProps> = ({ initialService, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: initialService, message: '' });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="estimate-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[calc(100svh-2rem)] overflow-y-auto rounded-lg p-6 sm:p-8 bg-ink shadow-card border border-white/10"
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 text-white hover:text-brand p-2"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle size={56} className="text-brand mx-auto" />
            <h3 id="estimate-title" className="text-2xl font-bold text-white">¡Solicitud Recibida!</h3>
            <p className="text-sm text-white/70 max-w-xs mx-auto">
              Nuestro equipo de ingeniería evaluará tus requerimientos y se pondrá en contacto en menos de 24 horas hábiles.
            </p>
          </div>
        ) : (
          <div>
            <h3 id="estimate-title" className="text-2xl font-bold text-white mb-1 pr-8">
              Solicitar <span className="text-brand">Presupuesto</span>
            </h3>
            <p className="text-sm text-white/70 mb-6">
              Contanos sobre las necesidades tecnológicas y los requerimientos de tu proyecto.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="estimate-name" className="block text-sm text-white mb-1">Nombre completo</label>
                <input
                  id="estimate-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Juan Pérez"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="estimate-email" className="block text-sm text-white mb-1">Correo electrónico corporativo</label>
                <input
                  id="estimate-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="juan@empresa.com"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label htmlFor="estimate-service" className="block text-sm text-white mb-1">Servicio de interés</label>
                <select
                  id="estimate-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={fieldClassName}
                >
                  {serviceTitles.map((title) => (
                    <option key={title} value={title}>{title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="estimate-message" className="block text-sm text-white mb-1">Detalles del proyecto</label>
                <textarea
                  id="estimate-message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describí los objetivos y el alcance de tu proyecto..."
                  className={fieldClassName}
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
                <span>Enviar Solicitud</span>
                <Send size={16} />
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
