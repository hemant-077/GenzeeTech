import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "A standard business website usually takes 4-6 weeks. Large or complex projects may take longer depending on the features.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes! We provide maintenance and support packages to keep your website secure, updated, and optimized.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We modernize old websites with fresh UI/UX designs, performance improvements, and better SEO.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Our stack includes React, Node.js, Three.js, Next.js, Java, Spring Boot, TailwindCSS, and cloud solutions like AWS, Firebase, and Vercel.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-black text-white py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent blur-3xl pointer-events-none"></div>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6 relative z-10">
        Got Questions? <span className="text-cyan-400">We’ve Got Answers</span>
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 relative z-10">
        Explore our most frequently asked questions. Click to reveal answers with
        smooth animations.
      </p>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
            >
              <span className="text-lg md:text-xl font-medium">{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-cyan-400"
              >
                <FaChevronDown />
              </motion.span>
            </button>

            {/* Answer (AnimatePresence for smooth mount/unmount) */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="px-5 overflow-hidden text-gray-300 text-sm md:text-base"
                >
                  <div className="py-3">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
