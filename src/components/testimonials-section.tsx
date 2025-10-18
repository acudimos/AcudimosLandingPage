import { Card, CardContent } from "@/components/ui/card";

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

  const stats = [
    {
      value: "98%",
      label: "Satisfacción familiar",
      sublabel: "De nuestras familias nos recomiendan"
    },
    {
      value: "500+",
      label: "Familias atendidas",
      sublabel: "Confían en nuestro cuidado"
    },
    {
      value: "24/7",
      label: "Disponibilidad",
      sublabel: "Siempre listos para ayudar"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
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
        <div className="grid md:grid-cols-2 gap-6 mb-16 mt-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-red-50/30 border-red-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-red-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-red-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center overflow-hidden">
                    <span className="text-red-700 font-semibold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-100 rounded-2xl py-12 px-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Resultados que hablan por sí solos
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{
                  color: index === 0 ? '#1e3a8a' : index === 1 ? '#6b7280' : '#ef4444'
                }}>
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
