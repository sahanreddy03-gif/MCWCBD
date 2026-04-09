import { CheckCircle, XCircle } from 'lucide-react';

export default function CBDVapevsGrinder() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gradient-to-b from-green-900 to-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">CBD Vape vs Grinder</h1>
          <p className="text-xl text-gray-300">Compare these popular CBD products</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-900 rounded-lg p-8 border border-green-500">
            <h2 className="text-2xl font-bold text-green-400 mb-6">CBD Vape</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Premium quality</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Lab tested</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">&lt;0.2% THC</p>
              </div>
            </div>
            <a href="/shop" className="mt-6 block w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-lg transition-colors text-center">
              View CBD Vape
            </a>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 border border-green-500">
            <h2 className="text-2xl font-bold text-green-400 mb-6">Grinder</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Premium quality</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Lab tested</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">&lt;0.2% THC</p>
              </div>
            </div>
            <a href="/shop" className="mt-6 block w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-lg transition-colors text-center">
              View Grinder
            </a>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-green-500">
          <h2 className="text-2xl font-bold text-green-400 mb-6">Which Should You Choose?</h2>
          <p className="text-gray-300 mb-4">
            Both CBD Vape and Grinder are excellent choices from MCW CBD Shop. Your choice depends on your personal preferences and needs.
          </p>
          <p className="text-gray-300">
            Contact our team for personalized recommendations based on your wellness goals.
          </p>
        </div>
      </div>
    </div>
  );
}