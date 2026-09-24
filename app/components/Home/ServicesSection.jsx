"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { outfit, raleway } from "@/app/fonts";

gsap.registerPlugin(ScrollTrigger);

const SERVICES_DATA = [
  {
    id: "01",
    title: "Voyage Chartering",
    desc: "Matching suitable vessels with cargo requirements on international dry bulk routes[cite: 5].",
    img: "/images/Chartering.png", 
    icon: (
      <svg className="h-5 w-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Trip Time Charter",
    desc: "Arranging short-term vessel employment based on owners' and charterers' requirements[cite: 5].",
    img: "/images/TimeCharter.png", 
    icon: (
      <svg className="h-5 w-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Period Employment",
    desc: "Connecting suitable tonnage with charterers seeking multi-month employment[cite: 5].",
    img: "/images/PeriodEmployment.png", 
    icon: (
      <svg className="h-5 w-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Cargo Broking",
    desc: "Sourcing and circulating dry bulk cargo requirements[cite: 5].",
    img: "/images/CargoBroking.png", 
    icon: (
      <svg className="h-5 w-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const fleetVisualRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const fleetVisual = fleetVisualRef.current;

    if (!section || !fleetVisual) return;

    const ctx = gsap.context(() => {
      // Fleet Visual glides gently from right to left as you scroll
      gsap.fromTo(
        fleetVisual,
        { x: 50, opacity: 0.9 },
        {
          x: -30,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom top",
            scrub: 1.2,
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
      className="relative z-20 w-full bg-[#FAFAFA] py-8 sm:py-12 lg:py-16 px-3 sm:px-6 lg:px-8"
    >
      {/* ================= ROUNDED DARK NAVY CONTAINER ================= */}
      <div className="relative mx-auto max-w-[1600px] rounded-[36px] sm:rounded-[48px] bg-brand-blue px-6 sm:px-10 lg:px-14 pt-16 pb-16 lg:pt-20 lg:pb-24 text-white shadow-2xl border border-white/5 overflow-hidden">
        
        {/* ================= TOP-RIGHT VISUAL (Parallax Glide) ================= */}
        <div
          ref={fleetVisualRef}
          className="pointer-events-none absolute -top-12 sm:-top-16 lg:-top-20 right-4 sm:right-8 lg:right-12 hidden md:block w-[240px] sm:w-[280px] lg:w-[320px] select-none will-change-transform z-10"
        >
          <img
            src="/images/trimg.png"
            alt="Hafship Operations"
            className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
          />
        </div>

        {/* ================= HEADER ================= */}
        <div className="relative z-20 mb-12 border-b border-white/10 pb-6">
          <p className={`${raleway.className} text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-3`}>
            WHAT WE DO
          </p>

          <h2
            className={`${raleway.className} text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase`}
          >
            Dry Bulk
            <br />
            <span className="text-white/80">Chartering.</span>
          </h2>
        </div>

        {/* ================= 4 SERVICE CARDS ================= */}
        <div className="relative z-20 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-[28px] border-2 border-white/5 bg-white/5 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:bg-white/10 hover:shadow-[0_20px_45px_rgba(212,175,55,0.15)]"
              >
                {/* CARD TOP: Title + Icon */}
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className={`${raleway.className} text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-[#D4AF37] transition-colors uppercase`}
                    >
                      {service.title}
                    </h3>

                    {/* Icon Box in Muted Gold */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#03182E] transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`${raleway.className} mt-3.5 text-xs sm:text-sm leading-relaxed text-slate-300 min-h-[58px]`}
                  >
                    {service.desc}
                  </p>
                </div>

                {/* CARD BOTTOM: Expanding Image */}
                <div className="mt-5 relative h-44 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition-[height] duration-500 ease-out group-hover:h-60 shadow-inner">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover grayscale-[30%] transition-transform duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03182E]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}