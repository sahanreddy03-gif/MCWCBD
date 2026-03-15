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
import pBabyPreRolls from "@assets/OIP_(1)_1773526730292.webp";
import pH4CBDVapeGrapeMint from "@assets/saj-H4CBD-VAPE-PEN-DISPLAY-Grape-mint-A-01-FINAL.213439910.174_1773530080982.png";

export type Category = 
  | "CBD Oils" | "CBD Flowers" | "CBD Vapes" 
  | "CBD Gummies" | "Pre-Rolls" | "Lifestyle";

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
  variants?: { label: string; price: number }[];
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
  { id: "9", name: "White Widow", brand: "STIIIZY", category: "CBD Flowers", subCategory: "CBD Flowers", price: 19.00, effect: "Focus", cannabinoid: "CBD", image: pPreRoll1 },
  { id: "10", name: "Amnesia Haze", brand: "Barona", category: "CBD Flowers", subCategory: "CBD Flowers", price: 15.00, effect: "Energizing", cannabinoid: "CBD", image: pFlower1 },
  { id: "11", name: "House Blend Indica", brand: "MCW", category: "CBD Flowers", subCategory: "CBD Flowers", price: 12.00, effect: "Sleeping", cannabinoid: "CBD", image: pPreRoll1 },
  { id: "12", name: "Blue Dream", brand: "Dutch Gold", category: "CBD Flowers", subCategory: "CBD Flowers", price: 16.00, effect: "Focus", cannabinoid: "CBD", image: pFlower1 },
  { id: "13", name: "Tropicana Cookies", brand: "CBX", category: "CBD Flowers", subCategory: "CBD Flowers", price: 24.00, effect: "Relaxing", cannabinoid: "CBD", image: pPreRoll1 },
  { id: "42", name: "Hash Rosin", brand: "Cookies", category: "CBD Flowers", subCategory: "CBD Hash", price: 55.00, effect: "Relaxing", cannabinoid: "CBD", image: pEdible4 },
  { id: "43", name: "Premium Hash", brand: "Amsterdam Gold", category: "CBD Flowers", subCategory: "CBD Hash", price: 30.00, effect: "Energizing", cannabinoid: "CBD", image: pEdible4 },

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
  { id: "31", name: "Black Papers King Size", brand: "RAW", category: "Pre-Rolls", subCategory: "Papers & Filters", price: 2.50, cannabinoid: "None", image: pPreRoll2 },
  { id: "35", name: "Bamboo Rolling Mat", brand: "RAW", category: "Pre-Rolls", subCategory: "Accessories", price: 8.00, cannabinoid: "None", image: pBambooMat },
  { id: "58", name: "Infused Cannabis Sticks", brand: "Multiple Brands Available", category: "Pre-Rolls", subCategory: "Accessories", price: 25.00, cannabinoid: "None", image: pIncense1 },

  // Lifestyle
  { id: "32", name: "4-Part Grinder", brand: "Grass King", category: "Lifestyle", subCategory: "Grinders", price: 25.00, cannabinoid: "None", image: pGrinder1 },
  { id: "59", name: "Grinder Titanium", brand: "MCW", category: "Lifestyle", subCategory: "Grinders", price: 40.00, cannabinoid: "None", image: pGrinder1 },
  { id: "56", name: "Branded Ashtray", brand: "Cookies", category: "Lifestyle", subCategory: "Accessories", price: 15.00, cannabinoid: "None", image: pGrinder1 },
  { id: "57", name: "Glass Piece", brand: "Tyson 2.0", category: "Lifestyle", subCategory: "Accessories", price: 120.00, cannabinoid: "None", image: pPreRoll2 },
  { id: "53", name: "Storage Jar Large", brand: "MCW", category: "Lifestyle", subCategory: "Storage Solutions", price: 20.00, cannabinoid: "None", image: pGrinder1 },
  { id: "54", name: "Metal Lighter", brand: "Clipper", category: "Lifestyle", subCategory: "Lighters", price: 12.00, cannabinoid: "None", image: pIncense1 },
  { id: "55", name: "Logo Hoodie", brand: "MCW", category: "Lifestyle", subCategory: "Clothing & Merch", price: 65.00, cannabinoid: "None", image: pEdible3 },
  { id: "39", name: "Premium Gin", brand: "Amsterdam Gold", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 45.00, cannabinoid: "None", image: pDrink1 },
  { id: "40", name: "Premium Vodka", brand: "Dutch Gold", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 40.00, cannabinoid: "None", image: pDrink1 },
  { id: "60", name: "Gold Reserve Gin", brand: "Dutch Gold", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 50.00, cannabinoid: "None", image: pDrink1 },

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
  { id: "124", name: "ONYX 1000 Nicotine Vape", brand: "Pod Salt", category: "Lifestyle", subCategory: "Accessories", price: 9.99, cannabinoid: "None", image: "https://static.manus.im/file/mcw-cbd-shop/Firefly_Product.png", isNew: true }
];
