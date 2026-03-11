import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingBag, MapPin, ChevronRight } from "lucide-react";
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
    { name: "About & FAQ", href: "/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <AgeGate />
      
      {/* Navbar */}
      <header 
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border-white/10 py-3" 
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex flex-col hover:opacity-80 transition-opacity">
            <span className="font-bebas text-3xl leading-none tracking-wider text-glow">MCW</span>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-primary font-bold">CBD Relax Shop</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={cn(
                  "text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <a 
              href="https://wa.me/35699999999" 
              target="_blank" 
              rel="noreferrer"
              className="ml-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 font-bold text-sm tracking-wider uppercase flex items-center gap-2 group"
            >
              Order Now <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
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
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-background flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <span className="font-bebas text-3xl tracking-wider">MCW</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-white/5 rounded-full hover:bg-white/10">
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex-1 px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link 
                    href={link.href}
                    className={cn(
                      "text-4xl font-bebas tracking-wide block transition-colors",
                      location === link.href ? "text-primary pl-2" : "text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="p-6 border-t border-white/10 bg-card/50">
              <a 
                href="https://wa.me/35699999999" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2"
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
      <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="flex flex-col mb-6">
                <span className="font-bebas text-5xl leading-none tracking-wider text-glow">MCW</span>
                <span className="text-sm uppercase tracking-[0.2em] text-primary font-bold">CBD Relax Shop</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Malta's premium destination for the world's finest CBD, cannabis derivatives, and lifestyle accessories.
              </p>
            </div>
            
            <div>
              <h4 className="font-bebas text-2xl tracking-widest mb-6">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider font-semibold">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bebas text-2xl tracking-widest mb-6">Locations</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>Sliema — Triq Bisazza</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>Gzira — Main Street</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>Mellieha — Main Street</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground text-sm">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>Bugibba — Dawret il-Gżejjer</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bebas text-2xl tracking-widest mb-6">Contact</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Need help? Our expert staff is ready to assist you.
              </p>
              <a 
                href="https://wa.me/35699999999" 
                target="_blank" 
                rel="noreferrer"
                className="inline-block border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-xl transition-all font-bold text-sm uppercase tracking-wider"
              >
                Chat with us
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground/60 max-w-2xl leading-relaxed">
              DISCLAIMER: All products contain less than 0.2% THC in accordance with EU and Maltese law. 
              Products are intended for adults 18+ only. Keep out of reach of children.
            </p>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              © {new Date().getFullYear()} MCW Malta.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppCTA />
    </div>
  );
}
