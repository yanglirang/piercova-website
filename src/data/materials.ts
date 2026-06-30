export interface Material {
  slug: string;
  name: string;
  standard: string;
  subtitle: string;
  description: string;
  biocompatibility: string;
  nickelContent: string;
  durability: string;
  hypoallergenic: boolean;
  suitableFor: string[];
  colors: string[];
  care: string[];
}

export const materials: Material[] = [
  {
    slug: "titanium",
    name: "ASTM F136 Implant-Grade Titanium",
    standard: "ASTM F136 (Ti-6Al-4V ELI)",
    subtitle:
      "The gold standard in body jewelry — the same material used for surgical implants",
    description:
      "ASTM F136 is an implant-grade titanium alloy specifically engineered for permanent implantation in the human body. Regulated by ASTM International, this standard mandates strict composition limits, requiring Extra Low Interstitial (ELI) elements — meaning reduced oxygen, nitrogen, and iron content for maximum biocompatibility. Unlike commercially pure titanium, Ti-6Al-4V ELI offers superior tensile strength (minimum 860 MPa) while maintaining full biocompatibility, making it ideal for initial piercings, healing periods, and long-term daily wear.",
    biocompatibility:
      "Fully biocompatible — the same alloy used in hip replacements, dental implants, and spinal fusion devices. Osseointegration capability means bone cells can attach directly to the surface.",
    nickelContent: "0% — Nickel-free by composition. Safe for nickel allergy sufferers.",
    durability:
      "Tensile strength 860–965 MPa. Scratch-resistant, corrosion-resistant, and will not tarnish. Lifetime durability under normal wear.",
    hypoallergenic: true,
    suitableFor: [
      "Initial piercings",
      "Healing periods",
      "Sensitive skin",
      "Nickel allergy",
      "Long-term daily wear",
      "MRI compatibility",
    ],
    colors: ["Polished Silver", "Anodized Gold", "Anodized Rose Gold", "Anodized Blue", "Anodized Purple", "Anodized Teal"],
    care: [
      "Clean with mild soap and warm water",
      "Avoid ultrasonic cleaners for anodized finishes",
      "Store separately to prevent scratching",
    ],
  },
  {
    slug: "surgical-steel",
    name: "ASTM F138 Implant-Grade 316L Surgical Steel",
    standard: "ASTM F138 (316LVM)",
    subtitle:
      "Surgical-grade stainless steel refined for implant use — the industry workhorse",
    description:
      "ASTM F138 is a vacuum-melted (316LVM) variant of 316L stainless steel specifically formulated for surgical implants. The vacuum melting process significantly reduces non-metallic inclusions, resulting in a cleaner, more homogeneous material with superior corrosion resistance. Unlike standard 316L steel used in cookware or construction, ASTM F138 is regulated for medical implant use and contains lower carbon content (max 0.030%) to prevent intergranular corrosion. While it does contain nickel (12-14%), the nickel is tightly bound within the austenitic crystal structure, meaning it does not leach into the skin under normal conditions.",
    biocompatibility:
      "ISO 10993-1 certified for medical device biocompatibility. Used in bone screws, temporary fixation devices, and orthodontic brackets.",
    nickelContent:
      "12–14% nickel — bound within austenitic structure, minimal ion release. Not recommended for known nickel allergies.",
    durability:
      "Tensile strength 485–620 MPa. Excellent corrosion resistance in chloride environments. Maintains mirror polish for years.",
    hypoallergenic: false,
    suitableFor: [
      "Healed piercings",
      "Budget-conscious quality",
      "Body jewelry with complex machining",
      "Threaded styles and intricate designs",
    ],
    colors: ["Mirror Polish Silver", "PVD Gold", "PVD Rose Gold", "PVD Black"],
    care: [
      "Wipe with soft microfiber cloth",
      "Avoid chlorine and salt water immersion",
      "PVD coatings require gentle handling",
    ],
  },
  {
    slug: "sterling-silver",
    name: "925 Sterling Silver",
    standard: "ASTM B700 (92.5% Ag / 7.5% Cu)",
    subtitle:
      "Classic elegance — 92.5% pure silver alloyed for strength and brilliance",
    description:
      "925 Sterling Silver contains 92.5% pure silver alloyed with 7.5% copper to achieve suitable hardness for jewelry. Copper provides the necessary strength while allowing the silver to maintain its characteristic white luster. Sterling silver is not recommended for initial piercings or moist environments (navel, tongue) because silver can oxidize when exposed to bodily fluids. It is best suited for ear piercings that are fully healed and for occasional wear in other locations.",
    biocompatibility:
      "Generally biocompatible for external wear. Not suitable for moist piercing environments — silver can tarnish and may cause argyria (skin discoloration) in rare cases.",
    nickelContent:
      "0% — 925 silver alloy contains no nickel. Safe for nickel allergy when properly alloyed.",
    durability:
      "Softer than titanium and steel (Vickers hardness ~75 HV). Prone to scratching and bending. Requires regular polishing to maintain luster.",
    hypoallergenic: true,
    suitableFor: [
      "Fully healed ear piercings",
      "Lobe and helix styles",
      "Occasional wear",
      "Formal and elegant looks",
    ],
    colors: ["Polished Silver", "Oxidized Black", "Matte Brushed"],
    care: [
      "Store in anti-tarnish bag",
      "Polish with silver polishing cloth",
      "Remove before swimming or showering",
      "Avoid contact with perfumes and lotions",
    ],
  },
  {
    slug: "14k-gold",
    name: "14K Solid Gold",
    standard: "14K (58.5% Au)",
    subtitle:
      "Timeless luxury — 14 karat solid gold for the most discerning wearers",
    description:
      "14K solid gold contains 58.5% pure gold alloyed with copper and silver for strength. Gold content is consistent throughout the piece — not plated, not filled, not vermeil. 14K provides an ideal balance between purity and durability for body jewelry: higher karat values (18K, 24K) are too soft for threaded ends and daily wear, while 14K maintains the rich color and hypoallergenic properties gold is known for. Available in yellow, white, and rose gold through precise alloy adjustments — not surface plating.",
    biocompatibility:
      "Pure gold is the most biocompatible jewelry metal. 14K alloy additions (copper, silver) are also biocompatible. Safe for all piercing types.",
    nickelContent:
      "0% in yellow and rose gold — confirmed nickel-free. White gold may contain nickel depending on alloy; we use nickel-free palladium-based white gold.",
    durability:
      "Vickers hardness ~140 HV — harder than both sterling silver and pure gold. Resists tarnishing permanently. Will not corrode.",
    hypoallergenic: true,
    suitableFor: [
      "All piercing types, healed",
      "Sensitive skin and allergies",
      "Luxury daily wear",
      "Heirloom-quality investment pieces",
    ],
    colors: ["Yellow Gold", "White Gold (Nickel-Free)", "Rose Gold"],
    care: [
      "Clean with warm water and mild soap",
      "Professional ultrasonic cleaning safe",
      "Store individually in soft pouch",
      "Polish annually to restore brilliance",
    ],
  },
];
