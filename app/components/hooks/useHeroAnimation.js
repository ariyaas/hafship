import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useHeroAnimation({
  containerRef,
  sceneRef,
  imageWrapperRef,
  contentRef,
  cursorBallRef,
  glareRef,
}) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    const scene = sceneRef.current;
    const imageWrapper = imageWrapperRef.current;
    const content = contentRef.current;
    const cursorBall = cursorBallRef.current;
    const glare = glareRef.current;

    if (!container || !scene || !imageWrapper || !content) return;

    const isMobileOrTouch =
      window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches;

    const ctx = gsap.context(() => {
      // 1. Entrance Animation (Hardware Accelerated)
      const enterTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      enterTl.from(content.children, {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1.1,
        force3D: true, // Forces GPU acceleration
      });

      // 2. Scroll Animation (Parallax) - Removed blur for 60fps max performance
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 0.4,
        },
      });

      scrollTl.to(
        content,
        {
          yPercent: -20,
          scale: 0.95,
          opacity: 0.2,
          ease: "none",
          force3D: true,
        },
        0
      );

      scrollTl.to(
        imageWrapper,
        {
          scale: 1.05,
          ease: "none",
          force3D: true,
        },
        0
      );

      // 3. High-Performance Desktop Interactive Cursor & 3D Tilt
      let handleResize; 
      
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

        const quickImageX = gsap.quickTo(imageWrapper, "x", {
          duration: 1.1,
          ease: "power2.out",
        });
        const quickImageY = gsap.quickTo(imageWrapper, "y", {
          duration: 1.1,
          ease: "power2.out",
        });

        // Throttle bounding box calculations via requestAnimationFrame
        let rect = container.getBoundingClientRect();
        handleResize = () => {
          requestAnimationFrame(() => {
            rect = container.getBoundingClientRect();
          });
        };
        window.addEventListener("resize", handleResize, { passive: true });

        const handleMouseMove = (e) => {
          const posX = e.clientX - rect.left;
          const posY = e.clientY - rect.top;

          xToBall(posX);
          yToBall(posY);

          const normX = posX / rect.width - 0.5;
          const normY = posY / rect.height - 0.5;

          quickRotateX(-normY * 10);
          quickRotateY(normX * 12);

          quickContentX(normX * 30);
          quickContentY(normY * 30);

          quickImageX(-normX * 16);
          quickImageY(-normY * 10);

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
          quickImageX(0);
          quickImageY(0);
          if (glare) {
            gsap.to(glare, { opacity: 0, duration: 0.8 });
          }
        };

        const interactiveElements = container.querySelectorAll("a, button");
        interactiveElements.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            gsap.to(cursorBall, {
              scale: 1.8,
              backgroundColor: "#D4AF3733", 
              borderColor: "var(--color-brand-yellow)",
              duration: 0.25,
            });
          });
          el.addEventListener("mouseleave", () => {
            gsap.to(cursorBall, {
              scale: 1,
              backgroundColor: "#0e609c1A", 
              borderColor: "#0e609c99", 
              duration: 0.25,
            });
          });
        });

        container.addEventListener("mousemove", handleMouseMove, { passive: true });
        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        // Safely wipe event listeners on unmount
        return () => {
          window.removeEventListener("resize", handleResize);
          container.removeEventListener("mousemove", handleMouseMove);
          container.removeEventListener("mouseenter", handleMouseEnter);
          container.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, container);

    return () => ctx.revert();
  }, []); // Ref dependency array is now cleanly emptied
}