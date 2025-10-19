import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { LocationsSection } from "@/components/locations-section";
import { BlogSection } from "@/components/blog-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PartnersSection } from "@/components/partners-section";
import { ContactSection } from "@/components/contact-section";
import { PaymentMethodsSection } from "@/components/payment-methods-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BlogSection />
        <LocationsSection />
        <TestimonialsSection />
        <PartnersSection />
        <ContactSection />
        <PaymentMethodsSection />
      </main>
      <Footer />
    </div>
  );
}
