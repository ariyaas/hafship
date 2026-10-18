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

// const COMMODITIES = [
//   "Coal",
//   "Petcoke",
//   "Limestone",
//   "Gypsum",
//   "Salt",
//   "Grain",
//   "Fertilizers",
//   "Ores",
//   "Minerals",
// ];

// const HERO_TEXT =
//   "HAFSHIP provides professional dry bulk shipbroking and chartering services, connecting shipowners, operators, charterers, traders and cargo interests with the right commercial opportunities and tonnage.";

// const INTRO_STATEMENT =
//   "We work across a broad range of dry bulk commodities and trading routes, connecting suitable cargo requirements with competitive and workable tonnage solutions.";

// export default function CargosPage() {
//   const containerRef = useRef(null);
//   const heroRef = useRef(null);
//   const heroImageRef = useRef(null);
//   const introRef = useRef(null);
//   const headRef = useRef(null);
//   const gridRef = useRef(null);
//   const panelRef = useRef(null);
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

//       // 5. COMMODITY tiles: each reveals when it scrolls into view
//       gsap.set(".cargo-tile-anim", { opacity: 0, y: 30, scale: 0.95 });
//       ScrollTrigger.batch(".cargo-tile-anim", {
//         start: "top 92%",
//         once: true,
//         onEnter: (batch) =>
//           gsap.to(batch, {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//             duration: 0.8,
//             ease: "power3.out",
//             stagger: 0.08,
//             clearProps: "transform",
//           }),
//       });

//       // 6. CARGO panel
//       gsap.fromTo(
//         ".panel-fade",
//         { y: 30, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.9,
//           ease: "power3.out",
//           stagger: 0.15,
//           scrollTrigger: { trigger: panelRef.current, start: "top 88%" },
//         }
//       );

//       // 7. Bottom tagline
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

//       // 8. CTA: title letters, paragraph, button
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
//             src="/images/hafship-vesseln.jpg"
//             alt="Dry Bulk Cargo Operations"
//             fill
//             sizes="100vw"
//             priority
//             className="object-cover"
//           />
//         </div>

//         <div className="absolute inset-0 bg-brand-dark/30" />
//         <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />

//         <div className="relative z-10 mx-auto max-w-[1400px] flex flex-col items-center text-center">
//           <p className="hero-eyebrow text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase mb-6 sm:mb-8">
//             Operations
//           </p>

//           <h1 className="font-black tracking-normal uppercase leading-[0.95] mb-8 sm:mb-10 text-[14vw] sm:text-7xl lg:text-[100px] xl:text-[120px]">
//             <span className="block text-white">
//               <SplitLetters text="Cargo &" letterClass="hero-title-letter" mask />
//             </span>
//             <span className="block text-brand-blue">
//               <SplitLetters text="Tonnage" letterClass="hero-title-letter" mask />
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
//                 Our approach is centred on finding workable, commercially viable
//                 employment and cargo solutions. We evaluate the key commercial
//                 elements of each requirement, including vessel position, size,
//                 trading area, cargo, laycan, loading and discharge ports,
//                 freight levels, charter terms and operational requirements.
//               </p>
//             </div>

//             <div className="intro-fade border-l-[3px] border-brand-blue pl-5 sm:pl-8">
//               <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 font-medium leading-relaxed">
//                 Confidentiality is fundamental to our brokerage practice. We
//                 respect the commercial sensitivity of cargo requirements, vessel
//                 positions, freight ideas, charter terms, negotiations and
//                 counterparties. Information is handled with discretion.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========================================================
//           COMMODITIES GRID
//       ======================================================== */}
//       <section
//         id="cargos-grid"
//         className="relative z-20 w-full bg-brand-dark border-t border-white/10 py-16 sm:py-20 lg:py-32 px-5 sm:px-10 lg:px-16"
//       >
//         <div className="mx-auto max-w-[1800px]">
//           {/* HEADER */}
//           <div
//             ref={headRef}
//             className="mb-12 sm:mb-16 border-b border-white/15 pb-8 sm:pb-10"
//           >
//             <div className="grid-eyebrow flex items-center gap-4 mb-6">
//               <span className="h-px w-10 sm:w-14 bg-brand-blue" />
//               <span className="text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase">
//                 Dry Bulk Commodities
//               </span>
//             </div>

//             <h2 className="font-black tracking-normal uppercase leading-[1] text-[11vw] sm:text-6xl lg:text-[64px] xl:text-[80px]">
//               <span className="block text-white">
//                 <SplitLetters text="Cargo" letterClass="grid-title-letter" mask />
//               </span>
//               <span className="block text-brand-blue">
//                 <SplitLetters text="Requirements" letterClass="grid-title-letter" mask />
//               </span>
//             </h2>
//           </div>

//           {/* TILES: 2 cols on phone (last one centered full row), 3x3 from tablet up */}
//           <div
//             ref={gridRef}
//             className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 lg:gap-6 w-full"
//           >
//             {COMMODITIES.map((item) => (
//               <div
//                 key={item}
//                 className="cargo-tile-anim group relative flex items-center justify-center overflow-hidden border border-white/15 bg-white/[0.04] px-3 py-8 sm:px-4 sm:py-12 lg:py-16 cursor-default last:col-span-2 sm:last:col-span-1 transition-colors duration-500 hover:border-brand-blue"
//               >
//                 {/* blue fill rising from the bottom on hover */}
//                 <span className="absolute inset-0 translate-y-full bg-brand-blue transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
//                 <span className="relative z-10 text-center text-base min-[400px]:text-lg sm:text-2xl lg:text-3xl font-black uppercase tracking-wide text-white">
//                   {item}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* CARGO PANEL */}
//           <div
//             ref={panelRef}
//             className="mt-12 sm:mt-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border border-white/15 bg-white/[0.04] p-6 sm:p-10 lg:p-14"
//           >
//             <div className="panel-fade">
//               <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-normal leading-tight mb-3">
//                 Have cargo <span className="text-brand-blue">ready?</span>
//               </p>
//               <p className="text-base sm:text-xl lg:text-2xl text-white/75 font-medium">
//                 Circulate your requirements securely.
//               </p>
//             </div>

//             <div className="shrink-0 w-full sm:w-auto">
//               <PremiumButton
//                 href="/submit-cargo"
//                 label="Submit Cargo"
//                 variant="dark"
//                 className="panel-fade"
//               />
//             </div>
//           </div>

//           {/* BOTTOM TAGLINE */}
//           <div
//             ref={tagRef}
//             className="mt-14 sm:mt-20 border-t border-white/15 pt-10 sm:pt-12 text-center"
//           >
//             <p className="tag-fade text-sm sm:text-lg lg:text-xl font-bold tracking-[0.2em] text-brand-blue uppercase mb-4">
//               Market Knowledge <span className="text-white/40 mx-2 sm:mx-3">•</span> Commercial Thinking{" "}
//               <span className="text-white/40 mx-2 sm:mx-3">•</span> Trusted Connections
//             </p>
//             <p className="tag-fade mx-auto max-w-5xl text-lg sm:text-2xl lg:text-3xl text-white/80 font-medium leading-relaxed">
//               HAFSHIP combines market access, commercial awareness and
//               relationship-driven broking to connect the right cargo with the
//               right tonnage.
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

/* ------------------------------------------------------------------
   CONTENT (from your shared document)
------------------------------------------------------------------- */
const HERO_TEXT =
  "HAFSHIP handles and circulates suitable dry bulk cargo enquiries through its network of shipowners, vessel operators, charterers, traders and brokers.";

const INTRO_STATEMENT = "A Broad Range of Bulk Commodity Requirements";

const INTRO_TEXT =
  "We help connect cargo interests with suitable tonnage by considering commodity, quantity, loading and discharge ports, laycan, vessel size, cargo characteristics and operational requirements.";

const DRY_CARGOES = [
  {
    name: "Coal",
    desc: "Thermal coal and other bulk coal requirements across regional and international trading routes.",
  },
  {
    name: "Petroleum Coke (Petcoke)",
    desc: "Petcoke cargo movements connecting suitable origins, destinations and available tonnage.",
  },
  {
    name: "Limestone",
    desc: "Industrial and construction-related limestone movements for regional and international markets.",
  },
  {
    name: "Gypsum",
    desc: "Bulk gypsum cargoes serving cement, construction and industrial requirements.",
  },
  {
    name: "Salt",
    desc: "Bulk salt movements matched with suitable vessel capacity and port requirements.",
  },
  {
    name: "Grains & Agricultural Commodities",
    desc: "Grain and other suitable agricultural bulk cargo movements, subject to cargo specifications and vessel requirements.",
  },
  {
    name: "Fertilizers",
    desc: "Bulk fertilizer cargoes connecting producers, traders and receivers with suitable tonnage.",
  },
  {
    name: "Ores",
    desc: "Iron ore and other suitable ore cargo requirements across major dry bulk trading markets.",
  },
  {
    name: "Minerals",
    desc: "A range of bulk mineral commodities matched with appropriate vessels and trading routes.",
  },
  {
    name: "Clinker & Cement",
    desc: "Cement clinker and bulk cement movements, subject to vessel suitability, handling arrangements and cargo specifications.",
  },
  {
    name: "Bauxite & Alumina",
    desc: "Bulk cargo opportunities connecting producers, traders and receivers with suitable vessel capacity.",
  },
  {
    name: "Petroleum-Related Solid Bulk Cargoes",
    desc: "Selected solid bulk commodities, including suitable industrial by-products, subject to cargo classification and applicable carriage requirements.",
  },
];

const ENQUIRY_INTRO =
  "To help us circulate your requirement effectively, please provide:";

const ENQUIRY_ITEMS = [
  "Commodity and cargo quantity",
  "Loading and discharge ports",
  "Laycan or shipment period",
  "Preferred vessel size, if known",
  "Loading and discharging rates, if available",
  "Cargo specifications and handling requirements",
  "Any other relevant commercial terms",
];

const TANKER_CARGOES = [
  "Crude Oil",
  "Gasoline",
  "Diesel",
  "Gasoil",
  "Fuel Oil",
  "Vegetable Oils",
  "Selected Liquid Chemicals",
];

const TANKER_NOTE =
  "All cargoes are subject to vessel suitability, cargo specifications and applicable requirements.";

export default function CargosPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);
  const introRef = useRef(null);
  const headRef = useRef(null);
  const enquiryRef = useRef(null);
  const tagRef = useRef(null);
  const tankerHeadRef = useRef(null);
  const tankerNoteRef = useRef(null);

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

      // 3. INTRO: statement letters, then paragraph
      gsap
        .timeline({
          scrollTrigger: { trigger: introRef.current, start: "top 80%" },
        })
        .fromTo(".intro-letter", LETTER_FADE.from, {
          ...LETTER_FADE.to,
          stagger: 0.012,
        })
        .fromTo(
          ".intro-fade",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          "-=0.6"
        );

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

      // 4. DRY BULK LIST header
      gsap
        .timeline({
          scrollTrigger: { trigger: headRef.current, start: "top 85%" },
        })
        .fromTo(
          ".list-eyebrow",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(".list-title-letter", LETTER_RISE.from, LETTER_RISE.to, "-=0.4");

      // 5. CARGO rows reveal on scroll
      gsap.set(".cargo-row-anim", { opacity: 0, y: 40 });
      ScrollTrigger.batch(".cargo-row-anim", {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            clearProps: "transform",
          }),
      });

      // 6. ENQUIRY: title letters, paragraph, button, checklist rows
      gsap
        .timeline({
          scrollTrigger: { trigger: enquiryRef.current, start: "top 80%" },
        })
        .fromTo(".enq-title-letter", LETTER_RISE.from, LETTER_RISE.to)
        .fromTo(
          ".enq-fade",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.12 },
          "-=0.5"
        );

      gsap.fromTo(
        ".enq-line-anim",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: { trigger: enquiryRef.current, start: "top 80%" },
        }
      );

      gsap.set(".enq-row-anim", { opacity: 0, y: 30 });
      ScrollTrigger.batch(".enq-row-anim", {
        start: "top 92%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
            clearProps: "transform",
          }),
      });

      // 7. Closing line
      gsap.fromTo(
        ".tag-fade",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: tagRef.current, start: "top 92%" },
        }
      );

      // 8. TANKER header
      gsap
        .timeline({
          scrollTrigger: { trigger: tankerHeadRef.current, start: "top 85%" },
        })
        .fromTo(
          ".tanker-eyebrow",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(".tanker-title-letter", LETTER_RISE.from, LETTER_RISE.to, "-=0.4");

      // 9. TANKER tiles
      gsap.set(".tanker-tile-anim", { opacity: 0, y: 30, scale: 0.95 });
      ScrollTrigger.batch(".tanker-tile-anim", {
        start: "top 92%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            clearProps: "transform",
          }),
      });

      // 10. TANKER note
      gsap.fromTo(
        ".tanker-fade",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: tankerNoteRef.current, start: "top 92%" },
        }
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
            src="/images/hafship-vesseln.jpg"
            alt="Dry Bulk Cargo Operations"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-brand-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1400px] flex flex-col items-center text-center">
          <p className="hero-eyebrow text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase mb-6 sm:mb-8">
            Dry Bulk Cargo Broking
          </p>

          <h1 className="font-black tracking-normal uppercase leading-[0.95] mb-8 sm:mb-10 text-[14vw] sm:text-7xl lg:text-[100px] xl:text-[120px]">
            <span className="block text-white">
              <SplitLetters text="Dry Bulk" letterClass="hero-title-letter" mask />
            </span>
            <span className="block text-brand-blue">
              <SplitLetters text="Cargoes" letterClass="hero-title-letter" mask />
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

          {/* Right: paragraph */}
          <div className="flex flex-col justify-center lg:pt-3">
            <div className="intro-fade border-l-[3px] border-brand-blue pl-5 sm:pl-8">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 font-medium leading-relaxed">
                {INTRO_TEXT}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CARGOES WE HANDLE (dry bulk list)
      ======================================================== */}
      <section
        id="cargos-grid"
        className="relative z-20 w-full bg-brand-dark border-t border-white/10 py-16 sm:py-20 lg:py-32 px-5 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1800px]">
          {/* HEADER */}
          <div ref={headRef} className="mb-12 sm:mb-16">
            <div className="list-eyebrow flex items-center gap-4 mb-6">
              <span className="h-px w-10 sm:w-14 bg-brand-blue" />
              <span className="text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase">
                Dry Bulk Cargoes
              </span>
            </div>

            <h2 className="font-black tracking-normal uppercase leading-[1] text-[11vw] sm:text-6xl lg:text-[64px] xl:text-[80px]">
              <span className="block text-white">
                <SplitLetters text="Cargoes" letterClass="list-title-letter" mask />
              </span>
              <span className="block text-brand-blue">
                <SplitLetters text="We Handle" letterClass="list-title-letter" mask />
              </span>
            </h2>
          </div>

          {/* CARGO ROWS */}
          <div className="border-t border-white/15">
            {DRY_CARGOES.map((cargo, i) => (
              <div
                key={cargo.name}
                className="cargo-row-anim group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start border-b border-white/15 py-8 sm:py-10 lg:py-12 cursor-default"
              >
                {/* blue line that grows on hover */}
                <span className="pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-brand-blue transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />

                {/* Number + name */}
                <div className="lg:col-span-5 flex items-start gap-4 sm:gap-6">
                  <span className="w-8 sm:w-12 shrink-0 pt-1 sm:pt-2 text-sm sm:text-xl font-bold tracking-widest text-brand-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="min-w-0 break-words text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-[36px] xl:text-[44px] font-black uppercase leading-[1.05] tracking-normal text-white transition-colors duration-300 group-hover:text-brand-blue">
                    {cargo.name}
                  </h3>
                </div>

                {/* Description (aligned under the title on phone/tablet) */}
                <div className="lg:col-span-7 pl-12 sm:pl-[4.5rem] lg:pl-0">
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 font-medium leading-relaxed">
                    {cargo.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SUBMIT YOUR CARGO ENQUIRY
      ======================================================== */}
      <section className="relative w-full bg-brand-dark border-t border-white/10 py-16 sm:py-20 lg:py-32 px-5 sm:px-10 lg:px-16 overflow-hidden">
        <div className="mx-auto max-w-[1800px]">
          <div
            ref={enquiryRef}
            className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start"
          >
            {/* Center vertical divider (desktop only) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/15">
              <div className="enq-line-anim h-full w-full origin-top bg-brand-blue" />
            </div>

            {/* Left: title + intro + button */}
            <div className="flex flex-col items-start">
              <h2 className="font-black tracking-normal uppercase leading-[1] text-[11vw] sm:text-6xl lg:text-[44px] xl:text-[64px] mb-8 sm:mb-10">
                <span className="block text-white">
                  <SplitLetters text="Submit Your" letterClass="enq-title-letter" mask />
                </span>
                <span className="block text-brand-blue">
                  <SplitLetters text="Cargo Enquiry" letterClass="enq-title-letter" mask />
                </span>
              </h2>

              <div className="enq-fade border-l-[3px] border-brand-blue pl-5 sm:pl-8 mb-10 sm:mb-12">
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 font-medium leading-relaxed">
                  {ENQUIRY_INTRO}
                </p>
              </div>

              <PremiumButton
                href="/submit-cargo"
                label="Submit Cargo Enquiry"
                variant="dark"
                className="enq-fade"
              />
            </div>

            {/* Right: checklist */}
            <ul className="border-t border-white/15 lg:mt-3">
              {ENQUIRY_ITEMS.map((item) => (
                <li
                  key={item}
                  className="enq-row-anim group flex items-center gap-4 sm:gap-6 border-b border-white/15 py-5 sm:py-6 cursor-default"
                >
                  <span className="h-px w-6 sm:w-10 shrink-0 bg-brand-blue transition-all duration-500 group-hover:w-14 sm:group-hover:w-16" />
                  <span className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/85 font-medium leading-snug transition-colors duration-300 group-hover:text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CLOSING LINE */}
          <div
            ref={tagRef}
            className="mt-14 sm:mt-20 border-t border-white/15 pt-10 sm:pt-12 text-center"
          >
            <p className="tag-fade mx-auto max-w-5xl text-lg sm:text-2xl lg:text-3xl text-white/80 font-medium leading-relaxed">
              <span className="text-brand-blue font-bold">HAFSHIP</span> —
              Connecting Dry Bulk Cargo Requirements with Suitable Tonnage.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          TANKER CARGOES
      ======================================================== */}
      <section className="relative w-full bg-brand-dark border-t border-white/10 py-16 sm:py-20 lg:py-32 px-5 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1800px]">
          {/* HEADER */}
          <div
            ref={tankerHeadRef}
            className="mb-12 sm:mb-16 border-b border-white/15 pb-8 sm:pb-10"
          >
            <div className="tanker-eyebrow flex items-center gap-4 mb-6">
              <span className="h-px w-10 sm:w-14 bg-brand-blue" />
              <span className="text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase">
                Tanker Cargo Broking
              </span>
            </div>

            <h2 className="font-black tracking-normal uppercase leading-[1] text-[11vw] sm:text-6xl lg:text-[64px] xl:text-[80px]">
              <span className="block text-white">
                <SplitLetters text="Tanker" letterClass="tanker-title-letter" mask />
              </span>
              <span className="block text-brand-blue">
                <SplitLetters text="Cargoes" letterClass="tanker-title-letter" mask />
              </span>
            </h2>
          </div>

          {/* TILES */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 w-full">
            {TANKER_CARGOES.map((item) => (
              <div
                key={item}
                className="tanker-tile-anim group relative flex items-center justify-center overflow-hidden border border-white/15 bg-white/[0.04] px-3 py-8 sm:px-4 sm:py-12 lg:py-16 cursor-default last:col-span-2 sm:last:col-span-3 lg:last:col-span-2 transition-colors duration-500 hover:border-brand-blue"
              >
                {/* blue fill rising from the bottom on hover */}
                <span className="absolute inset-0 translate-y-full bg-brand-blue transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
                <span className="relative z-10 text-center text-base min-[400px]:text-lg sm:text-2xl lg:text-3xl font-black uppercase tracking-wide text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* NOTE */}
          <div ref={tankerNoteRef} className="mt-12 sm:mt-16">
            <div className="tanker-fade border-l-[3px] border-brand-blue pl-5 sm:pl-8">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 font-medium leading-relaxed">
                {TANKER_NOTE}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}