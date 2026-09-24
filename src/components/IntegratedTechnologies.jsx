import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaAws,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiSpringboot, SiTailwindcss, SiMongodb, SiDocker } from "react-icons/si";

// 🟢 Tech Stack Array
const technologies = [
  {
    name: "React.js",
    Icon: FaReact,
    description: "Modern frontend library for building interactive UIs.",
    details: "React helps us create dynamic and responsive user interfaces...",
    gradient: "from-cyan-500/40 to-blue-500/40",
    color: "text-cyan-300",
  },
  {
    name: "Node.js",
    Icon: FaNodeJs,
    description: "Server-side JavaScript runtime for scalable apps.",
    details: "Node.js is great for handling large-scale APIs...",
    gradient: "from-green-500/40 to-emerald-600/40",
    color: "text-green-300",
  },
  {
    name: "Java",
    Icon: FaJava,
    description: "Robust backend language for enterprise applications.",
    details: "Java powers enterprise-grade applications...",
    gradient: "from-red-500/40 to-orange-500/40",
    color: "text-red-300",
  },
  {
    name: "Spring Boot",
    Icon: SiSpringboot,
    description: "Powerful Java framework for backend development.",
    details: "Spring Boot simplifies backend development...",
    gradient: "from-green-400/40 to-green-700/40",
    color: "text-green-300",
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    description: "Utility-first CSS framework for responsive designs.",
    details: "Tailwind enables faster styling with utility classes...",
    gradient: "from-sky-500/40 to-indigo-500/40",
    color: "text-sky-300",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    description: "Flexible NoSQL database for modern applications.",
    details: "MongoDB offers schema-less, high-performance data storage...",
    gradient: "from-green-500/40 to-lime-500/40",
    color: "text-green-300",
  },
  {
    name: "AWS",
    Icon: FaAws,
    description: "Cloud services for deployment, hosting, and storage.",
    details: "AWS provides cloud infrastructure for scalability...",
    gradient: "from-yellow-500/40 to-orange-600/40",
    color: "text-yellow-300",
  },
  {
    name: "Docker",
    Icon: SiDocker,
    description: "Containerization platform for portable apps.",
    details: "Docker ensures app portability with containers...",
    gradient: "from-sky-400/40 to-blue-600/40",
    color: "text-sky-300",
  },
];

// 🟢 Card Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const IntegratedTechnologies = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto relative">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-16"
      >
        Our <span className="text-cyan-400">Tech Stack</span>
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {technologies.map((tech, index) => {
          const Icon = tech.Icon;
          const isOpen = selectedTech === index;

          return (
            <motion.div
              key={tech.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedTech(isOpen ? null : index)}
              layout   // ✅ Smooth resize animation
              className={`relative p-6 rounded-xl cursor-pointer backdrop-blur-lg bg-gradient-to-br ${tech.gradient} shadow-xl border border-white/10 flex flex-col items-center text-center transition-all duration-500`}
            >
              {/* Icon */}
              <motion.div whileHover={{ scale: 1.15, rotate: 8 }} className="mb-4">
                <Icon className={`text-4xl ${tech.color} drop-shadow-glow`} />
              </motion.div>

              {/* Title & Short Desc */}
              <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
              <p className="text-sm text-white/80">{tech.description}</p>

              {/* Expandable Details */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    layout   // ✅ Ensures smooth expand/collapse
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-white/90 text-sm bg-black/40 p-3 rounded-lg w-full"
                  >
                    {tech.details}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default memo(IntegratedTechnologies);
