"use client";

import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";

export { blogPosts };

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog y Recursos
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Mantente informado con nuestros artículos especializados, consejos prácticos y las últimas
            novedades en cuidado geriátrico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Link 
              key={index}
              href={`/blog/${post.slug}`}
            >
              <Card 
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white cursor-pointer h-full"
                style={{ viewTransitionName: `blog-card-${post.slug}` } as React.CSSProperties}
              >
                <div 
                  className="relative h-64 overflow-hidden"
                  style={{ viewTransitionName: `blog-image-${post.slug}` } as React.CSSProperties}
                >
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
                
                <CardContent className="p-6">
                  <h3 
                    className="text-xl font-bold text-gray-900 mb-3 leading-tight"
                    style={{ viewTransitionName: `blog-title-${post.slug}` } as React.CSSProperties}
                  >
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {post.description}
                  </p>
                  
                  <div 
                    className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100"
                    style={{ viewTransitionName: `blog-meta-${post.slug}` } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center group">
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
