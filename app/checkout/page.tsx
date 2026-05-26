"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Check, Shield, Zap, Clock, ChevronRight, MessageCircle, ArrowLeft, Landmark, Coins, Link2 } from "lucide-react";
import Link from "next/link";
import { PRICING_PLANS } from "@/lib/constants";

const badgeGradients: Record<string, string> = {
  orange: "linear-gradient(135deg, #f97316, #ea580c)",
  blue:   "linear-gradient(135deg, #3b82f6, #1d4ed8)",
  purple: "linear-gradient(135deg, #a855f7, #6366f1)",
  green:  "linear-gradient(135deg, #10b981, #059669)",
};

const WHATSAPP_NUMBER = "447400455889";

const PAYMENT_METHODS = [
  {
    id: "virement",
    label: "Virement Bancaire",
    icon: Landmark,
    color: "#7C0CB8",
    bg: "rgba(168,85,247,0.07)",
    border: "rgba(168,85,247,0.3)",
    glow: "rgba(168,85,247,0.18)",
  },
  {
    id: "crypto",
    label: "Crypto",
    icon: Coins,
    color: "#d97706",
    bg: "rgba(251,191,36,0.07)",
    border: "rgba(251,191,36,0.4)",
    glow: "rgba(251,191,36,0.18)",
  },
  {
    id: "lien",
    label: "Lien de Paiement",
    icon: Link2,
    color: "#2563eb",
    bg: "rgba(59,130,246,0.07)",
    border: "rgba(59,130,246,0.3)",
    glow: "rgba(59,130,246,0.18)",
  },
];

function CheckoutContent() {
  const searchParams = useSearchParams();
  const planId = searchParams.get("plan");
  const plan = PRICING_PLANS.find((p) => p.checkoutId === planId);

  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [payment, setPayment] = useState("");
  const [nameError, setNameError] = useState("");
  const [whatsappError, setWhatsappError] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!plan) {
    return (
      <div className="min-h-screen bg-white pt-40 pb-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-bold text-[#1a1a2e] mb-4">Plan introuvable.</p>
          <Link href="/pricing" className="font-semibold underline" style={{ color: "#7C0CB8" }}>
            Voir tous les tarifs →
          </Link>
        </div>
      </div>
    );
  }

  const validate = () => {
    let valid = true;
    if (!name.trim()) { setNameError("Veuillez entrer votre nom complet."); valid = false; }
    else setNameError("");
    if (!whatsapp.trim()) { setWhatsappError("Veuillez entrer votre numéro WhatsApp."); valid = false; }
    else setWhatsappError("");
    if (!payment) { setPaymentError("Veuillez sélectionner une méthode de paiement."); valid = false; }
    else setPaymentError("");
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    const paymentLabel = PAYMENT_METHODS.find((m) => m.id === payment)?.label ?? payment;

    const message =
      `Bonjour, je souhaite commander un abonnement IPTV.\n\n` +
      `Plan choisi : ${plan!.name} — ${plan!.subtitle}\n` +
      `Prix : ${plan!.price}\n` +
      `Méthode de paiement : ${paymentLabel}\n\n` +
      `Nom complet : ${name.trim()}\n` +
      `WhatsApp : ${whatsapp.trim()}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-40 pb-24" style={{ background: "linear-gradient(160deg, #faf8ff 0%, #f0edff 100%)" }}>
      {/* Ambient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)" }} />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, rgba(44,22,181,0.2), transparent 70%)" }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-10 transition-opacity hover:opacity-70"
            style={{ color: "#7C0CB8" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux tarifs
          </Link>
        </motion.div>

        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-[0.2em]"
            style={{ background: "rgba(168,85,247,0.1)", color: "#7C0CB8", border: "1px solid rgba(168,85,247,0.25)" }}>
            <Shield className="w-3.5 h-3.5" /> Commande Sécurisée
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e]">
            Finaliser votre{" "}
            <span style={{
              background: "linear-gradient(135deg, #a855f7 0%, #7C0CB8 50%, #4f46e5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Abonnement
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── ORDER SUMMARY ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl overflow-hidden bg-white"
              style={{ border: "1.5px solid rgba(168,85,247,0.2)", boxShadow: "0 8px 40px rgba(124,12,184,0.09)" }}>

              {/* Plan banner */}
              <div className="px-6 py-4 flex items-center justify-between"
                style={{ background: badgeGradients[plan.badgeStyle] }}>
                <div>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-widest">{plan.name}</p>
                  <p className="text-white text-lg font-extrabold leading-tight">{plan.subtitle}</p>
                </div>
                <div className="text-right">
                  <p className="text-white text-2xl font-extrabold">{plan.price}</p>
                  <p className="text-white/70 text-xs">{plan.monthlyPrice}</p>
                </div>
              </div>

              <div className="p-6">
                {/* Original price / savings */}
                <div className="flex items-center gap-3 mb-5 pb-5"
                  style={{ borderBottom: "1px solid rgba(168,85,247,0.12)" }}>
                  <div className="text-sm text-[#4a4a6a]">
                    Ancien prix :{" "}
                    <span className="line-through text-[#4a4a6a]/60">{plan.originalPrice}</span>
                  </div>
                  <span className="text-xs font-extrabold px-2 py-0.5 rounded-full text-white"
                    style={{ background: badgeGradients[plan.badgeStyle] }}>
                    {plan.discount}
                  </span>
                  {plan.savings && (
                    <span className="text-xs font-bold text-[#16a34a]">{plan.savings}</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <div className="rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ width: 18, height: 18, background: "linear-gradient(135deg, #22c55e, #16a34a)" }}>
                        <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-xs text-[#4a4a6a] leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Trust badges */}
                <div className="space-y-2.5 pt-5" style={{ borderTop: "1px solid rgba(168,85,247,0.1)" }}>
                  {[
                    { icon: Zap,            text: "Activation instantanée après commande" },
                    { icon: MessageCircle,  text: "Support WhatsApp 24h/24, 7j/7" },
                    { icon: Clock,          text: "Réception des identifiants en quelques minutes" },
                    { icon: Shield,         text: "Processus sécurisé & confidentiel" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 shrink-0" style={{ color: "#7C0CB8" }} />
                      <span className="text-xs text-[#4a4a6a]">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── CHECKOUT FORM ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl bg-white p-8"
              style={{ border: "1.5px solid rgba(168,85,247,0.2)", boxShadow: "0 8px 40px rgba(124,12,184,0.09)" }}>

              <h2 className="text-xl font-extrabold text-[#1a1a2e] mb-1">Vos Informations</h2>
              <p className="text-sm text-[#4a4a6a] mb-8">
                Remplissez vos coordonnées pour finaliser votre commande via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-bold text-[#1a1a2e] mb-2">
                    Nom complet <span style={{ color: "#7C0CB8" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); if (nameError) setNameError(""); }}
                    placeholder="Prénom Nom"
                    className="w-full px-4 py-3.5 rounded-xl text-[#1a1a2e] placeholder-[#4a4a6a]/35 text-sm outline-none transition-all duration-200 bg-white"
                    style={{
                      border: nameError ? "1.5px solid #ef4444" : "1.5px solid rgba(168,85,247,0.25)",
                      boxShadow: nameError ? "0 0 0 3px rgba(239,68,68,0.08)" : "none",
                    }}
                    onFocus={(e) => {
                      if (!nameError) {
                        e.currentTarget.style.border = "1.5px solid rgba(168,85,247,0.6)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(168,85,247,0.08)";
                      }
                    }}
                    onBlur={(e) => {
                      if (!nameError) {
                        e.currentTarget.style.border = "1.5px solid rgba(168,85,247,0.25)";
                        e.currentTarget.style.boxShadow = "none";
                      }
                    }}
                  />
                  {nameError && <p className="mt-1.5 text-xs text-red-500">{nameError}</p>}
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-sm font-bold text-[#1a1a2e] mb-2">
                    Numéro WhatsApp <span style={{ color: "#7C0CB8" }}>*</span>
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" style={{ color: "#25D366" }} />
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => { setWhatsapp(e.target.value); if (whatsappError) setWhatsappError(""); }}
                      placeholder="+33 6 12 34 56 78"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl text-[#1a1a2e] placeholder-[#4a4a6a]/35 text-sm outline-none transition-all duration-200 bg-white"
                      style={{
                        border: whatsappError ? "1.5px solid #ef4444" : "1.5px solid rgba(168,85,247,0.25)",
                        boxShadow: whatsappError ? "0 0 0 3px rgba(239,68,68,0.08)" : "none",
                      }}
                      onFocus={(e) => {
                        if (!whatsappError) {
                          e.currentTarget.style.border = "1.5px solid rgba(168,85,247,0.6)";
                          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(168,85,247,0.08)";
                        }
                      }}
                      onBlur={(e) => {
                        if (!whatsappError) {
                          e.currentTarget.style.border = "1.5px solid rgba(168,85,247,0.25)";
                          e.currentTarget.style.boxShadow = "none";
                        }
                      }}
                    />
                  </div>
                  {whatsappError && <p className="mt-1.5 text-xs text-red-500">{whatsappError}</p>}
                  <p className="mt-1.5 text-xs text-[#4a4a6a]/50">
                    Incluez l&apos;indicatif pays (ex: +33 pour France)
                  </p>
                </div>

                {/* ── PAYMENT METHOD ── */}
                <div>
                  <label className="block text-sm font-bold text-[#1a1a2e] mb-3">
                    Méthode de paiement <span style={{ color: "#7C0CB8" }}>*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {PAYMENT_METHODS.map((method) => {
                      const isSelected = payment === method.id;
                      const Icon = method.icon;
                      return (
                        <motion.button
                          key={method.id}
                          type="button"
                          onClick={() => { setPayment(method.id); setPaymentError(""); }}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                          className="relative flex flex-col items-center justify-center gap-2 py-4 px-2 rounded-2xl text-center transition-all duration-200 cursor-pointer"
                          style={{
                            background: isSelected ? method.bg : "#ffffff",
                            border: isSelected
                              ? `2px solid ${method.border}`
                              : "1.5px solid rgba(168,85,247,0.15)",
                            boxShadow: isSelected
                              ? `0 0 0 4px ${method.glow}, 0 4px 20px ${method.glow}`
                              : "0 2px 8px rgba(0,0,0,0.04)",
                          }}
                        >
                          {/* Selected checkmark */}
                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 400, damping: 20 }}
                              className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center"
                              style={{ background: method.color }}
                            >
                              <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                            </motion.div>
                          )}
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{
                              background: isSelected ? method.color : "rgba(168,85,247,0.08)",
                              transition: "background 0.2s",
                            }}
                          >
                            <Icon
                              className="w-5 h-5"
                              style={{ color: isSelected ? "#ffffff" : method.color }}
                            />
                          </div>
                          <span
                            className="text-[11px] font-bold leading-tight"
                            style={{ color: isSelected ? method.color : "#4a4a6a" }}
                          >
                            {method.label}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                  {paymentError && <p className="mt-2 text-xs text-red-500">{paymentError}</p>}
                </div>

                {/* Order summary line */}
                <div className="flex items-center justify-between rounded-xl px-4 py-3.5"
                  style={{ background: "rgba(168,85,247,0.05)", border: "1px solid rgba(168,85,247,0.15)" }}>
                  <div>
                    <p className="text-xs text-[#4a4a6a]/60 uppercase tracking-wide font-semibold">Plan sélectionné</p>
                    <p className="text-sm font-extrabold text-[#1a1a2e]">{plan.name} — {plan.subtitle}</p>
                  </div>
                  <p className="text-xl font-extrabold" style={{
                    background: "linear-gradient(135deg, #a855f7, #7C0CB8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    {plan.price}
                  </p>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white text-base transition-all duration-300 disabled:opacity-70"
                  style={{
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                    boxShadow: "0 6px 28px rgba(37,211,102,0.4)",
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  {isSubmitting ? "Redirection…" : "Compléter la commande"}
                  {!isSubmitting && <ChevronRight className="w-5 h-5" />}
                </motion.button>

                {/* Fine print */}
                <p className="text-center text-xs text-[#4a4a6a]/45 leading-relaxed">
                  En cliquant, vous serez redirigé vers WhatsApp avec votre commande pré-remplie.
                  Notre équipe confirmera votre abonnement et vous enverra vos identifiants
                  dans les plus brefs délais.
                </p>
              </form>
            </div>

            {/* Trust strip */}
            <div className="mt-6 flex items-center justify-center gap-6 flex-wrap">
              {[
                { icon: Shield, text: "100% Sécurisé" },
                { icon: Zap,    text: "Activation rapide" },
                { icon: Clock,  text: "Support 24/7" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-xs text-[#4a4a6a]/60">
                  <Icon className="w-3.5 h-3.5" style={{ color: "#7C0CB8" }} />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white pt-40 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-[#a855f7] border-t-transparent animate-spin" />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
