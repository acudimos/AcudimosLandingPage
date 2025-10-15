import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const locations = [
  {
    city: "Cali",
    status: "Operando",
    statusColor: "bg-teal-100 text-teal-700",
    address: "Av. 6 Norte #25-45, Barrio Granada",
    phone: "+57 (2) 555-0123",
    email: "cali@acudimos.co"
  },
  {
    city: "Bogotá",
    status: "Operando",
    statusColor: "bg-teal-100 text-teal-700",
    address: "Calle 93 #15-20, Zona Rosa",
    phone: "+57 (1) 555-0456",
    email: "bogota@acudimos.co"
  },
  {
    city: "Medellín",
    status: "Próximamente",
    statusColor: "bg-red-100 text-red-400",
    address: "Carrera 43A #1-50, El Poblado",
    phone: "+57 (4) 555-0789",
    email: "medellin@acudimos.co"
  },
  {
    city: "Barranquilla",
    status: "Próximamente",
    statusColor: "bg-red-100 text-red-400",
    address: "Calle 84 #51-45, Alto Prado",
    phone: "+57 (5) 555-0321",
    email: "barranquilla@acudimos.co"
  }
];

export function LocationsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestras Sedes
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Estamos presentes en las principales ciudades de Colombia y continuamos expandiéndonos para
            estar más cerca de quienes nos necesitan.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <Card 
              key={index} 
              className="bg-white border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-8">
                {/* City Name and Status */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {location.city}
                  </h3>
                  <Badge className={`${location.statusColor} hover:${location.statusColor} rounded-full px-3 py-1 border-0`}>
                    {location.status}
                  </Badge>
                </div>

                {/* Contact Information */}
                <div className="space-y-4 mb-6">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">
                      {location.address}
                    </span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">
                      {location.phone}
                    </span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">
                      {location.email}
                    </span>
                  </div>
                </div>

                {/* Contact Button */}
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Contactar Sede
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expansion Plan Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Plan de Expansión 2025
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Estamos trabajando para llegar a más ciudades y brindar nuestros servicios a un mayor número
            de familias colombianas.
          </p>
          <Button 
            variant="outline"
            className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 rounded-full px-8"
          >
            Solicitar Servicio en Mi Ciudad
          </Button>
        </div>
      </div>
    </section>
  );
}
