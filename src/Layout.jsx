import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar har page pe top me hoga */}
      <Navbar />

      {/* Ye jagah pages load hongi */}
      <main className="flex-1">
        <Outlet />
      </main>

      
      <Footer />
    </div>
  );
};

export default Layout;
