"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, lora, playfair } from "@/app/fonts";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const MARKETS_DATA = [
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

export default function MarketsPage() {
  const heroRef = useRef(null);
  const heroImageRef = useRef(null); 
  const introRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const ctaRef = useRef(null); 

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Text Reveal Animation
      gsap.fromTo(
        ".hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out", delay: 0.2 }
      );

      // 2. Hero Image Parallax Animation
      if (heroImageRef.current && heroRef.current) {
        gsap.to(heroImageRef.current, {
          y: "15%", 
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 3. Intro Text Reveal & Line Animation
      if (introRef.current) {
        gsap.fromTo(
          ".intro-text-anim",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: introRef.current,
              start: "top 80%",
            },
          }
        );

        // Vertical Line Animation for Split Layout
        gsap.fromTo(
          ".intro-line-anim",
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: introRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // 4. Grid Section Header Fade
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // 5. Market Cards Stagger Reveal
      gsap.fromTo(
        ".market-card-anim",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // 6. Final CTA Reveal
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 85%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full flex-grow bg-white">
      
      {/* ========================================================
          HERO SECTION (Image BG with 3% White Frame)
      ======================================================== */}
      <div className="w-full bg-white p-[3%] pt-[100px] sm:pt-[120px] lg:pt-[140px]">
        <section ref={heroRef} className="relative w-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden min-h-[50vh] lg:min-h-[70vh] flex flex-col items-center justify-center pt-16 pb-20 px-4 sm:px-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          
          {/* Parallax Background Image */}
          <div className="absolute -top-[10%] -left-[5%] h-[120%] w-[110%] will-change-transform" ref={heroImageRef}>
            <Image 
              src="/images/ch2.jpeg" // You can change this to your preferred Markets image
              alt="Global Dry Bulk Markets"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Dark Overlay for Text Visibility */}
          <div className="absolute inset-0 bg-brand-dark/50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(3,24,46,0.3)_0%,rgba(3,24,46,0.8)_100%)]" />
          
          {/* Hero Content */}
          <div className="mx-auto max-w-[1400px] relative z-10 flex flex-col items-center text-center mt-10">
            <p className="hero-text text-xs sm:text-sm font-bold tracking-[0.3em] text-brand-yellow uppercase mb-6 drop-shadow-md">
              Global Reach
            </p>
            <h1 className={`hero-text ${playfair.className} text-4xl sm:text-6xl lg:text-[80px] leading-tight font-extrabold tracking-tight text-white uppercase mb-8 drop-shadow-xl`}>
              Our <span className="text-brand-blue">Markets</span>
            </h1>
            <p className={`hero-text ${lora.className} max-w-4xl text-lg sm:text-xl text-slate-100 font-medium leading-relaxed drop-shadow-md`}>
              Connecting Shipowners, Operators, Charterers, Traders and Cargo Interests across key international dry bulk markets.
            </p>
          </div>
        </section>
      </div>

      {/* ========================================================
          PREMIUM INTRO TEXT SECTION (Split Layout & Animated)
      ======================================================== */}
      <section className="relative w-full bg-gradient-to-b from-brand-gray/40 to-white py-20 lg:py-32 px-4 sm:px-8 overflow-hidden">
        <div ref={introRef} className="mx-auto max-w-[1300px] relative flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Animated Center Vertical Divider (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200/50">
             <div className="intro-line-anim w-full bg-brand-blue origin-top h-full" />
          </div>

          {/* Left Column: Bold Statement (Paragraph 1) */}
          <div className="lg:w-1/2 flex flex-col justify-center lg:pr-12">
            <h3 className="intro-text-anim text-2xl sm:text-3xl lg:text-[36px] text-brand-dark font-extrabold leading-snug tracking-tight">
              <span className={`${playfair.className}`}>
                HAFSHIP covers major trading regions, supporting cargo & tonnage matching, voyage and time chartering, freight negotiations and fixture opportunities.
              </span>
            </h3>
          </div>
          
          {/* Right Column: Detailed Execution (Paragraph 2) */}
          <div className="lg:w-1/2 flex flex-col justify-center lg:pl-12 lg:pt-4">
            <div className="intro-text-anim relative pl-6 sm:pl-8 border-l-[3px] border-brand-yellow">
              <p className={`${lora.className} text-lg sm:text-xl text-slate-600 font-medium leading-relaxed`}>
                We connect owners, operators, charterers, traders and cargo interests across established and emerging dry bulk markets. Our market network enables us to identify vessel and cargo opportunities across international trading routes while maintaining a practical understanding of tonnage positioning, cargo requirements, loading/discharging capabilities and market conditions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          MARKETS GRID SECTION (Premium Dark Container)
      ======================================================== */}
      <section
        ref={sectionRef}
        id="markets-grid"
        className="relative z-20 w-full bg-white pb-16 lg:pb-24 px-3 sm:px-6 lg:px-8"
      >
        <div className="relative mx-auto max-w-[1600px] rounded-[36px] sm:rounded-[48px] bg-brand-dark px-6 sm:px-10 lg:px-14 pt-16 pb-16 lg:pt-20 lg:pb-24 shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden">
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none" />

          {/* HEADER */}
          <div ref={titleRef} className="relative z-20 mb-12 border-b border-brand-gray/10 pb-6 text-center lg:text-left">
            <p className={`${raleway.className} text-xs font-bold tracking-[0.25em] text-brand-gray uppercase mb-3`}>
              Global Routes
            </p>

            <h2
              className={`${playfair.className} text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight text-white leading-[1.15] uppercase`}
            >
              Trading
              <br className="hidden lg:block" />
              <span className="text-brand-blue lg:ml-2">Regions</span>
            </h2>
          </div>

          {/* MARKETS GRID */}
          <div className="relative z-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {MARKETS_DATA.map((market) => (
                <div
                  key={market.id}
                  className="market-card-anim group relative flex flex-col justify-between rounded-[24px] border-2 border-brand-gray/10 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand-blue hover:shadow-[0_20px_50px_rgba(14,96,156,0.2)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`${raleway.className} text-xs font-bold tracking-widest text-brand-gray bg-brand-dark/5 px-3 py-1 rounded-full group-hover:text-brand-blue group-hover:bg-brand-blue/10 transition-colors`}>
                        {market.id}
                      </span>
                    </div>

                    <h3 className={`${playfair.className} text-2xl font-bold tracking-tight text-brand-dark group-hover:text-brand-blue transition-colors uppercase mb-3`}>
                      {market.region}
                    </h3>

                    <p className={`${raleway.className} text-xs font-bold text-brand-blue tracking-[0.15em] uppercase mb-4 group-hover:text-brand-yellow transition-colors`}>
                      {market.routes}
                    </p>

                    <p className={`${lora.className} text-sm sm:text-base leading-relaxed text-slate-600`}>
                      {market.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM TAGLINE */}
          <div className="relative z-20 mt-16 text-center border-t border-brand-gray/10 pt-12">
            <p className={`${raleway.className} text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-yellow uppercase mb-4`}>
              Global Markets <span className="text-brand-blue mx-3">•</span> Local Knowledge <span className="text-brand-blue mx-3">•</span> Commercial Connections
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================
          CALL TO ACTION (Contact Us)
      ======================================================== */}
      <section className="w-full bg-brand-blue py-16 lg:py-24 px-4 sm:px-8 border-t border-slate-200">
        <div ref={ctaRef} className="mx-auto max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
          
          <div className="flex-1">
            <h2 className={`${playfair.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark uppercase tracking-tight`}>
              Looking to cooperate?
            </h2>
            <p className={`${lora.className} mt-4 text-brand-dark/80 font-medium text-lg sm:text-xl max-w-2xl`}>
              We welcome suitable cargo and tonnage circulation to add value to your fixtures.
            </p>
          </div>
          
          <div className="shrink-0">
             <a
              href="mailto:chartering@hafship.com"
              className={`${raleway.className} inline-flex items-center justify-center rounded-full bg-brand-dark px-10 py-5 text-sm sm:text-base font-bold tracking-widest text-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:text-brand-dark uppercase`}
            >
              CONTACT CHARTERING DESK
            </a>
          </div>

        </div>
      </section>
      
    </main>
  );
}