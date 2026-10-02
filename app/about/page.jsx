"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, lora, playfair } from "@/app/fonts";

gsap.registerPlugin(ScrollTrigger);

// --- DATA ---
const vesselSizes = [
  "HANDYSIZE",
  "HANDYMAX",
  "SUPRAMAX",
  "ULTRAMAX",
  "PANAMAX",
  "CAPESIZE"
];

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

export default function AboutPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroImageRef = useRef(null); // Added for Parallax Image Background
  const marqueeRef = useRef(null);
  const storyContentRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const brokerageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Text Reveal Animation
      gsap.fromTo(
        ".hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out", delay: 0.2 }
      );

      // 2. Hero Image Parallax Animation (Premium Effect)
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

      // 3. Marquee horizontal slide-in
      if (marqueeRef.current) {
        gsap.fromTo(
          marqueeRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: marqueeRef.current,
              start: "top 90%",
            },
          }
        );
      }

      // 4. Story Content & Images Reveal
      if (storyContentRef.current) {
        gsap.fromTo(
          storyContentRef.current.children,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: storyContentRef.current,
              start: "top 80%",
            },
          }
        );
      }

      if (img1Ref.current && img2Ref.current) {
        gsap.fromTo(
          [img1Ref.current, img2Ref.current],
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.2,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img1Ref.current,
              start: "top 85%",
            },
          }
        );

        // Subtle Parallax for the images
        gsap.to(img1Ref.current, {
          y: -25,
          ease: "none",
          scrollTrigger: {
            trigger: img1Ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(img2Ref.current, {
          y: -45,
          ease: "none",
          scrollTrigger: {
            trigger: img1Ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // 5. Commercial Services Section Reveal
      if (brokerageRef.current) {
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
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="w-full flex-grow bg-white">
      
      {/* ========================================================
          SECTION 1: PREMIUM FRAMED HERO 
      ======================================================== */}
      <div className="w-full bg-white p-[3%] pt-[100px] sm:pt-[120px] lg:pt-[140px]">
        <section ref={heroRef} className="relative w-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden min-h-[50vh] lg:min-h-[70vh] flex flex-col items-center justify-center pt-16 pb-20 px-4 sm:px-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          
          {/* Parallax Background Image */}
          <div className="absolute -top-[10%] -left-[5%] h-[120%] w-[110%] will-change-transform" ref={heroImageRef}>
            <Image 
              src="/images/ch1.jpeg" // Add your preferred background image here
              alt="HAFSHIP About Us"
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
              About Us
            </p>
            <h1 className={`hero-text ${playfair.className} text-4xl sm:text-6xl lg:text-[80px] leading-tight font-extrabold tracking-tight text-white uppercase mb-8 drop-shadow-xl`}>
              Global <span className="text-brand-blue">Chartering</span>
            </h1>
            <p className={`hero-text ${lora.className} max-w-4xl text-lg sm:text-xl text-slate-100 font-medium leading-relaxed drop-shadow-md`}>
              HAFSHIP is a dedicated dry bulk shipbroking house connecting Shipowners, Vessel Operators, Charterers, Traders and Cargo Interests across international dry bulk markets.
            </p>
          </div>
        </section>
      </div>

      {/* ========================================================
          SECTION 2: DETAILED STORY & 2 IMAGES
      ======================================================== */}
      <section className="relative z-20 w-full bg-white pb-20 lg:pb-32 overflow-hidden">
        
        {/* RUNNING MARQUEE (VESSEL SIZES) */}
        <div ref={marqueeRef} className="w-full overflow-hidden select-none bg-brand-dark py-4 lg:py-5 mb-16 lg:mb-24 shadow-md border-b border-brand-yellow/20">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marqueeRightToLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .running-track-fast {
              display: flex;
              width: max-content;
              animation: marqueeRightToLeft 25s linear infinite;
            }
          `}} />

          <div className="running-track-fast items-center">
            {[...vesselSizes, ...vesselSizes, ...vesselSizes, ...vesselSizes].map((vessel, index) => (
              <div key={index} className="flex items-center shrink-0">
                <span className={`${raleway.className} text-white text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-widest px-8 sm:px-12 cursor-default`}>
                  {vessel}
                </span>
                <span className="text-brand-blue text-xl sm:text-2xl shrink-0">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT CONTENT & IMAGES */}
        <div className="w-[95%] max-w-[1800px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-center">
            
            {/* LEFT: CONTENT (7 Columns) */}
            <div ref={storyContentRef} className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1 lg:pl-4 xl:pl-8">
              
              <div className="flex items-center gap-3 mb-4">
                <span className="h-2 w-2 rounded-full bg-brand-yellow" />
                <span className={`${raleway.className} text-xs font-bold tracking-[0.25em] text-brand-dark uppercase`}>
                  Who We Are
                </span>
              </div>

              <h2 className={`${playfair.className} text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-brand-blue leading-[1.15] tracking-tight mb-8`}>
                Chartering Operations
              </h2>

              <p className={`${lora.className} text-justify text-xl sm:text-xl text-slate-700 font-medium leading-relaxed mb-6 max-w-3xl`}>
                HAFSHIP is a dry bulk shipbroking house focused on connecting shipowners, vessel operators, charterers, traders and cargo interests across international dry bulk markets.
              </p>
              
              <p className={`${lora.className} text-justify text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-3xl`}>
                We provide commercially focused shipbroking and chartering services, supporting clients from the initial cargo or vessel requirement through negotiations, fixture and post-fixture coordination.
              </p>

              <p className={`${lora.className} text-justify text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-3xl`}>
                Our brokerage activity covers voyage chartering, trip time charters and period employment, with a focus on:
              </p>

              {/* Vessel Sizes Highlight Badges */}
              <div className={`${raleway.className} flex flex-wrap items-center gap-3 text-sm font-bold text-brand-blue tracking-widest uppercase mb-6 bg-brand-gray/30 px-6 py-4 rounded-xl border border-brand-dark/5`}>
                <span>Handysize</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                <span>Handymax</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                <span>Supramax</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                <span>Ultramax</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                <span>Panamax</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                <span>Capesize & More</span>
              </div>

              <p className={`${lora.className} text-justify text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-3xl`}>
                We work across a broad range of dry bulk commodities and trading routes, connecting suitable cargo requirements with competitive and workable tonnage solutions.
              </p>

              <a
                href="/contact"
                className={`${raleway.className} group inline-flex items-center gap-4 rounded-full bg-brand-yellow px-8 py-4 text-sm font-bold tracking-[0.2em] text-brand-dark transition-all duration-300 hover:bg-brand-dark hover:text-white uppercase shadow-lg`}
              >
                <span>CONTACT US</span>
                <div className="flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            </div>

            {/* RIGHT: 2 IMAGES (5 Columns) */}
            <div className="lg:col-span-5 relative h-[380px] sm:h-[500px] lg:h-[650px] xl:h-[700px] w-full order-1 lg:order-2">
              <div className="relative w-full h-full max-w-[550px] xl:max-w-[650px] mx-auto lg:ml-auto">
                
                {/* Img 1: Top-Right Base */}
                <div
                  ref={img1Ref}
                  className="absolute top-0 right-0 w-[78%] h-[75%] rounded-[24px] overflow-hidden shadow-xl bg-brand-gray/50 will-change-transform"
                >
                  <Image
                    src="/images/ch1.jpeg"
                    alt="Global Dry Bulk Operations"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10" />
                </div>

                {/* Img 2: Bottom-Left Overlap */}
                <div
                  ref={img2Ref}
                  className="absolute bottom-0 left-0 w-[72%] h-[65%] rounded-[24px] overflow-hidden shadow-[0_20px_45px_rgba(3,24,46,0.25)] border-4 border-white bg-brand-gray z-10 will-change-transform"
                >
                  <Image
                    src="/images/ch2.jpeg"
                    alt="Shipbroking and Tonnage"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: COMMERCIAL EXECUTION & SERVICES
      ======================================================== */}
      <section ref={brokerageRef} className="w-full py-20 lg:py-28 px-4 sm:px-8 bg-brand-gray">
        <div className="mx-auto max-w-[1400px]">
          <div className="brokerage-fade text-center max-w-4xl mx-auto mb-16">
            <h2 className={`${playfair.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark uppercase`}>
              Commercial Execution & Support
            </h2>
            <p className={`${lora.className} mt-6 text-brand-dark/80 text-lg sm:text-xl leading-relaxed`}>
              We provide commercially focused chartering solutions, facilitating the efficient matching of cargo requirements with suitable tonnage while supporting negotiations and fixture execution from initial enquiry through post-fixture follow-up.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Core Services List Box */}
            <div className="brokerage-fade lg:col-span-7 bg-brand-dark p-8 sm:p-12 rounded-[28px] text-white shadow-xl flex flex-col justify-between">
              <div>
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
            </div>

            {/* Description note */}
            <div className="brokerage-fade lg:col-span-5 bg-white p-8 sm:p-12 rounded-[28px] border border-slate-200 shadow-sm flex flex-col justify-center">
              <p className={`${lora.className} text-brand-dark/80 leading-relaxed text-lg sm:text-xl font-medium`}>
                We work closely with principals and counterparties throughout the negotiation process, helping ensure that commercial terms are clearly communicated and efficiently progressed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: CALL TO ACTION
      ======================================================== */}
      <section className="w-full bg-brand-blue py-16 lg:py-24 px-4 sm:px-8 border-t border-slate-200">
        <div className="mx-auto max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
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