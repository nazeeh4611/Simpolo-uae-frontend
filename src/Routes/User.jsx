import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

/* Layout */
import { Navbar } from "../Pages/Layout/Navbar";
import { Footer } from "../Pages/Layout/Footer";

/* Pages */
import HomePage from "../Pages/User/Home";
import About from "../Pages/User/About";
import Services from "../Pages/User/Services";
import Portfolio from "../Pages/User/Portfolio";
import Gallery from "../Pages/User/Gallery";
import Contact from "../Pages/User/Contact";
import Maintenance from "../Pages/Maintenance";

/* ===============================
   TOGGLE MAINTENANCE MODE HERE
================================= */
const MAINTENANCE_MODE = true; // 🔴 true = maintenance ON, false = site LIVE

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function UserRoutes() {
  /* 🔒 FORCE MAINTENANCE PAGE */
  if (MAINTENANCE_MODE) {
    return <Maintenance />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7F0] to-white overflow-x-hidden">
      <ScrollToTop />
      <Navbar />

      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "linear-gradient(135deg, #2C1C10 0%, #3D2817 100%)",
            color: "#fff",
            border: "1px solid rgba(212, 175, 55, 0.2)",
          },
          success: {
            iconTheme: {
              primary: "#D4AF37",
              secondary: "#2C1C10",
            },
          },
        }}
      />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* Optional direct access */}
        <Route path="/maintenance" element={<Maintenance />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default UserRoutes;
