import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Layout utama — Navbar + <Outlet /> + Footer
// Semua halaman menggunakan layout ini agar Navbar & Footer konsisten
const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f9fb]">
      <Navbar />
      {/* Outlet merender konten halaman aktif */}
      <main className="flex-1 w-full bg-[#f7f9fb]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
