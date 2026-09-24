import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaRocket,
  FaServicestack,
  FaBriefcase,
  FaDollarSign,
  FaBlog,
  FaUsers,
  FaQuestion,
  FaEnvelope,
} from "react-icons/fa";

const sections = [
  { id: "home", icon: <FaHome />, label: "Home" },
  { id: "features", icon: <FaRocket />, label: "Features" },
  { id: "services", icon: <FaServicestack />, label: "Services" },
  { id: "case-studies", icon: <FaBriefcase />, label: "Case Studies" },
  { id: "pricing", icon: <FaDollarSign />, label: "Pricing" },
  { id: "blog", icon: <FaBlog />, label: "Blog" },
  { id: "testimonials", icon: <FaUsers />, label: "Testimonials" },
  { id: "faq", icon: <FaQuestion />, label: "FAQ" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
];

const VerticalNavbar = () => {
  const [active, setActive] = useState("home");

  // ✅ Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ✅ Desktop Vertical Navbar */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden mt-10 md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center justify-between h-[85vh]"
      >
        {/* ⚡ Logo or Top Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.3 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="mb-10 text-2xl cursor-pointer select-none"
          aria-hidden="true"
        >
          ⚡
        </motion.div>

        {/* 🔹 Middle Nav */}
        <div className="flex flex-col items-center space-y-10 relative">
          <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600"></div>

          {sections.map((sec, index) => (
            <motion.div
              key={sec.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative flex items-center group"
            >
              {active === sec.id && (
                <motion.div
                  layoutId="orbitGlow"
                  className="absolute -left-4 w-10 h-10 rounded-full bg-cyan-400/20 border border-cyan-400 blur-md"
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                />
              )}

              <motion.button
                aria-label={sec.label} // ✅ Accessibility fix
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
                onClick={() =>
                  document.getElementById(sec.id)?.scrollIntoView({ behavior: "smooth" })
                }
                className={`relative z-10 text-2xl ${
                  active === sec.id
                    ? "text-cyan-400 drop-shadow-[0_0_15px_#22d3ee]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {sec.icon}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ✅ Mobile Floating Navbar */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-50 
                   w-[90%] max-w-md bg-black/70 backdrop-blur-md border border-gray-700 
                   rounded-2xl shadow-lg px-4 py-3 flex justify-around items-center"
      >
        {sections.map((sec) => (
          <motion.button
            key={sec.id}
            aria-label={sec.label} // ✅ Accessibility fix
            whileHover={{ scale: 1.2, y: -3 }}
            onClick={() =>
              document.getElementById(sec.id)?.scrollIntoView({ behavior: "smooth" })
            }
            className={`text-xl ${
              active === sec.id
                ? "text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {sec.icon}
          </motion.button>
        ))}
      </motion.div>
    </>
  );
};

export default VerticalNavbar;
