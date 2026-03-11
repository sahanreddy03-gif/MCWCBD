import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, MapPin, Package, Leaf, Flame, Pill, Beaker, Zap } from "lucide-react";
import { SEO } from "@/components/SEO";
import { BRANDS } from "@/lib/data";

const CATEGORIES = [
  { name: "CBD Flowers", icon: Leaf, count: 24 },
  { name: "Vaporizers", icon: Flame, count: 18 },
  { name: "CBD Oils", icon: Beaker, count: 15 },
  { name: "Gummies", icon: Pill, count: 12 },
  { name: "Accessories", icon: Zap, count: 40 },
];

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <>
      <SEO title="Home" />
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          style={{ y: y1, opacity }} 
          className="absolute inset-0 z-0"
        >
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-60 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]" />
        </motion.div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Open 7 Days a Week in Malta</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bebas leading-[0.85] tracking-tight mb-6">
              MALTA'S <span className="text-primary text-glow-primary">#1</span> CANNABIS <br />
              & CBD <span className="text-secondary text-glow-secondary">DESTINATION</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium">
              SLIEMA · GZIRA · MELLIEHA · BUGIBBA<br />
              <span className="text-white mt-2 block">Same Day Delivery Available Island-Wide</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/shop" 
                className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest rounded-xl hover:bg-primary/90 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(34,197,94,0.3)] transition-all duration-300"
              >
                Shop The Range
              </Link>
              <Link 
                href="/stores" 
                className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-300"
              >
                Find A Store
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR (Marquee) */}
      <div className="bg-primary text-primary-foreground py-3 overflow-hidden border-y border-primary/20">
        <div className="flex whitespace-nowrap animate-marquee-slow font-bold uppercase tracking-widest text-sm">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-6">100% Legal in Malta</span>
              <Star size={12} />
              <span className="mx-6">Official Brand Distributor</span>
              <Star size={12} />
              <span className="mx-6">EU Lab-Tested Products</span>
              <Star size={12} />
              <span className="mx-6">4 Locations Island-Wide</span>
              <Star size={12} />
              <span className="mx-6">Same-Day Delivery</span>
              <Star size={12} />
              <span className="mx-6">Expert Staff</span>
              <Star size={12} />
              <span className="mx-6">Top International Brands</span>
              <Star size={12} />
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIES GRID */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bebas tracking-wide mb-2">Explore the menu</h2>
              <p className="text-muted-foreground">Over 300+ premium products in stock.</p>
            </div>
            <Link href="/shop" className="hidden md:flex items-center gap-2 text-primary font-bold uppercase tracking-wider hover:text-primary/80 transition-colors group">
              View All <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map((cat, i) => (
              <Link key={cat.name} href="/shop">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center h-48 cursor-pointer group hover:border-primary/50 hover:bg-card/80 transition-all shadow-lg shadow-black/50"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                    <cat.icon size={28} />
                  </div>
                  <h3 className="font-bebas text-xl tracking-wider">{cat.name}</h3>
                  <span className="text-xs text-muted-foreground mt-1">{cat.count} items</span>
                </motion.div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/shop" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND WALL */}
      <section className="py-16 bg-[#050505] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <h2 className="text-3xl font-bebas tracking-wide text-muted-foreground">Official Stockists Of</h2>
        </div>
        <div className="flex whitespace-nowrap animate-marquee opacity-50 hover:opacity-100 transition-opacity">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {BRANDS.map(brand => (
                <span key={brand} className="mx-10 text-4xl md:text-6xl font-bebas tracking-widest text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* WHY MCW */}
      <section className="py-24 relative overflow-hidden">
        <img 
          src={`${import.meta.env.BASE_URL}images/pattern-dark.png`} 
          alt="texture" 
          className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bebas tracking-wide mb-4">The MCW Standard</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We don't just sell products. We curate an experience built on quality, legality, and education.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-2xl">
              <ShieldCheck size={40} className="text-primary mb-6" />
              <h3 className="text-2xl font-bebas tracking-wide mb-3">Everything Tested</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every single product on our shelves is EU lab-certified and 100% legal under Maltese law (&lt;0.2% THC). No grey areas, just pure quality.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <MapPin size={40} className="text-secondary mb-6 relative z-10" />
              <h3 className="text-2xl font-bebas tracking-wide mb-3 relative z-10">4 Island Locations</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                With stores in Sliema, Gzira, Mellieha, and Bugibba, premium CBD is never far away. Visit us to see the products in person.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-2xl">
              <Package size={40} className="text-white mb-6" />
              <h3 className="text-2xl font-bebas tracking-wide mb-3">Same Day Delivery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Order via WhatsApp before 4 PM and receive your products anywhere in Malta on the exact same day. Fast, discreet, and reliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-background to-background border-y border-primary/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bebas tracking-wide mb-4">Don't know where to start?</h2>
            <p className="text-xl text-muted-foreground">Our expert staff can guide you to the perfect product.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <a href="https://wa.me/35699999999" target="_blank" rel="noreferrer" className="flex-1 md:flex-none px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-gray-200 transition-colors text-center">
              Chat on WhatsApp
            </a>
            <Link href="/stores" className="flex-1 md:flex-none px-8 py-4 border border-white/20 hover:bg-white/10 font-bold uppercase tracking-widest rounded-xl transition-colors text-center">
              Visit a Store
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
