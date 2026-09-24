import { motion } from "framer-motion";
import { FaPaintBrush, FaLaptopCode, FaDatabase } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    points: [
      "Boost engagement and drive higher conversions.",
      "Leverage research & analytics for scalable designs.",
      "Responsive and adaptive experiences across devices.",
    ],
    icon: <FaPaintBrush />,
    gradient: "from-cyan-400 via-teal-400 to-blue-500",
  },
  {
    id: 2,
    title: "Web App Development",
    points: [
      "Tailored apps that grow with your business.",
      "Integrating modern technologies for efficiency.",
      "High-performance apps for consistent engagement.",
    ],
    icon: <FaLaptopCode />,
    gradient: "from-orange-400 via-red-400 to-pink-500",
  },
  {
    id: 3,
    title: "CMS Development",
    points: [
      "Easy-to-manage and powerful CMS platforms.",
      "Flexible and scalable for future expansion.",
      "Robust and secure solutions for businesses.",
    ],
    icon: <FaDatabase />,
    gradient: "from-pink-400 via-purple-400 to-red-400",
  },
];

const Services = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-6"
      >
        Innovative Solutions, <span className="text-cyan-400">Future Ready</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 max-w-2xl mx-auto mb-16"
      >
        From custom web apps to seamless CMS, we create digital products that
        transform businesses.
      </motion.p>

      {/* Services Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative flex flex-col items-center text-center p-8 bg-gray-900/40 rounded-2xl border border-gray-800 hover:border-cyan-500 transition"
          >
            {/* Icon Circle */}
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl bg-gradient-to-r ${service.gradient} shadow-xl mb-6`}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-3">{service.title}</h3>

            {/* Points */}
            <ul className="space-y-2 text-sm text-gray-300 max-w-xs mx-auto">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2 justify-center">
                  <span className="text-cyan-400">✔</span> {point}
                </li>
              ))}
            </ul>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mt-6 px-5 py-2 bg-cyan-500 text-black rounded-full shadow hover:bg-cyan-400 transition"
            >
              See More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
