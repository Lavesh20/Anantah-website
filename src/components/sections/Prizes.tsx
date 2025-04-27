
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Trophy, Award, Gift, Briefcase, Users } from 'lucide-react';
import useParallax from '@/hooks/useParallax';

const Prizes: React.FC = () => {
  const parallaxOffset = useParallax({ speed: 0.05 });

  const prizeCategories = [
    {
      title: "Grand Prize",
      amount: "Revealing soon",
      description: "For the overall winner of अनन्तः 2025",
      icon: <Trophy className="text-yellow-400" size={32} />,
      color: "from-yellow-500/20 to-yellow-600/5"
    },
    {
      title: "1st Runner Up",
      amount: "Revealing soon",
      description: "For the first runner-up team",
      icon: <Award className="text-gray-300" size={32} />,
      color: "from-gray-400/20 to-gray-500/5"
    },
    {
      title: "2nd Runner Up",
      amount: "Revealing soon",
      description: "For the second runner-up team",
      icon: <Award className="text-amber-600" size={32} />,
      color: "from-amber-700/20 to-amber-800/5"
    }
  ];

  const perks = [
    {
      title: "Swag Kits",
      description: "Exclusive hackathon merchandise for all participants",
      icon: <Gift size={24} />
    },
    {
      title: "Internship Opportunities",
      description: "Potential internship offers from our sponsor companies",
      icon: <Briefcase size={24} />
    },
    {
      title: "Networking",
      description: "Connect with industry experts and like-minded innovators",
      icon: <Users size={24} />
    }
  ];

  // const trackPrizes = [
  //   {
  //     track: "AI & ML",
  //     prize: "₹25,000"
  //   },
  //   {
  //     track: "Space Tech",
  //     prize: "₹25,000"
  //   },
  //   {
  //     track: "Web3 & Blockchain",
  //     prize: "₹25,000"
  //   },
  //   {
  //     track: "HealthTech",
  //     prize: "₹25,000"
  //   },
  //   {
  //     track: "Cybersecurity",
  //     prize: "₹25,000"
  //   },
  //   {
  //     track: "Web Development",
  //     prize: "₹25,000"
  //   }
  // ];

  return (
    <section id="prizes" className="relative py-20 px-6 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-card"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading 
          title="Prizes & Perks"
          subtitle="Compete for a prize pool of ₹1,00,000+ and gain valuable experiences and opportunities."
          glowColor="purple"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {prizeCategories.map((prize, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105"
              style={{ transform: `translateY(${parallaxOffset * (index + 1) * 0.2}px)` }}
            >
              <div className={`bg-gradient-to-b ${prize.color} p-6 text-center`}>
                <div className="mb-4 flex justify-center">{prize.icon}</div>
                <h3 className="text-xl font-bold mb-2">{prize.title}</h3>
                <div className="text-3xl font-bold text-glow mb-2">{prize.amount}</div>
                <p className="text-white/70 text-sm">{prize.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Track-specific Prizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trackPrizes.map((item, index) => (
              <div key={index} className="glass-card p-4 rounded-lg flex justify-between items-center">
                <span className="text-white/90">{item.track}</span>
                <span className="font-semibold text-neon-purple">{item.prize}</span>
              </div>
            ))}
          </div>
        </div> */}
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Additional Perks</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <div key={index} className="glass-card p-6 rounded-lg text-center">
                <div className="text-neon-green mb-4 flex justify-center">{perk.icon}</div>
                <h4 className="font-bold mb-2">{perk.title}</h4>
                <p className="text-white/70 text-sm">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
