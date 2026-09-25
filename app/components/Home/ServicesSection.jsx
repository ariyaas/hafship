"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, merriweather, lora } from "@/app/fonts";
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
    title: "Trip Time Charter",
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
    title: "Cargo Broking",
    desc: "Sourcing and circulating dry bulk cargo requirements.",
    img: "/images/ch3.jpeg", 
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Tonnage",
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
    title: "Co-Brokerage",
    desc: "Working with established shipbrokers and commercial desks to jointly develop fixtures.",
    img: "/images/ch4.jpg", 
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
      className="relative z-20 w-full bg-white py-8 sm:py-12 lg:py-16 px-3 sm:px-6 lg:px-8"
    >
      {/* ================= ROUNDED BRAND DARK CONTAINER ================= */}
      {/* Using the deepest color for the main background to anchor the section */}
      <div className="relative mx-auto max-w-[1600px] rounded-[36px] sm:rounded-[48px] bg-brand-dark px-6 sm:px-10 lg:px-14 pt-16 pb-16 lg:pt-20 lg:pb-24 shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden border border-brand-gray/10">
        
        {/* ================= TOP-RIGHT VISUAL ================= */}
        <div
          ref={fleetVisualRef}
          className="pointer-events-none absolute -top-12 sm:-top-16 lg:-top-20 right-4 sm:right-8 lg:right-12 hidden md:block w-[240px] sm:w-[280px] lg:w-[320px] select-none will-change-transform z-10"
        >
          {/* <Image
            src="/images/trimg.png"
            alt="Hafship Operations"
            width={320}
            height={320}
            className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
          /> */}
        </div>

        {/* ================= HEADER ================= */}
        <div className="relative z-20 mb-12 border-b border-brand-gray/20 pb-6">
          <p className={`${raleway.className} text-xs font-bold tracking-[0.25em] text-brand-blue uppercase mb-3`}>
            WHAT WE DO
          </p>

          <h2
            className={`${merriweather.className} text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-gray leading-tight uppercase`}
          >
            Dry Bulk
            <br />
            {/* The strong pop of brand blue brings the branding together */}
            <span className="text-brand-blue">Chartering.</span>
          </h2>
        </div>

        {/* ================= 6 SERVICE CARDS ================= */}
        <div className="relative z-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                // Cards use Brand Gray, creating a clean, high-contrast look against the Dark Navy background
                className="group relative flex flex-col justify-between rounded-[28px] border-2 border-transparent bg-brand-gray p-6 transition-all duration-500 hover:-translate-y-2 hover:border-brand-blue hover:shadow-[0_20px_45px] hover:shadow-brand-blue/20"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3
                      // Deep navy text ensures perfect readability on the light gray card
                      className={`${raleway.className} text-lg sm:text-xl font-bold tracking-tight text-brand-dark group-hover:text-brand-blue transition-colors uppercase`}
                    >
                      {service.title}
                    </h3>

                    {/* Icon Box: Brand Blue accent that turns solid on hover */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 border border-brand-blue/30 text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-gray transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Description: Deep slate text on gray background */}
                  <p
                    className={`${lora.className} mt-4 text-sm leading-relaxed text-brand-dark/80 min-h-[64px]`}
                  >
                    {service.desc}
                  </p>
                </div>

                {/* Expanding Image */}
                <div className="mt-6 relative h-44 w-full overflow-hidden rounded-2xl border border-brand-dark/10 bg-brand-dark transition-[height] duration-500 ease-out group-hover:h-60 shadow-inner">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover grayscale-[20%] transition-transform duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
                  />
                  {/* Subtle overlay to ensure the image sits nicely within the gray card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}