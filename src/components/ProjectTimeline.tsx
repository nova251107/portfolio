"use client";

import { motion } from "framer-motion";
import { TimelineEvent } from "@/data/projects";

export default function ProjectTimeline({ events }: { events: TimelineEvent[] }) {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Timeline</span>
          <h2 className="section-heading mt-2">
            How It Was <span className="gradient-text">Built</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            A chronological look at the development journey — from concept to launch.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50" />

          <div className="space-y-10">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14"
              >
                <div
                  className={`absolute left-[11px] w-[18px] h-[18px] rounded-full border-2 bg-background ${
                    i === events.length - 1
                      ? "border-primary"
                      : "border-border"
                  }`}
                  style={{
                    boxShadow: i === events.length - 1 ? "0 0 12px rgba(0,245,212,0.3)" : undefined,
                  }}
                />
                <span className="text-xs font-mono text-primary/80 mb-1 block">{event.date}</span>
                <h3 className="text-base font-semibold mb-1">{event.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
