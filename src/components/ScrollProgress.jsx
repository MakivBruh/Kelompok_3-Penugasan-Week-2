import { useEffect, useState } from "react";

/**
 * Komponen ScrollProgress
 * Menampilkan bar progress tipis dan elegan di bagian paling atas layar
 * yang menunjukkan sejauh mana halaman telah di-scroll.
 */
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 h-1 bg-gradient-to-r from-[#006194] via-[#007bb9] to-[#89f5e7] transition-[width] duration-150 ease-out pointer-events-none"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollProgress;
