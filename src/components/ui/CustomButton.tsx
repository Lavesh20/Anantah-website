
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  neonColor?: 'blue' | 'purple' | 'green';
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'primary', size = 'md', icon, neonColor = 'purple', href, ...props }, ref) => {
    const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg";
    
    const variants = {
      primary: "bg-gradient-to-r from-neon-purple to-neon-purple/70 text-white hover:from-neon-purple/90 hover:to-neon-purple/60",
      secondary: "bg-dark-card border border-white/10 text-white hover:bg-dark-card/80",
      outline: "bg-transparent border text-white hover:bg-white/5",
    };
    
    const sizes = {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-6 py-3",
    };
    
    const neonEffects = {
      purple: "hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]",
      blue: "hover:shadow-[0_0_20px_rgba(24,182,246,0.5)]",
      green: "hover:shadow-[0_0_20px_rgba(74,222,128,0.5)]",
    };

    const buttonContent = (
      <>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </>
    );
    
    const buttonClassName = cn(
      baseClasses,
      variants[variant],
      sizes[size],
      neonEffects[neonColor],
      className
    );
    
    if (href) {
      return (
        <a 
          href={href}
          className={buttonClassName}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {buttonContent}
        </a>
      );
    }
    
    return (
      <button
        className={buttonClassName}
        ref={ref}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
