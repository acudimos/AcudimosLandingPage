import { CreditCard, Link as LinkIcon } from "lucide-react";

export const paymentMethods = [
  {
    id: 1,
    name: "Tarjeta de Crédito",
    description: "Acepta todas las tarjetas de crédito principales",
    icon: CreditCard,
  },
  {
    id: 2,
    name: "Tarjeta de Débito",
    description: "Paga directamente desde tu cuenta bancaria",
    icon: CreditCard,
  },
  {
    id: 3,
    name: "Link de Pago",
    description: "Recibe un enlace seguro para pagar en línea",
    icon: LinkIcon,
  },
];

export const paymentLogos = [
  { name: "Visa", logo: "/payment/visa.png", width: 80, height: 50 },
  {
    name: "Mastercard",
    logo: "/payment/mastercard.png",
    width: 80,
    height: 50,
  },
  { name: "PSE", logo: "/payment/pse.png", width: 100, height: 50 },
  { name: "Bold", logo: "/payment/bold.png", width: 100, height: 50 },
  { name: "Nequi", logo: "/payment/nequi.png", width: 80, height: 50 },
  {
    name: "Bancolombia",
    logo: "/payment/bancolombia.png",
    width: 100,
    height: 50,
  },
];
