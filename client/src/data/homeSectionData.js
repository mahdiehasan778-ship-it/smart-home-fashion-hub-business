// src/data/homeSectionData.js
// Temporary mock data scoped to Step 5 (Main Content Grid).
// This will later be served from the Express/Next API built in Step 2 —
// component props are shaped so swapping mock data for a fetch() is a 1-line change.

export const dealOfTheDay = {
  id: "deal-001",
  name: "COSORI Air Fryer Pro LE 5-Qt",
  image:
    "https://images.unsplash.com/photo-1648146208883-16c1b52d1c50?w=600&q=80",
  originalPrice: 129.99,
  dealPrice: 89.99,
  discountPercent: 31,
  rating: 4.7,
  reviewCount: 18342,
  endsAt: new Date(Date.now() + 1000 * 60 * 60 * 6 + 1000 * 60 * 24).toISOString(), // ~6h24m from now
  affiliateUrl: "#",
  claimedPercent: 68, // "68% claimed" progress bar
};

export const topPicks = [
  {
    id: "prod-101",
    name: "Apple Watch Series 10 (GPS, 45mm)",
    image:
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=500&q=80",
    price: 429.0,
    originalPrice: 479.0,
    rating: 4.8,
    reviewCount: 9241,
    isPrime: true,
    badge: "Best Seller",
  },
  {
    id: "prod-102",
    name: "Bose QuietComfort Ultra Earbuds",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    price: 199.0,
    originalPrice: 249.0,
    rating: 4.6,
    reviewCount: 5310,
    isPrime: true,
    badge: "20% Off",
  },
  {
    id: "prod-103",
    name: "Michael Kors Jet Set Travel Bag",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80",
    price: 168.0,
    originalPrice: 228.0,
    rating: 4.5,
    reviewCount: 2117,
    isPrime: true,
    badge: null,
  },
  {
    id: "prod-104",
    name: "Adidas Ultraboost Light Running Shoes",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
    price: 144.0,
    originalPrice: 190.0,
    rating: 4.7,
    reviewCount: 7684,
    isPrime: true,
    badge: "Trending",
  },
];

export const trendingNow = [
  {
    rank: 1,
    id: "trend-1",
    name: "Ninja Foodi 10-in-1 Pressure Cooker",
    image:
      "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=200&q=80",
    rating: 4.8,
    price: 179.99,
  },
  {
    rank: 2,
    id: "trend-2",
    name: "Levi's 501 Original Fit Jeans",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&q=80",
    rating: 4.6,
    price: 59.5,
  },
  {
    rank: 3,
    id: "trend-3",
    name: "Philips Hue Smart Bulb Starter Kit",
    image:
      "https://images.unsplash.com/photo-1543198126-6e1b5b1b7d8b?w=200&q=80",
    rating: 4.7,
    price: 89.99,
  },
  {
    rank: 4,
    id: "trend-4",
    name: "Fenty Beauty Pro Filt'r Foundation",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&q=80",
    rating: 4.5,
    price: 36.0,
  },
  {
    rank: 5,
    id: "trend-5",
    name: "Coach Signature Canvas Tote",
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=200&q=80",
    rating: 4.4,
    price: 195.0,
  },
];

export const latestBlogPosts = [
  {
    id: "blog-1",
    title: "10 Smart Home Gadgets That Actually Save You Money",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=300&q=80",
    date: "2026-07-21",
    excerpt: "From smart thermostats to leak sensors — here's what pays for itself.",
  },
  {
    id: "blog-2",
    title: "Fall Fashion Capsule Wardrobe: 15 Pieces, 30 Outfits",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&q=80",
    date: "2026-07-18",
    excerpt: "Build a versatile wardrobe without buying a whole new closet.",
  },
  {
    id: "blog-3",
    title: "Air Fryer vs Convection Oven: Which One Do You Need?",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=300&q=80",
    date: "2026-07-14",
    excerpt: "We tested both for two weeks. The results surprised us.",
  },
];