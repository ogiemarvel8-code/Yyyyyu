import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { CompanyConfig, getWhatsAppUrl } from '../config/company';

interface FinalCTAProps {
  config: CompanyConfig;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ config }) => {
  const [siteLocation, setSiteLocation] = useState('');
  const [houseNote, setHouseNote] = useState('');

  const generateWhatsAppMessage = () => {
    let msg = "Hello ApexShield Roofing, I want to book a FREE site inspection in Abuja.";
    if (siteLocation.trim()) {
      msg += ` My site location is: ${siteLocation.trim()}.`;
    }
    if (houseNote.trim()) {
      msg += ` Building details: ${houseNote.trim()}.`;
    }
    msg += " Please let me know when your engineer can visit or review my plan.";
    return msg;
  };

  const ctaWhatsAppUrl = getWhatsAppUrl(config.whatsappNumber, generateWhatsAppMessage());

  return (
    <section className="relative py-20 sm:py-28 bg-[#0C2B1C] text-white overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#16A34A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle trust badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163E2B] border border-[#27593E] text-[#86EFAC] text-xs font-semibold mb-6">
          <MapPin className="w-3.5 h-3.5 text-[#4ADE80]" />
          <span>Covering All Districts Across Abuja FCT</span>
        </div>

        {/* Headline - exact requested wording */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto mb-5 leading-tight text-balance">
          Make We Check Your Site for Free Today
        </h2>

        {/* Subtitle - exact requested wording */}
        <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Send your building plan or location for a roofing quote.
        </p>

        {/* Interactive Fast Enquiry Box */}
        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md border border-white/15 p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-2xl mb-8 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-xs font-medium text-slate-200 mb-1">
                Your Site Location in Abuja
              </label>
              <input
                type="text"
                value={siteLocation}
                onChange={(e) => setSiteLocation(e.target.value)}
                placeholder="e.g. Jahi, Lugbe, Gwarinpa, Kubwa"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#092216] border border-[#27593E] text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-200 mb-1">
                Building Type (Optional)
              </label>
              <input
                type="text"
                value={houseNote}
                onChange={(e) => setHouseNote(e.target.value)}
                placeholder="e.g. 4-bed duplex, 3-bed bungalow"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#092216] border border-[#27593E] text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#86EFAC] mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
            <span>Free measurement visit · No obligation · BOQ estimate within 2 hours</span>
          </div>

          {/* Two Prominent Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <a
              href={ctaWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-h-[50px] px-6 py-3.5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-[#0C2B1C] hover:text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-[#22C55E]/20 transition-all duration-200 active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>WhatsApp Us Now</span>
            </a>

            <a
              href={`tel:${config.phoneDial}`}
              className="min-h-[50px] px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-[0.98] whitespace-nowrap"
            >
              <Phone className="w-4 h-4 shrink-0 text-[#4ADE80]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        <p className="text-xs text-slate-400">
          Prefer physical meeting? You are always welcome to inspect materials at our Idu Industrial yard.
        </p>

      </div>
    </section>
  );
};
