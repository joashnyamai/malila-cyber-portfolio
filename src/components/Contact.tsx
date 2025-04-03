
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send, Linkedin, ChevronRight } from "lucide-react";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 hex-grid">
      <div className="circle-bg left-1/4 top-1/4 opacity-30"></div>
      <div className="circle-bg right-1/3 bottom-1/3 opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-3 cyber-text-glow">LET'S WORK TOGETHER</h2>
          <div className="w-16 h-1 bg-primary rounded mb-6"></div>
          <p className="text-center text-foreground/80 max-w-2xl">
            Have a project in mind or need cybersecurity consultation? Let's connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="cyber-card p-6">
            <h3 className="text-xl font-semibold mb-6 text-secondary">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Email</h4>
                  <a 
                    href="mailto:nyamaibigjoash@gmail.com" 
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    nyamaibigjoash@gmail.com
                  </a>
                  <a 
                    href="mailto:mallybiggy86@gmail.com" 
                    className="text-sm text-foreground/80 hover:text-primary transition-colors block mt-1"
                  >
                    mallybiggy86@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Phone</h4>
                  <a 
                    href="tel:+254745806761" 
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    0745806761
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Location</h4>
                  <p className="text-sm text-foreground/80">Juja, Kiambu, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/malila-nyamai-0b2711221" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    linkedin.com/in/malila-nyamai-0b2711221
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cyber-card p-6">
            <h3 className="text-xl font-semibold mb-6 text-secondary">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background/80 border-primary/30 focus:border-primary focus:ring-primary/20"
                  required
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background/80 border-primary/30 focus:border-primary focus:ring-primary/20"
                  required
                />
              </div>
              
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background/80 border-primary/30 focus:border-primary focus:ring-primary/20"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[120px] bg-background/80 border-primary/30 focus:border-primary focus:ring-primary/20"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-accent text-white border border-primary/50 cyber-glow group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
