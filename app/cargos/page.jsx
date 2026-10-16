"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { monaSans } from "@/app/fonts";
import Image from "next/image";
import {
  SplitLetters,
  PremiumButton,
  LETTER_RISE,
  LETTER_FADE,
} from "@/app/components/ui/PremiumUI";

gsap.registerPlugin(ScrollTrigger);

const COMMODITIES = [
  "Coal",
  "Petcoke",
  "Limestone",
  "Gypsum",
  "Salt",
  "Grain",
  "Fertilizers",
  "Ores",
  "Minerals",
];

const HERO_TEXT =
  "HAFSHIP provides professional dry bulk shipbroking and chartering services, connecting shipowners, operators, charterers, traders and cargo interests with the right commercial opportunities and tonnage.";

const INTRO_STATEMENT =
  "We work across a broad range of dry bulk commodities and trading routes, connecting suitable cargo requirements with competitive and workable tonnage solutions.";

export default function CargosPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);
  const introRef = useRef(null);
  const headRef = useRef(null);
  const gridRef = useRef(null);
  const panelRef = useRef(null);
  const tagRef = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. HERO (plays on load)
      gsap
        .timeline({ delay: 0.2 })
        .fromTo(
          ".hero-eyebrow",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(".hero-title-letter", LETTER_RISE.from, LETTER_RISE.to, "-=0.4")
        .fromTo(
          ".hero-text-letter",
          LETTER_FADE.from,
          { ...LETTER_FADE.to, stagger: 0.008 },
          "-=0.5"
        );

      // 2. HERO image parallax
      if (heroImageRef.current && heroRef.current) {
        gsap.to(heroImageRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 3. INTRO: statement letters, then the two paragraphs
      gsap
        .timeline({
          scrollTrigger: { trigger: introRef.current, start: "top 80%" },
        })
        .fromTo(".intro-letter", LETTER_FADE.from, {
          ...LETTER_FADE.to,
          stagger: 0.008,
        })
        .fromTo(
          ".intro-fade",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.2 },
          "-=0.9"
        );

      // Vertical divider line (desktop)
      gsap.fromTo(
        ".intro-line-anim",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: { trigger: introRef.current, start: "top 80%" },
        }
      );

      // 4. GRID header: eyebrow + title letters
      gsap
        .timeline({
          scrollTrigger: { trigger: headRef.current, start: "top 85%" },
        })
        .fromTo(
          ".grid-eyebrow",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(".grid-title-letter", LETTER_RISE.from, LETTER_RISE.to, "-=0.4");

      // 5. COMMODITY tiles: each reveals when it scrolls into view
      gsap.set(".cargo-tile-anim", { opacity: 0, y: 30, scale: 0.95 });
      ScrollTrigger.batch(".cargo-tile-anim", {
        start: "top 92%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            clearProps: "transform",
          }),
      });

      // 6. CARGO panel
      gsap.fromTo(
        ".panel-fade",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: panelRef.current, start: "top 88%" },
        }
      );

      // 7. Bottom tagline
      gsap.fromTo(
        ".tag-fade",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: tagRef.current, start: "top 90%" },
        }
      );

      // 8. CTA: title letters, paragraph, button
      gsap
        .timeline({
          scrollTrigger: { trigger: ctaRef.current, start: "top 80%" },
        })
        .fromTo(".cta-title-letter", LETTER_RISE.from, LETTER_RISE.to)
        .fromTo(
          ".cta-fade",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.12 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className={`${monaSans.className} w-full flex-grow bg-brand-dark`}
    >
      {/* ========================================================
          HERO
      ======================================================== */}
      <section
        ref={heroRef}
        className="relative w-full min-h-[65vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-16 lg:pb-24 px-5 sm:px-10"
      >
        {/* Parallax background */}
        <div
          ref={heroImageRef}
          className="absolute -top-[15%] left-0 h-[130%] w-full will-change-transform"
        >
          <Image
            src="/images/hafship-vesseln.jpg"
            alt="Dry Bulk Cargo Operations"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-brand-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1400px] flex flex-col items-center text-center">
          <p className="hero-eyebrow text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase mb-6 sm:mb-8">
            Operations
          </p>

          <h1 className="font-black tracking-normal uppercase leading-[0.95] mb-8 sm:mb-10 text-[14vw] sm:text-7xl lg:text-[100px] xl:text-[120px]">
            <span className="block text-white">
              <SplitLetters text="Cargo &" letterClass="hero-title-letter" mask />
            </span>
            <span className="block text-brand-blue">
              <SplitLetters text="Tonnage" letterClass="hero-title-letter" mask />
            </span>
          </h1>

          <p className="max-w-4xl text-base sm:text-xl lg:text-2xl text-white/85 font-medium leading-relaxed">
            <SplitLetters text={HERO_TEXT} letterClass="hero-text-letter" />
          </p>
        </div>
      </section>

      {/* ========================================================
          INTRO (split layout)
      ======================================================== */}
      <section className="relative w-full bg-brand-dark py-16 sm:py-20 lg:py-32 px-5 sm:px-10 lg:px-16 overflow-hidden">
        <div
          ref={introRef}
          className="relative mx-auto max-w-[1800px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start"
        >
          {/* Center vertical divider (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/15">
            <div className="intro-line-anim h-full w-full origin-top bg-brand-blue" />
          </div>

          {/* Left: bold statement */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl sm:text-4xl lg:text-[38px] xl:text-5xl text-white font-bold leading-snug tracking-normal">
              <SplitLetters text={INTRO_STATEMENT} letterClass="intro-letter" />
            </h3>
          </div>

          {/* Right: two paragraphs */}
          <div className="flex flex-col gap-8 sm:gap-10 lg:pt-3">
            <div className="intro-fade border-l-[3px] border-brand-blue pl-5 sm:pl-8">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 font-medium leading-relaxed">
                Our approach is centred on finding workable, commercially viable
                employment and cargo solutions. We evaluate the key commercial
                elements of each requirement, including vessel position, size,
                trading area, cargo, laycan, loading and discharge ports,
                freight levels, charter terms and operational requirements.
              </p>
            </div>

            <div className="intro-fade border-l-[3px] border-brand-blue pl-5 sm:pl-8">
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 font-medium leading-relaxed">
                Confidentiality is fundamental to our brokerage practice. We
                respect the commercial sensitivity of cargo requirements, vessel
                positions, freight ideas, charter terms, negotiations and
                counterparties. Information is handled with discretion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          COMMODITIES GRID
      ======================================================== */}
      <section
        id="cargos-grid"
        className="relative z-20 w-full bg-brand-dark border-t border-white/10 py-16 sm:py-20 lg:py-32 px-5 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1800px]">
          {/* HEADER */}
          <div
            ref={headRef}
            className="mb-12 sm:mb-16 border-b border-white/15 pb-8 sm:pb-10"
          >
            <div className="grid-eyebrow flex items-center gap-4 mb-6">
              <span className="h-px w-10 sm:w-14 bg-brand-blue" />
              <span className="text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase">
                Dry Bulk Commodities
              </span>
            </div>

            <h2 className="font-black tracking-normal uppercase leading-[1] text-[11vw] sm:text-6xl lg:text-[64px] xl:text-[80px]">
              <span className="block text-white">
                <SplitLetters text="Cargo" letterClass="grid-title-letter" mask />
              </span>
              <span className="block text-brand-blue">
                <SplitLetters text="Requirements" letterClass="grid-title-letter" mask />
              </span>
            </h2>
          </div>

          {/* TILES: 2 cols on phone (last one centered full row), 3x3 from tablet up */}
          <div
            ref={gridRef}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 lg:gap-6 w-full"
          >
            {COMMODITIES.map((item) => (
              <div
                key={item}
                className="cargo-tile-anim group relative flex items-center justify-center overflow-hidden border border-white/15 bg-white/[0.04] px-3 py-8 sm:px-4 sm:py-12 lg:py-16 cursor-default last:col-span-2 sm:last:col-span-1 transition-colors duration-500 hover:border-brand-blue"
              >
                {/* blue fill rising from the bottom on hover */}
                <span className="absolute inset-0 translate-y-full bg-brand-blue transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0" />
                <span className="relative z-10 text-center text-base min-[400px]:text-lg sm:text-2xl lg:text-3xl font-black uppercase tracking-wide text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CARGO PANEL */}
          <div
            ref={panelRef}
            className="mt-12 sm:mt-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border border-white/15 bg-white/[0.04] p-6 sm:p-10 lg:p-14"
          >
            <div className="panel-fade">
              <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-normal leading-tight mb-3">
                Have cargo <span className="text-brand-blue">ready?</span>
              </p>
              <p className="text-base sm:text-xl lg:text-2xl text-white/75 font-medium">
                Circulate your requirements securely.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <PremiumButton
                href="/submit-cargo"
                label="Submit Cargo"
                variant="dark"
                className="panel-fade"
              />
            </div>
          </div>

          {/* BOTTOM TAGLINE */}
          <div
            ref={tagRef}
            className="mt-14 sm:mt-20 border-t border-white/15 pt-10 sm:pt-12 text-center"
          >
            <p className="tag-fade text-sm sm:text-lg lg:text-xl font-bold tracking-[0.2em] text-brand-blue uppercase mb-4">
              Market Knowledge <span className="text-white/40 mx-2 sm:mx-3">•</span> Commercial Thinking{" "}
              <span className="text-white/40 mx-2 sm:mx-3">•</span> Trusted Connections
            </p>
            <p className="tag-fade mx-auto max-w-5xl text-lg sm:text-2xl lg:text-3xl text-white/80 font-medium leading-relaxed">
              HAFSHIP combines market access, commercial awareness and
              relationship-driven broking to connect the right cargo with the
              right tonnage.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          CALL TO ACTION
      ======================================================== */}
      <section
        ref={ctaRef}
        className="w-full bg-brand-blue py-16 sm:py-20 lg:py-28 px-5 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1800px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16">
          <div className="flex-1">
            <h2 className="font-black tracking-normal uppercase leading-[1] text-white text-[11vw] sm:text-6xl lg:text-[64px] xl:text-[80px] mb-6">
              <SplitLetters text="Looking to cooperate?" letterClass="cta-title-letter" mask />
            </h2>
            <p className="cta-fade text-base sm:text-xl lg:text-2xl text-brand-dark font-medium leading-relaxed max-w-2xl">
              We welcome suitable cargo and tonnage circulation to add value to
              your fixtures.
            </p>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <PremiumButton
              href="/contact"
              label="Contact Broking Desk"
              variant="dark"
              className="cta-fade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}