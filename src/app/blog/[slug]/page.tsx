"use client";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import "./blog-post.css";

export default function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = use(params);
  const post = blogPosts.find((p) => p.slug === slug.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="100vw"
          quality={75}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto max-w-5xl">
            <Badge
              className={`${post.categoryColor} hover:${post.categoryColor} rounded-full px-4 py-1.5 border-0 mb-6 text-sm font-semibold shadow-lg`}
            >
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-4xl px-6 py-16">
        <Link href="/#blog" className="inline-block mb-10">
          <Button
            variant="ghost"
            className="-ml-4 hover:bg-gray-100 cursor-pointer transition-all hover:translate-x-[-4px]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Blog
          </Button>
        </Link>
        <p className="text-2xl text-gray-700 leading-relaxed mb-12 font-light border-l-4 border-teal-600 pl-6 py-2">
          {post.description}
        </p>
        <article className="blog-article">{post.content}</article>
        <div className="mt-16 pt-8 border-t-2 border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-gray-600 mb-2">¿Te gustó este artículo?</p>
              <p className="text-sm text-gray-500">
                Compártelo con quien lo necesite
              </p>
            </div>
            <Link href="/#blog">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Ver Más Artículos
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
