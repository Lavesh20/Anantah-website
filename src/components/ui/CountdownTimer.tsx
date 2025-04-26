
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className={`flex items-center justify-center space-x-4 md:space-x-8 ${className}`}>
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="relative glass-card px-4 py-3 md:px-6 md:py-4 rounded-lg overflow-hidden w-16 md:w-24 h-16 md:h-24 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
            <span className="text-xl md:text-3xl font-bold relative z-10">
              {unit.value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs md:text-sm text-white/70 mt-2">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
