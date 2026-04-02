import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { SEO } from "@/components/SEO";

const ALL_SLUGS = [
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

const CATS = ["All", "Location", "Benefits", "City", "Guides", "Education", "Comparisons", "Lifestyle", "About"];

const catColors: Record<string, string> = {
  Location: "#22c55e",
  Benefits: "#7B4FFF",
  City: "#FF3366",
  Guides: "#FFB800",
  Education: "#00C8C8",
  Comparisons: "#FF6B35",
  Lifestyle: "#4ade80",
  About: "#a78bfa",
};

export default function Guides() {
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = ALL_SLUGS.filter((p) => {
    const matchesCat = activeCat === "All" || p.cat === activeCat;
    const matchesSearch =
      search === "" ||
      p.label.toLowerCase().includes(search.toLowerCase()) ||
      p.cat.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <SEO
        title="CBD Guides Malta — 163 Resources"
        description="Browse 163 CBD guides covering every product, city, and topic in Malta. CBD oil in Sliema, CBD flower in Gzira, legal guides, how-to articles and more."
      />

      <div className="min-h-screen bg-[#080808]">
        {/* Hero */}
        <section className="relative py-24 md:py-36 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,197,94,0.1)_0%,transparent_60%)]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-green-400 font-black uppercase tracking-[0.4em] text-xs mb-4">163 Resources</p>
              <h1 className="text-7xl md:text-[9rem] font-bebas tracking-tight text-white leading-[0.85] mb-6">
                CBD GUIDES
                <br />
                <span className="text-outline">MALTA</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-xl">
                Every CBD product, every city, every question — answered. Browse
                our complete library of Malta CBD resources.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters & Search */}
        <div className="sticky top-[65px] z-30 bg-[#080808]/95 backdrop-blur border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search guides..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#111] border border-white/10 text-white text-sm pl-9 pr-4 py-2.5 rounded-lg focus:outline-none focus:border-green-500/50 placeholder:text-gray-600"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {CATS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`shrink-0 px-4 py-1.5 text-xs font-black uppercase tracking-widest border transition-all ${
                    activeCat === cat
                      ? "bg-green-500 text-black border-green-500"
                      : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <section className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-black uppercase tracking-widest text-gray-600 mb-8">
            {filtered.length} guide{filtered.length !== 1 ? "s" : ""} found
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((page, i) => (
              <motion.div
                key={page.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.03, 0.5), duration: 0.4 }}
              >
                <Link href={`/guides/${page.slug}`} className="block group h-full">
                  <div className="h-full bg-[#0d0d0d] border border-white/5 rounded-xl p-4 hover:border-green-500/30 transition-all hover:-translate-y-0.5 flex flex-col gap-2">
                    <span
                      className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full w-fit"
                      style={{
                        background: (catColors[page.cat] ?? "#22c55e") + "22",
                        color: catColors[page.cat] ?? "#22c55e",
                      }}
                    >
                      {page.cat}
                    </span>
                    <p className="text-white text-sm font-medium leading-snug group-hover:text-green-400 transition-colors">
                      {page.label}
                    </p>
                    <span className="flex items-center gap-1 text-[10px] text-gray-600 mt-auto group-hover:text-green-500 transition-colors">
                      Read guide <ArrowRight size={9} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
