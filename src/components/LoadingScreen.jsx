const LoadingScreen = ({ progress = 72 }) => {
  const safeProgress = Math.min(100, Math.max(0, progress));

  return (
    <div
      className="site-loader"
      role="status"
      aria-live="polite"
      aria-label="Memuat LaundryKost"
    >
      <div className="loader-grid" aria-hidden="true" />
      <div className="loader-orbit loader-orbit--outer" aria-hidden="true" />
      <div className="loader-orbit loader-orbit--inner" aria-hidden="true" />

      <div className="loader-content">
        <div className="loader-brand">
          <span className="loader-brand-mark" aria-hidden="true">
            🫧
          </span>
          <span>
            LAUNDRY<span className="loader-brand-accent">KOST</span>
          </span>
        </div>

        <div className="loader-machine" aria-hidden="true">
          <div className="loader-machine-top">
            <i />
            <i />
            <i />
          </div>
          <div className="loader-drum">
            <span />
          </div>
          <span className="loader-spark loader-spark--one">✦</span>
          <span className="loader-spark loader-spark--two">✧</span>
        </div>

        <p className="loader-eyebrow">SEDANG MENYIAPKAN</p>
        <h1 className="loader-title">
          Sebentar ya<span>.</span>
        </h1>
        <p className="loader-caption">
          Kami siapkan pengalaman laundry yang praktis buat kamu.
        </p>

        <div
          className="loader-progress"
          role="progressbar"
          aria-label="Proses pemuatan"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={safeProgress}
        >
          <span style={{ width: `${safeProgress}%` }} />
        </div>
        <div className="loader-meta">
          <span>MENYIAPKAN MESIN LAUNDRY</span>
          <span>{safeProgress}%</span>
        </div>
      </div>

      <div className="loader-footer">
        <span className="loader-pulse" /> Bersih, wangi, siap beraktivitas.
      </div>
    </div>
  );
};

export default LoadingScreen;
