import { MapPin, Phone, Clock, ShoppingCart } from 'lucide-react';

export default function CBDMellieha() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gradient-to-b from-green-900 to-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">CBD Products in Mellieha, Malta</h1>
          <p className="text-xl text-gray-300">Premium quality CBD shop serving Mellieha and surrounding areas</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gray-900 rounded-lg p-8 border border-green-500 mb-8">
          <h2 className="text-3xl font-bold text-green-400 mb-6">MCW CBD Shop in Mellieha</h2>
          <p className="text-gray-300 mb-6">
            Welcome to MCW CBD Shop in Mellieha! We offer a premium selection of legal CBD products including flowers, oils, vapes, and accessories. 
            All products are lab-tested and contain &lt;0.2% THC.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-300">Visit Us in Mellieha</h3>
                <p className="text-gray-300">Multiple locations across Malta</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-300">📞 9953 6248</h3>
                <p className="text-gray-300">Call for availability and orders</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-300">Open - 11:30 pm Daily</h3>
                <p className="text-gray-300">Fast service and expert advice</p>
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/35699536248"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-lg transition-colors text-center"
          >
            Order from Mellieha via WhatsApp
          </a>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-green-500">
          <h2 className="text-2xl font-bold text-green-400 mb-6">Our Product Range</h2>
          <p className="text-gray-300 mb-6">
            We stock a wide variety of premium CBD products available for delivery in Mellieha:
          </p>
          <a href="/shop" className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-lg transition-colors">
            <ShoppingCart className="w-4 h-4 inline mr-2" />
            Shop All Products
          </a>
        </div>
      </div>
    </div>
  );
}