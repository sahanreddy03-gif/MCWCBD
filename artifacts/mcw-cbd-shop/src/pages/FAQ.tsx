import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "@/components/SEO";

const faqs = [
  { q: "Is CBD legal in Malta?", a: "Yes. CBD products with less than 0.2% THC are fully legal in Malta. Every MCW product complies with this regulation." },
  { q: "What is the difference between CBD and THC?", a: "CBD (Cannabidiol) is non-intoxicating. THC (Tetrahydrocannabinol) produces a 'high'. Our products contain minimal THC (<0.2%) — safe for daily use." },
  { q: "Will CBD products make me high?", a: "No. Our products contain less than 0.2% THC — not nearly enough to produce any psychoactive effect." },
  { q: "How do I use CBD flowers?", a: "CBD flowers can be vaporized, smoked in a joint or pipe, or brewed as tea. Start small to find what works for you." },
  { q: "What are the benefits of CBD?", a: "Many users report relaxation, stress relief, and improved sleep. CBD interacts with the endocannabinoid system. Always consult a healthcare professional before use." },
  { q: "How long do the effects last?", a: "Vapes and flowers: 5–15 min onset, 2–4 hours duration. Oils take longer but last longer. Individual results vary." },
  { q: "Are your products lab-tested?", a: "Yes. Every MCW product has third-party lab reports verifying cannabinoid profiles, potency, pesticides, heavy metals, and purity." },
  { q: "What payment methods do you accept?", a: "Revolut transfer and Cash on Delivery (COD). You can also pay in person at any store location." },
  { q: "Do you offer delivery?", a: "Yes. Delivery is €3.50 for orders under €50, and FREE for orders €50 and above. Order via WhatsApp." },
  { q: "What brands do you stock?", a: "We carry premium international CBD brands including Canntropy, Euphoria, Hemnia, Jeeter, and many more — all verified for quality and Malta compliance." },
  { q: "Do you sell HHC, HHCp, or THCP?", a: "No. These are banned substances in Malta. MCW only sells legal CBD products with <0.2% THC." },
  { q: "How do I contact customer support?", a: "WhatsApp or call 9953 6248, or walk into any of our 4 Malta store locations. We're here daily until 11:30 pm." },
  { q: "What is your return policy?", a: "Contact us within 7 days of purchase if you're not satisfied. We will find a solution." },
  { q: "Are there age restrictions?", a: "Yes — all products are strictly 18+. Age verification is required online and in store." },
  { q: "Can I use CBD while pregnant or nursing?", a: "Consult your healthcare provider first. CBD may interact with medications or affect pregnancy." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://mcwrelaxshop.com/" },
      { "@type": "ListItem", position: 2, name: "FAQ", item: "https://mcwrelaxshop.com/faq" },
    ],
  };

  return (
    <>
      <SEO
        title="FAQ — CBD Malta"
        description="Got questions about CBD in Malta? Find answers on legality, products, delivery, and more. MCW CBD Relax Shop — Malta's #1 CBD destination."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <div className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 via-black/80 to-black pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,197,94,0.12),transparent)] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-green-400 font-bebas tracking-widest text-base mb-3">Got Questions?</p>
          <h1 className="font-bebas text-7xl md:text-9xl tracking-widest text-white mb-5 leading-none">FAQ</h1>
          <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">
            Everything you need to know about MCW CBD products, delivery, and legality in Malta.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-24">

        {/* FAQ Items */}
        <div className="space-y-px">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-900 group">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left gap-6 hover:text-green-400 transition-colors"
              >
                <span className={`text-sm md:text-base font-medium transition-colors ${open === i ? "text-green-400" : "text-gray-300"}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-green-800 transition-transform duration-300 ${open === i ? "rotate-180 text-green-500" : ""}`}
                  strokeWidth={1.5}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 text-sm leading-relaxed pb-6">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#080808] border border-gray-800 p-10 text-center"
        >
          <h2 className="font-bebas text-3xl md:text-4xl tracking-widest text-white mb-3">Still have questions?</h2>
          <p className="text-gray-600 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
            Our team is online daily until 11:30 pm. Message us on WhatsApp for a fast, personal answer.
          </p>
          <a
            href="https://wa.me/35699536248"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-black text-sm uppercase tracking-widest px-8 py-4 transition-colors"
          >
            <MessageCircle size={16} />
            Message us on WhatsApp
          </a>
        </motion.div>

      </div>
    </div>
    </>
  );
}
