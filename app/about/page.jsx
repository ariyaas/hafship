"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, merriweather, lora } from "@/app/fonts";
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
      <section ref={heroRef} className="relative w-full bg-brand-dark pt-40 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-[1400px] relative z-10 text-center">
          <p className="hero-text text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase mb-6">
            About Hafship
          </p>
          <h1 className={`hero-text ${merriweather.className} text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase mb-8`}>
            Independent Dry Bulk
            <br />
            <span className="text-brand-yellow">Shipbroking House</span>
          </h1>
          <p className={`hero-text ${lora.className} mx-auto max-w-3xl text-lg sm:text-xl text-slate-300 font-medium leading-relaxed`}>
            Focused on connecting shipowners, operators, charterers, and cargo interests across international dry bulk markets. We develop long-term commercial relationships and match suitable cargo with competitive tonnage.
          </p>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: OUR FOCUS & VESSEL SEGMENTS
      ======================================================== */}
      <section ref={focusRef} className="w-full py-20 lg:py-32 px-4 sm:px-8 bg-brand-gray">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className={`${merriweather.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark uppercase`}>
              Our Brokerage Focus
            </h2>
            <div className="mt-6 mx-auto h-[2px] w-24 bg-brand-yellow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="focus-card bg-white p-8 rounded-[24px] border border-slate-200 shadow-sm hover:border-brand-yellow transition-all duration-300 hover:shadow-xl">
              <h3 className={`${raleway.className} text-xl font-bold text-brand-dark uppercase mb-4`}>
                Chartering Activity
              </h3>
              <p className={`${lora.className} text-brand-dark/70 leading-relaxed text-lg`}>
                Our core activity covers voyage chartering, trip time charters, and period employment to find workable employment and cargo solutions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="focus-card bg-brand-dark p-8 rounded-[24px] shadow-xl border border-white/10 transform md:-translate-y-4">
              <h3 className={`${raleway.className} text-xl font-bold text-brand-yellow uppercase mb-4`}>
                Vessel Segments
              </h3>
              <ul className={`${raleway.className} text-white space-y-4 font-medium tracking-wide mt-6`}>
                <li className="flex items-center gap-4"><span className="h-2 w-2 bg-brand-yellow rounded-full"/> Handysize</li>
                <li className="flex items-center gap-4"><span className="h-2 w-2 bg-brand-yellow rounded-full"/> Handymax</li>
                <li className="flex items-center gap-4"><span className="h-2 w-2 bg-brand-yellow rounded-full"/> Supramax</li>
                <li className="flex items-center gap-4"><span className="h-2 w-2 bg-brand-yellow rounded-full"/> Ultramax</li>
                <li className="flex items-center gap-4"><span className="h-2 w-2 bg-brand-yellow rounded-full"/> Panamax</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="focus-card bg-white p-8 rounded-[24px] border border-slate-200 shadow-sm hover:border-brand-yellow transition-all duration-300 hover:shadow-xl">
              <h3 className={`${raleway.className} text-xl font-bold text-brand-dark uppercase mb-4`}>
                Market Intelligence
              </h3>
              <p className={`${lora.className} text-brand-dark/70 leading-relaxed text-lg`}>
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
            <p className={`${raleway.className} text-xs font-bold tracking-[0.25em] text-brand-yellow uppercase mb-4`}>
              WHY CHOOSE US
            </p>
            <h2 className={`${merriweather.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark uppercase mb-8 leading-tight`}>
              Delivering Success Across Ocean
            </h2>
            
            <div className="space-y-8 mt-12">
              <div className="value-item flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-gray border border-brand-gray/50 text-brand-blue shadow-sm">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className={`${raleway.className} text-lg font-bold text-brand-dark uppercase`}>Expertise & Experience</h4>
                  <p className={`${lora.className} text-brand-dark/70 mt-2 leading-relaxed`}>With decades of combined experience in the shipping industry, our team of seasoned professionals ensures smooth and efficient cargo transportation tailored to your needs.</p>
                </div>
              </div>

              <div className="value-item flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-gray border border-brand-gray/50 text-brand-blue shadow-sm">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                </div>
                <div>
                  <h4 className={`${raleway.className} text-lg font-bold text-brand-dark uppercase`}>Global Network & Reliable Partnerships</h4>
                  <p className={`${lora.className} text-brand-dark/70 mt-2 leading-relaxed`}>We have an extensive network of trusted vessel operators and shipping partners, allowing us to provide flexible and cost-effective shipping solutions worldwide.</p>
                </div>
              </div>

              <div className="value-item flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-gray border border-brand-gray/50 text-brand-blue shadow-sm">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h4 className={`${raleway.className} text-lg font-bold text-brand-dark uppercase`}>Safety & Efficiency</h4>
                  <p className={`${lora.className} text-brand-dark/70 mt-2 leading-relaxed`}>We prioritize the safe handling and timely delivery of your dry bulk cargo, using industry best practices and advanced logistics strategies to minimize risks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Large Vessel Image */}
          <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-gray">
            <Image
              src="/images/chartering-hero.jpg"
              alt="Hafship Dry Bulk Vessel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brand-dark/10" />
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: CALL TO ACTION
      ======================================================== */}
      <section className="w-full bg-brand-yellow py-20 px-4 sm:px-8 border-t border-brand-dark/10">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className={`${merriweather.className} text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark uppercase`}>
              Looking to cooperate?
            </h2>
            <p className={`${lora.className} mt-3 text-brand-dark/80 font-medium text-lg`}>
              We welcome suitable cargo and tonnage circulation to add value to your fixtures.
            </p>
          </div>
          <div className="flex gap-4">
             <a
              href="mailto:chartering@hafship.com"
              className={`${raleway.className} shrink-0 inline-flex items-center justify-center rounded bg-brand-dark px-8 py-4 text-sm font-bold tracking-widest text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white hover:text-brand-dark uppercase`}
            >
              CONTACT CHARTERING DESK
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}