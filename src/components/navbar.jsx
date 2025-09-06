import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Kc from '../assets/Kc.png'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 transition ${
      isActive ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-700"
    }`;

    

  return (
    <nav className=" sticky top-0 left-0 w-full bg-white rounded-2xl  shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className=" h-8 sm:h-10 w-8 sm:w-10 flex items-center  gap-2 sm:gap-4 rounded-xl">
        <img src={Kc} alt="" />
        <NavLink to="/" className="text-xl sm:text-2xl font-bold text-blue-700 gap-4">
          Khokhar<span className="text-gray-800">Construction</span>
        </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/Aboutus" className={linkClasses}>About</NavLink>
          <NavLink to="/services" className={linkClasses}>Services</NavLink>
          <NavLink to="/projects" className={linkClasses}>Projects</NavLink>
          <NavLink to="/InfiniteTestimonials" className={linkClasses}>Testimonials</NavLink>
          <NavLink to="/Contact" className={linkClasses}>Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden  bg-white shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-6 ">
            <NavLink onClick={toggleMenu} to="/" className={linkClasses}>Home</NavLink>
            <NavLink onClick={toggleMenu} to="/about" className={linkClasses}>About</NavLink>
            <NavLink onClick={toggleMenu} to="/services" className={linkClasses}>Services</NavLink>
            <NavLink onClick={toggleMenu} to="/projects" className={linkClasses}>Projects</NavLink>
            <NavLink onClick={toggleMenu} to="/testimonials" className={linkClasses}>Testimonials</NavLink>
            <NavLink onClick={toggleMenu} to="/contact" className={linkClasses}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
