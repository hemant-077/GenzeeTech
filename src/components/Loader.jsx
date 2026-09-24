import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
      <motion.div
        className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      ></motion.div>
      <p className="text-gray-400 mt-4">Loading...</p>
    </div>
  );
};

export default Loader;
