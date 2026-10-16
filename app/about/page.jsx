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

// --- DATA ---
const vesselSizes = [
  "HANDYSIZE",
  "HANDYMAX",
  "SUPRAMAX",
  "ULTRAMAX",
  "PANAMAX",
  "CAPESIZE",
];

const VESSEL_BADGES = [
  "Handysize",
  "Handymax",
  "Supramax",
  "Ultramax",
  "Panamax",
  "Capesize & More",
];

const CORE_SERVICES = [
  "Voyage Chartering",
  "Time Chartering",
  "Period Employment",
  "Cargo & Tonnage Matching",
  "Tonnage Positioning",
  "Freight & Charter Rate Negotiations",
  "Fixture Coordination",
  "Post-Fixture Commercial Support",
];

const HERO_TEXT =
  "HAFSHIP is a dedicated dry bulk shipbroking house connecting Shipowners, Vessel Operators, Charterers, Traders and Cargo Interests across international dry bulk markets.";

/* One row of the services list */
function ServiceRow({ service, number }) {
  return (
    <div className="core-row group relative flex items-center gap-4 sm:gap-8 border-b border-white/15 py-5 sm:py-6 cursor-default">
      {/* blue line that grows on hover */}
      <span className="pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-brand-blue transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />
      <span className="w-7 shrink-0 text-xs sm:text-base font-bold tracking-widest text-brand-blue">
        {String(number).padStart(2, "0")}
      </span>
      <h3 className="min-w-0 text-base min-[400px]:text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-wide text-white/90 transition-colors duration-300 group-hover:text-brand-blue">
        {service}
      </h3>
    </div>
  );
}

export default function AboutPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);
  const marqueeRef = useRef(null);
  const storyContentRef = useRef(null);
  const imagesRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const execHeadRef = useRef(null);
  const listRef = useRef(null);
  const noteRef = useRef(null);
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

      // 3. MARQUEE fade-in
      gsap.fromTo(
        marqueeRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: marqueeRef.current, start: "top 95%" },
        }
      );

      // 4. STORY content: eyebrow, title letters, then paragraphs / badges / button
      gsap
        .timeline({
          scrollTrigger: { trigger: storyContentRef.current, start: "top 80%" },
        })
        .fromTo(
          ".story-eyebrow",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(".story-title-letter", LETTER_RISE.from, LETTER_RISE.to, "-=0.4")
        .fromTo(
          ".story-fade",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.12 },
          "-=0.5"
        );

      // 5. STORY images: reveal
      gsap.fromTo(
        [img1Ref.current, img2Ref.current],
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: imagesRef.current, start: "top 85%" },
        }
      );

      // 6. STORY images: inner parallax (separate from the reveal, so they never fight)
      gsap.utils.toArray(".img-parallax").forEach((el, i) => {
        gsap.fromTo(
          el,
          { yPercent: -7 },
          {
            yPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 1 + i * 0.5,
            },
          }
        );
      });

      // 7. EXECUTION header: eyebrow, title letters, paragraph
      gsap
        .timeline({
          scrollTrigger: { trigger: execHeadRef.current, start: "top 80%" },
        })
        .fromTo(
          ".exec-eyebrow",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(".exec-title-letter", LETTER_RISE.from, LETTER_RISE.to, "-=0.4")
        .fromTo(
          ".exec-fade",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          "-=0.6"
        );

      // 8. Services list rows
      gsap.fromTo(
        ".core-row",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: listRef.current, start: "top 85%" },
        }
      );

      // 9. Note card
      gsap.fromTo(
        noteRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: noteRef.current, start: "top 90%" },
        }
      );

      // 10. CTA: title letters, paragraph, button
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
          SECTION 1: HERO
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
            src="/images/ex1.png"
            alt="HAFSHIP About Us"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        {/* Overlays: dark tint + fade into the dark page */}
        <div className="absolute inset-0 bg-brand-dark/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1400px] flex flex-col items-center text-center">
          <p className="hero-eyebrow text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase mb-6 sm:mb-8">
            About Us
          </p>

          <h1 className="font-black tracking-normal uppercase leading-[0.95] mb-8 sm:mb-10 text-[14vw] sm:text-7xl lg:text-[100px] xl:text-[120px]">
            <span className="block text-white">
              <SplitLetters text="Global" letterClass="hero-title-letter" mask />
            </span>
            <span className="block text-brand-blue">
              <SplitLetters text="Chartering" letterClass="hero-title-letter" mask />
            </span>
          </h1>

          <p className="max-w-4xl text-base sm:text-xl lg:text-2xl text-white/85 font-medium leading-relaxed">
            <SplitLetters text={HERO_TEXT} letterClass="hero-text-letter" />
          </p>
        </div>
      </section>

      {/* ========================================================
          RUNNING STRIP (vessel sizes)
      ======================================================== */}
      <div
        ref={marqueeRef}
        className="w-full overflow-hidden select-none bg-brand-blue py-4 lg:py-5"
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes aboutMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .about-marquee-track {
              display: flex;
              width: max-content;
              animation: aboutMarquee 30s linear infinite;
            }
          `,
          }}
        />
        <div className="about-marquee-track items-center">
          {[...vesselSizes, ...vesselSizes, ...vesselSizes, ...vesselSizes].map(
            (vessel, index) => (
              <div key={index} className="flex items-center shrink-0">
                <span className="text-white text-lg sm:text-2xl lg:text-3xl font-black uppercase tracking-[0.2em] px-6 sm:px-12 cursor-default">
                  {vessel}
                </span>
                <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0 bg-brand-dark" />
              </div>
            )
          )}
        </div>
      </div>

      {/* ========================================================
          SECTION 2: STORY + 2 IMAGES
      ======================================================== */}
      <section className="relative z-20 w-full bg-brand-dark py-16 sm:py-20 lg:py-32 px-5 sm:px-10 lg:px-16 overflow-hidden">
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 xl:gap-24 items-center">
            {/* LEFT: CONTENT */}
            <div
              ref={storyContentRef}
              className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1"
            >
              <div className="story-eyebrow flex items-center gap-4 mb-6">
                <span className="h-px w-10 sm:w-14 bg-brand-blue" />
                <span className="text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase">
                  Who We Are
                </span>
              </div>

              <h2 className="font-black tracking-normal uppercase leading-[1] mb-8 sm:mb-10 text-brand-blue text-[11vw] sm:text-6xl lg:text-[64px] xl:text-[80px]">
                <span className="block">
                  <SplitLetters text="Broking" letterClass="story-title-letter" mask />
                </span>
                <span className="block text-white">
                  <SplitLetters text="Operations" letterClass="story-title-letter" mask />
                </span>
              </h2>

              <div className="flex flex-col gap-6 sm:gap-8 max-w-3xl">
                <p className="story-fade text-base sm:text-lg lg:text-xl xl:text-2xl text-white/85 font-medium leading-relaxed">
                  HAFSHIP is a dry bulk shipbroking house focused on connecting
                  shipowners, vessel operators, charterers, traders and cargo
                  interests across international dry bulk markets.
                </p>

                <p className="story-fade text-base sm:text-lg lg:text-xl xl:text-2xl text-white/75 font-medium leading-relaxed">
                  We provide commercially focused shipbroking and chartering
                  services, supporting clients from the initial cargo or vessel
                  requirement through negotiations, fixture and post-fixture
                  coordination.
                </p>

                <p className="story-fade text-base sm:text-lg lg:text-xl xl:text-2xl text-white/75 font-medium leading-relaxed">
                  Our brokerage activity covers voyage chartering, trip time
                  charters and period employment, with a focus on:
                </p>

                {/* Vessel size badges */}
                <div className="story-fade flex flex-wrap items-center gap-3 text-xs sm:text-sm lg:text-base font-bold tracking-widest uppercase">
                  {VESSEL_BADGES.map((vessel) => (
                    <span
                      key={vessel}
                      className="rounded-full border border-white/30 bg-white/10 text-white px-4 py-2 sm:px-6 sm:py-3 transition-colors duration-300 hover:bg-brand-blue hover:border-brand-blue"
                    >
                      {vessel}
                    </span>
                  ))}
                </div>

                <p className="story-fade text-base sm:text-lg lg:text-xl xl:text-2xl text-white/75 font-medium leading-relaxed">
                  We work across a broad range of dry bulk commodities and
                  trading routes, connecting suitable cargo requirements with
                  competitive and workable tonnage solutions.
                </p>
              </div>

              <div className="mt-10 sm:mt-12 w-full sm:w-auto">
                <PremiumButton
                  href="/contact"
                  label="Contact Us"
                  variant="dark"
                  className="story-fade"
                />
              </div>
            </div>

            {/* RIGHT: 2 IMAGES */}
            <div
              ref={imagesRef}
              className="lg:col-span-5 relative h-[380px] sm:h-[520px] lg:h-[650px] xl:h-[720px] w-full order-1 lg:order-2"
            >
              <div className="relative w-full h-full max-w-[560px] xl:max-w-[650px] mx-auto lg:ml-auto">
                {/* Img 1: top right */}
                <div
                  ref={img1Ref}
                  className="absolute top-0 right-0 w-[78%] h-[75%] overflow-hidden shadow-xl bg-brand-dark border border-white/10 will-change-transform"
                >
                  <div className="img-parallax absolute -inset-[8%] will-change-transform">
                    <Image
                      src="/images/26.png"
                      alt="Global Dry Bulk Operations"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-brand-dark/10 pointer-events-none" />
                </div>

                {/* Img 2: bottom left, overlapping */}
                <div
                  ref={img2Ref}
                  className="absolute bottom-0 left-0 w-[72%] h-[65%] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.5)] border-4 border-brand-dark bg-brand-dark z-10 will-change-transform"
                >
                  <div className="img-parallax absolute -inset-[8%] will-change-transform">
                    <Image
                      src="/images/ex2.png"
                      alt="Shipbroking and Tonnage"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: COMMERCIAL EXECUTION & SERVICES
      ======================================================== */}
      <section className="w-full bg-brand-dark border-t border-white/10 py-16 sm:py-20 lg:py-32 px-5 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1800px]">
          {/* Header */}
          <div
            ref={execHeadRef}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12 sm:mb-16"
          >
            <div className="lg:col-span-7">
              <div className="exec-eyebrow flex items-center gap-4 mb-6">
                <span className="h-px w-10 sm:w-14 bg-brand-blue" />
                <span className="text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase">
                  Our Core Services
                </span>
              </div>

              <h2 className="font-black tracking-normal uppercase leading-[1] text-[11vw] sm:text-6xl lg:text-[64px] xl:text-[76px]">
                <span className="block text-white">
                  <SplitLetters
                    text="Commercial Execution"
                    letterClass="exec-title-letter"
                    mask
                  />
                </span>
                <span className="block text-brand-blue">
                  <SplitLetters text="& Support" letterClass="exec-title-letter" mask />
                </span>
              </h2>
            </div>

            <p className="exec-fade lg:col-span-5 text-base sm:text-lg lg:text-xl xl:text-2xl text-white/80 font-medium leading-relaxed">
              We provide commercially focused chartering solutions, facilitating
              the efficient matching of cargo requirements with suitable tonnage
              while supporting negotiations and fixture execution from initial
              enquiry through post-fixture follow-up.
            </p>
          </div>

          {/* Services list: 2 columns on desktop */}
          <div
            ref={listRef}
            className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20"
          >
            <div className="border-t border-white/15">
              {CORE_SERVICES.slice(0, 4).map((service, i) => (
                <ServiceRow key={service} service={service} number={i + 1} />
              ))}
            </div>
            <div className="lg:border-t border-white/15">
              {CORE_SERVICES.slice(4).map((service, i) => (
                <ServiceRow key={service} service={service} number={i + 5} />
              ))}
            </div>
          </div>

          {/* Note card (brand blue) */}
          <div
            ref={noteRef}
            className="mt-12 sm:mt-16 bg-brand-blue p-7 sm:p-12 lg:p-16"
          >
            <p className="text-lg sm:text-2xl lg:text-3xl text-white font-medium leading-relaxed max-w-5xl">
              We work closely with principals and counterparties throughout the
              negotiation process, helping ensure that commercial terms are
              clearly communicated and efficiently progressed.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: CALL TO ACTION
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