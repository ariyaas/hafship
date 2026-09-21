"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { outfit, raleway } from "@/app/fonts";

gsap.registerPlugin(ScrollTrigger);

const SERVICES_DATA = [
  {
    id: "01",
    title: "Freight Forwarding",
    desc: "End-to-end freight solutions covering all transport modes, including seamless international customs clearance.",
    img: "/images/FreightForwarding.png", // Verified working freight forwarding photo
    icon: (
      <svg className="h-5 w-5 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Chartering",
    desc: "Customized cargo transport solutions with reliable and efficient sea shipping for dry bulk and breakbulk cargo.",
    img: "/images/Chartering.png", // Verified working cargo ship photo
    icon: (
      <svg className="h-5 w-5 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Cargo Broking",
    desc: "Strategic market insights to optimize cargo shipping, negotiate charter fixtures, and secure the best deals.",
    img: "/images/CargoBroking.png", // Verified working cargo broking photo
    icon: (
      <svg className="h-5 w-5 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Ship Agency",
    desc: "Comprehensive port management for smooth vessel operations, husbanding, and timely terminal turnaround.",
    img: "/images/ShipAgency.png", // Verified working ship agency photo
    icon: (
      <svg className="h-5 w-5 text-[#38BDF8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
    // Outer section with light gray background (#EBEFF3) showing around the rounded dark card
    <section
      ref={sectionRef}
      className="relative z-20 w-full bg-[#EBEFF3] py-8 sm:py-12 lg:py-16 px-3 sm:px-6 lg:px-8"
    >
      {/* ================= ROUNDED DARK CONTAINER ================= */}
      <div className="relative mx-auto max-w-[1600px] rounded-[36px] sm:rounded-[48px] bg-[#020C1B] px-6 sm:px-10 lg:px-14 pt-16 pb-16 lg:pt-20 lg:pb-24 text-white shadow-2xl border border-white/[0.06] overflow-hidden">
        
        {/* ================= TOP-RIGHT FLEET VISUAL (Moved Higher & Reduced Size) ================= */}
        {/* Placed at -top-16 to -top-24 so it never collides with the Ship Agency card */}
        <div
          ref={fleetVisualRef}
          className="pointer-events-none absolute -top-12 sm:-top-16 lg:-top-20 right-4 sm:right-8 lg:right-12 hidden md:block w-[240px] sm:w-[280px] lg:w-[320px] select-none will-change-transform z-10"
        >
          <img
            src="/images/trimg.png"
            alt="Air Cargo, Ocean Vessel, and Road Transport"
            className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
          />
        </div>

        {/* ================= HEADER ================= */}
        <div className="relative z-20 mb-12 border-b border-white/10 pb-6">
          {/* Tag: OUR EXPERIENCE */}
          <p className={`${outfit.className} text-xs font-bold tracking-[0.25em] text-[#60A5FA] uppercase mb-3`}>
            OUR EXPERIENCE
          </p>

          {/* Title */}
          <h2
            className={`${outfit.className} text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight`}
          >
            Essential Features
            <br />
            <span className="text-white/90">of our Services.</span>
          </h2>
        </div>

        {/* ================= 4 SERVICE CARDS ================= */}
        <div className="relative z-20 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-[28px] border-2 border-white/15 bg-[#05162D]/80 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#065E9A] hover:bg-[#061A35] hover:shadow-[0_20px_45px_rgba(6,94,154,0.3)]"
              >
                {/* CARD TOP: Title + Icon */}
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      className={`${outfit.className} text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#60A5FA] transition-colors`}
                    >
                      {service.title}
                    </h3>

                    {/* Icon Box in #065E9A */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#065E9A]/20 border border-[#065E9A]/40 text-[#38BDF8] group-hover:bg-[#065E9A] group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Description using Raleway */}
                  <p
                    className={`${raleway.className} mt-3.5 text-xs sm:text-sm leading-relaxed text-slate-300 min-h-[58px]`}
                  >
                    {service.desc}
                  </p>
                </div>

                {/* CARD BOTTOM: Image (Full Natural Color, Expands h-44 to h-60 on hover) */}
                <div className="mt-5 relative h-44 w-full overflow-hidden rounded-2xl border border-white/20 bg-slate-950 transition-[height] duration-500 ease-out group-hover:h-60 shadow-inner">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B]/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}