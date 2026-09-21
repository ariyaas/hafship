"use client";

import { outfit, raleway } from "@/app/fonts";

export default function Footer() {
  return (
    <footer className="relative z-20 w-full bg-[#01060F] text-white pt-20 sm:pt-24 pb-16 overflow-hidden border-t border-white/[0.08]">
      
      {/* =========================================================================
          GIANT HAFSHIP WATERMARK (IN THE BACKGROUND BEHIND ALL FOOTER CONTENT)
      ========================================================================= */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex items-end justify-center select-none overflow-hidden">
        <span
          className={`${outfit.className} text-[18vw] font-black uppercase tracking-tighter leading-none text-white/[0.035] sm:text-white/[0.045] drop-shadow-[0_0_100px_rgba(6,94,154,0.2)]`}
        >
          HAFSHIP
        </span>
      </div>

      {/* Subtle Ambient Radial Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-[#065E9A]/15 blur-[160px]" />

      {/* ================= FOREGROUND CONTENT (FLOATING DIRECTLY ON TOP) ================= */}
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* TOP SECTION: 4-COLUMN CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Statement (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img
                src="/HAFSHIP.png"
                alt="HAFSHIP Logo"
                className="h-11 sm:h-12 w-auto object-contain drop-shadow"
              />
            </a>

            <p className={`${raleway.className} text-sm text-slate-300 leading-relaxed max-w-sm mb-6`}>
              Delivering trust across oceans and borders. Comprehensive dry bulk vessel chartering, multimodal freight forwarding, cargo broking, and 24/7 port agency operations.
            </p>

            {/* 24/7 Live Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#065E9A]/40 bg-[#065E9A]/15 px-3.5 py-1 font-mono text-[10px] text-[#60A5FA]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>GLOBAL COMMERCIAL DESK ACTIVE</span>
            </div>
          </div>

          {/* Col 2: Specialist Services (3 Cols) */}
          <div className="lg:col-span-3 text-left">
            <h4 className={`${outfit.className} text-sm font-bold tracking-[0.2em] text-[#60A5FA] uppercase mb-6`}>
              SPECIALIST SERVICES
            </h4>
            <ul className={`${raleway.className} space-y-3 text-xs sm:text-sm text-slate-300 font-medium`}>
              {[
                { name: "Vessel Chartering", href: "#services" },
                { name: "Freight Forwarding", href: "#services" },
                { name: "Cargo Broking", href: "#services" },
                { name: "Ship Agency & Husbandry", href: "#services" },
                { name: "Customs Clearance", href: "#services" },
                { name: "Multimodal Logistics", href: "#services" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-[#38BDF8] hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2 text-left">
            <h4 className={`${outfit.className} text-sm font-bold tracking-[0.2em] text-[#60A5FA] uppercase mb-6`}>
              NAVIGATION
            </h4>
            <ul className={`${raleway.className} space-y-3 text-xs sm:text-sm text-slate-300 font-medium`}>
              {[
                { name: "Home", href: "#" },
                { name: "About Us", href: "#about" },
                { name: "Our Capabilities", href: "#services" },
                { name: "Why Choose Us", href: "#why-choose" },
                { name: "Commercial Inquiries", href: "#contact" },
                { name: "Get A Quote", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-[#38BDF8] hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Dubai Headquarters & Inquiries (3 Cols) */}
          <div className="lg:col-span-3 text-left">
            <h4 className={`${outfit.className} text-sm font-bold tracking-[0.2em] text-[#60A5FA] uppercase mb-6`}>
              DUBAI HEADQUARTERS
            </h4>
            <div className={`${raleway.className} space-y-4 text-xs sm:text-sm text-slate-300`}>
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-[#065E9A] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="leading-relaxed">
                  Office 1129, 11th Floor, Tamani Arts Offices, Business Bay, Dubai – UAE
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-[#065E9A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+971554314252" className="hover:text-white transition-colors font-mono">
                  +971 55 431 4252
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-[#065E9A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sales@hafship.com" className="hover:text-white transition-colors font-mono">
                  sales@hafship.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT & LEGAL */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-400">
          <p className={`${raleway.className}`}>
            © {new Date().getFullYear()} <span className="text-white font-semibold">HAFSHIP</span> Maritime Global. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Carriage</a>
            <a href="#" className="hover:text-white transition-colors">Port Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}