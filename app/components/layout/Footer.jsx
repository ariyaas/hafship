"use client";

import { raleway, merriweather, lora } from "@/app/fonts";

export default function Footer() {
  return (
    // Outer wrapper creates the 3% spacing around the entire footer so it "floats"
    <div className="w-full px-[3%] pb-[3%] pt-12 bg-transparent">
      <footer className="relative z-20 w-full bg-brand-dark text-white pt-20 sm:pt-24 pb-12 overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-brand-gray/10">
        
        {/* =========================================================================
            GIANT HAFSHIP WATERMARK (IN THE BACKGROUND)
        ========================================================================= */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex items-end justify-center select-none overflow-hidden">
          <span
            className={`${merriweather.className} text-[16vw] font-black uppercase tracking-tighter leading-none text-white/[0.02] sm:text-white/[0.03]`}
          >
            HAFSHIP
          </span>
        </div>

        {/* Subtle Ambient Radial Glow */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-brand-yellow/10 blur-[160px]" />

        {/* ================= FOREGROUND CONTENT (FLOATING DIRECTLY ON TOP) ================= */}
        <div className="mx-auto max-w-[1500px] px-8 sm:px-12 lg:px-16 relative z-10">
          
          {/* TOP SECTION: 4-COLUMN CONTENT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
            
            {/* Col 1: Brand Logo & Paragraph (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <a href="/" className="flex items-center gap-3 mb-8">
                <img
                  src="/finallogohafship.png"
                  alt="HAFSHIP Logo"
                  className="h-20 sm:h-24 lg:h-28 w-auto object-contain drop-shadow-lg"
                />
              </a>

              {/* Exact company description - Increased size and brightened color */}
              <p className={`${lora.className} text-base sm:text-lg text-slate-100 leading-relaxed max-w-sm mb-8 font-medium`}>
                Hafship is an independent dry bulk shipbroking house connecting shipowners, operators, charterers and cargo interests across global dry bulk markets.
              </p>

              {/* 24/7 Live Status Badge - Text changed to white and size increased */}
              <div className="inline-flex items-center gap-3 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-5 py-2.5 font-mono text-xs sm:text-sm text-white uppercase tracking-widest">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Global Desk Active</span>
              </div>
            </div>

            {/* Col 2: Services (3 Cols) */}
            <div className="lg:col-span-3 text-left">
              <h4 className={`${raleway.className} text-base font-bold tracking-[0.2em] text-brand-yellow uppercase mb-8`}>
                OUR SERVICES
              </h4>
              <ul className={`${raleway.className} space-y-5 text-base text-slate-200 font-medium`}>
                {[
                  { name: "Dry Bulk Chartering", href: "/chartering" },
                  { name: "Freight Forwarding", href: "/freight-forwarding" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-white hover:translate-x-1 inline-block uppercase tracking-wider"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Navigation (2 Cols) */}
            <div className="lg:col-span-2 text-left">
              <h4 className={`${raleway.className} text-base font-bold tracking-[0.2em] text-brand-yellow uppercase mb-8`}>
                NAVIGATION
              </h4>
              <ul className={`${raleway.className} space-y-5 text-base text-slate-200 font-medium`}>
                {[
                  { name: "Home", href: "/" },
                  { name: "About Us", href: "/about" },
                  { name: "Open Tonnage", href: "/tonnage" },
                  { name: "Cargos", href: "/submit-cargo" },
                  { name: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-white hover:translate-x-1 inline-block uppercase tracking-wider"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact & Dubai Headquarters (3 Cols) */}
            <div className="lg:col-span-3 text-left">
              <h4 className={`${raleway.className} text-base font-bold tracking-[0.2em] text-brand-yellow uppercase mb-8`}>
                CHARTERING DESK
              </h4>
              <div className={`${raleway.className} space-y-6 text-base text-slate-200`}>
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <svg className="h-6 w-6 text-brand-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="leading-relaxed tracking-wide">
                    Office: 1129, 11th Floor, Tamani Arts Offices, Business Bay, Dubai - UAE
                  </p>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-4">
                  <svg className="h-6 w-6 text-brand-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="flex flex-col gap-2">
                    <a href="tel:+13476802751" className="hover:text-white transition-colors tracking-widest font-medium">
                      +1 347-680-2751
                    </a>
                    <a href="tel:+971554314252" className="hover:text-white transition-colors tracking-widest text-slate-300 font-medium">
                      +971 55 431 4252
                    </a>
                  </div>
                </div>

                {/* Chartering Email Only */}
                <div className="flex items-start gap-4">
                  <svg className="h-6 w-6 text-brand-blue shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:chartering@hafship.com" className="hover:text-white transition-colors tracking-wider uppercase mt-1 font-bold">
                    chartering@hafship.com
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* BOTTOM ROW: COPYRIGHT */}
          <div className="flex flex-col items-center justify-center pt-10 text-sm text-slate-400">
            <p className={`${raleway.className} tracking-widest uppercase text-center font-medium`}>
              © {new Date().getFullYear()} <span className="text-brand-yellow font-bold">HAFSHIP FZ LLC</span>. ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}