import { memo } from "react";
import { motion } from "framer-motion";

// ✅ Case Study Data (sirf text info — image map se aayegi)
const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Platform for Fashion Retailer",
    industry: "Retail & Fashion",
    desc: "We built a scalable e-commerce platform with seamless checkout, inventory management, and AI-based recommendations.",
    results: ["40% increase in online sales", "30% faster checkout", "Improved user retention by 25%"],
  },
  {
    id: 2,
    title: "Healthcare Appointment System",
    industry: "Healthcare",
    desc: "A cloud-based platform for online doctor appointments, prescription tracking, and patient management.",
    results: ["Reduced booking time by 50%", "Enabled remote consultations", "HIPAA-compliant data storage"],
  },
  {
    id: 3,
    title: "Fintech Mobile App",
    industry: "Finance",
    desc: "We developed a secure fintech app with instant payments, investment tracking, and AI fraud detection.",
    results: ["Processed 1M+ transactions monthly", "99.9% uptime", "Enhanced fraud detection by 80%"],
  },
  {
    id: 4,
    title: "Learning Management System (LMS)",
    industry: "Education",
    desc: "An LMS with video courses, quizzes, certifications, and gamification to improve student engagement.",
    results: ["45% higher engagement", "Boosted course completion rates", "Integrated payment gateways"],
  },
];

// 🧩 Motion Variants for smooth animation
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardMotion = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

// 🧠 Dynamically Import All Images from assets/CaseStudiesPage
const images = import.meta.glob("/src/assets/CaseStudiesPage/*", {
  eager: true,
  import: "default",
});

// 🧠 Helper — convert import.meta.glob object into array
const imageArray = Object.values(images);

// 🧠 Memoized Case Study Card
const CaseStudyCard = memo(({ cs, index }) => (
  <motion.div
    variants={cardMotion}
    whileHover={{ y: -8 }}
    className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 border border-gray-700 hover:border-cyan-500/50"
  >
    {/* 🖼️ Image Section */}
    <div className="relative overflow-hidden">
      <motion.img
        src={imageArray[index] || ""}
        alt={cs.title}
        loading="lazy"
        width={800}
        height={400}
        className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>

      {/* 🏷️ Title Overlay */}
      <div className="absolute bottom-4 left-5">
        <h2 className="text-2xl font-bold text-white drop-shadow-lg">{cs.title}</h2>
        <p className="text-cyan-400 text-sm mt-1 font-medium">{cs.industry}</p>
      </div>
    </div>

    {/* 📄 Description Section */}
    <div className="p-6">
      <p className="text-gray-300 mb-4 leading-relaxed">{cs.desc}</p>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gray-800/60 p-4 rounded-lg border border-gray-700"
      >
        <h3 className="text-lg font-semibold text-cyan-400 mb-2">Results:</h3>
        <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
          {cs.results.map((r, j) => (
            <li key={j}>{r}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  </motion.div>
));

// 🌟 Main Component
const CaseStudiesPage = () => {
  return (
    <section className="relative mt-10 bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen py-24 px-6 md:px-16 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-3xl rounded-full"></div>
      </div>

      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-6"
      >
        Our <span className="text-cyan-400">Case Studies</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="text-gray-300 max-w-3xl mx-auto text-center mb-16 leading-relaxed"
      >
        Discover how we’ve helped businesses scale through technology, innovation, and performance.
      </motion.p>

      {/* 🔹 Case Studies Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
      >
        {caseStudies.map((cs, i) => (
          <CaseStudyCard key={cs.id} cs={cs} index={i} />
        ))}
      </motion.div>

      {/* ✳️ CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-24"
      >
        <h3 className="text-3xl font-bold mb-4">
          Ready to Create Your <span className="text-cyan-400">Success Story?</span>
        </h3>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Let’s collaborate to design digital solutions that deliver measurable results.
        </p>
        <a
          href="/contact"
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/40 transition-transform hover:scale-105"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
};

export default memo(CaseStudiesPage);
