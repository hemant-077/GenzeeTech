import { memo } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaRocket,
  FaCogs,
  FaClock,
} from "react-icons/fa";

const team = [
  { name: "Jane Doe", role: "CEO & Founder", img: "https://randomuser.me/api/portraits/women/45.jpg" },
  { name: "John Smith", role: "Lead Developer", img: "https://randomuser.me/api/portraits/men/46.jpg" },
  { name: "Sophia Lee", role: "UI/UX Designer", img: "https://randomuser.me/api/portraits/women/47.jpg" },
  { name: "David Kim", role: "Cloud Engineer", img: "https://randomuser.me/api/portraits/men/48.jpg" },
];

const journey = [
  { year: "2018", event: "Founded as a small startup with 3 team members." },
  { year: "2019", event: "Delivered our first enterprise-level project." },
  { year: "2021", event: "Expanded to global clients across 5 countries." },
  { year: "2023", event: "Recognized among top software agencies in Asia." },
  { year: "2025", event: "Over 200+ successful projects delivered worldwide." },
];

const About = () => {
  return (
    <div className="bg-gradient-to-b from-black mt-10 via-gray-900 to-black text-white min-h-screen py-20 px-6 md:px-16">

      {/* ✅ SEO Meta + Schema */}
      <Helmet>
        <title>About Genzeetech | Web & App Development Experts</title>
        <meta
          name="description"
          content="Learn about Genzeetech — a leading web and app development company delivering innovative, secure, and high-performance digital solutions worldwide."
        />
        <meta
          name="keywords"
          content="Genzeetech, About Genzeetech, Web Development Company, App Development, Software Development, IT Solutions, Cloud Services, Digital Agency"
        />
        <meta property="og:title" content="About Genzeetech | Web & App Development Experts" />
        <meta
          property="og:description"
          content="Discover Genzeetech’s mission, values, and expertise in web and mobile app development. Trusted by global clients for excellence and innovation."
        />
        <meta property="og:image" content="https://genzeetech.com/assets/about-banner.webp" />
        <meta property="og:url" content="https://genzeetech.com/about" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://genzeetech.com/about" />

        {/* ✅ JSON-LD Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "url": "https://genzeetech.com/about",
            "name": "About Genzeetech",
            "description": "Genzeetech is a global web and app development company providing digital transformation services.",
            "publisher": {
              "@type": "Organization",
              "name": "Genzeetech",
              "logo": {
                "@type": "ImageObject",
                "url": "https://genzeetech.com/assets/Logo.webp"
              }
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "Genzeetech",
              "sameAs": [
                "https://genzeetech.com",
                "https://www.linkedin.com/company/genzeetech",
                "https://github.com/hemant-077"
              ]
            }
          }
          `}
        </script>
      </Helmet>

      {/* 🎯 Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-6"
      >
        About <span className="text-cyan-400">Genzeetech</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
        className="text-gray-300 max-w-3xl mx-auto text-center mb-16"
      >
        Genzeetech is a global <strong className="text-cyan-400">web and app development</strong> company, helping startups and enterprises grow through innovative digital transformation and scalable technology.
      </motion.p>

      {/* 🚀 Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">
        {[
          {
            title: "Our Mission",
            text: "To empower businesses with future-ready, scalable, and impactful digital solutions that drive innovation and growth.",
          },
          {
            title: "Our Vision",
            text: "To become a global leader in web and app development by transforming ideas into powerful digital experiences.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-2xl shadow"
          >
            <h3 className="text-2xl font-semibold mb-3 text-cyan-400">{item.title}</h3>
            <p className="text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* 💎 Core Values */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FaHandshake className="text-cyan-400 text-4xl mb-4 mx-auto" />, title: "Integrity", desc: "We build trust through transparency and accountability." },
            { icon: <FaLightbulb className="text-yellow-400 text-4xl mb-4 mx-auto" />, title: "Innovation", desc: "We embrace new technologies to deliver modern solutions." },
            { icon: <FaShieldAlt className="text-green-400 text-4xl mb-4 mx-auto" />, title: "Excellence", desc: "We pursue quality and precision in every project." },
          ].map((v, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition shadow-lg">
              {v.icon}
              <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-gray-400 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📆 Journey */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {journey.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-6 items-center"
            >
              <div className="w-20 text-cyan-400 text-xl font-bold">{item.year}</div>
              <div className="flex-1 bg-gray-800 p-4 rounded-xl shadow">{item.event}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 👥 Team */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition shadow-lg"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-cyan-400"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⭐ Why Choose Us */}
      <section className="mb-20 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <FaRocket className="text-cyan-400 text-4xl mb-4 mx-auto" />, title: "Cutting-Edge Technology", desc: "Modern frameworks and scalable cloud tools for speed and security." },
            { icon: <FaCogs className="text-blue-400 text-4xl mb-4 mx-auto" />, title: "Custom Solutions", desc: "Tailored strategies for startups, enterprises, and digital growth." },
            { icon: <FaClock className="text-purple-400 text-4xl mb-4 mx-auto" />, title: "On-Time Delivery", desc: "Reliable project execution with consistent quality." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:bg-gray-700 transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📩 CTA */}
      <section className="text-center mt-16">
        <h3 className="text-3xl font-bold mb-4">
          Want to Work With <span className="text-cyan-400">Us?</span>
        </h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Partner with us to build digital products that create lasting impact and drive measurable growth.
        </p>
        <a
          href="/contact"
          className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:bg-cyan-400 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default memo(About);
