import { Facebook, Instagram, Linkedin } from "lucide-react";
import { FcPhone } from "react-icons/fc";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <footer className="relative bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 text-gray-700 pt-16 pb-12">
      {/* Wave Shape */}
      <div className="absolute -top-12 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.75,22,106.36,29.05,158,17.39,70-15.52,
            136-57.9,206-73.57C438.74-27.38,512,6,583,32.55c69.09,
            26.38,138,43.76,209,40.3,66.18-3.21,129.77-26.68,
            193-39.8C1025.43,15,1092,10.11,1200,46.29V0Z"
            opacity=".25"
            className="fill-gray-200"
          />
          <path
            d="M0,0V15.81C47.64,36.53,106.2,52.07,158,49.29,
            228,45.72,294-7.27,364,1.5,439.28,11.29,
            512,61.16,583,83.42c69.92,21.83,138,17.39,
            209-1.9,66.14-18,129.77-46.29,193-47.43,
            63.53-1.14,126,24.93,215,64.25V0Z"
            opacity=".5"
            className="fill-gray-300"
          />
          <path
            d="M0,0V5.63C47.73,24.1,106.35,49.26,158,
            54.54c70,7.07,136-17.34,206-20.3,75.27-3.27,
            148,16.48,219,35.8,69.72,19,138,27.61,
            209,21.41,66.17-5.88,129.76-27,193-39.83,
            63.5-13,126-17.85,215,8.06V0Z"
            className="fill-gray-100"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 relative z-10">
        {/* Brand Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="text-2xl font-bold text-gray-900">Khokhar Construction</h2>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Building trust and quality since day one. We bring modern design,
            strong structures, and innovation to every project.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><NavLink to="/" className="hover:text-blue-600">Home</NavLink></li>
            <li><NavLink to="/aboutus" className="hover:text-blue-600">About Us</NavLink></li>
            <li><NavLink to="/projects" className="hover:text-blue-600">Projects</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink></li>
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
          <ul className="space-y-2"> 
            <li><NavLink to="/terms" className="hover:text-blue-600">Terms & Conditions</NavLink></li>
            <li><NavLink to="/privacy" className="hover:text-blue-600">Privacy Policy</NavLink></li>
            <li><NavLink to="/faq" className="hover:text-blue-600">FAQ</NavLink></li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com/peterkhokhar_" target="_blank" rel="noreferrer">
              <Instagram className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="w-6 h-6 hover:scale-110 transition" />
            </a>
            
          </div>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
        className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-600 text-sm"
      >
        © {new Date().getFullYear()} Khokhar Construction. All Rights Reserved.
      </motion.div>
    </footer>
  );
}
