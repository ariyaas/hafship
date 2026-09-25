// "use client";

// import { useRef, useLayoutEffect } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { raleway, merriweather, lora } from "@/app/fonts";

// gsap.registerPlugin(ScrollTrigger);

// export default function AboutSection() {
//   const containerRef = useRef(null);
//   const bigTextRef = useRef(null);
//   const marqueeRef = useRef(null);
//   const img1Ref = useRef(null);
//   const img2Ref = useRef(null);
//   const contentRef = useRef(null);

//   useLayoutEffect(() => {
//     const container = containerRef.current;
//     const bigTextLines = bigTextRef.current?.children;
//     const img1 = img1Ref.current;
//     const img2 = img2Ref.current;
//     const content = contentRef.current;
//     const marquee = marqueeRef.current;

//     if (!container) return;

//     const ctx = gsap.context(() => {
//       // 1. Massive Typography Reveal Animation
//       if (bigTextLines) {
//         gsap.fromTo(
//           bigTextLines,
//           { y: "120%", rotateAngle: 5 },
//           {
//             y: "0%",
//             rotateAngle: 0,
//             stagger: 0.15,
//             duration: 1.2,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: container,
//               start: "top 80%",
//             },
//           }
//         );
//       }

//       // 2. Marquee horizontal slide-in on scroll
//       if (marquee) {
//         gsap.fromTo(
//           marquee,
//           { x: "10%", opacity: 0 },
//           {
//             x: "0%",
//             opacity: 1,
//             duration: 1.5,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: container,
//               start: "top 70%",
//             },
//           }
//         );
//       }

//       // 3. Smaller Content & Images Reveal
//       if (content) {
//         gsap.fromTo(
//           content.children,
//           { y: 40, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             stagger: 0.1,
//             duration: 1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: content,
//               start: "top 85%",
//             },
//           }
//         );
//       }

//       if (img1 && img2) {
//         gsap.fromTo(
//           [img1, img2],
//           { y: 50, opacity: 0, scale: 0.95 },
//           {
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             stagger: 0.2,
//             duration: 1.2,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: img1,
//               start: "top 85%",
//             },
//           }
//         );

//         // Subtle Parallax for the smaller images
//         gsap.to(img1, {
//           y: -20,
//           ease: "none",
//           scrollTrigger: {
//             trigger: container,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 1,
//           },
//         });
//         gsap.to(img2, {
//           y: -40,
//           ease: "none",
//           scrollTrigger: {
//             trigger: container,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 1.5,
//           },
//         });
//       }
//     }, container);

//     return () => ctx.revert();
//   }, []);

//   const marqueeServices = [
//     "VOYAGE CHARTERING",
//     "TRIP TIME CHARTER",
//     "CARGO BROKING",
//     "TONNAGE SOURCING",
//     "SHIP AGENCY"
//   ];

//   return (
//     <section
//       ref={containerRef}
//       id="about"
//       className="relative z-20 w-full bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden shadow-[0_-25px_60px_rgba(0,0,0,0.1)]"
//     >
//       {/* =========================================================================
//           TOP SECTION: 85% PROMINENCE, MASSIVE ANIMATED TYPOGRAPHY
//       ========================================================================= */}
//       <div className="w-[95%] max-w-[1800px] mx-auto mb-16 lg:mb-24 pl-2 sm:pl-6">
        
//         {/* Subheading tag */}
//         <div
//           className={`${lora.className} overflow-hidden mb-6 flex items-center gap-3`}
//         >
//           <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
//           <span className="text-brand-blue font-bold text-xs sm:text-sm tracking-[0.3em] uppercase">
//             HAFSHIP Shipbroking & Chartering
//           </span>
//         </div>

//         {/* Huge Animated Headline */}
//         <h2
//           ref={bigTextRef}
//           className={`${lora.className} flex flex-col text-[10vw] lg:text-[9.5vw] leading-[0.85] font-black uppercase tracking-tighter text-brand-dark`}
//         >
//           <div className="overflow-hidden py-2">
//             <span className="inline-block will-change-transform">CONNECTING</span>
//           </div>
//           <div className="overflow-hidden py-2">
//             <span className="inline-block will-change-transform text-brand-blue">
//               GLOBAL MARKETS
//             </span>
//           </div>
//           <div className="overflow-hidden py-2">
//             <span className="inline-block will-change-transform">THROUGH CARGO</span>
//           </div>
//         </h2>
//       </div>

//       {/* =========================================================================
//           RUNNING MARQUEE (PREMIUM HOLLOW STROKE)
//       ========================================================================= */}
//       <div ref={marqueeRef} className="w-full overflow-hidden select-none bg-[#FAFAFA] py-5 border-y border-slate-100 mb-20 lg:mb-32">
//         <style>{`
//           @keyframes marqueeRightToLeft {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .running-track-fast {
//             display: flex;
//             width: max-content;
//             animation: marqueeRightToLeft 25s linear infinite;
//           }
//           .text-stroke-premium {
//             -webkit-text-stroke: 1.5px #CBD5E1;
//             color: transparent;
//             transition: all 0.3s ease;
//           }
//           .text-stroke-premium:hover {
//             -webkit-text-stroke: 1.5px #0e609c;
//             color: #0e609c;
//           }
//         `}</style>

//         <div className="running-track-fast items-center">
//           {[...marqueeServices, ...marqueeServices, ...marqueeServices, ...marqueeServices].map((service, index) => (
//             <div key={index} className="flex items-center shrink-0">
//               <span
//                 className={`${merriweather.className} text-stroke-premium text-4xl sm:text-6xl font-black uppercase tracking-tight px-6 sm:px-10 cursor-pointer`}
//               >
//                 {service}
//               </span>
//               <span className="h-3 w-3 sm:h-4 sm:w-4 rotate-45 bg-[#D4AF37]/60 shrink-0" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* =========================================================================
//           BOTTOM SECTION: COMPACT CONTENT & SMALLER IMAGES
//       ========================================================================= */}
//       <div className="w-[90%] max-w-[1400px] mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* CONTENT (7 Columns out of 12) */}
//           <div ref={contentRef} className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
//             <h3
//               className={`${merriweather.className} text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-brand-blue leading-[1.2] tracking-tight mb-6`}
//             >
//               We specialize in seamlessly connecting cargo with the right vessels across the globe.
//             </h3>

//             <p className={`${lora.className} text-base text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl`}>
//               With decades of combined experience in the shipping industry, we provide tailored, efficient, and cost-effective solutions for dry bulk transportation[cite: 4]. Our expertise ensures your agricultural commodities, minerals, raw materials, and industrial goods reach their destination safely and on time.
//             </p>

//             {/* Feature Cards Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-8">
//               <div className="group border-l-2 border-[#D4AF37] pl-5 py-1">
//                 <h4 className={`${merriweather.className} text-sm font-bold text-[#03182E] tracking-widest uppercase mb-2`}>
//                   Cargo Broking
//                 </h4>
//                 <p className={`${lora.className} text-sm text-slate-500 leading-relaxed`}>
//                   We negotiate the best freight rates and ensure full compliance, delivering tailored solutions for spot fixtures, time charters, and long-term contracts.
//                 </p>
//               </div>

//               <div className="group border-l-2 border-[#D4AF37] pl-5 py-1">
//                 <h4 className={`${merriweather.className} text-sm font-bold text-[#03182E] tracking-widest uppercase mb-2`}>
//                   Global Network
//                 </h4>
//                 <p className={`${lora.className} text-sm text-slate-500 leading-relaxed`}>
//                   Leveraging a vast network of trusted shipowners and logistics partners, we minimize risks and optimize your supply chain costs.
//                 </p>
//               </div>
//             </div>

//             {/* CTA Button */}
           
//           </div>

//           {/* IMAGES (5 Columns out of 12) */}
//           <div className="lg:col-span-5 relative h-[380px] sm:h-[450px] w-full order-1 lg:order-2">
//             <div className="relative w-full h-full max-w-[500px] mx-auto lg:ml-auto">
              
//               {/* Img 1: Top-Right Base */}
//               <div
//                 ref={img1Ref}
//                 className="absolute top-0 right-0 w-[75%] h-[75%] rounded overflow-hidden shadow-xl bg-slate-100 will-change-transform"
//               >
//                 <Image
//                   src="/images/hafship-cargon.jpg"
//                   alt="Dry Bulk Vessel Operations"
//                   fill
//                   className="object-cover transition-transform duration-1000 hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-[#03182E]/10" />
//               </div>

//               {/* Img 2: Bottom-Left Overlap */}
//               <div
//                 ref={img2Ref}
//                 className="absolute bottom-0 left-0 w-[70%] h-[65%] rounded overflow-hidden shadow-[0_15px_35px_rgba(3,24,46,0.25)] border-4 border-white bg-slate-200 z-10 will-change-transform"
//               >
//                 <Image
//                   src="/images/hafship-vesseln.jpg"
//                   alt="Dry Bulk Cargo Handling"
//                   fill
//                   className="object-cover transition-transform duration-1000 hover:scale-105"
//                 />
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { americanCaptain, raleway, merriweather, lora,firaSans, outfit } from "@/app/fonts";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef(null);
  const bigTextRef = useRef(null);
  const marqueeRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const bigTextLines = bigTextRef.current?.children;
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;
    const content = contentRef.current;
    const marquee = marqueeRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      // 1. Massive Typography Reveal Animation
      if (bigTextLines) {
        gsap.fromTo(
          bigTextLines,
          { y: "120%", rotation: 5 },
          {
            y: "0%",
            rotation: 0,
            stagger: 0.15,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
            },
          }
        );
      }

      // 2. Marquee horizontal slide-in on scroll
      if (marquee) {
        gsap.fromTo(
          marquee,
          { x: "10%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 70%",
            },
          }
        );
      }

      // 3. Smaller Content & Images Reveal
      if (content) {
        gsap.fromTo(
          content.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: content,
              start: "top 85%",
            },
          }
        );
      }

      if (img1 && img2) {
        gsap.fromTo(
          [img1, img2],
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.2,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img1,
              start: "top 85%",
            },
          }
        );

        // Subtle Parallax for the smaller images
        gsap.to(img1, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to(img2, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  const marqueeServices = [
    "VOYAGE CHARTERING",
    "TRIP TIME CHARTER",
    "PERIOD EMPLOYMENT",
    "TONNAGE SOURCING",
    "CARGO BROKING",
    "CO-BROKERAGE"
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative z-20 w-full bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden shadow-[0_-25px_60px_rgba(0,0,0,0.1)]"
    >
      {/* =========================================================================
          TOP SECTION: MASSIVE BRANDING PRINCIPLE
      ========================================================================= */}
      <div className="w-[95%] max-w-[1800px] mx-auto mb-16 lg:mb-24 pl-2 sm:pl-6">
        
        {/* Subheading tag */}
        <div
          className={`${raleway.className} overflow-hidden mb-6 flex items-center gap-3`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
          <span className="text-brand-dark font-bold text-xs sm:text-sm tracking-[0.3em] uppercase">
            HAFSHIP Shipbroking
          </span>
        </div>

        {/* Huge Animated Headline using the Most Important Branding Principle */}
        <h2
          ref={bigTextRef}
          className={`${americanCaptain.className} flex flex-col text-[10vw] lg:text-[8vw] leading-[0.85] uppercase tracking-wider text-brand-dark`}
        >
          <div className="overflow-hidden py-2">
            <span className="inline-block will-change-transform">We know dry bulk.</span>
          </div>
          <div className="overflow-hidden py-2">
            <span className="inline-block will-change-transform text-brand-blue">
              We know the market.
            </span>
          </div>
          <div className="overflow-hidden py-2">
            <span className="inline-block will-change-transform text-brand-gray">
              We have cargo & tonnage.
            </span>
          </div>
        </h2>
      </div>


     {/* =========================================================================
          RUNNING MARQUEE (SERVICES)
      ========================================================================= */}
      <div ref={marqueeRef} className="w-full overflow-hidden select-none bg-brand-gray/20 py-8 lg:py-10 border-y border-brand-gray/50 mb-20 lg:mb-32">
        <style>{`
          @keyframes marqueeRightToLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .running-track-fast {
            display: flex;
            width: max-content;
            animation: marqueeRightToLeft 35s linear infinite;
          }
          .text-stroke-premium {
            /* Increased stroke thickness to 2px for a bolder look */
            -webkit-text-stroke: 2px var(--color-brand-blue);
            /* Solid brand blue fill */
            color: var(--color-brand-blue);
          }
        `}</style>

        <div className="running-track-fast items-center">
          {[...marqueeServices, ...marqueeServices, ...marqueeServices].map((service, index) => (
            <div key={index} className="flex items-center shrink-0">
              <span
                // Vastly increased responsive text sizes (up to 110px on desktop)
                className={`${raleway.className} text-stroke-premium text-5xl sm:text-7xl md:text-8xl lg:text-[62px] font-black uppercase tracking-tighter px-8 sm:px-12 lg:px-16 cursor-default`}
              >
                {service}
              </span>
              {/* Scaled up the gray diamond separator to match the larger text */}
              <span className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 rotate-45 bg-brand-gray shrink-0" />
            </div>
          ))}
        </div>
      </div>
    

   {/* =========================================================================
          BOTTOM SECTION: ABOUT HAFSHIP & IMAGES
      ========================================================================= */}
      <div className="w-[95%] max-w-[1800px] mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-center">
          
          {/* CONTENT (7 Columns out of 12) */}
          <div ref={contentRef} className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1 lg:pl-6 xl:pl-10">
            <h3
              className={`${merriweather.className} text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-brand-dark leading-[1.15] tracking-tight mb-8`}
            >
              Independent Dry Bulk Shipbroking House
            </h3>

            <p className={`${lora.className} text-xl sm:text-2xl text-slate-700 font-medium leading-relaxed mb-6 max-w-3xl`}>
              Hafship is an independent dry bulk shipbroking house focused on connecting shipowners, operators, charterers and cargo interests across international dry bulk markets.
            </p>
            
            <p className={`${lora.className} text-xl sm:text-2xl text-slate-700 font-medium leading-relaxed mb-12 max-w-3xl`}>
               Our brokerage activity covers voyage chartering, trip time charters and period employment for Handysize, Handymax, Supramax, Ultramax and Panamax vessels.
            </p>

            {/* Feature Cards Grid - Gap increased for wider layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12 w-full mb-12 max-w-4xl">
              
              <div className="group border-l-2 border-brand-yellow pl-5 py-1">
                <h4 className={`${raleway.className} text-base sm:text-lg font-bold text-brand-dark tracking-widest uppercase mb-3`}>
                  Market Access
                </h4>
                <p className={`${lora.className} text-base sm:text-lg text-slate-500 leading-relaxed`}>
                  Connecting cargo interests, charterers, owners and operators across major dry bulk markets.
                </p>
              </div>

              <div className="group border-l-2 border-brand-yellow pl-5 py-1">
                <h4 className={`${raleway.className} text-base sm:text-lg font-bold text-brand-dark tracking-widest uppercase mb-3`}>
                  Commercial Focus
                </h4>
                <p className={`${lora.className} text-base sm:text-lg text-slate-500 leading-relaxed`}>
                  Focused on finding workable employment and cargo solutions.
                </p>
              </div>

              <div className="group border-l-2 border-brand-yellow pl-5 py-1">
                <h4 className={`${raleway.className} text-base sm:text-lg font-bold text-brand-dark tracking-widest uppercase mb-3`}>
                  Long-Term Relationships
                </h4>
                <p className={`${lora.className} text-base sm:text-lg text-slate-500 leading-relaxed`}>
                  Building sustainable commercial relationships rather than focusing only on individual fixtures.
                </p>
              </div>

              <div className="group border-l-2 border-brand-yellow pl-5 py-1">
                <h4 className={`${raleway.className} text-base sm:text-lg font-bold text-brand-dark tracking-widest uppercase mb-3`}>
                  Confidentiality
                </h4>
                <p className={`${lora.className} text-base sm:text-lg text-slate-500 leading-relaxed`}>
                  Respecting the confidentiality of owners, charterers, cargo interests and brokers.
                </p>
              </div>

            </div>

             {/* CTA Button */}
             <a
              href="#contact"
              className={`${raleway.className} group inline-flex items-center gap-4 rounded bg-brand-dark px-8 py-4 text-sm sm:text-base font-bold tracking-[0.2em] text-white transition-all duration-300 hover:bg-brand-yellow hover:text-brand-dark uppercase`}
            >
              <span>CONTACT US</span>
              <div className="flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </div>

          {/* IMAGES (5 Columns out of 12) - Max width dynamically expanded for larger screens */}
          <div className="lg:col-span-5 relative h-[550px] lg:h-[700px] xl:h-[750px] w-full order-1 lg:order-2">
            <div className="relative w-full h-full max-w-[550px] xl:max-w-[700px] mx-auto lg:ml-auto">
              
              {/* Img 1: Top-Right Base */}
              <div
                ref={img1Ref}
                className="absolute top-0 right-0 w-[75%] h-[75%] rounded overflow-hidden shadow-xl bg-brand-gray/50 will-change-transform"
              >
                <Image
                  src="/images/ch1.jpeg"
                  alt="Dry Bulk Vessel Operations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-dark/10" />
              </div>

              {/* Img 2: Bottom-Left Overlap */}
              <div
                ref={img2Ref}
                className="absolute bottom-0 left-0 w-[70%] h-[65%] rounded overflow-hidden shadow-[0_15px_35px] shadow-brand-dark/25 border-4 border-white bg-brand-gray z-10 will-change-transform"
              >
                <Image
                  src="/images/ch2.jpeg"
                  alt="Dry Bulk Cargo Handling"
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
  );
}