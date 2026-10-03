import { useState } from "react";
import Modal from "./Modal";
import ScrollReveal from "./ScrollReveal";

// Komponen Hero — section pertama halaman Home
// Menerima props: title, subtitle, badge
// State: modalOpen untuk membuka modal CTA
const Hero = ({ title, subtitle, badge }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full overflow-hidden px-4 pb-10 pt-6 lg:px-14">
        {/* Dekorasi blur background */}
        <div className="pointer-events-none absolute -left-24 -top-32 h-96 w-96 rounded-full bg-[#dae2fd]/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 rounded-full bg-[#cce5ff]/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* Kolom teks — meluncur dari kiri (fade-right) */}
          <ScrollReveal animation="fade-right" duration={800}>
            <div className="flex flex-col items-start gap-4">
              {/* Badge kecil */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#dae2fd] px-4 py-1.5 text-[#5c647a] shadow-sm">
                <span>✨</span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  {badge || "Solusi Pakaian Bersih Bebas Repot"}
                </span>
              </div>

              {/* Judul utama — props title */}
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#191c1e] lg:text-5xl">
                {title || (
                  <>
                    Laundry Praktis untuk{" "}
                    <span className="text-[#006194]">Anak Kos</span>
                  </>
                )}
              </h1>

              {/* Subjudul — props subtitle */}
              <p className="max-w-xl text-base text-[#3f4850]">
                {subtitle ||
                  "Urusan pakaian jadi lebih mudah. Nikmati layanan laundry yang bersih, wangi, dan terjangkau khusus untuk kebutuhan mahasiswa."}
              </p>

              {/* Tombol CTA — event onClick membuka modal */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#006194] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#007bb9] hover:scale-105 transition-all active:scale-95"
                >
                  Pesan Sekarang 🚀
                </button>
                <a
                  href="https://wa.me/6285643429736?text=Halo%20LaundryKost%2C%20saya%20mau%20konsultasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#eceef0] px-6 py-2.5 text-sm font-semibold text-[#006194] hover:bg-[#e0e3e5] hover:scale-105 transition-all"
                >
                  💬 Konsultasi via WA
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div className="flex items-center gap-1.5 text-[#3f4850]">
                  <span className="text-[#00685f]">✅</span>
                  <span className="text-xs font-semibold">Timbangan Transparan</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#3f4850]">
                  <span className="text-[#00685f]">🚚</span>
                  <span className="text-xs font-semibold">Gratis Antar-Jemput Kos</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Kolom gambar — meluncur dari kanan (fade-left) */}
          <ScrollReveal animation="fade-left" duration={800} delay={150}>
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="relative overflow-hidden rounded-2xl bg-[#e6e8ea] shadow-xl aspect-[4/3] group">
                  <img
                    src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&auto=format&fit=crop"
                    alt="Area laundry modern LaundryKost yang higienis dan rapi"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Floating badge kiri atas */}
                <div className="absolute -top-4 -left-4 sm:left-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 hover:scale-105 transition-transform animate-float-ambient">
                  <div className="w-8 h-8 rounded-lg bg-[#89f5e7] flex items-center justify-center">
                    ⏰
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#191c1e]">Tepat Waktu</p>
                    <p className="text-[11px] text-[#3f4850]">Jadwal kuliah aman</p>
                  </div>
                </div>
                {/* Floating badge kanan bawah */}
                <div className="absolute -bottom-4 -right-4 sm:right-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 hover:scale-105 transition-transform animate-float-ambient" style={{ animationDelay: "1.5s" }}>
                  <div className="w-8 h-8 rounded-lg bg-[#dae2fd] flex items-center justify-center">
                    🌸
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#191c1e]">Wangi Tahan Lama</p>
                    <p className="text-[11px] text-[#3f4850]">Parfum grade premium</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modal CTA — ditampilkan bersyarat saat modalOpen true */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Hero;
