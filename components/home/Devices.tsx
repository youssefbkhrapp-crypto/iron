"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Monitor, Wifi, Box, Smartphone, Tv, Laptop } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { DEVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Monitor, Wifi, Box, Smartphone, Tv, Laptop,
};

export default function Devices() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-28 relative overflow-hidden bg-white">
      {/* Decorative rings — very subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        {[900, 650, 400].map((size, i) => (
          <div key={size} className="absolute rounded-full"
            style={{ width: size, height: size, border: `1px solid rgba(168,85,247,${0.04 + i * 0.02})` }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-[0.2em]"
            style={{ background: "rgba(99,102,241,0.1)", color: "#4f46e5", border: "1px solid rgba(99,102,241,0.25)" }}>
            Compatibilité Universelle
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] mb-4">
            Compatible avec{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #7C0CB8 50%, #4f46e5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Tous Vos Appareils
            </span>
          </h2>
          <p className="text-[#4a4a6a] max-w-xl mx-auto text-lg">
            Un seul abonnement IPTV, tous vos écrans. Streamez sur n&apos;importe quel appareil.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {DEVICES.map((device, i) => {
            const Icon = iconMap[device.icon] || Monitor;
            return (
              <motion.div
                key={device.name}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ y: -7, transition: { duration: 0.25 } }}
                className="group relative rounded-2xl p-6 text-center overflow-hidden cursor-default bg-white"
                style={{
                  border: "1px solid rgba(168,85,247,0.12)",
                  boxShadow: "0 4px 16px rgba(124,12,184,0.05), 0 1px 3px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at center, ${device.color}10, transparent 70%)` }}
                />
                <div
                  className="w-14 h-14 rounded-2xl mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${device.color}18, ${device.color}08)`,
                    border: `1px solid ${device.color}30`,
                    boxShadow: `0 4px 15px ${device.color}20`,
                  }}
                >
                  <Icon
                    className="w-7 h-7 transition-all duration-300"
                    style={{ color: device.color, filter: `drop-shadow(0 0 4px ${device.color}60)` }}
                    strokeWidth={1.8}
                  />
                </div>
                <p className="text-sm font-semibold text-[#4a4a6a] group-hover:text-[#1a1a2e] transition-colors">
                  {device.name}
                </p>
              </motion.div>
            );
          })}
        </div>

        <AnimatedSection delay={0.4} className="mt-10 text-center">
          <p className="text-sm text-[#4a4a6a]/60">
            Compatible aussi avec VLC, Kodi, Perfect Player, TiviMate, IPTV Smarters &amp; plus encore
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
