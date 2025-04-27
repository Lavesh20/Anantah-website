import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  Code, 
  FileCheck, 
  Award, 
  Shield, 
  Clock, 
  Check, 
  Lightbulb, 
  Trophy, 
  Calendar, 
  BookOpen,
  Puzzle
} from 'lucide-react';

interface GuidelineItemProps {
  title: string;
  icon: React.ReactNode;
  content: string | React.ReactNode;
  isHighlighted?: boolean;
}

const GuidelineItem: React.FC<GuidelineItemProps> = ({ 
  title, 
  icon, 
  content,
  isHighlighted = false 
}) => {
  return (
    <AccordionItem value={title} className={`fade-in-scroll rounded-lg ${isHighlighted ? 'neon-border bg-black/30' : 'bg-black/20'} mb-4 border border-white/10 transition-all duration-300 hover:border-white/20`}>
      <AccordionTrigger className="px-4 py-3 text-lg font-medium flex items-center">
        <div className="mr-3 p-2 rounded-full bg-neon-purple/20 text-white">
          {icon}
        </div>
        <span>{title}</span>
      </AccordionTrigger>
      <AccordionContent className="px-6 py-4 text-white/80">
        {typeof content === 'string' ? (
          <p>{content}</p>
        ) : (
          content
        )}
      </AccordionContent>
    </AccordionItem>
  );
};

const StepCard: React.FC<{ step: number; title: string; description: string; icon: React.ReactNode; isActive: boolean }> = ({
  step,
  title,
  description,
  icon,
  isActive
}) => {
  return (
    <div className={`p-4 rounded-xl transition-all duration-300 ${isActive ? 'glass-card pulse-glow' : 'glass-card'}`}>
      <div className="flex items-start">
        <div className={`flex items-center justify-center rounded-full w-10 h-10 mr-4 transition-all ${isActive ? 'bg-neon-purple text-white' : 'bg-white/10 text-white/60'}`}>
          {step}
        </div>
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <span className={`mr-2 ${isActive ? 'text-neon-purple' : 'text-white/80'}`}>{icon}</span>
            <h3 className={`font-bold ${isActive ? 'text-white' : 'text-white/80'}`}>{title}</h3>
          </div>
          <p className="text-sm text-white/60">{description}</p>
        </div>
      </div>
    </div>
  );
};

const RoadmapItem: React.FC<{
  title: string;
  icon: React.ReactNode;
  description: string;
  position: 'left' | 'right';
  isLast?: boolean;
}> = ({ title, icon, description, position, isLast = false }) => {
  return (
    <div className="relative mb-8 flex w-full items-center justify-center">
      <div className={`w-1/2 ${position === 'left' ? 'pr-10 text-right' : 'pl-10 text-left'}`}>
        <div className={`glass-card p-4 rounded-xl transition-all duration-300 hover:bg-black/30 hover:border-white/20 ${position === 'left' ? 'ml-auto' : 'mr-auto'}`}>
          <h3 className="text-lg font-bold flex items-center mb-2">
            {position === 'right' && <span className="mr-2">{icon}</span>}
            {title}
            {position === 'left' && <span className="ml-2">{icon}</span>}
          </h3>
          <p className="text-sm text-white/70">{description}</p>
        </div>
      </div>
      
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-neon-purple/20 z-10 border border-neon-purple/50 shadow-[0_0_10px_rgba(139,92,246,0.5)]">
          {icon}
        </div>
        {!isLast && (
          <div className="w-0.5 h-24 bg-gradient-to-b from-neon-purple/70 to-neon-purple/10"></div>
        )}
      </div>
    </div>
  );
};

const Guidelines: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [tabValue, setTabValue] = useState("roadmap");
  
  const guidelinesData: GuidelineItemProps[] = [
    {
      title: "Eligibility",
      icon: <Users size={20} />,
      content: (
        <div className="space-y-2">
          <p>The hackathon is open to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>College students from any university/institution</li>
            <li>Participants must be at least 18 years of age</li>
          </ul>
        </div>
      ),
      isHighlighted: true
    },
    {
      title: "Team Formation",
      icon: <Users size={20} />,
      content: (
        <div className="space-y-2">
          <p>Teams must adhere to the following rules:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>4 members per team</li>
            <li>1 female member mandatory</li>
            <li>Cross-institutional teams are allowed and encouraged</li>
            <li>Each participant can be part of only one team</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Technology Stack",
      icon: <Code size={20} />,
      content: (
        <div className="space-y-2">
          <p>Participants are allowed to use:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Any programming language</li>
            <li>Open-source libraries and frameworks</li>
            <li>APIs and web services with proper attribution</li>
            <li>AI tools for ideation and assistance (with disclosure)</li>
          </ul>
          <p className="mt-3 font-semibold">Restricted:</p>
          <ul className="list-disc pl-5 space-y-1 text-red-400">
            <li>Pre-built/existing projects</li>
            <li>Proprietary software without proper licensing</li>
            <li>Paid services without disclosure</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Submission Requirements",
      icon: <FileCheck size={20} />,
      content: (
        <div className="space-y-2">
          <p>Your final submission must include:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Source code repository (GitHub/GitLab link)</li>
            <li>Working demo (video or live link)</li>
            <li>Presentation deck (PDF format)</li>
            <li>Project documentation</li>
            <li>Team information</li>
          </ul>
        </div>
      ),
      isHighlighted: true
    },
    {
      title: "Judging Criteria",
      icon: <Award size={20} />,
      content: (
        <div className="space-y-2">
          <p>Projects will be evaluated based on:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Innovation & Creativity (25%)</span>: Uniqueness and originality of the solution</li>
            <li><span className="font-semibold">Technical Complexity (25%)</span>: Advanced implementations and technical challenges overcome</li>
            <li><span className="font-semibold">Practicality & Impact (20%)</span>: Real-world applicability and potential impact</li>
            <li><span className="font-semibold">Execution & Completeness (20%)</span>: How finished and polished the solution is</li>
            <li><span className="font-semibold">Presentation & Demo (10%)</span>: Quality of presentation and demonstration</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Code of Conduct",
      icon: <Shield size={20} />,
      content: (
        <div className="space-y-2">
          <p>All participants must adhere to our code of conduct:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>No plagiarism or intellectual property infringement</li>
            <li>No discrimination, harassment, or offensive behavior</li>
            <li>Ethical hacking practices only (with disclosure)</li>
            <li>Respect for all participants, mentors, and judges</li>
            <li>Compliance with all hackathon rules and deadlines</li>
          </ul>
          <p className="mt-2 text-sm italic">Violation of the code of conduct may result in disqualification</p>
        </div>
      ),
      isHighlighted: true
    },
  ];

  const stepData = [
    { 
      step: 1, 
      title: "Register Your Team", 
      description: "Create an account and register your team of 2-4 members.", 
      icon: <Users size={18} /> 
    },
    { 
      step: 2, 
      title: "Choose Your Track", 
      description: "Select one of our hackathon tracks for your project.", 
      icon: <Puzzle size={18} /> 
    },
    { 
      step: 3, 
      title: "Develop Your Solution", 
      description: "Build your project during the 48-hour hackathon period.", 
      icon: <Code size={18} /> 
    },
    { 
      step: 4, 
      title: "Submit Your Project", 
      description: "Submit your code, demo, and presentation before the deadline.", 
      icon: <FileCheck size={18} /> 
    },
    { 
      step: 5, 
      title: "Present & Win", 
      description: "Present to judges and win amazing prizes!", 
      icon: <Trophy size={18} /> 
    }
  ];
  
  const roadmapData = [
    {
      title: "Read Guidelines",
      icon: <BookOpen size={18} />,
      description: "Review all hackathon rules and guidelines before registering."
    },
    {
      title: "Form a Team",
      icon: <Users size={18} />,
      description: "Find teammates or join the team-formation event to build your dream team."
    },
    {
      title: "Register",
      icon: <Calendar size={18} />,
      description: "Complete your team registration before the deadline."
    },
    {
      title: "Prepare",
      icon: <Lightbulb size={18} />,
      description: "Brainstorm ideas and prepare your development environment."
    },
    {
      title: "Develop",
      icon: <Code size={18} />,
      description: "Build your solution during the hackathon period with mentor support."
    },
    {
      title: "Submit",
      icon: <FileCheck size={18} />,
      description: "Submit your project with all required deliverables before the deadline."
    },
    {
      title: "Win Prizes",
      icon: <Trophy size={18} />,
      description: "Present to judges and win exciting prizes and recognition!",
      isLast: true
    }
  ];

  const nextStep = () => {
    if (activeStep < stepData.length) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleTabChange = (value: string) => {
    setTabValue(value);
  };

  return (
    <section id="guidelines" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-dark bg-noise opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-radial from-neon-blue/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <SectionHeading 
          title="Hackathon Guidelines"
          subtitle="Please review these guidelines carefully before registering for Anantah 2025."
          glowColor="blue"
        />
        
        <div className="mt-12">
          <Tabs value={tabValue} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid grid-cols-3 max-w-[600px] mx-auto mb-10 bg-black/30 backdrop-blur-md">
              <TabsTrigger value="roadmap" className="data-[state=active]:bg-neon-purple/20 data-[state=active]:text-white">
                <span className="flex items-center">
                  <Award className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Roadmap</span>
                </span>
              </TabsTrigger>
              <TabsTrigger value="accordion" className="data-[state=active]:bg-neon-purple/20 data-[state=active]:text-white">
                <span className="flex items-center">
                  <BookOpen className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Rules</span>
                </span>
              </TabsTrigger>
              <TabsTrigger value="steps" className="data-[state=active]:bg-neon-purple/20 data-[state=active]:text-white">
                <span className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Steps</span>
                </span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="roadmap" className="focus-visible:outline-none mt-6">
              <div className="relative pb-10">
                {roadmapData.map((item, index) => (
                  <RoadmapItem
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    description={item.description}
                    position={index % 2 === 0 ? "left" : "right"}
                    isLast={item.isLast}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="accordion" className="focus-visible:outline-none mt-6">
              <Accordion type="single" collapsible className="w-full">
                {guidelinesData.map((item, index) => (
                  <GuidelineItem 
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    content={item.content}
                    isHighlighted={item.isHighlighted}
                  />
                ))}
              </Accordion>
            </TabsContent>
            
            <TabsContent value="steps" className="mt-6 focus-visible:outline-none">
              <div className="mb-8">
                <div className="flex justify-between mb-2 text-sm text-white/60">
                  <span>Get Started</span>
                  <span>Complete</span>
                </div>
                <Progress value={(activeStep / stepData.length) * 100} className="h-2 bg-white/10" />
                <div className="flex justify-between mt-1 text-xs text-white/40">
                  <span>Step {activeStep} of {stepData.length}</span>
                  <span>{Math.round((activeStep / stepData.length) * 100)}% Complete</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {stepData.map((step) => (
                  <StepCard
                    key={step.step}
                    step={step.step}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                    isActive={step.step === activeStep}
                  />
                ))}
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={prevStep}
                  disabled={activeStep === 1}
                  className="px-4 py-2 rounded-lg bg-black/30 border border-white/10 text-white/80 hover:bg-black/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Previous
                </button>
                <button
                  onClick={nextStep}
                  disabled={activeStep === stepData.length}
                  className="px-4 py-2 rounded-lg bg-neon-purple/80 text-white hover:bg-neon-purple disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Next Step
                </button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;
