export type SchemaType = "LocalBusiness" | "Article";

export interface SeoPage {
  slug: string;
  label: string;
  cat: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  bodyParagraphs: string[];
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

function parseLocationSlug(slug: string): { product: string; location: string; productKey: string } | null {
  for (const loc of Object.keys(LOCATION_NAMES)) {
    if (slug.endsWith(`-in-${loc}`)) {
      const productKey = slug.replace(`-in-${loc}`, "");
      return {
        product: PRODUCT_NAMES[productKey] ?? productKey.replace(/-/g, " "),
        location: LOCATION_NAMES[loc],
        productKey,
      };
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

function buildLocationContent(product: string, location: string): { h1: string; intro: string; bodyParagraphs: string[] } {
  return {
    h1: `Buy ${product} in ${location}, Malta`,
    intro: `Looking for ${product} in ${location}? MCW CBD Relax Shop is ${location}'s #1 destination for premium CBD products. Open daily until 11:30 pm, we carry a full range of lab-tested CBD products including oils, flowers, vapes, gummies, and accessories.`,
    bodyParagraphs: [
      `Our ${product.toLowerCase()} selection in ${location} includes products from Malta's most trusted brands. Every product is independently lab-tested and contains less than 0.2% THC, making them fully legal to purchase and use in Malta.`,
      `Whether you're new to CBD or an experienced user, our knowledgeable staff at the ${location} store can help you find the right product and dosage. We provide personalised recommendations based on your needs and lifestyle.`,
      `Can't make it to our ${location} store? Order via WhatsApp and get same-day delivery anywhere in ${location} and across Malta. Contact us at 9953 6248 for orders and expert advice.`,
      `MCW has served the ${location} community since 2021, building a reputation for quality, transparency, and exceptional customer service. All our products come with full lab reports so you know exactly what you're buying.`,
    ],
  };
}

function buildCityContent(city: string): { h1: string; intro: string; bodyParagraphs: string[] } {
  return {
    h1: `CBD Shop in ${city}, Malta — MCW CBD Relax Shop`,
    intro: `MCW CBD Relax Shop is ${city}'s premier CBD and hemp accessories destination. With a full range of CBD oils, flowers, vapes, hash, gummies, and lifestyle accessories, we have everything you need for a relaxed lifestyle.`,
    bodyParagraphs: [
      `Our ${city} customers enjoy access to Malta's widest selection of premium CBD products, all independently lab-tested and 100% legal. From starter kits to premium oils, we cater to every budget and experience level.`,
      `MCW CBD Relax Shop serves ${city} with both in-store shopping and same-day WhatsApp delivery. Our store is open daily until 11:30 pm so you can shop when it suits you.`,
      `Every MCW product is sourced from trusted EU hemp farms and tested by independent laboratories. You'll always find the lab report for any product you're interested in — we believe in full transparency.`,
      `Join thousands of satisfied customers in ${city} who trust MCW for their CBD needs. Whether you're managing stress, improving sleep, or simply looking for natural wellness solutions, we're here to help.`,
    ],
  };
}

function buildBenefitContent(label: string): { h1: string; intro: string; bodyParagraphs: string[] } {
  const benefit = label.replace("CBD for ", "").replace("CBD For ", "");
  return {
    h1: `${label} — Malta's Best CBD Products`,
    intro: `Many people turn to CBD as a natural approach to supporting ${benefit.toLowerCase()}. At MCW CBD Relax Shop, we stock Malta's finest CBD products specifically chosen to support your wellness goals.`,
    bodyParagraphs: [
      `CBD (Cannabidiol) interacts with the body's endocannabinoid system, which plays a role in regulating many bodily functions. Research into CBD's potential benefits for ${benefit.toLowerCase()} is ongoing, with many users reporting positive experiences.`,
      `MCW carries a range of CBD formats that users find helpful for ${benefit.toLowerCase()}: CBD oils for precise dosing, CBD flowers for relaxation, vapes for fast-acting relief, and gummies for convenient daily use.`,
      `All MCW CBD products are independently lab-tested, contain less than 0.2% THC, and are fully legal in Malta. Our knowledgeable team can help you choose the right product and dosage for your needs.`,
      `Important: CBD is not intended to diagnose, treat, cure, or prevent any disease. Always consult a healthcare professional before adding CBD to your wellness routine, especially if you take medication.`,
    ],
  };
}

function buildComparisonContent(label: string): { h1: string; intro: string; bodyParagraphs: string[] } {
  const [a, b] = label.split(" vs ").map((s) => s.trim());
  return {
    h1: `${a} vs ${b} — Which is Right for You?`,
    intro: `Choosing between ${a} and ${b} can be confusing, especially if you're new to CBD. This guide from MCW CBD Relax Shop breaks down the key differences to help you make the right choice for your lifestyle.`,
    bodyParagraphs: [
      `${a} and ${b} are both popular products available at all four MCW CBD Relax Shop locations (Sliema, Gzira, Mellieha, Bugibba). The best choice depends on your personal preferences, desired effects, and how you prefer to use CBD.`,
      `When comparing ${a} and ${b}, consider factors like onset time, duration, ease of use, and your daily routine. Both options have their merits: some customers love the convenience of one, while others prefer the experience of the other. Our staff can walk you through the differences in person.`,
      `At MCW, we carry both ${a} and ${b} from Malta's most trusted CBD brands. All products are independently lab-tested, contain less than 0.2% THC, and are fully legal under Malta's current regulations.`,
      `Not sure which to choose? Visit any MCW CBD Relax Shop or contact us on WhatsApp at 9953 6248 — our knowledgeable team will help you find the perfect product for your needs and budget.`,
    ],
  };
}

function buildGuideContent(label: string): { h1: string; intro: string; bodyParagraphs: string[] } {
  return {
    h1: `${label} — Complete Guide for Malta`,
    intro: `${label}: your complete guide from MCW CBD Relax Shop, Malta's #1 CBD destination. Whether you're a first-time CBD user or an experienced enthusiast, this guide has everything you need to know.`,
    bodyParagraphs: [
      `Understanding ${label.toLowerCase()} is essential for getting the most out of your CBD experience. At MCW, we're committed to educating our customers so they can make informed, confident decisions.`,
      `Malta's CBD regulations allow adults to purchase and use CBD products containing less than 0.2% THC. All MCW products are fully compliant and independently lab-tested, giving you complete peace of mind.`,
      `If you have specific questions about ${label.toLowerCase()}, our expert team at MCW is available in-store at all four locations (Sliema, Gzira, Mellieha, Bugibba) or via WhatsApp at 9953 6248.`,
      `MCW CBD Relax Shop has been Malta's trusted CBD destination since 2021. We combine premium product selection with expert knowledge to help every customer find the right solution.`,
    ],
  };
}

function buildEducationContent(label: string): { h1: string; intro: string; bodyParagraphs: string[] } {
  return {
    h1: `${label} — CBD Education Guide`,
    intro: `${label}: an educational guide from MCW, Malta's leading CBD experts. We believe informed customers are happy customers, so we take pride in sharing accurate, evidence-based information about CBD.`,
    bodyParagraphs: [
      `The CBD industry is rapidly evolving, and understanding the science behind ${label.toLowerCase()} helps you make better purchasing decisions. At MCW, we only stock products that meet our strict quality standards.`,
      `Whether you're exploring CBD for the first time or deepening your knowledge, understanding ${label.toLowerCase()} is a valuable step on your wellness journey. Malta's CBD market has grown significantly, and quality education is more important than ever.`,
      `All MCW CBD products are sourced from EU-certified hemp farms and tested by independent laboratories. We provide full transparency on cannabinoid content, terpene profiles, and compliance with Malta's legal THC limits.`,
      `Have more questions about ${label.toLowerCase()}? Visit any of our four MCW stores in Sliema, Gzira, Mellieha, or Bugibba, or reach out on WhatsApp at 9953 6248.`,
    ],
  };
}

function buildLifestyleContent(label: string): { h1: string; intro: string; bodyParagraphs: string[] } {
  return {
    h1: `${label} — CBD Lifestyle Guide`,
    intro: `${label}: a lifestyle guide from MCW, Malta's #1 CBD destination. Integrating CBD into your daily routine can be a powerful step toward a more balanced, relaxed, and fulfilling lifestyle.`,
    bodyParagraphs: [
      `${label} is a topic many MCW customers ask about. Our team has helped hundreds of Maltese residents incorporate CBD into their lifestyle in a way that works for them.`,
      `The key to a successful CBD lifestyle is finding the right products and routines. MCW offers everything from fast-acting vapes and flowers to long-lasting oils and gummies — each suited to different moments and preferences.`,
      `Malta's warm climate and vibrant culture make it an ideal place to explore wellness trends like CBD. MCW CBD Relax Shop is proud to serve the Maltese community from four convenient locations across the island.`,
      `Ready to start your CBD lifestyle journey? Visit an MCW store in Sliema, Gzira, Mellieha, or Bugibba, or order via WhatsApp at 9953 6248 for same-day island-wide delivery.`,
    ],
  };
}

function buildAboutContent(label: string): { h1: string; intro: string; bodyParagraphs: string[] } {
  return {
    h1: `${label} — MCW CBD Relax Shop`,
    intro: `${label}: learn more about MCW CBD Relax Shop, Malta's #1 hemp and CBD destination. Since opening in 2021, we've grown into a trusted community institution with four locations across Malta.`,
    bodyParagraphs: [
      `MCW CBD Relax Shop was founded with a simple mission: to provide Maltese residents with access to premium, lab-tested CBD products and the education they need to use them confidently.`,
      `Today, MCW operates four stores in Sliema, Gzira, Mellieha, and Bugibba — serving customers from all walks of life, from wellness enthusiasts to curious first-timers. All stores are open daily until 11:30 pm.`,
      `We partner only with brands that share our commitment to quality, transparency, and legal compliance. Every product on our shelves has been reviewed, tested, and approved by our team before it reaches you.`,
      `${label} is a story of community, quality, and passion. Thank you for being part of the MCW family. Visit us in-store or reach out on WhatsApp at 9953 6248 to learn more.`,
    ],
  };
}

function generatePageContent(slug: string, label: string, cat: string): {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  bodyParagraphs: string[];
  schemaType: SchemaType;
} {
  if (cat === "Location") {
    const parsed = parseLocationSlug(slug);
    if (parsed) {
      const { product, location } = parsed;
      const { h1, intro, bodyParagraphs } = buildLocationContent(product, location);
      return {
        title: `${product} in ${location} Malta — MCW CBD Shop`,
        metaDescription: `Buy ${product} in ${location}, Malta at MCW CBD Relax Shop. Premium quality, lab-tested, 100% legal. Same-day delivery or visit our ${location} store. Open daily until 11:30 pm.`,
        h1,
        intro,
        bodyParagraphs,
        schemaType: "LocalBusiness",
      };
    }
  }

  if (cat === "City") {
    const city = parseCitySlug(slug);
    if (city) {
      const { h1, intro, bodyParagraphs } = buildCityContent(city);
      return {
        title: `CBD in ${city}, Malta — MCW CBD Relax Shop`,
        metaDescription: `Looking for CBD in ${city}? MCW CBD Relax Shop is ${city}'s #1 CBD destination. Shop oils, flowers, vapes, gummies, and more. Open daily until 11:30 pm. Same-day delivery.`,
        h1,
        intro,
        bodyParagraphs,
        schemaType: "LocalBusiness",
      };
    }
  }

  if (cat === "Benefits") {
    const { h1, intro, bodyParagraphs } = buildBenefitContent(label);
    const benefit = label.replace("CBD for ", "").replace("CBD For ", "");
    return {
      title: `${label} — CBD Products Malta | MCW`,
      metaDescription: `Discover how CBD can help with ${benefit.toLowerCase()}. Shop Malta's best CBD products at MCW — lab-tested, 100% legal, same-day island-wide delivery.`,
      h1,
      intro,
      bodyParagraphs,
      schemaType: "Article",
    };
  }

  if (cat === "Comparisons") {
    const { h1, intro, bodyParagraphs } = buildComparisonContent(label);
    return {
      title: `${label} — CBD Comparison Guide Malta | MCW`,
      metaDescription: `${label}: complete comparison guide from MCW, Malta's #1 CBD shop. Find the right CBD product for your needs. Expert advice, honest reviews.`,
      h1,
      intro,
      bodyParagraphs,
      schemaType: "Article",
    };
  }

  if (cat === "Education") {
    const { h1, intro, bodyParagraphs } = buildEducationContent(label);
    return {
      title: `${label} — CBD Education Guide | MCW Malta`,
      metaDescription: `${label}: complete educational guide from MCW, Malta's leading CBD experts. Everything you need to know about CBD in Malta.`,
      h1,
      intro,
      bodyParagraphs,
      schemaType: "Article",
    };
  }

  if (cat === "Lifestyle") {
    const { h1, intro, bodyParagraphs } = buildLifestyleContent(label);
    return {
      title: `${label} — CBD Lifestyle Guide | MCW Malta`,
      metaDescription: `${label}: lifestyle guide from MCW, Malta's #1 CBD destination. Premium CBD products for a better lifestyle. Same-day delivery island-wide.`,
      h1,
      intro,
      bodyParagraphs,
      schemaType: "Article",
    };
  }

  if (cat === "About") {
    const { h1, intro, bodyParagraphs } = buildAboutContent(label);
    return {
      title: `${label} — MCW CBD Relax Shop Malta`,
      metaDescription: `${label}: learn more about MCW CBD Relax Shop, Malta's #1 hemp and CBD destination with 4 stores in Sliema, Gzira, Mellieha, and Bugibba.`,
      h1,
      intro,
      bodyParagraphs,
      schemaType: "Article",
    };
  }

  const { h1, intro, bodyParagraphs } = buildGuideContent(label);
  return {
    title: `${label} — CBD Guide Malta | MCW`,
    metaDescription: `${label}: expert CBD guide from MCW, Malta's #1 CBD shop. Shop premium CBD products with same-day delivery island-wide.`,
    h1,
    intro,
    bodyParagraphs,
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
  { slug: "how-to-use-cbd-flower", label: "How to Use CBD Flower", cat: "Guides" },
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
  const { title, metaDescription, h1, intro, bodyParagraphs, schemaType } = generatePageContent(slug, label, cat);
  return { slug, label, cat, title, metaDescription, h1, intro, bodyParagraphs, schemaType };
});

export const SEO_PAGES_BY_SLUG: Record<string, SeoPage> = Object.fromEntries(
  SEO_PAGES.map((p) => [p.slug, p])
);

export const SEO_PAGE_CATS = ["All", "Location", "Benefits", "City", "Guides", "Education", "Comparisons", "Lifestyle", "About"] as const;
