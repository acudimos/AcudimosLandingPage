"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { slides } from "@/data/hero/slides";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
              {(() => {
                const HeadingTag = index === 0 ? "h1" : "h2";

                return (
                  <div className="relative min-h-screen flex items-center justify-center">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0 transition-opacity duration-500">
                      <Image
                        src={slide.image}
                        alt={slide.titleHighlight}
                        fill
                        sizes="100vw"
                        quality={index === 0 ? 75 : 55}
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="object-cover"
                      />
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
                      <HeadingTag className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 landscape:mb-2 leading-tight px-2">
                        {slide.title}
                        <br />
                        <span className="text-[#d8845f]">
                          {slide.titleHighlight}
                        </span>
                      </HeadingTag>

                      {/* Subheading */}
                      <p className="text-white text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 landscape:mb-3 landscape:text-lg leading-relaxed px-4">
                        {slide.description}
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-16 md:mb-20 landscape:mb-10 landscape:gap-2 px-4">
                        <Button
                          size="lg"
                          className="bg-[#d8845f] hover:bg-[#ddac8c] text-white rounded-full px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto"
                          asChild
                        >
                          <Link
                            href="https://api.whatsapp.com/send?phone=573114063090"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-gtag-conversion="whatsapp"
                            className="flex items-center btn-wpp"
                          >
                            Agendar Servicio
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 landscape:w-3 landscape:h-3" />
                          </Link>
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-2 border-white text-white hover:bg-white/10 rounded-full px-6 sm:px-8 text-sm sm:text-base bg-transparent w-full sm:w-auto"
                        >
                          <Link
                            href="/#services"
                            className="flex items-center hover:underline hover:text-white"
                          >
                            Conocer Servicios
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        <CarouselNext className="right-4 bg-white/10 border-white/20 text-white hover:bg-white/20" />
      </Carousel>
    </section>
  );
}
