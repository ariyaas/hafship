"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, merriweather, lora,playfair } from "@/app/fonts";

gsap.registerPlugin(ScrollTrigger);

export default function TonnagePage() {
  const headerRef = useRef(null);
  const boardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".fade-up",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" }
      );

      // Empty Board Reveal Animation
      gsap.fromTo(
        boardRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: boardRef.current,
            start: "top 80%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full flex-grow bg-brand-gray min-h-screen flex flex-col">
      {/* ================= HERO SECTION ================= */}
      <section ref={headerRef} className="relative w-full bg-brand-dark pt-40 pb-20 lg:pt-48 lg:pb-28 px-4 sm:px-8 overflow-hidden">
        {/* Abstract Gold Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-yellow/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-[1400px] relative z-10 flex flex-col items-center text-center">
          <p className="fade-up text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase mb-6">
            Current Positions
          </p>
          <h1 className={`fade-up ${playfair.className} text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase mb-6`}>
            Open <span className="text-brand-blue">Tonnage</span>
          </h1>
          <p className={`fade-up ${lora.className} max-w-2xl text-base sm:text-lg text-slate-300 font-medium leading-relaxed`}>
            A live feed of open vessel positions across international markets. Sourcing suitable Handysize through Capesize tonnage from owners and operators to connect the right cargo with the right tonnage.
          </p>
        </div>
      </section>

      {/* ================= DETAILS UNDER PROCESS BOARD ================= */}
      <section className="flex-grow w-full py-16 lg:py-24 px-4 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          
          <div ref={boardRef} className="w-full bg-white rounded-3xl shadow-[0_15px_50px_rgba(3,24,46,0.06)] border border-slate-200 overflow-hidden p-12 sm:p-20 text-center flex flex-col items-center justify-center min-h-[400px]">
            
            {/* Process/Update Icon */}
            <div className="h-20 w-20 bg-brand-gray/50 rounded-full flex items-center justify-center mb-6">
              <svg className="h-10 w-10 text-brand-blue/50 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>

            <h2 className={`${merriweather.className} text-2xl sm:text-3xl font-bold text-brand-dark uppercase tracking-tight mb-4`}>
              Details Under Process
            </h2>
            
            <p className={`${lora.className} text-base sm:text-lg text-slate-500 max-w-lg leading-relaxed mb-8`}>
              We are currently updating our vessel details. For more details and immediate access to our open tonnage positions, please contact our chartering desk.
            </p>

            <a
              href="mailto:chartering@hafship.com"
              className={`${raleway.className} inline-flex items-center gap-3 rounded-full bg-brand-dark px-8 py-3.5 text-xs font-bold tracking-widest text-white transition-all duration-300 hover:bg-brand-blue uppercase shadow-lg`}
            >
              Contact Us
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

          </div>

        </div>
      </section>

      {/* ================= CO-BROKERAGE CTA ================= */}
      <section className="w-full bg-brand-dark py-16 px-4 sm:px-8 border-t border-white/10">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className={`${merriweather.className} text-2xl sm:text-3xl font-extrabold text-white uppercase`}>
              Co-Broking Opportunities
            </h2>
            <p className={`${lora.className} mt-2 text-slate-300 font-medium max-w-xl`}>
              We welcome suitable cargo and tonnage circulation from established shipbrokers and commercial desks where both parties can add value to the fixture.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/submit-requirement?type=tonnage"
              className={`${raleway.className} shrink-0 inline-flex items-center justify-center rounded bg-brand-yellow px-6 py-3.5 text-xs font-bold tracking-widest text-brand-dark transition-all duration-300 hover:bg-white uppercase`}
            >
              SUBMIT TONNAGE
            </a>
            <a
              href="/submit-requirement?type=cargo"
              className={`${raleway.className} shrink-0 inline-flex items-center justify-center rounded border border-white/30 bg-transparent px-6 py-3.5 text-xs font-bold tracking-widest text-white transition-all duration-300 hover:border-brand-yellow hover:text-brand-yellow uppercase`}
            >
              SUBMIT CARGO
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}