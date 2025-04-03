
import React from "react";
import { Shield, Database, Globe, Terminal, Server, Code, Bitcoin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <Card className="cyber-card">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-3 text-cyber-primary">{icon}</div>
          <h3 className="text-lg font-semibold text-cyber-secondary">{title}</h3>
        </div>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-xs text-foreground/70">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-1.5 bg-card" indicatorClassName="bg-gradient-to-r from-cyber-primary to-cyber-accent cyber-glow" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Skills: React.FC = () => {
  const securitySkills = [
    { name: "Penetration Testing", level: 95 },
    { name: "Vulnerability Assessment", level: 90 },
    { name: "Incident Response", level: 85 },
    { name: "Security Auditing", level: 80 },
  ];

  const networkSkills = [
    { name: "CCNA: Enterprise Networking", level: 85 },
    { name: "Network Security", level: 90 },
    { name: "Firewall Configuration", level: 80 },
    { name: "VPN Setup & Management", level: 75 },
  ];

  const webSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Responsive Web Design", level: 95 },
  ];

  const technicalSkills = [
    { name: "Linux Systems", level: 85 },
    { name: "Shell Scripting", level: 75 },
    { name: "Python", level: 70 },
    { name: "Kali Linux Tools", level: 90 },
  ];

  const blockchainSkills = [
    { name: "Smart Contract Development", level: 85 },
    { name: "Solidity", level: 80 },
    { name: "Web3.js/Ethers.js", level: 75 },
    { name: "DApp Development", level: 70 },
  ];

  const otherSkills = [
    { name: "Threat Intelligence", level: 90 },
    { name: "Online Consultancy", level: 95 },
    { name: "Technical Documentation", level: 85 },
    { name: "Team Collaboration", level: 80 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-3 cyber-text-glow">Technical Skills</h2>
          <div className="w-16 h-1 bg-cyber-primary rounded mb-6"></div>
          <p className="text-center text-foreground/80 max-w-2xl">
            My expertise spans a wide range of cybersecurity domains, web development, blockchain technologies, and technical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory 
            title="Security Skills" 
            icon={<Shield className="h-5 w-5" />} 
            skills={securitySkills} 
          />
          <SkillCategory 
            title="Network Skills" 
            icon={<Server className="h-5 w-5" />} 
            skills={networkSkills} 
          />
          <SkillCategory 
            title="Web Development" 
            icon={<Globe className="h-5 w-5" />} 
            skills={webSkills} 
          />
          <SkillCategory 
            title="Technical Tools" 
            icon={<Terminal className="h-5 w-5" />} 
            skills={technicalSkills} 
          />
          <SkillCategory 
            title="Blockchain Development" 
            icon={<Bitcoin className="h-5 w-5" />} 
            skills={blockchainSkills} 
          />
          <SkillCategory 
            title="Other Skills" 
            icon={<Code className="h-5 w-5" />} 
            skills={otherSkills} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
