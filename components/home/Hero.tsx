"use client";

import { motion } from "framer-motion";
import { Play, Star, Users, Tv, Zap, CheckCircle, Wifi, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";

const stats = [
  { label: "Chaînes Live", value: "20K+", icon: Tv },
  { label: "Films & Séries", value: "50K+", icon: Play },
  { label: "Clients Satisfaits", value: "10K+", icon: Users },
  { label: "Disponibilité", value: "99,9%", icon: Zap },
];

const highlights = [
  "Technologie Anti-Freeze",
  "Qualité UHD / FHD / 4K",
  "Activation Instantanée",
];

const channels = [
  { label: "TF1", color: "#e63946" },
  { label: "Canal+", color: "#a855f7" },
  { label: "M6", color: "#f4a261" },
  { label: "beIN", color: "#1d6fa8" },
  { label: "Prime", color: "#00a8e1" },
  { label: "Disney+", color: "#0063e5" },
];

function StreamingIllustration() {
  return (
    <div className="relative w-full max-w-[500px]">
      {/* Outer ambient glow — softened */}
      <div className="absolute inset-[-15%] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, rgba(79,70,229,0.05) 55%, transparent 70%)" }}
      />

      {/* Main screen frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #1e1848 0%, #251c5c 100%)",
          border: "1.5px solid rgba(168,85,247,0.28)",
          boxShadow: "0 16px 48px rgba(124,12,184,0.15), 0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        {/* App chrome bar */}
        <div className="flex items-center justify-between px-4 py-2.5"
          style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(168,85,247,0.14)" }}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#25D366" }} />
            <span className="text-[9px] font-bold" style={{ color: "#25D366" }}>LIVE</span>
          </div>
        </div>

        {/* Screen content */}
        <div className="relative p-4"
          style={{ background: "linear-gradient(160deg, #1a1444 0%, #221a58 100%)" }}>

          {/* Soft center glow */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(168,85,247,0.1), transparent 65%)" }}
          />

          {/* App nav header */}
          <div className="relative flex items-center justify-between mb-4 pb-3"
            style={{ borderBottom: "1px solid rgba(168,85,247,0.15)" }}>
            <div className="flex items-center gap-3">
              {["Accueil", "Chaînes", "VOD", "Sport"].map((item, idx) => (
                <span key={item} className="text-[8px] font-bold"
                  style={{ color: idx === 0 ? "#c084fc" : "rgba(255,255,255,0.32)" }}>
                  {item}
                </span>
              ))}
            </div>
            <Wifi className="w-3 h-3" style={{ color: "rgba(255,255,255,0.28)" }} />
          </div>

          {/* ── CENTER LOGO BRANDING ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative flex flex-col items-center justify-center pt-6 pb-5 mb-4 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(168,85,247,0.2)",
              boxShadow: "0 4px 20px rgba(124,12,184,0.12)",
            }}
          >
            {/* Very subtle inner glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.05) 0%, transparent 70%)" }}
            />

            {/* Top accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] rounded-full"
              style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), transparent)" }}
            />

            {/* Logo */}
            <div className="relative z-10 mb-2">
              <Image
                src="/logo.png"
                width={240}
                height={127}
                alt="IRON TV PRO MAX"
                className="w-auto object-contain"
                style={{ height: "72px" }}
                priority
              />
            </div>

            {/* Subtitle */}
            <p className="relative z-10 text-[8.5px] font-semibold tracking-[0.28em] uppercase mb-3"
              style={{ color: "rgba(124,12,184,0.4)" }}>
              IPTV PREMIUM FRANCE
            </p>

            {/* Live pill */}
            <div className="relative z-10 flex items-center gap-1.5 px-3 py-1 rounded-full"
              style={{ background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.28)" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#25D366" }} />
              <span className="text-[8px] font-bold" style={{ color: "#16a34a" }}>EN LIGNE — 20 000+ CHAÎNES</span>
            </div>
          </motion.div>

          {/* Channel grid */}
          <div className="relative grid grid-cols-3 gap-2 mb-3">
            {channels.map((ch, i) => (
              <motion.div
                key={ch.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.06, duration: 0.3 }}
                className="rounded-lg p-2 text-center"
                style={{
                  background: `linear-gradient(135deg, ${ch.color}20, ${ch.color}0a)`,
                  border: `1px solid ${ch.color}28`,
                }}
              >
                <div className="w-6 h-6 rounded-md mx-auto mb-1 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${ch.color}70, ${ch.color}40)` }}>
                  <Tv className="w-3 h-3 text-white" />
                </div>
                <span className="text-[8px] font-bold" style={{ color: "rgba(255,255,255,0.5)" }}>{ch.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Quality bar */}
          <div className="relative flex items-center justify-between pt-2.5"
            style={{ borderTop: "1px solid rgba(168,85,247,0.15)" }}>
            <div className="flex gap-1.5">
              {["4K", "UHD", "HDR10+"].map((b) => (
                <span key={b} className="text-[8px] font-extrabold px-2 py-0.5 rounded"
                  style={{ background: "rgba(168,85,247,0.15)", color: "#c084fc", border: "1px solid rgba(168,85,247,0.22)" }}>
                  {b}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3" style={{ color: "#25D366" }} />
              <span className="text-[8px] font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>Anti-Freeze</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Ambient orbs */}
      <div
        className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[130px] opacity-20 float-animation"
        style={{ background: "radial-gradient(circle, #a855f7, #7C0CB8, transparent)" }}
      />
      <div
        className="absolute bottom-[0%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 float-animation"
        style={{ background: "radial-gradient(circle, #4f46e5, #2C16B5, transparent)", animationDelay: "2s" }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: `linear-gradient(rgba(124,12,184,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(124,12,184,0.8) 1px, transparent 1px)`,
          backgroundSize: "55px 55px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-44 pb-20 w-full">

        {/* 2-col layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-16 items-center mb-16">

          {/* Left: Text */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-sm font-medium mb-8"
              style={{
                background: "rgba(168,85,247,0.08)",
                border: "1px solid rgba(168,85,247,0.22)",
                color: "#7C0CB8",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
              </span>
              IRON TV PRO MAX — IPTV Premium France
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-4xl sm:text-5xl xl:text-[3.6rem] font-extrabold leading-[1.08] tracking-tight mb-6 text-[#1a1a2e]"
            >
              Le Meilleur{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a855f7 0%, #7C0CB8 40%, #690A88 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Abonnement IPTV
              </span>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #4f46e5 0%, #2C16B5 50%, #6366f1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Premium en France
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg text-[#4a4a6a] mb-7 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Profitez de milliers de chaînes UHD/FHD, films, séries et événements sportifs
              avec une qualité exceptionnelle et une stabilité maximale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-9"
            >
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 text-sm text-[#4a4a6a] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#a855f7] shrink-0" />
                  {h}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="glow-btn inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-bold text-white text-sm uppercase tracking-widest"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #7C0CB8, #2C16B5)",
                  boxShadow: "0 6px 25px rgba(168,85,247,0.45)",
                }}
              >
                Commencer
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="/tarifs"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-sm transition-all duration-300 uppercase tracking-widest"
                style={{
                  border: "2px solid rgba(124,12,184,0.28)",
                  background: "rgba(168,85,247,0.05)",
                  color: "#7C0CB8",
                }}
              >
                Voir les Tarifs
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 star-filled" />
                ))}
              </div>
              <span className="text-[#4a4a6a] text-sm">
                Noté <strong className="text-[#1a1a2e]">4,9/5</strong> par plus de{" "}
                <strong className="text-[#1a1a2e]">10 000+</strong> clients
              </span>
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center xl:justify-end"
          >
            <StreamingIllustration />
          </motion.div>
        </div>

        {/* Stats — full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl p-5 text-center overflow-hidden cursor-default bg-white"
              style={{
                border: "1px solid rgba(168,85,247,0.15)",
                boxShadow: "0 4px 20px rgba(168,85,247,0.08), 0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: "radial-gradient(circle at center, rgba(168,85,247,0.06), transparent 70%)" }}
              />
              <stat.icon
                className="w-5 h-5 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{ color: "#a855f7" }}
              />
              <div className="text-2xl sm:text-3xl font-extrabold text-[#1a1a2e] mb-0.5">{stat.value}</div>
              <div className="text-xs text-[#4a4a6a]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F7F6F8] to-transparent pointer-events-none" />
    </section>
  );
}
