import Hero from "../components/Hero";
import { features, steps } from "../data/services";

// Halaman Beranda — menampilkan Hero, Keunggulan, dan Proses
const Home = () => {
  return (
    <>
      {/* Section Hero */}
      <Hero />

      {/* Section Keunggulan */}
      <section className="w-full px-4 py-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="mb-2 text-3xl font-bold text-[#191c1e]">
              Mengapa Anak Kos Memilih Kami?
            </h2>
            <p className="text-base text-[#3f4850]">
              Kami mengerti ritme hidup mahasiswa: jadwal kuliah padat, tugas menumpuk,
              dan butuh pakaian selalu siap pakai.
            </p>
          </div>

          {/* Grid 4 kartu keunggulan — data dari data/services.js via props */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feat) => (
              <article
                key={feat.id}
                className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#cce5ff] text-2xl">
                  {feat.icon}
                </div>
                <h3 className="mb-2 text-base font-bold text-[#191c1e]">{feat.title}</h3>
                <p className="text-sm text-[#3f4850]">{feat.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section Proses / Alur */}
      <section className="w-full px-4 pb-10 lg:px-14">
        <div className="mx-auto max-w-7xl rounded-2xl bg-[#f2f4f6] p-6 sm:p-10">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#006194]">
                Proses Praktis
              </span>
              <h2 className="text-2xl font-bold text-[#191c1e]">
                Pantau Cucianmu Tanpa Cemas
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#3f4850]">
              Dari pengambilan di pintu kos sampai kembali terlipat rapi, pantau status
              cucian via pesan WhatsApp interaktif.
            </p>
          </div>

          {/* 4 step alur — data dari data/services.js via props */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.step}
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${s.step === 4 ? "bg-[#00685f]" : "bg-[#006194]"}`}>
                  {s.step}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#191c1e]">{s.title}</p>
                  <p className="text-xs text-[#3f4850]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA Penutup */}
      <section className="w-full px-4 pb-10 lg:px-14">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#006194] p-6 text-white shadow-xl sm:p-10">
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#007bb9] blur-2xl" />
          <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="mb-2 text-3xl font-extrabold">
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
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#006194] shadow-lg hover:bg-[#f2f4f6] transition-all active:scale-95"
            >
              🚚 Jemput Cucian Saya Sekarang
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
