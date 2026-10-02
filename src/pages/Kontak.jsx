import ContactForm from "../components/ContactForm";

// Halaman Kontak — form hubungi kami dengan integrasi API
const Kontak = () => {
  return (
    <section className="w-full px-4 py-10 bg-[#f2f4f6] lg:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Kolom kiri — informasi kontak */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#cce5ff] text-[#001d31] mb-4">
                <span>📬</span>
                <span className="text-xs font-bold uppercase tracking-wider">Hubungi Kami</span>
              </div>
              <h1 className="text-3xl font-bold text-[#191c1e] mb-3">
                Ada Pertanyaan? Kami Siap Membantu!
              </h1>
              <p className="text-base text-[#3f4850]">
                Kirim pesan melalui form di samping, atau langsung hubungi kami lewat
                WhatsApp untuk respons lebih cepat.
              </p>
            </div>

            {/* Info kontak */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
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
              <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
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
              <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#89f5e7]/50 text-2xl">
                  ⏰
                </div>
                <div>
                  <p className="text-sm font-bold text-[#191c1e]">Jam Operasional</p>
                  <p className="text-sm text-[#3f4850]">Senin – Sabtu, 07.00 – 20.00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom kanan — form kontak */}
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-1 text-xl font-bold text-[#191c1e]">Kirim Pesan</h2>
            <p className="mb-5 text-sm text-[#3f4850]">
              Isi form di bawah ini. Semua kolom wajib diisi.
            </p>
            {/* Komponen ContactForm dengan validasi & integrasi API */}
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
