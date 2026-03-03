import { ArrowRight, BarChart, GraduationCap, Layout, MessageSquare, Users, Zap, Shield, Lock, Search, FileCheck, Globe, ClipboardCheck, Settings, Target, Scale, ShieldCheck, Cpu, Rocket, Briefcase, Award, TrendingUp, History, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-40 overflow-hidden border-b bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <Badge variant="secondary" className="px-6 py-1.5 text-xs font-black uppercase tracking-[0.3em] rounded-full mb-4 border-2 border-slate-100">
                15+ Years Strategic Security Leadership
              </Badge>
              <h1 className="text-5xl md:text-8xl font-black tracking-tight max-w-5xl leading-[0.85]">
                Architecting <span className="text-primary italic">High-Assurance</span> Security Programs.
              </h1>
              <p className="text-slate-500 text-xl md:text-2xl max-w-3xl leading-relaxed font-medium">
                I build security programs that align technical GRC, IAM, and Risk Strategy with organizational growth—mitigating threats before they scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-8 w-full justify-center">
                <a href="#experience" className="w-full sm:w-auto">
                  <Button size="lg" className="gap-3 px-10 h-16 rounded-2xl w-full text-sm font-black uppercase tracking-widest shadow-2xl shadow-primary/30">
                    View Impact Journey <ArrowRight className="h-5 w-5" />
                  </Button>
                </a>
                <Link to="/projects" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="gap-3 px-10 h-16 rounded-2xl w-full text-sm font-black uppercase tracking-widest border-2 hover:bg-slate-50">
                    Project Deep-Dives <Shield className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats / Impact Grid */}
        <section className="py-12 bg-slate-900 text-white border-y border-slate-800">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { label: "Identity Risk Reduction", val: "80%", icon: Lock },
                { label: "Audit Readiness Time", val: "-40%", icon: TrendingUp },
                { label: "Critical MTTR", val: "-75%", icon: Zap },
                { label: "Vendor Audits/Year", val: "200+", icon: Briefcase }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center md:items-start space-y-2 group">
                  <stat.icon className="h-5 w-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-3xl md:text-5xl font-black tracking-tighter">{stat.val}</span>
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy & Strategy Section */}
        <section className="py-24 bg-white border-b">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100">
                  <Target className="h-5 w-5" />
                  <span className="text-xs font-black uppercase tracking-widest">Leadership Philosophy</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
                  Security is a <span className="text-indigo-600">Business Enabler</span>, Not a Bottleneck.
                </h2>
                <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
                  My approach to leadership is rooted in "Risk-Informed Execution." I don't just implement controls; I build frameworks that empower engineering velocity while maintaining a high-assurance posture.
                </p>
                <div className="space-y-6 pt-4">
                  {[
                    { title: "Governance-as-Code", desc: "Automating compliance baselines into the CI/CD pipeline to remove friction between security and dev teams." },
                    { title: "Zero Trust Maturity", desc: "Moving beyond perimeter security to a per-request identity model that secures the modern remote workforce." },
                    { title: "Transparent Risk Scoring", desc: "Providing executive leadership with quantitative metrics that translate technical debt into business risk." }
                  ].map((p, i) => (
                    <div key={i} className="flex gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-lg">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 uppercase tracking-tight text-sm mb-1">{p.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-medium">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-indigo-100/50 rounded-[3rem] blur-3xl -z-10" />
                <Card className="rounded-[3rem] border-4 border-slate-900 shadow-2xl overflow-hidden bg-slate-900 text-white">
                  <CardHeader className="p-8 md:p-12 border-b border-slate-800 bg-slate-900/50">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center mb-6">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-black leading-tight tracking-tight">Management Philosophy Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 md:p-12 space-y-8">
                    <blockquote className="text-xl md:text-2xl font-black italic leading-relaxed text-indigo-300">
                      "I believe the strongest security programs are those that are invisible to the productive employee but impenetrable to the adversary."
                    </blockquote>
                    <div className="grid grid-cols-1 gap-6 border-t border-slate-800 pt-8">
                      <div className="flex items-center gap-4">
                        <Users className="h-6 w-6 text-indigo-400" />
                        <div>
                          <p className="font-black text-xs uppercase tracking-widest text-slate-400">Team Leadership</p>
                          <p className="font-bold">100+ Cross-functional Mates</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Scale className="h-6 w-6 text-indigo-400" />
                        <div>
                          <p className="font-black text-xs uppercase tracking-widest text-slate-400">Risk Management</p>
                          <p className="font-bold">NIST 800-53 Expert Implementation</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Roles */}
        <section id="experience" className="py-24 border-b bg-slate-50/30">
          <div className="container px-4 md:px-6">
            <div className="space-y-6 mb-16 text-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 mx-auto">
                <History className="h-5 w-5" />
                <span className="text-xs font-black uppercase tracking-widest">Experience Timeline</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">A Career of <span className="text-emerald-600 italic">Scale</span>.</h2>
              <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                From sole-contributor to senior executive—building security assurance into the DNA of high-growth tech firms.
              </p>
            </div>
            <div className="max-w-5xl mx-auto space-y-12">
              {[
                {
                  company: "Fortellar",
                  role: "Senior Security Engineer",
                  period: "Present",
                  description: "Spearheading the enterprise IAM transformation and GRC strategy. Developed a 'Control Once, Comply Many' framework that accelerated SOC2 readiness by 40%.",
                  achievements: ["Automated 30% of control monitoring", "Consolidated 4 identity forests", "Redesigned global RBAC"],
                  skills: ["IAM", "GRC Strategy", "NIST 800-53", "Risk Management"]
                },
                {
                  company: "Strategic Enterprise Firm",
                  role: "Lead Security Strategist",
                  period: "3 Years",
                  description: "Led the vulnerability management program for a global infrastructure footprint. Reduced MTTR for critical findings by 75% through automated ticket integration.",
                  achievements: ["95% remediation rate", "TPRM program overhaul", "Zero major IAM incidents"],
                  skills: ["Vuln Management", "Policy Dev", "TPRM", "ISO 27001"]
                }
              ].map((job, i) => (
                <Card key={i} className="rounded-[2.5rem] border-2 border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white group">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="lg:col-span-4 bg-slate-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Briefcase className="w-24 h-24" />
                      </div>
                      <div>
                        <Badge className="bg-emerald-500 text-white font-black text-[10px] uppercase tracking-widest mb-4 border-none px-3 py-1">
                          {job.period}
                        </Badge>
                        <h3 className="text-3xl font-black leading-tight mb-2">{job.role}</h3>
                        <p className="text-emerald-400 font-black text-sm uppercase tracking-widest">{job.company}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-8">
                        {job.skills.map(s => (
                          <span key={s} className="text-[10px] font-black text-slate-400 uppercase tracking-tight px-2 py-1 bg-slate-800 rounded-lg">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-8 p-10 md:p-12 space-y-8">
                      <p className="text-slate-500 text-xl font-medium leading-relaxed italic">
                        "{job.description}"
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-100 pt-8">
                        {job.achievements.map((ach, j) => (
                          <div key={j} className="flex items-center gap-3 group/item">
                            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-colors">
                              <CheckCircle2 className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-black text-slate-700 uppercase tracking-tight leading-tight">{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Stack Section */}
        <section id="technical" className="py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
              <div className="space-y-8 max-w-xl">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 text-primary rounded-full border border-primary/10">
                  <Cpu className="h-5 w-5" />
                  <span className="text-xs font-black uppercase tracking-widest">Hands-on Expertise</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
                  Technical <span className="text-primary italic">Deep-Roots</span>.
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                  I don't just manage programs—I understand the bits and bytes of identity flow, vulnerability lifecycles, and governance guardrails.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "IAM Architecture", val: 98 },
                    { label: "GRC Implementation", val: 96 },
                    { label: "Vuln Remediation", val: 95 },
                    { label: "Program Ops", val: 92 }
                  ].map((skill, i) => (
                    <div key={i} className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <span>{skill.label}</span>
                        <span>{skill.val}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${skill.val}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 w-full lg:w-1/2">
                {[
                  { title: "Identity", tools: ["Okta", "Azure AD", "SSO", "PAM"], icon: Lock, bg: "bg-slate-900", text: "text-white" },
                  { title: "Compliance", tools: ["NIST", "SOC2", "ISO", "HIPAA"], icon: ShieldCheck, bg: "bg-primary", text: "text-white" },
                  { title: "Vulnerability", tools: ["Qualys", "Tenable", "Rapid7"], icon: Search, bg: "bg-white", text: "text-slate-900" },
                  { title: "Program Ops", tools: ["CI/CD Gov", "KPIs", "Metrics"], icon: Settings, bg: "bg-slate-100", text: "text-slate-900" }
                ].map((stack, i) => (
                  <div key={i} className={`p-8 rounded-[2rem] border-2 border-slate-100 shadow-lg ${stack.bg} ${stack.text} space-y-4 hover:-translate-y-2 transition-transform duration-300`}>
                    <stack.icon className="h-8 w-8 mb-2" />
                    <h4 className="text-xl font-black tracking-tight">{stack.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {stack.tools.map(t => (
                        <span key={t} className="text-[9px] font-black uppercase tracking-widest opacity-60">#{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview Section (CTA) */}
        <section id="projects" className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-10">
              <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 uppercase tracking-[0.4em] text-[10px] font-black px-6 py-2">
                The Portfolio
              </Badge>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85]">
                Into the <span className="text-primary italic underline decoration-8 decoration-primary/20">Weeds</span>.
              </h2>
              <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-medium">
                Detailed architecture diagrams, strategic decision rationale, and risk mitigation profiles for my largest programs.
              </p>
              <div className="pt-6">
                <Link to="/projects">
                  <Button size="lg" className="px-12 h-20 rounded-2xl group text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/40">
                    Explore Strategic Architectures <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 border-t relative overflow-hidden bg-white">
          <div className="container px-4 md:px-6 text-center space-y-10">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none max-w-4xl mx-auto">
              Ready to <span className="text-primary">Scale</span> Your Security Assurance?
            </h2>
            <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
              I'm open to discussing GRC strategy, IAM architecture transformations, or senior security leadership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
              <Button size="lg" className="rounded-2xl px-12 h-16 font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20">
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl px-12 h-16 font-black uppercase tracking-widest text-xs border-4 hover:bg-slate-50">
                LinkedIn Profile
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
