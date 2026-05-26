import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Devices from "@/components/home/Devices";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PricingSection from "@/components/home/PricingSection";
import Testimonials from "@/components/home/Testimonials";
import FAQPreview from "@/components/home/FAQPreview";
import CTABanner from "@/components/home/CTABanner";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} – Meilleur Abonnement IPTV Premium France | 20 000+ Chaînes 4K`,
  description:
    "IRON TV PRO MAX – Le meilleur abonnement IPTV Premium en France. 20 000+ chaînes UHD/FHD/4K, 50 000+ films & séries, Anti-Freeze, support 24/7. IPTV stable et rapide.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Devices />
      <WhyChooseUs />
      <PricingSection />
      <Testimonials />
      <FAQPreview />
      <CTABanner />
    </>
  );
}
