// Komponen Modal — digunakan untuk tombol CTA "Pesan Sekarang"
// Props: isOpen (boolean), onClose (function)
// Menampilkan pilihan paket dan tombol WhatsApp
const Modal = ({ isOpen, onClose }) => {
  // Conditional rendering: tidak render apa-apa jika modal tertutup
  if (!isOpen) return null;

  const options = [
    { label: "Cuci Kering", price: "Rp7.000/kg", msg: "Saya mau pesan Cuci Kering" },
    { label: "Cuci + Setrika", price: "Rp9.000/kg", msg: "Saya mau pesan Cuci + Setrika" },
    { label: "Laundry Express", price: "Rp15.000/kg", msg: "Saya mau pesan Laundry Express" },
    { label: "Cuci Sepatu", price: "Rp20.000/pasang", msg: "Saya mau pesan Cuci Sepatu" },
  ];

  return (
    // Overlay — klik overlay untuk menutup modal
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Pilih layanan laundry"
    >
      {/* Konten modal — stopPropagation agar klik dalam modal tidak menutup */}
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#eceef0] text-[#191c1e] hover:bg-[#e0e3e5] transition-colors"
          aria-label="Tutup modal"
        >
          ✕
        </button>

        <h2 className="mb-1 text-xl font-bold text-[#191c1e]">Pilih Layanan 🧺</h2>
        <p className="mb-5 text-sm text-[#3f4850]">
          Pilih layanan yang kamu butuhkan, lalu kami hubungi via WhatsApp.
        </p>

        {/* Daftar opsi layanan */}
        <div className="flex flex-col gap-3">
          {options.map((opt) => (
            <a
              key={opt.label}
              href={`https://wa.me/6285643429736?text=Halo%20LaundryKost%2C%20${encodeURIComponent(opt.msg)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center justify-between rounded-xl bg-[#f2f4f6] px-4 py-3 hover:bg-[#cce5ff] hover:text-[#006194] transition-colors group"
            >
              <span className="text-sm font-semibold text-[#191c1e] group-hover:text-[#006194]">
                {opt.label}
              </span>
              <span className="text-xs font-bold text-[#006194]">{opt.price}</span>
            </a>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-[#707881]">
          Gratis konsultasi · Antar-jemput radius kos terdekat
        </p>
      </div>
    </div>
  );
};

export default Modal;
