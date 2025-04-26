import React, { useEffect, useRef } from 'react';
import CountdownTimer from '../ui/CountdownTimer';
import CustomButton from '../ui/CustomButton';
import { ArrowRight, Github, Star } from 'lucide-react';
import useParallax from '@/hooks/useParallax';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxOffset = useParallax({ speed: 0.1 });
  
  // Set the hackathon date to April 15, 2025
  const hackathonDate = new Date('2025-07-15T09:00:00');
  
  const createParticle = (x: number, y: number, size: number) => {
    if (!containerRef.current) return;
    
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size between 2px and the size param
    const particleSize = Math.random() * size + 2;
    
    // Random color between purple, blue and green with opacity
    const colors = [
      'rgba(139, 92, 246, 0.6)', // Purple
      'rgba(24, 182, 246, 0.6)',  // Blue
      'rgba(74, 222, 128, 0.6)'   // Green
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Set particle properties
    particle.style.width = `${particleSize}px`;
    particle.style.height = `${particleSize}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.backgroundColor = color;
    
    // Add to container
    containerRef.current.appendChild(particle);
    
    // Create animation
    const angle = Math.random() * Math.PI * 2; // Random angle
    const distance = Math.random() * 100 + 50; // Random distance
    const duration = Math.random() * 2 + 1;    // Random duration
    
    // Calculate end position
    const endX = x + Math.cos(angle) * distance;
    const endY = y + Math.sin(angle) * distance;
    
    // Animate
    const animation = particle.animate(
      [
        { transform: 'translate(0, 0) scale(1)', opacity: 0 },
        { transform: 'translate(0, 0) scale(1)', opacity: 0.8, offset: 0.1 },
        { transform: `translate(${endX - x}px, ${endY - y}px) scale(0)`, opacity: 0 }
      ],
      {
        duration: duration * 1000,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    );
    
    // Remove particle when animation is complete
    animation.onfinish = () => {
      particle.remove();
    };
  };
  
  // Add mouse trail effect
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      // Create particle at mouse position relative to container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Create a particle with random delay
      setTimeout(() => {
        createParticle(x, y, 6);
      }, Math.random() * 100);
    };
    
    containerRef.current.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-4"
      id="hero"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dark bg-noise opacity-30"></div>
      <div className="absolute inset-0 bg-grid"></div>
      <div className="absolute inset-0 hero-gradient"></div>
            
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto text-center max-w-5xl">
        <div className="mb-6" style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}>
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white/90 text-sm px-4 py-1.5 rounded-full mb-4">
            CSI Club Presents
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight md:leading-tight" style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}>
        <span className="text-7xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-300 to-green-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
        अनन्त:
              </span>
          <br />
          <span className="inline-block animate-fade-in text-white/80 mt-2">Code Beyond Limits</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto animate-fade-in" style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}>
          Explore the realm of infinite possibilities at the most anticipated hackathon of the year. 
          Join us on this journey of innovation and creativity.
        </p>
        
        <div className="mb-12 animate-fade-in" style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }}>
          <CountdownTimer targetDate={hackathonDate} />
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <CustomButton 
            href="https://unstop.com" 
            size="lg" 
            neonColor="purple"
            className="w-full sm:w-auto"
          >
            Register Now
            <ArrowRight size={16} className="ml-2" />
          </CustomButton>
          
          <CustomButton 
            href="https://discord.gg" 
            variant="outline" 
            size="lg"
            neonColor="blue"
            className="w-full sm:w-auto"
          >
            Join Discord
            <Star size={16} className="ml-2" />
          </CustomButton>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
