"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, merriweather, lora } from "@/app/fonts";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const CHARTERING_SERVICES = [
  {
    title: "Voyage Chartering",
    desc: "Matching suitable vessels with cargo requirements on international dry bulk routes.",
  },
  {
    title: "Trip Time Charter",
    desc: "Arranging short-term vessel employment based on owners' and charterers' requirements.",
  },
  {
    title: "Period Employment",
    desc: "Connecting suitable tonnage with charterers seeking multi-month employment.",
  },
  {
    title: "Tonnage Sourcing",
    desc: "Sourcing suitable Handysize through Panamax tonnage from owners and operators.",
  },
  {
    title: "Cargo Broking",
    desc: "Sourcing and circulating dry bulk cargo requirements securely and efficiently.",
  },
  {
    title: "Co-Brokerage",
    desc: "Working with established shipbrokers and commercial desks to jointly develop fixtures.",
  }
];

const GLOBAL_MARKETS = [
  {
    region: "India / Subcontinent",
    routes: "WCI | ECI | Bangladesh | Sri Lanka"
  },
  {
    region: "Middle East",
    routes: "Arabian Gulf | Red Sea | Middle East–Asia"
  },
  {
    region: "Asia-Pacific",
    routes: "Southeast Asia | Indonesia | Philippines | China | Japan | Korea"
  },
  {
    region: "Atlantic",
    routes: "Europe | Mediterranean | Black Sea | US Gulf | East Coast South America"
  },
  {
    region: "South America",
    routes: "Brazil | Argentina | Other Atlantic markets"
  }
];

const CARGO_COMMODITIES = [
  "Coal", "Petcoke", "Limestone", "Gypsum", "Salt", "Grain", "Fertilizers", "Ores", "Minerals"
];

export default function CharteringPage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const marketsRef = useRef(null);
  const cargoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.fromTo(
        ".fade-up",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" }
      );

      // Services Grid
      gsap.fromTo(
        ".card-up",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 80%" }
        }
      );

      // Markets List
      gsap.fromTo(
        ".market-up",
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: marketsRef.current, start: "top 80%" }
        }
      );

      // Cargo Pills
      gsap.fromTo(
        ".cargo-pill",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, stagger: 0.05, duration: 0.6, ease: "back.out(1.5)",
          scrollTrigger: { trigger: cargoRef.current, start: "top 85%" }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full flex-grow bg-white">
      {/* ================= HERO ================= */}
      <section ref={heroRef} className="relative w-full bg-brand-dark pt-48 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/chartering-hero.jpg" 
            alt="Dry Bulk Vessel" 
            fill 
            sizes="100vw"
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/80 to-brand-dark" />
        </div>
        
        <div className="mx-auto max-w-[1400px] relative z-10 text-center">
          <p className={`fade-up ${raleway.className} text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase mb-6`}>
            Connecting Shipowners, Charterers & Cargo Interests
          </p>
          
          <h1 className={`fade-up ${merriweather.className} text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase mb-8`}>
            Dry Bulk <span className="text-brand-yellow">Chartering</span>
          </h1>
          
          <p className={`fade-up ${lora.className} mx-auto max-w-4xl text-lg sm:text-xl text-slate-300 font-medium leading-relaxed`}>
            "We know dry bulk. We know the market. We have cargo. We have tonnage. We can connect the right parties and work toward a fixture."
          </p>
        </div>
      </section>

      {/* ================= VESSEL SEGMENTS ================= */}
      <section className="w-full bg-brand-yellow py-6 px-4 border-y border-brand-dark/10">
        <div className="mx-auto max-w-[1400px] flex flex-wrap items-center justify-center gap-4 md:gap-10 text-brand-dark">
          <span className={`${raleway.className} text-sm md:text-base font-bold uppercase tracking-widest`}>Handysize</span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-dark/40 hidden sm:block" />
          <span className={`${raleway.className} text-sm md:text-base font-bold uppercase tracking-widest`}>Handymax</span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-dark/40 hidden sm:block" />
          <span className={`${raleway.className} text-sm md:text-base font-bold uppercase tracking-widest`}>Supramax</span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-dark/40 hidden sm:block" />
          <span className={`${raleway.className} text-sm md:text-base font-bold uppercase tracking-widest`}>Ultramax</span>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-dark/40 hidden sm:block" />
          <span className={`${raleway.className} text-sm md:text-base font-bold uppercase tracking-widest`}>Panamax / Kamsarmax</span>
        </div>
      </section>

      {/* ================= WHAT WE DO (SERVICES) ================= */}
      <section ref={contentRef} className="w-full py-20 lg:py-32 px-4 sm:px-8 bg-brand-gray/20">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className={`${merriweather.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark uppercase`}>
              What We Do
            </h2>
            <div className="mt-6 mx-auto h-[2px] w-24 bg-brand-yellow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CHARTERING_SERVICES.map((service, idx) => (
              <div 
                key={idx} 
                className="card-up bg-white p-10 rounded-[24px] border border-brand-gray shadow-sm hover:border-brand-yellow transition-all duration-300 hover:shadow-xl group flex flex-col justify-start"
              >
                <div className="h-1 w-12 bg-brand-yellow mb-8 transition-all duration-300 group-hover:w-24 rounded-full" />
                <h3 className={`${raleway.className} text-xl font-bold text-brand-dark uppercase mb-4 tracking-wide`}>
                  {service.title}
                </h3>
                <p className={`${lora.className} text-base text-brand-dark/70 leading-relaxed font-medium`}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR MARKETS ================= */}
      <section ref={marketsRef} className="w-full py-20 lg:py-32 px-4 sm:px-8 bg-brand-dark text-white">
        <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-4">
            <p className={`${raleway.className} text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase mb-4`}>
              Global Reach
            </p>
            <h2 className={`${merriweather.className} text-4xl lg:text-5xl font-extrabold text-white uppercase mb-6 leading-tight`}>
              Our Markets
            </h2>
            <p className={`${lora.className} text-slate-300 text-lg leading-relaxed`}>
              Hafship connects shipowners, operators, charterers and cargo interests across major international dry bulk markets.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {GLOBAL_MARKETS.map((market, idx) => (
              <div key={idx} className="market-up border-l-2 border-brand-yellow/30 pl-6 py-2">
                <h4 className={`${raleway.className} text-lg font-bold text-brand-yellow uppercase mb-2`}>
                  {market.region}
                </h4>
                <p className={`${lora.className} text-slate-300 text-sm leading-relaxed`}>
                  {market.routes}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CARGO REQUIREMENTS ================= */}
      <section ref={cargoRef} className="w-full py-20 lg:py-32 px-4 sm:px-8 bg-white border-b border-brand-gray">
        <div className="mx-auto max-w-[1400px] text-center">
          <p className={`${raleway.className} text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase mb-4`}>
            Commodities
          </p>
          <h2 className={`${merriweather.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark uppercase mb-6`}>
            Cargo Requirements
          </h2>
          <p className={`${lora.className} mx-auto max-w-2xl text-brand-dark/70 text-lg mb-12`}>
            Hafship handles and circulates suitable dry bulk cargo requirements including, but not limited to:
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {CARGO_COMMODITIES.map((cargo, idx) => (
              <span 
                key={idx} 
                className="cargo-pill px-6 py-3 rounded-full border border-brand-dark/20 bg-brand-gray/30 text-brand-dark font-bold uppercase tracking-widest text-sm shadow-sm transition-all hover:bg-brand-dark hover:text-brand-yellow hover:border-brand-dark"
              >
                {cargo}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      {/* ================= BOTTOM ACTION / CO-BROKING ================= */}
      <section className="w-full bg-brand-gray/30 py-20 px-4 sm:px-8 text-center">
        <div className="mx-auto max-w-4xl flex flex-col items-center">
          <p className={`${raleway.className} text-xs font-bold tracking-[0.3em] text-brand-blue uppercase mb-4`}>
            Co-Broking
          </p>
          <h2 className={`${merriweather.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark uppercase mb-6`}>
            Looking to cooperate?
          </h2>
          <p className={`${lora.className} text-brand-dark/80 text-lg mb-10 max-w-2xl`}>
            Hafship works with established shipowners, operators, charterers and shipbrokers on a co-brokerage basis. We welcome suitable cargo and tonnage circulation where both parties can add value to the fixture.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <a
              href="/tonnage"
              className={`${raleway.className} rounded bg-brand-yellow px-10 py-4 text-xs font-bold tracking-widest text-brand-dark transition-all hover:bg-brand-dark hover:text-white hover:scale-105 uppercase`}
            >
              OPEN TONNAGE
            </a>
            <a
              href="/submit-cargo"
              className={`${raleway.className} rounded bg-brand-dark px-10 py-4 text-xs font-bold tracking-widest text-white transition-all hover:bg-brand-blue hover:text-white hover:scale-105 uppercase`}
            >
              SUBMIT CARGO
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}