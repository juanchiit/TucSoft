import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? 'Modo claro' : 'Modo oscuro';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Activar ${label.toLowerCase()}`}
      className="flex items-center justify-center gap-2 w-10 h-10 lg:w-auto lg:px-4 rounded-full border border-white/20 text-white text-sm whitespace-nowrap hover:text-brand hover:border-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
      <span className="hidden lg:inline">{label}</span>
    </button>
  );
};
