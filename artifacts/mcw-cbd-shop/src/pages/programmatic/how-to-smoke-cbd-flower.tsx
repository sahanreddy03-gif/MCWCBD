import { CheckCircle, AlertCircle, BookOpen } from 'lucide-react';

export default function HowToSmokeCbdFlower() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gradient-to-b from-green-900 to-black py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">How to Use CBD Flower</h1>
          <p className="text-xl text-gray-300">Complete guide to using hemp CBD flower in Malta</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gray-900 rounded-lg p-8 border border-green-500 mb-8">
          <div className="flex items-start mb-6">
            <BookOpen className="w-8 h-8 text-green-400 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold text-green-400 mb-4">Using Hemp CBD Flower</h2>
              <p className="text-gray-300 mb-6">
                This comprehensive guide covers everything you need to know about hemp CBD flower —
                how it's sold, how users enjoy it, and what to look for when choosing a quality product.
              </p>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-green-300 mb-3">Key Points</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">CBD hemp flower is sold as a collectible and aromatic product in Malta</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">All products contain ≤0.2% THC — legal in Malta and across the EU</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Third-party lab tested for cannabinoid profile and purity (COA available)</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Non-psychoactive — contains less than the threshold required to produce any psychoactive effect</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-300 mb-3">Popular Ways to Enjoy Hemp Flower</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Vaporizing with a dry-herb vaporizer — the preferred method for a pure hemp experience</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Brewing as a herbal tea for a relaxing, aromatic beverage</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Using as an aromatic collectible — many customers enjoy the natural scent profiles</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-300 mb-3">Choosing the Right Strain</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Indica-dominant strains tend to have a calming, earthy aroma</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Sativa-dominant strains tend to have a fresh, citrusy scent profile</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Always check the COA (Certificate of Analysis) for exact cannabinoid content</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-950/40 border border-yellow-700/50 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
              <p className="text-yellow-200 text-sm">
                CBD hemp flower is sold as a collectible at MCW CBD Relax Shop. It is not intended as a medicine. 
                Always consult a healthcare professional before using CBD for health purposes. Adults 18+ only.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/35699536248"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-black font-black uppercase tracking-widest text-sm px-8 py-4 hover:bg-green-400 transition-colors"
          >
            Enquire via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
