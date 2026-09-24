"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, racingSansOne } from "@/app/fonts";

gsap.registerPlugin(ScrollTrigger);

const FORWARDING_SERVICES = [
  {
    title: "Air Freight",
    desc: "For time-sensitive shipments, our air freight services offer fast, secure, and reliable cargo transportation. With access to a global network of airlines, we provide flexible scheduling and competitive rates.",
    icon: "✈️"
  },
  {
    title: "Sea Freight",
    desc: "Our sea freight solutions offer cost-effective and efficient transportation for large, heavy, or bulk shipments. We handle FCL and LCL services, from booking to final delivery.",
    icon: "🚢"
  },
  {
    title: "Road Transport",
    desc: "We provide comprehensive road transport services for domestic and cross-border deliveries. With a modern fleet, we ensure safe and timely transportation for FTL and LTL shipments.",
    icon: "🚛"
  },
  {
    title: "Customs Clearance",
    desc: "Navigating customs regulations can be complex, but our expert customs clearance services ensure a smooth and hassle-free process. We handle all documentation, compliance, and duty payments.",
    icon: "📑"
  }
];

export default function FreightForwardingPage() {
  const heroRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-up",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        ".card-up",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full flex-grow bg-white">
      {/* ================= HERO ================= */}
      <section ref={heroRef} className="relative w-full bg-[#03182E] pt-40 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-[1400px] relative z-10 flex flex-col items-center text-center">
          <p className="fade-up text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-6">
            Global Logistics
          </p>
          <h1 className={`fade-up ${racingSansOne.className} text-5xl sm:text-6xl lg:text-7xl tracking-wide text-white uppercase mb-8`}>
            Freight <span className="text-[#D4AF37]">Forwarding</span>
          </h1>
          <p className={`fade-up ${raleway.className} max-w-3xl text-lg sm:text-xl text-slate-300 font-medium leading-relaxed`}>
            We offer comprehensive freight forwarding solutions, ensuring your cargo moves efficiently and securely across the globe. Our expert team manages every aspect of the shipping process, from cargo booking to final delivery.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section ref={gridRef} className="w-full py-20 lg:py-32 px-4 sm:px-8 bg-[#FAFAFA]">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {FORWARDING_SERVICES.map((service, idx) => (
              <div key={idx} className="card-up group relative bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-[0_20px_50px_rgba(3,24,46,0.08)] transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#03182E]/5 text-3xl group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className={`${raleway.className} text-2xl font-bold text-[#03182E] uppercase`}>
                    {service.title}
                  </h3>
                </div>
                
                <p className={`${raleway.className} text-slate-600 font-medium leading-relaxed`}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}