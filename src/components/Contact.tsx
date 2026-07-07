"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, GitFork, Link2, Globe, MapPin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-card-border">
                <Mail size={20} className="text-primary shrink-0" />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-sm text-muted">hello@novacode.dev</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-card-border">
                <MapPin size={20} className="text-primary shrink-0" />
                <div>
                  <div className="text-sm font-medium">Location</div>
                  <div className="text-sm text-muted">Remote / Worldwide</div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {[
                  { icon: GitFork, href: "#", label: "GitHub" },
                  { icon: Link2, href: "#", label: "LinkedIn" },
                  { icon: Globe, href: "#", label: "Twitter" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 rounded-xl bg-card border border-card-border text-muted hover:text-primary hover:border-primary/30 transition-all duration-200"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="text-center p-10 rounded-2xl border border-primary/20 bg-primary/5">
                <Send size={40} className="text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-muted text-sm">Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary/50 transition-colors text-sm"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary/50 transition-colors text-sm"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary/50 transition-colors text-sm"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-primary text-black font-semibold text-sm hover:bg-primary-dark transition-all duration-200 inline-flex items-center justify-center gap-2 glow"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
