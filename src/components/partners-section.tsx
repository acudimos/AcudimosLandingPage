import { Card } from "@/components/ui/card";
import { partners } from "@/data/partners/partners";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function PartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Aliados Estratégicos
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Trabajamos de la mano con las mejores instituciones de salud para
            garantizar un servicio integral y de calidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="flex flex-col items-center justify-center p-8 h-full hover:shadow-lg hover:border-[#d8845f] transition-all cursor-pointer bg-white border-gray-200">
                <div className="w-32 h-32 relative mb-4 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 120px, 150px"
                    quality={75}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-2 group-hover:text-[#d8845f] transition-colors">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-3">
                  {partner.description}
                </p>
                <div className="flex items-center gap-1 text-[#d8845f] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Visitar sitio
                  <ExternalLink className="w-4 h-4" />
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            ¿Eres una institución de salud y quieres ser nuestro aliado?
          </p>
          <Link
            href="https://api.whatsapp.com/send?phone=573114063090&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            data-gtag-conversion="whatsapp"
            className="text-[#d8845f] hover:text-[#ddac8c] font-semibold inline-flex items-center gap-2 transition-colors btn-wpp"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
}
