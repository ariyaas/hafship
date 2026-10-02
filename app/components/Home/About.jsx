



// "use client";

// import { useRef, useLayoutEffect } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { americanCaptain, raleway, lora, playfair, merriweather } from "@/app/fonts";

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
//       // 1. Marquee horizontal slide-in on scroll
//       if (marquee) {
//         gsap.fromTo(
//           marquee,
//           { opacity: 0 },
//           {
//             opacity: 1,
//             duration: 1.5,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: container,
//               start: "top 90%",
//             },
//           }
//         );
//       }

//       // 2. Massive Typography Reveal Animation
//       if (bigTextLines) {
//         gsap.fromTo(
//           bigTextLines,
//           { y: "120%", rotation: 5 },
//           {
//             y: "0%",
//             rotation: 0,
//             stagger: 0.15,
//             duration: 1.2,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: bigTextRef.current,
//               start: "top 80%",
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

//   const vesselSizes = [
//     "HANDYSIZE",
//     "HANDYMAX",
//     "SUPRAMAX",
//     "ULTRAMAX",
//     "PANAMAX",
//     "CAPESIZE"
//   ];

//   return (
//     <section
//       ref={containerRef}
//       id="about"
//       className="relative z-20 w-full bg-white pb-16 lg:pb-24 overflow-hidden shadow-[0_-25px_60px_rgba(0,0,0,0.1)]"
//     >
//       {/* =========================================================================
//           TOP SECTION: RUNNING MARQUEE (VESSEL SIZES)
//       ========================================================================= */}
//       <div ref={marqueeRef} className="w-full overflow-hidden select-none bg-brand-dark py-4 lg:py-5 mb-16 lg:mb-24 shadow-md">
//         <style dangerouslySetInnerHTML={{__html: `
//           @keyframes marqueeRightToLeft {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .running-track-fast {
//             display: flex;
//             width: max-content;
//             animation: marqueeRightToLeft 25s linear infinite;
//           }
//         `}} />

//         <div className="running-track-fast items-center">
//           {[...vesselSizes, ...vesselSizes, ...vesselSizes, ...vesselSizes].map((vessel, index) => (
//             <div key={index} className="flex items-center shrink-0">
//               <span className={`${raleway.className} text-white text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-widest px-8 sm:px-12 cursor-default`}>
//                 {vessel}
//               </span>
//               <span className="text-brand-blue text-xl sm:text-2xl shrink-0">•</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* =========================================================================
//           MASSIVE BRANDING PRINCIPLE
//       ========================================================================= */}
//       <div className="w-[95%] max-w-[1800px] mx-auto mb-16 lg:mb-24 pl-2 sm:pl-6">
        
//         {/* Subheading tag */}
//         <div className={`${playfair.className} overflow-hidden mb-6 flex items-center gap-3`}>
//           <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
//           <span className="text-brand-dark font-bold text-xs sm:text-sm tracking-[0.3em] uppercase">
//            HAFSHIP Shipbroking
//           </span>
//         </div>

//         {/* Huge Animated Headline with New Text */}
//         <h2
//           ref={bigTextRef}
//           className={`${americanCaptain.className} flex flex-col text-[8.5vw] lg:text-[6.5vw] leading-[0.9] uppercase tracking-wider text-brand-dark`}
//         >
//           <div className="overflow-hidden py-2">
//             <span className="inline-block will-change-transform">DRY BULK SHIPBROKING HOUSE</span>
//           </div>
//           <div className="overflow-hidden py-2">
//             <span className="inline-block will-change-transform text-brand-blue">
//               Connecting Cargo,
//             </span>
//           </div>
//           <div className="overflow-hidden py-2">
//             <span className="inline-block will-change-transform text-brand-gray">
//               Tonnage & Opportunity
//             </span>
//           </div>
//         </h2>
//       </div>
    
//       {/* =========================================================================
//           BOTTOM SECTION: ABOUT HAFSHIP & IMAGES
//       ========================================================================= */}
//       <div className="w-[95%] max-w-[1800px] mx-auto px-2 sm:px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-center">
          
//           {/* CONTENT (7 Columns out of 12) */}
//           <div ref={contentRef} className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1 lg:pl-6 xl:pl-10">
            
//             {/* Title using Playfair Display */}
//             <h3
//               className={`${playfair.className} text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-brand-blue leading-[1.15] tracking-tight mb-8`}
//             >
//               Chartering 
//             </h3>

//             {/* Paragraph 1 */}
//             <p className={`${lora.className}  text-xl sm:text-xl text-slate-700 font-medium leading-relaxed mb-6 max-w-3xl`}>
//               HAFSHIP is a dry bulk shipbroking house focused on connecting shipowners, vessel operators, charterers, traders and cargo interests across international dry bulk markets.
//             </p>
            
//             {/* Paragraph 2 */}
//             <p className={`${lora.className}  text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-3xl`}>
//               We provide commercially focused shipbroking and chartering services, supporting clients from the initial cargo or vessel requirement through negotiations, fixture and post-fixture coordination.
//             </p>

//             {/* Paragraph 3 */}
//             <p className={`${lora.className}  text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-3xl`}>
//               Our brokerage activity covers voyage chartering, trip time charters and period employment, with a focus on:
//             </p>

//             {/* Vessel Sizes Highlight Box */}
//             <div className={`${raleway.className} flex flex-wrap items-center gap-3 text-sm font-bold text-brand-blue tracking-widest uppercase mb-6 bg-brand-gray/20 px-6 py-4 rounded-lg border border-brand-dark/5`}>
//               <span>Handysize</span>
//               <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
//               <span>Handymax</span>
//               <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
//               <span>Supramax</span>
//               <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
//               <span>Ultramax</span>
//               <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
//               <span>Panamax</span>
//               <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
//               <span>Capesize & More</span>
//             </div>

//             {/* Paragraph 4 */}
//             <p className={`${lora.className} text-justify text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-3xl`}>
//               We work across a broad range of dry bulk commodities and trading routes, connecting suitable cargo requirements with competitive and workable tonnage solutions.
//             </p>

//              {/* CTA Button - Updated to Brand Yellow */}
//              <a
//               href="/contact"
//               className={`${raleway.className} group inline-flex items-center gap-4 rounded bg-brand-yellow px-8 py-4 text-sm sm:text-base font-bold tracking-[0.2em] text-brand-dark transition-all duration-300 hover:bg-brand-dark hover:text-white uppercase`}
//             >
//               <span>CONTACT US</span>
//               <div className="flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
//                 <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </div>
//             </a>
//           </div>

//           {/* IMAGES (5 Columns out of 12) - Updated Heights for Mobile Responsiveness */}
//           <div className="lg:col-span-5 relative h-[380px] sm:h-[500px] lg:h-[700px] xl:h-[750px] w-full order-1 lg:order-2">
//             <div className="relative w-full h-full max-w-[550px] xl:max-w-[700px] mx-auto lg:ml-auto">
              
//               {/* Img 1: Top-Right Base */}
//               <div
//                 ref={img1Ref}
//                 className="absolute top-0 right-0 w-[75%] h-[75%] rounded overflow-hidden shadow-xl bg-brand-gray/50 will-change-transform"
//               >
//                 <Image
//                   src="/images/ch1.jpeg"
//                   alt="Global Dry Bulk Operations"
//                   fill
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                   className="object-cover transition-transform duration-1000 hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-brand-dark/10" />
//               </div>

//               {/* Img 2: Bottom-Left Overlap */}
//               <div
//                 ref={img2Ref}
//                 className="absolute bottom-0 left-0 w-[70%] h-[65%] rounded overflow-hidden shadow-[0_15px_35px] shadow-brand-dark/25 border-4 border-white bg-brand-gray z-10 will-change-transform"
//               >
//                 <Image
//                   src="/images/ch2.jpeg"
//                   alt="Shipbroking and Tonnage"
//                   fill
//                   sizes="(max-width: 1024px) 100vw, 50vw"
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




// "use client";

// import { useRef, useLayoutEffect } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { americanCaptain, raleway, lora, playfair, merriweather } from "@/app/fonts";

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
//       // 1. Marquee horizontal slide-in on scroll
//       if (marquee) {
//         gsap.fromTo(
//           marquee,
//           { opacity: 0 },
//           {
//             opacity: 1,
//             duration: 1.5,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: container,
//               start: "top 90%",
//             },
//           }
//         );
//       }

//       // 2. Massive Typography Reveal Animation
//       if (bigTextLines) {
//         gsap.fromTo(
//           bigTextLines,
//           { y: "120%", rotation: 5 },
//           {
//             y: "0%",
//             rotation: 0,
//             stagger: 0.15,
//             duration: 1.2,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: bigTextRef.current,
//               start: "top 80%",
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

//   const vesselSizes = [
//     "HANDYSIZE",
//     "HANDYMAX",
//     "SUPRAMAX",
//     "ULTRAMAX",
//     "PANAMAX",
//     "CAPESIZE"
//   ];

//   return (
//     <section
//       ref={containerRef}
//       id="about"
//       className="relative z-20 w-full bg-white pb-16 lg:pb-24 overflow-hidden shadow-[0_-25px_60px_rgba(0,0,0,0.1)]"
//     >
//       {/* =========================================================================
//           TOP SECTION: RUNNING MARQUEE (VESSEL SIZES)
//       ========================================================================= */}
//       <div ref={marqueeRef} className="w-full overflow-hidden select-none bg-brand-dark py-4 lg:py-5 mb-16 lg:mb-24 shadow-md">
//         <style dangerouslySetInnerHTML={{__html: `
//           @keyframes marqueeRightToLeft {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .running-track-fast {
//             display: flex;
//             width: max-content;
//             animation: marqueeRightToLeft 25s linear infinite;
//           }
//         `}} />

//         <div className="running-track-fast items-center">
//           {[...vesselSizes, ...vesselSizes, ...vesselSizes, ...vesselSizes].map((vessel, index) => (
//             <div key={index} className="flex items-center shrink-0">
//               <span className={`${raleway.className} text-white text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-widest px-8 sm:px-12 cursor-default`}>
//                 {vessel}
//               </span>
//               <span className="text-brand-blue text-xl sm:text-2xl shrink-0">•</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* =========================================================================
//           MASSIVE BRANDING PRINCIPLE
//       ========================================================================= */}
//       <div className="w-[95%] max-w-[1800px] mx-auto mb-16 lg:mb-24 pl-2 sm:pl-6">
        
//         {/* Subheading tag */}
//         <div className={`${playfair.className} overflow-hidden mb-6 flex items-center gap-3`}>
//           <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow animate-pulse" />
//           <span className="text-brand-dark font-bold text-xs sm:text-sm tracking-[0.3em] uppercase">
//            HAFSHIP Shipbroking
//           </span>
//         </div>

//         {/* Huge Animated Headline with New Text */}
//         <h2
//           ref={bigTextRef}
//           className={`${americanCaptain.className} flex flex-col text-[8.5vw] lg:text-[6.5vw] leading-[0.9] uppercase tracking-wider text-brand-dark`}
//         >
//           <div className="overflow-hidden py-2">
//             <span className="inline-block will-change-transform">DRY BULK SHIPBROKING HOUSE</span>
//           </div>
//           <div className="overflow-hidden py-2">
//             <span className="inline-block will-change-transform text-brand-blue">
//               Connecting Cargo,
//             </span>
//           </div>
//           <div className="overflow-hidden py-2">
//             <span className="inline-block will-change-transform text-brand-gray">
//               Tonnage & Opportunity
//             </span>
//           </div>
//         </h2>
//       </div>
    
//       {/* =========================================================================
//           BOTTOM SECTION: ABOUT HAFSHIP & IMAGES
//       ========================================================================= */}
//       <div className="w-[95%] max-w-[1800px] mx-auto px-2 sm:px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-center">
          
//           {/* CONTENT (7 Columns out of 12) */}
//           <div ref={contentRef} className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1 lg:pl-6 xl:pl-10">
            
//             {/* Title using Playfair Display */}
//             <h3
//               className={`${playfair.className} text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-brand-blue leading-[1.15] tracking-tight mb-8`}
//             >
//               Chartering 
//             </h3>

//             {/* Paragraph 1 */}
//             <p className={`${lora.className} text-justify text-xl sm:text-xl text-slate-700 font-medium leading-relaxed mb-6 max-w-3xl`}>
//               HAFSHIP is a dry bulk shipbroking house focused on connecting shipowners, vessel operators, charterers, traders and cargo interests across international dry bulk markets.
//             </p>
            
//             {/* Paragraph 2 */}
//             <p className={`${lora.className} text-justify text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-3xl`}>
//               We provide commercially focused shipbroking and chartering services, supporting clients from the initial cargo or vessel requirement through negotiations, fixture and post-fixture coordination.
//             </p>

//             {/* Paragraph 3 */}
//             <p className={`${lora.className} text-justify text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-3xl`}>
//               Our brokerage activity covers voyage chartering, trip time charters and period employment, with a focus on:
//             </p>

//             {/* Vessel Sizes Highlight Box */}
//             <div className={`${raleway.className} flex flex-wrap items-center gap-3 text-sm font-bold text-brand-blue tracking-widest uppercase mb-6 bg-brand-gray/20 px-6 py-4 rounded-lg border border-brand-dark/5`}>
//               <span>Handysize</span>
//               <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
//               <span>Handymax</span>
//               <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
//               <span>Supramax</span>
//               <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
//               <span>Ultramax</span>
//               <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
//               <span>Panamax</span>
//               <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
//               <span>Capesize & More</span>
//             </div>

//             {/* Paragraph 4 */}
//             <p className={`${lora.className} text-justify text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-3xl`}>
//               We work across a broad range of dry bulk commodities and trading routes, connecting suitable cargo requirements with competitive and workable tonnage solutions.
//             </p>

//              {/* CTA Button - Updated to Brand Yellow */}
//              <a
//               href="/contact"
//               className={`${raleway.className} group inline-flex items-center gap-4 rounded bg-brand-yellow px-8 py-4 text-sm sm:text-base font-bold tracking-[0.2em] text-brand-dark transition-all duration-300 hover:bg-brand-dark hover:text-white uppercase`}
//             >
//               <span>CONTACT US</span>
//               <div className="flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
//                 <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </div>
//             </a>
//           </div>

//           {/* IMAGES (5 Columns out of 12) - Updated Heights for Mobile Responsiveness */}
//           <div className="lg:col-span-5 relative h-[380px] sm:h-[500px] lg:h-[700px] xl:h-[750px] w-full order-1 lg:order-2">
//             <div className="relative w-full h-full max-w-[550px] xl:max-w-[700px] mx-auto lg:ml-auto">
              
//               {/* Img 1: Top-Right Base */}
//               <div
//                 ref={img1Ref}
//                 className="absolute top-0 right-0 w-[75%] h-[75%] rounded overflow-hidden shadow-xl bg-brand-gray/50 will-change-transform"
//               >
//                 <Image
//                   src="/images/ch1.jpeg"
//                   alt="Global Dry Bulk Operations"
//                   fill
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                   className="object-cover transition-transform duration-1000 hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-brand-dark/10" />
//               </div>

//               {/* Img 2: Bottom-Left Overlap */}
//               <div
//                 ref={img2Ref}
//                 className="absolute bottom-0 left-0 w-[70%] h-[65%] rounded overflow-hidden shadow-[0_15px_35px] shadow-brand-dark/25 border-4 border-white bg-brand-gray z-10 will-change-transform"
//               >
//                 <Image
//                   src="/images/ch2.jpeg"
//                   alt="Shipbroking and Tonnage"
//                   fill
//                   sizes="(max-width: 1024px) 100vw, 50vw"
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
import { americanCaptain, raleway, lora, playfair } from "@/app/fonts";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef(null);
  const bigTextRef = useRef(null);
  const marqueeRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const decorLineRef = useRef(null);
  const floatingBadgeRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const bigTextLines = bigTextRef.current?.children;
    const content = contentRef.current;
    const marquee = marqueeRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      // 1. Marquee horizontal slide-in
      if (marquee) {
        gsap.fromTo(
          marquee,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 90%",
            },
          }
        );
      }

      // 2. Massive Typography Reveal Animation (Curtain effect)
      if (bigTextLines) {
        gsap.fromTo(
          bigTextLines,
          { y: "120%", rotation: 3, opacity: 0 },
          {
            y: "0%",
            rotation: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: {
              trigger: bigTextRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // 3. Compact Content Text Reveal
      if (content) {
        gsap.fromTo(
          content.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: content,
              start: "top 80%",
            },
          }
        );
      }

      // 4. Growing Decorative Line
      if (decorLineRef.current) {
        gsap.fromTo(
          decorLineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
              trigger: content,
              start: "top 80%",
            },
          }
        );
      }

      // 5. Image Reveal & Subtle Parallax
      if (imageWrapperRef.current && imageRef.current) {
        gsap.fromTo(
          imageWrapperRef.current,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageWrapperRef.current,
              start: "top 85%",
            },
          }
        );

        gsap.to(imageRef.current, {
          y: -40, // Scroll parallax effect
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // 6. Continuous "Up/Down" Floating Animation & Spin for the Badge
      if (floatingBadgeRef.current) {
        // Spin
        gsap.to(floatingBadgeRef.current, {
          rotation: 360,
          duration: 25,
          repeat: -1,
          ease: "linear",
        });
        
        // Float Up and Down
        gsap.to(floatingBadgeRef.current, {
          y: -20,
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      }

    }, container);

    return () => ctx.revert();
  }, []);

  const vesselSizes = [
    "HANDYSIZE",
    "HANDYMAX",
    "SUPRAMAX",
    "ULTRAMAX",
    "PANAMAX",
    "CAPESIZE"
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      // Added a subtle background grid for a premium corporate aesthetic
      className="relative z-20 w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pb-16 lg:pb-24 overflow-hidden shadow-[0_-25px_60px_rgba(0,0,0,0.1)]"
    >
      {/* Abstract light glow behind the section */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

      {/* =========================================================================
          TOP SECTION: RUNNING MARQUEE
      ========================================================================= */}
      <div ref={marqueeRef} className="w-full overflow-hidden select-none bg-brand-dark py-4 lg:py-5 mb-16 lg:mb-24 shadow-lg border-b border-brand-yellow/20">
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
              <span className={`${raleway.className} text-white text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-widest px-8 sm:px-12 cursor-default drop-shadow-md`}>
                {vessel}
              </span>
              <span className="text-brand-yellow text-xl sm:text-2xl shrink-0">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          MASSIVE BRANDING PRINCIPLE (Big Fonts)
      ========================================================================= */}
      <div className="w-[95%] max-w-[1800px] mx-auto mb-16 lg:mb-24 pl-2 sm:pl-6 relative z-10">
        
        {/* Subheading tag */}
        <div className={`${playfair.className} overflow-hidden mb-6 flex items-center gap-4`}>
          <div className="flex items-center justify-center h-6 w-6 rounded-full border border-brand-yellow bg-brand-yellow/10">
            <span className="h-2 w-2 rounded-full bg-brand-yellow animate-pulse" />
          </div>
          <span className="text-brand-dark font-bold text-xs sm:text-sm tracking-[0.3em] uppercase">
           HAFSHIP Shipbroking
          </span>
        </div>

        {/* Huge Animated Headline */}
        <h2
          ref={bigTextRef}
          className={`${americanCaptain.className} flex flex-col text-[8.5vw] lg:text-[6.5vw] leading-[0.9] uppercase tracking-wider text-brand-dark drop-shadow-sm`}
        >
          <div className="overflow-hidden py-1">
            <span className="inline-block will-change-transform">DRY BULK SHIPBROKING HOUSE</span>
          </div>
          <div className="overflow-hidden py-1">
            <span className="inline-block will-change-transform text-brand-blue">
              Connecting Cargo,
            </span>
          </div>
          <div className="overflow-hidden py-1">
            <span className="inline-block will-change-transform text-brand-gray">
              Tonnage & Opportunity
            </span>
          </div>
        </h2>
      </div>
    
      {/* =========================================================================
          BOTTOM SECTION: COMPACT CONTENT & SINGLE IMAGE
      ========================================================================= */}
      <div className="w-[90%] max-w-[1400px] mx-auto mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* ================= SINGLE PREMIUM IMAGE (Left Side - 5 Cols) ================= */}
          <div className="lg:col-span-5 relative w-full order-2 lg:order-1 flex justify-center lg:justify-start">
            
            <div ref={imageWrapperRef} className="relative w-full max-w-[450px]">
              {/* Premium Offset Frame behind the image */}
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-blue/20 rounded-[2rem] rounded-tr-none -z-10 hidden sm:block" />
              
              {/* Main Image Container */}
              <div 
                ref={imageRef}
                className="relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(3,24,46,0.15)] will-change-transform"
              >
                <Image
                  src="/images/chartering-hero.jpg" 
                  alt="HAFSHIP Commercial Broking"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover scale-110" // Scaled slightly to allow room for parallax
                />
                {/* Premium Vignette Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(3,24,46,0.4)_100%)] pointer-events-none" />
              </div>

              {/* FLOATING UP/DOWN BADGE */}
              <div 
                ref={floatingBadgeRef}
                className="absolute -bottom-8 -right-8 z-20 hidden md:flex items-center justify-center h-32 w-32 rounded-full bg-white/80 backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-white/50"
              >
                {/* SVG Circular Text */}
                <svg className="absolute inset-0 w-full h-full text-brand-blue" viewBox="0 0 100 100">
                  <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                  <text className={`${raleway.className} text-[11px] font-bold tracking-[0.2em] uppercase`} fill="currentColor">
                    <textPath href="#textPath" startOffset="0%">
                      GLOBAL NETWORK • HAFSHIP • 
                    </textPath>
                  </text>
                </svg>
                {/* Center Anchor Icon */}
                <svg className="h-8 w-8 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

            </div>
          </div>

          {/* ================= COMPACT CONTENT (Right Side - 7 Cols) ================= */}
          <div className="lg:col-span-7 flex flex-row items-stretch gap-6 order-1 lg:order-2">
            
            {/* Animated Growing Vertical Line */}
            <div className="hidden sm:block w-px bg-brand-blue/20 rounded-full relative overflow-hidden shrink-0">
              <div ref={decorLineRef} className="absolute top-0 left-0 w-full h-full bg-brand-yellow origin-top" />
            </div>

            <div ref={contentRef} className="flex flex-col items-start py-2">
              
              <h3 className={`${playfair.className} text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-brand-dark leading-[1.15] tracking-tight mb-8`}>
                HAFSHIP <span className="text-brand-blue">Chartering.</span>
              </h3>

              {/* Short Paragraph 1 */}
              <p className={`${lora.className} text-lg sm:text-xl text-slate-700 font-medium leading-relaxed mb-6 max-w-2xl`}>
                HAFSHIP is a dedicated shipbroking house providing commercially focused chartering services across international markets. 
              </p>

              {/* Short Paragraph 2 */}
              <p className={`${lora.className} text-base sm:text-lg text-slate-500 leading-relaxed mb-12 max-w-2xl`}>
                From Handysize to Capesize, we bridge shipowners, operators, traders, and cargo interests—ensuring the right cargo meets the right tonnage through strategic negotiations and seamless fixture execution.
              </p>

              {/* Yellow "More About Us" Button */}
              <div>
                <a
                  href="/about"
                  className={`${raleway.className} group relative inline-flex items-center gap-4 rounded-full bg-brand-yellow px-8 py-4 text-sm font-bold tracking-[0.2em] text-brand-dark overflow-hidden shadow-lg transition-transform hover:-translate-y-1`}
                >
                  {/* Button hover effect background */}
                  <span className="absolute inset-0 w-full h-full bg-brand-dark -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">MORE ABOUT US</span>
                  
                  <div className="relative z-10 flex h-5 w-5 items-center justify-center transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}