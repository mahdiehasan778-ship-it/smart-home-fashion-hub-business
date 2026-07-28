import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import CircularCategoryGrid from './components/CircularCategoryGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Top Bar with Announcement & Quick Links */}
      <TopBar />

      {/* Main Header with Logo, Search, Profile, Wishlist, and Cart */}
      <Header />

      {/* Navigation Bar with Category Mega Menu */}
      <Navbar />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Hero Section Carousel */}
        <HeroCarousel />

        {/* Circular Category Grid Section */}
        <CircularCategoryGrid />
      </main>
    </div>
  );
}

export default App;