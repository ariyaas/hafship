// "use client";

// import { useRef, useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { raleway, merriweather, lora } from "@/app/fonts";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// // Exactly 2 Services using strictly the exact text from your brochure.
// const ALL_SERVICES = [
//   {
//     id: "01",
//     title: "Dry Bulk Chartering",
//     subtitle: "Connecting Cargo with the Right Vessels",
//     desc: "At HAFSHIP, we specialize in seamlessly connecting cargo with the right vessels across the globe. With a team of seasoned experts and decades of combined experience in the shipping industry, we are committed to providing tailored, efficient, and cost-effective solutions for dry bulk cargo transportation.",
//     link: "/chartering",
//     linkText: "EXPLORE CHARTERING",
//     img: "/images/Chartering.jpg", 
//   },
//   {
//     id: "02",
//     title: "Freight Forwarding",
//     subtitle: "Global Cargo Movement",
//     desc: "We offer comprehensive freight forwarding solutions, ensuring your cargo moves efficiently and securely across the globe. Whether by air, sea, or road, our expert team manages every aspect of the shipping process, from cargo booking and transportation to customs clearance and final delivery.",
//     link: "/freight-forwarding",
//     linkText: "EXPLORE FORWARDING",
//     img: "/images/FreightForwarding.jpg", 
//   }
// ];

// export default function ServicesPage() {
//   const heroRef = useRef(null);
//   const containerRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       // Hero Animation
//       gsap.fromTo(
//         ".hero-element",
//         { y: 50, opacity: 0 },
//         { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" }
//       );

//       // Service Sections Staggered Reveal
//       const serviceRows = gsap.utils.toArray(".service-row");
//       serviceRows.forEach((row) => {
//         gsap.fromTo(
//           row,
//           { y: 60, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: row,
//               start: "top 80%",
//             },
//           }
//         );
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <main className="w-full bg-white flex flex-col">
      
//       {/* ================= HERO ================= */}
//       <section ref={heroRef} className="relative w-full bg-brand-dark pt-48 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-8 overflow-hidden">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-yellow/5 blur-[120px] rounded-full pointer-events-none" />
        
//         <div className="mx-auto max-w-[1400px] relative z-10 text-center">
//           <p className="hero-element text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase mb-6">
//             Our Expertise
//           </p>
//           <h1 className={`hero-element ${merriweather.className} text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase mb-8`}>
//          Our <span className="text-brand-yellow">Services</span>
//           </h1>
//           <p className={`hero-element ${lora.className} mx-auto max-w-3xl text-lg sm:text-xl text-slate-300 font-medium leading-relaxed`}>
//             At HAFSHIP, we offer a full spectrum of shipping and logistics solutions, ensuring seamless cargo movement across the globe.
//           </p>
//         </div>
//       </section>

//       {/* ================= EDITORIAL SERVICE ROWS ================= */}
//       <section ref={containerRef} className="w-full py-20 lg:py-32 px-4 sm:px-8">
//         <div className="mx-auto max-w-[1400px] flex flex-col gap-24 lg:gap-32">
//           {ALL_SERVICES.map((service, index) => {
//             const isEven = index % 2 !== 0;

//             return (
//               <div key={service.id} className={`service-row flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                
//                 {/* Image Column */}
//                 <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-brand-gray/50 group bg-brand-gray">
//                   <Image
//                     src={service.img}
//                     alt={service.title}
//                     fill
//                     sizes="(max-width: 1024px) 100vw, 50vw"
//                     className="object-cover transition-transform duration-1000 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-700" />
                  
//                   {/* Floating Number */}
//                   <div className={`absolute ${isEven ? 'bottom-6 left-6' : 'bottom-6 right-6'} bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg`}>
//                     <span className={`${merriweather.className} font-extrabold text-3xl text-brand-dark`}>
//                       {service.id}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content Column */}
//                 <div className="w-full lg:w-1/2 flex flex-col items-start">
//                   <div className="flex items-center gap-3 mb-4">
//                     <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
//                     <p className={`${raleway.className} text-xs font-bold tracking-[0.2em] text-brand-yellow uppercase`}>
//                       {service.subtitle}
//                     </p>
//                   </div>
                  
//                   <h2 className={`${merriweather.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark uppercase mb-6 leading-tight`}>
//                     {service.title}
//                   </h2>
                  
//                   <p className={`${lora.className} text-base sm:text-lg text-brand-dark/80 leading-relaxed mb-10`}>
//                     {service.desc}
//                   </p>
                  
//                   <a
//                     href={service.link}
//                     className={`${raleway.className} group inline-flex items-center gap-4 rounded bg-brand-dark px-8 py-4 text-xs font-bold tracking-[0.2em] text-white transition-all duration-300 hover:bg-brand-yellow hover:text-brand-dark uppercase`}
//                   >
//                     <span>{service.linkText}</span>
//                     <div className="flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
//                       <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                       </svg>
//                     </div>
//                   </a>
//                 </div>

//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {/* ================= BOTTOM CTA ================= */}
//       <section className="w-full bg-brand-yellow py-24 px-4 sm:px-8 border-t border-brand-dark/10">
//         <div className="mx-auto max-w-[1000px] text-center flex flex-col items-center">
//           <p className={`${raleway.className} text-xs font-bold tracking-[0.3em] text-brand-dark uppercase mb-4`}>
//             Delivering Success Across Ocean
//           </p>
//           <h2 className={`${merriweather.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark uppercase mb-6`}>
//             Need assistance with your shipping?
//           </h2>
//           <p className={`${lora.className} text-lg text-brand-dark/80 font-medium mb-10 max-w-2xl`}>
//             Our team is here to help!
//           </p>
//           <a
//             href="mailto:sales@hafship.com"
//             className={`${raleway.className} inline-flex items-center justify-center rounded bg-brand-dark px-10 py-5 text-sm font-bold tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white hover:text-brand-dark uppercase`}
//           >
//             CONTACT OUR TEAM
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, playfair, lora } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const CORE_SERVICES = [
  {
    id: "01",
    title: "Voyage Chartering",
    subtitle: "Spot & Single Voyage Solutions",
    desc: "Matching suitable vessels with cargo requirements on international dry bulk and liquid routes, ensuring seamless execution from fixture confirmation to discharge completion.",
    img: "/images/Chartering.png",
  },
  {
    id: "02",
    title: "Trip Time Chartering",
    subtitle: "Flexible Short-Term Employment",
    desc: "Arranging short-term vessel employment based on owners' and charterers' exact specifications, trading limits, and operational parameters.",
    img: "/images/ch1.jpeg",
  },
  {
    id: "03",
    title: "Period Employment",
    subtitle: "Multi-Month & Long-Term Contracts",
    desc: "Connecting suitable tonnage with charterers seeking multi-month and strategic period employment to secure long-term market positions.",
    img: "/images/ch2.jpeg",
  },
  {
    id: "04",
    title: "Tanker & Liquid Bulk Broking",
    subtitle: "Specialized Petroleum & Chemical Transport",
    desc: "Providing dedicated brokerage services for liquid bulk and tanker operations, connecting oil majors, traders, and shipowners with compliant, vetted tonnage.",
    img: "/images/ch3.jpeg",
  },
  {
    id: "05",
    title: "Cargo & Tonnage Matching",
    subtitle: "Efficient Market Pairing",
    desc: "Sourcing and circulating dry bulk and liquid cargo requirements alongside open tonnage positions efficiently across global trade lanes.",
    img: "/images/Chartering.png",
  },
  {
    id: "06",
    title: "Tonnage Positioning",
    subtitle: "Strategic Fleet Management",
    desc: "Advising and strategizing optimal vessel positioning from Handysize through Panamax, Capesize, and tanker segments across global waters.",
    img: "/images/ch4.jpg",
  },
  {
    id: "07",
    title: "Freight & Rate Negotiations",
    subtitle: "Strategic Commercial Terms",
    desc: "Representing principals professionally during freight rate negotiations, laytime allowances, and comprehensive charter party terms finalization.",
    img: "/images/ch1.jpeg",
  },
  {
    id: "08",
    title: "Fixture Coordination",
    subtitle: "Pre-Operational Alignment",
    desc: "Managing all aspects of fixture recap formulation, contract documentation, and operational alignment between all involved counterparties.",
    img: "/images/ch2.jpeg",
  },
  {
    id: "09",
    title: "Post-Fixture Support",
    subtitle: "Claims & Accounting Resolution",
    desc: "Delivering rigorous post-fixture coordination including laytime statements, demurrage/despatch calculations, and professional claims handling.",
    img: "/images/ch3.jpeg",
  },
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const accordionRef = useRef(null);
  const approachRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        ".accordion-container",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: accordionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".approach-box",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: approachRef.current,
            start: "top 85%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full flex-grow bg-white">
      {/* ========================================================
          HERO SECTION (Floating Container with 3% Edge Space)
      ======================================================== */}
      <div className="w-full px-[3%] pt-8 bg-transparent">
        <section 
          ref={heroRef} 
          className="relative w-full bg-brand-dark pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 sm:px-12 overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-brand-gray/10"
        >
          {/* Background Image with Dark Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/chartering-hero.jpg"
              alt="Dry Bulk & Tanker Services"
              fill
              priority
              className="object-cover object-center opacity-30 scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/40" />
          </div>

          <div className="mx-auto max-w-[1300px] relative z-10 text-center lg:text-left">
            <div className="max-w-3xl">
              <p className="hero-text text-xs font-bold tracking-[0.3em] text-brand-blue uppercase mb-6 inline-block bg-brand-yellow/10 px-4 py-2 rounded-full border border-brand-yellow/20">
                Our Expertise
              </p>
              <h1 className={`hero-text ${playfair.className} text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase mb-6 leading-tight`}>
                Dry Bulk & Tanker
                <br />
                <span className="text-brand-blue">Broking Services</span>
              </h1>
              <p className={`hero-text ${lora.className} text-lg sm:text-xl text-slate-200 font-medium leading-relaxed`}>
                Comprehensive commercial shipbroking solutions designed to bridge shipowners, operators, charterers, traders, and cargo interests across global dry bulk and liquid trade routes.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================
          INTERACTIVE HORIZONTAL EXPANDING ACCORDION SECTION
      ======================================================== */}
      <section ref={accordionRef} className="w-full py-24 lg:py-36 px-4 sm:px-8 bg-white overflow-hidden">
        <div className="mx-auto max-w-[1750px]">
          
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <p className={`${raleway.className} text-xs font-bold tracking-[0.25em] text-brand-blue uppercase mb-4`}>
              How We Operate
            </p>
            <h2 className={`${playfair.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark uppercase mb-6`}>
              Core Brokerage Capabilities
            </h2>
            <p className={`${lora.className} text-slate-700 text-lg leading-relaxed`}>
              Explore our specialized maritime broking divisions designed to deliver transparent, prompt, and commercially optimized fixture execution across all 9 operational categories.
            </p>
          </div>

          {/* Interactive Horizontal Accordion Container */}
          <div className="accordion-container flex flex-col xl:flex-row items-stretch gap-3 w-full h-auto xl:h-[600px]">
            {CORE_SERVICES.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`relative rounded-[28px] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden flex flex-col justify-between border ${
                    isActive
                      ? "xl:flex-[3.2] bg-brand-dark text-white border-brand-blue shadow-[0_25px_60px_rgba(14,96,156,0.35)] p-8 xl:p-12"
                      : "xl:flex-[0.6] bg-brand-gray/30 text-brand-dark border-slate-200 hover:border-brand-blue/50 p-5 xl:py-12 xl:px-4"
                  }`}
                >
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`${raleway.className} text-xs sm:text-sm font-bold tracking-widest px-3.5 py-1.5 rounded-full ${
                        isActive
                          ? "bg-brand-blue/30 text-brand-yellow border border-brand-blue/40"
                          : "bg-white text-brand-dark/70 border border-slate-200"
                      }`}
                    >
                      {service.id}
                    </span>

                    {isActive && (
                      <span className={`${raleway.className} text-xs font-bold tracking-[0.2em] text-brand-blue uppercase hidden sm:inline-block`}>
                        Active Division
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="my-auto py-6">
                    {isActive ? (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fadeIn">
                        <div className="lg:col-span-7 space-y-4">
                          <h3 className={`${playfair.className} text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-wide`}>
                            {service.title}
                          </h3>
                          <p className={`${raleway.className} text-xs sm:text-sm font-bold tracking-[0.15em] text-brand-yellow uppercase`}>
                            {service.subtitle}
                          </p>
                          <p className={`${lora.className} text-slate-300 text-base sm:text-lg leading-relaxed pt-2`}>
                            {service.desc}
                          </p>
                        </div>
                        <div className="lg:col-span-5 relative h-64 w-full rounded-2xl overflow-hidden shadow-xl border border-white/10">
                          <Image
                            src={service.img}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="xl:[writing-mode:vertical-lr] xl:rotate-180 flex xl:items-center gap-4">
                        <h3 className={`${playfair.className} text-base sm:text-lg font-bold uppercase text-brand-dark tracking-wide whitespace-nowrap`}>
                          {service.title}
                        </h3>
                      </div>
                    )}
                  </div>

                  {/* Bottom indicator line */}
                  <div className={`w-full h-1.5 rounded-full transition-all duration-500 ${isActive ? "bg-brand-yellow" : "bg-transparent"}`} />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          OUR APPROACH SECTION (Client Content Added)
      ======================================================== */}
      <section ref={approachRef} className="w-full py-20 px-4 sm:px-8 bg-brand-gray/20 border-t border-slate-200">
        <div className="mx-auto max-w-[1400px]">
          <div className="approach-box bg-brand-dark text-white rounded-[32px] p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden border border-white/10 text-center">
            
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-yellow/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <p className={`${raleway.className} text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase mb-4`}>
                OUR APPROACH
              </p>
              
              <h3 className={`${playfair.className} text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white mb-6`}>
                Market Knowledge. Commercial Thinking. Trusted Connections.
              </h3>

              <p className={`${lora.className} text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto`}>
                HAFSHIP combines market access, commercial awareness and relationship-driven broking to connect the right cargo with the right tonnage.
              </p>

              {/* Connecting Parties Tags */}
              <div className={`${raleway.className} flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm font-bold text-brand-blue tracking-widest uppercase mb-10`}>
                <span>Shipowners</span> <span className="text-white/40">•</span>
                <span>Operators</span> <span className="text-white/40">•</span>
                <span>Charterers</span> <span className="text-white/40">•</span>
                <span>Traders</span> <span className="text-white/40">•</span>
                <span>Cargo Interests</span>
              </div>

              {/* Vessel Sizes List Tags */}
              <div className={`${raleway.className} flex flex-wrap items-center justify-center gap-3 text-xs font-bold tracking-widest uppercase`}>
                <span className="rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 px-4 py-2">Handysize</span>
                <span className="rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 px-4 py-2">Handymax</span>
                <span className="rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 px-4 py-2">Supramax</span>
                <span className="rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 px-4 py-2">Ultramax</span>
                <span className="rounded-full border border-slate-700 bg-slate-800/50 text-slate-300 px-4 py-2">Panamax</span>
                <span className="rounded-full border border-brand-yellow/50 bg-brand-blue text-brand-gray px-5 py-2">Capesize & More</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          CALL TO ACTION SECTION
      ======================================================== */}
      <section className="w-full bg-brand-yellow py-20 px-4 sm:px-8 border-t border-brand-dark/10">
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className={`${playfair.className} text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark uppercase`}>
              Ready to discuss your requirement?
            </h2>
            <p className={`${lora.className} mt-3 text-brand-dark/80 font-medium text-lg`}>
              Connect with our chartering desk for active cargo and tonnage placement.
            </p>
          </div>
          <div className="flex gap-4">
             <Link
              href="/contact"
              className={`${raleway.className} shrink-0 inline-flex items-center justify-center rounded bg-brand-dark px-8 py-4 text-sm font-bold tracking-widest text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white hover:text-brand-dark uppercase`}
            >
              CONTACT DESK
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}