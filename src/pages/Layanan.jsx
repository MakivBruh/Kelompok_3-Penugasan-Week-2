import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import SplitText from "../components/reactbits/SplitText";
import BlurText from "../components/reactbits/BlurText";
import GradientText from "../components/reactbits/GradientText";
import FadeContent from "../components/reactbits/FadeContent";
import SpotlightCard from "../components/reactbits/SpotlightCard";

// Halaman Layanan — Ditingkatkan sepenuhnya dengan React Bits animation suite
const Layanan = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f7f9fb] px-4 py-10 sm:py-16 lg:px-14">
      {/* Pattern Background — matching the hero theme */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(circle, #bfc7d2 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative mx-auto max-w-6xl flex flex-col items-center">
        {/* Header section dengan React Bits animations */}
        <div className="text-center max-w-2xl mb-12">
          <FadeContent direction="down" distance={20} duration={600}>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#cce5ff]/80 text-[#001d31] mb-4 border border-[#cce5ff] shadow-xs backdrop-blur-xs">
              <span>🧺</span>
              <span className="text-xs font-bold uppercase tracking-wider">
                Pilihan Layanan Terlengkap
              </span>
            </div>
          </FadeContent>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#191c1e] mb-4">
            <SplitText
              text="Layanan Bersih Berkualitas"
              delay={40}
              className="inline-block"
            />{" "}
            <GradientText
              colors={['#006194', '#007bb9', '#00685f', '#89f5e7', '#006194']}
              animationSpeed={5}
              className="block mt-1 font-extrabold"
            >
              LaundryKost
            </GradientText>
          </h1>

          <BlurText
            text="Laundry praktis, higienis, dan terencana khusus untuk membantu mahasiswa menghemat waktu belajar dan beristirahat tanpa pusing cucian."
            delay={20}
            animateBy="words"
            className="text-base text-[#3f4850] max-w-xl mx-auto"
          />
        </div>

        {/* Grid kartu layanan dengan FadeContent staggered feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10">
          {services.map((svc) => (
            <FadeContent
              key={svc.id}
              direction="up"
              distance={30}
              duration={700}
              threshold={0.1}
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
            </FadeContent>
          ))}
        </div>

        {/* Catatan ramah anak kos dengan SpotlightCard */}
        <FadeContent direction="up" distance={20} duration={800} threshold={0.1} className="w-full">
          <SpotlightCard
            spotlightColor="rgba(0, 104, 95, 0.15)"
            className="w-full border-[#00685f]/20 bg-gradient-to-r from-[#dae2fd]/40 via-white/80 to-[#89f5e7]/20 p-5 shadow-sm backdrop-blur-xs"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#006194] text-white text-xl shadow-xs">
                  ℹ️
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#191c1e]">
                    <strong className="font-bold text-[#006194]">Catatan Ramah Anak Kos:</strong>{" "}
                    Tersedia timbangan digital transparan langsung di depan kamar kos & gratis antar-jemput!
                  </p>
                  <p className="text-xs text-[#565e74] mt-0.5">
                    Garansi cuci ulang jika ada noda tertinggal atau aroma kurang segar.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/6285643429736?text=Halo%2C%20apakah%20kos%20saya%20masuk%20radius%20antar%20jemput?"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-[#006194] px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-[#007bb9] hover:shadow-md transition-all active:scale-95"
              >
                Cek Radius Kosmu 📍
              </a>
            </div>
          </SpotlightCard>
        </FadeContent>
      </div>
    </section>
  );
};

export default Layanan;
