import { motion } from "framer-motion";
import { FaRocket, FaLaptopCode, FaMobileAlt, FaCloud, FaUsers } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Innovation at the Core",
    desc: "We started with a vision to innovate and disrupt the digital landscape.",
    points: ["Creative Solutions", "Future-Ready Designs", "Agile Approach"],
    icon: <FaRocket />,
    color: "text-pink-400",
  },
  {
    id: 2,
    title: "Web Excellence",
    desc: "Years of delivering scalable and modern web apps across industries.",
    points: ["High-Performance Code", "Seamless Integrations", "Responsive UI"],
    icon: <FaLaptopCode />,
    color: "text-cyan-400",
  },
  {
    id: 3,
    title: "Mobile-First Approach",
    desc: "Crafting mobile apps that bring businesses closer to their customers.",
    points: ["iOS & Android Apps", "Cross-Platform Solutions", "Smooth UX"],
    icon: <FaMobileAlt />,
    color: "text-orange-400",
  },
  {
    id: 4,
    title: "Cloud & DevOps",
    desc: "Reliable cloud solutions and DevOps pipelines for faster deployment.",
    points: ["AWS, Azure, GCP", "CI/CD Pipelines", "Docker & Kubernetes"],
    icon: <FaCloud />,
    color: "text-green-400",
  },
  {
    id: 5,
    title: "Global Impact",
    desc: "Our solutions are trusted worldwide across multiple industries.",
    points: ["15+ Countries Served", "200+ Projects", "Diverse Industries"],
    icon: <FaUsers />,
    color: "text-yellow-400",
  },
];

const Features = () => {
  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-6"
      >
        Powering <span className="text-cyan-400">Innovation</span> Through Technology
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
      >
        We combine design, technology, and strategy to deliver transformative
        digital experiences. Our expertise fuels growth and global impact.
      </motion.p>

      {/* Timeline Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Middle Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"></div>

        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className={`mb-16 flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Content Card */}
            <div className="relative w-full md:w-1/2">
              <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-cyan-400 transition group">
                {/* Icon */}
                <div
                  className={`text-4xl mb-4 ${feature.color} group-hover:scale-110 transition-transform`}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-300 mb-3">{feature.desc}</p>

                {/* Bullet Points */}
                <ul className="space-y-1 text-sm text-gray-400">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-cyan-400">✔</span> {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Circle on Timeline */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-10 w-8 h-8 rounded-full bg-cyan-500 border-4 border-black shadow-lg"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
