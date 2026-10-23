import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

const STORAGE_KEY = 'tucsoft-theme';

const readStoredTheme = (): Theme => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(readStoredTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      return;
    }
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
};
