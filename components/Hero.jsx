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
              backgroundColor: "rgba(6, 94, 154, 0.3)",
              borderColor: "#065E9A",
              duration: 0.25,
            });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(cursorBall, {
              scale: 1,
              backgroundColor: "rgba(6, 94, 154, 0.15)",
              borderColor: "rgba(6, 94, 154, 0.6)",
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
      className="sticky top-0 z-0 h-screen min-h-[700px] w-full overflow-hidden bg-[#040C16]"
    >
      {/* Interactive Ball Cursor with Brand Color #065E9A */}
      <div
        ref={cursorBallRef}
        className="pointer-events-none absolute left-0 top-0 z-50 hidden md:block h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#065E9A]/70 bg-[#065E9A]/15 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 shadow-[0_0_15px_rgba(6,94,154,0.35)]"
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
            <source src="/videos/hafship-hero.mp4" type="video/mp4" />
          </video>

          {/* Clean medium-light overlays */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,12,22,0.2)_0%,rgba(4,12,22,0.55)_90%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#040C16]/80" />
        </div>

        {/* Ambient Reflection in Brand Color */}
        <div
          ref={glareRef}
          className="pointer-events-none absolute -left-48 -top-48 hidden md:block h-96 w-96 rounded-full bg-[#065E9A]/20 blur-3xl opacity-0 transition-opacity duration-300"
        />

        {/* Hero Central Content */}
      {/* Hero Central Content with Racing Sans One & Raleway */}
        <div
          ref={contentRef}
          style={{
            transform: "translateZ(70px)",
            transformStyle: "preserve-3d",
          }}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white will-change-transform pt-20"
        >
          <div className="max-w-5xl">
            {/* Main Headline with Racing Sans One */}
            <h1
              className={`${racingSansOne.className} text-5xl leading-[1.05] tracking-wide sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]`}
            >
              Connecting Trade.
              <br />
              <span className="bg-gradient-to-r from-white via-slate-100 to-[#065E9A] bg-clip-text text-transparent">
                Moving the World.
              </span>
            </h1>

            {/* Description with Raleway */}
            <p
              className={`${raleway.className} mx-auto mt-6 max-w-2xl text-base font-normal leading-relaxed text-slate-200 sm:text-lg drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]`}
            >
              Reliable, modern maritime logistics and port handling solutions
              connecting businesses, carriers, and markets worldwide.
            </p>

            {/* Action Buttons in Official Brand Color #065E9A with Raleway */}
            <div className={`${raleway.className} mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row`}>
              <a
                href="#services"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#065E9A] px-8 py-4 text-xs font-bold tracking-widest text-white shadow-[0_0_25px_rgba(6,94,154,0.6)] transition-all duration-300 hover:scale-105 hover:bg-[#0872BB]"
              >
                EXPLORE SERVICES
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-xs font-bold tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#065E9A] hover:bg-white hover:text-[#065E9A]"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>

        {/* Floating Metrics Bar */}
        <div
          ref={statsRef}
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 md:flex items-center gap-10 rounded-2xl border border-white/15 bg-black/30 px-8 py-3.5 backdrop-blur-xl"
        >
          <div className="text-left">
            <p className="text-xl font-bold text-white">50+</p>
            <p className="font-mono text-[10px] tracking-wider uppercase text-slate-400">
              Global Ports
            </p>
          </div>
          <div className="h-6 w-px bg-white/15" />
          <div className="text-left">
            <p className="text-xl font-bold text-white">1.2M</p>
            <p className="font-mono text-[10px] tracking-wider uppercase text-slate-400">
              TEU Handled
            </p>
          </div>
          <div className="h-6 w-px bg-white/15" />
          <div className="text-left">
            <p className="text-xl font-bold text-[#065E9A]">99.8%</p>
            <p className="font-mono text-[10px] tracking-wider uppercase text-slate-400">
              On-Time Dispatch
            </p>
          </div>
        </div>

        {/* Mobile Scroll Indicator with Brand Color #065E9A */}
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 md:hidden">
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <div className="h-8 w-px bg-[#065E9A] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}