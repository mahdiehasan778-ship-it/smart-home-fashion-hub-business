// src/components/DealOfTheDay.jsx
import { Star, Zap, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useCountdown, pad } from "../hooks/useCountdown";

export default function DealOfTheDay({ deal }) {
  const { hours, minutes, seconds, isExpired } = useCountdown(deal.endsAt);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full"
    >
      {/* Header strip */}
      <div className="flex items-center justify-between bg-blue-900 text-white px-4 py-2.5">
        <div className="flex items-center gap-1.5 font-semibold text-sm">
          <Zap size={16} className="text-yellow-400 fill-yellow-400" />
          Deal of the Day
        </div>
        <span className="bg-red-500 text-xs font-bold px-2 py-0.5 rounded-full">
          {deal.discountPercent}% OFF
        </span>
      </div>

      {/* Product image */}
      <div className="relative bg-gray-50 p-6 flex justify-center">
        <img
          src={deal.image}
          alt={deal.name}
          className="h-40 object-contain"
          loading="lazy"
        />
      </div>

      <div className="px-5 pb-5 flex flex-col flex-1">
        <h3 className="font-semibold text-gray-800 text-base leading-snug line-clamp-2">
          {deal.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-1.5">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.round(deal.rating) ? "fill-yellow-400" : "fill-gray-200 text-gray-200"}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            ({deal.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-2xl font-bold text-blue-900">
            ${deal.dealPrice.toFixed(2)}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ${deal.originalPrice.toFixed(2)}
          </span>
        </div>

        {/* Countdown */}
        <div className="mt-4">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5">
            <Clock size={13} />
            {isExpired ? "Deal ended" : "Deal ends in:"}
          </div>
          {!isExpired && (
            <div className="flex gap-2">
              {[
                { label: "HRS", value: hours },
                { label: "MIN", value: minutes },
                { label: "SEC", value: seconds },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="bg-gray-900 text-white rounded-lg px-2.5 py-1.5 text-center min-w-[52px]"
                >
                  <div className="font-bold text-sm tabular-nums">{pad(unit.value)}</div>
                  <div className="text-[9px] text-gray-400 tracking-wide">{unit.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Claimed progress */}
        <div className="mt-4">
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500 rounded-full"
              style={{ width: `${deal.claimedPercent}%` }}
            />
          </div>
          <p className="text-[11px] text-gray-500 mt-1">
            {deal.claimedPercent}% claimed — hurry!
          </p>
        </div>

        <a
          href={deal.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-auto pt-4 block"
        >
          <button className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold py-2.5 rounded-lg text-sm">
            VIEW DEAL
          </button>
        </a>
      </div>
    </motion.div>
  );
}