import React from 'react';
import { MessageCircle, Phone, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { CompanyConfig, getWhatsAppUrl } from '../config/company';

interface HeroProps {
  config: CompanyConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const whatsappUrl = getWhatsAppUrl(
    config.whatsappNumber,
    "Hello ApexShield Roofing, I saw your 10-year warranty roofing offer in Abuja. I want to inquire about roofing my building."
  );

  return (
    <section className="relative bg-[#0C2B1C] text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#4ADE80_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Trust Kicker - clean unboxed metadata */}
            <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-[#86EFAC] mb-4 tracking-wide">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#4ADE80]" />
                Abuja FCT Specialist
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4ADE80]" />
                100% Genuine Gauge
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#4ADE80]" />
                Fast 5-Day Delivery
              </span>
            </div>

            {/* Headline - exact requested wording */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5 text-balance">
              Quality Roofing in Abuja With 10 Years No-Leak Warranty
            </h1>

            {/* Subtitle - exact requested wording */}
            <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-200 mb-8 max-w-2xl leading-relaxed">
              Stone Coated | Aluminium Longspan | Installation in 5 Days
            </p>

            {/* Two Prominent Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[52px] px-7 py-3.5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-[#0C2B1C] hover:text-white font-bold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#22C55E]/20 transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>WhatsApp Us Now</span>
              </a>

              <a
                href={`tel:${config.phoneDial}`}
                className="min-h-[52px] px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base sm:text-lg flex items-center justify-center gap-3 transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
              >
                <Phone className="w-5 h-5 shrink-0 text-[#4ADE80]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Unboxed trust note */}
            <p className="text-xs text-slate-300">
              * Send your building plan on WhatsApp for free takeoff & bill of quantities (BOQ) within 2 hours.
            </p>
          </div>

          {/* Right Column: Hero Image (Nigerian Residential House with Attractive Roof) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#27593E] shadow-2xl bg-[#092216] aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] group">
              <img
                src="/src/assets/images/hero_abuja_roof_1791627912252.jpg"
                alt="Contemporary Nigerian duplex residence in Abuja with premium stone coated roof"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2B1C]/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Image caption badge - clean styling */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0C2B1C]/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-white">
                <div>
                  <p className="font-semibold text-white">Completed Project — Abuja FCT</p>
                  <p className="text-slate-300 text-[11px]">Stone Coated Tile Interlocking Roof</p>
                </div>
                <span className="text-[#4ADE80] font-bold text-[11px] whitespace-nowrap">
                  10-Yr Guarantee
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
