export type SchemaType = "LocalBusiness" | "Article";

export interface SeoPage {
  slug: string;
  label: string;
  cat: string;
  title: string;
  metaDescription: string;
  schemaType: SchemaType;
}

const LOCATION_NAMES: Record<string, string> = {
  sliema: "Sliema",
  gzira: "Gzira",
  mellieha: "Mellieha",
  bugibba: "Bugibba",
  valletta: "Valletta",
};

const PRODUCT_NAMES: Record<string, string> = {
  "cbd-oil": "CBD Oil",
  "cbd-flower": "CBD Flower",
  "cbd-vape": "CBD Vape",
  "cbd-gummies": "CBD Gummies",
  "cbd-hash": "CBD Hash",
  "pre-roll": "Pre-Rolls",
  "cbd-cream": "CBD Cream",
  grinder: "Premium Grinder",
  "rolling-papers": "Rolling Papers",
  vaporizer: "CBD Vaporizer",
  "storage-box": "CBD Storage Box",
  "cbd-lighter": "CBD Lighter",
  "mcw-t-shirt": "MCW T-Shirt",
  "mcw-tshirt": "MCW T-Shirt",
  "cherry-wine": "Cherry Wine CBD",
  "sour-space-candy": "Sour Space Candy CBD",
  "premium-hash": "Premium Hash",
  "disposable-vape": "Disposable CBD Vape",
  "vape-cartridge": "CBD Vape Cartridge",
  "premium-oil-1000mg": "Premium CBD Oil 1000mg",
  "isolate-oil": "CBD Isolate Oil",
};

function parseLocationSlug(slug: string): { product: string; location: string } | null {
  for (const loc of Object.keys(LOCATION_NAMES)) {
    if (slug.endsWith(`-in-${loc}`)) {
      const productKey = slug.replace(`-in-${loc}`, "");
      return { product: PRODUCT_NAMES[productKey] ?? productKey.replace(/-/g, " "), location: LOCATION_NAMES[loc] };
    }
  }
  return null;
}

function parseCitySlug(slug: string): string | null {
  if (slug.startsWith("cbd-") && LOCATION_NAMES[slug.replace("cbd-", "")]) {
    return LOCATION_NAMES[slug.replace("cbd-", "")];
  }
  return null;
}

function generateMeta(slug: string, label: string, cat: string): { title: string; metaDescription: string; schemaType: SchemaType } {
  if (cat === "Location") {
    const parsed = parseLocationSlug(slug);
    if (parsed) {
      return {
        title: `${parsed.product} in ${parsed.location} Malta — MCW CBD Shop`,
        metaDescription: `Buy ${parsed.product} in ${parsed.location}, Malta at MCW CBD Relax Shop. Premium quality, lab-tested, 100% legal. Same-day delivery or visit our ${parsed.location} store. Open daily until 11:30 pm.`,
        schemaType: "LocalBusiness",
      };
    }
  }

  if (cat === "City") {
    const city = parseCitySlug(slug);
    if (city) {
      return {
        title: `CBD in ${city}, Malta — MCW CBD Relax Shop`,
        metaDescription: `Looking for CBD in ${city}? MCW CBD Relax Shop is ${city}'s #1 CBD destination. Shop oils, flowers, vapes, gummies, and more. Open daily until 11:30 pm. Same-day delivery.`,
        schemaType: "LocalBusiness",
      };
    }
  }

  if (cat === "Benefits") {
    const benefit = label.replace("CBD for ", "").replace("CBD For ", "");
    return {
      title: `${label} — CBD Products Malta | MCW`,
      metaDescription: `Discover how CBD can help with ${benefit.toLowerCase()}. Shop Malta's best CBD products at MCW — lab-tested, 100% legal, same-day island-wide delivery.`,
      schemaType: "Article",
    };
  }

  if (cat === "Comparisons") {
    return {
      title: `${label} — CBD Comparison Guide Malta | MCW`,
      metaDescription: `${label}: complete comparison guide from MCW, Malta's #1 CBD shop. Find the right CBD product for your needs. Expert advice, honest reviews.`,
      schemaType: "Article",
    };
  }

  if (cat === "Education") {
    return {
      title: `${label} — CBD Education Guide | MCW Malta`,
      metaDescription: `${label}: complete educational guide from MCW, Malta's leading CBD experts. Everything you need to know about CBD in Malta.`,
      schemaType: "Article",
    };
  }

  if (cat === "Lifestyle") {
    return {
      title: `${label} — CBD Lifestyle Guide | MCW Malta`,
      metaDescription: `${label}: lifestyle guide from MCW, Malta's #1 CBD destination. Premium CBD products for a better lifestyle. Same-day delivery island-wide.`,
      schemaType: "Article",
    };
  }

  if (cat === "About") {
    return {
      title: `${label} — MCW CBD Relax Shop Malta`,
      metaDescription: `${label}: learn more about MCW CBD Relax Shop, Malta's #1 cannabis and CBD destination with 4 stores in Sliema, Gzira, Mellieha, and Bugibba.`,
      schemaType: "Article",
    };
  }

  return {
    title: `${label} — CBD Guide Malta | MCW`,
    metaDescription: `${label}: expert CBD guide from MCW, Malta's #1 CBD shop. Shop premium CBD products with same-day delivery island-wide.`,
    schemaType: "Article",
  };
}

const RAW_SLUGS: { slug: string; label: string; cat: string }[] = [
  { slug: "cbd-oil-in-sliema", label: "CBD Oil in Sliema", cat: "Location" },
  { slug: "cbd-oil-in-gzira", label: "CBD Oil in Gzira", cat: "Location" },
  { slug: "cbd-oil-in-mellieha", label: "CBD Oil in Mellieha", cat: "Location" },
  { slug: "cbd-oil-in-bugibba", label: "CBD Oil in Bugibba", cat: "Location" },
  { slug: "cbd-oil-in-valletta", label: "CBD Oil in Valletta", cat: "Location" },
  { slug: "cbd-flower-in-sliema", label: "CBD Flower in Sliema", cat: "Location" },
  { slug: "cbd-flower-in-gzira", label: "CBD Flower in Gzira", cat: "Location" },
  { slug: "cbd-flower-in-mellieha", label: "CBD Flower in Mellieha", cat: "Location" },
  { slug: "cbd-flower-in-bugibba", label: "CBD Flower in Bugibba", cat: "Location" },
  { slug: "cbd-flower-in-valletta", label: "CBD Flower in Valletta", cat: "Location" },
  { slug: "cbd-vape-in-sliema", label: "CBD Vape in Sliema", cat: "Location" },
  { slug: "cbd-vape-in-gzira", label: "CBD Vape in Gzira", cat: "Location" },
  { slug: "cbd-vape-in-mellieha", label: "CBD Vape in Mellieha", cat: "Location" },
  { slug: "cbd-vape-in-bugibba", label: "CBD Vape in Bugibba", cat: "Location" },
  { slug: "cbd-vape-in-valletta", label: "CBD Vape in Valletta", cat: "Location" },
  { slug: "cbd-gummies-in-sliema", label: "CBD Gummies in Sliema", cat: "Location" },
  { slug: "cbd-gummies-in-gzira", label: "CBD Gummies in Gzira", cat: "Location" },
  { slug: "cbd-gummies-in-mellieha", label: "CBD Gummies in Mellieha", cat: "Location" },
  { slug: "cbd-gummies-in-bugibba", label: "CBD Gummies in Bugibba", cat: "Location" },
  { slug: "cbd-gummies-in-valletta", label: "CBD Gummies in Valletta", cat: "Location" },
  { slug: "cbd-hash-in-sliema", label: "CBD Hash in Sliema", cat: "Location" },
  { slug: "cbd-hash-in-gzira", label: "CBD Hash in Gzira", cat: "Location" },
  { slug: "cbd-hash-in-mellieha", label: "CBD Hash in Mellieha", cat: "Location" },
  { slug: "cbd-hash-in-bugibba", label: "CBD Hash in Bugibba", cat: "Location" },
  { slug: "cbd-hash-in-valletta", label: "CBD Hash in Valletta", cat: "Location" },
  { slug: "pre-roll-in-sliema", label: "Pre-Roll in Sliema", cat: "Location" },
  { slug: "pre-roll-in-gzira", label: "Pre-Roll in Gzira", cat: "Location" },
  { slug: "pre-roll-in-mellieha", label: "Pre-Roll in Mellieha", cat: "Location" },
  { slug: "pre-roll-in-bugibba", label: "Pre-Roll in Bugibba", cat: "Location" },
  { slug: "pre-roll-in-valletta", label: "Pre-Roll in Valletta", cat: "Location" },
  { slug: "cbd-cream-in-sliema", label: "CBD Cream in Sliema", cat: "Location" },
  { slug: "cbd-cream-in-gzira", label: "CBD Cream in Gzira", cat: "Location" },
  { slug: "cbd-cream-in-mellieha", label: "CBD Cream in Mellieha", cat: "Location" },
  { slug: "cbd-cream-in-bugibba", label: "CBD Cream in Bugibba", cat: "Location" },
  { slug: "cbd-cream-in-valletta", label: "CBD Cream in Valletta", cat: "Location" },
  { slug: "grinder-in-sliema", label: "Grinder in Sliema", cat: "Location" },
  { slug: "grinder-in-gzira", label: "Grinder in Gzira", cat: "Location" },
  { slug: "grinder-in-mellieha", label: "Grinder in Mellieha", cat: "Location" },
  { slug: "grinder-in-bugibba", label: "Grinder in Bugibba", cat: "Location" },
  { slug: "grinder-in-valletta", label: "Grinder in Valletta", cat: "Location" },
  { slug: "rolling-papers-in-sliema", label: "Rolling Papers in Sliema", cat: "Location" },
  { slug: "rolling-papers-in-gzira", label: "Rolling Papers in Gzira", cat: "Location" },
  { slug: "rolling-papers-in-mellieha", label: "Rolling Papers in Mellieha", cat: "Location" },
  { slug: "rolling-papers-in-bugibba", label: "Rolling Papers in Bugibba", cat: "Location" },
  { slug: "rolling-papers-in-valletta", label: "Rolling Papers in Valletta", cat: "Location" },
  { slug: "vaporizer-in-sliema", label: "Vaporizer in Sliema", cat: "Location" },
  { slug: "vaporizer-in-gzira", label: "Vaporizer in Gzira", cat: "Location" },
  { slug: "vaporizer-in-mellieha", label: "Vaporizer in Mellieha", cat: "Location" },
  { slug: "vaporizer-in-bugibba", label: "Vaporizer in Bugibba", cat: "Location" },
  { slug: "vaporizer-in-valletta", label: "Vaporizer in Valletta", cat: "Location" },
  { slug: "storage-box-in-sliema", label: "Storage Box in Sliema", cat: "Location" },
  { slug: "storage-box-in-gzira", label: "Storage Box in Gzira", cat: "Location" },
  { slug: "storage-box-in-mellieha", label: "Storage Box in Mellieha", cat: "Location" },
  { slug: "storage-box-in-bugibba", label: "Storage Box in Bugibba", cat: "Location" },
  { slug: "storage-box-in-valletta", label: "Storage Box in Valletta", cat: "Location" },
  { slug: "cbd-lighter-in-sliema", label: "CBD Lighter in Sliema", cat: "Location" },
  { slug: "cbd-lighter-in-gzira", label: "CBD Lighter in Gzira", cat: "Location" },
  { slug: "cbd-lighter-in-mellieha", label: "CBD Lighter in Mellieha", cat: "Location" },
  { slug: "cbd-lighter-in-bugibba", label: "CBD Lighter in Bugibba", cat: "Location" },
  { slug: "cbd-lighter-in-valletta", label: "CBD Lighter in Valletta", cat: "Location" },
  { slug: "mcw-t-shirt-in-sliema", label: "MCW T-Shirt in Sliema", cat: "Location" },
  { slug: "mcw-t-shirt-in-gzira", label: "MCW T-Shirt in Gzira", cat: "Location" },
  { slug: "mcw-t-shirt-in-mellieha", label: "MCW T-Shirt in Mellieha", cat: "Location" },
  { slug: "mcw-t-shirt-in-bugibba", label: "MCW T-Shirt in Bugibba", cat: "Location" },
  { slug: "mcw-t-shirt-in-valletta", label: "MCW T-Shirt in Valletta", cat: "Location" },
  { slug: "mcw-tshirt-in-sliema", label: "MCW T-Shirt Sliema (Alt)", cat: "Location" },
  { slug: "mcw-tshirt-in-gzira", label: "MCW T-Shirt Gzira (Alt)", cat: "Location" },
  { slug: "mcw-tshirt-in-mellieha", label: "MCW T-Shirt Mellieha (Alt)", cat: "Location" },
  { slug: "cherry-wine-in-sliema", label: "Cherry Wine in Sliema", cat: "Location" },
  { slug: "cherry-wine-in-gzira", label: "Cherry Wine in Gzira", cat: "Location" },
  { slug: "cherry-wine-in-mellieha", label: "Cherry Wine in Mellieha", cat: "Location" },
  { slug: "cherry-wine-in-bugibba", label: "Cherry Wine in Bugibba", cat: "Location" },
  { slug: "cherry-wine-in-valletta", label: "Cherry Wine in Valletta", cat: "Location" },
  { slug: "sour-space-candy-in-sliema", label: "Sour Space Candy in Sliema", cat: "Location" },
  { slug: "sour-space-candy-in-gzira", label: "Sour Space Candy in Gzira", cat: "Location" },
  { slug: "sour-space-candy-in-mellieha", label: "Sour Space Candy in Mellieha", cat: "Location" },
  { slug: "sour-space-candy-in-bugibba", label: "Sour Space Candy in Bugibba", cat: "Location" },
  { slug: "sour-space-candy-in-valletta", label: "Sour Space Candy in Valletta", cat: "Location" },
  { slug: "premium-hash-in-bugibba", label: "Premium Hash in Bugibba", cat: "Location" },
  { slug: "premium-hash-in-valletta", label: "Premium Hash in Valletta", cat: "Location" },
  { slug: "disposable-vape-in-bugibba", label: "Disposable Vape in Bugibba", cat: "Location" },
  { slug: "disposable-vape-in-valletta", label: "Disposable Vape in Valletta", cat: "Location" },
  { slug: "vape-cartridge-in-bugibba", label: "Vape Cartridge in Bugibba", cat: "Location" },
  { slug: "vape-cartridge-in-valletta", label: "Vape Cartridge in Valletta", cat: "Location" },
  { slug: "premium-oil-1000mg-in-bugibba", label: "Premium Oil 1000mg in Bugibba", cat: "Location" },
  { slug: "premium-oil-1000mg-in-valletta", label: "Premium Oil 1000mg in Valletta", cat: "Location" },
  { slug: "isolate-oil-in-bugibba", label: "Isolate Oil in Bugibba", cat: "Location" },
  { slug: "isolate-oil-in-valletta", label: "Isolate Oil in Valletta", cat: "Location" },
  { slug: "cbd-stress-relief", label: "CBD for Stress Relief", cat: "Benefits" },
  { slug: "cbd-better-sleep", label: "CBD for Better Sleep", cat: "Benefits" },
  { slug: "cbd-pain-management", label: "CBD for Pain Management", cat: "Benefits" },
  { slug: "cbd-relaxation", label: "CBD for Relaxation", cat: "Benefits" },
  { slug: "cbd-wellness", label: "CBD for Wellness", cat: "Benefits" },
  { slug: "cbd-focus", label: "CBD for Focus", cat: "Benefits" },
  { slug: "cbd-recovery", label: "CBD for Recovery", cat: "Benefits" },
  { slug: "cbd-inflammation", label: "CBD for Inflammation", cat: "Benefits" },
  { slug: "cbd-anxiety", label: "CBD for Anxiety", cat: "Benefits" },
  { slug: "cbd-energy", label: "CBD for Energy", cat: "Benefits" },
  { slug: "cbd-sliema", label: "CBD in Sliema", cat: "City" },
  { slug: "cbd-gzira", label: "CBD in Gzira", cat: "City" },
  { slug: "cbd-mellieha", label: "CBD in Mellieha", cat: "City" },
  { slug: "cbd-bugibba", label: "CBD in Bugibba", cat: "City" },
  { slug: "cbd-valletta", label: "CBD in Valletta", cat: "City" },
  { slug: "how-to-use-cbd-oil", label: "How to Use CBD Oil", cat: "Guides" },
  { slug: "how-to-smoke-cbd-flower", label: "How to Smoke CBD Flower", cat: "Guides" },
  { slug: "how-to-vape-cbd", label: "How to Vape CBD", cat: "Guides" },
  { slug: "cbd-dosage-guide", label: "CBD Dosage Guide", cat: "Guides" },
  { slug: "cbd-for-beginners", label: "CBD for Beginners", cat: "Guides" },
  { slug: "best-time-to-take-cbd", label: "Best Time to Take CBD", cat: "Guides" },
  { slug: "cbd-vs-thc", label: "CBD vs THC", cat: "Guides" },
  { slug: "is-cbd-legal-in-malta", label: "Is CBD Legal in Malta?", cat: "Guides" },
  { slug: "cbd-side-effects", label: "CBD Side Effects", cat: "Guides" },
  { slug: "cbd-drug-interactions", label: "CBD Drug Interactions", cat: "Guides" },
  { slug: "how-long-does-cbd-last", label: "How Long Does CBD Last?", cat: "Guides" },
  { slug: "cbd-storage-tips", label: "CBD Storage Tips", cat: "Guides" },
  { slug: "cbd-quality-guide", label: "CBD Quality Guide", cat: "Guides" },
  { slug: "lab-testing-explained", label: "Lab Testing Explained", cat: "Guides" },
  { slug: "mcw-cbd-shop-story", label: "MCW CBD Shop Story", cat: "About" },
  { slug: "cbd-trends-2024", label: "CBD Trends 2024", cat: "About" },
  { slug: "cbd-and-fitness", label: "CBD and Fitness", cat: "Lifestyle" },
  { slug: "cbd-and-wellness", label: "CBD and Wellness", cat: "Lifestyle" },
  { slug: "natural-relaxation-methods", label: "Natural Relaxation Methods", cat: "Lifestyle" },
  { slug: "cbd-for-professionals", label: "CBD for Professionals", cat: "Lifestyle" },
  { slug: "cbd-and-travel", label: "CBD and Travel", cat: "Lifestyle" },
  { slug: "understanding-cannabinoids", label: "Understanding Cannabinoids", cat: "Education" },
  { slug: "hemp-vs-cannabis", label: "Hemp vs Cannabis", cat: "Education" },
  { slug: "cbd-myths-debunked", label: "CBD Myths Debunked", cat: "Education" },
  { slug: "terpenes-explained", label: "Terpenes Explained", cat: "Education" },
  { slug: "full-spectrum-vs-isolate", label: "Full Spectrum vs Isolate", cat: "Education" },
  { slug: "cbd-extraction-methods", label: "CBD Extraction Methods", cat: "Education" },
  { slug: "supporting-local-cbd-shops", label: "Supporting Local CBD Shops", cat: "About" },
  { slug: "cbd-community-stories", label: "CBD Community Stories", cat: "About" },
  { slug: "future-of-cbd-in-malta", label: "Future of CBD in Malta", cat: "About" },
  { slug: "cbd-vape-vs-grinder", label: "CBD Vape vs Grinder", cat: "Comparisons" },
  { slug: "premium-hash-vs-cbd-lighter", label: "Premium Hash vs CBD Lighter", cat: "Comparisons" },
  { slug: "pre-roll-vs-cbd-flower", label: "Pre-Roll vs CBD Flower", cat: "Comparisons" },
  { slug: "cbd-oil-vs-cherry-wine", label: "CBD Oil vs Cherry Wine", cat: "Comparisons" },
  { slug: "vape-cartridge-vs-disposable-vape", label: "Vape Cartridge vs Disposable Vape", cat: "Comparisons" },
  { slug: "cherry-wine-vs-cbd-lighter", label: "Cherry Wine vs CBD Lighter", cat: "Comparisons" },
  { slug: "cbd-flower-vs-cbd-cream", label: "CBD Flower vs CBD Cream", cat: "Comparisons" },
  { slug: "isolate-oil-vs-cbd-hash", label: "Isolate Oil vs CBD Hash", cat: "Comparisons" },
  { slug: "cbd-gummies-vs-premium-hash", label: "CBD Gummies vs Premium Hash", cat: "Comparisons" },
  { slug: "sour-space-candy-vs-isolate-oil", label: "Sour Space Candy vs Isolate Oil", cat: "Comparisons" },
  { slug: "premium-hash-vs-disposable-vape", label: "Premium Hash vs Disposable Vape", cat: "Comparisons" },
  { slug: "mcw-t-shirt-vs-premium-hash", label: "MCW T-Shirt vs Premium Hash", cat: "Comparisons" },
  { slug: "rolling-papers-vs-mcw-t-shirt", label: "Rolling Papers vs MCW T-Shirt", cat: "Comparisons" },
  { slug: "pre-roll-vs-vape-cartridge", label: "Pre-Roll vs Vape Cartridge", cat: "Comparisons" },
  { slug: "premium-oil-1000mg-vs-cbd-hash", label: "Premium Oil 1000mg vs CBD Hash", cat: "Comparisons" },
  { slug: "disposable-vape-vs-vape-cartridge", label: "Disposable Vape vs Vape Cartridge", cat: "Comparisons" },
  { slug: "premium-hash-vs-cbd-vape", label: "Premium Hash vs CBD Vape", cat: "Comparisons" },
  { slug: "cbd-lighter-vs-cbd-oil", label: "CBD Lighter vs CBD Oil", cat: "Comparisons" },
  { slug: "cbd-vape-vs-cbd-flower", label: "CBD Vape vs CBD Flower", cat: "Comparisons" },
  { slug: "cbd-lighter-vs-cbd-cream", label: "CBD Lighter vs CBD Cream", cat: "Comparisons" },
  { slug: "pre-roll-vs-sour-space-candy", label: "Pre-Roll vs Sour Space Candy", cat: "Comparisons" },
  { slug: "premium-hash-vs-cbd-cream", label: "Premium Hash vs CBD Cream", cat: "Comparisons" },
  { slug: "cbd-cream-vs-cbd-vape", label: "CBD Cream vs CBD Vape", cat: "Comparisons" },
  { slug: "cbd-lighter-vs-disposable-vape", label: "CBD Lighter vs Disposable Vape", cat: "Comparisons" },
  { slug: "vape-cartridge-vs-sour-space-candy", label: "Vape Cartridge vs Sour Space Candy", cat: "Comparisons" },
  { slug: "disposable-vape-vs-premium-hash", label: "Disposable Vape vs Premium Hash", cat: "Comparisons" },
  { slug: "cbd-oil-vs-premium-hash", label: "CBD Oil vs Premium Hash", cat: "Comparisons" },
  { slug: "premium-hash-vs-cbd-oil", label: "Premium Hash vs CBD Oil", cat: "Comparisons" },
  { slug: "storage-box-vs-disposable-vape", label: "Storage Box vs Disposable Vape", cat: "Comparisons" },
  { slug: "vape-cartridge-vs-cbd-flower", label: "Vape Cartridge vs CBD Flower", cat: "Comparisons" },
];

export const SEO_PAGES: SeoPage[] = RAW_SLUGS.map(({ slug, label, cat }) => {
  const { title, metaDescription, schemaType } = generateMeta(slug, label, cat);
  return { slug, label, cat, title, metaDescription, schemaType };
});

export const SEO_PAGES_BY_SLUG: Record<string, SeoPage> = Object.fromEntries(
  SEO_PAGES.map((p) => [p.slug, p])
);

export const SEO_PAGE_CATS = ["All", "Location", "Benefits", "City", "Guides", "Education", "Comparisons", "Lifestyle", "About"] as const;
