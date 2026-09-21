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

    // 1. Logo sweeps in from the far left
    tl.fromTo(
      logoRef.current,
      { x: "-150vw", opacity: 0, scale: 0.8 },
      { 
        x: "0vw", 
        opacity: 1, 
        scale: 1, 
        duration: 1.2, 
        ease: "power4.out" 
      }
    )
    
    // 2. Loading line expands left-to-right under the logo
    .fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: 0.8, ease: "power2.inOut" },
      "-=0.4"
    )

    // 3. Brief pause with a subtle glow/pulse on the logo
    .to(logoRef.current, { 
      filter: "drop-shadow(0px 0px 15px rgba(212,175,55,0.4))", // Muted Gold glow
      duration: 0.4, 
      yoyo: true, 
      repeat: 1 
    })

    // 4. Logo and line sweep out to the far right
    .to(
      [logoRef.current, lineRef.current],
      { 
        x: "150vw", 
        opacity: 0, 
        duration: 1, 
        ease: "power4.in",
        stagger: 0.1
      },
      "+=0.2"
    )

    // 5. Dark Navy background slides up to reveal the website
    .to(
      containerRef.current, 
      { 
        yPercent: -100, 
        duration: 0.8, 
        ease: "power4.inOut" 
      }, 
      "-=0.5"
    );

    return () => tl.kill();
  }, []);

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#03182E] overflow-hidden will-change-transform"
    >
      <div className="relative flex flex-col items-center gap-4">
        {/* Logo Container */}
        <div ref={logoRef} className="relative h-12 sm:h-16 lg:h-20 w-auto will-change-transform">
          <img
            src="/HAFSHIP.png"
            alt="HAFSHIP Shipbroking"
            className="h-full w-auto object-contain"
            priority="true"
          />
        </div>

        {/* Decorative Loading Line (Muted Gold) */}
        <div 
          ref={lineRef}
          className="h-[2px] w-full max-w-[200px] bg-[#D4AF37] rounded-full will-change-transform"
        />
      </div>
    </div>
  );
}