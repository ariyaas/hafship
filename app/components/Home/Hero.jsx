

// "use client";

// import { useRef, useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { americanCaptain, raleway, merriweather } from "@/app/fonts";

// gsap.registerPlugin(ScrollTrigger);

// export default function Hero() {
//   const containerRef = useRef(null);
//   const sceneRef = useRef(null);
//   const imageWrapperRef = useRef(null);
//   const contentRef = useRef(null);
//   const cursorBallRef = useRef(null);
//   const glareRef = useRef(null);
//   const statsRef = useRef(null);

//   useLayoutEffect(() => {
//     const container = containerRef.current;
//     const scene = sceneRef.current;
//     const imageWrapper = imageWrapperRef.current;
//     const content = contentRef.current;
//     const cursorBall = cursorBallRef.current;
//     const glare = glareRef.current;
//     const stats = statsRef.current;

//     if (!container || !scene || !imageWrapper || !content) return;

//     const isMobileOrTouch =
//       window.innerWidth < 768 ||
//       window.matchMedia("(pointer: coarse)").matches;

//     const ctx = gsap.context(() => {
//       // 1. Entrance Animation on Page Load
//       const enterTl = gsap.timeline({ defaults: { ease: "power3.out" } });

//       enterTl.from(content.children, {
//         y: 40,
//         opacity: 0,
//         filter: "blur(6px)",
//         stagger: 0.1,
//         duration: 1.1,
//       });

//       if (stats) {
//         enterTl.from(
//           stats.children,
//           {
//             y: 20,
//             opacity: 0,
//             stagger: 0.08,
//             duration: 0.8,
//           },
//           "-=0.5"
//         );
//       }

//       // 2. Scroll Animation
//       const scrollTl = gsap.timeline({
//         scrollTrigger: {
//           trigger: container,
//           start: "top top",
//           end: "bottom top",
//           scrub: 0.4,
//         },
//       });

//       scrollTl.to(
//         content,
//         {
//           yPercent: -20,
//           scale: 0.95,
//           opacity: 0.2,
//           filter: "blur(4px)",
//           ease: "none",
//         },
//         0
//       );

//       scrollTl.to(
//         imageWrapper,
//         {
//           scale: 1.05,
//           ease: "none",
//         },
//         0
//       );

//       if (stats) {
//         scrollTl.to(stats, { opacity: 0, y: -15, ease: "none" }, 0);
//       }

//       // 3. Desktop Interactive Cursor Ball & 3D Tilt
//       if (!isMobileOrTouch && cursorBall) {
//         const xToBall = gsap.quickTo(cursorBall, "x", {
//           duration: 0.2,
//           ease: "power2.out",
//         });
//         const yToBall = gsap.quickTo(cursorBall, "y", {
//           duration: 0.2,
//           ease: "power2.out",
//         });

//         const quickRotateX = gsap.quickTo(scene, "rotationX", {
//           duration: 0.8,
//           ease: "power2.out",
//         });
//         const quickRotateY = gsap.quickTo(scene, "rotationY", {
//           duration: 0.8,
//           ease: "power2.out",
//         });

//         const quickContentX = gsap.quickTo(content, "x", {
//           duration: 0.9,
//           ease: "power2.out",
//         });
//         const quickContentY = gsap.quickTo(content, "y", {
//           duration: 0.9,
//           ease: "power2.out",
//         });

//         const quickImageX = gsap.quickTo(imageWrapper, "x", {
//           duration: 1.1,
//           ease: "power2.out",
//         });
//         const quickImageY = gsap.quickTo(imageWrapper, "y", {
//           duration: 1.1,
//           ease: "power2.out",
//         });

//         const handleMouseMove = (e) => {
//           const rect = container.getBoundingClientRect();
//           const posX = e.clientX - rect.left;
//           const posY = e.clientY - rect.top;

//           xToBall(posX);
//           yToBall(posY);

//           const normX = posX / rect.width - 0.5;
//           const normY = posY / rect.height - 0.5;

//           quickRotateX(-normY * 10);
//           quickRotateY(normX * 12);

//           quickContentX(normX * 30);
//           quickContentY(normY * 30);

//           quickImageX(-normX * 16);
//           quickImageY(-normY * 10);

//           if (glare) {
//             gsap.to(glare, {
//               x: posX,
//               y: posY,
//               opacity: 0.2,
//               duration: 0.5,
//               ease: "power1.out",
//             });
//           }
//         };

//         const handleMouseEnter = () => {
//           gsap.to(cursorBall, { opacity: 1, scale: 1, duration: 0.3 });
//         };

//         const handleMouseLeave = () => {
//           gsap.to(cursorBall, { opacity: 0, scale: 0.5, duration: 0.3 });
//           quickRotateX(0);
//           quickRotateY(0);
//           quickContentX(0);
//           quickContentY(0);
//           quickImageX(0);
//           quickImageY(0);
//           if (glare) {
//             gsap.to(glare, { opacity: 0, duration: 0.8 });
//           }
//         };

//         const interactiveElements = container.querySelectorAll("a, button");
//         interactiveElements.forEach((el) => {
//           el.addEventListener("mouseenter", () => {
//             gsap.to(cursorBall, {
//               scale: 1.8,
//               backgroundColor: "#D4AF3733", // Brand Yellow 20% opacity for button hover
//               borderColor: "var(--color-brand-yellow)", 
//               duration: 0.25,
//             });
//           });
//           el.addEventListener("mouseleave", () => {
//             gsap.to(cursorBall, {
//               scale: 1,
//               backgroundColor: "#0e609c1A", // Brand Blue 10% opacity for default state
//               borderColor: "#0e609c99", // Brand Blue 60% opacity for default state
//               duration: 0.25,
//             });
//           });
//         });

//         container.addEventListener("mousemove", handleMouseMove);
//         container.addEventListener("mouseenter", handleMouseEnter);
//         container.addEventListener("mouseleave", handleMouseLeave);

//         return () => {
//           container.removeEventListener("mousemove", handleMouseMove);
//           container.removeEventListener("mouseenter", handleMouseEnter);
//           container.removeEventListener("mouseleave", handleMouseLeave);
//         };
//       }
//     }, container);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       style={{ perspective: "1200px" }}
//       className="sticky top-0 z-0 h-screen min-h-[700px] w-full overflow-hidden bg-brand-dark"
//     >
//       <div
//         ref={cursorBallRef}
//         className="pointer-events-none absolute left-0 top-0 z-50 hidden md:block h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-blue/60 bg-brand-blue/10 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 shadow-[0_0_15px] shadow-brand-blue/25"
//       />

//       <div
//         ref={sceneRef}
//         style={{ transformStyle: "preserve-3d" }}
//         className="relative h-full w-full will-change-transform"
//       >
//         {/* Background Image Layer */}
//         <div
//           ref={imageWrapperRef}
//           style={{
//             transform: "translateZ(-40px) scale(1.15)",
//             transformStyle: "preserve-3d",
//           }}
//           className="absolute -top-[8%] -left-[8%] h-[116%] w-[116%] will-change-transform"
//         >
//           <img
//             src="/images/chartering-hero.jpg"
//             alt="Dry Bulk Shipbroking"
//             className="h-full w-full object-cover select-none"
//           />

//           {/* Overlays */}
//           <div className="absolute inset-0 bg-black/40" />
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(3,24,46,0.3)_0%,rgba(3,24,46,0.85)_100%)]" />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-brand-dark" />
//         </div>

//         <div
//           ref={glareRef}
//           className="pointer-events-none absolute -left-48 -top-48 hidden md:block h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl opacity-0 transition-opacity duration-300"
//         />

//         {/* Hero Central Content */}
//         <div
//           ref={contentRef}
//           style={{
//             transform: "translateZ(70px)",
//             transformStyle: "preserve-3d",
//           }}
//           className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-brand-gray will-change-transform pt-20"
//         >
//           <div className="max-w-5xl">
//             <h1
//               className={`${americanCaptain.className} text-6xl leading-[0.9] tracking-wider sm:text-7xl md:text-8xl lg:text-[110px]  uppercase text-brand-gray`}
//             >
//               Dry Bulk Shipbroking
//               <br />
//               <span className="bg-gradient-to-r from-brand-gray to-brand-blue bg-clip-text text-transparent">
//                 & Chartering
//               </span>
//             </h1>

//             <p
//               className={`${merriweather.className} mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-brand-gray sm:text-lg drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]`}
//             >
//               Connecting Shipowners, Operators, Charterers & Cargo Interests Across Global Dry Bulk Markets.
//             </p>

//             {/* Vessel Segments List */}
//             <div className={`${merriweather.className} mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold tracking-widest text-brand-gray uppercase drop-shadow-md`}>
//               <span>Handysize</span>
//               <span className="h-1 w-1 rounded-full bg-brand-gray/50" />
//               <span>Handymax</span>
//               <span className="h-1 w-1 rounded-full bg-brand-gray/50" />
//               <span>Supramax</span>
//               <span className="h-1 w-1 rounded-full bg-brand-gray/50" />
//               <span>Ultramax</span>
//               <span className="h-1 w-1 rounded-full bg-brand-gray/50" />
//               <span>Panamax</span>
//             </div>

//             {/* Action Buttons */}
//             <div className={`${raleway.className} mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row`}>
//               <a
//                 href="/tonnage"
//                 className="group relative inline-flex items-center justify-center overflow-hidden rounded bg-brand-yellow px-8 py-4 text-xs font-bold tracking-widest text-brand-dark  transition-all duration-300 hover:scale-105 hover:bg-brand-gray uppercase"
//               >
//                 OPEN TONNAGE
//               </a>

//               <a
//                 href="#submit-cargo"
//                 className="inline-flex items-center justify-center rounded border border-brand-gray/30 bg-brand-gray/10 px-8 py-4 text-xs font-bold tracking-widest text-brand-gray backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-brand-yellow hover:bg-brand-gray hover:text-brand-dark uppercase"
//               >
//                 SUBMIT CARGO
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 md:hidden">
//           <div className="flex flex-col items-center gap-2 text-brand-gray/70">
//             <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
//             <div className="h-8 w-px bg-brand-blue animate-pulse" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { americanCaptain, raleway, playfair, lora, monaSans } from "@/app/fonts";
// import { useHeroAnimation } from "../hooks/useHeroAnimation";

// const vesselSizes = [
//   "HANDYSIZE",
//   "HANDYMAX",
//   "SUPRAMAX",
//   "ULTRAMAX",
//   "PANAMAX",
//   "CAPESIZE"
// ];

// export default function Hero() {
//   const containerRef = useRef(null);
//   const sceneRef = useRef(null);
//   const imageWrapperRef = useRef(null);
//   const contentRef = useRef(null);
//   const cursorBallRef = useRef(null);
//   const glareRef = useRef(null);

//   // Initialize high-performance GSAP animations from the custom hook
//   useHeroAnimation({
//     containerRef,
//     sceneRef,
//     imageWrapperRef,
//     contentRef,
//     cursorBallRef,
//     glareRef,
//   });

//   return (
//     <section
//       ref={containerRef}
//       style={{ perspective: "1200px" }}
//       className="sticky top-0 z-0 h-screen min-h-[700px] w-full overflow-hidden bg-brand-dark"
//     >
//       {/* Cursor Ball: White/glassmorphism */}
//       <div
//         ref={cursorBallRef}
//         className="pointer-events-none absolute left-0 top-0 z-50 hidden md:block h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 shadow-[0_0_15px] shadow-white/20"
//       />

//       <div
//         ref={sceneRef}
//         style={{ transformStyle: "preserve-3d" }}
//         className="relative h-full w-full will-change-transform"
//       >
//         {/* Background Image Layer */}
//         <div
//           ref={imageWrapperRef}
//           style={{
//             transform: "translateZ(-40px) scale(1.05)",
//             transformStyle: "preserve-3d",
//           }}
//           className="absolute -top-[5%] -left-[5%] h-[110%] w-[110%] will-change-transform" 
//         >
//           {/* PERFORMANCE UPDATE: Using Next/Image for optimized loading */}
//           <Image
//             src="/images/neeew.png"
//             alt="Hafship Brokering"
//             fill
//             sizes="100vw"
//             priority
//             className="object-cover select-none"
//           />
//         </div>

//         <div
//           ref={glareRef}
//           className="pointer-events-none absolute -left-48 -top-48 hidden md:block h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl opacity-0 transition-opacity duration-300"
//         />

//         {/* Hero Central Content */}
//         <div
//           ref={contentRef}
//           style={{
//             transform: "translateZ(70px)",
//             transformStyle: "preserve-3d",
//           }}
//           className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white will-change-transform pb-24"
//         >
//           <div className="max-w-[1400px] flex flex-col items-center w-full">
            
//             {/* Title: Separated spans to accurately control independent sizes */}
//             <h1 className={`${monaSans.className} font-black tracking-normal uppercase`}>
//               <span className="block text-[12vw] sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[110px] leading-[0.9] text-brand-blue drop-shadow-sm mb-1 sm:mb-2">
//                 HAFSHIP
//               </span>
//               {/* Reduced size for "Connecting Land & Sea" */}
//               <span className="block text-[5vw] sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[50px] leading-[1] text-brand-gray drop-shadow-md">
//                 CONNECTING LAND & SEA
//               </span>
//             </h1>

//             {/* =========================================================
//                 PREMIUM RUNNING MARQUEE (Vessel Sizes)
//             ========================================================= */}
//             <div 
//               // Increased max-width to allow larger text to flow cleanly
//               className="mt-10 sm:mt-14 w-full max-w-[90%] sm:max-w-[700px] lg:max-w-[1000px] overflow-hidden relative"
//               style={{ 
//                 WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', 
//                 maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
//               }}
//             >
//               <style dangerouslySetInnerHTML={{__html: `
//                 @keyframes heroMarquee {
//                   0% { transform: translateX(0); }
//                   100% { transform: translateX(-50%); }
//                 }
//                 .hero-running-track {
//                   display: flex;
//                   width: max-content;
//                   /* Slightly slower animation duration (30s) to balance the larger text */
//                   animation: heroMarquee 30s linear infinite;
//                 }
//               `}} />

//               <div className="hero-running-track items-center">
//                 {/* Array duplicated to ensure seamless infinite looping */}
//                 {[...vesselSizes, ...vesselSizes, ...vesselSizes, ...vesselSizes].map((vessel, index) => (
//                   <div key={index} className="flex items-center shrink-0">
//                     {/* Increased vessel font size to text-sm/lg/xl and increased padding */}
//                     <span className={`${raleway.className} text-sm sm:text-lg lg:text-2xl font-bold tracking-[0.25em] text-brand-blue uppercase px-6 sm:px-10 `}>
//                       {vessel}
//                     </span>
//                     {/* Increased dot size */}
//                     <span className="text-brand-blue/80 text-xl lg:text-2xl leading-none shrink-0">•</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Mobile Scroll Indicator: White line */}
//         <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 md:hidden">
//           <div className="flex flex-col items-center gap-2 text-white/70">
//             <span className={`${raleway.className} text-[10px] uppercase tracking-[0.3em] font-bold`}>Scroll</span>
//             <div className="h-8 w-px bg-white/50 animate-pulse" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { americanCaptain, raleway, playfair, lora, monaSans } from "@/app/fonts";
// import { useHeroAnimation } from "../hooks/useHeroAnimation";

// const vesselSizes = [
//   "HANDYSIZE",
//   "HANDYMAX",
//   "SUPRAMAX",
//   "ULTRAMAX",
//   "PANAMAX",
//   "CAPESIZE"
// ];

// export default function Hero() {
//   const containerRef = useRef(null);
//   const sceneRef = useRef(null);
//   const imageWrapperRef = useRef(null);
//   const contentRef = useRef(null);
//   const cursorBallRef = useRef(null);
//   const glareRef = useRef(null);

//   // Initialize high-performance GSAP animations from the custom hook
//   useHeroAnimation({
//     containerRef,
//     sceneRef,
//     imageWrapperRef,
//     contentRef,
//     cursorBallRef,
//     glareRef,
//   });

//   return (
//     <section
//       ref={containerRef}
//       style={{ perspective: "1200px" }}
//       className="sticky top-0 z-0 h-screen min-h-[700px] w-full overflow-hidden bg-brand-dark"
//     >
//       {/* Cursor Ball: White/glassmorphism */}
//       <div
//         ref={cursorBallRef}
//         className="pointer-events-none absolute left-0 top-0 z-50 hidden md:block h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 shadow-[0_0_15px] shadow-white/20"
//       />

//       <div
//         ref={sceneRef}
//         style={{ transformStyle: "preserve-3d" }}
//         className="relative h-full w-full will-change-transform"
//       >
//         {/* Background Image Layer */}
//         <div
//           ref={imageWrapperRef}
//           style={{
//             transform: "translateZ(-40px) scale(1.05)",
//             transformStyle: "preserve-3d",
//           }}
//           className="absolute -top-[5%] -left-[5%] h-[110%] w-[110%] will-change-transform"
//         >
//           <Image
//             src="/images/neeew.png"
//             alt="Hafship Brokering"
//             fill
//             sizes="100vw"
//             priority
//             className="object-cover select-none"
//           />
//         </div>

//         <div
//           ref={glareRef}
//           className="pointer-events-none absolute -left-48 -top-48 hidden md:block h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl opacity-0 transition-opacity duration-300"
//         />

//         {/* Hero Central Content */}
//         <div
//           ref={contentRef}
//           style={{
//             transform: "translateZ(70px)",
//             transformStyle: "preserve-3d",
//           }}
//           className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white will-change-transform pb-24"
//         >
//           <div className="max-w-[1400px] flex flex-col items-center w-full">

//             {/* Title */}
//             <h1 className={`${monaSans.className} font-black tracking-normal uppercase`}>
//               <span className="block text-[16vw] sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[110px] leading-[0.9] text-brand-blue drop-shadow-sm mb-1 sm:mb-2">
//                 HAFSHIP
//               </span>
//               <span className="block text-[8vw] sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[50px] leading-[1] text-brand-gray drop-shadow-md">
//                 CONNECTING LAND & SEA
//               </span>
//             </h1>

//             {/* =========================================================
//                 RUNNING PILL BUTTONS (Vessel Sizes) - 70% WIDTH, CENTERED
//             ========================================================= */}
//             <div
//               className="mt-10 sm:mt-14 w-[70vw] mx-auto overflow-hidden"
//               style={{
//                 WebkitMaskImage:
//                   "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
//                 maskImage:
//                   "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
//               }}
//             >
//               <style
//                 dangerouslySetInnerHTML={{
//                   __html: `
//                 @keyframes heroMarquee {
//                   0% { transform: translateX(0); }
//                   100% { transform: translateX(-50%); }
//                 }
//                 .hero-running-track {
//                   display: flex;
//                   width: max-content;
//                   animation: heroMarquee 35s linear infinite;
//                 }
//                 .hero-running-track:hover {
//                   animation-play-state: paused;
//                 }
//               `,
//                 }}
//               />

//               <div className="hero-running-track items-center">
//                 {/* Array duplicated so the loop is seamless */}
//                 {[...vesselSizes, ...vesselSizes, ...vesselSizes, ...vesselSizes].map(
//                   (vessel, index) => (
//                     <div key={index} className="shrink-0 pr-3 sm:pr-4">
//                       <span
//                         className={`${monaSans.className} inline-flex items-center justify-center rounded-full border border-brand-gray/30 bg-brand-dark px-5 py-2 sm:px-7 sm:py-2.5 text-xs sm:text-sm lg:text-base font-bold tracking-[0.2em] text-brand-gray uppercase transition-colors duration-300 hover:border-brand-gray hover:text-white cursor-default`}
//                       >
//                         {vessel}
//                       </span>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Scroll Indicator: White line */}
//         <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 md:hidden">
//           <div className="flex flex-col items-center gap-2 text-white/70">
//             <span
//               className={`${raleway.className} text-[10px] uppercase tracking-[0.3em] font-bold`}
//             >
//               Scroll
//             </span>
//             <div className="h-8 w-px bg-white/50 animate-pulse" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef, useState, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { americanCaptain, raleway, playfair, lora, monaSans } from "@/app/fonts";
import { useHeroAnimation } from "../hooks/useHeroAnimation";
import { SplitLetters, LETTER_RISE } from "@/app/components/ui/PremiumUI";

// Headline lines (each on its own line)
const HEADLINE = [
  { text: "Global Markets.", color: "text-white" },
  { text: "Strategic Connections.", color: "text-brand-blue" },
  { text: "Reliable Tonnage.", color: "text-white" },
];

const VESSEL_SIZES = [
  "HANDYSIZE",
  "HANDYMAX",
  "SUPRAMAX",
  "ULTRAMAX",
  "PANAMAX",
  "CAPESIZE",
];

// Dividers: 3x2 grid on phones, 1 row of 6 from tablet up
const CELL_BORDERS = [
  "border-r border-b sm:border-b-0",
  "border-r border-b sm:border-b-0",
  "border-b sm:border-b-0 sm:border-r",
  "border-r",
  "border-r",
  "",
];

// Video speed: 1 = normal, 0.6 = slow and calm, 0.4 = very slow
const VIDEO_SPEED = 0.6;

export default function Hero() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const contentRef = useRef(null);
  const cursorBallRef = useRef(null);
  const glareRef = useRef(null);
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  // Initialize high-performance GSAP animations from the custom hook
  useHeroAnimation({
    containerRef,
    sceneRef,
    imageWrapperRef,
    contentRef,
    cursorBallRef,
    glareRef,
  });

  // Start the video slowly (and show it if it was already loaded before hydration)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.defaultPlaybackRate = VIDEO_SPEED;
    video.playbackRate = VIDEO_SPEED;
    if (video.readyState >= 3) setVideoReady(true);
    const playPromise = video.play();
    if (playPromise !== undefined) playPromise.catch(() => {});
  }, []);

  // Intro animation: headline letters rise, bar slides up, top lines draw in
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 0.5 })
        .fromTo(".hero-h-letter", LETTER_RISE.from, {
          ...LETTER_RISE.to,
          stagger: 0.03,
        })
        .fromTo(
          ".hero-bar",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ".hero-size-bar",
          { scaleX: 0 },
          { scaleX: 1, duration: 1.2, ease: "power4.out", stagger: 0.12 },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{ perspective: "1200px" }}
      className="sticky top-0 z-0 h-screen min-h-[700px] w-full overflow-hidden bg-brand-dark"
    >
      {/* =========================================================
          BACKGROUND (fixed layer: does NOT move with the mouse)
      ========================================================= */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Fallback image: shows first, and stays for "reduce motion" users */}
        {/* <Image
          src="/images/neeew.png"
          alt="Hafship Brokering"
          fill
          sizes="100vw"
          priority
          className="object-cover select-none"
        /> */}

        {/* Hero video: fades in slowly, plays in slow motion */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-poster.jpg"
          onLoadedMetadata={(e) => {
            e.currentTarget.playbackRate = VIDEO_SPEED;
          }}
          onLoadedData={() => setVideoReady(true)}
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover select-none pointer-events-none motion-reduce:hidden transition-opacity duration-[2500ms] ease-out ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>

        {/* Light brand-dark overlay + soft fades (top for navbar, bottom into next section) */}
        <div className="pointer-events-none absolute inset-0 bg-brand-dark/30" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-dark/50 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
      </div>

      {/* Cursor Ball: White/glassmorphism */}
      <div
        ref={cursorBallRef}
        className="pointer-events-none absolute left-0 top-0 z-50 hidden md:block h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 shadow-[0_0_15px] shadow-white/20"
      />

      <div
        ref={sceneRef}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full will-change-transform"
      >
        {/* Kept empty so your animation hook still finds it (the video no longer lives here) */}
        <div
          ref={imageWrapperRef}
          style={{
            transform: "translateZ(-40px) scale(1.05)",
            transformStyle: "preserve-3d",
          }}
          className="pointer-events-none absolute -top-[5%] -left-[5%] h-[110%] w-[110%] will-change-transform"
        />

        {/* Mouse glow turned off so nothing moves over the video */}
        <div
          ref={glareRef}
          className="pointer-events-none hidden absolute -left-48 -top-48 h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl opacity-0"
        />

        {/* =========================================================
            HERO CONTENT: headline only
        ========================================================= */}
        <div
          ref={contentRef}
          style={{
            transform: "translateZ(70px)",
            transformStyle: "preserve-3d",
          }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-5 sm:px-8 pt-20 pb-40 sm:pb-36 lg:pb-32 text-center text-white will-change-transform"
        >
          <div className="max-w-[1500px] flex flex-col items-center w-full">
            <h1
              className={`${monaSans.className} font-black tracking-normal uppercase leading-[1.05] text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] drop-shadow-[0_4px_30px_rgba(3,24,46,0.7)]`}
            >
              {HEADLINE.map((line) => (
                <span key={line.text} className={`block ${line.color}`}>
                  <SplitLetters text={line.text} letterClass="hero-h-letter" mask />
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>

      {/* =========================================================
          VESSEL SIZES BAR (static glass bar, does not tilt with the mouse)
      ========================================================= */}
      <div className="hero-bar absolute inset-x-5 bottom-6 sm:inset-x-10 sm:bottom-10 lg:inset-x-16 z-20 mx-auto max-w-[1800px]">
        <div className="relative overflow-hidden border border-white/15 bg-brand-dark/55 backdrop-blur-md">
          <div className="grid grid-cols-3 sm:grid-cols-6">
            {VESSEL_SIZES.map((size, i) => (
              <div
                key={size}
                className={`group relative flex items-center justify-center overflow-hidden border-white/15 px-2 py-4 sm:px-3 sm:py-5 lg:py-6 cursor-default ${CELL_BORDERS[i]}`}
              >
                {/* top line: same thickness on every cell */}
                <span className="hero-size-bar absolute left-0 top-0 h-[2px] w-full origin-left bg-brand-blue" />

                {/* blue fill rising from the bottom on hover */}
                <span className="absolute inset-0 translate-y-full bg-brand-blue transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />

                <span
                  className={`${monaSans.className} relative z-10 text-center text-[11px] min-[400px]:text-xs md:text-sm lg:text-base font-bold uppercase tracking-[0.12em] sm:tracking-[0.15em] lg:tracking-[0.2em] text-white`}
                >
                  {size}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}