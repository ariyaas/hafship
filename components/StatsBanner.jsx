"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { outfit, raleway } from "@/app/fonts";

gsap.registerPlugin(ScrollTrigger);

const STATS_DATA = [
  {
    id: "01",
    value: "24/7",
    label: "Global Dispatch",
    sub: "Port Agency & Support",
    icon: (
      // 24/7 Support / Husbandry
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "02",
    value: "50+",
    label: "Global Ports",
    sub: "Connecting Trade Lanes",
    icon: (
      // Maritime Anchor / Port
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "03",
    value: "100%",
    label: "Cargo Delivery",
    sub: "Customs & Port Compliance",
    icon: (
      // Verified Safety & Clearance
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "04",
    value: "Global",
    label: "Vessel Network",
    sub: "Dry Bulk & Chartering",
    icon: (
      // Ocean Vessel Fleet
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 18h18v-2H3v2zm1.5-4h15l-1.5-6h-12l-1.5 6zm6.5-8V4h2v2h-2zm-5 0V3h2v3h-2zm10 0V3h2v3h-2z" />
      </svg>
    ),
  },
];

export default function StatsBanner() {
  const containerRef = useRef(null);
  const itemsRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const items = itemsRef.current;
    if (!container || !items) return;

    const ctx = gsap.context(() => {
      // Staggered entrance animation when banner scrolls into view
      gsap.fromTo(
        items.children,
        { y: 35, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    // Outer section with light gray background (#EBEFF3) showing around the rounded banner
    <section className="relative z-20 w-full bg-[#EBEFF3] py-6 sm:py-24 px-3 sm:px-6 lg:px-8">
      
      {/* ================= ROUNDED BANNER WITH DARK OVERLAY ================= */}
      <div
        ref={containerRef}
        className="relative mx-auto max-w-[1600px] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-white/10"
      >
        {/* Background Logistics Image */}
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80"
          alt="Hafship Logistics Fleet"
          className="absolute inset-0 h-full w-full object-cover select-none"
        />

        {/* Cinematic Dark Overlay (Matches Screenshot image_a1b1b8.png) */}
        <div className="absolute inset-0 bg-[#020B18]/85 backdrop-blur-[1.5px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020B18] via-transparent to-[#020B18] opacity-70" />

        {/* ================= 4 STAT ITEMS STRIP ================= */}
        <div
          ref={itemsRef}
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 px-8 sm:px-12 lg:px-16 py-12 lg:py-14"
        >
          {STATS_DATA.map((item) => (
            <div
              key={item.id}
              className="group flex items-center gap-5 transition-transform duration-300 hover:-translate-y-1 select-none"
            >
              {/* Icon Circle with Concentric Rings (Hover turns to #065E9A) */}
              <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-white/15 bg-white/5 transition-all duration-300 group-hover:scale-110 group-hover:border-[#065E9A]/60 group-hover:bg-[#065E9A]/15" />

                {/* Inner Brand Circle with Pulse Glow */}
                <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#065E9A] shadow-lg shadow-[#065E9A]/40 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#0872BB] group-hover:shadow-[0_0_25px_rgba(6,94,154,0.7)]">
                  {item.icon}
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-col text-left">
                {/* Big Number / Value in Outfit Font */}
                <span
                  className={`${outfit.className} text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none group-hover:text-[#60A5FA] transition-colors`}
                >
                  {item.value}
                </span>

                {/* Primary Label in Raleway */}
                <span
                  className={`${raleway.className} mt-1.5 text-sm sm:text-base font-bold text-slate-100 tracking-wide`}
                >
                  {item.label}
                </span>

                {/* Secondary Sub-caption */}
                <span
                  className={`${raleway.className} text-[11px] sm:text-xs text-slate-400 font-medium tracking-normal mt-0.5`}
                >
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}