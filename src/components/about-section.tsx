import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Clock, TrendingUp, Target, Eye, Heart } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-teal-100 text-teal-700 hover:bg-teal-100 rounded-full px-4 py-1 border-0">
            Conoce Nuestra Historia
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Más que cuidado,
            <br />
            <span className="text-teal-400">somos familia</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Nacimos de la necesidad de brindar un cuidado integral y humano, combinando
            experiencia médica con el amor que merecen nuestros adultos mayores.
          </p>
        </div>

        {/* Nuestra Historia Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-teal-700 mb-6">Nuestra Historia</h3>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Acudimos nació en 2005 cuando un grupo de profesionales de la salud 
                identificó la necesidad de servicios de cuidado domiciliario que realmente 
                pusieran a la persona en el centro de la atención.
              </p>
              
              <p>
                Desde entonces, hemos crecido hasta convertirnos en una referencia en 
                cuidado geriátrico, siempre manteniendo nuestros valores fundamentales de 
                respeto, profesionalismo y calidez humana.
              </p>
              
              <p>
                Hoy atendemos a más de 500 familias en Colombia, con planes de 
                expansión que nos permitirán llegar a más hogares que necesitan nuestros 
                servicios especializados.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-teal-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Familias</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-teal-100 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Años</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-red-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Disponibilidad</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-teal-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                alt="Equipo médico de Acudimos"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              {/* Badge on Image */}
              <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg px-6 py-4">
                <div className="text-3xl font-bold text-teal-600">98%</div>
                <div className="text-sm text-gray-600">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Misión */}
          <Card className="bg-gray-100 border-0 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-200 flex items-center justify-center">
                <Target className="w-8 h-8 text-teal-700" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Misión</h4>
              <p className="text-gray-600 leading-relaxed">
                Proporcionar servicios de cuidado domiciliario de excelencia, mejorando la 
                calidad de vida de nuestros usuarios y brindando tranquilidad a sus familias.
              </p>
            </CardContent>
          </Card>

          {/* Visión */}
          <Card className="bg-teal-50 border-0 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-200 flex items-center justify-center">
                <Eye className="w-8 h-8 text-teal-700" />
              </div>
              <h4 className="text-xl font-bold text-teal-700 mb-4">Visión</h4>
              <p className="text-gray-600 leading-relaxed">
                Ser la empresa líder en cuidado geriátrico domiciliario en Colombia. Reconocida por 
                nuestra innovación, calidad humana y excelencia profesional.
              </p>
            </CardContent>
          </Card>

          {/* Valores */}
          <Card className="bg-red-50 border-0 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-200 flex items-center justify-center">
                <Heart className="w-8 h-8 text-red-400" />
              </div>
              <h4 className="text-xl font-bold text-red-400 mb-4">Valores</h4>
              <p className="text-gray-600 leading-relaxed">
                Respeto, empatía, profesionalismo, integridad y compromiso con el bienestar de 
                cada persona que confía en nosotros.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
