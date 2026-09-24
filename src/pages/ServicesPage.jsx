import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPaintBrush,
  FaCode,
  FaWordpress,
  FaBullhorn,
  FaCloud,
  FaCheckCircle,
} from "react-icons/fa";

// 🟢 Data ko outside constant rakha (no re-creation per render)
const services = [
  {
    id: 1,
    title: "UI/UX Design",
    desc: "Engaging, human-centered designs that create intuitive and delightful user experiences.",
    details: ["Wireframing & Prototyping", "User Journey Mapping", "Interactive Mockups", "Usability Testing"],
    more: "Our UI/UX services go beyond visuals. We focus on human behavior, accessibility, and brand alignment.",
    Icon: FaPaintBrush,
    color: "from-pink-500 via-purple-600 to-indigo-600",
  },
  {
    id: 2,
    title: "Web App Development",
    desc: "Scalable, secure, and high-performance web apps powered by modern technologies.",
    details: ["Custom Applications", "API Development", "Single Page Apps (SPA)", "Performance Optimization"],
    more: "We build modern, enterprise-grade apps using React, Node.js, and Spring Boot.",
    Icon: FaCode,
    color: "from-cyan-400 via-blue-500 to-indigo-500",
  },
  {
    id: 3,
    title: "CMS Development",
    desc: "Powerful CMS platforms that make content management effortless and scalable.",
    details: ["WordPress Solutions", "Headless CMS", "Custom CMS", "SEO Friendly"],
    more: "From WordPress to headless CMS, we build platforms that empower creators with SEO and mobile-first performance.",
    Icon: FaWordpress,
    color: "from-orange-400 via-red-500 to-pink-600",
  },
  {
    id: 4,
    title: "Digital Marketing",
    desc: "Strategies that boost brand awareness, engagement, and conversions.",
    details: ["SEO Optimization", "Social Media Campaigns", "PPC Ads", "Content Strategy"],
    more: "Our marketing strategies combine creativity and analytics to maximize ROI.",
    Icon: FaBullhorn,
    color: "from-yellow-400 via-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Cloud & DevOps",
    desc: "Streamline workflows with reliable cloud and DevOps solutions for faster deployment.",
    details: ["AWS, Azure, GCP", "CI/CD Pipelines", "Docker & Kubernetes", "Cloud Migration"],
    more: "With DevOps automation and cloud platforms, we deliver fast, reliable, and cost-efficient solutions.",
    Icon: FaCloud,
    color: "from-green-400 via-emerald-500 to-teal-600",
  },
];

const whyChooseUs = [
  "Client-Centric Approach",
  "Cutting-Edge Technology",
  "On-Time Delivery",
  "Dedicated Expert Team",
  "Proven Track Record",
  "Scalable Solutions",
];

const processSteps = ["Research", "Design", "Development", "Testing", "Launch"];

// 🟢 Modal as separate memoized component
const ServiceModal = memo(({ service, onClose }) => (
  <AnimatePresence>
    {service && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900 text-white p-8 rounded-2xl max-w-lg shadow-lg relative"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
          >
            ✖
          </button>
          <div className="mb-4 text-5xl text-cyan-400">
            <service.Icon />
          </div>
          <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
          <p className="text-gray-300 mb-4">{service.more}</p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-cyan-500 text-black font-semibold rounded-lg shadow hover:bg-cyan-400 transition"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
));

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="bg-gradient-to-b mt-10 from-black via-gray-900 to-black text-white min-h-screen py-20 px-6 md:px-16 relative overflow-hidden">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-extrabold mb-6 text-center"
      >
        Our <span className="text-cyan-400">Services</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="text-gray-300 max-w-3xl mx-auto text-center mb-16"
      >
        From design to deployment, we provide full-spectrum digital solutions
        that help businesses innovate and grow.
      </motion.p>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`relative p-8 rounded-2xl shadow-lg bg-gradient-to-r ${service.color} group`}
          >
            <div className="text-5xl mb-4 text-white">
              <service.Icon />
            </div>
            <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
            <p className="text-sm text-gray-100 mb-6">{service.desc}</p>
            <ul className="space-y-2 text-sm text-gray-200 mb-6">
              {service.details.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-white">✔</span> {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedService(service)}
              className="px-6 py-2 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-200 transition"
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-28 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {whyChooseUs.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-xl shadow hover:bg-gray-700 transition"
            >
              <FaCheckCircle className="text-cyan-400 text-3xl mb-3 mx-auto" />
              <p>{point}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Process Section */}
      <div className="mt-28">
        <h2 className="text-3xl font-bold text-center mb-6">Our Process</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          {processSteps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center font-bold text-black mb-3">
                {i + 1}
              </div>
              <p>{step}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-28">
        <h3 className="text-3xl font-bold mb-4">
          Let’s Build <span className="text-cyan-400">Your Next Big Idea</span>
        </h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Whether you're a startup or enterprise, we design digital products
          that people love.
        </p>
        <a
          href="/contact"
          className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:bg-cyan-400 transition"
        >
          Get in Touch
        </a>
      </div>

      {/* Optimized Modal */}
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </div>
  );
};

export default memo(ServicesPage);
