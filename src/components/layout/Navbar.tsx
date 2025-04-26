import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Mentors', href: '#mentors' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center text-xl font-bold tracking-tight">
          <span className="text-glow">अनंत</span>
          <span className="text-white/80">2025</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-white/80 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <CustomButton href="https://unstop.com" size="md" neonColor="purple">
            Register Now
          </CustomButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white py-2 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <CustomButton href="https://unstop.com" size="md" neonColor="purple" className="w-full">
                Register Now
              </CustomButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
