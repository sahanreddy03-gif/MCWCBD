import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { WhatsAppCTA } from "./WhatsAppCTA";
import { AgeGate } from "./AgeGate";
import logoSrc from "@assets/Untitled_design_(42)_1773502384512.png";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mcwrelaxshop.com/#organization",
      name: "MCW CBD Relax Shop",
      url: "https://mcwrelaxshop.com",
      logo: "https://mcwrelaxshop.com/logo.png",
      sameAs: [
        "https://instagram.com/mcwrelaxshop",
        "https://wa.me/35699536248",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+35699536248",
        contactType: "customer service",
        availableLanguage: ["English", "Maltese"],
      },
    },
    {
      "@type": ["LocalBusiness", "Store"],
      "@id": "https://mcwrelaxshop.com/#sliema",
      name: "MCW CBD Relax Shop — Sliema",
      description: "Malta's #1 cannabis and CBD destination. Premium CBD oils, flowers, vapes, gummies, and pre-rolls. 100% legal in Malta.",
      url: "https://mcwrelaxshop.com",
      telephone: "+35699536248",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Triq Bisazza",
        addressLocality: "Sliema",
        postalCode: "SLM 1641",
        addressCountry: "MT",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 35.9131,
        longitude: 14.5027,
      },
      openingHours: "Mo-Su 09:00-23:30",
      priceRange: "€€",
      hasMap: "https://maps.google.com/?q=MCW+CBD+Relax+Shop+Sliema+Malta",
      parentOrganization: { "@id": "https://mcwrelaxshop.com/#organization" },
    },
    {
      "@type": ["LocalBusiness", "Store"],
      "@id": "https://mcwrelaxshop.com/#gzira",
      name: "MCW CBD Relax Shop — Gzira",
      url: "https://mcwrelaxshop.com/store-locator",
      telephone: "+35699536248",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gzira",
        addressCountry: "MT",
      },
      openingHours: "Mo-Su 09:00-23:30",
      parentOrganization: { "@id": "https://mcwrelaxshop.com/#organization" },
    },
    {
      "@type": ["LocalBusiness", "Store"],
      "@id": "https://mcwrelaxshop.com/#mellieha",
      name: "MCW CBD Relax Shop — Mellieha",
      url: "https://mcwrelaxshop.com/store-locator",
      telephone: "+35699536248",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mellieha",
        addressCountry: "MT",
      },
      openingHours: "Mo-Su 09:00-23:30",
      parentOrganization: { "@id": "https://mcwrelaxshop.com/#organization" },
    },
    {
      "@type": ["LocalBusiness", "Store"],
      "@id": "https://mcwrelaxshop.com/#bugibba",
      name: "MCW CBD Relax Shop — Bugibba",
      url: "https://mcwrelaxshop.com/store-locator",
      telephone: "+35699536248",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bugibba",
        addressCountry: "MT",
      },
      openingHours: "Mo-Su 09:00-23:30",
      parentOrganization: { "@id": "https://mcwrelaxshop.com/#organization" },
    },
  ],
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Brands", path: "/brands" },
  { name: "Blog", path: "/blog" },
  { name: "Guides", path: "/guides" },
  { name: "Trust", path: "/trust" },
  { name: "Wholesale", path: "/b2b" },
  { name: "Stores", path: "/store-locator" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
      />
      <AgeGate />

      {/* Navigation */}
      <nav className="bg-black/95 backdrop-blur-md border-b border-green-900/40 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img src={logoSrc} alt="MCW" className="h-9 w-9 rounded-full object-contain" />
            <span className="font-bebas text-xl tracking-widest hidden sm:block">
              MCW <span className="text-green-400">CBD</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-7 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "font-bebas text-[15px] tracking-widest transition-colors",
                  location === link.path
                    ? "text-green-400"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: WhatsApp CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/35699536248"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 bg-green-500 hover:bg-green-400 text-black font-black text-[11px] tracking-widest uppercase px-4 py-2 transition-colors"
            >
              <MessageCircle size={13} />
              Order Now
            </a>
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-green-900/40 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "block px-5 py-3 font-bebas text-lg tracking-widest transition-colors border-b border-gray-900",
                  location === link.path
                    ? "text-green-400"
                    : "text-gray-300 hover:text-white"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-5 pt-4">
              <a
                href="https://wa.me/35699536248"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-black font-black text-sm uppercase tracking-widest py-3 w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle size={16} />
                Order via WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-black border-t border-green-900/30 pt-16 pb-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto">
          {/* Brand Header */}
          <div className="flex flex-col items-center mb-14">
            <img src={logoSrc} alt="MCW" className="h-16 w-16 rounded-full object-contain mb-4" />
            <h2 className="font-bebas text-3xl md:text-4xl tracking-widest text-white">
              MCW <span className="text-green-400">CBD RELAX SHOP</span>
            </h2>
            <p className="text-gray-600 text-xs tracking-widest uppercase mt-2">Malta's #1 Cannabis &amp; CBD Destination</p>
          </div>

          {/* 4-Column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-t border-gray-900 pt-12">
            {/* Shop */}
            <div>
              <h3 className="font-bebas text-base tracking-widest text-green-400 mb-5">Shop</h3>
              <ul className="space-y-3">
                {[
                  ["CBD Oils", "/shop?category=CBD+Oils"],
                  ["CBD Flowers", "/shop?category=CBD+Flowers"],
                  ["CBD Vapes", "/shop?category=CBD+Vapes"],
                  ["CBD Gummies", "/shop?category=CBD+Gummies"],
                  ["Pre-Rolls", "/shop?category=Pre-Rolls"],
                  ["MCW Originals", "/shop?category=MCW+Originals"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-gray-500 hover:text-green-400 text-sm transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pages */}
            <div>
              <h3 className="font-bebas text-base tracking-widest text-green-400 mb-5">Discover</h3>
              <ul className="space-y-3">
                {[
                  ["CBD Blog", "/blog"],
                  ["163 Guides", "/guides"],
                  ["Trust & Quality", "/trust"],
                  ["Store Locator", "/store-locator"],
                  ["FAQ", "/faq"],
                  ["Contact", "/contact"],
                  ["Brands", "/brands"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-gray-500 hover:text-green-400 text-sm transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stores */}
            <div>
              <h3 className="font-bebas text-base tracking-widest text-green-400 mb-5">Our Stores</h3>
              <ul className="space-y-3">
                {[
                  "Sliema (Main Branch)",
                  "Gzira",
                  "Mellieha",
                  "Bugibba",
                  "Valletta (Coming Soon)",
                ].map((store) => (
                  <li key={store}>
                    <Link href="/store-locator" className="text-gray-500 hover:text-green-400 text-sm transition-colors">
                      {store}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-bebas text-base tracking-widest text-green-400 mb-5">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+35699536248" className="text-gray-500 hover:text-green-400 text-sm transition-colors flex items-center gap-2">
                    <span className="text-green-900">📞</span> 9953 6248
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/35699536248" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 text-sm transition-colors flex items-center gap-2">
                    <span className="text-green-900">💬</span> WhatsApp Order
                  </a>
                </li>
                <li className="text-gray-600 text-sm flex items-start gap-2">
                  <span className="text-green-900 shrink-0">📍</span> Triq Bisazza, Sliema
                </li>
                <li className="text-gray-600 text-sm flex items-start gap-2">
                  <span className="text-green-900 shrink-0">🕐</span> Open · Closes 11:30 pm
                </li>
              </ul>
              <div className="mt-5 pt-5 border-t border-gray-900">
                <p className="text-gray-700 text-[10px] uppercase tracking-widest">Payment</p>
                <p className="text-gray-600 text-xs mt-1.5">Revolut · Cash on Delivery</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-900 pt-8 text-center space-y-4">
            <p className="text-gray-700 text-[10px] leading-relaxed max-w-3xl mx-auto">
              All MCW CBD products contain less than 0.2% THC and are legal for sale in Malta. For adults 18+ only.
              CBD products are not intended to diagnose, treat, cure, or prevent any disease.
              Consult a healthcare professional before use. Sedqa Helpline: <strong>1930</strong>.
            </p>
            <div className="flex items-center justify-center gap-6 text-gray-800 text-[10px] uppercase tracking-widest">
              <span>© {new Date().getFullYear()} MCW CBD Relax Shop Malta</span>
              <span className="w-px h-3 bg-gray-800" />
              <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
              <span className="w-px h-3 bg-gray-800" />
              <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
              <span className="w-px h-3 bg-gray-800" />
              <a href="#" className="hover:text-gray-600 transition-colors">Shipping</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp CTA */}
      <WhatsAppCTA />
    </div>
  );
}
