import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TelegramButton from "@/components/TelegramButton";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} – Meilleur Abonnement IPTV Premium France`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "IRON TV PRO MAX",
    "IPTV Premium France",
    "Abonnement IPTV",
    "IPTV 4K",
    "IPTV UHD",
    "Meilleur IPTV France",
    "IPTV Stable",
    "IPTV Pro Max",
    "IPTV France",
    "Chaînes IPTV",
    "IPTV Firestick",
    "IPTV Smart TV",
    "Abonnement IPTV pas cher",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    title: `${SITE_NAME} – Meilleur Abonnement IPTV Premium France`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} – Meilleur Abonnement IPTV Premium France`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-[#1a1a2e] min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <TelegramButton />
      </body>
    </html>
  );
}
