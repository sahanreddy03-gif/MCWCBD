import pOil1500 from "@assets/IMG_9897_1773459848147.webp";
import pOil500 from "@assets/IMG_9898_1773460947867.webp";
import pSleepDrops from "@assets/pexels-gb-the-green-brand-1259697174-29612816_1773461557894.jpg";

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
  { id: "1", name: "MCW Premium Full Spectrum 1500mg", brand: "MCW", category: "CBD Oils", subCategory: "CBD Oils", price: 85.00, effect: "Relaxing", cannabinoid: "CBD", image: pOil1500, isPopular: true },
  { id: "2", name: "MCW Broad Spectrum 1000mg", brand: "MCW", category: "CBD Oils", subCategory: "CBD Oils", price: 65.00, effect: "Focus", cannabinoid: "CBD", image: pCream1 },
  { id: "3", name: "Raw Garden CBD Oil 500mg", brand: "Raw Garden", category: "CBD Oils", subCategory: "CBD Oils", price: 45.00, effect: "Pain Relief", cannabinoid: "CBD", image: pOil500 },
  { id: "4", name: "Euphoria CBD 750mg Sleep Drops", brand: "Euphoria", category: "CBD Oils", subCategory: "CBD Oils", price: 55.00, effect: "Sleeping", cannabinoid: "CBD", image: pSleepDrops, isNew: true },
  { id: "5", name: "Sensi Seeds Pure CBD Extract", brand: "Sensi Seeds", category: "CBD Oils", subCategory: "CBD Oils", price: 120.00, effect: "Relaxing", cannabinoid: "CBD", image: pDrink1 },
  { id: "41", name: "MCW Sleep Tincture 500mg", brand: "MCW", category: "CBD Oils", subCategory: "CBD Oils", price: 40.00, effect: "Sleeping", cannabinoid: "CBD", image: pCream1 },
  { id: "27", name: "MCW H4CBD Oil 1000mg", brand: "MCW", category: "CBD Oils", subCategory: "H4CBD", price: 75.00, effect: "Pain Relief", cannabinoid: "H4CBD", image: pGummy3, isNew: true },
  { id: "48", name: "Barona THCV Tincture", brand: "Barona", category: "CBD Oils", subCategory: "THCV", price: 85.00, effect: "Focus", cannabinoid: "THCV", image: pGummy3, isNew: true },
  { id: "50", name: "MCW Muscle Cream 1000mg", brand: "MCW", category: "CBD Oils", subCategory: "CBD Creams", price: 55.00, effect: "Pain Relief", cannabinoid: "CBD", image: pCream1 },
  { id: "51", name: "Euphoria CBD Balm", brand: "Euphoria", category: "CBD Oils", subCategory: "CBD Creams", price: 35.00, effect: "Pain Relief", cannabinoid: "CBD", image: pCream2 },
  { id: "52", name: "Sensi Seeds Capsules", brand: "Sensi Seeds", category: "CBD Oils", subCategory: "CBD Capsules", price: 45.00, effect: "Focus", cannabinoid: "CBD", image: pCream1 },

  // CBD Flowers
  { id: "6", name: "Cookies Wedding Cake", brand: "Cookies", category: "CBD Flowers", subCategory: "CBD Flowers", price: 18.00, effect: "Relaxing", cannabinoid: "CBD", image: pFlower1, isPopular: true },
  { id: "7", name: "Jeeter Gelato", brand: "Jeeter", category: "CBD Flowers", subCategory: "CBD Flowers", price: 20.00, effect: "Energizing", cannabinoid: "CBD", image: pPreRoll1 },
  { id: "8", name: "Jungle Boys OG Kush", brand: "Jungle Boys", category: "CBD Flowers", subCategory: "CBD Flowers", price: 22.00, effect: "Relaxing", cannabinoid: "CBD", image: pFlower1, isNew: true },
  { id: "9", name: "STIIIZY White Widow", brand: "STIIIZY", category: "CBD Flowers", subCategory: "CBD Flowers", price: 19.00, effect: "Focus", cannabinoid: "CBD", image: pPreRoll1 },
  { id: "10", name: "Barona Amnesia Haze", brand: "Barona", category: "CBD Flowers", subCategory: "CBD Flowers", price: 15.00, effect: "Energizing", cannabinoid: "CBD", image: pFlower1 },
  { id: "11", name: "MCW House Blend Indica", brand: "MCW", category: "CBD Flowers", subCategory: "CBD Flowers", price: 12.00, effect: "Sleeping", cannabinoid: "CBD", image: pPreRoll1 },
  { id: "12", name: "Dutch Gold Blue Dream", brand: "Dutch Gold", category: "CBD Flowers", subCategory: "CBD Flowers", price: 16.00, effect: "Focus", cannabinoid: "CBD", image: pFlower1 },
  { id: "13", name: "CBX Tropicana Cookies", brand: "CBX", category: "CBD Flowers", subCategory: "CBD Flowers", price: 24.00, effect: "Relaxing", cannabinoid: "CBD", image: pPreRoll1 },
  { id: "42", name: "Cookies Hash Rosin", brand: "Cookies", category: "CBD Flowers", subCategory: "CBD Hash", price: 55.00, effect: "Relaxing", cannabinoid: "CBD", image: pEdible4 },
  { id: "43", name: "Amsterdam Gold Hash", brand: "Amsterdam Gold", category: "CBD Flowers", subCategory: "CBD Hash", price: 30.00, effect: "Energizing", cannabinoid: "CBD", image: pEdible4 },

  // CBD Vapes
  { id: "14", name: "STIIIZY Pod OG Kush", brand: "STIIIZY", category: "CBD Vapes", subCategory: "CBD Vapes", price: 35.00, effect: "Relaxing", cannabinoid: "CBD", image: pVape1, isPopular: true },
  { id: "15", name: "Cookies Vape Pen Gelato", brand: "Cookies", category: "CBD Vapes", subCategory: "CBD Vapes", price: 40.00, effect: "Energizing", cannabinoid: "CBD", image: pVape2 },
  { id: "16", name: "Tyson 2.0 Disposable Blue Razz", brand: "Tyson 2.0", category: "CBD Vapes", subCategory: "CBD Vapes", price: 45.00, effect: "Focus", cannabinoid: "CBD", image: pVape3, isNew: true },
  { id: "17", name: "STIIIZY Battery Starter Kit", brand: "STIIIZY", category: "CBD Vapes", subCategory: "CBD Vapes", price: 25.00, cannabinoid: "None", image: pVape1 },
  { id: "18", name: "Raw Garden Cartridge", brand: "Raw Garden", category: "CBD Vapes", subCategory: "CBD Vapes", price: 38.00, effect: "Pain Relief", cannabinoid: "CBD", image: pVape2 },
  { id: "44", name: "STIIIZY Pod Blue Dream", brand: "STIIIZY", category: "CBD Vapes", subCategory: "CBD Vapes", price: 35.00, effect: "Focus", cannabinoid: "CBD", image: pVape3 },
  { id: "45", name: "CBX Disposable Pen", brand: "CBX", category: "CBD Vapes", subCategory: "CBD Vapes", price: 42.00, effect: "Relaxing", cannabinoid: "CBD", image: pVape1 },
  { id: "28", name: "H4CBD Vape Cartridge Blueberry", brand: "Top Shelf", category: "CBD Vapes", subCategory: "H4CBD", price: 42.00, effect: "Relaxing", cannabinoid: "H4CBD", image: pGummy3 },
  { id: "29", name: "MCW HHC Disposable Vape", brand: "MCW", category: "CBD Vapes", subCategory: "HHC Products", price: 50.00, effect: "Energizing", cannabinoid: "HHC", image: pVape1, isPopular: true },
  { id: "49", name: "Jeeter THCV Dispo", brand: "Jeeter", category: "CBD Vapes", subCategory: "THCV", price: 60.00, effect: "Energizing", cannabinoid: "THCV", image: pGummy3 },
  { id: "33", name: "Volcano Hybrid Vaporizer", brand: "Top Shelf", category: "CBD Vapes", subCategory: "Vaporizers", price: 450.00, cannabinoid: "None", image: pVape2 },
  { id: "34", name: "Pax 3 Vaporizer", brand: "Top Shelf", category: "CBD Vapes", subCategory: "Vaporizers", price: 180.00, cannabinoid: "None", image: pVape2 },

  // CBD Gummies
  { id: "19", name: "MCW Sleep Gummies 300mg", brand: "MCW", category: "CBD Gummies", subCategory: "CBD Gummies", price: 25.00, effect: "Sleeping", cannabinoid: "CBD", image: pGummy1, isPopular: true },
  { id: "20", name: "Euphoria CBD Gummies Mixed Fruit", brand: "Euphoria", category: "CBD Gummies", subCategory: "CBD Gummies", price: 18.00, effect: "Relaxing", cannabinoid: "CBD", image: pGummy2 },
  { id: "21", name: "Tyson 2.0 Knockout Gummies", brand: "Tyson 2.0", category: "CBD Gummies", subCategory: "CBD Gummies", price: 30.00, effect: "Sleeping", cannabinoid: "CBD", image: pGummy3, isNew: true },
  { id: "46", name: "Gelato Gummies 500mg", brand: "Gelato", category: "CBD Gummies", subCategory: "CBD Gummies", price: 35.00, effect: "Sleeping", cannabinoid: "CBD", image: pGummy4 },
  { id: "22", name: "Jeeter Edibles Sour Rings", brand: "Jeeter", category: "CBD Gummies", subCategory: "CBD Edibles", price: 22.00, effect: "Energizing", cannabinoid: "CBD", image: pEdible1 },
  { id: "30", name: "HHC Gummies Tropical", brand: "Euphoria", category: "CBD Gummies", subCategory: "HHC Products", price: 35.00, effect: "Relaxing", cannabinoid: "HHC", image: pGummy4 },

  // Pre-Rolls
  { id: "23", name: "Jeeter Baby Pre-Rolls Pack", brand: "Jeeter", category: "Pre-Rolls", subCategory: "CBD Pre-Rolls", price: 45.00, effect: "Relaxing", cannabinoid: "CBD", image: pPreRoll1, isPopular: true },
  { id: "24", name: "Cookies Pre-Roll Gelato", brand: "Cookies", category: "Pre-Rolls", subCategory: "CBD Pre-Rolls", price: 15.00, effect: "Energizing", cannabinoid: "CBD", image: pPreRoll2 },
  { id: "25", name: "Jungle Boys Pre-Roll OG", brand: "Jungle Boys", category: "Pre-Rolls", subCategory: "CBD Pre-Rolls", price: 18.00, effect: "Focus", cannabinoid: "CBD", image: pPreRoll1 },
  { id: "26", name: "MCW House Pre-Roll", brand: "MCW", category: "Pre-Rolls", subCategory: "CBD Pre-Rolls", price: 8.00, effect: "Relaxing", cannabinoid: "CBD", image: pPreRoll2 },
  { id: "47", name: "Haze Pre-Roll Pack", brand: "Haze", category: "Pre-Rolls", subCategory: "CBD Pre-Rolls", price: 28.00, effect: "Energizing", cannabinoid: "CBD", image: pPreRoll1 },
  { id: "36", name: "Cohiba Siglo IV", brand: "Top Shelf", category: "Pre-Rolls", subCategory: "Cigars", price: 35.00, cannabinoid: "None", image: pPreRoll1 },
  { id: "37", name: "Romeo y Julieta Churchill", brand: "Top Shelf", category: "Pre-Rolls", subCategory: "Cigars", price: 28.00, cannabinoid: "None", image: pPreRoll1 },
  { id: "38", name: "MCW House Cigar", brand: "MCW", category: "Pre-Rolls", subCategory: "Cigars", price: 15.00, cannabinoid: "None", image: pPreRoll1 },
  { id: "31", name: "Raw Black Papers King Size", brand: "Raw Garden", category: "Pre-Rolls", subCategory: "Papers & Filters", price: 2.50, cannabinoid: "None", image: pPreRoll2 },
  { id: "35", name: "RAW Bamboo Rolling Mat", brand: "Raw Garden", category: "Pre-Rolls", subCategory: "Accessories", price: 8.00, cannabinoid: "None", image: pIncense1 },
  { id: "58", name: "Jungle Boys Rolling Tray", brand: "Jungle Boys", category: "Pre-Rolls", subCategory: "Accessories", price: 25.00, cannabinoid: "None", image: pIncense1 },

  // Lifestyle
  { id: "32", name: "Grass King Grinder 4-Part", brand: "Top Shelf", category: "Lifestyle", subCategory: "Grinders", price: 25.00, cannabinoid: "None", image: pGrinder1 },
  { id: "59", name: "MCW Grinder Titanium", brand: "MCW", category: "Lifestyle", subCategory: "Grinders", price: 40.00, cannabinoid: "None", image: pGrinder1 },
  { id: "56", name: "Cookies Ashtray", brand: "Cookies", category: "Lifestyle", subCategory: "Accessories", price: 15.00, cannabinoid: "None", image: pGrinder1 },
  { id: "57", name: "Tyson 2.0 Glass Piece", brand: "Tyson 2.0", category: "Lifestyle", subCategory: "Accessories", price: 120.00, cannabinoid: "None", image: pPreRoll2 },
  { id: "53", name: "MCW Storage Jar Large", brand: "MCW", category: "Lifestyle", subCategory: "Storage Solutions", price: 20.00, cannabinoid: "None", image: pGrinder1 },
  { id: "54", name: "Clipper Lighter Metal", brand: "Top Shelf", category: "Lifestyle", subCategory: "Lighters", price: 12.00, cannabinoid: "None", image: pIncense1 },
  { id: "55", name: "MCW Logo Hoodie", brand: "MCW", category: "Lifestyle", subCategory: "Clothing & Merch", price: 65.00, cannabinoid: "None", image: pEdible3 },
  { id: "39", name: "Amsterdam Premium Gin", brand: "Amsterdam Gold", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 45.00, cannabinoid: "None", image: pDrink1 },
  { id: "40", name: "Dutch Courage Vodka", brand: "Dutch Gold", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 40.00, cannabinoid: "None", image: pDrink1 },
  { id: "60", name: "Dutch Gold Premium Gin", brand: "Dutch Gold", category: "Lifestyle", subCategory: "Liquor & Spirits", price: 50.00, cannabinoid: "None", image: pDrink1 },

  // Canapuff CBD Flowers
  { id: "61", name: "CBD Flowers Amnesia 69%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 5.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/amns_cbd.png" },
  { id: "62", name: "CBD Flowers Lemon Gelato 69%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 5.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/lmn_glt_cbd.png" },
  { id: "63", name: "CBD Flowers Royal Skunk 24%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 5.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/ryl_sknk_cbd.png" },
  { id: "64", name: "CBD Flowers Lemon Skunk 14%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 5.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/lmn_sknk_cbd.png" },
  { id: "65", name: "CBD Flowers Fire Kush 13%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 5.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/fir_ksh_cbd.png" },
  { id: "66", name: "CBD Flowers Wellness 18%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 5.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/wlns_cbd.png" },
  { id: "67", name: "CBD Flowers Strawberry 13%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 5.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/strwbry_cbd.png" },
  { id: "68", name: "CBD Flowers Sugar Queen 17%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 5.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/sgr_qen_cbd.png" },
  { id: "69", name: "CBG9 Flowers Blueberry Cookie 65%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 8.99, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_blueberry_cookies.jpg", isNew: true },
  { id: "70", name: "CBG9 Flowers Caribbean Breeze 65%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 8.99, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_caribbean_breeze.jpg", isNew: true },
  { id: "71", name: "CBG9 Flowers Watermelon Mojito 50%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 8.99, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_canapuff_flowers_watermelon_mojito.png", isNew: true },
  { id: "72", name: "CBG9 Flowers Blood Orange 50%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Flowers", price: 8.99, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_canapuff_blood_orange_blueten.png", isNew: true },

  // Canapuff CBD Hash
  { id: "73", name: "CBD Hash Afghan Gold 60%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Hash", price: 6.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd_afghan-camera_2_720.png" },
  { id: "74", name: "CBD Hash Libanese 60%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Hash", price: 6.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd_libanese-camera_2_720.png" },
  { id: "75", name: "CBD Hash Choco 60%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Hash", price: 6.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd_choco-camera_2_720.png" },
  { id: "76", name: "CBD Hash Banana 60%", brand: "Canapuff", category: "CBD Flowers", subCategory: "CBD Hash", price: 6.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd_banana-camera_2_720.png" },

  // Canapuff CBD Vapes
  { id: "77", name: "CBD Vape OG Kush 95% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "CBD Vapes", price: 29.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/og_kush_720.png" },
  { id: "78", name: "CBD Vape Rest 95% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "CBD Vapes", price: 24.20, effect: "Sleeping", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/rest_720.png" },
  { id: "79", name: "CBD Vape Recovery 95% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "CBD Vapes", price: 24.20, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/recovery_720.png" },
  { id: "80", name: "CBG9 Vape Blueberry Cookie 79% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "CBD Vapes", price: 31.63, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_blueberry_cookie_vape_premium_canapuff.png", isNew: true },
  { id: "81", name: "CBG9 Vape Watermelon Mojito 79% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "CBD Vapes", price: 31.63, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_canapuff_vape_oneuse_watermelon_mojito.png", isNew: true },
  { id: "82", name: "CBG9 Vape Caribbean Breeze 79% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "CBD Vapes", price: 31.63, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_baribbean_breeze_vape_premium_canapuff.png", isNew: true },
  { id: "83", name: "CBG9 Vape Blood Orange 79% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "CBD Vapes", price: 31.63, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/CBG9_vape_blood_orange.png", isNew: true },
  { id: "84", name: "Smart.800 Disposable CBD Vape Apple Ice", brand: "Smart.800", category: "CBD Vapes", subCategory: "CBD Vapes", price: 9.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/Smart800.png", isNew: true },

  // Canapuff THCV Vapes
  { id: "85", name: "THCv XXL Vape Papaya Punch 99% 2ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "THCV", price: 42.90, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/NEW_XXL_Papaya_Punch-Current_View.png", isNew: true },
  { id: "86", name: "THCv XXL Vape Blueberry Cookies 99% 2ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "THCV", price: 42.90, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/NEW_XXL_Blueberry_Cookies-Current_View.png", isNew: true },
  { id: "87", name: "THCv XXL Vape Berry Gelato 99% 2ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "THCV", price: 42.90, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/NEW_XXL_Berry_Gelato-Current_View.png", isNew: true },
  { id: "88", name: "THCv Vape Papaya Punch 79% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "THCV", price: 31.63, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/ppy_79__720_428c743e-f2fe-4592-8d47-5958ac4fe218.png" },
  { id: "89", name: "THCv Vape Berry Gelato 79% 1ml", brand: "Canapuff", category: "CBD Vapes", subCategory: "THCV", price: 39.99, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/brry_glt_79__720_3a98a7a0-eb69-415e-8611-488b20dcf641.png" },

  // Canapuff CBD Gummies
  { id: "90", name: "CBD Gummies Sleep", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 14.40, effect: "Sleeping", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd_sleep-camera_2_720.png" },
  { id: "91", name: "CBD Gummies Rest", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 14.40, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd_rest-camera_2.png" },
  { id: "92", name: "CBD Gummies Recovery", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 14.40, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd_recovery-camera_2_720.png" },
  { id: "93", name: "Melatonin+CBD Gummies Cherry", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 18.90, effect: "Sleeping", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/melatonin_cbd_cherry_10pcs-camera_2_720.png" },
  { id: "94", name: "CBD Gummies Blueberry", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 1.79, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/1pc_cbd_blueberry.png" },
  { id: "95", name: "CBD Gummies Immunity", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 14.40, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd_immunity-camera_2_720.png" },
  { id: "96", name: "Canapuff CBG9 Candy Cotton Gummies", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 9.99, effect: "Relaxing", cannabinoid: "CBG9", image: "https://static.manus.im/file/mcw-cbd-shop/CBG9_Gummy.png", isNew: true },
  { id: "97", name: "Moon Rock CBD Lemon Haze Gummies", brand: "Moon Rock", category: "CBD Gummies", subCategory: "CBD Gummies", price: 9.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/Lemon_Haze.png", isNew: true },
  { id: "98", name: "CBG9 Gummies Sour Apple", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 14.97, effect: "Energizing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_canapuff_gummies_sour_apple.png", isNew: true },
  { id: "99", name: "CBG9 Gummies Raspberry", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 14.97, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_canapuff_gummies_raspberry.png", isNew: true },
  { id: "100", name: "CBG9 Gummies Candy Cotton", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 14.97, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_canapuff_gummies_candy_cotton.png", isNew: true },
  { id: "101", name: "CBG9 Gummies Strawberry", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 19.99, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_canapuff_gummies_strawberry.png", isNew: true },
  { id: "102", name: "CBG9 Gummies Sour Cherry", brand: "Canapuff", category: "CBD Gummies", subCategory: "CBD Gummies", price: 19.99, effect: "Relaxing", cannabinoid: "CBG9", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbg9_canapuff_gummies_sour_cherry.png", isNew: true },

  // Canapuff THCV Gummies
  { id: "103", name: "THCv Gummies Blueberry", brand: "Canapuff", category: "CBD Gummies", subCategory: "THCV", price: 16.90, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/blueberry_thcv-camera_2_720_94df2802-9c00-4ba3-811c-80e46a6b2f48.png" },
  { id: "104", name: "THCv Gummies Green Apple", brand: "Canapuff", category: "CBD Gummies", subCategory: "THCV", price: 16.90, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/green_apple_thcv-camera_2.png" },
  { id: "105", name: "THCv Gummies Strawberry", brand: "Canapuff", category: "CBD Gummies", subCategory: "THCV", price: 16.90, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/strawberry_thcv-camera_2.png" },
  { id: "106", name: "THCv Gummies Raspberry", brand: "Canapuff", category: "CBD Gummies", subCategory: "THCV", price: 16.90, effect: "Focus", cannabinoid: "THCV", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/raspberry_thcv-camera_2.png" },

  // Canapuff CBD Edibles
  { id: "107", name: "Cannabis Bakehouse White Widow Cookies", brand: "Cannabis Bakehouse", category: "CBD Gummies", subCategory: "CBD Edibles", price: 9.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/Cannabis_Cookie.png", isNew: true },
  { id: "108", name: "Multitrance Space Cake", brand: "Multitrance", category: "CBD Gummies", subCategory: "CBD Edibles", price: 9.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/Space_Cake.png", isNew: true },
  { id: "109", name: "CannaShot CBD Energy Drink", brand: "CannaShot", category: "CBD Gummies", subCategory: "CBD Edibles", price: 9.99, effect: "Energizing", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/CannaShot.png", isNew: true },
  { id: "110", name: "MediCBD Strawberry Chewing Gum", brand: "MediCBD", category: "CBD Gummies", subCategory: "CBD Edibles", price: 9.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/Chewing_Gum.png", isNew: true },
  { id: "111", name: "MCW Edibles Collection", brand: "MCW", category: "CBD Gummies", subCategory: "CBD Edibles", price: 9.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/Mixed_Products.png", isNew: true },

  // Canapuff CBD Oils
  { id: "112", name: "CBD Oil Full Spectrum 5% 15ml", brand: "Canapuff", category: "CBD Oils", subCategory: "CBD Oils", price: 16.70, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd5.jpg" },
  { id: "113", name: "CBD Oil Full Spectrum 20% 15ml", brand: "Canapuff", category: "CBD Oils", subCategory: "CBD Oils", price: 32.70, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd20_fullspectrum.jpg" },
  { id: "114", name: "CBD Oil Full Spectrum 10% 15ml", brand: "Canapuff", category: "CBD Oils", subCategory: "CBD Oils", price: 21.20, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd10_fullspectrum.jpg" },
  { id: "115", name: "CBD Oil 30% 15ml", brand: "Canapuff", category: "CBD Oils", subCategory: "CBD Oils", price: 40.10, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd30.jpg" },
  { id: "116", name: "CBD Oil 20% 15ml", brand: "Canapuff", category: "CBD Oils", subCategory: "CBD Oils", price: 29.70, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd20.jpg" },
  { id: "117", name: "CBD Oil 10% 15ml", brand: "Canapuff", category: "CBD Oils", subCategory: "CBD Oils", price: 19.30, effect: "Relaxing", cannabinoid: "CBD", image: "https://cdn.shopify.com/s/files/1/0622/2623/5559/files/cbd10.jpg" },

  // CBD Creams
  { id: "118", name: "VIP Line CBD Face Cream Aloe Vera 2000mg", brand: "VIP Line", category: "CBD Oils", subCategory: "CBD Creams", price: 9.99, effect: "Pain Relief", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/Face_Cream.png", isNew: true },
  { id: "119", name: "Venus Secrets CBD Cosmetics Bundle", brand: "Venus Secrets", category: "CBD Oils", subCategory: "CBD Creams", price: 9.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/Cannabis_Oil_Lipstick.png", isNew: true },

  // Pre-Rolls
  { id: "120", name: "Euphoria CBD Pre-rolls Display", brand: "Euphoria", category: "Pre-Rolls", subCategory: "CBD Pre-Rolls", price: 9.99, effect: "Relaxing", cannabinoid: "CBD", image: "https://static.manus.im/file/mcw-cbd-shop/Mixed_Joints.png", isNew: true },

  // Lifestyle / Accessories
  { id: "121", name: "Multitrance Cannabis Incense Sticks", brand: "Multitrance", category: "Lifestyle", subCategory: "Accessories", price: 9.99, cannabinoid: "None", image: "https://static.manus.im/file/mcw-cbd-shop/Cannabis_Incense.png", isNew: true },
  { id: "122", name: "Pre-roll Tube Holder", brand: "MCW", category: "Lifestyle", subCategory: "Accessories", price: 9.99, cannabinoid: "None", image: "https://static.manus.im/file/mcw-cbd-shop/Joint_Holder.png", isNew: true },
  { id: "123", name: "OCTORINDER Octopus Grinder", brand: "OCTORINDER", category: "Lifestyle", subCategory: "Accessories", price: 9.99, cannabinoid: "None", image: "https://static.manus.im/file/mcw-cbd-shop/OCTORINDER.png", isNew: true },
  { id: "124", name: "Pod Salt ONYX 1000 Nicotine Vape", brand: "Pod Salt", category: "Lifestyle", subCategory: "Accessories", price: 9.99, cannabinoid: "None", image: "https://static.manus.im/file/mcw-cbd-shop/Firefly_Product.png", isNew: true }
];
