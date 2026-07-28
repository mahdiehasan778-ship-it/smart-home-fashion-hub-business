import { Heart, Home, Menu, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchBar from './SearchBar';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Header({ onMobileMenuToggle }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  function handleMobileToggle() {
    const next = !isMobileMenuOpen;
    setIsMobileMenuOpen(next);
    onMobileMenuToggle?.(next);
  }

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={handleMobileToggle}
          className="md:hidden p-2 -ml-2 text-navy-700"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Brand logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-navy-800 text-white">
            <Home size={20} />
          </span>
          <span className="leading-tight">
            <span className="block font-display font-bold text-lg text-navy-800 tracking-tight">
              Smart Home
            </span>
            <span className="block text-[11px] font-medium text-accent-500 tracking-wide -mt-1">
              &amp; FASHION HUB
            </span>
          </span>
        </Link>

        {/* Search bar (desktop only — see SearchBar.jsx) */}
        <SearchBar />

        {/* Right-hand icons */}
        <div className="flex items-center gap-1 md:gap-2">
          <Link
            to="/account"
            className="hidden sm:flex flex-col items-center px-2 py-1 text-navy-700 hover:text-accent-500 transition-colors"
          >
            <User size={22} />
            <span className="text-[11px] mt-0.5">Account</span>
          </Link>

          <Link
            to="/wishlist"
            className="relative flex flex-col items-center px-2 py-1 text-navy-700 hover:text-accent-500 transition-colors"
          >
            <span className="relative">
              <Heart size={22} />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-accent-500 text-white text-[10px] flex items-center justify-center font-semibold">
                  {wishlistCount}
                </span>
              )}
            </span>
            <span className="hidden sm:block text-[11px] mt-0.5">Wishlist</span>
          </Link>

          <Link
            to="/cart"
            className="relative flex flex-col items-center px-2 py-1 text-navy-700 hover:text-accent-500 transition-colors"
          >
            <span className="relative">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-navy-800 text-white text-[10px] flex items-center justify-center font-semibold">
                  {cartCount}
                </span>
              )}
            </span>
            <span className="hidden sm:block text-[11px] mt-0.5">Cart</span>
          </Link>
        </div>
      </div>

      {/* Mobile search — shown below the row on small screens */}
      <div className="md:hidden px-4 pb-3">
        <SearchBar />
      </div>
    </header>
  );
}