// 📁 src/pages/BlogPage.jsx
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import blogs from "../data/blogData";

const BlogPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // 🧩 Find current blog
  const blog = blogs.find((b) => b.id === parseInt(id));
  const relatedBlogs = blogs.filter((b) => b.id !== blog?.id).slice(0, 2);

  // 🚫 If blog not found
  if (!blog) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
        <p className="text-lg mb-4">Blog not found 😢</p>
        <button
          onClick={() => navigate("/")}
          className="bg-cyan-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="bg-black text-white min-h-screen mt-10 py-20 px-6 md:px-16">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>{`${blog.title} | Genzeetech Blog`}</title>
        <meta name="description" content={blog.desc} />
        <meta name="keywords" content={`${blog.title}, Genzeetech, Web Development, App Development, Blog`} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.desc} />
        <meta property="og:image" content={blog.img} />
        <meta property="og:url" content={`https://genzeetech.com/blog/${blog.id}`} />
        <meta property="og:type" content="article" />
        <meta name="author" content="Genzeetech" />
        <link rel="canonical" href={`https://genzeetech.com/blog/${blog.id}`} />

        {/* 🧩 Schema Markup (JSON-LD for Google Rich Snippets) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${blog.title}",
            "image": "${blog.img}",
            "author": {
              "@type": "Organization",
              "name": "Genzeetech"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Genzeetech",
              "logo": {
                "@type": "ImageObject",
                "url": "https://genzeetech.com/logo.webp"
              }
            },
            "datePublished": "${blog.date}",
            "description": "${blog.desc}"
          }
        `}
        </script>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >
        {/* 🔙 Back Button */}
        <button
          onClick={() => (window.history.length > 2 ? navigate(-1) : navigate("/blogs"))}
          className="text-cyan-400 hover:underline mb-10 flex items-center gap-2 text-lg"
        >
          ← Back to Blogs
        </button>

        {/* 🖼️ Hero Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative mb-12"
        >
          <img
            src={blog.img}
            alt={`${blog.title} - Genzeetech Blog`}
            loading="lazy"
            className="w-full h-[420px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-3xl"></div>
        </motion.div>

        {/* 🧠 Title & Date */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-cyan-400">
            {blog.title}
          </h1>
          <p className="text-gray-400 italic text-lg">{blog.date}</p>
        </div>

        {/* 📝 Blog Content */}
        <article
          className="prose prose-invert prose-lg md:prose-xl max-w-none leading-relaxed text-gray-200
                     prose-headings:text-cyan-400 prose-a:text-cyan-300
                     prose-strong:text-white prose-li:marker:text-cyan-400
                     prose-blockquote:border-l-cyan-400 prose-blockquote:text-gray-300
                     prose-img:rounded-2xl prose-img:shadow-xl
                     prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></article>

        {/* 🧭 Previous / Next Blog Navigation */}
        <div className="mt-16 border-t border-gray-800 pt-8 flex justify-between items-center">
          <button
            onClick={() => navigate(`/blog/${blog.id - 1}`)}
            disabled={blog.id === 1}
            className="text-cyan-400 hover:underline disabled:text-gray-600 disabled:cursor-not-allowed"
          >
            ← Previous Blog
          </button>

          <button
            onClick={() => navigate(`/blog/${blog.id + 1}`)}
            disabled={blog.id === blogs.length}
            className="text-cyan-400 hover:underline disabled:text-gray-600 disabled:cursor-not-allowed"
          >
            Next Blog →
          </button>
        </div>
      </motion.div>

      {/* 🧩 Related Blogs Section */}
      {relatedBlogs.length > 0 && (
        <div className="max-w-6xl mx-auto mt-24">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Related <span className="text-cyan-400">Blogs</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {relatedBlogs.map((b, index) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden 
                           hover:scale-[1.03] transition-transform duration-300 border border-gray-800"
              >
                <img
                  src={b.img}
                  alt={`${b.title} - Genzeetech Blog`}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-400 mb-2">{b.date}</p>
                  <h3 className="text-xl font-semibold mb-3 text-white hover:text-cyan-400 transition">
                    {b.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm line-clamp-3">{b.desc}</p>
                  <button
                    onClick={() => navigate(`/blog/${b.id}`)}
                    className="text-cyan-400 font-medium hover:underline"
                  >
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogPage;
