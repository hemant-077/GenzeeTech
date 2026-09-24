import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Technologies from "./pages/Technologies";
import Layout from "./Layout";
import BlogPage from "./pages/BlogPage";
import BlogSection from "./components/BlogSection.jsx";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
         <Route path="/technologies" element={<Technologies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<BlogSection />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="*" element={<NotFound />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
