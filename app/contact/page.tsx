import type { Metadata } from "next";
import { MessageCircle, Clock, MapPin, Send, Zap } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowButton from "@/components/ui/GlowButton";
import { WHATSAPP_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez ${SITE_NAME} via WhatsApp. Notre équipe est disponible 24h/24, 7j/7 pour les commandes, l'installation et le support technique.`,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-24">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.2), transparent 70%)" }}
        />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, rgba(44,22,181,0.15), transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-[0.2em]"
            style={{ background: "rgba(168,85,247,0.1)", color: "#7C0CB8", border: "1px solid rgba(168,85,247,0.25)" }}>
            Contactez-Nous
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a1a2e] mb-5">
            Nous{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #7C0CB8 50%, #4f46e5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Contacter
            </span>
          </h1>
          <p className="text-[#4a4a6a] text-lg max-w-xl mx-auto">
            Notre équipe de support est disponible 24h/24, 7j/7 sur WhatsApp pour vous aider
            avec les commandes, l&apos;installation et toutes vos questions techniques.
          </p>
        </AnimatedSection>

        {/* WhatsApp hero card */}
        <AnimatedSection delay={0.1} className="mb-8">
          <div
            className="rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden bg-white"
            style={{
              border: "1px solid rgba(37,211,102,0.35)",
              boxShadow: "0 4px 30px rgba(37,211,102,0.08), 0 0 0 1px rgba(37,211,102,0.05)",
            }}
          >
            <div className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 0%, rgba(37,211,102,0.05), transparent 60%)" }}
            />
            <div
              className="relative w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 6px 25px rgba(37,211,102,0.4)",
              }}
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-extrabold text-[#1a1a2e] mb-2">Support WhatsApp</h2>
            <p className="text-[#4a4a6a] mb-2 text-sm">Réponse la plus rapide — commandez et obtenez de l&apos;aide instantanément</p>
            <p className="text-xl font-bold mb-6" style={{ color: "#25D366" }}>
              +44 7400 455889
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-white uppercase tracking-wider transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
              }}
            >
              <Send className="w-4 h-4" />
              Contacter sur WhatsApp
            </a>
          </div>
        </AnimatedSection>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          <AnimatedSection delay={0.2}>
            <div
              className="rounded-2xl p-6 h-full bg-white"
              style={{
                border: "1px solid rgba(168,85,247,0.15)",
                boxShadow: "0 4px 20px rgba(124,12,184,0.06)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(168,85,247,0.1)", boxShadow: "0 0 12px rgba(168,85,247,0.15)" }}>
                  <Clock className="w-4 h-4" style={{ color: "#7C0CB8" }} />
                </div>
                <h4 className="font-bold text-[#1a1a2e]">Horaires de Support</h4>
              </div>
              <p className="text-sm text-[#4a4a6a] leading-relaxed">
                Disponible <strong className="text-[#1a1a2e]">24h/24, 7j/7</strong> sur WhatsApp. Temps de réponse typique inférieur à 5 minutes.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div
              className="rounded-2xl p-6 h-full bg-white"
              style={{
                border: "1px solid rgba(168,85,247,0.15)",
                boxShadow: "0 4px 20px rgba(124,12,184,0.06)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(168,85,247,0.1)", boxShadow: "0 0 12px rgba(168,85,247,0.15)" }}>
                  <MapPin className="w-4 h-4" style={{ color: "#7C0CB8" }} />
                </div>
                <h4 className="font-bold text-[#1a1a2e]">Zone de Service</h4>
              </div>
              <p className="text-sm text-[#4a4a6a] leading-relaxed">
                Nous servons des clients dans le <strong className="text-[#1a1a2e]">monde entier</strong>. France, Europe, USA, Canada, Australie et plus.
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* What we help with */}
        <AnimatedSection delay={0.35} className="mb-10">
          <div
            className="rounded-2xl p-6 sm:p-8 bg-white"
            style={{
              border: "1px solid rgba(168,85,247,0.15)",
              boxShadow: "0 4px 20px rgba(124,12,184,0.06)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <Zap className="w-5 h-5" style={{ color: "#7C0CB8" }} />
              <h3 className="font-bold text-[#1a1a2e] text-lg">Comment pouvons-nous vous aider ?</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Nouvelles commandes d'abonnement",
                "Demandes d'essai gratuit",
                "Aide à l'installation",
                "Dépannage technique",
                "Renouvellements d'abonnement",
                "Questions de compatibilité d'appareils",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#4a4a6a]">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: "linear-gradient(135deg, #a855f7, #6366f1)" }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.4}>
          <div className="text-center rounded-3xl p-10 bg-white"
            style={{
              border: "1px solid rgba(168,85,247,0.15)",
              boxShadow: "0 8px 40px rgba(124,12,184,0.08)",
            }}
          >
          <MessageCircle className="w-10 h-10 mx-auto mb-4"
            style={{ color: "#25D366", filter: "drop-shadow(0 0 8px rgba(37,211,102,0.4))" }}
          />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a2e] mb-3">
            Prêt à Commander ?
          </h2>
          <p className="text-[#4a4a6a] mb-6 max-w-md mx-auto">
            La manière la plus rapide de commencer est via WhatsApp. Nous activerons votre compte
            IPTV Premium en quelques minutes après votre commande.
          </p>
          <GlowButton size="lg" variant="whatsapp" showIcon>
            Commencer
          </GlowButton>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
