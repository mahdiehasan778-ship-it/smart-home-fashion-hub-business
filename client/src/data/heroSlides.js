// src/data/heroSlides.js
// Mock content for the hero carousel. Swap `image` URLs for real product/lifestyle
// photography when available — keep the 4:5-ish crop so the glow-orb frame lines up.

export const heroSlides = [
  {
    id: "slide-smart-home",
    eyebrow: "SMART HOME EDIT",
    heading: "Upgrade Your Home.",
    headingAccent: "Elevate Your Style.",
    copy:
      "Hand-picked smart devices and design-forward essentials, reviewed and ranked so you don't have to guess.",
    features: ["Free shipping on top picks", "Verified 4★+ only", "Updated daily"],
    primaryCta: { label: "SHOP NOW", href: "/shop" },
    secondaryCta: { label: "EXPLORE DEALS", href: "/deals" },
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Modern living room with smart lighting and minimal furniture",
    theme: "cyan",
  },
  {
    id: "slide-fashion",
    eyebrow: "STYLE PICKS",
    heading: "Curated Fashion.",
    headingAccent: "Zero Guesswork.",
    copy:
      "From everyday staples to statement pieces — our editors track the best prices across every major retailer.",
    features: ["Price-drop alerts", "Editor rated", "New drops weekly"],
    primaryCta: { label: "SHOP NOW", href: "/shop?cat=fashion" },
    secondaryCta: { label: "EXPLORE DEALS", href: "/deals" },
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Flat lay of curated fashion accessories and shoes",
    theme: "gold",
  },
  {
    id: "slide-kitchen",
    eyebrow: "KITCHEN & DINING",
    heading: "Cook Smarter.",
    headingAccent: "Not Harder.",
    copy:
      "The countertop tech and cookware our readers actually keep using six months later.",
    features: ["Real owner reviews", "Deal tracking", "Warranty notes included"],
    primaryCta: { label: "SHOP NOW", href: "/shop?cat=kitchen" },
    secondaryCta: { label: "EXPLORE DEALS", href: "/deals" },
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Modern kitchen counter with small appliances",
    theme: "cyan",
  },
];