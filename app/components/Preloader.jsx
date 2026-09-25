"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const lineRef = useRef(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        setIsMounted(false);
        document.body.style.overflow = "unset";
      },
    });

    // 1. Logo sweeps in quickly from the left
    tl.fromTo(
      logoRef.current,
      { x: "-100vw", opacity: 0, scale: 0.9 },
      { 
        x: "0vw", 
        opacity: 1, 
        scale: 1, 
        duration: 0.7, 
        ease: "power3.out" 
      }
    )
    
    // 2. Loading line expands left-to-right smoothly
    .fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 0.4, ease: "power2.inOut" },
      "-=0.3"
    )

    // 3. Fast exit sweeping to the right (shadow effect removed)
    .to(
      [logoRef.current, lineRef.current],
      { 
        x: "100vw", 
        opacity: 0, 
        duration: 0.6, 
        ease: "power3.in",
        stagger: 0.05
      },
      "+=0.3" // Briefest pause to register the logo before it leaves
    )

    // 4. Dark background slides up to reveal the website instantly
    .to(
      containerRef.current, 
      { 
        yPercent: -100, 
        duration: 0.6, 
        ease: "power4.inOut" 
      }, 
      "-=0.2"
    );

    return () => tl.kill();
  }, []);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      // Added a deep radial gradient and a subtle grid overlay for a premium SaaS/Corporate aesthetic
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-blue bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/20 via-brand-dark to-brand-dark overflow-hidden will-change-transform"
    >
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-5">
        {/* Logo Container */}
        <div ref={logoRef} className="relative h-12 sm:h-16 lg:h-20 w-auto will-change-transform">
          {/* Using a standard img tag is actually safer for preloaders to avoid Next.js Image component hydration delays */}
          <img
            src="/finallogohafship.png"
            alt="HAFSHIP Shipbroking"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Decorative Loading Line (Muted Gold) */}
        <div 
          ref={lineRef}
          className="h-[2px] w-full max-w-[180px] bg-brand-yellow rounded-full will-change-transform"
        />
      </div>
    </div>
  );
}