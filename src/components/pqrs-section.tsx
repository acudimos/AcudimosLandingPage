"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  CheckCircle,
  Mail,
  MessageSquare,
  Phone,
} from "lucide-react";
import { useState } from "react";
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONFIG_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONFIG_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_CONFIG_PUBLIC_KEY!;

export function PQRSSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    identification: "",
    phone: "",
    type: "peticion",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(false);
    setSubmitted(false);
    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          name: formData.name,
          email: formData.email,
          identification: formData.identification,
          phone: formData.phone,
          request_type: formData.type,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
          type: formData.type,
        },
        PUBLIC_KEY,
      );

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        identification: "",
        phone: "",
        type: "peticion",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
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
              <Card
                key={type.id}
                className="border-gray-200 hover:shadow-lg transition-shadow"
              >
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

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start gap-2 text-red-700">
                    <AlertCircle className="w-5 h-5 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">
                        Error al enviar tu PQRS
                      </p>
                      <p className="text-sm">
                        Lo sentimos, hubo un problema al enviar tu solicitud.
                        Por favor, intenta nuevamente o contáctanos
                        directamente.
                      </p>
                    </div>
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d8845f] focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d8845f] focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Identification */}
                <div>
                  <label
                    htmlFor="identification"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Numero de Identificación
                  </label>
                  <input
                    type="text"
                    id="identification"
                    name="identification"
                    value={formData.identification}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d8845f] focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="1234567890"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d8845f] focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d8845f] focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="peticion">Petición</option>
                    <option value="queja">Queja</option>
                    <option value="reclamo">Reclamo</option>
                    <option value="sugerencia">Sugerencia</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d8845f] focus:border-transparent outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Asunto de tu solicitud"
                  />
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
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d8845f] focus:border-transparent outline-none transition resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Cuéntanos con detalle tu solicitud..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#d8845f] hover:bg-[#c76b47] text-white font-semibold py-3 rounded-lg transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    "Enviar PQRS"
                  )}
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
