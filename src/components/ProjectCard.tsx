
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink?: string;
  repoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  image,
  demoLink,
  repoLink,
}) => {
  return (
    <Card className="service-card overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
        <p className="text-sm text-foreground/80 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto mb-4">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              className="bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2 mt-2">
          {demoLink && (
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary/50 text-primary hover:bg-primary/10"
              asChild
            >
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Demo
              </a>
            </Button>
          )}
          
          {repoLink && (
            <Button 
              variant="outline" 
              size="sm" 
              className="border-primary/50 text-primary hover:bg-primary/10"
              asChild
            >
              <a href={repoLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
