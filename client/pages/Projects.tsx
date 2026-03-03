import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Shield, Lock, ClipboardCheck, Search, Cloud, Users, ArrowRight, CheckCircle2,
  Network, Server, Cpu, Layers, Layout, HardDrive, Smartphone, Globe, Workflow,
  Activity, Briefcase, Database, FileCheck, Code, FileCode, Landmark, BarChart3,
  GitPullRequest, Zap, Radio, Settings, Terminal, ShieldCheck, Box, Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const projects = [
  {
    id: "iam-transformation",
    title: "Enterprise IAM Transformation",
    category: "Identity & Access Management",
    impact: "Reduced identity risk by 80%",
    description: "Redesigned identity management for 5,000+ employees using modern SSO and lifecycle management protocols. Managed the strategic transition to cloud-native IAM infrastructure.",
    tags: ["Okta", "Azure AD", "Lifecycle Mgmt", "SSO", "SAML/OIDC"],
    icon: Lock,
    details: "This multi-year project involved consolidating multiple legacy identity stores into a unified Okta-based system integrated with Azure AD. We automated user lifecycle events (Joiner, Mover, Leaver) which significantly reduced manual provisioning errors and orphan accounts.",
    approach: "The transformation followed a three-phase approach: Discovery (mapping legacy dependencies), Foundation (setting up core Okta/Azure sync), and Migration (transitioning applications by priority). We emphasized Zero Trust principles, ensuring that every access request was verified.",
    orgImpact: "Eliminated 100% of 'shadow' admin accounts and reduced onboarding time from 3 days to 4 hours. Improved compliance reporting efficiency by 60% through centralized logging.",
    programDiagram: {
      description: "Program-level flow focusing on organizational alignment and business value.",
      nodes: [
        { label: "Business Stakeholders", type: "org", icon: Users },
        { label: "IAM Policy & Governance", type: "policy", icon: ShieldCheck },
        { label: "Automated Lifecycle", type: "hub", icon: Workflow },
        { label: "Cost & Risk Savings", type: "value", icon: BarChart3 }
      ]
    },
    technicalDiagram: {
      description: "Technical view of system integrations and identity flow.",
      nodes: [
        { label: "On-Prem AD", type: "system", icon: Server },
        { label: "Azure AD Connect", type: "process", icon: GitPullRequest },
        { label: "Okta Identity Cloud", type: "hub", icon: Lock },
        { label: "SaaS & Cloud Apps", type: "system", icon: Globe }
      ]
    }
  },
  {
    id: "grc-baseline",
    title: "Strategic GRC Baseline",
    category: "Governance, Risk & Compliance",
    impact: "Accelerated audit readiness by 40%",
    description: "Standardized security controls across the organization based on the NIST 800-53 framework for multi-cloud environments. Developed comprehensive security policies and procedures.",
    tags: ["NIST 800-53", "Compliance", "Risk Assessment", "Policy Development"],
    icon: ClipboardCheck,
    details: "Designed and implemented a unified compliance framework that mapped requirements from SOC2, HIPAA, and ISO 27001 to a set of core internal controls. This provided a single source of truth for all security audits.",
    approach: "I led a cross-functional task force to identify overlapping requirements across different compliance frameworks. We built a 'Control Once, Comply Many' model, centralizing evidence collection into a GRC platform (ZenGRC) and automating 30% of control monitoring via API integrations.",
    orgImpact: "Reduced manual audit preparation workload by 1,200 hours annually. Secured a clean SOC 2 Type II report on the first attempt after program overhaul.",
    programDiagram: {
      description: "High-level governance structure and reporting flow.",
      nodes: [
        { label: "Regulatory Bodies", type: "org", icon: Landmark },
        { label: "Risk Management Council", type: "policy", icon: ShieldCheck },
        { label: "Unified Controls", type: "hub", icon: Layers },
        { label: "Audit Assurance", type: "value", icon: ClipboardCheck }
      ]
    },
    technicalDiagram: {
      description: "System architecture for automated compliance monitoring.",
      nodes: [
        { label: "GRC Platform", type: "hub", icon: Database },
        { label: "Evidence Collector", type: "process", icon: Zap },
        { label: "Cloud Audit APIs", type: "system", icon: Radio },
        { label: "Real-time Dashboards", type: "system", icon: Layout }
      ]
    }
  },
  {
    id: "vuln-ops",
    title: "Global Vulnerability Management Ops",
    category: "Security Operations",
    impact: "95% remediation rate of critical findings",
    description: "Directly managed the vulnerability scanning and remediation lifecycle for global infrastructure. Established KPIs and executive reporting for risk visibility.",
    tags: ["Qualys", "Tenable", "Rapid7", "CVE Prioritization", "Risk Metrics"],
    icon: Search,
    details: "Revamped the vulnerability management program by shifting from simple 'scan-and-patch' to a risk-based prioritization approach. Implemented automated scanning for all perimeter assets and integrated results into IT ticketing systems for streamlined remediation.",
    approach: "We implemented the Tenable.io platform and integrated it with ServiceNow. I established a risk-scoring algorithm that combined CVE severity with asset criticality and threat intelligence. This allowed remediation teams to focus on the top 5% of risks that accounted for 80% of actual exposure.",
    orgImpact: "Decreased mean time to remediate (MTTR) critical vulnerabilities by 75%. Provided executive leadership with real-time risk dashboards, improving resource allocation for infrastructure security.",
    programDiagram: {
      description: "Vulnerability lifecycle from discovery to executive reporting.",
      nodes: [
        { label: "Asset Owners", type: "org", icon: Users },
        { label: "Risk Prioritization", type: "policy", icon: BarChart3 },
        { label: "Remediation Workflow", type: "hub", icon: Workflow },
        { label: "Risk Mitigation", type: "value", icon: Shield }
      ]
    },
    technicalDiagram: {
      description: "Distributed scanner architecture and automation pipeline.",
      nodes: [
        { label: "Global Scanners", type: "system", icon: Search },
        { label: "Vulnerability Engine", type: "hub", icon: Cpu },
        { label: "CMDB Integration", type: "process", icon: Database },
        { label: "Remediation Tickets", type: "system", icon: HardDrive }
      ]
    }
  },
  {
    id: "cloud-governance",
    title: "Cloud Governance & Security Baseline",
    category: "Infrastructure Governance",
    impact: "100% cloud asset visibility achieved",
    description: "Developed and automated security baselines for Kubernetes clusters and multi-cloud environments from a strategic governance perspective.",
    tags: ["AWS", "Kubernetes", "Governance", "Security Baselines"],
    icon: Cloud,
    details: "Established a 'Security-as-Code' governance model where all cloud accounts and Kubernetes clusters were required to adhere to pre-defined security baselines. Monitored compliance via automated reporting and regular audits.",
    approach: "I defined the 'Golden Baseline' for AWS and EKS environments, focusing on IAM least privilege, encryption, and network segmentation. We used Terraform and AWS Config to enforce these standards, ensuring that any drift was automatically detected and reported for remediation.",
    orgImpact: "Reduced misconfiguration-related security incidents by 90%. Enabled a 40% faster 'Time-to-Cloud' for new product teams through pre-approved, secure infrastructure templates.",
    programDiagram: {
      description: "Governance-as-code program lifecycle.",
      nodes: [
        { label: "Product Engineering", type: "org", icon: Users },
        { label: "Security Policy Board", type: "policy", icon: ShieldCheck },
        { label: "Governance Guardrails", type: "hub", icon: Zap },
        { label: "Deployment Velocity", type: "value", icon: Rocket }
      ]
    },
    technicalDiagram: {
      description: "Cloud-native security automation architecture.",
      nodes: [
        { label: "Infrastructure as Code", type: "process", icon: Code },
        { label: "Golden Baselines", type: "hub", icon: Shield },
        { label: "Multi-Cloud Assets", type: "system", icon: Cloud },
        { label: "Compliance Monitoring", type: "system", icon: Activity }
      ]
    }
  },
  {
    id: "tprm",
    title: "Third-Party Risk Management Program",
    category: "GRC",
    impact: "Audited 200+ vendors in one year",
    description: "Established a robust vendor security assessment program to manage risks associated with third-party software and services.",
    tags: ["Vendor Risk", "Auditing", "Supply Chain Security"],
    icon: Shield,
    details: "Created a standardized vendor assessment process that included security questionnaires, SOC2 report reviews, and risk scoring. This allowed the business to make risk-informed decisions about new partnerships.",
    approach: "We streamlined the vendor onboarding process by integrating security assessments directly into the procurement workflow. I developed a tiered risk model (High, Medium, Low) based on the data types and access levels required, ensuring that high-risk vendors received deep-dive technical reviews.",
    orgImpact: "Reduced vendor risk assessment turnaround time by 50% while improving the depth of security reviews. Successfully mitigated three potential supply chain breaches through proactive auditing.",
    programDiagram: {
      description: "Third-party risk program from procurement to contract.",
      nodes: [
        { label: "Procurement/Legal", type: "org", icon: Briefcase },
        { label: "Vendor Risk Tiering", type: "policy", icon: Layers },
        { label: "Security Review", type: "hub", icon: Search },
        { label: "Contractual Terms", type: "value", icon: ClipboardCheck }
      ]
    },
    technicalDiagram: {
      description: "TPRM pipeline and risk scoring system.",
      nodes: [
        { label: "Vendor Questionnaire", type: "system", icon: FileCode },
        { label: "Risk Engine", type: "process", icon: Cpu },
        { label: "Vendor DB", type: "hub", icon: Database },
        { label: "Continuous Monitoring", type: "system", icon: Activity }
      ]
    }
  },
  {
    id: "pam-rollout",
    title: "Privileged Access Management (PAM) Rollout",
    category: "IAM",
    impact: "Zero unauthorized privileged access incidents",
    description: "Spearheaded the implementation of a PAM solution to secure high-risk administrative credentials across the enterprise.",
    tags: ["CyberArk", "Thycotic", "Least Privilege", "MFA"],
    icon: Users,
    details: "Implemented a 'just-in-time' access model for system administrators, ensuring that privileged credentials were never stored locally and all sessions were monitored and recorded.",
    approach: "I led the rollout of CyberArk across the server and network infrastructure. This involved establishing a vaulting strategy for sensitive accounts and implementing session recording for all administrative activity. We phased the rollout, starting with Domain Admins and expanding to application service accounts.",
    orgImpact: "Achieved 100% vaulting of critical administrative credentials. Dramatically simplified forensic investigations through centralized, searchable session logs.",
    programDiagram: {
      description: "Strategic rollout plan and privilege oversight.",
      nodes: [
        { label: "Executive Leadership", type: "org", icon: Users },
        { label: "Least Privilege Policy", type: "policy", icon: ShieldCheck },
        { label: "Privileged Workflow", type: "hub", icon: Workflow },
        { label: "Audit & Compliance", type: "value", icon: Landmark }
      ]
    },
    technicalDiagram: {
      description: "Technical PAM architecture and session gateway.",
      nodes: [
        { label: "Admin Endpoint", type: "system", icon: Smartphone },
        { label: "PAM Proxy Gateway", type: "hub", icon: Network },
        { label: "Secure Vault", type: "process", icon: Lock },
        { label: "Target Infrastructure", type: "system", icon: Server }
      ]
    }
  }
];

function ArchitectureDiagram({ diagram, color = "primary" }: { diagram: any, color?: string }) {
  return (
    <div className="bg-slate-50 border rounded-2xl p-6 md:p-8 animate-in fade-in duration-500">
      <p className="text-sm font-semibold text-slate-500 text-center mb-8 uppercase tracking-wider">
        {diagram.description}
      </p>
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden md:block" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          {diagram.nodes.map((node: any, i: number) => (
            <div key={i} className="flex flex-col items-center space-y-4 w-full md:w-auto">
              <div className={`
                w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center shadow-md border-2 transition-all duration-300 hover:scale-110 group
                ${node.type === 'hub' ? 'bg-primary text-primary-foreground border-primary shadow-primary/20 scale-110' : 
                  node.type === 'org' ? 'bg-indigo-600 text-white border-indigo-500' :
                  node.type === 'policy' ? 'bg-amber-500 text-white border-amber-400' :
                  node.type === 'value' ? 'bg-emerald-600 text-white border-emerald-500' :
                  node.type === 'process' ? 'bg-slate-800 text-white border-slate-700' :
                  'bg-white border-slate-200 text-slate-600'}
              `}>
                <node.icon className="h-8 w-8 md:h-10 md:w-10 group-hover:rotate-6 transition-transform" />
              </div>
              <div className="bg-white px-3 py-1.5 rounded-full border shadow-sm">
                <span className="text-[11px] md:text-xs font-extrabold text-center block leading-tight whitespace-nowrap">
                  {node.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-12 flex flex-wrap justify-center gap-4 border-t pt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-[10px] font-bold text-slate-500 uppercase">Strategic Hub</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-indigo-600" />
          <span className="text-[10px] font-bold text-slate-500 uppercase">Organizational</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-800" />
          <span className="text-[10px] font-bold text-slate-500 uppercase">Systems</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-600" />
          <span className="text-[10px] font-bold text-slate-500 uppercase">Value/Results</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="container px-4 md:px-6 py-12 space-y-12">
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">My Projects</h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          A comprehensive look at the strategic initiatives and technical security programs I've led and executed throughout my career.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Dialog key={project.id}>
            <DialogTrigger asChild>
              <Card className="group cursor-pointer h-full flex flex-col border border-slate-200 hover:border-primary/50 transition-all shadow-sm hover:shadow-md rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-primary">
                <CardHeader className="bg-slate-50/50 pb-6 border-b">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border flex items-center justify-center text-primary shadow-sm">
                      <project.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-primary border-primary/30 text-[10px] uppercase tracking-widest bg-white">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold line-clamp-2">{project.title}</CardTitle>
                  <span className="text-xs font-mono text-emerald-600 font-bold mt-2 inline-block">
                    {project.impact}
                  </span>
                </CardHeader>
                <CardContent className="pt-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="text-sm text-slate-500 font-medium flex items-center gap-2 group-hover:text-primary transition-colors">
                      Learn more and view architecture <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <project.icon className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-widest">{project.category}</span>
                </div>
                <DialogTitle className="text-3xl md:text-4xl font-bold">{project.title}</DialogTitle>
                <DialogDescription className="text-emerald-600 font-bold text-lg mt-2">
                  Impact: {project.impact}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-8 mt-6">
                <section className="space-y-3">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <ClipboardCheck className="h-5 w-5 text-primary" />
                    Problem & Executive Summary
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {project.details}
                  </p>
                </section>

                <section className="space-y-6">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <Layout className="h-5 w-5 text-primary" />
                      Solution & Architecture Views
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.approach}
                  </p>
                  
                  <Tabs defaultValue="program" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                      <TabsTrigger value="program" className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Program Level
                      </TabsTrigger>
                      <TabsTrigger value="technical" className="flex items-center gap-2">
                        <Terminal className="h-4 w-4" />
                        Technical View
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="program" className="mt-0">
                      <ArchitectureDiagram diagram={project.programDiagram} />
                    </TabsContent>
                    <TabsContent value="technical" className="mt-0">
                      <ArchitectureDiagram diagram={project.technicalDiagram} color="slate" />
                    </TabsContent>
                  </Tabs>
                </section>

                <section className="space-y-3 p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    Organizational Impact & ROI
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {project.orgImpact}
                  </p>
                </section>

                <div className="flex flex-wrap gap-2 pt-4 border-t">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1 bg-slate-100">{tag}</Badge>
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      <div className="pt-12 text-center border-t">
        <h2 className="text-2xl font-bold mb-4">Want to dive deeper into these solutions?</h2>
        <p className="text-muted-foreground mb-8">
          Contact me to discuss specific implementation details, trade-offs, or to request a deep-dive on any of these programs.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="px-12">Contact Me</Button>
          <Button variant="outline" size="lg" className="px-12">View Resume</Button>
        </div>
      </div>
    </div>
  );
}
