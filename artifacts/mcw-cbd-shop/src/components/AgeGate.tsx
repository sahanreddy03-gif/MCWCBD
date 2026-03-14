import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoSrc from "@assets/Untitled_design_(42)_1773502384512.png";

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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
          
          <motion.div 
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl w-full text-center relative z-10"
          >
            <img src={logoSrc} alt="MCW Relax Store" className="w-40 h-40 md:w-52 md:h-52 object-contain mx-auto mb-8" />
            
            <h2 className="text-7xl md:text-[8rem] leading-[0.8] font-bebas tracking-tight text-white mb-6">ARE YOU 18+?</h2>
            
            <p className="text-muted-foreground font-medium mb-12 max-w-md mx-auto leading-relaxed">
              You must be of legal smoking age in your jurisdiction to enter this site. By entering, you verify that you are at least 18 years of age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <button 
                onClick={handleConfirm}
                className="flex-1 py-5 px-8 bg-primary text-black font-black hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-lg"
              >
                I am 18+ — Enter
              </button>
              <button 
                onClick={handleDecline}
                className="w-full sm:w-auto py-5 px-8 font-black border border-white/20 text-muted-foreground hover:bg-white/10 hover:text-white transition-all duration-300 uppercase tracking-widest text-lg"
              >
                Exit
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
