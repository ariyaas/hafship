"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { raleway, racingSansOne } from "@/app/fonts";

gsap.registerPlugin(ScrollTrigger);

const NEWS_ARTICLES = [
  {
    id: 1,
    date: "September 15, 2026",
    category: "Market Insight",
    title: "Dry Bulk Market Outlook: Q4 Expectations",
    excerpt: "As global supply chains adjust to seasonal demands, we analyze the upcoming trends for Supramax and Panamax tonnage across the Asia-Pacific and Indian Ocean routes.",
    link: "#"
  },
  {
    id: 2,
    date: "August 28, 2026",
    category: "Company News",
    title: "Hafship Expands Freight Forwarding Network",
    excerpt: "We are proud to announce the expansion of our global freight forwarding partnerships, ensuring even faster turnaround times and competitive rates for our core clientele.",
    link: "#"
  },
  {
    id: 3,
    date: "August 10, 2026",
    category: "Industry Update",
    title: "Navigating New Maritime Environmental Regulations",
    excerpt: "A comprehensive breakdown of how recent international maritime emissions standards are impacting vessel availability and voyage chartering costs this quarter.",
    link: "#"
  }
];

export default function NewsroomPage() {
  const heroRef = useRef(null);
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.fromTo(
        ".fade-up",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" }
      );

      // News Cards Reveal Animation
      gsap.fromTo(
        ".news-card",
        { y: 30, opacity: 0 },
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
    <main className="w-full flex-grow bg-[#FAFAFA] min-h-screen flex flex-col">
      {/* ================= HERO SECTION ================= */}
      <section ref={heroRef} className="relative w-full bg-[#03182E] pt-40 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-8 overflow-hidden">
        {/* Abstract Gold Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-[1400px] relative z-10 flex flex-col items-center text-center">
          <p className="fade-up text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-6">
            Press & Media
          </p>
          <h1 className={`fade-up ${racingSansOne.className} text-5xl sm:text-6xl lg:text-7xl tracking-wide text-white uppercase mb-6`}>
            News <span className="text-[#D4AF37]">& Insights</span>
          </h1>
          <p className={`fade-up ${raleway.className} max-w-2xl text-base sm:text-lg text-slate-300 font-medium leading-relaxed`}>
            Stay informed with the latest company updates, global dry bulk market intelligence, and industry trends curated by the Hafship commercial desk.
          </p>
        </div>
      </section>

      {/* ================= NEWS GRID ================= */}
      <section ref={gridRef} className="flex-grow w-full py-20 lg:py-32 px-4 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {NEWS_ARTICLES.map((article) => (
              <div 
                key={article.id} 
                className="news-card group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_rgba(3,24,46,0.08)] hover:border-[#D4AF37]/50 transition-all duration-500"
              >
                {/* Top Accent Line */}
                <div className="h-1 w-full bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="p-8 sm:p-10 flex flex-col flex-grow">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`${raleway.className} text-xs font-bold tracking-widest text-[#D4AF37] uppercase`}>
                      {article.category}
                    </span>
                    <span className={`${raleway.className} text-xs font-semibold text-slate-400 uppercase tracking-wide`}>
                      {article.date}
                    </span>
                  </div>
                  
                  {/* Title & Excerpt */}
                  <h3 className={`${raleway.className} text-2xl font-bold text-[#03182E] leading-snug mb-4 transition-colors duration-300 group-hover:text-[#D4AF37]`}>
                    {article.title}
                  </h3>
                  <p className={`${raleway.className} text-sm text-slate-600 leading-relaxed font-medium mb-8 flex-grow`}>
                    {article.excerpt}
                  </p>
                  
                  {/* Read More Link */}
                  <a
                    href={article.link}
                    className={`${raleway.className} mt-auto inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#03182E] uppercase transition-colors duration-300 hover:text-[#D4AF37]`}
                  >
                    Read Article
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEWSLETTER CTA ================= */}
      <section className="w-full bg-[#03182E] py-16 px-4 sm:px-8 border-t border-white/10">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center">
          <h2 className={`${raleway.className} text-2xl sm:text-3xl font-extrabold text-white uppercase mb-4`}>
            Get Market Updates
          </h2>
          <p className={`${raleway.className} text-slate-300 font-medium mb-8`}>
            Subscribe to receive our latest dry bulk market insights and open tonnage lists directly to your inbox.
          </p>
          <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className={`${raleway.className} w-full sm:w-auto flex-grow max-w-md px-6 py-4 bg-white/5 border border-white/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors text-sm tracking-widest`}
            />
            <button className={`${raleway.className} shrink-0 px-8 py-4 bg-[#D4AF37] text-[#03182E] text-xs font-bold tracking-widest uppercase rounded hover:bg-white transition-colors duration-300`}>
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}