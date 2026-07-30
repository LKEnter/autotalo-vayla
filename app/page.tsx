import React from "react";
import { generateMorfoosSEO } from "@morfoos/core/seo";
import { LocalBusinessSchema } from "@morfoos/core/components/schemas";
import Hero from "./components/Hero";
import NewestCarsSection from "./components/NewestCarsSection";
import TradeInCtaSection from "./components/TradeInCtaSection";
import TrustNumbersSection from "./components/TrustNumbersSection";
import ServicesSection from "./components/ServicesSection";
import WhyUsSection from "./components/WhyUsSection";
import FinancingSection from "./components/FinancingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";

export const generateMetadata = () =>
  generateMorfoosSEO({
    title: "Autotalo Väylä | Vaihtoautot ja autokauppa",
    description:
      "Yli 150 vaihtoautoa samasta paikasta. Selkeät hinnat, vaihtoapu ja rahoitus. Tutustu valikoimaan ja pyydä vaihtotarjous.",
    path: "/",
    ogImage: "/assets/default-og.jpg",
  });

export default function Page() {
  return (
    <main className="w-full">
      <LocalBusinessSchema
        name="Autotalo Väylä"
        phone="+358400000002"
        email="info@autotalo-vayla.fi"
        address={{
          streetAddress: "Esimerkkikatu 1",
          addressLocality: "Helsinki",
          postalCode: "00100",
          addressCountry: "FI",
        }}
      />

      <Hero />
      <NewestCarsSection />
      <WhyUsSection />
      <TrustNumbersSection />
      <TradeInCtaSection />
      <ServicesSection />
      <FinancingSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
