import type { Product } from "./data";

export type CartItem = { product: Product; quantity: number };

let cartItems: CartItem[] = [];
let cartListeners: (() => void)[] = [];

export const subscribeCart = (l: () => void) => {
  cartListeners.push(l);
  return () => { cartListeners = cartListeners.filter(x => x !== l); };
};

export const addToCart = (product: Product) => {
  const ex = cartItems.find(i => i.product.id === product.id);
  if (ex) ex.quantity++;
  else cartItems.push({ product, quantity: 1 });
  cartListeners.forEach(l => l());
};

export const removeFromCart = (id: string) => {
  cartItems = cartItems.filter(i => i.product.id !== id);
  cartListeners.forEach(l => l());
};

export const decrementCart = (id: string) => {
  const ex = cartItems.find(i => i.product.id === id);
  if (!ex) return;
  if (ex.quantity <= 1) cartItems = cartItems.filter(i => i.product.id !== id);
  else ex.quantity--;
  cartListeners.forEach(l => l());
};

export const clearCart = () => {
  cartItems = [];
  cartListeners.forEach(l => l());
};

export const getCartItems = () => cartItems;
export const getCartTotal = () => cartItems.reduce((acc, i) => acc + i.product.price * i.quantity, 0);
export const getCartCount = () => cartItems.reduce((acc, i) => acc + i.quantity, 0);
