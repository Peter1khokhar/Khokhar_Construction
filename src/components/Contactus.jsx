import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { FcPhone } from "react-icons/fc";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import location from '../assets/location.jpg'

export default function Contact() {

const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault(); // stop refresh

  emailjs
    .sendForm(
      'service_nr5hgab',   // ✅ your Service ID
      'template_jga0bzp',  // ✅ your Template ID
      form.current,        // ✅ the form ref
      { publicKey: 'KD-k9sQpkNGsrq-I4' } // ✅ your Public Key
    )
    .then(
      () => {
        alert("✅ Email Sent Successfully!");
        console.log("SUCCESS!");
        form.current.reset();
      },
      (error) => {
        alert("❌ Failed to send email");
        console.log("FAILED...", error.text);
      }
    );
};


  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE - Google Map + Socials */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Get in <span className="text-blue-600">Touch</span>
          </h2>

          {/* Google Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src={location}
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-700">
              <MapPin className="w-6 h-6 " /> Batala, Punjab, India
            </p>
            <p className="flex  items-center gap-3 text-gray-700">
              <a href="tel:/918014893000" target="_blank" rel="noreferrer">
              <FcPhone  className="w-6 h-6  hover:scale-110 transition" />
            </a> +91 8014893000
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <Mail className="w-6 h-6 " /> peterkhokhar_@gmail.com
            </p>
          </div>

          {/* Social Media */}
          <div className="flex gap-6 mt-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com/peterkhokhar_" target="_blank" rel="noreferrer">
              <Instagram className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="w-6 h-6  hover:scale-110 transition" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - Contact Form */}
        <motion.form
          ref={form} onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }} 
          className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Form</h3>
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            rows="4"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            // ref={form} onSubmit={sendEmail}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
