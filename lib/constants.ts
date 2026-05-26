export const WHATSAPP_NUMBER = "447400455889";
export const WHATSAPP_MESSAGE = "Bonjour, je souhaite souscrire à IRON TV PRO MAX";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const SITE_NAME = "IRON TV PRO MAX";
export const SITE_URL = "https://irontvpromax.fr";
export const SITE_DESCRIPTION =
  "IRON TV PRO MAX – Le meilleur abonnement IPTV Premium en France. 20 000+ chaînes UHD/FHD/HD, 50 000+ films & séries, technologie Anti-Freeze et support 24/7. IPTV 4K stable et rapide.";

export const PRICING_PLANS = [
  {
    id: "3mois",
    checkoutId: "3mois",
    name: "IRON TV PRO",
    subtitle: "3 MOIS",
    price: "€19.99",
    originalPrice: "€29.99",
    period: "3 mois",
    monthlyPrice: "€6.67/mois",
    savings: null,
    discount: "-33%",
    popular: false,
    badge: "-33%",
    badgeStyle: "orange",
    cta: "Activer maintenant — €19.99",
    features: [
      "Support Qualité 4K, FHD, HD & SD",
      "Active code / Username Password",
      "Xtream code / m3u",
      "Support Guide TV (EPG) disponible",
      "Support Smart TV Samsung, LG...",
      "Mises à jour en continu",
      "Livraison instantanée",
      "Assistance disponible 24/7",
    ],
    connections: 1,
  },
  {
    id: "6mois",
    checkoutId: "6mois",
    name: "IRON TV PRO",
    subtitle: "6 MOIS",
    price: "€35.99",
    originalPrice: "€59.99",
    period: "6 mois",
    monthlyPrice: "€6.00/mois",
    savings: null,
    discount: "-40%",
    popular: false,
    badge: "-40%",
    badgeStyle: "blue",
    cta: "Activer maintenant — €35.99",
    features: [
      "Support Qualité 4K, FHD, HD & SD",
      "Active code / Username Password",
      "Xtream code / m3u",
      "Support Guide TV (EPG) disponible",
      "Support Smart TV Samsung, LG...",
      "Mises à jour en continu",
      "Livraison instantanée",
      "Assistance disponible 24/7",
    ],
    connections: 1,
  },
  {
    id: "12mois",
    checkoutId: "12mois",
    name: "IRON TV PRO",
    subtitle: "12 MOIS",
    price: "€45.99",
    originalPrice: "€119.99",
    period: "12 mois",
    monthlyPrice: "€3.83/mois",
    savings: "Économisez €74",
    discount: "-62%",
    popular: true,
    badge: "⭐ Le Plus Choisi — -62%",
    badgeStyle: "purple",
    cta: "Profiter de l'offre — €45.99",
    features: [
      "Support Qualité 4K, FHD, HD & SD",
      "Active code / Username Password",
      "Xtream code / m3u",
      "Support Guide TV (EPG) disponible",
      "Support Smart TV Samsung, LG...",
      "Mises à jour en continu",
      "Livraison instantanée",
      "Assistance 24/7 prioritaire",
    ],
    connections: 1,
  },
  {
    id: "duo",
    checkoutId: "duo12mois",
    name: "IRON TV PRO DUO",
    subtitle: "12 MOIS — 2 ÉCRANS",
    price: "€69.99",
    originalPrice: "€149",
    period: "12 mois",
    monthlyPrice: "€2.92/mois par écran",
    savings: null,
    discount: "-53%",
    popular: false,
    badge: "👥 Famille — 2 Écrans",
    badgeStyle: "green",
    cta: "Activer 2 écrans — €69.99",
    features: [
      "Support Qualité 4K, FHD, HD & SD",
      "Active code / Username Password",
      "Xtream code / m3u",
      "Support Guide TV (EPG) disponible",
      "Support Smart TV Samsung, LG...",
      "Mises à jour en continu",
      "Livraison instantanée",
      "Assistance disponible 24/7",
    ],
    connections: 2,
  },
];

export const FEATURES = [
  {
    icon: "Tv",
    title: "20 000+ Chaînes",
    description:
      "Accédez à plus de 20 000 chaînes en direct en qualité UHD, FHD et HD du monde entier.",
  },
  {
    icon: "Film",
    title: "50 000+ VOD",
    description:
      "Une immense bibliothèque de films et séries mise à jour quotidiennement avec les dernières sorties.",
  },
  {
    icon: "Zap",
    title: "Anti-Freeze IPTV",
    description:
      "Notre technologie anti-freeze avancée garantit un streaming fluide et sans interruption à tout moment.",
  },
  {
    icon: "Shield",
    title: "99,9% de Disponibilité",
    description:
      "Une infrastructure serveur de qualité entreprise qui garantit une fiabilité et une disponibilité maximales.",
  },
  {
    icon: "Headphones",
    title: "Support 24/7",
    description:
      "Notre équipe dédiée est disponible en permanence via WhatsApp pour vous aider.",
  },
  {
    icon: "Smartphone",
    title: "Tous les Appareils",
    description:
      "Compatible avec Smart TV, Firestick, Android, iOS, MAG et tous les appareils principaux.",
  },
];

export const DEVICES = [
  { name: "Smart TV", icon: "Tv", color: "#a855f7" },
  { name: "Amazon Firestick", icon: "Wifi", color: "#6366f1" },
  { name: "Android TV", icon: "Box", color: "#8b5cf6" },
  { name: "iPhone / iPad", icon: "Smartphone", color: "#a855f7" },
  { name: "Android", icon: "Smartphone", color: "#6366f1" },
  { name: "MAG Box", icon: "Tv", color: "#8b5cf6" },
  { name: "Windows PC", icon: "Monitor", color: "#a855f7" },
  { name: "Mac", icon: "Laptop", color: "#6366f1" },
];

export const FAQS = [
  {
    question: "Qu'est-ce que l'IPTV et comment ça fonctionne ?",
    answer:
      "L'IPTV (Internet Protocol Television) diffuse du contenu télévisuel via Internet au lieu des satellites ou câbles traditionnels. Vous recevez une liste de chaînes pouvant être diffusées sur n'importe quel appareil compatible avec une application lecteur IPTV.",
  },
  {
    question: "Quels appareils sont compatibles avec IRON TV PRO MAX ?",
    answer:
      "Notre service IPTV Premium fonctionne sur les Smart TVs (Samsung, LG, Sony), Amazon Firestick & Fire TV, Android TV Box, appareils MAG, iOS (iPhone/iPad), Android, PC Windows et Mac.",
  },
  {
    question: "Combien de temps pour recevoir mon abonnement IPTV ?",
    answer:
      "Après confirmation de votre commande via WhatsApp, vous recevrez vos identifiants de connexion en quelques minutes. Notre équipe est disponible 24h/24, 7j/7 pour traiter votre commande.",
  },
  {
    question: "Proposez-vous un essai gratuit IPTV ?",
    answer:
      "Oui ! Nous proposons un essai gratuit pour tester notre service IPTV Pro Max avant de souscrire. Contactez-nous sur WhatsApp pour demander votre essai.",
  },
  {
    question: "Combien d'appareils puis-je utiliser simultanément ?",
    answer:
      "Le nombre de connexions simultanées dépend de votre formule. Les formules 1 et 3 mois supportent 1 connexion, la formule 6 mois supporte 2 connexions, et la formule 12 mois supporte 3 connexions simultanées.",
  },
  {
    question: "Quelle vitesse Internet est nécessaire pour l'IPTV 4K ?",
    answer:
      "Pour le streaming HD, nous recommandons au moins 10 Mbps. Pour le FHD (1080p), 20 Mbps. Pour le contenu UHD/4K, nous recommandons 30+ Mbps pour la meilleure expérience.",
  },
  {
    question: "Puis-je obtenir un remboursement ?",
    answer:
      "Nous offrons une garantie de satisfaction. Si vous rencontrez des problèmes que notre équipe ne peut pas résoudre dans les 48 heures, nous fournirons un remboursement ou une prolongation. Contactez-nous via WhatsApp.",
  },
  {
    question: "Votre service IPTV est-il légal ?",
    answer:
      "Nous fournissons un service de streaming IPTV légitime. Il est de la responsabilité du client de s'assurer qu'il utilise le service conformément aux lois en vigueur dans son pays.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Thomas Dupont",
    location: "Paris, France",
    rating: 5,
    text: "Service incroyable ! La qualité d'image est exceptionnelle et je n'ai eu aucun freeze en 6 mois. Le meilleur IPTV que j'ai jamais utilisé en France.",
    plan: "Formule 12 Mois",
  },
  {
    name: "Sarah Martin",
    location: "Lyon, France",
    rating: 5,
    text: "Installation super facile et le support m'a aidé instantanément sur WhatsApp. Des milliers de chaînes en qualité cristalline. Je recommande vivement !",
    plan: "Formule 6 Mois",
  },
  {
    name: "Mohammed Benali",
    location: "Marseille, France",
    rating: 5,
    text: "J'étais sceptique au départ mais l'essai gratuit m'a convaincu. Les chaînes arabes sont en excellente qualité. Maintenant toute ma famille l'utilise.",
    plan: "Formule 12 Mois",
  },
  {
    name: "Emma Bernard",
    location: "Bordeaux, France",
    rating: 5,
    text: "Rapport qualité-prix imbattable. Mon installation Firestick a été faite en quelques minutes et tout fonctionne parfaitement. La bibliothèque de films est immense !",
    plan: "Formule 6 Mois",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Streams de Qualité Premium",
    description:
      "Nous sourçons nos flux auprès des meilleurs fournisseurs pour garantir une qualité d'image UHD/4K cristalline.",
    icon: "Star",
  },
  {
    title: "Bibliothèque Massive",
    description:
      "Avec 20 000+ chaînes en direct et 50 000+ titres VOD, vous ne manquerez jamais de contenu.",
    icon: "Library",
  },
  {
    title: "Activation Instantanée",
    description:
      "Démarrez en quelques minutes. Une fois activé, recevez vos identifiants instantanément et commencez à streamer.",
    icon: "Rocket",
  },
  {
    title: "Support Dédié",
    description:
      "Notre équipe d'experts est disponible 24h/24, 7j/7 via WhatsApp pour l'installation et le dépannage.",
    icon: "LifeBuoy",
  },
];

export const SETUP_STEPS = [
  {
    device: "Amazon Firestick",
    steps: [
      "Allez dans Paramètres > Ma Fire TV > Options Développeur",
      'Activez "Applications de sources inconnues"',
      "Recherchez \"Downloader\" dans la barre de recherche",
      "Installez l'application Downloader",
      "Ouvrez Downloader et entrez l'URL du lecteur IPTV",
      "Installez l'application lecteur IPTV",
      "Ouvrez le lecteur et entrez votre URL M3U ou identifiants Xtream",
      "Profitez de vos chaînes !",
    ],
  },
  {
    device: "Smart TV (Samsung/LG)",
    steps: [
      "Allez dans l'App Store de votre Smart TV",
      "Recherchez 'Smart IPTV' ou 'GSE Smart IPTV'",
      "Installez l'application",
      "Ouvrez l'application et accédez aux Paramètres",
      "Entrez votre URL de playlist M3U",
      "Actualisez la liste des chaînes",
      "Commencez à regarder !",
    ],
  },
  {
    device: "Android Phone/Tablette",
    steps: [
      "Allez sur Google Play Store",
      "Recherchez 'TiviMate' ou 'IPTV Smarters'",
      "Installez votre lecteur préféré",
      "Ouvrez l'application et sélectionnez 'Ajouter une playlist'",
      "Choisissez 'Codes Xtream' ou 'URL M3U'",
      "Entrez les identifiants fournis par nous",
      "Attendez le chargement des chaînes",
      "Profitez du streaming !",
    ],
  },
  {
    device: "iPhone / iPad",
    steps: [
      "Ouvrez l'App Store",
      "Recherchez 'GSE Smart IPTV' ou 'IPTV Smarters Pro'",
      "Installez l'application",
      "Ouvrez l'application et appuyez sur 'Ajouter une URL distante'",
      "Entrez votre URL de playlist M3U",
      "Sauvegardez et actualisez",
      "Parcourez et profitez de vos chaînes !",
    ],
  },
];
