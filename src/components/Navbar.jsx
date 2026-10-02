import { useState } from "react";
import { NavLink } from "react-router-dom";

// Komponen Navbar — responsive, sticky, dengan hamburger mobile
// State: mobileOpen untuk membuka/menutup menu di layar kecil
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Tutup menu mobile saat link diklik
  const handleLinkClick = () => setMobileOpen(false);

  const navLinks = [
    { to: "/", label: "Beranda" },
    { to: "/layanan", label: "Layanan" },
    { to: "/paket", label: "Paket" },
    { to: "/kontak", label: "Kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e0e3e5]/60 bg-white/80 px-4 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-md lg:px-14">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">

        {/* Logo kiri */}
        <NavLink to="/" className="flex items-center gap-2 text-[#006194]" onClick={handleLinkClick}>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#cce5ff] text-[#006194] shadow-sm text-xl">
            🫧
          </div>
          <span className="text-xl font-bold leading-tight tracking-tight">LaundryKost</span>
        </NavLink>

        {/* Navigasi desktop */}
        <nav className="hidden items-center gap-6 sm:flex" aria-label="Navigasi utama">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors duration-150 ${
                  isActive ? "text-[#007bb9]" : "text-[#006194] hover:text-[#007bb9]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Tombol CTA desktop */}
          <a
            href="https://wa.me/6285643429736"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-[#006194] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#007bb9] active:scale-95"
          >
            Pesan Laundry
          </a>

          {/* Tombol hamburger mobile */}
          <button
            className="flex sm:hidden h-9 w-9 items-center justify-center rounded-lg bg-[#eceef0] text-[#006194]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          >
            {/* Conditional rendering: tampilkan ikon X atau hamburger */}
            {mobileOpen ? (
              <span className="text-xl font-bold">✕</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile — ditampilkan bersyarat saat mobileOpen true */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-[#e0e3e5]/60 bg-white/95 px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Navigasi mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
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
              className="mt-2 block rounded-xl bg-[#006194] px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Pesan Laundry
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
