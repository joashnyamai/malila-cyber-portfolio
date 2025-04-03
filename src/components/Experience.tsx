
import React from "react";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  description,
}) => {
  return (
    <div className="mb-8 relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-cyber-primary/80 before:via-cyber-primary/30 before:to-transparent">
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-background border-2 border-cyber-primary"></div>
      
      <h3 className="text-xl font-bold text-cyber-secondary mb-1">{title}</h3>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <Badge variant="outline" className="border-cyber-primary/50 text-cyber-primary">
          {company}
        </Badge>
        <div className="flex items-center text-xs text-foreground/70">
          <MapPinIcon className="h-3.5 w-3.5 mr-1" />
          {location}
        </div>
        <div className="flex items-center text-xs text-foreground/70">
          <CalendarIcon className="h-3.5 w-3.5 mr-1" />
          {period}
        </div>
      </div>
      {description && <p className="text-sm text-foreground/80">{description}</p>}
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center mb-3">
            <BriefcaseIcon className="text-cyber-primary mr-2 h-6 w-6" />
            <h2 className="text-3xl font-bold cyber-text-glow">Professional Experience</h2>
          </div>
          <div className="w-16 h-1 bg-cyber-primary rounded mb-6"></div>
          <p className="text-center text-foreground/80 max-w-2xl">
            My professional journey and experience in the cybersecurity industry.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ExperienceItem 
            title="Freelance Information Technology Consultant"
            company="Malila Tech Consultancies"
            location="Kenya"
            period="April 2023 - Present (2 years 1 month)"
            description="Providing IT consultancy services with a focus on cybersecurity, including penetration testing, security audits, and IT infrastructure recommendations."
          />
          
          <ExperienceItem 
            title="Image Annotator"
            company="Remotasks"
            location="Nairobi, Kenya"
            period="June 2021 - April 2024 (2 years 11 months)"
            description="Applied skills in data annotation, quality assurance, and image processing to support various AI and machine learning projects."
          />
          
          <ExperienceItem 
            title="IT Attaché"
            company="Jomo Kenyatta University of Agriculture and Technology (JKUAT)"
            location="Juja, Kiambu, Kenya"
            period="September 2023 - November 2023 (3 months)"
            description="Assisted in IT infrastructure management, network security implementation, and technical support in a university environment."
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
