
import React from "react";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-primary/30 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <div className="text-primary font-bold text-xl cyber-text-glow">MN</div>
            <span className="text-lg font-medium">Malila Nyamai</span>
          </div>
          
          <div className="flex space-x-4 mb-6">
            <a 
              href="https://www.linkedin.com/in/malila-nyamai-0b2711221/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:nyamaibigjoash@gmail.com" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="tel:+254745806761" 
              className="text-foreground/70 hover:text-primary transition-colors"
              aria-label="Phone"
            >
              <Globe className="h-5 w-5" />
            </a>
          </div>
          
          <div className="text-center text-sm text-foreground/60">
            <p className="mb-2">Cybersecurity Analyst | Blockchain Developer & Enthusiast | Incident Response Specialist</p>
            <p>&copy; {currentYear} Malila Nyamai. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
