"use client";

import { useState } from "react";
import { outfit, raleway } from "@/app/fonts";

export default function WhyChooseUs() {
  const [selectedService, setSelectedService] = useState("Chartering");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    // Solid background canvas with generous padding
    <section className="relative z-20 w-full bg-[#EBF1F6] py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* ================= MAIN CONTAINER ================= */}
      <div className="mx-auto max-w-[1500px] rounded-[32px] sm:rounded-[44px] bg-white p-8 sm:p-12 lg:p-16 shadow-xl border border-slate-200/80">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* ================= LEFT COLUMN: 100% VISIBLE CONTENT & CARDS ================= */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Tagline */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#065E9A]/30 bg-[#065E9A]/10 px-4 py-1.5 font-mono text-xs font-bold tracking-widest text-[#065E9A] uppercase">
              <span className="h-2 w-2 rounded-full bg-[#065E9A]" />
              <span>WHY CHOOSE US ——</span>
            </div>

            {/* Title with Outfit */}
            <h2
              className={`${outfit.className} text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#020814] leading-[1.15] tracking-tight mb-8`}
            >
              We create
              <br />
              opportunities to reach
              <br />
              <span className="text-[#065E9A]">your potential</span>
            </h2>

            {/* Feature 1: Safety and reliability (100% Visible Card) */}
            <div className="w-full mb-5 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm transition-all duration-300 hover:border-[#065E9A] hover:bg-white hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#065E9A] text-white shadow-md shadow-[#065E9A]/30">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div>
                  <h3 className={`${outfit.className} text-xl font-bold text-[#020814]`}>
                    Safety and reliability
                  </h3>
                  <p className={`${raleway.className} mt-2 text-sm leading-relaxed text-[#334155] font-medium`}>
                    We prioritize the safety of your shipments, ensuring they arrive on time and intact. Our trusted network and stringent protocols provide peace of mind every step of the way.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2: Shipping worldwide (100% Visible Card) */}
            <div className="w-full rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm transition-all duration-300 hover:border-[#065E9A] hover:bg-white hover:shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#065E9A] text-white shadow-md shadow-[#065E9A]/30">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className={`${outfit.className} text-xl font-bold text-[#020814]`}>
                    Shipping worldwide
                  </h3>
                  <p className={`${raleway.className} mt-2 text-sm leading-relaxed text-[#334155] font-medium`}>
                    No destination is out of reach. Our extensive shipping services span across borders, making it easy for you to expand your reach and connect with customers globally.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: COMMERCIAL FORM CARD ================= */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[28px] bg-[#03182E] p-8 sm:p-12 text-white shadow-2xl border border-white/15 overflow-hidden">
              
              {/* Header inside Form */}
              <div className="mb-6">
                <span className="font-mono text-[10px] tracking-widest text-[#38BDF8] uppercase font-bold">
                  COMMERCIAL INQUIRY
                </span>
                <h3 className={`${outfit.className} text-2xl sm:text-3xl font-bold tracking-tight mt-1 text-white`}>
                  Connect with Dispatch
                </h3>
                <p className={`${raleway.className} mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed`}>
                  Enter your cargo requirements and our Dubai maritime team will respond promptly.
                </p>
              </div>

              {/* Service Pills */}
              <div className="mb-6 flex flex-wrap gap-2">
                {["Chartering", "Freight Forwarding", "Ship Agency", "Cargo Broking"].map((svc) => (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => setSelectedService(svc)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                      selectedService === svc
                        ? "bg-[#065E9A] text-white shadow-md shadow-[#065E9A]/40"
                        : "bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white"
                    }`}
                  >
                    {svc}
                  </button>
                ))}
              </div>

              {submitted ? (
                <div className="rounded-2xl bg-white/10 p-8 text-center text-white border border-emerald-400/30">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xl font-bold">
                    ✓
                  </div>
                  <h4 className={`${outfit.className} text-xl font-bold text-white`}>
                    Inquiry Submitted
                  </h4>
                  <p className={`${raleway.className} mt-2 text-xs text-slate-300`}>
                    Thank you. Our dispatch team for {selectedService} will reach out to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className={`${raleway.className} block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1.5`}>
                      Your Name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-[#065E9A] focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#065E9A]/40 transition-all"
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`${raleway.className} block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1.5`}>
                        Your Email:
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-[#065E9A] focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#065E9A]/40 transition-all"
                      />
                    </div>
                    <div>
                      <label className={`${raleway.className} block text-xs font-bold uppercase tracking-wider text-slate-200 mb-1.5`}>
                        Phone No:
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+971 50..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-[#065E9A] focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#065E9A]/40 transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className={`${raleway.className} group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#065E9A] px-10 py-4 text-xs font-bold tracking-widest text-white shadow-[0_0_25px_rgba(6,94,154,0.6)] transition-all duration-300 hover:scale-105 hover:bg-[#0872BB] uppercase`}
                    >
                      <span>SUBMIT REQUEST</span>
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}