import { ArrowRight, BarChart, GraduationCap, Layout, MessageSquare, Users, Zap, Shield, Lock, Search, FileCheck, Globe, ClipboardCheck, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden border-b">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Badge variant="secondary" className="px-4 py-1 text-sm rounded-full mb-4">
                Senior Security Engineer & Strategic Leader
              </Badge>
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter max-w-4xl leading-[1.1]">
                Leading Through <span className="text-primary">Governance</span>, <span className="text-primary">Identity</span> & Risk <span className="text-primary">Strategy</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
                15+ years of experience specializing in GRC, IAM, and Vulnerability Management. Expert at bridging technical security operations with strategic business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a href="#experience">
                  <Button size="lg" className="gap-2 px-8 w-full sm:w-auto">
                    View Experience <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <Link to="/projects">
                  <Button size="lg" variant="outline" className="gap-2 px-8 w-full sm:w-auto">
                    Full Project Portfolio <Shield className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Roles */}
        <section id="experience" className="py-24 border-b">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">Professional Journey</h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto">
                A track record of leading complex security initiatives and managing high-performance teams.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  company: "Fortellar",
                  role: "Senior Security Engineer",
                  period: "Present",
                  description: "Leading hands-on Identity & Access Management (IAM), GRC, and Vulnerability Management initiatives. Designing and implementing robust security controls and frameworks for enterprise platforms.",
                  skills: ["IAM", "GRC Strategy", "Vulnerability Assessment", "NIST 800-53"]
                },
                {
                  company: "Strategic Security Firm",
                  role: "Lead Security Strategist",
                  period: "3 Years",
                  description: "Developed and managed comprehensive security governance programs. Oversaw vulnerability remediation efforts and provided strategic direction for IAM transformations.",
                  skills: ["Policy Development", "Risk Management", "Compliance", "IAM Architecture"]
                }
              ].map((job, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-primary/20 pb-8 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <p className="text-primary font-semibold">{job.company}</p>
                    </div>
                    <Badge variant="outline" className="font-mono">{job.period}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-slate-100">{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership & Management Section */}
        <section id="leadership" className="py-24 bg-slate-50/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div className="space-y-4 max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Strategic Leadership</h2>
                <p className="text-muted-foreground text-lg">
                  Empowering teams through visionary planning, risk-informed decision making, and deep mentorship.
                </p>
              </div>
              <Link to="/projects">
                <Button variant="ghost" className="gap-2 group">
                  View Strategic Initiatives <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "CI/CD Governance",
                  description: "Providing strategic oversight and management of secure software delivery lifecycles from a governance perspective.",
                  icon: Settings,
                  color: "bg-blue-500/10 text-blue-600"
                },
                {
                  title: "GRC Strategy",
                  description: "Hands-on development of governance frameworks and risk management strategies to ensure organizational compliance.",
                  icon: BarChart,
                  color: "bg-emerald-500/10 text-emerald-600"
                },
                {
                  title: "NIST Framework Implementation",
                  description: "Standardizing security controls and compliance across diverse organizational units using the NIST 800-53 framework.",
                  icon: FileCheck,
                  color: "bg-amber-500/10 text-amber-600"
                },
                {
                  title: "Security Team Mentorship",
                  description: "Developing specialized talent in GRC and IAM through personalized growth plans and consistent coaching.",
                  icon: GraduationCap,
                  color: "bg-purple-500/10 text-purple-600"
                },
                {
                  title: "Vulnerability Management Ops",
                  description: "Directly managing vulnerability scanning, prioritization, and remediation programs across the enterprise.",
                  icon: Search,
                  color: "bg-rose-500/10 text-rose-600"
                },
                {
                  title: "Adaptive Risk Management",
                  description: "Evolving risk strategies to keep pace with emerging threats and changing business requirements.",
                  icon: Zap,
                  color: "bg-cyan-500/10 text-cyan-600"
                }
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-base pt-2">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Capabilities Section */}
        <section id="technical" className="py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Hands-on Expertise</h2>
                  <p className="text-muted-foreground text-lg">
                    Direct experience in Identity management, Governance, and Vulnerability lifecycle management.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      label: "Identity & Access Management (IAM)",
                      value: 98,
                      icon: Lock
                    },
                    {
                      label: "Governance, Risk & Compliance (GRC)",
                      value: 96,
                      icon: ClipboardCheck
                    },
                    {
                      label: "Vulnerability & Patch Management",
                      value: 95,
                      icon: Search
                    },
                    {
                      label: "Security Program Management",
                      value: 92,
                      icon: Layout
                    }
                  ].map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <skill.icon className="h-4 w-4 text-primary" />
                          <span>{skill.label}</span>
                        </div>
                        <span>{skill.value}%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-8">
                  <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-2">
                    <h3 className="text-xl font-bold">IAM</h3>
                    <p className="text-slate-400 text-sm">Okta, Azure AD, ForgeRock, SSO, Multi-Factor Authentication.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary text-primary-foreground space-y-2">
                    <h3 className="text-xl font-bold">GRC</h3>
                    <p className="text-primary-foreground/70 text-sm">NIST 800-53, ISO 27001, SOC2, HIPAA, Policy Dev.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-secondary space-y-2 border">
                    <h3 className="text-xl font-bold text-secondary-foreground">Vulnerability</h3>
                    <p className="text-muted-foreground text-sm">Qualys, Tenable/Nessus, Rapid7, CVE Prioritization.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-100 space-y-2 border">
                    <h3 className="text-xl font-bold text-slate-900">Program Ops</h3>
                    <p className="text-slate-600 text-sm">CI/CD Governance, Security Metrics, Reporting, KPIs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview Section (CTA) */}
        <section id="projects" className="py-24 bg-slate-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Impact & Strategic Results</h2>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
                From enterprise IAM transformations to global vulnerability management programs, I deliver security initiatives that reduce risk and accelerate business growth.
              </p>
              <div className="pt-4">
                <Link to="/projects">
                  <Button size="lg" className="px-12 group">
                    Explore All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t relative overflow-hidden">
          <div className="container px-4 md:px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Strategic Security Operations</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              I'm open to discussing GRC strategy, IAM architecture, or technical security mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-12 w-full sm:w-auto">
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="px-12 w-full sm:w-auto">
                LinkedIn Profile
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
