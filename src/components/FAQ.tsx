"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What services does NOVA CODE offer?",
    a: "We offer end-to-end development services including web applications, mobile-responsive websites, UI/UX design, API development, and performance optimization. Our stack spans React, Next.js, Node.js, and modern CSS frameworks.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary based on scope and complexity. A standard landing page can be delivered in 1-2 weeks, while full-scale web applications typically take 4-8 weeks. We provide detailed timelines during our initial consultation.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer both fixed-price and hourly rates depending on project requirements. Every project begins with a free consultation to understand your needs, after which we provide a transparent, itemized quote with no hidden fees.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Absolutely. We offer maintenance packages to keep your project running smoothly post-launch. This includes bug fixes, updates, performance monitoring, and feature enhancements as needed.",
  },
  {
    q: "How do we get started?",
    a: "Simply reach out via the contact form below or email us directly. We'll schedule a free discovery call to discuss your vision, goals, and how we can bring your project to life.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 md:py-36">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">FAQ</span>
          <h2 className="section-heading mt-3">
            Got <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto mt-4 text-lg leading-relaxed">
            Find answers to common questions about our process, pricing, and partnership.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-card-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm font-medium pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-muted shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
