import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Shield, Lock, ClipboardCheck, Search, Cloud, Users, ArrowRight, CheckCircle2,
  Network, Server, Cpu, Layers, Layout, HardDrive, Smartphone, Globe, Workflow,
  Activity, Briefcase, Database, FileCheck, Code, FileCode, Landmark, BarChart3,
  GitPullRequest, Zap, Radio, Settings, Terminal, ShieldCheck, Box, Rocket,
  AlertTriangle, Target, Lightbulb, Microscope, Milestone, Scale, Flame,
  FileJson, Key, Binary, Layers3
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
    approach: "The transformation followed a three-phase approach: Discovery (mapping legacy dependencies), Foundation (setting up core Okta/Azure sync), and Migration (transitioning applications by priority).",
    orgImpact: "Eliminated 100% of 'shadow' admin accounts and reduced onboarding time from 3 days to 4 hours. Improved compliance reporting efficiency by 60% through centralized logging.",
    riskLandscape: [
      { threat: "Orphaned Accounts", mitigation: "Automated 'Leaver' workflows triggered by HRIS events, ensuring access is revoked within minutes of termination.", impact: "High", likelihood: "Critical" },
      { threat: "Credential Stuffing", mitigation: "Implemented Adaptive MFA requiring hardware-backed tokens for high-risk regions and administrative access.", impact: "Critical", likelihood: "High" },
      { threat: "Privilege Escalation", mitigation: "Redesigned group-based access controls (RBAC) to enforce the principle of least privilege across all integrated apps.", impact: "High", likelihood: "Medium" }
    ],
    technicalWeeds: [
      { challenge: "Legacy App Incompatibility", solution: "Deployed Okta Access Gateway (OAG) to provide SSO capabilities for header-based legacy applications without code changes." },
      { challenge: "AD Forest Complexity", solution: "Architected a Hub-and-Spoke AD topology to consolidate 4 disparate forests into a single Azure AD tenant for cleaner sync." },
      { challenge: "API Rate Limiting", solution: "Built a custom middleware 'Sync-Queue' to throttle provisioning requests during large-scale seasonal hiring surges." }
    ],
    technicalArtifacts: [
      { type: "Configuration", label: "OIDC Client Spec", icon: FileJson, content: "{\n  \"client_id\": \"okta_prod_hub\",\n  \"grant_types\": [\"authorization_code\", \"refresh_token\"],\n  \"response_types\": [\"code\"],\n  \"token_endpoint_auth_method\": \"client_secret_basic\"\n}" },
      { type: "Schema", label: "Unified User Profile", icon: Binary, content: "Attribute: employeeType (Source: Workday)\nAttribute: costCenter (Source: SAP)\nAttribute: ssoStatus (Calculated)" }
    ],
    strategicDecisions: [
      { decision: "Cloud-First over On-Prem", rationale: "Reduced infrastructure maintenance overhead by 40% and enabled seamless remote work security during the pandemic." },
      { decision: "Okta as the Core Hub", rationale: "Selected for its superior integration ecosystem and developer-friendly APIs compared to legacy on-prem providers." }
    ],
    programDiagram: {
      description: "Organizational flow: HRIS -> IAM -> Business Value",
      nodes: [
        { label: "HRIS (Source of Truth)", type: "org", icon: Users },
        { label: "IAM Governance", type: "policy", icon: ShieldCheck },
        { label: "Automated Sync", type: "hub", icon: Workflow },
        { label: "Risk Reduction", type: "value", icon: BarChart3 }
      ]
    },
    technicalDiagram: {
      description: "Technical stack: Hybrid Identity Mesh",
      nodes: [
        { label: "Legacy AD", type: "system", icon: Server },
        { label: "Sync Agent", type: "process", icon: GitPullRequest },
        { label: "Okta Cloud", type: "hub", icon: Lock },
        { label: "SaaS Apps", type: "system", icon: Globe }
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
    approach: "I led a cross-functional task force to identify overlapping requirements across different compliance frameworks. We built a 'Control Once, Comply Many' model.",
    orgImpact: "Reduced manual audit preparation workload by 1,200 hours annually. Secured a clean SOC 2 Type II report on the first attempt after program overhaul.",
    riskLandscape: [
      { threat: "Regulatory Non-Compliance", mitigation: "Mapped all internal controls to specific NIST 800-53 requirements with automated evidence links.", impact: "Critical", likelihood: "High" },
      { threat: "Control Drift", mitigation: "Implemented quarterly self-assessments via GRC platform to catch control failures before external audits.", impact: "High", likelihood: "High" },
      { threat: "Data Privacy Breaches", mitigation: "Integrated GDPR and CCPA requirements into the core control set for global data handling consistency.", impact: "Critical", likelihood: "Medium" }
    ],
    technicalWeeds: [
      { challenge: "Evidence Silos", solution: "Implemented API-based evidence collection from AWS Config and GitHub to automate 30% of control verification." },
      { challenge: "Stakeholder Resistance", solution: "Developed 'Control Scorecards' for department heads to provide visibility into their compliance posture and drive accountability." },
      { challenge: "Mapping Complexity", solution: "Utilized a Common Control Hub (CCH) methodology to reduce redundant controls from 450 down to 120 unified controls." }
    ],
    technicalArtifacts: [
      { type: "Policy", label: "Control Mapping Matrix", icon: Layers3, content: "Control AC-2 -> SOC2 CC6.1 -> HIPAA 164.308(a)(3)\nEvidence: User Access Review Log (Monthly)" },
      { type: "Automation", label: "Evidence Collector Script", icon: Code, content: "aws configservice get-compliance-details-by-config-rule --config-rule-name s3-bucket-public-read-prohibited" }
    ],
    strategicDecisions: [
      { decision: "NIST over ISO alone", rationale: "NIST provided a more granular technical framework suitable for our high-growth cloud environment." },
      { decision: "Automated GRC Platform", rationale: "Moving away from spreadsheets was critical to handle the scale of evidence required for SOC2 and HIPAA simultaneously." }
    ],
    programDiagram: {
      description: "Regulatory -> Controls -> Audit Readiness",
      nodes: [
        { label: "NIST/SOC2/HIPAA", type: "org", icon: Landmark },
        { label: "Control Mapping", type: "policy", icon: Layers },
        { label: "Automated Evidence", type: "hub", icon: Zap },
        { label: "Audit Assurance", type: "value", icon: ClipboardCheck }
      ]
    },
    technicalDiagram: {
      description: "GRC Tech Stack: Evidence Pipeline",
      nodes: [
        { label: "Cloud Audit APIs", type: "system", icon: Radio },
        { label: "Evidence Collector", type: "process", icon: Zap },
        { label: "GRC Database", type: "hub", icon: Database },
        { label: "Reporting Engine", type: "system", icon: Layout }
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
    details: "Revamped the vulnerability management program by shifting from simple 'scan-and-patch' to a risk-based prioritization approach. Implemented automated scanning for all perimeter assets and integrated results into IT ticketing systems.",
    approach: "We implemented the Tenable.io platform and integrated it with ServiceNow. I established a risk-scoring algorithm that combined CVE severity with asset criticality and threat intelligence.",
    orgImpact: "Decreased mean time to remediate (MTTR) critical vulnerabilities by 75%. Provided executive leadership with real-time risk dashboards, improving resource allocation.",
    riskLandscape: [
      { threat: "Exploitation of Public Assets", mitigation: "Daily perimeter scans with immediate alerting for any CVE with a CVSS score > 9.0 or known exploits.", impact: "Critical", likelihood: "High" },
      { threat: "Patch Fatigue", mitigation: "Automated ticket routing to specific asset owners with pre-filled remediation instructions and priority deadlines.", impact: "Medium", likelihood: "Critical" },
      { threat: "Unmanaged Shadow IT", mitigation: "Continuous asset discovery scans identifying 15% more devices than were previously tracked in the CMDB.", impact: "High", likelihood: "High" }
    ],
    technicalWeeds: [
      { challenge: "Credentialed Scanning", solution: "Deployed secure scanning appliances with restricted IAM roles to perform deep OS-level audits without compromising passwords." },
      { challenge: "Network Latency", solution: "Optimized scan windows and distributed scanning engines across 12 global regions to minimize impact on production traffic." },
      { challenge: "False Positives", solution: "Built a custom 'Exclusion Registry' with peer-review workflow to handle legitimate business cases without skewing metrics." }
    ],
    technicalArtifacts: [
      { type: "Integration", label: "ServiceNow Sync Hook", icon: GitPullRequest, content: "POST /api/sn_vul/vul_entry\nPayload: { cve: \"CVE-2024-XXXX\", asset_id: \"AWS-123\", state: \"open\" }" },
      { type: "Metrics", label: "MTTR Dashboard Logic", icon: BarChart3, content: "avg(remediation_date - discovery_date) WHERE severity = 'CRITICAL'" }
    ],
    strategicDecisions: [
      { decision: "Risk-Based over Compliance-Based", rationale: "Focusing on actual exploitability rather than just 'passing a scan' reduced the remediation backlog by 60%." },
      { decision: "ServiceNow Integration", rationale: "Ensured security was a part of the existing IT workflow rather than a separate siloed process." }
    ],
    programDiagram: {
      description: "Discovery -> Risk Analysis -> Remediation",
      nodes: [
        { label: "Asset Discovery", type: "system", icon: Search },
        { label: "Risk Scoring", type: "policy", icon: BarChart3 },
        { label: "Remediation Teams", type: "hub", icon: Workflow },
        { label: "Reduced Attack Surface", type: "value", icon: Shield }
      ]
    },
    technicalDiagram: {
      description: "Vulnerability Pipeline: Scanners -> ServiceNow",
      nodes: [
        { label: "Global Scanners", type: "system", icon: Radio },
        { label: "Vuln Engine (Tenable)", type: "hub", icon: Cpu },
        { label: "Custom API Sync", type: "process", icon: GitPullRequest },
        { label: "IT Tickets (ServiceNow)", type: "system", icon: HardDrive }
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
    details: "Established a 'Security-as-Code' governance model where all cloud accounts and Kubernetes clusters were required to adhere to pre-defined security baselines. Monitored compliance via automated reporting.",
    approach: "I defined the 'Golden Baseline' for AWS and EKS environments, focusing on IAM least privilege, encryption, and network segmentation.",
    orgImpact: "Reduced misconfiguration-related security incidents by 90%. Enabled a 40% faster 'Time-to-Cloud' for new product teams.",
    riskLandscape: [
      { threat: "Insecure S3 Buckets", mitigation: "Implemented AWS Config Rules to automatically remediate any bucket found with public read/write permissions.", impact: "High", likelihood: "Medium" },
      { threat: "K8s Container Escape", mitigation: "Enforced Pod Security Policies (PSP) and Seccomp profiles as a default part of the CI/CD deployment pipeline.", impact: "Critical", likelihood: "Low" },
      { threat: "Excessive IAM Permissions", mitigation: "Built a 'Permission-Pruner' lambda that identified and removed unused IAM permissions based on Access Advisor data.", impact: "High", likelihood: "High" }
    ],
    technicalWeeds: [
      { challenge: "Terraform State Drift", solution: "Implemented Atlantis for GitOps-based infrastructure management, ensuring all changes are peer-reviewed and state is consistent." },
      { challenge: "EKS Cluster Isolation", solution: "Architected VPC Lattice and Network Policies to enforce micro-segmentation between production and dev namespaces." },
      { challenge: "Secret Leakage", solution: "Integrated pre-commit hooks and AWS Secrets Manager to prevent plaintext credentials from ever reaching source control." }
    ],
    technicalArtifacts: [
      { type: "IaC", label: "Terraform Security Baseline", icon: Settings, content: "resource \"aws_s3_bucket_public_access_block\" \"restrict\" {\n  block_public_acls = true\n  block_public_policy = true\n}" },
      { type: "CloudNative", label: "K8s Network Policy", icon: Network, content: "kind: NetworkPolicy\nspec:\n  podSelector: { matchLabels: { role: db } }\n  ingress: [ { from: [ { podSelector: { matchLabels: { role: api } } } ] } ]" }
    ],
    strategicDecisions: [
      { decision: "Preventative over Detective", rationale: "Stopping bad configurations in the pipeline is 10x cheaper than fixing them in production." },
      { decision: "Standardized Multi-Account VPC", rationale: "Simplifies network security management and allows for more granular billing and access control." }
    ],
    programDiagram: {
      description: "Policy -> Infrastructure-as-Code -> Compliance",
      nodes: [
        { label: "Security Policy Board", type: "org", icon: Landmark },
        { label: "Golden Templates", type: "policy", icon: Layout },
        { label: "CI/CD Guardrails", type: "hub", icon: Zap },
        { label: "Secure Ops", type: "value", icon: Rocket }
      ]
    },
    technicalDiagram: {
      description: "Cloud-Native Security Stack",
      nodes: [
        { label: "Terraform/Atlantis", type: "process", icon: Code },
        { label: "AWS Control Tower", type: "hub", icon: ShieldCheck },
        { label: "GuardDuty/Config", type: "system", icon: Activity },
        { label: "EKS/Lambda", type: "system", icon: Cloud }
      ]
    }
  }
];

function ArchitectureDiagram({ diagram }: { diagram: any }) {
  return (
    <div className="bg-slate-50 border-2 border-slate-200/60 rounded-3xl p-6 md:p-10 animate-in fade-in zoom-in-95 duration-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <Network className="w-24 h-24 text-slate-900" />
      </div>
      
      <p className="text-xs font-black text-slate-400 text-center mb-10 uppercase tracking-[0.2em]">
        {diagram.description}
      </p>
      
      <div className="relative">
        <div className="absolute top-1/2 left-[10%] w-[80%] h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent -translate-y-1/2 hidden md:block" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          {diagram.nodes.map((node: any, i: number) => (
            <div key={i} className="flex flex-col items-center space-y-5 w-full md:w-auto">
              <div className={`
                w-20 h-20 md:w-24 md:h-24 rounded-[2rem] flex items-center justify-center shadow-xl border-4 transition-all duration-500 hover:scale-110 hover:-translate-y-2 group cursor-help
                ${node.type === 'hub' ? 'bg-primary text-primary-foreground border-primary shadow-primary/25 scale-110 ring-8 ring-primary/5' : 
                  node.type === 'org' ? 'bg-indigo-600 text-white border-indigo-400' :
                  node.type === 'policy' ? 'bg-amber-500 text-white border-amber-300' :
                  node.type === 'value' ? 'bg-emerald-600 text-white border-emerald-400' :
                  node.type === 'process' ? 'bg-slate-900 text-white border-slate-700' :
                  'bg-white border-slate-200 text-slate-600'}
              `}>
                <node.icon className="h-10 w-10 md:h-12 md:w-12 group-hover:rotate-12 transition-transform" />
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl border shadow-sm ring-1 ring-black/5">
                <span className="text-[10px] md:text-[11px] font-black text-center block leading-tight tracking-tight uppercase">
                  {node.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 flex flex-wrap justify-center gap-6 border-t border-slate-200 pt-8">
        {[
          { color: "bg-primary", label: "Core Hub" },
          { color: "bg-indigo-600", label: "Business Units" },
          { color: "bg-slate-900", label: "Technical Systems" },
          { color: "bg-emerald-600", label: "Strategic ROI" }
        ].map(item => (
          <div key={item.label} className="flex items-center gap-2.5">
            <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="container px-4 md:px-6 py-16 space-y-16">
      <div className="space-y-6 text-center max-w-4xl mx-auto">
        <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20 bg-primary/5 uppercase tracking-widest text-[10px] font-black">
          Strategic Case Studies
        </Badge>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9]">
          High-<span className="text-primary italic">Assurance</span> Architectures.
        </h1>
        <p className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          Detailed technical and program-level breakdowns of security initiatives delivering measurable risk reduction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <Dialog key={project.id}>
            <DialogTrigger asChild>
              <Card className="group cursor-pointer h-full flex flex-col border-2 border-slate-100 hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-2xl rounded-[2.5rem] overflow-hidden bg-white">
                <CardHeader className="bg-slate-50/40 p-8 border-b border-slate-100">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3">
                      <project.icon className="h-8 w-8" />
                    </div>
                    <Badge variant="outline" className="text-primary border-primary/30 text-[9px] font-black uppercase tracking-[0.15em] bg-white px-3 py-1">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl font-black leading-tight tracking-tight mb-3">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">
                      {project.impact}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-8 flex-1 flex flex-col justify-between space-y-8">
                  <div className="space-y-6">
                    <p className="text-slate-500 text-lg leading-relaxed font-medium line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-3 text-primary font-black text-xs uppercase tracking-widest group-hover:gap-5 transition-all duration-300">
                      Technical Deep Dive <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-slate-100/80 text-slate-500 text-[10px] font-bold uppercase tracking-tight">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto rounded-[3rem] p-0 border-none shadow-2xl">
              {/* Header */}
              <div className="bg-slate-900 p-8 md:p-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/30 to-transparent pointer-events-none" />
                <DialogHeader>
                  <div className="flex items-center gap-3 text-primary mb-6">
                    <project.icon className="h-8 w-8" />
                    <span className="text-xs font-black uppercase tracking-[0.4em]">{project.category}</span>
                  </div>
                  <DialogTitle className="text-5xl md:text-7xl font-black tracking-tight leading-[0.85] mb-8 max-w-3xl">
                    {project.title}
                  </DialogTitle>
                  <div className="flex flex-wrap gap-6">
                    <div className="bg-emerald-500/20 border border-emerald-500/30 px-6 py-3 rounded-2xl backdrop-blur-md">
                      <p className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-1">Impact Delivered</p>
                      <p className="text-xl font-black text-white">{project.impact}</p>
                    </div>
                    <div className="bg-primary/20 border border-primary/30 px-6 py-3 rounded-2xl backdrop-blur-md">
                      <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">Mitigation Score</p>
                      <p className="text-xl font-black text-white">HIGH ASSURANCE</p>
                    </div>
                  </div>
                </DialogHeader>
              </div>
              
              <div className="p-8 md:p-16 bg-white space-y-24">
                {/* 1. Threat Landscape & Risk Mitigation */}
                <section className="space-y-12">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center shadow-lg shadow-rose-200">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black tracking-tight leading-none">Threat Landscape</h3>
                      <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest mt-1">Risk Profiling & Mitigation Strategy</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {project.riskLandscape.map((risk, i) => (
                      <div key={i} className="flex flex-col space-y-6 p-8 rounded-[2.5rem] bg-slate-50 border-2 border-slate-100 hover:border-rose-200 transition-all group">
                        <div className="flex justify-between items-start">
                          <Badge className={`${risk.impact === 'Critical' ? 'bg-rose-600' : 'bg-rose-500'} text-white font-black text-[9px] uppercase border-none`}>
                            {risk.impact} Impact
                          </Badge>
                          <div className="flex gap-1">
                            {[1, 2, 3].map(dot => (
                              <div key={dot} className={`w-1.5 h-1.5 rounded-full ${dot <= (risk.likelihood === 'Critical' ? 3 : risk.likelihood === 'High' ? 2 : 1) ? 'bg-rose-500' : 'bg-slate-200'}`} />
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-black text-xl text-slate-900 mb-3 tracking-tight group-hover:text-rose-600 transition-colors">
                            {risk.threat}
                          </h4>
                          <p className="text-sm text-slate-500 leading-relaxed font-medium">
                            <span className="font-black text-rose-600/70 block mb-1 uppercase text-[10px]">Strategic Mitigation:</span>
                            {risk.mitigation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 2. Architecture Tabs */}
                <section className="space-y-12">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                        <Microscope className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black tracking-tight leading-none">The Weeds</h3>
                        <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest mt-1">Architecture & Solutioning</p>
                      </div>
                    </div>
                    
                    <Tabs defaultValue="program" className="w-full md:w-auto">
                      <TabsList className="bg-slate-100 p-1.5 rounded-2xl border-2 border-slate-200/50">
                        <TabsTrigger value="program" className="rounded-xl px-8 py-2.5 font-black text-[11px] uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-xl transition-all">
                          Program Level
                        </TabsTrigger>
                        <TabsTrigger value="technical" className="rounded-xl px-8 py-2.5 font-black text-[11px] uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-xl transition-all">
                          Technical View
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>

                  <Tabs defaultValue="program" className="w-full">
                    <TabsContent value="program" className="mt-0 space-y-12">
                      <ArchitectureDiagram diagram={project.programDiagram} />
                    </TabsContent>
                    <TabsContent value="technical" className="mt-0 space-y-12">
                      <ArchitectureDiagram diagram={project.technicalDiagram} />
                    </TabsContent>
                  </Tabs>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-8">
                      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Implementation Challenges</h4>
                      <div className="space-y-8">
                        {project.technicalWeeds.map((weed, i) => (
                          <div key={i} className="flex gap-6 group">
                            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 font-black group-hover:bg-primary transition-colors">
                              {i + 1}
                            </div>
                            <div className="space-y-2">
                              <h5 className="font-black text-slate-900 uppercase tracking-tight text-sm">{weed.challenge}</h5>
                              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                                {weed.solution}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-8">
                      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Technical Artifacts</h4>
                      <div className="grid grid-cols-1 gap-4">
                        {project.technicalArtifacts.map((art, i) => (
                          <div key={i} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
                            <div className="flex items-center gap-3">
                              <art.icon className="h-5 w-5 text-primary" />
                              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{art.label}</span>
                            </div>
                            <pre className="text-[11px] font-mono text-emerald-400 bg-black/50 p-4 rounded-xl overflow-x-auto border border-white/5">
                              <code>{art.content}</code>
                            </pre>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* 3. Strategic ROI Section */}
                <section className="relative p-12 md:p-20 bg-emerald-600 rounded-[4rem] text-white overflow-hidden shadow-3xl shadow-emerald-200">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                    <CheckCircle2 className="w-96 h-96" />
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
                    <div className="space-y-10">
                      <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-xl">
                        <Zap className="h-6 w-6 text-emerald-300" />
                        <span className="text-xs font-black uppercase tracking-[0.2em]">ROI & Business Impact</span>
                      </div>
                      <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85]">Measuring <span className="text-emerald-200 italic">Success</span>.</h3>
                      <p className="text-emerald-50 text-2xl md:text-3xl leading-relaxed font-medium italic border-l-8 border-emerald-400 pl-8">
                        "{project.orgImpact}"
                      </p>
                    </div>
                    
                    <div className="space-y-12">
                      <h4 className="text-xs font-black uppercase tracking-[0.4em] text-emerald-300">Strategic Rationale</h4>
                      <div className="space-y-10">
                        {project.strategicDecisions.map((sd, i) => (
                          <div key={i} className="space-y-4 group">
                            <div className="flex items-center gap-4">
                              <Scale className="h-6 w-6 text-emerald-300 group-hover:rotate-12 transition-transform" />
                              <h5 className="font-black text-2xl tracking-tight leading-none">{sd.decision}</h5>
                            </div>
                            <p className="text-emerald-100/80 text-sm md:text-base leading-relaxed font-medium pl-10">
                              {sd.rationale}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Footer Actions */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-16 border-t border-slate-100">
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="px-5 py-2 bg-slate-100 text-slate-600 font-black text-[10px] uppercase tracking-[0.2em] rounded-xl border-2 border-slate-200/50">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <Button size="lg" className="rounded-2xl px-12 h-20 font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/20 group">
                    Discuss Strategy <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-3 transition-transform" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {/* Career CTA */}
      <div className="pt-24 text-center border-t border-slate-100">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-10 max-w-4xl mx-auto">
          Built for <span className="text-primary italic">Resilience</span> at Speed.
        </h2>
        <p className="text-muted-foreground text-xl md:text-3xl max-w-3xl mx-auto leading-relaxed mb-16 font-medium">
          Let's discuss how we can build high-assurance programs that align with your organizational risk profile.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8">
          <Button size="lg" className="rounded-3xl px-16 h-20 font-black uppercase tracking-widest text-sm shadow-2xl shadow-primary/30">
            Secure Your Future
          </Button>
          <Button variant="outline" size="lg" className="rounded-3xl px-16 h-20 font-black uppercase tracking-widest text-sm border-4 hover:bg-slate-50 transition-all">
            Full Career Spec
          </Button>
        </div>
      </div>
    </div>
  );
}
