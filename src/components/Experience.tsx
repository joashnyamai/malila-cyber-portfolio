import React from "react";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon, CalendarIcon, MapPinIcon, Shield } from "lucide-react";

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
    <div className="service-card mb-8">
      <div className="flex items-start">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
          <Shield className="h-5 w-5 text-primary" />
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-secondary mb-1">{title}</h3>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge variant="outline" className="border-primary/50 text-primary">
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
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-card/50 hex-grid">
      <div className="circle-bg left-1/4 bottom-1/4 opacity-30"></div>
      <div className="circle-bg right-1/3 top-1/3 opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center mb-3">
            <BriefcaseIcon className="text-primary mr-2 h-6 w-6" />
            <h2 className="text-3xl font-bold cyber-text-glow">PROFESSIONAL EXPERIENCE</h2>
          </div>
          <div className="w-16 h-1 bg-primary rounded mb-6"></div>
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
          
          <ExperienceItem 
            title="Blockchain Hackathon Participant"
            company="Educhain Regional Hackathon"
            location="Zetech Mangu Campus"
            period="Semester 3, 2024"
            description="Participated in a regional blockchain hackathon, demonstrating skills in blockchain technology and innovative problem-solving."
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
