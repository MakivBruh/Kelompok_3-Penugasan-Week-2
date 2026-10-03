import SpotlightCard from "./reactbits/SpotlightCard";

// Komponen ServiceCard — kartu layanan modern ditenagai oleh React Bits SpotlightCard
// Menerima props: title, description, price, unit, duration, icon, badge
const ServiceCard = ({ title, description, price, unit, duration, icon, badge }) => {
  const isPrimary = !!badge;

  return (
    <SpotlightCard
      spotlightColor={isPrimary ? "rgba(0, 97, 148, 0.25)" : "rgba(86, 94, 116, 0.15)"}
      className={`group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isPrimary ? "border-[#006194]/30 shadow-md" : "border-[#e0e3e5] shadow-sm"
      }`}
    >
      <div className="relative flex h-full min-h-[350px] flex-col justify-between p-5 sm:min-h-[370px] sm:p-6">
        {/* Badge "Favorit" */}
        {badge && (
          <div className="absolute right-4 top-4 rounded-full border border-[#cce5ff] bg-[#eaf5fb] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#006194]">
            {badge}
          </div>
        )}

        {/* Content Top */}
        <div className="flex flex-col gap-3">
          <div
            className={`mb-1 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
              isPrimary ? "bg-gradient-to-br from-[#cce5ff] to-[#e4f8f6] text-[#006194]" : "bg-gradient-to-br from-[#e6f2f8] to-[#e9ebfb] text-[#006194]"
            }`}
          >
            {icon}
          </div>

          <h3 className="text-lg font-extrabold text-[#191c1e] transition-colors group-hover:text-[#006194] sm:text-xl">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-[#53606a]">
            {description}
          </p>
        </div>

        {/* Price & Duration */}
        <div
          className={`mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border px-4 py-4 transition-colors ${
            isPrimary ? "border-[#cce5ff] bg-[#eaf5fb]/80" : "border-[#e4eaee] bg-[#f6f9fa]"
          }`}
        >
          <div>
            <span
              className={`block text-2xl font-extrabold leading-tight tracking-tight ${
                isPrimary ? "text-[#006194]" : "text-[#191c1e]"
              }`}
            >
              {price}
            </span>
            <span className="mt-1 block text-[11px] text-[#65727b]">{unit}</span>
          </div>
          <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/80 bg-white/80 px-2.5 py-1.5 text-[11px] font-semibold text-[#53606a] shadow-sm">
            <span aria-hidden="true">⏱</span>
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default ServiceCard;
