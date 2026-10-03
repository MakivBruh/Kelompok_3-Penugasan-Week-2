import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { features, steps, services } from "../data/services";
import SplitText from "../components/reactbits/SplitText";
import BlurText from "../components/reactbits/BlurText";
import GradientText from "../components/reactbits/GradientText";
import FadeContent from "../components/reactbits/FadeContent";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import LaundrySimulator from "../components/LaundrySimulator";

// Halaman Beranda — menampilkan Hero 3D, Section Layanan Populer, Keunggulan, dan Proses
const Home = () => {
  const handleServicesPointerMove = (event) => {
    if (event.pointerType !== "mouse") return;
    const section = event.currentTarget;
    const bounds = section.getBoundingClientRect();
    section.style.setProperty("--services-pointer-x", `${event.clientX - bounds.left}px`);
    section.style.setProperty("--services-pointer-y", `${event.clientY - bounds.top}px`);
    section.dataset.servicesPointerActive = "true";
  };

  const handleServicesPointerLeave = (event) => {
    delete event.currentTarget.dataset.servicesPointerActive;
  };

  return (
    <>
      {/* Section Hero 3D Washing Machine */}
      <Hero />

      {/* Section Keunggulan Layanan — satu viewport penuh dengan React Bits */}
      <section
        id="keunggulan"
        className="relative flex h-[100svh] min-h-[680px] w-full items-center overflow-hidden bg-[#f7f9fb] px-4 py-10 sm:px-8 sm:py-12 lg:px-14"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, #bfc7d2 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#cce5ff]/60 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#89f5e7]/30 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl">
          <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-10">
            <FadeContent direction="down" distance={20} duration={600}>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#cce5ff] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#006194] shadow-sm">
                <span aria-hidden="true">✦</span> Lebih dari sekadar cuci
              </span>
            </FadeContent>
            <h2 className="mb-3 flex flex-col items-center text-3xl font-extrabold leading-tight tracking-tight text-[#191c1e] sm:text-4xl lg:text-5xl">
              <SplitText text="Urusan Cucian Jadi" delay={35} className="block" />
              <GradientText
                colors={["#006194", "#007bb9", "#00685f", "#00a99d", "#006194"]}
                animationSpeed={5}
                className="mt-1 block font-extrabold"
              >
                Lebih Ringan
              </GradientText>
            </h2>
            <BlurText
              text="Waktumu berharga. Biar kami yang mengurus pakaianmu dengan cepat, teliti, dan nyaman dari awal sampai selesai."
              delay={20}
              animateBy="words"
              className="mx-auto w-full justify-center text-center text-sm leading-relaxed text-[#53606a] sm:text-base"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {features.map((feat, index) => (
              <FadeContent key={feat.id} direction="up" distance={24} duration={600} threshold={0.1}>
                <SpotlightCard
                  spotlightColor="rgba(0, 169, 157, 0.16)"
                  className="group h-full rounded-2xl border-white/80 bg-white/75 p-4 shadow-[0_12px_40px_rgba(20,55,75,0.07)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1.5 sm:rounded-3xl sm:p-6"
                >
                  <div className="mb-3 flex items-center justify-between sm:mb-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e6f5fb] text-2xl transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-3xl">
                      {feat.icon}
                    </span>
                    <span className="text-xs font-bold tracking-[0.18em] text-[#91a1ad]">0{index + 1}</span>
                  </div>
                  <h3 className="mb-1 text-sm font-extrabold text-[#191c1e] sm:mb-2 sm:text-lg">{feat.title}</h3>
                  <p className="text-xs leading-relaxed text-[#53606a] sm:text-sm">{feat.desc}</p>
                  <div className="mt-3 h-1 w-8 rounded-full bg-gradient-to-r from-[#006194] to-[#00a99d] transition-all duration-300 group-hover:w-16 sm:mt-6 sm:w-12 sm:group-hover:w-20" />
                </SpotlightCard>
              </FadeContent>
            ))}
          </div>

          <FadeContent direction="up" distance={12} duration={700}>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] font-semibold text-[#53606a] sm:mt-8 sm:gap-x-6 sm:text-sm">
              <span className="inline-flex items-center gap-2"><span className="text-[#00a99d]">✓</span> Praktis dari pesan sampai antar</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#9aa7b0] sm:block" />
              <span className="inline-flex items-center gap-2"><span className="text-[#00a99d]">✓</span> Perawatan sesuai jenis pakaian</span>
              <span className="hidden h-1 w-1 rounded-full bg-[#9aa7b0] sm:block" />
              <span className="inline-flex items-center gap-2"><span className="text-[#00a99d]">✓</span> Siap bantu kebutuhan anak kos</span>
            </div>
          </FadeContent>
        </div>
      </section>

      {/* Simulasi proses pencucian interaktif, diadaptasi dari hasil kolaborasi */}
      <LaundrySimulator />

      {/* Section Layanan Unggulan — Full React Bits */}
      <section
        id="layanan-unggulan"
        onPointerMove={handleServicesPointerMove}
        onPointerLeave={handleServicesPointerLeave}
        className="relative w-full scroll-mt-6 overflow-hidden bg-gradient-to-b from-white/40 via-[#f1f8fb] to-[#f7f9fb] px-4 py-16 sm:py-20 lg:px-14"
      >
        <div className="services-cursor-glow pointer-events-none absolute inset-0" aria-hidden="true" />
        {/* Pattern Background — subtle dot matrix */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `radial-gradient(circle, #bfc7d2 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-14 h-72 w-72 rounded-full bg-[#cce5ff]/50 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <FadeContent direction="down" distance={20} duration={600}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#cce5ff] bg-white/80 px-4 py-2 text-[#001d31] shadow-sm">
                <span aria-hidden="true">🧺</span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Pilih yang kamu butuhkan
                </span>
              </div>
            </FadeContent>

            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-[#191c1e] sm:text-4xl lg:text-5xl">
              <SplitText
                text="Solusi Cucian Bersih & Wangi"
                delay={40}
                className="inline-block"
              />{" "}
              <GradientText
                colors={["#006194", "#007bb9", "#00685f", "#00a99d", "#006194"]}
                animationSpeed={5}
                className="mt-1 block font-extrabold"
              >
                Tanpa Ribet
              </GradientText>
            </h2>

            <BlurText
              text="Mulai dari cuci harian sampai kebutuhan express, semua dirawat teliti dengan harga yang ramah di kantong mahasiswa."
              delay={20}
              animateBy="words"
              className="mx-auto w-full text-center text-sm leading-relaxed text-[#53606a] sm:text-base"
            />
          </div>

          <div className="mx-auto mb-6 flex max-w-4xl flex-wrap items-center justify-center gap-2.5 sm:mb-8 sm:gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-4 py-2 text-xs font-semibold text-[#53606a] shadow-sm">
              <span className="text-[#006194]">✦</span> 4 pilihan perawatan
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white bg-white/80 px-4 py-2 text-xs font-semibold text-[#53606a] shadow-sm">
              <span className="text-[#00a99d]">✓</span> Mulai Rp7.000/kg
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#bfe7e3] bg-[#e9f8f6] px-4 py-2 text-xs font-bold text-[#00685f] shadow-sm">
              <span aria-hidden="true">⚡</span> Express 6–12 jam
            </span>
          </div>

          {/* Grid kartu layanan dengan React Bits SpotlightCard & FadeContent */}
          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
            {services.map((svc) => (
              <FadeContent
                key={svc.id}
                direction="up"
                distance={25}
                duration={650}
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

          {/* CTA Lihat Semua Layanan */}
          <div className="mt-10 text-center">
            <Link
              to="/layanan"
                className="inline-flex items-center gap-2 rounded-full border border-[#c8e0eb] bg-white px-6 py-3 text-sm font-bold text-[#006194] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#80c8d0] hover:bg-[#eaf7f8] hover:shadow-md active:scale-95"
            >
              Lihat Selengkapnya di Halaman Layanan →
            </Link>
          </div>
        </div>
      </section>

      {/* Section Keunggulan */}
      <section className="w-full bg-[#f7f9fb] px-4 py-12 sm:py-16 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <FadeContent direction="down" distance={20} duration={600}>
              <span className="text-xs font-bold uppercase tracking-wider text-[#006194] bg-[#dae2fd]/60 px-3 py-1 rounded-full">
                Kenapa Kami?
              </span>
            </FadeContent>
            <h2 className="mt-3 mb-2 text-3xl md:text-4xl font-extrabold text-[#191c1e]">
              Mengapa Anak Kos Memilih Kami?
            </h2>
            <p className="text-base text-[#3f4850]">
              Kami mengerti ritme hidup mahasiswa: jadwal kuliah padat, tugas menumpuk,
              dan butuh pakaian selalu siap pakai.
            </p>
          </div>

          {/* Grid 4 kartu keunggulan dengan SpotlightCard */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feat) => (
              <FadeContent key={feat.id} direction="up" distance={20} duration={600}>
                <SpotlightCard
                  spotlightColor="rgba(0, 97, 148, 0.15)"
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#cce5ff] text-2xl transition-transform duration-300 group-hover:scale-110">
                    {feat.icon}
                  </div>
                  <h3 className="mb-2 text-base font-bold text-[#191c1e]">{feat.title}</h3>
                  <p className="text-sm text-[#3f4850] leading-relaxed">{feat.desc}</p>
                </SpotlightCard>
              </FadeContent>
            ))}
          </div>
        </div>
      </section>



      {/* Section Proses / Alur */}
      <section className="w-full px-4 pb-12 sm:pb-16 lg:px-14">
        <FadeContent direction="up" distance={30} duration={700}>
          <div className="mx-auto max-w-7xl rounded-3xl bg-[#f2f4f6] border border-[#e0e3e5]/70 p-6 sm:p-10 shadow-xs">
            <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#006194]">
                  Proses Praktis
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#191c1e] mt-1">
                  Pantau Cucianmu Tanpa Cemas
                </h2>
              </div>
              <p className="max-w-md text-sm text-[#3f4850]">
                Dari pengambilan di pintu kos sampai kembali terlipat rapi, pantau status
                cucian via pesan WhatsApp interaktif.
              </p>
            </div>

            {/* 4 step alur */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-xs border border-[#e0e3e5]/60 transition-transform hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white shadow-xs ${s.step === 4 ? "bg-[#00685f]" : "bg-[#006194]"}`}>
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
        </FadeContent>
      </section>

      {/* Section CTA Penutup */}
      <section className="w-full px-4 pb-12 sm:pb-16 lg:px-14">
        <FadeContent direction="up" distance={30} duration={750}>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#006194] to-[#007bb9] p-6 text-white shadow-xl sm:p-12">
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#89f5e7]/20 blur-3xl" />
            <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#dae2fd]/20 blur-3xl" />
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
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#006194] shadow-lg hover:bg-[#f2f4f6] hover:shadow-xl transition-all active:scale-95 hover:-translate-y-0.5"
              >
                🚚 Jemput Cucian Saya Sekarang
              </a>
            </div>
          </div>
        </FadeContent>
      </section>
    </>
  );
};

export default Home;
