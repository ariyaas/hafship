"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { monaSans } from "@/app/fonts";

gsap.registerPlugin(ScrollTrigger);

// All services open the chartering page (change this if your route is different)
const CHARTERING_HREF = "/chartering";

const SERVICES = [
  "Voyage Chartering",
  "Trip Time Chartering",
  "Period Employment",
  "Cargo & Tonnage Matching",
  "Tonnage Positioning",
  "Freight & Charter Rate Negotiations",
  "Fixture Coordination",
  "Post-Fixture Commercial Support",
];

const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Chartering", href: "/chartering" },
  { name: " Cargos", href: "/cargos" },
  { name: "Markets", href: "/markets" },
  { name: "Contact", href: "/contact" },
];

const LOCATIONS = ["India", "Dubai", "Houston"];

function ColumnHeading({ children }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="h-px w-10 bg-brand-blue" />
      <h4 className="text-sm sm:text-base font-bold tracking-[0.3em] text-brand-blue uppercase">
        {children}
      </h4>
    </div>
  );
}

export default function Footer() {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 90%" },
        }
      );

      gsap.fromTo(
        ".footer-col",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: footerRef.current, start: "top 85%" },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`${monaSans.className} relative z-20 w-full bg-brand-dark text-white overflow-hidden`}
    >
      {/* animated blue top line */}
      <div className="footer-line h-px w-full origin-left bg-brand-blue" />

      {/* GIANT HAFSHIP WATERMARK */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex items-end justify-center select-none overflow-hidden">
        <span className="text-[16vw] font-black uppercase tracking-tighter leading-none text-white/[0.03]">
          HAFSHIP
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1800px] px-5 sm:px-10 lg:px-16 pt-16 sm:pt-20 lg:pt-24 pb-10">
        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-14 sm:pb-16 border-b border-white/15">
          {/* Col 1: Our Services */}
          <div className="footer-col lg:col-span-4 text-left">
            <ColumnHeading>Our Services</ColumnHeading>
            <ul className="space-y-4 text-sm sm:text-base text-white/80 font-medium">
              {SERVICES.map((name) => (
                <li key={name}>
                  <a
                    href={CHARTERING_HREF}
                    className="inline-block uppercase tracking-wider transition-all duration-300 hover:text-brand-blue hover:translate-x-1"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-col lg:col-span-2 text-left">
            <ColumnHeading>Navigation</ColumnHeading>
            <ul className="space-y-4 text-sm sm:text-base text-white/80 font-medium">
              {NAVIGATION.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="inline-block uppercase tracking-wider transition-all duration-300 hover:text-brand-blue hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Locations */}
          <div className="footer-col lg:col-span-2 text-left">
            <ColumnHeading>Locations</ColumnHeading>
            <ul className="space-y-4 text-sm sm:text-base font-medium">
              {LOCATIONS.map((place, i) => (
                <li key={place} className="flex items-center gap-4">
                  <span className="text-sm font-bold tracking-widest text-brand-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="uppercase tracking-wider text-white">
                    {place}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Broking Desk */}
          <div className="footer-col lg:col-span-4 text-left">
            <ColumnHeading>Broking Desk</ColumnHeading>

            <div className="space-y-7 text-sm sm:text-base text-white/80">
              {/* Phones */}
              <div className="flex items-start gap-4">
                <svg
                  className="h-6 w-6 text-brand-blue shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+13476802751"
                    className="font-bold tracking-widest text-white transition-colors duration-300 hover:text-brand-blue"
                  >
                    +1 347-680-2751
                  </a>
                  <a
                    href="tel:+971554314252"
                    className="font-bold tracking-widest text-white transition-colors duration-300 hover:text-brand-blue"
                  >
                    +971 55 431 4252
                  </a>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-4">
                <svg
                  className="h-6 w-6 text-brand-blue shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="flex flex-col gap-4 min-w-0">
                  <a
                    href="mailto:dry@hafship.com"
                    className="group block transition-colors duration-300"
                  >
                    <span className="block text-xs font-bold tracking-[0.2em] uppercase text-brand-blue mb-1">
                      Dry Cargo
                    </span>
                    <span className="block font-bold tracking-wider text-white break-all transition-colors duration-300 group-hover:text-brand-blue">
                      dry@hafship.com
                    </span>
                  </a>
                  <a
                    href="mailto:tanker@hafship.com"
                    className="group block transition-colors duration-300"
                  >
                    <span className="block text-xs font-bold tracking-[0.2em] uppercase text-brand-blue mb-1">
                      Tanker
                    </span>
                    <span className="block font-bold tracking-wider text-white break-all transition-colors duration-300 group-hover:text-brand-blue">
                      tanker@hafship.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ROW ================= */}
        <div className="flex flex-col items-center justify-center pt-10 text-sm">
          <p className="tracking-[0.2em] uppercase text-center font-medium text-white/60">
            © {new Date().getFullYear()}{" "}
            <span className="text-brand-blue font-bold">HAFSHIP FZ LLC</span>.
            ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}