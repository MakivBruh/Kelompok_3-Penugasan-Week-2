import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Layanan from "./pages/Layanan";
import Paket from "./pages/Paket";
import Kontak from "./pages/Kontak";
import NotFound from "./pages/NotFound";

// Root App — konfigurasi routing menggunakan React Router DOM
// BrowserRouter > Routes > Route sesuai ketentuan Week 2
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout membungkus semua halaman agar Navbar & Footer konsisten */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="layanan" element={<Layanan />} />
          <Route path="paket" element={<Paket />} />
          <Route path="kontak" element={<Kontak />} />
          {/* Route 404 — menangkap semua path yang tidak cocok */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
