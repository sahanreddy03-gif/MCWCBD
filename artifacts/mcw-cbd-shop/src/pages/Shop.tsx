import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Filter, X, Check, Search, Plus } from "lucide-react";
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

  // Subscribe to cart changes
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
      
      {/* HEADER */}
      <div className="pt-28 pb-12 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bebas tracking-wide mb-6">The MCW Collection</h1>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input 
                type="text" 
                placeholder="Search products or brands..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-background border border-border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary transition-colors text-white"
              />
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setIsFilterOpen(true)}
                className="md:hidden px-6 py-3 border border-border rounded-xl flex items-center gap-2 font-bold uppercase tracking-wider text-sm hover:bg-white/5"
              >
                <Filter size={18} /> Filters
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl flex items-center gap-2 font-bold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
              >
                <ShoppingBag size={18} /> Cart ({cartState.reduce((a, b) => a + b.quantity, 0)})
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex gap-8">
        
        {/* DESKTOP SIDEBAR */}
        <div className="hidden md:block w-64 shrink-0">
          <div className="sticky top-28">
            <h3 className="font-bebas text-2xl tracking-widest mb-6">Categories</h3>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat as any)}
                    className={`w-full text-left py-2 px-3 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                      activeCategory === cat 
                        ? "bg-white/10 text-white" 
                        : "text-muted-foreground hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="flex-1">
          <div className="mb-6 flex justify-between items-center text-sm text-muted-foreground">
            <span>Showing {filteredProducts.length} products</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-border rounded-2xl">
              <p className="text-xl text-muted-foreground">No products found matching your search.</p>
              <button onClick={() => {setSearch(""); setActiveCategory("All");}} className="mt-4 text-primary font-bold uppercase">Clear Filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <motion.div 
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-xl overflow-hidden group flex flex-col"
                >
                  <div className="relative aspect-square bg-[#111] overflow-hidden">
                    {product.isNew && (
                      <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-sm">NEW</span>
                    )}
                    {product.isPopular && (
                      <span className="absolute top-3 left-3 z-10 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest px-2 py-1 rounded-sm">HOT</span>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{product.brand}</span>
                    <h3 className="font-semibold text-foreground leading-tight mb-2 flex-1">{product.name}</h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-[10px] uppercase border border-border px-2 py-0.5 rounded text-muted-foreground">{product.category}</span>
                      {product.effect && <span className="text-[10px] uppercase border border-border px-2 py-0.5 rounded text-muted-foreground">{product.effect}</span>}
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-bebas text-xl">€{product.price.toFixed(2)}</span>
                      <button 
                        onClick={() => addToCart(product)}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-black transition-colors"
                      >
                        <Plus size={20} />
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-50 flex flex-col shadow-2xl"
            >
              <div className="p-6 border-b border-border flex justify-between items-center">
                <h2 className="font-bebas text-3xl tracking-wide">Your Cart</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartState.length === 0 ? (
                  <div className="text-center text-muted-foreground mt-20">
                    <ShoppingBag size={48} className="mx-auto mb-4 opacity-20" />
                    <p>Your cart is empty.</p>
                  </div>
                ) : (
                  cartState.map(item => (
                    <div key={item.product.id} className="flex gap-4">
                      <img src={item.product.image} className="w-20 h-20 rounded-lg object-cover bg-black" alt={item.product.name} />
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm line-clamp-2">{item.product.name}</h4>
                        <p className="text-muted-foreground text-xs mt-1">{item.product.brand}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-bebas text-lg">€{item.product.price.toFixed(2)}</span>
                          <div className="flex items-center gap-3 bg-background rounded-md px-2 py-1">
                            <span className="text-xs font-bold text-muted-foreground">QTY {item.quantity}</span>
                            <button onClick={() => removeFromCart(item.product.id)} className="text-destructive hover:text-red-400">
                              <X size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 border-t border-border bg-background/50">
                <div className="flex justify-between mb-6 font-bebas text-2xl">
                  <span>Total</span>
                  <span className="text-primary">€{getCartTotal().toFixed(2)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  disabled={cartState.length === 0}
                  className="w-full py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  Checkout via WhatsApp
                </button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  Pay securely upon confirmation. <br/>Stripe integration coming soon.
                </p>
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
              className="fixed inset-0 bg-black/60 z-50 md:hidden"
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              className="fixed bottom-0 left-0 w-full h-[80vh] bg-card border-t border-border rounded-t-3xl z-50 flex flex-col md:hidden"
            >
              <div className="p-6 border-b border-border flex justify-between items-center">
                <h2 className="font-bebas text-2xl tracking-wide">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
              </div>
              <div className="p-6 overflow-y-auto flex-1">
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Categories</h3>
                <div className="flex flex-col gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => { setActiveCategory(cat as any); setIsFilterOpen(false); }}
                      className={`text-left py-3 px-4 rounded-xl text-sm font-semibold tracking-wide border ${
                        activeCategory === cat ? "border-primary text-primary bg-primary/10" : "border-border text-foreground bg-background"
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
