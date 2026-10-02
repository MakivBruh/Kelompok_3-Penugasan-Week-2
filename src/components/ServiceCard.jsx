// Komponen ServiceCard — kartu layanan reusable
// Menerima props: title, description, price, unit, duration, icon, badge
const ServiceCard = ({ title, description, price, unit, duration, icon, badge }) => {
  const isPrimary = badge;

  return (
    <article className="relative flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Badge "Favorit" — conditional rendering jika ada badge */}
      {badge && (
        <div className="absolute top-0 right-0 bg-[#006194] text-white px-3 py-1 rounded-bl-xl text-[11px] font-bold uppercase tracking-wider">
          {badge}
        </div>
      )}

      {/* Ikon layanan */}
      <div className="flex flex-col gap-3">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-2 ${isPrimary ? "bg-[#cce5ff]" : "bg-[#dae2fd]"}`}>
          {icon}
        </div>

        {/* Judul & deskripsi — dari props */}
        <h3 className="text-lg font-bold text-[#191c1e]">{title}</h3>
        <p className="text-sm text-[#3f4850]">{description}</p>
      </div>

      {/* Harga & durasi */}
      <div className={`mt-4 rounded-xl px-4 py-3 flex items-center justify-between ${isPrimary ? "bg-[#cce5ff]/30" : "bg-[#f2f4f6]/80"}`}>
        <div>
          <span className={`text-2xl font-extrabold leading-tight ${isPrimary ? "text-[#006194]" : "text-[#191c1e]"}`}>
            {price}
          </span>
          <span className="text-xs text-[#3f4850]"> {unit}</span>
        </div>
        <div className="flex items-center gap-1 text-[#3f4850]">
          <span>⏱</span>
          <span className="text-xs font-semibold">{duration}</span>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
