// 📁 src/components/BlogSection.jsx
import { memo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import blogs from "../data/blogData";

const BlogSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative mt-10 bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
      {/* ✅ Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 blur-[140px] rounded-full"></div>

      {/* ✅ Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Latest <span className="text-cyan-400">Insights</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Explore expert articles, industry updates, and growth-driven tech stories from GenZeeTech.
        </p>
      </motion.div>

      {/* ✅ Blog Grid */}
      <div className="relative z-10 grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogs.slice(0, 6).map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.03 }}
            className="group bg-gradient-to-b from-gray-900 via-gray-950 to-black border border-gray-800/60 
                       rounded-2xl shadow-xl overflow-hidden hover:shadow-cyan-500/10 transition-all duration-300"
          >
            {/* 🖼️ Blog Image */}
            <div className="overflow-hidden">
              <motion.img
                src={blog.img}
                alt={blog.title}
                loading="lazy"
                className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* 📄 Blog Content */}
            <div className="p-6 flex flex-col justify-between h-[230px]">
              <div>
                <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3">{blog.desc}</p>
              </div>

              {/* 🔗 Read More */}
              <button
                onClick={() => navigate(`/blog/${blog.id}`, { state: blog })}
                className="mt-4 text-cyan-400 font-medium hover:underline self-start"
              >
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <button
          onClick={() => navigate("/blogs")}
          className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow-md hover:bg-cyan-400 transition"
        >
          View All Blogs
        </button>
      </motion.div>
    </section>
  );
};

export default memo(BlogSection);
