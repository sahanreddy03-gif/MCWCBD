import { Calendar, User, Share2 } from 'lucide-react';

export default function CbdAndWellness() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gradient-to-b from-green-900 to-black py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">CBD and Wellness</h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>4/2/2026</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>MCW CBD Team</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <article className="bg-gray-900 rounded-lg p-8 border border-green-500 mb-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              CBD and Wellness is an important topic in the CBD community. In this article, we explore the key aspects, 
              benefits, and considerations related to cbd and wellness.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Understanding the Topic</h2>
            <p className="text-gray-300 mb-6">
              CBD and Wellness has become increasingly relevant as more people discover the benefits of CBD. 
              Whether you're interested in wellness, lifestyle, or community engagement, this guide provides comprehensive insights.
            </p>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Key Takeaways</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Understanding the fundamentals of cbd and wellness</li>
              <li>How it relates to CBD and wellness</li>
              <li>Best practices and recommendations</li>
              <li>Getting started with MCW CBD products</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-400 mt-8 mb-4">Getting Started</h2>
            <p className="text-gray-300 mb-6">
              Ready to explore cbd and wellness? Visit our shop to browse our premium selection of CBD products, 
              or contact our team for personalized recommendations.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-2">Share this article:</p>
                <div className="flex gap-4">
                  <a href="#" className="text-green-400 hover:text-green-300">
                    <Share2 className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <a href="/shop" className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-6 rounded-lg transition-colors">
                Shop Now
              </a>
            </div>
          </div>
        </article>

        <div className="bg-gray-900 rounded-lg p-8 border border-green-500">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Explore More</h2>
          <p className="text-gray-300 mb-4">
            Discover more articles, guides, and information about CBD on our blog and knowledge center.
          </p>
          <a href="/faq" className="text-green-400 hover:text-green-300 underline">
            View More Articles →
          </a>
        </div>
      </div>
    </div>
  );
}