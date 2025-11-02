"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

const slides = [
  {
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2078&auto=format&fit=crop",
    badge: "Cuidado profesional y humano",
    title: "Cuidado que",
    titleHighlight: "transforma vidas",
    description: "Brindamos servicios especializados de acompañamiento domiciliario con el profesionalismo médico y el calor humano que cada familia merece.",
  },
  {
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    badge: "Atención personalizada",
    title: "Servicios de",
    titleHighlight: "alta calidad",
    description: "Nuestro equipo de profesionales certificados brinda atención personalizada las 24 horas del día, los 7 días de la semana.",
  },
  {
    image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?q=80&w=2070&auto=format&fit=crop",
    badge: "Experiencia y compromiso",
    title: "Compromiso con",
    titleHighlight: "tu bienestar",
    description: "Más de 15 años de experiencia respaldando a familias en momentos importantes con profesionalismo y calidez humana.",
  },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          duration: 20,
        }}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
      ]}
        className="w-full h-screen"
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative min-h-screen flex items-center justify-center">
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 z-0 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-18">
                  {/* Badge */}
                  <div className="flex justify-center mb-4 sm:mb-6 md:mb-8 landscape:mb-2">
                    <Badge className="bg-[#d8845f] hover:bg-[#ddac8c] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-normal">
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 inline" />
                      {slide.badge}
                    </Badge>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 landscape:mb-2 leading-tight px-2">
                    {slide.title}
                    <br />
                    <span className="text-[#d8845f]">{slide.titleHighlight}</span>
                  </h1>

                  {/* Subheading */}
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 landscape:mb-3 landscape:text-lg leading-relaxed px-4">
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-16 md:mb-20 landscape:mb-10 landscape:gap-2 px-4">
                    <Button 
                      size="lg"
                      className="bg-[#d8845f] hover:bg-[#ddac8c] text-white rounded-full px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto"
                    >
                      Agendar Consulta
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 landscape:w-3 landscape:h-3" />
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white/10 rounded-full px-6 sm:px-8 text-sm sm:text-base bg-transparent w-full sm:w-auto"
                    >
                      Conocer Servicios
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
      </Carousel>

      {/* Floating Badge Bottom Right */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-20 hidden xl:block">
        <div className="bg-white rounded-full shadow-lg p-2 sm:p-3 md:p-4 flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#d8845f] flex items-center justify-center">
            <span className="text-white font-bold text-sm sm:text-base md:text-xl">A</span>
          </div>
          <div className="pr-1 sm:pr-2">
            <div className="font-semibold text-xs sm:text-sm text-gray-800 leading-tight">Profesionales Certificados</div>
            <div className="text-[10px] sm:text-xs text-gray-500">Personal especializado</div>
          </div>
        </div>
      </div>
    </section>
  );
}
