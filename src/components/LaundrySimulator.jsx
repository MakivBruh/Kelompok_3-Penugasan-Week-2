import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import "./LaundrySimulator.css";

// Data tahapan simulasi proses laundry
const STAGES = {
  wash: {
    id: "wash",
    number: "01",
    name: "Cuci Bersih (Wash)",
    shortName: "Wash",
    tagline: "Formula Enzim Oksigen Aktif",
    icon: "🧼",
    badgeColor: "bg-[#006194] text-white",
    rpm: 600,
    temp: "40°C",
    drumAnimation: "animate-wash-rock",
    hasWater: true,
    waterGradient: "from-blue-400/60 via-blue-500/70 to-blue-700/80",
    hasFoam: true,
    hasSteam: false,
    hasSparkles: false,
    description:
      "Suhu 40°C mengaktifkan formula enzim pembersih noda minyak, debu, dan keringat tanpa merusak serat kain katun maupun jersey favoritmu.",
    highlights: [
      { label: "Suhu Air", val: "40°C Steril", icon: "🌡️" },
      { label: "Kecepatan Putaran", val: "600 RPM", icon: "🌀" },
      { label: "Busa Oksigen", val: "Aktif Melimpah", icon: "🫧" },
      { label: "Higienitas", val: "1 Mesin 1 Orang", icon: "🛡️" },
    ],
  },
  rinse: {
    id: "rinse",
    number: "02",
    name: "Bilas Segar (Rinse)",
    shortName: "Rinse",
    tagline: "3x Sirkulasi Air Mengalir Steril",
    icon: "💧",
    badgeColor: "bg-[#00685f] text-white",
    rpm: 800,
    temp: "26°C",
    drumAnimation: "animate-spin-slow",
    hasWater: true,
    waterGradient: "from-cyan-300/50 via-sky-400/60 to-blue-500/70",
    hasFoam: false,
    hasSteam: false,
    hasSparkles: false,
    description:
      "Pembilasan intensif menggunakan air terfiltrasi bersih untuk memastikan 0% residu deterjen tertinggal. Kulit sensitif bebas dari gatal dan iritasi.",
    highlights: [
      { label: "Suhu Air", val: "26°C Alami", icon: "🌡️" },
      { label: "Kecepatan Putaran", val: "800 RPM", icon: "🌀" },
      { label: "Sisa Deterjen", val: "0% Bebas Residu", icon: "✨" },
      { label: "Kualitas Air", val: "Steril Filtrasi", icon: "💧" },
    ],
  },
  spin: {
    id: "spin",
    number: "03",
    name: "Keringkan (Turbo Spin)",
    shortName: "Spin",
    tagline: "Ekstraksi Air Cepat 1200 RPM",
    icon: "🌀",
    badgeColor: "bg-[#565e74] text-white",
    rpm: 1200,
    temp: "Hangat",
    drumAnimation: "animate-spin-turbo",
    hasWater: false,
    waterGradient: "",
    hasFoam: false,
    hasSteam: true,
    hasSparkles: false,
    description:
      "Putaran turbo berkecepatan 1200 RPM memeras 95% kadar air dari serat pakaian. Pakaian cepat kering sempurna dan terhindar dari bau apek.",
    highlights: [
      { label: "Suhu Udara", val: "Hangat Merata", icon: "🌡️" },
      { label: "Kecepatan Putaran", val: "1200 RPM Turbo", icon: "⚡" },
      { label: "Ekstraksi Air", val: "95% Terperas", icon: "🌪️" },
      { label: "Hasil Kering", val: "Anti Bau Apek", icon: "☀️" },
    ],
  },
  fragrance: {
    id: "fragrance",
    number: "04",
    name: "Aroma Mewah (Fragrance)",
    shortName: "Aroma",
    tagline: "Mikrokapsul Parfum Tahan 7 Hari",
    icon: "🌸",
    badgeColor: "bg-purple-600 text-white",
    rpm: 400,
    temp: "Ruang",
    drumAnimation: "animate-float-ambient",
    hasWater: false,
    waterGradient: "",
    hasFoam: false,
    hasSteam: false,
    hasSparkles: true,
    description:
      "Penyemprotan aroma mewah dengan teknologi partikel mikrokapsul. Keharuman elegan mengunci di dalam serat kain dan bertahan hingga 7 hari di lemari kos.",
    highlights: [
      { label: "Grade Parfum", val: "Premium Concentrate", icon: "🌸" },
      { label: "Kecepatan Putaran", val: "400 RPM Lembut", icon: "🌀" },
      { label: "Ketahanan Wangi", val: "Hingga 7 Hari", icon: "⏳" },
      { label: "Tekstur Kain", val: "Ekstra Lembut", icon: "🪶" },
    ],
  },
};

const STAGE_KEYS = ["wash", "rinse", "spin", "fragrance"];

/**
 * Komponen LaundrySimulator
 * Menampilkan section animasi interaktif simulasi mesin cuci modern LaundryKost
 */
const LaundrySimulator = () => {
  const [activeStageKey, setActiveStageKey] = useState("wash");
  const [isRunning, setIsRunning] = useState(true);
  const [autoCycle, setAutoCycle] = useState(true);
  const [countdown, setCountdown] = useState(18);

  const stage = STAGES[activeStageKey];

  // Efek auto-cycle untuk otomatis berpindah tahapan setiap 5 detik jika autoCycle aktif
  useEffect(() => {
    if (!autoCycle || !isRunning) return;

    const interval = setInterval(() => {
      setActiveStageKey((prev) => {
        const currentIndex = STAGE_KEYS.indexOf(prev);
        const nextIndex = (currentIndex + 1) % STAGE_KEYS.length;
        return STAGE_KEYS[nextIndex];
      });
      setCountdown(18);
    }, 4500);

    return () => clearInterval(interval);
  }, [autoCycle, isRunning]);

  // Efek simulasi hitung mundur detik
  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 18));
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning]);

  // Handle pemilihan tab manual
  const handleStageSelect = (key) => {
    setActiveStageKey(key);
    setCountdown(18);
  };

  return (
    <section className="laundry-simulator relative w-full overflow-hidden bg-gradient-to-b from-[#f7f9fb] via-[#eaf2fb] to-[#f7f9fb] px-4 py-16 lg:px-14">
      {/* Background glowing orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#006194]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 rounded-full bg-[#89f5e7]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header Section dengan animasi ScrollReveal */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#cce5ff] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#001d31] shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[#006194] animate-ping" />
              <span>✨ Animasi Teknologi Cuci Higienis</span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold text-[#191c1e] sm:text-4xl">
              Simulasi Canggih: <span className="text-[#006194]">Bagaimana Pakaianmu Diproses</span>
            </h2>
            <p className="mt-3 text-base text-[#3f4850]">
              Sistem pencucian higienis <strong>1 mesin untuk 1 pelanggan</strong> tanpa pernah dicampur.
              Coba klik tombol di bawah untuk melihat animasi setiap tahapannya!
            </p>

            {/* Quick interactive control buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition-all shadow-sm active:scale-95 ${
                  isRunning
                    ? "bg-[#006194] text-white hover:bg-[#007bb9]"
                    : "bg-amber-500 text-white hover:bg-amber-600"
                }`}
              >
                <span>{isRunning ? "⏸ Jeda Animasi" : "▶ Jalankan Animasi"}</span>
              </button>

              <button
                onClick={() => setAutoCycle(!autoCycle)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold border transition-all ${
                  autoCycle
                    ? "border-[#006194] bg-[#cce5ff]/50 text-[#006194]"
                    : "border-gray-300 bg-white text-[#565e74] hover:bg-gray-50"
                }`}
              >
                <span className={`inline-block h-2 w-2 rounded-full ${autoCycle ? "bg-[#006194]" : "bg-gray-400"}`} />
                <span>Rotasi Otomatis: {autoCycle ? "ON" : "OFF"}</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Grid Utama: Mesin Cuci Interaktif + Telemetri & Info Detail */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Kolom Kiri: Mesin Cuci 3D Realistic Card (5 Kolom di Desktop) */}
          <ScrollReveal animation="fade-right" duration={800} className="w-full lg:col-span-5">
            <div className="relative mx-auto w-full max-w-md">
              {/* Floating Badges di sekitar mesin cuci */}
              <div className="absolute -top-3 -left-3 z-20 hidden sm:flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur border border-[#dae2fd] animate-float-ambient">
                <span className="text-base">🛡️</span>
                <div>
                  <p className="text-[11px] font-bold text-[#191c1e]">1 Mesin 1 Orang</p>
                  <p className="text-[9px] text-[#00685f] font-semibold">100% Anti Tertukar</p>
                </div>
              </div>

              <div className="absolute -bottom-3 -right-3 z-20 hidden sm:flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur border border-[#dae2fd] animate-float-ambient" style={{ animationDelay: "1.5s" }}>
                <span className="text-base">🌸</span>
                <div>
                  <p className="text-[11px] font-bold text-[#191c1e]">Parfum Mewah</p>
                  <p className="text-[9px] text-[#006194] font-semibold">Tahan 7 Hari</p>
                </div>
              </div>

              {/* Bodi Mesin Cuci */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#e6eaee] via-[#dce1e7] to-[#cbd2db] p-5 shadow-[0_20px_50px_rgba(0,30,60,0.15)] border-4 border-white/80">
              
              {/* Panel Atas Mesin Cuci */}
              <div className="mb-5 flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#20272f] via-[#2c3540] to-[#20272f] p-3 text-white shadow-inner">
                {/* Laci Deterjen */}
                <div className="flex flex-col items-start gap-1 rounded-xl bg-white/10 px-3 py-1.5 border border-white/15">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs">🫧</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                      Eco-Detergent
                    </span>
                  </div>
                  <div className="h-1 w-16 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-4/5 bg-cyan-400" />
                  </div>
                </div>

                {/* Layar Digital LCD Mesin Cuci */}
                <div className="flex flex-col items-center justify-center rounded-xl bg-black/80 px-4 py-1.5 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isRunning ? "bg-emerald-400 animate-ping" : "bg-amber-400"
                      }`}
                    />
                    <span className="font-mono text-sm font-black tracking-widest text-cyan-300">
                      00:{countdown < 10 ? `0${countdown}` : countdown}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-cyan-400/80">
                    {stage.shortName} • {stage.rpm} RPM
                  </span>

                  {/* Equalizer / soundwave bouncing bars */}
                  <div className="mt-1 flex items-end gap-0.5 h-3">
                    <span className="w-1 bg-cyan-400 rounded-full animate-[equalizer-bounce_0.8s_ease-in-out_infinite]" />
                    <span className="w-1 bg-cyan-300 rounded-full animate-[equalizer-bounce_0.6s_ease-in-out_infinite_0.2s]" />
                    <span className="w-1 bg-cyan-400 rounded-full animate-[equalizer-bounce_0.9s_ease-in-out_infinite_0.4s]" />
                    <span className="w-1 bg-cyan-200 rounded-full animate-[equalizer-bounce_0.7s_ease-in-out_infinite_0.1s]" />
                  </div>
                </div>

                {/* Tombol Dial / Knop Putar */}
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-gray-700 to-gray-500 shadow-md border-2 border-gray-400">
                  <div
                    className="h-6 w-1 rounded-full bg-cyan-300 transition-transform duration-500 origin-center"
                    style={{
                      transform: `rotate(${
                        activeStageKey === "wash"
                          ? 0
                          : activeStageKey === "rinse"
                          ? 90
                          : activeStageKey === "spin"
                          ? 180
                          : 270
                      }deg)`,
                    }}
                  />
                  <div className="absolute h-2 w-2 rounded-full bg-white" />
                </div>
              </div>

              {/* Pintu Kaca Mesin Cuci (Porthole Window) */}
              <div className="relative mx-auto flex aspect-square w-full max-w-[280px] items-center justify-center rounded-full bg-gradient-to-b from-[#7a889b] via-[#4d5b6e] to-[#2b3543] p-4 shadow-[inset_0_4px_12px_rgba(0,0,0,0.6),0_12px_24px_rgba(0,0,0,0.2)]">
                
                {/* Ring Krom Luar */}
                <div className="relative flex aspect-square w-full items-center justify-center rounded-full bg-gradient-to-tr from-[#94a3b8] via-[#cbd5e1] to-[#e2e8f0] p-3 shadow-inner">
                  
                  {/* Drum Kaca Dalam (Container) */}
                  <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] shadow-[inset_0_6px_20px_rgba(0,0,0,0.8)] border border-cyan-500/20">
                    
                    {/* Tekstur Perforasi Drum Berputar */}
                    <div
                      className={`absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px] ${
                        isRunning ? stage.drumAnimation : ""
                      }`}
                    />

                    {/* Air Bergelombang di Bagian Bawah Drum */}
                    {stage.hasWater && (
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t ${stage.waterGradient} transition-all duration-700 backdrop-blur-[1px]`}
                      >
                        {/* Permukaan Air Berombak */}
                        <div
                          className={`absolute -top-3 left-0 right-0 h-4 bg-cyan-200/40 rounded-full blur-[1px] ${
                            isRunning ? "animate-wave-slosh" : ""
                          }`}
                        />
                      </div>
                    )}

                    {/* Gelembung Busa Sabun (Foam) jika tahap Cuci */}
                    {stage.hasFoam && isRunning && (
                      <div className="absolute inset-0 pointer-events-none">
                        <span className="absolute left-[30%] top-[45%] text-lg animate-bubble-1">🫧</span>
                        <span className="absolute left-[65%] top-[55%] text-base animate-bubble-2">🫧</span>
                        <span className="absolute left-[45%] top-[60%] text-xl animate-bubble-3">🫧</span>
                        <span className="absolute left-[20%] top-[65%] text-sm animate-bubble-2">🫧</span>
                        <span className="absolute left-[75%] top-[40%] text-sm animate-bubble-1">🫧</span>
                      </div>
                    )}

                    {/* Efek Uap Panas / Angin Turbo jika tahap Spin */}
                    {stage.hasSteam && isRunning && (
                      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
                        <div className="h-28 w-28 rounded-full border-2 border-dashed border-cyan-300/40 animate-spin-turbo" />
                        <span className="absolute top-[30%] text-xs font-bold text-cyan-200 animate-steam">
                          💨 1200 RPM
                        </span>
                      </div>
                    )}

                    {/* Efek Bunga & Sparkles jika tahap Aroma */}
                    {stage.hasSparkles && isRunning && (
                      <div className="absolute inset-0 pointer-events-none">
                        <span className="absolute left-[25%] top-[30%] text-base animate-float-ambient">🌸</span>
                        <span className="absolute left-[70%] top-[35%] text-lg animate-float-ambient" style={{ animationDelay: "0.8s" }}>✨</span>
                        <span className="absolute left-[40%] top-[65%] text-base animate-float-ambient" style={{ animationDelay: "1.4s" }}>🌸</span>
                        <span className="absolute left-[60%] top-[60%] text-sm animate-float-ambient" style={{ animationDelay: "2s" }}>✨</span>
                      </div>
                    )}

                    {/* Pakaian Berputar di Dalam Drum */}
                    <div
                      className={`relative flex h-32 w-32 items-center justify-center transition-transform duration-300 ${
                        isRunning ? stage.drumAnimation : ""
                      }`}
                    >
                      {/* Baju Biru */}
                      <span className="absolute top-0 text-3xl drop-shadow-md select-none transform -rotate-12">
                        👕
                      </span>
                      {/* Kaos Kaki */}
                      <span className="absolute right-0 text-2xl drop-shadow-md select-none transform rotate-45">
                        🧦
                      </span>
                      {/* Dress / Handuk */}
                      <span className="absolute bottom-1 text-3xl drop-shadow-md select-none transform rotate-180">
                        👗
                      </span>
                      {/* Celana / Handuk */}
                      <span className="absolute left-0 text-2xl drop-shadow-md select-none transform -rotate-90">
                        🧺
                      </span>
                      {/* Poros Putar Tengah Drum */}
                      <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-gray-400 to-white shadow-md border-2 border-gray-600 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />
                      </div>
                    </div>

                    {/* Pantulan Kaca Mengkilap (Glass Highlight Glare) */}
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-80" />
                    <div className="pointer-events-none absolute -top-10 -left-10 h-36 w-36 rounded-full bg-white/10 blur-xl" />
                  </div>
                </div>

                {/* Gagang Pintu Kaca Mesin Cuci */}
                <div className="absolute right-2 top-1/2 h-10 w-3 -translate-y-1/2 rounded-full bg-gradient-to-r from-gray-300 to-gray-500 shadow-md" />
              </div>

              {/* Bagian Bawah Mesin Cuci (Filter & Kaki Karet) */}
              <div className="mt-4 flex items-center justify-between px-2 pt-2 border-t border-black/10">
                <div className="flex items-center gap-1 text-[10px] font-bold text-gray-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
                  <span>Sistem Higienis Otomatis</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg bg-gray-300/80 px-2 py-0.5 text-[9px] font-semibold text-gray-700">
                  <span>Drain Filter: 100% OK</span>
                </div>
              </div>
            </div>

            {/* Kaki Mesin Cuci */}
            <div className="flex justify-between px-6 pt-1">
              <div className="h-2 w-8 rounded-b-md bg-gray-700 shadow-sm" />
              <div className="h-2 w-8 rounded-b-md bg-gray-700 shadow-sm" />
            </div>
          </div>
        </ScrollReveal>

        {/* Kolom Kanan: Pilihan Tahapan & Telemetri Real-Time (7 Kolom di Desktop) */}
        <ScrollReveal animation="fade-left" duration={800} delay={150} className="w-full lg:col-span-7">
          <div className="flex flex-col gap-6">
            {/* Tab Pilihan 4 Tahapan */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {STAGE_KEYS.map((key) => {
                const item = STAGES[key];
                const isActive = activeStageKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleStageSelect(key)}
                    className={`flex flex-col items-center justify-center rounded-2xl p-3 text-center transition-all duration-200 active:scale-95 ${
                      isActive
                        ? "bg-[#006194] text-white shadow-lg ring-4 ring-[#006194]/20 scale-102"
                        : "bg-white text-[#191c1e] hover:bg-[#f2f4f6] shadow-sm border border-gray-100"
                    }`}
                  >
                    <span className="text-2xl mb-1">{item.icon}</span>
                    <span className="text-xs font-bold leading-tight">{item.shortName}</span>
                    <span
                      className={`text-[10px] mt-0.5 ${
                        isActive ? "text-[#cce5ff]" : "text-[#565e74]"
                      }`}
                    >
                      Tahap {item.number}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Kartu Informasi Tahap yang Sedang Aktif */}
            <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-md border border-[#e0e3e5]/60 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e0e3e5]/50 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#cce5ff] text-2xl shadow-sm">
                    {stage.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#006194]">
                      {stage.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-[#191c1e]">{stage.name}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-bold shadow-sm ${stage.badgeColor}`}>
                    {stage.rpm} RPM
                  </span>
                  <span className="rounded-full bg-[#f2f4f6] px-3 py-1 text-xs font-semibold text-[#3f4850]">
                    {stage.temp}
                  </span>
                </div>
              </div>

              {/* Deskripsi */}
              <p className="mt-4 text-sm leading-relaxed text-[#3f4850]">
                {stage.description}
              </p>

              {/* Grid 4 Indikator Telemetri Spesifikasi */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stage.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex flex-col rounded-xl bg-[#f7f9fb] p-3 border border-[#e0e3e5]/40"
                  >
                    <span className="text-base mb-1">{h.icon}</span>
                    <span className="text-[11px] font-medium text-[#565e74]">{h.label}</span>
                    <span className="text-xs font-bold text-[#191c1e] mt-0.5">{h.val}</span>
                  </div>
                ))}
              </div>

              {/* Progress bar indikator tahapan */}
              <div className="mt-6 pt-4 border-t border-[#e0e3e5]/50 flex items-center justify-between text-xs text-[#565e74]">
                <span>Alur Proses Cuci:</span>
                <div className="flex items-center gap-1.5 font-bold text-[#006194]">
                  {STAGE_KEYS.map((k, idx) => (
                    <span
                      key={k}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeStageKey === k
                          ? "w-8 bg-[#006194]"
                          : idx < STAGE_KEYS.indexOf(activeStageKey)
                          ? "w-4 bg-[#89f5e7]"
                          : "w-2 bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Banner Jaminan Cepat & Aksi */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-[#006194] p-5 text-white shadow-md">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🧺</span>
                <div>
                  <h4 className="text-sm font-bold">Mau Pakaian Bersih Tanpa Repot?</h4>
                  <p className="text-xs text-[#cce5ff]">
                    Kurir siap jemput di kosanmu. Tinggal taruh di depan pintu kamar!
                  </p>
                </div>
              </div>
              <Link
                to="/layanan"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#006194] shadow hover:bg-[#f2f4f6] transition-all active:scale-95"
              >
                Pilih Layanan 🚀
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Ticker / Running Banner Animasi Berjalan (Marquee) dengan ScrollReveal */}
      <ScrollReveal animation="fade-up" duration={700} delay={200}>
        <div className="mt-14 overflow-hidden rounded-2xl bg-white py-3.5 shadow-sm border border-[#e0e3e5]/60">
          <div className="animate-marquee items-center gap-8 text-xs font-bold text-[#3f4850]">
            <span className="flex items-center gap-2">
              <span className="text-base">🫧</span> 1 Mesin 1 Pelanggan (Tidak Pernah Dicampur)
            </span>
            <span className="text-[#006194]">•</span>
            <span className="flex items-center gap-2">
              <span className="text-base">🚚</span> Gratis Antar Jemput Area Kos Kampus
            </span>
            <span className="text-[#006194]">•</span>
            <span className="flex items-center gap-2">
              <span className="text-base">🌸</span> Parfum Tahan Hingga 7 Hari
            </span>
            <span className="text-[#006194]">•</span>
            <span className="flex items-center gap-2">
              <span className="text-base">⚡</span> Layanan Express Siap 6-12 Jam
            </span>
            <span className="text-[#006194]">•</span>
            <span className="flex items-center gap-2">
              <span className="text-base">⚖️</span> Timbangan Digital Terbuka & Transparan
            </span>
            <span className="text-[#006194]">•</span>
            <span className="flex items-center gap-2">
              <span className="text-base">👔</span> Setrika Uap Rapi Bebas Kusut
            </span>
            <span className="text-[#006194]">•</span>
            {/* Duplikasi untuk looping mulus */}
            <span className="flex items-center gap-2">
              <span className="text-base">🫧</span> 1 Mesin 1 Pelanggan (Tidak Pernah Dicampur)
            </span>
            <span className="text-[#006194]">•</span>
            <span className="flex items-center gap-2">
              <span className="text-base">🚚</span> Gratis Antar Jemput Area Kos Kampus
            </span>
            <span className="text-[#006194]">•</span>
            <span className="flex items-center gap-2">
              <span className="text-base">🌸</span> Parfum Tahan Hingga 7 Hari
            </span>
            <span className="text-[#006194]">•</span>
            <span className="flex items-center gap-2">
              <span className="text-base">⚡</span> Layanan Express Siap 6-12 Jam
            </span>
          </div>
        </div>
      </ScrollReveal>
      </div>
    </section>
  );
};

export default LaundrySimulator;
