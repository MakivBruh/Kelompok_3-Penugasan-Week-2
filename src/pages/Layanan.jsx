import ServiceCard from "../components/ServiceCard";
import ScrollReveal from "../components/ScrollReveal";
import { services } from "../data/services";

// Halaman Layanan — menampilkan semua kartu layanan menggunakan .map()
const Layanan = () => {
  return (
    <section className="w-full px-4 py-10 bg-[#f2f4f6] lg:px-14">
      <div className="mx-auto max-w-7xl flex flex-col items-center">

        {/* Header section dengan animasi ScrollReveal */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-2xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#cce5ff] text-[#001d31] mb-3">
              <span>🧺</span>
              <span className="text-xs font-bold uppercase tracking-wider">Pilihan Layanan</span>
            </div>
            <h1 className="text-3xl font-bold text-[#191c1e] mb-3">Layanan Kami</h1>
            <p className="text-base text-[#3f4850]">
              LaundryKost menyediakan layanan laundry yang praktis, higienis, dan terencana
              untuk membantu mahasiswa menghemat waktu belajar dan beristirahat.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid kartu layanan — data dari data/services.js, ditampilkan dengan .map() */}
        {/* Data dikirim ke ServiceCard via props, muncul berurutan (stagger) saat di-scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
          {services.map((svc, index) => (
            <ScrollReveal
              key={svc.id}
              animation="fade-up"
              duration={650}
              delay={index * 120}
            >
              <ServiceCard
                title={svc.title}
                description={svc.description}
                price={svc.price}
                unit={svc.unit}
                duration={svc.duration}
                icon={svc.icon}
                badge={svc.badge}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Catatan ramah anak kos */}
        <ScrollReveal animation="fade-up" duration={700} delay={200} className="w-full">
          <div className="mt-8 w-full flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-[#dae2fd]/40 p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#006194] text-white text-lg">
                ℹ️
              </div>
              <p className="text-sm text-[#191c1e]">
                <strong className="font-bold text-[#006194]">Catatan Ramah Anak Kos:</strong>{" "}
                Tersedia timbangan digital transparan & gratis antar-jemput radius kos terdekat!
              </p>
            </div>
            <a
              href="https://wa.me/6285643429736?text=Halo%2C%20apakah%20kos%20saya%20masuk%20radius%20antar%20jemput?"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-[#006194] px-4 py-2 text-xs font-semibold text-white hover:bg-[#007bb9] transition-colors"
            >
              Cek Radius Kosmu
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Layanan;
