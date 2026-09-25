"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, merriweather, lora } from "@/app/fonts";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Exactly 2 Services using strictly the exact text from your brochure.
const ALL_SERVICES = [
  {
    id: "01",
    title: "Dry Bulk Chartering",
    subtitle: "Connecting Cargo with the Right Vessels",
    desc: "At HAFSHIP, we specialize in seamlessly connecting cargo with the right vessels across the globe. With a team of seasoned experts and decades of combined experience in the shipping industry, we are committed to providing tailored, efficient, and cost-effective solutions for dry bulk cargo transportation.",
    link: "/chartering",
    linkText: "EXPLORE CHARTERING",
    img: "/images/Chartering.jpg", 
  },
  {
    id: "02",
    title: "Freight Forwarding",
    subtitle: "Global Cargo Movement",
    desc: "We offer comprehensive freight forwarding solutions, ensuring your cargo moves efficiently and securely across the globe. Whether by air, sea, or road, our expert team manages every aspect of the shipping process, from cargo booking and transportation to customs clearance and final delivery.",
    link: "/freight-forwarding",
    linkText: "EXPLORE FORWARDING",
    img: "/images/FreightForwarding.jpg", 
  }
];

export default function ServicesPage() {
  const heroRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(
        ".hero-element",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" }
      );

      // Service Sections Staggered Reveal
      const serviceRows = gsap.utils.toArray(".service-row");
      serviceRows.forEach((row) => {
        gsap.fromTo(
          row,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full bg-white flex flex-col">
      
      {/* ================= HERO ================= */}
      <section ref={heroRef} className="relative w-full bg-brand-dark pt-48 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-yellow/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-[1400px] relative z-10 text-center">
          <p className="hero-element text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase mb-6">
            Our Expertise
          </p>
          <h1 className={`hero-element ${merriweather.className} text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase mb-8`}>
            Comprehensive <span className="text-brand-yellow">Services</span>
          </h1>
          <p className={`hero-element ${lora.className} mx-auto max-w-3xl text-lg sm:text-xl text-slate-300 font-medium leading-relaxed`}>
            At HAFSHIP, we offer a full spectrum of shipping and logistics solutions, ensuring seamless cargo movement across the globe.
          </p>
        </div>
      </section>

      {/* ================= EDITORIAL SERVICE ROWS ================= */}
      <section ref={containerRef} className="w-full py-20 lg:py-32 px-4 sm:px-8">
        <div className="mx-auto max-w-[1400px] flex flex-col gap-24 lg:gap-32">
          {ALL_SERVICES.map((service, index) => {
            const isEven = index % 2 !== 0;

            return (
              <div key={service.id} className={`service-row flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                
                {/* Image Column */}
                <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-brand-gray/50 group bg-brand-gray">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-700" />
                  
                  {/* Floating Number */}
                  <div className={`absolute ${isEven ? 'bottom-6 left-6' : 'bottom-6 right-6'} bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg`}>
                    <span className={`${merriweather.className} font-extrabold text-3xl text-brand-dark`}>
                      {service.id}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                    <p className={`${raleway.className} text-xs font-bold tracking-[0.2em] text-brand-yellow uppercase`}>
                      {service.subtitle}
                    </p>
                  </div>
                  
                  <h2 className={`${merriweather.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark uppercase mb-6 leading-tight`}>
                    {service.title}
                  </h2>
                  
                  <p className={`${lora.className} text-base sm:text-lg text-brand-dark/80 leading-relaxed mb-10`}>
                    {service.desc}
                  </p>
                  
                  <a
                    href={service.link}
                    className={`${raleway.className} group inline-flex items-center gap-4 rounded bg-brand-dark px-8 py-4 text-xs font-bold tracking-[0.2em] text-white transition-all duration-300 hover:bg-brand-yellow hover:text-brand-dark uppercase`}
                  >
                    <span>{service.linkText}</span>
                    <div className="flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="w-full bg-brand-yellow py-24 px-4 sm:px-8 border-t border-brand-dark/10">
        <div className="mx-auto max-w-[1000px] text-center flex flex-col items-center">
          <p className={`${raleway.className} text-xs font-bold tracking-[0.3em] text-brand-dark uppercase mb-4`}>
            Delivering Success Across Ocean
          </p>
          <h2 className={`${merriweather.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark uppercase mb-6`}>
            Need assistance with your shipping?
          </h2>
          <p className={`${lora.className} text-lg text-brand-dark/80 font-medium mb-10 max-w-2xl`}>
            Our team is here to help!
          </p>
          <a
            href="mailto:sales@hafship.com"
            className={`${raleway.className} inline-flex items-center justify-center rounded bg-brand-dark px-10 py-5 text-sm font-bold tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white hover:text-brand-dark uppercase`}
          >
            CONTACT OUR TEAM
          </a>
        </div>
      </section>
    </main>
  );
}