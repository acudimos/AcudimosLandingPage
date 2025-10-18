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
    <section className="relative min-h-screen overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
       
        className="w-full h-screen"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative min-h-screen flex items-center justify-center">
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 z-0"
                  style={{
                    backgroundImage: `url('${slide.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 text-center">
                  {/* Badge */}
                  <div className="flex justify-center mb-8">
                    <Badge className="bg-[#d8845f] hover:bg-[#ddac8c] text-white px-4 py-2 rounded-full text-sm font-normal">
                      <Heart className="w-4 h-4 mr-2 inline" />
                      {slide.badge}
                    </Badge>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                    <br />
                    <span className="text-[#d8845f]">{slide.titleHighlight}</span>
                  </h1>

                  {/* Subheading */}
                  <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                    <Button 
                      size="lg"
                      className="bg-[#d8845f] hover:bg-[#ddac8c] text-white rounded-full px-8 text-base"
                    >
                      Agendar Consulta
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white/10 rounded-full px-8 text-base bg-transparent"
                    >
                      Conocer Servicios
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-white">
                      <div className="text-4xl md:text-5xl font-bold mb-2">+500</div>
                      <div className="text-sm md:text-base text-gray-200">Familias atendidas</div>
                    </div>
                    <div className="text-white">
                      <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                      <div className="text-sm md:text-base text-gray-200">Disponibilidad</div>
                    </div>
                    <div className="text-white">
                      <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                      <div className="text-sm md:text-base text-gray-200">Años experiencia</div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
      </Carousel>

      {/* Floating Badge Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="bg-white rounded-full shadow-lg p-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#d8845f] flex items-center justify-center">
            <span className="text-white font-bold text-xl">O</span>
          </div>
          <div className="pr-2">
            <div className="font-semibold text-sm text-gray-800">Profesionales Certificados</div>
            <div className="text-xs text-gray-500">Personal especializado</div>
          </div>
        </div>
      </div>
    </section>
  );
}
