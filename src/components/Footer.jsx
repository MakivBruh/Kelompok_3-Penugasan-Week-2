import { Camera, Music, Send } from "lucide-react";

// Komponen Footer — berisi logo, deskripsi, sosial media, dan hak cipta
const Footer = () => {
  return (
    <footer className="w-full border-t border-[#e6e8ea]/70 bg-[#f2f4f6] py-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-14">
        <div className="flex flex-col items-start justify-between gap-6 pb-6 md:flex-row md:items-center">
          {/* Logo + deskripsi */}
          <div className="max-w-md">
            <div className="mb-2 flex items-center gap-2 text-[#006194]">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#cce5ff] text-lg">
                🫧
              </div>
              <span className="text-xl font-bold">LaundryKost</span>
            </div>
            <p className="text-sm text-[#3f4850]">
              Laundry praktis, bersih, dan terjangkau untuk mahasiswa.
            </p>
          </div>

          {/* Sosial media */}
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="https://instagram.com/laundrykost.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#3f4850] transition-colors hover:text-[#006194]"
            >
              <Camera /> @laundrykost.id
            </a>
            <a
              href="https://tiktok.com/@laundrykost"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#3f4850] transition-colors hover:text-[#006194]"
            >
              <Music /> @laundrykost
            </a>
            <a
              href="https://wa.me/6285643429736"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#3f4850] transition-colors hover:text-[#006194]"
            >
              <Send /> WhatsApp
            </a>
          </div>
        </div>

        {/* Hak cipta */}
        <div className="border-t border-[#e0e3e5]/40 pt-4 text-center text-xs text-[#3f4850]">
          © 2026 LaundryKost. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
