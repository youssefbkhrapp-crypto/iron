import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#141458",
        purple: {
          deep: "#690A88",
          neon: "#7C0CB8",
        },
        blue: {
          electric: "#2C16B5",
        },
        violet: "#6A637C",
        silver: "#F7F6F8",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #141458 0%, #2C16B5 40%, #690A88 70%, #7C0CB8 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(20,20,88,0.8) 0%, rgba(44,22,181,0.3) 100%)",
        "purple-gradient":
          "linear-gradient(135deg, #690A88 0%, #7C0CB8 100%)",
        "blue-gradient":
          "linear-gradient(135deg, #2C16B5 0%, #690A88 100%)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "gradient": "gradient 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 10px #7C0CB8, 0 0 20px #690A88" },
          to: { boxShadow: "0 0 20px #7C0CB8, 0 0 40px #690A88, 0 0 60px #2C16B5" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(124,12,184,0.5), 0 0 40px rgba(105,10,136,0.3)",
        "glow-blue": "0 0 20px rgba(44,22,181,0.5), 0 0 40px rgba(44,22,181,0.3)",
        "card": "0 8px 32px rgba(20,20,88,0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
