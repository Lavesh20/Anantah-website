
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import TrackCard from '../ui/TrackCard';
import { Brain, Rocket, Bitcoin, Heart, Shield, Globe } from 'lucide-react';

const Tracks: React.FC = () => {
  const tracks = [
    {
      title: 'AI & ML',
      description: 'Expanding intelligence through innovative machine learning and artificial intelligence solutions.',
      icon: <Brain />,
      color: 'purple' as const
    },
    {
      title: 'Space Tech',
      description: 'Exploring the unknown frontiers of space with cutting-edge technology and innovative approaches.',
      icon: <Rocket />,
      color: 'blue' as const
    },
    {
      title: 'Web3 & Blockchain',
      description: 'Building the future of trust and decentralization with blockchain technology and Web3 innovations.',
      icon: <Bitcoin />,
      color: 'green' as const
    },
    {
      title: 'HealthTech',
      description: 'Revolutionizing healthcare with limitless innovations that improve quality of life and medical outcomes.',
      icon: <Heart />,
      color: 'purple' as const
    },
    {
      title: 'Cybersecurity',
      description: 'Defending the digital world with advanced security solutions and proactive protection systems.',
      icon: <Shield />,
      color: 'blue' as const
    },
    {
      title: 'Web Development',
      description: 'Creating scalable and futuristic web applications that push the boundaries of user experience.',
      icon: <Globe />,
      color: 'green' as const
    }
  ];

  return (
    <section id="tracks" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-dark bg-noise opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-neon-purple/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading 
          title="Tracks & Problem Statements"
          subtitle="Choose from our diverse range of tracks and tackle challenging problem statements that push the boundaries of innovation."
          glowColor="green"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {tracks.map((track, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TrackCard
                title={track.title}
                description={track.description}
                icon={track.icon}
                color={track.color}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/70 max-w-2xl mx-auto">
            Each track features unique problem statements designed to challenge your creativity and technical skills. Detailed problem statements will be revealed at the start of the hackathon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tracks;
