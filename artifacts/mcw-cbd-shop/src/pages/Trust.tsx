import { CheckCircle, Award, Leaf, Shield } from 'lucide-react';

export default function Trust() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-900 to-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Building Trust Through Quality</h1>
          <p className="text-xl text-gray-300">MCW CBD Relax Shop - Your Trusted Partner in Premium CBD Products</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Why Trust MCW */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-green-400">Why Trust MCW?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-green-500">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Legal Compliance</h3>
              <p className="text-gray-300">All products contain less than 0.2% THC, fully compliant with Malta regulations. We never sell banned substances like HHC, HHCp, or THCP.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-green-500">
              <Award className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-300">We source only from trusted international brands. Every product is tested and verified for potency and purity.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-green-500">
              <Leaf className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Natural Products</h3>
              <p className="text-gray-300">We believe in the power of nature. All our CBD products are derived from premium hemp and cannabis plants.</p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-green-500">
              <Shield className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Customer Protection</h3>
              <p className="text-gray-300">Your satisfaction is guaranteed. We offer secure checkout, multiple payment options, and responsive customer support.</p>
            </div>
          </div>
        </section>

        {/* Lab Reports */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-green-400">Lab Testing & Reports</h2>
          <div className="bg-gray-900 p-8 rounded-lg border border-green-500">
            <p className="text-gray-300 mb-4">Every product in our catalog comes with verified lab reports. We partner with accredited testing facilities to ensure:</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" /> Accurate cannabinoid profiles (CBD, THC, CBN, etc.)</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" /> Pesticide and heavy metal testing</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" /> Microbial contamination screening</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" /> Solvent residue analysis</li>
              <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-400 mr-3" /> Potency verification</li>
            </ul>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-green-400">Our Commitment to You</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold mb-2">Transparency</h3>
              <p className="text-gray-300">We provide complete product information, including lab reports, cannabinoid profiles, and sourcing details for every item.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-300">Our team personally tests and verifies every product batch. We maintain strict quality control standards.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold mb-2">Legal Compliance</h3>
              <p className="text-gray-300">We strictly adhere to all Malta regulations. All products are legal for sale and consumption in Malta.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold mb-2">Customer Support</h3>
              <p className="text-gray-300">Our team is available to answer questions about products, effects, and usage. Contact us via WhatsApp or visit our stores.</p>
            </div>
          </div>
        </section>

        {/* Legal Disclaimer */}
        <section className="bg-gray-900 p-8 rounded-lg border border-yellow-600 mb-16">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Important Legal Information</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            All products sold by MCW CBD Relax Shop contain less than 0.2% THC and are legal for sale and consumption in Malta. 
            These products are for adults 18+ only. CBD and other cannabinoids are not intended to diagnose, treat, cure, or prevent any disease. 
            Consult with a healthcare professional before using CBD products, especially if you are pregnant, nursing, or taking medications. 
            For support and information about substance use, contact Sedqa Helpline: 1930.
          </p>
        </section>

        {/* Store Locations */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-green-400">Visit Our Stores</h2>
          <p className="text-gray-300 mb-8">Experience MCW CBD Relax Shop in person at any of our locations across Malta:</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-xl font-bold text-green-400 mb-2">Sliema (Main Branch)</h3>
              <p className="text-gray-300">Triq Bisazza, Tas-Sliema SLM 1641</p>
              <p className="text-gray-300">📞 9953 6248</p>
              <p className="text-gray-300">Open - Closes 11:30 pm</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-xl font-bold text-green-400 mb-2">Gzira</h3>
              <p className="text-gray-300">Visit us for premium CBD products</p>
              <p className="text-gray-300">📞 9953 6248</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-xl font-bold text-green-400 mb-2">Mellieha</h3>
              <p className="text-gray-300">Visit us for premium CBD products</p>
              <p className="text-gray-300">📞 9953 6248</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <h3 className="text-xl font-bold text-green-400 mb-2">Bugibba</h3>
              <p className="text-gray-300">Visit us for premium CBD products</p>
              <p className="text-gray-300">📞 9953 6248</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-green-500 md:col-span-2">
              <h3 className="text-xl font-bold text-green-400 mb-2">Valletta (Coming Soon)</h3>
              <p className="text-gray-300">New location opening soon</p>
              <p className="text-gray-300">📞 9953 6248</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
