import commbuild from "../assets/commbuild.jpg"
import renovation from "../assets/renovation.jpg"
import residencial from "../assets/residencial.webp"
import interior from "../assets/interior.jpg"

import { useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Residential Construction",
    img: residencial,
    icon: "🏠",
    details:
      "Our residential construction services cover architectural design, structural engineering, plumbing, electrical, and finishing works. Whether it’s a luxury villa, duplex, or apartment building, we ensure durability, comfort, and modern aesthetics. We also provide sustainable building solutions for energy efficiency and long-term value.",
  },
  {
    title: "Commercial Construction",
    img: commbuild,
    icon: "🏢",
    details:
      "We specialize in constructing office buildings, retail spaces, warehouses, and multi-story complexes. Our team ensures that your commercial property meets safety codes, provides functional layouts, and represents your brand identity. From high-rise towers to shopping complexes, we deliver projects on time with strong project management.",
  },
  {
    title: "Renovation & Remodeling",
    img: renovation,
    icon: "🛠",
    details:
      "Whether it’s upgrading an old home, expanding your living area, or redesigning an office, we provide complete remodeling services. Our experts handle demolition, space planning, flooring, ceilings, paint, and modern fittings. We breathe new life into outdated spaces while ensuring structural safety and adding long-term value.",
  },
  {
    title: "Interior Design",
    img: interior,
    icon: "🎨",
    details:
      "Our interior design team creates elegant, practical, and customized spaces. We specialize in modular kitchens, living room makeovers, office interiors, false ceilings, lighting designs, and premium furniture setups. Every detail is planned to match your taste, improve functionality, and maximize space utilization.",
  },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (i) => {
    setExpandedIndex((prev) => (prev === i ? null : i));
  };

  const previewText = (text, max = 180) =>
    text.length > max ? text.slice(0, max).trim() + "…" : text;

  return (
    <section className="py-12 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        <span className="text-blue-600">Our</span> Services
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {SERVICES.map((s, i) => {
          const isOpen = expandedIndex === i;

          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg"
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />

              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{s.icon}</div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>

                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  {isOpen ? s.details : previewText(s.details)}
                </p>

                <button
                  onClick={() => toggle(i)}
                  className="mt-4 text-blue-600 font-medium hover:underline"
                  aria-expanded={isOpen}
                  aria-controls={`service-${i}-details`}
                >
                  {isOpen ? "Show Less" : "Learn More"}
                </button>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
