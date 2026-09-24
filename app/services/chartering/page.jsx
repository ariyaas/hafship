"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, racingSansOne } from "@/app/fonts";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const CHARTERING_SERVICES = [
  {
    title: "Voyage Chartering",
    desc: "Matching suitable vessels with cargo requirements on international dry bulk routes.",
  },
  {
    title: "Trip Time Charter",
    desc: "Arranging short-term vessel employment based on owners' and charterers' requirements.",
  },
  {
    title: "Period Employment",
    desc: "Connecting suitable tonnage with charterers seeking multi-month employment.",
  },
  {
    title: "Tonnage Sourcing",
    desc: "Sourcing suitable Handysize through Panamax tonnage from owners and operators.",
  },
  {
    title: "Cargo Broking",
    desc: "Sourcing and circulating dry bulk cargo requirements securely and efficiently.",
  },
  {
    title: "Co-Brokerage",
    desc: "Working with established shipbrokers and commercial desks to jointly develop fixtures.",
  }
];

export default function CharteringPage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-up",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        ".card-up",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full flex-grow bg-[#FAFAFA]">
      {/* ================= HERO ================= */}
      <section ref={heroRef} className="relative w-full bg-[#03182E] pt-40 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/chartering-hero.jpg" alt="Dry Bulk Vessel" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#03182E]/80" />
        </div>
        
        <div className="mx-auto max-w-[1400px] relative z-10 text-center">
          <p className="fade-up text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-6">
            Core Brokerage
          </p>
          <h1 className={`fade-up ${racingSansOne.className} text-5xl sm:text-6xl lg:text-7xl tracking-wide text-white uppercase mb-8`}>
            Dry Bulk <span className="text-[#D4AF37]">Chartering</span>
          </h1>
          <p className={`fade-up ${raleway.className} mx-auto max-w-3xl text-lg sm:text-xl text-slate-300 font-medium leading-relaxed`}>
            At HAFSHIP, we specialize in seamlessly connecting cargo with the right vessels across the globe. We provide tailored, efficient, and cost-effective solutions for dry bulk cargo transportation.
          </p>
        </div>
      </section>

      {/* ================= VESSEL SEGMENTS ================= */}
      <section className="w-full bg-[#D4AF37] py-6 px-4">
        <div className="mx-auto max-w-[1400px] flex flex-wrap items-center justify-center gap-6 md:gap-12 text-[#03182E]">
          <span className={`${raleway.className} text-sm md:text-base font-bold uppercase tracking-widest`}>Handysize</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#03182E]/40" />
          <span className={`${raleway.className} text-sm md:text-base font-bold uppercase tracking-widest`}>Handymax</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#03182E]/40" />
          <span className={`${raleway.className} text-sm md:text-base font-bold uppercase tracking-widest`}>Supramax</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#03182E]/40" />
          <span className={`${raleway.className} text-sm md:text-base font-bold uppercase tracking-widest`}>Ultramax</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#03182E]/40" />
          <span className={`${raleway.className} text-sm md:text-base font-bold uppercase tracking-widest`}>Panamax</span>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section ref={contentRef} className="w-full py-20 lg:py-32 px-4 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className={`${raleway.className} text-3xl sm:text-4xl font-extrabold text-[#03182E] uppercase`}>
              Our Chartering Services
            </h2>
            <div className="mt-6 mx-auto h-[2px] w-24 bg-[#D4AF37]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CHARTERING_SERVICES.map((service, idx) => (
              <div key={idx} className="card-up bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl group">
                <div className="h-1 w-12 bg-[#D4AF37] mb-6 transition-all duration-300 group-hover:w-full" />
                <h3 className={`${raleway.className} text-xl font-bold text-[#03182E] uppercase mb-4`}>
                  {service.title}
                </h3>
                <p className={`${raleway.className} text-sm text-slate-600 leading-relaxed font-medium`}>
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