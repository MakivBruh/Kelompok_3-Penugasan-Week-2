import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Layanan from "./pages/Layanan";
import Paket from "./pages/Paket";
import Kontak from "./pages/Kontak";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";
import LoadingContext from "./components/LoadingContext";

// Root App — konfigurasi routing menggunakan React Router DOM
// BrowserRouter > Routes > Route sesuai ketentuan Week 2
function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(location.pathname === "/");
  const [progress, setProgress] = useState(14);
  const finishingRef = useRef(false);

  const finishLoading = useCallback(() => {
    if (finishingRef.current) return;
    finishingRef.current = true;
    window.setTimeout(() => {
      setProgress(100);
      window.setTimeout(() => setLoading(false), 280);
    }, 650);
  }, []);

  useEffect(() => {
    if (!loading) return undefined;
    finishingRef.current = false;
    const progressTimer = window.setInterval(() => {
      setProgress((value) => Math.min(92, value + Math.max(1, Math.floor((92 - value) / 9))));
    }, 180);
    // A slow or unreachable model must not prevent access to the site.
    const fallbackTimer = window.setTimeout(finishLoading, 15000);
    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(fallbackTimer);
    };
  }, [loading, finishLoading]);

  return (
    <LoadingContext.Provider value={finishLoading}>
      <Routes>
        {/* MainLayout membungkus semua halaman agar Navbar & Footer konsisten */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="layanan" element={<Layanan />} />
          <Route path="paket" element={<Paket />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {loading && <LoadingScreen progress={progress} />}
    </LoadingContext.Provider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
