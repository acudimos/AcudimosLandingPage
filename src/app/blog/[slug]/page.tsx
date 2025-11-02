"use client";

import { Calendar, User, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/components/blog-section";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";


export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const slug = use(params);
  const post = blogPosts.find((p: typeof blogPosts[0]) => p.slug === slug.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section with Image */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto max-w-4xl">
            <Badge className={`${post.categoryColor} hover:${post.categoryColor} rounded-full px-3 py-1 border-0 mb-4`}>
              {post.category}
            </Badge>
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {post.title}
            </h1>
            <div 
              className="flex items-center gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto max-w-4xl px-6 py-12">
        {/* Back Button */}
        <Link href="/#blog" className="inline-block">
          <Button 
            variant="ghost" 
            className="mb-8 -ml-4 hover:bg-gray-100 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Blog
          </Button>
        </Link>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {post.description}
          </p>

          {post.content ? (
            <div className="space-y-6 text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <div className="space-y-6 text-gray-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Punto Importante 1
              </h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Punto Importante 2
              </h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Conclusión
              </h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          )}
        </article>

        {/* Back to Blog CTA */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/#blog">
            <Button 
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ver Más Artículos
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
