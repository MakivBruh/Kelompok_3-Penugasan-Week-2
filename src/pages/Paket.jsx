import PackageCard from "../components/PackageCard";
import { packages } from "../data/packages";
import SplitText from "../components/reactbits/SplitText";
import GradientText from "../components/reactbits/GradientText";
import BlurText from "../components/reactbits/BlurText";
import FadeContent from "../components/reactbits/FadeContent";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import { MessageCircle, MessageCircleQuestionMark } from "lucide-react";

// Halaman Paket — menampilkan paket harga menggunakan .map()
const Paket = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f2f4f6] px-4 py-10 sm:py-14 lg:px-14">
      <div className="pointer-events-none absolute -right-28 top-8 h-72 w-72 rounded-full bg-[#cce5ff]/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-12 h-72 w-72 rounded-full bg-[#89f5e7]/25 blur-3xl" />
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Header section */}
        <div className="relative text-center max-w-2xl mb-14">
          {/* <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#89f5e7] text-[#00201d] mb-3">
            <span>💰</span>
            <span className="text-xs font-bold uppercase tracking-wider">Hemat Pengeluaran</span>
          </div> */}
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-[#191c1e] sm:text-4xl md:text-5xl">
            <SplitText text="Paket Hemat" delay={45} className="inline-block" />{" "}
            <GradientText
              colors={["#006194", "#007bb9", "#00685f", "#89f5e7", "#006194"]}
              animationSpeed={5}
              className="inline-block font-extrabold"
            >
              Anak Kos
            </GradientText>
          </h1>
          <BlurText
            text="Paket dibuat khusus untuk membantu mahasiswa mengelola anggaran bulanan lebih hemat, terkontrol, dan anti-boros."
            delay={18}
            animateBy="words"
            className="mx-auto max-w-xl text-base text-[#3f4850]"
          />
        </div>

        {/* Grid kartu paket — data dari data/packages.js, ditampilkan dengan .map() */}
        {/* Data dikirim ke PackageCard via props */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full">
          {packages.map((pkg) => (
            <FadeContent
              key={pkg.id}
              direction="up"
              distance={28}
              duration={650}
              threshold={0.1}
            >
              <PackageCard
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
            </FadeContent>
          ))}
        </div>

        {/* Info tambahan */}
        <FadeContent
          direction="up"
          distance={18}
          duration={650}
          className="mt-10 w-full max-w-2xl"
        >
          <SpotlightCard
            spotlightColor="rgba(0, 97, 148, 0.12)"
            className="p-6 text-center shadow-sm"
          >
            <div className="relative z-10">
              <p className="text-sm text-[#3f4850]">
                Semua paket sudah termasuk cuci + setrika dan wangi tahan lama.
              </p>
              <a
                href="https://wa.me/6285643429736?text=Halo%20LaundryKost%2C%20saya%20mau%20tanya%20tentang%20paket"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#006194] px-5 py-2 text-sm font-semibold text-[#006194] hover:bg-[#cce5ff] transition-colors"
              >
                <MessageCircleQuestionMark /> Tanya-tanya dulu
              </a>
            </div>
          </SpotlightCard>
        </FadeContent>
      </div>
    </section>
  );
};

export default Paket;
