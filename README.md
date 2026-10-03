# LaundryKost — Week 2 Project Dev

Refactoring website LaundryKost dari HTML/CSS ke ReactJS menggunakan Vite, Tailwind CSS, dan React Router DOM.

## Tech Stack

- **Framework:** ReactJS (Vite)
- **Styling:** Tailwind CSS v4
- **Routing:** React Router DOM v7
- **Hosting:** Vercel
- **Version Control:** GitHub

## Fitur

- Multi-page routing (Beranda, Layanan, Paket, Kontak, 404)
- Responsive navbar dengan hamburger menu
- Modal CTA interaktif
- Form kontak dengan validasi + integrasi API POST
- Data via props menggunakan `.map()`
- Section simulasi mesin cuci interaktif dengan animasi drum berputar, gelombang air, gelembung busa, uap, dan running marquee ticker
- Minimal 3 `useState`: mobile menu, modal, form state, simulator stage state

## Struktur Folder

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── LaundrySimulator.jsx
│   ├── ServiceCard.jsx
│   ├── PackageCard.jsx
│   ├── Modal.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── Home.jsx
│   ├── Layanan.jsx
│   ├── Paket.jsx
│   ├── Kontak.jsx
│   └── NotFound.jsx
├── data/
│   ├── services.js
│   └── packages.js
├── App.jsx
├── main.jsx
└── index.css
```

## Cara Menjalankan

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run build
# Push ke GitHub, import di Vercel
```

## AI Tools yang Digunakan

- Claude (Anthropic) — digunakan untuk membantu scaffolding struktur komponen dan logika API. Semua kode dipahami dan dimodifikasi oleh anggota kelompok.

## Link

- **Vercel:** week2dev-x.vercel.app*
- **GitHub:** [LaundryKost](https://github.com/MakivBruh/week2devX.git)
