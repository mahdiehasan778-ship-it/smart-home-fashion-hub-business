// src/components/sidebar/TrendingNow.jsx
import { Star, TrendingUp } from "lucide-react";

export default function TrendingNow({ items }) {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp size={18} className="text-orange-500" />
        <h2 className="text-lg font-bold text-gray-800">Trending Now</h2>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <span
              className={`w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold flex-shrink-0 ${
                item.rank === 1
                  ? "bg-yellow-400 text-white"
                  : item.rank === 2
                  ? "bg-gray-300 text-white"
                  : item.rank === 3
                  ? "bg-orange-300 text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {item.rank}
            </span>

            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 rounded-lg object-cover bg-gray-50 flex-shrink-0"
              loading="lazy"
            />

            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-800 line-clamp-1">{item.name}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <Star size={11} className="fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-gray-500">{item.rating}</span>
                <span className="text-xs text-gray-300">•</span>
                <span className="text-xs font-semibold text-gray-700">
                  ${item.price.toFixed(2)}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}