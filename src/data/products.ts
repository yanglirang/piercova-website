export interface Category {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  suitableMaterials: string[];
  popularStyles: string[];
  care: string[];
}

export const categories: Category[] = [
  {
    slug: "earrings",
    name: "Earrings & Ear Piercing Jewelry",
    description:
      "From lobe studs to industrial barbells — implant-grade ear jewelry designed for every piercing location on the ear.",
    longDescription:
      "Ear piercings are the most diverse category in body jewelry, encompassing over 15 distinct piercing locations from the classic lobe to the daith and industrial. Our ear jewelry collection covers every position with anatomically appropriate sizing, threadless and internally-threaded options, and material choices suitable for initial piercings through to fully-healed curation. Each piece is manufactured to ASTM F136 titanium or ASTM F138 steel standards for implant-grade biocompatibility.",
    suitableMaterials: ["Titanium (ASTM F136)", "14K Gold", "Surgical Steel (ASTM F138)", "Sterling Silver (healed only)"],
    popularStyles: [
      "Labret studs (flat-back) — ideal for cartilage",
      "Barbells — for industrial and scaffold piercings",
      "Clicker hoops — for daith and septum",
      "Threadless push-pin tops — for endless customization",
      "CZ gem tops — cubic zirconia for brilliance",
    ],
    care: [
      "Clean twice daily with sterile saline during healing (6–12 months for cartilage)",
      "Avoid sleeping on healing piercings",
      "Downsize jewelry after initial swelling subsides",
    ],
  },
  {
    slug: "belly-rings",
    name: "Belly Rings (Navel Jewelry)",
    description:
      "Curved barbells and dangle designs — implant-grade navel jewelry that prioritizes both style and healing.",
    longDescription:
      "Navel piercings require specific jewelry design considerations: curved barbells that follow the natural anatomy, appropriate length to accommodate swelling during healing, and materials that resist corrosion in body-temperature environments. Our belly ring collection features ASTM F136 titanium curved barbells in standard 14G and 12G sizes, with gemmed dangle options for fully-healed piercings. Each piece is polished to a mirror finish to minimize friction against clothing and tissue.",
    suitableMaterials: ["Titanium (ASTM F136)", "14K Gold (healed)", "Surgical Steel (ASTM F138)"],
    popularStyles: [
      "Curved barbells — 14G standard, 10mm-12mm length",
      "Gemmed dangle drops — for healed piercings",
      "Opal-topped curved barbells",
      "PVD-coated titanium — rainbow and rose gold finishes",
    ],
    care: [
      "Healing time: 6–12 months minimum",
      "Avoid tight clothing that rubs against jewelry",
      "Wait until fully healed before changing to dangle styles",
      "Sterile saline spray twice daily during healing",
    ],
  },
  {
    slug: "nose-rings",
    name: "Nose Rings & Nostril Jewelry",
    description:
      "Seamless hoops, L-bends, and labret studs — precision-fit nose jewelry for nostril and septum piercings.",
    longDescription:
      "Nose piercings span nostril (the most common), septum, bridge, and nasallang placements. Each requires specific jewelry types — nostril piercings typically use L-bend, screw, or flat-back labret studs in 18G or 20G; septum piercings use circular barbells or clicker hoops in 16G or 14G. Our nose jewelry is precision-manufactured to ASTM F136 titanium, offering the benefit of anodization for colored pieces without coatings that could flake. Threadless designs allow for easy top changes without removing the post from the piercing.",
    suitableMaterials: ["Titanium (ASTM F136)", "14K Gold", "Surgical Steel (ASTM F138)"],
    popularStyles: [
      "L-bend studs — 18G / 20G for nostril",
      "Flat-back labret studs — most secure nostril option",
      "Seamless clicker hoops — for septum and healed nostril",
      "Circular barbells — classic septum style",
      "Threadless gem tops — CZ, opal, and titanium bead",
    ],
    care: [
      "Nostril healing: 4–6 months",
      "Septum healing: 6–8 weeks",
      "Avoid removing jewelry during healing",
      "Saline soaks for crusties and irritation bumps",
    ],
  },
  {
    slug: "lip-rings",
    name: "Lip Rings & Labret Studs",
    description:
      "Labret studs, circular barbells, and captive bead rings — oral-safe jewelry for lip and labret piercings.",
    longDescription:
      "Lip and labret piercings present unique challenges: constant moisture, mechanical movement from speaking and eating, and the risk of oral tissue damage. Our lip jewelry collection is engineered with internal threading or threadless push-pin mechanisms to eliminate exposed threads that can irritate tissue. Flat disc backs distribute pressure evenly on the inner lip. All oral jewelry is manufactured to ASTM F136 titanium for its corrosion resistance in moist environments and nickel-free composition — critical since oral mucosa absorbs chemicals more readily than external skin.",
    suitableMaterials: ["Titanium (ASTM F136)", "14K Gold (healed only)"],
    popularStyles: [
      "Labret studs — flat disc back, threadless or internally-threaded",
      "Circular barbells — for snake bites and side labret",
      "Captive bead rings — classic labret style",
      "Flat-top disc ends — for minimal profile",
    ],
    care: [
      "Healing: 6–8 weeks for lip, 8–12 weeks for labret",
      "Use alcohol-free, antibacterial mouthwash after meals",
      "Check disc tightness regularly — oral jewelry loosens over time",
      "Avoid alcohol, spicy foods, and smoking during healing",
    ],
  },
  {
    slug: "nipple-rings",
    name: "Nipple Rings & Barbells",
    description:
      "Straight and curved barbells — precision nipple jewelry in implant-grade materials for comfort and longevity.",
    longDescription:
      "Nipple piercings require precise jewelry sizing: gauge (typically 14G or 12G), length (to accommodate anatomy and potential swelling), and bar style (straight barbell is standard, curved barbell or CBR for healed variations). Our nipple jewelry is manufactured to ASTM F136 implant-grade titanium with mirror-polished surfaces to minimize friction. Internal threading eliminates exposed threads that can trap bacteria and irritate the piercing channel. Barbell lengths from 12mm to 22mm accommodate various anatomies and piercing placements.",
    suitableMaterials: ["Titanium (ASTM F136)", "14K Gold (healed only)"],
    popularStyles: [
      "Straight barbells — 14G standard, 14mm–16mm length",
      "Curved barbells — for healed piercings seeking different fit",
      "Gemmed ends — CZ, opal, and plain titanium balls",
      "Shield-style barbells — decorative for fully healed piercings",
    ],
    care: [
      "Healing: 6–12 months (can take up to 18 months for full maturation)",
      "Sterile saline spray twice daily",
      "Wear clean, breathable fabrics to reduce friction",
      "Avoid rotating jewelry during healing",
      "Do not use antibacterial soaps or alcohol on healing tissue",
    ],
  },
];
