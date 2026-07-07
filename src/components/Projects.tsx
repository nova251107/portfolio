"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitFork } from "lucide-react";

const projects = [
  {
    title: "Quantum Dashboard",
    description: "A real-time analytics dashboard with interactive charts, dark theme, and AI-powered insights for data-driven decisions.",
    tags: ["Next.js", "TypeScript", "Tailwind", "D3.js"],
    image: "QD",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Eclipse E-Commerce",
    description: "Full-stack e-commerce platform with seamless checkout, inventory management, and a premium user experience.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "EE",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Nova AI Platform",
    description: "AI-powered content generation platform with advanced NLP, custom training, and enterprise-grade security.",
    tags: ["Python", "FastAPI", "React", "OpenAI"],
    image: "NA",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Orbit Portfolio",
    description: "A stunning portfolio builder for creatives with drag-and-drop, custom domains, and analytics.",
    tags: ["Next.js", "Framer Motion", "Tailwind", "Sanity"],
    image: "OP",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Portfolio</span>
          <h2 className="section-heading mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            Each project is crafted with precision, blending innovative design with 
            robust engineering to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-card-border bg-card overflow-hidden glow-card"
            >
              <div className={`h-48 flex items-center justify-center bg-gradient-to-br ${project.gradient}`}>
                <span className="text-4xl font-bold text-white/20">{project.image}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1.5">
                    <ExternalLink size={14} /> Live
                  </a>
                  <a href="#" className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1.5">
                    <GitFork size={14} /> Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
