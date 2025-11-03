"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿El servicio de cuidador es costoso?",
    answer: "En Acudimos creemos que el cuidado digno debe estar al alcance de todos. Nuestros cuidadores son seleccionados y capacitados con rigor. Hemos hecho todo lo posible para que el servicio sea accesible y justo. Solo pagas por las horas efectivamente contratadas, sin cargos ocultos ni costos adicionales."
  },
  {
    question: "¿El servicio de cuidado es considerado atención de salud domiciliaria?",
    answer: "No. Nuestro servicio no reemplaza los servicios médicos o de enfermería. En Acudimos ofrecemos acompañamiento humano y apoyo cotidiano con técnicos y auxiliares en cuidado del adulto mayor o gerontología, entrenados para acompañar con empatía. Los servicios de salud deben solicitarse a través del sistema médico o medicina prepagada."
  },
  {
    question: "¿Y si mi familiar necesita una inyección, curación, masaje, cambio de pañal o baño asistido?",
    answer: "Esas actividades hacen parte de la atención clínica o de enfermería, por lo tanto no están incluidas en los servicios de Acudimos. Sin embargo, nuestros cuidadores pueden supervisar o acompañar durante estos procedimientos si los realiza un profesional autorizado o un familiar. Cuando detectamos la necesidad de atención médica, orientamos a la familia para contactar el servicio adecuado."
  },
  {
    question: "¿Qué servicios no ofrece Acudimos?",
    answer: "Nos especializamos en acompañamiento humano y apoyo no médico. No ofrecemos servicios de enfermería, atención médica ni labores de aseo general o doméstico. Nuestro objetivo es brindar compañía significativa, estimulación y bienestar emocional, sin reemplazar funciones de salud o limpieza."
  },
  {
    question: "¿Es seguro contratar a un cuidador de Acudimos?",
    answer: "Tu tranquilidad es nuestra prioridad. Cada cuidador pasa por un proceso de selección riguroso: entrevista, visita domiciliaria, examen médico de ingreso y, en algunos casos, prueba de polígrafo. Garantizamos personas confiables, responsables y con verdadero sentido humano."
  },
  {
    question: "¿El servicio es solo para personas mayores?",
    answer: "Nuestros usuarios principalmente son adultos mayores, sin embargo acompañamos personas de todas las edades que necesiten apoyo temporal o continuo, por ejemplo durante una recuperación transitoria, post operatorios, mínima discapacidad o cualquier situación donde se requiera compañía confiable y cercana."
  },
  {
    question: "¿Qué lugar ocupa el adulto mayor en Acudimos?",
    answer: "El adulto mayor está en el centro de nuestro propósito. Sabemos que gran parte de quienes confían en nosotros buscan acompañamiento para sus seres queridos mayores, por eso nuestros cuidadores reciben formación especializada para atenderlos con respeto y calidez."
  },
  {
    question: "¿Dónde se ofrece el servicio?",
    answer: "Principalmente en el hogar, porque creemos que el bienestar empieza en un entorno conocido y tranquilo. También acompañamos en hospitales, o cualquier lugar cuando la situación lo requiere."
  },
  {
    question: "¿Puedo escoger el cuidador?",
    answer: "Realizamos un proceso de selección muy cuidadoso para garantizar calidad, seguridad y empatía. Siempre escuchamos tus preferencias para asignar el cuidador que mejor se adapte a tu familia."
  },
  {
    question: "¿Tienen cuidadores hombres y mujeres?",
    answer: "Sí. Contamos con hombres y mujeres de distintas edades y creencias, todos comprometidos con el mismo propósito: acompañar con respeto, calidez y profesionalismo."
  },
  {
    question: "¿Puedo solicitar que el cuidador respete una creencia religiosa específica?",
    answer: "Claro. En Acudimos respetamos las creencias de cada persona, tanto de las familias como de nuestros cuidadores. Promovemos vínculos basados en el respeto mutuo y la empatía."
  },
  {
    question: "¿La familia debe ofrecer alimentación al cuidador?",
    answer: "No es obligatorio. Nuestros cuidadores llevan su propia alimentación."
  },
  {
    question: "¿El transporte del cuidador está incluido en la tarifa?",
    answer: "Sí, todo está incluido en la llegada del cuidador al sitio de ubicación del usuario, cualquier desplazamiento adicional del cuidador con el usuario será asumido por los familiares."
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
        <div className="max-w-4xl mx-auto space-y-4 sm:grid sm:gap-3 sm:grid-cols-2">
          {faqs.map((faq, index) => (
            <button
              key={index}
              onClick={() => toggleFAQ(index)}
              className="bg-white border border-gray-200 hover:shadow-md transition-all rounded-lg overflow-hidden text-left p-6 flex flex-col items-start gap-4 hover:bg-gray-50 w-full h-full min-h-[120px]" // min-h para altura mínima
            >
              <div className="flex items-center gap-4 w-full h-full"> {/* items-center para centrar verticalmente */}
                <HelpCircle className="w-6 h-6 text-[#d8845f] flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900 flex-1 text-left">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-[#d8845f]" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>

              {/* Respuesta que aparece debajo */}
              {openIndex === index && (
                <div className="w-full pl-10 mt-2">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </button>
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
