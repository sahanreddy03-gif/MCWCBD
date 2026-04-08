import { SEO } from "@/components/SEO";

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy — MCW CBD Relax Shop Malta" description="Privacy policy for MCW CBD Relax Shop Malta. How we handle your personal data, WhatsApp conversations, and order information." />

      <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-bebas text-7xl md:text-9xl tracking-tight text-white mb-4 leading-none">
          PRIVACY<br />POLICY
        </h1>
        <p className="text-gray-400 text-sm uppercase tracking-widest mb-12">Last updated: April 2026</p>

        <div className="prose prose-invert max-w-none space-y-10 text-gray-300">

          <section>
            <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">1. Data We Collect</h2>
            <p>When you contact us or place an order via WhatsApp, we may collect:</p>
            <ul className="list-disc list-inside space-y-1 mt-4">
              <li>Your name and WhatsApp contact number</li>
              <li>Delivery address for order fulfillment</li>
              <li>Order details and payment confirmation</li>
            </ul>
            <p className="mt-4">We do not collect sensitive personal data or payment card information. Revolut payments are processed through the Revolut platform and governed by their privacy policy.</p>
          </section>

          <section>
            <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">2. How We Use Your Data</h2>
            <p>Your data is used solely to:</p>
            <ul className="list-disc list-inside space-y-1 mt-4">
              <li>Process and deliver your order</li>
              <li>Communicate regarding your purchase</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-4">We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">3. Data Retention</h2>
            <p>Order-related data is retained for up to 12 months for accounting and legal compliance purposes, then securely deleted. WhatsApp conversation history is subject to WhatsApp's own retention policies.</p>
          </section>

          <section>
            <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">4. Cookies & Analytics</h2>
            <p>This website may use basic analytics to understand traffic patterns. No personally identifiable information is collected through cookies. You may disable cookies in your browser settings without affecting site functionality.</p>
          </section>

          <section>
            <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">5. Your Rights</h2>
            <p>Under GDPR, you have the right to access, correct, or delete personal data we hold about you. To exercise these rights, contact us directly at <strong>+356 9953 6248</strong> via WhatsApp.</p>
          </section>

          <section>
            <h2 className="font-bebas text-4xl tracking-wide text-white mb-4">6. Contact</h2>
            <p>Data controller: MCW CBD Relax Shop, Malta. Contact: <strong>+356 9953 6248</strong> via WhatsApp or visit any of our 4 stores island-wide.</p>
          </section>

        </div>
      </div>
    </>
  );
}
