import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { SITE_NAME, WHATSAPP_URL } from "@/lib/constants";

const footerLinks = {
  pages: [
    { label: "Accueil", href: "/" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "FAQ", href: "/faq" },
    { label: "Guide d'installation", href: "/installation" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Politique de Confidentialité", href: "/politique-confidentialite" },
    { label: "Conditions Générales", href: "/conditions-generales" },
  ],
};


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#06061f] border-t border-[#7C0CB8]/20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#690A88]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-14 pb-10 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand — 2 cols */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex mb-5 group">
              <div className="bg-white rounded-2xl px-3 py-2 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="IRON TV PRO"
                  width={140}
                  height={74}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-[#F7F6F8]/45 text-sm leading-relaxed max-w-xs mb-6">
              {SITE_NAME} – Le meilleur abonnement IPTV Premium en France. 20 000+ chaînes,
              50 000+ films & séries en qualité 4K UHD sur tous vos appareils.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm transition-colors duration-200 group"
              style={{ color: "rgba(247,246,248,0.5)" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors"
                style={{ background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.25)" }}
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              </div>
              <span className="group-hover:text-[#25D366] transition-colors">+44 7400 455889</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[10px] font-bold text-[#F7F6F8]/40 uppercase tracking-[0.22em] mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F7F6F8]/45 hover:text-[#c084fc] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[10px] font-bold text-[#F7F6F8]/40 uppercase tracking-[0.22em] mb-5">
              Légal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F7F6F8]/45 hover:text-[#c084fc] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(124,12,184,0.25), transparent)" }} />

        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#F7F6F8]/25 text-center sm:text-left">
            &copy; {year} {SITE_NAME}. Tous droits réservés.
          </p>
          <p className="text-xs text-[#F7F6F8]/25 text-center sm:text-right">
            Usage personnel uniquement.
          </p>
        </div>
      </div>
    </footer>
  );
}
