import AboutSection from "@/components/AboutSection";
import BankingPartners from "@/components/BankingPartners";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import FinancialServices from "@/components/FinancialServices";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <AboutSection />
      <FinancialServices />
      <WhyChooseUs />
      <BankingPartners />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
