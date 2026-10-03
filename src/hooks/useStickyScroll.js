import { useEffect } from "react";

// Hook untuk memberikan efek scroll yang teredam (sticky/inertia dampening)
// agar perpindahan scroll terasa lebih mantap, tidak terburu-buru/terlalu cepat.
export function useStickyScroll(damping = 0.55) {
  useEffect(() => {
    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isTicking = false;
    let isInteracting = false;

    const onWheel = (e) => {
      // Abaikan jika user menekan Ctrl (zoom) atau Shift (horizontal scroll)
      if (e.ctrlKey || e.shiftKey) return;

      // Cek apakah target ada di dalam iframe atau elemen yang punya scrollable sendiri
      let el = e.target;
      while (el && el !== document.body) {
        if (el.tagName === 'IFRAME') return; // Biarkan interaksi di iframe 3D model
        const overflowY = window.getComputedStyle(el).overflowY;
        if ((overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight) {
          return;
        }
        el = el.parentElement;
      }

      e.preventDefault();

      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      // Damping multiplier membuat scroll terasa sticky & berbobot
      targetY += e.deltaY * damping;
      targetY = Math.max(0, Math.min(targetY, maxScroll));

      if (!isTicking) {
        isTicking = true;
        isInteracting = true;
        requestAnimationFrame(updateScroll);
      }
    };

    const updateScroll = () => {
      currentY += (targetY - currentY) * 0.12;
      window.scrollTo(0, Math.round(currentY));

      if (Math.abs(targetY - currentY) > 0.5) {
        requestAnimationFrame(updateScroll);
      } else {
        isTicking = false;
        isInteracting = false;
      }
    };

    const onScrollNative = () => {
      if (!isInteracting) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScrollNative, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScrollNative);
    };
  }, [damping]);
}
