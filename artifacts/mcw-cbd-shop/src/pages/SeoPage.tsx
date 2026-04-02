import { Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Phone, CheckCircle, Lock, Truck, Star, ArrowRight, ArrowLeft, MessageCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { SEO_PAGES_BY_SLUG } from "@/lib/seoPages";

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

const catEmoji: Record<string, string> = {
  Location: "📍",
  Benefits: "💚",
  City: "🏙️",
  Guides: "📖",
  Education: "🎓",
  Comparisons: "⚖️",
  Lifestyle: "✨",
  About: "🌿",
};

const LOCAL_BIZ_SCHEMA = (slug: string, name: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: `MCW CBD Relax Shop — ${name}`,
  url: `https://mcwrelaxshop.com/guides/${slug}`,
  telephone: "+35699536248",
  openingHours: "Mo-Su 09:00-23:30",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MT",
  },
  parentOrganization: { "@id": "https://mcwrelaxshop.com/#organization" },
});

const ARTICLE_SCHEMA = (slug: string, headline: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline,
  url: `https://mcwrelaxshop.com/guides/${slug}`,
  publisher: {
    "@type": "Organization",
    name: "MCW CBD Relax Shop",
    url: "https://mcwrelaxshop.com",
  },
  mainEntityOfPage: `https://mcwrelaxshop.com/guides/${slug}`,
});

const CATEGORY_LINKS: Record<string, { href: string; label: string }[]> = {
  Location: [
    { href: "/shop", label: "Shop All CBD Products" },
    { href: "/store-locator", label: "Find Your Nearest Store" },
    { href: "/guides", label: "Browse All Guides" },
    { href: "/blog", label: "Read Our Blog" },
  ],
  City: [
    { href: "/shop", label: "Shop All CBD Products" },
    { href: "/store-locator", label: "Find Your Nearest Store" },
    { href: "/guides", label: "Browse All Guides" },
    { href: "/blog", label: "CBD Education Blog" },
  ],
  Benefits: [
    { href: "/shop", label: "Shop CBD Oils" },
    { href: "/shop", label: "Shop CBD Gummies" },
    { href: "/guides", label: "CBD Dosage Guide" },
    { href: "/blog", label: "Read Our Blog" },
  ],
  Comparisons: [
    { href: "/shop", label: "Shop All Products" },
    { href: "/brands", label: "Our Brand Partners" },
    { href: "/guides", label: "Browse All Guides" },
    { href: "/blog", label: "Read Our Blog" },
  ],
  Guides: [
    { href: "/shop", label: "Shop CBD Products" },
    { href: "/guides", label: "Browse All Guides" },
    { href: "/store-locator", label: "Find a Store" },
    { href: "/blog", label: "Read Our Blog" },
  ],
  Education: [
    { href: "/shop", label: "Shop Lab-Tested CBD" },
    { href: "/brands", label: "Our Brand Partners" },
    { href: "/guides", label: "Browse All Guides" },
    { href: "/blog", label: "Read Our Blog" },
  ],
  Lifestyle: [
    { href: "/shop", label: "Shop All Products" },
    { href: "/guides", label: "Browse All Guides" },
    { href: "/blog", label: "Read Our Blog" },
    { href: "/store-locator", label: "Find a Store" },
  ],
  About: [
    { href: "/about", label: "About MCW" },
    { href: "/shop", label: "Shop All Products" },
    { href: "/store-locator", label: "Find a Store" },
    { href: "/blog", label: "Read Our Blog" },
  ],
};

const FALLBACK_LINKS = [
  { href: "/shop", label: "Shop All Products" },
  { href: "/guides", label: "Browse All Guides" },
  { href: "/blog", label: "Read Our Blog" },
  { href: "/store-locator", label: "Find a Store" },
];

interface SeoPageProps {
  slug: string;
}

export default function SeoPage({ slug }: SeoPageProps) {
  const page = SEO_PAGES_BY_SLUG[slug];

  if (!page) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-9xl font-bebas text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bebas tracking-wide mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">This guide doesn't exist.</p>
        <Link href="/guides" className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest rounded-xl hover:bg-gray-200 transition-colors">
          Browse All Guides
        </Link>
      </div>
    );
  }

  const schemaData = page.schemaType === "LocalBusiness"
    ? LOCAL_BIZ_SCHEMA(slug, page.h1)
    : ARTICLE_SCHEMA(slug, page.h1);

  const accentColor = catColors[page.cat] ?? "#22c55e";

  return (
    <>
      <SEO title={page.title} description={page.metaDescription} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="min-h-screen bg-[#080808] text-white">
        {/* Breadcrumb */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-green-400 transition-colors">Guides</Link>
            <span>/</span>
            <span style={{ color: accentColor }}>{page.label}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at top left, ${accentColor} 0%, transparent 60%)` }}
          />
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6"
                style={{ background: accentColor + "22", color: accentColor }}
              >
                {catEmoji[page.cat]} {page.cat}
              </span>

              <h1 className="text-5xl md:text-7xl font-bebas tracking-tight text-white leading-[0.9] mb-6">
                {page.h1}
              </h1>

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                {page.intro}
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: CheckCircle, label: "Lab Tested" },
                  { icon: Lock, label: "100% Legal" },
                  { icon: Truck, label: "Same-Day Delivery" },
                  { icon: Star, label: "Malta's #1 CBD Shop" },
                ].map(({ icon: Icon, label }) => (
                  <span key={label} className="flex items-center gap-1.5 text-xs font-medium text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                    <Icon size={11} className="text-green-400" />
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content + CTA grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-5">
              {page.bodyParagraphs.map((para, idx) => (
                <motion.p
                  key={idx}
                  className="text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Sidebar CTA */}
            <div className="space-y-4">
              {/* WhatsApp order CTA */}
              <motion.div
                className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6 sticky top-24"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <p className="text-xs font-black uppercase tracking-widest text-green-400 mb-3">Order Now</p>
                <h3 className="text-xl font-bebas tracking-wide text-white mb-3">
                  Get {page.label} delivered today
                </h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  Order via WhatsApp for same-day delivery anywhere in Malta. Open daily until 11:30 pm.
                </p>

                <a
                  href="https://wa.me/35699536248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 hover:bg-green-400 text-black font-black text-sm uppercase tracking-widest rounded-xl transition-all mb-3"
                >
                  <MessageCircle size={16} />
                  Order on WhatsApp
                </a>

                <div className="flex items-center gap-2 text-xs text-gray-500 justify-center">
                  <Phone size={10} />
                  <span>9953 6248</span>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                  {[
                    { icon: CheckCircle, text: "Lab tested products" },
                    { icon: Lock, text: "Less than 0.2% THC" },
                    { icon: Truck, text: "Island-wide delivery" },
                    { icon: MapPin, text: "4 stores in Malta" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-xs text-gray-400">
                      <Icon size={11} className="text-green-500 flex-shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Store Locations */}
        {(page.schemaType === "LocalBusiness") && (
          <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-3xl font-bebas tracking-wide text-white mb-6">
              Visit Us in Malta
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {["Sliema", "Gzira", "Mellieha", "Bugibba"].map((loc) => (
                <div key={loc} className="bg-[#0d0d0d] border border-white/5 rounded-xl p-4 hover:border-green-500/30 transition-all">
                  <MapPin size={18} className="text-green-400 mb-2" />
                  <p className="text-white font-medium text-sm">MCW CBD Shop</p>
                  <p className="text-gray-400 text-xs">{loc}, Malta</p>
                  <p className="text-green-500 text-xs mt-1">Open daily until 11:30 pm</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related links — category-aware */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-3xl font-bebas tracking-wide text-white mb-6">
            Explore More
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {(CATEGORY_LINKS[page.cat] ?? FALLBACK_LINKS).map(({ href, label }) => (
              <Link key={label} href={href} className="group flex items-center justify-between bg-[#0d0d0d] border border-white/5 rounded-xl p-4 hover:border-green-500/30 transition-all hover:-translate-y-0.5">
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{label}</span>
                <ArrowRight size={14} className="text-gray-600 group-hover:text-green-400 transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* Legal disclaimer */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-green-950/30 border border-green-500/20 rounded-xl p-5">
            <div className="flex items-start gap-3">
              <Lock size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-400 text-xs leading-relaxed">
                <strong className="text-green-300">Legal Disclaimer:</strong> All MCW CBD products contain less than 0.2% THC and are fully legal in Malta under current regulations. For adults 18+ only. CBD is not intended to diagnose, treat, cure, or prevent any disease. Consult a healthcare professional before use.
              </p>
            </div>
          </div>
        </section>

        {/* Back link */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link href="/guides" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-green-400 transition-colors">
            <ArrowLeft size={14} />
            Back to all guides
          </Link>
        </div>
      </div>
    </>
  );
}
