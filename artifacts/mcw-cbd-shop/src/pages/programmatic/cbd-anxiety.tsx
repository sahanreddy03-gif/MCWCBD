import { CheckCircle } from 'lucide-react';

export default function CBDAnxiety() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gradient-to-b from-green-900 to-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Anxiety with CBD</h1>
          <p className="text-xl text-gray-300">Discover how CBD can help with anxiety</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gray-900 rounded-lg p-8 border border-green-500 mb-8">
          <h2 className="text-3xl font-bold text-green-400 mb-6">How CBD Helps with Anxiety</h2>
          <p className="text-gray-300 mb-6">
            CBD (Cannabidiol) has been studied for its potential benefits in supporting anxiety. 
            Many users report positive experiences when incorporating CBD into their wellness routine.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-300 mb-2">Natural Support</h3>
                <p className="text-gray-300">CBD provides natural support without harsh chemicals or side effects.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-300 mb-2">Legal & Safe</h3>
                <p className="text-gray-300">All MCW CBD products are <0.2% THC and fully legal in Malta.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-300 mb-2">Lab Tested</h3>
                <p className="text-gray-300">Every product is tested for purity, potency, and safety.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-900 p-4 rounded-lg">
            <p className="text-green-300 font-bold">⚠️ Medical Disclaimer:</p>
            <p className="text-sm text-gray-300 mt-2">
              CBD is not intended to diagnose, treat, cure, or prevent any disease. Consult with a healthcare professional before using CBD products.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-green-500">
          <h2 className="text-2xl font-bold text-green-400 mb-6">Recommended Products</h2>
          <p className="text-gray-300 mb-6">
            Explore our range of premium CBD products that users find helpful for anxiety:
          </p>
          <a href="/shop" className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-lg transition-colors">
            Shop All Products
          </a>
        </div>
      </div>
    </div>
  );
}