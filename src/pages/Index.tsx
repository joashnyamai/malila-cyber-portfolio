
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Code, Server, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Cyber Security",
      icon: <ShieldCheck className="h-6 w-6 text-cyber-primary" />,
      description: "Comprehensive protection for your digital assets with our advanced security solutions."
    },
    {
      title: "Web Development",
      icon: <Code className="h-6 w-6 text-cyber-primary" />,
      description: "Professional web development services focusing on security and performance."
    },
    {
      title: "Blockchain",
      icon: <Database className="h-6 w-6 text-cyber-primary" />,
      description: "Blockchain development and security services for your decentralized applications."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        
        {/* Services Section - Preview */}
        <section className="py-12 md:py-16 bg-background relative hex-grid">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold cyber-text-glow mb-3">Our Services</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                We offer a range of cybersecurity and development services to protect your digital assets
                and enhance your online presence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="bg-cyber-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-foreground/70 mb-4">{service.description}</p>
                  <Link to="/services" className="text-cyber-primary hover:text-cyber-accent inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/services">
                <Button className="bg-cyber-primary hover:bg-cyber-accent text-white">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
