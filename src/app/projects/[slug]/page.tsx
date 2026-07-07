import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitFork, CheckCircle2, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectTimeline from "@/components/ProjectTimeline";
import ProjectBgPattern from "@/components/ProjectBgPattern";
import MouseFollower from "@/components/MouseFollower";
import FloatingOrbs from "@/components/FloatingOrbs";

export const dynamic = "force-dynamic";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <MouseFollower />
      <FloatingOrbs />
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-card-border text-sm text-muted hover:text-foreground transition-all duration-200"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
      </div>

      <div className="min-h-screen bg-background relative z-10">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-30`} />
          <ProjectBgPattern type={project.slug} />
          <div className="absolute top-1/3 -left-32 hero-glow animate-pulse-glow" />
          <div className="absolute bottom-1/3 -right-32 hero-glow animate-pulse-glow" style={{ animationDelay: "2s" }} />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-muted mb-6">
              <Sparkles size={14} className="text-primary" />
              Built {project.built}
              {project.isDeployed && (
                <span className="flex items-center gap-1 text-primary ml-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Deployed
                </span>
              )}
            </div>
            <span className="text-7xl md:text-9xl font-black gradient-text block mb-4">
              {project.icon}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted font-medium mb-3">
              {project.tagline}
            </p>
            <p className="text-base text-muted-dark max-w-2xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 -mt-12 relative z-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-card-border glow-card">
                  <div className="text-lg font-semibold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">Tech Stack</span>
              <h2 className="section-heading mt-2">
                Built With <span className="gradient-text">Precision</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.techStack.map((stack) => (
                <div key={stack.category} className="p-5 rounded-xl border border-card-border bg-card glow-card">
                  <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">{stack.category}</h3>
                  <ul className="space-y-2">
                    {stack.items.map((item) => (
                      <li key={item} className="text-sm text-muted flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">Features</span>
              <h2 className="section-heading mt-2">
                What It <span className="gradient-text">Does</span>
              </h2>
              <p className="text-muted max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {project.features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl border border-card-border bg-card glow-card relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-xs font-mono text-primary/60 mb-2 block relative">0{i + 1}</span>
                  <h3 className="text-base font-semibold mb-2 relative">{feature.title}</h3>
                  <p className="text-sm text-muted leading-relaxed relative">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">Architecture</span>
              <h2 className="section-heading mt-2">
                How It <span className="gradient-text">Works</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-muted leading-relaxed text-sm">
                  {project.architecture}
                </p>
              </div>
              <div className="bg-card border border-card-border rounded-xl p-5 overflow-x-auto glow-card">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-card-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="text-xs text-muted ml-2 font-mono">project/</span>
                </div>
                <pre className="text-xs font-mono text-muted leading-relaxed">
                  {project.fileTree.map((line, i) => (
                    <div key={i} className="whitespace-pre">{line}</div>
                  ))}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <ProjectTimeline events={project.timeline} />

        {/* CTA */}
        <section className="py-20 border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="section-heading mb-8">
              Explore the <span className="gradient-text">Code</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-card-border bg-card text-foreground font-medium text-sm hover:bg-white/5 transition-all duration-200"
              >
                <GitFork size={16} /> View on GitHub
              </a>
              {project.isDeployed && (
                <a
                  href={project.liveUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-black font-semibold text-sm hover:bg-primary-dark transition-all duration-200 glow"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
            <div className="mt-8">
              <Link
                href="/"
                className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                <ArrowLeft size={14} /> Back to all projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
