export interface DemoFormData {
  name: string;
  company: string;
  email: string;
  equipmentCount: string;
  message: string;
}

export type DemoFormErrors = Partial<Record<keyof DemoFormData, string>>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const onlyLettersRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;

const validateLettersField = (value: string, label: string) => {
  const trimmed = value.trim();
  if (!trimmed) return `${label} es obligatorio.`;
  if (trimmed.length < 3) return 'Debe ingresar al menos 3 caracteres.';
  if (!onlyLettersRegex.test(trimmed)) return `${label} solo puede contener letras (sin números).`;
  return undefined;
};

export const validateDemoForm = (data: DemoFormData): DemoFormErrors => {
  const errors: DemoFormErrors = {
    name: validateLettersField(data.name, 'El nombre completo'),
    company: validateLettersField(data.company, 'El nombre de la empresa'),
  };

  const email = data.email.trim();
  if (!email) errors.email = 'El correo electrónico es obligatorio.';
  else if (!emailRegex.test(email)) errors.email = 'Ingrese un correo electrónico corporativo válido.';

  const count = Number(data.equipmentCount);
  if (!data.equipmentCount.trim()) errors.equipmentCount = 'Indique la cantidad de equipos.';
  else if (!Number.isInteger(count) || count <= 0) errors.equipmentCount = 'Debe ser un número entero mayor a 0.';

  return Object.fromEntries(Object.entries(errors).filter(([, message]) => message)) as DemoFormErrors;
};
