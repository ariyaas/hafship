"use client";

import { outfit, raleway } from "@/app/fonts";

export default function QuoteSection() {
  return (
    // Outer section with light gray background (#EBEFF3)
    <section className="relative z-20 w-full bg-[#EBEFF3] py-8 sm:py-12 px-2 sm:px-4 lg:px-6">
      
      {/* ================= TALL, LUXURY BANNER (NO DARK OVERLAYS) ================= */}
      <div className="relative mx-auto w-[96%] max-w-[1800px] min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center rounded-[32px] sm:rounded-[48px] overflow-hidden shadow-2xl border border-white/20">
        
        {/* Your Final Maritime Background Image */}
        <img
          src="/images/newbgimgs.png" // Save your image as public/images/newbgimgs.png
          alt="Hafship Maritime Ocean Fleet"
          className="absolute inset-0 h-full w-full object-cover select-none"
        />

        {/* ✅ ALL DARK BLACK OVERLAYS COMPLETELY REMOVED */}

        {/* ================= CONTENT: EXPANDED TALL HEIGHT & MATCHING COLORS ================= */}
        <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center md:justify-between px-8 sm:px-16 lg:px-24 py-32 sm:py-40 lg:py-48 gap-10">
          
          {/* Left Text */}
          <div className="max-w-3xl text-left">
            {/* Tagline with Dashes */}
            <p className={`${outfit.className} text-xs sm:text-sm font-bold tracking-[0.25em] text-cyan-200 uppercase mb-4 flex items-center gap-2.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]`}>
              <span>GET IN TOUCH WITH US ANYTIME</span>
              <span className="text-cyan-200 tracking-widest font-black text-base">——</span>
            </p>

            {/* Big Headline */}
            <h2
              className={`${outfit.className} text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]`}
            >
              Looking for the best

              <br />
              shipping service?
            </h2>
          </div>

          {/* Right: High-Contrast Luxury Button (White on Ocean Blue) */}
          <div className="shrink-0">
            <a
              href="/contact"
              className={`${raleway.className} group inline-flex items-center justify-center gap-3.5 rounded-2xl bg-white px-10 py-5 text-xs sm:text-sm font-bold tracking-widest text-[#065E9A] shadow-[0_12px_35px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:bg-slate-100 hover:shadow-[0_15px_40px_rgba(255,255,255,0.4)] uppercase`}
            >
              <span>GET A QUOTE</span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#065E9A] text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}