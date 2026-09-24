import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IntegratedTechnologies from "../components/IntegratedTechnologies";
import { memo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaBolt, FaShieldAlt, FaCloud } from "react-icons/fa";

// Reusable animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Technologies = () => {
  return (
    <div className="bg-black mt-10 text-white min-h-screen">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Integrated Technologies | Genzeetech Tech Stack & Cloud Solutions</title>
        <meta
          name="description"
          content="Explore Genzeetech's advanced technology stack — React, Node.js, Spring Boot, MongoDB, AWS, and Docker. We build high-performance, secure, and scalable digital solutions."
        />
        <meta
          name="keywords"
          content="Genzeetech Technologies, Web Tech Stack, Cloud Solutions, React, Node.js, Spring Boot, AWS, Docker, MongoDB, Modern Web Development"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://genzeetech.com/technologies" />

        {/* 🌐 Open Graph for Social Preview */}
        <meta property="og:title" content="Integrated Technologies | Genzeetech" />
        <meta
          property="og:description"
          content="Discover Genzeetech’s integrated technology stack powering secure, fast, and cloud-native digital products."
        />
        <meta property="og:image" content="https://genzeetech.com/assets/technologies-banner.webp" />
        <meta property="og:url" content="https://genzeetech.com/technologies" />
        <meta property="og:type" content="website" />

        {/* 🐦 Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Integrated Technologies | Genzeetech" />
        <meta
          name="twitter:description"
          content="Genzeetech leverages React, Node.js, Spring Boot, MongoDB, and AWS to deliver cutting-edge tech solutions."
        />
        <meta name="twitter:image" content="https://genzeetech.com/assets/technologies-banner.webp" />

        {/* 🧠 JSON-LD Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Integrated Technologies - Genzeetech",
            "url": "https://genzeetech.com/technologies",
            "description": "Genzeetech’s integrated technology stack includes React, Node.js, Spring Boot, MongoDB, and AWS, delivering scalable and secure applications.",
            "publisher": {
              "@type": "Organization",
              "name": "Genzeetech",
              "url": "https://genzeetech.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://genzeetech.com/assets/Logo.webp"
              }
            },
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Frontend Technologies",
                  "description": "React, Tailwind, and Framer Motion for interactive UI."
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Backend Technologies",
                  "description": "Node.js, Java, and Spring Boot for robust APIs."
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Database Systems",
                  "description": "MongoDB and SQL for secure, scalable data storage."
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Cloud & DevOps",
                  "description": "AWS, Docker, and CI/CD pipelines for deployment automation."
                }
              ]
            }
          }
        `}</script>
      </Helmet>

      <Navbar />

      {/* ✅ Hero Section */}
      <section className="relative text-center py-24 px-6 md:px-16 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-10"></div>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Integrated <span className="text-cyan-400">Technologies</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-gray-400 max-w-3xl mx-auto text-lg"
        >
          We harness the power of world-class frameworks, backend systems, and cloud
          infrastructure to create fast, scalable, and future-ready digital solutions.
        </motion.p>
      </section>

      {/* ✅ Integrated Technologies Grid */}
      <IntegratedTechnologies />

      {/* ✅ Why These Technologies */}
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-10"
        >
          Why Our <span className="text-cyan-400">Tech Stack?</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <FaBolt className="text-cyan-400 text-4xl mb-4 mx-auto" />,
              title: "High Performance",
              desc: "Optimized for speed and responsiveness to deliver seamless user experiences.",
            },
            {
              icon: <FaShieldAlt className="text-green-400 text-4xl mb-4 mx-auto" />,
              title: "Secure & Reliable",
              desc: "Built with best practices ensuring your data and applications are safe.",
            },
            {
              icon: <FaCloud className="text-purple-400 text-4xl mb-4 mx-auto" />,
              title: "Cloud Powered",
              desc: "Scalable, cloud-native solutions that grow with your business.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-gray-900 rounded-xl shadow-lg"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Integration Workflow */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-gray-900 to-black">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-12"
        >
          Our <span className="text-cyan-400">Integration Workflow</span>
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
          {[
            { title: "Frontend", desc: "Interactive UIs with React & Tailwind." },
            { title: "Backend", desc: "Powered by Node.js, Java & Spring Boot." },
            { title: "Database", desc: "MongoDB & SQL for scalable data." },
            { title: "Cloud", desc: "AWS & Docker for reliability and uptime." },
          ].map((step, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -4 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
            >
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ CTA */}
      <section className="py-20 px-6 md:px-16 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Ready to Build with <span className="text-cyan-400">Next-Gen Tech?</span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Let’s transform your ideas into scalable and future-proof digital solutions.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow hover:bg-cyan-400 transition"
        >
          Get in Touch
        </motion.a>
      </section>

      <Footer />
    </div>
  );
};

export default memo(Technologies);
