"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { MessageCircle, Send } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "whatsapp" | "telegram";
  showIcon?: boolean;
}

export default function GlowButton({
  children,
  href = WHATSAPP_URL,
  className = "",
  size = "md",
  variant = "primary",
  showIcon = false,
}: GlowButtonProps) {
  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const variants = {
    primary: "bg-gradient-to-r from-[#690A88] to-[#2C16B5] hover:from-[#7C0CB8] hover:to-[#2C16B5] shadow-glow hover:shadow-[0_0_40px_rgba(124,12,184,0.7)]",
    secondary: "bg-transparent border-2 border-[#7C0CB8] text-[#F7F6F8] hover:bg-[#7C0CB8]/20 hover:shadow-glow",
    whatsapp: "bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#2ecc71] hover:to-[#1a9e78] shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)]",
    telegram: "bg-gradient-to-r from-[#4DC5F9] to-[#229ED9] hover:from-[#5fd0ff] hover:to-[#1B7FB3] shadow-[0_0_20px_rgba(34,158,217,0.4)] hover:shadow-[0_0_40px_rgba(34,158,217,0.6)]",
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`glow-btn relative inline-flex items-center justify-center gap-2 rounded-full font-semibold text-white transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {showIcon && variant === "whatsapp" && <MessageCircle className="w-5 h-5" />}
      {showIcon && variant === "telegram" && <Send className="w-5 h-5" />}
      {children}
    </motion.a>
  );
}
