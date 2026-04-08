import { SEO } from "@/components/SEO";
import { CheckCircle, AlertTriangle, Shield, FileText } from "lucide-react";

export default function Compliance() {
  return (
    <>
      <SEO title="Compliance & Legal — MCW CBD Relax Shop Malta" description="MCW CBD Relax Shop compliance information. All products are legal in Malta, EU-certified, ≤0.2% THC, third-party lab tested." />

      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-bebas text-7xl md:text-9xl tracking-tight text-white mb-4 leading-none">
          COMPLIANCE<br />&amp; LEGAL
        </h1>
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-12">MCW CBD Relax Shop — Malta</p>

        {/* Green compliance banner */}
        <div className="bg-green-950 border border-green-700 rounded-2xl p-6 mb-12 flex items-start gap-4">
          <CheckCircle className="text-green-400 shrink-0 mt-1" size={28} />
          <div>
            <h2 className="font-bebas text-2xl tracking-widest text-green-400 mb-2">FULLY COMPLIANT WITH MALTESE LAW</h2>
            <p className="text-green-200 text-sm leading-relaxed">
              MCW CBD Relax Shop operates in full compliance with Maltese legislation and EU Directive 2019/515. All hemp and CBD products sold contain ≤0.2% THC and are sourced exclusively from EU-certified hemp cultivators.
            </p>
          </div>
        </div>

        <div className="space-y-10 text-gray-300">

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-green-400" size={24} />
              <h2 className="font-bebas text-4xl tracking-wide text-white">Legal Framework</h2>
            </div>
            <ul className="space-y-3">
              {[
                "All products comply with EU Directive 2019/515 on mutual recognition of goods.",
                "Hemp-derived CBD is legal in Malta under the Dangerous Drugs Ordinance (Chapter 101), provided THC content does not exceed 0.2%.",
                "MCW holds all applicable business licences to operate retail premises in Malta.",
                "Products are sold to adults aged 18+ only. Age verification is performed in-store and online.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 font-black shrink-0">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-green-400" size={24} />
              <h2 className="font-bebas text-4xl tracking-wide text-white">Product Standards</h2>
            </div>
            <ul className="space-y-3">
              {[
                "Every CBD product sold at MCW is third-party lab tested for cannabinoid profile, heavy metals, pesticides, and microbials.",
                "Lab certificates (CoA — Certificate of Analysis) are available on request for any product.",
                "Products are sourced from licensed EU hemp farmers operating under EU Common Agricultural Policy regulations.",
                "We do not sell HHCp, THCP, THCO, or any substance classified as a banned drug in Malta. Any HHC products stocked are minor cannabinoids compliant with current Maltese legislation.",
                "THCV products sold at MCW are minor cannabinoid isolates legal under current Maltese and EU law.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 font-black shrink-0">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-yellow-400" size={24} />
              <h2 className="font-bebas text-4xl tracking-wide text-white">Important Notices</h2>
            </div>
            <div className="bg-yellow-950/40 border border-yellow-800/50 rounded-xl p-5 space-y-3 text-sm">
              <p>CBD products are food supplements or collectibles. They are <strong>not medicines</strong> and are not intended to diagnose, treat, cure, or prevent any disease.</p>
              <p>Always consult a qualified healthcare professional before using CBD products, especially if pregnant, breastfeeding, or on medication.</p>
              <p>Hemp aromatic flowers are sold as collectibles. Hemp herbal sticks are not intended for combustion or consumption.</p>
              <p>For addiction support in Malta, contact <strong>Sedqa Agency</strong> on freephone <strong>1930</strong>.</p>
            </div>
          </section>

          <section>
            <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">Request Lab Reports</h2>
            <p className="text-sm mb-4">We are fully transparent about our product testing. To request a Certificate of Analysis (CoA) for any product, contact us directly:</p>
            <a
              href="https://wa.me/35699536248?text=Hello%20MCW!%20I%20would%20like%20to%20request%20a%20lab%20report%20(CoA)%20for%20a%20product."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-black uppercase tracking-widest text-sm px-6 py-3 transition-colors"
            >
              Request Lab Report via WhatsApp
            </a>
          </section>

        </div>
      </div>
    </>
  );
}
