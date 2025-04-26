
import { useEffect, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  reverse?: boolean;
  min?: number;
  max?: number;
}

export function useParallax(options: ParallaxOptions = {}) {
  const { 
    speed = 0.1, 
    reverse = false,
    min = -20,
    max = 20 
  } = options;
  
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOffset = reverse 
        ? -scrollY * speed 
        : scrollY * speed;
      
      // Clamp the value between min and max
      const clampedOffset = Math.max(min, Math.min(max, newOffset));
      setOffset(clampedOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, reverse, min, max]);
  
  return offset;
}

export default useParallax;
