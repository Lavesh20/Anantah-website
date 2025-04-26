
import React from 'react';
import { cn } from '@/lib/utils';

interface TrackCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'purple' | 'blue' | 'green';
  className?: string;
}

const TrackCard: React.FC<TrackCardProps> = ({
  title,
  description,
  icon,
  color,
  className,
}) => {
  const colorVariants = {
    purple: "border-neon-purple/20 hover:border-neon-purple/50 hover:shadow-[0_8px_32px_rgba(139,92,246,0.2)]",
    blue: "border-neon-blue/20 hover:border-neon-blue/50 hover:shadow-[0_8px_32px_rgba(24,182,246,0.2)]",
    green: "border-neon-green/20 hover:border-neon-green/50 hover:shadow-[0_8px_32px_rgba(74,222,128,0.2)]",
  };

  const iconColorVariants = {
    purple: "text-neon-purple",
    blue: "text-neon-blue",
    green: "text-neon-green",
  };

  return (
    <div 
      className={cn(
        "track-card p-6 rounded-xl transition-all duration-300 flex flex-col h-full",
        colorVariants[color],
        className
      )}
    >
      <div className={cn("text-3xl mb-4", iconColorVariants[color])}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
  );
};

export default TrackCard;
