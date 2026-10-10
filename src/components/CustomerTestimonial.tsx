import React, { useState } from 'react';
import { MessageCircle, Video, CheckCheck, Play, Sparkles, Upload } from 'lucide-react';
import { CompanyConfig, getWhatsAppUrl } from '../config/company';

interface CustomerTestimonialProps {
  config: CompanyConfig;
}

export const CustomerTestimonial: React.FC<CustomerTestimonialProps> = ({ config }) => {
  const [activeFormat, setActiveFormat] = useState<'whatsapp' | 'video'>('whatsapp');
  const [showUploadInfo, setShowUploadInfo] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAF9] border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs sm:text-sm font-bold text-[#16A34A] tracking-wider uppercase mb-2">
            Verified Client Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2B1C] tracking-tight">
            Customer Testimonial
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Real feedback from property owners across Abuja after heavy rainy seasons.
          </p>

          {/* Format Selector */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveFormat('whatsapp')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl flex items-center gap-2 transition-all ${
                activeFormat === 'whatsapp'
                  ? 'bg-[#0C2B1C] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
              <span>WhatsApp Review Format</span>
            </button>
            <button
              onClick={() => setActiveFormat('video')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl flex items-center gap-2 transition-all ${
                activeFormat === 'video'
                  ? 'bg-[#0C2B1C] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              <Video className="w-4 h-4 text-[#4ADE80]" />
              <span>Customer Video Format</span>
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-3xl mx-auto">
          
          {/* Authentic WhatsApp Review Placeholder Card */}
          {activeFormat === 'whatsapp' ? (
            <div className="p-6 sm:p-8">
              {/* WhatsApp Chat Simulation Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#128C7E] text-white flex items-center justify-center font-bold text-sm">
                    AO
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Alhaji O. (Jahi Resident)
                    </h4>
                    <p className="text-xs text-slate-500">
                      Verified Client · 4-Bedroom Duplex Project
                    </p>
                  </div>
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Abuja FCT
                </div>
              </div>

              {/* Chat Bubble Container */}
              <div className="space-y-4 max-w-xl mx-auto bg-[#ECE5DD]/40 p-4 sm:p-6 rounded-2xl border border-[#ECE5DD]">
                
                {/* Outgoing Contractor Message */}
                <div className="flex justify-end">
                  <div className="bg-[#D9FDD3] text-slate-800 text-xs sm:text-sm p-3.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                    <p>Good day Alhaji! Trust you're doing well sir. Just following up on the stone coated shingle roof installation we finished at Jahi on Wednesday. How was the heavy rain yesterday sir?</p>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-slate-500 mt-1">
                      <span>4:15 PM</span>
                      <CheckCheck className="w-3.5 h-3.5 text-[#53BDEB]" />
                    </div>
                  </div>
                </div>

                {/* Client Review Response */}
                <div className="flex justify-start">
                  <div className="bg-white text-slate-800 text-xs sm:text-sm p-3.5 rounded-2xl rounded-tl-sm max-w-[90%] shadow-sm border border-slate-100">
                    <p className="leading-relaxed">
                      "Good evening Engineer. I personally went up into the ceiling after the 3-hour storm today to check everything. <strong>Zero leak! Not a single drop of water.</strong> The valley gutters are directing water straight as agreed."
                    </p>
                    <p className="leading-relaxed mt-2">
                      "My architect also commended your neat alignment and true 0.55 gauge. I appreciate that you guys stuck strictly to the 4 days deadline without excuses. I have already given your number to my colleague developing in Katampe."
                    </p>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 mt-1">
                      <span>4:42 PM</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Verified Placeholder Callout */}
              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#16A34A] shrink-0" />
                  <span>Placeholder review slot. Ready to be updated with your actual customer WhatsApp screenshot.</span>
                </div>
                <button
                  onClick={() => setShowUploadInfo(true)}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 transition-colors whitespace-nowrap"
                >
                  How to replace
                </button>
              </div>
            </div>
          ) : (
            /* Short Customer Video Review Placeholder */
            <div className="p-6 sm:p-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col items-center justify-center text-white p-6 text-center group">
                <img
                  src="/src/assets/images/hero_abuja_roof_1791627912252.jpg"
                  alt="Customer roof inspection video placeholder"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                />
                
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#22C55E] text-[#0C2B1C] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer mb-3">
                  <Play className="w-7 h-7 ml-1 fill-current" />
                </div>

                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-white mb-1">
                    "Zero Leak Inspection After First Heavy Downpour"
                  </h4>
                  <p className="text-xs text-slate-300">
                    Video Placeholder · 45-Second Client Walkthrough in Life Camp, Abuja
                  </p>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-slate-400 z-10">
                  <span>Client Walkthrough Video</span>
                  <span className="font-mono">00:45</span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span>Direct customer video placeholder. Link your YouTube/Vimeo embed or MP4 video here.</span>
                <button
                  onClick={() => setShowUploadInfo(true)}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 transition-colors whitespace-nowrap"
                >
                  Replacement instructions
                </button>
              </div>
            </div>
          )}

          {/* Bottom Bar: Action */}
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 text-center sm:text-left">
              Want to see more video walkthroughs of ongoing Abuja sites?
            </span>
            <a
              href={getWhatsAppUrl(
                config.whatsappNumber,
                "Hello ApexShield Roofing, please share current video clips and photos of your ongoing roofing sites in Abuja."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#0C2B1C] hover:bg-[#15462D] text-white text-xs font-bold flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span>Ask For Live Video Proof On WhatsApp</span>
            </a>
          </div>

        </div>

      </div>

      {/* Info Modal on How to Replace Placeholder */}
      {showUploadInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center mb-4">
              <Upload className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Replacing With Genuine Client Review
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Per professional integrity standards, this section is designed to host your authentic WhatsApp screenshot or client video testimonial. When a customer sends a review screenshot, you can easily save it as an image asset or video link in <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">src/components/CustomerTestimonial.tsx</code>.
            </p>
            <button
              onClick={() => setShowUploadInfo(false)}
              className="w-full py-2.5 rounded-xl bg-[#0C2B1C] text-white font-bold text-xs"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
