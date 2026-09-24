import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🖼️ Import images from assets/case-studies
import image1 from "../assets/CaseStudies/Image1.webp";
import image2 from "../assets/CaseStudies/Image2.webp";
import image3 from "../assets/CaseStudies/Image3.webp";
import image4 from "../assets/CaseStudies/Image4.webp";

// 🧩 Case Study Data
const caseStudies = [
  {
    id: 1,
    title: "Fashion E-Commerce Platform",
    industry: "Retail & Fashion",
    desc: "We built a scalable e-commerce solution with integrated payments, advanced product filtering, and an intuitive checkout process.",
    results: ["40% sales growth", "30% faster checkout", "Improved customer retention"],
  },
  {
    id: 2,
    title: "Business Process Automation",
    industry: "Corporate Solutions",
    desc: "Automated workflows and reporting dashboards that reduced manual effort and boosted efficiency across departments.",
    results: ["50% time saved", "Seamless ERP integration", "Improved decision-making"],
  },
  {
    id: 3,
    title: "Startup Collaboration Hub",
    industry: "Technology & Startups",
    desc: "Developed a collaboration hub for startups to share resources, mentor networks, and scale efficiently.",
    results: ["5K+ active users", "Community-driven growth", "Accelerated scaling"],
  },
  {
    id: 4,
    title: "Smart Office Management",
    industry: "Enterprise Solutions",
    desc: "Created a cloud-based office management suite that optimizes space utilization, scheduling, and resource allocation.",
    results: ["20% cost savings", "IoT-enabled tracking", "Boosted productivity"],
  },
];

// 🔗 Map IDs to images
const images = {
  1: image1,
  2: image2,
  3: image3,
  4: image4,
};

const CaseStudies = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 relative overflow-hidden">
      {/* 🏷️ Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-6"
      >
        Real Results, <span className="text-cyan-400">Proven Success</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
      >
        Explore how we’ve transformed businesses across industries with impactful
        case studies showcasing measurable success.
      </motion.p>

      {/* 🧱 Case Studies Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-2xl shadow-lg border border-gray-800"
          >
            {/* 🖼️ Image */}
            <img
              src={images[study.id]}
              alt={study.title}
              loading="lazy"
              className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700"
            />

            {/* 🌈 Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold mb-1">{study.title}</h3>
              <p className="text-sm text-cyan-400 mb-2">{study.industry}</p>
              <p className="text-sm text-gray-200">{study.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🧠 View All Button */}
      <div className="text-center mt-16">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:bg-cyan-400 transition"
        >
          View All Case Studies
        </motion.button>
      </div>

      {/* 💬 Modal Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 text-white p-8 rounded-2xl max-w-4xl w-full shadow-lg relative"
            >
              {/* ❌ Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
              >
                ✖
              </button>

              <h2 className="text-2xl font-bold mb-6">All Case Studies</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {caseStudies.map((study) => (
                  <div
                    key={study.id}
                    className="bg-gray-800 p-4 rounded-xl shadow hover:bg-gray-700 transition"
                  >
                    <img
                      src={images[study.id]}
                      alt={study.title}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                    <h3 className="text-lg font-semibold mb-1">{study.title}</h3>
                    <p className="text-xs text-cyan-400 mb-2">{study.industry}</p>
                    <p className="text-sm text-gray-300 mb-2">{study.desc}</p>
                    <ul className="list-disc list-inside text-xs text-gray-400">
                      {study.results.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudies;
