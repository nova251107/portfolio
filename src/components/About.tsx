"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Server, Zap } from "lucide-react";

const skills = [
  { label: "Frontend", icon: Code2, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Design", icon: Palette, items: ["Figma", "UI/UX", "Motion Design", "Responsive"] },
  { label: "Backend", icon: Server, items: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL"] },
  { label: "Tools", icon: Zap, items: ["Git", "Docker", "AWS", "Vercel"] },
];

const stats = [
  { value: "10+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Technologies" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">About</span>
          <h2 className="section-heading mt-3">
            Who <span className="gradient-text">We Are</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            At NOVA CODE, we turn ideas into powerful digital realities. With expertise 
            across the full stack, we deliver solutions that are as beautiful as they are functional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl border border-card-border bg-card"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl border border-card-border bg-card hover:border-primary/20 transition-all duration-300 glow-card"
            >
              <skill.icon size={28} className="text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-3">{skill.label}</h3>
              <ul className="space-y-1.5">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-muted flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
