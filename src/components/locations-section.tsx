"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Qué servicios ofrece Acudimos?",
    answer: "Ofrecemos servicios especializados de acompañamiento domiciliario que incluyen: acompañamiento en el hogar, compañía en actividades sociales y cotidianas, apoyo en bienestar y salud, y soporte a la familia. Nuestros profesionales brindan atención personalizada adaptada a las necesidades de cada persona."
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer: "Nuestro equipo de profesionales certificados está disponible las 24 horas del día, los 7 días de la semana. Nos adaptamos a las necesidades de cada familia para brindar el mejor servicio posible."
  },
  {
    question: "¿Qué tipo de profesionales trabajan en Acudimos?",
    answer: "Contamos con un equipo multidisciplinario de profesionales certificados con experiencia en el cuidado de adultos mayores y personas que requieren acompañamiento especial. Todos nuestros colaboradores están capacitados para brindar atención profesional y humana."
  },
  {
    question: "¿Cómo puedo solicitar los servicios de Acudimos?",
    answer: "Puedes contactarnos a través de nuestra página web, por teléfono o correo electrónico. Uno de nuestros asesores te atenderá para conocer tus necesidades específicas y diseñar un plan de cuidado personalizado."
  },
  {
    question: "¿Los servicios incluyen atención médica?",
    answer: "Nuestros servicios se enfocan en acompañamiento y cuidado no médico. Podemos supervisar la toma de medicamentos, acompañar a citas médicas y monitorear signos vitales básicos, pero no realizamos procedimientos médicos especializados."
  },
  {
    question: "¿En qué ciudades están disponibles?",
    answer: "Actualmente operamos en Medellín y estamos expandiendo nuestros servicios a otras ciudades de Colombia. Contáctanos para conocer la disponibilidad en tu zona."
  },
  {
    question: "¿Cuánto tiempo de experiencia tiene Acudimos?",
    answer: "Tenemos más de 10 años de experiencia en el sector salud colombiano, entendiendo las necesidades de las familias y brindando servicios de calidad con calidez humana."
  },
  {
    question: "¿Puedo cambiar el horario o el tipo de servicio?",
    answer: "Sí, nuestros servicios son flexibles y se adaptan a tus necesidades. Puedes modificar el horario o el tipo de atención según los requerimientos de tu familia, previa coordinación con nuestro equipo."
  }
];

export function LocationsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#d8845f] text-white hover:bg-[#ddac8c] rounded-full px-4 py-1 border-0">
            ¿Tienes dudas?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
            Si no encuentras lo que buscas, no dudes en contactarnos.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="bg-white border border-gray-200 hover:shadow-md transition-shadow overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Question - Clickable Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <HelpCircle className="w-6 h-6 text-[#d8845f] flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-[#d8845f]" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Answer - Collapsible Content */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6 pl-16">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿No encontraste la respuesta que buscabas?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 text-[#d8845f] font-semibold hover:text-[#ddac8c] transition-colors"
          >
            Contáctanos directamente
            <HelpCircle className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
