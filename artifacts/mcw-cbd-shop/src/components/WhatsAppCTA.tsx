import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppCTA() {
  const message = encodeURIComponent("Hello MCW, I'd like to make an order!");
  const url = `https://wa.me/35699999999?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] flex items-center justify-center hover:bg-[#20bd5a] transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-10 right-0 bg-card border border-border text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-medium">
        Order via WhatsApp
      </span>
    </motion.a>
  );
}
