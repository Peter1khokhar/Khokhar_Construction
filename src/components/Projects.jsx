import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Luxury Villa",
    description:
      "A premium residential villa designed with modern architecture and sustainable materials.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLgFepD0IGyvYMOmO_18HkFI46YhoomOxbUA&s",
  },
  {
    title: "Mahajan Hospital",
    description:
      "High-rise corporate building with state-of-the-art facilities and smart workspace planning.",
    img: "https://content3.jdmagicbox.com/comp/batala/i1/9999p1874.1874.220215000519.w3i1/catalogue/mahajan-hospital-guru-teg-bahadur-colony-batala-hospitals-pui4dfuv1y.jpg",
  },
  {
    title: "Outlook Showroom",
    description:
      "A large-scale commercial complex featuring retail outlets, entertainment, and dining spaces.",
    img: "https://images.jdmagicbox.com/v2/comp/chennai/p3/044pxx44.xx44.131003134225.g6p3/catalogue/outlook-thoraipakkam-chennai-readymade-garment-retailers-nzyute-250.jpg",
  },
  {
    title: "Dhindsa Resort ",
    description:
      "Multi-story residential apartment complex with amenities for families and professionals.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkRgGe0qO-Oj4DH55YrOIKVD6iUzDUFzym-Q&s",
  },
  {
    title: "Pine School ",
    description:
      "Complete remodeling of an outdated structure, transforming it into a modern space.",
    img: "https://classhud.com/assets/media/uploads/listing/cover_image/the-pine-school.jpg",
  },
];

export default function Projects() {
  return (
    <section className="py-12 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >
        <span className="text-blue-600">Our</span> Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="relative h-72 shadow-md overflow-hidden"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Bottom overlay for title + description */}
            <div className="absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] p-4">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-white mt-1">{p.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
