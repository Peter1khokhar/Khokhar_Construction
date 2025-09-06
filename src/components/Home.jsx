import Housepic from "../assets/housepic.jpg"
import Achievements from "./Achievments"
import WhatsAppButton from "./WhatsappButton"
import ScrollToTop from "./functionalities/ScrollBtn"
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {

  const texts = [
    "We Build Your Dream Home",
    "Quality Construction Guaranteed",
    "Turning Ideas Into Reality",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <>
  <div className="relative h-[80vh]">
  {/* Background Image */}
  <motion.div 
    className="absolute inset-0 bg-center bg-cover bg-no-repeat"
    style={{ backgroundImage: `url(${Housepic})` }}
  >
    {/* Black Overlay only on image */}
    <div className="absolute inset-0 bg-black/50"></div>
  </motion.div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
    
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ y: 100, opacity: 0 }}     // start from bottom
          animate={{ y: 0, opacity: 1 }}       // move to center
          exit={{ y: -100, opacity: 0 }}       // go up and disappear
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold shadow-blue-300 "
        >
          {texts[index]}
        </motion.h1>
      </AnimatePresence>

    <p className="mt-4 max-w-2xl mx-auto text-lg font-light">
      Residential & commercial builds, remodels, and interiors. We deliver trusted workmanship, clear communication, and on‑time handovers.
    </p>
    <NavLink to="/contact"><motion.button  
    whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  transition={{ type: "spring", stiffness: 300 }}
    className="mt-6 w-60 bg-white text-black p-4 hover:bg-blue-700  hover:text-white rounded-lg shadow-md">
      Get In Touch
    </motion.button></NavLink>
  </div>
</div>
<ScrollToTop />
<WhatsAppButton/>
<Achievements/>
</>

    
  )
}

export default Home