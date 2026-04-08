import { CheckCircle, Award, Leaf, Shield, FlaskConical, MapPin } from "lucide-react";
import heroTrustImg from "../assets/hero-trust.jpeg";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

const pillars = [
  {
    icon: CheckCircle,
    title: "Legal Compliance",
    body: "All products contain less than 0.2% THC — fully compliant with Maltese law. We never stock banned substances like HHC, HHCp, or THCP.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    body: "Sourced exclusively from trusted international brands. Every batch is tested and verified for potency, purity, and safety.",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    body: "Our CBD is derived from premium-grade EU-certified hemp plants — nothing synthetic, nothing artificial.",
  },
  {
    icon: Shield,
    title: "Customer Protection",
    body: "Secure ordering, multiple payment options, fast WhatsApp support, and a 7-day satisfaction guarantee.",
  },
];

const labChecks = [
  "Accurate cannabinoid profiles (CBD, THC, CBN, H4CBD, THCV)",
  "Pesticide & heavy metal screening",
  "Microbial contamination analysis",
  "Solvent residue testing",
  "Potency verification on every batch",
];

const commitments = [
  { title: "Transparency", body: "Complete product info — lab reports, cannabinoid profiles, and sourcing details for every item in our catalogue." },
  { title: "Quality Assurance", body: "Our team personally evaluates every product batch before it hits the shelf. Zero compromise on standards." },
  { title: "Legal Compliance", body: "Strictly Malta-law-aligned. Every product sold is fully legal for purchase and consumption on the island." },
  { title: "Expert Support", body: "Questions about effects, dosage, or products? Our knowledgeable team is a WhatsApp message away." },
];

const stores = [
  { name: "Sliema", sub: "Main Branch · Triq Bisazza" },
  { name: "Gzira", sub: "Open Daily" },
  { name: "Mellieha", sub: "Open Daily" },
  { name: "Bugibba", sub: "Open Daily" },
  { name: "Valletta", sub: "Coming Soon" },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mcwrelaxshop.com/" },
    { "@type": "ListItem", position: 2, name: "Trust & Quality", item: "https://mcwrelaxshop.com/trust" },
  ],
};

export default function Trust() {
  return (
    <>
      <SEO
        title="Trust & Quality — Lab-Tested CBD Malta"
        description="Every MCW product is third-party lab tested, legally compliant (<0.2% THC), and certified. Malta's most trusted CBD retailer since day one."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="min-h-screen bg-black text-white">

      {/* Photo Hero */}
      <div className="relative h-72 sm:h-[420px] overflow-hidden">
        <img
          src={heroTrustImg}
          alt="MCW CBD — Trust & Quality"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-12 pb-10 max-w-7xl mx-auto w-full">
          <p className="text-[#22c55e] font-black uppercase tracking-[0.3em] text-xs sm:text-sm mb-2">Lab-Tested · EU Certified</p>
          <h1 className="font-bebas text-6xl sm:text-8xl md:text-[9rem] tracking-tight text-white leading-none drop-shadow-2xl">
            TRUST &amp; QUALITY
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-24 space-y-24">

        {/* Why Trust MCW */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          <motion.h2 variants={fadeUp} className="font-bebas text-5xl md:text-6xl tracking-widest text-white mb-10">
            Why Trust <span className="text-green-400">MCW?</span>
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-5">
            {pillars.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group bg-[#080808] border border-gray-800 hover:border-green-600/50 p-8 transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-green-500 mb-5" strokeWidth={1.5} />
                <h3 className="font-bebas text-2xl tracking-widest text-white mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Lab Testing */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ show: { transition: { staggerChildren: 0.1 } } }}>
          <motion.div variants={fadeUp} className="flex items-end gap-4 mb-10">
            <FlaskConical className="w-8 h-8 text-green-500 mb-1" strokeWidth={1.5} />
            <h2 className="font-bebas text-5xl md:text-6xl tracking-widest text-white leading-none">
              Lab Testing <span className="text-green-400">&amp; Reports</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-[#080808] border border-gray-800 p-8 md:p-10">
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Every product comes with verified lab reports from accredited third-party testing facilities.
            </p>
            <ul className="space-y-4">
              {labChecks.map((check) => (
                <li key={check} className="flex items-center gap-4 text-sm text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" strokeWidth={1.5} />
                  {check}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* Commitments */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ show: { transition: { staggerChildren: 0.09 } } }}>
          <motion.h2 variants={fadeUp} className="font-bebas text-5xl md:text-6xl tracking-widest text-white mb-10">
            Our <span className="text-green-400">Commitment</span>
          </motion.h2>
          <div className="space-y-px">
            {commitments.map(({ title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="flex gap-6 md:gap-10 py-7 border-b border-gray-900 group"
              >
                <div className="w-1 shrink-0 bg-green-900 group-hover:bg-green-500 transition-colors mt-1" />
                <div>
                  <h3 className="font-bebas text-xl tracking-widest text-white mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Legal notice */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <div className="border border-yellow-900/50 bg-yellow-950/10 p-8">
            <p className="text-[11px] text-gray-600 uppercase tracking-widest mb-3 font-bold">Important Legal Information</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              All products sold by MCW CBD Relax Shop contain less than 0.2% THC and are legal for sale and consumption in Malta.
              For adults 18+ only. CBD and cannabinoids are not intended to diagnose, treat, cure, or prevent any disease.
              Consult a healthcare professional before use — especially if pregnant, nursing, or taking medications.
              Sedqa Helpline: <strong className="text-gray-400">1930</strong>.
            </p>
          </div>
        </motion.section>

        {/* Stores */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
          <motion.div variants={fadeUp} className="flex items-end gap-4 mb-10">
            <MapPin className="w-7 h-7 text-green-500 mb-1" strokeWidth={1.5} />
            <h2 className="font-bebas text-5xl md:text-6xl tracking-widest text-white leading-none">
              Visit Our <span className="text-green-400">Stores</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {stores.map(({ name, sub }) => (
              <motion.div key={name} variants={fadeUp}>
                <Link
                  href="/store-locator"
                  className="block bg-[#080808] border border-gray-800 hover:border-green-600/50 p-5 text-center transition-all duration-300 group"
                >
                  <p className="font-bebas text-xl tracking-widest text-white group-hover:text-green-400 transition-colors mb-1">{name}</p>
                  <p className="text-[10px] text-gray-700 uppercase tracking-widest">{sub}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
    </>
  );
}
