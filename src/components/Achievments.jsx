import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaUsers, FaAward, FaClock } from "react-icons/fa";

const stats = [
  { label: "Projects Completed", value: 1000, icon: <FaBuilding size={32} /> },
  { label: "Happy Clients", value: 900, icon: <FaUsers size={32} /> },
  { label: "Years of Experience", value: 25, icon: <FaClock size={32} /> },
  { label: "Awards Won", value: 35, icon: <FaAward size={32} /> },
];

export default function Achievements() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [inView, setInView] = useState(false);

  // Easing function
  const easeOutQuad = (t) => t * (2 - t);

  useEffect(() => {
    if (!inView) return;

    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000; // 2s
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuad(progress);
        const value = Math.floor(easedProgress * end);

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = value;
          return newCounts;
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  }, [inView]);

  return (
    <section className="bg-gray-100 py-4 sm:px-2 md:px-20">
      <motion.div
        className="container mx-auto px-2 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        onViewportEnter={() => setInView(true)}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-4 bg-white rounded-xl shadow-md flex flex-col items-center"
          >
            <div className="text-yellow-500 mb-3">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-gray-900">
              {counts[i]}+
            </h3>
            <p className="text-gray-700 mt-1 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
