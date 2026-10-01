"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, merriweather, lora, playfair } from "@/app/fonts";

gsap.registerPlugin(ScrollTrigger);

const MARKETS = [
  {
    region: "India & Subcontinent",
    routes: "WCI | ECI | Bangladesh | Sri Lanka",
    desc: "Supporting regional and international dry bulk movements across the Indian Subcontinent.",
  },
  {
    region: "Middle East",
    routes: "Arabian Gulf | Red Sea | Middle East–Asia",
    desc: "Connecting regional cargo flows with suitable vessel positions and international tonnage.",
  },
  {
    region: "Asia-Pacific",
    routes: "Southeast Asia | Indonesia | Philippines | China | Japan | South Korea",
    desc: "Covering key intra-Asia and long-haul dry bulk trading routes.",
  },
  {
    region: "Atlantic",
    routes: "Europe | Mediterranean | Black Sea | US Gulf",
    desc: "Connecting cargo interests and tonnage across major Atlantic markets.",
  },
  {
    region: "South America",
    routes: "Brazil | Argentina | East Coast South America",
    desc: "Supporting major dry bulk export trades and international vessel requirements.",
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
      className="relative z-20 w-full bg-white py-24 lg:py-32 px-4 sm:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* ================= LEFT COLUMN: OUR MARKETS ================= */}
        <div className="flex flex-col w-full">
          <div className="mb-10 lg:mb-12">
            <h2 className={`${playfair.className} text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-brand-blue leading-tight uppercase`}>
              Our Markets.
            </h2>
            <p className={`${lora.className} text-justify mt-6 text-lg sm:text-xl text-brand-dark font-medium leading-relaxed max-w-xl`}>
              Connecting Shipowners, Operators, Charterers, Traders and Cargo Interests across key international dry bulk markets.
            </p>
            <p className={`${lora.className} text-justify mt-4 text-base sm:text-lg text-brand-dark font-medium leading-relaxed max-w-xl`}>
              HAFSHIP covers major trading regions, supporting cargo & tonnage matching, voyage and time chartering, freight negotiations and fixture opportunities across global routes.
            </p>
          </div>

          {/* Premium Timeline Section */}
          <div ref={marketsRef} className="flex flex-col relative w-full">
            {/* The continuous vertical line */}
            <div className="absolute left-[15px] top-8 bottom-8 w-[2px] bg-brand-gray/50" />
            
            {MARKETS.map((market, idx) => (
              <div key={idx} className="relative flex items-stretch group cursor-default will-change-transform">
                
                {/* Custom Timeline Bullet/Node */}
                <div className="relative w-8 shrink-0 flex justify-center pt-6">
                  <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white border-[2.5px] border-brand-gray/80 transition-colors duration-300 group-hover:border-brand-blue">
                    <div className="h-2 w-2 rounded-full bg-transparent transition-colors duration-300 group-hover:bg-brand-blue" />
                  </div>
                </div>
                
                {/* Full Section Hover Content */}
                <div className="flex-1 ml-2 sm:ml-4 rounded-[20px] p-5 sm:p-6 border-b border-brand-gray/40 transition-all duration-300 group-hover:bg-brand-blue group-hover:border-transparent group-hover:shadow-[0_15px_40px_rgba(14,96,156,0.25)] group-hover:-translate-y-1">
                  <h3 className={`${playfair.className} text-xl sm:text-2xl font-bold text-brand-dark tracking-wide mb-1 uppercase transition-colors duration-300 group-hover:text-white`}>
                    {market.region}
                  </h3>
                  <p className={`${raleway.className} text-xs sm:text-sm font-bold text-brand-blue tracking-[0.15em] uppercase mb-3 transition-colors duration-300 group-hover:text-brand-yellow`}>
                    {market.routes}
                  </p>
                  <p className={`${lora.className} text-base sm:text-lg text-slate-600 font-medium leading-relaxed transition-colors duration-300 group-hover:text-white/90`}>
                    {market.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom Tagline */}
            <div className="mt-8 ml-8 sm:ml-12">
              <p className={`${raleway.className} text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-dark uppercase text-left`}>
                Global Markets <span className="text-brand-blue mx-2">•</span> Local Knowledge <span className="text-brand-blue mx-2">•</span> Commercial Connections
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: CARGO REQUIREMENTS ================= */}
        <div className="flex flex-col w-full rounded-[40px] bg-brand-dark p-8 sm:p-12 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-brand-gray/10 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-blue/10 blur-[100px] pointer-events-none" />
          
          <div className="mb-12 relative z-10">
            <p className={`${raleway.className} text-xs font-bold tracking-[0.25em] text-brand-gray uppercase mb-4`}>
              COMMODITIES
            </p>
            <h2 className={`${playfair.className} text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-brand-blue leading-tight uppercase`}>
              Cargo Requirements.
            </h2>
            
          </div>

          {/* Commodities Grid */}
          <div ref={cargoRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
            {COMMODITIES.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-center px-4 py-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-brand-blue hover:border-brand-blue group cursor-default shadow-lg will-change-transform"
              >
                <span className={`${playfair.className} text-sm sm:text-base font-bold tracking-widest text-white transition-colors duration-300 uppercase text-center`}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Box inside the dark container */}
          <div className="mt-16 relative z-10 flex flex-col xl:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20">
            <div>
              <p className={`${raleway.className} text-base sm:text-lg font-bold text-white tracking-wide mb-2 uppercase`}>Have cargo ready?</p>
              <p className={`${lora.className} text-sm sm:text-base text-slate-300`}>Circulate your requirements securely.</p>
            </div>
            <a
              href="/submit-cargo"
              className={`${raleway.className} shrink-0 rounded bg-brand-yellow px-8 py-4 text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-dark transition-all duration-300 hover:bg-white uppercase text-center`}
            >
              SUBMIT CARGO
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}