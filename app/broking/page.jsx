// "use client";

// import { useRef, useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { monaSans } from "@/app/fonts";
// import Image from "next/image";
// import {
//   SplitLetters,
//   PremiumButton,
//   LETTER_RISE,
//   LETTER_FADE,
// } from "@/app/components/ui/PremiumUI";

// gsap.registerPlugin(ScrollTrigger);

// const HERO_TEXT =
//   "HAFSHIP provides professional dry bulk shipbroking and chartering services, connecting shipowners, operators, charterers, traders and cargo interests with the right commercial opportunities and tonnage.";

// const INTRO_STATEMENT =
//   "HAFSHIP is a dedicated dry bulk shipbroking house connecting Shipowners, Vessel Operators, Charterers, Traders and Cargo Interests across international dry bulk markets.";

// const SERVICES_DATA = [
//   {
//     id: "01",
//     title: "Voyage Chartering",
//     desc: "Matching suitable vessels with cargo requirements on international dry bulk routes.",
//     img: "/images/ex18.png",
//     icon: (
//       <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
//       </svg>
//     ),
//   },
//   {
//     id: "02",
//     title: "Time Chartering",
//     desc: "Arranging short-term vessel employment based on owners' and charterers' requirements.",
//     img: "/images/ex12.png",
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
//     img: "/images/hafship-vesseln.jpg",
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
//     img: "/images/ex21.png",
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
//     img: "/images/ex3.png",
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
//     img: "/images/ex7.png",
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
//     img: "/images/ex1.png",
//     icon: (
//       <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
//       </svg>
//     ),
//   },
// ];

// export default function CharteringPage() {
//   const containerRef = useRef(null);
//   const heroRef = useRef(null);
//   const heroImageRef = useRef(null);
//   const introRef = useRef(null);
//   const headRef = useRef(null);
//   const tagRef = useRef(null);
//   const ctaRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       // 1. HERO (plays on load)
//       gsap
//         .timeline({ delay: 0.2 })
//         .fromTo(
//           ".hero-eyebrow",
//           { y: 20, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
//         )
//         .fromTo(".hero-title-letter", LETTER_RISE.from, LETTER_RISE.to, "-=0.4")
//         .fromTo(
//           ".hero-text-letter",
//           LETTER_FADE.from,
//           { ...LETTER_FADE.to, stagger: 0.008 },
//           "-=0.5"
//         );

//       // 2. HERO image parallax
//       if (heroImageRef.current && heroRef.current) {
//         gsap.to(heroImageRef.current, {
//           yPercent: 10,
//           ease: "none",
//           scrollTrigger: {
//             trigger: heroRef.current,
//             start: "top top",
//             end: "bottom top",
//             scrub: true,
//           },
//         });
//       }

//       // 3. INTRO: statement letters, then the two paragraphs
//       gsap
//         .timeline({
//           scrollTrigger: { trigger: introRef.current, start: "top 80%" },
//         })
//         .fromTo(".intro-letter", LETTER_FADE.from, {
//           ...LETTER_FADE.to,
//           stagger: 0.008,
//         })
//         .fromTo(
//           ".intro-fade",
//           { y: 30, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.2 },
//           "-=0.9"
//         );

//       // Vertical divider line (desktop)
//       gsap.fromTo(
//         ".intro-line-anim",
//         { scaleY: 0 },
//         {
//           scaleY: 1,
//           duration: 1.5,
//           ease: "power4.out",
//           scrollTrigger: { trigger: introRef.current, start: "top 80%" },
//         }
//       );

//       // 4. GRID header: eyebrow + title letters
//       gsap
//         .timeline({
//           scrollTrigger: { trigger: headRef.current, start: "top 85%" },
//         })
//         .fromTo(
//           ".grid-eyebrow",
//           { y: 20, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
//         )
//         .fromTo(".grid-title-letter", LETTER_RISE.from, LETTER_RISE.to, "-=0.4");

//       // 5. CARDS: each card reveals when IT scrolls into view (works on mobile too)
//       gsap.set(".service-card-anim", { opacity: 0, y: 40 });
//       ScrollTrigger.batch(".service-card-anim", {
//         start: "top 90%",
//         once: true,
//         onEnter: (batch) =>
//           gsap.to(batch, {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             ease: "power3.out",
//             stagger: 0.1,
//             clearProps: "transform", // lets the CSS hover lift work afterwards
//           }),
//       });

//       // 6. Bottom tagline
//       gsap.fromTo(
//         ".tag-fade",
//         { y: 24, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.9,
//           ease: "power3.out",
//           stagger: 0.15,
//           scrollTrigger: { trigger: tagRef.current, start: "top 90%" },
//         }
//       );

//       // 7. CTA: title letters, paragraph, button
//       gsap
//         .timeline({
//           scrollTrigger: { trigger: ctaRef.current, start: "top 80%" },
//         })
//         .fromTo(".cta-title-letter", LETTER_RISE.from, LETTER_RISE.to)
//         .fromTo(
//           ".cta-fade",
//           { y: 24, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.12 },
//           "-=0.5"
//         );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <main
//       ref={containerRef}
//       className={`${monaSans.className} w-full flex-grow bg-brand-dark`}
//     >
//       {/* ========================================================
//           HERO
//       ======================================================== */}
//       <section
//         ref={heroRef}
//         className="relative w-full min-h-[65vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-16 lg:pb-24 px-5 sm:px-10"
//       >
//         {/* Parallax background */}
//         <div
//           ref={heroImageRef}
//           className="absolute -top-[15%] left-0 h-[130%] w-full will-change-transform"
//         >
//           <Image
//             src="/images/ex19.png"
//             alt="Global Chartering Services"
//             fill
//             sizes="100vw"
//             priority
//             className="object-cover"
//           />
//         </div>

//         <div className="absolute inset-0 bg-brand-dark/10" />
//         <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />

//         <div className="relative z-10 mx-auto max-w-[1400px] flex flex-col items-center text-center">
//           <p className="hero-eyebrow text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase mb-6 sm:mb-8">
//             Services
//           </p>

//           <h1 className="font-black tracking-normal uppercase leading-[0.95] mb-8 sm:mb-10 text-[14vw] sm:text-7xl lg:text-[100px] xl:text-[120px]">
//             <span className="block text-white">
//               <SplitLetters text="Global" letterClass="hero-title-letter" mask />
//             </span>
//             <span className="block text-brand-blue">
//               <SplitLetters text="Broking" letterClass="hero-title-letter" mask />
//             </span>
//           </h1>

//           <p className="max-w-4xl text-base sm:text-xl lg:text-2xl text-white/85 font-medium leading-relaxed">
//             <SplitLetters text={HERO_TEXT} letterClass="hero-text-letter" />
//           </p>
//         </div>
//       </section>

//       {/* ========================================================
//           INTRO (split layout)
//       ======================================================== */}
//       <section className="relative w-full bg-brand-dark py-16 sm:py-20 lg:py-32 px-5 sm:px-10 lg:px-16 overflow-hidden">
//         <div
//           ref={introRef}
//           className="relative mx-auto max-w-[1800px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start"
//         >
//           {/* Center vertical divider (desktop only) */}
//           <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/15">
//             <div className="intro-line-anim h-full w-full origin-top bg-brand-blue" />
//           </div>

//           {/* Left: bold statement */}
//           <div className="flex flex-col justify-center">
//             <h3 className="text-2xl sm:text-4xl lg:text-[38px] xl:text-5xl text-white font-bold leading-snug tracking-normal">
//               <SplitLetters text={INTRO_STATEMENT} letterClass="intro-letter" />
//             </h3>
//           </div>

//           {/* Right: two paragraphs */}
//           <div className="flex flex-col gap-8 sm:gap-10 lg:pt-3">
//             <div className="intro-fade border-l-[3px] border-brand-blue pl-5 sm:pl-8">
//               <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 font-medium leading-relaxed">
//                 We provide commercially focused chartering solutions,
//                 facilitating the efficient matching of cargo requirements with
//                 suitable tonnage while supporting negotiations and fixture
//                 execution from initial enquiry through post-fixture follow-up.
//               </p>
//             </div>

//             <div className="intro-fade border-l-[3px] border-brand-blue pl-5 sm:pl-8">
//               <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 font-medium leading-relaxed">
//                 We work closely with principals and counterparties throughout
//                 the negotiation process, helping ensure that commercial terms
//                 are clearly communicated and efficiently progressed.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========================================================
//           9-CARD GRID
//       ======================================================== */}
//       <section
//         id="services-grid"
//         className="relative z-20 w-full bg-brand-dark border-t border-white/10 py-16 sm:py-20 lg:py-32 px-5 sm:px-10 lg:px-16"
//       >
//         <div className="mx-auto max-w-[1800px]">
//           {/* HEADER */}
//           <div ref={headRef} className="mb-12 sm:mb-16 border-b border-white/15 pb-8 sm:pb-10">
//             <div className="grid-eyebrow flex items-center gap-4 mb-6">
//               <span className="h-px w-10 sm:w-14 bg-brand-blue" />
//               <span className="text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase">
//                 Our Core Services
//               </span>
//             </div>

//             <h2 className="font-black tracking-normal uppercase leading-[1] text-[11vw] sm:text-6xl lg:text-[64px] xl:text-[80px]">
//               <span className="block text-white">
//                 <SplitLetters text="Dry Bulk & Tanker" letterClass="grid-title-letter" mask />
//               </span>
//               <span className="block text-brand-blue">
//                 <SplitLetters text="Chartering" letterClass="grid-title-letter" mask />
//               </span>
//             </h2>
//           </div>

//           {/* CARDS */}
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 w-full">
//             {SERVICES_DATA.map((service) => (
//               <div
//                 key={service.id}
//                 className="service-card-anim group relative flex flex-col justify-between border border-white/15 bg-white/[0.04] p-5 sm:p-6 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand-blue hover:bg-white/[0.07]"
//               >
//                 <div>
//                   <div className="flex items-start justify-between gap-4">
//                     <h3 className="text-xl sm:text-2xl font-black tracking-normal text-white group-hover:text-brand-blue transition-colors uppercase leading-tight">
//                       {service.title}
//                     </h3>
//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-brand-blue/50 text-brand-blue group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all duration-300">
//                       {service.icon}
//                     </div>
//                   </div>
//                   <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/75 font-medium">
//                     {service.desc}
//                   </p>
//                 </div>

//                 <div className="mt-6 relative h-44 sm:h-52 lg:h-44 lg:group-hover:h-56 w-full overflow-hidden bg-brand-dark transition-all duration-500 ease-out">
//                   <Image
//                     src={service.img}
//                     alt={service.title}
//                     fill
//                     sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
//                     className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-brand-dark/10 pointer-events-none" />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* BOTTOM TAGLINE */}
//           <div
//             ref={tagRef}
//             className="mt-14 sm:mt-16 border-t border-white/15 pt-10 sm:pt-12 text-center"
//           >
//             <p className="tag-fade text-sm sm:text-lg lg:text-xl font-bold tracking-[0.2em] text-brand-blue uppercase mb-4">
//               Market Intelligence <span className="text-white/40 mx-2 sm:mx-3">•</span> Global Network{" "}
//               <span className="text-white/40 mx-2 sm:mx-3">•</span> Commercial Expertise
//             </p>
//             <p className="tag-fade text-lg sm:text-2xl lg:text-3xl text-white/80 font-medium">
//               From Cargo to Fixture — Connecting the Right Parties, Tonnage &amp; Opportunities.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ========================================================
//           CALL TO ACTION
//       ======================================================== */}
//       <section
//         ref={ctaRef}
//         className="w-full bg-brand-blue py-16 sm:py-20 lg:py-28 px-5 sm:px-10 lg:px-16"
//       >
//         <div className="mx-auto max-w-[1800px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16">
//           <div className="flex-1">
//             <h2 className="font-black tracking-normal uppercase leading-[1] text-white text-[11vw] sm:text-6xl lg:text-[64px] xl:text-[80px] mb-6">
//               <SplitLetters text="Looking to cooperate?" letterClass="cta-title-letter" mask />
//             </h2>
//             <p className="cta-fade text-base sm:text-xl lg:text-2xl text-brand-dark font-medium leading-relaxed max-w-2xl">
//               We welcome suitable cargo and tonnage circulation to add value to
//               your fixtures.
//             </p>
//           </div>

//           <div className="shrink-0 w-full sm:w-auto">
//             <PremiumButton
//               href="/contact"
//               label="Contact Broking Desk"
//               variant="dark"
//               className="cta-fade"
//             />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }



"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { monaSans } from "@/app/fonts";
import Image from "next/image";
import {
  SplitLetters,
  PremiumButton,
  LETTER_RISE,
  LETTER_FADE,
} from "@/app/components/ui/PremiumUI";

gsap.registerPlugin(ScrollTrigger);

// --- CLIENT CONTENT ---
const HERO_TEXT =
  "HAFSHIP facilitates shipbroking and chartering opportunities across dry bulk and tanker markets, connecting shipowners, vessel operators, charterers, traders and cargo interests across regional and international routes.";

const INTRO_STATEMENT = "Connecting Cargoes with the Right Tonnage";

const DRY_BULK_TEXT =
  "Handysize, Handymax, Supramax, Ultramax, Panamax and Capesize.";

// ⚠ TODO: this sentence is cut off in the screenshot ("...vessel availability and").
// Paste the rest of the client's sentence at the end of this string.
const TANKERS_TEXT =
  "Suitable tanker segments based on cargo requirements, vessel availability and";

const APPROACH_TEXT =
  "With a commercially focused and market-driven approach, HAFSHIP aims to develop effective connections between cargo and tonnage, facilitating negotiations and supporting mutually agreed fixtures with professionalism, responsiveness and confidentiality.";

const SERVICES_DATA = [
  {
    id: "01",
    title: "Voyage Chartering",
    desc: "Facilitating vessel employment for specific cargoes and routes, including cargo enquiry circulation, vessel sourcing and freight negotiations.",
    img: "/images/ex18.png",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Trip Time Chartering",
    desc: "Connecting charterers with suitable vessels for short-term trading requirements and specific employment opportunities.",
    img: "/images/ex12.png",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Period Chartering",
    desc: "Facilitating longer-term vessel employment opportunities between owners and charterers.",
    img: "/images/ch2.jpeg",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Cargo & Tonnage Matching",
    desc: "Matching cargo requirements with suitable vessel positions based on vessel size, cargo characteristics, schedule, route and port restrictions.",
    img: "/images/hafship-vesseln.jpg",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Tonnage Positioning",
    desc: "Circulating open vessel positions and identifying potential employment opportunities across relevant markets.",
    img: "/images/ex21.png",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Freight & Charter-Party Negotiations",
    desc: "Coordinating commercial discussions covering freight, hire, laycan, demurrage, despatch and other applicable charter-party terms.",
    img: "/images/ch4.jpg",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "07",
    title: "Fixture Coordination & Post-Fixture Support",
    desc: "Supporting communication and commercial coordination between the parties from fixture negotiations through the agreed employment.",
    img: "/images/ex3.png",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function CharteringPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);
  const introRef = useRef(null);
  const headRef = useRef(null);
  const segRef = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. HERO (plays on load)
      gsap
        .timeline({ delay: 0.2 })
        .fromTo(
          ".hero-eyebrow",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(".hero-title-letter", LETTER_RISE.from, LETTER_RISE.to, "-=0.4")
        .fromTo(
          ".hero-text-letter",
          LETTER_FADE.from,
          { ...LETTER_FADE.to, stagger: 0.008 },
          "-=0.5"
        );

      // 2. HERO image parallax
      if (heroImageRef.current && heroRef.current) {
        gsap.to(heroImageRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 3. INTRO: statement letters, then the two paragraphs
      gsap
        .timeline({
          scrollTrigger: { trigger: introRef.current, start: "top 80%" },
        })
        .fromTo(".intro-letter", LETTER_FADE.from, {
          ...LETTER_FADE.to,
          stagger: 0.015,
        })
        .fromTo(
          ".intro-fade",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.2 },
          "-=0.5"
        );

      // Vertical divider line (desktop)
      gsap.fromTo(
        ".intro-line-anim",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: { trigger: introRef.current, start: "top 80%" },
        }
      );

      // 4. GRID header: title letters
      gsap.fromTo(".grid-title-letter", LETTER_RISE.from, {
        ...LETTER_RISE.to,
        scrollTrigger: { trigger: headRef.current, start: "top 85%" },
      });

      // 5. CARDS: each card reveals when IT scrolls into view (works on mobile too)
      gsap.set(".service-card-anim", { opacity: 0, y: 40 });
      ScrollTrigger.batch(".service-card-anim", {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            clearProps: "transform", // lets the CSS hover lift work afterwards
          }),
      });

      // 6. VESSEL SEGMENTS: title letters, then the two panels
      gsap
        .timeline({
          scrollTrigger: { trigger: segRef.current, start: "top 85%" },
        })
        .fromTo(".seg-title-letter", LETTER_RISE.from, LETTER_RISE.to)
        .fromTo(
          ".seg-fade",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2 },
          "-=0.5"
        );

      // 7. CTA: title letters, paragraph, button
      gsap
        .timeline({
          scrollTrigger: { trigger: ctaRef.current, start: "top 80%" },
        })
        .fromTo(".cta-title-letter", LETTER_RISE.from, LETTER_RISE.to)
        .fromTo(
          ".cta-fade",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.12 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className={`${monaSans.className} w-full flex-grow bg-brand-dark`}
    >
      {/* ========================================================
          HERO
      ======================================================== */}
      <section
        ref={heroRef}
        className="relative w-full min-h-[65vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-16 lg:pb-24 px-5 sm:px-10"
      >
        {/* Parallax background */}
        <div
          ref={heroImageRef}
          className="absolute -top-[15%] left-0 h-[130%] w-full will-change-transform"
        >
          <Image
            src="/images/ex19.png"
            alt="Dry Bulk & Tanker Shipbroking"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-brand-dark/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1400px] flex flex-col items-center text-center">
          <p className="hero-eyebrow text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase mb-6 sm:mb-8">
            Broking
          </p>

          <h1 className="font-black tracking-normal uppercase leading-[0.95] mb-8 sm:mb-10 text-[14vw] sm:text-7xl lg:text-[100px] xl:text-[120px]">
            <span className="block text-white">
              <SplitLetters text="Dry Bulk & Tanker" letterClass="hero-title-letter" mask />
            </span>
            <span className="block text-brand-blue">
              <SplitLetters text="Shipbroking" letterClass="hero-title-letter" mask />
            </span>
          </h1>

          <p className="max-w-4xl text-base sm:text-xl lg:text-2xl text-white/85 font-medium leading-relaxed">
            <SplitLetters text={HERO_TEXT} letterClass="hero-text-letter" />
          </p>
        </div>
      </section>

      {/* ========================================================
          INTRO (split layout)
      ======================================================== */}
      <section className="relative w-full bg-brand-dark py-16 sm:py-20 lg:py-32 px-5 sm:px-10 lg:px-16 overflow-hidden">
        <div
          ref={introRef}
          className="relative mx-auto max-w-[1800px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start"
        >
          {/* Center vertical divider (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/15">
            <div className="intro-line-anim h-full w-full origin-top bg-brand-blue" />
          </div>

          {/* Left: bold statement */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl sm:text-4xl lg:text-[38px] xl:text-5xl text-white font-bold leading-snug tracking-normal">
              <SplitLetters text={INTRO_STATEMENT} letterClass="intro-letter" />
            </h3>
          </div>

          {/* Right: two paragraphs */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:pt-3">
            <div className="intro-fade border-l-[3px] border-brand-blue pl-5 sm:pl-8">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 font-medium leading-relaxed">
                Our services cover cargo and vessel matching, market
                circulation, voyage and time chartering, vessel positioning,
                freight and hire negotiations, fixture coordination and
                post-fixture support.
              </p>
            </div>

            <div className="intro-fade border-l-[3px] border-brand-blue pl-5 sm:pl-8">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 font-medium leading-relaxed">
                We consider cargo requirements, vessel suitability,
                availability, trading routes, laycan, port restrictions and
                commercial terms to identify suitable shipping opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICE CARDS + VESSEL SEGMENTS
      ======================================================== */}
      <section
        id="services-grid"
        className="relative z-20 w-full bg-brand-dark border-t border-white/10 py-16 sm:py-20 lg:py-32 px-5 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1800px]">
          {/* HEADER */}
          <div ref={headRef} className="mb-12 sm:mb-16 border-b border-white/15 pb-8 sm:pb-10">
            <h2 className="font-black tracking-normal uppercase leading-[1] text-[11vw] sm:text-6xl lg:text-[64px] xl:text-[80px]">
              <span className="block text-white">
                <SplitLetters text="Our Dry Bulk" letterClass="grid-title-letter" mask />
              </span>
              <span className="block text-brand-blue">
                <SplitLetters text="Broking Services" letterClass="grid-title-letter" mask />
              </span>
            </h2>
          </div>

          {/* CARDS: 1 col phone, 2 cols tablet, 3 cols desktop (7th card centered on its own row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-5 sm:gap-6 lg:gap-8 w-full">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="service-card-anim group relative flex flex-col justify-between border border-white/15 bg-white/[0.04] p-5 sm:p-6 lg:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand-blue hover:bg-white/[0.07] xl:col-span-2 md:last:col-span-2 md:last:w-[calc(50%-0.75rem)] md:last:justify-self-center lg:last:w-[calc(50%-1rem)] xl:last:col-start-3 xl:last:w-full"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl sm:text-2xl font-black tracking-normal text-white group-hover:text-brand-blue transition-colors uppercase leading-tight">
                      {service.title}
                    </h3>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-brand-blue/50 text-brand-blue group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/75 font-medium">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 relative h-44 sm:h-52 lg:h-44 lg:group-hover:h-56 w-full overflow-hidden bg-brand-dark transition-all duration-500 ease-out">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* VESSEL SEGMENTS */}
          <div
            ref={segRef}
            className="mt-16 sm:mt-20 border-t border-white/15 pt-12 sm:pt-16"
          >
            <h2 className="font-black tracking-normal uppercase leading-[1] text-[10vw] sm:text-5xl lg:text-[56px] xl:text-[64px] mb-8 sm:mb-12">
              <span className="inline-block text-white mr-[0.28em]">
                <SplitLetters text="Vessel" letterClass="seg-title-letter" mask />
              </span>
              <span className="inline-block text-brand-blue">
                <SplitLetters text="Segments" letterClass="seg-title-letter" mask />
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Dry Bulk (brand blue) */}
              <div className="seg-fade bg-brand-blue p-7 sm:p-10 lg:p-14">
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase leading-[1] tracking-normal text-white mb-5 sm:mb-6">
                  Dry Bulk
                </h3>
                <p className="text-lg sm:text-2xl lg:text-3xl text-white font-medium leading-relaxed">
                  {DRY_BULK_TEXT}
                </p>
              </div>

              {/* Tankers (dark panel) */}
              <div className="seg-fade border border-white/15 bg-white/[0.04] p-7 sm:p-10 lg:p-14">
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase leading-[1] tracking-normal text-brand-blue mb-5 sm:mb-6">
                  Tankers
                </h3>
                <p className="text-lg sm:text-2xl lg:text-3xl text-white/85 font-medium leading-relaxed">
                  {TANKERS_TEXT}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          OUR APPROACH + BUTTON
      ======================================================== */}
      <section
        ref={ctaRef}
        className="w-full bg-brand-blue py-16 sm:py-20 lg:py-28 px-5 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1800px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16">
          <div className="flex-1">
            <h2 className="font-black tracking-normal uppercase leading-[1] text-white text-[11vw] sm:text-6xl lg:text-[64px] xl:text-[80px] mb-6">
              <SplitLetters text="Our Approach" letterClass="cta-title-letter" mask />
            </h2>
            <p className="cta-fade text-base sm:text-xl lg:text-2xl text-brand-dark font-medium leading-relaxed max-w-3xl">
              {APPROACH_TEXT}
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <PremiumButton
              href="/contact"
              label="Contact Broking Desk"
              variant="dark"
              className="cta-fade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}