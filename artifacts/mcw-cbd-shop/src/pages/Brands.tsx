import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Globe2 } from "lucide-react";
import { SEO } from "@/components/SEO";

const BRAND_REGIONS = [
  {
    region: "USA Premium Imports",
    brands: [
      { name: "STIIIZY", desc: "Award-winning vaporizers and premium indoor cannabis.", products: 15 },
      { name: "Cookies", desc: "The most globally recognized cannabis lifestyle brand.", products: 24 },
      { name: "Jeeter", desc: "The #1 pre-roll brand in the United States.", products: 12 },
      { name: "Tyson 2.0", desc: "Mike Tyson's premium undisputed cannabis brand.", products: 8 },
      { name: "Jungle Boys", desc: "Cult cultivators from Los Angeles.", products: 10 },
      { name: "Raw Garden", desc: "Clean Green Certified live resin products.", products: 14 }
    ]
  },
  {
    region: "European Masters",
    brands: [
      { name: "Barona", desc: "Dutch cultivation excellence.", products: 6 },
      { name: "Euphoria", desc: "Premium CBD and Hemp products from Germany.", products: 18 },
      { name: "Sensi Seeds", desc: "The legendary Amsterdam seed bank.", products: 5 },
      { name: "Amsterdam Gold", desc: "Traditional hash and flower from NL.", products: 9 },
      { name: "Dutch Gold", desc: "Premium organic CBD products.", products: 11 },
      { name: "MCW House", desc: "Our own premium curated collection.", products: 30 }
    ]
  }
];

export default function Brands() {
  return (
    <>
      <SEO title="Our Brands" />
      
      <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bebas tracking-wide mb-6">Our Brand Family</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The world's best, right here in Malta. We partner directly with legendary cultivators to ensure authenticity and quality.
          </p>
        </div>

        <div className="space-y-24">
          {BRAND_REGIONS.map((section, idx) => (
            <div key={section.region}>
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
                <Globe2 className="text-primary" size={28} />
                <h2 className="text-4xl font-bebas tracking-wide">{section.region}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.brands.map((brand, i) => (
                  <motion.div
                    key={brand.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card border border-border p-8 rounded-2xl group hover:border-primary/50 transition-colors"
                  >
                    <h3 className="text-3xl font-bebas tracking-widest mb-3 group-hover:text-primary transition-colors">{brand.name}</h3>
                    <p className="text-muted-foreground mb-8 min-h-[48px]">{brand.desc}</p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs font-bold uppercase tracking-widest text-white/50">{brand.products} Products</span>
                      <Link href="/shop" className="text-sm font-bold uppercase tracking-wider text-primary flex items-center gap-1 hover:text-white transition-colors">
                        Shop <ArrowRight size={16} />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 bg-primary/10 border border-primary/20 rounded-3xl text-center">
          <h2 className="text-4xl font-bebas tracking-wide mb-4">Want to stock your brand at MCW?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">We are always looking to expand our catalog with high-quality, fully compliant products.</p>
          <a href="mailto:info@mcw.com.mt" className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-colors">
            Contact Purchasing
          </a>
        </div>
      </div>
    </>
  );
}
