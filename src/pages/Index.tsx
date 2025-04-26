import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Guidelines from '@/components/sections/Guidelines';
import Tracks from '@/components/sections/Tracks';
import Timeline from '@/components/sections/Timeline';
import Prizes from '@/components/sections/Prizes';
import Mentors from '@/components/sections/Mentors';
import Sponsors from '@/components/sections/Sponsors';
import Contact from '@/components/sections/Contact';

const Index: React.FC = () => {
  // Add a custom cursor effect for desktop
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };
    
    const handleMouseDown = () => {
      cursor.style.width = '30px';
      cursor.style.height = '30px';
      cursor.style.opacity = '0.7';
    };
    
    const handleMouseUp = () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.opacity = '0.5';
    };
    
    // Only add the custom cursor for non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (!isTouchDevice) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      // Remove cursor element for touch devices
      cursor.remove();
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      cursor.remove();
    };
  }, []);

  // Add smooth scroll behavior
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.pathname === window.location.pathname) {
        e.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for the navbar
            behavior: 'smooth'
          });
          
          // Update URL without scrolling
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Select elements with the appropriate classes
    const elementsToAnimate = document.querySelectorAll('.fade-in-scroll');
    elementsToAnimate.forEach(element => {
      element.classList.remove('animate-fade-in');
      observer.observe(element);
    });
    
    return () => {
      elementsToAnimate.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden no-scrollbar">
      <Navbar />
      <Hero />
      <About />
      <Guidelines />
      <Tracks />
      <Timeline />
      <Prizes />
      <Mentors />
      <Sponsors />
      <Contact />
    </div>
  );
};

export default Index;
