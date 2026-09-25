"use client";

import { useState } from "react";
import Link from "next/link";
import { raleway, merriweather, lora } from "@/app/fonts";
import Image from "next/image";

function PortalInput({ label, placeholder, name, required = false, type = "text" }) {
  return (
    <div className="flex flex-col gap-2">
      <label className={`${raleway.className} text-[11px] font-bold tracking-[0.2em] text-brand-dark/50 uppercase`}>
        {label} {required && <span className="text-brand-blue">*</span>}
      </label>
      <input 
        type={type} 
        name={name}
        placeholder={placeholder}
        required={required}
        className={`${lora.className} w-full bg-brand-gray/10 border border-brand-gray/50 rounded-lg px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all`} 
      />
    </div>
  );
}

export default function SubmitCargoPage() {
  const [identity, setIdentity] = useState("Charterer");

  return (
    <main className="flex min-h-screen w-full flex-col lg:flex-row bg-white">
      
      {/* LEFT SIDE: Static Branding Panel */}
      <div className="relative w-full lg:w-1/3 bg-brand-dark p-8 lg:p-12 flex flex-col justify-between overflow-hidden shrink-0 lg:h-screen lg:sticky lg:top-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/10 blur-[80px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3" />
        
      <div className="relative z-10 flex flex-col items-start gap-4">
          <Link href="/" className="relative h-12 sm:h-16 w-48 block">
            <Image 
              src="/finallogohafship.png" 
              alt="HAFSHIP Logo"
              fill
              sizes="(max-width: 768px) 192px, 192px"
              className="object-contain object-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
            />
          </Link>
          <p className={`${raleway.className} text-xs font-bold tracking-[0.3em] text-brand-yellow uppercase`}>
            Chartering Portal
          </p>
        </div>

        <div className="mt-12 lg:mt-0 relative z-10">
          <h1 className={`${merriweather.className} text-4xl lg:text-5xl font-extrabold text-white leading-tight uppercase mb-6`}>
            Submit <br/><span className="text-brand-blue">Cargo</span>
          </h1>
          <p className={`${lora.className} text-slate-300 text-lg leading-relaxed max-w-sm`}>
            Route your cargo requirements to our desk for fast, reliable tonnage sourcing and fixture negotiation.
          </p>
        </div>

        <div className="mt-12 lg:mt-0 relative z-10">
          <Link href="/" className={`${raleway.className} inline-flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 hover:text-white uppercase transition-colors`}>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Return to Homepage
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE: Scrollable Form Area */}
      <div className="w-full lg:w-2/3 p-6 sm:p-12 lg:p-20 xl:p-24">
        <div className="max-w-3xl mx-auto">
          
          <div className="mb-12 border-b border-brand-gray/40 pb-6">
            <h2 className={`${raleway.className} text-2xl font-bold text-brand-dark uppercase tracking-wide`}>
              Cargo Details
            </h2>
          </div>

          <form name="cargo-submission" method="POST" data-netlify="true" className="flex flex-col gap-10">
            <input type="hidden" name="form-name" value="cargo-submission" />
            <input type="hidden" name="Identity" value={identity} />
            <input type="hidden" name="Requirement_Type" value="Cargo" />

            {/* Step 1: Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <PortalInput name="Name" label="Full Name" placeholder="e.g. John Doe" required />
              <PortalInput name="Company" label="Company" placeholder="e.g. XYZ Trading" required />
              <PortalInput name="Email" label="Email Address" type="email" placeholder="john@example.com" required />
              <PortalInput name="Phone" label="Phone (Optional)" type="tel" placeholder="+1..." />
            </div>

            {/* Step 2: Role */}
            <div>
              <label className={`${raleway.className} text-[11px] font-bold tracking-[0.2em] text-brand-dark/50 uppercase block mb-3`}>
                I am a:
              </label>
              <div className="flex flex-wrap gap-3">
                {["Charterer", "Cargo Owner", "Trader", "Shipbroker"].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setIdentity(role)}
                    className={`${raleway.className} px-5 py-2.5 rounded text-xs font-bold tracking-widest uppercase transition-all border ${
                      identity === role ? "bg-brand-dark text-white border-brand-dark" : "bg-white text-brand-dark/70 border-brand-gray hover:border-brand-dark/30"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Cargo Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <PortalInput name="Commodity" label="Commodity" placeholder="e.g. Coal, Grain, Limestone" required />
              <PortalInput name="Quantity" label="Quantity (MT)" placeholder="e.g. 50,000 MT" required />
              <PortalInput name="Load_Port" label="Load Port" placeholder="e.g. Richards Bay" required />
              <PortalInput name="Discharge_Port" label="Discharge Port" placeholder="e.g. Chennai" required />
              <PortalInput name="Laycan" label="Laycan" placeholder="e.g. 10-20 October" required />
              <PortalInput name="Terms" label="Terms / Rate" placeholder="e.g. FIOST, 8000 SHINC" />
            </div>

            {/* Step 4: Message */}
            <div className="flex flex-col gap-2">
              <label className={`${raleway.className} text-[11px] font-bold tracking-[0.2em] text-brand-dark/50 uppercase`}>
                Additional Details / Terms
              </label>
              <textarea 
                name="Message"
                rows="4" 
                placeholder="Target freight rate, specific vessel requirements, commission..."
                className={`${lora.className} w-full bg-brand-gray/10 border border-brand-gray/50 rounded-lg p-4 text-brand-dark focus:outline-none focus:border-brand-blue transition-all resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`${raleway.className} self-start rounded bg-brand-dark px-12 py-4 text-sm font-bold tracking-[0.2em] text-white transition-all hover:bg-brand-blue uppercase shadow-lg`}
            >
              Submit Cargo
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}