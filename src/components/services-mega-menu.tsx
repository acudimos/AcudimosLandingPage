"use client";

/*
 * eslint-disable @next/next/no-html-link-for-pages
 *
 * Los enlaces internos de este menú usan <a> nativo a propósito (ver nota en
 * `serviceHref`): el <Link> de Next navega con pushState y eso no dispara
 * `hashchange`, que es justo lo que la sección de servicios necesita escuchar.
 */
/* eslint-disable @next/next/no-html-link-for-pages */

import { allServices, serviceCategories } from "@/data/services/services";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/**
 * Los enlaces a servicios usan <a> nativo en vez de <Link>: el router de Next
 * navega con pushState y eso NO dispara el evento `hashchange`, así que la
 * sección de servicios nunca se enteraba del cambio. Con un ancla nativa el
 * navegador dispara `hashchange` y hace el scroll al ancla por su cuenta.
 */
function serviceHref(slug: string) {
  return `/#servicio-${slug}`;
}

/* ------------------------------------------------------------------ */
/*  Estado compartido entre el disparador y el panel del mega menú     */
/* ------------------------------------------------------------------ */

export type ServicesMenu = ReturnType<typeof useServicesMenu>;

export function useServicesMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const open = () => {
    cancelClose();
    setIsOpen(true);
  };

  const close = () => {
    cancelClose();
    setIsOpen(false);
  };

  // El disparador y el panel son ramas distintas del DOM: un pequeño retardo
  // evita que el panel se cierre mientras el mouse viaja de uno al otro.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setIsOpen(false), 200);
  };

  useEffect(() => cancelClose, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return { isOpen, open, close, scheduleClose };
}

/* ------------------------------------------------------------------ */
/*  Disparador dentro de la fila del navbar                            */
/* ------------------------------------------------------------------ */

export function ServicesNavTrigger({ menu }: { menu: ServicesMenu }) {
  return (
    <a
      href="/#services"
      aria-expanded={menu.isOpen}
      aria-haspopup="true"
      onMouseEnter={menu.open}
      onMouseLeave={menu.scheduleClose}
      onFocus={menu.open}
      className="font-medium hover:text-[#d8845f] transition-colors text-sm xl:text-base relative group cursor-pointer whitespace-nowrap flex items-center gap-1"
    >
      Servicios
      <ChevronDown
        className={`w-4 h-4 transition-transform duration-300 ${
          menu.isOpen ? "rotate-180" : ""
        }`}
      />
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-[#d8845f] transition-all duration-300 ${
          menu.isOpen ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Panel a todo el ancho de la pantalla                               */
/* ------------------------------------------------------------------ */

export function ServicesMegaPanel({ menu }: { menu: ServicesMenu }) {
  return (
    <div
      onMouseEnter={menu.open}
      onMouseLeave={menu.scheduleClose}
      className={`hidden lg:block absolute top-full left-0 right-0 transition-all duration-200 ${
        menu.isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="bg-white shadow-2xl border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto px-8 xl:px-12">
          <div className="flex items-center justify-between gap-6 py-4 border-b border-gray-100">
            <div>
              <p className="font-bold text-gray-900">Portafolio de servicios</p>
              <p className="text-xs text-gray-500 mt-0.5">
                {allServices.length} servicios de salud, enfermería y
                acompañamiento en casa
              </p>
            </div>
            <a
              href="/#services"
              onClick={menu.close}
              className="text-xs font-semibold bg-[#d8845f] hover:bg-[#ddac8c] text-white transition-colors rounded-full px-5 py-2.5 flex items-center gap-1 whitespace-nowrap"
            >
              Ver todos los servicios
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="py-6">
            <div className="columns-4 xl:columns-5 gap-8 [column-fill:balance]">
              {serviceCategories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <div
                    key={category.id}
                    className="break-inside-avoid mb-5 last:mb-0"
                  >
                    <div className="flex items-center gap-2 mb-1.5 pb-1.5 border-b border-gray-100">
                      <span className="w-7 h-7 rounded-full bg-[#d8845f]/10 flex items-center justify-center flex-shrink-0">
                        <CategoryIcon className="w-4 h-4 text-[#d8845f]" />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wide text-gray-900 leading-tight">
                        {category.label}
                      </span>
                    </div>
                    <ul>
                      {category.services.map((service) => (
                        <li key={service.slug}>
                          <a
                            href={serviceHref(service.slug)}
                            onClick={menu.close}
                            className="block text-[13px] leading-snug text-gray-600 hover:text-[#d8845f] hover:bg-[#d8845f]/5 rounded-md px-2 py-1 -mx-2 transition-colors"
                          >
                            {service.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile: acordeón anidado dentro del menú hamburguesa               */
/* ------------------------------------------------------------------ */

export function ServicesMobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  return (
    <div>
      <div className="flex items-center rounded-lg hover:bg-[#d8845f]/20 transition-colors">
        <a
          href="/#services"
          onClick={onNavigate}
          className="flex-1 text-white font-medium py-2.5 px-4 hover:text-[#d8845f] transition-colors cursor-pointer"
        >
          Servicios
        </a>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Ver categorías de servicios"
          className="p-2.5 mr-2 text-white hover:text-[#d8845f] transition-colors cursor-pointer"
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-1 ml-2 pl-2 border-l border-white/20 space-y-0.5">
            {serviceCategories.map((category) => {
              const isCategoryOpen = openCategory === category.id;
              const CategoryIcon = category.icon;

              return (
                <div key={category.id}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenCategory(isCategoryOpen ? null : category.id)
                    }
                    aria-expanded={isCategoryOpen}
                    className="w-full flex items-center gap-2 text-left text-white/90 text-sm py-2 px-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <CategoryIcon className="w-4 h-4 text-[#d8845f] flex-shrink-0" />
                    <span className="flex-1">{category.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300 ${
                        isCategoryOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isCategoryOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="ml-6 my-1 space-y-0.5">
                        {category.services.map((service) => (
                          <li key={service.slug}>
                            <a
                              href={serviceHref(service.slug)}
                              onClick={() => {
                                setIsOpen(false);
                                setOpenCategory(null);
                                onNavigate();
                              }}
                              className="block text-white/70 text-[13px] leading-snug py-1.5 px-3 rounded-md hover:bg-[#d8845f]/20 hover:text-[#d8845f] transition-colors"
                            >
                              {service.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
