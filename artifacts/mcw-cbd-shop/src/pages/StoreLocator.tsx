import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function StoreLocator() {
  const stores = [
    {
      id: 1,
      name: 'Sliema (Main Branch)',
      address: 'Triq Bisazza, Tas-Sliema SLM 1641',
      phone: '9953 6248',
      hours: 'Open - Closes 11:30 pm',
      featured: true,
      lat: 35.3378,
      lng: 14.3008,
    },
    {
      id: 2,
      name: 'Gzira',
      address: 'Gzira, Malta',
      phone: '9953 6248',
      hours: 'Open - Closes 11:30 pm',
      featured: false,
      lat: 35.3420,
      lng: 14.2980,
    },
    {
      id: 3,
      name: 'Mellieha',
      address: 'Mellieha, Malta',
      phone: '9953 6248',
      hours: 'Open - Closes 11:30 pm',
      featured: false,
      lat: 35.3700,
      lng: 14.3400,
    },
    {
      id: 4,
      name: 'Bugibba',
      address: 'Bugibba, Malta',
      phone: '9953 6248',
      hours: 'Open - Closes 11:30 pm',
      featured: false,
      lat: 35.5850,
      lng: 14.4200,
    },
    {
      id: 5,
      name: 'Valletta (Coming Soon)',
      address: 'Valletta, Malta',
      phone: '9953 6248',
      hours: 'Opening Soon',
      featured: false,
      lat: 35.8989,
      lng: 14.5146,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-900 to-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Find Us Across Malta</h1>
          <p className="text-xl text-gray-300">Visit MCW CBD Relax Shop at any of our premium locations</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Map Section */}
        <div className="mb-16">
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-green-500 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <p className="text-gray-300">Interactive map coming soon</p>
              <p className="text-sm text-gray-400 mt-2">Visit our stores across Malta</p>
            </div>
          </div>
        </div>

        {/* Store Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {stores.map((store) => (
            <div
              key={store.id}
              className={`rounded-lg p-6 border-2 transition-all ${
                store.featured
                  ? 'bg-green-900 border-green-400 shadow-lg shadow-green-500/50'
                  : 'bg-gray-900 border-gray-700 hover:border-green-500'
              }`}
            >
              {store.featured && (
                <div className="inline-block bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold mb-3">
                  Main Branch
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4 text-green-400">{store.name}</h3>

              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="text-gray-200">{store.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a href={`tel:+356${store.phone.replace(' ', '')}`} className="text-green-400 hover:text-green-300">
                      {store.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Hours</p>
                    <p className="text-gray-200">{store.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={`https://wa.me/35699999999`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  WhatsApp
                </a>
                <a
                  href={`https://maps.google.com/?q=${store.lat},${store.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Directions
                </a>
              </div>
            </div>
           ))}
        </div>

        {/* Info Section */}
        <div className="bg-gray-900 p-8 rounded-lg border border-green-500">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Visit Us Today</h2>
          <p className="text-gray-300 mb-4">
            MCW CBD Relax Shop has multiple locations across Malta to serve you better. Whether you're in Sliema, Gzira, Mellieha, or Bugibba, 
            you'll find our premium selection of CBD products, accessories, and lifestyle items.
          </p>
          <p className="text-gray-300">
            Our knowledgeable staff is ready to help you find the perfect product for your needs. All locations are open until 11:30 pm daily.
          </p>
        </div>
      </div>
    </div>
  );
}
