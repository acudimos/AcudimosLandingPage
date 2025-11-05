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
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1603187864225-c70f80b406fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    author: "Equipo Acudimos",
    date: "1 Nov 2025",
    content: conexionHumanaContent
  }
];
