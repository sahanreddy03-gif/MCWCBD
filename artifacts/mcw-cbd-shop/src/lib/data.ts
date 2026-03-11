export type Category = 
  | "CBD Oils" | "CBD Flowers" | "CBD Hash" | "CBD Pre-Rolls" 
  | "CBD Vapes" | "CBD Gummies" | "CBD Edibles" | "CBD Creams" 
  | "CBD Capsules" | "H4CBD" | "HHC Products" | "THCV" 
  | "Grinders" | "Papers & Filters" | "Vaporizers" 
  | "Storage Solutions" | "Lighters" | "Cigars" 
  | "Liquor & Spirits" | "Clothing & Merch";

export type Effect = "Relaxing" | "Energizing" | "Sleeping" | "Focus" | "Pain Relief";

export type Cannabinoid = "CBD" | "H4CBD" | "HHC" | "THCV" | "CBG" | "CBN" | "None";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
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
  "Gelato", "Top Shelf", "Amsterdam Gold", "Dutch Gold", "Sensi Seeds", "MCW"
];

const placeholders = [
  "https://images.unsplash.com/photo-1606335543042-57c525922933?auto=format&fit=crop&q=80&w=600", // oil
  "https://images.unsplash.com/photo-1596529683935-7189196d07e6?auto=format&fit=crop&q=80&w=600", // flower
  "https://images.unsplash.com/photo-1527376378523-288d6174a7eb?auto=format&fit=crop&q=80&w=600", // vape/smoke
  "https://images.unsplash.com/photo-1629813580556-91f868c2dcc8?auto=format&fit=crop&q=80&w=600", // gummy
];

export const PRODUCTS: Product[] = [
  // CBD Oils
  { id: "1", name: "MCW Premium Full Spectrum 1500mg", brand: "MCW", category: "CBD Oils", price: 85.00, effect: "Relaxing", cannabinoid: "CBD", image: placeholders[0], isPopular: true },
  { id: "2", name: "MCW Broad Spectrum 1000mg", brand: "MCW", category: "CBD Oils", price: 65.00, effect: "Focus", cannabinoid: "CBD", image: placeholders[0] },
  { id: "3", name: "Raw Garden CBD Oil 500mg", brand: "Raw Garden", category: "CBD Oils", price: 45.00, effect: "Pain Relief", cannabinoid: "CBD", image: placeholders[0] },
  { id: "4", name: "Euphoria CBD 750mg Sleep Drops", brand: "Euphoria", category: "CBD Oils", price: 55.00, effect: "Sleeping", cannabinoid: "CBD", image: placeholders[0], isNew: true },
  { id: "5", name: "Sensi Seeds Pure CBD Extract", brand: "Sensi Seeds", category: "CBD Oils", price: 120.00, effect: "Relaxing", cannabinoid: "CBD", image: placeholders[0] },
  
  // CBD Flowers
  { id: "6", name: "Cookies Wedding Cake", brand: "Cookies", category: "CBD Flowers", price: 18.00, effect: "Relaxing", cannabinoid: "CBD", image: placeholders[1], isPopular: true },
  { id: "7", name: "Jeeter Gelato", brand: "Jeeter", category: "CBD Flowers", price: 20.00, effect: "Energizing", cannabinoid: "CBD", image: placeholders[1] },
  { id: "8", name: "Jungle Boys OG Kush", brand: "Jungle Boys", category: "CBD Flowers", price: 22.00, effect: "Relaxing", cannabinoid: "CBD", image: placeholders[1], isNew: true },
  { id: "9", name: "STIIIZY White Widow", brand: "STIIIZY", category: "CBD Flowers", price: 19.00, effect: "Focus", cannabinoid: "CBD", image: placeholders[1] },
  { id: "10", name: "Barona Amnesia Haze", brand: "Barona", category: "CBD Flowers", price: 15.00, effect: "Energizing", cannabinoid: "CBD", image: placeholders[1] },
  { id: "11", name: "MCW House Blend Indica", brand: "MCW", category: "CBD Flowers", price: 12.00, effect: "Sleeping", cannabinoid: "CBD", image: placeholders[1] },
  { id: "12", name: "Dutch Gold Blue Dream", brand: "Dutch Gold", category: "CBD Flowers", price: 16.00, effect: "Focus", cannabinoid: "CBD", image: placeholders[1] },
  { id: "13", name: "CBX Tropicana Cookies", brand: "CBX", category: "CBD Flowers", price: 24.00, effect: "Relaxing", cannabinoid: "CBD", image: placeholders[1] },

  // Vapes
  { id: "14", name: "STIIIZY Pod OG Kush", brand: "STIIIZY", category: "CBD Vapes", price: 35.00, effect: "Relaxing", cannabinoid: "CBD", image: placeholders[2], isPopular: true },
  { id: "15", name: "Cookies Vape Pen Gelato", brand: "Cookies", category: "CBD Vapes", price: 40.00, effect: "Energizing", cannabinoid: "CBD", image: placeholders[2] },
  { id: "16", name: "Tyson 2.0 Disposable Blue Razz", brand: "Tyson 2.0", category: "CBD Vapes", price: 45.00, effect: "Focus", cannabinoid: "CBD", image: placeholders[2], isNew: true },
  { id: "17", name: "STIIIZY Battery Starter Kit", brand: "STIIIZY", category: "CBD Vapes", price: 25.00, cannabinoid: "None", image: placeholders[2] },
  { id: "18", name: "Raw Garden Cartridge", brand: "Raw Garden", category: "CBD Vapes", price: 38.00, effect: "Pain Relief", cannabinoid: "CBD", image: placeholders[2] },

  // Gummies & Edibles
  { id: "19", name: "MCW Sleep Gummies 300mg", brand: "MCW", category: "CBD Gummies", price: 25.00, effect: "Sleeping", cannabinoid: "CBD", image: placeholders[3], isPopular: true },
  { id: "20", name: "Euphoria CBD Gummies Mixed Fruit", brand: "Euphoria", category: "CBD Gummies", price: 18.00, effect: "Relaxing", cannabinoid: "CBD", image: placeholders[3] },
  { id: "21", name: "Tyson 2.0 Knockout Gummies", brand: "Tyson 2.0", category: "CBD Gummies", price: 30.00, effect: "Sleeping", cannabinoid: "CBD", image: placeholders[3], isNew: true },
  { id: "22", name: "Jeeter Edibles Sour Rings", brand: "Jeeter", category: "CBD Edibles", price: 22.00, effect: "Energizing", cannabinoid: "CBD", image: placeholders[3] },

  // Pre-Rolls
  { id: "23", name: "Jeeter Baby Pre-Rolls Pack", brand: "Jeeter", category: "CBD Pre-Rolls", price: 45.00, effect: "Relaxing", cannabinoid: "CBD", image: placeholders[1], isPopular: true },
  { id: "24", name: "Cookies Pre-Roll Gelato", brand: "Cookies", category: "CBD Pre-Rolls", price: 15.00, effect: "Energizing", cannabinoid: "CBD", image: placeholders[1] },
  { id: "25", name: "Jungle Boys Pre-Roll OG", brand: "Jungle Boys", category: "CBD Pre-Rolls", price: 18.00, effect: "Focus", cannabinoid: "CBD", image: placeholders[1] },
  { id: "26", name: "MCW House Pre-Roll", brand: "MCW", category: "CBD Pre-Rolls", price: 8.00, effect: "Relaxing", cannabinoid: "CBD", image: placeholders[1] },

  // H4CBD & HHC
  { id: "27", name: "MCW H4CBD Oil 1000mg", brand: "MCW", category: "H4CBD", price: 75.00, effect: "Pain Relief", cannabinoid: "H4CBD", image: placeholders[0], isNew: true },
  { id: "28", name: "H4CBD Vape Cartridge Blueberry", brand: "Top Shelf", category: "H4CBD", price: 42.00, effect: "Relaxing", cannabinoid: "H4CBD", image: placeholders[2] },
  { id: "29", name: "MCW HHC Disposable Vape", brand: "MCW", category: "HHC Products", price: 50.00, effect: "Energizing", cannabinoid: "HHC", image: placeholders[2], isPopular: true },
  { id: "30", name: "HHC Gummies Tropical", brand: "Euphoria", category: "HHC Products", price: 35.00, effect: "Relaxing", cannabinoid: "HHC", image: placeholders[3] },

  // Accessories
  { id: "31", name: "Raw Black Papers King Size", brand: "Raw Garden", category: "Papers & Filters", price: 2.50, cannabinoid: "None", image: placeholders[1] },
  { id: "32", name: "Grass King Grinder 4-Part", brand: "Top Shelf", category: "Grinders", price: 25.00, cannabinoid: "None", image: placeholders[1] },
  { id: "33", name: "Volcano Hybrid Vaporizer", brand: "Top Shelf", category: "Vaporizers", price: 450.00, cannabinoid: "None", image: placeholders[2] },
  { id: "34", name: "Pax 3 Vaporizer", brand: "Top Shelf", category: "Vaporizers", price: 180.00, cannabinoid: "None", image: placeholders[2] },
  { id: "35", name: "RAW Bamboo Rolling Mat", brand: "Raw Garden", category: "Accessories", price: 8.00, cannabinoid: "None", image: placeholders[1] as any },

  // Cigars & Liquor
  { id: "36", name: "Cohiba Siglo IV", brand: "Top Shelf", category: "Cigars", price: 35.00, cannabinoid: "None", image: placeholders[1] },
  { id: "37", name: "Romeo y Julieta Churchill", brand: "Top Shelf", category: "Cigars", price: 28.00, cannabinoid: "None", image: placeholders[1] },
  { id: "38", name: "MCW House Cigar", brand: "MCW", category: "Cigars", price: 15.00, cannabinoid: "None", image: placeholders[1] },
  { id: "39", name: "Amsterdam Premium Gin", brand: "Amsterdam Gold", category: "Liquor & Spirits", price: 45.00, cannabinoid: "None", image: placeholders[0] },
  { id: "40", name: "Dutch Courage Vodka", brand: "Dutch Gold", category: "Liquor & Spirits", price: 40.00, cannabinoid: "None", image: placeholders[0] },
  
  // Padding out to ~60 with variations
  { id: "41", name: "MCW Sleep Tincture 500mg", brand: "MCW", category: "CBD Oils", price: 40.00, effect: "Sleeping", cannabinoid: "CBD", image: placeholders[0] },
  { id: "42", name: "Cookies Hash Rosin", brand: "Cookies", category: "CBD Hash", price: 55.00, effect: "Relaxing", cannabinoid: "CBD", image: placeholders[1] },
  { id: "43", name: "Amsterdam Gold Hash", brand: "Amsterdam Gold", category: "CBD Hash", price: 30.00, effect: "Energizing", cannabinoid: "CBD", image: placeholders[1] },
  { id: "44", name: "STIIIZY Pod Blue Dream", brand: "STIIIZY", category: "CBD Vapes", price: 35.00, effect: "Focus", cannabinoid: "CBD", image: placeholders[2] },
  { id: "45", name: "CBX Disposable Pen", brand: "CBX", category: "CBD Vapes", price: 42.00, effect: "Relaxing", cannabinoid: "CBD", image: placeholders[2] },
  { id: "46", name: "Gelato Gummies 500mg", brand: "Gelato", category: "CBD Gummies", price: 35.00, effect: "Sleeping", cannabinoid: "CBD", image: placeholders[3] },
  { id: "47", name: "Haze Pre-Roll Pack", brand: "Haze", category: "CBD Pre-Rolls", price: 28.00, effect: "Energizing", cannabinoid: "CBD", image: placeholders[1] },
  { id: "48", name: "Barona THCV Tincture", brand: "Barona", category: "THCV", price: 85.00, effect: "Focus", cannabinoid: "THCV", image: placeholders[0], isNew: true },
  { id: "49", name: "Jeeter THCV Dispo", brand: "Jeeter", category: "THCV", price: 60.00, effect: "Energizing", cannabinoid: "THCV", image: placeholders[2] },
  { id: "50", name: "MCW Muscle Cream 1000mg", brand: "MCW", category: "CBD Creams", price: 55.00, effect: "Pain Relief", cannabinoid: "CBD", image: placeholders[0] },
  { id: "51", name: "Euphoria CBD Balm", brand: "Euphoria", category: "CBD Creams", price: 35.00, effect: "Pain Relief", cannabinoid: "CBD", image: placeholders[0] },
  { id: "52", name: "Sensi Seeds Capsules", brand: "Sensi Seeds", category: "CBD Capsules", price: 45.00, effect: "Focus", cannabinoid: "CBD", image: placeholders[0] },
  { id: "53", name: "MCW Storage Jar Large", brand: "MCW", category: "Storage Solutions", price: 20.00, cannabinoid: "None", image: placeholders[1] },
  { id: "54", name: "Clipper Lighter Metal", brand: "Top Shelf", category: "Lighters", price: 12.00, cannabinoid: "None", image: placeholders[1] },
  { id: "55", name: "MCW Logo Hoodie", brand: "MCW", category: "Clothing & Merch", price: 65.00, cannabinoid: "None", image: placeholders[1] },
  { id: "56", name: "Cookies Ashtray", brand: "Cookies", category: "Accessories", price: 15.00, cannabinoid: "None", image: placeholders[1] as any },
  { id: "57", name: "Tyson 2.0 Glass Piece", brand: "Tyson 2.0", category: "Accessories", price: 120.00, cannabinoid: "None", image: placeholders[2] as any },
  { id: "58", name: "Jungle Boys Rolling Tray", brand: "Jungle Boys", category: "Accessories", price: 25.00, cannabinoid: "None", image: placeholders[1] as any },
  { id: "59", name: "MCW Grinder Titanium", brand: "MCW", category: "Grinders", price: 40.00, cannabinoid: "None", image: placeholders[1] },
  { id: "60", name: "Dutch Gold Premium Gin", brand: "Dutch Gold", category: "Liquor & Spirits", price: 50.00, cannabinoid: "None", image: placeholders[0] }
];
