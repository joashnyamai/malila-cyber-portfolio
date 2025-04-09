import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import { Button } from './ui/button';
import { FileText, ChevronRight } from 'lucide-react';

// Register a reliable font for PDF rendering
Font.register({
  family: 'Open Sans',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf', fontWeight: 700 },
  ],
});

// Create styles with Open Sans font
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Open Sans',
    fontSize: 12,
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  contactInfo: {
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  jobDetails: {
    fontSize: 12,
    marginBottom: 5,
  },
  bullet: {
    marginLeft: 10,
    marginBottom: 3,
  },
});

// Create Resume Document Component
const ResumeDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Malila Nyamai</Text>
        <Text style={styles.subtitle}>Cybersecurity Analyst | Incident Response Specialist | Threat Intelligence Expert</Text>
        <Text style={styles.contactInfo}>
          📍 Juja, Kiambu, Kenya | 📧 nyamabigjoash@gmail.com | mallybiggy86@gmail.com
        </Text>
        <Text style={styles.contactInfo}>📞 0745806761 | 🔗 LinkedIn</Text>
        
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text>
          Results-driven Cybersecurity Analyst and IT Consultant with 2+ years of experience in threat detection, incident response, and AI data annotation. Skilled in vulnerability assessment, threat intelligence, and security remediation. Certified in CCNA, Generative AI (SAP), and cybersecurity. Currently pursuing a BSc in Information Technology with hands-on expertise in Oracle Database, PHP, and CRM systems. Adept at translating technical risks into actionable solutions for businesses.
        </Text>
        
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <Text style={styles.jobTitle}>Cybersecurity:</Text>
        <Text>Incident Response, Threat Intelligence, Vulnerability Assessment, Risk Mitigation</Text>
        
        <Text style={styles.jobTitle}>IT & Networking:</Text>
        <Text>Oracle Database, PHP, CRM, CCNA (Enterprise Networking & Security)</Text>
        
        <Text style={styles.jobTitle}>Certifications:</Text>
        <Text>CCNA, Generative AI at SAP, Q1 Masterclass, Cyberthreats by Malware</Text>
        
        <Text style={styles.jobTitle}>Tools & Platforms:</Text>
        <Text>Wireshark, SIEM, Splunk, Metasploit, Remotasks (AI Data Annotation)</Text>
        
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        <Text style={styles.jobTitle}>Freelance IT Consultant | Malila Tech Consultancies</Text>
        <Text style={styles.jobDetails}>📅 April 2023 – Present | 🌍 Kenya</Text>
        <Text style={styles.bullet}>• Conduct security assessments and implement risk mitigation strategies for clients.</Text>
        <Text style={styles.bullet}>• Provide IT consulting on database management (Oracle), CRM systems, and PHP-based solutions.</Text>
        <Text style={styles.bullet}>• Develop incident response plans and perform post-breach analysis for SMEs.</Text>
        
        <Text style={styles.jobTitle}>Image Annotator | Remotasks</Text>
        <Text style={styles.jobDetails}>📅 June 2021 – April 2024 | 🌍 Nairobi, Kenya</Text>
        <Text style={styles.bullet}>• Annotated and processed large-scale image datasets for AI/ML training models.</Text>
        <Text style={styles.bullet}>• Ensured data accuracy and quality control, improving model performance by 15%.</Text>
        
        <Text style={styles.jobTitle}>IT Attaché | Jomo Kenyatta University of Agriculture and Technology (JKUAT)</Text>
        <Text style={styles.jobDetails}>📅 September 2023 – November 2023 | 🌍 Juja, Kenya</Text>
        <Text style={styles.bullet}>• Provided IT support, troubleshooting hardware/software issues for staff and students.</Text>
        <Text style={styles.bullet}>• Assisted in network security monitoring and cybersecurity awareness programs.</Text>
        
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.jobTitle}>🎓 Bachelor of Science (BSc) in Information Technology | Zetech University</Text>
        <Text style={styles.jobDetails}>📅 January 2023 – December 2025</Text>
        
        <Text style={styles.jobTitle}>🎓 Diploma in Computer Software Engineering | Zetech University</Text>
        <Text style={styles.jobDetails}>📅 January 2022 – November 2023</Text>
        
        <Text style={styles.sectionTitle}>Certifications</Text>
        <Text style={styles.bullet}>• CCNA: Enterprise Networking, Security, and Automation (Cisco)</Text>
        <Text style={styles.bullet}>• Generative AI at SAP (SAP Certification)</Text>
        <Text style={styles.bullet}>• Q1 Masterclass (Cybersecurity Training)</Text>
        <Text style={styles.bullet}>• The Complete Cyber Security Course: Hackers Exposed! (Udemy)</Text>
        
        <Text style={styles.sectionTitle}>Additional Information</Text>
        <Text style={styles.bullet}>• Languages: English (Fluent), Swahili (Fluent)</Text>
        <Text style={styles.bullet}>• Technical Writing: Cybersecurity reports, threat analysis documentation</Text>
        <Text style={styles.bullet}>• Volunteer Work: Conducted cybersecurity workshops for local businesses</Text>
      </View>
    </Page>
  </Document>
);

// Component for the download button
const ResumeDownloadButton = () => (
  <PDFDownloadLink
    document={<ResumeDocument />}
    fileName="Malila_Nyamai_Resume.pdf"
    className="inline-block"
  >
    {({ blob, url, loading, error }) => (
      <Button 
        variant="outline" 
        className="border-primary/50 text-primary hover:bg-primary/10 group"
        disabled={loading}
      >
        <FileText className="mr-2 h-5 w-5" />
        {loading ? 'Generating PDF...' : 'Resume PDF'}
        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    )}
  </PDFDownloadLink>
);

export { ResumeDownloadButton, ResumeDocument };
