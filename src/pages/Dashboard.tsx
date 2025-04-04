
import React from "react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, AlertTriangle, Clock, CheckCircle } from "lucide-react";

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

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4">
          <div className="cyber-card p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h1 className="text-2xl md:text-3xl font-bold cyber-text-glow mb-4 md:mb-0">Security Analytics Dashboard</h1>
              <div className="flex space-x-2">
                <Button variant="outline" className="border-cyber-primary text-cyber-primary">
                  Last 7 Days
                </Button>
                <Button variant="outline" className="border-cyber-primary text-cyber-primary">
                  Last 30 Days
                </Button>
                <Button className="bg-cyber-primary hover:bg-cyber-accent text-white">
                  Generate Report
                </Button>
              </div>
            </div>
            
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="cyber-card p-4 flex items-center space-x-4">
                <div className="rounded-full bg-red-500/20 p-3">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <p className="text-foreground/70 text-sm">Threats Detected</p>
                  <p className="text-xl font-bold">2,487</p>
                </div>
              </div>
              <div className="cyber-card p-4 flex items-center space-x-4">
                <div className="rounded-full bg-green-500/20 p-3">
                  <Shield className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-foreground/70 text-sm">Threats Prevented</p>
                  <p className="text-xl font-bold">2,465</p>
                </div>
              </div>
              <div className="cyber-card p-4 flex items-center space-x-4">
                <div className="rounded-full bg-blue-500/20 p-3">
                  <Clock className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-foreground/70 text-sm">Avg. Response Time</p>
                  <p className="text-xl font-bold">14 min</p>
                </div>
              </div>
              <div className="cyber-card p-4 flex items-center space-x-4">
                <div className="rounded-full bg-purple-500/20 p-3">
                  <CheckCircle className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-foreground/70 text-sm">System Health</p>
                  <p className="text-xl font-bold">99.7%</p>
                </div>
              </div>
            </div>
            
            {/* Charts - First Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="cyber-card p-4">
                <h3 className="text-lg font-semibold mb-4">Security Incidents</h3>
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
              </div>
              
              <div className="cyber-card p-4">
                <h3 className="text-lg font-semibold mb-4">Vulnerability Distribution</h3>
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
              </div>
            </div>
            
            {/* Charts - Second Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="cyber-card p-4">
                <h3 className="text-lg font-semibold mb-4">Response Time (minutes)</h3>
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
              </div>
              
              <div className="cyber-card p-4">
                <h3 className="text-lg font-semibold mb-4">System Uptime (%)</h3>
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
