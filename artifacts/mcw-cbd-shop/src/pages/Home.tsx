import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BLOG_POSTS } from "@/lib/blogData";
import { BRANDS, PRODUCTS, pPreRoll1, pVape1, pVape2, pFlower1, pGummy2, pDrink1, pGummy4, pEdible4 } from "@/lib/data";
import logoSrc from "@assets/Untitled_design_(42)_1773502384512.png";

const SHOWCASE_CARDS = [
  { id: '01', cat: "PRE-ROLLS", name: "PRE-ROLLS", sub: "INFUSED WITH LIVE RESIN", bg: "bg-[#00C8C8]", text: "text-black", gradFrom: "#00C8C8", img: pPreRoll1, link: "/shop?category=Pre-Rolls" },
  { id: '02', cat: "CBD VAPES", name: "VAPES", sub: "PREMIUM DISPOSABLES", bg: "bg-[#FF6B35]", text: "text-black", gradFrom: "#FF6B35", img: pVape2, link: "/shop?category=CBD+Vapes" },
  { id: '03', cat: "CBD FLOWERS", name: "FLOWERS", sub: "INDOOR PREMIUM GROWN", bg: "bg-[#7B4FFF]", text: "text-white", gradFrom: "#7B4FFF", img: pEdible4, link: "/shop?category=CBD+Flowers" },
  { id: '04', cat: "CBD GUMMIES", name: "GUMMIES", sub: "FULL SPECTRUM EDIBLES", bg: "bg-[#FF3366]", text: "text-white", gradFrom: "#FF3366", img: pGummy2, link: "/shop?category=CBD+Gummies" },
  { id: '05', cat: "CBD OILS", name: "CBD OILS", sub: "ALL STRENGTHS AVAILABLE", bg: "bg-[#22C55E]", text: "text-black", gradFrom: "#22C55E", img: pDrink1, link: "/shop?category=CBD+Oils" },
  { id: '06', cat: "LIFESTYLE", name: "LIFESTYLE", sub: "GRINDERS · MERCH · SPIRITS", bg: "bg-[#FFB800]", text: "text-black", gradFrom: "#FFB800", img: pGummy4, link: "/shop?category=Lifestyle" },
  { id: '07', cat: "MCW ORIGINALS", name: "MCW\nORIGINALS", sub: "OUR EXCLUSIVE HOUSE RANGE", bg: "bg-[#0d0d0d]", text: "text-white", gradFrom: "#0d0d0d", img: logoSrc, link: "/shop?category=MCW+Originals", isOriginals: true },
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
      <SEO title="MCW CBD Relax Shop — Malta's #1 Cannabis & CBD Destination" description="Malta's #1 CBD shop with 4 locations in Sliema, Gzira, Mellieha, and Bugibba. Shop premium CBD oils, flowers, vapes, and gummies. Open daily until 11:30 pm — same-day island-wide delivery." />
      
      {/* HERO SECTION - CINEMATIC */}
      <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-[#050505]">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/b2b-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/65 pointer-events-none" />
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
                <div className="bg-white rounded-2xl overflow-hidden flex flex-row h-[200px] md:h-[220px] shadow-lg border-2 border-transparent group-hover:border-[#FF3366] transition-colors">
                  {/* Left text */}
                  <div className="flex flex-col justify-between p-5 w-[58%] shrink-0">
                    <div>
                      <span className="bg-[#FF3366] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest inline-block mb-2">NEW</span>
                      <p className="text-[10px] font-black text-black/40 uppercase tracking-widest">{p.brand}</p>
                    </div>
                    <div>
                      <h3 className="font-bebas text-3xl text-black leading-none line-clamp-2 mb-3">{p.name}</h3>
                      <span className="text-[10px] font-black text-black/50 uppercase tracking-wider">{p.category}</span>
                    </div>
                  </div>
                  {/* Right image */}
                  <div className="relative w-[42%] shrink-0 overflow-hidden">
                    <img 
                      src={p.image} 
                      className={`absolute inset-0 w-full h-full object-cover ${i % 2 === 0 ? 'animate-float-product' : 'animate-float-product-alt'}`}
                      alt={p.name} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white from-0% to-transparent to-40% pointer-events-none" />
                  </div>
                </div>
                <div className="h-[4px] w-full rounded-b-2xl" style={{ background: '#FF3366' }} />
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
            {SHOWCASE_CARDS.map((card, i) => {
              const isOriginals = 'isOriginals' in card && card.isOriginals;
              return (
              <Link
                key={card.id}
                href={card.link}
                className={`block group${isOriginals ? ' md:col-span-2' : ''}`}
              >
                {isOriginals ? (
                  /* ── MCW ORIGINALS — full-width gold showcase card ── */
                  <div
                    className="relative w-full min-h-[320px] md:min-h-[280px] rounded-3xl overflow-hidden flex flex-row shadow-2xl transition-transform duration-300 group-hover:-translate-y-2"
                    style={{
                      background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1100 45%, #0f0900 70%, #0d0d0d 100%)',
                      border: '2px solid rgba(212,175,55,0.4)',
                      boxShadow: '0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.15)',
                    }}
                  >
                    {/* Gold shimmer top edge */}
                    <div className="absolute top-0 left-0 w-full h-[2px] pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #B8860B, #FFD700, transparent)' }} />

                    {/* LEFT: Text */}
                    <div className="relative z-10 flex flex-col justify-between p-8 md:p-10 shrink-0 w-[55%] md:w-[45%] text-white">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black opacity-30 tracking-widest">{card.id}</span>
                        <span className="text-[11px] font-black tracking-[0.2em] uppercase" style={{ color: 'rgba(255,215,0,0.75)' }}>{card.cat}</span>
                      </div>
                      <div className="flex flex-col py-4">
                        <h3
                          className="font-bebas text-[3.2rem] md:text-[5rem] leading-[0.85] tracking-tighter mb-3 whitespace-pre-line"
                          style={{ background: 'linear-gradient(135deg, #FFD700, #DAA520, #FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                        >
                          {card.name}
                        </h3>
                        <p className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(255,215,0,0.6)' }}>{card.sub}</p>
                      </div>
                      <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest border-b-2 pb-1 w-fit" style={{ borderColor: 'rgba(255,215,0,0.5)', color: '#FFD700' }}>
                        SHOP NOW <ArrowRight size={14} />
                      </div>
                    </div>

                    {/* RIGHT: Logo centred */}
                    <div className="relative flex-1 shrink-0 overflow-hidden flex items-center justify-center">
                      {/* faint bg glow */}
                      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.10) 0%, transparent 70%)' }} />
                      <img
                        src={card.img}
                        alt="MCW Originals"
                        className="relative z-10 w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-2xl animate-float-product"
                        loading="lazy"
                        style={{ filter: 'drop-shadow(0 0 30px rgba(212,175,55,0.4)) brightness(1.05)' }}
                      />
                    </div>

                    {/* Gold bottom strip */}
                    <div className="absolute bottom-0 left-0 w-full h-[4px] z-20" style={{ background: 'linear-gradient(90deg, transparent, #B8860B, #FFD700, #B8860B, transparent)' }} />
                  </div>
                ) : (
                  /* ── Standard category card ── */
                  <div className={`relative w-full min-h-[360px] rounded-3xl overflow-hidden ${card.bg} flex flex-row shadow-2xl transition-transform duration-300 group-hover:-translate-y-2`}>
                    
                    {/* LEFT: Text — fixed 55%, never overlapped */}
                    <div className={`relative z-10 flex flex-col justify-between p-8 md:p-10 shrink-0 w-[55%] ${card.text}`}>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black opacity-40 tracking-widest">{card.id}</span>
                        <span className="text-[11px] font-black tracking-[0.2em] uppercase opacity-70">{card.cat}</span>
                      </div>
                      <div className="flex flex-col py-4">
                        <h3 className="font-bebas text-[3.2rem] md:text-[4.5rem] leading-[0.85] tracking-tighter mb-2">{card.name}</h3>
                        <p className="text-[11px] font-bold tracking-[0.2em] uppercase opacity-80">{card.sub}</p>
                      </div>
                      <div className={`flex items-center gap-2 font-black text-xs uppercase tracking-widest border-b-2 pb-1 w-fit ${card.text === 'text-white' ? 'border-white' : 'border-black'}`}>
                        SHOP NOW <ArrowRight size={14} />
                      </div>
                    </div>

                    {/* RIGHT: Image — fixed 45%, strictly contained */}
                    <div className="relative w-[45%] shrink-0 overflow-hidden">
                      <img
                        src={card.img}
                        alt={card.name}
                        className={`absolute inset-0 w-full h-full object-cover object-center ${i % 2 === 0 ? 'animate-float-product' : 'animate-float-product-alt'}`}
                        loading="lazy"
                      />
                      {/* Gradient fade — blends image into card color on the left edge */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: `linear-gradient(to right, ${card.gradFrom} 0%, transparent 45%)` }}
                      />
                    </div>

                    {/* Bottom dark strip */}
                    <div className="absolute bottom-0 left-0 w-full h-[5px] bg-black/25 z-20" />
                  </div>
                )}
              </Link>
              );
            })}
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
            {[...Array(4)].map((_, i) => (
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
            {[...Array(4)].map((_, i) => (
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

      {/* FROM OUR INSTAGRAM */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-6xl md:text-8xl font-bebas tracking-tight text-white mb-2">FROM OUR INSTAGRAM</h2>
            <a href="https://instagram.com/mcwrelaxshop" target="_blank" rel="noreferrer" className="text-[#22c55e] font-black uppercase tracking-[0.3em] text-sm hover:text-white transition-colors">@mcwrelaxshop</a>
          </div>
          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {[
              "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/MnnAixmBevKgqSAq.jpg",
              "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/eijgTxraqtDAPCFc.jpg",
              "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/CxKYBwEsQyUXncYA.jpg",
              "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/ninNxXVmWIUYrkEQ.jpg",
              "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/lzapsybCKCkeKAqy.jpg",
              "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/fVqnoiCqTQfwmtzj.jpg",
              "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/tsNExEVCzHeVWzef.jpg",
              "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/nLerxxnSpqpQaJXK.jpg",
              "https://files.manuscdn.com/user_upload_by_module/session_file/310519663099450436/PRyFYrLCyffOEgdz.jpg"
            ].map((url, idx) => (
              <a key={idx} href="https://instagram.com/mcwrelaxshop" target="_blank" rel="noreferrer" className="relative aspect-square overflow-hidden group">
                <img src={url} alt={`MCW Instagram post ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-[#22c55e]/0 group-hover:bg-[#22c55e]/30 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://instagram.com/mcwrelaxshop" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-[#22c55e] hover:text-black transition-colors">
              FOLLOW US ON INSTAGRAM <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS — Authority Stats */}
      <section className="py-20 bg-[#080808] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-5xl md:text-7xl font-bebas tracking-tight text-white mb-2">BY THE NUMBERS</h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest">Malta's most trusted CBD retailer</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: "4", label: "Stores Island-Wide", sub: "Sliema · Gzira · Mellieha · Bugibba" },
              { stat: "200+", label: "Premium Products", sub: "Curated from world-leading brands" },
              { stat: "5+", label: "Years in Malta", sub: "Malta's original CBD destination" },
              { stat: "100%", label: "Malta Legal", sub: "Every product certified <0.2% THC" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-[#0d0d0d] border border-white/8 rounded-2xl p-6 md:p-8 text-center"
              >
                <div className="text-5xl md:text-7xl font-bebas text-green-400 mb-2">{item.stat}</div>
                <div className="font-black uppercase tracking-wider text-white text-sm mb-1">{item.label}</div>
                <div className="text-gray-600 text-xs">{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FROM OUR BLOG */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-green-400 font-black uppercase tracking-[0.3em] text-xs mb-2">Knowledge Hub</p>
              <h2 className="text-5xl md:text-7xl font-bebas tracking-tight text-white">FROM OUR BLOG</h2>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-2 text-sm font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              All Articles <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...BLOG_POSTS].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 3).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <div className="h-full bg-[#0d0d0d] border border-white/8 rounded-2xl overflow-hidden hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    <div className="h-1.5 w-full" style={{ background: post.featuredColor }} />
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">{post.category}</span>
                      <h3 className="font-bebas text-2xl text-white group-hover:text-green-400 transition-colors leading-tight mb-3">{post.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                        <span className="flex items-center gap-1 text-xs text-gray-600"><Clock size={11} /> {post.readingTime} min</span>
                        <span className="flex items-center gap-1 text-xs font-bold text-green-400 group-hover:gap-2 transition-all">Read <ArrowRight size={11} /></span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="md:hidden text-center mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              View All Articles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER CTA BANNER */}
      <section className="py-32 bg-[#00C8C8] text-black text-center px-4 flex flex-col items-center justify-center border-t-4 border-black">
        <h2 className="text-7xl md:text-[9rem] font-bebas leading-[0.8] tracking-tighter mb-6">ORDER ON WHATSAPP</h2>
        <p className="text-2xl md:text-3xl font-black uppercase tracking-[0.3em] mb-12 opacity-90">SAME DAY DELIVERY</p>
        <a 
          href="https://wa.me/35699536248" 
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
