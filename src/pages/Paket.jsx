import PackageCard from "../components/PackageCard";
import { packages } from "../data/packages";

// Halaman Paket — menampilkan paket harga menggunakan .map()
const Paket = () => {
  return (
    <section className="w-full px-4 py-10 bg-[#f2f4f6] lg:px-14">
      <div className="mx-auto max-w-7xl flex flex-col items-center">

        {/* Header section */}
        <div className="text-center max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#89f5e7] text-[#00201d] mb-3">
            <span>💰</span>
            <span className="text-xs font-bold uppercase tracking-wider">Hemat Pengeluaran</span>
          </div>
          <h1 className="text-3xl font-bold text-[#191c1e] mb-3">Paket Hemat Anak Kos</h1>
          <p className="text-base text-[#3f4850]">
            Paket dibuat khusus untuk membantu mahasiswa mengelola anggaran bulanan lebih
            hemat, terkontrol, dan anti-boros.
          </p>
        </div>

        {/* Grid kartu paket — data dari data/packages.js, ditampilkan dengan .map() */}
        {/* Data dikirim ke PackageCard via props */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              title={pkg.title}
              quota={pkg.quota}
              price={pkg.price}
              unit={pkg.unit}
              desc={pkg.desc}
              features={pkg.features}
              highlight={pkg.highlight}
              badge={pkg.badge}
              waMsg={pkg.waMsg}
            />
          ))}
        </div>

        {/* Info tambahan */}
        <div className="mt-10 text-center">
          <p className="text-sm text-[#3f4850]">
            Semua paket sudah termasuk cuci + setrika dan wangi tahan lama.
          </p>
          <a
            href="https://wa.me/6285643429736?text=Halo%20LaundryKost%2C%20saya%20mau%20tanya%20tentang%20paket"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#006194] px-5 py-2 text-sm font-semibold text-[#006194] hover:bg-[#cce5ff] transition-colors"
          >
            💬 Tanya-tanya dulu via WA
          </a>
        </div>
      </div>
    </section>
  );
};

export default Paket;
