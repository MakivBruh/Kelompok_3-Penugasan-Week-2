import { useEffect, useRef, useState } from "react";

/**
 * Komponen ScrollReveal
 * Memberikan animasi transisi saat elemen di-scroll masuk ke layar (viewport).
 *
 * Props:
 * - children: Elemen atau konten yang akan dianimasikan
 * - animation: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in"
 * - duration: Durasi animasi dalam milidetik (default: 700ms)
 * - delay: Jeda waktu sebelum animasi dimulai (default: 0ms) — berguna untuk stagger
 * - threshold: Berapa persen elemen terlihat sebelum animasi terpicu (default: 0.15)
 * - className: Kelas CSS tambahan
 * - once: Apakah animasi hanya berjalan sekali saat pertama kali di-scroll (default: true)
 */
const ScrollReveal = ({
  children,
  animation = "fade-up",
  duration = 700,
  delay = 0,
  threshold = 0.15,
  className = "",
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px", // Animasi aktif sedikit sebelum elemen berada pas di bawah
      }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [threshold, once]);

  // Kelas animasi kondisi awal (sebelum terlihat saat di-scroll)
  const getInitialClasses = () => {
    switch (animation) {
      case "fade-up":
        return "opacity-0 translate-y-12";
      case "fade-down":
        return "opacity-0 -translate-y-12";
      case "fade-left":
        return "opacity-0 translate-x-12";
      case "fade-right":
        return "opacity-0 -translate-x-12";
      case "zoom-in":
        return "opacity-0 scale-90";
      default:
        return "opacity-0 translate-y-12";
    }
  };

  // Kelas animasi saat elemen masuk viewport
  const visibleClasses = "opacity-100 translate-y-0 translate-x-0 scale-100";

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out transform-gpu ${
        isVisible ? visibleClasses : getInitialClasses()
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
