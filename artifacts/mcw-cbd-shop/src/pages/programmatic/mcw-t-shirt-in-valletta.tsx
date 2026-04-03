import { MapPin, Phone, ShoppingCart, CheckCircle, Star, Truck, Lock } from 'lucide-react';
import { useState } from 'react';

export default function MCWTShirtInValletta() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Hero Section - Premium */}
      <div className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-gray-400">
            <a href="/" className="hover:text-green-400 transition">Home</a>
            <span>/</span>
            <a href="/shop" className="hover:text-green-400 transition">Shop</a>
            <span>/</span>
            <span className="text-green-400">MCW T-Shirt in Valletta</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Product Info */}
            <div className="space-y-8">
              <div>
                <div className="inline-block mb-4 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                  <span className="text-green-400 text-sm font-semibold">Premium CBD Product</span>
                </div>
                <h1 className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 mb-6 leading-tight">
                  MCW T-Shirt in Valletta
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Experience premium quality mcw t-shirt crafted for discerning customers in Valletta. 
                  Lab-tested, legally compliant, and delivered with excellence.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 text-center hover:border-green-500/50 transition">
                  <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Lab Tested</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 text-center hover:border-green-500/50 transition">
                  <Lock className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">100% Legal</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-lg p-4 text-center hover:border-green-500/50 transition">
                  <Truck className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-300">Fast Delivery</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/35699536248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold rounded-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-green-500/50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Order Now via WhatsApp
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition"></div>
                </a>
                <a
                  href="/shop"
                  className="px-8 py-4 border-2 border-green-500/50 text-green-400 font-bold rounded-lg hover:bg-green-500/10 transition-all"
                >
                  View All Products
                </a>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-green-900/20 to-slate-900/20 border border-green-500/20 backdrop-blur flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-green-500/50">
                  <span className="text-5xl">🌿</span>
                </div>
                <p className="text-gray-300 font-semibold">MCW T-Shirt</p>
                <p className="text-green-400 text-sm mt-2">Premium Quality</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            Why Choose MCW MCW T-Shirt?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '✓', title: 'Premium Quality', desc: 'Sourced from finest EU hemp' },
              { icon: '🔬', title: 'Lab Tested', desc: 'Verified purity & potency' },
              { icon: '⚡', title: 'Fast Delivery', desc: 'Quick shipping in Valletta' },
              { icon: '🛡️', title: 'Legal Compliant', desc: '<0.2% THC guaranteed' },
              { icon: '💚', title: 'Expert Support', desc: 'Knowledgeable team' },
              { icon: '🌍', title: 'Sustainable', desc: 'Eco-friendly practices' },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-xl p-8 hover:border-green-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Visit Us in Valletta</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Experience our premium mcw t-shirt selection in person. Our knowledgeable team is ready to assist you.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-lg hover:border-green-500/50 transition">
                  <MapPin className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white">MCW CBD Shop - Valletta</p>
                    <p className="text-gray-400 text-sm">Multiple locations across Malta</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-lg hover:border-green-500/50 transition">
                  <Phone className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white">📞 9953 6248</p>
                    <p className="text-gray-400 text-sm">Available during store hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-green-900/20 to-slate-900/20 border border-green-500/20 backdrop-blur flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
              <div className="relative z-10 text-center">
                <MapPin className="w-24 h-24 text-green-400 mx-auto mb-4 opacity-50" />
                <p className="text-gray-300 font-semibold">Valletta, Malta</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Section */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur border border-green-500/30 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <Lock className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-green-300 mb-2">Legal Disclaimer</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All MCW mcw t-shirt products contain less than 0.2% THC and are fully legal in Malta. 
                  For adults 18+ only. Not intended to diagnose, treat, cure, or prevent disease. 
                  Lab tested and verified. Consult healthcare professionals before use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Ready to Experience Premium CBD?</h2>
          <a
            href="https://wa.me/35699536248"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
}