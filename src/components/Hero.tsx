
import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowDown, Mail, Linkedin } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-primary animate-pulse-glow mb-4">
            <ShieldCheck className="h-10 w-10 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight cyber-text-glow">
            Malila Nyamai
          </h1>
          
          <div className="h-10 overflow-hidden">
            <div className="typing-animation inline-block text-xl md:text-2xl text-primary">
              Cybersecurity Analyst | Blockchain Developer & Enthusiast
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mt-4">
            Identifying, analyzing, and mitigating cyber threats to protect critical systems and data from malicious actors.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button className="bg-primary hover:bg-accent text-white border border-primary/50 cyber-glow" onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }}>
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10"
              onClick={() => window.open("https://www.linkedin.com/in/malila-nyamai-0b2711221/", "_blank")}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;
