export interface RoofProduct {
  id: string;
  name: string;
  pricePerSqm: number;
  formattedPrice: string;
  description: string;
  specifications: string[];
  image: string;
  badge?: string;
}

export interface GalleryProject {
  id: string;
  caption: string;
  location: string;
  roofType: string;
  estimatedArea: string;
  completionTime: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CompanyConfig {
  name: string;
  phoneDisplay: string;
  phoneDial: string;
  whatsappNumber: string;
  yardAddress: string;
  googleMapsUrl: string;
  operatingHours: string;
  stoneCoatedPrice: number;
  aluminiumPrice: number;
  stepTilesPrice: number;
}

export const DEFAULT_COMPANY_CONFIG: CompanyConfig = {
  name: "ApexShield Roofing Abuja",
  phoneDisplay: "0803 928 1734",
  phoneDial: "+2348039281734",
  whatsappNumber: "2348039281734",
  yardAddress: "Plot 18, Idu Industrial Layout, Phase 1, Opposite Railway Station, Abuja, FCT",
  googleMapsUrl: "https://maps.google.com/?q=Idu+Industrial+Layout+Abuja+Nigeria",
  operatingHours: "Monday – Saturday: 7:30 AM – 6:00 PM",
  stoneCoatedPrice: 8000,
  aluminiumPrice: 6500,
  stepTilesPrice: 7000,
};

export function getWhatsAppUrl(
  whatsappNumber: string,
  message: string
): string {
  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "jahi-duplex",
    caption: "4 Bedroom Duplex — Jahi",
    location: "Jahi District, Abuja",
    roofType: "Stone Coated Shingle (Charcoal Black)",
    estimatedArea: "480 sqm",
    completionTime: "4 Days",
    image: "/src/assets/images/abuja_duplex_jahi_1791627956124.jpg",
  },
  {
    id: "lugbe-bungalow",
    caption: "Bungalow — Lugbe",
    location: "Lugbe Airport Road, Abuja",
    roofType: "Aluminium Longspan 0.55mm (Anthracite Grey)",
    estimatedArea: "310 sqm",
    completionTime: "3 Days",
    image: "/src/assets/images/aluminium_longspan_1791627936218.jpg",
  },
  {
    id: "gwarinpa-family",
    caption: "Family Home — Gwarinpa",
    location: "3rd Avenue, Gwarinpa Estate, Abuja",
    roofType: "Step Tiles Aluminium (Dark Slate)",
    estimatedArea: "420 sqm",
    completionTime: "4 Days",
    image: "/src/assets/images/step_tiles_roof_1791627945954.jpg",
  },
  {
    id: "lokogoma-duplex",
    caption: "4 Bedroom Duplex — Lokogoma",
    location: "Lokogoma District, Abuja",
    roofType: "Stone Coated Bond Tile (Charcoal)",
    estimatedArea: "510 sqm",
    completionTime: "5 Days",
    image: "/src/assets/images/hero_abuja_roof_1791627912252.jpg",
  },
  {
    id: "lifecamp-newbuild",
    caption: "New Build — Life Camp",
    location: "Life Camp, FCT Abuja",
    roofType: "Stone Coated Classic (Forest Green & Charcoal)",
    estimatedArea: "390 sqm",
    completionTime: "4 Days",
    image: "/src/assets/images/stone_coated_tiles_1791627925112.jpg",
  },
  {
    id: "kubwa-bungalow",
    caption: "Bungalow — Kubwa",
    location: "Kubwa Phase 4, Abuja",
    roofType: "Aluminium Longspan 0.55mm",
    estimatedArea: "295 sqm",
    completionTime: "3 Days",
    image: "/src/assets/images/aluminium_longspan_1791627936218.jpg",
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    question: "How much does it cost to roof a three-bedroom house?",
    answer:
      "A typical 3-bedroom bungalow in Abuja usually requires between 260 to 340 square meters of roofing, depending on design and roof overhangs. At our current rates, Aluminium Longspan 0.55 comes to approximately ₦1.7M – ₦2.2M, while Stone Coated tiles range from ₦2.1M – ₦2.7M (excluding wood carcass and fascia boards). Send us your building plan or location, and we will carry out a free site measurement and provide an exact, itemized quotation within 2 hours.",
  },
  {
    question: "How long does installation take?",
    answer:
      "For a standard 3-to-4 bedroom bungalow or duplex in Abuja, full roof installation takes 3 to 5 working days from when materials land on your site. Our certified installers handle sheet profiling, accurate interlocking, ridge caps, and leak-proof valley gutter sealing smoothly without delays.",
  },
  {
    question: "How does payment work?",
    answer:
      "We operate a strictly trust-first payment model: No full payment before work. You inspect materials on your site and make an initial deposit for profiling and delivery. You only balance the remainder after our crew completes installation and you have personally inspected and approved the finished roof.",
  },
];
