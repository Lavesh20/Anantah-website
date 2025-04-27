import React from 'react';
import { Github, Instagram, Linkedin, Mail, MessageSquare, Twitter } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const Contact: React.FC = () => {
  const socialLinks = [
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/csi_aitr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/company/computer-society-of-india-aitr/", label: "LinkedIn" },
    { icon: <Github size={20} />, url: "https://github.com/CSI-AITR", label: "GitHub" },
  ];

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-dark bg-noise opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">Get In Touch</h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Have questions or need more information about अनन्तः 2025? Reach out to us through any of these channels.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-16">
          <CustomButton 
            href="mailto:info@anantah.com" 
            variant="outline" 
            size="lg"
            neonColor="purple"
            icon={<Mail size={18} />}
          >
            info@anantah.com
          </CustomButton>
          
          <CustomButton 
            href="https://discord.gg/Up2fxbfC" 
            variant="outline"
            size="lg"
            neonColor="blue"
            icon={<MessageSquare size={18} />}
          >
            Join Our Discord
          </CustomButton>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="glass-card p-4 rounded-full transition-all duration-300 hover:border-white/20 hover:scale-110"
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        <div className="text-center text-white/50 text-sm">
          <p>© 2025 अनन्तः Hackathon. All rights reserved.</p>
          <p className="mt-2">Organized by CSI Club</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
