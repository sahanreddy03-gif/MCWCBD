import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingBag, MapPin, ChevronRight, AlertTriangle } from "lucide-react";
import logoSrc from "@assets/Untitled_design_(42)_1773502384512.png";
import { motion, AnimatePresence } from "framer-motion";
import { AgeGate } from "./AgeGate";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Brands", href: "/brands" },
    { name: "Stores", href: "/stores" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-foreground selection:bg-primary/30 selection:text-white">
      <AgeGate />
      
      {/* Navbar */}
      <header 
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-black/90 backdrop-blur-2xl border-white/[0.04] py-4" 
            : "bg-transparent border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img src={logoSrc} alt="MCW Relax Store" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={cn(
                  "text-xs font-bold tracking-[0.15em] uppercase transition-colors hover:text-white",
                  location === link.href ? "text-white" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <a 
              href="https://wa.me/35699999999" 
              target="_blank" 
              rel="noreferrer"
              className="ml-4 px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 font-bold text-[10px] tracking-widest uppercase flex items-center gap-2"
            >
              Order Now <ChevronRight size={14} />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-black flex flex-col"
          >
            <div className="flex justify-between items-center p-6 pt-8 border-b border-white/[0.04]">
              <img src={logoSrc} alt="MCW Relax Store" className="h-12 w-auto object-contain" />
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white hover:text-primary transition-colors">
                <X size={32} />
              </button>
            </div>
            
            <nav className="flex-1 px-8 py-12 flex flex-col justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  key={link.name}
                >
                  <Link 
                    href={link.href}
                    className={cn(
                      "text-[4rem] font-bebas tracking-wide block transition-colors leading-none relative",
                      location === link.href ? "text-white" : "text-muted-foreground hover:text-white/70"
                    )}
                  >
                    {location === link.href && (
                      <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-12 bg-primary" />
                    )}
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="p-8 border-t border-white/[0.04]">
              <a 
                href="https://wa.me/35699999999" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-5 bg-primary text-black font-black uppercase tracking-widest text-lg text-center flex items-center justify-center gap-2"
              >
                Order on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-white/[0.04] pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="mb-8 inline-block">
                <img src={logoSrc} alt="MCW Relax Store" className="h-20 w-auto object-contain" />
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium">
                Malta's premium destination for the world's finest CBD, cannabis derivatives, and lifestyle accessories.
              </p>
            </div>
            
            <div>
              <h4 className="font-bebas text-3xl tracking-widest mb-8 text-white">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-white transition-colors text-xs uppercase tracking-[0.2em] font-bold">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bebas text-3xl tracking-widest mb-8 text-white">Locations</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-muted-foreground text-sm font-medium">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                  <span>Sliema — Triq Bisazza</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground text-sm font-medium">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                  <span>Gzira — Main Street</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground text-sm font-medium">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                  <span>Mellieha — Main Street</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground text-sm font-medium">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                  <span>Bugibba — Dawret il-Gżejjer</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bebas text-3xl tracking-widest mb-8 text-white">Contact</h4>
              <p className="text-muted-foreground text-sm mb-6 font-medium">
                Need help? Our expert staff is ready to assist you.
              </p>
              <a 
                href="https://wa.me/35699999999" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block border border-primary text-primary hover:bg-primary hover:text-black px-8 py-4 transition-all font-black text-xs uppercase tracking-widest"
              >
                Chat with us
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/[0.04] text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-start gap-3">
              <AlertTriangle size={16} className="text-yellow-500 shrink-0 mt-0.5" />
              <p className="text-[10px] text-muted-foreground/60 max-w-3xl leading-relaxed uppercase tracking-wider font-bold">
                WARNING: All products contain less than 0.2% THC in accordance with EU and Maltese law. 
                Products are intended for adults 18+ only. Keep out of reach of children. 
                These products are not intended to diagnose, treat, cure, or prevent any disease. 
                Consult your healthcare provider before use. Not for use during pregnancy or breastfeeding. 
                If you or someone you know needs help with substance use, contact Sedqa on 1551 (free, confidential).
              </p>
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-black shrink-0">
              © {new Date().getFullYear()} MCW Malta.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppCTA />
    </div>
  );
}
