import { motion } from "framer-motion";
import heroStoresImg from "../assets/hero-stores.png";
import { MapPin, Clock, Navigation } from "lucide-react";
import { SEO } from "@/components/SEO";
import { MCW_STORES } from "@/lib/locations";

const STORES = MCW_STORES.map((store) => ({
  ...store,
  hours: "Open daily · Closes 11:30 pm",
}));

export default function Stores() {
  return (
    <>
      <SEO title="MCW CBD Shop Locations — Valletta, Sliema, Mellieha & Bugibba" description="Find MCW CBD Relax Shop near you. Four verified stores across Malta: Valletta (main branch), Sliema, Mellieha, and Bugibba. Open daily until 11:30 pm. Visit us in store." />

      {/* Photo Hero */}
      <div className="relative h-72 sm:h-[420px] overflow-hidden">
        <img
          src={heroStoresImg}
          alt="MCW CBD Store Locations Malta"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-12 pb-10 max-w-7xl mx-auto w-full">
          <p className="text-[#22c55e] font-black uppercase tracking-[0.3em] text-xs sm:text-sm mb-2">Valletta · Sliema · Mellieha · Bugibba</p>
          <h1 className="font-bebas text-6xl sm:text-8xl md:text-[9rem] tracking-tight text-white leading-none drop-shadow-2xl">
            FIND A STORE
          </h1>
        </div>
      </div>

      <div className="pt-16 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bebas tracking-wide mb-4">Find Us Across Malta</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Visit our premium dispensaries for expert advice and to view our full collection in person.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {STORES.map((store, i) => (
            <motion.div 
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="h-64 bg-background relative border-b border-border">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                   style={{ border: 0 }}
                   src={store.googleEmbedUrl}
                   loading="lazy"
                  allowFullScreen
                  title={`Map to ${store.name}`}
                ></iframe>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bebas tracking-wide mb-6">{store.name}</h2>
                 {store.tag && (
                   <p className="text-primary text-xs font-black uppercase tracking-widest -mt-4 mb-5">{store.tag}</p>
                 )}
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 text-muted-foreground">
                    <MapPin className="text-primary shrink-0 mt-1" size={20} />
                     <span>
                       {store.address}
                       {store.addressNote && (
                         <span className="block text-xs mt-1 text-amber-500/80">{store.addressNote}</span>
                       )}
                       {store.mapNote && (
                         <span className="block text-xs mt-1 text-amber-500/80">{store.mapNote}</span>
                       )}
                     </span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Clock className="text-primary shrink-0" size={20} />
                    <span>{store.hours}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a 
                     href={store.directionsUrl}
                    target="_blank" rel="noreferrer"
                    className="flex-1 py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-center font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <Navigation size={16} /> Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
