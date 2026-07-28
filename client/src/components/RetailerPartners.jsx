// src/components/sections/RetailerPartners.jsx
import { retailerPartners } from "../../data/trustSectionData";

export default function RetailerPartners() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          We Are Associated With
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Proud affiliate partners with these leading retailers.
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
        {retailerPartners.map((partner) => (
          <div
            key={partner.id}
            className="flex items-center justify-center h-16 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            title={partner.name}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-8 max-w-[90px] object-contain"
              loading="lazy"
              onError={(e) => {
                // Graceful fallback if a logo CDN request fails
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "block";
              }}
            />
            <span className="hidden text-sm font-semibold text-gray-600">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}