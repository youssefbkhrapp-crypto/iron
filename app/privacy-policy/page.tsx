import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE_NAME, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: `Politique de confidentialité de ${SITE_NAME}. Découvrez comment nous collectons, utilisons et protégeons vos informations personnelles.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-24">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.2), transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-[0.2em]"
            style={{ background: "rgba(168,85,247,0.1)", color: "#7C0CB8", border: "1px solid rgba(168,85,247,0.25)" }}>
            Légal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a2e] mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-[#4a4a6a]/60 text-sm">Dernière mise à jour : Mai 2025</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div
            className="rounded-2xl p-6 sm:p-8 space-y-8 bg-white"
            style={{
              border: "1px solid rgba(168,85,247,0.15)",
              boxShadow: "0 4px 24px rgba(124,12,184,0.07)",
            }}
          >
            {[
              {
                title: "1. Informations que Nous Collectons",
                content: "Lorsque vous nous contactez ou passez une commande, nous pouvons collecter :",
                list: [
                  "Nom et coordonnées (numéro WhatsApp)",
                  "Type d'appareil et préférences",
                  "Formule d'abonnement choisie",
                  "Informations techniques à des fins de support",
                ],
              },
              {
                title: "2. Utilisation de Vos Informations",
                content: "Nous utilisons les informations collectées pour :",
                list: [
                  "Traiter et honorer votre commande d'abonnement",
                  "Fournir un support technique et une assistance à l'installation",
                  "Communiquer sur votre compte ou abonnement",
                  "Améliorer la qualité de notre service",
                  "Envoyer des mises à jour importantes du service",
                ],
              },
            ].map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">{section.title}</h2>
                <p className="text-[#4a4a6a] leading-relaxed text-sm mb-3">{section.content}</p>
                <ul className="space-y-1.5 text-sm text-[#4a4a6a]">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span style={{ color: "#7C0CB8" }} className="mt-0.5">•</span> {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">3. Sécurité des Données</h2>
              <p className="text-[#4a4a6a] leading-relaxed text-sm">
                Nous prenons la sécurité de vos données personnelles au sérieux. Nous mettons en œuvre
                des mesures techniques et organisationnelles appropriées pour protéger vos informations
                personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">4. Partage des Données</h2>
              <p className="text-[#4a4a6a] leading-relaxed text-sm">
                Nous ne vendons, n&apos;échangeons ni ne transférons vos informations personnelles à des tiers.
                Cela n&apos;inclut pas les tiers de confiance qui nous aident à exploiter notre service,
                à condition qu&apos;ils s&apos;engagent à garder ces informations confidentielles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">5. Cookies</h2>
              <p className="text-[#4a4a6a] leading-relaxed text-sm">
                Notre site web peut utiliser des cookies pour améliorer votre expérience de navigation.
                Vous pouvez choisir de désactiver les cookies via les paramètres de votre navigateur,
                bien que cela puisse affecter certaines fonctionnalités du site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">6. Vos Droits</h2>
              <ul className="mt-3 space-y-1.5 text-sm text-[#4a4a6a]">
                {[
                  "Demander l'accès aux données personnelles que nous détenons sur vous",
                  "Demander la correction de données inexactes",
                  "Demander la suppression de vos données personnelles",
                  "S'opposer à notre traitement de vos données",
                  "Demander la portabilité des données",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span style={{ color: "#7C0CB8" }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">7. Contact</h2>
              <p className="text-[#4a4a6a] leading-relaxed text-sm mb-3">
                Pour toute question concernant cette politique de confidentialité, contactez-nous via WhatsApp :
              </p>
              <div
                className="rounded-xl p-4"
                style={{ background: "rgba(168,85,247,0.05)", border: "1px solid rgba(168,85,247,0.2)" }}
              >
                <p className="text-sm text-[#1a1a2e] font-bold mb-1">{SITE_NAME}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: "#25D366" }}
                >
                  WhatsApp : +44 7400 455889
                </a>
              </div>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
