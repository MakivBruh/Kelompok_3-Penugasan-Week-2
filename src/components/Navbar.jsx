import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import RubberSegment from "./RubberSegment";
import Magnet from "./Magnet";
import { ArrowUpRight } from "lucide-react";

// Komponen Navbar — island-style floating navbar (React Bits inspired)
// State: mobileOpen untuk membuka/menutup menu di layar kecil
// Efek: scrolled untuk mengubah style saat di-scroll
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tutup menu mobile saat link diklik
  const handleLinkClick = () => setMobileOpen(false);

  const navLinks = [
    { to: "/", label: "Beranda" },
    { to: "/layanan", label: "Layanan" },
    { to: "/paket", label: "Paket" },
    { to: "/kontak", label: "Kontak" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`
          w-full max-w-3xl transition-all duration-500 ease-out
          ${
            scrolled
              ? "rounded-2xl bg-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl border border-[#e0e3e5]/60 px-4 py-2"
              : "rounded-2xl bg-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.04)] backdrop-blur-md border border-[#e0e3e5]/40 px-6 py-3"
          }
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-[#006194] group"
            onClick={handleLinkClick}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#cce5ff] text-[#006194] shadow-sm text-lg transition-transform group-hover:scale-110 group-hover:rotate-12">
              🫧
            </div>
            <span className="text-lg font-bold leading-tight tracking-tight">
              LaundryKost
            </span>
          </NavLink>

          {/* Navigasi desktop */}
          <div className="hidden lg:flex" aria-label="Navigasi utama">
            <RubberSegment
              items={navLinks.map((link) => ({
                value: link.to,
                label: link.label,
              }))}
              value={location.pathname}
              onChange={(path) => navigate(path)}
              size="md"
              radius={12}
              inset={3}
              trackColor="rgba(236, 238, 240, 0.88)"
              thumbColor="#ffffff"
              textColor="#3f4850"
              activeTextColor="#006194"
              className="navbar-segment"
              aria-label="Navigasi utama"
            />
          </div>

          <div className="flex items-center gap-2">
            {/* Tombol CTA desktop */}
            <Magnet
              padding={36}
              magnetStrength={4}
              wrapperClassName="hidden lg:inline-block"
              innerClassName="inline-block"
            >
              <a
                href="https://wa.me/6285643429736"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#006194] via-[#007bb9] to-[#00685f] px-4 py-2 text-sm font-bold text-white shadow-[0_8px_20px_rgba(0,97,148,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(0,97,148,0.3)] active:scale-95"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Pesan Laundry</span>
                <ArrowUpRight
                  className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </Magnet>

            {/* Tombol hamburger mobile */}
            <button
              className="flex lg:hidden h-8 w-8 items-center justify-center rounded-lg bg-[#eceef0] text-[#006194] transition-colors hover:bg-[#cce5ff]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            >
              <span
                className="text-lg font-bold transition-transform duration-200"
                style={{
                  transform: mobileOpen ? "rotate(90deg)" : "rotate(0deg)",
                }}
              >
                {mobileOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>
        </div>

        {/* Menu mobile — ditampilkan bersyarat saat mobileOpen true */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileOpen
              ? "max-h-[300px] opacity-100 mt-2"
              : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="border-t border-[#e0e3e5]/60 pt-2 pb-1">
            <nav className="flex w-full min-w-0 flex-col gap-1" aria-label="Navigasi mobile">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-[#cce5ff] text-[#006194]"
                        : "text-[#191c1e] hover:bg-[#eceef0]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href="https://wa.me/6285643429736"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-1 box-border flex w-full max-w-[220px] min-w-0 self-center items-center justify-center gap-1.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#006194] via-[#007bb9] to-[#00685f] px-3 py-2 text-center text-xs font-bold text-white shadow-md transition-all active:scale-[0.98]"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Pesan Laundry</span>
                <ArrowUpRight
                  className="relative h-4 w-4"
                  aria-hidden="true"
                />
              </a>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
