import React from 'react';
import { AlertCircle } from 'lucide-react';

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  children: (props: { id: string; className: string; 'aria-invalid': boolean; 'aria-describedby'?: string }) => React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = ({ id, label, error, children }) => {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="block text-sm text-white mb-1">{label}</label>
      {children({
        id,
        'aria-invalid': Boolean(error),
        'aria-describedby': error ? errorId : undefined,
        className: `w-full bg-ink-deep border rounded px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors ${
          error ? 'border-red-500 focus:border-red-500' : 'border-ink-card focus:border-brand'
        }`,
      })}
      {error && (
        <p id={errorId} className="flex items-center gap-1 text-xs text-red-400 mt-1">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
};
