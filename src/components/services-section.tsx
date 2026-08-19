"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  allServices,
  serviceCategories,
  serviceWhatsappMessage,
  servicesDisclaimer,
  type FlatService,
} from "@/data/services/services";
import type { LucideIcon } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const HASH_PREFIX = "#servicio-";

/** Alto fijo compartido por el selector y la card: nada se mueve al cambiar. */
const PANEL_HEIGHT = "h-[620px] lg:h-[640px]";

function slugFromHash(hash: string) {
  if (!hash.startsWith(HASH_PREFIX)) return null;
  const slug = hash.slice(HASH_PREFIX.length);
  return allServices.some((service) => service.slug === slug) ? slug : null;
}

export function ServicesSection() {
  const [activeSlug, setActiveSlug] = useState(allServices[0].slug);
  // Paso 1: categoría. Paso 2: servicio dentro de esa categoría.
  const [categoryId, setCategoryId] = useState(serviceCategories[0].id);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const step1Ref = useRef<HTMLDivElement>(null);

  const activeService =
    allServices.find((service) => service.slug === activeSlug) ?? allServices[0];
  const selectedCategory =
    serviceCategories.find((category) => category.id === categoryId) ??
    serviceCategories[0];

  // Sincroniza el servicio activo con el hash (#servicio-<slug>) que usan los
  // enlaces del navbar. El scroll lo resuelve el navegador con las anclas
  // renderizadas al inicio de la sección.
  useEffect(() => {
    const applyHash = () => {
      const slug = slugFromHash(window.location.hash);
      if (!slug) return;
      const service = allServices.find((item) => item.slug === slug);
      if (!service) return;
      setActiveSlug(slug);
      // Deja el paso 1 en la categoría del servicio que llega por el menú.
      setCategoryId(service.categoryId);
      setIsCategoryOpen(false);
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  // Cierra el desplegable de categorías al hacer clic fuera.
  useEffect(() => {
    if (!isCategoryOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!step1Ref.current?.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [isCategoryOpen]);

  const selectService = useCallback((slug: string) => {
    setActiveSlug(slug);
    // Actualiza la URL sin provocar un salto de scroll.
    window.history.replaceState(null, "", `${HASH_PREFIX}${slug}`);
  }, []);

  const selectCategory = useCallback((id: string) => {
    setCategoryId(id);
    setIsCategoryOpen(false);
  }, []);

  const CategoryIcon = selectedCategory.icon;

  // --- Móvil: todo se deriva del servicio activo, así el carrusel de
  // categorías y el de servicios nunca quedan desincronizados. ---
  const mobileCategoryIndex = Math.max(
    serviceCategories.findIndex((c) => c.id === activeService.categoryId),
    0
  );
  const mobileCategory = serviceCategories[mobileCategoryIndex];
  const mobileServiceIndex = Math.max(
    mobileCategory.services.findIndex((s) => s.slug === activeSlug),
    0
  );

  const stepCategory = useCallback(
    (direction: 1 | -1) => {
      const total = serviceCategories.length;
      const next = (mobileCategoryIndex + direction + total) % total;
      const category = serviceCategories[next];
      setCategoryId(category.id);
      selectService(category.services[0].slug);
    },
    [mobileCategoryIndex, selectService]
  );

  const stepService = useCallback(
    (direction: 1 | -1) => {
      const list = mobileCategory.services;
      const next = (mobileServiceIndex + direction + list.length) % list.length;
      selectService(list[next].slug);
    },
    [mobileCategory, mobileServiceIndex, selectService]
  );

  return (
    <section id="services" className="py-20 bg-white scroll-mt-24">
      {/* Anclas para enlazar a un servicio concreto desde el mega menú. */}
      <div className="relative">
        {allServices.map((service) => (
          <span
            key={service.slug}
            id={`servicio-${service.slug}`}
            aria-hidden="true"
            className="absolute top-0 scroll-mt-28"
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[#d8845f] text-white hover:bg-[#ddac8c] rounded-full px-4 py-1 border-0">
            Servicios Especializados
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cuidado integral para
            <br />
            <span className="text-[#d8845f]">cada necesidad</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Elige el servicio que necesitas. Te contamos en qué consiste y lo
            solicitas por WhatsApp en un solo clic.
          </p>
        </div>

        {/* ---------------- Versión móvil: carrusel + card ---------------- */}
        <div className="lg:hidden">
          {/* Queda flotando bajo el navbar mientras la sección esté a la vista */}
          <div className="sticky top-[84px] z-30 -mx-6 px-4 py-2.5 bg-white/95 backdrop-blur-md border-y border-gray-200 shadow-sm">
            {/* Nivel 1: categoría, a todo el ancho */}
            <CarouselRow
              itemKey={mobileCategory.id}
              label={mobileCategory.label}
              ariaLabel="Categoría"
              tone="category"
              icon={mobileCategory.icon}
              onPrev={() => stepCategory(-1)}
              onNext={() => stepCategory(1)}
            />

            <div className="border-t border-gray-200 my-2" />

            {/* Nivel 2: servicio, más angosto — las flechas se meten hacia
                el centro y forman la pirámide invertida */}
            <div className="mx-auto w-[80%] max-w-sm rounded-2xl bg-[#d8845f]/[0.07] px-1 py-1">
              <CarouselRow
                itemKey={activeService.slug}
                label={activeService.title}
                ariaLabel="Servicio"
                tone="service"
                counter={`${mobileServiceIndex + 1}/${mobileCategory.services.length}`}
                onPrev={() => stepService(-1)}
                onNext={() => stepService(1)}
              />
            </div>
          </div>

          <div
            key={activeService.slug}
            className="mt-6 rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm animate-[fadeInUp_0.3s_ease-out]"
          >
            <div className="relative h-52 sm:h-64">
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3d4f59]/70 via-transparent to-transparent" />
              <Badge className="absolute top-4 left-4 bg-white/95 text-[#3d4f59] hover:bg-white rounded-full px-3 py-1 border-0 text-xs font-semibold">
                {activeService.categoryLabel}
              </Badge>
            </div>

            {/* Sin alto fijo: la card crece hacia abajo con el contenido */}
            <div className="p-6">
              <ServiceBody service={activeService} />
            </div>

            <div className="px-6 pb-6">
              <ServiceCta service={activeService} />
            </div>
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-10 gap-6 lg:gap-8 items-stretch">
          {/* ---------------- Selector por pasos ---------------- */}
          <div
            className={`${PANEL_HEIGHT} lg:col-span-3 rounded-2xl border border-gray-200 bg-gray-50 p-5 flex flex-col`}
          >
            {/* Paso 1 — categoría */}
            <div ref={step1Ref} className="relative flex-shrink-0 z-20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#d8845f] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  Selecciona una categoría
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                aria-expanded={isCategoryOpen}
                aria-haspopup="listbox"
                className={`w-full flex items-center gap-3 rounded-xl bg-white border px-4 py-3.5 text-left transition-colors cursor-pointer ${
                  isCategoryOpen
                    ? "border-[#d8845f] ring-2 ring-[#d8845f]/20"
                    : "border-gray-300 hover:border-[#d8845f]"
                }`}
              >
                <span className="w-10 h-10 rounded-full bg-[#d8845f]/10 flex items-center justify-center flex-shrink-0">
                  <CategoryIcon className="w-5 h-5 text-[#d8845f]" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-semibold text-gray-900 text-sm leading-snug">
                    {selectedCategory.label}
                  </span>
                  <span className="block text-xs text-gray-500">
                    {selectedCategory.services.length} servicios
                  </span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Se despliega por encima del paso 2 para no mover el layout */}
              {isCategoryOpen && (
                <ul
                  role="listbox"
                  className="absolute top-full left-0 right-0 mt-2 max-h-[340px] overflow-y-auto rounded-xl bg-white border border-gray-200 shadow-xl p-2 animate-[fadeInUp_0.2s_ease-out]"
                >
                  {serviceCategories.map((category) => {
                    const Icon = category.icon;
                    const isSelected = category.id === categoryId;
                    return (
                      <li key={category.id}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          onClick={() => selectCategory(category.id)}
                          className={`w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors cursor-pointer ${
                            isSelected
                              ? "bg-[#d8845f]/10"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 flex-shrink-0 ${
                              isSelected ? "text-[#d8845f]" : "text-gray-400"
                            }`}
                          />
                          <span className="flex-1 min-w-0">
                            <span
                              className={`block text-sm leading-snug ${
                                isSelected
                                  ? "text-[#d8845f] font-semibold"
                                  : "text-gray-700"
                              }`}
                            >
                              {category.label}
                            </span>
                          </span>
                          <span className="text-xs text-gray-400 flex-shrink-0">
                            {category.services.length}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* Paso 2 — servicio de esa categoría */}
            <div className="mt-6 flex-1 min-h-0 flex flex-col">
              <div className="flex items-center gap-2 mb-2 flex-shrink-0">
                <span className="w-6 h-6 rounded-full bg-[#d8845f] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  Selecciona un servicio
                </span>
              </div>

              <ul
                key={selectedCategory.id}
                className="flex-1 min-h-0 overflow-y-auto rounded-xl bg-white border border-gray-200 p-2 animate-[fadeInUp_0.25s_ease-out]"
              >
                {selectedCategory.services.map((service) => {
                  const isActive = service.slug === activeSlug;
                  return (
                    <li key={service.slug}>
                      <button
                        type="button"
                        onClick={() => selectService(service.slug)}
                        aria-current={isActive ? "true" : undefined}
                        className={`w-full text-left text-sm rounded-lg px-3 py-3 my-0.5 transition-colors cursor-pointer flex items-center gap-2 border-l-2 ${
                          isActive
                            ? "bg-[#d8845f]/10 text-[#d8845f] font-semibold border-[#d8845f]"
                            : "text-gray-600 border-transparent hover:bg-gray-50 hover:text-gray-900"
                        }`}
                      >
                        <span className="flex-1">{service.title}</span>
                        <ChevronRight
                          className={`w-4 h-4 flex-shrink-0 transition-opacity ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* ---------------- Card del servicio ---------------- */}
          <div
            className={`${PANEL_HEIGHT} lg:col-span-7 rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm`}
          >
            <div className="grid xl:grid-cols-2 h-full">
              <div className="relative h-44 sm:h-56 xl:h-full">
                <Image
                  key={activeService.image}
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  sizes="(max-width: 1280px) 100vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d4f59]/70 via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-white/95 text-[#3d4f59] hover:bg-white rounded-full px-3 py-1 border-0 text-xs font-semibold">
                  {activeService.categoryLabel}
                </Badge>
              </div>

              <div className="grid grid-rows-[4fr_minmax(6.5rem,1fr)] min-h-0">
                {/* Solo esta zona hace scroll: el alto de la card no cambia */}
                <div
                  key={activeService.slug}
                  className="min-h-0 overflow-y-auto p-6 sm:p-7 animate-[fadeInUp_0.3s_ease-out]"
                >
                  <ServiceBody service={activeService} />
                </div>

                <div className="min-h-0 flex flex-col justify-center px-6 sm:px-7 py-4 border-t border-gray-100">
                  <ServiceCta service={activeService} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed max-w-4xl mx-auto text-center mt-8">
          {servicesDisclaimer}
        </p>

        <div className="bg-gray-50 rounded-2xl p-12 text-center mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿Necesitas información personalizada?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nuestro equipo está listo para diseñar un plan de cuidado específico
            para tu familia.
          </p>
          <Button
            size="lg"
            className="max-w-[300px] bg-[#d8845f] text-white hover:bg-[#ddac8c] rounded-full px-8 py-3 h-auto whitespace-normal"
            asChild
          >
            <Link
              href={whatsappLink(
                "Hola, quiero solicitar un servicio de cuidado personalizado para mi familia."
              )}
              target="_blank"
              rel="noopener noreferrer"
              data-gtag-conversion="whatsapp"
              className="flex items-center btn-wpp"
            >
              Solicitar Servicio Personalizado
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}


/* ------------------------------------------------------------------ */
/*  Bloques compartidos entre la card de escritorio y la de móvil      */
/* ------------------------------------------------------------------ */

function ServiceBody({ service }: { service: FlatService }) {
  const Icon = service.icon;
  return (
    <>
      <div className="w-12 h-12 rounded-full bg-[#d8845f]/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-[#d8845f]" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3 text-balance">
        {service.title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-6">
        {service.description}
      </p>

      <ul className="space-y-3">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-[#586c78]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-[#586c78]" />
            </span>
            <span className="text-sm text-gray-700 leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

function ServiceCta({ service }: { service: FlatService }) {
  return (
    <>
      <Button
        className="w-full bg-[#d8845f] hover:bg-[#ddac8c] text-white rounded-full py-3 h-auto text-sm font-semibold shadow-md whitespace-normal"
        asChild
      >
        <Link
          href={whatsappLink(serviceWhatsappMessage(service))}
          target="_blank"
          rel="noopener noreferrer"
          data-gtag-conversion="whatsapp"
          className="flex items-center justify-center gap-2 btn-wpp group"
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span>Solicitar este servicio</span>
          <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
      <p className="text-xs text-gray-400 text-center mt-2.5">
        Te respondemos por WhatsApp con la información de este servicio.
      </p>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Carrusel de móvil: flechas + swipe, con vuelta al principio        */
/* ------------------------------------------------------------------ */

const SWIPE_THRESHOLD = 40;

type CarouselRowProps = {
  /** Cambia con cada elemento para reiniciar la animación de entrada. */
  itemKey: string;
  label: string;
  ariaLabel: string;
  tone: "category" | "service";
  icon?: LucideIcon;
  counter?: string;
  onPrev: () => void;
  onNext: () => void;
};

function CarouselRow({
  itemKey,
  label,
  ariaLabel,
  tone,
  icon: Icon,
  counter,
  onPrev,
  onNext,
}: CarouselRowProps) {
  const startX = useRef<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent) => {
    startX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (startX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - startX.current;
    startX.current = null;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    if (deltaX < 0) onNext();
    else onPrev();
  };

  const isCategory = tone === "category";

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      // touch-pan-y deja libre el scroll vertical y captura solo el horizontal
      className="flex items-center gap-1.5 touch-pan-y select-none"
    >
      <button
        type="button"
        onClick={onPrev}
        aria-label={`${ariaLabel} anterior`}
        className={`flex items-center justify-center rounded-full flex-shrink-0 transition-colors active:scale-95 cursor-pointer ${
          isCategory
            ? "w-9 h-9 bg-gray-100 text-gray-700 hover:bg-gray-200"
            : "w-8 h-8 text-[#d8845f] hover:bg-[#d8845f]/10"
        }`}
      >
        <ChevronLeft className={isCategory ? "w-5 h-5" : "w-4 h-4"} />
      </button>

      <div className="flex-1 min-w-0 text-center px-1">
        <div
          key={itemKey}
          className="animate-[fadeInUp_0.25s_ease-out] flex items-center justify-center gap-1.5"
        >
          {Icon && <Icon className="w-4 h-4 text-[#d8845f] flex-shrink-0" />}
          <span
            className={`leading-tight line-clamp-2 ${
              isCategory
                ? "text-sm font-bold text-gray-900"
                : "text-[13px] font-semibold text-[#d8845f]"
            }`}
          >
            {label}
          </span>
        </div>
        {counter && (
          <span className="block text-[10px] text-gray-400 mt-0.5">
            {counter}
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={onNext}
        aria-label={`${ariaLabel} siguiente`}
        className={`flex items-center justify-center rounded-full flex-shrink-0 transition-colors active:scale-95 cursor-pointer ${
          isCategory
            ? "w-9 h-9 bg-gray-100 text-gray-700 hover:bg-gray-200"
            : "w-8 h-8 text-[#d8845f] hover:bg-[#d8845f]/10"
        }`}
      >
        <ChevronRight className={isCategory ? "w-5 h-5" : "w-4 h-4"} />
      </button>
    </div>
  );
}
