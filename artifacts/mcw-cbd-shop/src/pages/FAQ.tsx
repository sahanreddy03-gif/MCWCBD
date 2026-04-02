import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'Is CBD legal in Malta?',
      answer: 'Yes, CBD products with less than 0.2% THC are legal in Malta. All MCW products comply with this regulation and are fully legal for purchase and consumption.',
    },
    {
      id: 2,
      question: 'What is the difference between CBD and THC?',
      answer: 'CBD (Cannabidiol) and THC (Tetrahydrocannabinol) are both cannabinoids from hemp/cannabis plants. THC is psychoactive and produces a "high," while CBD is non-intoxicating. Our products contain minimal THC (<0.2%) and are safe for daily use.',
    },
    {
      id: 3,
      question: 'Will CBD products make me high?',
      answer: 'No. Our products contain less than 0.2% THC, which is not enough to produce any psychoactive effects. You will not get high from MCW CBD products.',
    },
    {
      id: 4,
      question: 'How do I use CBD flowers?',
      answer: 'CBD flowers can be used in various ways: vaporized using a vaporizer, smoked in a joint or pipe, or brewed as tea. Start with small amounts to find what works best for you.',
    },
    {
      id: 5,
      question: 'What are the benefits of CBD?',
      answer: "While we cannot make medical claims, many users report that CBD helps with relaxation, stress relief, and general wellness. CBD interacts with the body's endocannabinoid system. Always consult a healthcare professional before use.",
    },
    {
      id: 6,
      question: 'How long do CBD products last?',
      answer: 'Effects vary by product type and individual. CBD flowers/vapes typically take effect within 5-15 minutes and last 2-4 hours. Oils may take longer but last longer. Everyone is different.',
    },
    {
      id: 7,
      question: 'Are your products tested?',
      answer: 'Yes! All MCW products come with lab reports verifying cannabinoid profiles, potency, and purity. We test for pesticides, heavy metals, and microbial contamination.',
    },
    {
      id: 8,
      question: 'What payment methods do you accept?',
      answer: 'We accept Revolut transfers and Cash on Delivery (COD). You can also pay in person at any of our store locations.',
    },
    {
      id: 9,
      question: 'Do you offer delivery?',
      answer: 'Yes! Delivery is €3.50 for orders under €50, and FREE for orders €50 and above. Contact us via WhatsApp to arrange delivery.',
    },
    {
      id: 10,
      question: 'What brands do you stock?',
      answer: 'We stock premium international CBD brands including Marley Natural, Snoop Dogg CBD, and other trusted manufacturers. All products are verified for quality and legality.',
    },
    {
      id: 11,
      question: 'Do you sell HHC, HHCp, or THCP products?',
      answer: 'No. We do not sell HHC, HHCp, or THCP products as these are banned substances in Malta. We only sell legal CBD products with <0.2% THC.',
    },
    {
      id: 12,
      question: 'How can I contact customer support?',
      answer: 'You can reach us via WhatsApp at 9953 6248, call us, or visit any of our store locations. Our team is available during store hours to answer your questions.',
    },
    {
      id: 13,
      question: 'What is your return policy?',
      answer: "We stand behind our products. If you're not satisfied, contact us within 7 days of purchase. We'll work with you to find a solution.",
    },
    {
      id: 14,
      question: 'Are there age restrictions?',
      answer: 'Yes. All MCW products are for adults 18+ only. You must verify your age when purchasing online and may be asked for ID in-store.',
    },
    {
      id: 15,
      question: "Can I use CBD if I'm pregnant or nursing?",
      answer: "We recommend consulting with a healthcare professional before using CBD if you're pregnant or nursing. CBD may interact with medications or affect pregnancy.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-900 to-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300">Everything you need to know about MCW CBD products</p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-green-500 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full bg-gray-900 hover:bg-gray-800 px-6 py-4 flex items-center justify-between transition-colors"
              >
                <h3 className="text-lg font-bold text-left text-green-400">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-green-400 transition-transform flex-shrink-0 ml-4 ${
                    expandedId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === faq.id && (
                <div className="bg-black px-6 py-4 border-t border-green-500">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 bg-gray-900 p-8 rounded-lg border border-green-500 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-300 mb-6">
            Our team is here to help. Contact us via WhatsApp or visit one of our stores.
          </p>
          <a
            href="https://wa.me/35699999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
