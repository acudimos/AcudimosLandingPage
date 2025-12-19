'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Mail, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";

export function PQRSSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "peticion",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("PQRS enviado:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "peticion",
        message: "",
      });
    }, 3000);
  };

  const pqrsTypes = [
    {
      id: "peticion",
      label: "Petición",
      description: "Solicitudes de servicios o información",
      icon: MessageSquare,
    },
    {
      id: "queja",
      label: "Queja",
      description: "Insatisfacción con nuestros servicios",
      icon: Mail,
    },
    {
      id: "reclamo",
      label: "Reclamo",
      description: "Solicitud de compensación o reparación",
      icon: Phone,
    },
    {
      id: "sugerencia",
      label: "Sugerencia",
      description: "Recomendaciones para mejorar",
      icon: CheckCircle,
    },
  ];

  return (
    <section id="pqrs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#d8845f] text-white hover:bg-[#ddac8c] rounded-full px-4 py-1 border-0">
            Tu Voz es Importante
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Peticiones, Quejas, Reclamos
            <br />
            <span className="text-[#d8845f]">y Sugerencias</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            En Acudimos valoramos tu opinión y queremos escucharte. Envíanos tus
            PQRS y nos comprometemos a responder en el menor tiempo posible.
          </p>
        </div>

        {/* PQRS Types Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {pqrsTypes.map((type) => {
            const Icon = type.icon;
            return (
              <Card key={type.id} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-[#f5ede6] rounded-full mb-4">
                      <Icon className="w-6 h-6 text-[#d8845f]" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {type.label}
                    </h3>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-gray-200">
            <CardContent className="p-8">
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-5 h-5" />
                    <p className="font-semibold">
                      ¡Gracias! Tu PQRS ha sido enviada correctamente.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d8845f] focus:border-transparent outline-none transition"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d8845f] focus:border-transparent outline-none transition"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Teléfono (Opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d8845f] focus:border-transparent outline-none transition"
                    placeholder="+57 300 000 0000"
                  />
                </div>

                {/* Type */}
                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Tipo de Solicitud
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d8845f] focus:border-transparent outline-none transition"
                  >
                    <option value="peticion">Petición</option>
                    <option value="queja">Queja</option>
                    <option value="reclamo">Reclamo</option>
                    <option value="sugerencia">Sugerencia</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d8845f] focus:border-transparent outline-none transition resize-none"
                    placeholder="Cuéntanos con detalle tu solicitud..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#d8845f] hover:bg-[#c76b47] text-white font-semibold py-3 rounded-lg transition"
                >
                  Enviar PQRS
                </Button>
              </form>

              {/* Info Footer */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  También puedes contactarnos directamente:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <a
                    href="mailto:pqrs@acudimos.com"
                    className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-[#f5ede6] transition text-gray-700 text-sm"
                  >
                    <Mail className="w-4 h-4 text-[#d8845f]" />
                    info@acudimos.co
                  </a>
                  <a
                    href="tel:+573001234567"
                    className="flex items-center justify-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-[#f5ede6] transition text-gray-700 text-sm"
                  >
                    <Phone className="w-4 h-4 text-[#d8845f]" />
                    +57 300 123 4567
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
