import { MapPin, Phone, ShoppingCart, CheckCircle } from 'lucide-react';

export default function PremiumOil1000mgInValletta() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gradient-to-b from-green-900 to-black py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Premium Premium Oil 1000mg in Valletta</h1>
          <p className="text-xl text-gray-300">Buy high-quality Premium Oil 1000mg in Valletta, Malta. Legal, lab-tested, <0.2% THC.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-900 rounded-lg p-8 border border-green-500 mb-8">
              <h2 className="text-3xl font-bold text-green-400 mb-4">Premium Oil 1000mg</h2>
              <p className="text-gray-300 mb-6">Premium Premium Oil 1000mg available in Valletta. Lab tested and verified.</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Legal in Malta (<0.2% THC)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Lab tested and verified</span>
                </div>
              </div>
              <a href="https://wa.me/35699536248" target="_blank" rel="noopener noreferrer" className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-4 rounded-lg transition-colors text-center block">
                Order via WhatsApp
              </a>
            </div>
          </div>

          <div>
            <div className="bg-gray-900 rounded-lg p-8 border border-green-500 mb-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Visit Us in Valletta</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold">MCW CBD Shop - Valletta</p>
                    <p className="text-gray-400 text-sm">Multiple locations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-bold">📞 9953 6248</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}