"use client";

import Link from "next/link";
import { monaSans } from "@/app/fonts";

/* ------------------------------------------------------------------
   GSAP presets for the letter animations
   Usage:
   gsap.fromTo(".my-letter", LETTER_RISE.from, { ...LETTER_RISE.to, scrollTrigger: {...} })
------------------------------------------------------------------- */
export const LETTER_RISE = {
  // big titles: letters rise from below (use with mask)
  from: { yPercent: 110 },
  to: { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.035 },
};

export const LETTER_FADE = {
  // paragraphs: letters fade in and rise a little
  from: { y: 24, opacity: 0 },
  to: { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.012 },
};

/* ------------------------------------------------------------------
   SplitLetters
   Splits text into words, then letters (words stay together so
   wrapping is clean on mobile). Give each use its own letterClass.
   mask = true for title rise effect.
------------------------------------------------------------------- */
export function SplitLetters({ text, letterClass, mask = false }) {
  return text.split(" ").map((word, wi, arr) => (
    <span
      key={wi}
      className={`inline-block whitespace-nowrap align-bottom ${
        mask ? "overflow-hidden pb-[0.08em]" : ""
      }`}
      style={{ marginRight: wi < arr.length - 1 ? "0.28em" : 0 }}
    >
      {word.split("").map((ch, ci) => (
        <span
          key={ci}
          className={`${letterClass} inline-block will-change-transform`}
        >
          {ch}
        </span>
      ))}
    </span>
  ));
}

/* ------------------------------------------------------------------
   PremiumButton
   variant="dark"  -> for dark / blue backgrounds (white outline)
   variant="light" -> for white backgrounds (dark outline)
   fullWidth       -> stretches to the container
   className       -> add your animation class here (e.g. "about-btn")
------------------------------------------------------------------- */
export function PremiumButton({
  href,
  label,
  variant = "dark",
  fullWidth = false,
  className = "",
}) {
  const isDark = variant === "dark";

  const border = isDark
    ? "border-white/40 hover:border-white"
    : "border-brand-dark/40 hover:border-brand-dark";
  const fill = isDark ? "bg-white" : "bg-brand-dark";
  const text = isDark
    ? "text-white group-hover:text-brand-dark"
    : "text-brand-dark group-hover:text-white";
  const arrowBox = isDark
    ? "border-white/40 text-white group-hover:border-brand-dark/20 group-hover:text-brand-dark"
    : "border-brand-dark/40 text-brand-dark group-hover:border-white/20 group-hover:text-white";

  return (
    <div className={`${fullWidth ? "w-full" : "w-fit"} ${className}`}>
      <Link
        href={href}
        className={`${monaSans.className} group relative ${
          fullWidth ? "flex w-full" : "inline-flex"
        } items-stretch overflow-hidden border transition-colors duration-500 ${border}`}
      >
        {/* sliding fill */}
        <span
          className={`absolute inset-0 -translate-x-full ${fill} transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0`}
        />

        {/* label: smaller on phones, same as before from tablet up */}
        <span
          className={`relative z-10 flex-1 px-4 py-3 sm:px-8 sm:py-5 text-xs sm:text-lg lg:text-xl font-bold uppercase tracking-[0.15em] sm:tracking-[0.25em] transition-colors duration-500 ${text}`}
        >
          {label}
        </span>

        {/* arrow box */}
        <span
          className={`relative z-10 flex w-10 sm:w-14 shrink-0 items-center justify-center border-l transition-colors duration-500 ${arrowBox}`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 sm:h-[18px] sm:w-[18px] transition-transform duration-500 group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </span>
      </Link>
    </div>
  );
}