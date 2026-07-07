"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Send, MessageSquare } from "lucide-react";

interface ReviewItem {
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

const defaultTestimonials: ReviewItem[] = [
  {
    name: "Sarah Chen",
    role: "CEO, TechFlow",
    text: "NOVA CODE transformed our digital presence. The attention to detail and performance optimization exceeded our expectations. Truly a premium experience.",
    rating: 5,
    date: "2026-06-01",
  },
  {
    name: "James Wilson",
    role: "Founder, DesignLab",
    text: "Working with NOVA CODE was an absolute pleasure. They delivered a complex platform ahead of schedule with zero compromises on quality.",
    rating: 5,
    date: "2026-06-15",
  },
  {
    name: "Priya Patel",
    role: "CTO, InnoVentures",
    text: "The level of craftsmanship in every component is remarkable. Our users consistently compliment the smooth, polished experience they built for us.",
    rating: 5,
    date: "2026-06-20",
  },
];

export default function Review() {
  const [reviews, setReviews] = useState<ReviewItem[]>(defaultTestimonials);
  const [form, setForm] = useState({ name: "", role: "", text: "", rating: 5 });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("nova-reviews");
    if (stored) {
      try {
        const parsed: ReviewItem[] = JSON.parse(stored);
        setReviews([...defaultTestimonials, ...parsed]);
      } catch { }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.text) return;
    const newReview: ReviewItem = {
      name: form.name,
      role: form.role || "Guest",
      text: form.text,
      rating: form.rating,
      date: new Date().toISOString().split("T")[0],
    };
    const existing = JSON.parse(localStorage.getItem("nova-reviews") || "[]");
    localStorage.setItem("nova-reviews", JSON.stringify([...existing, newReview]));
    setReviews([...reviews, newReview]);
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

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {reviews.map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
              className={`p-5 rounded-2xl border glow-card ${
                i >= defaultTestimonials.length
                  ? "border-primary/20 bg-primary/[0.03]"
                  : "border-card-border bg-card"
              }`}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-dark">{t.role}</div>
                </div>
                {i >= defaultTestimonials.length && (
                  <span className="text-[10px] text-primary/60">Just now</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <div className="p-6 rounded-2xl border border-card-border bg-card">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare size={18} className="text-primary" />
              <h3 className="text-lg font-semibold">
                Leave a <span className="gradient-text">Review</span>
              </h3>
            </div>
            {submitted ? (
              <div className="text-center py-6">
                <Send size={28} className="text-primary mx-auto mb-3" />
                <p className="text-base font-medium">Thank you!</p>
                <p className="text-sm text-muted mt-1">Your review is now live on the site.</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", role: "", text: "", rating: 5 });
                  }}
                  className="mt-4 text-sm text-primary hover:underline"
                >
                  Write another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex justify-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setForm({ ...form, rating: star })}
                      className="transition-colors cursor-pointer bg-transparent border-none p-0.5"
                    >
                      <Star
                        size={20}
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
                  className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary/50 transition-colors text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Your Role (optional)"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary/50 transition-colors text-sm"
                />
                <textarea
                  placeholder="Your Review"
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  rows={3}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-card border border-card-border text-foreground placeholder:text-muted-dark focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-primary text-black font-semibold text-sm hover:bg-primary-dark transition-all duration-200 inline-flex items-center justify-center gap-2 glow"
                >
                  <Send size={15} /> Submit Review
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
