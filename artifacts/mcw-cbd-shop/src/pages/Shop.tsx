import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Filter, X, Search } from "lucide-react";
import { SEO } from "@/components/SEO";
import { PRODUCTS, type Category, type Product } from "@/lib/data";

// Simple Cart Store
let cartItems: { product: Product, quantity: number }[] = [];
let cartListeners: (() => void)[] = [];
const subscribe = (listener: () => void) => {
  cartListeners.push(listener);
  return () => { cartListeners = cartListeners.filter(l => l !== listener) };
};
const addToCart = (product: Product) => {
  const existing = cartItems.find(i => i.product.id === product.id);
  if (existing) existing.quantity++;
  else cartItems.push({ product, quantity: 1 });
  cartListeners.forEach(l => l());
};
const removeFromCart = (id: string) => {
  cartItems = cartItems.filter(i => i.product.id !== id);
  cartListeners.forEach(l => l());
};
const getCartTotal = () => cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [search, setSearch] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartState, setCartState] = useState(cartItems);

  useState(() => subscribe(() => setCartState([...cartItems])));

  const categories = ["All", ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    let text = "Hello MCW, I would like to order:\n\n";
    cartItems.forEach(item => {
      text += `- ${item.quantity}x ${item.product.name} (€${item.product.price.toFixed(2)})\n`;
    });
    text += `\nTotal: €${getCartTotal().toFixed(2)}\n\nPlease let me know how to pay!`;
    window.open(`https://wa.me/35699999999?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <>
      <SEO title="Shop the Collection" />
      
      {/* SHOP HEADER */}
      <div className="pt-32 pb-16 bg-[#0d0d0d] border-b border-white/[0.04] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-7xl md:text-9xl font-bebas tracking-tight text-white mb-4">
            THE MCW COLLECTION
          </h1>
          <p className="text-muted-foreground font-bold tracking-widest uppercase text-sm mb-12">
            {PRODUCTS.length} Premium Products Available
          </p>
          
          <div className="flex flex-col md:flex-row justify-between gap-6 items-end">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input 
                type="text" 
                placeholder="SEARCH PRODUCTS OR BRANDS..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-[#111] border border-white/10 rounded-none py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-colors text-white font-bold tracking-widest text-xs uppercase"
              />
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <button 
                onClick={() => setIsFilterOpen(true)}
                className="md:hidden flex-1 px-6 py-4 border border-white/10 bg-[#111] flex items-center justify-center gap-2 font-black uppercase tracking-widest text-xs text-white"
              >
                <Filter size={16} /> Filters
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="flex-1 md:flex-none px-8 py-4 bg-primary text-black flex items-center justify-center gap-2 font-black uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors"
              >
                <ShoppingBag size={16} /> Cart ({cartState.reduce((a, b) => a + b.quantity, 0)})
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row gap-12">
        
        {/* DESKTOP SIDEBAR - PILL TAGS */}
        <div className="hidden md:block w-72 shrink-0">
          <div className="sticky top-32">
            <h3 className="font-bebas text-3xl tracking-widest mb-6 text-white">FILTER BY</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`py-2 px-4 text-xs font-black uppercase tracking-widest transition-all duration-200 border ${
                    activeCategory === cat 
                      ? "bg-primary text-black border-primary" 
                      : "bg-transparent text-muted-foreground border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCT GRID - STIIIZY STYLE */}
        <div className="flex-1">
          <div className="mb-8 flex justify-between items-center text-xs font-bold tracking-widest uppercase text-muted-foreground">
            <span>Showing {filteredProducts.length} results</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-32 text-center border border-white/[0.04] bg-[#111]">
              <p className="text-xl text-muted-foreground font-bold uppercase tracking-widest">No products found.</p>
              <button onClick={() => {setSearch(""); setActiveCategory("All");}} className="mt-6 px-6 py-3 border border-primary text-primary font-black uppercase tracking-widest text-xs hover:bg-primary hover:text-black transition-colors">Clear Filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <motion.div 
                  key={product.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-[#111] border border-white/[0.06] rounded-2xl overflow-hidden group flex flex-col relative"
                >
                  {/* Image Area */}
                  <div className="relative aspect-square bg-[#0d0d0d] overflow-hidden">
                    {/* Sharp Corner Badges */}
                    {product.isNew && (
                      <span className="absolute top-0 left-0 z-10 bg-primary text-black text-[9px] font-black uppercase tracking-widest px-3 py-1.5 shadow-lg">NEW</span>
                    )}
                    {product.isPopular && !product.isNew && (
                      <span className="absolute top-0 left-0 z-10 bg-secondary text-black text-[9px] font-black uppercase tracking-widest px-3 py-1.5 shadow-lg">HOT</span>
                    )}
                    
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Hover Inner Glow */}
                    <div className="absolute inset-0 shadow-[inset_0_-40px_40px_rgba(34,197,94,0)] group-hover:shadow-[inset_0_-40px_40px_rgba(34,197,94,0.15)] transition-shadow duration-500 pointer-events-none" />
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-5 flex-1 flex flex-col bg-[#111] relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/80 mb-1">{product.brand}</span>
                    <h3 className="text-sm font-bold text-white leading-tight mb-2 line-clamp-2">{product.name}</h3>
                    
                    <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-6">
                      {product.category} {product.effect && `• ${product.effect}`}
                    </span>
                    
                    <div className="flex items-end justify-between mt-auto">
                      <span className="font-bebas text-3xl text-white leading-none">€{product.price.toFixed(2)}</span>
                      <button 
                        onClick={(e) => { e.preventDefault(); addToCart(product); }}
                        className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white hover:bg-primary hover:border-primary hover:text-black transition-colors"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CART SIDEBAR */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-[#111] border-l border-white/10 z-50 flex flex-col shadow-2xl"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a]">
                <h2 className="font-bebas text-4xl tracking-widest text-white">YOUR CART</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 text-muted-foreground hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartState.length === 0 ? (
                  <div className="text-center text-muted-foreground mt-32">
                    <ShoppingBag size={48} className="mx-auto mb-6 opacity-20" />
                    <p className="font-bold uppercase tracking-widest text-sm">Your cart is empty.</p>
                  </div>
                ) : (
                  cartState.map(item => (
                    <div key={item.product.id} className="flex gap-4 bg-[#0d0d0d] p-3 border border-white/5">
                      <img src={item.product.image} className="w-24 h-24 object-cover bg-black" alt={item.product.name} />
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">{item.product.brand}</p>
                          <h4 className="font-bold text-sm text-white line-clamp-2 mt-1">{item.product.name}</h4>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-bebas text-2xl text-white">€{item.product.price.toFixed(2)}</span>
                          <div className="flex items-center gap-4 border border-white/10 px-3 py-1 bg-black">
                            <span className="text-[10px] font-black tracking-widest text-white">QTY {item.quantity}</span>
                            <button onClick={() => removeFromCart(item.product.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                              <X size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 border-t border-white/10 bg-[#0a0a0a]">
                <div className="flex justify-between items-end mb-6">
                  <span className="font-bold uppercase tracking-widest text-xs text-muted-foreground">SUBTOTAL</span>
                  <span className="font-bebas text-4xl text-primary leading-none">€{getCartTotal().toFixed(2)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  disabled={cartState.length === 0}
                  className="w-full py-5 bg-primary text-black font-black uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  CHECKOUT VIA WHATSAPP
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MOBILE FILTER DRAWER */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsFilterOpen(false)}
              className="fixed inset-0 bg-black/80 z-50 md:hidden"
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 w-full h-[85vh] bg-[#111] border-t border-white/10 z-50 flex flex-col md:hidden"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a]">
                <h2 className="font-bebas text-4xl tracking-widest text-white">FILTERS</h2>
                <button onClick={() => setIsFilterOpen(false)} className="text-white"><X size={24} /></button>
              </div>
              <div className="p-6 overflow-y-auto flex-1">
                <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-4">CATEGORIES</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => { setActiveCategory(cat as any); setIsFilterOpen(false); }}
                      className={`py-3 px-4 text-xs font-black uppercase tracking-widest transition-all duration-200 border ${
                        activeCategory === cat 
                          ? "bg-primary text-black border-primary" 
                          : "bg-transparent text-white border-white/20"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
