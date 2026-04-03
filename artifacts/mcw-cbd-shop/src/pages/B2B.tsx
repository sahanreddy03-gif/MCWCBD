import { useEffect, useMemo } from 'react';
import { ChevronDown, ArrowRight, Zap } from 'lucide-react';
import imgGlobe from "@assets/mcw-b2b-globe-1_1775184923079.png";
import imgNetwork from "@assets/mcw-b2b-network-1_1775184923079.png";
import imgWarehouse from "@assets/mcw-b2b-warehouse-1_1775184923079.png";
import imgHero2 from "@assets/mcw-b2b-hero-2_1775184923080.png";
import imgProducts from "@assets/mcw-b2b-products-1_(1)_1775184923079.png";
import imgOils from "@assets/mcw-category-oils_1775184923078.png";
import imgFlowers from "@assets/mcw-category-flowers_1775184923078.png";
import imgVapes from "@assets/mcw-category-vapes_1775184923078.png";
import imgAccessories from "@assets/mcw-category-accessories_1775184923078.png";

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  duration: `${3 + (i % 4)}s`,
  delay: `${(i * 0.3) % 2}s`,
}));

export default function B2BElitePartnership() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const els = document.querySelectorAll('[data-parallax]');
      els.forEach((el) => {
        const speed = (el as HTMLElement).dataset.parallax;
        if (speed) {
          (el as HTMLElement).style.transform = `translateY(${scrolled * parseFloat(speed)}px)`;
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-green-950 to-black opacity-60"></div>
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-20"
            style={{
              left: p.left,
              top: p.top,
              animation: `b2bFloat ${p.duration} ease-in-out infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Smoke/Fog Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-green-500 to-transparent blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-24 sm:py-28 overflow-hidden z-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-b2b-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-b2b-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-b2b-blob" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
          <div className="inline-block mb-5 sm:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-xs sm:text-sm font-bold text-black animate-pulse">
            🚀 EUROPE'S PREMIER B2B PLATFORM
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 sm:mb-6 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #10b981 50%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'b2bBreathe 4s ease-in-out infinite',
            }}
          >
            Wholesale Made
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400">
              Effortless
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed animate-b2b-fade-up px-2">
            Connect with Europe's most trusted CBD wholesale network. We've solved the problem for 100+ retailers and distributors.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 sm:mb-12 max-w-xs sm:max-w-2xl mx-auto">
            {[
              { number: '100+', label: 'Partners' },
              { number: '50+', label: 'Manufacturers' },
              { number: '25', label: 'Countries' },
            ].map((metric, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-green-900 to-emerald-900 border border-green-500 rounded-lg p-2 sm:p-4 hover:scale-110 transition-transform duration-300"
                style={{ animation: `b2bSlideUp 0.6s ease-out ${i * 0.1}s both` }}
              >
                <div className="text-xl sm:text-3xl font-black text-green-400">{metric.number}</div>
                <div className="text-xs sm:text-sm text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 px-4 sm:px-0">
            <a
              href="https://wa.me/35699536248"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Start Partnership <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#journey"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500 hover:text-black transition-all duration-300 flex items-center justify-center text-sm sm:text-base backdrop-blur-sm"
            >
              Learn Process
            </a>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* ===== HERO IMAGE SECTION ===== */}
      <section className="relative py-12 sm:py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div data-parallax="0.05">
              <img
                src={imgGlobe}
                alt="MCW European CBD Network"
                className="rounded-2xl shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 w-full"
                loading="lazy"
              />
            </div>
            <div className="animate-b2b-fade-left">
              <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">
                Connected to <span className="text-green-400">Every Manufacturer</span> in Europe
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                We're not just a platform. We're your strategic partner with direct relationships to 50+ premium manufacturers across Europe.
              </p>
              <ul className="space-y-3">
                {['Direct manufacturer access', 'Verified lab reports', 'Bulk pricing guaranteed', 'Custom clearance support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors">
                    <Zap className="w-5 h-5 text-green-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM vs SOLUTION ===== */}
      <section className="relative py-12 sm:py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-center mb-10 sm:mb-16">
            The Problem We <span className="text-green-400">Solve</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-900 to-red-950 border border-red-500 rounded-2xl p-8 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300">
              <h3 className="text-2xl font-black mb-6 text-red-400">❌ The Old Way</h3>
              <ul className="space-y-4">
                {['Fragmented suppliers', 'Hidden costs & markups', 'No quality guarantee', 'Slow delivery times', 'Compliance nightmares', 'Zero support'].map((item, i) => (
                  <li key={i} className="text-gray-300 flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-900 to-emerald-900 border border-green-500 rounded-2xl p-8 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300">
              <h3 className="text-2xl font-black mb-6 text-green-400">✅ The MCW Way</h3>
              <ul className="space-y-4">
                {['One unified platform', 'Transparent pricing', 'Lab tested & verified', 'Fast door-to-door delivery', 'Full compliance support', 'Dedicated account manager'].map((item, i) => (
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
      <section id="journey" className="relative py-12 sm:py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-center mb-10 sm:mb-16">
            Your Path to <span className="text-green-400">Success</span>
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500 transform -translate-y-1/2"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
              {[
                { number: '01', title: 'Connect', desc: 'Schedule consultation', icon: '🤝' },
                { number: '02', title: 'Strategy', desc: 'Custom business plan', icon: '📋' },
                { number: '03', title: 'Equip', desc: 'Choose products', icon: '📦' },
                { number: '04', title: 'Deliver', desc: 'Fast shipping', icon: '🚚' },
                { number: '05', title: 'Support', desc: 'Ongoing assistance', icon: '💬' },
                { number: '06', title: 'Grow', desc: '3-5x profit margins', icon: '📈' },
              ].map((step, i) => (
                <div key={i} className="relative" style={{ animation: `b2bSlideUp 0.6s ease-out ${i * 0.1}s both` }}>
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
      <section className="relative py-12 sm:py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-center mb-10 sm:mb-16">
            Premium Product <span className="text-green-400">Categories</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: 'CBD Oils', image: imgOils },
              { title: 'CBD Flowers', image: imgFlowers },
              { title: 'CBD Vapes', image: imgVapes },
              { title: 'Accessories', image: imgAccessories },
            ].map((cat, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                style={{ animation: `b2bSlideUp 0.6s ease-out ${i * 0.1}s both` }}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-6">
                  <h3 className="text-xl font-black text-green-400 group-hover:text-white transition-colors">{cat.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BUSINESS OPERATIONS ===== */}
      <section className="relative py-12 sm:py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-center mb-10 sm:mb-16">
            How We <span className="text-green-400">Operate</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Logistics & Delivery', image: imgNetwork, desc: 'Fast, reliable delivery to your doorstep with full tracking' },
              { title: 'Quality Products', image: imgProducts, desc: 'Every product lab tested and verified for quality' },
              { title: 'European Distribution', image: imgGlobe, desc: 'Connected to manufacturers across all of Europe' },
            ].map((op, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-green-900 to-emerald-900 border border-green-500 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300"
                style={{ animation: `b2bSlideUp 0.6s ease-out ${i * 0.1}s both` }}
              >
                <img src={op.image} alt={op.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
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
      <section className="relative py-12 sm:py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">
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
                src={imgWarehouse}
                alt="MCW CBD Wholesale Operations"
                className="rounded-2xl shadow-2xl shadow-green-500/30 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative py-12 sm:py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-center mb-10 sm:mb-16">
            What Our <span className="text-green-400">Partners Say</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Marco Rossi', role: 'Retail Owner, Italy', quote: 'MCW transformed our business. We went from struggling to find reliable suppliers to having 50+ products in stock.' },
              { name: 'Anna Schmidt', role: 'Distributor, Germany', quote: 'The support team is incredible. They helped us navigate compliance and grow our network across 3 countries.' },
              { name: 'Jean Dupont', role: 'Wholesale Partner, France', quote: 'Best decision we made. Profit margins increased 4x and our customers love the quality.' },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-green-900 to-emerald-900 border border-green-500 rounded-2xl p-8 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300"
                style={{ animation: `b2bSlideUp 0.6s ease-out ${i * 0.1}s both` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center font-black text-black text-lg shrink-0">
                    {testimonial.name[0]}
                  </div>
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

      {/* ===== WAREHOUSE SHOWCASE ===== */}
      <section className="relative py-12 sm:py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative">
            <img src={imgHero2} alt="MCW Wholesale Facility" className="w-full h-52 sm:h-80 object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center px-6 sm:px-12">
              <div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4">Scale With <span className="text-green-400">Confidence</span></h2>
                <p className="text-gray-300 text-sm sm:text-lg max-w-md">State-of-the-art facilities and proven logistics infrastructure ready to support your growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-12 sm:py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 border-2 border-green-500 rounded-3xl p-6 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
            Ready to Transform Your <span className="text-green-400">Business?</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
            Join 100+ successful partners across Europe. Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://wa.me/35699536248"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Start Your Partnership
            </a>
            <a
              href="https://wa.me/35699536248"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500 hover:text-black transition-all duration-300 text-sm sm:text-base"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes b2bBreathe {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
        @keyframes b2bBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes b2bFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes b2bSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes b2bFadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes b2bFadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-b2b-blob { animation: b2bBlob 7s infinite; }
        .animate-b2b-fade-up { animation: b2bFadeInUp 0.8s ease-out; }
        .animate-b2b-fade-left { animation: b2bFadeInLeft 0.8s ease-out; }
      `}</style>
    </div>
  );
}
