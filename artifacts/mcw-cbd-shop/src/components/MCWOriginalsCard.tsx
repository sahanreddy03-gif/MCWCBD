import { useRef, useState, useEffect, useCallback } from "react";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/data";
import logoSrc from "@assets/Untitled_design_(42)_1773502384512.png";

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
  selectedVariant?: number;
  onVariantChange?: (idx: number) => void;
}

export default function MCWOriginalsCard({ product, onAddToCart, selectedVariant = 0, onVariantChange }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shimmer, setShimmer] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [selectedFlavour, setSelectedFlavour] = useState(0);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const applyTilt = useCallback((clientX: number, clientY: number) => {
    if (!cardRef.current) return;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (clientX - cx) / (rect.width / 2);
      const dy = (clientY - cy) / (rect.height / 2);
      setTilt({ x: -dy * 10, y: dx * 10 });
      setShimmer({
        x: ((clientX - rect.left) / rect.width) * 100,
        y: ((clientY - rect.top) / rect.height) * 100,
      });
    });
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      applyTilt(e.clientX, e.clientY);
    },
    [applyTilt]
  );

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") {
      setIsTouching(true);
      setIsHovered(true);
    }
  }, []);

  const handlePointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") {
      cancelAnimationFrame(rafRef.current);
      setTilt({ x: 0, y: 0 });
      setIsTouching(false);
      setIsHovered(false);
    }
  }, []);

  const handlePointerEnter = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "touch") setIsHovered(true);
  }, []);

  const handlePointerLeave = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    cancelAnimationFrame(rafRef.current);
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
    if (e.pointerType === "touch") setIsTouching(false);
  }, []);

  const floatActive = isMobile && !isTouching;

  const price = product.variants ? product.variants[selectedVariant]?.price ?? product.price : product.price;

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl flex flex-col min-h-[340px] cursor-pointer select-none ${floatActive ? "animate-mcw-float" : ""}`}
      style={{
        background: "linear-gradient(135deg, #0d0d0d 0%, #1a1100 40%, #0f0a00 70%, #0d0d0d 100%)",
        border: "1px solid rgba(212,175,55,0.35)",
        transform: floatActive
          ? undefined
          : `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${isHovered ? "-6px" : "0px"})`,
        willChange: "transform",
        transition: floatActive
          ? undefined
          : isHovered
          ? "transform 0.06s linear, box-shadow 0.15s ease"
          : "transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease",
        boxShadow: isHovered
          ? "0 24px 60px rgba(212,175,55,0.22), 0 0 0 1px rgba(212,175,55,0.5), inset 0 0 40px rgba(212,175,55,0.06)"
          : "0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,175,55,0.15)",
      }}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {/* Faded category-matched background image */}
      <img
        src={product.image}
        alt=""
        aria-hidden
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.13, filter: "saturate(0.5) blur(2px)" }}
        loading="lazy"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      {/* Shimmer — follows pointer (mouse + touch) */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${shimmer.x}% ${shimmer.y}%, rgba(255,215,0,0.16) 0%, rgba(212,175,55,0.07) 40%, transparent 65%)`
            : "none",
          transition: "background 0.07s linear",
        }}
      />

      {/* Inner glow ring on hover/touch */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: isHovered ? "inset 0 0 35px rgba(212,175,55,0.1)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      />

      {/* Smoke / mist rising effect — always visible, behind content */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[3]" aria-hidden>
        <div className="mcw-smoke mcw-smoke-a" />
        <div className="mcw-smoke mcw-smoke-b" />
        <div className="mcw-smoke mcw-smoke-c" />
        <div className="mcw-smoke mcw-smoke-d" />
      </div>

      {/* Gold diagonal ribbon — top-left corner */}
      <div
        className="absolute pointer-events-none z-10"
        style={{ top: "18px", left: "-36px" }}
      >
        <div
          className="text-black text-[7px] font-black tracking-widest uppercase text-center"
          style={{
            background: "linear-gradient(90deg, #B8860B, #FFD700, #DAA520, #FFD700, #B8860B)",
            transform: "rotate(-45deg)",
            padding: "4px 60px",
            minWidth: "130px",
            letterSpacing: "0.14em",
          }}
        >
          MCW ORIGINALS
        </div>
      </div>

      {/* NEW badge (top right) */}
      {product.isNew && (
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="bg-[#FF3366] text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 block">
            NEW
          </span>
        </div>
      )}

      {/* MCW Logo — centred, floating feel */}
      <div className="flex-1 flex items-center justify-center py-6 px-4 relative z-10">
        <img
          src={logoSrc}
          alt="MCW"
          draggable={false}
          className="w-28 h-28 object-contain select-none"
          style={{
            filter: isHovered
              ? "drop-shadow(0 0 20px rgba(212,175,55,0.65)) brightness(1.12)"
              : "drop-shadow(0 2px 10px rgba(0,0,0,0.6)) brightness(1)",
            transition: "filter 0.3s ease, transform 0.3s ease",
            transform: isHovered ? "scale(1.07)" : "scale(1)",
          }}
        />
      </div>

      {/* Product name + brand */}
      <div className="relative z-10 px-4 pb-2 text-center">
        <h3 className="font-bebas text-xl text-white leading-tight tracking-wide line-clamp-2">
          {product.name}
        </h3>
        <p className="text-[9px] text-yellow-400/70 font-bold uppercase tracking-widest mt-0.5">
          {product.brand}
        </p>
      </div>

      {/* Gram / size variant selector */}
      {product.variants && (
        <div className="relative z-10 px-4 pb-2">
          <div className="flex gap-1.5 flex-wrap justify-center">
            {product.variants.map((v, vi) => (
              <button
                key={v.label}
                onClick={(e) => {
                  e.stopPropagation();
                  onVariantChange?.(vi);
                }}
                className="text-[9px] font-bold px-2 py-1 border transition-all"
                style={{
                  background: selectedVariant === vi ? "#FFD700" : "transparent",
                  color: selectedVariant === vi ? "#000" : "rgba(255,215,0,0.65)",
                  borderColor:
                    selectedVariant === vi
                      ? "#FFD700"
                      : "rgba(212,175,55,0.35)",
                }}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Flavour selector (vapes + products with flavourOptions) */}
      {product.flavourOptions && product.flavourOptions.length > 0 && (
        <div className="relative z-10 px-4 pb-2">
          <p className="text-[8px] text-yellow-400/50 uppercase tracking-widest text-center mb-1">Flavour</p>
          <div className="flex gap-1.5 flex-wrap justify-center">
            {product.flavourOptions.map((f, fi) => (
              <button
                key={f}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedFlavour(fi);
                }}
                className="text-[9px] font-bold px-2 py-1 border transition-all"
                style={{
                  background: selectedFlavour === fi ? "#FFD700" : "transparent",
                  color: selectedFlavour === fi ? "#000" : "rgba(255,215,0,0.65)",
                  borderColor:
                    selectedFlavour === fi
                      ? "#FFD700"
                      : "rgba(212,175,55,0.35)",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Price + Add to Cart */}
      <div className="relative z-10 px-4 pb-3 flex items-center justify-between">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="w-10 h-10 flex items-center justify-center font-black transition-all"
          style={{
            background: "linear-gradient(135deg, #B8860B, #FFD700)",
            color: "#000",
          }}
          aria-label="Add to cart"
        >
          <ShoppingBag size={15} />
        </button>
        <span className="font-bebas text-4xl text-white leading-none">
          €{price.toFixed(2)}
        </span>
      </div>

      {/* Compliance strip */}
      <div
        className="relative z-10 py-1.5 text-center shrink-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(20,60,20,0.9), rgba(30,80,30,0.95), rgba(20,60,20,0.9))",
          borderTop: "1px solid rgba(34,197,94,0.25)",
        }}
      >
        <span className="text-[7.5px] font-black uppercase tracking-widest text-green-400">
          Lab Tested · &lt;0.2% THC · Malta Legal
        </span>
      </div>
    </div>
  );
}
