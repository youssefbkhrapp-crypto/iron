import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE_NAME, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
  description: `Conditions générales d'utilisation du service ${SITE_NAME}. Veuillez lire attentivement avant de souscrire à notre service IPTV Premium.`,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-24">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, rgba(44,22,181,0.15), transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-5 uppercase tracking-[0.2em]"
            style={{ background: "rgba(168,85,247,0.1)", color: "#7C0CB8", border: "1px solid rgba(168,85,247,0.25)" }}>
            Légal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1a1a2e] mb-4">
            Conditions Générales
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
            <div
              className="p-4 rounded-xl"
              style={{ background: "rgba(168,85,247,0.06)", border: "1px solid rgba(168,85,247,0.2)" }}
            >
              <p className="text-sm text-[#4a4a6a] leading-relaxed">
                <strong className="text-[#1a1a2e]">Important :</strong> Veuillez lire attentivement ces Conditions Générales
                avant d&apos;utiliser notre service. En souscrivant à {SITE_NAME}, vous acceptez d&apos;être lié par ces conditions.
              </p>
            </div>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">1. Acceptation des Conditions</h2>
              <p className="text-[#4a4a6a] leading-relaxed text-sm">
                En accédant et en utilisant les services fournis par {SITE_NAME}, vous acceptez d&apos;être lié par
                ces Conditions Générales. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser notre service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">2. Description du Service</h2>
              <p className="text-[#4a4a6a] leading-relaxed text-sm">
                {SITE_NAME} fournit un service de streaming IPTV qui diffuse des chaînes de télévision en direct, du
                contenu à la demande (VOD) et d&apos;autres contenus en streaming via Internet. Le service est fourni
                uniquement à des fins personnelles et non commerciales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">3. Responsabilités de l&apos;Utilisateur</h2>
              <p className="text-[#4a4a6a] text-sm mb-3">En utilisant notre service, vous vous engagez à :</p>
              <ul className="space-y-1.5 text-sm text-[#4a4a6a]">
                {[
                  "Utiliser le service à des fins personnelles et non commerciales uniquement",
                  "Ne pas partager, revendre ou redistribuer vos identifiants d'abonnement",
                  "Respecter toutes les lois locales, nationales et internationales applicables",
                  "Ne pas tenter de contourner les mesures de sécurité",
                  "Maintenir la confidentialité de vos identifiants de compte",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span style={{ color: "#7C0CB8" }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">4. Paiement et Facturation</h2>
              <p className="text-[#4a4a6a] leading-relaxed text-sm">
                Tous les paiements sont traités via les méthodes convenues communiquées via WhatsApp. Les frais
                d&apos;abonnement sont dus à l&apos;avance. Votre abonnement restera actif pendant la période convenue
                à partir de la date d&apos;activation. Nous nous réservons le droit de modifier les tarifs avec un préavis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">5. Politique de Remboursement</h2>
              <p className="text-[#4a4a6a] text-sm mb-3">Nous offrons des remboursements ou des extensions dans les cas suivants :</p>
              <ul className="space-y-1.5 text-sm text-[#4a4a6a]">
                <li className="flex gap-2"><span style={{ color: "#7C0CB8" }}>•</span> Problèmes techniques que notre équipe ne peut pas résoudre dans les 48 heures</li>
                <li className="flex gap-2"><span style={{ color: "#7C0CB8" }}>•</span> Interruptions de service de plus de 24 heures</li>
              </ul>
              <p className="mt-3 text-sm text-[#4a4a6a]">
                Les remboursements ne sont pas fournis pour un changement d&apos;avis une fois le service activé.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">6. Disponibilité du Service</h2>
              <p className="text-[#4a4a6a] leading-relaxed text-sm">
                Nous visons à maintenir une disponibilité de 99,9%. Cependant, nous ne pouvons garantir un service
                ininterrompu. La maintenance planifiée ou les circonstances indépendantes de notre volonté peuvent
                occasionnellement affecter la disponibilité du service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">7. Contenu et Droits d&apos;Auteur</h2>
              <p className="text-[#4a4a6a] leading-relaxed text-sm">
                Les utilisateurs sont seuls responsables de s&apos;assurer que leur utilisation du service est conforme
                à toutes les lois sur le droit d&apos;auteur et la propriété intellectuelle applicables dans leur juridiction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">8. Résiliation du Compte</h2>
              <p className="text-[#4a4a6a] leading-relaxed text-sm">
                Nous nous réservons le droit de suspendre ou de résilier les comptes qui violent ces Conditions Générales,
                notamment le partage d&apos;identifiants, la revente du service ou l&apos;utilisation commerciale.
                Aucun remboursement ne sera fourni pour les comptes résiliés en raison de violations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">9. Limitation de Responsabilité</h2>
              <p className="text-[#4a4a6a] leading-relaxed text-sm">
                {SITE_NAME} ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou
                punitifs résultant de votre utilisation ou de votre incapacité à utiliser le service. Notre
                responsabilité est limitée au montant payé pour l&apos;abonnement en question.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">10. Contact</h2>
              <p className="text-[#4a4a6a] leading-relaxed text-sm mb-3">
                Pour toute question concernant ces Conditions Générales :
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
