"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, racingSansOne } from "@/app/fonts";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ALL_SERVICES = [
  {
    id: "01",
    title: "Dry Bulk Chartering",
    subtitle: "Connecting Cargo with the Right Vessels",
    desc: "We specialize in seamlessly connecting cargo with the right vessels across the globe. With a team of seasoned experts and decades of combined experience, we provide tailored, efficient, and cost-effective solutions for dry bulk cargo transportation.",
    link: "/chartering",
    linkText: "EXPLORE CHARTERING",
    img: "/images/chartering-hero.jpg",
  },
  {
    id: "02",
    title: "Freight Forwarding",
    subtitle: "Global Cargo Movement",
    desc: "We specialize in comprehensive freight forwarding, ensuring smooth and efficient global cargo movement. With a vast network of trusted partners, we manage every step—from cargo booking and documentation to customs clearance and final delivery.",
    link: "/freight-forwarding",
    linkText: "EXPLORE FORWARDING",
    img: "/images/FreightForwarding.png", // Replace with your actual image path
  },
  {
    id: "03",
    title: "Cargo Broking",
    subtitle: "Expert Market Negotiations",
    desc: "Providing expert cargo broking services, seamlessly connecting cargo owners with the right vessels. Our dedicated team ensures every shipment is handled with precision, negotiating the best freight rates, managing risks, and ensuring full compliance.",
    link: "#contact",
    linkText: "CONTACT BROKING DESK",
    img: "/images/CargoBroking.png", // Replace with your actual image path
  },
  {
    id: "04",
    title: "Ship Agency",
    subtitle: "Comprehensive Port Operations",
    desc: "Ensuring smooth and efficient port operations for vessels worldwide. Our experienced team takes care of port clearance, crew handling, bunker arrangements, cargo operations, and documentation to guarantee swift turnaround times.",
    link: "#contact",
    linkText: "CONTACT AGENCY DESK",
    img: "/images/ShipAgency.png", // Replace with your actual image path
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
    <main className="w-full bg-[#FAFAFA] pt-24 lg:pt-32">
      {/* ================= HERO ================= */}
      <section ref={heroRef} className="relative w-full bg-[#03182E] py-24 lg:py-32 px-4 sm:px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-[1400px] relative z-10 text-center">
          <p className="hero-element text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-6">
            Our Expertise
          </p>
          <h1 className={`hero-element ${racingSansOne.className} text-5xl sm:text-6xl lg:text-7xl tracking-wide text-white uppercase mb-8`}>
            Comprehensive <span className="text-[#D4AF37]">Services</span>
          </h1>
          <p className={`hero-element ${raleway.className} mx-auto max-w-3xl text-lg sm:text-xl text-slate-300 font-medium leading-relaxed`}>
            Delivering a full spectrum of shipping and maritime logistics solutions. From dry bulk chartering to comprehensive freight forwarding, we handle every aspect with efficiency and expertise.
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
                <div className="w-full lg:w-1/2 relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#03182E]/10 group-hover:bg-transparent transition-colors duration-700" />
                  
                  {/* Floating Number */}
                  <div className={`absolute ${isEven ? 'bottom-6 left-6' : 'bottom-6 right-6'} bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg`}>
                    <span className={`${racingSansOne.className} text-4xl text-[#03182E]`}>
                      {service.id}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
                    <p className={`${raleway.className} text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase`}>
                      {service.subtitle}
                    </p>
                  </div>
                  
                  <h2 className={`${raleway.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#03182E] uppercase mb-6 leading-tight`}>
                    {service.title}
                  </h2>
                  
                  <p className={`${raleway.className} text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-10`}>
                    {service.desc}
                  </p>
                  
                  <a
                    href={service.link}
                    className={`${raleway.className} group inline-flex items-center gap-4 rounded bg-[#03182E] px-8 py-4 text-xs font-bold tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#03182E] uppercase`}
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
      <section className="w-full bg-[#D4AF37] py-20 px-4 sm:px-8 border-t border-[#03182E]/10">
        <div className="mx-auto max-w-[1000px] text-center flex flex-col items-center">
          <h2 className={`${raleway.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#03182E] uppercase mb-6`}>
            Ready to move your cargo?
          </h2>
          <p className={`${raleway.className} text-lg text-[#03182E]/80 font-medium mb-10 max-w-2xl`}>
            Whether you need spot fixtures, time charters, or comprehensive logistics management, our team is ready to deliver tailored solutions.
          </p>
          <a
            href="mailto:sales@hafship.com"
            className={`${raleway.className} inline-flex items-center justify-center rounded bg-[#03182E] px-10 py-5 text-sm font-bold tracking-widest text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white hover:text-[#03182E] uppercase`}
          >
            CONTACT OUR TEAM
          </a>
        </div>
      </section>
    </main>
  );
}