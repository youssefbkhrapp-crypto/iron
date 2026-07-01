"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Send } from "lucide-react";
import { WHATSAPP_URL, TELEGRAM_URL } from "@/lib/constants";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Guide d'installation", href: "/installation" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#7C0CB8]/10"
      style={{
        background: "#ffffff",
        boxShadow: "0 2px 24px rgba(124,12,184,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.25 }}
              className="relative"
              style={{
                filter: "drop-shadow(0 0 0px rgba(168,85,247,0))",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.filter =
                  "drop-shadow(0 0 18px rgba(168,85,247,0.45))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.filter =
                  "drop-shadow(0 0 0px rgba(168,85,247,0))";
              }}
            >
              <Image
                src="/logo.png"
                alt="IRON TV PRO"
                width={280}
                height={148}
                className="h-16 sm:h-[72px] w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-[#4a4a6a] hover:text-[#7C0CB8] transition-colors duration-200 group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-gradient-to-r from-[#a855f7] to-[#6366f1] group-hover:w-4/5 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <motion.a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactez-nous sur Telegram"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #4DC5F9, #229ED9)",
                boxShadow: "0 4px 16px rgba(34,158,217,0.4)",
              }}
            >
              <Send className="w-4.5 h-4.5 text-white" />
            </motion.a>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-full text-sm font-bold text-white uppercase tracking-wider transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #a855f7, #7C0CB8, #2C16B5)",
                boxShadow: "0 4px 18px rgba(124,12,184,0.4)",
              }}
            >
              Commencer
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl text-[#4a4a6a] hover:bg-[#f5f0ff] transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-[#7C0CB8]/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-[#4a4a6a] hover:text-[#7C0CB8] hover:bg-[#f5f0ff] rounded-xl transition-all duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3 pb-1 space-y-2.5">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-4 rounded-full text-sm font-bold text-white uppercase tracking-wider"
                  style={{
                    background: "linear-gradient(135deg, #a855f7, #7C0CB8, #2C16B5)",
                    boxShadow: "0 4px 15px rgba(124,12,184,0.35)",
                  }}
                >
                  Commander sur WhatsApp
                </a>
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full text-center px-6 py-4 rounded-full text-sm font-bold text-white uppercase tracking-wider"
                  style={{
                    background: "linear-gradient(135deg, #4DC5F9, #229ED9)",
                    boxShadow: "0 4px 15px rgba(34,158,217,0.35)",
                  }}
                >
                  <Send className="w-4 h-4" />
                  Commander sur Telegram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
