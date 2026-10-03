// Komponen PackageCard — kartu paket harga reusable
// Menerima props: title, quota, price, unit, desc, features (array), highlight, badge, waMsg
const PackageCard = ({ title, quota, price, unit, desc, features, highlight, badge, waMsg }) => {
  return (
    <article className={`relative flex h-full flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
      highlight
        ? "border-[#006194]/20 bg-white shadow-[0_18px_50px_rgba(0,97,148,0.14)] lg:-translate-y-3 hover:shadow-[0_24px_60px_rgba(0,97,148,0.2)]"
        : "border-[#e0e3e5] bg-white shadow-sm hover:border-[#006194]/20 hover:shadow-xl"
    }`}>
      {/* Badge "Paling Hemat" — conditional rendering */}
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-[#006194] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md whitespace-nowrap">
          ⭐ {badge}
        </div>
      )}

      {/* Konten atas */}
      <div className={badge ? "pt-3" : ""}>
        <div className="flex items-center justify-between mb-2">
          <span className={`text-lg font-bold ${highlight ? "text-[#006194]" : "text-[#191c1e]"}`}>
            {title}
          </span>
          <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${highlight ? "bg-[#cce5ff] text-[#006194]" : "bg-[#eceef0] text-[#3f4850]"}`}>
            {quota}
          </span>
        </div>

        <p className="mb-4 text-xs text-[#3f4850]">{desc}</p>

        <div className="mb-4">
          <span className={`text-2xl font-extrabold ${highlight ? "text-[#006194]" : "text-[#191c1e]"}`}>
            {price}
          </span>
          <span className="text-sm text-[#3f4850]">{unit}</span>
        </div>

        {/* Daftar fitur — dikirim via props array, ditampilkan dengan .map() */}
        <ul className="flex flex-col gap-2 mb-6">
          {features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#3f4850]">
              <span className="text-[#006194] mt-0.5">✓</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tombol CTA — event onClick menuju WhatsApp */}
      <a
        href={`https://wa.me/6285643429736?text=${encodeURIComponent(waMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full inline-flex items-center justify-center rounded-full py-2.5 text-sm font-semibold transition-all active:scale-95 ${
          highlight
            ? "bg-[#006194] text-white shadow-md hover:bg-[#007bb9]"
            : "bg-[#eceef0] text-[#006194] hover:bg-[#e0e3e5]"
        }`}
      >
        Ambil Paket Ini
      </a>
    </article>
  );
};

export default PackageCard;
