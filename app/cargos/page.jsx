"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, lora, playfair, merriweather } from "@/app/fonts";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

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

export default function CargosPage() {
  const heroRef = useRef(null);
  const heroImageRef = useRef(null); 
  const introRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cargoRef = useRef(null);
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

      // 5. Commodities Grid Stagger Reveal
      if (cargoRef.current) {
        gsap.fromTo(
          cargoRef.current.children,
          { scale: 0.9, opacity: 0, y: 20 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }

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
              src="/images/ch3.jpeg" // Add your Cargo-specific hero image here
              alt="Dry Bulk Cargo Operations"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Dark Overlay for Text Visibility */}
          <div className="absolute inset-0 bg-brand-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
          
          {/* Hero Content */}
          <div className="mx-auto max-w-[1400px] relative z-10 flex flex-col items-center text-center mt-10">
            <p className="hero-text text-xs sm:text-sm font-bold tracking-[0.3em] text-brand-yellow uppercase mb-6 drop-shadow-md">
              Operations
            </p>
            <h1 className={`hero-text ${playfair.className} text-4xl sm:text-6xl lg:text-[80px] leading-tight font-extrabold tracking-tight text-white uppercase mb-8 drop-shadow-xl`}>
              Cargo & <span className="text-brand-blue">Tonnage</span>
            </h1>
            <p className={`hero-text ${lora.className} max-w-4xl text-lg sm:text-xl text-slate-100 font-medium leading-relaxed drop-shadow-md`}>
              HAFSHIP provides professional dry bulk shipbroking and chartering services, connecting shipowners, operators, charterers, traders and cargo interests with the right commercial opportunities and tonnage.
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
                We work across a broad range of dry bulk commodities and trading routes, connecting suitable cargo requirements with competitive and workable tonnage solutions.
              </span>
            </h3>
          </div>
          
          {/* Right Column: Detailed Execution (Paragraphs 2 & 3) */}
          <div className="lg:w-1/2 flex flex-col gap-10 lg:pl-12 lg:pt-4">
            
            <div className="intro-text-anim relative pl-6 sm:pl-8 border-l-[3px] border-brand-yellow">
              <p className={`${lora.className} text-lg sm:text-xl text-slate-600 font-medium leading-relaxed`}>
                Our approach is centred on finding workable, commercially viable employment and cargo solutions. We evaluate the key commercial elements of each requirement, including vessel position, size, trading area, cargo, laycan, loading and discharge ports, freight levels, charter terms and operational requirements.
              </p>
            </div>

            <div className="intro-text-anim relative pl-6 sm:pl-8 border-l-[3px] border-brand-blue">
              <p className={`${lora.className} text-lg sm:text-xl text-slate-600 font-medium leading-relaxed`}>
                Confidentiality is fundamental to our brokerage practice. We respect the commercial sensitivity of cargo requirements, vessel positions, freight ideas, charter terms, negotiations and counterparties. Information is handled with discretion.
              </p>
            </div>
            
          </div>

        </div>
      </section>

      {/* ========================================================
          CARGOS & COMMODITIES GRID SECTION (Premium Dark Container)
      ======================================================== */}
      <section
        ref={sectionRef}
        id="cargos-grid"
        className="relative z-20 w-full bg-white pb-16 lg:pb-24 px-3 sm:px-6 lg:px-8"
      >
        <div className="relative mx-auto max-w-[1600px] rounded-[36px] sm:rounded-[48px] bg-brand-dark px-6 sm:px-10 lg:px-14 pt-16 pb-16 lg:pt-20 lg:pb-24 shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden">
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none" />

          {/* HEADER */}
          <div ref={titleRef} className="relative z-20 mb-12 border-b border-brand-gray/10 pb-6 text-center lg:text-left">
            <p className={`${raleway.className} text-xs font-bold tracking-[0.25em] text-brand-gray uppercase mb-3`}>
              Dry Bulk Commodities
            </p>

            <h2
              className={`${playfair.className} text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight text-white leading-[1.15] uppercase`}
            >
              Cargo
              <br className="hidden lg:block" />
              <span className="text-brand-blue lg:ml-2">Requirements</span>
            </h2>
          </div>

          {/* COMMODITIES GRID */}
          <div className="relative z-20 w-full flex flex-col items-center lg:items-start">
            <div ref={cargoRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
              {COMMODITIES.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-center px-4 py-8 rounded-2xl border-2 border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-brand-blue hover:border-brand-blue group cursor-default shadow-lg"
                >
                  <span className={`${playfair.className} text-base sm:text-lg font-bold tracking-widest text-white transition-colors duration-300 uppercase text-center`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Box inside the dark container */}
            <div className="mt-16 w-full max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10">
              <div className="text-center sm:text-left">
                <p className={`${raleway.className} text-lg sm:text-xl font-bold text-white tracking-wide mb-2 uppercase`}>Have cargo ready?</p>
                <p className={`${lora.className} text-sm sm:text-base text-slate-300`}>Circulate your requirements securely.</p>
              </div>
              <a
                href="/submit-cargo"
                className={`${raleway.className} shrink-0 rounded-full bg-brand-blue px-10 py-5 text-xs sm:text-sm font-bold tracking-[0.2em] text-white transition-all duration-300 hover:bg-white hover:text-brand-dark uppercase text-center shadow-lg hover:shadow-xl`}
              >
                SUBMIT CARGO
              </a>
            </div>
          </div>

          {/* BOTTOM TAGLINE */}
          <div className="relative z-20 mt-20 text-center border-t border-brand-gray/10 pt-12">
            <p className={`${raleway.className} text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-yellow uppercase mb-4`}>
              Market Knowledge <span className="text-brand-blue mx-3">•</span> Commercial Thinking <span className="text-brand-blue mx-3">•</span> Trusted Connections
            </p>
            <p className={`${lora.className} text-lg sm:text-xl text-slate-300 font-medium`}>
              HAFSHIP combines market access, commercial awareness and relationship-driven broking to connect the right cargo with the right tonnage.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================
          CALL TO ACTION (Final Section Added)
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