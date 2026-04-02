import { CheckCircle, AlertCircle, BookOpen } from 'lucide-react';

export default function LabTestingExplained() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gradient-to-b from-green-900 to-black py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Lab Testing Explained</h1>
          <p className="text-xl text-gray-300">Complete guide to lab testing explained</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gray-900 rounded-lg p-8 border border-green-500 mb-8">
          <div className="flex items-start mb-6">
            <BookOpen className="w-8 h-8 text-green-400 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-green-400 mb-4">Lab Testing Explained</h2>
              <p className="text-gray-300 mb-6">
                This comprehensive guide covers everything you need to know about lab testing explained. 
                Whether you're new to CBD or an experienced user, you'll find valuable information here.
              </p>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-green-300 mb-3">Key Points</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Understanding the basics of lab testing explained</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Best practices and recommendations</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Common questions answered</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Tips for optimal results</p>
                </div>
              </div>
            </div>

            <div className="bg-green-900 p-4 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-green-300 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-green-300 font-bold">Important Note:</p>
                  <p className="text-sm text-gray-300 mt-1">
                    All MCW CBD products contain <0.2% THC and are legal in Malta. This guide is for educational purposes only.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a href="/shop" className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-lg transition-colors">
            Shop Our Products
          </a>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-green-500">
          <h2 className="text-2xl font-bold text-green-400 mb-6">Learn More</h2>
          <p className="text-gray-300 mb-4">
            For more information about CBD and our products, visit our FAQ page or contact our team.
          </p>
          <a href="/faq" className="text-green-400 hover:text-green-300 underline">
            View FAQ →
          </a>
        </div>
      </div>
    </div>
  );
}