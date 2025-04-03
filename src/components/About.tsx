
import React from "react";
import { Shield, Lock, Database, Server, Code, Activity, Bitcoin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative hex-grid">
      <div className="circle-bg left-1/3 top-1/4 opacity-50"></div>
      <div className="circle-bg right-1/4 bottom-1/3 opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-3 cyber-text-glow">WHICH SERVICE I PROVIDE</h2>
          <div className="w-16 h-1 bg-primary rounded mb-6"></div>
          <p className="text-center text-foreground/80 max-w-2xl">
            I support my clients as a cybersecurity analyst & frontend web developer by identifying and resolving a broad range of digital security concerns.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="service-card">
            <div className="flex items-start mb-4">
              <Shield className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-secondary">Web Security</h3>
            </div>
            <p className="text-sm text-foreground/80">
              I handle comprehensive web security audits, identifying vulnerabilities in web applications, websites, and e-commerce platforms.
            </p>
          </div>
          
          <div className="service-card">
            <div className="flex items-start mb-4">
              <Database className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-secondary">Database Security</h3>
            </div>
            <p className="text-sm text-foreground/80">
              Secure your critical data with robust database security measures and encryption protocols to prevent unauthorized access.
            </p>
          </div>
          
          <div className="service-card">
            <div className="flex items-start mb-4">
              <Lock className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-secondary">Identifying Threats</h3>
            </div>
            <p className="text-sm text-foreground/80">
              I identify potential security threats and vulnerabilities before they can be exploited by malicious actors.
            </p>
          </div>
          
          <div className="service-card">
            <div className="flex items-start mb-4">
              <Server className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-secondary">Network Security</h3>
            </div>
            <p className="text-sm text-foreground/80">
              Implementing comprehensive network security measures to protect organizational infrastructure from unauthorized access.
            </p>
          </div>
          
          <div className="service-card">
            <div className="flex items-start mb-4">
              <Code className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-secondary">Frontend Development</h3>
            </div>
            <p className="text-sm text-foreground/80">
              Creating responsive, modern web applications with React, TypeScript and other cutting-edge frontend technologies.
            </p>
          </div>
          
          <div className="service-card">
            <div className="flex items-start mb-4">
              <Bitcoin className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-secondary">Blockchain Development</h3>
            </div>
            <p className="text-sm text-foreground/80">
              Building decentralized applications, smart contracts, and blockchain solutions with a focus on security and efficiency.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="cyber-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-secondary">Professional Profile</h3>
            <p className="text-foreground/80 mb-4">
              I am a Freelance IT Consultant, Cybersecurity Analyst, Frontend Web Developer and Blockchain Developer with a passion for identifying, analyzing, and mitigating cyber threats. With experience in the cybersecurity domain, I specialize in incident response, threat intelligence, web technologies, and blockchain development.
            </p>
            <p className="text-foreground/80">
              I monitor the threat landscape, analyze emerging trends, and share actionable intelligence with stakeholders, enabling them to make informed decisions and fortify their defensive posture against evolving cyber threats. As a Frontend Web Developer and Blockchain Developer & Enthusiast, I'm passionate about creating secure, responsive web applications and decentralized blockchain solutions.
            </p>
          </div>
          
          <Card className="cyber-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Contact Information</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-[80px_1fr] items-center">
                  <span className="text-sm font-medium text-primary">Email:</span>
                  <a href="mailto:nyamaibigjoash@gmail.com" className="text-sm hover:text-secondary transition-colors">nyamaibigjoash@gmail.com</a>
                </div>
                <div className="grid grid-cols-[80px_1fr] items-center">
                  <span className="text-sm font-medium text-primary">Alt Email:</span>
                  <a href="mailto:mallybiggy86@gmail.com" className="text-sm hover:text-secondary transition-colors">mallybiggy86@gmail.com</a>
                </div>
                <div className="grid grid-cols-[80px_1fr] items-center">
                  <span className="text-sm font-medium text-primary">Phone:</span>
                  <a href="tel:+254745806761" className="text-sm hover:text-secondary transition-colors">0745806761</a>
                </div>
                <div className="grid grid-cols-[80px_1fr] items-center">
                  <span className="text-sm font-medium text-primary">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/malila-nyamai-0b2711221/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-secondary transition-colors truncate">linkedin.com/in/malila-nyamai-0b2711221</a>
                </div>
                <div className="grid grid-cols-[80px_1fr] items-center">
                  <span className="text-sm font-medium text-primary">GitHub:</span>
                  <a href="https://github.com/joashnyamai" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-secondary transition-colors">github.com/joashnyamai</a>
                </div>
                <div className="grid grid-cols-[80px_1fr] items-center">
                  <span className="text-sm font-medium text-primary">Location:</span>
                  <span className="text-sm">Juja, Kiambu, Kenya</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
