import { memo } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    role: "CEO, Fashion Retailer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The team at Devop exceeded our expectations. Their professionalism and creativity brought our vision to life seamlessly.",
  },
  {
    id: 2,
    name: "Daniel Matthew",
    role: "Founder, Startup Inc.",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    review:
      "Our startup scaled rapidly thanks to their innovative solutions. Highly recommend them for any growing business.",
  },
  {
    id: 3,
    name: "Sophia Williams",
    role: "Marketing Head, Tech Solutions",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "They delivered a user-friendly, scalable web application on time. Truly a reliable partner for digital success.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        What Our Clients Say
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        Hear from businesses that trusted us to deliver top-notch solutions.
      </p>

      {/* Testimonial Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {/* ✅ Lazy load + fixed size */}
              <img
                src={client.img}
                alt={client.name}
                loading="lazy"
                width="56"
                height="56"
                className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400"
              />
              <div>
                <h4 className="text-lg font-semibold">{client.name}</h4>
                <p className="text-sm text-gray-400">{client.role}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm italic">“{client.review}”</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ✅ Prevent unnecessary re-renders
export default memo(Testimonials);
