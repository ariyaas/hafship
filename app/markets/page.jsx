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

// const MARKETS_DATA = [
//   {
//     id: "01",
//     region: "India & Subcontinent",
//     routes: "WCI | ECI | Bangladesh | Sri Lanka",
//     desc: "Supporting regional and international dry bulk movements across the Indian Subcontinent.",
//   },
//   {
//     id: "02",
//     region: "Middle East",
//     routes: "Arabian Gulf | Red Sea | Middle East–Asia",
//     desc: "Connecting regional cargo flows with suitable vessel positions and international tonnage.",
//   },
//   {
//     id: "03",
//     region: "Asia-Pacific",
//     routes: "Southeast Asia | Indonesia | Philippines | China | Japan | South Korea",
//     desc: "Covering key intra-Asia and long-haul dry bulk trading routes.",
//   },
//   {
//     id: "04",
//     region: "Atlantic",
//     routes: "Europe | Mediterranean | Black Sea | US Gulf",
//     desc: "Connecting cargo interests and tonnage across major Atlantic markets.",
//   },
//   {
//     id: "05",
//     region: "South America",
//     routes: "Brazil | Argentina | East Coast South America",
//     desc: "Supporting major dry bulk export trades and international vessel requirements.",
//   },
// ];

// const HERO_TEXT =
//   "Connecting Shipowners, Operators, Charterers and Traders across key international dry bulk markets.";

// const INTRO_STATEMENT =
//   "HAFSHIP covers major trading regions, supporting cargo & tonnage matching, voyage and time chartering, freight negotiations and fixture opportunities.";

// export default function MarketsPage() {
//   const containerRef = useRef(null);
//   const heroRef = useRef(null);
//   const heroImageRef = useRef(null);
//   const introRef = useRef(null);
//   const headRef = useRef(null);
//   const listRef = useRef(null);
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
//           { ...LETTER_FADE.to, stagger: 0.01 },
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

//       // 3. INTRO: statement letters, then paragraph
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
//           { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
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

//       // 4. LIST header: eyebrow + title letters
//       gsap
//         .timeline({
//           scrollTrigger: { trigger: headRef.current, start: "top 85%" },
//         })
//         .fromTo(
//           ".list-eyebrow",
//           { y: 20, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
//         )
//         .fromTo(".list-title-letter", LETTER_RISE.from, LETTER_RISE.to, "-=0.4");

//       // 5. MARKET rows: each reveals when it scrolls into view
//       gsap.set(".market-row-anim", { opacity: 0, y: 40 });
//       ScrollTrigger.batch(".market-row-anim", {
//         start: "top 90%",
//         once: true,
//         onEnter: (batch) =>
//           gsap.to(batch, {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             ease: "power3.out",
//             stagger: 0.1,
//             clearProps: "transform",
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
//           scrollTrigger: { trigger: tagRef.current, start: "top 92%" },
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
//             src="/images/ch2.jpeg"
//             alt="Global Dry Bulk Markets"
//             fill
//             sizes="100vw"
//             priority
//             className="object-cover"
//           />
//         </div>

//         <div className="absolute inset-0 bg-brand-dark/20" />
//         <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />

//         <div className="relative z-10 mx-auto max-w-[1400px] flex flex-col items-center text-center">
//           <p className="hero-eyebrow text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase mb-6 sm:mb-8">
//             Global Reach
//           </p>

//           <h1 className="font-black tracking-normal uppercase leading-[0.95] mb-8 sm:mb-10 text-[14vw] sm:text-7xl lg:text-[100px] xl:text-[120px]">
//             <span className="block text-white">
//               <SplitLetters text="Our" letterClass="hero-title-letter" mask />
//             </span>
//             <span className="block text-brand-blue">
//               <SplitLetters text="Markets" letterClass="hero-title-letter" mask />
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

//           {/* Right: paragraph */}
//           <div className="flex flex-col justify-center lg:pt-3">
//             <div className="intro-fade border-l-[3px] border-brand-blue pl-5 sm:pl-8">
//               <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 font-medium leading-relaxed">
//                 We connect owners, operators, charterers and traders across
//                 established and emerging dry bulk markets. Our market network
//                 enables us to identify vessel and cargo opportunities across
//                 international trading routes while maintaining a practical
//                 understanding of tonnage positioning, cargo requirements,
//                 loading/discharging capabilities and market conditions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ========================================================
//           TRADING REGIONS
//       ======================================================== */}
//       <section
//         id="markets-grid"
//         className="relative z-20 w-full bg-brand-dark border-t border-white/10 py-16 sm:py-20 lg:py-32 px-5 sm:px-10 lg:px-16"
//       >
//         <div className="mx-auto max-w-[1800px]">
//           {/* HEADER */}
//           <div ref={headRef} className="mb-12 sm:mb-16">
//             <div className="list-eyebrow flex items-center gap-4 mb-6">
//               <span className="h-px w-10 sm:w-14 bg-brand-blue" />
//               <span className="text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase">
//                 Global Routes
//               </span>
//             </div>

//             <h2 className="font-black tracking-normal uppercase leading-[1] text-[11vw] sm:text-6xl lg:text-[64px] xl:text-[80px]">
//               <span className="block text-white">
//                 <SplitLetters text="Trading" letterClass="list-title-letter" mask />
//               </span>
//               <span className="block text-brand-blue">
//                 <SplitLetters text="Regions" letterClass="list-title-letter" mask />
//               </span>
//             </h2>
//           </div>

//           {/* REGION ROWS */}
//           <div ref={listRef} className="border-t border-white/15">
//             {MARKETS_DATA.map((market) => (
//               <div
//                 key={market.id}
//                 className="market-row-anim group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start border-b border-white/15 py-8 sm:py-10 lg:py-12 cursor-default"
//               >
//                 {/* blue line that grows on hover */}
//                 <span className="pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-brand-blue transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />

//                 {/* Number + region */}
//                 <div className="lg:col-span-5 flex items-start gap-4 sm:gap-6">
//                   <span className="w-8 sm:w-12 shrink-0 pt-1 sm:pt-2 text-sm sm:text-xl font-bold tracking-widest text-brand-blue">
//                     {market.id}
//                   </span>
//                   <h3 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-[40px] xl:text-5xl font-black uppercase leading-[1.05] tracking-normal text-white transition-colors duration-300 group-hover:text-brand-blue">
//                     {market.region}
//                   </h3>
//                 </div>

//                 {/* Routes + description (aligned under the title on phone/tablet) */}
//                 <div className="lg:col-span-7 pl-12 sm:pl-[4.5rem] lg:pl-0">
//                   <p className="text-sm sm:text-base lg:text-lg font-bold tracking-[0.15em] uppercase text-brand-blue mb-3 sm:mb-4">
//                     {market.routes}
//                   </p>
//                   <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 font-medium leading-relaxed">
//                     {market.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* BOTTOM TAGLINE */}
//           <div
//             ref={tagRef}
//             className="mt-14 sm:mt-20 text-center"
//           >
//             <p className="tag-fade text-sm sm:text-lg lg:text-2xl font-bold tracking-[0.2em] text-brand-blue uppercase leading-relaxed">
//               Global Markets <span className="text-white/40 mx-2 sm:mx-3">•</span> Local Knowledge{" "}
//               <span className="text-white/40 mx-2 sm:mx-3">•</span> Commercial Connections
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
const MARKETS_DATA = [
  {
    id: "01",
    region: "India & Indian Subcontinent",
    routes: "West Coast India | East Coast India | Bangladesh | Sri Lanka | Pakistan",
    desc: "Supporting regional cargo movements, export and import requirements, and connections with international vessel availability.",
  },
  {
    id: "02",
    region: "Middle East & Arabian Gulf",
    routes: "Arabian Gulf | Gulf of Oman | Red Sea | Middle East–Asia",
    desc: "Facilitating regional and international cargo opportunities across important Middle Eastern shipping routes.",
  },
  {
    id: "03",
    region: "Asia-Pacific",
    routes: "Southeast Asia | Indonesia | Philippines | China | Japan | South Korea",
    desc: "Connecting intra-Asian cargo movements and longer-haul trades involving major commodity importers and exporters.",
  },
  {
    id: "04",
    region: "Europe & Mediterranean",
    routes: "Northern Europe | Mediterranean | Black Sea",
    desc: "Supporting suitable dry bulk and tanker opportunities across regional and international trading routes.",
  },
  {
    id: "05",
    region: "Atlantic Markets",
    routes: "US Gulf | Atlantic Europe | East Coast South America",
    desc: "Connecting cargo interests and vessel positions across selected Atlantic trading routes.",
  },
  {
    id: "06",
    region: "South America",
    routes: "Brazil | Argentina | East Coast South America",
    desc: "Facilitating potential export cargo opportunities and international vessel employment requirements.",
  },
  {
    id: "07",
    region: "African Markets",
    routes: "East Africa | West Africa | Southern Africa",
    desc: "Exploring regional and international cargo movements involving suitable vessel availability, port requirements and trading patterns.",
  },
];

const HERO_TEXT =
  "HAFSHIP seeks to facilitate dry bulk and tanker broking opportunities across major international shipping regions, connecting cargo requirements with vessel positions according to market conditions and commercial suitability.";

const INTRO_STATEMENT = "Global Reach. Regional Understanding.";

const FOCUS_TEXT =
  "Our geographical coverage is guided by cargo demand, vessel positioning, trading opportunities and established commercial connections. Specific trades are considered individually according to market availability and the requirements of each enquiry.";

const CLOSING_LINE =
  "Across Dry Bulk & Tanker Markets — Connecting Cargo, Tonnage and Opportunity.";

export default function MarketsPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);
  const introRef = useRef(null);
  const listRef = useRef(null);
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

      // 3. INTRO: statement letters, then the focus paragraph
      gsap
        .timeline({
          scrollTrigger: { trigger: introRef.current, start: "top 80%" },
        })
        .fromTo(".intro-letter", LETTER_FADE.from, {
          ...LETTER_FADE.to,
          stagger: 0.02,
        })
        .fromTo(
          ".intro-fade",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          "-=0.6"
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

      // 4. MARKET rows: each reveals when it scrolls into view
      gsap.set(".market-row-anim", { opacity: 0, y: 40 });
      ScrollTrigger.batch(".market-row-anim", {
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

      // 5. CLOSING BAND: sentence letters, then button
      gsap
        .timeline({
          scrollTrigger: { trigger: ctaRef.current, start: "top 80%" },
        })
        .fromTo(".cta-title-letter", LETTER_RISE.from, {
          ...LETTER_RISE.to,
          stagger: 0.015,
        })
        .fromTo(
          ".cta-fade",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6"
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
            src="/images/ch2.jpeg"
            alt="Global Dry Bulk Markets"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-brand-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1400px] flex flex-col items-center text-center">
          <p className="hero-eyebrow text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase mb-6 sm:mb-8">
            Markets
          </p>

          <h1 className="font-black tracking-normal uppercase leading-[0.95] mb-8 sm:mb-10 text-[14vw] sm:text-7xl lg:text-[100px] xl:text-[120px]">
            <span className="block text-white">
              <SplitLetters text="Our" letterClass="hero-title-letter" mask />
            </span>
            <span className="block text-brand-blue">
              <SplitLetters text="Markets" letterClass="hero-title-letter" mask />
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
            <h3 className="text-3xl sm:text-5xl lg:text-[44px] xl:text-6xl text-white font-bold leading-snug tracking-normal">
              <SplitLetters text={INTRO_STATEMENT} letterClass="intro-letter" />
            </h3>
          </div>

          {/* Right: Our Market Focus */}
          <div className="flex flex-col justify-center lg:pt-3">
            <div className="intro-fade border-l-[3px] border-brand-blue pl-5 sm:pl-8">
              <p className="text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase mb-4">
                Our Market Focus
              </p>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 font-medium leading-relaxed">
                {FOCUS_TEXT}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          REGIONS
      ======================================================== */}
      <section
        id="markets-grid"
        className="relative z-20 w-full bg-brand-dark border-t border-white/10 py-16 sm:py-20 lg:py-32 px-5 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1800px]">
          <div ref={listRef} className="border-t border-white/15">
            {MARKETS_DATA.map((market) => (
              <div
                key={market.id}
                className="market-row-anim group relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start border-b border-white/15 py-8 sm:py-10 lg:py-12 cursor-default"
              >
                {/* blue line that grows on hover */}
                <span className="pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-brand-blue transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />

                {/* Number + region */}
                <div className="lg:col-span-5 flex items-start gap-4 sm:gap-6">
                  <span className="w-8 sm:w-12 shrink-0 pt-1 sm:pt-2 text-sm sm:text-xl font-bold tracking-widest text-brand-blue">
                    {market.id}
                  </span>
                  <h3 className="text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-[40px] xl:text-5xl font-black uppercase leading-[1.05] tracking-normal text-white transition-colors duration-300 group-hover:text-brand-blue">
                    {market.region}
                  </h3>
                </div>

                {/* Routes + description (aligned under the title on phone/tablet) */}
                <div className="lg:col-span-7 pl-12 sm:pl-[4.5rem] lg:pl-0">
                  <p className="text-sm sm:text-base lg:text-lg font-bold tracking-[0.15em] uppercase text-brand-blue mb-3 sm:mb-4">
                    {market.routes}
                  </p>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 font-medium leading-relaxed">
                    {market.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CLOSING LINE + BUTTON
      ======================================================== */}
      <section
        ref={ctaRef}
        className="w-full bg-brand-blue py-16 sm:py-20 lg:py-28 px-5 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1800px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16">
          <h2 className="flex-1 max-w-5xl font-black tracking-normal uppercase leading-[1.05] text-white text-[6.5vw] min-[400px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
            <SplitLetters text={CLOSING_LINE} letterClass="cta-title-letter" mask />
          </h2>

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