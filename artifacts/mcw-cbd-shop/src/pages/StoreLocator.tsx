import { MapPin, Clock, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { MCW_STORES } from "@/lib/locations";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const stores = MCW_STORES.map((store) => ({
  ...store,
  hours: "Work time -12:00 - 22:00",
  featured: store.id === "valletta",
}));

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mcwcbd.com/" },
    { "@type": "ListItem", position: 2, name: "Store Locator", item: "https://mcwcbd.com/store-locator" },
  ],
};

export default function StoreLocator() {
  return (
    <>
      <SEO
        title="Find a CBD Store in Malta — MCW Locations"
        description="MCW CBD Relax Shop has four verified locations across Malta: Valletta (main branch), Sliema, Mellieha, and Bugibba. Work time -12:00 - 22:00. Visit us in store."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <div className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 via-black/80 to-black pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,197,94,0.12),transparent)] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-green-400 font-bebas tracking-widest text-base mb-3">Malta · 4 Locations</p>
          <h1 className="font-bebas text-7xl md:text-9xl tracking-widest text-white mb-5 leading-none">
            FIND US
          </h1>
          <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">
            Visit any of our premium CBD stores across Malta. Work time -12:00 - 22:00.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-24">

        {/* Main branch map; each card below links to its verified Google listing. */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-[#080808] border border-gray-800 h-64 overflow-hidden"
        >
          <iframe
            title="Google Maps listing for MCW Valletta main branch"
            src={MCW_STORES[0].googleEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </motion.div>

        {/* Store Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ show: { transition: { staggerChildren: 0.09 } } }}
          className="grid md:grid-cols-2 gap-5"
        >
          {stores.map((store) => (
            <motion.div
              key={store.id}
              variants={fadeUp}
              className={`group relative bg-[#080808] border p-8 transition-all duration-300 ${
                store.featured
                  ? "border-green-700/60 hover:border-green-500"
                  : "border-gray-800 hover:border-green-700/50"
              }`}
            >
              {store.tag && (
                <span className={`inline-block font-bebas tracking-widest text-[11px] px-3 py-1 mb-4 ${
                  store.featured ? "bg-green-500 text-black" : "bg-gray-800 text-gray-400"
                }`}>
                  {store.tag}
                </span>
              )}

              <h3 className="font-bebas text-4xl tracking-widest text-white mb-6 group-hover:text-green-400 transition-colors">
                {store.name}
              </h3>

              <div className="space-y-4 mb-7">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-green-700 mt-0.5 shrink-0" strokeWidth={1.5} />
                   <div>
                     <p className="text-gray-500 text-sm">{store.address}</p>
                     {store.addressNote && (
                       <p className="text-amber-500/80 text-xs mt-1">{store.addressNote}</p>
                     )}
                     {store.mapNote && (
                       <p className="text-amber-500/80 text-xs mt-1">{store.mapNote}</p>
                     )}
                   </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-green-700 shrink-0" strokeWidth={1.5} />
                  <p className="text-gray-500 text-sm">{store.hours}</p>
                </div>
              </div>

              <div className="flex gap-3">
                  <a
                    href="/contact"
                    className="flex-1 bg-green-500 hover:bg-green-400 text-black font-black text-[11px] uppercase tracking-widest py-3 text-center transition-colors"
                  >
                    Contact Us
                  </a>
                  <a
                     href={store.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-700 hover:border-green-600 text-gray-400 hover:text-green-400 font-black text-[11px] uppercase tracking-widest py-3 flex items-center justify-center gap-2 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Directions
                  </a>
                </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 border border-gray-800 p-8 text-center"
        >
          <p className="font-bebas text-2xl tracking-widest text-green-400 mb-3">Walk-ins Always Welcome</p>
          <p className="text-gray-600 text-sm max-w-lg mx-auto leading-relaxed">
             Work time -12:00 - 22:00. Our expert staff will guide you to the perfect product for your lifestyle.
          </p>
        </motion.div>

      </div>
    </div>
    </>
  );
}
