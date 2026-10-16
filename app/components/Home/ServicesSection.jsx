// "use client";

// import { useRef, useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { raleway, lora, playfair, merriweather } from "@/app/fonts";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// const SERVICES_DATA = [
//   {
//     id: "01",
//     title: "Voyage Chartering",
//     desc: "Matching suitable vessels with cargo requirements on international dry bulk routes.",
//     img: "/images/Chartering.png", 
//     icon: (
//       <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
//       </svg>
//     ),
//   },
//   {
//     id: "02",
//     title: "Trip Time Chartering",
//     desc: "Arranging short-term vessel employment based on owners' and charterers' requirements.",
//     img: "/images/ch1.jpeg", 
//     icon: (
//       <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//     ),
//   },
//   {
//     id: "03",
//     title: "Period Employment",
//     desc: "Connecting suitable tonnage with charterers seeking multi-month employment.",
//     img: "/images/ch2.jpeg", 
//     icon: (
//       <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//       </svg>
//     ),
//   },
//   {
//     id: "04",
//     title: "Cargo & Tonnage Matching",
//     desc: "Sourcing and circulating dry bulk cargo requirements to connect the right cargo with the right tonnage.",
//     img: "/images/ch3.jpeg", 
//     icon: (
//       <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
//       </svg>
//     ),
//   },
//   {
//     id: "05",
//     title: "Tonnage Positioning",
//     desc: "Sourcing suitable Handysize through Panamax tonnage from owners and operators.",
//     img: "/images/Chartering.png", 
//     icon: (
//       <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//       </svg>
//     ),
//   },
//   {
//     id: "06",
//     title: "Freight & Rate Negotiations",
//     desc: "Evaluating key commercial elements including freight levels and charter terms to facilitate sustainable fixtures.",
//     img: "/images/ch4.jpg", 
//     icon: (
//       <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//       </svg>
//     ),
//   },
//   {
//     id: "07",
//     title: "Fixture Coordination",
//     desc: "Supporting clients from the initial cargo or vessel requirement through negotiations and fixture execution.",
//     img: "/images/ch1.jpeg", 
//     icon: (
//       <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//       </svg>
//     ),
//   },
//   {
//     id: "08",
//     title: "Post-Fixture Support",
//     desc: "Building long-term commercial relationships and providing rigorous post-fixture coordination.",
//     img: "/images/ch2.jpeg", 
//     icon: (
//       <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
//       </svg>
//     ),
//   },
//   {
//     id: "09",
//     title: "Tanker & Liquid Broking",
//     desc: "Providing professional shipbroking services connecting traders with the right commercial tanker opportunities.",
//     img: "/images/ch3.jpeg", 
//     icon: (
//       <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
//       </svg>
//     ),
//   }
// ];

// export default function ServicesSection() {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     const title = titleRef.current;

//     if (!section || !title) return;

//     const ctx = gsap.context(() => {
//       // Simple fade-up for the title
//       gsap.fromTo(
//         title,
//         { y: 30, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: title,
//             start: "top 85%",
//           },
//         }
//       );
//     }, section);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="services"
//       className="relative z-20 w-full bg-white py-8 sm:py-12 lg:py-16 px-3 sm:px-6 lg:px-8"
//     >
//       {/* ================= ROUNDED BRAND DARK CONTAINER ================= */}
//       <div className="relative mx-auto max-w-[1600px] rounded-[36px] sm:rounded-[48px] bg-brand-dark px-6 sm:px-10 lg:px-14 pt-16 pb-16 lg:pt-20 lg:pb-24 shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden">
        
//         {/* ================= HEADER ================= */}
//         <div ref={titleRef} className="relative z-20 mb-12 border-b border-brand-gray/10 pb-6 text-center lg:text-left">
//           <p className={`${raleway.className} text-xs font-bold tracking-[0.25em] text-brand-gray uppercase mb-3`}>
//             WHAT WE DO
//           </p>

//           <h2
//             className={`${playfair.className} text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight text-brand-blue leading-[1.15] uppercase`}
//           >
//             Dry Bulk & Tanker
//             <br className="hidden lg:block" />
//             <span className="text-brand-blue lg:ml-2">Chartering</span>
//           </h2>
//         </div>

//         {/* ================= 9 SERVICE CARDS ================= */}
//         <div className="relative z-20 w-full">
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
//             {SERVICES_DATA.map((service) => (
//               <div
//                 key={service.id}
//                 // Pure white background for maximum premium contrast
//                 className="group relative flex flex-col justify-between rounded-[24px] border-2 border-brand-gray/10 bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:border-brand-blue hover:shadow-[0_20px_50px_rgba(14,96,156,0.2)]"
//               >
//                 <div>
//                   <div className="flex items-start justify-between gap-3">
//                     <h3
//                       className={`${playfair.className} text-lg sm:text-xl font-bold tracking-tight text-brand-dark group-hover:text-brand-blue transition-colors uppercase`}
//                     >
//                       {service.title}
//                     </h3>

//                     {/* Icon Box: Clean brand blue outline, filling in on hover */}
//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-transparent border-2 border-brand-blue/20 text-brand-blue group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all duration-300">
//                       {service.icon}
//                     </div>
//                   </div>

//                   {/* Description text */}
//                   <p
//                     className={`${lora.className} mt-4 text-sm sm:text-base leading-relaxed text-slate-600 min-h-[72px]`}
//                   >
//                     {service.desc}
//                   </p>
//                 </div>

//                 {/* Expanding Image at the bottom (Responsive handling) */}
//                 <div className="mt-6 relative h-40 w-full overflow-hidden rounded-xl bg-brand-gray transition-all duration-500 ease-out group-hover:h-56 shadow-sm">
//                   <Image
//                     src={service.img}
//                     alt={service.title}
//                     fill
//                     sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
//                     className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   />
//                   {/* Subtle inner shadow overlay */}
//                   <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-xl pointer-events-none" />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ================= BOTTOM TAGLINE ================= */}
//         <div className="relative z-20 mt-16 text-center border-t border-brand-gray/10 pt-12">
//           <p className={`${raleway.className} text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-yellow uppercase mb-4`}>
//             Market Intelligence <span className="text-brand-blue mx-3">•</span> Global Network <span className="text-brand-blue mx-3">•</span> Commercial Expertise
//           </p>
//           <p className={`${lora.className} text-lg sm:text-xl text-slate-300 font-medium`}>
//             From Cargo to Fixture — Connecting the Right Parties, Tonnage & Opportunities.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }



// "use client";

// import { useRef, useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { raleway, lora, playfair } from "@/app/fonts";

// gsap.registerPlugin(ScrollTrigger);

// const SERVICES_LIST = [
//   "Voyage Chartering",
//   "Trip Time Chartering",
//   "Period Employment",
//   "Cargo & Tonnage Matching",
//   "Tonnage Positioning",
//   "Freight & Rate Negotiations",
//   "Fixture Coordination",
//   "Post-Fixture Support",
//   "Tanker & Liquid Broking"
// ];

// export default function ServicesSection() {
//   const sectionRef = useRef(null);
//   const leftContentRef = useRef(null);
//   const rightListRef = useRef(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
    
//     if (!section) return;

//     const ctx = gsap.context(() => {
//       // 1. Left Content Fade Up
//       gsap.fromTo(
//         ".svc-left-anim",
//         { y: 40, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           stagger: 0.15,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: leftContentRef.current,
//             start: "top 80%",
//           },
//         }
//       );

//       // 2. Right List Staggered Reveal
//       gsap.fromTo(
//         ".svc-list-item",
//         { x: 30, opacity: 0 },
//         {
//           x: 0,
//           opacity: 1,
//           stagger: 0.1,
//           duration: 0.8,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: rightListRef.current,
//             start: "top 85%",
//           },
//         }
//       );
//     }, section);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="services"
//       className="relative z-20 w-full bg-white py-16 lg:py-24 px-4 sm:px-8"
//     >
//       <div className="mx-auto max-w-[1400px]">
//         {/* Premium Dark Container */}
//         <div className="relative w-full rounded-[2rem] sm:rounded-[3rem] bg-brand-dark px-6 py-16 sm:p-16 lg:p-20 shadow-[0_30px_60px_rgba(3,24,46,0.3)] overflow-hidden">
          
//           {/* Subtle Background Glow */}
//           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none" />

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
            
//             {/* LEFT: Title & CTA */}
//             <div ref={leftContentRef} className="lg:col-span-5 flex flex-col items-start justify-center">
//               <p className="svc-left-anim flex items-center gap-3 mb-6">
//                 <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
//                 <span className={`${raleway.className} font-bold text-xs sm:text-sm text-brand-gray tracking-[0.25em] uppercase`}>
//                   Our Expertise
//                 </span>
//               </p>

//               <h2 className={`svc-left-anim ${playfair.className} text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.15] tracking-tight mb-8`}>
//                 Dry Bulk & Tanker <span className="text-brand-blue block mt-2">Chartering.</span>
//               </h2>

//               <p className={`svc-left-anim ${lora.className} text-lg text-slate-300 font-medium leading-relaxed mb-10`}>
//                 Delivering end-to-end commercial solutions. From sourcing the right tonnage to post-fixture support, our global network ensures your cargo moves efficiently and profitably.
//               </p>

//               {/* DESKTOP CTA BUTTON (Hidden on Mobile) */}
//               <div className="svc-left-anim hidden lg:block">
//                 <a
//                   href="/chartering"
//                   className={`${raleway.className} group inline-flex items-center gap-4 rounded-full bg-brand-yellow px-8 py-4 text-sm font-bold tracking-[0.2em] text-brand-dark transition-all duration-300 hover:bg-white uppercase shadow-lg`}
//                 >
//                   <span>VIEW ALL SERVICES</span>
//                   <div className="flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
//                     <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                     </svg>
//                   </div>
//                 </a>
//               </div>
//             </div>

//             {/* RIGHT: Animated Sleek List */}
//             <div ref={rightListRef} className="lg:col-span-7 flex flex-col justify-center">
//               <div className="w-full border-t border-white/10">
//                 {SERVICES_LIST.map((service, index) => (
//                   <div 
//                     key={index}
//                     className="svc-list-item group flex items-center justify-between border-b border-white/10 py-5 sm:py-6 transition-colors duration-300 hover:border-brand-blue cursor-default"
//                   >
//                     <div className="flex items-center gap-6 sm:gap-8">
//                       <span className={`${raleway.className} text-xs font-bold text-brand-blue/50 tracking-widest w-6`}>
//                         0{index + 1}
//                       </span>
//                       <h3 className={`${playfair.className} text-xl sm:text-2xl font-bold text-slate-200 transition-colors duration-300 group-hover:text-brand-blue tracking-wide uppercase`}>
//                         {service}
//                       </h3>
//                     </div>
                    
//                     <svg className="h-5 w-5 text-white/20 transition-all duration-300 group-hover:text-brand-blue group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </div>
//                 ))}
//               </div>

//               {/* MOBILE CTA BUTTON (Hidden on Desktop, shows at the bottom on Mobile) */}
//               <div className="svc-list-item lg:hidden mt-10 flex w-full justify-start">
//                 <a
//                   href="/chartering"
//                   className={`${raleway.className} group inline-flex items-center gap-4 rounded-full bg-brand-yellow px-8 py-4 text-sm font-bold tracking-[0.2em] text-brand-dark transition-all duration-300 hover:bg-white uppercase shadow-lg`}
//                 >
//                   <span>VIEW ALL SERVICES</span>
//                   <div className="flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
//                     <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                     </svg>
//                   </div>
//                 </a>
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
import { monaSans } from "@/app/fonts";
import {
  SplitLetters,
  PremiumButton,
  LETTER_RISE,
  LETTER_FADE,
} from "@/app/components/ui/PremiumUI";

gsap.registerPlugin(ScrollTrigger);

const SERVICES_LIST = [
  "Voyage Chartering",
  "Time Chartering",
  "Period Employment",
  "Cargo & Tonnage Matching",
  "Tonnage Positioning",
  "Freight & Rate Negotiations",
  "Fixture Coordination",
  "Post-Fixture Support",
  "Tanker & Liquid Broking",
];

const DESCRIPTION =
  "Delivering end-to-end commercial solutions. From sourcing the right tonnage to post-fixture support, our global network ensures your cargo moves efficiently and profitably.";

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const imageWrapRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. LEFT CONTENT: one timeline, everything in order
      const tl = gsap.timeline({
        scrollTrigger: { trigger: leftContentRef.current, start: "top 80%" },
      });

      tl.fromTo(
        ".svc-sub",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
        // Title: letter by letter, bottom -> top
        .fromTo(".svc-title-letter", LETTER_RISE.from, LETTER_RISE.to, "-=0.4")
        // Description: letter by letter
        .fromTo(
          ".svc-desc-letter",
          LETTER_FADE.from,
          { ...LETTER_FADE.to, stagger: 0.01 },
          "-=0.6"
        )
        // List rows
        .fromTo(
          ".svc-row",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.08 },
          "-=0.8"
        )
        // Button
        .fromTo(
          ".svc-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        );

      // 2. IMAGE reveal (own trigger, so it also works when it sits below on mobile)
      gsap.fromTo(
        imageWrapRef.current,
        { scale: 1.05, opacity: 0, filter: "blur(10px)" },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: { trigger: imageWrapRef.current, start: "top 85%" },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-20 w-full lg:min-h-screen bg-brand-dark py-16 sm:py-20 lg:py-28 overflow-hidden flex items-center"
    >
      <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 sm:gap-16 lg:gap-20 items-center">
          {/* =========================================================
              LEFT SIDE: TITLE, DESCRIPTION, LIST, BUTTON
          ========================================================= */}
          <div
            ref={leftContentRef}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Subtitle (brand blue) */}
            <p
              className={`svc-sub ${monaSans.className} text-brand-blue font-black text-lg sm:text-3xl tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-5 sm:mb-6`}
            >
              Our Expertise
            </p>

            {/* Massive title: letter by letter */}
            <h2
              className={`${monaSans.className} font-black tracking-normal uppercase leading-[1] mb-8 sm:mb-10 text-[12vw] sm:text-[8vw] lg:text-[80px] xl:text-[105px]`}
            >
              <span className="block text-brand-blue">
                <SplitLetters
                  text="Dry Bulk & Tanker"
                  letterClass="svc-title-letter"
                  mask
                />
              </span>
              <span className="block text-white">
                <SplitLetters
                  text="Broking"
                  letterClass="svc-title-letter"
                  mask
                />
              </span>
            </h2>

            {/* Description: letter by letter */}
            <p
              className={`${monaSans.className} text-base sm:text-2xl xl:text-3xl text-white/85 leading-relaxed font-medium max-w-3xl mb-10 sm:mb-14`}
            >
              <SplitLetters text={DESCRIPTION} letterClass="svc-desc-letter" />
            </p>

            {/* Services list */}
            <div className="w-full border-t border-white/10 mb-10 sm:mb-14 max-w-4xl">
              {SERVICES_LIST.map((service, index) => (
                <div
                  key={index}
                  className="svc-row group relative flex items-center justify-between gap-4 border-b border-white/10 py-4 sm:py-6 cursor-default"
                >
                  {/* blue line that grows on hover */}
                  <span className="pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-brand-blue transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />

                  <div className="flex min-w-0 items-center gap-4 sm:gap-10">
                    <span
                      className={`${monaSans.className} w-7 shrink-0 text-xs sm:text-base font-bold text-brand-blue tracking-widest`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={`${monaSans.className} text-base min-[420px]:text-lg sm:text-2xl lg:text-3xl font-bold text-white/90 transition-colors duration-300 group-hover:text-brand-blue tracking-wide uppercase`}
                    >
                      {service}
                    </h3>
                  </div>

                  <svg
                    className="h-5 w-5 sm:h-7 sm:w-7 shrink-0 text-white/25 transition-all duration-300 group-hover:text-brand-blue group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              ))}
            </div>

            {/* Premium button (shared, same as About) */}
            <PremiumButton
              href="/chartering"
              label="View All Services"
              variant="dark"
              className="svc-btn"
            />
          </div>

          {/* =========================================================
              IMAGE: right on desktop, below the content on mobile/tablet
          ========================================================= */}
          <div className="lg:col-span-5">
            <div
              ref={imageWrapRef}
              className="relative w-full h-[45vh] sm:h-[55vh] md:h-[60vh] lg:h-[85vh] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <Image
                src="/images/26.png"
                alt="HAFSHIP Global Chartering"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}