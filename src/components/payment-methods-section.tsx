import { Card } from "@/components/ui/card";
import { paymentLogos, paymentMethods } from "@/data/payment/payment";
import Image from "next/image";

export function PaymentMethodsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Métodos de Pago
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Facilitamos tu experiencia con múltiples opciones de pago seguras y
            confiables. Elige la que mejor se adapte a tus necesidades.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {paymentMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <Card
                key={method.id}
                className="flex flex-col items-center justify-start p-8 bg-white border-gray-200 hover:shadow-lg hover:border-[#d8845f] transition-all"
              >
                <div className="w-16 h-16 bg-[#d8845f]/10 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-[#d8845f]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  {method.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {method.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto border border-gray-200 shadow-sm">
          <p className="text-center text-gray-600 mb-8 font-medium text-lg">
            Aceptamos los siguientes métodos de pago
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {paymentLogos.map((payment, index) => (
              <div
                key={index}
                className="relative grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                style={{ width: payment.width, height: payment.height }}
              >
                <Image
                  src={payment.logo}
                  alt={`${payment.name} logo`}
                  fill
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 120px, 150px"
                  quality={75}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
