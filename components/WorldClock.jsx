"use client";

import { useEffect, useState } from "react";

const HUBS = [
  { name: "SYD", tz: "Australia/Sydney", offset: "+10" },
  { name: "SGP", tz: "Asia/Singapore", offset: "+8" },
  { name: "IND", tz: "Asia/Kolkata", offset: "+5.5" },
  { name: "UAE", tz: "Asia/Dubai", offset: "+4" },
  { name: "LON", tz: "Europe/London", offset: "+1" },
  { name: "NYC", tz: "America/New_York", offset: "-4" },
];

const MENU_LINKS = [
  { label: "HOME", href: "#" },
  { label: "ABOUT", href: "#about" },
  { label: "DRY BULK", href: "#dry-bulk" },
  { label: "CARGO", href: "#cargo" },
  { label: "TONNAGE", href: "#tonnage" },
  { label: "MARKETS", href: "#markets" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [hubTimes, setHubTimes] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function calculateTimes() {
      const now = new Date();
      const updated = HUBS.map((hub) => {
        const timeStr = now.toLocaleString("en-US", {
          timeZone: hub.tz,
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: false,
        });

        const [h, m, s] = timeStr.split(":").map((v) => parseInt(v, 10));
        const hourAngle = ((h % 12) + m / 60) * 30;
        const minuteAngle = (m + s / 60) * 6;
        const isDay = h >= 6 && h < 18;

        return {
          ...hub,
          hourAngle,
          minuteAngle,
          digital: `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`,
          isDay,
        };
      });
      setHubTimes(updated);
    }

    calculateTimes();
    const interval = setInterval(calculateTimes, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full font-sans">
      {/* ========================================================
          LAYER 1: SOLID MARITIME DARK BLUE BACKGROUND (#03182E)
      ======================================================== */}
      <div className="border-b border-white/15 bg-[#03182E] px-4 py-2 sm:px-8 shadow-sm">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4">
          {/* Left: Direct Phone & Email (Now visible on mobile and wrapping if needed) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-[11px]">
            <a
              href="tel:+13476802751"
              className="flex items-center gap-1.5 font-medium text-white transition-colors hover:text-[#D4AF37]"
            >
              <svg className="h-3.5 w-3.5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-mono tracking-wider">+1 347-680-2751</span>
            </a>

            <a
              href="mailto:chartering@hafship.com"
              className="flex items-center gap-1.5 font-medium text-white transition-colors hover:text-[#D4AF37]"
            >
              <svg className="h-3.5 w-3.5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>chartering@hafship.com</span>
            </a>
          </div>

          {/* Right: Chronometer Dials - HIDDEN ON MOBILE (hidden lg:flex) */}
          <div className="hidden lg:flex items-center gap-2 sm:gap-3">
            {hubTimes.map((hub) => (
              <div
                key={hub.name}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-2 py-1 transition-colors hover:bg-white/10"
              >
                {/* Watchmaker Dial */}
                <div className="relative flex h-6 w-6 shrink-0 items-center justify-center">
                  <div
                    className={`absolute inset-0 rounded-full border-[1.5px] ${
                      hub.isDay
                        ? "border-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.3)]"
                        : "border-[#065E9A] shadow-[0_0_6px_rgba(6,94,154,0.4)]"
                    }`}
                  />
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <line x1="12" y1="12" x2="12" y2="6" stroke={hub.isDay ? "#fbbf24" : "#60a5fa"} strokeWidth="2.2" strokeLinecap="round" transform={`rotate(${hub.hourAngle} 12 12)`} />
                    <line x1="12" y1="12" x2="12" y2="3.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" transform={`rotate(${hub.minuteAngle} 12 12)`} />
                    <circle cx="12" cy="12" r="1.5" fill="#065E9A" />
                  </svg>
                </div>

                {/* City + Digital Time + Day/Night Icon */}
                <div className="flex flex-col text-left leading-none">
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] font-bold tracking-wider text-slate-200">{hub.name}</span>
                    {hub.isDay ? (
                      <svg className="h-2.5 w-2.5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg className="h-2.5 w-2.5 text-cyan-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                      </svg>
                    )}
                  </div>
                  <span className="mt-0.5 font-mono text-[10px] font-semibold text-white tracking-wide">{hub.digital}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          LAYER 2: MAIN NAVBAR (TRANSPARENT TO SOLID ON SCROLL)
      ======================================================== */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#03182E]/95 py-2.5 shadow-xl backdrop-blur-md"
            : "bg-transparent py-3"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 sm:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
              src="/HAFSHIP.png"
              alt="HAFSHIP Logo"
              className="h-9 sm:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
            />
          </a>

          {/* Center Links - Desktop Only */}
          <div className="hidden items-center gap-7 lg:flex">
            {MENU_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-[11px] font-bold tracking-widest text-white drop-shadow-[0_1px_5px_rgba(0,0,0,0.9)] transition-colors hover:text-[#D4AF37] uppercase"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right: SUBMIT CARGO Button (Muted Gold) */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="#submit-cargo"
              className="relative inline-flex items-center justify-center rounded bg-[#D4AF37] px-6 py-2.5 text-[11px] font-bold tracking-widest text-[#03182E] shadow-sm transition-all duration-300 hover:bg-white uppercase"
            >
              SUBMIT CARGO
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded text-white lg:hidden z-50 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ========================================================
          MOBILE DRAWER (Left to Right Slide)
      ======================================================== */}
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-[280px] bg-[#03182E] shadow-2xl transition-transform duration-300 ease-in-out lg:hidden z-50 flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
            <img src="/HAFSHIP.png" alt="HAFSHIP Logo" className="h-8 w-auto object-contain" />
            <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6 font-bold tracking-wider text-sm text-white">
          {MENU_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#D4AF37] transition-colors uppercase block"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#submit-cargo"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 text-center rounded bg-[#D4AF37] py-3 text-xs font-bold tracking-widest text-[#03182E] uppercase transition-colors hover:bg-white"
          >
            SUBMIT CARGO
          </a>
        </div>
        
        {/* Mobile Drawer Footer with Contact Info */}
        <div className="p-6 border-t border-white/10 text-xs text-white/70">
            <p className="mb-2">chartering@hafship.com</p>
            <p>+1 347-680-2751</p>
        </div>
      </div>
    </header>
  );
}