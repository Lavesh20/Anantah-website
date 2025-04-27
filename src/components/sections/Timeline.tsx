
import React, { useEffect, useRef } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { 
  Calendar, 
  Clock, 
  Flag, 
  Users, 
  MessageSquare, 
  FileCheck, 
  Award, 
  CheckCircle 
} from 'lucide-react';

interface TimelineEventProps {
  date: string;
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive?: boolean;
  isCompleted?: boolean;
  position: 'left' | 'right';
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ 
  date, 
  time, 
  title, 
  description, 
  icon,
  isActive = false,
  isCompleted = false,
  position
}) => {
  return (
    <div 
      className={`fade-in-scroll relative mb-12 ${
        position === 'left' ? 'md:mr-auto md:ml-0 md:pr-16 md:pl-0' : 'md:ml-auto md:mr-0 md:pl-16 md:pr-0'
      } w-full md:w-5/12 px-4`}
    >
      <div 
        className={`relative p-6 rounded-lg glass-card-hover border transition-all duration-300 ${
          isActive 
            ? 'bg-neon-purple/10 border-neon-purple/30' 
            : isCompleted 
              ? 'bg-black/10 border-neon-green/20' 
              : 'bg-black/10 border-white/5'
        }`}
      >
        {/* Arrow pointing to the timeline */}
        <div 
          className={`absolute top-6 ${position === 'left' ? 'right-[-10px]' : 'left-[-10px]'} 
          w-0 h-0 border-solid ${position === 'left' 
            ? 'border-l-[10px] border-l-neon-purple/30' 
            : 'border-r-[10px] border-r-neon-purple/30'} 
          border-y-[10px] border-y-transparent hidden md:block`}
        ></div>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <h3 className={`text-xl font-semibold ${isActive ? 'text-white' : 'text-white/90'}`}>
            {title}
          </h3>
          <div className="flex items-center text-sm mt-1 md:mt-0 text-white/70">
            <Calendar size={14} className="mr-1" />
            <span className="mr-3">{date}</span>
            <Clock size={14} className="mr-1" />
            <span>{time}</span>
          </div>
        </div>
        <p className={`text-sm ${isActive ? 'text-white/80' : 'text-white/70'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  
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
    
    if (timelineRef.current) {
      const elementsToAnimate = timelineRef.current.querySelectorAll('.fade-in-scroll');
      elementsToAnimate.forEach(element => {
        element.classList.remove('animate-fade-in');
        observer.observe(element);
      });
    }
    
    return () => {
      if (timelineRef.current) {
        const elementsToAnimate = timelineRef.current.querySelectorAll('.fade-in-scroll');
        elementsToAnimate.forEach(element => {
          observer.unobserve(element);
        });
      }
    };
  }, []);
  
  const timelineEvents = [
    {
      date: "June 15, 2025",
      time: "10:00 AM IST",
      title: "Registration Opens",
      description: "Team registration begins. Early bird registrations get special mentorship access.",
      icon: <Flag size={24} />,
      isCompleted: true,
      position: 'left' as const
    },
    {
      date: "July 20, 2025",
      time: "11:59 PM IST",
      title: "Registration Closes",
      description: "Last date to register your team and confirm participation.",
      icon: <Users size={24} />,
      isCompleted: true,
      position: 'right' as const
    },
    {
      date: "August 04, 2025",
      time: "5:00 PM IST",
      title: "Hackathon Kickoff",
      description: "Opening ceremony, problem statements release, and team orientations.",
      icon: <Flag size={24} />,
      isActive: true,
      position: 'left' as const
    },
    {
      date: "August 05-06, 2025",
      time: "Various Times",
      title: "Mentorship Sessions",
      description: "Expert mentors will be available for guidance and technical support.",
      icon: <MessageSquare size={24} />,
      position: 'right' as const
    },
    {
      date: "August 06, 2025",
      time: "3:00 PM IST",
      title: "Submission Deadline",
      description: "Final code, documentation, and presentation submissions due.",
      icon: <FileCheck size={24} />,
      position: 'left' as const
    },
    {
      date: "August 05-06, 2025",
      time: "All Day",
      title: "Judging Period",
      description: "Expert panel reviews and evaluates all submissions.",
      icon: <Award size={24} />,
      position: 'right' as const
    },
    {
      date: "August 06, 2025",
      time: "6:00 PM IST",
      title: "Winners Announcement",
      description: "Closing ceremony and announcement of winners in all categories.",
      icon: <Award size={24} />,
      position: 'left' as const
    }
  ];

  return (
    <section id="timeline" ref={timelineRef} className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-dark bg-noise opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-neon-green/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading 
          title="Event Timeline"
          subtitle="Key dates and milestones for अनन्तः 2025 Hackathon"
          glowColor="green"
        />
        
        <div className="mt-16 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Mobile Timeline Line (centered) */}
          <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green md:hidden"></div>
          
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <React.Fragment key={index}>
                {/* Desktop Timeline Point (centered) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block" 
                  style={{ top: `${index * 200 + 24}px` }}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                    event.isActive 
                      ? 'bg-neon-purple' 
                      : event.isCompleted 
                        ? 'bg-neon-green' 
                        : 'bg-white/30'
                  } shadow-lg ${event.isActive ? 'pulse-glow' : ''}`}>
                    {event.isCompleted ? <CheckCircle size={20} className="text-white" /> : event.icon}
                  </div>
                </div>
                
                {/* Mobile Timeline Point (left-aligned) */}
                <div className="absolute left-6 transform -translate-x-1/2 md:hidden" 
                  style={{ top: `${index * 180 + 24}px` }}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${
                    event.isActive 
                      ? 'bg-neon-purple' 
                      : event.isCompleted 
                        ? 'bg-neon-green' 
                        : 'bg-white/30'
                  } shadow-lg ${event.isActive ? 'pulse-glow' : ''}`}>
                    {event.isCompleted ? <CheckCircle size={16} className="text-white" /> : 
                      <div className="scale-75">{event.icon}</div>}
                  </div>
                </div>
                
                {/* Desktop: Alternating Timeline Event */}
                <div className="hidden md:block" style={{ marginTop: index > 0 ? '100px' : '0' }}>
                  <TimelineEvent {...event} />
                </div>
                
                {/* Mobile: All events on the right side */}
                <div className="md:hidden mb-12 pl-16" style={{ marginTop: index > 0 ? '50px' : '0' }}>
                  <div className={`relative p-5 rounded-lg glass-card-hover border transition-all duration-300 ${
                    event.isActive 
                      ? 'bg-neon-purple/10 border-neon-purple/30' 
                      : event.isCompleted 
                        ? 'bg-black/10 border-neon-green/20' 
                        : 'bg-black/10 border-white/5'
                  }`}>
                    <div className="flex flex-col mb-2">
                      <h3 className={`text-lg font-semibold ${event.isActive ? 'text-white' : 'text-white/90'}`}>
                        {event.title}
                      </h3>
                      <div className="flex items-center text-xs mt-1 text-white/70">
                        <Calendar size={12} className="mr-1" />
                        <span className="mr-2">{event.date}</span>
                        <Clock size={12} className="mr-1" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <p className={`text-xs ${event.isActive ? 'text-white/80' : 'text-white/70'}`}>
                      {event.description}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
