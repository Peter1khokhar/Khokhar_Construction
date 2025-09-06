import { motion } from "framer-motion";
import { ShieldCheck, Clock, Users, Building } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
      title: "Quality Assurance",
      description: "We deliver projects with top-notch quality and precision.",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-500" />,
      title: "On-Time Delivery",
      description: "Strict deadlines are our priority, without compromising quality.",
    },
    {
      icon: <Users className="w-10 h-10 text-purple-500" />,
      title: "Expert Team",
      description: "Our skilled professionals bring innovation to every project.",
    },
    {
      icon: <Building className="w-10 h-10 text-orange-500" />,
      title: "Strong Foundation",
      description: "We build structures that are durable and long-lasting.",
    },
  ];

  return (
    <section id="whyus" className="py-16 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose <span className="text-blue-600">Us?</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="p-6  transition duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
