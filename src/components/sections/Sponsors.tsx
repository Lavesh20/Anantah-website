import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import CustomButton from '../ui/CustomButton';
import { MessageSquare } from 'lucide-react';

const Sponsors: React.FC = () => {
  // Placeholder for sponsor logos
  const sponsors = {
    platinum: [
      { name: "TBD", logo: "/_Light.png" },
      { name: "TBD", logo: "/FoldlogoHorizontal.png" }
    ],
    gold: [
      { name: "TBD", logo: "https://via.placeholder.com/160x60/1a1a1a/808080?text=DevSolutions" },
      { name: "TBD", logo: "https://via.placeholder.com/160x60/1a1a1a/808080?text=CodeCraft" },
      { name: "TBD", logo: "https://via.placeholder.com/160x60/1a1a1a/808080?text=ByteWorks" }
    ],
    silver: [
      { name: "TBD", logo: "https://via.placeholder.com/140x50/1a1a1a/808080?text=NexGen" },
      { name: "TBD", logo: "https://via.placeholder.com/140x50/1a1a1a/808080?text=DataFlow" },
      { name: "TBD", logo: "https://via.placeholder.com/140x50/1a1a1a/808080?text=CloudNet" },
      { name: "TBD", logo: "https://via.placeholder.com/140x50/1a1a1a/808080?text=AILabs" }
    ]
  };

  const partners = [
    { name: "TBD", logo: "https://via.placeholder.com/120x50/1a1a1a/808080?text=TechUniversity" },
    { name: "TBD", logo: "https://via.placeholder.com/120x50/1a1a1a/808080?text=InnovateHub" },
    { name: "TBD", logo: "https://via.placeholder.com/120x50/1a1a1a/808080?text=StartupIncubator" }
  ];

  return (
    <section id="sponsors" className="relative py-20 px-6 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20"></div>
      <div className="absolute inset-0 bg-grid opacity-30"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading 
          title="Sponsors & Partners"
          subtitle="अनन्तः 2026 is made possible by the generous support of our sponsors and partners."
          glowColor="green"
        />
        
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-8 text-center">Platinum Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {sponsors.platinum.map((sponsor, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-lg flex items-center justify-center transition-all duration-300 hover:border-neon-green/40"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="max-h-20" />
              </div>
            ))}
          </div>
          
          <h3 className="text-xl font-bold mb-8 text-center">Gold Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {sponsors.gold.map((sponsor, index) => (
              <div 
                key={index} 
                className="glass-card p-5 rounded-lg flex items-center justify-center transition-all duration-300 hover:border-neon-blue/40"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="max-h-16" />
              </div>
            ))}
          </div>
          
          <h3 className="text-xl font-bold mb-8 text-center">Silver Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-5 mb-16">
            {sponsors.silver.map((sponsor, index) => (
              <div 
                key={index} 
                className="glass-card p-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:border-white/20"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="max-h-14" />
              </div>
            ))}
          </div>
          
          <h3 className="text-xl font-bold mb-8 text-center">Partners</h3>
          <div className="flex flex-wrap justify-center gap-5 mb-16">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="glass-card p-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:border-white/20"
              >
                <img src={partner.logo} alt={partner.name} className="max-h-12" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-dark-card to-dark p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-blue/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to sponsor अनन्तः 2026?</h3>
              <p className="text-white/70 max-w-xl">
                Showcase your brand to innovative minds and tech enthusiasts. Partner with us to support the next generation of technology leaders.
              </p>
            </div>
            <CustomButton
              neonColor="green"
              size="lg"
              className="md:w-auto"
              icon={<MessageSquare size={16} />}
              href="mailto:sponsors@anantah.com"
            >
              Contact Us
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
