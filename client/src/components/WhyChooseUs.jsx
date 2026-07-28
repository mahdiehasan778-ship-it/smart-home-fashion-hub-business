// src/components/sections/WhyChooseUs.jsx
import { motion } from "framer-motion";
import { whyChooseUs } from "../../data/trustSectionData";

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Why Choose Smart Home & Fashion Hub?
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            The reasons thousands of shoppers trust us for their home & style needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-3">
                  <Icon size={22} className="text-orange-500" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}