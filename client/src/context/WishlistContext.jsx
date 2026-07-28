import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const WishlistContext = createContext(null);
const STORAGE_KEY = 'shfh_wishlist';

function loadInitialWishlist() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(loadInitialWishlist);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // localStorage may be unavailable — fail silently
    }
  }, [items]);

  function isInWishlist(productId) {
    return items.some((i) => i.id === productId);
  }

  function toggleWishlist(product) {
    setItems((current) =>
      current.some((i) => i.id === product.id)
        ? current.filter((i) => i.id !== product.id)
        : [...current, product]
    );
  }

  function removeFromWishlist(productId) {
    setItems((current) => current.filter((i) => i.id !== productId));
  }

  const wishlistCount = useMemo(() => items.length, [items]);

  const value = {
    items,
    isInWishlist,
    toggleWishlist,
    removeFromWishlist,
    wishlistCount
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}