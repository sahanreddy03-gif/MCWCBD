import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { SEO } from "@/components/SEO";

const STORES = [
  {
    id: "sliema",
    name: "MCW Sliema",
    address: "Triq Bisazza, Sliema SLM 1640",
    hours: "Mon-Sun 09:00 - 22:00",
    phone: "+356 2134 0001",
    mapQuery: "Triq+Bisazza,+Sliema,+Malta"
  },
  {
    id: "gzira",
    name: "MCW Gzira",
    address: "Main Street, Gzira GZR 1234",
    hours: "Mon-Sun 09:00 - 22:00",
    phone: "+356 2133 0002",
    mapQuery: "Gzira,+Malta"
  },
  {
    id: "mellieha",
    name: "MCW Mellieha",
    address: "Main Street, Mellieha MLH 1000",
    hours: "Mon-Sun 10:00 - 21:00",
    phone: "+356 2152 0003",
    mapQuery: "Mellieha,+Malta"
  },
  {
    id: "bugibba",
    name: "MCW Bugibba",
    address: "Dawret il-Gżejjer, Bugibba SPB 2000",
    hours: "Mon-Sun 10:00 - 21:00",
    phone: "+356 2157 0004",
    mapQuery: "Bugibba,+Malta"
  }
];

export default function Stores() {
  return (
    <>
      <SEO title="Our Store Locations" />
      
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bebas tracking-wide mb-4">Find Us Across Malta</h1>
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
                {/* using the provided placeholder key for iframe */}
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} // Fake dark mode map
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&q=${store.mapQuery}`}
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
