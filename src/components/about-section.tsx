import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Clock,
  Target,
  Eye,
  Heart,
  Activity,
  Network,
  Award,
} from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#d8845f] text-white hover:bg-[#ddac8c] rounded-full px-4 py-1 border-0">
            Conoce Nuestra Historia
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Más que cuidado,
            <br />
            <span className="text-[#d8845f]">somos familia</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Acudimos nació del sueño de tres amigas con vocaciones distintas,
            pero un propósito común: acudir siempre, de inmediato y con calidez,
            a quien necesite compañía y apoyo en su día a día.
          </p>
        </div>

        {/* Nuestra Historia Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-[#d8845f] mb-6">
              Nuestra Historia
            </h3>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Con más de 10 años de experiencia en el sector salud colombiano,
                entendimos que el país necesitaba algo más que cuidados médicos:
                hacía falta presencia humana, cercanía y empatía para los
                adultos que hoy son el corazón de la llamada economía plateada.
              </p>

              <p>
                Vimos de cerca cómo cada vez más familias buscan apoyo para sus
                seres queridos mayores: alguien que los acompañe en casa, que
                los motive a mantenerse activos, que los escuche con paciencia,
                que los lleve a caminar, a leer o simplemente a sonreír de
                nuevo. Personas que no requieren enfermería constante, pero sí
                un acompañamiento humano que brinde confianza, seguridad y
                bienestar.
              </p>

              <p>
                Fue así como decidimos unir nuestras fortalezas y fundar
                Acudimos, una empresa que honra la experiencia de vida de cada
                adulto, fomenta su independencia y genera tranquilidad a las
                familias. Nuestro nombre refleja nuestra esencia: acudir siempre
                que alguien lo necesite, con respeto, empatía y calidez.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-100 flex items-center justify-center">
                <Activity className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-base font-semibold text-gray-900 leading-tight text-center">
                Seguimiento en tiempo real
              </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                <Clock className="w-8 h-8 text-red-400" />
              </div>
              <div className="text-base font-semibold text-gray-900 leading-tight text-center">
                Disponibilidad 24/7
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-100 flex items-center justify-center">
                <Network className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-base font-semibold text-gray-900 leading-tight text-center">
                Integralidad con otros
                <br />
                servicios de salud
              </div>
            </div>

              <div className="flex flex-col items-center"> 
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-100 flex items-center justify-center">
                <Award className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-base font-semibold text-gray-900 leading-tight text-center">
                Profesionales con amplia
                <br />
                experiencia
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-100 flex items-center justify-center">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-base font-semibold text-gray-900 leading-tight text-center">
                Adultos cuidando adultos
              </div>
            </div>
          </div>
          </div>  

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
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
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#586c78] flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Misión</h4>
              <p className="text-gray-600 leading-relaxed">
                Brindamos acompañamiento y supervisión integral a adultos en su
                propio hogar, con un servicio humano, confiable y respetuoso que
                fomenta la autonomía, la seguridad y la calidad de vida,
                fortaleciendo al mismo tiempo los lazos familiares.
              </p>
            </CardContent>
          </Card>

          {/* Visión */}
          <Card className="bg-teal-50 border-0 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#586c78] flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Visión</h4>
              <p className="text-gray-600 leading-relaxed">
                Ser la empresa líder en Colombia para 2031 en el cuidado y
                acompañamiento domiciliario de adultos, reconocida por la
                excelencia, la innovación y la calidez humana.
              </p>
            </CardContent>
          </Card>

          {/* Valores */}
          <Card className="bg-gray-100 border-0 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#586c78] flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Valores</h4>
              <p className="text-gray-600 leading-relaxed">
                Respeto, confianza, empatía, calidez, compromiso, innovación y
                bienestar integral.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
