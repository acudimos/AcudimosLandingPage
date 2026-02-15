"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/data/faqs/faqs";
import { HelpCircle, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#d8845f] text-white hover:bg-[#ddac8c] rounded-full px-4 py-1 border-0">
            ¿Tienes dudas?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Encuentra respuestas a las preguntas más comunes sobre nuestros
            servicios. Si no encuentras lo que buscas, no dudes en contactarnos.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-200 hover:shadow-md transition-shadow overflow-hidden"
            >
              <CardContent className="p-0">
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
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
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
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿No encontraste la respuesta que buscabas?
          </p>
          <Link
            href="https://api.whatsapp.com/send?phone=573114063090"
            target="_blank"
            rel="noopener noreferrer"
            data-gtag-conversion="whatsapp"
            className="text-[#d8845f] hover:text-[#ddac8c] font-semibold inline-flex items-center gap-2 transition-colors btn-wpp"
          >
            Contáctanos Directamente <HelpCircle className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
