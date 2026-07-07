"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    text: "NOVA CODE transformed our digital presence. The attention to detail and performance optimization exceeded our expectations. Truly a premium experience.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Founder, DesignLab",
    text: "Working with NOVA CODE was an absolute pleasure. They delivered a complex platform ahead of schedule with zero compromises on quality.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "CTO, InnoVentures",
    text: "The level of craftsmanship in every component is remarkable. Our users consistently compliment the smooth, polished experience they built for us.",
    rating: 5,
  },
];

export default function Review() {
  const [form, setForm] = useState({ name: "", role: "", text: "", rating: 5 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.text) return;
    setSubmitted(true);
  };

  return (
    <section id="reviews" className="relative py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Testimonials</span>
          <h2 className="section-heading mt-3">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-card-border bg-card glow-card"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-muted-dark">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Leave a <span className="gradient-text">Review</span>
          </h3>
          {submitted ? (
            <div className="text-center p-8 rounded-2xl border border-primary/20 bg-primary/5">
              <Send size={32} className="text-primary mx-auto mb-3" />
              <p className="text-lg font-medium">Thank you for your feedback!</p>
              <p className="text-sm text-muted mt-1">Your review has been submitted.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setForm({ ...form, rating: star })}
                    className="transition-colors"
                  >
                    <Star
                      size={24}
                      className={star <= form.rating ? "fill-primary text-primary" : "text-muted-dark"}
                    />
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary/50 transition-colors text-sm"
                required
              />
              <input
                type="text"
                placeholder="Your Role (optional)"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary/50 transition-colors text-sm"
              />
              <textarea
                placeholder="Your Review"
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
                required
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-primary text-black font-semibold text-sm hover:bg-primary-dark transition-all duration-200 inline-flex items-center justify-center gap-2 glow"
              >
                <Send size={16} /> Submit Review
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
