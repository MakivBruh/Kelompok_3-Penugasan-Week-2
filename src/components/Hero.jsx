import { useState, useRef } from "react";
import Modal from "./Modal";
import SplitText from "./reactbits/SplitText";
import BlurText from "./reactbits/BlurText";
import GradientText from "./reactbits/GradientText";
import RotatingText from "./reactbits/RotatingText";
import WashingMachine3D from "./WashingMachine3D";
import Magnet from "./Magnet";
import SpotlightCard from "./reactbits/SpotlightCard";

// Komponen Hero — Landing page dengan 3D Washing Machine
// Memiliki vertical text "LAUNDRY" dan "SERVICE" di sisi kiri dan kanan
// Background pattern dots, sticky scroll effect
const Hero = ({ title, subtitle, badge }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef(null);

  const handlePatternPointerMove = (event) => {
    if (event.pointerType === "touch" || !sectionRef.current) return;
    const section = sectionRef.current;
    const bounds = section.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    section.style.setProperty("--pointer-x", `${x}px`);
    section.style.setProperty("--pointer-y", `${y}px`);
    section.style.setProperty("--pointer-shift-x", `${((x / bounds.width) - 0.5) * 24}px`);
    section.style.setProperty("--pointer-shift-y", `${((y / bounds.height) - 0.5) * 24}px`);
    section.dataset.pointerActive = "true";
  };

  const resetPatternPointer = () => {
    if (!sectionRef.current) return;
    delete sectionRef.current.dataset.pointerActive;
    sectionRef.current.style.setProperty("--pointer-shift-x", "0px");
    sectionRef.current.style.setProperty("--pointer-shift-y", "0px");
  };

  return (
    <>
      <section
        ref={sectionRef}
        onPointerMove={handlePatternPointerMove}
        onPointerLeave={resetPatternPointer}
        className="relative h-screen h-[100svh] w-full overflow-hidden flex items-center justify-center"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(204,229,255,0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(137,245,231,0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 0%, rgba(218,226,253,0.25) 0%, transparent 50%),
            #f7f9fb
          `,
        }}
      >
        {/* Pattern Background — repeating dots */}
        <div
          className="hero-dot-pattern absolute inset-0 pointer-events-none opacity-[0.3]"
          style={{
            backgroundImage: `radial-gradient(circle, #bfc7d2 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="hero-cursor-glow pointer-events-none absolute inset-0" aria-hidden="true" />

        {/* Grid overlay lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #006194 1px, transparent 1px),
              linear-gradient(to bottom, #006194 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
          }}
        />

        <div className="hero-ambient pointer-events-none absolute inset-0" aria-hidden="true">
          <svg className="hero-airflow" viewBox="0 0 1440 900" preserveAspectRatio="none">
            <defs>
              <marker id="hero-air-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0 0 7 4 0 8" fill="none" stroke="currentColor" strokeWidth="1.4" />
              </marker>
            </defs>
            <path className="hero-air-path hero-air-path--one" d="M-80 260 C70 220 190 235 330 195" markerEnd="url(#hero-air-arrow)" />
            <path className="hero-air-path hero-air-path--two" d="M-90 365 C70 390 200 400 345 425" markerEnd="url(#hero-air-arrow)" />
            <path className="hero-air-path hero-air-path--four" d="M-100 485 C60 455 210 470 355 445" markerEnd="url(#hero-air-arrow)" />
            <path className="hero-air-path hero-air-path--five" d="M-110 590 C40 615 220 625 365 655" markerEnd="url(#hero-air-arrow)" />
            <path className="hero-air-path hero-air-path--three" d="M1520 260 C1370 290 1260 310 1110 335" markerEnd="url(#hero-air-arrow)" />
            <path className="hero-air-path hero-air-path--six" d="M1530 425 C1385 445 1240 465 1080 485" markerEnd="url(#hero-air-arrow)" />
            <path className="hero-air-path hero-air-path--seven" d="M1540 570 C1390 595 1240 620 1085 650" markerEnd="url(#hero-air-arrow)" />
          </svg>
          <span className="hero-bubble hero-bubble--one" />
          <span className="hero-bubble hero-bubble--two" />
          <span className="hero-bubble hero-bubble--three" />
          <span className="hero-bubble hero-bubble--four" />
          <span className="hero-bubble hero-bubble--five" />
          <span className="hero-bubble hero-bubble--six" />
          <span className="hero-bubble hero-bubble--seven" />
          <span className="hero-bubble hero-bubble--eight" />
          <span className="hero-bubble hero-bubble--nine" />
          <span className="hero-bubble hero-bubble--ten" />
          <span className="hero-bubble hero-bubble--eleven" />
          <span className="hero-bubble hero-bubble--twelve" />
          <span className="hero-bubble hero-bubble--thirteen" />
          <span className="hero-bubble hero-bubble--fourteen" />
          <span className="hero-bubble hero-bubble--fifteen" />
          <span className="hero-bubble hero-bubble--sixteen" />
          <span className="hero-bubble hero-bubble--seventeen" />
          <span className="hero-bubble hero-bubble--eighteen" />
          <span className="hero-bubble hero-bubble--nineteen" />
          <span className="hero-bubble hero-bubble--twenty" />
          <span className="hero-bubble hero-bubble--twenty-one" />
          <span className="hero-bubble hero-bubble--twenty-two" />
          <span className="hero-bubble hero-bubble--twenty-three" />
          <span className="hero-bubble hero-bubble--twenty-four" />
          <span className="hero-bubble hero-bubble--twenty-five" />
          <span className="hero-bubble hero-bubble--twenty-six" />
          <span className="hero-bubble hero-bubble--twenty-seven" />
          <span className="hero-bubble hero-bubble--twenty-eight" />
          <span className="hero-bubble hero-bubble--twenty-nine" />
          <span className="hero-bubble hero-bubble--thirty" />
          <span className="hero-bubble hero-bubble--thirty-one" />
        </div>

        {/* Vertical Text LEFT — LAUNDRY */}
        <div className="absolute left-3 md:left-6 xl:left-3 top-1/2 -translate-y-1/2 z-10 hidden xl:flex select-none pointer-events-none">
          <span
            className="text-5xl md:text-7xl lg:text-8xl font-black text-[#006194]/[0.23] tracking-[0.25em] drop-shadow-xs"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
            }}
          >
            LAUNDRY
            
          </span>
        </div>
        

        {/* Vertical Text RIGHT — SERVICE */}
        <div className="absolute right-3 md:right-6 xl:right-3 top-1/2 -translate-y-1/2 z-10 hidden xl:flex select-none pointer-events-none">
          <span
            className="text-5xl md:text-7xl lg:text-8xl font-black text-[#006194]/[0.23] tracking-[0.25em] drop-shadow-xs"
            style={{
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
            }}
          >
            SERVICE
          </span>
        </div>

        {/* Main content */}
        <div className="relative z-20 mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center gap-2 px-4 pb-14 pt-[4.5rem] text-center sm:gap-3 sm:pb-16 sm:pt-24">

          {/* Title with SplitText animation */}
          <h1 className="shrink-0 text-[clamp(1.8rem,5.5svh,3.75rem)] font-extrabold leading-tight tracking-tight text-[#191c1e] sm:text-4xl md:text-5xl lg:text-6xl">
            {title ? (
              <span>{title}</span>
            ) : (
              <>
                <SplitText
                  text="Laundry Praktis untuk"
                  delay={50}
                  className="block"
                />
                <span className="block mt-2">
                  <GradientText
                    colors={['#006194', '#007bb9', '#00685f', '#89f5e7', '#006194']}
                    animationSpeed={6}
                    className="text-[clamp(1.8rem,5.5svh,3.75rem)] font-extrabold sm:text-4xl md:text-5xl lg:text-6xl"
                  >
                    <RotatingText
                      texts={["Anak Kos", "Mahasiswa", "Pekerja", "Keluarga"]}
                      interval={2500}
                      className="inline-block min-w-[200px]"
                    />
                  </GradientText>
                </span>
              </>
            )}
          </h1>


          {/* 3D Washing Machine Sketchfab Embed */}
          <div className="sketchfab-embed-wrapper my-0 h-[clamp(8rem,30svh,23rem)] w-full max-w-lg shrink-0 sm:my-1">
            <WashingMachine3D />
          </div>

          {/* CTA Buttons */}
          <div className="flex w-full max-w-sm shrink-0 flex-col items-stretch justify-center gap-2 pt-1 sm:max-w-none sm:flex-row sm:items-center sm:gap-3">
            <Magnet padding={24} magnetStrength={4} wrapperClassName="w-full sm:w-auto" innerClassName="w-full sm:w-auto">
              <button
                onClick={() => setModalOpen(true)}
                className="group relative inline-flex min-h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#006194] via-[#007bb9] to-[#00685f] px-6 py-2.5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(0,97,148,.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(0,97,148,.32)] active:scale-[.98] sm:w-auto"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Pesan Sekarang</span>
                <span className="relative transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
              </button>
            </Magnet>
            <Magnet padding={20} magnetStrength={3} wrapperClassName="w-full sm:w-auto" innerClassName="w-full sm:w-auto">
              <a
                href="https://wa.me/6285643429736?text=Halo%20LaundryKost%2C%20saya%20mau%20konsultasi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/80 bg-white/75 px-6 py-2.5 text-sm font-semibold text-[#006194] shadow-[0_6px_20px_rgba(25,28,30,.06)] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-[#cce5ff] hover:bg-white hover:shadow-lg sm:w-auto"
              >
                <span aria-hidden="true">◉</span> Konsultasi via WA
              </a>
            </Magnet>
          </div>

          {/* Trust badges */}
          <div className="grid w-full max-w-sm shrink-0 grid-cols-3 gap-1.5 pt-1 sm:max-w-2xl sm:gap-3 sm:pt-2">
            {[
              ["✓", "Timbangan transparan"],
              ["↗", "Antar-jemput kos"],
              ["◷", "Tepat waktu"],
            ].map(([icon, label]) => (
              <SpotlightCard
                key={label}
                spotlightColor="rgba(0, 169, 157, 0.13)"
                className="flex min-h-11 items-center justify-center gap-1 rounded-xl border-white/70 bg-white/55 px-1.5 py-1.5 shadow-[0_4px_16px_rgba(25,28,30,.04)] backdrop-blur-sm sm:min-h-11 sm:gap-2 sm:px-2 sm:py-2"
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e2f5f2] text-[10px] font-black text-[#00877f] sm:h-5 sm:w-5 sm:text-[11px]">{icon}</span>
                <span className="text-[9px] font-bold leading-tight text-[#3f4850] sm:text-xs">{label}</span>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#keunggulan" className="hero-scroll-cue absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/80 bg-white/65 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.18em] text-[#52616b] shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white sm:bottom-4 sm:flex-col sm:gap-1 sm:border-0 sm:bg-transparent sm:shadow-none" aria-label="Scroll ke section keunggulan layanan">
          <span>Scroll</span>
          <svg className="hero-scroll-arrow h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 4v15m-6-6 6 6 6-6" />
          </svg>
        </a>
      </section>

      {/* Modal CTA — ditampilkan bersyarat saat modalOpen true */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Hero;
