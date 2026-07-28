// src/components/CircularCategoryGrid.jsx
import {
  Home,
  CookingPot,
  Sofa,
  Sparkles,
  Shirt,
  ShoppingBag,
  Watch,
  Zap,
} from "lucide-react";
import { categories } from "../data/categories";

const ICONS = {
  Home,
  CookingPot,
  Sofa,
  Sparkles,
  Shirt,
  ShoppingBag,
  Watch,
  Zap,
};

export default function CircularCategoryGrid() {
  return (
    <section className="bg-[#F7F8FA] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-['Space_Grotesk',sans-serif] text-2xl font-bold text-[#141B2E]">
            Shop by Category
          </h2>
          <a
            href="/categories"
            className="text-sm font-semibold text-[#0B1B3A] underline decoration-[#00E5C7] decoration-2 underline-offset-4 hover:text-[#16305C]"
          >
            View all
          </a>
        </div>

        <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-9 md:gap-x-3">
          {categories.map((cat) => {
            const Icon = ICONS[cat.icon] ?? Home;
            return (
              <a
                key={cat.id}
                href={cat.href}
                className="group flex flex-col items-center gap-3 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B1B3A]"
              >
                <span className="relative flex h-20 w-20 items-center justify-center">
                  {/* rotating ring — the signature hover element */}
                  <span
                    className={`absolute inset-0 rounded-full border-2 border-dashed opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-[spin_6s_linear_infinite] motion-reduce:group-hover:animate-none ${
                      cat.featured ? "border-[#E7A96B]" : "border-[#00E5C7]"
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-full shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5 ${
                      cat.featured
                        ? "bg-[#0B1B3A] text-[#E7A96B]"
                        : "bg-white text-[#0B1B3A] ring-1 ring-[#0B1B3A]/10"
                    }`}
                  >
                    <Icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                </span>
                <span
                  className={`text-xs font-semibold leading-tight ${
                    cat.featured ? "text-[#E7A96B]" : "text-[#141B2E]"
                  }`}
                >
                  {cat.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}