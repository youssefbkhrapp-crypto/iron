import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          style={{
            background: "linear-gradient(135deg, #a855f7, #7C0CB8)",
            boxShadow: "0 8px 30px rgba(168,85,247,0.35)",
          }}
        >
          <AlertTriangle className="w-10 h-10 text-white" />
        </div>
        <h1
          className="text-8xl font-extrabold mb-4"
          style={{
            background: "linear-gradient(135deg, #a855f7 0%, #7C0CB8 50%, #4f46e5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>
        <h2 className="text-2xl font-bold text-[#1a1a2e] mb-3">Page Introuvable</h2>
        <p className="text-[#4a4a6a] mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:opacity-90"
          style={{
            background: "linear-gradient(135deg, #7C0CB8, #2C16B5)",
            boxShadow: "0 4px 15px rgba(124,12,184,0.3)",
          }}
        >
          <Home className="w-4 h-4" />
          Retour à l&apos;Accueil
        </Link>
      </div>
    </div>
  );
}
