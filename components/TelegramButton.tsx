"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/constants";

export default function TelegramButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 6000);
    const hideTooltip = setTimeout(() => setShowTooltip(false), 10000);
    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltip);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-32 right-8 z-50 flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="relative bg-white text-gray-900 text-sm font-medium px-4 py-3 rounded-2xl shadow-xl max-w-[180px] text-center"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <X className="w-3 h-3 text-gray-700" />
                </button>
                Contactez-nous sur Telegram !
                <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Telegram Button */}
          <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {/* Hover tooltip */}
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold text-white pointer-events-none"
                  style={{
                    background: "rgba(34,158,217,0.95)",
                    boxShadow: "0 2px 10px rgba(34,158,217,0.4)",
                  }}
                >
                  Telegram
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[rgba(34,158,217,0.95)]" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactez-nous sur Telegram"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.93 }}
              animate={{
                boxShadow: [
                  "0 6px 32px rgba(34,158,217,0.55), 0 2px 8px rgba(0,0,0,0.18)",
                  "0 6px 42px rgba(34,158,217,0.8), 0 2px 8px rgba(0,0,0,0.18)",
                  "0 6px 32px rgba(34,158,217,0.55), 0 2px 8px rgba(0,0,0,0.18)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[72px] h-[72px] rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(145deg, #4DC5F9, #229ED9 40%, #1B7FB3)",
                boxShadow: "0 6px 32px rgba(34,158,217,0.55), 0 2px 8px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              {/* Pulse ring */}
              <span
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: "rgba(34,158,217,0.3)" }}
              />
              {/* Inner ring for depth */}
              <span
                className="absolute inset-[3px] rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(255,255,255,0.18)" }}
              />
              {/* Official Telegram SVG icon */}
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 relative z-10"
                fill="white"
              >
                <path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zm9.7 13.6-3.3 15.6c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L18 25.7l-5-1.6c-1.1-.3-1.1-1.1.2-1.6l19.5-7.5c.9-.3 1.7.2 1 2.6z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
