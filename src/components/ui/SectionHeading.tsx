
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  glowColor?: 'purple' | 'blue' | 'green';
  subtitleClassName?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center',
  className,
  glowColor = 'purple',
  subtitleClassName,
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const glowClasses = {
    purple: 'text-glow',
    blue: 'text-glow-blue',
    green: 'text-glow-green',
  };

  return (
    <div className={cn('mb-12', alignmentClasses[alignment])}>
      <div className="inline-block">
        <span className="text-xs font-semibold tracking-wider uppercase bg-white/10 px-3 py-1 rounded-full mb-3 inline-block">
         अनन्तः 2025
        </span>
      </div>
      <h2 
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4',
          glowClasses[glowColor],
          className
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg text-white/70 max-w-3xl mx-auto", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
