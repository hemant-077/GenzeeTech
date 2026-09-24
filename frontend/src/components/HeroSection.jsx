import { motion } from "framer-motion";
import { FaPlayCircle, FaLaptopCode, FaPaintBrush, FaDatabase } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center text-white bg-gradient-to-b from-gray-900 via-blue-900 to-black px-6 overflow-hidden">
      {/* ✅ Background Hero Image (Optional) */}
      {/* Agar tumhe image chahiye to ye use karo */}
      {/* 
      <img
        src="/assets/hero.webp"
        alt="Hero Background"
        loading="eager"
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      */}

      {/* ✅ Decorative Orbs with Delay (LCP Optimize) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute top-20 left-10 w-40 h-40 bg-cyan-500 rounded-full mix-blend-screen blur-3xl will-change-transform"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-20 right-10 w-60 h-60 bg-purple-600 rounded-full mix-blend-screen blur-3xl will-change-transform"
      />

      {/* ✅ Tagline */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mb-6 px-5 py-2 rounded-full border border-cyan-400/40 bg-white/5 text-sm tracking-wide"
      >
        #No 1 App Development Software Agency
      </motion.div>

      {/* ✅ Heading (Text Render Priority) */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Innovate, Build, Scale – <br />
        <span className="text-white">Your Vision</span>, Our{" "}
        <span className="text-gray-200">Code</span>
      </motion.h1>

      {/* ✅ Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 mt-6 max-w-2xl text-lg text-gray-300"
      >
        We craft cutting-edge web solutions, turning your ideas into powerful
        digital experiences that drive{" "}
        <span className="text-cyan-400">growth</span>,{" "}
        <span className="text-purple-400">efficiency</span>, and{" "}
        <span className="text-pink-400">success</span>.
      </motion.p>

      {/* ✅ CTA Buttons */}
      <div className="relative z-10 flex gap-4 mt-10">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:bg-cyan-400 transition"
        >
          Get Started
        </motion.a>
        {/* <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#demo"
          className="flex items-center gap-2 px-6 py-3 border border-gray-500 rounded-lg hover:bg-white/10 transition"
        >
          <FaPlayCircle className="text-cyan-400 text-lg" /> Watch Demo
        </motion.a> */}
      </div>

      {/* ✅ Services Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 flex gap-8 mt-14 text-sm flex-wrap justify-center"
      >
        <span className="flex items-center gap-2 hover:scale-105 transition">
          <FaPaintBrush className="text-orange-400" /> UI/UX Design
        </span>
        <span className="flex items-center gap-2 hover:scale-105 transition">
          <FaLaptopCode className="text-cyan-400" /> Web App Development
        </span>
        <span className="flex items-center gap-2 hover:scale-105 transition">
          <FaDatabase className="text-green-400" /> CMS Development
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
