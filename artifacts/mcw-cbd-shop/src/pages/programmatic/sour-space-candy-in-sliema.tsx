import { MapPin, Phone, ShoppingCart, CheckCircle } from 'lucide-react';

export default function SourSpaceCandyInSliema() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gradient-to-b from-green-900 to-black py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Premium Sour Space Candy in Sliema</h1>
          <p className="text-xl text-gray-300">
            Buy high-quality Sour Space Candy in Sliema, Malta. Legal, lab-tested, <0.2% THC.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-900 rounded-lg p-8 border border-green-500 mb-8">
              <h2 className="text-3xl font-bold text-green-400 mb-4">Sour Space Candy in Sliema</h2>
              <p className="text-gray-300 mb-6">
                Premium Sour Space Candy available in Sliema. Our Sour Space Candy is sourced from the finest EU hemp and tested for quality, purity, and potency.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Legal in Malta (<0.2% THC)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Lab tested and verified</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Premium quality guaranteed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Fast delivery in Sliema</span>
                </div>
              </div>

              <div className="bg-green-900 p-4 rounded-lg mb-8">
                <p className="text-green-300 font-bold">⚠️ Legal Disclaimer:</p>
                <p className="text-sm text-gray-300 mt-2">
                  All Sour Space Candy products contain less than 0.2% THC and are fully legal in Malta. For adults 18+ only. Not intended to diagnose, treat, cure, or prevent disease.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-900 rounded-lg p-8 border border-green-500 mb-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Visit Us in Sliema</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold">MCW CBD Shop - Sliema</p>
                    <p className="text-gray-400 text-sm">Multiple locations across Malta</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold">📞 9953 6248</p>
                    <p className="text-gray-400 text-sm">Call for availability</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://wa.me/35699536248?text=Hi%20MCW%2C%20I%27m%20interested%20in%20Sour Space Candy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-4 rounded-lg transition-colors text-center"
                >
                  Order Sour Space Candy via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}