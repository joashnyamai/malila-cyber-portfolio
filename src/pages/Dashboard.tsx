
import React from "react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, AlertTriangle, Clock, CheckCircle, ExternalLink, User, FileLock, Database, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const securityData = [
  { name: 'Jan', attacks: 400, prevented: 380 },
  { name: 'Feb', attacks: 300, prevented: 298 },
  { name: 'Mar', attacks: 600, prevented: 590 },
  { name: 'Apr', attacks: 780, prevented: 760 },
  { name: 'May', attacks: 500, prevented: 495 },
  { name: 'Jun', attacks: 450, prevented: 442 },
];

const vulnerabilityData = [
  { name: 'Critical', value: 12 },
  { name: 'High', value: 27 },
  { name: 'Medium', value: 58 },
  { name: 'Low', value: 103 },
];

const responseTimeData = [
  { name: 'Mon', time: 15 },
  { name: 'Tue', time: 12 },
  { name: 'Wed', time: 18 },
  { name: 'Thu', time: 11 },
  { name: 'Fri', time: 9 },
  { name: 'Sat', time: 16 },
  { name: 'Sun', time: 14 },
];

const systemHealthData = [
  { name: 'Jan', uptime: 99.2 },
  { name: 'Feb', uptime: 99.8 },
  { name: 'Mar', uptime: 99.7 },
  { name: 'Apr', uptime: 99.9 },
  { name: 'May', uptime: 99.5 },
  { name: 'Jun', uptime: 99.6 },
];

const projectHighlights = [
  {
    title: "Banking Security Audit",
    description: "Conducted comprehensive security assessment for a regional banking system",
    metrics: "Found 17 vulnerabilities, 4 critical",
    icon: <FileLock className="h-5 w-5 text-cyber-primary" />,
  },
  {
    title: "E-commerce Protection",
    description: "Implemented threat prevention system for online retailer",
    metrics: "99.8% attack prevention rate",
    icon: <Shield className="h-5 w-5 text-cyber-primary" />,
  },
  {
    title: "Database Security Implementation",
    description: "Set up encryption and access controls for healthcare provider", 
    metrics: "HIPAA compliant, zero breaches",
    icon: <Database className="h-5 w-5 text-cyber-primary" />,
  },
  {
    title: "Web Application Firewall Setup",
    description: "Configured and optimized WAF for educational institution",
    metrics: "Blocked 12,400+ attacks monthly",
    icon: <Globe className="h-5 w-5 text-cyber-primary" />,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="cyber-card p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold cyber-text-glow mb-2">My Security Analytics Portfolio</h1>
                <p className="text-foreground/70">Visualizing my cybersecurity expertise and project outcomes</p>
              </div>
              <div className="flex space-x-2 mt-4 md:mt-0">
                <Button variant="outline" className="border-cyber-primary text-cyber-primary">
                  Last 7 Days
                </Button>
                <Button variant="outline" className="border-cyber-primary text-cyber-primary">
                  Last 30 Days
                </Button>
                <Button className="bg-cyber-primary hover:bg-cyber-accent text-white">
                  Download Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Personal Analytics Overview */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <User className="h-5 w-5 text-cyber-primary mr-2" />
                Security Portfolio Metrics
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <motion.div 
                  className="cyber-card p-4 flex items-center space-x-4"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="rounded-full bg-red-500/20 p-3">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <p className="text-foreground/70 text-sm">Threats Detected</p>
                    <p className="text-xl font-bold">2,487</p>
                    <p className="text-xs text-foreground/60">Across all projects</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="cyber-card p-4 flex items-center space-x-4"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="rounded-full bg-green-500/20 p-3">
                    <Shield className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-foreground/70 text-sm">Threats Prevented</p>
                    <p className="text-xl font-bold">2,465</p>
                    <p className="text-xs text-foreground/60">99.1% success rate</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="cyber-card p-4 flex items-center space-x-4"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="rounded-full bg-blue-500/20 p-3">
                    <Clock className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-foreground/70 text-sm">Avg. Response Time</p>
                    <p className="text-xl font-bold">14 min</p>
                    <p className="text-xs text-foreground/60">Industry avg: 18 min</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="cyber-card p-4 flex items-center space-x-4"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="rounded-full bg-purple-500/20 p-3">
                    <CheckCircle className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-foreground/70 text-sm">Client System Uptime</p>
                    <p className="text-xl font-bold">99.7%</p>
                    <p className="text-xs text-foreground/60">Above SLA target</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Project Highlights */}
            <motion.div 
              className="mb-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-xl font-semibold mb-4">Featured Security Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectHighlights.map((project, index) => (
                  <motion.div 
                    key={index}
                    className="service-card"
                    variants={itemVariants}
                  >
                    <div className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-3 mr-3">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">{project.title}</h3>
                        <p className="text-sm text-foreground/70 mb-2">{project.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{project.metrics}</span>
                          <Link to="/services" className="text-xs text-cyber-primary hover:text-cyber-accent flex items-center">
                            View Details <ExternalLink className="ml-1 h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Charts - First Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <motion.div 
                className="cyber-card p-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-4">Security Incidents Analysis</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={securityData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(34, 197, 94, 0.2)" />
                      <XAxis dataKey="name" stroke="rgba(255, 255, 255, 0.7)" />
                      <YAxis stroke="rgba(255, 255, 255, 0.7)" />
                      <Tooltip contentStyle={{ backgroundColor: 'rgba(17, 24, 39, 0.9)', border: '1px solid rgba(34, 197, 94, 0.3)' }} />
                      <Legend />
                      <Line type="monotone" dataKey="attacks" stroke="#ef4444" strokeWidth={2} activeDot={{ r: 8 }} name="Attacks" />
                      <Line type="monotone" dataKey="prevented" stroke="#22c55e" strokeWidth={2} name="Prevented" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
              
              <motion.div 
                className="cyber-card p-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold mb-4">Vulnerability Assessments</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={vulnerabilityData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {vulnerabilityData.map((entry, index) => {
                          const colors = ['#ef4444', '#f97316', '#3b82f6', '#22c55e'];
                          return <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />;
                        })}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: 'rgba(17, 24, 39, 0.9)', border: '1px solid rgba(34, 197, 94, 0.3)' }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
            
            {/* Charts - Second Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div 
                className="cyber-card p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold mb-4">Response Time Analysis</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={responseTimeData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(34, 197, 94, 0.2)" />
                      <XAxis dataKey="name" stroke="rgba(255, 255, 255, 0.7)" />
                      <YAxis stroke="rgba(255, 255, 255, 0.7)" />
                      <Tooltip contentStyle={{ backgroundColor: 'rgba(17, 24, 39, 0.9)', border: '1px solid rgba(34, 197, 94, 0.3)' }} />
                      <Bar dataKey="time" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
              
              <motion.div 
                className="cyber-card p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold mb-4">Client System Uptime</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={systemHealthData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(34, 197, 94, 0.2)" />
                      <XAxis dataKey="name" stroke="rgba(255, 255, 255, 0.7)" />
                      <YAxis domain={[99, 100]} stroke="rgba(255, 255, 255, 0.7)" />
                      <Tooltip contentStyle={{ backgroundColor: 'rgba(17, 24, 39, 0.9)', border: '1px solid rgba(34, 197, 94, 0.3)' }} />
                      <Area type="monotone" dataKey="uptime" stroke="#22c55e" fill="rgba(34, 197, 94, 0.2)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>
            
            {/* CTA Section */}
            <motion.div 
              className="mt-8 text-center py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-3">Interested in my security services?</h3>
              <p className="text-foreground/70 max-w-2xl mx-auto mb-6">
                I offer comprehensive security solutions tailored to your specific needs.
                Let's work together to protect your digital assets.
              </p>
              <div className="flex justify-center space-x-4">
                <Link to="/services">
                  <Button className="bg-cyber-primary hover:bg-cyber-accent text-white">
                    View All Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/#contact">
                  <Button variant="outline" className="border-cyber-primary text-cyber-primary">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
