import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Shield, Lock, ClipboardCheck, Search, Database, Cloud, FileCode, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Enterprise IAM Transformation",
    category: "Identity & Access Management",
    impact: "Reduced identity risk by 80%",
    description: "Redesigned identity management for 5,000+ employees using modern SSO and lifecycle management protocols. Managed the strategic transition to cloud-native IAM infrastructure.",
    tags: ["Okta", "Azure AD", "Lifecycle Mgmt", "SSO", "SAML/OIDC"],
    icon: Lock,
    details: "This multi-year project involved consolidating multiple legacy identity stores into a unified Okta-based system integrated with Azure AD. We automated user lifecycle events (Joiner, Mover, Leaver) which significantly reduced manual provisioning errors and orphan accounts."
  },
  {
    title: "Strategic GRC Baseline",
    category: "Governance, Risk & Compliance",
    impact: "Accelerated audit readiness by 40%",
    description: "Standardized security controls across the organization based on the NIST 800-53 framework for multi-cloud environments. Developed comprehensive security policies and procedures.",
    tags: ["NIST 800-53", "Compliance", "Risk Assessment", "Policy Development"],
    icon: ClipboardCheck,
    details: "Designed and implemented a unified compliance framework that mapped requirements from SOC2, HIPAA, and ISO 27001 to a set of core internal controls. This provided a single source of truth for all security audits."
  },
  {
    title: "Global Vulnerability Management Ops",
    category: "Security Operations",
    impact: "95% remediation rate of critical findings",
    description: "Directly managed the vulnerability scanning and remediation lifecycle for global infrastructure. Established KPIs and executive reporting for risk visibility.",
    tags: ["Qualys", "Tenable", "Rapid7", "CVE Prioritization", "Risk Metrics"],
    icon: Search,
    details: "Revamped the vulnerability management program by shifting from simple 'scan-and-patch' to a risk-based prioritization approach. Implemented automated scanning for all perimeter assets and integrated results into IT ticketing systems for streamlined remediation."
  },
  {
    title: "Cloud Governance & Security Baseline",
    category: "Infrastructure Governance",
    impact: "100% cloud asset visibility achieved",
    description: "Developed and automated security baselines for Kubernetes clusters and multi-cloud environments from a strategic governance perspective.",
    tags: ["AWS", "Kubernetes", "Governance", "Security Baselines"],
    icon: Cloud,
    details: "Established a 'Security-as-Code' governance model where all cloud accounts and Kubernetes clusters were required to adhere to pre-defined security baselines. Monitored compliance via automated reporting and regular audits."
  },
  {
    title: "Third-Party Risk Management Program",
    category: "GRC",
    impact: "Audited 200+ vendors in one year",
    description: "Established a robust vendor security assessment program to manage risks associated with third-party software and services.",
    tags: ["Vendor Risk", "Auditing", "Supply Chain Security"],
    icon: Shield,
    details: "Created a standardized vendor assessment process that included security questionnaires, SOC2 report reviews, and risk scoring. This allowed the business to make risk-informed decisions about new partnerships."
  },
  {
    title: "Privileged Access Management (PAM) Rollout",
    category: "IAM",
    impact: "Zero unauthorized privileged access incidents",
    description: "Spearheaded the implementation of a PAM solution to secure high-risk administrative credentials across the enterprise.",
    tags: ["CyberArk", "Thycotic", "Least Privilege", "MFA"],
    icon: Users,
    details: "Implemented a 'just-in-time' access model for system administrators, ensuring that privileged credentials were never stored locally and all sessions were monitored and recorded."
  }
];

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
        {projects.map((project, i) => (
          <Card key={i} className="group h-full flex flex-col border border-slate-200 hover:border-primary/50 transition-all shadow-sm hover:shadow-md rounded-2xl overflow-hidden">
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
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
                <div className="text-sm text-slate-500 italic bg-slate-50 p-4 rounded-lg border border-dashed">
                  {project.details}
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
        ))}
      </div>

      <div className="pt-12 text-center border-t">
        <h2 className="text-2xl font-bold mb-4">Want to dive deeper?</h2>
        <p className="text-muted-foreground mb-8">
          Contact me to discuss specific implementation details or to request a deep-dive on any of these programs.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="px-12">Contact Me</Button>
          <Button variant="outline" size="lg" className="px-12">View Resume</Button>
        </div>
      </div>
    </div>
  );
}
