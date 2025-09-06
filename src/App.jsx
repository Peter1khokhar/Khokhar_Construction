import Aboutus from "./components/Aboutus"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/navbar"
import Services from "./components/Services"
import Projects from "./components/Projects"
import {HashRouter, createBrowserRouter, RouterProvider} from "react-router-dom"
import WhyUs from "./components/whyus"
import Contact from "./components/Contactus"
import Testimonials from "./components/InfiniteTestimonials"
import WhatsAppButton from "./components/WhatsappButton"
import FAQ from "./components/Faq"
import TermsAndConditions from "./components/TermsAndConditions"
import PrivacyPolicy from "./components/Privacy"


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/><Services/><Projects/><WhyUs/> <Contact/><Footer/></>
    },
    {
      path:"/Aboutus",
      element:<><Navbar/><Aboutus/><WhatsAppButton/><WhyUs/> <Footer/></>
    },
    {
      path:"/Services",
      element:<><Navbar/><Services/><WhatsAppButton/><WhyUs/> <Footer/></>
    },
    {
      path:"/Projects",
      element:<><Navbar/><WhatsAppButton/><Projects/><FAQ/><Footer/></> 
    },
    {
      path:"/InfiniteTestimonials",
      element:<><Navbar/><Testimonials/><Services/><WhatsAppButton/><Footer/></>
    },
    {
      path:"/Contact",
      element:<><Navbar/><Contact/><WhatsAppButton/><Footer/></>
    },
    {
      path:"/terms",
      element:<><Navbar/><TermsAndConditions/><WhatsAppButton/><Footer/></>
    },
    {
      path:"/privacy",
      element:<><Navbar/><PrivacyPolicy/><WhatsAppButton/><Footer/></>
    },
    {
      path:"/faq",
      element:<><Navbar/><FAQ/><WhatsAppButton/><Footer/></>
    },
  ])

  return (
    <>
    <HashRouter router={router} basename="/Khokhar_Construction"/> 
 
    </>
  )
}


export default App
