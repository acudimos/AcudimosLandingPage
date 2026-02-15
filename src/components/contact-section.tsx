import { Card, CardContent } from "@/components/ui/card";
import { Clock, Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para responder todas tus preguntas y ayudarte a
            encontrar el plan de cuidado perfecto para tu familia.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="bg-white border-gray-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Teléfono
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">Línea Nacional</p>
                    <p className="text-lg font-semibold text-gray-900">
                      <a
                        href="https://api.whatsapp.com/send?phone=573114063090"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-gtag-conversion="whatsapp"
                        className="btn-wpp"
                      >
                        +57 311 406 3090
                      </a>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Disponible 24/7 para emergencias
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-lg font-semibold text-gray-900">
                      info@acudimosadultos.com
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Respuesta en menos de 2 horas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Horarios
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lun - Vie:</span>
                        <span className="text-gray-900 font-medium">
                          7:00 AM - 7:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sábados:</span>
                        <span className="text-gray-900 font-medium">
                          8:00 AM - 4:00 PM
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Emergencias:</span>
                        <span className="text-gray-900 font-medium">24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
