import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'shfh_cart';

function loadInitialCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadInitialCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // localStorage may be unavailable (private browsing, quota) — fail silently
    }
  }, [items]);

  function addToCart(product, quantity = 1) {
    setItems((current) => {
      const existing = current.find((i) => i.id === product.id);
      if (existing) {
        return current.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...current, { ...product, quantity }];
    });
  }

  function removeFromCart(productId) {
    setItems((current) => current.filter((i) => i.id !== productId));
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((current) =>
      current.map((i) => (i.id === productId ? { ...i, quantity } : i))
    );
  }

  function clearCart() {
    setItems([]);
  }

  function isInCart(productId) {
    return items.some((i) => i.id === productId);
  }

  const cartCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const cartTotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  );

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
    cartCount,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}