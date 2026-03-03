import { Link, useLocation } from "react-router-dom";
import { Shield, Terminal, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  const navLinks = [
    { name: "Experience", href: "/#experience" },
    { name: "Leadership", href: "/#leadership" },
    { name: "Technical", href: "/#technical" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/10 font-inter">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="text-primary-foreground h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">Kenneth Mize</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => {
              const isProjects = link.href === "/projects";
              const isActive = isProjects
                ? location.pathname === "/projects"
                : (location.pathname === "/" && (location.hash === "" ? link.href === "/" : link.href.includes(location.hash)));

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary font-bold" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">Contact</Button>
            <Button size="sm">Download Resume</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {children}
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
