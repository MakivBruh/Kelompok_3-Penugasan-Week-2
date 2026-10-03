import Hero from "../components/Hero";
import LaundrySimulator from "../components/LaundrySimulator";
import ScrollReveal from "../components/ScrollReveal";
import { features, steps } from "../data/services";

// Halaman Beranda — menampilkan Hero, Keunggulan, Animasi Mesin Cuci, dan Proses
const Home = () => {
  return (
    <>
      {/* Section Hero */}
      <Hero />

      {/* Section Keunggulan */}
      <section className="w-full px-4 py-12 lg:px-14">
        <div className="mx-auto max-w-7xl">
          {/* Header Keunggulan dengan animasi scroll reveal fade-up */}
          <ScrollReveal animation="fade-up" duration={700}>
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#006194]">
                Kenapa Kami?
              </span>
              <h2 className="mt-1 mb-2 text-3xl font-bold text-[#191c1e]">
                Mengapa Anak Kos Memilih Kami?
              </h2>
              <p className="text-base text-[#3f4850]">
                Kami mengerti ritme hidup mahasiswa: jadwal kuliah padat, tugas menumpuk,
                dan butuh pakaian selalu siap pakai.
              </p>
            </div>
          </ScrollReveal>

          {/* Grid 4 kartu keunggulan — muncul berurutan (stagger) saat di-scroll */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feat, index) => (
              <ScrollReveal
                key={feat.id}
                animation="fade-up"
                duration={650}
                delay={index * 120} // Efek stagger: kartu muncul berurutan
              >
                <article className="h-full rounded-2xl bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#cce5ff] text-2xl transition-transform hover:scale-110">
                    {feat.icon}
                  </div>
                  <h3 className="mb-2 text-base font-bold text-[#191c1e]">{feat.title}</h3>
                  <p className="text-sm text-[#3f4850]">{feat.desc}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section Animasi Interaktif Mesin Cuci LaundryKost */}
      <LaundrySimulator />

      {/* Section Proses / Alur */}
      <section className="w-full px-4 pb-12 lg:px-14">
        <ScrollReveal animation="fade-up" duration={800}>
          <div className="mx-auto max-w-7xl rounded-3xl bg-[#f2f4f6] p-6 sm:p-10 shadow-sm border border-[#e0e3e5]/50">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#006194]">
                  Proses Praktis
                </span>
                <h2 className="text-2xl font-bold text-[#191c1e] sm:text-3xl">
                  Pantau Cucianmu Tanpa Cemas
                </h2>
              </div>
              <p className="max-w-md text-sm text-[#3f4850]">
                Dari pengambilan di pintu kos sampai kembali terlipat rapi, pantau status
                cucian via pesan WhatsApp interaktif.
              </p>
            </div>

            {/* 4 step alur — muncul berurutan (stagger) saat di-scroll */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, index) => (
                <ScrollReveal
                  key={s.step}
                  animation="fade-up"
                  duration={600}
                  delay={index * 100}
                >
                  <div className="h-full flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-[#e0e3e5]/40">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white shadow-sm ${s.step === 4 ? "bg-[#00685f]" : "bg-[#006194]"}`}>
                      {s.step}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#191c1e]">{s.title}</p>
                      <p className="text-xs text-[#3f4850] mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Section CTA Penutup — animasi zoom-in saat di-scroll ke bawah */}
      <section className="w-full px-4 pb-12 lg:px-14">
        <ScrollReveal animation="zoom-in" duration={800}>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#006194] p-8 text-white shadow-xl sm:p-12">
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#007bb9] blur-2xl" />
            <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="max-w-xl text-center md:text-left">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200 mb-3">
                  ✨ Solusi Bebas Stres
                </span>
                <h2 className="mb-2 text-3xl font-extrabold sm:text-4xl">
                  Cucian Numpuk? Serahkan Pada Ahlinya!
                </h2>
                <p className="text-base text-[#cce5ff]">
                  Pesan penjemputan sekarang, fokus kuliah dan santai bersama teman
                  tanpa beban cucian kotor.
                </p>
              </div>
              <a
                href="https://wa.me/6285643429736?text=Halo%20LaundryKost%2C%20tolong%20jemput%20laundry%20di%20kos%20saya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#006194] shadow-lg hover:bg-[#f2f4f6] hover:scale-105 transition-all active:scale-95 shrink-0"
              >
                🚚 Jemput Cucian Saya Sekarang
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
};

export default Home;
