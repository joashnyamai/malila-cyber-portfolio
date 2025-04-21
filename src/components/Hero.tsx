
import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowDown, Mail, Linkedin, Github, ChevronRight, FileText, Code } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ResumeDownloadButton } from "./ResumeContent";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3 
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.97] }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden hex-grid">
      {/* Background elements */}
      <div className="pulse-ring" style={{ animationDelay: "0s" }}></div>
      <div className="pulse-ring" style={{ animationDelay: "1s" }}></div>
      <div className="pulse-ring" style={{ animationDelay: "2s" }}></div>
      <div className="circle-bg left-1/4 top-1/4"></div>
      <div className="circle-bg right-1/4 bottom-1/4"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-primary animate-pulse-glow mb-4"
            variants={itemVariants}
          >
            <Code className="h-10 w-10 text-primary" />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight cyber-text-glow">
              Creative <span className="text-cyber-primary">Frontend Web Developer</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Building Modern Web Experiences</h2>
          </motion.div>
          
          <motion.div variants={itemVariants} className="h-10 overflow-hidden">
            <div className="typing-animation inline-block text-xl md:text-2xl text-primary">
              React | TypeScript | UI/UX | CSS | Responsive Design | Web Animations
            </div>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mt-4"
            variants={itemVariants}
          >
            Specializing in crafting beautiful, high-performance, and accessible interfaces for the modern web using cutting-edge frontend technologies.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-8"
            variants={itemVariants}
          >
            <Button 
              className="bg-primary hover:bg-accent text-white border border-primary/50 cyber-glow group" 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Link to="/services">
              <Button 
                variant="outline" 
                className="border-primary/50 text-primary hover:bg-primary/10 group"
              >
                <ShieldCheck className="mr-2 h-5 w-5" />
                Our Services
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 group"
              onClick={() => window.open("https://github.com/joashnyamai", "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 group"
              onClick={() => window.open("https://www.linkedin.com/in/malila-nyamai-0b2711221/", "_blank")}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <ResumeDownloadButton />
          </motion.div>
        </motion.div>
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
