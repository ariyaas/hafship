"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, lora, playfair, merriweather } from "@/app/fonts";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const SERVICES_DATA = [
  {
    id: "01",
    title: "Voyage Chartering",
    desc: "Matching suitable vessels with cargo requirements on international dry bulk routes.",
    img: "/images/Chartering.png", 
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Trip Time Chartering",
    desc: "Arranging short-term vessel employment based on owners' and charterers' requirements.",
    img: "/images/ch1.jpeg", 
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Period Employment",
    desc: "Connecting suitable tonnage with charterers seeking multi-month employment.",
    img: "/images/ch2.jpeg", 
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Cargo & Tonnage Matching",
    desc: "Sourcing and circulating dry bulk cargo requirements to connect the right cargo with the right tonnage.",
    img: "/images/ch3.jpeg", 
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Tonnage Positioning",
    desc: "Sourcing suitable Handysize through Panamax tonnage from owners and operators.",
    img: "/images/Chartering.png", 
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Freight & Rate Negotiations",
    desc: "Evaluating key commercial elements including freight levels and charter terms to facilitate sustainable fixtures.",
    img: "/images/ch4.jpg", 
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "07",
    title: "Fixture Coordination",
    desc: "Supporting clients from the initial cargo or vessel requirement through negotiations and fixture execution.",
    img: "/images/ch1.jpeg", 
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "08",
    title: "Post-Fixture Support",
    desc: "Building long-term commercial relationships and providing rigorous post-fixture coordination.",
    img: "/images/ch2.jpeg", 
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    id: "09",
    title: "Tanker & Liquid Broking",
    desc: "Providing professional shipbroking services connecting traders with the right commercial tanker opportunities.",
    img: "/images/ch3.jpeg", 
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  }
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;

    if (!section || !title) return;

    const ctx = gsap.context(() => {
      // Simple fade-up for the title
      gsap.fromTo(
        title,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-20 w-full bg-white py-8 sm:py-12 lg:py-16 px-3 sm:px-6 lg:px-8"
    >
      {/* ================= ROUNDED BRAND DARK CONTAINER ================= */}
      <div className="relative mx-auto max-w-[1600px] rounded-[36px] sm:rounded-[48px] bg-brand-dark px-6 sm:px-10 lg:px-14 pt-16 pb-16 lg:pt-20 lg:pb-24 shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden">
        
        {/* ================= HEADER ================= */}
        <div ref={titleRef} className="relative z-20 mb-12 border-b border-brand-gray/10 pb-6 text-center lg:text-left">
          <p className={`${raleway.className} text-xs font-bold tracking-[0.25em] text-brand-gray uppercase mb-3`}>
            WHAT WE DO
          </p>

          <h2
            className={`${playfair.className} text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight text-brand-blue leading-[1.15] uppercase`}
          >
            Dry Bulk & Tanker
            <br className="hidden lg:block" />
            <span className="text-brand-blue lg:ml-2">Chartering</span>
          </h2>
        </div>

        {/* ================= 9 SERVICE CARDS ================= */}
        <div className="relative z-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                // Pure white background for maximum premium contrast
                className="group relative flex flex-col justify-between rounded-[24px] border-2 border-brand-gray/10 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-brand-blue hover:shadow-[0_20px_50px_rgba(14,96,156,0.2)]"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className={`${playfair.className} text-lg sm:text-xl font-bold tracking-tight text-brand-dark group-hover:text-brand-blue transition-colors uppercase`}
                    >
                      {service.title}
                    </h3>

                    {/* Icon Box: Clean brand blue outline, filling in on hover */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-transparent border-2 border-brand-blue/20 text-brand-blue group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Description text */}
                  <p
                    className={`${lora.className} mt-4 text-sm sm:text-base leading-relaxed text-slate-600 min-h-[72px]`}
                  >
                    {service.desc}
                  </p>
                </div>

                {/* Expanding Image at the bottom (Responsive handling) */}
                <div className="mt-6 relative h-40 w-full overflow-hidden rounded-xl bg-brand-gray transition-all duration-500 ease-out group-hover:h-56 shadow-sm">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= BOTTOM TAGLINE ================= */}
        <div className="relative z-20 mt-16 text-center border-t border-brand-gray/10 pt-12">
          <p className={`${raleway.className} text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-yellow uppercase mb-4`}>
            Market Intelligence <span className="text-brand-blue mx-3">•</span> Global Network <span className="text-brand-blue mx-3">•</span> Commercial Expertise
          </p>
          <p className={`${lora.className} text-lg sm:text-xl text-slate-300 font-medium`}>
            From Cargo to Fixture — Connecting the Right Parties, Tonnage & Opportunities.
          </p>
        </div>

      </div>
    </section>
  );
}