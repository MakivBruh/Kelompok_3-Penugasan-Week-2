// Data paket harga LaundryKost
// Dikirim ke komponen PackageCard via props
export const packages = [
  {
    id: 1,
    title: "Paket Mingguan",
    quota: "5 kg / minggu",
    price: "Rp35.000",
    unit: "/ paket",
    desc: "Pas untuk rotasi pakaian kuliah mingguan santai tanpa cucian menumpuk di kamar kos.",
    features: [
      "Cuci + setrika ekstra rapi",
      "Parfum premium aroma pilihan",
      "Gratis plastik packing kedap debu",
    ],
    highlight: false,
    waMsg: "Halo LaundryKost, saya tertarik dengan Paket Mingguan Rp35.000",
  },
  {
    id: 2,
    title: "Paket Bulanan",
    quota: "20 kg / bulan",
    price: "Rp130.000",
    unit: "/ bulan",
    desc: "Solusi all-in-one sebulan penuh. Paling favorit di kalangan mahasiswa dan anak rantau.",
    features: [
      "Bebas drop kapan saja (dicicil per 5kg)",
      "Gratis jemput & antar kosan",
      "Prioritas antrean mesin harian",
      "Bonus cuci 1 pasang sepatu",
    ],
    highlight: true,
    badge: "Paling Hemat · Pilihan Mahasiswa",
    waMsg: "Halo LaundryKost, saya mau ambil Paket Bulanan 20kg Rp130.000",
  },
  {
    id: 3,
    title: "Paket Hemat",
    quota: "Kuota 10 kg",
    price: "Rp65.000",
    unit: "/ paket",
    desc: "Pilihan fleksibel untuk kebutuhan cucian 2 minggu atau saat tugas kuliah sedang padat.",
    features: [
      "Masa berlaku fleksibel 45 hari",
      "Cuci + setrika halus dan rapi",
      "Garansi pakaian wangi segar tahan lama",
    ],
    highlight: false,
    waMsg: "Halo LaundryKost, saya tertarik dengan Paket Hemat 10kg Rp65.000",
  },
];
