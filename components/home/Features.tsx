"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tv, Film, Zap, Shield, Headphones, Smartphone } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Tv, Film, Zap, Shield, Headphones, Smartphone,
};

const iconStyles = [
  { bg: "linear-gradient(135deg, #a855f7, #7C0CB8)", glow: "rgba(168,85,247,0.3)" },
  { bg: "linear-gradient(135deg, #7C0CB8, #4f46e5)", glow: "rgba(124,12,184,0.3)" },
  { bg: "linear-gradient(135deg, #6366f1, #2C16B5)", glow: "rgba(99,102,241,0.3)" },
  { bg: "linear-gradient(135deg, #a855f7, #6366f1)", glow: "rgba(168,85,247,0.3)" },
  { bg: "linear-gradient(135deg, #8b5cf6, #7C0CB8)", glow: "rgba(139,92,246,0.3)" },
  { bg: "linear-gradient(135deg, #4f46e5, #a855f7)", glow: "rgba(79,70,229,0.3)" },
];

export default function Features() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="relative py-28 overflow-hidden bg-[#F7F6F8]">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-1/3 w-[400px] h-[300px] bg-[#a855f7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[350px] h-[250px] bg-[#2C16B5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-[0.2em]"
            style={{ background: "rgba(168,85,247,0.1)", color: "#7C0CB8", border: "1px solid rgba(168,85,247,0.25)" }}>
            Pourquoi IRON TV PRO MAX
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] mb-4">
            IPTV Premium France —{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #7C0CB8 50%, #4f46e5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Ultra Stable & 4K
            </span>
          </h2>
          <p className="text-[#4a4a6a] max-w-xl mx-auto text-lg">
            Des fonctionnalités premium conçues pour vous offrir la meilleure expérience de streaming IPTV possible.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Tv;
            const style = iconStyles[i % iconStyles.length];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl p-6 overflow-hidden cursor-default bg-white"
                style={{
                  border: "1px solid rgba(168,85,247,0.12)",
                  boxShadow: "0 4px 20px rgba(124,12,184,0.06), 0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${style.glow.replace("0.3", "0.06")}, transparent 65%)` }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ border: "1px solid rgba(168,85,247,0.25)" }}
                />

                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: style.bg,
                      boxShadow: `0 6px 20px ${style.glow}`,
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-2 group-hover:text-[#7C0CB8] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#4a4a6a] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
