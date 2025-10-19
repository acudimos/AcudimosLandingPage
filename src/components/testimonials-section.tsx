import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "Acudimos ha sido una bendición para nuestra familia. El cuidado que le brindan a mi madre es excepcional, y la tranquilidad que nos da saber que está en buenas manos no tiene precio.",
      author: "María Elena Rodríguez",
      role: "Hija de usuaria",
      avatar: "/testimonials/avatar1.jpg",
      rating: 5
    },
    {
      id: 2,
      quote: "Las profesionales de Acudimos no solo cuidan a mi esposo, sino que se han convertido en parte de nuestra familia. Su dedicación y cariño son evidentes en cada visita.",
      author: "Carlos Mendoza",
      role: "Esposo de usuaria",
      avatar: "/testimonials/avatar2.jpg",
      rating: 5
    },
    {
      id: 3,
      quote: "La diferencia en la calidad de vida de mi padre desde que comenzó con los servicios de Acudimos es notable. Está más activo, más feliz y mejor cuidado.",
      author: "Ana Lucía Torres",
      role: "Familiar de usuario",
      avatar: "/testimonials/avatar3.jpg",
      rating: 5
    },
    {
      id: 4,
      quote: "A mis 78 años, pensé que tendría que dejar mi casa. Gracias a Acudimos, puedo seguir viviendo en mi hogar con la seguridad y el cuidado que necesito.",
      author: "Roberto Silva",
      role: "Usuario directo",
      avatar: "/testimonials/avatar4.jpg",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-red-400 text-sm font-medium mb-2">Testimonios Reales</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Historias que nos{" "}
            <span className="text-red-400">inspiran cada día</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            La confianza de nuestros usuarios y sus familias es nuestro mayor logro. Estas son
            algunas de sus experiencias con nuestros servicios.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="text-center mb-16 mt-12">
            <Button className="bg-red-400 hover:bg-red-500 text-white rounded-full px-6 py-3 text-lg mx-auto cursor-pointer">
              Revisa los testimonios
            </Button>
        </div>
      </div>
    </section>
  );
}
