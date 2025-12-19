import { content as cuidarConAmorContent } from './cuidar-con-amor-adultos-mayores';
import { content as conexionHumanaContent } from './conexion-humana-cuidado';

export interface BlogPost {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  content: React.ReactNode;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cuidar-con-amor-adultos-mayores",
    category: "Acompañamiento",
    categoryColor: "bg-teal-600 text-white",
    title: "Cuidar con amor: cómo acompañar a un adulto mayor sano o medianamente dependiente en casa",
    description: "En muchas familias llega un momento en el que los adultos mayores comienzan a necesitar un poco más de apoyo. No necesariamente porque estén enfermos, sino porque las tareas cotidianas pueden volverse un desafío.",
    image: "/services/service2.jpg",
    author: "Equipo Acudimos",
    date: "1 Nov 2025",
    content: cuidarConAmorContent
  },
  {
    slug: "conexion-humana-cuidado",
    category: "Reflexiones",
    categoryColor: "bg-teal-600 text-white",
    title: "La conexión humana en el cuidado: un valor que trasciende",
    description: "En una sociedad cada vez más digital, la conexión humana se vuelve esencial en el cuidado de las personas mayores. Descubre por qué el vínculo genuino es fundamental.",
    image: "/services/service1.jpg",
    author: "Equipo Acudimos",
    date: "1 Nov 2025",
    content: conexionHumanaContent
  }
];
