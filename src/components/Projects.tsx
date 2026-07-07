"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitFork, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectBgPattern from "./ProjectBgPattern";

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
          {projects.map((project, i) => {
            const allTags = project.techStack.flatMap((s) => s.items);
            const displayTags = allTags.slice(0, 4);
            const extraCount = allTags.length - displayTags.length;

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-card-border bg-card overflow-hidden glow-card"
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className={`relative h-48 flex items-center justify-center bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                    <ProjectBgPattern type={project.slug} />
                    <div className="relative z-10 text-center">
                      <span className="text-5xl font-bold text-white/20 group-hover:scale-110 transition-transform duration-500 block">
                        {project.icon}
                      </span>
                    </div>
                    {project.isDeployed && (
                      <span className="absolute top-3 right-3 z-10 px-2.5 py-1 text-[10px] font-medium rounded-full bg-primary/20 border border-primary/30 text-primary backdrop-blur-sm">
                        Live
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-primary/70 font-medium mb-3">{project.tagline}</p>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {displayTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                      {extraCount > 0 && (
                        <span className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/20 text-primary">
                          +{extraCount} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                        >
                          <GitFork size={14} /> Source
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1.5"
                          >
                            <ExternalLink size={14} /> Live
                          </a>
                        )}
                      </div>
                      <span className="text-sm text-primary font-medium inline-flex items-center gap-1 group/link">
                        Details <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
