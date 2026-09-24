import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; 

// ✅ Toast
const Toast = ({ message, onClose }) => (
  <motion.div
    initial={{ y: 60, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 60, opacity: 0 }}
    transition={{ type: "spring", stiffness: 120, damping: 15 }}
    className="fixed bottom-6 right-6 bg-cyan-500 text-black px-6 py-3 rounded-lg shadow-lg font-semibold flex items-center z-50"
  >
    {message}
    <button
      onClick={onClose}
      aria-label="Close toast"
      className="ml-4 text-black font-bold hover:text-gray-800"
    >
      ✖
    </button>
  </motion.div>
);

const plans = {
  monthly: [
    { id: 1, title: "Starter", price: "$29", subtitle: "/month", features: ["Basic UI/UX Design", "Landing Page Development", "Email Support"] },
    { id: 2, title: "Professional", price: "$59", subtitle: "/month", features: ["Full Web App Development", "CMS Integration", "Priority Support"], popular: true },
    { id: 3, title: "Enterprise", price: "$99", subtitle: "/month", features: ["Custom Web Solutions", "Dedicated Developer", "24/7 Support"] },
  ],
  quarterly: [
    { id: 1, title: "Starter", price: "$79", subtitle: "/3 months", features: ["Basic UI/UX Design", "Landing Page Development", "Email Support"], save: "Save 10%" },
    { id: 2, title: "Professional", price: "$149", subtitle: "/3 months", features: ["Full Web App Development", "CMS Integration", "Priority Support"], popular: true, save: "Save 15%" },
    { id: 3, title: "Enterprise", price: "$249", subtitle: "/3 months", features: ["Custom Web Solutions", "Dedicated Developer", "24/7 Support"], save: "Save 20%" },
  ],
  annual: [
    { id: 1, title: "Starter", price: "$249", subtitle: "/year", features: ["Basic UI/UX Design", "Landing Page Development", "Email Support"], save: "Save 20%" },
    { id: 2, title: "Professional", price: "$499", subtitle: "/year", features: ["Full Web App Development", "CMS Integration", "Priority Support"], popular: true, save: "Save 25%" },
    { id: 3, title: "Enterprise", price: "$799", subtitle: "/year", features: ["Custom Web Solutions", "Dedicated Developer", "24/7 Support"], save: "Save 30%" },
  ],
};

const Pricing = () => {
  const [planType, setPlanType] = useState("monthly");
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  // ✅ Plan choose handler
  const handleChoosePlan = (planTitle) => {
    const planLabel =
      planType === "monthly"
        ? "Monthly"
        : planType === "quarterly"
        ? "Quarterly"
        : "Annual";

    setToast(`${planTitle} (${planLabel}) Selected 🎉 Redirecting...`);

    setTimeout(() => {
      navigate(
        `/contact?plan=${encodeURIComponent(planTitle)}&duration=${planType}`
      );
    }, 1000);

    setTimeout(() => setToast(null), 3000);
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6">
        Flexible <span className="text-cyan-400">Pricing Plans</span>
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        Choose a plan that fits your needs. Monthly, Quarterly, or Annual options available.
      </p>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-14">
        {["monthly", "quarterly", "annual"].map((type) => (
          <motion.button
            key={type}
            onClick={() => setPlanType(type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              planType === type
                ? "bg-cyan-500 text-black shadow-lg"
                : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Pricing Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={planType}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10"
        >
          {(plans[planType] || []).map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl p-8 text-white backdrop-blur-lg bg-white/10 border border-gray-700 hover:border-cyan-400 transition shadow-xl"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <p className="text-4xl font-extrabold mb-1">{plan.price}</p>
              <p className="text-gray-400 mb-6">{plan.subtitle}</p>

              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-cyan-400">✔</span> {feature}
                  </li>
                ))}
              </ul>

              {/* Choose Plan Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleChoosePlan(plan.title)}
                className="mt-8 w-full px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow hover:bg-cyan-400 transition"
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toast && <Toast message={toast} onClose={() => setToast(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default Pricing;
