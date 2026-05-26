"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 4000);
    const hideTooltip = setTimeout(() => setShowTooltip(false), 8000);
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
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3"
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
                Chattez avec nous sur WhatsApp !
                <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
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
                    background: "rgba(18,140,126,0.95)",
                    boxShadow: "0 2px 10px rgba(18,140,126,0.4)",
                  }}
                >
                  WhatsApp
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[rgba(18,140,126,0.95)]" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chattez sur WhatsApp"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.93 }}
              animate={{
                boxShadow: [
                  "0 6px 32px rgba(37,211,102,0.55), 0 2px 8px rgba(0,0,0,0.18)",
                  "0 6px 42px rgba(37,211,102,0.8), 0 2px 8px rgba(0,0,0,0.18)",
                  "0 6px 32px rgba(37,211,102,0.55), 0 2px 8px rgba(0,0,0,0.18)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[72px] h-[72px] rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(145deg, #2EE36B, #25D366 40%, #128C7E)",
                boxShadow: "0 6px 32px rgba(37,211,102,0.55), 0 2px 8px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              {/* Pulse ring */}
              <span
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: "rgba(37,211,102,0.3)" }}
              />
              {/* Inner ring for depth */}
              <span
                className="absolute inset-[3px] rounded-full pointer-events-none"
                style={{ border: "1px solid rgba(255,255,255,0.18)" }}
              />
              {/* Official WhatsApp SVG icon */}
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 relative z-10"
                fill="white"
              >
                <path d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.2 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm0 36c-3.1 0-6-.8-8.6-2.3l-.6-.4-6.2 1.6 1.6-6-.4-.6C8.8 30 8 27.1 8 24c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16zm8.7-11.8c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2-.3.4-1.2 1.5-1.5 1.8-.3.3-.5.4-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.8-2.6-3.2-.3-.5 0-.7.2-.9.2-.2.5-.5.7-.7.2-.2.3-.4.4-.7.2-.3.1-.6 0-.8-.1-.2-1-2.4-1.4-3.3-.4-.9-.8-.7-1-.7h-.9c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.8 0 2.2 1.6 4.4 1.9 4.7.2.3 3.2 4.9 7.7 6.8 1.1.5 1.9.8 2.6 1 1.1.3 2.1.3 2.9.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.2-.3-.5-.4-1-.6z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
