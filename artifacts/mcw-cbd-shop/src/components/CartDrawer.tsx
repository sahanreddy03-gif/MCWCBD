import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, MapPin, Loader2 } from "lucide-react";
import {
  subscribeCart, addToCart, decrementCart, removeFromCart, clearCart,
  getCartItems, getCartTotal, getCartCount,
} from "@/lib/cart";

const DELIVERY_FEE = 3.50;
const FREE_THRESHOLD = 50;

export function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [cartState, setCartState] = useState(getCartItems());
  const [step, setStep] = useState<"cart" | "checkout">("cart");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [locating, setLocating] = useState(false);

  useEffect(() => subscribeCart(() => setCartState([...getCartItems()])), []);

  useEffect(() => {
    if (!isOpen) setStep("cart");
  }, [isOpen]);

  const deliveryFee = getCartTotal() >= FREE_THRESHOLD ? 0 : DELIVERY_FEE;
  const orderTotal = getCartTotal() + deliveryFee;
  const cartCount = cartState.reduce((a, b) => a + b.quantity, 0);

  const handleLocate = () => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setAddress(`https://maps.google.com/?q=${latitude},${longitude}`);
        setLocating(false);
      },
      () => setLocating(false),
      { timeout: 8000 }
    );
  };

  const handleOrder = () => {
    if (cartState.length === 0) return;
    const sub = getCartTotal();
    const del = deliveryFee;
    const tot = orderTotal;
    let text = `Hello MCW! 👋 I'd like to place an order:\n\n`;
    if (name) text += `👤 Name: ${name}\n`;
    if (address) text += `📍 Address: ${address}\n`;
    text += `\n`;
    cartState.forEach(item => {
      text += `• ${item.quantity}× ${item.product.name} — €${(item.product.price * item.quantity).toFixed(2)}\n`;
    });
    text += `\nSubtotal: €${sub.toFixed(2)}`;
    text += `\nDelivery: ${del === 0 ? "FREE 🎉" : `€${del.toFixed(2)}`}`;
    text += `\n*TOTAL: €${tot.toFixed(2)}*`;
    if (notes) text += `\n\n📝 Notes: ${notes}`;
    text += `\n\nPlease confirm and send payment link. Thank you!`;
    window.open(`https://wa.me/35699536248?text=${encodeURIComponent(text)}`, "_blank");
    clearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 220 }}
            className="fixed top-0 right-0 h-full w-full max-w-[420px] bg-[#0d0d0d] border-l border-white/10 z-[60] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                {step === "checkout" && (
                  <button onClick={() => setStep("cart")} className="text-white/40 hover:text-white transition-colors text-sm font-black uppercase tracking-widest">
                    ← Back
                  </button>
                )}
                <h2 className="font-bebas text-4xl tracking-widest text-white leading-none">
                  {step === "cart" ? "YOUR CART" : "YOUR DETAILS"}
                </h2>
              </div>
              <button onClick={onClose} className="p-2 text-white/40 hover:text-white transition-colors">
                <X size={22} />
              </button>
            </div>

            {/* ── CART STEP ── */}
            {step === "cart" && (
              <>
                <div className="flex-1 overflow-y-auto p-5 space-y-3">
                  {cartState.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-white/20 gap-4 pt-24">
                      <ShoppingBag size={56} className="opacity-20" />
                      <p className="font-black uppercase tracking-widest text-sm">Your cart is empty</p>
                      <button onClick={onClose} className="mt-2 px-6 py-3 bg-[#22c55e] text-black font-black uppercase tracking-widest text-xs hover:bg-green-400 transition-colors">
                        Browse Products
                      </button>
                    </div>
                  ) : (
                    cartState.map(item => (
                      <div key={item.product.id} className="flex gap-3 bg-white/5 border border-white/10 p-3">
                        <img src={item.product.image} className="w-[72px] h-[72px] object-contain bg-[#071a09] shrink-0" alt={item.product.name} />
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">{item.product.brand}</p>
                            <h4 className="font-bold text-[11px] text-white line-clamp-2 mt-0.5 uppercase leading-tight">{item.product.name}</h4>
                          </div>
                          <div className="flex justify-between items-center mt-1.5">
                            <span className="font-bebas text-xl text-white">€{(item.product.price * item.quantity).toFixed(2)}</span>
                            <div className="flex items-center border border-white/20">
                              <button onClick={() => decrementCart(item.product.id)} className="px-2 py-1 text-white/60 hover:text-white hover:bg-white/10 transition-colors font-black text-xs">−</button>
                              <span className="px-2 py-1 text-[11px] font-black text-white border-x border-white/20 min-w-[1.8rem] text-center">{item.quantity}</span>
                              <button onClick={() => addToCart(item.product)} className="px-2 py-1 text-white/60 hover:text-white hover:bg-white/10 transition-colors font-black text-xs">+</button>
                            </div>
                          </div>
                        </div>
                        <button onClick={() => removeFromCart(item.product.id)} className="text-white/20 hover:text-red-400 transition-colors self-start shrink-0">
                          <X size={13} />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {cartState.length > 0 && (
                  <div className="p-5 border-t border-white/10 shrink-0">
                    {/* Free delivery progress */}
                    <div className="mb-4">
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-1.5">
                        <div className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(100, (getCartTotal() / FREE_THRESHOLD) * 100)}%`, background: getCartTotal() >= FREE_THRESHOLD ? "#4ade80" : "#FFB800" }} />
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-center" style={{ color: getCartTotal() >= FREE_THRESHOLD ? "#4ade80" : "rgba(255,255,255,0.3)" }}>
                        {getCartTotal() >= FREE_THRESHOLD ? "🎉 Free delivery unlocked!" : `€${(FREE_THRESHOLD - getCartTotal()).toFixed(2)} more for free delivery`}
                      </p>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-widest text-white/40">Subtotal</span>
                      <span className="font-bebas text-2xl text-white">€{getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-4 pb-4 border-b border-white/10">
                      <span className="text-xs font-black uppercase tracking-widest text-white/40">Delivery</span>
                      <span className="font-bebas text-2xl" style={{ color: deliveryFee === 0 ? "#4ade80" : "white" }}>
                        {deliveryFee === 0 ? "FREE" : `€${deliveryFee.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between items-end mb-5">
                      <span className="text-sm font-black uppercase tracking-widest text-white">Total</span>
                      <span className="font-bebas text-5xl text-white">€{orderTotal.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => setStep("checkout")}
                      className="w-full py-4 bg-[#22C55E] text-black font-black uppercase tracking-widest text-sm hover:bg-[#4ade80] transition-colors active:scale-[0.98]"
                    >
                      Proceed to Order →
                    </button>
                  </div>
                )}
              </>
            )}

            {/* ── CHECKOUT STEP ── */}
            {step === "checkout" && (
              <>
                <div className="flex-1 overflow-y-auto p-5 space-y-5">
                  {/* Order summary mini */}
                  <div className="bg-white/5 border border-white/10 p-4 space-y-1.5">
                    {cartState.map(item => (
                      <div key={item.product.id} className="flex justify-between text-xs">
                        <span className="text-white/60 font-bold uppercase truncate pr-4">{item.quantity}× {item.product.name}</span>
                        <span className="text-white font-bebas text-base shrink-0">€{(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="border-t border-white/10 pt-2 flex justify-between">
                      <span className="text-white/40 text-xs font-black uppercase tracking-widest">Total</span>
                      <span className="font-bebas text-2xl text-[#22c55e]">€{orderTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. John"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 focus:border-[#22c55e] outline-none px-4 py-3 text-white text-sm font-bold placeholder:text-white/20 transition-colors"
                    />
                  </div>

                  {/* Address / Location */}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Delivery Address</label>
                    <textarea
                      placeholder="Street, area, apartment… or share your location below"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      rows={3}
                      className="w-full bg-white/5 border border-white/15 focus:border-[#22c55e] outline-none px-4 py-3 text-white text-sm font-bold placeholder:text-white/20 transition-colors resize-none"
                    />
                    <button
                      onClick={handleLocate}
                      disabled={locating}
                      className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 border border-[#22c55e]/40 text-[#22c55e] font-black uppercase tracking-widest text-[11px] hover:bg-[#22c55e]/10 transition-colors disabled:opacity-50"
                    >
                      {locating ? <Loader2 size={14} className="animate-spin" /> : <MapPin size={14} />}
                      {locating ? "Getting location…" : "📍 Share My Location"}
                    </button>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Notes (optional)</label>
                    <input
                      type="text"
                      placeholder="Special instructions, gate code, etc."
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 focus:border-[#22c55e] outline-none px-4 py-3 text-white text-sm font-bold placeholder:text-white/20 transition-colors"
                    />
                  </div>

                  <p className="text-[10px] text-white/25 uppercase tracking-widest font-bold text-center leading-relaxed">
                    WhatsApp will open with your order pre-filled.<br />We'll send a payment link to confirm.
                  </p>
                </div>

                <div className="p-5 border-t border-white/10 shrink-0">
                  <button
                    onClick={handleOrder}
                    className="w-full py-4 bg-[#25D366] text-black font-black uppercase tracking-widest text-sm hover:brightness-110 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Send Order on WhatsApp
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ── Floating Cart Bubble ── */
export function FloatingCart() {
  const [count, setCount] = useState(getCartCount());
  const [isOpen, setIsOpen] = useState(false);
  const [bump, setBump] = useState(false);

  useEffect(() => subscribeCart(() => {
    const newCount = getCartCount();
    if (newCount > count) setBump(true);
    setCount(newCount);
    setTimeout(() => setBump(false), 400);
  }), [count]);

  if (count === 0) return <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />;

  return (
    <>
      <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#22C55E] text-black font-black uppercase tracking-widest text-sm px-5 py-3.5 shadow-2xl shadow-green-900/60 hover:bg-[#4ade80] transition-all active:scale-95 ${bump ? "scale-110" : "scale-100"}`}
        style={{ transition: "transform 0.15s ease, background-color 0.2s" }}
      >
        <ShoppingBag size={18} />
        <span>{count} item{count !== 1 ? "s" : ""}</span>
        <span className="bg-black/20 px-2 py-0.5 text-xs">€{getCartTotal().toFixed(2)}</span>
      </button>
    </>
  );
}
