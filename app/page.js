import WorldClock from "@/app/components/layout/Navbar";
import Hero from "@/app/components/Home/Hero";
import About from "@/app/components/Home/About";
import ServicesSection from "@/app/components/Home/ServicesSection";
import QuoteSection from "@/app/components/Home/QuoteSection";
import WhyChooseUs from "@/app/components/Home/WhyChooseUs";
import Preloader from "@/app/components/Preloader";
import MarketsAndCargo from "@/app/components/Home/MarketsAndCargo";
import WhyHafship from "@/app/components/Home/WhyHafship";

export default function Home() {
  return (
    <main className="relative bg-[#040C16]">
      {/* 1. East to West World Clock Ticker */}
      <WorldClock />

      {/* 2. Hero Video with 3D and Smooth Overlay */}
      <Preloader />
      <Hero />
      <About />
      <ServicesSection />
      <MarketsAndCargo />
     
      <WhyHafship />

    
    </main>
  );
}