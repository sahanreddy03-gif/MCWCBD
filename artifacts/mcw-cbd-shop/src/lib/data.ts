import pOil1500 from "@assets/IMG_9897_1773459848147.webp";
import pOil500 from "@assets/IMG_9898_1773460947867.webp";
import pSleepDrops from "@assets/pexels-gb-the-green-brand-1259697174-29612816_1773461557894.jpg";
import pPreRollGelato from "@assets/OIP_(2)_1773526968325.webp";
import pPreRollOG from "@assets/3ffe1785-a0b0-4fcc-af29-2416964c110f_1773527217089.jpeg";
import pSigloIV from "@assets/Cigar-Review-Cohiba-Siglo-IV-3_1773527382826.webp";
import pChurchill from "@assets/Cigar-Review-Cohiba-Siglo-IV-3_1773527461627.webp";
import pHouseCigar from "@assets/92343873_1602319463249512_8897552270137229312_o_9B9C63F9-5056-_1773527919139.jpg";
import pBambooMat from "@assets/RAWBambooRollingMat_900x_1773528012276.webp";
import pCBDPreRolls from "@assets/nno-Euphoria-H4CBD-JOINT-BOX-New-A-04-PACKSHOT_1773528952421.png";
import pH4CBDVapePen from "@assets/auj-H4CBD-VAPE-PEN-DISPLAY-Juicy-Blueberry-A-01-FINAL_1773529171969.png";
import pCBDCartridgeEnergize from "@assets/a7z-euphoria-cbd-cartridge-energize.213439910.1724832076_1773529665223.jpg";
import pH4CBDVapeMango from "@assets/fn8-H4CBD-VAPE-PEN-DISPLAY-Mango-A-01-FINAL.213439910.17440180_1773529874366.png";
import pTHCVCartridgeGelato from "@assets/ji4-Euphoria-THCV-CARTRIDGES-Gelato-1ML-A-01-PACKSHOT.21343991_1773530664453.png";
import pTHCVCartridgeBlueDream from "@assets/b85cde0f833d1008003b3f2f210a53ad-thcv-cartridge-blue-dream-1m_1773530958967.webp";
import pTHCVPenGMOCookies from "@assets/48e10bc7365b1f5179c98c10b37ef7b2-canntropy-thcv-pen-cartdige-_1773531116168.webp";
import pVolcanoHybrid from "@assets/d62d023fd59c28deb95ee65bfb961776-volcano-hybrid-vaporizer-sto_1773531278009.webp";
import pPaxFlow from "@assets/467582908f657e91635ec12fb3eb25a4-flow-onyx-hero-1024x1024_1773531362359.webp";
import pSmart800AllFlavours from "@assets/vl0NgP98-scaled_1773531442437.jpeg";
import pKushMintz from "@assets/d65cf3bbea016713dbd0fe19863c0bd2-canntropy-cbd-flowers-kush-mi_1773532347950.png";
import pZkittlesRainbowRide from "@assets/4edfa8e5ff524dbc76428c6e046a7957-hemnia-cbd-flowers-zkittles-_1773532885096.webp";
import pWhiteWidow from "@assets/072b7dcf5a289b7b2acfa2ae20c49f6f-canntropy-h4cbd-flowers-white_1773533220254.png";
import pAmnesiaHaze from "@assets/2d42923672ab15f415cf8f8d581caf03-canntropy-thcd-flower-amnesi_1773533624162.webp";
import pBlueLotus from "@assets/ee605ab54ea8b5fc0cb5718ffdc7afee-blue-lotus-resin-hash_1773534586095.webp";
import pKushHash from "@assets/5958650de7cb445db2808753c3cb46cc-euphoria-cbd-hash-kush_1773534895509.webp";
import pAfghanHash from "@assets/8c9ea316b68878eed2c6faeb62f3ae12-euphoria-cbd-hash-afghan_1773535319415.webp";
import pBabyPreRolls from "@assets/OIP_(1)_1773526730292.webp";
import pH4CBDVapeGrapeMint from "@assets/saj-H4CBD-VAPE-PEN-DISPLAY-Grape-mint-A-01-FINAL.213439910.174_1773530080982.png";

export type Category = 
  | "CBD Oils" | "CBD Flowers" | "CBD Vapes" 
  | "CBD Gummies" | "Pre-Rolls" | "Lifestyle" | "MCW Originals";

export type Effect = "Relaxing" | "Energizing" | "Sleeping" | "Focus" | "Pain Relief";

export type Cannabinoid = "CBD" | "H4CBD" | "HHC" | "THCV" | "CBG" | "CBG9" | "CBN" | "None";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  subCategory: string;
  price: number;
  effect?: Effect;
  cannabinoid: Cannabinoid;
  image: string;
  isNew?: boolean;
  isPopular?: boolean;
  imageFit?: "cover" | "contain";
  logoCard?: boolean;
  variants?: { label: string; price: number }[];
  strainOptions?: string[];
  flavourOptions?: string[];
}

export const BRANDS = [
  "STIIIZY", "Cookies", "Jeeter", "Tyson 2.0", "Jungle Boys", 
  "Barona", "Euphoria", "Haze", "Raw Garden", "CBX", 
  "Gelato", "Top Shelf", "Amsterdam Gold", "Dutch Gold", "Sensi Seeds", "MCW",
  "Canapuff", "Moon Rock", "Cannabis Bakehouse", "Multitrance", "VIP Line",
  "Venus Secrets", "CannaShot", "MediCBD", "OCTORINDER", "Smart.800", "Pod Salt"
];

export const pPreRoll1 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/ULClKSqaNgRnQRJo.png";
export const pPreRoll2 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/bwbtNlKvpVeMQVHL.png";
export const pFlower1 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/FAcZyRaPmHyWdRcm.jpg";
export const pVape1 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/SeogvyOtkkVhRlAV.png";
export const pVape2 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/wvCYuVBaWeFGiAhO.png";
export const pVape3 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/JTQBxGVCFnTbZwad.jpg";
export const pGummy1 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/YXlwyZGzemPzYsHz.png";
export const pGummy2 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/yalqoNHpyIkWOuck.png";
export const pGummy3 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/odxaGReOwIJXlpdW.png";
export const pGummy4 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/aizYkOoHjFWQOQjN.png";
export const pEdible1 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/EhUbTmHJJVBKSdxo.png";
export const pEdible2 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/ZPuxwnmFtGZpYSte.png";
export const pEdible3 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/pVJfckPTFuEBZcAm.png";
export const pEdible4 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/nLerxxnSpqpQaJXK.jpg";
export const pEdible5 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/bLqnQXgfpSirFMkq.png";
export const pCream1 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/EnpqWOfMcJOzbFiY.png";
export const pCream2 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/UFtcgDYGnUmXhrVs.png";
export const pCream3 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/ZAUEGiSuyRZlDeGM.jpg";
export const pDrink1 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/UcSlTFdKpYMYGiAN.png";
export const pGrinder1 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/KLOignIGLvsjgOHw.png";
export const pIncense1 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/zLKvWvafyTWxvlVG.png";

export const PRODUCTS: Product[] = [
  // CBD Oils
  { id: "1", name: "Premium Full Spectrum 1500mg", brand: "MCW", category: "CBD Oils", subCategory: "CBD Oils", price: 85.00, effect: "Relaxing", cannabinoid: "CBD", image: pOil1500, isPopular: true },
  { id: "2", name: "Broad Spectrum 1000mg", brand: "MCW", category: "CBD Oils", subCategory: "CBD Oils", price: 65.00, effect: "Focus", cannabinoid: "CBD", image: pCream1 },
  { id: "3", name: "CBD Oil 500mg", brand: "Raw Garden", category: "CBD Oils", subCategory: "CBD Oils", price: 45.00, effect: "Pain Relief", cannabinoid: "CBD", image: pOil500 },
  { id: "4", name: "CBD 750mg Sleep Drops", brand: "Euphoria", category: "CBD Oils", subCategory: "CBD Oils", price: 55.00, effect: "Sleeping", cannabinoid: "CBD", image: pSleepDrops, isNew: true },
  { id: "5", name: "Pure CBD Extract", brand: "Sensi Seeds", category: "CBD Oils", subCategory: "CBD Oils", price: 120.00, effect: "Relaxing", cannabinoid: "CBD", image: pDrink1 },
  { id: "41", name: "Sleep Tincture 500mg", brand: "MCW", category: "CBD Oils", subCategory: "CBD Oils", price: 40.00, effect: "Sleeping", cannabinoid: "CBD", image: pCream1 },
  { id: "27", name: "H4CBD Oil 1000mg", brand: "MCW", category: "CBD Oils", subCategory: "H4CBD", price: 75.00, effect: "Pain Relief", cannabinoid: "H4CBD", image: pGummy3, isNew: true },
  { id: "48", name: "THCV Tincture", brand: "Barona", category: "CBD Oils", subCategory: "THCV", price: 85.00, effect: "Focus", cannabinoid: "THCV", image: pGummy3, isNew: true },
  { id: "50", name: "Muscle Cream 1000mg", brand: "MCW", category: "CBD Oils", subCategory: "CBD Creams", price: 55.00, effect: "Pain Relief", cannabinoid: "CBD", image: pCream1 },
  { id: "51", name: "CBD Balm", brand: "Euphoria", category: "CBD Oils", subCategory: "CBD Creams", price: 35.00, effect: "Pain Relief", cannabinoid: "CBD", image: pCream2 },
  { id: "52", name: "CBD Capsules", brand: "Sensi Seeds", category: "CBD Oils", subCategory: "CBD Capsules", price: 45.00, effect: "Focus", cannabinoid: "CBD", image: pCream1 },

  // CBD Flowers
  { id: "7", name: "CBD Flowers Kush Mintz CBD 30%", brand: "Canntropy", category: "CBD Flowers", subCategory: "CBD Flowers", price: 10.00, effect: "Energizing", cannabinoid: "CBD", image: pKushMintz, variants: [{ label: "1g", price: 10.00 }, { label: "3g", price: 27.00 }, { label: "5g", price: 42.00 }, { label: "10g", price: 78.00 }] },
  { id: "8", name: "CBD Flowers Zkittles - Rainbow Ride", brand: "Hemnia", category: "CBD Flowers", subCategory: "CBD Flowers", price: 10.00, effect: "Relaxing", cannabinoid: "CBD", image: pZkittlesRainbowRide, isNew: true, variants: [{ label: "1g", price: 10.00 }, { label: "3g", price: 27.00 }, { label: "5g", price: 42.00 }, { label: "10g", price: 78.00 }] },
  { id: "9", name: "H4CBD White Widow", brand: "Canntropy", category: "CBD Flowers", subCategory: "CBD Flowers", price: 10.00, effect: "Focus", cannabinoid: "H4CBD", image: pWhiteWidow, variants: [{ label: "1g", price: 10.00 }, { label: "3g", price: 27.00 }, { label: "5g", price: 42.00 }, { label: "10g", price: 78.00 }] },
  { id: "10", name: "THCD Flower Amnesia Haze", brand: "Canntropy", category: "CBD Flowers", subCategory: "CBD Flowers", price: 10.00, effect: "Energizing", cannabinoid: "CBD", image: pAmnesiaHaze, variants: [{ label: "1g", price: 10.00 }, { label: "3g", price: 27.00 }, { label: "5g", price: 42.00 }, { label: "10g", price: 78.00 }] },
  { id: "11", name: "MCW Pre-Rolls", brand: "MCW", category: "Pre-Rolls", subCategory: "CBD Pre-Rolls", price: 12.00, effect: "Relaxing", cannabinoid: "CBD", image: pPreRoll1, strainOptions: ["CBD", "H4CBD", "THCV", "THCJD"], flavourOptions: ["OG Kush", "Gelato", "Blue Dream", "Gorilla Glue #4", "Wedding Cake", "Lemon Haze", "Sour Diesel", "Pineapple Express", "Grandaddy Purple", "The Procrastinator", "Couch Crasher", "Giggle Gas", "Munchie Madness", "Nap King 3000", "Sunday Snoozefest"] },
  { id: "12", name: "Hash Blue Lotus Soft Resin", brand: "Canntropy", category: "CBD Flowers", subCategory: "CBD Hash", price: 10.00, effect: "Relaxing", cannabinoid: "CBD", image: pBlueLotus, variants: [{ label: "1g", price: 10.00 }, { label: "3g", price: 27.00 }, { label: "5g", price: 42.00 }] },
  { id: "13", name: "CBD Hash 6% Kush", brand: "Euphoria", category: "CBD Flowers", subCategory: "CBD Hash", price: 24.00, effect: "Relaxing", cannabinoid: "CBD", image: pKushHash },
  { id: "42", name: "Chocolate Hash Rosin", brand: "MCW", category: "CBD Flowers", subCategory: "CBD Hash", price: 55.00, effect: "Relaxing", cannabinoid: "CBD", image: pEdible4 },
  { id: "43", name: "CBD Hash Afghan 25% CBD", brand: "Euphoria", category: "CBD Flowers", subCategory: "CBD Hash", price: 30.00, effect: "Energizing", cannabinoid: "CBD", image: pAfghanHash, variants: [{ label: "1g", price: 10.00 }, { label: "3g", price: 27.00 }, { label: "5g", price: 42.00 }] },

  // CBD Vapes
  { id: "14", name: "H4CBD Disposable Vape Pen", brand: "Euphoria", category: "CBD Vapes", subCategory: "CBD Vapes", price: 35.00, effect: "Relaxing", cannabinoid: "CBD", image: pH4CBDVapePen, isPopular: true },
  { id: "15", name: "E-Cigarette 800 Puffs", brand: "SMART800", category: "CBD Vapes", subCategory: "CBD Vapes", price: 40.00, effect: "Energizing", cannabinoid: "CBD", image: pVape2, imageFit: "contain" },
  { id: "16", name: "E-Cigarette 1000 Puffs", brand: "Pod Salt Onyx", category: "CBD Vapes", subCategory: "CBD Vapes", price: 45.00, effect: "Focus", cannabinoid: "CBD", image: pVape3, isNew: true, imageFit: "contain" },

  { id: "18", name: "THCV Cartridge Gelato 1ml", brand: "Euphoria", category: "CBD Vapes", subCategory: "CBD Vapes", price: 38.00, effect: "Pain Relief", cannabinoid: "THCV", image: pTHCVCartridgeGelato },
  { id: "44", name: "CBD Cartridge Energize", brand: "Euphoria", category: "CBD Vapes", subCategory: "CBD Vapes", price: 35.00, effect: "Focus", cannabinoid: "CBD", image: pCBDCartridgeEnergize },
  { id: "45", name: "H4CBD Vape Pen Mango", brand: "Euphoria", category: "CBD Vapes", subCategory: "CBD Vapes", price: 42.00, effect: "Relaxing", cannabinoid: "CBD", image: pH4CBDVapeMango },
  { id: "28", name: "H4CBD Vape Cartridge Grape Mint", brand: "Euphoria", category: "CBD Vapes", subCategory: "H4CBD", price: 42.00, effect: "Relaxing", cannabinoid: "H4CBD", image: pH4CBDVapeGrapeMint },
  { id: "29", name: "THCV Cartridge Blue Dream", brand: "Canntropy", category: "CBD Vapes", subCategory: "THCV", price: 50.00, effect: "Energizing", cannabinoid: "THCV", image: pTHCVCartridgeBlueDream, isPopular: true },
  { id: "49", name: "THCV Pen + Cartridge GMO Cookies", brand: "Canntropy", category: "CBD Vapes", subCategory: "THCV", price: 60.00, effect: "Energizing", cannabinoid: "THCV", image: pTHCVPenGMOCookies },
  { id: "33", name: "Volcano Hybrid Vaporizer", brand: "Storz & Bickel", category: "CBD Vapes", subCategory: "Vaporizers", price: 450.00, cannabinoid: "None", image: pVolcanoHybrid },
  { id: "34", name: "Pax Flow Vaporizer", brand: "Pax", category: "CBD Vapes", subCategory: "Vaporizers", price: 180.00, cannabinoid: "None", image: pPaxFlow },

  // CBD Gummies
  { id: "6", name: "H4 Lemon Gummies", brand: "Cannabis", category: "CBD Gummies", subCategory: "CBD Gummies", price: 18.00, effect: "Relaxing", cannabinoid: "CBD", image: pFlower1, isPopular: true },
  { id: "19", name: "Sleep Gummies 300mg", brand: "MCW", category: "CBD Gummies", subCategory: "CBD Gummies", price: 25.00, effect: "Sleeping", cannabinoid: "CBD", image: pGummy1, isPopular: true },
  { id: "20", name: "CBD Gummies Mixed Fruit", brand: "Euphoria", category: "CBD Gummies", subCategory: "CBD Gummies", price: 18.00, effect: "Relaxing", cannabinoid: "CBD", image: pGummy2 },
  { id: "21", name: "Knockout Gummies", brand: "Tyson 2.0", category: "CBD Gummies", subCategory: "CBD Gummies", price: 30.00, effect: "Sleeping", cannabinoid: "CBD", image: pGummy3, isNew: true },
  { id: "46", name: "Gummies 500mg", brand: "Gelato", category: "CBD Gummies", subCategory: "CBD Gummies", price: 35.00, effect: "Sleeping", cannabinoid: "CBD", image: pGummy4 },
  { id: "22", name: "Edibles Sour Rings", brand: "Jeeter", category: "CBD Gummies", subCategory: "CBD Edibles", price: 22.00, effect: "Energizing", cannabinoid: "CBD", image: pEdible1 },
  { id: "30", name: "HHC Gummies Tropical", brand: "Euphoria", category: "CBD Gummies", subCategory: "HHC Products", price: 35.00, effect: "Relaxing", cannabinoid: "HHC", image: pGummy4 },

  // Pre-Rolls
  { id: "23", name: "Baby Pre-Rolls Pack", brand: "Jeeter", category: "Pre-Rolls", subCategory: "CBD Pre-Rolls", price: 45.00, effect: "Relaxing", cannabinoid: "CBD", image: pBabyPreRolls, isPopular: true },
  { id: "24", name: "Pre-Roll Gelato", brand: "Cookies", category: "Pre-Rolls", subCategory: "CBD Pre-Rolls", price: 15.00, effect: "Energizing", cannabinoid: "CBD", image: pPreRollGelato },
  { id: "25", name: "Pre-Roll OG", brand: "Jungle Boys", category: "Pre-Rolls", subCategory: "CBD Pre-Rolls", price: 18.00, effect: "Focus", cannabinoid: "CBD", image: pPreRollOG },
  { id: "26", name: "House Pre-Roll", brand: "MCW", category: "Pre-Rolls", subCategory: "CBD Pre-Rolls", price: 8.00, effect: "Relaxing", cannabinoid: "CBD", image: pPreRoll2 },
  { id: "47", name: "Pre-Roll Pack", brand: "Haze", category: "Pre-Rolls", subCategory: "CBD Pre-Rolls", price: 28.00, effect: "Energizing", cannabinoid: "CBD", image: pPreRoll1 },
  { id: "36", name: "Siglo IV Cigar", brand: "Cohiba", category: "Pre-Rolls", subCategory: "Cigars", price: 35.00, cannabinoid: "None", image: pSigloIV },
  { id: "37", name: "Churchill Cigar", brand: "Romeo y Julieta", category: "Pre-Rolls", subCategory: "Cigars", price: 28.00, cannabinoid: "None", image: pChurchill },
  { id: "38", name: "House Cigar", brand: "MCW", category: "Pre-Rolls", subCategory: "Cigars", price: 15.00, cannabinoid: "None", image: pHouseCigar },
  { id: "31", name: "Black Papers King Size", brand: "RAW", category: "Pre-Rolls", subCategory: "Papers & Filters", price: 2.50, cannabinoid: "None", image: "https://images.unsplash.com/photo-1584017911-1a8fa5c8f72d?auto=format&fit=crop&w=400&q=80" },
  { id: "35", name: "Bamboo Rolling Mat", brand: "RAW", category: "Pre-Rolls", subCategory: "Accessories", price: 8.00, cannabinoid: "None", image: pBambooMat },
  { id: "58", name: "Infused Cannabis Sticks", brand: "Multiple Brands Available", category: "Pre-Rolls", subCategory: "Accessories", price: 25.00, cannabinoid: "None", image: pIncense1 },

  // Lifestyle
  { id: "32", name: "4-Part Grinder", brand: "Grass King", category: "Lifestyle", subCategory: "Grinders", price: 25.00, cannabinoid: "None", image: pGrinder1 },
  { id: "59", name: "Grinder Titanium", brand: "MCW", category: "Lifestyle", subCategory: "Grinders", price: 40.00, cannabinoid: "None", image: pGrinder1 },
  { id: "56", name: "Branded Ashtray", brand: "Cookies", category: "Lifestyle", subCategory: "Accessories", price: 15.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1565155930813-e79a18afe7a2?auto=format&fit=crop&w=400&q=80" },
  { id: "57", name: "Glass Piece", brand: "Tyson 2.0", category: "Lifestyle", subCategory: "Accessories", price: 120.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?auto=format&fit=crop&w=400&q=80" },
  { id: "53", name: "Storage Jar Large", brand: "MCW", category: "Lifestyle", subCategory: "Storage Solutions", price: 20.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1612187538-345c7c74db96?auto=format&fit=crop&w=400&q=80" },
  { id: "54", name: "Metal Lighter", brand: "Clipper", category: "Lifestyle", subCategory: "Lighters", price: 12.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80" },
  { id: "55", name: "Logo Hoodie", brand: "MCW", category: "Lifestyle", subCategory: "Clothing & Merch", price: 65.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?auto=format&fit=crop&w=400&q=80" },
  { id: "39", name: "Premium Gin", brand: "Amsterdam Gold", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 45.00, cannabinoid: "None", image: pDrink1 },
  { id: "40", name: "Premium Vodka", brand: "Dutch Gold", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 40.00, cannabinoid: "None", image: pDrink1 },
  { id: "60", name: "Gold Reserve Gin", brand: "Dutch Gold", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 50.00, cannabinoid: "None", image: pDrink1 },
  { id: "200", name: "Tennessee Whiskey", brand: "Jack Daniel's", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 38.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1508669232994-5b04b628b20b?auto=format&fit=crop&w=400&q=80" },
  { id: "201", name: "Scotch Whisky Black Label", brand: "Johnnie Walker", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 42.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=400&q=80" },
  { id: "202", name: "White Rum", brand: "Bacardi", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 30.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1574629988036-b0cbf527b04c?auto=format&fit=crop&w=400&q=80" },
  { id: "203", name: "Silver Tequila", brand: "Patrón", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 55.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80" },
  { id: "204", name: "Lager Beer 6-Pack", brand: "Heineken", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 12.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=400&q=80" },
  { id: "205", name: "Italian Lager 6-Pack", brand: "Peroni", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 13.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=400&q=80" },
  { id: "206", name: "Prosecco Sparkling Wine", brand: "Zonin", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 22.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80" },
  { id: "207", name: "Malbec Red Wine", brand: "Santa Julia", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 18.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80" },
  { id: "208", name: "Vodka & Soda Cans 4-Pack", brand: "White Claw", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 14.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=400&q=80" },
  { id: "210", name: "RAW Rolling Tray Medium", brand: "RAW", category: "Lifestyle", subCategory: "Accessories", price: 14.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=400&q=80" },
  { id: "211", name: "Hemp Wick 30m", brand: "Bee Line", category: "Lifestyle", subCategory: "Accessories", price: 6.00, cannabinoid: "None", image: pBambooMat },
  { id: "212", name: "Slim Filter Tips Box 50pk", brand: "RAW", category: "Lifestyle", subCategory: "Accessories", price: 3.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1584017911-1a8fa5c8f72d?auto=format&fit=crop&w=400&q=80" },
  { id: "213", name: "Torch Lighter", brand: "Clipper", category: "Lifestyle", subCategory: "Lighters", price: 18.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80" },
  { id: "214", name: "Smell-Proof Bag", brand: "MCW", category: "Lifestyle", subCategory: "Storage Solutions", price: 16.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=400&q=80" },
  { id: "215", name: "Glass Bong 30cm", brand: "Grass King", category: "Lifestyle", subCategory: "Accessories", price: 75.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?auto=format&fit=crop&w=400&q=80" },
  { id: "216", name: "Premium Ceramic Ashtray", brand: "MCW", category: "Lifestyle", subCategory: "Accessories", price: 22.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1565155930813-e79a18afe7a2?auto=format&fit=crop&w=400&q=80" },
  { id: "217", name: "Digital Mini Scale 0.01g", brand: "AWS", category: "Lifestyle", subCategory: "Accessories", price: 19.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1611174797136-5c9d7cee5f90?auto=format&fit=crop&w=400&q=80" },
  { id: "218", name: "MCW Logo T-Shirt", brand: "MCW", category: "Lifestyle", subCategory: "Clothing & Merch", price: 30.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80" },
  { id: "219", name: "Cannabis Cap", brand: "MCW", category: "Lifestyle", subCategory: "Clothing & Merch", price: 25.00, cannabinoid: "None", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=400&q=80" },

  // Canapuff CBD Flowers
  { id: "61", name: "CBD Flowers Amnesia 69%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 5.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/amns_cbd.png?width=1200" },
  { id: "62", name: "CBD Flowers Lemon Gelato 69%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 5.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/lmn_glt_cbd.png?width=1200" },
  { id: "63", name: "CBD Flowers Royal Skunk 24%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 5.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/ryl_sknk_cbd.png?width=1200" },
  { id: "64", name: "CBD Flowers Lemon Skunk 14%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 5.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/lmn_sknk_cbd.png?width=1200" },
  { id: "65", name: "CBD Flowers Fire Kush 13%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 5.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/fir_ksh_cbd.png?width=1200" },
  { id: "66", name: "CBD Flowers Wellness 18%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 5.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/wlns_cbd.png?width=1200" },
  { id: "67", name: "CBD Flowers Strawberry 13%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 5.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/strwbry_cbd.png?width=1200" },
  { id: "68", name: "CBD Flowers Sugar Queen 17%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 5.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/sgr_qen_cbd.png?width=1200" },
  { id: "69", name: "CBG9 Flowers Blueberry Cookie 65%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 8.99, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_blueberry_cookies.jpg?width=1200", isNew: true },
  { id: "70", name: "CBG9 Flowers Caribbean Breeze 65%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 8.99, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_caribbean_breeze.jpg?width=1200", isNew: true },
  { id: "71", name: "CBG9 Flowers Watermelon Mojito 50%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 8.99, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_canapuff_flowers_watermelon_mojito.png?width=1200", isNew: true },
  { id: "72", name: "CBG9 Flowers Blood Orange 50%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 8.99, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_canapuff_blood_orange_blueten.png?width=1200", isNew: true },

  // Canapuff CBD Hash
  { id: "73", name: "CBD Hash Afghan Gold 60%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Hash", price: 6.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd_afghan-camera_2_720.png?width=1200" },
  { id: "74", name: "CBD Hash Libanese 60%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Hash", price: 6.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd_libanese-camera_2_720.png?width=1200" },
  { id: "75", name: "CBD Hash Choco 60%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Hash", price: 6.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd_choco-camera_2_720.png?width=1200" },
  { id: "76", name: "CBD Hash Banana 60%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Hash", price: 6.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd_banana-camera_2_720.png?width=1200" },

  // Canapuff CBD Vapes
  { id: "77", name: "CBD Vape OG Kush 95% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "CBD Vapes", price: 29.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/og_kush_720.png?width=1200" },
  { id: "78", name: "CBD Vape Rest 95% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "CBD Vapes", price: 24.20, effect: "Sleeping", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/rest_720.png?width=1200" },
  { id: "79", name: "CBD Vape Recovery 95% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "CBD Vapes", price: 24.20, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/recovery_720.png?width=1200" },
  { id: "80", name: "CBG9 Vape Blueberry Cookie 79% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "CBD Vapes", price: 31.63, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_blueberry_cookie_vape_premium_canapuff.png?width=1200", isNew: true },
  { id: "81", name: "CBG9 Vape Watermelon Mojito 79% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "CBD Vapes", price: 31.63, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_canapuff_vape_oneuse_watermelon_mojito.png?width=1200", isNew: true },
  { id: "82", name: "CBG9 Vape Caribbean Breeze 79% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "CBD Vapes", price: 31.63, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_baribbean_breeze_vape_premium_canapuff.png?width=1200", isNew: true },
  { id: "83", name: "CBG9 Vape Blood Orange 79% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "CBD Vapes", price: 31.63, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/CBG9_vape_blood_orange.png?width=1200", isNew: true },
  { id: "84", name: "Smart.800 E-Cigarette Vape All Fruit Flavours", brand: "SMART800", category: "CBD Vapes", subCategory: "CBD Vapes", price: 9.99, effect: "Relaxing", cannabinoid: "CBD", image: pSmart800AllFlavours, isNew: true },

  // Canapuff THCV Vapes
  { id: "85", name: "THCv XXL Vape Papaya Punch 99% 2ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "THCV", price: 42.90, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/NEW_XXL_Papaya_Punch-Current_View.png?width=1200", isNew: true },
  { id: "86", name: "THCv XXL Vape Blueberry Cookies 99% 2ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "THCV", price: 42.90, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/NEW_XXL_Blueberry_Cookies-Current_View.png?width=1200", isNew: true },
  { id: "87", name: "THCv XXL Vape Berry Gelato 99% 2ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "THCV", price: 42.90, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/NEW_XXL_Berry_Gelato-Current_View.png?width=1200", isNew: true },
  { id: "88", name: "THCv Vape Papaya Punch 79% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "THCV", price: 31.63, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/ppy_79__720_428c743e-f2fe-4592-8d47-5958ac4fe218.png?width=1200" },
  { id: "89", name: "THCv Vape Berry Gelato 79% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "THCV", price: 39.99, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/brry_glt_79__720_3a98a7a0-eb69-415e-8611-488b20dcf641.png?width=1200" },

  // Canapuff CBD Gummies
  { id: "90", name: "CBD Gummies Sleep", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 14.40, effect: "Sleeping", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd_sleep-camera_2_720.png?width=1200" },
  { id: "91", name: "CBD Gummies Rest", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 14.40, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd_rest-camera_2.png?width=1200" },
  { id: "92", name: "CBD Gummies Recovery", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 14.40, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd_recovery-camera_2_720.png?width=1200" },
  { id: "93", name: "Melatonin+CBD Gummies Cherry", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 18.90, effect: "Sleeping", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/melatonin_cbd_cherry_10pcs-camera_2_720.png?width=1200" },
  { id: "94", name: "CBD Gummies Blueberry", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 1.79, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/1pc_cbd_blueberry.png?width=1200" },
  { id: "95", name: "CBD Gummies Immunity", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 14.40, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd_immunity-camera_2_720.png?width=1200" },
  { id: "96", name: "CBG9 Candy Cotton Gummies", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 9.99, effect: "Relaxing", cannabinoid: "CBG9", image: "https://static.manus.im/file/mcw-cbd-shop/CBG9_Gummy.png", isNew: true },
  { id: "97", name: "CBD Lemon Haze Gummies", brand: "Moon Rock", category: "CBD Gummies", subCategory: "CBD Gummies", price: 9.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/Lemon_Haze.png", isNew: true },
  { id: "98", name: "CBG9 Gummies Sour Apple", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 14.97, effect: "Energizing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_canapuff_gummies_sour_apple.png?width=1200", isNew: true },
  { id: "99", name: "CBG9 Gummies Raspberry", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 14.97, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_canapuff_gummies_raspberry.png?width=1200", isNew: true },
  { id: "100", name: "CBG9 Gummies Candy Cotton", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 14.97, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_canapuff_gummies_candy_cotton.png?width=1200", isNew: true },
  { id: "101", name: "CBG9 Gummies Strawberry", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 19.99, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_canapuff_gummies_strawberry.png?width=1200", isNew: true },
  { id: "102", name: "CBG9 Gummies Sour Cherry", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 19.99, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_canapuff_gummies_sour_cherry.png?width=1200", isNew: true },

  // Canapuff THCV Gummies
  { id: "103", name: "THCv Gummies Blueberry", brand: "Canapuff", category: "CBD Gummies", subCategory: "THCV", price: 16.90, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/blueberry_thcv-camera_2_720_94df2802-9c00-4ba3-811c-80e46a6b2f48.png?width=1200" },
  { id: "104", name: "THCv Gummies Green Apple", brand: "Canapuff", category: "CBD Gummies", subCategory: "THCV", price: 16.90, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/green_apple_thcv-camera_2.png?width=1200" },
  { id: "105", name: "THCv Gummies Strawberry", brand: "Canapuff", category: "CBD Gummies", subCategory: "THCV", price: 16.90, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/strawberry_thcv-camera_2.png?width=1200" },
  { id: "106", name: "THCv Gummies Raspberry", brand: "Canapuff", category: "CBD Gummies", subCategory: "THCV", price: 16.90, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/raspberry_thcv-camera_2.png?width=1200" },

  // Canapuff CBD Edibles
  { id: "107", name: "White Widow Cookies", brand: "Cannabis Bakehouse", category: "CBD Gummies", subCategory: "CBD Edibles", price: 9.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/Cannabis_Cookie.png", isNew: true },
  { id: "108", name: "Space Cake", brand: "Multitrance", category: "CBD Gummies", subCategory: "CBD Edibles", price: 9.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/Space_Cake.png", isNew: true },
  { id: "109", name: "CBD Energy Drink", brand: "CannaShot", category: "CBD Gummies", subCategory: "CBD Edibles", price: 9.99, effect: "Energizing", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/CannaShot.png", isNew: true },
  { id: "110", name: "Strawberry Chewing Gum", brand: "MediCBD", category: "CBD Gummies", subCategory: "CBD Edibles", price: 9.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/Chewing_Gum.png", isNew: true },
  { id: "111", name: "Edibles Collection", brand: "MCW", category: "CBD Gummies", subCategory: "CBD Edibles", price: 9.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/Mixed_Products.png", isNew: true },

  // Canapuff CBD Oils
  { id: "112", name: "CBD Oil Full Spectrum 5% 15ml", brand: "Canapuff", category: "CBD Oils", subCategory: "CBD Oils", price: 16.70, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd5.jpg?width=1200" },
  { id: "113", name: "CBD Oil Full Spectrum 20% 15ml", brand: "Canapuff", category: "CBD Oils", subCategory: "CBD Oils", price: 32.70, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd20_fullspectrum.jpg?width=1200" },
  { id: "114", name: "CBD Oil Full Spectrum 10% 15ml", brand: "Canapuff", category: "CBD Oils", subCategory: "CBD Oils", price: 21.20, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd10_fullspectrum.jpg?width=1200" },
  { id: "115", name: "CBD Oil 30% 15ml", brand: "Canapuff", category: "CBD Oils", subCategory: "CBD Oils", price: 40.10, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd30.jpg?width=1200" },
  { id: "116", name: "CBD Oil 20% 15ml", brand: "Canapuff", category: "CBD Oils", subCategory: "CBD Oils", price: 29.70, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd20.jpg?width=1200" },
  { id: "117", name: "CBD Oil 10% 15ml", brand: "Canapuff", category: "CBD Oils", subCategory: "CBD Oils", price: 19.30, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd10.jpg?width=1200" },

  // CBD Creams
  { id: "118", name: "CBD Face Cream Aloe Vera 2000mg", brand: "VIP Line", category: "CBD Oils", subCategory: "CBD Creams", price: 9.99, effect: "Pain Relief", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/Face_Cream.png", isNew: true },
  { id: "119", name: "CBD Cosmetics Bundle", brand: "Venus Secrets", category: "CBD Oils", subCategory: "CBD Creams", price: 9.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/Cannabis_Oil_Lipstick.png", isNew: true },

  // Pre-Rolls
  { id: "120", name: "CBD Pre-rolls", brand: "Euphoria", category: "Pre-Rolls", subCategory: "CBD Pre-Rolls", price: 9.99, effect: "Relaxing", cannabinoid: "CBD", image: pCBDPreRolls, isNew: true },

  // Lifestyle / Accessories
  { id: "121", name: "Cannabis Incense Sticks", brand: "Multitrance", category: "Lifestyle", subCategory: "Accessories", price: 9.99, cannabinoid: "None", image: "https://static.manus.im/file/mcw-cbd-shop/Cannabis_Incense.png", isNew: true },
  { id: "122", name: "Pre-roll Tube Holder", brand: "MCW", category: "Lifestyle", subCategory: "Accessories", price: 9.99, cannabinoid: "None", image: "https://static.manus.im/file/mcw-cbd-shop/Joint_Holder.png", isNew: true },
  { id: "123", name: "Octopus Grinder", brand: "OCTORINDER", category: "Lifestyle", subCategory: "Accessories", price: 9.99, cannabinoid: "None", image: "https://static.manus.im/file/mcw-cbd-shop/OCTORINDER.png", isNew: true },
  { id: "124", name: "ONYX 1000 Nicotine Vape", brand: "Pod Salt", category: "Lifestyle", subCategory: "Accessories", price: 9.99, cannabinoid: "None", image: "https://static.manus.im/file/mcw-cbd-shop/Firefly_Product.png", isNew: true },

  // ── MCW ORIGINALS — Exclusive House Collection ──
  { id: "m1", name: "MCW CBD Oil Full Spectrum 10%", brand: "MCW", category: "MCW Originals", subCategory: "CBD Oils", price: 19.99, effect: "Relaxing", cannabinoid: "CBD", image: pOil500, logoCard: true },
  { id: "m2", name: "MCW CBD Oil Full Spectrum 20%", brand: "MCW", category: "MCW Originals", subCategory: "CBD Oils", price: 34.99, effect: "Relaxing", cannabinoid: "CBD", image: pOil1500, logoCard: true },
  { id: "m3", name: "MCW CBD Sleep Drops CBN 5%", brand: "MCW", category: "MCW Originals", subCategory: "CBD Oils", price: 24.99, effect: "Sleeping", cannabinoid: "CBN", image: pSleepDrops, logoCard: true },
  { id: "m4", name: "MCW CBD Flower Kush Mintz", brand: "MCW", category: "MCW Originals", subCategory: "CBD Flowers", price: 8.00, effect: "Relaxing", cannabinoid: "CBD", image: pKushMintz, logoCard: true, variants: [{ label: "1g", price: 8.00 }, { label: "3g", price: 22.00 }, { label: "5g", price: 34.99 }] },
  { id: "m5", name: "MCW H4CBD Flower White Widow", brand: "MCW", category: "MCW Originals", subCategory: "CBD Flowers", price: 9.00, effect: "Energizing", cannabinoid: "H4CBD", image: pWhiteWidow, logoCard: true, variants: [{ label: "1g", price: 9.00 }, { label: "3g", price: 24.99 }, { label: "5g", price: 39.99 }] },
  { id: "m6", name: "MCW CBD Flower Amnesia Haze", brand: "MCW", category: "MCW Originals", subCategory: "CBD Flowers", price: 8.50, effect: "Energizing", cannabinoid: "CBD", image: pAmnesiaHaze, logoCard: true, variants: [{ label: "1g", price: 8.50 }, { label: "3g", price: 23.50 }, { label: "5g", price: 37.00 }] },
  { id: "m7", name: "MCW Blue Lotus CBD Hash", brand: "MCW", category: "MCW Originals", subCategory: "CBD Hash", price: 10.00, effect: "Relaxing", cannabinoid: "CBD", image: pBlueLotus, logoCard: true, variants: [{ label: "1g", price: 10.00 }, { label: "3g", price: 27.00 }, { label: "5g", price: 42.00 }] },
  { id: "m8", name: "MCW H4CBD Vape Pen Blueberry", brand: "MCW", category: "MCW Originals", subCategory: "CBD Vapes", price: 34.99, effect: "Relaxing", cannabinoid: "H4CBD", image: pH4CBDVapePen, logoCard: true },
  { id: "m9", name: "MCW H4CBD Vape Pen Mango", brand: "MCW", category: "MCW Originals", subCategory: "CBD Vapes", price: 34.99, effect: "Energizing", cannabinoid: "H4CBD", image: pH4CBDVapeMango, logoCard: true },
  { id: "m10", name: "MCW Pre-Roll Gelato Joint", brand: "MCW", category: "MCW Originals", subCategory: "CBD Pre-Rolls", price: 12.99, effect: "Relaxing", cannabinoid: "CBD", image: pPreRollGelato, logoCard: true },
  { id: "m11", name: "MCW Pre-Roll OG Kush Joint", brand: "MCW", category: "MCW Originals", subCategory: "CBD Pre-Rolls", price: 11.99, effect: "Relaxing", cannabinoid: "CBD", image: pPreRollOG, logoCard: true },
  { id: "m12", name: "MCW CBD Baby Pre-Rolls Pack", brand: "MCW", category: "MCW Originals", subCategory: "CBD Pre-Rolls", price: 14.99, effect: "Relaxing", cannabinoid: "CBD", image: pBabyPreRolls, logoCard: true },
  { id: "m13", name: "MCW Volcano Hybrid Vaporizer", brand: "MCW", category: "MCW Originals", subCategory: "Vaporizers", price: 179.99, cannabinoid: "None", image: pVolcanoHybrid, logoCard: true },
  { id: "m14", name: "MCW PAX Flow Portable Vaporizer", brand: "MCW", category: "MCW Originals", subCategory: "Vaporizers", price: 99.99, cannabinoid: "None", image: pPaxFlow, logoCard: true },
  { id: "m15", name: "MCW RAW Bamboo Rolling Mat", brand: "MCW", category: "MCW Originals", subCategory: "Accessories", price: 14.99, cannabinoid: "None", image: pBambooMat, logoCard: true },
  { id: "m16", name: "MCW Kush Hash Premium CBD", brand: "MCW", category: "MCW Originals", subCategory: "CBD Hash", price: 9.00, effect: "Relaxing", cannabinoid: "CBD", image: pKushHash, logoCard: true, variants: [{ label: "1g", price: 9.00 }, { label: "3g", price: 25.00 }, { label: "5g", price: 40.00 }] },
  { id: "m17", name: "MCW THCV Vape Cartridge Gelato", brand: "MCW", category: "MCW Originals", subCategory: "THCV", price: 44.99, effect: "Focus", cannabinoid: "THCV", image: pTHCVCartridgeGelato, logoCard: true },
];
