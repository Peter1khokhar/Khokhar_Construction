import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect essential details such as your name, email, phone number, and project requirements when you request a quote, book a consultation, or contact Khokhar Construction directly. We may also collect non-personal data like website usage patterns to improve our services.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "Your information helps us deliver customized construction solutions, respond to inquiries, share project updates, and send service-related communications. We strictly use your data for business purposes and never sell or misuse it.",
    },
    {
      title: "3. Data Security",
      content:
        "Khokhar Construction implements strong security measures to safeguard your personal information against unauthorized access, loss, or misuse. While we strive to keep your data secure, no digital system can guarantee absolute security.",
    },
    {
      title: "4. Your Rights",
      content:
        "You have the right to access, correct, or request deletion of your data stored with Khokhar Construction. If you wish to update your details or withdraw consent, you can contact us directly through our official channels.",
    },
    {
      title: "5. Contact Us",
      content:
        "If you have questions about our Privacy Policy or how we handle your information, feel free to reach out. Our team is available to assist you at any time.",
      contact: true,
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-6"
        >
          Privacy <span className="text-blue-600">Policy</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-12"
        >
          At Khokhar Construction, we respect your privacy and are committed
          to safeguarding the personal data of our clients and visitors.
        </motion.p>

        {/* Content Sections */}
        <div className="space-y-10 text-gray-700 leading-relaxed">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p>{s.content}</p>

              {s.contact && (
                <p className="mt-4 text-blue-600 font-medium">
                  📧 info@khokharconstruction.com <br />
                  📞 +91 62843 95526
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
