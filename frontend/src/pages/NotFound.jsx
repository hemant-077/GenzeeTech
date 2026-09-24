import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 sm:px-6">
      {/* 404 Animated Number */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center"
      >
        404
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-center"
      >
        Oops! Page Not Found
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-gray-400 text-sm sm:text-base text-center max-w-sm sm:max-w-md mb-6"
      >
        The page you’re looking for doesn’t exist or has been moved.  
        Let’s get you back on track!
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6, type: "spring" }}
        className="w-full flex justify-center"
      >
        <Link
          to="/"
          className="px-5 py-2 sm:px-6 sm:py-3 bg-cyan-500 text-black font-medium rounded-full shadow-lg hover:bg-cyan-400 transition text-sm sm:text-base"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
