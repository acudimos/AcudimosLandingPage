import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Home,
  MessageCircle,
  Brain,
  Palette,
  Smartphone,
  Activity,
  Sparkles,
  HeartPulse,
  ArrowRight
} from "lucide-react";

const services = [
  {
  icon: Home, // Casa en lugar de reloj
  title: "Acompañamiento en el Hogar",
  description: "Atención profesional en la comodidad del hogar, manteniendo el entorno familiar.",
  features: [
    "Conversación, lectura y actividades recreativas",
    "Estimulación cognitiva con juegos de memoria y ejercicios mentales",
    "Organización y recordatorio de rutinas diarias",
    "Supervisión en horarios de alimentación y hábitos saludables"
  ],
  bgColor: "bg-blue-50",
  iconColor: "text-blue-600",
  iconBg: "bg-blue-100"
},
{
  icon: Users, // Personas para actividades sociales
  title: "Compañía en Actividades Sociales y Cotidianas",
  description: "Acompañamiento personal en tu día a día: desde gestiones rutinarias hasta actividades sociales, siempre con una compañía que te apoya y motiva.",
  features: [
    "Acompañamiento a citas médicas, procedimientos médicos o estéticos",
    "Asistencia a reuniones con amigos o familiares",
    "Salidas seguras para compras, diligencias, trámites o supermercado",
    "Disfrutar de un café o paseo fuera del hogar",
    "Promoción de la integración social para evitar el aislamiento"
  ],
  bgColor: "bg-gray-50",
  iconColor: "text-gray-600",
  iconBg: "bg-gray-100"
},
{
  icon: HeartPulse, // Mantenemos este - es perfecto para salud
  title: "Bienestar y Salud",
  description: "Cuidado integral no médico: actividad física, bienestar emocional y hábitos saludables para tu calidad de vida.",
  features: [
    "Recordatorio y supervisión en la toma de medicamentos",
    "Acompañamiento a procedimientos ambulatorios",
    "Promoción de hábitos saludables: ejercicio suave, hidratación y descanso",
    "Monitoreo básico de signos vitales, solo si es necesario"
  ],
  bgColor: "bg-red-50",
  iconColor: "text-red-400",
  iconBg: "bg-red-100"
},
{
  icon: MessageCircle, // Comunicación para apoyo familiar
  title: "Apoyo a la Familia",
  description: "Tu enlace de confianza: reportes periódicos, orientación profesional y comunicación constante para la tranquilidad familiar.",
  features: [
    "Reportes periódicos sobre el estado general del adulto",
    "Orientación en rutinas y hábitos saludables",
    "Canales de comunicación abiertos para fortalecer la confianza familia–Acudimos"
  ],
  bgColor: "bg-blue-50",
  iconColor: "text-blue-600",
  iconBg: "bg-blue-100"
},
{
  icon: Palette, // Arte para experiencias creativas
  title: "Club de Experiencias",
  description: "Revivimos momentos especiales y creamos nuevos recuerdos through talleres creativos, sesiones de cine en casa y la preservación digital de tus historias familiares más valiosas.",
  features: [
    "Talleres de arte, música, manualidades o escritura",
    "Cine en casa y lecturas compartidas",
    "Creación de álbumes digitales de recuerdos familiares"
  ],
  bgColor: "bg-gray-50",
  iconColor: "text-gray-600",
  iconBg: "bg-gray-100"
},
{
  icon: Smartphone, // Dispositivo para conexión digital
  title: "Conexión Digital",
  description: "Acortamos distancias y fortalecemos lazos familiares. Te ayudamos con videollamadas, enseñamos el uso de dispositivos y creamos diarios digitales para mantener viva la conexión con tus seres queridos.",
  features: [
    "Apoyo en videollamadas y redes sociales",
    "Enseñanza básica de celular o tablet",
    "Elaboración de un 'diario digital' con fotos y mensajes de la familia"
  ],
  bgColor: "bg-red-50",
  iconColor: "text-red-400",
  iconBg: "bg-red-100"
},
{
  icon: Activity, // Actividad física
  title: "Vida Activa y Recreativa",
  description: "Mantenemos tu cuerpo y mente en movimiento through caminatas al aire libre, clases de baile divertidas y juegos que desafían tu creatividad, para una vida llena de energía y alegría.",
  features: [
    "Caminatas en parques y espacios seguros",
    "Clases suaves de baile y estiramientos",
    "Juegos de mesa y retos cognitivos divertidos"
  ],
  bgColor: "bg-blue-50",
  iconColor: "text-blue-600",
  iconBg: "bg-blue-100"
},
{
  icon: Brain, // Cerebro para bienestar emocional
  title: "Bienestar Emocional",
  description: "Fortalecemos tu salud emocional con sesiones de conversación terapéutica, música relajante, risoterapia y ejercicios de gratitud para mejorar tu calidad de vida.",
  features: [
    "Conversaciones significativas sobre historias y recuerdos",
    "Música terapéutica o risoterapia",
    "Espacios de gratitud y relajación ligera"
  ],
  bgColor: "bg-gray-50",
  iconColor: "text-gray-600",
  iconBg: "bg-gray-100"
},
{
  icon: Sparkles, // Chispas para talentos
  title: "Estimulación y Talentos Compartidos",
  description: "En Acudimos, creemos que cada persona tiene una historia y un talento que merece seguir vivo. Por eso, durante el acompañamiento, buscamos resaltar las capacidades, intereses y habilidades tanto del adulto como de su cuidador, convirtiendo cada visita en un espacio de disfrute, aprendizaje y conexión.",
  features: [
    "Manualidades, pintura y artes plásticas",
    "Cocina compartida o preparación de recetas familiares",
    "Música, canto o instrumentos",
    "Lectura en voz alta, escritura o poesía",
    "Cuidado de plantas o jardinería terapéutica",
    "Ejercicios de motricidad fina y estimulación cognitiva",
    "Terapias artísticas o sensoriales ligeras"
  ],
  bgColor: "bg-red-50",
  iconColor: "text-red-400",
  iconBg: "bg-red-100"
}
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 text-teal-700 bg-[#d8845f] text-white hover:bg-[#ddac8c] rounded-full px-4 py-1 border-0">
            Servicios Especializados
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cuidado integral para
            <br />
            <span className="text-[#d8845f]">cada necesidad</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            En Acudimos ofrecemos más que acompañamiento: brindamos bienestar, cercanía y experiencias que llenan de vida a cada persona.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${service.bgColor} border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full`}
            >
              <CardContent className="p-8 flex flex-col h-full">
                {/* Icon, Title, Description - Contenido fijo */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 mb-6 rounded-full ${service.iconBg} flex items-center justify-center`}>
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List - Se distribuye el espacio disponible */}
                <div className="flex-grow flex flex-col justify-between">
                  <ul className="h-full flex flex-col justify-evenly"> {/* Aumenté el space-y para mejor distribución */}
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700 py-1"> {/* Añadí py-1 */}
                        <span className="text-teal-600 mr-2 mt-1 flex-shrink-0">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link - Siempre al fondo */}
                <div className="flex-shrink-0 pt-4">
                  <button className="text-[#d8845f] hover:text-[#ddac8c] font-medium text-sm flex items-center group">
                    Más información
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
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
            className="max-w-[300px] bg-[#d8845f] text-white hover:bg-[#ddac8c] rounded-full px-8 py-3 h-auto whitespace-normal"
          >
            Solicitar Consulta Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
}
