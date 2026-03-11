import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BRANDS } from "@/lib/data";

const CATEGORY_TILES = [
  { name: "CBD Flowers", count: 24, bg: "from-[#1a3a1a] to-[#051005]" },
  { name: "CBD Vapes", count: 18, bg: "from-[#2e1a3a] to-[#0a0510]" },
  { name: "CBD Oils", count: 15, bg: "from-[#3a2e1a] to-[#100a05]" },
  { name: "CBD Hash", count: 10, bg: "from-[#1a2e3a] to-[#050a10]" },
  { name: "Pre-Rolls", count: 14, bg: "from-[#3a1a1a] to-[#100505]" },
  { name: "Gummies", count: 12, bg: "from-[#3a1a2e] to-[#10050a]" },
  { name: "H4CBD", count: 8, bg: "from-[#1a3a2e] to-[#05100a]" },
  { name: "HHC", count: 9, bg: "from-[#2e3a1a] to-[#0a1005]" },
  { name: "Accessories", count: 40, bg: "from-[#222222] to-[#050505]" },
  { name: "Creams", count: 6, bg: "from-[#1a1a3a] to-[#050510]" },
  { name: "Capsules", count: 5, bg: "from-[#3a3a1a] to-[#101005]" },
  { name: "Cigars", count: 15, bg: "from-[#3a221a] to-[#100805]" }
];

export default function Home() {
  const lineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <>
      <SEO title="Premium Cannabis & CBD Destination" />
      
      {/* HERO SECTION - CINEMATIC */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-[#050505]">
        {/* Abstract Gradient Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(34,197,94,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.05)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <motion.div initial="hidden" animate="visible" className="flex flex-col items-start">
            
            <h1 className="flex flex-col gap-2 md:gap-4 mb-8">
              <motion.span custom={0} variants={lineVariants} className="text-7xl md:text-[10rem] lg:text-[12rem] font-bebas leading-[0.8] tracking-tighter text-white">
                MALTA'S <span className="text-outline-green">#1</span>
              </motion.span>
              <motion.span custom={1} variants={lineVariants} className="text-7xl md:text-[10rem] lg:text-[12rem] font-bebas leading-[0.8] tracking-tighter text-white">
                CANNABIS <span className="text-white">&</span>
              </motion.span>
              <motion.span custom={2} variants={lineVariants} className="text-7xl md:text-[10rem] lg:text-[12rem] font-bebas leading-[0.8] tracking-tighter text-outline">
                CBD DESTINATION
              </motion.span>
            </h1>
            
            <motion.div custom={3} variants={lineVariants} className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 mt-4">
              <p className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-[0.3em] flex gap-4">
                <span>● Sliema</span>
                <span>● Gzira</span>
                <span>● Mellieha</span>
                <span>● Bugibba</span>
              </p>
              
              <div className="flex gap-4">
                <Link 
                  href="/shop" 
                  className="px-8 py-4 bg-primary text-black font-black uppercase tracking-widest text-sm hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                >
                  Shop The Range
                </Link>
                <Link 
                  href="/stores" 
                  className="px-8 py-4 border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:border-white hover:bg-white/5 transition-all duration-300"
                >
                  Find A Store
                </Link>
              </div>
            </motion.div>
            
          </motion.div>
        </div>
      </section>

      {/* DOUBLE TRUST BAR */}
      <div className="bg-black py-4 border-y border-white/[0.04] overflow-hidden flex flex-col gap-2 relative z-20">
        <div className="flex whitespace-nowrap animate-marquee text-xs font-black uppercase tracking-[0.25em] text-white">
          {[...Array(6)].map((_, i) => (
            <div key={`top-${i}`} className="flex items-center">
              <span className="mx-8">100% Legal in Malta</span>
              <span className="text-secondary">◆</span>
              <span className="mx-8">Official Brand Distributor</span>
              <span className="text-secondary">◆</span>
              <span className="mx-8">EU Lab-Tested Products</span>
              <span className="text-secondary">◆</span>
            </div>
          ))}
        </div>
        <div className="flex whitespace-nowrap animate-marquee-reverse text-xs font-black uppercase tracking-[0.25em] text-white/50">
          {[...Array(6)].map((_, i) => (
            <div key={`bottom-${i}`} className="flex items-center">
              <span className="mx-8">Same-Day Delivery</span>
              <span className="text-primary">◆</span>
              <span className="mx-8">4 Locations Island-Wide</span>
              <span className="text-primary">◆</span>
              <span className="mx-8">Top International Brands</span>
              <span className="text-primary">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORY TILES (Jeeter Drops Style) */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-6xl md:text-8xl font-bebas tracking-tight">SHOP BY CATEGORY</h2>
            <Link href="/shop" className="hidden md:flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:text-white transition-colors group pb-2">
              View All <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {CATEGORY_TILES.map((cat, i) => (
              <Link key={cat.name} href={`/shop`}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (i % 6) * 0.1, duration: 0.5 }}
                  className={`relative aspect-[3/4] rounded-xl overflow-hidden group bg-gradient-to-br ${cat.bg} border border-white/[0.04] cursor-pointer`}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors duration-500 rounded-xl z-20 pointer-events-none" />
                  
                  <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                    <span className="text-[10px] font-bold text-white/50 tracking-widest uppercase">{cat.count} Items</span>
                    <h3 className="font-bebas text-3xl md:text-4xl text-white tracking-wide leading-none group-hover:scale-110 group-hover:origin-bottom-left transition-transform duration-500">{cat.name}</h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* THE MCW FAMILY (Brand Wall) */}
      <section className="py-32 bg-black border-y border-white/[0.04] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-6xl md:text-8xl font-bebas tracking-tight text-white">THE MCW FAMILY</h2>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(3)].map((_, i) => (
              <div key={`row1-${i}`} className="flex items-center">
                {BRANDS.slice(0, 8).map((brand, idx) => (
                  <span 
                    key={brand} 
                    className={`mx-12 text-[5rem] md:text-[8rem] font-bebas tracking-tighter leading-none transition-all duration-300 hover:text-white cursor-default
                      ${idx % 2 === 0 ? 'text-outline-green hover:!text-primary' : 'text-white/20'}`}
                  >
                    {brand}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <div className="flex whitespace-nowrap animate-marquee-reverse">
            {[...Array(3)].map((_, i) => (
              <div key={`row2-${i}`} className="flex items-center">
                {BRANDS.slice(8).map((brand, idx) => (
                  <span 
                    key={brand} 
                    className={`mx-12 text-[5rem] md:text-[8rem] font-bebas tracking-tighter leading-none transition-all duration-300 hover:text-white cursor-default
                      ${idx % 2 !== 0 ? 'text-outline-green hover:!text-primary' : 'text-white/20'}`}
                  >
                    {brand}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MCW SECTION - MASSIVE NUMBERS */}
      <section className="py-32 bg-[#0a0a0a] relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/[0.08] rounded-3xl overflow-hidden bg-[#111]">
            <div className="p-12 md:p-20 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/[0.08]">
              <span className="text-[8rem] md:text-[10rem] font-bebas text-primary leading-none tracking-tighter mb-4 text-glow">300+</span>
              <span className="text-xl font-bold uppercase tracking-[0.2em] text-white">Products in Stock</span>
            </div>
            <div className="p-12 md:p-20 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/[0.08]">
              <span className="text-[8rem] md:text-[10rem] font-bebas text-primary leading-none tracking-tighter mb-4 text-glow">50+</span>
              <span className="text-xl font-bold uppercase tracking-[0.2em] text-white">Global Brands</span>
            </div>
            <div className="p-12 md:p-20 flex flex-col items-center justify-center text-center">
              <span className="text-[8rem] md:text-[10rem] font-bebas text-primary leading-none tracking-tighter mb-4 text-glow">4</span>
              <span className="text-xl font-bold uppercase tracking-[0.2em] text-white">Malta Locations</span>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bebas tracking-wide text-secondary max-w-4xl mx-auto leading-tight text-glow-gold">
              WE DON'T JUST SELL PRODUCTS. <br className="hidden md:block"/>WE CURATE AN EXPERIENCE.
            </h3>
          </div>

        </div>
      </section>
    </>
  );
}
