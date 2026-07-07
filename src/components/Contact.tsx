"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, GitFork, Link2, Globe, MapPin, ExternalLink } from "lucide-react";

const EMAIL = "gadoyavatsalya@gmail.com";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(subject || "Portfolio Inquiry")}&body=${body}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Contact</span>
          <h2 className="section-heading mt-3">
            Let&apos;s Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            Have a project in mind? Reach out and let&apos;s create something extraordinary.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-card-border hover:border-primary/30 transition-all duration-200 group"
              >
                <Mail size={20} className="text-primary shrink-0" />
                <div className="flex-1">
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-sm text-muted group-hover:text-foreground transition-colors">{EMAIL}</div>
                </div>
                <ExternalLink size={14} className="text-muted group-hover:text-primary transition-colors" />
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-card-border">
                <MapPin size={20} className="text-primary shrink-0" />
                <div>
                  <div className="text-sm font-medium">Location</div>
                  <div className="text-sm text-muted">Remote / Worldwide</div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {[
                  { icon: GitFork, href: "https://github.com/nova251107", label: "GitHub" },
                  { icon: Link2, href: "#", label: "LinkedIn" },
                  { icon: Globe, href: "#", label: "Twitter" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-xl bg-card border border-card-border text-muted hover:text-primary hover:border-primary/30 transition-all duration-200"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>

              <a
                href={GMAIL_COMPOSE}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-primary text-black font-semibold text-sm hover:bg-primary-dark transition-all duration-200 inline-flex items-center justify-center gap-2 glow mt-6"
              >
                <Mail size={16} /> Send me an Email
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  required
                />
              </div>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary/50 transition-colors text-sm"
              />
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
                required
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-primary text-black font-semibold text-sm hover:bg-primary-dark transition-all duration-200 inline-flex items-center justify-center gap-2 glow"
              >
                <Send size={16} /> Send via Gmail
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
