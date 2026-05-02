import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Filter, X, Search } from "lucide-react";
import { Link, useSearch } from "wouter";
import { SEO } from "@/components/SEO";
import { PRODUCTS, type Category, type Product } from "@/lib/data";

const PRIMARY_CATEGORIES: Category[] = [
  "Flowers", "Gummies", "Crystal", "Hash", "Vapes", "E-Liquids", "Vaporisers",
];

const CATEGORY_COLORS: Record<Category, string> = {
  Flowers:     "#4ade80",
  Gummies:     "#f472b6",
  Crystal:     "#a78bfa",
  Hash:        "#d97706",
  Vapes:       "#fb923c",
  "E-Liquids": "#22d3ee",
  Vaporisers:  "#94a3b8",
};

const CATEGORY_ICONS: Record<Category, string> = {
  Flowers:     "🌿",
  Gummies:     "🍬",
  Crystal:     "💎",
  Hash:        "🧱",
  Vapes:       "💨",
  "E-Liquids": "🔋",
  Vaporisers:  "🔥",
};

/* ── Cart store ─────────────────────────────────────── */
let cartItems: { product: Product; quantity: number }[] = [];
let cartListeners: (() => void)[] = [];
const subscribeCart = (l: () => void) => {
  cartListeners.push(l);
  return () => { cartListeners = cartListeners.filter(x => x !== l); };
};
const addToCart = (product: Product) => {
  const ex = cartItems.find(i => i.product.id === product.id);
  if (ex) ex.quantity++;
  else cartItems.push({ product, quantity: 1 });
  cartListeners.forEach(l => l());
};
const removeFromCart = (id: string) => {
  cartItems = cartItems.filter(i => i.product.id !== id);
  cartListeners.forEach(l => l());
};
const decrementCart = (id: string) => {
  const ex = cartItems.find(i => i.product.id === id);
  if (!ex) return;
  if (ex.quantity <= 1) cartItems = cartItems.filter(i => i.product.id !== id);
  else ex.quantity--;
  cartListeners.forEach(l => l());
};
const getCartTotal = () => cartItems.reduce((acc, i) => acc + i.product.price * i.quantity, 0);

/* ── Flip Card ──────────────────────────────────────── */
function FlipCard({ product }: { product: Product }) {
  const backImg = product.imageBack ?? product.image;
  const color = CATEGORY_COLORS[product.category];

  return (
    <div className="group [perspective:1000px] h-[340px] cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* ── FRONT ── */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-black overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          {/* badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="bg-[#f472b6] text-black text-[9px] font-black uppercase tracking-widest px-2.5 py-1">NEW</span>
            )}
            {product.isPopular && !product.isNew && (
              <span className="bg-[#FFB800] text-black text-[9px] font-black uppercase tracking-widest px-2.5 py-1">HOT</span>
            )}
          </div>
          {/* bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1" style={{ color }}>
              {product.brand}
            </p>
            <h3 className="font-bebas text-2xl leading-tight text-white line-clamp-2">{product.name}</h3>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-[2px] w-6 flex-none" style={{ backgroundColor: color }} />
              <span className="text-white/40 text-[9px] font-black uppercase tracking-widest">Hover to see more</span>
            </div>
          </div>
        </div>

        {/* ── BACK ── */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-black overflow-hidden">
          <img
            src={backImg}
            alt={`${product.name} – detail`}
            className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
            loading="lazy"
          />
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/55" />
          {/* content */}
          <div className="absolute inset-0 flex flex-col justify-between p-5">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.2em] mb-1" style={{ color }}>
                {product.category} · {product.brand}
              </p>
              <h3 className="font-bebas text-[1.6rem] leading-tight text-white">{product.name}</h3>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Price</p>
              <p className="font-bebas text-6xl text-white leading-none mb-4">€{product.price.toFixed(2)}</p>
              <button
                onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                className="w-full py-3.5 font-black uppercase tracking-widest text-sm text-black transition-all hover:brightness-110 active:scale-95"
                style={{ backgroundColor: color }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ── Main Page ──────────────────────────────────────── */
export default function Shop() {
  const searchString = useSearch();
  const urlParams = new URLSearchParams(searchString);
  const urlCategory = urlParams.get("category");

  const activeCategory: Category | null =
    PRIMARY_CATEGORIES.includes(urlCategory as Category) ? (urlCategory as Category) : null;

  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartState, setCartState] = useState(cartItems);

  useState(() => subscribeCart(() => setCartState([...cartItems])));

  useEffect(() => {
    setActiveSubCategory(null);
  }, [activeCategory]);

  useEffect(() => {
    const t = setTimeout(() => setSearch(searchInput), 300);
    return () => clearTimeout(t);
  }, [searchInput]);

  const availableSubCategories = useMemo(() => {
    const source = activeCategory
      ? PRODUCTS.filter(p => p.category === activeCategory)
      : PRODUCTS;
    return Array.from(new Set(source.map(p => p.subCategory))).sort();
  }, [activeCategory]);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = !activeCategory || p.category === activeCategory;
      const matchSub = !activeSubCategory || p.subCategory === activeSubCategory;
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSub && matchSearch;
    });
  }, [activeCategory, activeSubCategory, search]);

  const DELIVERY_FEE = 3.50;
  const FREE_THRESHOLD = 50;
  const deliveryFee = () => (getCartTotal() >= FREE_THRESHOLD ? 0 : DELIVERY_FEE);
  const orderTotal = () => getCartTotal() + deliveryFee();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    const sub = getCartTotal();
    const del = deliveryFee();
    const tot = orderTotal();
    let text = "Hello MCW! 👋 I would like to place an order:\n\n";
    cartItems.forEach(item => {
      text += `• ${item.quantity}x ${item.product.name} — €${item.product.price.toFixed(2)}\n`;
    });
    text += `\nSubtotal: €${sub.toFixed(2)}`;
    text += `\nDelivery: ${del === 0 ? "FREE 🎉" : `€${del.toFixed(2)}`}`;
    text += `\n*TOTAL: €${tot.toFixed(2)}*`;
    text += `\n\nPayment options:\n1. Revolut link (preferred)\n2. Cash on delivery\n\nPlease confirm my order and send payment details. Thank you!`;
    window.open(`https://wa.me/35699536248?text=${encodeURIComponent(text)}`, "_blank");
  };

  const clearFilters = () => {
    setActiveSubCategory(null);
    setSearchInput("");
    setSearch("");
  };

  const activeColor = activeCategory ? CATEGORY_COLORS[activeCategory] : "#FFB800";

  return (
    <>
      <SEO
        title={activeCategory ? `${activeCategory} Malta — MCW CBD Shop` : "Shop the Collection — MCW CBD Malta"}
        description="Malta's #1 Hemp & CBD Destination. Real products, real photos. Same-day delivery across Malta."
      />

      {/* ── SHOP HEADER ── */}
      <div className="pt-32 pb-10 bg-[#0a0a0a] border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-7xl md:text-9xl font-bebas tracking-tight text-white mb-2 leading-none">
            THE MCW COLLECTION
          </h1>
          <p className="text-white/30 font-black tracking-widest uppercase text-sm mb-8">
            65 Products · 7 Categories · Malta's Best
          </p>

          <div className="flex flex-col md:flex-row justify-between gap-4 items-end">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input
                type="text"
                placeholder="SEARCH PRODUCTS OR BRANDS..."
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                className="w-full bg-white/5 border border-white/10 py-3.5 pl-11 pr-4 focus:outline-none focus:border-white/30 transition-all text-white font-black tracking-widest text-xs uppercase placeholder:text-white/20"
              />
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="md:hidden flex-1 px-5 py-3.5 border border-white/20 bg-white/5 flex items-center justify-center gap-2 font-black uppercase tracking-widest text-xs text-white"
              >
                <Filter size={15} /> Filters
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="flex-1 md:flex-none px-7 py-3.5 bg-white text-black flex items-center justify-center gap-2 font-black uppercase tracking-widest text-xs hover:bg-[#FFB800] transition-colors"
              >
                <ShoppingBag size={15} /> Cart ({cartState.reduce((a, b) => a + b.quantity, 0)})
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── CATEGORY TABS ── */}
      <div className="bg-[#0d0d0d] border-b border-white/10 overflow-x-auto sticky top-[72px] z-30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-3 whitespace-nowrap">
            <Link
              href="/shop"
              className={`px-5 py-2 text-[11px] font-black uppercase tracking-widest border transition-all shrink-0 ${
                !activeCategory
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/40 border-white/10 hover:text-white hover:border-white/30"
              }`}
            >
              ALL
            </Link>
            {PRIMARY_CATEGORIES.map(cat => {
              const isActive = activeCategory === cat;
              const color = CATEGORY_COLORS[cat];
              return (
                <Link
                  key={cat}
                  href={`/shop?category=${encodeURIComponent(cat)}`}
                  className="px-5 py-2 text-[11px] font-black uppercase tracking-widest border transition-all shrink-0"
                  style={
                    isActive
                      ? { background: color, color: "#000", borderColor: color }
                      : { background: "transparent", color: "rgba(255,255,255,0.4)", borderColor: "rgba(255,255,255,0.08)" }
                  }
                >
                  {CATEGORY_ICONS[cat]} {cat}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── FREE DELIVERY STRIP ── */}
      <div className="bg-[#111] border-b border-white/5 py-2.5 px-4">
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-white/50">🚚 Free delivery over €50</span>
          <span className="hidden sm:inline text-white/20 font-black">·</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/50">📍 Same-day across Malta</span>
          <span className="hidden sm:inline text-white/20 font-black">·</span>
          <span className="text-[10px] font-black uppercase tracking-widest text-white/50">🕙 Open daily until 11:30pm</span>
        </div>
      </div>

      {/* ── DELIVERY PROGRESS ── */}
      <div className="bg-[#0d0d0d] border-b border-white/5 px-4 py-2.5">
        <div className="max-w-[1400px] mx-auto flex items-center gap-4">
          <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${Math.min(100, (getCartTotal() / FREE_THRESHOLD) * 100)}%`,
                background: getCartTotal() >= FREE_THRESHOLD ? "#4ade80" : activeColor,
              }}
            />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest shrink-0" style={{ color: getCartTotal() >= FREE_THRESHOLD ? "#4ade80" : "rgba(255,255,255,0.3)" }}>
            {getCartTotal() >= FREE_THRESHOLD
              ? "🎉 FREE delivery!"
              : cartState.length === 0
                ? `€${FREE_THRESHOLD} = free delivery`
                : `€${(FREE_THRESHOLD - getCartTotal()).toFixed(2)} to free delivery`}
          </span>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="bg-[#0a0a0a] min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-10">

          {/* ── DESKTOP SIDEBAR ── */}
          <div className="hidden md:block w-56 shrink-0">
            <div className="sticky top-36">
              <h3 className="font-bebas text-3xl tracking-widest mb-4 text-white">Filter</h3>
              <div className="flex flex-col gap-1.5">
                <button
                  onClick={clearFilters}
                  className={`py-2 px-3 text-[11px] font-black uppercase tracking-widest transition-all border text-left ${
                    !activeSubCategory
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-white/40 border-white/10 hover:text-white hover:border-white/30"
                  }`}
                >
                  All
                </button>
                {availableSubCategories.map(sub => (
                  <button
                    key={sub}
                    onClick={() => setActiveSubCategory(prev => (prev === sub ? null : sub))}
                    className={`py-2 px-3 text-[11px] font-black uppercase tracking-widest transition-all border text-left ${
                      activeSubCategory === sub
                        ? "text-black border-transparent"
                        : "bg-transparent text-white/40 border-white/10 hover:text-white hover:border-white/30"
                    }`}
                    style={activeSubCategory === sub ? { backgroundColor: activeColor, borderColor: activeColor } : {}}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ── PRODUCT GRID ── */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <span className="text-[11px] font-black tracking-widest uppercase text-white/30">
                Showing {filteredProducts.length} products
              </span>
              {(activeSubCategory || search) && (
                <button onClick={clearFilters} className="text-[11px] font-black tracking-widest uppercase text-white/40 hover:text-white transition-colors underline underline-offset-4">
                  Clear filters
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-32 text-center border border-white/10">
                <p className="text-2xl text-white font-bebas tracking-widest mb-6">No products found.</p>
                <button onClick={clearFilters} className="px-8 py-3.5 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-[#FFB800] transition-colors">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                  <FlipCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── CART SIDEBAR ── */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0d0d0d] border-l border-white/10 z-50 flex flex-col shadow-2xl"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <h2 className="font-bebas text-5xl tracking-widest text-white leading-none">YOUR CART</h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 text-white/50 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cartState.length === 0 ? (
                  <div className="text-center text-white/20 mt-32">
                    <ShoppingBag size={56} className="mx-auto mb-6 opacity-20" />
                    <p className="font-black uppercase tracking-widest">Your cart is empty.</p>
                  </div>
                ) : (
                  cartState.map(item => (
                    <div key={item.product.id} className="flex gap-4 bg-white/5 border border-white/10 p-3">
                      <img src={item.product.image} className="w-20 h-20 object-cover shrink-0" alt={item.product.name} />
                      <div className="flex-1 flex flex-col justify-between py-0.5">
                        <div>
                          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">{item.product.brand}</p>
                          <h4 className="font-bold text-xs text-white line-clamp-2 mt-0.5 uppercase">{item.product.name}</h4>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-bebas text-2xl text-white">€{(item.product.price * item.quantity).toFixed(2)}</span>
                          <div className="flex items-center border border-white/20">
                            <button onClick={() => decrementCart(item.product.id)} className="px-2.5 py-1 text-white/70 hover:text-white hover:bg-white/10 transition-colors font-black text-sm">−</button>
                            <span className="px-2.5 py-1 text-[11px] font-black text-white border-x border-white/20 min-w-[2rem] text-center">{item.quantity}</span>
                            <button onClick={() => addToCart(item.product)} className="px-2.5 py-1 text-white/70 hover:text-white hover:bg-white/10 transition-colors font-black text-sm">+</button>
                          </div>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.product.id)} className="text-white/20 hover:text-red-400 transition-colors self-start mt-1">
                        <X size={14} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 border-t border-white/10">
                {cartState.length > 0 && (
                  <div className="mb-4">
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${Math.min(100, (getCartTotal() / FREE_THRESHOLD) * 100)}%`,
                          background: getCartTotal() >= FREE_THRESHOLD ? "#4ade80" : "#FFB800",
                        }}
                      />
                    </div>
                    {getCartTotal() < FREE_THRESHOLD ? (
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/30 text-center">
                        Add €{(FREE_THRESHOLD - getCartTotal()).toFixed(2)} more for FREE delivery
                      </p>
                    ) : (
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#4ade80] text-center">🎉 Free delivery unlocked!</p>
                    )}
                  </div>
                )}
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-black uppercase tracking-widest text-xs text-white/40">Subtotal</span>
                  <span className="font-bebas text-2xl text-white">€{getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
                  <span className="font-black uppercase tracking-widest text-xs text-white/40">Delivery</span>
                  <span className="font-bebas text-2xl" style={{ color: deliveryFee() === 0 ? "#4ade80" : "white" }}>
                    {deliveryFee() === 0 ? "FREE" : `€${deliveryFee().toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between items-end mb-6">
                  <span className="font-black uppercase tracking-widest text-sm text-white">Total</span>
                  <span className="font-bebas text-5xl text-white">€{orderTotal().toFixed(2)}</span>
                </div>
                <p className="text-[9px] text-white/20 uppercase tracking-wider font-bold text-center mb-4">Pay via Revolut or Cash on Delivery</p>
                <button
                  onClick={handleCheckout}
                  disabled={cartState.length === 0}
                  className="w-full py-4 bg-[#22C55E] text-black font-black uppercase tracking-widest text-sm hover:bg-[#4ade80] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Enquire via WhatsApp
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── MOBILE FILTER DRAWER ── */}
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
              className="fixed bottom-0 left-0 w-full h-[70vh] bg-[#0d0d0d] border-t border-white/10 z-50 flex flex-col md:hidden rounded-t-2xl overflow-hidden"
            >
              <div className="p-5 border-b border-white/10 flex justify-between items-center shrink-0">
                <h3 className="font-bebas text-3xl tracking-widest text-white">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)} className="text-white/50 hover:text-white"><X size={22} /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 space-y-2">
                <button
                  onClick={() => { clearFilters(); setIsFilterOpen(false); }}
                  className={`w-full py-2.5 px-4 text-[11px] font-black uppercase tracking-widest border text-left ${
                    !activeSubCategory ? "bg-white text-black border-white" : "bg-transparent text-white/50 border-white/10"
                  }`}
                >
                  All
                </button>
                {availableSubCategories.map(sub => (
                  <button
                    key={sub}
                    onClick={() => { setActiveSubCategory(prev => prev === sub ? null : sub); setIsFilterOpen(false); }}
                    className={`w-full py-2.5 px-4 text-[11px] font-black uppercase tracking-widest border text-left ${
                      activeSubCategory === sub ? "text-black border-transparent" : "bg-transparent text-white/40 border-white/10"
                    }`}
                    style={activeSubCategory === sub ? { backgroundColor: activeColor, borderColor: activeColor } : {}}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
