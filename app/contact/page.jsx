"use client";

import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { raleway, merriweather, lora } from "@/app/fonts";

// Reusable sleek floating input component with responsive text sizing
function FloatingInput({ label, placeholder, name, required = false }) {
  return (
    <div className="relative group">
      <input 
        type="text" 
        name={name}
        placeholder={placeholder}
        required={required}
        className={`${lora.className} peer w-full bg-transparent border-b-2 border-brand-gray py-2.5 sm:py-3 text-base sm:text-lg text-brand-dark font-medium placeholder-transparent focus:outline-none focus:border-brand-blue transition-colors`} 
      />
      <label className={`${raleway.className} absolute left-0 -top-4 sm:-top-5 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-brand-dark/50 uppercase transition-all peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-placeholder-shown:top-2.5 peer-placeholder-shown:font-normal peer-focus:-top-4 sm:peer-focus:-top-5 peer-focus:text-[10px] sm:peer-focus:text-[11px] peer-focus:font-bold peer-focus:text-brand-blue pointer-events-none`}>
        {label} {required && "*"}
      </label>
    </div>
  );
}

export default function ContactPage() {
  const headerRef = useRef(null);

  // State for the advanced dynamic form
  const [identity, setIdentity] = useState("Shipowner");
  const [formType, setFormType] = useState("Tonnage");
  const [charterType, setCharterType] = useState("Voyage");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-up",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.9, ease: "power3.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full flex-grow bg-brand-gray min-h-screen flex flex-col">
      {/* ================= HERO SECTION ================= */}
      <section ref={headerRef} className="relative w-full bg-brand-dark pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-28 px-4 sm:px-8 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-brand-yellow/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-[1400px] relative z-10 flex flex-col items-center text-center">
          <p className="fade-up text-[11px] sm:text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase mb-4 sm:mb-6">
            Get In Touch
          </p>
          <h1 className={`fade-up ${merriweather.className} text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white uppercase mb-4 sm:mb-6 leading-tight`}>
            Contact & <span className="text-brand-yellow">Inquiries</span>
          </h1>
          <p className={`fade-up ${lora.className} max-w-xl sm:max-w-2xl text-sm sm:text-base lg:text-lg text-slate-300 font-medium leading-relaxed px-2`}>
            Connect directly with our chartering desk or submit your vessel tonnage and cargo requirements securely.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTACT & FORM SECTION ================= */}
      <section className="flex-grow w-full py-12 sm:py-20 lg:py-28 px-4 sm:px-8">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: Contact Desk Info */}
          <div className="xl:col-span-4 flex flex-col items-start w-full lg:sticky lg:top-28">
            <p className={`${raleway.className} text-xs sm:text-sm font-bold tracking-[0.3em] text-brand-blue uppercase mb-3`}>
              CHARTERING DESK
            </p>
            <h2 className={`${merriweather.className} text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark leading-tight uppercase mb-8`}>
              Hafship Desk.
            </h2>

            <div className="flex flex-col gap-6 w-full">
              <div className="p-6 sm:p-10 rounded-2xl sm:rounded-[24px] bg-white border border-brand-gray/50 shadow-sm w-full">
                <h3 className={`${raleway.className} text-xl sm:text-2xl font-bold text-brand-dark uppercase tracking-wide mb-6 sm:mb-8`}>
                  Arafath Mohamed
                </h3>
                
                <div className="flex flex-col gap-6 sm:gap-8">
                  <a href="mailto:chartering@hafship.com" className="group flex items-center gap-4 sm:gap-6">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-brand-gray/30 border border-brand-dark/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-sm">
                      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <span className={`${lora.className} text-base sm:text-lg text-brand-dark group-hover:text-brand-blue font-medium transition-colors break-all`}>
                      chartering@hafship.com
                    </span>
                  </a>

                  <a href="tel:+13476802751" className="group flex items-center gap-4 sm:gap-6">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-brand-gray/30 border border-brand-dark/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-sm">
                      <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <span className={`${lora.className} text-base sm:text-lg text-brand-dark group-hover:text-brand-blue font-medium transition-colors`}>
                      +1 347-680-2751 <span className="text-xs sm:text-sm text-brand-dark/50 block mt-0.5">(Phone / WhatsApp)</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Detailed Dynamic Inquiry Form */}
          <div className="xl:col-span-8 w-full">
            <div className="bg-white p-6 sm:p-10 lg:p-16 border border-brand-gray/50 rounded-2xl sm:rounded-[32px] shadow-[0_15px_40px_rgba(0,0,0,0.04)] w-full">
              
              <div className="mb-8 sm:mb-12">
                <h3 className={`${raleway.className} text-2xl sm:text-3xl font-bold text-brand-dark uppercase tracking-wide mb-3`}>
                  Submit Requirement
                </h3>
                <p className={`${lora.className} text-sm sm:text-base text-brand-dark/60`}>
                  Configure your inquiry below to securely circulate requirements directly to our desk.
                </p>
              </div>

              {/* Netlify Form Setup */}
              <form 
                name="chartering-inquiry" 
                method="POST" 
                data-netlify="true" 
                className="flex flex-col gap-8 sm:gap-12"
              >
                <input type="hidden" name="form-name" value="chartering-inquiry" />
                <input type="hidden" name="Identity" value={identity} />
                <input type="hidden" name="Submission_Type" value={formType} />
                <input type="hidden" name="Charter_Type" value={charterType} />

                {/* 0. BASIC CONTACT INFO */}
                <div>
                   <p className={`${raleway.className} text-xs sm:text-sm font-bold text-brand-dark/60 uppercase tracking-[0.2em] mb-4 sm:mb-6`}>
                 Contact Details:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-10">
                     <FloatingInput name="Name" label="Full Name / Company" placeholder="e.g. John Doe - XYZ Corp" required />
                     <FloatingInput name="Email" label="Email Address" placeholder="e.g. john@example.com" required />
                  </div>
                </div>

                <div className="w-full h-px bg-brand-gray/60" />
                
                {/* 1. I AM A... (All 6 options) */}
                <div>
                  <p className={`${raleway.className} text-xs sm:text-sm font-bold text-brand-dark/60 uppercase tracking-[0.2em] mb-4 sm:mb-6`}>
                    1. I am a:
                  </p>
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {["Shipowner", "Ship Operator", "Charterer", "Cargo Owner", "Trader", "Shipbroker"].map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => setIdentity(role)}
                        className={`${raleway.className} px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 border ${
                          identity === role 
                            ? "bg-brand-dark text-white border-brand-dark shadow-md scale-105" 
                            : "bg-brand-gray/30 text-brand-dark/70 border-brand-gray hover:border-brand-dark/40 hover:bg-brand-gray/50"
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-brand-gray/60" />

                {/* 2. SUBMISSION TYPE & CHARTER TYPE */}
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 sm:gap-8">
                  <div>
                    <p className={`${raleway.className} text-xs sm:text-sm font-bold text-brand-dark/60 uppercase tracking-[0.2em] mb-4 sm:mb-6`}>
                      2. Submission Type:
                    </p>
                    <div className="flex flex-wrap gap-2 p-1.5 bg-brand-gray/30 rounded-full w-full sm:w-fit border border-brand-gray/60 shadow-inner">
                      {["Tonnage", "Cargo"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormType(type)}
                          className={`${raleway.className} flex-1 sm:flex-none px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                            formType === type 
                              ? "bg-brand-blue text-white shadow-md scale-105" 
                              : "bg-transparent text-brand-dark/60 hover:text-brand-dark"
                          }`}
                        >
                          Submit {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className={`${raleway.className} text-xs sm:text-sm font-bold text-brand-dark/60 uppercase tracking-[0.2em] mb-4 sm:mb-6`}>
                      Charter Type:
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {["Voyage", "Time Charter", "Co-Brokerage"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setCharterType(type)}
                          className={`${raleway.className} px-4 py-2 sm:px-5 sm:py-2.5 rounded-md text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 border ${
                            charterType === type 
                              ? "bg-brand-dark/10 text-brand-dark border-brand-dark/30 shadow-sm" 
                              : "bg-brand-gray/30 text-brand-dark/70 border-brand-gray hover:border-brand-dark/40"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. DYNAMIC REQUIREMENT DETAILS */}
                <div key={formType} className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-brand-gray/20 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-brand-gray/50 shadow-sm">
                  <p className={`${raleway.className} text-xs sm:text-sm font-bold text-brand-blue uppercase tracking-[0.2em] mb-6 sm:mb-8`}>
                    3. {formType} Details
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-10">
                    {formType === "Tonnage" && (
                      <>
                        <FloatingInput name="Vessel_Type" label="Vessel Type" placeholder="e.g. Supramax, Handysize" />
                        <FloatingInput name="DWT" label="DWT" placeholder="e.g. 58,000" />
                        <FloatingInput name="Built_Year" label="Built Year" placeholder="e.g. 2015" />
                        <FloatingInput name="Open_Position" label="Open Position" placeholder="e.g. Navlakhi" />
                        <FloatingInput name="Laycan" label="Laycan" placeholder="e.g. 18-24 Sep" />
                        <FloatingInput name="Redelivery" label="Redelivery" placeholder="e.g. Worldwide" />
                      </>
                    )}

                    {formType === "Cargo" && (
                      <>
                        <FloatingInput name="Commodity" label="Commodity" placeholder="e.g. Coal, Grain" />
                        <FloatingInput name="Quantity" label="Quantity (MT)" placeholder="e.g. 50,000 MT" />
                        <FloatingInput name="Laycan" label="Laycan" placeholder="e.g. 18-24 Sep" />
                        <FloatingInput name="Load_Port" label="Load Port" placeholder="Location" />
                        <FloatingInput name="Discharge_Port" label="Discharge Port" placeholder="Location" />
                        <FloatingInput name="Load_Discharge_Rate" label="Loading/Discharge Rate" placeholder="e.g. 8000 SHINC" />
                      </>
                    )}
                  </div>
                </div>

                {/* 4. SHARED MESSAGE BOX */}
                <div className="relative group">
                  <textarea 
                    name="Message"
                    placeholder="Additional details, special requirements, commission, or terms..." 
                    rows="4" 
                    className={`${lora.className} peer w-full bg-brand-gray/20 rounded-xl sm:rounded-2xl border border-brand-gray/80 p-4 sm:p-6 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-base sm:text-lg text-brand-dark font-medium resize-none placeholder-transparent shadow-sm`}
                  />
                  <label className={`${raleway.className} absolute left-4 sm:left-5 -top-3 sm:-top-4 px-2 bg-white rounded text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-brand-dark/50 uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 sm:peer-placeholder-shown:top-6 peer-placeholder-shown:bg-transparent peer-placeholder-shown:font-normal peer-focus:-top-3 sm:peer-focus:-top-4 peer-focus:bg-white peer-focus:text-[10px] sm:peer-focus:text-[11px] peer-focus:font-bold peer-focus:text-brand-blue pointer-events-none`}>
                    Message / Special Requirements
                  </label>
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className={`${raleway.className} w-full sm:w-auto self-start inline-flex items-center justify-center rounded-full bg-brand-dark px-10 sm:px-14 py-4 sm:py-5 text-sm sm:text-base font-bold tracking-[0.25em] text-white transition-all duration-300 hover:bg-brand-blue hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(14,96,156,0.3)] uppercase mt-2`}
                >
                  SEND INQUIRY
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}