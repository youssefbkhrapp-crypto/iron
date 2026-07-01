"use client";

import { motion } from "framer-motion";
import { MessageCircle, Zap, Shield, Clock, Send } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WHATSAPP_URL, TELEGRAM_URL } from "@/lib/constants";

const perks = [
  { icon: Zap, text: "Activation Instantanée" },
  { icon: Shield, text: "Stable & Sécurisé" },
  { icon: Clock, text: "Support 24/7" },
];

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-95" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-40"
        style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-30"
        style={{ background: "radial-gradient(circle, #2C16B5, transparent 70%)" }}
      />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(247,246,248,0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(247,246,248,0.2) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm text-white/90 mb-8 backdrop-blur-sm">
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            Commencez à Streamer en Quelques Minutes
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
            Prêt à Regarder ?
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #f0abfc, #c084fc, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Commandez en 60 Secondes
            </span>
          </h2>

          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Contactez-nous sur WhatsApp ou Telegram pour passer votre commande. Votre abonnement IPTV Premium
            sera activé en quelques minutes — sans attente, sans complication.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {perks.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/80 text-sm">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <Icon className="w-3.5 h-3.5 text-white" />
                </div>
                {text}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white text-base uppercase tracking-wider transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 0 30px rgba(37,211,102,0.5), 0 6px 25px rgba(37,211,102,0.3)",
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Commander
            </motion.a>

            <motion.a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-white text-base uppercase tracking-wider transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #4DC5F9, #229ED9)",
                boxShadow: "0 0 30px rgba(34,158,217,0.5), 0 6px 25px rgba(34,158,217,0.3)",
              }}
            >
              <Send className="w-5 h-5" />
              Telegram
            </motion.a>

            <motion.a
              href="/tarifs"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-white text-base border-2 border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/15 transition-all duration-300 uppercase tracking-wider backdrop-blur-sm"
            >
              Voir les Tarifs
            </motion.a>
          </div>

          <p className="mt-6 text-sm text-white/40">
            À partir de €9,99 · Essai gratuit disponible · Sans engagement
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
