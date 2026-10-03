import ContactForm from "../components/ContactForm";
import SplitText from "../components/reactbits/SplitText";
import GradientText from "../components/reactbits/GradientText";
import BlurText from "../components/reactbits/BlurText";
import FadeContent from "../components/reactbits/FadeContent";
import SpotlightCard from "../components/reactbits/SpotlightCard";

// Halaman Kontak — form hubungi kami dengan integrasi API
const Kontak = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#f2f4f6] px-4 py-10 sm:py-14 lg:px-14">
      <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-[#cce5ff]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#89f5e7]/25 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Kolom kiri — informasi kontak */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#cce5ff] text-[#001d31] mb-4">
                <span>📬</span>
                <span className="text-xs font-bold uppercase tracking-wider">Hubungi Kami</span>
              </div>
              <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-[#191c1e] md:text-4xl">
                <SplitText text="Ada Pertanyaan?" delay={35} className="inline-block" />{" "}
                <GradientText colors={["#006194", "#007bb9", "#00685f", "#89f5e7", "#006194"]} animationSpeed={5} className="inline-block font-extrabold">
                  Kami Siap Membantu!
                </GradientText>
              </h1>
              <BlurText text="Kirim pesan melalui form di samping, atau langsung hubungi kami lewat WhatsApp untuk respons lebih cepat." delay={18} animateBy="words" className="text-base text-[#3f4850]" />
            </div>

            {/* Info kontak */}
            <div className="flex flex-col gap-4">
              <FadeContent direction="left" distance={22} duration={600}>
              <SpotlightCard spotlightColor="rgba(0, 97, 148, 0.12)" className="p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#cce5ff] text-2xl">
                  💬
                </div>
                <div>
                  <p className="text-sm font-bold text-[#191c1e]">WhatsApp</p>
                  <a
                    href="https://wa.me/6285643429736"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#006194] hover:underline"
                  >
                    +62 856-4342-9736
                  </a>
                </div>
                </div>
              </SpotlightCard>
              </FadeContent>
              <FadeContent direction="left" distance={22} duration={650}>
              <SpotlightCard spotlightColor="rgba(86, 94, 116, 0.12)" className="p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#dae2fd] text-2xl">
                  📸
                </div>
                <div>
                  <p className="text-sm font-bold text-[#191c1e]">Instagram</p>
                  <a
                    href="https://instagram.com/laundrykost.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#006194] hover:underline"
                  >
                    @laundrykost.id
                  </a>
                </div>
                </div>
              </SpotlightCard>
              </FadeContent>
              <FadeContent direction="left" distance={22} duration={700}>
              <SpotlightCard spotlightColor="rgba(0, 104, 95, 0.12)" className="p-4 shadow-sm transition-shadow hover:shadow-md">
                <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#89f5e7]/50 text-2xl">
                  ⏰
                </div>
                <div>
                  <p className="text-sm font-bold text-[#191c1e]">Jam Operasional</p>
                  <p className="text-sm text-[#3f4850]">Senin – Sabtu, 07.00 – 20.00 WIB</p>
                </div>
                </div>
              </SpotlightCard>
              </FadeContent>
            </div>
          </div>

          {/* Kolom kanan — form kontak */}
          <FadeContent direction="right" distance={28} duration={700}>
          <SpotlightCard spotlightColor="rgba(0, 97, 148, 0.08)" className="p-6 shadow-md">
            <div className="relative z-10">
            <h2 className="mb-1 text-xl font-bold text-[#191c1e]">Kirim Pesan</h2>
            <p className="mb-5 text-sm text-[#3f4850]">
              Isi form di bawah ini. Semua kolom wajib diisi.
            </p>
            {/* Komponen ContactForm dengan validasi & integrasi API */}
            <ContactForm />
            </div>
          </SpotlightCard>
          </FadeContent>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
