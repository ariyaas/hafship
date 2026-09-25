"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, merriweather, lora } from "@/app/fonts";

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
      // Hardware-accelerated Markets List stagger animation
      gsap.fromTo(
        markets.children,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: markets,
            start: "top 85%",
          },
        }
      );

      // Hardware-accelerated Commodities grid stagger animation
      gsap.fromTo(
        cargo.children,
        { scale: 0.9, opacity: 0, y: 15 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "back.out(1.4)",
          force3D: true,
          scrollTrigger: {
            trigger: cargo,
            start: "top 90%",
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
      className="relative z-20 w-full bg-white py-24 lg:py-36 px-4 sm:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* ================= LEFT COLUMN: OUR MARKETS ================= */}
        <div className="flex flex-col w-full">
          <div className="mb-12">
            <p className={`${raleway.className} text-xs font-bold tracking-[0.25em] text-brand-blue uppercase mb-4`}>
              GLOBAL REACH
            </p>
            <h2 className={`${merriweather.className} text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-brand-dark leading-tight uppercase`}>
              Our Markets.
            </h2>
            <p className={`${lora.className} mt-6 text-lg sm:text-xl text-brand-dark/70 font-medium leading-relaxed max-w-lg`}>
              Connecting cargo interests, charterers, owners and operators across major international dry bulk shipping routes.
            </p>
          </div>

          <div ref={marketsRef} className="flex flex-col gap-8 relative">
            {/* Subtle background line connecting the list */}
            <div className="absolute left-[11px] top-4 bottom-4 w-px bg-brand-gray" />
            
            {MARKETS.map((market, idx) => (
              <div key={idx} className="relative flex items-start gap-6 group cursor-default will-change-transform">
                {/* Custom Bullet */}
                <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white border-2 border-brand-gray transition-colors duration-300 group-hover:border-brand-blue mt-1">
                  <div className="h-2 w-2 rounded-full bg-transparent transition-colors duration-300 group-hover:bg-brand-blue" />
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-8 border-b border-brand-gray/50 group-last:border-transparent transition-all duration-300 group-hover:translate-x-2">
                  <h3 className={`${raleway.className} text-xl sm:text-2xl font-bold text-brand-dark tracking-wide mb-2 uppercase`}>
                    {market.region}
                  </h3>
                  <p className={`${lora.className} text-base sm:text-lg text-brand-dark/60 font-medium tracking-wider`}>
                    {market.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT COLUMN: CARGO REQUIREMENTS ================= */}
        <div className="flex flex-col w-full rounded-[40px] bg-brand-dark p-8 sm:p-12 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-brand-gray/10 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-blue/10 blur-[100px] pointer-events-none" />
          
          <div className="mb-12 relative z-10">
            <p className={`${raleway.className} text-xs font-bold tracking-[0.25em] text-brand-yellow uppercase mb-4`}>
              COMMODITIES
            </p>
            <h2 className={`${merriweather.className} text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-brand-gray leading-tight uppercase`}>
              Cargo Requirements.
            </h2>
            <p className={`${lora.className} mt-6 text-base sm:text-lg text-brand-gray/80 font-medium leading-relaxed max-w-md`}>
              Hafship is authorized to handle, source, and circulate suitable dry bulk cargo requirements across a wide range of industrial commodities.
            </p>
          </div>

          {/* Commodities Grid */}
          <div ref={cargoRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
            {COMMODITIES.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-center px-4 py-6 rounded-xl border border-brand-gray/20 bg-brand-gray/5 backdrop-blur-sm transition-all duration-300 hover:bg-brand-gray hover:border-brand-gray group cursor-default shadow-lg will-change-transform"
              >
                <span className={`${raleway.className} text-sm sm:text-base font-bold tracking-widest text-brand-gray transition-colors duration-300 group-hover:text-brand-dark uppercase text-center`}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Box inside the dark container */}
          <div className="mt-16 relative z-10 flex flex-col xl:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-brand-gray/5 border border-brand-gray/20 backdrop-blur-md transition-all duration-300 hover:bg-brand-gray/10 hover:border-brand-gray/40">
            <div>
              <p className={`${raleway.className} text-base sm:text-lg font-bold text-brand-gray tracking-wide mb-2 uppercase`}>Have cargo ready?</p>
              <p className={`${lora.className} text-sm sm:text-base text-brand-gray/70`}>Circulate your requirements securely.</p>
            </div>
            <a
              href="#submit-cargo"
              className={`${raleway.className} shrink-0 rounded bg-brand-yellow px-8 py-4 text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-dark transition-all duration-300 hover:bg-brand-gray uppercase text-center`}
            >
              SUBMIT CARGO
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}