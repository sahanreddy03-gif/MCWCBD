import { SEO } from "@/components/SEO";

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions — MCW CBD Relax Shop Malta" description="Terms and conditions for MCW CBD Relax Shop Malta. Legal information, purchase terms, delivery policy and age verification requirements." />

      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-bebas text-7xl md:text-9xl tracking-tight text-white mb-4 leading-none">
          TERMS &amp;<br />CONDITIONS
        </h1>
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-12">Last updated: April 2026</p>

        <div className="prose prose-invert max-w-none space-y-10 text-gray-300">

          <section>
            <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">1. About MCW CBD Relax Shop</h2>
            <p>MCW CBD Relax Shop is a retail and delivery business operating in Malta. We sell hemp-derived CBD products, lifestyle accessories, and collectibles. Our products comply with Maltese law and EU Directive 2019/515, with all cannabinoid products containing ≤0.2% THC.</p>
          </section>

          <section>
            <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">2. Age Requirement</h2>
            <p>You must be 18 years of age or older to purchase any product from MCW. By placing an order, you confirm that you meet this age requirement. We reserve the right to cancel any order where age cannot be verified.</p>
          </section>

          <section>
            <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">3. Products & Compliance</h2>
            <p>All CBD and hemp products sold by MCW are legal in Malta and the European Union. Products are sold as food supplements, collectibles, or lifestyle accessories where applicable. They are not medicines and are not intended to diagnose, treat, cure, or prevent any disease.</p>
            <ul className="list-disc list-inside space-y-1 mt-4">
              <li>All products contain ≤0.2% THC</li>
              <li>Third-party lab certificates available on request</li>
              <li>MCW does not sell HHC, HHCp, or THCP products</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">4. Orders & Payment</h2>
            <p>Orders are placed via WhatsApp at <strong>+356 9953 6248</strong>. Payment is accepted via Revolut or cash on delivery. Orders are confirmed only after payment receipt or mutual agreement.</p>
          </section>

          <section>
            <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">5. Delivery</h2>
            <p>Delivery across Malta: €3.50 flat fee. Free delivery on orders of €50 or more. Estimated same-day delivery depending on order time and location. We are not liable for delays caused by circumstances outside our control.</p>
          </section>

          <section>
            <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">6. Returns & Refunds</h2>
            <p>Contact us within 7 days of purchase if you are unsatisfied with your order. We handle cases individually and will work to find a fair resolution. Products that have been opened, used, or damaged are not eligible for refund.</p>
          </section>

          <section>
            <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">7. Limitation of Liability</h2>
            <p>MCW is not responsible for misuse of products. CBD products are not intended to substitute medical advice. Always consult a healthcare professional before using any supplement, especially if you are pregnant, nursing, or taking medication.</p>
          </section>

          <section>
            <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">8. Contact</h2>
            <p>For any questions regarding these terms, contact us at <strong>+356 9953 6248</strong> via WhatsApp or visit any of our 4 store locations in Sliema, Gzira, Mellieha, or Bugibba.</p>
          </section>

        </div>
      </div>
    </>
  );
}
