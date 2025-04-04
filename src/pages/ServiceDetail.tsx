
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { 
  ShieldCheck, 
  Code, 
  Server, 
  Database, 
  Laptop, 
  FileDigit, 
  ArrowRight,
  ArrowLeft,
  Bitcoin,
  Globe,
  Check,
  Shield
} from "lucide-react";

const serviceData = {
  "network-security": {
    title: "Network Security",
    icon: <Server className="h-16 w-16 text-cyber-primary" />,
    description: "Our comprehensive network security services protect your infrastructure against unauthorized access, misuse, modification, or denial of network-accessible resources.",
    features: [
      "Intrusion Detection & Prevention",
      "Firewall Configuration & Management",
      "VPN Solutions",
      "Network Traffic Analysis",
      "DDoS Protection",
      "Network Segmentation"
    ],
    benefits: [
      { text: "24/7 Network Monitoring", value: 100 },
      { text: "Real-time Threat Detection", value: 95 },
      { text: "Automated Response", value: 90 },
      { text: "Performance Optimization", value: 85 }
    ]
  },
  "web-security": {
    title: "Web Application Security",
    icon: <Globe className="h-16 w-16 text-cyber-primary" />,
    description: "We secure your web applications from attacks that could compromise data, users, or the application itself through comprehensive security assessment and protection measures.",
    features: [
      "OWASP Top 10 Vulnerability Protection",
      "Web Application Firewall (WAF)",
      "Secure Authentication Solutions",
      "API Security",
      "Session Management",
      "Content Security Policy Implementation"
    ],
    benefits: [
      { text: "Vulnerability Assessment", value: 100 },
      { text: "Attack Surface Reduction", value: 90 },
      { text: "Secure Development Practices", value: 85 },
      { text: "Compliance Requirements", value: 95 }
    ]
  },
  "cloud-security": {
    title: "Cloud Security",
    icon: <Database className="h-16 w-16 text-cyber-primary" />,
    description: "Secure your cloud infrastructure with our specialized solutions designed to protect data, applications, and infrastructure across public, private, and hybrid cloud environments.",
    features: [
      "Cloud Infrastructure Protection",
      "Data Encryption Solutions",
      "Identity & Access Management",
      "Configuration Assessment",
      "Compliance Monitoring",
      "Cloud Security Posture Management"
    ],
    benefits: [
      { text: "Multi-Cloud Protection", value: 95 },
      { text: "Regulatory Compliance", value: 100 },
      { text: "Data Sovereignty", value: 90 },
      { text: "Cost Optimization", value: 85 }
    ]
  },
  "endpoint-protection": {
    title: "Endpoint Protection",
    icon: <Laptop className="h-16 w-16 text-cyber-primary" />,
    description: "Our endpoint security solutions protect your devices - including laptops, desktops, and mobile devices - from malware, ransomware, and other cyber threats.",
    features: [
      "Advanced Malware Protection",
      "Endpoint Detection & Response (EDR)",
      "Device Control & Management",
      "Application Control",
      "Patch Management",
      "Data Loss Prevention"
    ],
    benefits: [
      { text: "Threat Prevention", value: 95 },
      { text: "Device Management", value: 90 },
      { text: "Remote Security", value: 85 },
      { text: "Encryption Solutions", value: 100 }
    ]
  },
  "security-auditing": {
    title: "Security Auditing",
    icon: <FileDigit className="h-16 w-16 text-cyber-primary" />,
    description: "We provide comprehensive security assessments to identify vulnerabilities in your systems before they can be exploited by malicious actors.",
    features: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "Security Policy Review",
      "Compliance Audits",
      "Risk Assessment",
      "Security Architecture Review"
    ],
    benefits: [
      { text: "Vulnerability Discovery", value: 100 },
      { text: "Regulatory Compliance", value: 95 },
      { text: "Risk Management", value: 90 },
      { text: "Security Best Practices", value: 85 }
    ]
  },
  "blockchain-security": {
    title: "Blockchain Security",
    icon: <Bitcoin className="h-16 w-16 text-cyber-primary" />,
    description: "Our specialized blockchain security services protect your digital assets, smart contracts, and blockchain implementations from exploits and vulnerabilities.",
    features: [
      "Smart Contract Auditing",
      "Cryptocurrency Protection",
      "Consensus Mechanism Security",
      "Wallet Security",
      "DApp Security Assessment",
      "Blockchain Network Security"
    ],
    benefits: [
      { text: "Smart Contract Integrity", value: 95 },
      { text: "Transaction Security", value: 100 },
      { text: "Network Protection", value: 90 },
      { text: "Asset Safeguarding", value: 85 }
    ]
  },
  "secure-development": {
    title: "Secure Development",
    icon: <Code className="h-16 w-16 text-cyber-primary" />,
    description: "We help you implement secure coding practices and DevSecOps methodologies to build security into your software from the ground up.",
    features: [
      "Secure SDLC Implementation",
      "Code Reviews & Analysis",
      "Security Testing Integration",
      "Developer Training",
      "DevSecOps Practices",
      "Threat Modeling"
    ],
    benefits: [
      { text: "Early Vulnerability Detection", value: 95 },
      { text: "Reduced Remediation Costs", value: 90 },
      { text: "Development Efficiency", value: 85 },
      { text: "Secure by Design", value: 100 }
    ]
  },
  "incident-response": {
    title: "Incident Response",
    icon: <ShieldCheck className="h-16 w-16 text-cyber-primary" />,
    description: "Our incident response team provides rapid reaction to security incidents with a focus on containment, eradication, and recovery to minimize damage.",
    features: [
      "24/7 Incident Response",
      "Breach Investigation",
      "Malware Analysis & Removal",
      "Forensic Analysis",
      "Recovery Planning",
      "Post-Incident Reporting"
    ],
    benefits: [
      { text: "Rapid Response", value: 100 },
      { text: "Damage Containment", value: 95 },
      { text: "Evidence Preservation", value: 90 },
      { text: "Business Continuity", value: 85 }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="cyber-card p-8 text-center">
              <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
              <p className="mb-6">The service you're looking for doesn't exist or has been moved.</p>
              <Button 
                className="bg-cyber-primary hover:bg-cyber-accent"
                onClick={() => window.location.href = "/services"}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="py-12 md:py-20 relative hex-grid">
          <div className="circle-bg left-1/4 top-1/3 opacity-30"></div>
          <div className="circle-bg right-1/4 bottom-1/3 opacity-30"></div>
          
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <Link 
                to="/services" 
                className="inline-flex items-center text-cyber-primary hover:text-cyber-accent transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
            </div>
            
            <div className="cyber-card p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
                <div className="p-4 bg-background/30 rounded-xl border border-cyber-primary/30 cyber-glow">
                  {service.icon}
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold cyber-text-glow mb-4">
                    {service.title}
                  </h1>
                  <p className="text-lg text-foreground/80 max-w-3xl">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-2xl font-semibold mb-6 flex items-center">
                    <Shield className="mr-2 h-6 w-6 text-cyber-primary" />
                    Key Features
                  </h2>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-cyber-primary mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-6 flex items-center">
                    <ShieldCheck className="mr-2 h-6 w-6 text-cyber-primary" />
                    Benefits
                  </h2>
                  <div className="space-y-6">
                    {service.benefits.map((benefit, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{benefit.text}</span>
                          <span className="text-xs text-foreground/70">{benefit.value}%</span>
                        </div>
                        <Progress 
                          value={benefit.value} 
                          className="h-1.5 bg-muted" 
                          indicatorClassName="bg-gradient-to-r from-primary to-secondary cyber-glow" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-cyber-primary/30">
                <h2 className="text-2xl font-semibold mb-6">Security Level Customization</h2>
                <p className="mb-6 text-foreground/80">Adjust the security level based on your organization's needs:</p>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Protection Level</span>
                      <span className="text-xs font-mono text-cyber-primary">Advanced</span>
                    </div>
                    <Slider 
                      defaultValue={[75]} 
                      max={100} 
                      step={25} 
                      indicatorClassName="bg-cyber-primary" 
                    />
                    <div className="flex justify-between mt-1 text-xs text-foreground/70">
                      <span>Basic</span>
                      <span>Standard</span>
                      <span>Advanced</span>
                      <span>Enterprise</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Monitoring Frequency</span>
                      <span className="text-xs font-mono text-cyber-primary">Continuous</span>
                    </div>
                    <Slider 
                      defaultValue={[100]} 
                      max={100} 
                      step={33.33} 
                      indicatorClassName="bg-cyber-primary" 
                    />
                    <div className="flex justify-between mt-1 text-xs text-foreground/70">
                      <span>Daily</span>
                      <span>Hourly</span>
                      <span>Continuous</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Button 
                  className="bg-cyber-primary hover:bg-cyber-accent text-white border border-primary/50 cyber-glow"
                  onClick={() => window.location.href = "/#contact"}
                >
                  Get a Customized Security Solution
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
