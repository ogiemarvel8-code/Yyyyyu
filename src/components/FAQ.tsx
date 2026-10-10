import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { CompanyConfig, FAQS_DATA, getWhatsAppUrl } from '../config/company';

interface FAQProps {
  config: CompanyConfig;
}

export const FAQ: React.FC<FAQProps> = ({ config }) => {
  // Keep first question open by default for immediate value
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-bold text-[#16A34A] tracking-wider uppercase mb-2">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2B1C] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Clear, honest answers to help you plan your roofing budget and timeline in Abuja.
          </p>
        </div>

        {/* Exactly 3 Expandable Accordion Items */}
        <div className="space-y-4 mb-12">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-[#F8FAF9]"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#0C2B1C] hover:text-[#16A34A] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#E8F5E9] text-[#16A34A]' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#0C2B1C]">
              Have a question about your specific roof design or wood trusses?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Chat directly with our lead structural engineer on WhatsApp.
            </p>
          </div>
          <a
            href={getWhatsAppUrl(
              config.whatsappNumber,
              "Hello ApexShield Roofing, I have a question regarding roofing my building in Abuja: "
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#0C2B1C] hover:bg-[#15462D] text-white text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
            <span>Ask On WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
