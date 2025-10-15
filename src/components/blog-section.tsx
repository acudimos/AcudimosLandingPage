import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import Image from "next/image";

const blogPosts = [
  {
    category: "Consejos",
    categoryColor: "bg-teal-600 text-white",
    title: "10 Consejos para el Cuidado de Adultos Mayores en Casa",
    description: "Descubre las mejores prácticas para brindar cuidado seguro y efectivo en el hogar.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2078&auto=format&fit=crop",
    author: "Dr. María González",
    date: "15 Mar 2024"
  },
  {
    category: "Salud Mental",
    categoryColor: "bg-teal-600 text-white",
    title: "La Importancia de la Estimulación Cognitiva",
    description: "Cómo mantener la mente activa puede mejorar significativamente la calidad de vida.",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2070&auto=format&fit=crop",
    author: "Lic. Carlos Ruiz",
    date: "12 Mar 2024"
  },
  {
    category: "Nutrición",
    categoryColor: "bg-teal-600 text-white",
    title: "Nutrición Especializada para Adultos Mayores",
    description: "Guía completa sobre alimentación saludable adaptada a necesidades geriátricas.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop",
    author: "Nut. Ana Martínez",
    date: "10 Mar 2024"
  }
];

export function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog y Recursos
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Mantente informado con nuestros artículos especializados, consejos prácticos y las últimas
            novedades en cuidado geriátrico.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
            >
              {/* Image with Badge */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <Badge className={`absolute top-4 left-4 ${post.categoryColor} hover:${post.categoryColor} rounded-full px-3 py-1 border-0`}>
                  {post.category}
                </Badge>
              </div>
              
              {/* Content */}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {post.description}
                </p>
                
                {/* Meta Information */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center group">
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            variant="outline"
            className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full px-8"
          >
            Ver Todos los Artículos
          </Button>
        </div>
      </div>
    </section>
  );
}
