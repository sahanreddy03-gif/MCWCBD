import { MapPin, Clock } from "lucide-react";
import heroContactImg from "../assets/hero-contact.webp";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { MCW_STORES } from "@/lib/locations";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const contactItems = [
  {
    icon: MapPin,
    label: "Main Store",
    value: `${MCW_STORES[0].name} Branch`,
    sub: [MCW_STORES[0].address, MCW_STORES[0].mapNote].filter(Boolean).join(" · "),
    href: MCW_STORES[0].googleMapsUrl,
    external: true,
  },
  {
    icon: Clock,
    label: "Store Hours",
    value: "Daily · 12:00–22:00",
    sub: "Every day, all locations",
  },
];

export default function Contact() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mcwcbd.com/" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://mcwcbd.com/contact" },
    ],
  };

  return (
    <>
      <SEO
        title="Contact MCW — CBD Shop Malta"
        description="Visit MCW CBD Relax Shop at one of our four verified Malta locations for in-person purchasing and questions."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="min-h-screen bg-black text-white">

      {/* Photo Hero */}
      <div className="relative h-72 sm:h-[420px] overflow-hidden">
        <img
          src={heroContactImg}
          alt="MCW CBD Shop Malta — Contact Us"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-12 pb-10 max-w-7xl mx-auto w-full">
          <p className="text-[#22c55e] font-black uppercase tracking-[0.3em] text-xs sm:text-sm mb-2">MCW CBD Relax Shop</p>
          <h1 className="font-bebas text-6xl sm:text-8xl md:text-[9rem] tracking-tight text-white leading-none drop-shadow-2xl">
            GET IN TOUCH
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2 variants={fadeUp} className="font-bebas text-4xl md:text-5xl tracking-widest text-white mb-8">
              Contact <span className="text-green-400">Info</span>
            </motion.h2>

            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, sub, href, external }) => {
                const Wrapper: any = href ? "a" : "div";
                const wrapperProps = href
                  ? { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
                  : {};
                return (
                  <motion.div key={label} variants={fadeUp}>
                    <Wrapper
                      {...(wrapperProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                      className="flex items-start gap-5 bg-[#080808] border border-gray-800 hover:border-green-700/50 p-6 transition-all duration-300 group block"
                    >
                      <div className="w-10 h-10 border border-gray-800 group-hover:border-green-800 flex items-center justify-center shrink-0 transition-colors">
                        <Icon className="w-5 h-5 text-green-600" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-700 uppercase tracking-widest mb-1">{label}</p>
                        <p className="text-white text-sm font-medium group-hover:text-green-400 transition-colors">{value}</p>
                        <p className="text-gray-600 text-xs mt-0.5">{sub}</p>
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>

            {/* Locations strip */}
            <motion.div variants={fadeUp} className="mt-8">
              <p className="text-[10px] text-gray-700 uppercase tracking-widest mb-4">Our Locations</p>
              <div className="grid grid-cols-4 gap-2">
                {MCW_STORES.map((store) => (
                  <a
                    key={store.id}
                    href={store.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-800 py-3 text-center hover:border-green-700/50 transition-colors"
                  >
                    <p className="font-bebas text-[13px] tracking-widest text-gray-500">{store.name}</p>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Visit Us */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-bebas text-4xl md:text-5xl tracking-widest text-white mb-8">
              Visit <span className="text-green-400">Us</span>
            </h2>

            <div className="bg-[#080808] border border-gray-800 p-7 md:p-8">
              <p className="text-gray-400 text-sm leading-relaxed">
                MCW is an in-store shop. Visit any of our four Malta locations for product guidance, purchases, and
                answers to your questions. Use the store locator to check opening hours and get directions to the branch
                that suits you.
              </p>
              <a
                href="/store-locator"
                className="mt-8 w-full bg-green-500 hover:bg-green-400 text-black font-black text-sm uppercase tracking-widest py-4 transition-colors flex items-center justify-center gap-2"
              >
                <MapPin size={16} />
                Visit Stores
              </a>
              <p className="text-gray-700 text-xs mt-5 leading-relaxed">
                Walk-ins are welcome daily from 12:00–22:00. Select a location below or open the store locator for
                full directions.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
    </>
  );
}
