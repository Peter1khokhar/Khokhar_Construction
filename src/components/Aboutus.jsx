import owner from "../assets/owner.jpg"

import { motion } from "framer-motion";

export default function AboutUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="about"
      className="relative bg-gray-50 py-8 px-6"
    >
      <div className="flex flex-wrap justify-center p-10">
        <h1 className="text-3xl ">Brain Of <span className="text-3xl  text-blue-900">The Firm</span></h1>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Owner Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="flex justify-center"
        >
          <img
            src= { owner } // replace with actual path
            alt="Owner of Khokhar Construction"
            className="w-80 h-96 object-cover rounded-2xl shadow-lg border-4 border-white"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-semibold">Khokhar Construction</span>, 
            we believe in creating structures that combine strength, 
            modern design, and long-lasting value. With years of 
            experience and dedication, our mission is to turn your 
            dream projects into reality with trust and quality.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Led by our visionary founder, we continue to innovate in 
            residential, commercial, and infrastructure projects, 
            ensuring excellence in every detail.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
