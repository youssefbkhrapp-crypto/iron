"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Library, Rocket, LifeBuoy, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WHY_CHOOSE_US, WHATSAPP_URL } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Star, Library, Rocket, LifeBuoy };

const iconStyles = [
  { bg: "linear-gradient(135deg, #a855f7, #7C0CB8)", glow: "rgba(168,85,247,0.3)" },
  { bg: "linear-gradient(135deg, #6366f1, #4f46e5)", glow: "rgba(99,102,241,0.3)" },
  { bg: "linear-gradient(135deg, #7C0CB8, #2C16B5)", glow: "rgba(124,12,184,0.3)" },
  { bg: "linear-gradient(135deg, #8b5cf6, #6366f1)", glow: "rgba(139,92,246,0.3)" },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #faf8ff 0%, #f0edff 100%)" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#a855f7]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#2C16B5]/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-[0.2em]"
                style={{ background: "rgba(168,85,247,0.1)", color: "#7C0CB8", border: "1px solid rgba(168,85,247,0.25)" }}>
                Pourquoi Nous Choisir
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] mb-6 leading-tight">
                L&apos;Expérience{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #a855f7 0%, #7C0CB8 50%, #4f46e5 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  IPTV Premium
                </span>{" "}
                que Vous Méritez
              </h2>
              <p className="text-[#4a4a6a] text-lg leading-relaxed mb-8">
                IRON TV PRO MAX n&apos;est pas un simple fournisseur IPTV. Nous nous engageons à offrir
                une expérience streaming exceptionnelle avec une technologie de pointe, une bibliothèque
                de contenu massive et un support qui se soucie vraiment de vous.
              </p>
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="glow-btn inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-white text-sm uppercase tracking-wider"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #2C16B5)",
                  boxShadow: "0 6px 20px rgba(168,85,247,0.35)",
                }}
              >
                Commencer
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </AnimatedSection>
          </div>

          {/* Right: cards */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_CHOOSE_US.map((item, i) => {
              const Icon = iconMap[item.icon] || Star;
              const style = iconStyles[i % iconStyles.length];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.65, delay: i * 0.12 }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className="group relative rounded-2xl p-5 overflow-hidden bg-white"
                  style={{
                    border: "1px solid rgba(168,85,247,0.12)",
                    boxShadow: "0 4px 20px rgba(124,12,184,0.06), 0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: `radial-gradient(circle at 20% 20%, ${style.glow.replace("0.3", "0.06")}, transparent 60%)` }}
                  />
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: style.bg,
                      boxShadow: `0 6px 18px ${style.glow}`,
                    }}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-bold text-[#1a1a2e] mb-2 group-hover:text-[#7C0CB8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4a4a6a] leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <AnimatedSection delay={0.3} className="mt-20">
          <div
            className="rounded-3xl p-8 sm:p-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center bg-white"
            style={{
              border: "1px solid rgba(168,85,247,0.15)",
              boxShadow: "0 8px 40px rgba(124,12,184,0.08)",
            }}
          >
            {[
              { number: "20 000+", label: "Chaînes Live" },
              { number: "50 000+", label: "Films & Séries" },
              { number: "99,9%", label: "Disponibilité" },
              { number: "24/7", label: "Support Expert" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-4xl sm:text-5xl font-extrabold mb-2"
                  style={{
                    background: "linear-gradient(135deg, #a855f7 0%, #7C0CB8 50%, #4f46e5 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-[#4a4a6a] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
