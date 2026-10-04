import { Droplets, Mail, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

// Ganti placeholder di bagian ini saat data kelompok sudah siap.
const groupInfo = {
  name: "Kelompok 3",
  course: "Project Development - DevXperience 2026",
  campus: "Universitas Negeri Semarang (UNNES)",
  members: [
    {
      name: "Moch. Makiv Fazlurrahman",
      id: "2605090028",
      socials: [
        { platform: "Instagram", url: "https://www.instagram.com/makiv_jr11/" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/makivfaz" },
        { platform: "GitHub", url: "https://github.com/makivbruh" },
      ],
      whatsapp: "6285869040688",
    },
    {
      name: "Galang Radit Perdana",
      id: "2604130192",
      socials: [
        { platform: "Instagram", url: "https://www.instagram.com/akuu_galang" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/galang-radit-perdana" },
        { platform: "GitHub", url: "https://github.com/Galang-RP" },
      ],
      whatsapp: "6285643429736",
    },
    {
      name: "M. Rizki Firgiawan",
      id: "2505090033",
      socials: [
        { platform: "Instagram", url: "https://www.instagram.com/mhmdrzkyyfrg08__" },
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/m-rizki-firgiawan-87679a20a" },
        { platform: "GitHub", url: "https://github.com/rizkik008" },
      ],
      whatsapp: "6285860001377",
    },
  ],
};

const navLinks = [
  { label: "Beranda", to: "/" },
  { label: "Layanan", to: "/layanan" },
  { label: "Paket harga", to: "/paket" },
  { label: "Kontak", to: "/kontak" },
];

const SocialIcon = ({ platform }) => {
  if (platform === "Instagram") {
    return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.7" r=".8" fill="currentColor" stroke="none" /></svg>;
  }
  if (platform === "LinkedIn") {
    return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor"><path d="M5.2 3.5a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.5 9h3.4v11.5H3.5zM9 9h3.2v1.6h.1A3.6 3.6 0 0 1 15.5 8.8c3.5 0 4.2 2.3 4.2 5.2v6.5h-3.4v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.9H9z" /></svg>;
  }
  if (platform === "GitHub") {
    return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor"><path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.83 2.23 3.4 1.7.1-.72.4-1.2.72-1.48-2.5-.28-5.13-1.25-5.13-5.55 0-1.23.44-2.23 1.16-3.01-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0C17.06 5.9 18 6.2 18 6.2c.61 1.55.23 2.7.11 2.98.73.78 1.16 1.78 1.16 3.01 0 4.31-2.64 5.26-5.15 5.54.4.35.76 1.03.76 2.08v2.28c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.4 11.7a8.4 8.4 0 0 1-12.4 7.4L4 20l.9-3.8a8.4 8.4 0 1 1 15.5-4.5Z" /><path d="M9 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4 0 .6.5.9 1.3 1.7 2.2 2.2.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.3.6-.1.7-.5 1.3-1.1 1.6-.7.4-1.5.3-2.5-.1a10 10 0 0 1-4.3-3.7c-.7-1.1-1-2.1-.8-2.9.2-.5.5-.9.9-1Z" /></svg>;
};

const socialColors = {
  Instagram: "text-[#f472b6]",
  LinkedIn: "text-[#60a5fa]",
  GitHub: "text-white",
  WhatsApp: "text-[#4ade80]",
};

const Footer = () => {  
  return (
    <footer className="relative mt-auto overflow-hidden bg-[#08283b] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-40 h-80 w-80 rounded-full bg-[#087bb0]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-6 pt-12 sm:px-8 lg:px-14 lg:pt-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.65fr_1.35fr] lg:items-start lg:gap-12 lg:pb-12">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 rounded-lg" aria-label="LaundryKost beranda">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#cce5ff] text-[#006194] shadow-lg shadow-black/10">
                <Droplets size={23} strokeWidth={2.2} />
              </span>
              <span className="text-xl font-bold tracking-tight">LaundryKost</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
              Solusi laundry praktis untuk rutinitas anak kost. Pakaian bersih,
              waktu luang lebih banyak.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-[#9bdcf4]">
              <Mail size={16} /> laundrykost@gmail.com
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Jelajahi</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-slate-300 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-group-title" className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:col-span-2 lg:col-span-1 lg:p-6">
            <div>
              <div className="flex items-center gap-2 text-[#9bdcf4]">
                <Users size={17} />
                <span className="text-xs font-semibold uppercase tracking-[0.16em]">Tentang proyek</span>
              </div>
              <h2 id="footer-group-title" className="mt-3 text-lg font-semibold leading-snug text-white">{groupInfo.name}</h2>
              <p className="mt-1 text-sm leading-5 text-slate-300">{groupInfo.course}</p>
            </div>
            <p className="mt-3 flex items-start gap-2 text-sm leading-5 text-slate-300">
              <MapPin size={15} className="shrink-0 text-[#9bdcf4]" /> {groupInfo.campus}
            </p>
            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">Anggota kelompok</p>
              <ul className="divide-y divide-white/[0.08]">
                {groupInfo.members.map((member, index) => (
                  <li key={`${member.name}-${index}`} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3 first:pt-0 last:pb-0">
                    <div className="min-w-0">
                      <p className="break-words text-sm font-medium leading-5 text-white">{member.name}</p>
                      <p className="mt-0.5 text-xs text-slate-400">NIM {member.id}</p>
                    </div>
                    <ul className="flex shrink-0 items-center gap-1.5" aria-label={`Media sosial ${member.name}`}>
                      {[...member.socials, {
                        platform: "WhatsApp",
                        url: member.whatsapp ? `https://wa.me/${member.whatsapp.replace(/\D/g, "")}` : "",
                      }].map(({ platform, url }) => {
                        const classes = "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 transition-colors";
                        const brandColor = socialColors[platform] ?? "text-slate-300";

                        return (
                          <li key={platform}>
                            {url ? (
                              <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${platform} ${member.name}`} title={platform} className={`${classes} ${brandColor} hover:border-white/30 hover:bg-white/10`}>
                                <SocialIcon platform={platform} />
                              </a>
                            ) : (
                              <span aria-label={`${platform}, link belum diisi`} title={`${platform} · link belum diisi`} className={`${classes} cursor-default text-slate-600`}>
                                <SocialIcon platform={platform} />
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LaundryKost. Dibuat dengan semangat kolaborasi.</p>
          <p>Proyek pengembangan web · LaundryKost</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
