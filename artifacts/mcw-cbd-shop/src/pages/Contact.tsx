import { Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: "9953 6248",
    sub: "Available during store hours",
    href: "tel:+35699536248",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us instantly",
    sub: "Fastest response guaranteed",
    href: "https://wa.me/35699536248",
    external: true,
  },
  {
    icon: MapPin,
    label: "Main Store",
    value: "Sliema Branch",
    sub: "Triq Bisazza, Tas-Sliema SLM 1641",
    href: "https://maps.google.com/?q=35.3378,14.3008",
    external: true,
  },
  {
    icon: Clock,
    label: "Store Hours",
    value: "Open · Closes 11:30 pm",
    sub: "Every day, all locations",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello MCW CBD Shop,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    window.open(`https://wa.me/35699536248?text=${encodeURIComponent(msg)}`, "_blank");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero */}
      <div className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 via-black/80 to-black pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,197,94,0.12),transparent)] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-green-400 font-bebas tracking-widest text-base mb-3">MCW CBD Relax Shop</p>
          <h1 className="font-bebas text-7xl md:text-9xl tracking-widest text-white mb-5 leading-none">
            GET IN TOUCH
          </h1>
          <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">
            We're here to help. Reach us via WhatsApp for the fastest response.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2 variants={fadeUp} className="font-bebas text-4xl md:text-5xl tracking-widest text-white mb-8">
              Contact <span className="text-green-400">Info</span>
            </motion.h2>

            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, sub, href, external }) => {
                const Wrapper = href ? "a" : "div";
                const wrapperProps = href
                  ? { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) }
                  : {};
                return (
                  <motion.div key={label} variants={fadeUp}>
                    <Wrapper
                      {...(wrapperProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
                      className="flex items-start gap-5 bg-[#080808] border border-gray-800 hover:border-green-700/50 p-6 transition-all duration-300 group block"
                    >
                      <div className="w-10 h-10 border border-gray-800 group-hover:border-green-800 flex items-center justify-center shrink-0 transition-colors">
                        <Icon className="w-5 h-5 text-green-600" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-700 uppercase tracking-widest mb-1">{label}</p>
                        <p className="text-white text-sm font-medium group-hover:text-green-400 transition-colors">{value}</p>
                        <p className="text-gray-600 text-xs mt-0.5">{sub}</p>
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>

            {/* Locations strip */}
            <motion.div variants={fadeUp} className="mt-8">
              <p className="text-[10px] text-gray-700 uppercase tracking-widest mb-4">Our Locations</p>
              <div className="grid grid-cols-5 gap-2">
                {["Sliema", "Gzira", "Mellieha", "Bugibba", "Valletta"].map((loc) => (
                  <div key={loc} className="border border-gray-800 py-3 text-center">
                    <p className="font-bebas text-[13px] tracking-widest text-gray-500">{loc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="font-bebas text-4xl md:text-5xl tracking-widest text-white mb-8">
              Send a <span className="text-green-400">Message</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "name", label: "Name", type: "text", placeholder: "Your name", required: true },
                { name: "email", label: "Email", type: "email", placeholder: "your@email.com", required: true },
                { name: "phone", label: "Phone (optional)", type: "tel", placeholder: "Your phone number", required: false },
              ].map(({ name, label, type, placeholder, required }) => (
                <div key={name}>
                  <label className="block text-[10px] text-gray-600 uppercase tracking-widest mb-2">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={formData[name as keyof typeof formData]}
                    onChange={handleChange}
                    required={required}
                    placeholder={placeholder}
                    className="w-full bg-[#080808] border border-gray-800 focus:border-green-700 text-white text-sm px-4 py-3 outline-none transition-colors placeholder:text-gray-800"
                  />
                </div>
              ))}

              <div>
                <label className="block text-[10px] text-gray-600 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full bg-[#080808] border border-gray-800 focus:border-green-700 text-white text-sm px-4 py-3 outline-none resize-none transition-colors placeholder:text-gray-800"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-400 text-black font-black text-sm uppercase tracking-widest py-4 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                {sent ? "Sent! Opening WhatsApp..." : "Send via WhatsApp"}
              </button>
            </form>

            <p className="text-gray-700 text-xs mt-5 leading-relaxed">
              Your message opens in WhatsApp for instant delivery to our team. Typical response time: under 30 minutes during store hours.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
