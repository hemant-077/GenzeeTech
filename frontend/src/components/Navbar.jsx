import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/Logo.webp"; // ✅ GenZeeTech Logo

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Technologies", path: "/technologies" },
    { name: "Blogs", path: "/blogs" },
  ];

  // ✅ Scroll effect
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ✅ Navbar Animation Variants
  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15, duration: 0.6 },
    },
  };

  // ✅ Drawer Animation (Right Slide for Mobile)
  const drawerVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-screen top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-2 shadow-lg border-b border-gray-800"
          : "bg-transparent py-3"
      }`}
    >
      {/* ✅ Navbar Container */}
      <div className="h-20 flex justify-between items-center px-4  sm:px-6 md:px-10 lg:px-16 ">

        {/* ✅ Logo */}
        <Link to="/" className="flex items-center z-50">
          <img
            src={logo}
            alt="GenZeeTech Logo"
            className="object-contain hover:scale-105 transition-transform duration-300"
            style={{
              height: scrolled ? "85px" : "100px", // 🔼 Increased logo size
              filter: "brightness(100%)",
            }}
          />
        </Link>

        {/* ✅ Desktop Menu */}
        <LayoutGroup>
          <ul className="hidden lg:flex gap-10 text-[16px] font-medium justify-center flex-1">
            {navLinks.map((link) => (
              <motion.li
                key={link.path}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
              >
                <Link
                  to={link.path}
                  className={`transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeUnderline"
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-cyan-400 shadow-lg shadow-cyan-500/40"
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </LayoutGroup>

        {/* ✅ Contact Button (Desktop Only) */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-auto hidden lg:block"
        >
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 rounded-lg font-semibold text-black hover:shadow-lg hover:shadow-cyan-500/30 transition"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* ✅ Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
          className="lg:hidden text-3xl text-white ml-auto mt-1"
        >
          <HiMenuAlt3 />
        </button>

        {/* ✅ Mobile Drawer (Right Slide Animation) */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 w-3/4 sm:w-2/3 h-screen bg-black/95 backdrop-blur-md border-l border-gray-800 z-50 flex flex-col px-8 pt-20 shadow-2xl rounded-l-2xl"
            >
              {/* ❌ Close Button */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close Menu"
                className="absolute top-5 right-5 text-2xl text-gray-400 hover:text-white"
              >
                <HiX />
              </button>

              {/* ✅ Nav Links */}
              <div className="flex flex-col items-start justify-start pt-10 space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`block text-lg transition-colors duration-300 ${
                      location.pathname === link.path
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* ✅ CTA inside Drawer */}
              <div className="mt-auto mb-10">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg font-semibold text-black text-center hover:shadow-lg hover:shadow-cyan-500/30 transition"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
