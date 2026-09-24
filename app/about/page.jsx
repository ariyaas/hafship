"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, racingSansOne } from "@/app/fonts";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const heroRef = useRef(null);
  const focusRef = useRef(null);
  const valuesRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Animation
      gsap.fromTo(
        ".hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out" }
      );

      // 2. Focus Section Reveal
      gsap.fromTo(
        ".focus-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: focusRef.current,
            start: "top 80%",
          },
        }
      );

      // 3. Values Section Reveal
      gsap.fromTo(
        ".value-item",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full flex-grow bg-white">
      {/* ========================================================
          SECTION 1: HERO / INTRODUCTION
      ======================================================== */}
      <section ref={heroRef} className="relative w-full bg-[#03182E] pt-40 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-[1400px] relative z-10 text-center">
          <p className="hero-text text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-6">
            About Hafship
          </p>
          <h1 className={`hero-text ${racingSansOne.className} text-5xl sm:text-6xl lg:text-7xl tracking-wide text-white uppercase mb-8`}>
            Independent Dry Bulk
            <br />
            <span className="text-[#D4AF37]">Shipbroking House</span>
          </h1>
          <p className={`hero-text ${raleway.className} mx-auto max-w-3xl text-lg sm:text-xl text-slate-300 font-medium leading-relaxed`}>
            Focused on connecting shipowners, operators, charterers, and cargo interests across international dry bulk markets. We develop long-term commercial relationships and match suitable cargo with competitive tonnage.
          </p>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: OUR FOCUS & VESSEL SEGMENTS
      ======================================================== */}
      <section ref={focusRef} className="w-full py-20 lg:py-32 px-4 sm:px-8 bg-[#FAFAFA]">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className={`${raleway.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#03182E] uppercase`}>
              Our Brokerage Focus
            </h2>
            <div className="mt-6 mx-auto h-[2px] w-24 bg-[#D4AF37]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="focus-card bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl">
              <h3 className={`${raleway.className} text-xl font-bold text-[#03182E] uppercase mb-4`}>
                Chartering Activity
              </h3>
              <p className={`${raleway.className} text-slate-600 leading-relaxed`}>
                Our core activity covers voyage chartering, trip time charters, and period employment to find workable employment and cargo solutions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="focus-card bg-[#03182E] p-8 rounded-2xl shadow-xl border border-white/10 transform md:-translate-y-4">
              <h3 className={`${raleway.className} text-xl font-bold text-[#D4AF37] uppercase mb-4`}>
                Vessel Segments
              </h3>
              <ul className={`${raleway.className} text-white space-y-3 font-medium tracking-wide`}>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-[#D4AF37] rounded-full"/> Handysize</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-[#D4AF37] rounded-full"/> Handymax</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-[#D4AF37] rounded-full"/> Supramax</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-[#D4AF37] rounded-full"/> Ultramax</li>
                <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-[#D4AF37] rounded-full"/> Panamax</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="focus-card bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl">
              <h3 className={`${raleway.className} text-xl font-bold text-[#03182E] uppercase mb-4`}>
                Market Intelligence
              </h3>
              <p className={`${raleway.className} text-slate-600 leading-relaxed`}>
                Providing timely market information and strategic insights to negotiate the best freight rates and manage risks effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: WHY CHOOSE US
      ======================================================== */}
      <section ref={valuesRef} className="w-full py-20 lg:py-32 px-4 sm:px-8 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className={`${raleway.className} text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-4`}>
              THE HAFSHIP ADVANTAGE
            </p>
            <h2 className={`${raleway.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#03182E] uppercase mb-8`}>
              Delivering Success Across Oceans
            </h2>
            
            <div className="space-y-8">
              <div className="value-item flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#03182E]/5 text-[#D4AF37]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className={`${raleway.className} text-lg font-bold text-[#03182E] uppercase`}>Expertise & Experience</h4>
                  <p className={`${raleway.className} text-slate-600 mt-1`}>Decades of combined experience ensuring smooth and efficient cargo transportation tailored to your needs.</p>
                </div>
              </div>

              <div className="value-item flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#03182E]/5 text-[#D4AF37]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <div>
                  <h4 className={`${raleway.className} text-lg font-bold text-[#03182E] uppercase`}>Global Network</h4>
                  <p className={`${raleway.className} text-slate-600 mt-1`}>Extensive network of trusted vessel operators allowing us to provide flexible shipping solutions worldwide.</p>
                </div>
              </div>

              <div className="value-item flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#03182E]/5 text-[#D4AF37]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h4 className={`${raleway.className} text-lg font-bold text-[#03182E] uppercase`}>Safety & Efficiency</h4>
                  <p className={`${raleway.className} text-slate-600 mt-1`}>Prioritizing the safe handling and timely delivery of dry bulk cargo using advanced logistics strategies.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Large Vessel Image */}
          <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/chartering-hero.jpg"
              alt="Hafship Dry Bulk Vessel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#03182E]/10" />
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: CALL TO ACTION
      ======================================================== */}
      <section className="w-full bg-[#D4AF37] py-16 px-4 sm:px-8">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className={`${raleway.className} text-2xl sm:text-3xl font-extrabold text-[#03182E] uppercase`}>
              Looking to cooperate?
            </h2>
            <p className={`${raleway.className} mt-2 text-[#03182E]/80 font-medium`}>
              We welcome suitable cargo and tonnage circulation to add value to your fixtures.
            </p>
          </div>
          <a
            href="mailto:chartering@hafship.com"
            className={`${raleway.className} shrink-0 inline-flex items-center justify-center rounded bg-[#03182E] px-8 py-4 text-sm font-bold tracking-widest text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#03182E] uppercase`}
          >
            CONTACT CHARTERING DESK
          </a>
        </div>
      </section>
    </main>
  );
}