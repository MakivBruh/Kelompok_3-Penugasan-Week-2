import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useStickyScroll } from "../hooks/useStickyScroll";

// Layout utama — Floating Island Navbar + <Outlet /> + Footer
// Scroll-to-top otomatis saat berpindah rute
// Menggunakan useStickyScroll agar scroll terasa berbobot & tidak terlalu cepat
const MainLayout = () => {
  const { pathname } = useLocation();

  // Aktifkan inertia dampening / sticky scroll
  useStickyScroll(0.6);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Halaman Home memiliki Hero full screen dengan pt-24 sendiri
  const isHome = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f9fb] selection:bg-[#cce5ff] selection:text-[#001d31]">
      <Navbar />
      {/* Outlet merender konten halaman aktif dengan padding sesuai letak island navbar */}
      <main className={`flex-1 w-full bg-[#f7f9fb] ${isHome ? "" : "pt-20"}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
