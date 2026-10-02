import { Link } from "react-router-dom";

// Halaman 404 — ditampilkan saat route tidak ditemukan
const NotFound = () => {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center bg-[#f7f9fb]">
      <div className="text-8xl mb-6">🧺</div>
      <h1 className="text-6xl font-extrabold text-[#006194] mb-3">404</h1>
      <h2 className="text-2xl font-bold text-[#191c1e] mb-3">
        Halaman Tidak Ditemukan
      </h2>
      <p className="max-w-md text-base text-[#3f4850] mb-8">
        Sepertinya cucian kamu nyasar ke halaman yang salah. Yuk kembali ke halaman utama!
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-full bg-[#006194] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#007bb9] transition-all active:scale-95"
      >
        🏠 Kembali ke Beranda
      </Link>
    </section>
  );
};

export default NotFound;
