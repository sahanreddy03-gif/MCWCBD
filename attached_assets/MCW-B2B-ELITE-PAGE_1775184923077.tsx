import React, { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Zap, Globe, Truck, Shield, TrendingUp } from 'lucide-react';

export default function B2BElitePartnership() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax scroll effect
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      parallaxElements.forEach((el) => {
        const speed = (el as HTMLElement).dataset.parallax;
        if (speed) {
          (el as HTMLElement).style.transform = `translateY(${scrolled * parseFloat(speed)}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950 to-black opacity-60"></div>
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Smoke/Fog Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-gradient-radial from-green-500 to-transparent blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Morphing Background Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 left-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"
            style={{
              animation: 'blob 7s infinite',
            }}
          ></div>
          <div
            className="absolute top-40 right-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"
            style={{
              animation: 'blob 7s infinite 2s',
            }}
          ></div>
          <div
            className="absolute -bottom-8 left-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"
            style={{
              animation: 'blob 7s infinite 4s',
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-sm font-bold text-black animate-pulse">
            🚀 EUROPE'S PREMIER B2B PLATFORM
          </div>

          {/* Main Headline - Breathing Effect */}
          <h1
            className="text-6xl md:text-8xl font-black mb-6 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #10b981 50%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'breathe 4s ease-in-out infinite',
            }}
          >
            Wholesale Made
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400">
              Effortless
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
            Connect with Europe's most trusted CBD wholesale network. We've solved the problem for 100+ retailers and distributors.
          </p>

          {/* Trust Metrics - Animated Cards */}
          <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            {[
              { number: '100+', label: 'Partners' },
              { number: '50+', label: 'Manufacturers' },
              { number: '25', label: 'Countries' },
            ].map((metric, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-green-900 to-emerald-900 border border-green-500 rounded-lg p-4 hover:scale-110 transition-transform duration-300"
                style={{
                  animation: `slideUp 0.6s ease-out ${i * 0.1}s both`,
                }}
              >
                <div className="text-3xl font-black text-green-400">{metric.number}</div>
                <div className="text-sm text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/35699999999"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Partnership <ArrowRight className="w-5 h-5" />
            </a>
            <button className="px-8 py-4 border-2 border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500 hover:text-black transition-all duration-300">
              Learn Process
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-green-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* ===== HERO IMAGE SECTION ===== */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div data-parallax="0.05">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663102040929/QY7QsZtbdV7DX3szJDn6s5/mcw-b2b-network-1.png"
                alt="Global Network"
                className="rounded-2xl shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300"
              />
            </div>
            <div className="animate-fade-in-left">
              <h2 className="text-5xl font-black mb-6 leading-tight">
                Connected to <span className="text-green-400">Every Manufacturer</span> in Europe
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                We're not just a platform. We're your strategic partner with direct relationships to 50+ premium manufacturers across Europe.
              </p>
              <ul className="space-y-3">
                {['Direct manufacturer access', 'Verified lab reports', 'Bulk pricing guaranteed', 'Custom clearance support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors">
                    <Zap className="w-5 h-5 text-green-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM vs SOLUTION ===== */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">
            The Problem We <span className="text-green-400">Solve</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem */}
            <div className="bg-gradient-to-br from-red-900 to-red-950 border border-red-500 rounded-2xl p-8 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300">
              <h3 className="text-2xl font-black mb-6 text-red-400">❌ The Old Way</h3>
              <ul className="space-y-4">
                {[
                  'Fragmented suppliers',
                  'Hidden costs & markups',
                  'No quality guarantee',
                  'Slow delivery times',
                  'Compliance nightmares',
                  'Zero support',
                ].map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-green-900 to-emerald-900 border border-green-500 rounded-2xl p-8 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300">
              <h3 className="text-2xl font-black mb-6 text-green-400">✅ The MCW Way</h3>
              <ul className="space-y-4">
                {[
                  'One unified platform',
                  'Transparent pricing',
                  'Lab tested & verified',
                  'Fast door-to-door delivery',
                  'Full compliance support',
                  'Dedicated account manager',
                ].map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-3">
                    <span className="text-green-400 font-bold mt-1">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE JOURNEY (6-STEP PROCESS) ===== */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">
            Your Path to <span className="text-green-400">Success</span>
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform -translate-y-1/2"></div>

            {/* Steps */}
            <div className="grid md:grid-cols-6 gap-4">
              {[
                { number: '01', title: 'Connect', desc: 'Schedule consultation', icon: '🤝' },
                { number: '02', title: 'Strategy', desc: 'Custom business plan', icon: '📋' },
                { number: '03', title: 'Equip', desc: 'Choose products', icon: '📦' },
                { number: '04', title: 'Deliver', desc: 'Fast shipping', icon: '🚚' },
                { number: '05', title: 'Support', desc: 'Ongoing assistance', icon: '💬' },
                { number: '06', title: 'Grow', desc: '3-5x profit margins', icon: '📈' },
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative"
                  style={{
                    animation: `slideUp 0.6s ease-out ${i * 0.1}s both`,
                  }}
                >
                  <div className="bg-gradient-to-br from-green-900 to-emerald-900 border-2 border-green-500 rounded-xl p-6 text-center hover:scale-110 transition-transform duration-300 cursor-pointer group">
                    <div className="text-4xl mb-2">{step.icon}</div>
                    <div className="text-green-400 font-black text-lg mb-2">{step.number}</div>
                    <h3 className="font-bold text-white mb-2 group-hover:text-green-400 transition-colors">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT CATEGORIES WITH IMAGES ===== */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">
            Premium Product <span className="text-green-400">Categories</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'CBD Oils', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663102040929/QY7QsZtbdV7DX3szJDn6s5/mcw-category-oils-V9LsygJ8AFX2xUkbvxdCWb.webp' },
              { title: 'CBD Flowers', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663102040929/QY7QsZtbdV7DX3szJDn6s5/mcw-category-flowers-SUMp7oUESPjsfhAe7HayCy.webp' },
              { title: 'CBD Vapes', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663102040929/QY7QsZtbdV7DX3szJDn6s5/mcw-category-vapes-MLnEyE5JTf4MGNZPy9TMHn.webp' },
              { title: 'Accessories', image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663102040929/QY7QsZtbdV7DX3szJDn6s5/mcw-category-accessories-bm78QYLwKjvfMC4kvuqiQQ.webp' },
            ].map((cat, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                style={{
                  animation: `slideUp 0.6s ease-out ${i * 0.1}s both`,
                }}
              >
                <img src={cat.image} alt={cat.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-6">
                  <h3 className="text-xl font-black text-green-400 group-hover:text-white transition-colors">{cat.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BUSINESS OPERATIONS ===== */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">
            How We <span className="text-green-400">Operate</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Logistics & Delivery',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663102040929/QY7QsZtbdV7DX3szJDn6s5/mcw-logistics-delivery-nR3Gv8pGWmy2fV6HwHrrFr.webp',
                desc: 'Fast, reliable delivery to your doorstep with full tracking',
              },
              {
                title: 'Quality Testing',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663102040929/QY7QsZtbdV7DX3szJDn6s5/mcw-quality-testing-4CYmJXcAhM8iXyvdJ2eM3Z.webp',
                desc: 'Every product lab tested and verified for quality',
              },
              {
                title: 'European Distribution',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663102040929/QY7QsZtbdV7DX3szJDn6s5/mcw-european-distribution-RzDksgkaBFs886xAmuecUf.webp',
                desc: 'Connected to manufacturers across all of Europe',
              },
            ].map((op, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-green-900 to-emerald-900 border border-green-500 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300"
                style={{
                  animation: `slideUp 0.6s ease-out ${i * 0.1}s both`,
                }}
              >
                <img src={op.image} alt={op.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="p-6">
                  <h3 className="text-xl font-black text-green-400 mb-3">{op.title}</h3>
                  <p className="text-gray-300">{op.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUCCESS METRICS ===== */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-5xl font-black mb-6 leading-tight">
                Proven <span className="text-green-400">Results</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our partners see real results. Average profit margins increase 3-5x within the first year.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Average Profit Increase', value: '3-5x' },
                  { label: 'Customer Satisfaction', value: '98%' },
                  { label: 'On-Time Delivery', value: '99.5%' },
                  { label: 'Product Quality Score', value: '9.8/10' },
                ].map((metric, i) => (
                  <div key={i} className="flex justify-between items-center pb-4 border-b border-green-500">
                    <span className="text-gray-300">{metric.label}</span>
                    <span className="text-2xl font-black text-green-400">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div data-parallax="0.05">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663102040929/QY7QsZtbdV7DX3szJDn6s5/mcw-success-metrics-AZ5NJPUZreEvkfJzpy545n.webp"
                alt="Success Metrics"
                className="rounded-2xl shadow-2xl shadow-green-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">
            What Our <span className="text-green-400">Partners Say</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marco Rossi',
                role: 'Retail Owner, Italy',
                quote: 'MCW transformed our business. We went from struggling to find reliable suppliers to having 50+ products in stock.',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663102040929/QY7QsZtbdV7DX3szJDn6s5/mcw-customer-satisfaction-jr5Xit5r52MWNAxXo2ufag.webp',
              },
              {
                name: 'Anna Schmidt',
                role: 'Distributor, Germany',
                quote: 'The support team is incredible. They helped us navigate compliance and grow our network across 3 countries.',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663102040929/QY7QsZtbdV7DX3szJDn6s5/mcw-team-collaboration-bxSE9a3UTfnC68LbZGSRpm.webp',
              },
              {
                name: 'Jean Dupont',
                role: 'Wholesale Partner, France',
                quote: 'Best decision we made. Profit margins increased 4x and our customers love the quality.',
                image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663102040929/QY7QsZtbdV7DX3szJDn6s5/mcw-b2b-partnership-1.png',
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-green-900 to-emerald-900 border border-green-500 rounded-2xl p-8 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300"
                style={{
                  animation: `slideUp 0.6s ease-out ${i * 0.1}s both`,
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h3 className="font-black text-green-400">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 border-2 border-green-500 rounded-3xl p-12 text-center">
          <h2 className="text-5xl font-black mb-6">
            Ready to Transform Your <span className="text-green-400">Business?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 100+ successful partners across Europe. Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/35699999999"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Partnership
            </a>
            <button className="px-8 py-4 border-2 border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500 hover:text-black transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="relative border-t border-green-500 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-black text-green-400 mb-4">MCW</h3>
              <p className="text-gray-400 text-sm">Europe's premier B2B CBD wholesale platform.</p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-green-400">About Us</a></li>
                <li><a href="#" className="hover:text-green-400">Products</a></li>
                <li><a href="#" className="hover:text-green-400">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-green-400">Terms</a></li>
                <li><a href="#" className="hover:text-green-400">Privacy</a></li>
                <li><a href="#" className="hover:text-green-400">Compliance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Contact</h3>
              <p className="text-gray-400 text-sm">📞 +356 9953 6248</p>
              <p className="text-gray-400 text-sm">📧 partnerships@mcw.eu</p>
            </div>
          </div>
          <div className="border-t border-green-500 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 MCW CBD Relax Shop. All products contain &lt;0.2% THC. For 18+ only. | Sedqa Helpline: 1930</p>
          </div>
        </div>
      </footer>

      {/* ===== ANIMATIONS ===== */}
      <style>{`
        @keyframes breathe {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </div>
  );
}
