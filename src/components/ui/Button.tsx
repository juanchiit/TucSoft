import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-poppins font-normal rounded-[4px] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-brand text-snow font-medium hover:bg-brand-hover',
    outline: 'border-2 border-white bg-transparent text-white hover:bg-white hover:text-ink',
    ghost: 'text-white hover:text-brand',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-5 py-3 text-base gap-2.5',
    lg: 'px-6 py-[14px] text-base gap-3',
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, variantStyles[variant], sizeStyles[size], className))}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
