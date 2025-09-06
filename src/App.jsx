import Aboutus from "./components/Aboutus"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/navbar"
import Services from "./components/Services"
import Projects from "./components/Projects"
import { HashRouter, Routes, Route } from "react-router-dom"
import WhyUs from "./components/whyus"
import Contact from "./components/Contactus"
import Testimonials from "./components/InfiniteTestimonials"
import WhatsAppButton from "./components/WhatsappButton"
import FAQ from "./components/Faq"
import TermsAndConditions from "./components/TermsAndConditions"
import PrivacyPolicy from "./components/Privacy"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<><Navbar/><Home/><Services/><Projects/><WhyUs/><Contact/><Footer/></>} />
        <Route path="/Aboutus" element={<><Navbar/><Aboutus/><WhatsAppButton/><WhyUs/><Footer/></>} />
        <Route path="/Services" element={<><Navbar/><Services/><WhatsAppButton/><WhyUs/><Footer/></>} />
        <Route path="/Projects" element={<><Navbar/><WhatsAppButton/><Projects/><FAQ/><Footer/></>} />
        <Route path="/InfiniteTestimonials" element={<><Navbar/><Testimonials/><Services/><WhatsAppButton/><Footer/></>} />
        <Route path="/Contact" element={<><Navbar/><Contact/><WhatsAppButton/><Footer/></>} />
        <Route path="/terms" element={<><Navbar/><TermsAndConditions/><WhatsAppButton/><Footer/></>} />
        <Route path="/privacy" element={<><Navbar/><PrivacyPolicy/><WhatsAppButton/><Footer/></>} />
        <Route path="/faq" element={<><Navbar/><FAQ/><WhatsAppButton/><Footer/></>} />
      </Routes>
    </HashRouter>
  )
}

export default App
