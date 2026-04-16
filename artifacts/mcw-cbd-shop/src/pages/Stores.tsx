import { motion } from "framer-motion";
import heroStoresImg from "../assets/hero-stores.png";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { SEO } from "@/components/SEO";

const STORES = [
  {
    id: "sliema",
    name: "MCW Sliema",
    address: "Triq Bisazza, Sliema SLM 1641",
    hours: "Open daily · Closes 11:30 pm",
    phone: "+356 99536248",
    mapQuery: "Triq+Bisazza,+Sliema,+Malta",
    osm_embed: "https://www.openstreetmap.org/export/embed.html?bbox=14.4977,35.9067,14.5077,35.9167&layer=mapnik&marker=35.9117,14.5027"
  },
  {
    id: "gzira",
    name: "MCW Gzira",
    address: "348, Manuel Dimech Street, Gzira",
    hours: "Open daily · Closes 11:30 pm",
    phone: "+356 99536248",
    mapQuery: "348+Manuel+Dimech+Street,+Gzira,+Malta",
    osm_embed: "https://www.openstreetmap.org/export/embed.html?bbox=14.4930,35.9013,14.5030,35.9113&layer=mapnik&marker=35.9063,14.4980"
  },
  {
    id: "mellieha",
    name: "MCW Mellieha",
    address: "51 Triq Gorg Borg Olivier, Mellieħa MLH 1025",
    hours: "Open daily · Closes 11:30 pm",
    phone: "+356 99536248",
    mapQuery: "51+Triq+Gorg+Borg+Olivier,+Mellieha,+Malta",
    osm_embed: "https://www.openstreetmap.org/export/embed.html?bbox=14.3570,35.9547,14.3670,35.9647&layer=mapnik&marker=35.9597,14.3620"
  },
  {
    id: "bugibba",
    name: "MCW Bugibba",
    address: "Bugibba Square, San Pawl il-Baħar SPB 2510",
    hours: "Open daily · Closes 11:30 pm",
    phone: "+356 99536248",
    mapQuery: "Bugibba+Square,+St+Pauls+Bay,+Malta",
    osm_embed: "https://www.openstreetmap.org/export/embed.html?bbox=14.4120,35.9458,14.4220,35.9558&layer=mapnik&marker=35.9508,14.4170"
  },
  {
    id: "valletta",
    name: "MCW Valletta",
    address: "94 First Floor, Triq San Gwann, Valletta VLT",
    hours: "Open daily · Closes 11:30 pm",
    phone: "+356 99536248",
    mapQuery: "94+Triq+San+Gwann,+Valletta,+Malta",
    osm_embed: "https://www.openstreetmap.org/export/embed.html?bbox=14.5095,35.8939,14.5195,35.9039&layer=mapnik&marker=35.8989,14.5145"
  }
];

export default function Stores() {
  return (
    <>
      <SEO title="MCW CBD Shop Locations — Sliema, Gzira, Mellieha, Bugibba & Valletta" description="Find MCW CBD Relax Shop near you. 5 stores across Malta: Sliema (flagship), Gzira, Mellieha, Bugibba, and Valletta. Open daily until 11:30 pm. Same-day island-wide delivery." />

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
          <p className="text-[#22c55e] font-black uppercase tracking-[0.3em] text-xs sm:text-sm mb-2">Sliema · Gzira · Mellieha · Bugibba · Valletta</p>
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
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  src={store.osm_embed}
                  allowFullScreen
                  title={`Map to ${store.name}`}
                ></iframe>
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bebas tracking-wide mb-6">{store.name}</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 text-muted-foreground">
                    <MapPin className="text-primary shrink-0 mt-1" size={20} />
                    <span>{store.address}</span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Clock className="text-primary shrink-0" size={20} />
                    <span>{store.hours}</span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Phone className="text-primary shrink-0" size={20} />
                    <span>{store.phone}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${store.mapQuery}`}
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
