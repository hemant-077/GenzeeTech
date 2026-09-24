import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Services from "./Services";
import CaseStudies from "./CaseStudies";
import Pricing from "../components/Pricing";
import BlogSection from "../components/BlogSection.jsx";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

import VerticalNavbar from "../components/VerticalNavbar"; // ✅ add karo


const Home = () => {
  return (
    <div className="bg-black scroll-none overflow-hidden text-white relative">
      {/* ✅ Right side scroll-spy navbar */}
      <VerticalNavbar />

      <Navbar />

      <section id="home">
        <HeroSection />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="case-studies">
        <CaseStudies />
      </section>

      <section id="pricing">
        <Pricing />
      </section>


      <section id="blog">
        <BlogSection />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      {/* <section id="contact">
        <Footer />
      </section> */}
    </div>
  );
};

export default Home;
