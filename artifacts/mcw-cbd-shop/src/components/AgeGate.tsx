import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AgeGate() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    const verified = sessionStorage.getItem("mcw_age_verified");
    if (!verified) {
      setIsOpen(true);
    }
    setHasChecked(true);
  }, []);

  const handleConfirm = () => {
    sessionStorage.setItem("mcw_age_verified", "true");
    setIsOpen(false);
  };

  const handleDecline = () => {
    window.location.href = "https://google.com";
  };

  if (!hasChecked) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 30 }}
            className="max-w-md w-full bg-card border border-border/50 p-8 rounded-2xl shadow-2xl text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
            
            <h2 className="text-5xl font-bebas tracking-wide mb-2 text-foreground">Are you 18 or older?</h2>
            <p className="text-muted-foreground mb-8">
              You must be 18 years or older to enter this site. By clicking "Enter", you confirm that you are of legal age to purchase CBD and cannabis-related products in your jurisdiction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleDecline}
                className="flex-1 py-4 px-6 rounded-xl font-semibold border-2 border-border text-muted-foreground hover:bg-white/5 hover:text-white transition-all duration-200 uppercase tracking-widest text-sm"
              >
                Exit
              </button>
              <button 
                onClick={handleConfirm}
                className="flex-1 py-4 px-6 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest text-sm"
              >
                I am 18+ — Enter
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
