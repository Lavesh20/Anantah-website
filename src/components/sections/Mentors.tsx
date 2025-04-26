
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Mentors: React.FC = () => {
  const mentors = [
    {
      name: "TBD",
      //role: "AI Research Lead",
      //company: "Google AI",
      //image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "TBD",
      //role: "CTO",
      //company: "TechFusion",
      //image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "TBD",
      //role: "Blockchain Developer",
      //company: "Ethereum Foundation",
      //image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "TBD",
      //role: "Space Tech Innovator",
      //company: "SpaceX",
      //image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "TBD",
      //role: "HealthTech Researcher",
      //company: "MedInnovate",
      //image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "TBD",
      //role: "Security Expert",
      //company: "CyberShield",
      //image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  const judges = [
    {
      name: "TBD",
      //role: "VP of Innovation",
      //company: "Microsoft",
      //image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "TBD",
      //role: "Founding Partner",
      //company: "Tech Ventures Capital",
      //image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "TBD",
      //role: "Director of Engineering",
      //company: "Amazon Web Services",
      //image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="mentors" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-dark bg-noise opacity-20"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading 
          title="Judges & Mentors"
          subtitle="Learn from and be evaluated by industry experts who will guide you throughout the hackathon."
          glowColor="blue"
        />
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-glow-blue">Judges</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {judges.map((judge, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/10"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={judge.image} 
                    alt={judge.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-1">{judge.name}</h4>
                  <p className="text-white/70 text-sm mb-2">{judge.role}</p>
                  <p className="text-neon-blue text-sm mb-4">{judge.company}</p>
                  
                  <div className="flex space-x-3">
                    <a href={judge.socialLinks.linkedin} className="text-white/60 hover:text-white transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href={judge.socialLinks.twitter} className="text-white/60 hover:text-white transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href={judge.socialLinks.github} className="text-white/60 hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-6 text-center text-glow-green">Mentors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor, index) => (
              <div 
                key={index} 
                className="glass-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/10 flex items-center p-4"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-base mb-0.5">{mentor.name}</h4>
                  <p className="text-white/70 text-xs mb-1">{mentor.role}</p>
                  <p className="text-neon-green text-xs mb-2">{mentor.company}</p>
                  
                  <div className="flex space-x-2">
                    <a href={mentor.socialLinks.linkedin} className="text-white/60 hover:text-white transition-colors">
                      <Linkedin size={14} />
                    </a>
                    <a href={mentor.socialLinks.twitter} className="text-white/60 hover:text-white transition-colors">
                      <Twitter size={14} />
                    </a>
                    <a href={mentor.socialLinks.github} className="text-white/60 hover:text-white transition-colors">
                      <Github size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
