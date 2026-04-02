import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield, Leaf, Users } from "lucide-react";
import { SEO } from "@/components/SEO";

const FAQS = [
  { q: "Is CBD legal in Malta?", a: "Yes, CBD is legal in Malta provided it contains less than 0.2% THC. All MCW products are fully compliant with Maltese and EU regulations." },
  { q: "What's the difference between CBD and THC?", a: "CBD (Cannabidiol) is non-psychoactive and is known for relaxing and therapeutic effects. THC is the psychoactive compound. Our products contain <0.2% THC and will not get you 'high'." },
  { q: "Are your products lab tested?", a: "Absolutely. Every single product we stock undergoes rigorous third-party EU laboratory testing for cannabinoid profile, heavy metals, and pesticides." },
  { q: "Can tourists buy from MCW?", a: "Yes! As long as you are 18 years or older, you can purchase from any of our stores. Please bring valid ID." },
  { q: "Do you deliver?", a: "Yes, we offer same-day delivery across the entire island of Malta for orders placed via WhatsApp before 4:00 PM." },
  { q: "What is H4CBD?", a: "H4CBD is a hydrogenated form of CBD that binds more strongly to CB1 receptors, often described as offering more noticeable relaxing effects than standard CBD." },
  { q: "What is HHC?", a: "HHC is a minor cannabinoid occurring naturally in trace amounts. It is psychoactive and currently legal in Malta. We advise starting with low doses." },
  { q: "Do you offer consultations?", a: "Yes, our staff at all 4 locations are highly trained and can provide personal consultations to help you find the right product for your needs." }
];

export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <SEO title="About MCW — Malta's #1 CBD Shop" description="Learn about MCW CBD Relax Shop — Malta's leading cannabis and CBD retailer with 4 stores in Sliema, Gzira, Mellieha, and Bugibba. Premium products, expert staff, lab-tested quality." />
      
      <div className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bebas tracking-wide mb-8">Malta's Home for the World's Best</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            MCW started in Sliema with a simple belief — Maltese people deserve access to the world's finest, safest, and legal cannabis and CBD products. 
            We grew to four locations because we do it right: real products from real brands, with real education and real staff who care.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <div className="w-16 h-16 mx-auto bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bebas tracking-wide mb-4">Uncompromising Quality</h3>
              <p className="text-muted-foreground">We reject 90% of brands that approach us. If it doesn't pass our rigorous lab testing and quality standards, it doesn't make the shelf.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <div className="w-16 h-16 mx-auto bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bebas tracking-wide mb-4">Community First</h3>
              <p className="text-muted-foreground">We aren't just a store; we are part of the Maltese cannabis community. Education, transparency, and service are our core pillars.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border text-center">
              <div className="w-16 h-16 mx-auto bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
                <Leaf size={32} />
              </div>
              <h3 className="text-2xl font-bebas tracking-wide mb-4">100% Compliant</h3>
              <p className="text-muted-foreground">We work closely with legal experts to ensure every single item complies strictly with Maltese and European Union laws.</p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bebas tracking-wide mb-10 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-border rounded-xl bg-card overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <ChevronDown className={`shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
