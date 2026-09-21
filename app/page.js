import WorldClock from "@/components/WorldClock";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesSection from "@/components/ServicesSection";
import StatsBanner from "@/components/StatsBanner";
import QuoteSection from "@/components/QuoteSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

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
      <StatsBanner />
      <QuoteSection />
      <WhyChooseUs />
      <Footer />

    
    </main>
  );
}