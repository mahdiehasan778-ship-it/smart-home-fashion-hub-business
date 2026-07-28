// src/components/TopPicks.jsx
import ProductCard from "./ProductCard";

export default function TopPicks({ products }) {
  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">Top Picks For You</h2>
        <a href="#" className="text-sm font-medium text-blue-900 hover:underline">
          See All
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}