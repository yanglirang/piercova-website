export const SITE = {
  name: "Piercova",
  tagline: "Implant-Grade Body Piercing Jewelry",
  url: "https://www.piercova.com",
  email: "support@piercova.com",
  established: 2020,
  location: "Yiwu, Zhejiang, China",
  social: {
    instagram: "https://www.instagram.com/piercova",
    pinterest: "https://www.pinterest.com/piercova",
    tiktok: "https://www.tiktok.com/@piercova",
  },
} as const;

export const NAV = [
  { label: "Shop by Category", href: "/#categories" },
  { label: "Earrings", href: "/categories/earrings" },
  { label: "Belly Rings", href: "/categories/belly-rings" },
  { label: "Nose Rings", href: "/categories/nose-rings" },
  { label: "Lip Rings", href: "/categories/lip-rings" },
  { label: "Nipple Rings", href: "/categories/nipple-rings" },
  { label: "Materials Guide", href: "/#materials" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
] as const;
