// "use client";

// import { useRef, useState, useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { raleway, merriweather, lora } from "@/app/fonts";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// const WHY_DATA = [
//   {
//     id: "01",
//     title: "Market Access",
//     desc: "Connecting cargo interests, charterers, owners and operators across major dry bulk markets.",
//   },
//   {
//     id: "02",
//     title: "Fast Response",
//     desc: "Prompt handling of cargo and tonnage inquiries.",
//   },
//   {
//     id: "03",
//     title: "Global Network",
//     desc: "Commercial relationships across India, Middle East, Asia, Europe and the Americas.",
//   },
//   {
//     id: "04",
//     title: "Commercial Focus",
//     desc: "Focused on finding workable employment and cargo solutions.",
//   },
//   {
//     id: "05",
//     title: "Confidentiality",
//     desc: "Respecting the confidentiality of owners, charterers, cargo interests and brokers.",
//   },
//   {
//     id: "06",
//     title: "Long-Term Relationships",
//     desc: "Building sustainable commercial relationships rather than focusing only on individual fixtures.",
//   },
// ];

// // Reusable micro-component for the sleek floating labels
// function FloatingInput({ label, placeholder }) {
//   return (
//     <div className="relative group">
//       <input 
//         type="text" 
//         placeholder={placeholder}
//         className={`${lora.className} peer w-full bg-transparent border-b-2 border-brand-gray py-2 text-brand-dark font-medium placeholder-transparent focus:outline-none focus:border-brand-blue transition-colors`} 
//       />
//       <label className={`${raleway.className} absolute left-0 -top-5 text-[10px] font-bold tracking-widest text-brand-dark/50 uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-normal peer-focus:-top-5 peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-brand-blue pointer-events-none`}>
//         {label}
//       </label>
//     </div>
//   );
// }

// export default function WhyAndContactSection() {
//   const sectionRef = useRef(null);
//   const parallaxImgRef = useRef(null);
//   const [openIndex, setOpenIndex] = useState(0);
  
//   // State for the advanced dynamic form
//   const [identity, setIdentity] = useState("Shipowner");
//   const [formType, setFormType] = useState("Tonnage"); // Controls the 2-category dynamic fields
//   const [charterType, setCharterType] = useState("Voyage");

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     const parallaxImg = parallaxImgRef.current;

//     if (!section || !parallaxImg) return;

//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         parallaxImg,
//         { yPercent: 15 },
//         {
//           yPercent: -15,
//           ease: "none",
//           scrollTrigger: {
//             trigger: section,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: 1.2,
//           },
//         }
//       );
//     }, section);

//     return () => ctx.revert();
//   }, []);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? -1 : index);
//   };

//   return (
//     <>
//       {/* =========================================================================
//           SECTION 10: WHY HAFSHIP (Dark Background)
//       ========================================================================= */}
//       <section
//         ref={sectionRef}
//         id="why-hafship"
//         className="relative z-20 w-full bg-brand-dark py-24 lg:py-32 px-4 sm:px-8 overflow-hidden"
//       >
//         <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
//           <div className="flex flex-col w-full lg:sticky lg:top-32">
//             <div className="mb-12">
//               <p className={`${raleway.className} text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase mb-4`}>
//                 OUR ADVANTAGE
//               </p>
//               <h2 className={`${merriweather.className} text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-white leading-tight uppercase`}>
//                 Why Hafship.
//               </h2>
//             </div>

//             <div className="relative w-full max-w-[550px] aspect-[4/3] rounded-sm overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-brand-gray/10 bg-brand-dark">
//               <div ref={parallaxImgRef} className="absolute inset-[-15%] w-[130%] h-[130%] will-change-transform">
//                 <Image
//                   src="/images/hafship-vesseln.jpg"
//                   alt="Hafship Advantage"
//                   fill
//                   className="object-cover opacity-80"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col w-full pt-4 lg:pt-24">
//             <div className="border-t border-brand-gray/20">
//               {WHY_DATA.map((item, index) => {
//                 const isOpen = openIndex === index;
//                 return (
//                   <div key={item.id} className="border-b border-brand-gray/20">
//                     <button
//                       onClick={() => toggleAccordion(index)}
//                       className="w-full flex items-center justify-between py-6 sm:py-8 text-left group"
//                     >
//                       <div className="flex items-center gap-6 sm:gap-10">
//                         <span className={`${raleway.className} text-sm sm:text-base font-bold text-brand-gray/40 group-hover:text-brand-gray transition-colors`}>
//                           {item.id}
//                         </span>
//                         <h3 className={`${raleway.className} text-xl sm:text-2xl font-bold text-brand-gray uppercase tracking-wide group-hover:text-brand-yellow transition-colors`}>
//                           {item.title}
//                         </h3>
//                       </div>
                      
//                       <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isOpen ? "bg-brand-yellow border-brand-yellow text-brand-dark rotate-180" : "border-brand-gray/20 text-brand-gray group-hover:border-brand-gray"}`}>
//                         <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                         </svg>
//                       </div>
//                     </button>

//                     <div
//                       className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[200px] opacity-100 pb-8" : "max-h-0 opacity-0 pb-0"}`}
//                     >
//                       <p className={`${lora.className} pl-16 sm:pl-20 text-lg text-brand-gray/70 leading-relaxed max-w-xl`}>
//                         {item.desc}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* =========================================================================
//           SECTIONS 12 & 13: CHARTERING INQUIRY FORM & CONTACT (White Background)
//       ========================================================================= */}
//       <section id="contact" className="relative z-20 w-full bg-white py-24 lg:py-32 px-4 sm:px-8 border-t border-brand-gray/50">
//         <div className="mx-auto max-w-[1600px] grid grid-cols-1 xl:grid-cols-12 gap-16 lg:gap-24">
          
//           {/* LEFT: Contact Desk Info */}
//           <div className="xl:col-span-4 flex flex-col items-start">
//             <p className={`${raleway.className} text-xs font-bold tracking-[0.3em] text-brand-blue uppercase mb-4`}>
//               GET IN TOUCH
//             </p>
//             <h2 className={`${merriweather.className} text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-dark leading-tight uppercase mb-12`}>
//               Chartering Desk.
//             </h2>

//             <div className="flex flex-col gap-8 w-full">
//               <div className="p-8 lg:p-10 rounded-2xl bg-brand-gray/20 border border-brand-gray/50">
//                 <h3 className={`${raleway.className} text-xl font-bold text-brand-dark uppercase tracking-wide mb-8`}>
//                   Arafath Mohamed
//                 </h3>
                
//                 <div className="flex flex-col gap-6">
//                   <a href="mailto:chartering@hafship.com" className="group flex items-center gap-5">
//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border border-brand-dark/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-sm">
//                       <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
//                     </div>
//                     <span className={`${lora.className} text-lg text-brand-dark group-hover:text-brand-blue font-medium transition-colors break-all`}>
//                       chartering@hafship.com
//                     </span>
//                   </a>

//                   <a href="tel:+13476802751" className="group flex items-center gap-5">
//                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border border-brand-dark/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-sm">
//                       <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
//                     </div>
//                     <span className={`${lora.className} text-lg text-brand-dark group-hover:text-brand-blue font-medium transition-colors`}>
//                       +1 347-680-2751 <span className="text-sm text-brand-dark/50 block mt-0.5">(Phone / WhatsApp)</span>
//                     </span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: Detailed Premium Dynamic Inquiry Form */}
//           <div className="xl:col-span-8">
//             <div className="bg-brand-gray/10 p-8 sm:p-12 lg:p-16 border border-brand-gray/50 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              
//               <div className="mb-10">
//                 <h3 className={`${raleway.className} text-2xl font-bold text-brand-dark uppercase tracking-wide mb-2`}>
//                   Submit Requirement
//                 </h3>
//                 <p className={`${lora.className} text-brand-dark/60`}>
//                   Configure your inquiry below to securely circulate requirements to our desk.
//                 </p>
//               </div>

//               <form className="flex flex-col gap-10">
                
//                 {/* 1. I AM A... (All 6 options from document) */}
//                 <div>
//                   <p className={`${raleway.className} text-xs font-bold text-brand-dark/60 uppercase tracking-widest mb-4`}>
//                     1. I am a:
//                   </p>
//                   <div className="flex flex-wrap gap-2.5">
//                     {["Shipowner", "Ship Operator", "Charterer", "Cargo Owner", "Trader", "Shipbroker"].map((role) => (
//                       <button
//                         key={role}
//                         type="button"
//                         onClick={() => setIdentity(role)}
//                         className={`${raleway.className} px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 border ${
//                           identity === role 
//                             ? "bg-brand-dark text-white border-brand-dark shadow-md" 
//                             : "bg-white text-brand-dark/70 border-brand-gray hover:border-brand-dark/40"
//                         }`}
//                       >
//                         {role}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="w-full h-px bg-brand-gray/60" />

//                 {/* 2. SUBMISSION TYPE (The 2-category dynamic form trigger) */}
//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
//                   <div>
//                     <p className={`${raleway.className} text-xs font-bold text-brand-dark/60 uppercase tracking-widest mb-4`}>
//                       2. Submission Type:
//                     </p>
//                     <div className="flex flex-wrap gap-3 p-1.5 bg-brand-gray/40 rounded-full w-fit border border-brand-gray/60 shadow-inner">
//                       {["Tonnage", "Cargo"].map((type) => (
//                         <button
//                           key={type}
//                           type="button"
//                           onClick={() => setFormType(type)}
//                           className={`${raleway.className} px-8 py-2.5 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
//                             formType === type 
//                               ? "bg-brand-blue text-white shadow-md" 
//                               : "bg-transparent text-brand-dark/60 hover:text-brand-dark"
//                           }`}
//                         >
//                           Submit {type}
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   {/* CHARTER TYPE (From Document) */}
//                   <div>
//                     <p className={`${raleway.className} text-xs font-bold text-brand-dark/60 uppercase tracking-widest mb-4`}>
//                       Charter Type:
//                     </p>
//                     <div className="flex flex-wrap gap-2.5">
//                       {["Voyage", "Time Charter", "Co-Brokerage"].map((type) => (
//                         <button
//                           key={type}
//                           type="button"
//                           onClick={() => setCharterType(type)}
//                           className={`${raleway.className} px-4 py-2 rounded text-xs font-bold tracking-wide transition-all duration-300 border ${
//                             charterType === type 
//                               ? "bg-brand-dark/10 text-brand-dark border-brand-dark/30" 
//                               : "bg-white text-brand-dark/50 border-transparent hover:bg-brand-gray/50"
//                           }`}
//                         >
//                           {type}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* 3. DYNAMIC REQUIREMENT DETAILS */}
//                 {/* Adding a key forces React to animate the div when formType changes */}
//                 <div key={formType} className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white p-8 rounded-2xl border border-brand-gray/50">
//                   <p className={`${raleway.className} text-xs font-bold text-brand-blue uppercase tracking-widest mb-8`}>
//                     3. {formType} Details
//                   </p>
                  
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    
//                     {/* SHOW THESE FIELDS ONLY FOR TONNAGE */}
//                     {formType === "Tonnage" && (
//                       <>
//                         <FloatingInput label="Vessel Type" placeholder="e.g. Supramax, Handysize" />
//                         <FloatingInput label="DWT" placeholder="e.g. 58,000" />
//                         <FloatingInput label="Built Year" placeholder="e.g. 2015" />
//                         <FloatingInput label="Open Position" placeholder="e.g. Navlakhi" />
//                         <FloatingInput label="Laycan" placeholder="e.g. 18-24 Sep" />
//                         <FloatingInput label="Redelivery" placeholder="e.g. Worldwide" />
//                       </>
//                     )}

//                     {/* SHOW THESE FIELDS ONLY FOR CARGO */}
//                     {formType === "Cargo" && (
//                       <>
//                         <FloatingInput label="Commodity" placeholder="e.g. Coal, Grain" />
//                         <FloatingInput label="Quantity (MT)" placeholder="e.g. 50,000 MT" />
//                         <FloatingInput label="Laycan" placeholder="e.g. 18-24 Sep" />
//                         <FloatingInput label="Load Port" placeholder="Location" />
//                         <FloatingInput label="Discharge Port" placeholder="Location" />
//                         <FloatingInput label="Loading/Discharge Rate" placeholder="e.g. 8000 SHINC" />
//                       </>
//                     )}

//                   </div>
//                 </div>

//                 {/* 4. SHARED MESSAGE BOX */}
//                 <div className="relative group">
//                   <textarea 
//                     placeholder="Additional details, special requirements, commission, or terms..." 
//                     rows="3" 
//                     className={`${lora.className} peer w-full bg-white rounded-xl border border-brand-gray/80 p-5 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-brand-dark font-medium resize-none placeholder-transparent shadow-sm`}
//                   />
//                   <label className={`${raleway.className} absolute left-4 -top-3 px-1 bg-brand-gray/10 rounded text-[10px] font-bold tracking-widest text-brand-dark/50 uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:bg-transparent peer-placeholder-shown:font-normal peer-focus:-top-3 peer-focus:bg-white peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-brand-blue pointer-events-none`}>
//                     Message / Special Requirements
//                   </label>
//                 </div>

//                 {/* SUBMIT BUTTON */}
//                 <button
//                   type="button"
//                   className={`${raleway.className} self-start inline-flex items-center justify-center rounded bg-brand-dark px-12 py-5 text-sm font-bold tracking-[0.2em] text-white transition-all duration-300 hover:bg-brand-blue hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(14,96,156,0.3)] uppercase`}
//                 >
//                   SEND INQUIRY
//                 </button>
//               </form>
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }


"use client";

import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, merriweather, lora } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link"; // Assuming you are using Next.js for routing

gsap.registerPlugin(ScrollTrigger);

const WHY_DATA = [
  {
    id: "01",
    title: "Market Access",
    desc: "Connecting cargo interests, charterers, owners and operators across major dry bulk markets.",
  },
  {
    id: "02",
    title: "Fast Response",
    desc: "Prompt handling of cargo and tonnage inquiries.",
  },
  {
    id: "03",
    title: "Global Network",
    desc: "Commercial relationships across India, Middle East, Asia, Europe and the Americas.",
  },
  {
    id: "04",
    title: "Commercial Focus",
    desc: "Focused on finding workable employment and cargo solutions.",
  },
  {
    id: "05",
    title: "Confidentiality",
    desc: "Respecting the confidentiality of owners, charterers, cargo interests and brokers.",
  },
  {
    id: "06",
    title: "Long-Term Relationships",
    desc: "Building sustainable commercial relationships rather than focusing only on individual fixtures.",
  },
];

export default function WhyAndContactSection() {
  const sectionRef = useRef(null);
  const parallaxImgRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const parallaxImg = parallaxImgRef.current;

    if (!section || !parallaxImg) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        parallaxImg,
        { yPercent: 15 },
        {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <>
      {/* =========================================================================
          SECTION 10: WHY HAFSHIP (Dark Background)
      ========================================================================= */}
      <section
        ref={sectionRef}
        id="why-hafship"
        className="relative z-20 w-full bg-brand-dark py-24 lg:py-32 px-4 sm:px-8 overflow-hidden"
      >
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: Sticky Header & Parallax Image */}
          <div className="flex flex-col w-full lg:sticky lg:top-32">
            <div className="mb-12">
              <p className={`${raleway.className} text-sm font-bold tracking-[0.3em] text-brand-yellow uppercase mb-4`}>
                OUR ADVANTAGE
              </p>
              <h2 className={`${merriweather.className} text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-white leading-tight uppercase`}>
                Why Hafship.
              </h2>
            </div>

            <div className="relative w-full max-w-[550px] aspect-[4/3] rounded-sm overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-brand-gray/10 bg-brand-dark">
              <div ref={parallaxImgRef} className="absolute inset-[-15%] w-[130%] h-[130%] will-change-transform">
                <Image
                  src="/images/hafship-vesseln.jpg"
                  alt="Hafship Advantage"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Interactive Accordion List */}
          <div className="flex flex-col w-full pt-4 lg:pt-24">
            <div className="border-t border-brand-gray/20">
              {WHY_DATA.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={item.id} className="border-b border-brand-gray/20">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between py-6 sm:py-8 text-left group"
                    >
                      <div className="flex items-center gap-6 sm:gap-10">
                        <span className={`${raleway.className} text-sm sm:text-base font-bold text-brand-gray/40 group-hover:text-brand-gray transition-colors`}>
                          {item.id}
                        </span>
                        <h3 className={`${raleway.className} text-xl sm:text-2xl font-bold text-brand-gray uppercase tracking-wide group-hover:text-brand-yellow transition-colors`}>
                          {item.title}
                        </h3>
                      </div>
                      
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isOpen ? "bg-brand-yellow border-brand-yellow text-brand-dark rotate-180" : "border-brand-gray/20 text-brand-gray group-hover:border-brand-gray"}`}>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[200px] opacity-100 pb-8" : "max-h-0 opacity-0 pb-0"}`}
                    >
                      <p className={`${lora.className} pl-16 sm:pl-20 text-lg text-brand-gray/70 leading-relaxed max-w-xl`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTIONS 12 & 13: CONTACT DESK & REQUIREMENT PORTAL (White Background)
      ========================================================================= */}
      <section id="contact" className="relative z-20 w-full bg-white py-24 lg:py-32 px-4 sm:px-8 border-t border-brand-gray/50">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Contact Desk Info */}
          <div className="flex flex-col items-start w-full">
            <p className={`${raleway.className} text-sm font-bold tracking-[0.3em] text-brand-blue uppercase mb-4`}>
              GET IN TOUCH
            </p>
            <h2 className={`${merriweather.className} text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-tight uppercase mb-12`}>
              Chartering Desk.
            </h2>

            <div className="w-full max-w-lg p-10 lg:p-12 rounded-[32px] bg-brand-gray/20 border border-brand-gray/50 shadow-sm transition-all duration-500 hover:shadow-lg">
              <h3 className={`${raleway.className} text-2xl font-bold text-brand-dark uppercase tracking-wide mb-8`}>
                Arafath Mohamed
              </h3>
              
              <div className="flex flex-col gap-8">
                <a href="mailto:chartering@hafship.com" className="group flex items-center gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white border border-brand-dark/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-md">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span className={`${lora.className} text-xl text-brand-dark group-hover:text-brand-blue font-medium transition-colors break-all`}>
                    chartering@hafship.com
                  </span>
                </a>

                <a href="tel:+13476802751" className="group flex items-center gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white border border-brand-dark/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-md">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <span className={`${lora.className} text-xl text-brand-dark group-hover:text-brand-blue font-medium transition-colors`}>
                    +1 347-680-2751 <span className="text-base text-brand-dark/50 block mt-1">(Phone / WhatsApp)</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Premium Call to Action Portal */}
          <div className="flex flex-col items-start w-full">
            <div className="bg-brand-dark p-10 sm:p-14 lg:p-16 rounded-[40px] shadow-[0_30px_60px_rgba(3,24,46,0.3)] w-full">
              
              <div className="mb-10 border-b border-brand-gray/20 pb-8">
                <h3 className={`${raleway.className} text-3xl font-bold text-white uppercase tracking-wide mb-4`}>
                  Submit Requirement
                </h3>
                <p className={`${lora.className} text-lg text-brand-gray/80 leading-relaxed`}>
                  Access our dedicated chartering portal to securely circulate your cargo or tonnage requirements directly to our brokers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 w-full">
                {/* Link to the new dedicated form page for Tonnage */}
                <Link 
                  href="/submit-requirement?type=tonnage"
                  className="group relative flex flex-1 items-center justify-center overflow-hidden rounded-full bg-brand-blue px-8 py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(14,96,156,0.4)]"
                >
                  <span className={`${raleway.className} relative z-10 text-sm sm:text-base font-bold tracking-[0.2em] text-white uppercase`}>
                    Submit Tonnage
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                </Link>

                {/* Link to the new dedicated form page for Cargo */}
                <Link 
                  href="/submit-requirement?type=cargo"
                  className="group relative flex flex-1 items-center justify-center overflow-hidden rounded-full border border-brand-gray/30 bg-transparent px-8 py-6 transition-all duration-300 hover:border-brand-yellow hover:bg-brand-yellow hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(212,175,55,0.2)]"
                >
                  <span className={`${raleway.className} relative z-10 text-sm sm:text-base font-bold tracking-[0.2em] text-brand-gray uppercase transition-colors duration-300 group-hover:text-brand-dark`}>
                    Submit Cargo
                  </span>
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-3 opacity-60">
                <svg className="h-5 w-5 text-brand-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className={`${raleway.className} text-xs font-bold tracking-widest text-brand-gray uppercase`}>
                  Secure & Confidential
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}