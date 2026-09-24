import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/Logo.webp"; // ✅ apna logo yaha import karo

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-14 px-6 md:px-16">
      <div className="grid md:grid-cols-4 gap-8">

        {/* ✅ Company Info + Logo (Only Image, Big Size) */}
        <div>
          <div className="flex items-center justify-start mb-6">
            <img
              src={logo}
              alt="GenZeeTech Logo"
              className="h-20 sm:h-34 w-auto object-contain transition-transform duration-500 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]"
            />
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Innovating, building, and scaling digital solutions to help
            businesses grow in the modern world.
          </p>
        </div>

        {/* ✅ Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-cyan-400">Home</a></li>
            <li><a href="/about" className="hover:text-cyan-400">About Us</a></li>
            <li><a href="/services" className="hover:text-cyan-400">Services</a></li>
            <li><a href="/case-studies" className="hover:text-cyan-400">Case Studies</a></li>
            <li><a href="/contact" className="hover:text-cyan-400">Contact</a></li>
            <li><a href="blogs" className="hover:text-cyan-400">Blogs</a></li>
          </ul>
        </div>

        {/* ✅ Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-cyan-400 cursor-pointer">UI/UX Design</li>
            <li className="hover:text-cyan-400 cursor-pointer">Web App Development</li>
            <li className="hover:text-cyan-400 cursor-pointer">CMS Development</li>
            <li className="hover:text-cyan-400 cursor-pointer">Digital Marketing</li>
            <li className="hover:text-cyan-400 cursor-pointer">Cloud Solutions</li>
          </ul>
        </div>

        {/* ✅ Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm">📧 support@genzeetech.com</p>
          <p className="text-sm">📞 +91 8445357454</p>
          <div className="flex gap-4 mt-4">
            {/* <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 transition">
              <FaInstagram />
            </a> */}
          </div>
        </div>
      </div>

      {/* ✅ Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} GenZeeTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
