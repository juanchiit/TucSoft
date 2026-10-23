import React, { useEffect, useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { Button } from './Button';
import { FormField } from './FormField';
import { type DemoFormData, type DemoFormErrors, validateDemoForm } from '../../utils/demoFormValidation';

interface DemoModalProps {
  onClose: () => void;
}

const emptyForm: DemoFormData = { name: '', company: '', email: '', equipmentCount: '', message: '' };

export const DemoModal: React.FC<DemoModalProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState<DemoFormErrors>({});

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const updateField = (field: keyof DemoFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateDemoForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitted(true);
    setTimeout(onClose, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[calc(100svh-2rem)] overflow-y-auto rounded-lg p-6 sm:p-8 bg-ink shadow-card border border-white/10"
      >
        <button onClick={onClose} aria-label="Cerrar" className="absolute top-4 right-4 text-white hover:text-brand p-2">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle size={56} className="text-brand mx-auto" />
            <h3 id="demo-title" className="text-2xl font-bold text-white">¡Solicitud Recibida!</h3>
            <p className="text-sm text-white/70 max-w-xs mx-auto">
              Nuestro equipo comercial se pondrá en contacto en menos de 24 horas hábiles para coordinar una demo personalizada.
            </p>
          </div>
        ) : (
          <div>
            <h3 id="demo-title" className="text-2xl font-bold text-white mb-1 pr-8">
              Solicitar <span className="text-brand">Demo</span>
            </h3>
            <p className="text-sm text-white/70 mb-6">
              Completá tus datos y un asesor de TucSoft se pondrá en contacto con vos para mostrarte ColdTrack.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <FormField id="demo-name" label="Nombre completo" error={errors.name}>
                {(props) => (
                  <input
                    {...props}
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="Juan Pérez"
                  />
                )}
              </FormField>

              <FormField id="demo-company" label="Empresa" error={errors.company}>
                {(props) => (
                  <input
                    {...props}
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={(e) => updateField('company', e.target.value)}
                    placeholder="Embotelladora del Norte"
                  />
                )}
              </FormField>

              <FormField id="demo-email" label="Correo electrónico corporativo" error={errors.email}>
                {(props) => (
                  <input
                    {...props}
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="juan@empresa.com"
                  />
                )}
              </FormField>

              <FormField id="demo-equipment" label="Cantidad aprox. de equipos de frío" error={errors.equipmentCount}>
                {(props) => (
                  <input
                    {...props}
                    type="number"
                    inputMode="numeric"
                    min="1"
                    step="1"
                    value={formData.equipmentCount}
                    onChange={(e) => updateField('equipmentCount', e.target.value)}
                    placeholder="Ej: 50"
                  />
                )}
              </FormField>

              <FormField id="demo-message" label="Mensaje (opcional)">
                {(props) => (
                  <textarea
                    {...props}
                    rows={3}
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    placeholder="Contanos brevemente tu situación actual con los equipos de frío..."
                  />
                )}
              </FormField>

              <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
                <span>Solicitar Demo</span>
                <Send size={16} />
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
