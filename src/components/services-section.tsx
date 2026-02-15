import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#d8845f] text-white hover:bg-[#ddac8c] rounded-full px-4 py-1 border-0">
            Servicios Especializados
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cuidado integral para
            <br />
            <span className="text-[#d8845f]">cada necesidad</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            En Acudimos ofrecemos más que acompañamiento: brindamos bienestar,
            cercanía y experiencias que llenan de vida a cada persona.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${service.bgColor} border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full`}
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 mb-6 rounded-full ${service.iconBg} flex items-center justify-center`}
                  >
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <ul className="h-full flex flex-col justify-evenly">
                    {" "}
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-700 py-1"
                      >
                        {" "}
                        <span className="text-teal-600 mr-2 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-shrink-0 pt-4">
                  <Link
                    href="https://api.whatsapp.com/send?phone=573114063090&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
                    target="_blank"
                    rel="noopener noreferrer"
                    data-gtag-conversion="whatsapp"
                    className="text-[#d8845f] hover:text-[#ddac8c] font-medium text-sm flex items-center group btn-wpp"
                  >
                    <span>Más información sobre {service.title}</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="bg-gray-50 rounded-2xl p-12 text-center">
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
              href="https://api.whatsapp.com/send?phone=573114063090&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
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
