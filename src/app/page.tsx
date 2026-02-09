import { AboutSection } from "@/components/about-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { PartnersSection } from "@/components/partners-section";
import { PaymentMethodsSection } from "@/components/payment-methods-section";
import { PQRSSection } from "@/components/pqrs-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BlogSection />
        <FAQSection />
        {/* <TestimonialsSection /> */}
        <PartnersSection />
        <ContactSection />
        <PQRSSection />
        <PaymentMethodsSection />
      </main>
      <Footer />
    </div>
  );
}
