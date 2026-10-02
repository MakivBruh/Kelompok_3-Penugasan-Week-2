// Data layanan LaundryKost
// Dikirim ke komponen via props untuk menghindari hardcode berulang
export const services = [
  {
    id: 1,
    title: "Cuci Kering",
    description: "Cuci bersih dengan deterjen premium ramah serat kain dan dikeringkan higienis, siap langsung dilipat rapi.",
    price: "Rp7.000",
    unit: "per kilogram (kg)",
    duration: "2 hari kerja",
    icon: "💧",
    color: "secondary",
  },
  {
    id: 2,
    title: "Cuci + Setrika",
    description: "Pakaian dicuci wangi, dikeringkan, dan disetrika uap ekstra rapi — bebas kusut, siap langsung dipakai.",
    price: "Rp9.000",
    unit: "per kilogram (kg)",
    duration: "2-3 hari kerja",
    icon: "👔",
    color: "primary",
    badge: "Favorit Mahasiswa",
  },
  {
    id: 3,
    title: "Laundry Express",
    description: "Pakaian darurat untuk seminar, magang, atau ujian besok? Selesai dalam hitungan jam tanpa kompromi.",
    price: "Rp15.000",
    unit: "per kilogram (kg)",
    duration: "6-12 jam",
    icon: "⚡",
    color: "tertiary",
  },
  {
    id: 4,
    title: "Cuci Sepatu",
    description: "Deep clean anti-bakteri dan kering sempurna. Sepatu kembali seperti baru.",
    price: "Rp20.000",
    unit: "per pasang",
    duration: "1-2 hari",
    icon: "👟",
    color: "primary",
  },
];

// Data alur proses laundry
export const steps = [
  { step: 1, title: "Dijemput", desc: "Kurir ambil di depan kamar" },
  { step: 2, title: "Dicuci Higienis", desc: "1 mesin untuk 1 pelanggan" },
  { step: 3, title: "Disetrika Uap", desc: "Licin rapi & wangi pilihan" },
  { step: 4, title: "Siap Diantar", desc: "Pakaian kembali ke kosanmu" },
];

// Data keunggulan
export const features = [
  {
    id: 1,
    title: "Timbangan Akurat",
    desc: "Timbangan digital transparan di depan Anda. Tidak ada pembulatan sepihak yang merugikan.",
    icon: "⚖️",
  },
  {
    id: 2,
    title: "Deterjen Lembut",
    desc: "Formula ramah serat kain yang menjaga warna baju tetap cerah dan tidak cepat pudar.",
    icon: "🧴",
  },
  {
    id: 3,
    title: "Wangi Berhari-hari",
    desc: "Aroma elegan dan segar yang menempel kuat berhari-hari, bikin percaya diri di kelas.",
    icon: "🌸",
  },
  {
    id: 4,
    title: "Dekat Kampus",
    desc: "Titik drop-off strategis di kantong kos kampus favorit, didukung kurir ramah dan cepat.",
    icon: "📍",
  },
];
