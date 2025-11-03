"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Cerrar el menú al hacer clic fuera
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
    { label: "Inicio", href: "#hero" },
    { label: "Quiénes Somos", href: "#about" },
    { label: "Servicios", href: "#services" },
    { label: "Blog", href: "#blog" },
    { label: "Preguntas Frecuentes", href: "#faq" },
    { label: "Contacto", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetId = href.substring(1); // Remover el '#'
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80; // Altura aproximada del navbar
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
      ref={menuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : ''
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50">
            <span className="text-xl sm:text-2xl font-bold">
              <span className={`${isScrolled ? 'text-[#586c78]' : 'text-white'}`}>Acudi</span>
              <span className="text-[#d8845f]">mos</span>
            </span>
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className={`flex space-x-6 xl:space-x-8 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              {menuItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-medium hover:text-[#d8845f] transition-colors text-sm xl:text-base relative group cursor-pointer whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d8845f] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Contact Button */}
          <Button
            className="hidden lg:flex bg-[#d8845f] hover:bg-[#ddac8c] text-white rounded-full px-4 xl:px-6 text-sm xl:text-base"
            size="lg"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span className="hidden xl:inline">Solicita Tu Acompañante Hoy!</span>
            <span className="xl:hidden">Contactar</span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 z-50 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-gray-800 hover:bg-gray-200' 
                : 'text-white hover:bg-white/10'
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
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-white font-medium py-2.5 px-4 hover:bg-[#d8845f]/20 hover:text-[#d8845f] rounded-lg transition-all duration-200 transform hover:translate-x-2 cursor-pointer"
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: 'slideIn 0.3s ease-out forwards'
                  }}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Contact Button in Mobile Menu */}
              <div className="pt-3 border-t border-white/20 mt-3">
                <Button
                  className="w-full bg-[#d8845f] hover:bg-[#ddac8c] text-white rounded-full py-5 text-sm font-semibold shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Solicita tu acompañante hoy!
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
