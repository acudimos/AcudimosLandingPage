"use client";

import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Inicio", href: "/#hero" },
    { label: "Quiénes Somos", href: "/#about" },
    { label: "Servicios", href: "/#services" },
    { label: "Blog", href: "/#blog" },
    { label: "Preguntas Frecuentes", href: "/#faq" },
    { label: "Contacto", href: "/#contact" },
  ];

  return (
    <nav
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : ""
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 py-4 lg:pb-4 lg:pt-3 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <Image
              src="/logo/logo-refactor.png"
              alt="Acudimos"
              width={120}
              height={53}
              priority
            />
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 md:mt-4 lg:mt-4">
            <div
              className={`flex space-x-6 xl:space-x-8 ${isScrolled ? "text-gray-800" : "text-white"}`}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-medium hover:text-[#d8845f] transition-colors text-sm xl:text-base relative group cursor-pointer whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d8845f] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Contact Button */}
          <Button
            className="hidden lg:flex bg-[#d8845f] hover:bg-[#ddac8c] text-white rounded-full px-4 xl:px-6 text-sm xl:text-base md:mt-3 lg:mt-3"
            size="lg"
            asChild
          >
            <Link
              href="https://api.whatsapp.com/send?phone=573114063090"
              target="_blank"
              rel="noopener noreferrer"
              data-gtag-conversion="whatsapp"
              className="flex items-center btn-wpp"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden xl:inline">
                Solicita Tu Acompañante Hoy!
              </span>
              <span className="xl:hidden">Contactar</span>
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 z-50 rounded-lg transition-colors ${
              isScrolled
                ? "text-gray-800 hover:bg-gray-200"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-[#586c78] to-[#3d4f59] backdrop-blur-lg shadow-2xl border-t border-white/10 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="container mx-auto px-6 py-6 pb-8 space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-white font-medium py-2.5 px-4 hover:bg-[#d8845f]/20 hover:text-[#d8845f] rounded-lg transition-all duration-200 transform hover:translate-x-2 cursor-pointer"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: "slideIn 0.3s ease-out forwards",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Contact Button in Mobile Menu */}
              <div className="pt-3 border-t border-white/20 mt-3">
                <Button
                  className="cursor-pointer w-full bg-[#d8845f] hover:bg-[#ddac8c] text-white rounded-full py-5 text-sm font-semibold shadow-lg"
                  asChild
                >
                  <Link
                    href="https://api.whatsapp.com/send?phone=573114063090"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-gtag-conversion="whatsapp"
                    className="flex items-center btn-wpp"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Solicita tu acompañante hoy!
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
