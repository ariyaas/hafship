// "use client";

// import { useRef, useLayoutEffect } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { raleway } from "@/app/fonts";

// gsap.registerPlugin(ScrollTrigger);

// export default function AboutSection() {
//   const containerRef = useRef(null);
//   const img1Ref = useRef(null);
//   const img2Ref = useRef(null);
//   const contentRef = useRef(null);

//   useLayoutEffect(() => {
//     const container = containerRef.current;
//     const img1 = img1Ref.current;
//     const img2 = img2Ref.current;
//     const content = contentRef.current;

//     if (!container) return;

//     const ctx = gsap.context(() => {
//       // 1. Staggered Entrance Animation for Right Side Content
//       if (content) {
//         gsap.fromTo(
//           content.children,
//           { y: 35, opacity: 0, filter: "blur(5px)" },
//           {
//             y: 0,
//             opacity: 1,
//             filter: "blur(0px)",
//             stagger: 0.1,
//             duration: 0.95,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: container,
//               start: "top 75%",
//             },
//           }
//         );
//       }

//       // 2. Entrance Animation for 2 Overlapping Images
//       if (img1 && img2) {
//         gsap.fromTo(
//           img1,
//           { x: -40, opacity: 0, scale: 0.94 },
//           {
//             x: 0,
//             opacity: 1,
//             scale: 1,
//             duration: 1.1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: container,
//               start: "top 75%",
//             },
//           }
//         );

//         gsap.fromTo(
//           img2,
//           { y: 40, x: -20, opacity: 0, scale: 0.9 },
//           {
//             y: 0,
//             x: 0,
//             opacity: 1,
//             scale: 1,
//             duration: 1.1,
//             delay: 0.15,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: container,
//               start: "top 75%",
//             },
//           }
//         );

//         // 3. Dual-plane Scroll Parallax
//         gsap.to(img1, {
//           y: -25,
//           ease: "none",
//           scrollTrigger: {
//             trigger: container,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 1.2,
//           },
//         });

//         gsap.to(img2, {
//           y: -50,
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
//     "Freight Forwarding",
//     "Chartering",
//     "Cargo Broking",
//     "Ship Agency",
//   ];

//   return (
//     // Solid background sliding smoothly over the hero video
//     <section
//       ref={containerRef}
//       id="about"
//       className="relative z-20 w-full bg-[#EBEFF3] pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden shadow-[0_-25px_60px_rgba(0,0,0,0.35)]"
//     >
//       {/* 90% WIDTH CONTAINER */}
//       <div className="w-[90%] mx-auto">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
          
//           {/* ================= LEFT SIDE: 35% WIDTH (2 OVERLAPPING IMAGES) ================= */}
//           <div className="w-full lg:w-[35%] lg:flex-[0_0_35%] relative h-[440px] sm:h-[500px] lg:h-[560px]">
//             <div className="relative w-full h-full">
              
//               {/* Img 1: Top-Right Base Image */}
//               <div
//                 ref={img1Ref}
//                 className="absolute top-0 right-0 w-[90%] h-[74%] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 will-change-transform"
//               >
//                 <Image
//                   src="/images/hafship-cargon.jpg" // Replace with your image path
//                   alt="HAFSHIP Vessel Operations"
//                   fill
//                   className="object-cover transition-transform duration-700 hover:scale-105"
//                   priority
//                 />
//               </div>

//               {/* Img 2: Bottom-Left Overlapping Front Image */}
//               <div
//                 ref={img2Ref}
//                 className="absolute bottom-0 left-0 w-[90%] h-[64%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 z-10 will-change-transform"
//               >
//                 <Image
//                   src="/images/hafship-vesseln.jpg" // Replace with your image path
//                   alt="HAFSHIP Cargo Handling"
//                   fill
//                   className="object-cover transition-transform duration-700 hover:scale-105"
//                 />

//                 {/* Ambient Status Pill */}
//                 <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-[#03162A]/90 p-3 text-white backdrop-blur-md border border-white/15">
//                   <div className="flex items-center gap-3">
//                     <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#065E9A] text-xs">
//                       ⚓
//                     </span>
//                     <div>
//                       <p className={`${raleway.className} text-xs font-bold tracking-wider uppercase`}>
//                         HAFSHIP Global Fleet
//                       </p>
//                       <p className={`${raleway.className} text-[10px] text-slate-300`}>
//                         Air • Ocean • Road • Port Hubs
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* ================= RIGHT SIDE: 65% WIDTH (RALEWAY BIG TITLE + 3 PARAS) ================= */}
//           <div ref={contentRef} className="w-full lg:w-[65%] lg:flex-[0_0_65%] flex flex-col items-start">
            
//             {/* Shipping Services Badge */}
//             <div
//               className={`${raleway.className} inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#065E9A]/10 text-[#065E9A] font-bold text-xs tracking-widest uppercase mb-4 border border-[#065E9A]/20`}
//             >
//               <span className="h-2 w-2 rounded-full bg-[#065E9A] animate-pulse" />
//               Shipping Services
//             </div>

//             {/* BIG BOLD 4 TO 6 LINE HEADLINE USING RALEWAY */}
//             <h2
//               className={`${raleway.className} text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#03162A] leading-[1.18] tracking-tight uppercase mb-6`}
//             >
//               We provide full range of shipping services, delivering comprehensive global transportation & maritime solutions across the world.
//             </h2>

//             {/* PARAGRAPH 1: Overview */}
//             <p
//               className={`${raleway.className} text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-6`}
//             >
//               At <strong className="text-[#065E9A]">HAFSHIP</strong>, we deliver comprehensive shipping solutions, from air and sea freight to road shipping and customs clearance, ensuring your cargo moves smoothly and reliably across the globe.
//             </p>

//             {/* The 2 Feature Cards for Freight Forwarding & Chartering */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              
//               {/* PARAGRAPH 2: Freight Forwarding */}
//               <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 transition-all duration-300 hover:border-[#065E9A] hover:bg-white hover:shadow-md">
//                 <div className="flex items-start gap-3.5">
//                   <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#065E9A]/10 flex items-center justify-center text-[#065E9A] mt-0.5">
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className={`${raleway.className} text-base font-bold text-[#03162A] tracking-wide mb-1`}>
//                       Freight Forwarding
//                     </h3>
//                     <p className={`${raleway.className} text-xs sm:text-sm text-slate-600 leading-relaxed`}>
//                       We specialize in providing comprehensive freight forwarding services, ensuring your cargo is moved seamlessly across the globe. With an extensive network of partners and a deep understanding of shipping, we manage every aspect of the shipping process so you can focus on your core business.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* PARAGRAPH 3: Chartering */}
//               <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 transition-all duration-300 hover:border-[#065E9A] hover:bg-white hover:shadow-md">
//                 <div className="flex items-start gap-3.5">
//                   <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#065E9A]/10 flex items-center justify-center text-[#065E9A] mt-0.5">
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className={`${raleway.className} text-base font-bold text-[#03162A] tracking-wide mb-1`}>
//                       Chartering
//                     </h3>
//                     <p className={`${raleway.className} text-xs sm:text-sm text-slate-600 leading-relaxed`}>
//                       We excel in connecting cargo with the right vessels across the globe. With a team of seasoned experts and decades of combined experience in the shipping industry, we provide tailored solutions for dry bulk cargo shipping, ensuring safe and efficient delivery of your goods.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//             </div>

//             {/* CTA Button using #065E9A */}
//             <a
//               href="#services"
//               className={`${raleway.className} group inline-flex items-center gap-3 rounded-full bg-[#065E9A] px-8 py-4 text-xs font-bold tracking-widest text-white shadow-lg shadow-[#065E9A]/30 transition-all duration-300 hover:scale-105 hover:bg-[#0872BB] uppercase`}
//             >
//               <span>EXPLORE MORE</span>
//               <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
//                 <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </div>
//             </a>

//           </div>

//         </div>
//       </div>

//       {/* =========================================================================
//           DOWN: RUNNING RIGHT-TO-LEFT MARQUEE WITH THE 4 SERVICES (ARROW REMOVED)
//       ========================================================================= */}
//       <div className="mt-20 w-full overflow-hidden border-t border-slate-300/60 pt-8 pb-4 select-none">
//         {/* CSS Keyframes for smooth infinite right-to-left scroll */}
//         <style>{`
//           @keyframes marqueeRightToLeft {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .running-services-track {
//             display: flex;
//             width: max-content;
//             animation: marqueeRightToLeft 30s linear infinite;
//           }
//           .running-services-track:hover {
//             animation-play-state: paused;
//           }
//         `}</style>

//         <div className="running-services-track items-center">
//           {/* Loop array twice for a seamless infinite running ticker */}
//           {[...marqueeServices, ...marqueeServices, ...marqueeServices, ...marqueeServices].map((service, index) => (
//             <div key={index} className="flex items-center shrink-0">
//               {/* Big Display Font (Arrow removed, clean luxury typography) */}
//               <span
//                 className={`${raleway.className} text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-slate-400/50 hover:text-[#065E9A] transition-colors duration-300 px-8 sm:px-14`}
//               >
//                 {service}
//               </span>
//               {/* Clean nautical divider dot between service names */}
//               <span className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-[#065E9A]/40 shrink-0" />
//             </div>
//           ))}
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
import { raleway } from "@/app/fonts";

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
      // 1. Massive Typography Reveal Animation (The "Running" / Sliding Text)
      if (bigTextLines) {
        gsap.fromTo(
          bigTextLines,
          { y: "120%", rotateAngle: 5 },
          {
            y: "0%",
            rotateAngle: 0,
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
    "CARGO BROKING",
    "TONNAGE SOURCING"
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative z-20 w-full bg-white pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden shadow-[0_-25px_60px_rgba(0,0,0,0.1)]"
    >
      {/* =========================================================================
          TOP SECTION: 85% PROMINENCE, MASSIVE ANIMATED TYPOGRAPHY
      ========================================================================= */}
      <div className="w-[95%] max-w-[1800px] mx-auto mb-16 lg:mb-24 pl-2 sm:pl-6">
        
        {/* Subheading tag */}
        <div
          className={`${raleway.className} overflow-hidden mb-6 flex items-center gap-3`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[#03182E] font-bold text-xs sm:text-sm tracking-[0.3em] uppercase">
            HAFSHIP Shipbroking & Chartering
          </span>
        </div>

        {/* Huge Animated Headline */}
        <h2
          ref={bigTextRef}
          className={`${raleway.className} flex flex-col text-[12vw] lg:text-[9.5vw] leading-[0.85] font-black uppercase tracking-tighter text-[#03182E]`}
        >
          <div className="overflow-hidden py-2">
            <span className="inline-block will-change-transform">CONNECTING</span>
          </div>
          <div className="overflow-hidden py-2">
            <span className="inline-block will-change-transform text-[#D4AF37]">
              GLOBAL MARKETS
            </span>
          </div>
          <div className="overflow-hidden py-2">
            <span className="inline-block will-change-transform">THROUGH CARGO</span>
          </div>
        </h2>
      </div>

      {/* =========================================================================
          RUNNING MARQUEE (PREMIUM HOLLOW STROKE)
      ========================================================================= */}
      <div ref={marqueeRef} className="w-full overflow-hidden select-none bg-[#FAFAFA] py-5 border-y border-slate-100 mb-20 lg:mb-32">
        <style>{`
          @keyframes marqueeRightToLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .running-track-fast {
            display: flex;
            width: max-content;
            animation: marqueeRightToLeft 25s linear infinite;
          }
          .text-stroke-premium {
            -webkit-text-stroke: 1.5px #CBD5E1;
            color: transparent;
            transition: all 0.3s ease;
          }
          .text-stroke-premium:hover {
            -webkit-text-stroke: 1.5px #03182E;
            color: #03182E;
          }
        `}</style>

        <div className="running-track-fast items-center">
          {[...marqueeServices, ...marqueeServices, ...marqueeServices, ...marqueeServices].map((service, index) => (
            <div key={index} className="flex items-center shrink-0">
              <span
                className={`${raleway.className} text-stroke-premium text-4xl sm:text-6xl font-black uppercase tracking-tight px-6 sm:px-10 cursor-default`}
              >
                {service}
              </span>
              <span className="h-3 w-3 sm:h-4 sm:w-4 rotate-45 bg-[#D4AF37]/60 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          BOTTOM SECTION: COMPACT CONTENT & SMALLER IMAGES
      ========================================================================= */}
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* CONTENT (7 Columns out of 12) */}
          <div ref={contentRef} className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
            <h3
              className={`${raleway.className} text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#03182E] leading-[1.2] tracking-tight mb-6`}
            >
              We know dry bulk. We know the market. We connect the right parties.
            </h3>

            <p className={`${raleway.className} text-base text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl`}>
              Hafship is an independent dry bulk shipbroking house. We focus on developing long-term commercial relationships, providing timely market information, and matching suitable cargo with competitive tonnage across international routes.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-8">
              <div className="group border-l-2 border-[#D4AF37] pl-5 py-1">
                <h4 className={`${raleway.className} text-sm font-bold text-[#03182E] tracking-widest uppercase mb-2`}>
                  Cargo Broking
                </h4>
                <p className={`${raleway.className} text-sm text-slate-500 leading-relaxed`}>
                  Sourcing and circulating requirements for Coal, Petcoke, Limestone, Gypsum, Grains, and Fertilizers.
                </p>
              </div>

              <div className="group border-l-2 border-[#D4AF37] pl-5 py-1">
                <h4 className={`${raleway.className} text-sm font-bold text-[#03182E] tracking-widest uppercase mb-2`}>
                  Tonnage Sourcing
                </h4>
                <p className={`${raleway.className} text-sm text-slate-500 leading-relaxed`}>
                  Connecting charterers with suitable Handysize through Panamax tonnage from trusted global owners.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className={`${raleway.className} group inline-flex items-center gap-4 rounded bg-[#03182E] px-8 py-3.5 text-xs font-bold tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#03182E] uppercase`}
            >
              <span>CONTACT DESK</span>
              <div className="flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </div>

          {/* IMAGES (5 Columns out of 12) - Smaller & Tighter Layout */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[450px] w-full order-1 lg:order-2">
            <div className="relative w-full h-full max-w-[500px] mx-auto lg:ml-auto">
              
              {/* Img 1: Top-Right Base */}
              <div
                ref={img1Ref}
                className="absolute top-0 right-0 w-[75%] h-[75%] rounded overflow-hidden shadow-xl bg-slate-100 will-change-transform"
              >
                <Image
                  src="/images/hafship-cargon.jpg"
                  alt="Dry Bulk Vessel Operations"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#03182E]/10" />
              </div>

              {/* Img 2: Bottom-Left Overlap */}
              <div
                ref={img2Ref}
                className="absolute bottom-0 left-0 w-[70%] h-[65%] rounded overflow-hidden shadow-[0_15px_35px_rgba(3,24,46,0.25)] border-4 border-white bg-slate-200 z-10 will-change-transform"
              >
                <Image
                  src="/images/hafship-vesseln.jpg"
                  alt="Dry Bulk Cargo Handling"
                  fill
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