import { useState } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import CircularCategoryGrid from './components/CircularCategoryGrid';

// ⬇️ STEP 5/6 INTEGRATION POINT ⬇️
// This sandbox only has Steps 1-4 on disk. If your Step 5 (Deal of the Day /
// Top Picks / Sidebar) and Step 6 (Affiliate Process / Why Choose Us /
// Partners / Footer) components live elsewhere, import them here — e.g.:
//
//   import MainContent from './components/MainContent';
//   import AffiliateProcess from './components/AffiliateProcess';
//   import WhyChooseUs from './components/WhyChooseUs';
//   import PartnerLogos from './components/PartnerLogos';
//   import Footer from './components/Footer';
//
// Then render them below in place of the placeholder <main> block.
// Product cards / "Add to Cart" & wishlist-heart buttons in those components
// should call the hooks now available app-wide:
//
//   import { useCart } from '../context/CartContext';
//   import { useWishlist } from '../context/WishlistContext';
//   const { addToCart, isInCart } = useCart();
//   const { toggleWishlist, isInWishlist } = useWishlist();

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Header onMobileMenuToggle={setIsMobileMenuOpen} />
      <Navbar isMobileMenuOpen={isMobileMenuOpen} />

      <HeroCarousel />
      <CircularCategoryGrid />

      {/* Replace this block with <MainContent />, <AffiliateProcess />,
          <WhyChooseUs />, <PartnerLogos />, and <Footer /> once wired in */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <p className="text-center text-navy-400 text-sm">
          Cart &amp; Wishlist context are now live (see Header icon counts).
          Drop your Step 5/6 components in above this line.
        </p>
      </main>
    </div>
  );
}