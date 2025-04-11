
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ResumeDownloadButton } from "@/components/ResumeContent";
import { 
  Award, 
  Calendar, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ArrowDown, 
  Star,
  Trophy
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 bg-card/50 hex-grid relative">
          <div className="circle-bg left-1/4 bottom-1/4 opacity-30"></div>
          <div className="circle-bg right-1/3 top-1/3 opacity-30"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 cyber-text-glow">
                  Malila Nyamai
                </h1>
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl text-primary">Cybersecurity Analyst</h2>
                  <p className="text-xl text-foreground/80">Incident Response Specialist | Threat Intelligence Expert</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <span>Juja, Kiambu, Kenya</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-2" />
                    <span>nyamabigjoash@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-2" />
                    <span>0745806761</span>
                  </div>
                </div>
                
                <div className="space-x-3">
                  <ResumeDownloadButton />
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg cyber-card">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Briefcase className="h-5 w-5 text-primary mr-2" />
                  Professional Summary
                </h3>
                <p className="text-foreground/80">
                  Results-driven Cybersecurity Analyst and IT Consultant with 2+ years of experience in threat detection, 
                  incident response, and AI data annotation. Skilled in vulnerability assessment, threat intelligence, and 
                  security remediation. Certified in CCNA, Generative AI (SAP), and cybersecurity. Currently pursuing a BSc 
                  in Information Technology with hands-on expertise in Oracle Database, PHP, and CRM systems. Adept at 
                  translating technical risks into actionable solutions for businesses.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <button className="animate-bounce bg-transparent text-primary">
                <ArrowDown className="h-8 w-8" />
                <span className="sr-only">Scroll down</span>
              </button>
            </div>
          </div>
        </section>
        
        {/* Experience Timeline Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold cyber-text-glow mb-2">Career Journey</h2>
              <div className="w-16 h-1 bg-primary rounded mb-6"></div>
              <p className="text-center text-foreground/80 max-w-2xl">
                A timeline of my professional development and achievements.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto relative">
              {/* Timeline center line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {/* Item 1 */}
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex items-center order-1 md:w-5/12">
                    <div className="hidden md:block w-5/12"></div>
                    <div className="z-20">
                      <div className="bg-primary flex items-center justify-center w-8 h-8 rounded-full">
                        <Calendar className="text-black h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <div className="md:order-1 md:w-5/12 cyber-card p-6 shadow-xl ml-8 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">Freelance IT Consultant</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="outline" className="border-primary/50 text-primary">
                        Malila Tech Consultancies
                      </Badge>
                      <div className="flex items-center text-xs text-foreground/70">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        April 2023 - Present
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80">
                      Providing IT consultancy services with a focus on cybersecurity, including penetration testing, 
                      security audits, and IT infrastructure recommendations.
                    </p>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex items-center order-1 md:w-5/12 justify-end">
                    <div className="cyber-card p-6 shadow-xl mr-8 md:mr-0">
                      <h3 className="text-xl font-bold mb-2">Image Annotator</h3>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="outline" className="border-primary/50 text-primary">
                          Remotasks
                        </Badge>
                        <div className="flex items-center text-xs text-foreground/70">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          June 2021 - April 2024
                        </div>
                      </div>
                      <p className="text-sm text-foreground/80">
                        Applied skills in data annotation, quality assurance, and image processing 
                        to support various AI and machine learning projects.
                      </p>
                    </div>
                    <div className="z-20">
                      <div className="bg-primary flex items-center justify-center w-8 h-8 rounded-full">
                        <Calendar className="text-black h-4 w-4" />
                      </div>
                    </div>
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                  <div className="flex items-center order-1 md:w-5/12">
                    <div className="hidden md:block w-5/12"></div>
                    <div className="z-20">
                      <div className="bg-primary flex items-center justify-center w-8 h-8 rounded-full">
                        <Calendar className="text-black h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <div className="md:order-1 md:w-5/12 cyber-card p-6 shadow-xl ml-8 md:ml-0">
                    <h3 className="text-xl font-bold mb-2">IT Attaché</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="outline" className="border-primary/50 text-primary">
                        JKUAT
                      </Badge>
                      <div className="flex items-center text-xs text-foreground/70">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        September 2023 - November 2023
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80">
                      Assisted in IT infrastructure management, network security implementation, 
                      and technical support in a university environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Showcase */}
        <section className="py-16 bg-card/50 hex-grid">
          <div className="circle-bg left-1/4 top-1/4 opacity-30"></div>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold cyber-text-glow mb-2">Featured Projects</h2>
              <div className="w-16 h-1 bg-primary rounded mb-6"></div>
              <p className="text-center text-foreground/80 max-w-2xl">
                A selection of my cybersecurity and development projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                title="Network Vulnerability Scanner"
                description="Developed a custom vulnerability scanner for small business networks using Python and open source security tools."
                tags={["Python", "Cybersecurity", "Network Security"]}
                image="/placeholder.svg"
                demoLink="#"
                repoLink="#"
              />
              
              <ProjectCard 
                title="Blockchain Identity Verification"
                description="Created a decentralized identity verification system using Ethereum blockchain technology for secure authentication."
                tags={["Solidity", "Ethereum", "Web3.js"]}
                image="/placeholder.svg"
                demoLink="#"
                repoLink="#"
              />
              
              <ProjectCard 
                title="Secure File Sharing Application"
                description="Built an end-to-end encrypted file sharing web application with zero-knowledge architecture."
                tags={["React", "Node.js", "Cryptography"]}
                image="/placeholder.svg"
                demoLink="#"
                repoLink="#"
              />
            </div>
          </div>
        </section>
        
        {/* Case Studies */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold cyber-text-glow mb-2">Case Studies</h2>
              <div className="w-16 h-1 bg-primary rounded mb-6"></div>
              <p className="text-center text-foreground/80 max-w-2xl">
                In-depth analysis of cybersecurity challenges I've solved.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 cyber-card p-8">
                <h3 className="text-2xl font-bold mb-4">Small Business Security Audit</h3>
                <div className="mb-4">
                  <Badge className="mb-2 mr-2 bg-primary/20 text-primary border-primary/30">Security Assessment</Badge>
                  <Badge className="mb-2 mr-2 bg-primary/20 text-primary border-primary/30">Risk Mitigation</Badge>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Challenge</h4>
                    <p className="text-foreground/80">
                      A local e-commerce business experienced repeated security breaches, compromising customer data and damaging their reputation.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Approach</h4>
                    <p className="text-foreground/80">
                      Conducted a comprehensive security audit, identified vulnerabilities in their web application, network infrastructure, and employee practices.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Solution</h4>
                    <p className="text-foreground/80">
                      Implemented a layered security strategy including web application firewall, network segmentation, encryption for sensitive data, and staff security training.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Results</h4>
                    <p className="text-foreground/80">
                      Zero security incidents in the 18 months following implementation, PCI DSS compliance achieved, and customer trust restored.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-card/50 hex-grid">
          <div className="circle-bg right-1/4 bottom-1/4 opacity-30"></div>
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold cyber-text-glow mb-2">Client Testimonials</h2>
              <div className="w-16 h-1 bg-primary rounded mb-6"></div>
              <p className="text-center text-foreground/80 max-w-2xl">
                What clients and colleagues have to say about my work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <TestimonialCard
                quote="Malila's expertise in cybersecurity proved invaluable to our organization. His thorough security assessment identified vulnerabilities we weren't aware of, and his recommendations were practical and effective."
                name="Sarah Johnson"
                position="IT Director"
                company="TechSolutions Kenya"
                image="/placeholder.svg"
              />
              
              <TestimonialCard
                quote="Working with Malila on our network security project was a great experience. His technical knowledge combined with excellent communication skills made complex security concepts accessible to our entire team."
                name="Michael Ochieng"
                position="CTO"
                company="DataSafe Solutions"
                image="/placeholder.svg"
              />
            </div>
          </div>
        </section>
        
        {/* Achievements */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold cyber-text-glow mb-2">Achievements & Awards</h2>
              <div className="w-16 h-1 bg-primary rounded mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="cyber-card p-6">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-1">Top Performer</h3>
                    <p className="text-sm text-foreground/80">
                      Recognized as top performer in the Educhain Regional Hackathon (2024).
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="cyber-card p-6">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-1">Excellence Award</h3>
                    <p className="text-sm text-foreground/80">
                      Received excellence award for academic performance at Zetech University (2023).
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="cyber-card p-6">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-1">Certification Achievement</h3>
                    <p className="text-sm text-foreground/80">
                      Completed CCNA certification with distinction scores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
