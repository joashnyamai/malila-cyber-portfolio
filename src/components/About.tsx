
import React from "react";
import { Shield, Lock, Database, Server, Code, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-3 cyber-text-glow">About Me</h2>
          <div className="w-16 h-1 bg-cyber-primary rounded mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="cyber-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-cyber-secondary">Professional Profile</h3>
            <p className="text-foreground/80 mb-4">
              I am a Freelance IT Consultant and Cybersecurity Analyst, with a passion for identifying, analyzing, and mitigating cyber threats. With experience in the cybersecurity domain, I specialize in incident response and threat intelligence.
            </p>
            <p className="text-foreground/80 mb-4">
              As an Incident Response Specialist and Threat Intelligence Expert, I excel in proactively detecting and responding to security incidents, safeguarding critical systems and data from malicious actors. I leverage cutting-edge tools and techniques to conduct thorough incident investigations, uncover the root causes of security breaches, and implement effective containment and remediation strategies.
            </p>
            <p className="text-foreground/80">
              I also monitor the threat landscape, analyze emerging trends, and share actionable intelligence with stakeholders, enabling them to make informed decisions and fortify their defensive posture against evolving cyber threats.
            </p>
          </div>
          
          <div className="flex flex-col space-y-6">
            <Card className="cyber-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyber-secondary">Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-cyber-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Penetration Testing</span>
                  </div>
                  <div className="flex items-start">
                    <Lock className="h-5 w-5 text-cyber-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Security Auditing</span>
                  </div>
                  <div className="flex items-start">
                    <Database className="h-5 w-5 text-cyber-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Data Protection</span>
                  </div>
                  <div className="flex items-start">
                    <Server className="h-5 w-5 text-cyber-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Infrastructure Security</span>
                  </div>
                  <div className="flex items-start">
                    <Code className="h-5 w-5 text-cyber-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Secure Development</span>
                  </div>
                  <div className="flex items-start">
                    <Activity className="h-5 w-5 text-cyber-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">Threat Monitoring</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cyber-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-cyber-secondary">Contact Information</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-[80px_1fr] items-center">
                    <span className="text-sm font-medium text-cyber-primary">Email:</span>
                    <a href="mailto:nyamaibigjoash@gmail.com" className="text-sm hover:text-cyber-secondary transition-colors">nyamaibigjoash@gmail.com</a>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] items-center">
                    <span className="text-sm font-medium text-cyber-primary">Alt Email:</span>
                    <a href="mailto:mallybiggy86@gmail.com" className="text-sm hover:text-cyber-secondary transition-colors">mallybiggy86@gmail.com</a>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] items-center">
                    <span className="text-sm font-medium text-cyber-primary">Phone:</span>
                    <a href="tel:+254745806761" className="text-sm hover:text-cyber-secondary transition-colors">0745806761</a>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] items-center">
                    <span className="text-sm font-medium text-cyber-primary">LinkedIn:</span>
                    <a href="https://www.linkedin.com/in/malila-nyamai-0b2711221" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-cyber-secondary transition-colors truncate">linkedin.com/in/malila-nyamai-0b2711221</a>
                  </div>
                  <div className="grid grid-cols-[80px_1fr] items-center">
                    <span className="text-sm font-medium text-cyber-primary">Location:</span>
                    <span className="text-sm">Juja, Kiambu, Kenya</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
