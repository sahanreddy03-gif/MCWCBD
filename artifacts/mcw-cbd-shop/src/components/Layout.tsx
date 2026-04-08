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
      description: "Malta's #1 hemp and CBD destination. Premium CBD oils, flowers, vapes, gummies, and pre-rolls. 100% legal in Malta.",
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

      {/* Sticky header: disclaimer + nav */}
      <div className="sticky top-0 z-50">
        {/* Compliance Disclaimer Bar */}
        <div className="w-full bg-green-950 text-green-200 text-center text-[11px] py-2 px-4 border-b border-green-900/60 leading-tight">
          This website sells hemp-derived CBD products compliant with EU regulations (&lt;0.2% THC). Not intended for recreational or psychoactive use.
        </div>

        {/* Navigation */}
        <nav className="bg-black/95 backdrop-blur-md border-b border-green-900/40">
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
              View Range
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
                View Range via WhatsApp
              </a>
            </div>
          </div>
        )}
        </nav>
      </div>{/* end sticky header wrapper */}

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#080808] border-t-4 border-[#22c55e] mt-16">
        <div className="max-w-7xl mx-auto px-4 pt-14 pb-0">

          {/* Brand Header */}
          <div className="flex flex-col items-center mb-12 text-center">
            <img src={logoSrc} alt="MCW" className="h-20 w-20 rounded-full object-contain mb-5 ring-2 ring-[#22c55e]/30" />
            <h2 className="font-bebas text-5xl md:text-7xl tracking-widest text-white leading-none">
              MCW <span className="text-[#22c55e]">CBD</span> RELAX SHOP
            </h2>
            <p className="text-gray-400 text-xs tracking-[0.3em] uppercase mt-3">Malta's #1 Hemp &amp; CBD Destination</p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href="https://wa.me/35699536248"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-[#22c55e] text-black font-black text-xs uppercase tracking-widest hover:bg-green-400 transition-colors"
              >
                Order on WhatsApp
              </a>
              <a
                href="tel:+35699536248"
                className="px-7 py-3 border-2 border-white/20 text-white font-black text-xs uppercase tracking-widest hover:border-[#22c55e] hover:text-[#22c55e] transition-colors"
              >
                Call: 9953 6248
              </a>
            </div>
          </div>

          {/* 4-Column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-0 border-t-2 border-white/10 pt-12 pb-14">
            {/* Shop */}
            <div>
              <h3 className="font-bebas text-2xl tracking-widest text-[#22c55e] mb-5 pb-2 border-b border-[#22c55e]/30">Shop</h3>
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
                    <Link href={href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Discover */}
            <div>
              <h3 className="font-bebas text-2xl tracking-widest text-[#22c55e] mb-5 pb-2 border-b border-[#22c55e]/30">Discover</h3>
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
                    <Link href={href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stores */}
            <div>
              <h3 className="font-bebas text-2xl tracking-widest text-[#22c55e] mb-5 pb-2 border-b border-[#22c55e]/30">Our Stores</h3>
              <ul className="space-y-3">
                {[
                  ["Sliema (Flagship)", "/store-locator"],
                  ["Gzira", "/store-locator"],
                  ["Mellieha", "/store-locator"],
                  ["Bugibba", "/store-locator"],
                  ["Valletta — Coming Soon", "/store-locator"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-bebas text-2xl tracking-widest text-[#22c55e] mb-5 pb-2 border-b border-[#22c55e]/30">Connect</h3>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+35699536248" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-3">
                    <span className="text-[#22c55e] text-base">📞</span>
                    <span>9953 6248</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/35699536248" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-3">
                    <span className="text-[#22c55e] text-base">💬</span>
                    <span>WhatsApp Order</span>
                  </a>
                </li>
                <li className="text-gray-400 text-sm flex items-start gap-3">
                  <span className="text-[#22c55e] text-base shrink-0">📍</span>
                  <span>Triq Bisazza, Sliema</span>
                </li>
                <li className="text-gray-400 text-sm flex items-start gap-3">
                  <span className="text-[#22c55e] text-base shrink-0">🕐</span>
                  <span>Open Daily · 9am – 11:30pm</span>
                </li>
              </ul>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-[#22c55e] font-bebas text-sm tracking-widest">Payment</p>
                <p className="text-gray-400 text-xs mt-1.5">Revolut · Cash on Delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Statement */}
        <div className="border-t border-white/10 px-4 py-5 text-center">
          <p className="text-gray-500 text-[10px] leading-relaxed max-w-3xl mx-auto">
            MCW CBD Relax Shop does not sell cannabis or THC products exceeding legal limits. All products comply with EU Directive 2019/515 and Maltese law (≤0.2% THC). Products are hemp-derived food supplements or collectibles and are not medicines. Adults 18+ only.
          </p>
        </div>

        {/* Bold Bottom Bar */}
        <div className="bg-[#22c55e]">
          <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
            <span className="font-bebas text-2xl tracking-widest text-black">
              © {new Date().getFullYear()} MCW CBD Relax Shop Malta
            </span>
            <p className="text-black/70 text-[10px] uppercase tracking-widest text-center max-w-sm">
              All products &lt;0.2% THC · Legal in Malta · Adults 18+ · Sedqa: <strong>1930</strong>
            </p>
            <div className="flex gap-5 font-black text-xs uppercase tracking-widest text-black">
              <a href="/terms" className="hover:opacity-70 transition-opacity">Terms</a>
              <a href="/privacy" className="hover:opacity-70 transition-opacity">Privacy</a>
              <a href="#" className="hover:opacity-70 transition-opacity">Shipping</a>
              <a href="/compliance" className="hover:opacity-70 transition-opacity">Compliance</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp CTA */}
      <WhatsAppCTA />
    </div>
  );
}
