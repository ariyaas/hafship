

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

"use client";

import { useRef } from "react";
import Image from "next/image";
import { americanCaptain, raleway, merriweather } from "@/app/fonts";
import { useHeroAnimation } from "../hooks/useHeroAnimation";

export default function Hero() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const contentRef = useRef(null);
  const cursorBallRef = useRef(null);
  const glareRef = useRef(null);

  // Initialize high-performance GSAP animations from the custom hook
  useHeroAnimation({
    containerRef,
    sceneRef,
    imageWrapperRef,
    contentRef,
    cursorBallRef,
    glareRef,
  });

  return (
    <section
      ref={containerRef}
      style={{ perspective: "1200px" }}
      className="sticky top-0 z-0 h-screen min-h-[700px] w-full overflow-hidden bg-brand-dark"
    >
      <div
        ref={cursorBallRef}
        className="pointer-events-none absolute left-0 top-0 z-50 hidden md:block h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-yellow/60 bg-brand-yellow/10 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 shadow-[0_0_15px] shadow-brand-yellow/25"
      />

      <div
        ref={sceneRef}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full will-change-transform"
      >
        {/* Background Image Layer */}
        <div
          ref={imageWrapperRef}
          style={{
            transform: "translateZ(-40px) scale(1.15)",
            transformStyle: "preserve-3d",
          }}
          className="absolute -top-[8%] -left-[8%] h-[116%] w-[116%] will-change-transform"
        >
          {/* PERFORMANCE UPDATE: Using Next/Image for optimized loading */}
          <Image
            src="/images/chartering-hero.jpg"
            alt="Dry Bulk Shipbroking"
            fill
            sizes="100vw"
            priority
            className="object-cover select-none"
          />

          {/* Overlays - Darkened slightly to guarantee crisp white text contrast */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,96,156,0.2)_0%,rgba(3,24,46,0.85)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-brand-dark/90" />
        </div>

        <div
          ref={glareRef}
          className="pointer-events-none absolute -left-48 -top-48 hidden md:block h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl opacity-0 transition-opacity duration-300"
        />

        {/* Hero Central Content */}
        <div
          ref={contentRef}
          style={{
            transform: "translateZ(70px)",
            transformStyle: "preserve-3d",
          }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white will-change-transform pt-20"
        >
          <div className="max-w-5xl">
            {/* Title: Pure white base with a striking Brand Yellow highlight for contrast */}
            <h1
              className={`${americanCaptain.className} text-6xl leading-[0.9] tracking-wider sm:text-7xl md:text-8xl lg:text-[110px] uppercase text-white drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]`}
            >
              Dry Bulk Shipbroking
              <br />
              <span className="text-brand-blue bg-gradient-to-r from-brand-gray to-brand-blue bg-clip-text text-transparent">
                & Chartering
              </span>
            </h1>

            {/* Subtitle: Pure white with strong drop shadow */}
            <p
              className={`${merriweather.className} mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-white sm:text-lg drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]`}
            >
              Connecting Shipowners, Operators, Charterers & Cargo Interests Across Global Dry Bulk Markets.
            </p>

            {/* Vessel Segments List: Pure white */}
            <div className={`${merriweather.className} mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold tracking-widest text-white uppercase drop-shadow-md`}>
              <span>Handysize</span>
              <span className="h-1 w-1 rounded-full bg-white/60" />
              <span>Handymax</span>
              <span className="h-1 w-1 rounded-full bg-white/60" />
              <span>Supramax</span>
              <span className="h-1 w-1 rounded-full bg-white/60" />
              <span>Ultramax</span>
              <span className="h-1 w-1 rounded-full bg-white/60" />
              <span>Panamax</span>
            </div>

            {/* Action Buttons */}
            <div className={`${raleway.className} mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row`}>
              <a
                href="/tonnage"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded bg-brand-yellow px-8 py-4 text-xs font-bold tracking-widest text-brand-dark transition-all duration-300 hover:scale-105 hover:bg-white uppercase "
              >
                OPEN TONNAGE
              </a>

              <a
                href="#submit-cargo"
                className="inline-flex items-center justify-center rounded border border-white/40 bg-white/10 px-8 py-4 text-xs font-bold tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-brand-yellow hover:bg-white hover:text-brand-dark uppercase"
              >
                SUBMIT CARGO
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 md:hidden">
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <div className="h-8 w-px bg-brand-yellow animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}