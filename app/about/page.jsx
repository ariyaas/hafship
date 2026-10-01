"use client";

import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, merriweather, lora, playfair } from "@/app/fonts";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const CORE_SERVICES = [
  "Voyage Chartering",
  "Trip Time Chartering",
  "Period Employment",
  "Cargo & Tonnage Matching",
  "Tonnage Positioning",
  "Freight & Charter Rate Negotiations",
  "Fixture Coordination",
  "Post-Fixture Commercial Support",
];

const MARKETS = [
  {
    id: "01",
    region: "India & Subcontinent",
    routes: "WCI | ECI | Bangladesh | Sri Lanka",
    desc: "Supporting regional and international dry bulk movements across the Indian Subcontinent.",
  },
  {
    id: "02",
    region: "Middle East",
    routes: "Arabian Gulf | Red Sea | Middle East–Asia",
    desc: "Connecting regional cargo flows with suitable vessel positions and international tonnage.",
  },
  {
    id: "03",
    region: "Asia-Pacific",
    routes: "Southeast Asia | Indonesia | Philippines | China | Japan | South Korea",
    desc: "Covering key intra-Asia and long-haul dry bulk trading routes.",
  },
  {
    id: "04",
    region: "Atlantic",
    routes: "Europe | Mediterranean | Black Sea | US Gulf",
    desc: "Connecting cargo interests and tonnage across major Atlantic markets.",
  },
  {
    id: "05",
    region: "South America",
    routes: "Brazil | Argentina | East Coast South America",
    desc: "Supporting major dry bulk export trades and international vessel requirements.",
  },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const brokerageRef = useRef(null);
  const marketsRef = useRef(null);
  const [activeMarketIndex, setActiveMarketIndex] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Animation
      gsap.fromTo(
        ".hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out" }
      );

      // 2. Brokerage Section Reveal
      gsap.fromTo(
        ".brokerage-fade",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: brokerageRef.current,
            start: "top 80%",
          },
        }
      );

      // 3. Markets Reveal
      gsap.fromTo(
        ".markets-container",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: marketsRef.current,
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
            About Us
          </p>
          <h1 className={`hero-text ${playfair.className} text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase mb-8`}>
            Chartering &
            <br />
            <span className="text-brand-blue">Brokerage</span>
          </h1>
          <p className={`hero-text ${lora.className} mx-auto max-w-3xl text-lg sm:text-xl text-slate-300 font-medium leading-relaxed`}>
            HAFSHIP is a dedicated dry bulk shipbroking house connecting Shipowners, Vessel Operators, Charterers, Traders and Cargo Interests across international dry bulk markets.
          </p>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: CHARTERING & BROKERAGE OVERVIEW & SERVICES
      ======================================================== */}
      <section ref={brokerageRef} className="w-full py-20 lg:py-32 px-4 sm:px-8 bg-brand-gray">
        <div className="mx-auto max-w-[1400px]">
          <div className="brokerage-fade text-center max-w-4xl mx-auto mb-16">
            <h2 className={`${playfair.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark uppercase`}>
              Commercial Execution & Support
            </h2>
            <p className={`${lora.className} mt-6 text-brand-dark/80 text-lg sm:text-xl leading-relaxed`}>
              We provide commercially focused chartering solutions, facilitating the efficient matching of cargo requirements with suitable tonnage while supporting negotiations and fixture execution from initial enquiry through post-fixture follow-up.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Core Services List Box */}
            <div className="brokerage-fade lg:col-span-7 bg-brand-dark p-8 sm:p-12 rounded-[32px] text-white shadow-xl">
              <h3 className={`${playfair.className} text-xl font-bold text-brand-yellow uppercase tracking-widest mb-8 border-b border-white/10 pb-4`}>
                Our Core Services
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CORE_SERVICES.map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="h-2 w-2 bg-brand-yellow rounded-full shrink-0" />
                    <span className={`${lora.className} text-sm sm:text-base font-semibold tracking-wide uppercase`}>
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Description note */}
            <div className="brokerage-fade lg:col-span-5 bg-white p-8 sm:p-10 rounded-[32px] border border-slate-200 shadow-sm">
              <h3 className={`${playfair.className} text-xl font-bold text-brand-dark uppercase mb-4`}>
                Counterparty Commitment
              </h3>
              <p className={`${lora.className} text-brand-dark/70 leading-relaxed text-lg`}>
                We work closely with principals and counterparties throughout the negotiation process, helping ensure that commercial terms are clearly communicated and efficiently progressed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: GLOBAL REACH & OUR MARKETS (Interactive Horizontal Accordion)
      ======================================================== */}
      <section ref={marketsRef} className="w-full py-20 lg:py-32 px-4 sm:px-8 bg-white border-t border-slate-100 overflow-hidden">
        <div className="mx-auto max-w-[1500px]">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <p className={`${raleway.className} text-xs font-bold tracking-[0.25em] text-brand-yellow uppercase mb-4`}>
              Global Reach
            </p>
            <h2 className={`${playfair.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark uppercase mb-6`}>
              Our Markets
            </h2>
            <p className={`${lora.className} text-brand-dark/70 text-lg leading-relaxed`}>
              Connecting Shipowners, Operators, Charterers, Traders and Cargo Interests across key international dry bulk markets. HAFSHIP covers major trading regions, supporting cargo & tonnage matching, voyage and time chartering, freight negotiations and fixture opportunities across global routes.
            </p>
          </div>

          {/* Interactive Horizontal Expanding Accordion Container */}
          <div className="markets-container flex flex-col lg:flex-row items-stretch gap-4 w-full h-auto lg:h-[500px]">
            {MARKETS.map((market, index) => {
              const isActive = activeMarketIndex === index;
              return (
                <div
                  key={market.id}
                  onMouseEnter={() => setActiveMarketIndex(index)}
                  onClick={() => setActiveMarketIndex(index)}
                  className={`relative rounded-[28px] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden flex flex-col justify-between border ${
                    isActive
                      ? "lg:flex-[2.8] bg-brand-dark text-white border-brand-blue shadow-[0_20px_50px_rgba(14,96,156,0.3)] p-8 lg:p-12"
                      : "lg:flex-[0.8] bg-brand-gray text-brand-dark border-slate-200 hover:border-brand-yellow p-6 lg:py-12 lg:px-6"
                  }`}
                >
                  {/* Top Number / Badge */}
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`${raleway.className} text-sm font-bold tracking-widest px-3.5 py-1.5 rounded-full ${
                        isActive
                          ? "bg-brand-blue/30 text-brand-yellow border border-brand-blue/40"
                          : "bg-white text-brand-dark/70 border border-slate-200"
                      }`}
                    >
                      {market.id}
                    </span>

                    {isActive && (
                      <span className={`${raleway.className} text-xs font-bold tracking-[0.2em] text-brand-blue uppercase hidden sm:inline-block`}>
                        Active Region
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="my-auto py-6">
                    {isActive ? (
                      <div className="space-y-4 animate-fadeIn">
                        <h3 className={`${playfair.className} text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-wide`}>
                          {market.region}
                        </h3>
                        <p className={`${raleway.className} text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-yellow uppercase`}>
                          {market.routes}
                        </p>
                        <p className={`${lora.className} text-slate-300 text-base sm:text-lg leading-relaxed pt-2 max-w-xl`}>
                          {market.desc}
                        </p>
                      </div>
                    ) : (
                      <div className="lg:[writing-mode:vertical-lr] lg:rotate-180 flex lg:items-center gap-4">
                        <h3 className={`${playfair.className} text-lg sm:text-xl font-bold uppercase text-brand-dark tracking-wide whitespace-nowrap`}>
                          {market.region}
                        </h3>
                      </div>
                    )}
                  </div>

                  {/* Bottom indicator line */}
                  <div className={`w-full h-1.5 rounded-full transition-all duration-500 ${isActive ? "bg-brand-yellow" : "bg-transparent"}`} />
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className={`${raleway.className} text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-dark uppercase`}>
              Global Markets <span className="text-brand-yellow mx-2">•</span> Local Knowledge <span className="text-brand-yellow mx-2">•</span> Commercial Connections
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: CALL TO ACTION
      ======================================================== */}
      <section className="w-full bg-brand-yellow py-20 px-4 sm:px-8 border-t border-brand-dark/10">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className={`${playfair.className} text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark uppercase`}>
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