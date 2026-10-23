import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { Button } from './Button';

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EstimateModal: React.FC<EstimateModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Desarrollo a Medida',
    budget: '$5,000 - $15,000',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-lg p-6 sm:p-8 bg-ink shadow-card">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-brand p-2"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle size={56} className="text-brand mx-auto " />
            <h3 className="text-2xl font-bold text-white">¡Solicitud Recibida!</h3>
            <p className="text-sm text-white/70 max-w-xs mx-auto">
              Nuestro equipo de ingeniería evaluará tus requerimientos y se pondrá en contacto en menos de 24 horas hábiles.
            </p>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Solicitar <span className="text-brand">Presupuesto</span>
            </h3>
            <p className="text-sm text-white/70 mb-6">
              Cuéntanos sobre las necesidades tecnológicas y requerimientos de tu proyecto.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-white mb-1">Nombre Completo</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Juan Pérez"
                  className="w-full bg-ink-deep border border-ink-card rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="block text-sm text-white mb-1">Correo Electrónico Corporativo</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="juan@empresa.com"
                  className="w-full bg-ink-deep border border-ink-card rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand"
                />
              </div>

              <div>
                <label className="block text-sm text-white mb-1">Servicio de Interés</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-ink-deep border border-ink-card rounded px-4 py-2.5 text-sm text-white focus:outline-none focus:border-brand"
                >
                  <option value="Desarrollo a Medida">Desarrollo a Medida (web y móvil)</option>
                  <option value="Solución ColdTrack IoT">Solución ColdTrack IoT</option>
                  <option value="IoT y Telemetría">IoT y Telemetría</option>
                  <option value="Datos e IA">Datos e IA</option>
                  <option value="Automatización de Procesos">Automatización de Procesos</option>
                  <option value="Infraestructura Cloud y DevOps">Infraestructura Cloud y DevOps</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-white mb-1">Detalles del Proyecto</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe los objetivos y alcance de tu proyecto..."
                  className="w-full bg-ink-deep border border-ink-card rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand"
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
