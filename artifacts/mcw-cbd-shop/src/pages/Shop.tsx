import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Filter, X, Search } from "lucide-react";
import { SEO } from "@/components/SEO";
import { PRODUCTS, type Category, type Product } from "@/lib/data";
import { useSearch } from "wouter";

const PRIMARY_CATEGORIES: Category[] = ["CBD Oils", "CBD Flowers", "CBD Vapes", "CBD Gummies", "Pre-Rolls", "Lifestyle"];

const SUB_CATEGORIES = Array.from(new Set(PRODUCTS.map(p => p.subCategory))).sort();

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
  const searchString = useSearch();
  const urlParams = new URLSearchParams(searchString);
  const urlCategory = urlParams.get("category");

  const activeCategory: Category | null = PRIMARY_CATEGORIES.includes(urlCategory as Category) ? (urlCategory as Category) : null;
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartState, setCartState] = useState(cartItems);

  useState(() => subscribe(() => setCartState([...cartItems])));

  const availableSubCategories = SUB_CATEGORIES;

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = !activeCategory || p.category === activeCategory;
      const matchSub = !activeSubCategory || p.subCategory === activeSubCategory;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSub && matchSearch;
    });
  }, [activeCategory, activeSubCategory, search]);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    let text = "Hello MCW, I would like to order:\n\n";
    cartItems.forEach(item => {
      text += `- ${item.quantity}x ${item.product.name} (€${item.product.price.toFixed(2)})\n`;
    });
    text += `\nTotal: €${getCartTotal().toFixed(2)}\n\nPlease let me know how to pay!`;
    window.open(`https://wa.me/35699999999?text=${encodeURIComponent(text)}`, '_blank');
  };

  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case "CBD Oils": return "#22C55E";
      case "CBD Flowers": return "#7B4FFF";
      case "CBD Vapes": return "#FF6B35";
      case "CBD Gummies": return "#FF3366";
      case "Pre-Rolls": return "#00C8C8";
      case "Lifestyle": return "#FFB800";
      default: return "#1a1a1a";
    }
  };

  const handleSubCategoryClick = (sub: string) => {
    setActiveSubCategory(prev => prev === sub ? null : sub);
  };

  const clearAllFilters = () => {
    setActiveSubCategory(null);
    setSearch("");
  };

  const categoryMeta: Record<string, { title: string; description: string }> = {
    "CBD Oils": { title: "CBD Oils Malta", description: "Browse premium CBD oils, tinctures and creams available in Malta. Full spectrum, broad spectrum and isolate options with same day delivery." },
    "CBD Flowers": { title: "CBD Flowers Malta", description: "Browse premium CBD flowers, CBG9 buds and hash available in Malta. Top quality strains with same day delivery across Malta." },
    "CBD Vapes": { title: "CBD Vapes Malta", description: "Shop CBD, CBG9 and THCv vape cartridges and disposables in Malta. Premium brands with same day delivery." },
    "CBD Gummies": { title: "CBD Gummies Malta", description: "Shop CBD, CBG9 and THCv gummies, edibles, cookies and energy drinks in Malta. Delicious options with same day delivery." },
    "Pre-Rolls": { title: "CBD Pre-Rolls Malta", description: "Browse premium CBD pre-rolls and accessories available in Malta. Ready to enjoy with same day delivery." },
    "Lifestyle": { title: "Lifestyle & Accessories Malta", description: "Shop CBD lifestyle products, grinders, accessories, clothing and merch in Malta. Same day delivery across Malta." },
  };

  const seoTitle = activeCategory ? categoryMeta[activeCategory]?.title || "Shop the Collection" : "Shop the Collection";
  const seoDescription = activeCategory ? categoryMeta[activeCategory]?.description : undefined;

  return (
    <>
      <SEO title={seoTitle} {...(seoDescription ? { description: seoDescription } : {})} />
      
      {/* SHOP HEADER */}
      <div className="pt-32 pb-16 bg-gradient-to-r from-[#FF6B35] to-[#FFB800] relative overflow-hidden border-b-4 border-black">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-7xl md:text-9xl font-bebas tracking-tight text-black mb-2 leading-none">
            THE MCW COLLECTION
          </h1>
          <p className="text-black/80 font-black tracking-widest uppercase text-lg mb-12">
            PRODUCTS
          </p>
          
          <div className="flex flex-col md:flex-row justify-between gap-6 items-end">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/50" size={20} />
              <input 
                type="text" 
                placeholder="SEARCH PRODUCTS OR BRANDS..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-white border-4 border-black py-4 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-black/20 transition-all text-black font-black tracking-widest text-sm uppercase placeholder:text-black/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <button 
                onClick={() => setIsFilterOpen(true)}
                className="md:hidden flex-1 px-6 py-4 border-4 border-black bg-white flex items-center justify-center gap-2 font-black uppercase tracking-widest text-sm text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <Filter size={18} /> Filters
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="flex-1 md:flex-none px-8 py-4 bg-black text-white border-4 border-black flex items-center justify-center gap-2 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
              >
                <ShoppingBag size={18} /> Cart ({cartState.reduce((a, b) => a + b.quantity, 0)})
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row gap-12 bg-[#0a0a0a]">
        
        {/* DESKTOP SIDEBAR */}
        <div className="hidden md:block w-72 shrink-0">
          <div className="sticky top-32">
            <h3 className="font-bebas text-4xl tracking-widest mb-6 text-white">FILTERS</h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={clearAllFilters}
                className={`py-2 px-4 text-xs font-black uppercase tracking-widest transition-all duration-200 border-2 text-left ${
                  !activeSubCategory
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white/50 border-white/20 hover:bg-white/10 hover:text-white hover:border-white/50"
                }`}
                style={{ borderRadius: 0 }}
              >
                All Products
              </button>
              {availableSubCategories.map(sub => (
                <button
                  key={sub}
                  onClick={() => handleSubCategoryClick(sub)}
                  className={`py-2 px-4 text-xs font-black uppercase tracking-widest transition-all duration-200 border-2 text-left ${
                    activeSubCategory === sub
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-white/70 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/30"
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <div className="flex-1">
          <div className="mb-8 flex justify-between items-center text-sm font-black tracking-widest uppercase text-white/50">
            <span>Showing {filteredProducts.length} results</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-32 text-center border-4 border-white/10 bg-white/5 rounded-3xl">
              <p className="text-2xl text-white font-bebas tracking-widest">No products found.</p>
              <button onClick={clearAllFilters} className="mt-6 px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-primary transition-colors">Clear Filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredProducts.map((product, i) => (
                <motion.div 
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i % 6) * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 min-h-[300px]"
                >
                  {/* TOP ROW: badges */}
                  <div className="px-5 pt-5 pb-3 flex items-start justify-between shrink-0">
                    <div>
                      {product.isNew && <span className="bg-[#FF3366] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 inline-block">NEW</span>}
                      {product.isPopular && !product.isNew && <span className="bg-[#FFB800] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 inline-block">HOT</span>}
                    </div>
                  </div>

                  {/* MIDDLE ROW: name (left) + image (right), flex-row, contained */}
                  <div className="flex flex-row flex-1 min-h-0 overflow-hidden">
                    {/* Left: name + brand + category */}
                    <div className="px-5 pb-4 flex flex-col justify-end w-[58%] shrink-0">
                      <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-1">{product.subCategory}</p>
                      <h3 className="font-bebas text-[2.4rem] leading-[0.88] tracking-tight text-black line-clamp-3">{product.name}</h3>
                      <span className="text-[10px] font-black uppercase tracking-widest text-black/40 mt-1">{product.brand}</span>
                      {product.effect && <p className="text-[10px] font-bold uppercase tracking-widest text-black/40 mt-1">{product.effect}</p>}
                    </div>
                    {/* Right: product image — strictly contained */}
                    <div className="relative w-[42%] shrink-0 overflow-hidden">
                      <img
                        src={product.image}
                        alt={`${product.name} – ${product.brand} – Buy CBD in Malta`}
                        width={300}
                        height={300}
                        className={`absolute inset-0 w-full h-full object-cover ${i % 2 === 0 ? 'animate-float-product' : 'animate-float-product-alt'}`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-white from-0% to-transparent to-35% pointer-events-none" />
                    </div>
                  </div>

                  {/* BOTTOM ROW: CTA + price */}
                  <div className="px-5 pb-5 flex items-center justify-between shrink-0 mt-2">
                    <button
                      onClick={(e) => { e.preventDefault(); addToCart(product); }}
                      className="bg-black text-white text-[11px] font-black uppercase tracking-widest px-5 py-3 hover:bg-[#22c55e] hover:text-black transition-colors"
                    >
                      + ADD TO CART
                    </button>
                    <span className="font-bebas text-3xl text-black">€{product.price.toFixed(2)}</span>
                  </div>

                  {/* Category accent bar */}
                  <div className="h-[5px] w-full shrink-0" style={{ backgroundColor: getCategoryColor(product.category) }} />
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
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white border-l-4 border-black z-50 flex flex-col shadow-2xl"
            >
              <div className="p-6 border-b-4 border-black flex justify-between items-center bg-[#FFB800]">
                <h2 className="font-bebas text-5xl tracking-widest text-black leading-none">YOUR CART</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 text-black hover:bg-black hover:text-white transition-colors rounded-full">
                  <X size={28} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
                {cartState.length === 0 ? (
                  <div className="text-center text-black/30 mt-32">
                    <ShoppingBag size={64} className="mx-auto mb-6 opacity-20" />
                    <p className="font-black uppercase tracking-widest text-lg">Your cart is empty.</p>
                  </div>
                ) : (
                  cartState.map(item => (
                    <div key={item.product.id} className="flex gap-4 bg-[#f8f8f8] p-3 border-2 border-black rounded-xl">
                      <img src={item.product.image} className="w-24 h-24 object-cover rounded-lg border-2 border-black" alt={item.product.name} />
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black/50">{item.product.brand}</p>
                          <h4 className="font-bold text-sm text-black line-clamp-2 mt-1 uppercase">{item.product.name}</h4>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-bebas text-3xl text-black">€{item.product.price.toFixed(2)}</span>
                          <div className="flex items-center gap-4 border-2 border-black px-3 py-1 bg-white">
                            <span className="text-[10px] font-black tracking-widest text-black">QTY {item.quantity}</span>
                            <button onClick={() => removeFromCart(item.product.id)} className="text-black/50 hover:text-red-500 transition-colors">
                              <X size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 border-t-4 border-black bg-[#f8f8f8]">
                <div className="flex justify-between items-end mb-6">
                  <span className="font-black uppercase tracking-widest text-sm text-black/50">SUBTOTAL</span>
                  <span className="font-bebas text-5xl text-black leading-none">€{getCartTotal().toFixed(2)}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  disabled={cartState.length === 0}
                  className="w-full py-5 bg-[#22C55E] text-black border-4 border-black font-black uppercase tracking-widest text-lg hover:bg-[#4ade80] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1"
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
              className="fixed inset-0 bg-black/80 z-50 md:hidden backdrop-blur-sm"
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 w-full h-[85vh] bg-white border-t-4 border-black z-50 flex flex-col md:hidden rounded-t-3xl overflow-hidden"
            >
              <div className="p-6 border-b-4 border-black flex justify-between items-center bg-[#FFB800]">
                <h2 className="font-bebas text-5xl tracking-widest text-black leading-none">FILTERS</h2>
                <button onClick={() => setIsFilterOpen(false)} className="text-black bg-white/20 p-2 rounded-full"><X size={28} /></button>
              </div>
              <div className="p-6 overflow-y-auto flex-1 bg-white">
                <h3 className="text-sm font-black uppercase tracking-widest text-black/50 mb-4">CATEGORIES</h3>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => { clearAllFilters(); setIsFilterOpen(false); }}
                    className={`py-3 px-5 text-sm font-black uppercase tracking-widest transition-all duration-200 border-2 text-left ${
                      !activeSubCategory
                        ? "bg-black text-white border-black"
                        : "bg-gray-100 text-black/50 border-gray-200"
                    }`}
                  >
                    All Products
                  </button>
                  {availableSubCategories.map(sub => (
                    <button
                      key={sub}
                      onClick={() => { handleSubCategoryClick(sub); setIsFilterOpen(false); }}
                      className={`py-3 px-5 text-sm font-black uppercase tracking-widest transition-all duration-200 border-2 text-left ${
                        activeSubCategory === sub
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-gray-200"
                      }`}
                    >
                      {sub}
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
