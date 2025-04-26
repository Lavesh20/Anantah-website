
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Infinity, Zap, Lightbulb, Globe } from 'lucide-react';
import useParallax from '@/hooks/useParallax';

const About: React.FC = () => {
  const parallaxOffset = useParallax({ speed: 0.05 });

  const features = [
    {
      icon: <Infinity size={24} />,
      title: 'Endless Possibilities',
      description: 'Explore limitless innovation and solutions across multiple domains and technologies.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Rapid Prototyping',
      description: 'Transform ideas into working prototypes in just 36 hours of intensive collaboration.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Creative Problem Solving',
      description: 'Tackle real-world challenges with innovative approaches and unconventional thinking.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Community',
      description: 'Connect with like-minded innovators, mentors, and industry experts from around the world.'
    }
  ];

  return (
    <section id="about" className="relative py-20 px-6 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading 
          title="About अनंत"
          subtitle="अनंत, meaning 'Infinity' in Sanskrit, is a celebration of boundless innovation and technological exploration. Our hackathon aims to break conventional boundaries and inspire solutions that shape the future."
          glowColor="blue"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <div style={{ transform: `translateY(${parallaxOffset * 1.5}px)` }} className="space-y-6">
            <div className="glass p-1 rounded-lg overflow-hidden">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Hackathon participants collaborating" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
              </div>
            </div>
            
            <div className="glass p-1 rounded-lg overflow-hidden">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Tech innovation in action" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 text-glow-blue">Our Vision</h3>
            <p className="text-white/80 mb-8">
              At अनंत, we believe in the power of technology to transform our world. Our hackathon is designed to push the boundaries of what's possible, encouraging participants to think beyond conventional limitations and create solutions that address real-world challenges.
            </p>
            <p className="text-white/80 mb-8">
              The name "अनंत" derives from the Sanskrit word for "infinity," symbolizing the endless possibilities that emerge when passionate minds collaborate. We provide a platform for innovators to connect, collaborate, and transform their ideas into reality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-4 rounded-lg">
                  <div className="text-neon-blue mb-3">{feature.icon}</div>
                  <h4 className="font-medium mb-2">{feature.title}</h4>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
