"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { racingSansOne, raleway } from "@/app/fonts";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const contentRef = useRef(null);
  const cursorBallRef = useRef(null);
  const glareRef = useRef(null);
  const statsRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const scene = sceneRef.current;
    const videoWrapper = videoWrapperRef.current;
    const content = contentRef.current;
    const cursorBall = cursorBallRef.current;
    const glare = glareRef.current;
    const stats = statsRef.current;

    if (!container || !scene || !videoWrapper || !content) return;

    const isMobileOrTouch =
      window.innerWidth < 768 ||
      window.matchMedia("(pointer: coarse)").matches;

    const ctx = gsap.context(() => {
      // 1. Entrance Animation on Page Load
      const enterTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      enterTl.from(content.children, {
        y: 40,
        opacity: 0,
        filter: "blur(6px)",
        stagger: 0.1,
        duration: 1.1,
      });

      if (stats) {
        enterTl.from(
          stats.children,
          {
            y: 20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.8,
          },
          "-=0.5"
        );
      }

      // 2. Scroll Animation (Fixed top: video NEVER pulls down)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 0.4,
        },
      });

      // Text gently drifts up and fades as next section slides over
      scrollTl.to(
        content,
        {
          yPercent: -20,
          scale: 0.95,
          opacity: 0.2,
          filter: "blur(4px)",
          ease: "none",
        },
        0
      );

      // Video stays fixed at the top (no yPercent movement so top never breaks)
      scrollTl.to(
        videoWrapper,
        {
          scale: 1.05,
          ease: "none",
        },
        0
      );

      if (stats) {
        scrollTl.to(stats, { opacity: 0, y: -15, ease: "none" }, 0);
      }

      // 3. Desktop Interactive Cursor Ball & 3D Tilt
      if (!isMobileOrTouch && cursorBall) {
        const xToBall = gsap.quickTo(cursorBall, "x", {
          duration: 0.2,
          ease: "power2.out",
        });
        const yToBall = gsap.quickTo(cursorBall, "y", {
          duration: 0.2,
          ease: "power2.out",
        });

        const quickRotateX = gsap.quickTo(scene, "rotationX", {
          duration: 0.8,
          ease: "power2.out",
        });
        const quickRotateY = gsap.quickTo(scene, "rotationY", {
          duration: 0.8,
          ease: "power2.out",
        });

        const quickContentX = gsap.quickTo(content, "x", {
          duration: 0.9,
          ease: "power2.out",
        });
        const quickContentY = gsap.quickTo(content, "y", {
          duration: 0.9,
          ease: "power2.out",
        });

        // Video parallax (horizontal shift + subtle vertical buffer)
        const quickVideoX = gsap.quickTo(videoWrapper, "x", {
          duration: 1.1,
          ease: "power2.out",
        });
        const quickVideoY = gsap.quickTo(videoWrapper, "y", {
          duration: 1.1,
          ease: "power2.out",
        });

        const handleMouseMove = (e) => {
          const rect = container.getBoundingClientRect();
          const posX = e.clientX - rect.left;
          const posY = e.clientY - rect.top;

          xToBall(posX);
          yToBall(posY);

          const normX = posX / rect.width - 0.5;
          const normY = posY / rect.height - 0.5;

          // Controlled 3D tilt
          quickRotateX(-normY * 10);
          quickRotateY(normX * 12);

          // Foreground moves with cursor
          quickContentX(normX * 30);
          quickContentY(normY * 30);

          // Video shifts slightly in opposing direction safely inside bleed margins
          quickVideoX(-normX * 16);
          quickVideoY(-normY * 10);

          if (glare) {
            gsap.to(glare, {
              x: posX,
              y: posY,
              opacity: 0.2,
              duration: 0.5,
              ease: "power1.out",
            });
          }
        };

        const handleMouseEnter = () => {
          gsap.to(cursorBall, { opacity: 1, scale: 1, duration: 0.3 });
        };

        const handleMouseLeave = () => {
          gsap.to(cursorBall, { opacity: 0, scale: 0.5, duration: 0.3 });
          quickRotateX(0);
          quickRotateY(0);
          quickContentX(0);
          quickContentY(0);
          quickVideoX(0);
          quickVideoY(0);
          if (glare) {
            gsap.to(glare, { opacity: 0, duration: 0.8 });
          }
        };

        const interactiveElements = container.querySelectorAll("a, button");
        interactiveElements.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(cursorBall, {
              scale: 1.8,
              backgroundColor: "rgba(212, 175, 55, 0.2)", // Muted Gold glow
              borderColor: "#D4AF37",
              duration: 0.25,
            });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(cursorBall, {
              scale: 1,
              backgroundColor: "rgba(212, 175, 55, 0.1)",
              borderColor: "rgba(212, 175, 55, 0.5)",
              duration: 0.25,
            });
          });
        });

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          container.removeEventListener("mousemove", handleMouseMove);
          container.removeEventListener("mouseenter", handleMouseEnter);
          container.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{ perspective: "1200px" }}
      className="sticky top-0 z-0 h-screen min-h-[700px] w-full overflow-hidden bg-[#03182E]"
    >
      {/* Interactive Ball Cursor with Brand Muted Gold */}
      <div
        ref={cursorBallRef}
        className="pointer-events-none absolute left-0 top-0 z-50 hidden md:block h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/60 bg-[#D4AF37]/10 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 shadow-[0_0_15px_rgba(212,175,55,0.25)]"
      />

      {/* 3D Scene Root */}
      <div
        ref={sceneRef}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full will-change-transform"
      >
        {/* Background Video Layer with 8% Bleed Margins */}
        <div
          ref={videoWrapperRef}
          style={{
            transform: "translateZ(-40px) scale(1.15)",
            transformStyle: "preserve-3d",
          }}
          className="absolute -top-[8%] -left-[8%] h-[116%] w-[116%] will-change-transform"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover select-none"
          >
            <source src="/videos/hafshipnew.mp4" type="video/mp4" />
          </video>

          {/* Clean medium-light overlays incorporating Dark Navy (#03182E) */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(3,24,46,0.3)_0%,rgba(3,24,46,0.7)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#03182E]/90" />
        </div>

        {/* Ambient Reflection in Muted Gold */}
        <div
          ref={glareRef}
          className="pointer-events-none absolute -left-48 -top-48 hidden md:block h-96 w-96 rounded-full bg-[#D4AF37]/15 blur-3xl opacity-0 transition-opacity duration-300"
        />

        {/* Hero Central Content */}
        <div
          ref={contentRef}
          style={{
            transform: "translateZ(70px)",
            transformStyle: "preserve-3d",
          }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white will-change-transform pt-20"
        >
          <div className="max-w-5xl">
            {/* Main Headline */}
            <h1
              className={`${racingSansOne.className} text-5xl leading-[1.05] tracking-wide sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)] uppercase`}
            >
              Dry Bulk Shipbroking
              <br />
              <span className="bg-gradient-to-r from-white via-[#FFF8D6] to-[#D4AF37] bg-clip-text text-transparent">
                & Chartering
              </span>
            </h1>

            {/* Description */}
            <p
              className={`${raleway.className} mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-slate-200 sm:text-lg drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]`}
            >
              Connecting Shipowners, Operators, Charterers & Cargo Interests Across Global Dry Bulk Markets.
            </p>

            {/* Action Buttons in Muted Gold and Transparent Outline */}
            <div className={`${raleway.className} mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row`}>
              <a
                href="#tonnage"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded bg-[#D4AF37] px-8 py-4 text-xs font-bold tracking-widest text-[#03182E] shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 hover:bg-white uppercase"
              >
                OPEN TONNAGE
              </a>

              <a
                href="#submit-cargo"
                className="inline-flex items-center justify-center rounded border border-white/30 bg-white/10 px-8 py-4 text-xs font-bold tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#D4AF37] hover:bg-white hover:text-[#03182E] uppercase"
              >
                SUBMIT CARGO
              </a>
            </div>
          </div>
        </div>

        {/* Floating Metrics Bar aligned to core capabilities */}
        <div
          ref={statsRef}
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 md:flex items-center gap-10 rounded-xl border border-white/15 bg-[#03182E]/60 px-8 py-3.5 backdrop-blur-xl"
        >
          <div className="text-left">
            <p className="text-xl font-bold text-white">Global</p>
            <p className="font-mono text-[10px] tracking-wider uppercase text-slate-300">
              Market Access
            </p>
          </div>
          <div className="h-6 w-px bg-white/15" />
          <div className="text-left">
            <p className="text-xl font-bold text-white">Dry Bulk</p>
            <p className="font-mono text-[10px] tracking-wider uppercase text-slate-300">
              Specialists
            </p>
          </div>
          <div className="h-6 w-px bg-white/15" />
          <div className="text-left">
            <p className="text-xl font-bold text-[#D4AF37]">Handy-Panamax</p>
            <p className="font-mono text-[10px] tracking-wider uppercase text-slate-300">
              Vessel Segments
            </p>
          </div>
        </div>

        {/* Mobile Scroll Indicator with Brand Muted Gold */}
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 md:hidden">
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <div className="h-8 w-px bg-[#D4AF37] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}