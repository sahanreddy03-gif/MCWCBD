import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BRANDS, PRODUCTS } from "@/lib/data";

const SHOWCASE_CARDS = [
  { id: '01', cat: "PRE-ROLL", name: "BABY JEETER", sub: "QUAD-INFUSED", bg: "bg-[#00C8C8]", text: "text-black", img: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&q=80" },
  { id: '02', cat: "CBD VAPES", name: "LIQUID DIAMONDS", sub: "LIVE RESIN", bg: "bg-[#FF6B35]", text: "text-black", img: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=400&q=80" },
  { id: '03', cat: "CBD FLOWERS", name: "PREMIUM BUDS", sub: "INDOOR GROWN", bg: "bg-[#7B4FFF]", text: "text-white", img: "https://images.unsplash.com/photo-1616469829941-c7200edec809?w=400&q=80" },
  { id: '04', cat: "CBD GUMMIES", name: "SOUR RINGS", sub: "FULL SPECTRUM", bg: "bg-[#FF3366]", text: "text-white", img: "https://images.unsplash.com/photo-1582749933611-5e9d5b0e5aa4?w=400&q=80" },
  { id: '05', cat: "CBD OILS", name: "PURE DROPS", sub: "FAST ACTING", bg: "bg-[#22C55E]", text: "text-black", img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&q=80" },
  { id: '06', cat: "HHC PRODUCTS", name: "HHC DISPOSABLE", sub: "POTENT EFFECT", bg: "bg-[#FFB800]", text: "text-black", img: "https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?w=400&q=80" }
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
      <div className="flex flex-col relative z-20">
        <div className="bg-black py-4 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee text-xs font-black uppercase tracking-[0.25em] text-white">
            {[...Array(6)].map((_, i) => (
              <div key={`top-${i}`} className="flex items-center">
                <span className="mx-8">100% Legal in Malta</span>
                <span className="text-white/30">◆</span>
                <span className="mx-8">Official Brand Distributor</span>
                <span className="text-white/30">◆</span>
                <span className="mx-8">EU Lab-Tested Products</span>
                <span className="text-white/30">◆</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#22c55e] via-[#4ade80] to-[#22c55e] py-4 overflow-hidden border-y border-black">
          <div className="flex whitespace-nowrap animate-marquee-reverse text-xs font-black uppercase tracking-[0.25em] text-black">
            {[...Array(6)].map((_, i) => (
              <div key={`bottom-${i}`} className="flex items-center">
                <span className="mx-8">Same-Day Delivery</span>
                <span className="text-black/50">◆</span>
                <span className="mx-8">4 Locations Island-Wide</span>
                <span className="text-black/50">◆</span>
                <span className="mx-8">Top International Brands</span>
                <span className="text-black/50">◆</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NEW ARRIVALS */}
      <section className="pt-24 pb-12 bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-5xl md:text-7xl font-bebas tracking-tight text-white">NEW ARRIVALS</h2>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
            {PRODUCTS.filter(p => p.isNew).slice(0, 4).map((p, i) => (
              <Link key={p.id} href="/shop" className="shrink-0 w-[280px] md:w-full snap-start group block">
                <div className="bg-white rounded-2xl relative overflow-hidden flex flex-col h-[380px] shadow-lg border-2 border-transparent group-hover:border-[#FF3366] transition-colors">
                  <div className="p-5 flex justify-between items-start z-10 relative">
                    <span className="bg-[#FF3366] text-white text-[11px] font-black px-3 py-1.5 uppercase tracking-widest shadow-md">NEW</span>
                    <span className="text-[10px] font-black text-black/40 uppercase tracking-widest">{p.brand}</span>
                  </div>
                  <div className="px-5 z-10 relative">
                    <h3 className="font-bebas text-4xl text-black leading-none line-clamp-2">{p.name}</h3>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 z-20 pointer-events-none">
                    <img 
                      src={p.image} 
                      className={`w-full h-full object-cover rounded-full shadow-2xl ${i % 2 === 0 ? 'animate-float-product' : 'animate-float-product-alt'}`} 
                      alt={p.name} 
                    />
                  </div>
                  <div className="mt-auto category-accent-bar z-30" style={{ background: '#FF3366' }}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT SHOWCASE (Jeeter Style) */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-5xl md:text-7xl font-bebas tracking-tight text-white mb-2">FEATURED CATEGORIES</h2>
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SHOWCASE_CARDS.map((card, i) => (
              <Link key={card.id} href="/shop" className="block group">
                <div className={`relative w-full min-h-[400px] rounded-3xl overflow-hidden ${card.bg} flex flex-col shadow-2xl transition-transform duration-300 group-hover:-translate-y-2`}>
                  {/* Left content */}
                  <div className={`p-8 md:p-12 w-full md:w-2/3 flex-1 flex flex-col justify-center z-10 ${card.text} relative`}>
                    <div className="flex justify-between items-center mb-6 w-full max-w-[120px]">
                      <span className="text-sm font-black opacity-60">{card.id}</span>
                      <span className="text-xs font-black tracking-widest uppercase opacity-80">{card.cat}</span>
                    </div>
                    
                    <h3 className="font-bebas text-6xl md:text-[6rem] leading-[0.85] tracking-tighter mb-2">{card.name}</h3>
                    <p className="text-sm font-bold tracking-[0.2em] uppercase opacity-90 mb-10">{card.sub}</p>
                    
                    <div className="mt-auto inline-flex">
                      <div className={`flex items-center gap-2 font-black text-sm uppercase tracking-widest border-b-2 pb-1 ${card.text === 'text-white' ? 'border-white' : 'border-black'} hover:opacity-70 transition-opacity`}>
                        SHOP NOW <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Right image */}
                  <div className="absolute right-0 bottom-0 w-3/4 md:w-1/2 h-[120%] pointer-events-none z-20 flex items-center justify-end overflow-visible">
                    <img 
                      src={card.img} 
                      alt={card.name} 
                      className={`w-[110%] max-w-none object-cover rounded-2xl shadow-2xl ${i % 2 === 0 ? 'animate-float-product' : 'animate-float-product-alt'}`}
                      style={{ transformOrigin: 'center' }}
                    />
                  </div>

                  {/* Accent bar at bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-[6px] bg-black/20 z-30"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MCW SECTION - MASSIVE NUMBERS */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 border-4 border-black rounded-3xl overflow-hidden bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="p-12 md:p-20 flex flex-col items-center justify-center text-center border-b-4 md:border-b-0 md:border-r-4 border-black">
              <span className="text-[8rem] md:text-[10rem] font-bebas text-[#22c55e] leading-none tracking-tighter mb-4" style={{ WebkitTextStroke: '2px #000' }}>300+</span>
              <span className="text-xl font-bold uppercase tracking-[0.2em] text-black">Products in Stock</span>
            </div>
            <div className="p-12 md:p-20 flex flex-col items-center justify-center text-center border-b-4 md:border-b-0 md:border-r-4 border-black">
              <span className="text-[8rem] md:text-[10rem] font-bebas text-[#22c55e] leading-none tracking-tighter mb-4" style={{ WebkitTextStroke: '2px #000' }}>50+</span>
              <span className="text-xl font-bold uppercase tracking-[0.2em] text-black">Global Brands</span>
            </div>
            <div className="p-12 md:p-20 flex flex-col items-center justify-center text-center">
              <span className="text-[8rem] md:text-[10rem] font-bebas text-[#22c55e] leading-none tracking-tighter mb-4" style={{ WebkitTextStroke: '2px #000' }}>4</span>
              <span className="text-xl font-bold uppercase tracking-[0.2em] text-black">Malta Locations</span>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-bebas tracking-wide text-black max-w-5xl mx-auto leading-tight">
              WE DON'T JUST SELL PRODUCTS. <br className="hidden md:block"/>WE CURATE AN EXPERIENCE.
            </h3>
          </div>

        </div>
      </section>

      {/* THE MCW FAMILY (Brand Wall) */}
      <section className="py-32 bg-black border-t-4 border-white/[0.04] overflow-hidden">
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

      {/* FOOTER CTA BANNER */}
      <section className="py-32 bg-[#00C8C8] text-black text-center px-4 flex flex-col items-center justify-center border-t-4 border-black">
        <h2 className="text-7xl md:text-[9rem] font-bebas leading-[0.8] tracking-tighter mb-6">ORDER ON WHATSAPP</h2>
        <p className="text-2xl md:text-3xl font-black uppercase tracking-[0.3em] mb-12 opacity-90">SAME DAY DELIVERY</p>
        <a 
          href="https://wa.me/35699999999" 
          target="_blank" 
          rel="noreferrer" 
          className="inline-block px-16 py-6 bg-black text-white font-black text-xl md:text-2xl uppercase tracking-widest hover:bg-white hover:text-black transition-colors shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:translate-y-2 hover:translate-x-2"
        >
          Chat With Us
        </a>
      </section>
    </>
  );
}
