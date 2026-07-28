// src/components/sections/AffiliateProcess.jsx
import { motion } from "framer-motion";
import { affiliateSteps } from "../../data/trustSectionData";

export default function AffiliateProcess() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          How Affiliate Marketing Works
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm md:text-base">
          We partner with trusted retailers to bring you the best deals — here's how
          shopping through our links works.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {affiliateSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center flex flex-col items-center"
            >
              <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center shadow">
                {step.step}
              </span>

              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <Icon size={26} className="text-blue-900" />
              </div>

              <h3 className="font-semibold text-gray-800 mb-1.5">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>

              {idx < affiliateSteps.length - 1 && (
                <span className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200" />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}