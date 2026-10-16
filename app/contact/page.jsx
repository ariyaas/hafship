"use client";

import { useRef, useLayoutEffect, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { monaSans } from "@/app/fonts";
import Image from "next/image";
import {
  SplitLetters,
  LETTER_RISE,
  LETTER_FADE,
} from "@/app/components/ui/PremiumUI";

gsap.registerPlugin(ScrollTrigger);

const HERO_TEXT =
  "Connect directly with our broking desk or submit your requirements securely.";

const CONTACT_ROWS = [
  {
    id: "01",
    label: "Dry Cargo",
    value: "dry@hafship.com",
    href: "mailto:dry@hafship.com",
  },
  {
    id: "02",
    label: "Tanker",
    value: "tanker@hafship.com",
    href: "mailto:tanker@hafship.com",
  },
  {
    id: "03",
    label: "Phone / WhatsApp",
    value: "+1 347-680-2751",
    href: "tel:+13476802751",
  },
];

/* Floating label input - dark brand version */
function FloatingInput({ label, placeholder, name, required = false, type = "text" }) {
  return (
    <div className="form-fade relative">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="peer w-full bg-transparent border-b-2 border-white/20 py-3 text-lg sm:text-xl text-white font-medium placeholder-transparent focus:outline-none focus:border-brand-blue transition-colors duration-300"
      />
      <label className="pointer-events-none absolute left-0 -top-5 text-xs sm:text-sm font-bold tracking-[0.2em] text-white/50 uppercase transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg peer-placeholder-shown:font-medium peer-placeholder-shown:tracking-normal peer-focus:-top-5 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:font-bold peer-focus:tracking-[0.2em] peer-focus:text-brand-blue">
        {label} {required && "*"}
      </label>
    </div>
  );
}

/* Submit button - same look as PremiumButton (dark variant) but a real <button> */
function SubmitButton({ label, disabled = false }) {
  return (
    <div className="form-fade w-full sm:w-auto">
      <button
        type="submit"
        disabled={disabled}
        className="group relative flex w-full sm:inline-flex sm:w-auto items-stretch overflow-hidden border border-white/40 hover:border-white transition-colors duration-500 text-left disabled:opacity-50 disabled:pointer-events-none"
      >
        <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" />

        <span className="relative z-10 flex-1 px-6 py-4 sm:px-8 sm:py-5 text-sm sm:text-lg lg:text-xl font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white group-hover:text-brand-dark transition-colors duration-500">
          {label}
        </span>

        <span className="relative z-10 flex w-12 sm:w-14 shrink-0 items-center justify-center border-l border-white/40 text-white group-hover:border-brand-dark/20 group-hover:text-brand-dark transition-colors duration-500">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-500 group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default function ContactPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const heroImageRef = useRef(null);
  const bodyRef = useRef(null);
  const tagRef = useRef(null);

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setSending(true);
    setError(false);
    try {
      const body = new URLSearchParams(new FormData(form)).toString();
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error("Failed");
      form.reset();
      setSent(true);
    } catch (err) {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  // Success modal animation + ESC to close
  useEffect(() => {
    if (!sent) return;
    gsap.fromTo(".modal-bg", { opacity: 0 }, { opacity: 1, duration: 0.4 });
    gsap.fromTo(
      ".modal-box",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.1 }
    );
    const onKey = (e) => e.key === "Escape" && setSent(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sent]);

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
          { ...LETTER_FADE.to, stagger: 0.01 },
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

      // 3. Vertical divider line (desktop)
      gsap.fromTo(
        ".body-line-anim",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: { trigger: bodyRef.current, start: "top 80%" },
        }
      );

      // 4. LEFT: header + contact rows
      gsap
        .timeline({
          scrollTrigger: { trigger: bodyRef.current, start: "top 80%" },
        })
        .fromTo(
          ".desk-eyebrow",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(".desk-title-letter", LETTER_RISE.from, LETTER_RISE.to, "-=0.4");

      gsap.set(".contact-row-anim", { opacity: 0, y: 40 });
      ScrollTrigger.batch(".contact-row-anim", {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            clearProps: "transform",
          }),
      });

      // 5. RIGHT: form heading + fields
      gsap
        .timeline({
          scrollTrigger: { trigger: ".form-wrap", start: "top 85%" },
        })
        .fromTo(
          ".form-eyebrow",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(".form-title-letter", LETTER_RISE.from, LETTER_RISE.to, "-=0.4")
        .fromTo(
          ".form-fade",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1 },
          "-=0.5"
        );

      // 6. Bottom tagline
      gsap.fromTo(
        ".tag-fade",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: tagRef.current, start: "top 92%" },
        }
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
        className="relative w-full min-h-[65vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-16 lg:pb-24 px-5 sm:px-10"
      >
        {/* Parallax background */}
        <div
          ref={heroImageRef}
          className="absolute -top-[15%] left-0 h-[130%] w-full will-change-transform"
        >
          <Image
            src="/images/ex12.png"
            alt="Contact HAFSHIP Broking Desk"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-brand-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1400px] flex flex-col items-center text-center">
          <p className="hero-eyebrow text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase mb-6 sm:mb-8">
            Get In Touch
          </p>

          <h1 className="font-black tracking-normal uppercase leading-[0.95] mb-8 sm:mb-10 text-[14vw] sm:text-7xl lg:text-[100px] xl:text-[120px]">
            <span className="block text-white">
              <SplitLetters text="Contact &" letterClass="hero-title-letter" mask />
            </span>
            <span className="block text-brand-blue">
              <SplitLetters text="Inquiries" letterClass="hero-title-letter" mask />
            </span>
          </h1>

          <p className="max-w-4xl text-base sm:text-xl lg:text-2xl text-white/85 font-medium leading-relaxed">
            <SplitLetters text={HERO_TEXT} letterClass="hero-text-letter" />
          </p>
        </div>
      </section>

      {/* ========================================================
          CONTACT + FORM (split layout)
      ======================================================== */}
      <section className="relative w-full bg-brand-dark border-t border-white/10 py-16 sm:py-20 lg:py-32 px-5 sm:px-10 lg:px-16 overflow-hidden">
        <div
          ref={bodyRef}
          className="relative mx-auto max-w-[1800px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          {/* Center vertical divider (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/15">
            <div className="body-line-anim h-full w-full origin-top bg-brand-blue" />
          </div>

          {/* ---------------- LEFT: Direct contact ---------------- */}
          <div className="w-full">
            <div className="desk-eyebrow flex items-center gap-4 mb-6">
              <span className="h-px w-10 sm:w-14 bg-brand-blue" />
              <span className="text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase">
                Direct Contact
              </span>
            </div>

            <h2 className="font-black tracking-normal uppercase leading-[1] text-[11vw] sm:text-6xl lg:text-[64px] xl:text-[80px] mb-10 sm:mb-14">
              <span className="block text-white">
                <SplitLetters text="Broking" letterClass="desk-title-letter" mask />
              </span>
              <span className="block text-brand-blue">
                <SplitLetters text="Desk" letterClass="desk-title-letter" mask />
              </span>
            </h2>

            <div className="border-t border-white/15">
              {CONTACT_ROWS.map((row) => (
                <a
                  key={row.id}
                  href={row.href}
                  className="contact-row-anim group relative flex items-start gap-4 sm:gap-6 border-b border-white/15 py-8 sm:py-10"
                >
                  {/* blue line that grows on hover */}
                  <span className="pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-brand-blue transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100" />

                  <span className="w-8 sm:w-12 shrink-0 pt-1 sm:pt-2 text-sm sm:text-xl font-bold tracking-widest text-brand-blue">
                    {row.id}
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base lg:text-lg font-bold tracking-[0.15em] uppercase text-brand-blue mb-3">
                      {row.label}
                    </p>
                    <p className="text-xl min-[400px]:text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-black text-white transition-colors duration-300 group-hover:text-brand-blue break-all leading-tight">
                      {row.value}
                    </p>
                  </div>

                  {/* arrow */}
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-2 shrink-0 text-white/40 transition-all duration-500 group-hover:translate-x-1 group-hover:text-brand-blue"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ---------------- RIGHT: Form (Netlify) ---------------- */}
          <div className="form-wrap w-full">
            <div className="form-eyebrow flex items-center gap-4 mb-6">
              <span className="h-px w-10 sm:w-14 bg-brand-blue" />
              <span className="text-sm sm:text-lg lg:text-xl font-bold tracking-[0.3em] text-brand-blue uppercase">
                Send Message
              </span>
            </div>

            <h2 className="font-black tracking-normal uppercase leading-[1] text-[11vw] sm:text-6xl lg:text-[64px] xl:text-[80px] mb-6">
              <span className="block text-white">
                <SplitLetters text="Submit" letterClass="form-title-letter" mask />
              </span>
              <span className="block text-brand-blue">
                <SplitLetters text="Inquiry" letterClass="form-title-letter" mask />
              </span>
            </h2>

            <p className="form-fade text-base sm:text-lg lg:text-xl text-white/80 font-medium leading-relaxed border-l-[3px] border-brand-blue pl-5 sm:pl-8 mb-12 sm:mb-14">
              Please fill out the form below to circulate your requirements
              directly to our desk.
            </p>

            {/* Netlify Form Setup */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="flex flex-col gap-10 sm:gap-12"
            >
              {/* Hidden input required for Netlify forms */}
              <input type="hidden" name="form-name" value="contact" />

              <FloatingInput
                name="Name"
                label="Full Name / Company"
                placeholder="e.g. John Doe - XYZ Corp"
                required
              />
              <FloatingInput
                name="Email"
                type="email"
                label="Email Address"
                placeholder="e.g. john@example.com"
                required
              />
              <FloatingInput
                name="Phone"
                type="tel"
                label="Phone Number"
                placeholder="e.g. +1 234 567 8900"
              />

              {/* REQUIREMENT / MESSAGE */}
              <div className="form-fade relative">
                <textarea
                  name="Requirement"
                  placeholder="Please describe your cargo, tonnage, or general requirements here..."
                  rows="4"
                  required
                  className="peer w-full bg-transparent border-b-2 border-white/20 py-3 text-lg sm:text-xl text-white font-medium resize-none placeholder-transparent focus:outline-none focus:border-brand-blue transition-colors duration-300"
                />
                <label className="pointer-events-none absolute left-0 -top-5 text-xs sm:text-sm font-bold tracking-[0.2em] text-white/50 uppercase transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg peer-placeholder-shown:font-medium peer-placeholder-shown:tracking-normal peer-focus:-top-5 peer-focus:text-xs sm:peer-focus:text-sm peer-focus:font-bold peer-focus:tracking-[0.2em] peer-focus:text-brand-blue">
                  Your Requirement / Message *
                </label>
              </div>

              {error && (
                <p className="form-fade text-sm sm:text-base font-bold tracking-[0.15em] uppercase text-red-400">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <SubmitButton
                label={sending ? "Sending..." : "Send Inquiry"}
                disabled={sending}
              />
            </form>
          </div>
        </div>
      </section>

      {/* ========================================================
          BOTTOM TAGLINE (blue strip, same as CTA on Markets)
      ======================================================== */}
      <section
        ref={tagRef}
        className="w-full bg-brand-blue py-14 sm:py-20 px-5 sm:px-10 lg:px-16"
      >
        <p className="tag-fade text-center text-sm sm:text-lg lg:text-2xl font-bold tracking-[0.2em] text-white uppercase leading-relaxed">
          Global Markets <span className="text-white/50 mx-2 sm:mx-3">•</span> Local Knowledge{" "}
          <span className="text-white/50 mx-2 sm:mx-3">•</span> Commercial Connections
        </p>
      </section>

      {/* ========================================================
          SUCCESS MODAL
      ======================================================== */}
      {sent && (
        <div
          className="modal-bg fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/90 backdrop-blur-sm px-5"
          onClick={() => setSent(false)}
        >
          <div
            className="modal-box relative w-full max-w-2xl border border-white/15 bg-brand-dark p-8 sm:p-12 lg:p-16"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="absolute top-0 left-0 h-[3px] w-full bg-brand-blue" />

            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-10 sm:w-14 bg-brand-blue" />
              <span className="text-sm sm:text-lg font-bold tracking-[0.3em] text-brand-blue uppercase">
                Inquiry Sent
              </span>
            </div>

            <h3 className="font-black tracking-normal uppercase leading-[1] text-4xl sm:text-6xl text-white mb-6">
              Thank <span className="text-brand-blue">You</span>
            </h3>

            <p className="text-base sm:text-xl text-white/80 font-medium leading-relaxed border-l-[3px] border-brand-blue pl-5 sm:pl-8 mb-10">
              Your requirement has been circulated to our broking desk. We will
              get back to you shortly.
            </p>

            <button
              type="button"
              onClick={() => setSent(false)}
              className="group relative flex w-full sm:inline-flex sm:w-auto items-stretch overflow-hidden border border-white/40 hover:border-white transition-colors duration-500 text-left"
            >
              <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" />
              <span className="relative z-10 flex-1 px-6 py-4 sm:px-8 sm:py-5 text-sm sm:text-lg font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white group-hover:text-brand-dark transition-colors duration-500">
                Close
              </span>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}