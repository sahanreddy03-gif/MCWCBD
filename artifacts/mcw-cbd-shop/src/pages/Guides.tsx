import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { SEO } from "@/components/SEO";
import { SEO_PAGES, SEO_PAGE_CATS } from "@/lib/seoPages";

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

  const filtered = SEO_PAGES.filter((p) => {
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
              {SEO_PAGE_CATS.map((cat) => (
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
