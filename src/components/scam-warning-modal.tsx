"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangle, MessageCircle, ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";

const STORAGE_KEY = "acudimos-scam-warning-seen";
const OFFICIAL_WHATSAPP = "573114063090";
const OFFICIAL_WHATSAPP_DISPLAY = "+57 311 406 3090";

export function ScamWarningModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(STORAGE_KEY)) {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const handleClose = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage errors
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="scam-warning-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-background shadow-2xl">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Cerrar aviso"
          className="absolute right-3 top-3 z-10 rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-center gap-3 bg-destructive py-5 pl-6 pr-12 text-white sm:justify-center sm:pl-12">
          <AlertTriangle className="size-8 shrink-0" />
          <h2 id="scam-warning-title" className="text-lg font-bold sm:text-2xl">
            ¡No te dejes estafar!
          </h2>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-5">
          <p className="font-semibold text-foreground">
            ACUDIMOS S.A.S. <span className="text-destructive">NO</span>:
          </p>

          <ul className="mt-3 space-y-2 text-sm text-muted-foreground sm:text-base">
            <li className="flex items-start gap-2">
              <span aria-hidden="true">❌</span>
              <span>Ofrece empleos en el exterior.</span>
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true">❌</span>
              <span>Entrega subsidios o ayudas económicas.</span>
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden="true">❌</span>
              <span>Solicita pagos para procesos de contratación.</span>
            </li>
          </ul>

          <div className="mt-4 flex items-start gap-2 rounded-lg bg-muted/60 p-3 text-sm text-foreground sm:text-base">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
            <p>
              Nuestros únicos servicios son el cuidado y acompañamiento de
              adultos mayores y personas que requieren asistencia en el hogar o
              en instituciones de salud en Antioquia.
            </p>
          </div>

          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Solicita información{" "}
            <strong className="text-foreground">
              únicamente por nuestro WhatsApp oficial
            </strong>{" "}
            y verifica siempre nuestros canales oficiales antes de compartir
            información o realizar pagos.
          </p>

          <Button
            asChild
            className="mt-4 h-auto w-full whitespace-normal py-3 text-center text-sm leading-tight sm:text-base"
            size="lg"
          >
            <a
              href={`https://wa.me/${OFFICIAL_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-5 shrink-0" />
              <span>WhatsApp oficial {OFFICIAL_WHATSAPP_DISPLAY}</span>
            </a>
          </Button>

          <p className="mt-4 text-center text-sm font-semibold text-primary">
            ACUDIMOS S.A.S. 💙
            <br />
            <span className="font-normal text-muted-foreground">
              Cuidamos de ti y de quienes más quieres.
            </span>
          </p>

          <Button
            variant="ghost"
            className="mt-2 w-full"
            onClick={handleClose}
          >
            Entendido, continuar
          </Button>
        </div>
      </div>
    </div>
  );
}
