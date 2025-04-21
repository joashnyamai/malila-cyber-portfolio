import React from "react";
import { Code, LayoutDashboard, Monitor, Layers, Pencil, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative hex-grid">
      <div className="circle-bg left-1/3 top-1/4 opacity-50"></div>
      <div className="circle-bg right-1/4 bottom-1/3 opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-3 cyber-text-glow">WHAT I DO</h2>
          <div className="w-16 h-1 bg-primary rounded mb-6"></div>
          <p className="text-center text-foreground/80 max-w-2xl">
            I bring ideas to life as a frontend web developer, specializing in modern, scalable, and responsive interfaces.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="service-card">
            <div className="flex items-start mb-4">
              <Code className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-secondary">Modern UI Development</h3>
            </div>
            <p className="text-sm text-foreground/80">
              Building responsive, fast, and beautiful user interfaces with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
          <div className="service-card">
            <div className="flex items-start mb-4">
              <LayoutDashboard className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-secondary">Dashboard Design</h3>
            </div>
            <p className="text-sm text-foreground/80">
              Creating intuitive dashboards and web applications with modern design systems and seamless user experiences.
            </p>
          </div>
          <div className="service-card">
            <div className="flex items-start mb-4">
              <Monitor className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-secondary">Web Animation</h3>
            </div>
            <p className="text-sm text-foreground/80">
              Enhancing websites with interactive animations and polished transitions for engaging web experiences.
            </p>
          </div>
          <div className="service-card">
            <div className="flex items-start mb-4">
              <Layers className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-secondary">Component Architecture</h3>
            </div>
            <p className="text-sm text-foreground/80">
              Developing reusable, scalable component libraries and design systems customized for each project.
            </p>
          </div>
          <div className="service-card">
            <div className="flex items-start mb-4">
              <Pencil className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-secondary">UI/UX Design Collaboration</h3>
            </div>
            <p className="text-sm text-foreground/80">
              Collaborating with designers to ensure pixel-perfect implementation of Figma, XD, or Sketch designs.
            </p>
          </div>
          <div className="service-card">
            <div className="flex items-start mb-4">
              <Globe className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
              <h3 className="text-xl font-semibold text-secondary">Performance & Accessibility</h3>
            </div>
            <p className="text-sm text-foreground/80">
              Optimizing web applications for speed, SEO, and accessibility, ensuring reach for all users.
            </p>
          </div>
        </div>
        
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="cyber-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-secondary">Professional Profile</h3>
            <p className="text-foreground/80 mb-4">
              I'm a passionate Frontend Web Developer with strong skills in JavaScript, React, and TypeScript. I transform concepts into engaging, user-focused web applications by combining clean code with creative design.
            </p>
            <p className="text-foreground/80">
              My approach integrates the latest web standards, accessibility best practices, and modern CSS architecture. I enjoy collaborating with both teams and clients to deliver outstanding user experiences.
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
