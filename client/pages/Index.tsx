import { ArrowRight, BarChart, Code, Cpu, GraduationCap, Layout, Lightbulb, MessageSquare, Rocket, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/10">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">KM</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Kenneth Mize</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#leadership" className="text-sm font-medium hover:text-primary transition-colors">Leadership</a>
            <a href="#technical" className="text-sm font-medium hover:text-primary transition-colors">Technical</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">Contact Me</Button>
            <Button size="sm">Download CV</Button>
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
                Strategic Leader & Technical Expert
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter max-w-3xl leading-tight">
                Driving <span className="text-primary">Innovation</span> through Strategic Leadership & Technical <span className="text-primary">Excellence</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
                Bridging the gap between high-level management and deep-tech execution to build high-performing teams and scalable systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button size="lg" className="gap-2">
                  View Leadership Portfolio <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Technical Roadmap <Code className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Management Section */}
        <section id="leadership" className="py-24 bg-slate-50/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
              <div className="space-y-4 max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Leadership & Management</h2>
                <p className="text-muted-foreground text-lg">
                  Empowering teams through clear vision, strategic planning, and a culture of continuous growth and accountability.
                </p>
              </div>
              <Button variant="ghost" className="gap-2 group">
                Deep dive into management philosophy <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Team Building & Growth",
                  description: "Scaling engineering organizations from scratch, fostering diversity, and mentoring future leaders.",
                  icon: Users,
                  color: "bg-blue-500/10 text-blue-600"
                },
                {
                  title: "Strategic Planning",
                  description: "Aligning technical roadmaps with business objectives to deliver sustainable long-term value.",
                  icon: BarChart,
                  color: "bg-emerald-500/10 text-emerald-600"
                },
                {
                  title: "Operational Excellence",
                  description: "Implementing Agile workflows and modern DevOps practices to increase velocity and quality.",
                  icon: Zap,
                  color: "bg-amber-500/10 text-amber-600"
                },
                {
                  title: "Innovation Culture",
                  description: "Creating an environment where experimentation is encouraged and failure is a learning opportunity.",
                  icon: Lightbulb,
                  color: "bg-purple-500/10 text-purple-600"
                },
                {
                  title: "Cross-functional Collaboration",
                  description: "Building bridges between product, design, and engineering to ensure seamless execution.",
                  icon: MessageSquare,
                  color: "bg-rose-500/10 text-rose-600"
                },
                {
                  title: "Mentorship & Coaching",
                  description: "Developing talent through personalized growth plans and consistent feedback loops.",
                  icon: GraduationCap,
                  color: "bg-cyan-500/10 text-cyan-600"
                }
              ].map((item, i) => (
                <Card key={i} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
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
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Capabilities</h2>
                  <p className="text-muted-foreground text-lg">
                    Hands-on expertise in modern full-stack development, distributed systems, and cloud infrastructure.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      label: "Architecture & Scalability",
                      value: 95,
                      icon: Layout
                    },
                    {
                      label: "Full-Stack Development (React/Node)",
                      value: 98,
                      icon: Code
                    },
                    {
                      label: "Cloud Native & Infrastructure (AWS/K8s)",
                      value: 90,
                      icon: Cpu
                    },
                    {
                      label: "Performance Optimization",
                      value: 92,
                      icon: Rocket
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
                    <h3 className="text-xl font-bold">Frontend</h3>
                    <p className="text-slate-400 text-sm">React, Next.js, TypeScript, Tailwind, Redux, GraphQL.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-primary text-primary-foreground space-y-2">
                    <h3 className="text-xl font-bold">Backend</h3>
                    <p className="text-primary-foreground/70 text-sm">Node.js, Go, Python, PostgreSQL, Redis, MongoDB.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-secondary space-y-2 border">
                    <h3 className="text-xl font-bold text-secondary-foreground">DevOps</h3>
                    <p className="text-muted-foreground text-sm">Docker, Terraform, GitHub Actions, CI/CD pipelines.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-100 space-y-2 border">
                    <h3 className="text-xl font-bold text-slate-900">Security</h3>
                    <p className="text-slate-600 text-sm">OAuth2, JWT, Pentesting, OWASP, Compliance (SOC2/GDPR).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-slate-50/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Kenneth Mize</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over 15 years of experience in the technology sector, I've navigated the spectrum from a sole contributor to leading large, cross-functional engineering teams. My passion lies at the intersection of leadership and technology—believing that the best products are built by teams that feel empowered, heard, and technically challenged.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Exp</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">100+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Team Mates</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">20+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">Awards</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 border-t bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent -z-10" />
          <div className="container px-4 md:px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to build the future?</h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, strategic consulting, or technical mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-slate-900 hover:bg-slate-200">
                Let's Talk
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800">
                Follow on LinkedIn
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">KM</span>
              </div>
              <span className="text-sm font-bold tracking-tight">Kenneth Mize</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Kenneth Mize. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">GitHub</span>
                <Code className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Users className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
