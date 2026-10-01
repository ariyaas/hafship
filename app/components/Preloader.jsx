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

    // 1. Quick fade and slight scale-up for the logo
    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.85 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.4, 
        ease: "power3.out" 
      }
    )
    
    // 2. Loading line expands quickly from the center
    .fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "center" },
      { scaleX: 1, duration: 0.3, ease: "power2.out" },
      "-=0.2"
    )

    // 3. Entire container simply fades out quickly (No sliding up)
    .to(
      containerRef.current, 
      { 
        opacity: 0, 
        duration: 0.4, 
        ease: "power2.inOut" 
      }, 
      "+=0.15" // Extremely brief pause before fading out
    );

    return () => tl.kill();
  }, []);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      // Simple, solid dark background. No blue gradients, no sliding.
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-brand-blue overflow-hidden will-change-transform"
    >
      <div className="relative z-10 flex flex-col items-center gap-5">
        {/* Logo Container */}
        <div ref={logoRef} className="relative h-12 sm:h-16 lg:h-20 w-auto will-change-transform">
          <img
            src="/finallogohafship.png"
            alt="HAFSHIP Shipbroking"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Decorative Loading Line (Muted Gold) */}
        <div 
          ref={lineRef}
          className="h-[2px] w-full max-w-[150px] bg-brand-yellow rounded-full will-change-transform"
        />
      </div>
    </div>
  );
}