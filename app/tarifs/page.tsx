import type { Metadata } from "next";
import { Check, X, Zap, Sparkles } from "lucide-react";
import Link from "next/link";
import { PRICING_PLANS, WHATSAPP_URL, TELEGRAM_URL, SITE_NAME } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowButton from "@/components/ui/GlowButton";

export const metadata: Metadata = {
  title: "Tarifs & Abonnements IPTV",
  description: `Choisissez votre abonnement IPTV Premium avec ${SITE_NAME}. Formules à partir de €20,99 — 20 000+ chaînes 4K. IPTV Pro Max France.`,
};

const badgeGradients: Record<string, string> = {
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

const comparisonFeatures = [
  { label: "Qualité Stream",          values: ["4K, FHD, HD, SD", "4K, FHD, HD, SD", "4K, FHD, HD, SD", "4K, FHD, HD, SD"] },
  { label: "Connexions simultanées",  values: ["1", "1", "1", "2"] },
  { label: "Active code / M3U",       values: [true, true, true, true] },
  { label: "Xtream code / m3u",       values: [true, true, true, true] },
  { label: "Guide TV (EPG)",          values: [true, true, true, true] },
  { label: "Smart TV Samsung / LG",   values: [true, true, true, true] },
  { label: "Mises à jour continues",  values: [true, true, true, true] },
  { label: "Livraison instantanée",   values: [true, true, true, true] },
  { label: "Assistance 24/7",         values: ["Standard", "Standard", "Prioritaire", "Standard"] },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-24">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.2), transparent 70%)" }} />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, rgba(44,22,181,0.15), transparent 70%)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-[0.2em]"
            style={{ background: "rgba(168,85,247,0.1)", color: "#7C0CB8", border: "1px solid rgba(168,85,247,0.25)" }}>
            <Sparkles className="w-3.5 h-3.5" />
            Abonnement IPTV Premium
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a1a2e] mb-5">
            Choisissez Votre{" "}
            <span style={{
              background: "linear-gradient(135deg, #a855f7 0%, #7C0CB8 50%, #4f46e5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Formule IPTV
            </span>
          </h1>
          <p className="text-[#4a4a6a] text-lg max-w-2xl mx-auto">
            Toutes les formules incluent notre bibliothèque complète de chaînes premium et VOD.
            Commandez sur WhatsApp ou Telegram pour une activation instantanée.
          </p>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-20 items-stretch">
          {PRICING_PLANS.map((plan, i) => (
            <AnimatedSection key={plan.id} delay={i * 0.1}>
              <div
                className="relative flex flex-col rounded-3xl overflow-hidden bg-white h-full transition-all duration-300 hover:-translate-y-2"
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
                    {plan.badgeStyle !== "purple" && plan.badgeStyle !== "green" && (
                      <span
                        className="text-sm font-extrabold px-3 py-1.5 rounded-full text-white shrink-0"
                        style={{ background: badgeGradients[plan.badgeStyle] }}
                      >
                        {plan.discount}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-1">
                    <span
                      className="text-5xl font-extrabold leading-none"
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
                          className="rounded-full flex items-center justify-center shrink-0 mt-0.5"
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

                  {/* CTA */}
                  <Link
                    href={`/commande?plan=${plan.checkoutId}`}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:opacity-90"
                    style={{
                      background: badgeGradients[plan.badgeStyle],
                      boxShadow: plan.popular
                        ? "0 4px 20px rgba(168,85,247,0.4)"
                        : "0 4px 14px rgba(0,0,0,0.12)",
                    }}
                  >
                    <Zap className="w-4 h-4 shrink-0" />
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Comparison Table */}
        <AnimatedSection className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a2e] text-center mb-8">
            Comparaison{" "}
            <span style={{
              background: "linear-gradient(135deg, #a855f7 0%, #7C0CB8 50%, #4f46e5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Complète des Formules
            </span>
          </h2>
          <div
            className="rounded-2xl overflow-hidden bg-white"
            style={{ border: "1px solid rgba(168,85,247,0.15)", boxShadow: "0 4px 24px rgba(124,12,184,0.07)" }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px]">
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(168,85,247,0.12)" }}>
                    <th className="text-left p-4 text-sm text-[#4a4a6a] font-medium">Fonctionnalité</th>
                    {PRICING_PLANS.map((plan) => (
                      <th key={plan.id} className="text-center p-4 text-xs font-extrabold uppercase tracking-wide"
                        style={{ color: plan.popular ? "#7C0CB8" : "#1a1a2e" }}>
                        {plan.subtitle}
                        {plan.popular && <span className="block text-[10px] font-bold normal-case mt-0.5" style={{ color: "#a855f7" }}>⭐ Le Plus Choisi</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, i) => (
                    <tr key={i} className="hover:bg-[#faf8ff] transition-colors"
                      style={{ borderTop: "1px solid rgba(168,85,247,0.07)" }}>
                      <td className="p-4 text-sm text-[#4a4a6a]">{feature.label}</td>
                      {feature.values.map((val, j) => (
                        <td key={j} className="p-4 text-center">
                          {typeof val === "boolean" ? (
                            val ? (
                              <div className="w-6 h-6 rounded-full mx-auto flex items-center justify-center"
                                style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)", boxShadow: "0 0 8px rgba(34,197,94,0.3)" }}>
                                <Check className="w-3.5 h-3.5 text-white" />
                              </div>
                            ) : (
                              <X className="w-5 h-5 text-[#4a4a6a]/25 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm text-[#1a1a2e] font-semibold">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.2}>
          <div className="text-center rounded-3xl p-10 sm:p-14 bg-white"
            style={{ border: "1px solid rgba(168,85,247,0.15)", boxShadow: "0 8px 40px rgba(124,12,184,0.08)" }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a2e] mb-4">
              Prêt à Commencer le Streaming ?
            </h2>
            <p className="text-[#4a4a6a] mb-8 max-w-md mx-auto">
              Contactez-nous sur WhatsApp ou Telegram pour passer votre commande et recevoir vos identifiants en quelques minutes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <GlowButton size="lg" variant="whatsapp" showIcon>
                Commander sur WhatsApp
              </GlowButton>
              <GlowButton size="lg" variant="telegram" showIcon href={TELEGRAM_URL}>
                Commander sur Telegram
              </GlowButton>
            </div>
            <p className="mt-4 text-sm text-[#4a4a6a]/50">
              Activation instantanée · Support 24/7 · Essai gratuit disponible
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
