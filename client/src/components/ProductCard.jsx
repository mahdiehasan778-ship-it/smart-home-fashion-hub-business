// src/components/ProductCard.jsx
import { Star, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  const hasDiscount = product.originalPrice > product.price;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md p-4 flex flex-col group"
    >
      {product.badge && (
        <span className="absolute top-3 left-3 bg-blue-900 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full z-10">
          {product.badge}
        </span>
      )}

      <button
        aria-label="Add to wishlist"
        className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Heart size={14} className="text-gray-600" />
      </button>

      <div className="bg-gray-50 rounded-lg p-4 flex justify-center mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="h-28 object-contain"
          loading="lazy"
        />
      </div>

      <h4 className="text-sm font-medium text-gray-800 leading-snug line-clamp-2 min-h-[2.5rem]">
        {product.name}
      </h4>

      <div className="flex items-center gap-1 mt-1.5">
        <div className="flex text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.round(product.rating) ? "fill-yellow-400" : "fill-gray-200 text-gray-200"}
            />
          ))}
        </div>
        <span className="text-[11px] text-gray-500">
          ({product.reviewCount.toLocaleString()})
        </span>
      </div>

      <div className="flex items-baseline gap-2 mt-2">
        <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
        {hasDiscount && (
          <span className="text-xs text-gray-400 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
      </div>

      {product.isPrime && (
        <div className="flex items-center gap-1 mt-1.5">
          <span className="bg-sky-100 text-sky-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
            Prime
          </span>
          <span className="text-[10px] text-gray-500">Fast delivery</span>
        </div>
      )}

      <button className="mt-3 w-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-colors text-xs font-semibold py-2 rounded-lg">
        VIEW PRODUCT
      </button>
    </motion.div>
  );
}