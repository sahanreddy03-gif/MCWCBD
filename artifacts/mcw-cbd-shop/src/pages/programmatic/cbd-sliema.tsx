import { MapPin, Clock, ShoppingCart } from 'lucide-react';

export default function CBDSliema() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gradient-to-b from-green-900 to-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">CBD Products in Sliema, Malta</h1>
          <p className="text-xl text-gray-300">Premium quality CBD shop serving Sliema and surrounding areas</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gray-900 rounded-lg p-8 border border-green-500 mb-8">
          <h2 className="text-3xl font-bold text-green-400 mb-6">MCW CBD Shop in Sliema</h2>
          <p className="text-gray-300 mb-6">
            Welcome to MCW CBD Shop in Sliema! We offer a premium selection of legal CBD products including flowers, oils, vapes, and accessories. 
            All products are lab-tested and contain &lt;0.2% THC.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-300">Visit Us in Sliema</h3>
                <p className="text-gray-300">Multiple locations across Malta</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-300">Find a Store</h3>
                <p className="text-gray-300">View locations and directions</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-green-300">Work time -12:00 - 22:00</h3>
                <p className="text-gray-300">Fast service and expert advice</p>
              </div>
            </div>
          </div>

          <a
            href="/store-locator"
            className="inline-block w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-lg transition-colors text-center"
          >
            Find a Store to Purchase
          </a>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-green-500">
          <h2 className="text-2xl font-bold text-green-400 mb-6">Our Product Range</h2>
          <p className="text-gray-300 mb-6">
            We stock a wide variety of premium CBD products available in store in Sliema:
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