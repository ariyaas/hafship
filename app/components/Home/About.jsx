"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { monaSans } from "@/app/fonts";
import {
  SplitLetters,
  PremiumButton,
  LETTER_RISE,
  LETTER_FADE,
} from "@/app/components/ui/PremiumUI";

gsap.registerPlugin(ScrollTrigger);

const TITLE_PARTS = [
  { text: "Connecting Cargo,", color: "text-brand-gray" },
  { text: "Tonnage &", color: "text-brand-blue" },
  { text: "Opportunity", color: "text-brand-gray" },
];

const PARA_1 =
  "HAFSHIP connects shipowners, operators, charterers, traders and cargo interests across international dry bulk and tanker markets.";
const PARA_2 =
  "We facilitate cargo and tonnage matching, chartering, commercial negotiations and fixture coordination.";
const SERVICES_LINE = "Dry Bulk | Tankers | Chartering | Cargo & Tonnage Broking";
const TAGLINE = "From Cargo to Fixture — Connecting the Right Opportunities.";

export default function AboutSection() {
  const containerRef = useRef(null);
  const titleBoxRef = useRef(null);
  const titleRef = useRef(null);
  const imageWrapRef = useRef(null);
  const rightContentRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Desktop (1024px+): ONE line, full width.
    // Below 1024px: title wraps with responsive sizes.
    const fitTitle = () => {
      const box = titleBoxRef.current;
      const el = titleRef.current;
      if (!box || !el) return;

      if (window.innerWidth < 1024) {
        el.style.fontSize = "";
        return;
      }
      el.style.fontSize = "100px";
      const ratio = box.clientWidth / el.scrollWidth;
      el.style.fontSize = `${100 * ratio}px`;
    };

    fitTitle();
    if (document.fonts?.ready) document.fonts.ready.then(fitTitle);
    window.addEventListener("resize", fitTitle);

    const ctx = gsap.context(() => {
      // 1. TITLE
      gsap.fromTo(".title-letter", LETTER_RISE.from, {
        ...LETTER_RISE.to,
        scrollTrigger: { trigger: titleBoxRef.current, start: "top 85%" },
      });

      // 2. IMAGE
      gsap.fromTo(
        imageWrapRef.current,
        { scale: 1.05, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: { trigger: imageWrapRef.current, start: "top 85%" },
        }
      );

      // 3. PARAGRAPHS, services line, tagline, then BUTTON
      const tl = gsap.timeline({
        scrollTrigger: { trigger: rightContentRef.current, start: "top 85%" },
      });

      tl.fromTo(".p1-letter", LETTER_FADE.from, {
        ...LETTER_FADE.to,
        stagger: 0.015,
      })
        .fromTo(
          ".p2-letter",
          LETTER_FADE.from,
          { ...LETTER_FADE.to, stagger: 0.01 },
          "<0.3"
        )
        .fromTo(
          ".about-tag",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".p3-letter",
          LETTER_FADE.from,
          { ...LETTER_FADE.to, stagger: 0.012 },
          "-=0.4"
        )
        .fromTo(
          ".about-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        );
    }, container);

    return () => {
      window.removeEventListener("resize", fitTitle);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative z-20 w-full bg-brand-dark py-16 sm:py-20 lg:py-24 lg:min-h-screen overflow-hidden"
    >
      {/* TITLE */}
      <div className="w-full px-5 sm:px-8 mb-10 sm:mb-14 lg:mb-16">
        <div ref={titleBoxRef} className="w-full">
          <h2
            ref={titleRef}
            className={`${monaSans.className} block lg:inline-block lg:whitespace-nowrap font-black uppercase tracking-normal leading-[1.05] text-[10.5vw] sm:text-[9vw] md:text-[8vw] lg:text-[100px]`}
          >
            {TITLE_PARTS.map((part, i) => (
              <span
                key={i}
                className={`${part.color} block lg:inline-block ${
                  i < TITLE_PARTS.length - 1 ? "lg:mr-[0.28em]" : ""
                }`}
              >
                <SplitLetters text={part.text} letterClass="title-letter" mask />
              </span>
            ))}
          </h2>
        </div>
      </div>

      {/* IMAGE + PARAGRAPHS */}
      <div className="w-full max-w-[1800px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20 items-stretch">
          {/* LEFT: IMAGE */}
          <div className="lg:col-span-7">
            <div
              ref={imageWrapRef}
              className="relative w-full h-[42vh] sm:h-[50vh] md:h-[55vh] lg:h-[75vh] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              <Image
                src="/images/ex21.png"
                alt="HAFSHIP Cargo and Tonnage"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>

          {/* RIGHT: paragraphs + services line + tagline + button */}
          <div className="lg:col-span-5">
            <div
              ref={rightContentRef}
              className="flex flex-col w-full lg:h-[75vh] gap-8 sm:gap-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                <p
                  className={`${monaSans.className} text-base sm:text-lg xl:text-2xl text-white/90 leading-relaxed font-medium`}
                >
                  <SplitLetters text={PARA_1} letterClass="p1-letter" />
                </p>

                <p
                  className={`${monaSans.className} text-base sm:text-lg xl:text-2xl text-white/90 leading-relaxed font-medium`}
                >
                  <SplitLetters text={PARA_2} letterClass="p2-letter" />
                </p>
              </div>

              {/* Services line + closing tagline */}
              <div className="flex flex-col gap-5 sm:gap-6">
                <p
                  className={`about-tag ${monaSans.className} text-sm sm:text-base xl:text-lg font-bold uppercase tracking-[0.2em] text-brand-blue leading-relaxed`}
                >
                  {SERVICES_LINE}
                </p>

                <p
                  className={`${monaSans.className} text-base sm:text-lg xl:text-2xl text-white/90 leading-relaxed font-medium`}
                >
                  <SplitLetters text={TAGLINE} letterClass="p3-letter" />
                </p>
              </div>

              <div className="border-t border-white/15 pt-8 sm:pt-10 lg:mt-auto">
                <PremiumButton
                  href="/about"
                  label="More About Us"
                  variant="dark"
                  className="about-btn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}