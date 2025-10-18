import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  Home, 
  Utensils, 
  Brain, 
  ShieldPlus, 
  HeartPulse,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Acompañamiento 12h/24h",
    description: "Cuidado continuo adaptado a las necesidades específicas de cada persona.",
    features: [
      "Supervisión médica",
      "Administración de medicamentos",
      "Compañía constante"
    ],
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100"
  },
  {
    icon: Home,
    title: "Cuidado Domiciliario",
    description: "Atención profesional en la comodidad del hogar, manteniendo el entorno familiar.",
    features: [
      "Atención personalizada",
      "Ambiente familiar",
      "Flexibilidad horaria"
    ],
    bgColor: "bg-gray-50",
    iconColor: "text-gray-600",
    iconBg: "bg-gray-100"
  },
  {
    icon: Utensils,
    title: "Apoyo en Rutina Diaria",
    description: "Asistencia en actividades cotidianas como alimentación, aseo personal y movilidad.",
    features: [
      "Alimentación asistida",
      "Higiene personal",
      "Movilización segura"
    ],
    bgColor: "bg-red-50",
    iconColor: "text-red-400",
    iconBg: "bg-red-100"
  },
  {
    icon: Brain,
    title: "Neuro-estimulación",
    description: "Programas especializados de estimulación cognitiva y gamificación.",
    features: [
      "Ejercicios cognitivos",
      "Juegos terapéuticos",
      "Estimulación sensorial"
    ],
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100"
  },
  {
    icon: ShieldPlus,
    title: "Planes Post-hospitalización",
    description: "Cuidado especializado durante el periodo de recuperación.",
    features: [
      "Seguimiento médico",
      "Rehabilitación",
      "Monitoreo constante"
    ],
    bgColor: "bg-gray-50",
    iconColor: "text-gray-600",
    iconBg: "bg-gray-100"
  },
  {
    icon: HeartPulse,
    title: "Cuidado Integral",
    description: "Servicios completos que abarcan todas las necesidades de bienestar.",
    features: [
      "Atención médica",
      "Cuidado emocional",
      "Apoyo familiar"
    ],
    bgColor: "bg-red-50",
    iconColor: "text-red-400",
    iconBg: "bg-red-100"
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-100 rounded-full px-4 py-1 border-0">
            Servicios Especializados
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cuidado integral para
            <br />
            <span className="text-teal-600">cada necesidad</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Ofrecemos una gama completa de servicios diseñados para cubrir todas las
            necesidades de nuestros usuarios y sus familias.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`${service.bgColor} border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 mb-6 rounded-full ${service.iconBg} flex items-center justify-center`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-teal-600 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center group">
                  Más información
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            ¿Necesitas información personalizada?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Nuestro equipo está listo para diseñar un plan de cuidado específico para
            tu familia.
          </p>
          <Button 
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8"
          >
            Solicitar Consulta Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
}
