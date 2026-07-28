// src/data/trustSectionData.js
// Mock data for Step 6 (Affiliate Process / Trust Badges / Retailer Brands / Footer).
// Will be folded into the shared API payload in Step 2 — kept static here since
// this content changes rarely (unlike products/deals).

import {
  Search,
  MousePointerClick,
  ShoppingBag,
  ShieldCheck,
  Truck,
  Tag,
  Headphones,
  Award,
  RefreshCw,
} from "lucide-react";

export const affiliateSteps = [
  {
    step: 1,
    icon: Search,
    title: "Browse & Compare",
    description:
      "Explore curated smart home and fashion products handpicked from top retailers.",
  },
  {
    step: 2,
    icon: MousePointerClick,
    title: "Click Through",
    description:
      "Click 'View Deal' or 'Shop Now' to visit the retailer's official site securely.",
  },
  {
    step: 3,
    icon: ShoppingBag,
    title: "Shop With Confidence",
    description:
      "Complete your purchase directly with the retailer — same price, zero extra cost to you.",
  },
];

export const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Trusted Reviews",
    description: "Every product is vetted and rated by our editorial team.",
  },
  {
    icon: Truck,
    title: "Fast Shipping Partners",
    description: "We only link to retailers with reliable, fast delivery.",
  },
  {
    icon: Tag,
    title: "Best Price Guarantee",
    description: "We track deals daily so you always see the lowest price.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Have a question? Our team is here around the clock.",
  },
  {
    icon: Award,
    title: "Curated Quality",
    description: "Only top-rated, high-demand products make our list.",
  },
  {
    icon: RefreshCw,
    title: "Always Updated",
    description: "Prices and deals refresh continuously, never stale.",
  },
];

export const retailerPartners = [
  { id: "amazon", name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { id: "walmart", name: "Walmart", logo: "https://logo.clearbit.com/walmart.com" },
  { id: "target", name: "Target", logo: "https://logo.clearbit.com/target.com" },
  { id: "bestbuy", name: "Best Buy", logo: "https://logo.clearbit.com/bestbuy.com" },
  { id: "ebay", name: "eBay", logo: "https://logo.clearbit.com/ebay.com" },
  { id: "homedepot", name: "Home Depot", logo: "https://logo.clearbit.com/homedepot.com" },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Smart Home", href: "/category/smart-home" },
    { label: "Fashion", href: "/category/fashion" },
    { label: "Today's Deals", href: "/deals" },
    { label: "Blog", href: "/blog" },
  ],
  customerService: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faqs" },
    { label: "Shipping Info", href: "/shipping-info" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  socials: [
    { id: "facebook", href: "https://facebook.com" },
    { id: "instagram", href: "https://instagram.com" },
    { id: "twitter", href: "https://twitter.com" },
    { id: "youtube", href: "https://youtube.com" },
  ],
  contact: {
    email: "support@smarthomefashionhub.com",
    phone: "+1 (800) 555-0192",
    address: "123 Commerce St, Suite 400, Austin, TX",
  },
};