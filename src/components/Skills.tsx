import React from "react";
import { Code, Layers, Pencil, LayoutDashboard, Monitor } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills }) => {
  return (
    <Card className="service-card">
      <CardContent className="p-4">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
            <div className="text-primary">{icon}</div>
          </div>
          <h3 className="text-lg font-semibold text-secondary">{title}</h3>
        </div>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-xs text-foreground/70">{skill.level}%</span>
              </div>
              <Progress 
                value={skill.level} 
                className="h-1.5 bg-muted" 
                indicatorClassName="bg-gradient-to-r from-primary to-secondary cyber-glow" 
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: "HTML5", level: 98 },
    { name: "CSS3/SASS", level: 95 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "React.js", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Responsive Design", level: 98 },
    { name: "Accessibility (a11y)", level: 85 }
  ];

  const frameworkSkills = [
    { name: "Next.js", level: 80 },
    { name: "Redux/State Mgmt", level: 85 },
    { name: "Framer Motion", level: 80 },
    { name: "Shadcn UI/Component Libs", level: 85 }
  ];

  const uiuxSkills = [
    { name: "UI/UX Principles", level: 90 },
    { name: "Figma/XD/Sketch", level: 85 },
    { name: "Web Animation", level: 85 },
    { name: "Prototyping", level: 80 }
  ];

  const toolingSkills = [
    { name: "Git & GitHub", level: 90 },
    { name: "NPM/Yarn", level: 85 },
    { name: "Webpack/Vite", level: 80 }
  ];

  const softSkills = [
    { name: "Team Communication", level: 90 },
    { name: "Client Collaboration", level: 88 },
    { name: "Project Management", level: 80 },
    { name: "Technical Documentation", level: 85 }
  ];

  return (
    <section id="skills" className="py-20 hex-grid">
      <div className="circle-bg left-1/3 top-1/3 opacity-30"></div>
      <div className="circle-bg right-1/4 bottom-1/4 opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-3 cyber-text-glow">FRONTEND SKILLS</h2>
          <div className="w-16 h-1 bg-primary rounded mb-6"></div>
          <p className="text-center text-foreground/80 max-w-2xl">
            My expertise is centered on modern frontend development, web animation, UI/UX, and React ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory 
            title="Frontend Development" 
            icon={<Code className="h-5 w-5" />} 
            skills={frontendSkills} 
          />
          <SkillCategory 
            title="Frameworks & Tooling" 
            icon={<Layers className="h-5 w-5" />} 
            skills={frameworkSkills} 
          />
          <SkillCategory 
            title="UI/UX & Animation" 
            icon={<Monitor className="h-5 w-5" />} 
            skills={uiuxSkills} 
          />
          <SkillCategory 
            title="Development Tools" 
            icon={<LayoutDashboard className="h-5 w-5" />} 
            skills={toolingSkills} 
          />
          <SkillCategory 
            title="Collaboration" 
            icon={<Pencil className="h-5 w-5" />} 
            skills={softSkills} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
