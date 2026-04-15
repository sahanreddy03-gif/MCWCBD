/**
 * MCW CBD Relax Shop - Static HTML Prerender Script
 * Runs after vite build. For every URL, generates a proper index.html
 * with correct title, meta description, canonical URL, and JSON-LD schema
 * already in the HTML - readable by Google without JavaScript.
 *
 * Usage: node prerender.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "dist/public");
const BASE = "https://mcwcbd.com";

if (!fs.existsSync(DIST)) {
  console.error("dist/public/ not found. Run vite build first.");
  process.exit(1);
}

const template = fs.readFileSync(path.join(DIST, "index.html"), "utf-8");

function slugToLabel(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
    .replace(/\bCbd\b/g, "CBD")
    .replace(/\bThc\b/g, "THC")
    .replace(/\bMcw\b/g, "MCW")
    .replace(/\bH4cbd\b/g, "H4CBD")
    .replace(/\bHhc\b/g, "HHC");
}

function breadcrumb(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function injectHead(html, { title, description, canonical, extraSchema }) {
  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/, "<title>" + title + "</title>");
  out = out.replace(
    /<meta name="description" content="[^"]*"/,
    "<meta name=\"description\" content=\"" + description.replace(/"/g, "&quot;") + "\""
  );
  out = out.replace(
    /<link rel="canonical" href="[^"]*"/,
    "<link rel=\"canonical\" href=\"" + canonical + "\""
  );
  out = out.replace(
    /<meta property="og:url" content="[^"]*"/,
    "<meta property=\"og:url\" content=\"" + canonical + "\""
  );
  out = out.replace(
    /<meta property="og:title" content="[^"]*"/,
    "<meta property=\"og:title\" content=\"" + title.replace(/"/g, "&quot;") + "\""
  );
  out = out.replace(
    /<meta property="og:description" content="[^"]*"/,
    "<meta property=\"og:description\" content=\"" + description.replace(/"/g, "&quot;") + "\""
  );
  if (extraSchema) {
    const tag =
      "<script type=\"application/ld+json\">" +
      JSON.stringify(extraSchema) +
      "</script>";
    out = out.replace("</head>", "  " + tag + "\n  </head>");
  }
  return out;
}

function save(urlPath, html) {
  const isRoot = urlPath === "/";
  const filePath = isRoot
    ? path.join(DIST, "index.html")
    : path.join(DIST, urlPath.replace(/^\//, ""), "index.html");
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, html, "utf-8");
}

const corePages = [
  {
    path: "/",
    title: "MCW - Malta No.1 CBD and Hemp Shop",
    description: "MCW CBD Relax Shop - Malta No.1 hemp and CBD destination. 5 stores: Sliema, Gzira, Mellieha, Bugibba, Valletta. Shop premium CBD oils, flowers, vapes, gummies. Same-day delivery.",
  },
  {
    path: "/shop",
    title: "Shop CBD Products Malta | MCW CBD",
    description: "Browse 68+ premium CBD products: oils, flowers, pre-rolls, vapes, gummies, hash and more. All lab-tested, under 0.2% THC, fully legal in Malta. MCW - Malta No.1 CBD shop.",
    schema: breadcrumb([{ name: "Home", url: BASE + "/" }, { name: "Shop", url: BASE + "/shop" }]),
  },
  {
    path: "/brands",
    title: "CBD Brands Malta | Canntropy, Euphoria, Jeeter and More | MCW",
    description: "Shop the best CBD brands in Malta: Canntropy, Euphoria, Hemnia, Jeeter, Tyson 2.0, Storz and Bickel and MCW Originals. Only at MCW CBD Relax Shop.",
    schema: breadcrumb([{ name: "Home", url: BASE + "/" }, { name: "Brands", url: BASE + "/brands" }]),
  },
  {
    path: "/about",
    title: "About MCW CBD Relax Shop | Malta No.1 Hemp Destination",
    description: "Learn about MCW CBD Relax Shop - Malta leading hemp and CBD retailer with 5 stores across Malta. Our story, mission, and commitment to quality.",
    schema: breadcrumb([{ name: "Home", url: BASE + "/" }, { name: "About", url: BASE + "/about" }]),
  },
  {
    path: "/trust",
    title: "Why Trust MCW CBD | Lab Testing, Compliance and Quality",
    description: "Every MCW product is third-party lab tested for potency, purity, and safety. 100% compliant with Maltese law. Certificate of Analysis available on request.",
    schema: breadcrumb([{ name: "Home", url: BASE + "/" }, { name: "Trust and Safety", url: BASE + "/trust" }]),
  },
  {
    path: "/store-locator",
    title: "CBD Stores in Malta | Find MCW Near You",
    description: "Find your nearest MCW CBD store: Sliema (Triq Bisazza), Gzira (Manuel Dimech St), Mellieha, Bugibba Square, and Valletta. Open daily 09:00 to 23:30.",
    schema: breadcrumb([{ name: "Home", url: BASE + "/" }, { name: "Store Locator", url: BASE + "/store-locator" }]),
  },
  {
    path: "/contact",
    title: "Contact MCW CBD Malta | WhatsApp +356 9953 6248",
    description: "Get in touch with MCW CBD Relax Shop. WhatsApp us at +356 9953 6248 for orders, delivery, or questions. Open daily until 23:30.",
    schema: breadcrumb([{ name: "Home", url: BASE + "/" }, { name: "Contact", url: BASE + "/contact" }]),
  },
  {
    path: "/faq",
    title: "CBD FAQ Malta | Common Questions Answered | MCW",
    description: "Is CBD legal in Malta? What is the difference between CBD and THC? How to use CBD? Find answers to all CBD questions at MCW CBD Relax Shop.",
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        breadcrumb([{ name: "Home", url: BASE + "/" }, { name: "FAQ", url: BASE + "/faq" }]),
        {
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Is CBD legal in Malta?", acceptedAnswer: { "@type": "Answer", text: "Yes. CBD products with less than 0.2% THC are fully legal in Malta. Every MCW product complies with this regulation." } },
            { "@type": "Question", name: "Where can I buy CBD in Malta?", acceptedAnswer: { "@type": "Answer", text: "MCW CBD Relax Shop has 5 stores across Malta: Sliema, Gzira, Mellieha, Bugibba, and Valletta. Same-day delivery island-wide via WhatsApp." } },
            { "@type": "Question", name: "Does MCW deliver CBD in Malta?", acceptedAnswer: { "@type": "Answer", text: "Yes. Order via WhatsApp (+356 9953 6248) for same-day delivery across Malta. Free delivery on orders over 50 euros." } },
            { "@type": "Question", name: "Will CBD products make me high?", acceptedAnswer: { "@type": "Answer", text: "No. Our products contain less than 0.2% THC - not nearly enough to produce any psychoactive effect." } },
            { "@type": "Question", name: "Are your products lab-tested?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every MCW product has third-party lab reports verifying cannabinoid profiles, potency, pesticides, heavy metals, and purity." } },
          ],
        },
      ],
    },
  },
  {
    path: "/blog",
    title: "CBD Blog Malta | Expert Guides and News | MCW",
    description: "Read expert articles on CBD in Malta: legality, product guides, wellness tips, store news, and more. 13 in-depth articles from MCW CBD Relax Shop.",
    schema: breadcrumb([{ name: "Home", url: BASE + "/" }, { name: "Blog", url: BASE + "/blog" }]),
  },
  {
    path: "/guides",
    title: "CBD Guides Malta | Product and Location Guides | MCW",
    description: "164 expert guides covering CBD products and locations across Malta. Find the right CBD oil, flower, vape or gummy in Sliema, Gzira, Mellieha, Bugibba, and Valletta.",
    schema: breadcrumb([{ name: "Home", url: BASE + "/" }, { name: "Guides", url: BASE + "/guides" }]),
  },
  {
    path: "/b2b",
    title: "CBD Wholesale Malta | B2B Supplier | MCW CBD",
    description: "MCW CBD Relax Shop offers wholesale CBD supply for retailers, hotels, spas, and gyms across Malta. Competitive pricing, premium brands, full compliance.",
    schema: breadcrumb([{ name: "Home", url: BASE + "/" }, { name: "Wholesale", url: BASE + "/b2b" }]),
  },
  {
    path: "/compliance",
    title: "CBD Compliance Malta | Legal Information | MCW",
    description: "Full legal and compliance information for CBD products sold at MCW in Malta. EU Directive 2019/515, Maltese law, THC limits, and more.",
    schema: breadcrumb([{ name: "Home", url: BASE + "/" }, { name: "Compliance", url: BASE + "/compliance" }]),
  },
  {
    path: "/terms",
    title: "Terms and Conditions | MCW CBD Relax Shop Malta",
    description: "Terms and conditions for using MCW CBD Relax Shop website and purchasing CBD products in Malta.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | MCW CBD Relax Shop Malta",
    description: "Privacy policy for MCW CBD Relax Shop Malta. How we collect, use, and protect your personal data.",
  },
];

const blogPosts = [
  { slug: "is-cbd-legal-in-malta", title: "Is CBD Legal in Malta? Complete 2025 Guide", desc: "Everything you need to know about CBD legality in Malta. EU regulations, THC limits, what you can and cannot buy. Updated 2025." },
  { slug: "cbd-vs-thc-guide", title: "CBD vs THC: What Is the Difference? | MCW Malta", desc: "Understand the difference between CBD and THC. Effects, legality in Malta, how to choose the right product for you." },
  { slug: "how-to-choose-cbd-oil", title: "How to Choose the Right CBD Oil | MCW Malta Guide", desc: "Full spectrum vs broad spectrum vs isolate. Dosage, strength, and what to look for when buying CBD oil in Malta." },
  { slug: "cbd-flowers-guide-malta", title: "CBD Flowers Guide Malta | How to Use Hemp Flower", desc: "The complete guide to CBD flowers in Malta. Strains, effects, how to use, and where to buy. MCW stocks the widest range." },
  { slug: "mcw-cbd-story-malta", title: "The MCW CBD Story | Malta No.1 Hemp Shop", desc: "How MCW became Malta leading CBD destination. Our story, mission, and commitment to quality hemp products." },
  { slug: "cbd-for-sleep-guide", title: "CBD for Sleep: Does It Work? | Malta Guide", desc: "Can CBD help you sleep? Evidence, products, dosage, and tips from Malta CBD experts at MCW Relax Shop." },
  { slug: "best-cbd-products-malta-2025", title: "Best CBD Products in Malta 2025 | MCW Top Picks", desc: "The best CBD oils, flowers, vapes, and gummies available in Malta in 2025. Expert picks from MCW CBD Relax Shop." },
  { slug: "how-to-use-cbd-vapes", title: "How to Use CBD Vapes | Beginner Guide Malta", desc: "Step-by-step guide to using CBD vapes in Malta. Types of vapes, how to inhale, dosage, and safety tips from MCW." },
  { slug: "cbd-gummies-guide-malta", title: "CBD Gummies Malta | Complete Buyer Guide", desc: "Everything about CBD gummies in Malta. Effects, dosage, brands, and where to buy. MCW stocks the best selection." },
  { slug: "cbd-shop-sliema-malta", title: "CBD Shop Sliema Malta | MCW Triq Bisazza", desc: "Visit MCW CBD Relax Shop in Sliema at Triq Bisazza SLM 1641. Malta best CBD products. Open daily 09:00 to 23:30." },
  { slug: "cbd-shop-gzira-malta", title: "CBD Shop Gzira Malta | MCW 348 Manuel Dimech St", desc: "Visit MCW CBD Relax Shop in Gzira at 348 Manuel Dimech Street. Full range of CBD products. Open daily until 23:30." },
  { slug: "cbd-shop-mellieha-malta", title: "CBD Shop Mellieha Malta | MCW Triq Gorg Borg Olivier", desc: "MCW CBD Relax Shop in Mellieha - your local CBD destination. Oils, flowers, vapes and more. Open daily 09:00 to 23:30." },
  { slug: "cbd-shop-bugibba-malta", title: "CBD Shop Bugibba Malta | MCW Bugibba Square", desc: "Visit MCW CBD Relax Shop at Bugibba Square, SPB 2510. Premium CBD products in the heart of Bugibba. Open daily." },
];

const guidePages = [
  "best-time-to-take-cbd","cbd-and-fitness","cbd-and-travel","cbd-and-wellness","cbd-anxiety",
  "cbd-better-sleep","cbd-bugibba","cbd-community-stories","cbd-cream-in-bugibba","cbd-cream-in-gzira",
  "cbd-cream-in-mellieha","cbd-cream-in-sliema","cbd-cream-in-valletta","cbd-cream-vs-cbd-vape",
  "cbd-dosage-guide","cbd-drug-interactions","cbd-energy","cbd-extraction-methods",
  "cbd-flower-in-bugibba","cbd-flower-in-gzira","cbd-flower-in-mellieha","cbd-flower-in-sliema",
  "cbd-flower-in-valletta","cbd-flower-vs-cbd-cream","cbd-focus","cbd-for-beginners",
  "cbd-for-professionals","cbd-gummies-in-bugibba","cbd-gummies-in-gzira","cbd-gummies-in-mellieha",
  "cbd-gummies-in-sliema","cbd-gummies-in-valletta","cbd-gummies-vs-premium-hash","cbd-gzira",
  "cbd-hash-in-bugibba","cbd-hash-in-gzira","cbd-hash-in-mellieha","cbd-hash-in-sliema",
  "cbd-hash-in-valletta","cbd-inflammation","cbd-lighter-in-bugibba","cbd-lighter-in-gzira",
  "cbd-lighter-in-mellieha","cbd-lighter-in-sliema","cbd-lighter-in-valletta","cbd-lighter-vs-cbd-cream",
  "cbd-lighter-vs-cbd-oil","cbd-lighter-vs-disposable-vape","cbd-mellieha","cbd-myths-debunked",
  "cbd-oil-in-bugibba","cbd-oil-in-gzira","cbd-oil-in-mellieha","cbd-oil-in-sliema","cbd-oil-in-valletta",
  "cbd-oil-vs-cherry-wine","cbd-oil-vs-premium-hash","cbd-pain-management","cbd-quality-guide",
  "cbd-recovery","cbd-relaxation","cbd-side-effects","cbd-sliema","cbd-storage-tips",
  "cbd-stress-relief","cbd-trends-2024","cbd-valletta","cbd-vape-in-bugibba","cbd-vape-in-gzira",
  "cbd-vape-in-mellieha","cbd-vape-in-sliema","cbd-vape-in-valletta","cbd-vape-vs-cbd-flower",
  "cbd-vape-vs-grinder","cbd-vs-thc","cbd-wellness","cherry-wine-in-bugibba","cherry-wine-in-gzira",
  "cherry-wine-in-mellieha","cherry-wine-in-sliema","cherry-wine-in-valletta","cherry-wine-vs-cbd-lighter",
  "disposable-vape-in-bugibba","disposable-vape-in-valletta","disposable-vape-vs-premium-hash",
  "disposable-vape-vs-vape-cartridge","full-spectrum-vs-isolate","future-of-cbd-in-malta",
  "grinder-in-bugibba","grinder-in-gzira","grinder-in-mellieha","grinder-in-sliema","grinder-in-valletta",
  "hemp-vs-cannabis","how-long-does-cbd-last","how-to-smoke-cbd-flower","how-to-use-cbd-flower",
  "how-to-use-cbd-oil","how-to-vape-cbd","is-cbd-legal-in-malta","isolate-oil-in-bugibba",
  "isolate-oil-in-valletta","isolate-oil-vs-cbd-hash","lab-testing-explained","mcw-cbd-shop-story",
  "mcw-t-shirt-in-bugibba","mcw-t-shirt-in-gzira","mcw-tshirt-in-gzira","mcw-t-shirt-in-mellieha",
  "mcw-tshirt-in-mellieha","mcw-t-shirt-in-sliema","mcw-tshirt-in-sliema","mcw-t-shirt-in-valletta",
  "mcw-t-shirt-vs-premium-hash","natural-relaxation-methods","premium-hash-in-bugibba",
  "premium-hash-in-valletta","premium-hash-vs-cbd-cream","premium-hash-vs-cbd-lighter",
  "premium-hash-vs-cbd-oil","premium-hash-vs-cbd-vape","premium-hash-vs-disposable-vape",
  "premium-oil-1000mg-in-bugibba","premium-oil-1000mg-in-valletta","premium-oil-1000mg-vs-cbd-hash",
  "pre-roll-in-bugibba","pre-roll-in-gzira","pre-roll-in-mellieha","pre-roll-in-sliema",
  "pre-roll-in-valletta","pre-roll-vs-cbd-flower","pre-roll-vs-sour-space-candy",
  "pre-roll-vs-vape-cartridge","rolling-papers-in-bugibba","rolling-papers-in-gzira",
  "rolling-papers-in-mellieha","rolling-papers-in-sliema","rolling-papers-in-valletta",
  "rolling-papers-vs-mcw-t-shirt","sour-space-candy-in-bugibba","sour-space-candy-in-gzira",
  "sour-space-candy-in-mellieha","sour-space-candy-in-sliema","sour-space-candy-in-valletta",
  "sour-space-candy-vs-isolate-oil","storage-box-in-bugibba","storage-box-in-gzira",
  "storage-box-in-mellieha","storage-box-in-sliema","storage-box-in-valletta",
  "storage-box-vs-disposable-vape","supporting-local-cbd-shops","terpenes-explained",
  "understanding-cannabinoids","vape-cartridge-in-bugibba","vape-cartridge-in-valletta",
  "vape-cartridge-vs-cbd-flower","vape-cartridge-vs-disposable-vape","vape-cartridge-vs-sour-space-candy",
  "vaporizer-in-bugibba","vaporizer-in-gzira","vaporizer-in-mellieha","vaporizer-in-sliema",
  "vaporizer-in-valletta",
];

const LOCATIONS = ["Sliema", "Gzira", "Mellieha", "Bugibba", "Valletta"];

function guideDesc(slug) {
  const label = slugToLabel(slug);
  const loc = LOCATIONS.find((l) =>
    slug.toLowerCase().includes(l.toLowerCase())
  );
  if (loc) {
    return (
      label +
      " in Malta. Buy from MCW CBD Relax Shop in " +
      loc +
      " - open daily 09:00 to 23:30. Premium quality, lab-tested, fully legal in Malta."
    );
  }
  return (
    label +
    " - expert guide from MCW CBD Relax Shop, Malta No.1 hemp destination. CBD tips, product info, and where to buy in Malta."
  );
}

let count = 0;

for (const page of corePages) {
  const html = injectHead(template, {
    title: page.title,
    description: page.description,
    canonical: BASE + page.path,
    extraSchema: page.schema,
  });
  save(page.path, html);
  count++;
}

for (const post of blogPosts) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumb([
        { name: "Home", url: BASE + "/" },
        { name: "Blog", url: BASE + "/blog" },
        { name: post.title, url: BASE + "/blog/" + post.slug },
      ]),
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.desc,
        url: BASE + "/blog/" + post.slug,
        author: { "@type": "Organization", name: "MCW CBD Relax Shop", url: BASE },
        publisher: {
          "@type": "Organization",
          name: "MCW CBD Relax Shop",
          logo: { "@type": "ImageObject", url: BASE + "/images/favicon.png" },
        },
        datePublished: "2026-04-01",
        dateModified: "2026-04-15",
      },
    ],
  };
  const html = injectHead(template, {
    title: post.title + " | MCW CBD Malta",
    description: post.desc,
    canonical: BASE + "/blog/" + post.slug,
    extraSchema: schema,
  });
  save("/blog/" + post.slug, html);
  count++;
}

for (const slug of guidePages) {
  const label = slugToLabel(slug);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumb([
        { name: "Home", url: BASE + "/" },
        { name: "Guides", url: BASE + "/guides" },
        { name: label, url: BASE + "/guides/" + slug },
      ]),
      {
        "@type": "Article",
        headline: label + " | MCW CBD Malta",
        description: guideDesc(slug),
        url: BASE + "/guides/" + slug,
        author: { "@type": "Organization", name: "MCW CBD Relax Shop", url: BASE },
        publisher: { "@type": "Organization", name: "MCW CBD Relax Shop" },
        datePublished: "2026-04-01",
        dateModified: "2026-04-15",
      },
    ],
  };
  const html = injectHead(template, {
    title: label + " | MCW CBD Malta",
    description: guideDesc(slug),
    canonical: BASE + "/guides/" + slug,
    extraSchema: schema,
  });
  save("/guides/" + slug, html);
  count++;
}

fs.copyFileSync(path.join(DIST, "index.html"), path.join(DIST, "404.html"));

console.log("\nPrerendered " + count + " pages. 404.html generated.\n");
