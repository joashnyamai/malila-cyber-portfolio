
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

interface EducationItemProps {
  institution: string;
  degree: string;
  field: string;
  period: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  institution,
  degree,
  field,
  period,
}) => {
  return (
    <Card className="cyber-card">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-3">
          <div className="flex items-start">
            <GraduationCap className="h-5 w-5 text-cyber-primary mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-cyber-secondary">{institution}</h3>
              <p className="text-sm text-foreground/80 mb-2">{degree} - {field}</p>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-cyber-primary/80 mr-1.5" />
                <span className="text-xs text-foreground/70">{period}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface CertificationItemProps {
  name: string;
  issuer?: string;
  date?: string;
}

const CertificationItem: React.FC<CertificationItemProps> = ({
  name,
  issuer,
  date,
}) => {
  return (
    <div className="flex items-start mb-4">
      <Award className="h-5 w-5 text-cyber-primary mr-3 mt-0.5 flex-shrink-0" />
      <div>
        <h4 className="text-base font-medium">{name}</h4>
        {(issuer || date) && (
          <p className="text-xs text-foreground/70">
            {issuer && <span>{issuer}</span>}
            {issuer && date && <span> • </span>}
            {date && <span>{date}</span>}
          </p>
        )}
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-3 cyber-text-glow">Education & Certifications</h2>
          <div className="w-16 h-1 bg-cyber-primary rounded mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <GraduationCap className="h-5 w-5 text-cyber-primary mr-2" />
              Academic Education
            </h3>
            
            <EducationItem 
              institution="Zetech University"
              degree="Bachelor of Science (BS)"
              field="Information Technology"
              period="January 2023 - December 2025 (Expected)"
            />
            
            <EducationItem 
              institution="Zetech University"
              degree="Diploma"
              field="Computer Software Engineering"
              period="January 2022 - November 2023"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="h-5 w-5 text-cyber-primary mr-2" />
              Certifications
            </h3>
            
            <Card className="cyber-card p-6">
              <div className="space-y-5">
                <CertificationItem 
                  name="CCNA: Enterprise Networking, Security, and Automation"
                  issuer="Cisco"
                />
                
                <CertificationItem 
                  name="Generative AI at SAP Q1 Masterclass"
                  issuer="SAP"
                />
                
                <CertificationItem 
                  name="The Complete Cyber Security Course: Hackers Exposed!"
                  issuer="Udemy"
                />
                
                <CertificationItem 
                  name="Cyberthreats by Malware"
                  issuer="Cybersecurity Training"
                />
                
                <CertificationItem 
                  name="Responsive Web Design"
                  issuer="freeCodeCamp"
                />
              </div>
            </Card>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="h-5 w-5 text-cyber-primary mr-2" />
                Top Skills
              </h3>
              
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/30 hover:bg-cyber-primary/30">Penetration Testing</Badge>
                <Badge className="bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/30 hover:bg-cyber-primary/30">Online Consultancy</Badge>
                <Badge className="bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/30 hover:bg-cyber-primary/30">WordPress</Badge>
                <Badge className="bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/30 hover:bg-cyber-primary/30">Security Analysis</Badge>
                <Badge className="bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/30 hover:bg-cyber-primary/30">Incident Response</Badge>
                <Badge className="bg-cyber-primary/20 text-cyber-primary border border-cyber-primary/30 hover:bg-cyber-primary/30">Threat Intelligence</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
