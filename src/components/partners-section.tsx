import { Card } from "@/components/ui/card";

export function PartnersSection() {
  const partners = [
    {
      id: 1,
      name: "IPS",
      logo: "/partners/ips.svg"
    },
    {
      id: 2,
      name: "Aseguradoras",
      logo: "/partners/aseguradoras.svg"
    },
    {
      id: 3,
      name: "EPS",
      logo: "/partners/eps.svg"
    },
    {
      id: 4,
      name: "Cooperativas",
      logo: "/partners/cooperativas.svg"
    },
    {
      id: 5,
      name: "Instituciones",
      logo: "/partners/instituciones.svg"
    },
    {
      id: 6,
      name: "ONG",
      logo: "/partners/ong.svg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Aliados Estratégicos
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Trabajamos de la mano con las mejores instituciones de salud y aseguradoras para garantizar un
            servicio integral y de calidad.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          {partners.map((partner) => (
            <Card 
              key={partner.id} 
              className="flex flex-col items-center justify-center p-8 hover:shadow-lg transition-shadow cursor-pointer bg-white border-gray-200"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <div className="w-10 h-10 bg-gray-300 rounded"></div>
              </div>
              <p className="text-sm font-medium text-gray-700 text-center">
                {partner.name}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            ¿Eres una institución de salud y quieres ser nuestro aliado?
          </p>
          <a 
            href="#contacto" 
            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2 transition-colors"
          >
            Conoce nuestro programa de alianzas →
          </a>
        </div>
      </div>
    </section>
  );
}
