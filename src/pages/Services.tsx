
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { 
  ShieldCheck, 
  Code, 
  Server, 
  Database, 
  Laptop, 
  FileDigit, 
  ArrowRight, 
  Bitcoin, 
  Lock,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Network Security",
      icon: <Server className="h-12 w-12 text-cyber-primary" />,
      description: "Protect your network infrastructure with our advanced security solutions designed to detect and prevent unauthorized access.",
      href: "/services/network-security"
    },
    {
      title: "Web Application Security",
      icon: <Globe className="h-12 w-12 text-cyber-primary" />,
      description: "Secure your web applications against common vulnerabilities like XSS, CSRF, SQL injection, and more.",
      href: "/services/web-security"
    },
    {
      title: "Cloud Security",
      icon: <Database className="h-12 w-12 text-cyber-primary" />,
      description: "Implement robust security measures for your cloud infrastructure, ensuring data protection across all environments.",
      href: "/services/cloud-security"
    },
    {
      title: "Endpoint Protection",
      icon: <Laptop className="h-12 w-12 text-cyber-primary" />,
      description: "Comprehensive endpoint security to guard your devices against malware, ransomware, and other threats.",
      href: "/services/endpoint-protection"
    },
    {
      title: "Security Auditing",
      icon: <FileDigit className="h-12 w-12 text-cyber-primary" />,
      description: "Thorough security assessments to identify vulnerabilities in your systems before they can be exploited.",
      href: "/services/security-auditing"
    },
    {
      title: "Blockchain Security",
      icon: <Bitcoin className="h-12 w-12 text-cyber-primary" />,
      description: "Specialized security services for blockchain applications, smart contracts, and cryptocurrency implementations.",
      href: "/services/blockchain-security"
    },
    {
      title: "Secure Development",
      icon: <Code className="h-12 w-12 text-cyber-primary" />,
      description: "Implement secure coding practices and DevSecOps to build security into your software from the ground up.",
      href: "/services/secure-development"
    },
    {
      title: "Incident Response",
      icon: <ShieldCheck className="h-12 w-12 text-cyber-primary" />,
      description: "Rapid response to security incidents with a focus on containment, eradication, and recovery to minimize damage.",
      href: "/services/incident-response"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="py-12 md:py-20 relative hex-grid">
          <div className="circle-bg left-1/4 top-1/3"></div>
          <div className="circle-bg right-1/4 bottom-1/3"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold cyber-text-glow mb-6">
                Cybersecurity Services
              </h1>
              <p className="text-lg text-foreground/80">
                Comprehensive protection for your digital assets with our advanced cybersecurity solutions.
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {services.map((service, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="cyber-card h-full flex flex-col">
                    <CardHeader>
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                      <CardDescription className="text-foreground/70">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto pt-4">
                      <Button 
                        className="w-full bg-cyber-primary hover:bg-cyber-accent text-white group"
                        onClick={() => window.location.href = service.href}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-16 text-center">
              <p className="text-xl font-semibold cyber-text-glow mb-6">
                Not sure what you need? Contact us for a free consultation.
              </p>
              <Button 
                className="bg-cyber-primary hover:bg-cyber-accent text-white border border-primary/50 cyber-glow"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) window.location.href = '/#contact';
                }}
              >
                <Lock className="mr-2 h-5 w-5" />
                Get Security Assessment
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
