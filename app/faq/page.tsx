"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle, Search } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowButton from "@/components/ui/GlowButton";
import { FAQS, SITE_NAME } from "@/lib/constants";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filtered = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white pt-40 pb-24">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.2), transparent 70%)" }}
        />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, rgba(44,22,181,0.15), transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-[0.2em]"
            style={{ background: "rgba(168,85,247,0.1)", color: "#7C0CB8", border: "1px solid rgba(168,85,247,0.25)" }}>
            FAQ
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a1a2e] mb-5">
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
          </h1>
          <p className="text-[#4a4a6a] text-lg">
            Trouvez des réponses à vos questions sur {SITE_NAME}.
          </p>
        </AnimatedSection>

        {/* Search */}
        <AnimatedSection delay={0.1} className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "#7C0CB8" }} />
            <input
              type="text"
              placeholder="Rechercher une question..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl text-[#1a1a2e] placeholder-[#4a4a6a]/40 focus:outline-none transition-all duration-300 bg-white"
              style={{
                border: "1px solid rgba(168,85,247,0.25)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.border = "1px solid rgba(168,85,247,0.55)";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(168,85,247,0.08)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.border = "1px solid rgba(168,85,247,0.25)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>
        </AnimatedSection>

        {/* FAQs */}
        <div className="space-y-3 mb-12">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-[#4a4a6a]/50">
              Aucune question trouvée. Essayez un autre terme de recherche.
            </div>
          ) : (
            filtered.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
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
                        <div className="px-5 pb-5 pt-3" style={{ borderTop: "1px solid rgba(168,85,247,0.1)" }}>
                          <p className="text-sm text-[#4a4a6a] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))
          )}
        </div>

        {/* Still have questions */}
        <AnimatedSection delay={0.3}>
          <div className="text-center rounded-3xl p-10 bg-white"
            style={{
              border: "1px solid rgba(168,85,247,0.15)",
              boxShadow: "0 8px 40px rgba(124,12,184,0.08)",
            }}
          >
            <MessageCircle className="w-10 h-10 mx-auto mb-4"
              style={{ color: "#25D366", filter: "drop-shadow(0 0 8px rgba(37,211,102,0.4))" }}
            />
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1a1a2e] mb-3">
              D&apos;autres Questions ?
            </h2>
            <p className="text-[#4a4a6a] mb-6 text-sm max-w-sm mx-auto">
              Notre équipe de support est disponible 24h/24, 7j/7 sur WhatsApp pour répondre à toutes vos questions.
            </p>
            <GlowButton variant="whatsapp" showIcon>
              Nous Contacter
            </GlowButton>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
