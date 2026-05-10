/* ─── TYPES ───────────────────────────────────────────── */
export type Category =
  | "Flowers"
  | "Gummies"
  | "Crystal"
  | "Hash"
  | "Vapes"
  | "E-Liquids"
  | "Vaporisers";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  subCategory: string;
  price: number;
  image: string;
  imageBack?: string;
  isNew?: boolean;
  isPopular?: boolean;
}

/* ─── AI-GENERATED IMAGE URLS ─────────────────────────── */
const img = (id: string) => `/ai_gen/${id}.png`;

/* ─── BRANDS (for marquee) ────────────────────────────── */
export const BRANDS = [
  "Relax Store", "Canntropy", "Hemnia", "Euphoria", "Royal CBD",
  "Canapuff", "Mama Mary", "LeafNjoy", "Heavens Haze", "Chips Ahoy",
  "Gorillagarz", "CBD Calm", "Cannastra", "El Pablo", "Amnesia",
  "XVape", "XMax", "Yocan", "Harmony", "HITE",
];

/* ─── CATALOG ─────────────────────────────────────────── */
export const PRODUCTS: Product[] = [

  /* ══════════  FLOWERS (27)  ══════════ */
  {
    id: "f01", name: "CBD Amnesia Haze 2.5g", brand: "Relax Store",
    category: "Flowers", subCategory: "2.5g Packs",
    price: 25, image: img("f01"),
  },
  {
    id: "f02", name: "CBD Wedding Cake 2.5g", brand: "Relax Store",
    category: "Flowers", subCategory: "2.5g Packs",
    price: 25, image: img("f02"), isPopular: true,
  },
  {
    id: "f03", name: "CBD Cherry Pie 2.5g", brand: "Relax Store",
    category: "Flowers", subCategory: "2.5g Packs",
    price: 25, image: img("f03"),
  },
  {
    id: "f04", name: "Lemon Haze THCJD Sativa 2.5g", brand: "Leafy Joy",
    category: "Flowers", subCategory: "Leafy Joy",
    price: 45, image: img("f04"), isNew: true,
  },
  {
    id: "f05", name: "Alien Cheese THCJD Hybrid 2.5g", brand: "Leafy Joy",
    category: "Flowers", subCategory: "Leafy Joy",
    price: 45, image: img("f05"), isNew: true,
  },
  {
    id: "f06", name: "THCV OG Kush Flowers 1.5g", brand: "Heavens Haze",
    category: "Flowers", subCategory: "Heavens Haze THCV",
    price: 30, image: img("f06"),
  },
  {
    id: "f07", name: "THCV Gorilla Blue Flowers 1.5g", brand: "Heavens Haze",
    category: "Flowers", subCategory: "Heavens Haze THCV",
    price: 25, image: img("f07"),
  },
  {
    id: "f08", name: "THCV White Widow Flowers 1.5g", brand: "Heavens Haze",
    category: "Flowers", subCategory: "Heavens Haze THCV",
    price: 25, image: img("f08"),
  },
  {
    id: "f09", name: "Canntropy CBD 20% Flowers 1g", brand: "Canntropy",
    category: "Flowers", subCategory: "Canntropy",
    price: 2, image: img("f09"),
  },
  {
    id: "f10", name: "Canntropy H4CBD 60% Flowers 1g", brand: "Canntropy",
    category: "Flowers", subCategory: "Canntropy",
    price: 25, image: img("f10"),
  },
  {
    id: "f11", name: "Canntropy CBG9 85% Flowers 1g", brand: "Canntropy",
    category: "Flowers", subCategory: "Canntropy",
    price: 25, image: img("f11"),
  },
  {
    id: "f12", name: "Creative Boost Cannabis Flowers 1g", brand: "Hemnia",
    category: "Flowers", subCategory: "Hemnia",
    price: 25, image: img("f12"),
  },
  {
    id: "f13", name: "Summer Vibes Cannabis Flowers 1g", brand: "Hemnia",
    category: "Flowers", subCategory: "Hemnia",
    price: 25, image: img("f13"),
  },
  {
    id: "f14", name: "Royal CBD Premium Flowers 5g", brand: "Royal CBD",
    category: "Flowers", subCategory: "5g Packs",
    price: 40, image: img("f14"), isPopular: true,
  },
  {
    id: "f15", name: "CBD Lemon Gelato 1g", brand: "Canapuff",
    category: "Flowers", subCategory: "Canapuff",
    price: 20, image: img("f15"),
  },
  {
    id: "f16", name: "THCV & Live Resin Flowers 1g", brand: "Canntropy",
    category: "Flowers", subCategory: "Canntropy",
    price: 25, image: img("f16"), isNew: true,
  },
  {
    id: "f17", name: "CBD Hemp Flower 10g", brand: "Relax Store",
    category: "Flowers", subCategory: "10g Packs",
    price: 70, image: img("f17"),
  },
  {
    id: "f18", name: "CBG Hemp Flower 10g", brand: "Relax Store",
    category: "Flowers", subCategory: "10g Packs",
    price: 70, image: img("f18"),
  },
  {
    id: "f19", name: "THCV Lemon Haze Sativa 1.5g", brand: "Relax Store",
    category: "Flowers", subCategory: "THCV Flowers",
    price: 25, image: img("f19"),
  },
  {
    id: "f20", name: "THCV Green Crack Sativa Super Strong 1.5g", brand: "Relax Store",
    category: "Flowers", subCategory: "THCV Flowers",
    price: 25, image: img("f20"),
  },
  {
    id: "f21", name: "THCV Green Crack Sativa Super Strong 5g", brand: "Relax Store",
    category: "Flowers", subCategory: "THCV Flowers",
    price: 50, image: img("f21"),
  },
  {
    id: "f22", name: "THCV Lemon Haze Sativa Super Strong 5g", brand: "Relax Store",
    category: "Flowers", subCategory: "THCV Flowers",
    price: 50, image: img("f22"),
  },
  {
    id: "f23", name: "White Widow 5g", brand: "Mama Mary",
    category: "Flowers", subCategory: "Mama Mary",
    price: 40, image: img("f23"),
  },
  {
    id: "f24", name: "Runtz 2g", brand: "Mama Mary",
    category: "Flowers", subCategory: "Mama Mary",
    price: 20, image: img("f24"),
  },
  {
    id: "f25", name: "Amnesia 5g", brand: "Mama Mary",
    category: "Flowers", subCategory: "Mama Mary",
    price: 40, image: img("f25"),
  },
  {
    id: "f26", name: "CBD-P Flower Amnesia Strong", brand: "Euphoria",
    category: "Flowers", subCategory: "Euphoria",
    price: 20, image: img("f26"),
  },
  {
    id: "f27", name: "CBD Snus — Ice Watermelon", brand: "Relax Store",
    category: "Flowers", subCategory: "Snus",
    price: 15, image: img("f27"),
  },

  /* ══════════  GUMMIES (11)  ══════════ */
  {
    id: "g01", name: "CBD Lemon Haze Gummies 95% — 20g", brand: "Relax Store",
    category: "Gummies", subCategory: "CBD Gummies",
    price: 25, image: img("g01"), isPopular: true,
  },
  {
    id: "g02", name: "CBD Lemon Haze Gummies 60% — 20g", brand: "Relax Store",
    category: "Gummies", subCategory: "CBD Gummies",
    price: 20, image: img("g02"),
  },
  {
    id: "g03", name: "THCV Gummies 20mg", brand: "Euphoria",
    category: "Gummies", subCategory: "THCV Gummies",
    price: 25, image: img("g03"), isNew: true,
  },
  {
    id: "g04", name: "Cannabis Gummies Apple OG 90mg THCv — 50g", brand: "Euphoria",
    category: "Gummies", subCategory: "THCv Gummies",
    price: 30, image: img("g04"),
  },
  {
    id: "g05", name: "Cannabis Gummies Strawberry Haze 90mg THCv — 50g", brand: "Euphoria",
    category: "Gummies", subCategory: "THCv Gummies",
    price: 30, image: img("g05"),
  },
  {
    id: "g06", name: "THC Infused Gummies Super Strong — Red", brand: "Relax Store",
    category: "Gummies", subCategory: "THC Gummies",
    price: 20, image: img("g06"),
  },
  {
    id: "g07", name: "THC Infused Gummies Super Strong — Purple", brand: "Relax Store",
    category: "Gummies", subCategory: "THC Gummies",
    price: 20, image: img("g07"),
  },
  {
    id: "g08", name: "THC Infused Gummies Super Strong — Yellow", brand: "Relax Store",
    category: "Gummies", subCategory: "THC Gummies",
    price: 20, image: img("g08"),
  },
  {
    id: "g09", name: "THCV Kush Kat Sativa Super Strong 2g", brand: "Relax Store",
    category: "Gummies", subCategory: "THCV Gummies",
    price: 35, image: img("g09"),
  },
  {
    id: "g10", name: "CBG9 Gummies Candy Cotton 25mg", brand: "Canapuff",
    category: "Gummies", subCategory: "CBG9 Gummies",
    price: 25, image: img("g10"), isNew: true,
  },
  {
    id: "g11", name: "Good Night's Sleep Gummies 30pcs", brand: "Hemnia",
    category: "Gummies", subCategory: "CBD Gummies",
    price: 29, image: img("g11"),
  },

  /* ══════════  CRYSTAL (3)  ══════════ */
  {
    id: "c01", name: "CBG Crystal 475mg", brand: "Euphoria",
    category: "Crystal", subCategory: "CBG Crystal",
    price: 20, image: img("c01"), isPopular: true,
  },
  {
    id: "c02", name: "CBG Crystal 500mg", brand: "Euphoria",
    category: "Crystal", subCategory: "CBG Crystal",
    price: 50, image: img("c02"),
  },
  {
    id: "c03", name: "CBG Crystal 100mg", brand: "Euphoria",
    category: "Crystal", subCategory: "CBG Crystal",
    price: 110, image: img("c03"),
  },

  /* ══════════  HASH (3)  ══════════ */
  {
    id: "h01", name: "Chips Ahoy Cookies & Milk Hash 1.5g", brand: "Chips Ahoy",
    category: "Hash", subCategory: "Flavoured Hash",
    price: 20, image: img("h01"), isPopular: true,
  },
  {
    id: "h02", name: "Gorillagarz Handcrafted Hash 3.5g", brand: "Gorillagarz",
    category: "Hash", subCategory: "Premium Hash",
    price: 30, image: img("h02"),
  },
  {
    id: "h03", name: "Gorilla Breath Hash & Trim 3.5g", brand: "Gorillagarz",
    category: "Hash", subCategory: "Premium Hash",
    price: 35, image: img("h03"), isNew: true,
  },

  /* ══════════  VAPES (7)  ══════════ */
  {
    id: "v01", name: "Skywalker OG 1ml", brand: "CBD Calm",
    category: "Vapes", subCategory: "CBD Vapes",
    price: 20, image: img("v01"),
  },
  {
    id: "v02", name: "THCV Super Lemon Haze 1000 Puff", brand: "Canntropy",
    category: "Vapes", subCategory: "THCV Vapes",
    price: 55, image: img("v02"), isNew: true,
  },
  {
    id: "v03", name: "THCV Sour Diesel 1000 Puff", brand: "Canntropy",
    category: "Vapes", subCategory: "THCV Vapes",
    price: 55, image: img("v03"),
  },
  {
    id: "v04", name: "Amnesia Vape Joint 50% CBD+CBG — 500 Puff", brand: "Amnesia",
    category: "Vapes", subCategory: "Vape Joints",
    price: 25, image: img("v04"),
  },
  {
    id: "v05", name: "El Pablo Blanco Vape Joint 50% CBD+CBG — 500 Puff", brand: "El Pablo",
    category: "Vapes", subCategory: "Vape Joints",
    price: 25, image: img("v05"),
  },
  {
    id: "v06", name: "Lemon Starship CBG9 85% — 1000 Puff", brand: "Cannastra",
    category: "Vapes", subCategory: "CBG9 Vapes",
    price: 35, image: img("v06"),
  },
  {
    id: "v07", name: "Galaxy Mist CBG9 85% — 1000 Puff", brand: "Cannastra",
    category: "Vapes", subCategory: "CBG9 Vapes",
    price: 35, image: img("v07"), isNew: true,
  },

  /* ══════════  E-LIQUIDS (9)  ══════════ */
  {
    id: "e01", name: "Canntropy THCV 85% E-Liquid 10ml", brand: "Canntropy",
    category: "E-Liquids", subCategory: "THCV Liquids 10ml",
    price: 70, image: img("e01"), isPopular: true,
  },
  {
    id: "e02", name: "Canntropy THCV 96% E-Liquid 10ml", brand: "Canntropy",
    category: "E-Liquids", subCategory: "THCV Liquids 10ml",
    price: 75, image: img("e02"), isNew: true,
  },
  {
    id: "e03", name: "Canntropy CBD E-Liquid 10ml", brand: "Canntropy",
    category: "E-Liquids", subCategory: "CBD Liquids 10ml",
    price: 50, image: img("e03"),
  },
  {
    id: "e04", name: "CBD E-Liquid 300mg 10ml", brand: "Relax Store",
    category: "E-Liquids", subCategory: "CBD Liquids 10ml",
    price: 25, image: img("e04"),
  },
  {
    id: "e05", name: "CBD Amnesia E-Liquid 1000mg 10ml", brand: "Relax Store",
    category: "E-Liquids", subCategory: "CBD Liquids 10ml",
    price: 25, image: img("e05"),
  },
  {
    id: "e06", name: "CBD OG Kush E-Liquid 10ml", brand: "Relax Store",
    category: "E-Liquids", subCategory: "CBD Liquids 10ml",
    price: 25, image: img("e06"),
  },
  {
    id: "e07", name: "Baked Custard CBD E-Liquid 10ml", brand: "Harmony",
    category: "E-Liquids", subCategory: "Harmony Liquids",
    price: 20, image: img("e07"),
  },
  {
    id: "e08", name: "Kiwi Skunk CBD E-Liquid 30ml", brand: "Harmony",
    category: "E-Liquids", subCategory: "Harmony Liquids",
    price: 25, image: img("e08"),
  },
  {
    id: "e09", name: "Strawberry Wild CBD E-Liquid 60ml", brand: "Harmony",
    category: "E-Liquids", subCategory: "Harmony Liquids",
    price: 30, image: img("e09"),
  },

  /* ══════════  VAPORISERS (4)  ══════════ */
  {
    id: "vap01", name: "Relax Max", brand: "XVape",
    category: "Vaporisers", subCategory: "Dry Herb Vaporisers",
    price: 120, image: img("vap01"), isPopular: true,
  },
  {
    id: "vap02", name: "Relax V3 Pro", brand: "XMax",
    category: "Vaporisers", subCategory: "Dry Herb Vaporisers",
    price: 110, image: img("vap02"),
  },
  {
    id: "vap03", name: "Relax Yocan", brand: "Yocan",
    category: "Vaporisers", subCategory: "Dry Herb Vaporisers",
    price: 100, image: img("vap03"),
  },
  {
    id: "vap04", name: "Relax Fog Pro", brand: "XVape",
    category: "Vaporisers", subCategory: "Dry Herb Vaporisers",
    price: 130, image: img("vap04"), isNew: true,
  },
];
