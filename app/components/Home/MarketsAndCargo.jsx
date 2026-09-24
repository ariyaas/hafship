"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway } from "@/app/fonts";

gsap.registerPlugin(ScrollTrigger);

const MARKETS = [
  {
    region: "India / Subcontinent",
    details: "WCI | ECI | Bangladesh | Sri Lanka",
  },
  {
    region: "Middle East",
    details: "Arabian Gulf | Red Sea | Middle East-Asia",
  },
  {
    region: "Asia-Pacific",
    details: "Southeast Asia | Indonesia | Philippines | China | Japan | Korea",
  },
  {
    region: "Atlantic",
    details: "Europe | Mediterranean | Black Sea | US Gulf",
  },
  {
    region: "South America",
    details: "Brazil | Argentina | East Coast South America",
  },
];

const COMMODITIES = [
  "Coal",
  "Petcoke",
  "Limestone",
  "Gypsum",
  "Salt",
  "Grain",
  "Fertilizers",
  "Ores",
  "Minerals",
];

export default function MarketsAndCargo() {
  const sectionRef = useRef(null);
  const marketsRef = useRef(null);
  const cargoRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const markets = marketsRef.current;
    const cargo = cargoRef.current;

    if (!section || !markets || !cargo) return;

    const ctx = gsap.context(() => {
      // Markets List stagger animation
      gsap.fromTo(
        markets.children,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: markets,
            start: "top 80%",
          },
        }
      );

      // Commodities grid stagger animation
      gsap.fromTo(
        cargo.children,
        { scale: 0.8, opacity: 0, y: 20 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: cargo,
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
      id="markets-cargo"
      className="relative z-20 w-full bg-white py-20 lg:py-32 px-4 sm:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* ================= LEFT COLUMN: OUR MARKETS ================= */}
        <div className="flex flex-col w-full">
          <div className="mb-10">
            <p className={`${raleway.className} text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-4`}>
              GLOBAL REACH
            </p>
            <h2 className={`${raleway.className} text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#03182E] leading-tight uppercase`}>
              Our Markets.
            </h2>
            <p className={`${raleway.className} mt-6 text-base text-slate-600 font-medium leading-relaxed max-w-lg`}>
              Connecting cargo interests, charterers, owners and operators across major international dry bulk shipping routes.
            </p>
          </div>

          <div ref={marketsRef} className="flex flex-col gap-6 relative">
            {/* Subtle background line connecting the list */}
            <div className="absolute left-[11px] top-4 bottom-4 w-px bg-slate-200" />
            
            {MARKETS.map((market, idx) => (
              <div key={idx} className="relative flex items-start gap-6 group cursor-default">
                {/* Custom Bullet */}
                <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white border-2 border-slate-300 transition-colors duration-300 group-hover:border-[#D4AF37] mt-1">
                  <div className="h-2 w-2 rounded-full bg-transparent transition-colors duration-300 group-hover:bg-[#D4AF37]" />
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-6 border-b border-slate-100 group-last:border-transparent transition-all duration-300 group-hover:translate-x-2">
                  <h3 className={`${raleway.className} text-xl font-bold text-[#03182E] tracking-wide mb-2 uppercase`}>
                    {market.region}
                  </h3>
                  <p className={`${raleway.className} text-sm text-slate-500 font-medium tracking-wider`}>
                    {market.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT COLUMN: CARGO REQUIREMENTS ================= */}
        <div className="flex flex-col w-full rounded-[40px] bg-[#03182E] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[100px] pointer-events-none" />
          
          <div className="mb-12 relative z-10">
            <p className={`${raleway.className} text-xs font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-4`}>
              COMMODITIES
            </p>
            <h2 className={`${raleway.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight uppercase`}>
              Cargo Requirements.
            </h2>
            <p className={`${raleway.className} mt-6 text-sm text-slate-300 font-medium leading-relaxed max-w-md`}>
              Hafship is authorized to handle, source, and circulate suitable dry bulk cargo requirements across a wide range of industrial commodities.
            </p>
          </div>

          {/* Commodities Grid */}
          <div ref={cargoRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
            {COMMODITIES.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-center px-4 py-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-[#D4AF37] hover:border-[#D4AF37] group cursor-default shadow-lg"
              >
                <span className={`${raleway.className} text-sm font-bold tracking-widest text-white transition-colors duration-300 group-hover:text-[#03182E] uppercase text-center`}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Box inside the dark container */}
          <div className="mt-14 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <div>
              <p className={`${raleway.className} text-sm font-bold text-white tracking-wide mb-1 uppercase`}>Have cargo ready?</p>
              <p className={`${raleway.className} text-xs text-slate-400`}>Circulate your requirements securely.</p>
            </div>
            <a
              href="#submit-cargo"
              className={`${raleway.className} shrink-0 rounded bg-[#D4AF37] px-6 py-3 text-xs font-bold tracking-widest text-[#03182E] transition-all duration-300 hover:bg-white uppercase text-center`}
            >
              SUBMIT CARGO
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}