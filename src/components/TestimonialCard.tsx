
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  position,
  company,
  image = "/placeholder.svg",
}) => {
  return (
    <Card className="cyber-card">
      <CardContent className="p-6">
        <div className="flex mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
            <MessageSquare className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="italic text-foreground/90 mb-4">"{quote}"</p>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                <img 
                  src={image} 
                  alt={name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">{name}</h4>
                <p className="text-xs text-foreground/70">{position}, {company}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
