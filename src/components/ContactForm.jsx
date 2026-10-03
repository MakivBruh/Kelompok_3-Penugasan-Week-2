import { useState } from "react";

// API endpoint dan token
const API_URL = "https://devx2026-post.vercel.app/api/posts";
const API_TOKEN = "MASUKKAN_TOKEN_DISINI"; // Ganti dengan token dari mentor

// Komponen ContactForm — form kontak dengan validasi dan integrasi API
// State: form (input), errors (validasi), status (sukses/gagal), loading
const ContactForm = () => {
  const [form, setForm] = useState({ author: "", title: "", content: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "success" | "error"
  const [apiMessage, setApiMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Validasi form sebelum submit
  const validate = () => {
    const newErrors = {};
    if (!form.author || form.author.trim().length < 2)
      newErrors.author = "Nama minimal 2 karakter.";
    if (!form.title || form.title.trim().length < 3)
      newErrors.title = "Subjek minimal 3 karakter.";
    if (!form.content || form.content.trim().length < 10)
      newErrors.content = "Pesan minimal 10 karakter.";
    return newErrors;
  };

  // Handler onChange untuk setiap input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Hapus error saat user mulai mengetik
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Handler onSubmit — validasi lalu kirim ke API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setApiMessage("");

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({
          author: form.author.trim(),
          title: form.title.trim(),
          content: form.content.trim(),
        }),
      });

      // Error 401 — token tidak valid
      if (res.status === 401) {
        setStatus("error");
        setApiMessage("Akses ditolak, token tidak valid. Hubungi pengelola.");
        return;
      }

      const data = await res.json();

      // Error 400 — validasi API gagal
      if (res.status === 400) {
        setStatus("error");
        setApiMessage(data.message || "Input tidak valid. Periksa kembali isian form.");
        return;
      }

      // 201 Created — sukses
      if (res.status === 201) {
        setStatus("success");
        setApiMessage("Pesan berhasil dikirim! Kami akan segera menghubungi kamu. 🎉");
        setForm({ author: "", title: "", content: "" });
        return;
      }

      // Response lain
      setStatus("error");
      setApiMessage(data.message || "Terjadi kesalahan. Coba lagi nanti.");
    } catch {
      setStatus("error");
      setApiMessage("Tidak dapat terhubung ke server. Periksa koneksi internet kamu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

      {/* Pesan sukses — conditional rendering */}
      {status === "success" && (
        <div className="rounded-xl bg-[#89f5e7]/30 border border-[#00685f]/30 px-4 py-3 text-sm font-semibold text-[#00685f]">
          {apiMessage}
        </div>
      )}

      {/* Pesan error API — conditional rendering */}
      {status === "error" && (
        <div className="rounded-xl bg-[#ffdad6] border border-[#ba1a1a]/30 px-4 py-3 text-sm font-semibold text-[#ba1a1a]">
          {apiMessage}
        </div>
      )}

      {/* Input Nama / Author */}
      <div className="flex flex-col gap-1">
        <label htmlFor="author" className="text-sm font-semibold text-[#191c1e]">
          Nama <span className="text-[#ba1a1a]">*</span>
        </label>
        <input
          id="author"
          name="author"
          type="text"
          value={form.author}
          onChange={handleChange}
          placeholder="Nama lengkapmu"
          className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#006194] focus:ring-2 focus:ring-[#cce5ff] ${
            errors.author ? "border-[#ba1a1a] bg-[#ffdad6]/20" : "border-[#bfc7d2] bg-white"
          }`}
        />
        {/* Error validasi — conditional rendering */}
        {errors.author && (
          <p className="text-xs text-[#ba1a1a]">{errors.author}</p>
        )}
      </div>

      {/* Input Subjek / Title */}
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="text-sm font-semibold text-[#191c1e]">
          Subjek <span className="text-[#ba1a1a]">*</span>
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
          placeholder="Subjek pesan"
          className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#006194] focus:ring-2 focus:ring-[#cce5ff] ${
            errors.title ? "border-[#ba1a1a] bg-[#ffdad6]/20" : "border-[#bfc7d2] bg-white"
          }`}
        />
        {errors.title && (
          <p className="text-xs text-[#ba1a1a]">{errors.title}</p>
        )}
      </div>

      {/* Input Pesan / Content */}
      <div className="flex flex-col gap-1">
        <label htmlFor="content" className="text-sm font-semibold text-[#191c1e]">
          Pesan <span className="text-[#ba1a1a]">*</span>
        </label>
        <textarea
          id="content"
          name="content"
          rows={4}
          value={form.content}
          onChange={handleChange}
          placeholder="Tuliskan pesan atau pertanyaanmu di sini..."
          className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#006194] focus:ring-2 focus:ring-[#cce5ff] resize-none ${
            errors.content ? "border-[#ba1a1a] bg-[#ffdad6]/20" : "border-[#bfc7d2] bg-white"
          }`}
        />
        {errors.content && (
          <p className="text-xs text-[#ba1a1a]">{errors.content}</p>
        )}
      </div>

      {/* Tombol submit — disabled saat loading */}
      <button
        type="submit"
        disabled={loading}
        className="mt-2 w-full rounded-full bg-[#006194] py-3 text-sm font-semibold text-white shadow-md hover:bg-[#007bb9] transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Mengirim..." : "Kirim Pesan 📨"}
      </button>
    </form>
  );
};

export default ContactForm;
