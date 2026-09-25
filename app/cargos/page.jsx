"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, merriweather, lora } from "@/app/fonts";

gsap.registerPlugin(ScrollTrigger);

// Cargo Data based on master content document (Section 7: Cargo Broking)
const CARGO_LIST = [
  {
    cargo: "Coal in bulk",
    qty: "55,000 MT",
    load: "Richards Bay, RSA",
    discharge: "Chennai / Ennore, India",
    laycan: "10-20 October",
    terms: "FIOST",
    status: "Firm"
  },
  {
    cargo: "Coal in bulk",
    qty: "75,000 MT",
    load: "Newcastle, Australia",
    discharge: "Krishnapatnam, India",
    laycan: "1-15 November",
    terms: "FIOST",
    status: "Indicative"
  },
  {
    cargo: "Coal in bulk",
    qty: "45,000 MT",
    load: "Samarinda, Indonesia",
    discharge: "Tuticorin, India",
    laycan: "Prompt",
    terms: "FIOST",
    status: "Firm"
  }
];

export default function CargoPage() {
  const headerRef = useRef(null);
  const tableRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".fade-up",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" }
      );

      // Table Rows Reveal Animation
      gsap.fromTo(
        ".table-row-anim",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tableRef.current,
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
            Market Requirements
          </p>
          <h1 className={`fade-up ${merriweather.className} text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase mb-6`}>
            Firm <span className="text-brand-yellow">Cargoes</span>
          </h1>
          <p className={`fade-up ${lora.className} max-w-2xl text-base sm:text-lg text-slate-300 font-medium leading-relaxed`}>
            A live feed of active cargo orders and volume requirements Hafship is currently working to cover on behalf of exclusive and direct charterers.
          </p>
        </div>
      </section>

      {/* ================= CARGO BOARD (TABLE) ================= */}
      <section className="flex-grow w-full py-16 lg:py-24 px-4 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          
          <div ref={tableRef} className="w-full overflow-x-auto pb-8">
            <div className="min-w-[1000px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(3,24,46,0.05)] border border-slate-200 overflow-hidden">
              
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 bg-brand-dark p-6 border-b border-brand-yellow/30">
                <div className={`${raleway.className} col-span-3 text-xs font-bold text-brand-yellow uppercase tracking-widest`}>Cargo / Status</div>
                <div className={`${raleway.className} col-span-2 text-xs font-bold text-brand-yellow uppercase tracking-widest`}>Quantity</div>
                <div className={`${raleway.className} col-span-2 text-xs font-bold text-brand-yellow uppercase tracking-widest`}>Load Port</div>
                <div className={`${raleway.className} col-span-2 text-xs font-bold text-brand-yellow uppercase tracking-widest`}>Discharge Port</div>
                <div className={`${raleway.className} col-span-1 text-xs font-bold text-brand-yellow uppercase tracking-widest`}>Terms</div>
                <div className={`${raleway.className} col-span-2 text-xs font-bold text-brand-yellow uppercase tracking-widest text-right`}>Action</div>
              </div>

              {/* Table Body */}
              <div className="flex flex-col">
                {CARGO_LIST.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="table-row-anim grid grid-cols-12 gap-4 p-6 items-center border-b border-slate-100 last:border-none transition-colors duration-300 hover:bg-slate-50 group"
                  >
                    {/* Cargo Type & Status */}
                    <div className="col-span-3 flex flex-col">
                      <span className={`${raleway.className} text-sm font-extrabold text-brand-dark tracking-wide`}>
                        {item.cargo}
                      </span>
                      <span className={`${raleway.className} text-[10px] ${item.status === 'Firm' ? 'text-green-600' : 'text-slate-400'} font-bold tracking-widest uppercase mt-1`}>
                        {item.status} ({item.laycan})
                      </span>
                    </div>

                    {/* Quantity */}
                    <div className={`${lora.className} col-span-2 text-sm font-medium text-slate-700`}>
                      {item.qty}
                    </div>

                    {/* Load Port */}
                    <div className={`${lora.className} col-span-2 text-sm font-medium text-brand-dark flex items-center gap-2`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                      {item.load}
                    </div>

                    {/* Discharge Port */}
                    <div className={`${lora.className} col-span-2 text-sm font-medium text-brand-dark flex items-center gap-2`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                      {item.discharge}
                    </div>

                    {/* Terms */}
                    <div className={`${raleway.className} col-span-1 text-xs font-bold text-slate-700 uppercase`}>
                      {item.terms}
                    </div>

                    {/* Action Button */}
                    <div className="col-span-2 flex justify-end">
                      <a
                        href={`mailto:chartering@hafship.com?subject=Proposal for ${item.qty} ${item.cargo}`}
                        className={`${raleway.className} inline-flex items-center justify-center rounded border border-brand-yellow bg-transparent px-5 py-2 text-xs font-bold tracking-widest text-brand-dark transition-all duration-300 hover:bg-brand-yellow hover:text-white uppercase`}
                      >
                        PROPOSE
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
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