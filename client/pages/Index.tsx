import { ArrowRight, BarChart, Code, Cpu, GraduationCap, Layout, Lightbulb, MessageSquare, Rocket, Users, Zap, Shield, Lock, Search, Terminal, Activity, FileCheck, Globe, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/10 font-inter">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="text-primary-foreground h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">Kenneth Mize</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">Experience</a>
            <a href="#leadership" className="text-sm font-medium hover:text-primary transition-colors">Leadership</a>
            <a href="#technical" className="text-sm font-medium hover:text-primary transition-colors">Technical</a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">Contact</Button>
            <Button size="sm">Download Resume</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 overflow-hidden border-b">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <Badge variant="secondary" className="px-4 py-1 text-sm rounded-full mb-4">
                Senior Security Engineer & Strategic Leader
              </Badge>
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tighter max-w-4xl leading-[1.1]">
                Securing the Future through <span className="text-primary">Strategic</span> Engineering & <span className="text-primary">Adaptive</span> Leadership
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
                15+ years of experience in application security, cloud architecture, IAM, and leading high-performance engineering teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button size="lg" className="gap-2 px-8">
                  View Experience <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8">
                  Security Portfolio <Shield className="h-4 w-4" />
                </Button>
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
                A track record of building and securing scalable systems at industry-leading organizations.
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  company: "Fortellar",
                  role: "Senior Security Engineer",
                  period: "Present",
                  description: "Leading application security, cloud architecture, and Identity & Access Management (IAM) initiatives. Designing and implementing robust security controls for enterprise-scale platforms.",
                  skills: ["Cloud Security", "IAM", "Risk Assessment", "NIST Framework"]
                },
                {
                  company: "Previous Tech Enterprise",
                  role: "Lead Security Architect",
                  period: "3 Years",
                  description: "Architected end-to-end security solutions for multi-cloud environments. Mentored junior engineers and led cross-functional security incident response teams.",
                  skills: ["AppSec", "Kubernetes Security", "CI/CD Security", "Penetration Testing"]
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
                  Empowering security teams through visionary planning, risk-informed decision making, and deep mentorship.
                </p>
              </div>
              <Button variant="ghost" className="gap-2 group">
                View Management Philosophy <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Security Team Mentorship",
                  description: "Developing specialized talent in application security and incident response through personalized growth plans.",
                  icon: GraduationCap,
                  color: "bg-blue-500/10 text-blue-600"
                },
                {
                  title: "Strategic Risk Assessment",
                  description: "Aligning technical risk management with business goals to ensure sustainable security posture.",
                  icon: BarChart,
                  color: "bg-emerald-500/10 text-emerald-600"
                },
                {
                  title: "NIST Framework Implementation",
                  description: "Standardizing security controls and compliance across diverse organizational units.",
                  icon: FileCheck,
                  color: "bg-amber-500/10 text-amber-600"
                },
                {
                  title: "Incident Response Leadership",
                  description: "Leading complex investigations and response efforts with a focus on containment and long-term remediation.",
                  icon: Activity,
                  color: "bg-purple-500/10 text-purple-600"
                },
                {
                  title: "Cross-functional Collaboration",
                  description: "Bridging communication between engineering, legal, and product teams to integrate security into every stage.",
                  icon: MessageSquare,
                  color: "bg-rose-500/10 text-rose-600"
                },
                {
                  title: "Adaptive Security Strategy",
                  description: "Evolving security programs to keep pace with emerging threats and changing business landscapes.",
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
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Expertise</h2>
                  <p className="text-muted-foreground text-lg">
                    Hands-on capabilities in cloud security, identity systems, and vulnerability management.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      label: "Cloud Security Architecture",
                      value: 96,
                      icon: Globe
                    },
                    {
                      label: "Identity & Access Management (IAM)",
                      value: 94,
                      icon: Lock
                    },
                    {
                      label: "Vulnerability & Patch Management",
                      value: 92,
                      icon: Search
                    },
                    {
                      label: "Application Security (SAST/DAST)",
                      value: 90,
                      icon: Terminal
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
                    <h3 className="text-xl font-bold">AppSec</h3>
                    <p className="text-slate-400 text-sm">Burp Suite, OWASP Top 10, Code Review, Secret Management.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary text-primary-foreground space-y-2">
                    <h3 className="text-xl font-bold">Cloud</h3>
                    <p className="text-primary-foreground/70 text-sm">AWS Security Hub, GuardDuty, Azure AD, GCP Security.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-secondary space-y-2 border">
                    <h3 className="text-xl font-bold text-secondary-foreground">Compliance</h3>
                    <p className="text-muted-foreground text-sm">SOC2, HIPAA, NIST 800-53, GDPR, ISO 27001.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-100 space-y-2 border">
                    <h3 className="text-xl font-bold text-slate-900">Automation</h3>
                    <p className="text-slate-600 text-sm">Python Scripting, Terraform, Security as Code, SIEM.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-24 bg-slate-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Security Initiatives & Projects</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Real-world solutions delivered to solve complex security and infrastructure challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Enterprise IAM Transformation",
                  category: "Identity Systems",
                  impact: "Reduced credential-based risk by 80%",
                  description: "Redesigned identity management for 5,000+ employees using modern SSO and multi-factor authentication protocols.",
                  tags: ["Okta", "Azure AD", "OAuth2"]
                },
                {
                  title: "Cloud Native Security Baseline",
                  category: "Infrastructure",
                  impact: "Achieved SOC2 compliance in record time",
                  description: "Developed and automated security baselines for Kubernetes clusters and microservices architecture.",
                  tags: ["Kubernetes", "Terraform", "Falco"]
                }
              ].map((project, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-slate-800 border border-slate-700 hover:border-primary/50 transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-widest text-[10px]">{project.category}</Badge>
                    <span className="text-xs font-mono text-emerald-400 font-bold">{project.impact}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-slate-700 text-xs font-medium text-slate-300">#{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t relative overflow-hidden">
          <div className="container px-4 md:px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Strategy Meet Execution</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              I'm open to discussing security strategy, technical mentorship, or architectural consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-12">
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="px-12">
                LinkedIn Profile
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-sm font-bold tracking-tight">Kenneth Mize</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Kenneth Mize. Professional Portfolio.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Terminal className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Users className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
