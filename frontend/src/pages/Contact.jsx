import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

// ✅ Helper: Timeout Wrapper
const fetchWithTimeout = (url, options, timeout = 10000) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("⏰ Request Timeout")), timeout)
    ),
  ]);
};

const Contact = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const selectedPlan = params.get("plan");
  const duration = params.get("duration");

  // ✅ Get API URL from .env
  const API_URL = import.meta.env.VITE_API_URL;
  const MODE = import.meta.env.MODE;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlan && duration) {
      const durationLabel =
        duration === "monthly"
          ? "Monthly"
          : duration === "quarterly"
          ? "Quarterly"
          : "Annual";

      setFormData((prev) => ({
        ...prev,
        message: `I am interested in the ${selectedPlan} Plan (${durationLabel}).`,
      }));
    }
  }, [selectedPlan, duration]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { ...formData };
    if (!payload.name || !payload.email || !payload.message) return;

    try {
      setSubmitting(true);

      const res = await fetchWithTimeout(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Server Error: ${res.status} - ${errorText}`);
      }

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Unexpected response from server.");
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("Failed to send message. Please try again later.");
      setSubmitted(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative bg-black text-white min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent blur-3xl"></div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-2xl p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl"
      >
        <h1 className="text-4xl font-bold mb-4 text-center">
          Get in <span className="text-cyan-400">Touch</span>
        </h1>
        <p className="text-gray-400 mb-10 text-center">
          We’d love to hear from you. Fill out the form and we’ll respond as soon as possible.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-700 focus:border-cyan-400 text-white outline-none"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-700 focus:border-cyan-400 text-white outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Message / Project Details */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Message / Project Details
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-700 focus:border-cyan-400 text-white outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={submitting}
            type="submit"
            className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold shadow-lg hover:shadow-cyan-500/30 transition disabled:opacity-70"
          >
            {submitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>

      {/* Success Overlay */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl text-center max-w-md"
            >
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">
                🎉 Message Sent!
              </h2>
              <p className="text-gray-300 mb-6">
                Thank you for reaching out. We’ll get back to you shortly.
              </p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-6 py-2 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
                onClick={() => setSubmitted(false)}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
