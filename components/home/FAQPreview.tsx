"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FAQS } from "@/lib/constants";

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const preview = FAQS.slice(0, 5);

  return (
    <section className="py-28 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(124,12,184,0.12), transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-[0.2em]"
            style={{ background: "rgba(168,85,247,0.1)", color: "#7C0CB8", border: "1px solid rgba(168,85,247,0.25)" }}>
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] mb-4">
            Questions{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #7C0CB8 50%, #4f46e5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Fréquentes
            </span>
          </h2>
          <p className="text-[#4a4a6a] text-lg">
            Tout ce que vous devez savoir sur IRON TV PRO MAX.
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {preview.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div
                className="rounded-xl overflow-hidden transition-all duration-300 bg-white"
                style={{
                  border: openIndex === i
                    ? "1px solid rgba(168,85,247,0.45)"
                    : "1px solid rgba(168,85,247,0.15)",
                  boxShadow: openIndex === i
                    ? "0 4px 24px rgba(168,85,247,0.12)"
                    : "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left gap-4 group"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#1a1a2e] group-hover:text-[#7C0CB8] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                    style={
                      openIndex === i
                        ? { background: "linear-gradient(135deg, #a855f7, #6366f1)", boxShadow: "0 0 10px rgba(168,85,247,0.4)" }
                        : { background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.25)" }
                    }
                  >
                    {openIndex === i
                      ? <Minus className="w-3.5 h-3.5 text-white" />
                      : <Plus className="w-3.5 h-3.5" style={{ color: "#7C0CB8" }} />
                    }
                  </div>
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
                      <p className="px-5 pb-5 text-sm text-[#4a4a6a] leading-relaxed border-t pt-3"
                        style={{ borderColor: "rgba(168,85,247,0.12)" }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: "#7C0CB8" }}
          >
            Voir toutes les questions fréquentes →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
