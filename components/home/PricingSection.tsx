"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, Zap, Sparkles } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { PRICING_PLANS } from "@/lib/constants";

const badgeGradients: Record<string, string> = {
  orange: "linear-gradient(135deg, #f97316, #ea580c)",
  blue:   "linear-gradient(135deg, #3b82f6, #1d4ed8)",
  purple: "linear-gradient(135deg, #a855f7, #6366f1)",
  green:  "linear-gradient(135deg, #10b981, #059669)",
};

const ctaGradients: Record<string, string> = {
  orange: "linear-gradient(135deg, #f97316, #ea580c)",
  blue:   "linear-gradient(135deg, #3b82f6, #1d4ed8)",
  purple: "linear-gradient(135deg, #a855f7, #6366f1)",
  green:  "linear-gradient(135deg, #10b981, #059669)",
};

const durationColors: Record<string, string> = {
  orange: "#ea580c",
  blue:   "#1d4ed8",
  purple: "#7C0CB8",
  green:  "#059669",
};

const durationBg: Record<string, string> = {
  orange: "rgba(249,115,22,0.08)",
  blue:   "rgba(59,130,246,0.08)",
  purple: "rgba(168,85,247,0.08)",
  green:  "rgba(16,185,129,0.08)",
};

export default function PricingSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #faf8ff 0%, #f0edff 100%)" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.2), transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, rgba(44,22,181,0.15), transparent 70%)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-[0.2em]"
            style={{ background: "rgba(168,85,247,0.1)", color: "#7C0CB8", border: "1px solid rgba(168,85,247,0.25)" }}>
            <Sparkles className="w-3.5 h-3.5" />
            Nos Formules IPTV
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] mb-4">
            Choisissez Votre{" "}
            <span style={{
              background: "linear-gradient(135deg, #a855f7 0%, #7C0CB8 50%, #4f46e5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Abonnement
            </span>
          </h2>
          <p className="text-[#4a4a6a] max-w-xl mx-auto">
            Toutes les formules incluent l&apos;accès complet à nos chaînes premium et VOD.
            Commandez instantanément via WhatsApp ou Telegram.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative flex flex-col rounded-3xl overflow-hidden bg-white"
              style={
                plan.popular
                  ? {
                      border: "2px solid #a855f7",
                      boxShadow: "0 8px 40px rgba(168,85,247,0.22), 0 2px 8px rgba(168,85,247,0.1)",
                    }
                  : {
                      border: "1px solid rgba(168,85,247,0.15)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    }
              }
            >
              {/* Top banner for popular / duo */}
              {(plan.popular || plan.badgeStyle === "green") && (
                <div
                  className="w-full py-2.5 text-center text-xs font-extrabold text-white tracking-wider"
                  style={{ background: badgeGradients[plan.badgeStyle] }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="flex flex-col flex-1 p-6">
                {/* Duration — primary visual anchor */}
                <div
                  className="rounded-xl px-4 py-3 mb-5 flex items-center justify-between gap-2"
                  style={{ background: durationBg[plan.badgeStyle] }}
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] mb-1"
                      style={{ color: durationColors[plan.badgeStyle], opacity: 0.7 }}>
                      {plan.name}
                    </p>
                    <p
                      className="text-2xl font-extrabold leading-none tracking-tight"
                      style={{ color: durationColors[plan.badgeStyle] }}
                    >
                      {plan.subtitle}
                    </p>
                  </div>
                  {/* Discount pill — only for non-banner plans */}
                  {plan.badgeStyle !== "purple" && plan.badgeStyle !== "green" && (
                    <span
                      className="text-sm font-extrabold px-3 py-1.5 rounded-full text-white shrink-0"
                      style={{ background: badgeGradients[plan.badgeStyle] }}
                    >
                      {plan.discount}
                    </span>
                  )}
                </div>

                {/* Price block */}
                <div className="mb-1">
                  <span
                    className="text-4xl sm:text-5xl font-extrabold leading-none"
                    style={
                      plan.popular
                        ? {
                            background: "linear-gradient(135deg, #a855f7, #7C0CB8)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }
                        : { color: "#1a1a2e" }
                    }
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm text-[#4a4a6a]/60 ml-1">/ {plan.period}</span>
                </div>

                <p className="text-xs text-[#4a4a6a]/50 mb-1">
                  Ancien prix :{" "}
                  <span className="line-through font-medium">{plan.originalPrice}</span>
                </p>

                <div className="flex items-center gap-2 flex-wrap mb-4">
                  <p className="text-xs font-bold" style={{ color: "#7C0CB8" }}>
                    soit {plan.monthlyPrice}
                  </p>
                  {plan.savings && (
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(34,197,94,0.1)",
                        color: "#16a34a",
                        border: "1px solid rgba(34,197,94,0.25)",
                      }}
                    >
                      {plan.savings}
                    </span>
                  )}
                </div>

                {/* Divider */}
                <div
                  className="h-px mb-5"
                  style={{
                    background: plan.popular
                      ? "linear-gradient(90deg, transparent, rgba(168,85,247,0.45), transparent)"
                      : "linear-gradient(90deg, transparent, rgba(168,85,247,0.15), transparent)",
                  }}
                />

                {/* Features */}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <div
                        className="w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          width: "18px",
                          height: "18px",
                          background: "linear-gradient(135deg, #22c55e, #16a34a)",
                          boxShadow: "0 2px 6px rgba(34,197,94,0.3)",
                        }}
                      >
                        <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-xs text-[#4a4a6a] leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href={`/commande?plan=${plan.checkoutId}`}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white text-center transition-all duration-300"
                    style={{
                      background: ctaGradients[plan.badgeStyle],
                      boxShadow: plan.popular
                        ? "0 4px 20px rgba(168,85,247,0.4)"
                        : "0 4px 14px rgba(0,0,0,0.12)",
                    }}
                  >
                    <Zap className="w-4 h-4 shrink-0" />
                    {plan.cta}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-10 text-center">
          <Link
            href="/tarifs"
            className="text-sm font-semibold underline underline-offset-4 transition-colors hover:opacity-70"
            style={{ color: "#7C0CB8" }}
          >
            Voir tous les détails et la comparaison des formules →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
