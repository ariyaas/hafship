"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway } from "@/app/fonts";

gsap.registerPlugin(ScrollTrigger);

const WHY_DATA = [
  {
    id: "01",
    title: "Market Access",
    desc: "Connecting cargo interests, charterers, owners and operators across major dry bulk markets.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Fast Response",
    desc: "Prompt handling of cargo and tonnage inquiries.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Global Network",
    desc: "Commercial relationships across India, Middle East, Asia, Europe and the Americas.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Commercial Focus",
    desc: "Focused on finding workable employment and cargo solutions.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Confidentiality",
    desc: "Respecting the confidentiality of owners, charterers, cargo interests and brokers.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Long-Term Relationships",
    desc: "Building sustainable commercial relationships rather than focusing only on individual fixtures.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function WhyHafship() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;

    if (!section || !header || !grid) return;

    const ctx = gsap.context(() => {
      // Header fade-in
      gsap.fromTo(
        header.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
          },
        }
      );

      // Premium Cards stagger reveal
      gsap.fromTo(
        grid.children,
        { y: 60, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: grid,
            start: "top 80%",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-hafship"
      className="relative z-20 w-full bg-[#03182E] py-24 lg:py-32 px-4 sm:px-8 overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* ================= HEADER ================= */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <p className={`${raleway.className} text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase`}>
              OUR ADVANTAGE
            </p>
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          </div>
          <h2 className={`${raleway.className} text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase`}>
            Why Hafship.
          </h2>
          <div className="mt-8 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </div>

        {/* ================= 6-GRID PREMIUM FEATURES ================= */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_DATA.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col bg-white/[0.03] rounded-3xl p-8 border border-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.06] hover:border-[#D4AF37]/50 hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] overflow-hidden"
            >
              {/* Huge Watermark Number */}
              <span className={`${raleway.className} absolute -bottom-4 -right-2 text-[100px] font-black leading-none text-white/[0.02] transition-colors duration-500 group-hover:text-[#D4AF37]/10 pointer-events-none select-none`}>
                {item.id}
              </span>

              {/* Glowing Top Border Line on Hover */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Premium Icon Box */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-[#D4AF37] transition-all duration-500 group-hover:bg-[#D4AF37] group-hover:text-[#03182E] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] mb-8">
                  {item.icon}
                </div>
                
                <h3 className={`${raleway.className} text-2xl font-bold text-white uppercase tracking-wide mb-4`}>
                  {item.title}
                </h3>
                
                <p className={`${raleway.className} text-sm text-slate-400 font-medium leading-relaxed max-w-[90%]`}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}