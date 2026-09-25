"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, merriweather, lora } from "@/app/fonts";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const FORWARDING_SERVICES = [
  {
    title: "Air Freight",
    desc: "For time-sensitive shipments, our air freight services offer fast, secure, and reliable cargo transportation. With access to a global network of airlines, we provide flexible scheduling, competitive rates, and seamless customs handling.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    )
  },
  {
    title: "Sea Freight",
    desc: "Our sea freight solutions offer cost-effective and efficient transportation for large, heavy, or bulk shipments. Whether you need full container load (FCL) or less than container load (LCL) services, we handle all aspects from booking to final delivery.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    )
  },
  {
    title: "Road Transport",
    desc: "We provide comprehensive road transport services for domestic and cross-border deliveries. With a modern fleet and a well-connected logistics network, we ensure safe, timely, and cost-efficient transportation for FTL and LTL shipments.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    title: "Customs Clearance",
    desc: "Navigating customs regulations can be complex, but our expert customs clearance services ensure a smooth and hassle-free process. We handle all documentation, compliance requirements, and duty payments without delays.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

export default function FreightForwardingPage() {
  const heroRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-up",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" }
      );

      gsap.fromTo(
        ".card-up",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full flex-grow bg-white">
      {/* ================= HERO ================= */}
      <section ref={heroRef} className="relative w-full bg-brand-dark pt-48 pb-24 lg:pt-56 lg:pb-32 px-4 sm:px-8 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/images/FreightForwarding.jpg" 
            alt="Global Freight Forwarding" 
            fill 
            sizes="100vw"
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/80 to-brand-dark" />
        </div>
        
        <div className="mx-auto max-w-[1400px] relative z-10 flex flex-col items-center text-center">
          <p className={`fade-up ${raleway.className} text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase mb-6`}>
            Global Logistics
          </p>
          <h1 className={`fade-up ${merriweather.className} text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase mb-8`}>
            Freight <span className="text-brand-yellow">Forwarding</span>
          </h1>
          <p className={`fade-up ${lora.className} max-w-3xl text-lg sm:text-xl text-slate-300 font-medium leading-relaxed`}>
            We offer comprehensive freight forwarding solutions, ensuring your cargo moves efficiently and securely across the globe. Our expert team manages every aspect of the shipping process, from cargo booking to final delivery.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section ref={gridRef} className="w-full py-20 lg:py-32 px-4 sm:px-8 bg-brand-gray/20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {FORWARDING_SERVICES.map((service, idx) => (
              <div key={idx} className="card-up group relative bg-white rounded-[24px] p-8 sm:p-10 border border-brand-gray shadow-sm hover:shadow-[0_20px_50px_rgba(3,24,46,0.08)] transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-yellow scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-dark/5 text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className={`${raleway.className} text-2xl font-bold text-brand-dark uppercase tracking-wide`}>
                    {service.title}
                  </h3>
                </div>
                
                <p className={`${lora.className} text-brand-dark/70 text-lg leading-relaxed`}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BOTTOM ACTION ================= */}
      <section className="w-full bg-brand-dark py-20 px-4 sm:px-8 text-center border-t border-white/10">
        <div className="mx-auto max-w-3xl flex flex-col items-center">
          <p className={`${raleway.className} text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase mb-4`}>
            Logistics Support
          </p>
          <h2 className={`${merriweather.className} text-3xl sm:text-4xl font-extrabold text-white uppercase mb-6`}>
            Ready to move your cargo?
          </h2>
          <p className={`${lora.className} text-slate-300 text-lg mb-10`}>
            Contact our dedicated sales desk for comprehensive logistics planning, competitive rates, and seamless global execution.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:sales@hafship.com"
              className={`${raleway.className} rounded bg-brand-yellow px-10 py-4 text-sm font-bold tracking-widest text-brand-dark transition-all hover:bg-white hover:scale-105 uppercase shadow-lg`}
            >
              CONTACT SALES DESK
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}