import type { Metadata } from "next";
import { Download, ShieldCheck, PlayCircle, MessageCircle, Sparkles, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlowButton from "@/components/ui/GlowButton";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Guide d'Installation IPTV — Downloader",
  description: `Installez ${SITE_NAME} facilement avec l'application Downloader. Suivez notre guide étape par étape pour configurer votre IPTV Pro Max en quelques minutes.`,
};

const sections = [
  {
    icon: Download,
    number: "01",
    title: "Comment installer Downloader ?",
    color: "#7C0CB8",
    gradient: "linear-gradient(135deg, #a855f7, #7C0CB8)",
    bg: "rgba(168,85,247,0.07)",
    border: "rgba(168,85,247,0.2)",
    glow: "rgba(168,85,247,0.25)",
    steps: [
      "Allumez votre appareil (Amazon Firestick, Android TV Box, Smart TV Android…)",
      "Ouvrez l'App Store de votre appareil et recherchez « Downloader »",
      "Téléchargez et installez l'application Downloader (icône orange)",
      "Ouvrez Downloader — vous verrez un champ pour entrer un code ou une URL",
    ],
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Autoriser Downloader sur votre appareil",
    color: "#2563eb",
    gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
    bg: "rgba(59,130,246,0.07)",
    border: "rgba(59,130,246,0.2)",
    glow: "rgba(59,130,246,0.25)",
    steps: [
      "Allez dans Paramètres de votre appareil (icône engrenage)",
      "Sélectionnez « Mon Fire TV » ou « Options de l'appareil »",
      "Cliquez sur « Options développeur »",
      "Activez « Applications de sources inconnues » et autorisez Downloader",
    ],
  },
  {
    icon: PlayCircle,
    number: "03",
    title: "Installer IRON TV PRO MAX",
    color: "#059669",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    bg: "rgba(16,185,129,0.07)",
    border: "rgba(16,185,129,0.2)",
    glow: "rgba(16,185,129,0.25)",
    steps: [
      "Revenez dans Downloader et entrez le code 347824 dans le champ prévu",
      "Appuyez sur « Go » — l'application IRON TV PRO MAX sera téléchargée automatiquement",
      "Cliquez sur « Installer » pour finaliser l'installation",
      "Ouvrez l'application et entrez vos identifiants reçus par WhatsApp — profitez !",
    ],
  },
];

export default function SetupGuidePage() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-24">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.2), transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, rgba(44,22,181,0.15), transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-[0.2em]"
            style={{ background: "rgba(168,85,247,0.1)", color: "#7C0CB8", border: "1px solid rgba(168,85,247,0.25)" }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Guide d&apos;Installation
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a1a2e] mb-5">
            Installation avec{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F58220 0%, #d4600a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Downloader
            </span>
          </h1>
          <p className="text-[#4a4a6a] text-lg max-w-2xl mx-auto">
            Installez IRON TV PRO MAX en quelques minutes sur votre appareil grâce à l&apos;application Downloader.
            Suivez les 3 étapes ci-dessous — c&apos;est simple et rapide.
          </p>
        </AnimatedSection>

        {/* Downloader Code Card */}
        <AnimatedSection delay={0.1} className="mb-14">
          <div
            className="relative rounded-3xl overflow-hidden bg-white"
            style={{
              border: "2px solid rgba(245,130,32,0.28)",
              boxShadow: "0 8px 40px rgba(245,130,32,0.1), 0 2px 12px rgba(0,0,0,0.05)",
            }}
          >
            {/* Orange top bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ background: "linear-gradient(90deg, transparent, #F58220, transparent)" }}
            />

            <div className="relative px-8 sm:px-12 py-12 sm:py-14 flex flex-col items-center text-center">

              {/* Downloader app icon */}
              <div
                className="mb-6"
                style={{
                  borderRadius: "32px",
                  boxShadow: "0 12px 40px rgba(245,130,32,0.28), 0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "block", borderRadius: "28px" }}
                >
                  <defs>
                    <linearGradient id="dlBg" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FBAD41" />
                      <stop offset="55%" stopColor="#F58220" />
                      <stop offset="100%" stopColor="#D95E0A" />
                    </linearGradient>
                    <linearGradient id="dlShine" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="white" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Background */}
                  <rect width="120" height="120" rx="28" fill="url(#dlBg)" />
                  {/* Subtle inner shine */}
                  <rect width="120" height="60" rx="28" fill="url(#dlShine)" />
                  {/* Arrow shaft */}
                  <rect x="53" y="22" width="14" height="42" rx="7" fill="white" />
                  {/* Arrow chevron head */}
                  <path
                    d="M30 57 L60 87 L90 57"
                    stroke="white"
                    strokeWidth="14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  {/* Base tray */}
                  <rect x="28" y="95" width="64" height="11" rx="5.5" fill="white" />
                </svg>
              </div>

              {/* App name label */}
              <p
                className="text-[11px] font-extrabold uppercase tracking-[0.3em] mb-3"
                style={{ color: "#F58220" }}
              >
                Application Downloader
              </p>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a2e] mb-6 max-w-xs sm:max-w-sm">
                Entrez ce code dans Downloader
              </h2>

              {/* Code display */}
              <div
                className="inline-flex items-center justify-center rounded-2xl px-10 py-5 mb-5"
                style={{
                  background: "linear-gradient(135deg, rgba(245,130,32,0.08), rgba(245,130,32,0.04))",
                  border: "1.5px solid rgba(245,130,32,0.28)",
                }}
              >
                <span
                  className="text-5xl sm:text-6xl font-extrabold tracking-[0.22em]"
                  style={{
                    background: "linear-gradient(135deg, #F58220, #d4600a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  347824
                </span>
              </div>

              {/* Instruction — single centered row */}
              <div className="flex items-center justify-center flex-wrap gap-x-3 gap-y-2">
                {[
                  { label: "Ouvrez Downloader", accent: false },
                  { label: "→", accent: true },
                  { label: "Tapez le code", accent: false },
                  { label: "→", accent: true },
                  { label: "Appuyez sur", accent: false },
                  { label: "Go", accent: true },
                ].map((item, i) => (
                  item.accent ? (
                    <span
                      key={i}
                      className="font-extrabold text-lg"
                      style={{ color: "#F58220" }}
                    >
                      {item.label}
                    </span>
                  ) : (
                    <span
                      key={i}
                      className="font-bold text-base"
                      style={{ color: "#1a1a2e" }}
                    >
                      {item.label}
                    </span>
                  )
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Step Sections */}
        <div className="space-y-8 mb-14">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <AnimatedSection key={section.number} delay={i * 0.1}>
                <div
                  className="rounded-2xl overflow-hidden bg-white"
                  style={{
                    border: `1px solid ${section.border}`,
                    boxShadow: `0 4px 24px ${section.glow}`,
                  }}
                >
                  {/* Section header */}
                  <div
                    className="px-6 py-5 flex items-center gap-4"
                    style={{
                      background: section.bg,
                      borderBottom: `1px solid ${section.border}`,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: section.gradient,
                        boxShadow: `0 4px 14px ${section.glow}`,
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p
                        className="text-[10px] font-extrabold uppercase tracking-[0.25em] mb-0.5"
                        style={{ color: section.color, opacity: 0.6 }}
                      >
                        Étape {section.number}
                      </p>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#1a1a2e]">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Steps list */}
                  <div className="px-6 py-6">
                    <ol className="space-y-4">
                      {section.steps.map((step, j) => (
                        <li key={j} className="flex items-start gap-4">
                          <div
                            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-extrabold shrink-0 mt-0.5"
                            style={{
                              background: section.gradient,
                              boxShadow: `0 2px 8px ${section.glow}`,
                            }}
                          >
                            {j + 1}
                          </div>
                          <p className="text-sm text-[#4a4a6a] leading-relaxed pt-0.5">{step}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Quick tip */}
        <AnimatedSection delay={0.3} className="mb-14">
          <div
            className="rounded-2xl px-6 py-5 flex items-start gap-4 bg-white"
            style={{
              background: "rgba(34,197,94,0.05)",
              border: "1px solid rgba(34,197,94,0.2)",
              boxShadow: "0 4px 16px rgba(34,197,94,0.08)",
            }}
          >
            <CheckCircle2
              className="w-6 h-6 shrink-0 mt-0.5"
              style={{ color: "#16a34a", filter: "drop-shadow(0 0 6px rgba(34,197,94,0.4))" }}
            />
            <div>
              <p className="font-bold text-[#1a1a2e] mb-1">Astuce</p>
              <p className="text-sm text-[#4a4a6a]">
                Une fois installé, vous recevrez vos identifiants de connexion (URL M3U ou codes Xtream)
                directement sur WhatsApp. Gardez-les à portée de main pour finaliser la configuration.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* WhatsApp CTA */}
        <AnimatedSection delay={0.4}>
          <div
            className="text-center rounded-3xl p-10 sm:p-14 bg-white"
            style={{
              border: "1px solid rgba(168,85,247,0.15)",
              boxShadow: "0 8px 40px rgba(124,12,184,0.08)",
            }}
          >
            <MessageCircle
              className="w-10 h-10 mx-auto mb-4"
              style={{ color: "#25D366", filter: "drop-shadow(0 0 8px rgba(37,211,102,0.4))" }}
            />
            <h2 className="text-2xl font-extrabold text-[#1a1a2e] mb-3">
              Besoin d&apos;Aide pour l&apos;Installation ?
            </h2>
            <p className="text-[#4a4a6a] mb-8 max-w-md mx-auto text-sm">
              Notre équipe est disponible 24h/24, 7j/7 sur WhatsApp pour vous guider étape par étape et vous envoyer vos identifiants instantanément.
            </p>
            <GlowButton variant="whatsapp" showIcon>
              Contacter le Support
            </GlowButton>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
