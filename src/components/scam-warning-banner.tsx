"use client";

import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/whatsapp";
import { ShieldAlert, X } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "acudimos-scam-banner-dismissed";

export function ScamWarningBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center px-3 pb-24 sm:px-6">
      <div className="flex w-full max-w-3xl items-start gap-3 rounded-xl border border-amber-200 bg-amber-50/95 px-4 py-3 shadow-lg backdrop-blur-sm">
        <ShieldAlert className="mt-0.5 size-5 shrink-0 text-amber-600" />
        <p className="text-xs leading-relaxed text-amber-900 sm:text-sm">
          ACUDIMOS S.A.S. no ofrece empleos, subsidios ni solicita pagos por
          contratación. Solo prestamos cuidado de adultos mayores.{" "}
          <a
            href={whatsappLink(
              "Hola, quiero verificar que estoy hablando con el WhatsApp oficial de Acudimos."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-700 underline underline-offset-2 hover:text-amber-800"
          >
            WhatsApp oficial {WHATSAPP_DISPLAY}
          </a>
        </p>
        <button
          type="button"
          onClick={handleClose}
          aria-label="Cerrar aviso"
          className="ml-auto shrink-0 rounded-full p-1 text-amber-600 transition-colors hover:bg-amber-100"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
}
