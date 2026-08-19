"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Botón "volver arriba". Se ubica justo encima del botón flotante de WhatsApp
 * (bottom-6, 3.5rem de alto) y solo aparece tras bajar un poco en la página.
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Limpia el hash para no volver a saltar a un servicio al recargar.
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Volver al inicio de la página"
      className={`fixed bottom-24 right-6 w-14 h-14 bg-[#586c78] hover:bg-[#3d4f59] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50 cursor-pointer ${
        isVisible
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible translate-y-3 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
