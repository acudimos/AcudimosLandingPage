import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Smile } from "lucide-react";
import Image from "next/image";

const activities = [
  {
    title: "Talleres de Memoria",
    description: "Sesiones cognitivas diseñadas para mantener y mejorar la función cerebral.",
    image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "Ejercicios en Casa",
    description: "Rutinas de actividad física adaptadas para realizar en el hogar sin riesgo.",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Actividades Recreativas",
    description: "Juegos, música y actividades sociales que promueven el bienestar emocional.",
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Terapia Ocupacional",
    description: "Programas de terapia que ayudan a mantener la independencia en tareas diarias.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2078&auto=format&fit=crop"
  }
];

const stats = [
  {
    icon: Calendar,
    value: "150+",
    label: "Actividades mensuales",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Users,
    value: "500+",
    label: "Participantes activos",
    color: "text-teal-600",
    bgColor: "bg-teal-100"
  },
  {
    icon: Smile,
    value: "95%",
    label: "Satisfacción reportada",
    color: "text-red-400",
    bgColor: "bg-red-100"
  }
];

export function ActivitiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Actividades y Talleres
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Creamos planes personalizados con actividades que mejoran la calidad de vida, fortalecen el
            bienestar físico y mental, y fomentan la interacción social.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8"
          >
            Calendario de Actividades
          </Button>
        </div>
      </div>
    </section>
  );
}
