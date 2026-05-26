"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f5f0ff 0%, #faf8ff 50%, #f0edff 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.15), transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-[0.2em]"
            style={{ background: "rgba(168,85,247,0.1)", color: "#7C0CB8", border: "1px solid rgba(168,85,247,0.25)" }}>
            Avis Clients
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a1a2e] mb-4">
            Adoré par{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #7C0CB8 50%, #4f46e5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              10 000+
            </span>{" "}
            Clients
          </h2>
          <p className="text-[#4a4a6a] text-lg max-w-xl mx-auto">
            Ne nous croyez pas sur parole — écoutez nos clients satisfaits à travers toute la France.
          </p>
        </AnimatedSection>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative flex flex-col gap-4 rounded-2xl p-6 overflow-hidden bg-white"
              style={{
                border: "1px solid rgba(168,85,247,0.12)",
                boxShadow: "0 4px 20px rgba(124,12,184,0.06), 0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: "radial-gradient(circle at 20% 20%, rgba(168,85,247,0.05), transparent 60%)" }}
              />

              <div
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(168,85,247,0.1)" }}
              >
                <Quote className="w-4 h-4" style={{ color: "#7C0CB8" }} />
              </div>

              <div className="flex gap-0.5">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 star-filled" />
                ))}
              </div>

              <p className="text-sm text-[#4a4a6a] leading-relaxed flex-1 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div
                className="flex items-center gap-3 pt-3"
                style={{ borderTop: "1px solid rgba(168,85,247,0.1)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-extrabold shrink-0"
                  style={{ background: "linear-gradient(135deg, #a855f7, #2C16B5)" }}
                >
                  {testimonial.name[0]}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#1a1a2e] truncate">{testimonial.name}</p>
                  <p className="text-xs text-[#4a4a6a]/60">{testimonial.location}</p>
                </div>
                <div className="ml-auto shrink-0">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-semibold"
                    style={{
                      background: "rgba(168,85,247,0.1)",
                      border: "1px solid rgba(168,85,247,0.25)",
                      color: "#7C0CB8",
                    }}
                  >
                    {testimonial.plan}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
