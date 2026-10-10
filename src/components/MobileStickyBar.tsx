import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { CompanyConfig, getWhatsAppUrl } from '../config/company';

interface MobileStickyBarProps {
  config: CompanyConfig;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ config }) => {
  const whatsappUrl = getWhatsAppUrl(
    config.whatsappNumber,
    "Hello ApexShield Roofing, I am inquiring from your website about roofing services in Abuja. Please send me a quote."
  );

  return (
    <aside
      aria-label="Quick contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0C2B1C]/95 backdrop-blur-md border-t border-[#1C4330] p-2.5 shadow-2xl"
      style={{ maxHeight: '12vh' }} // Strict 15% mobile sticky cap compliance
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 rounded-xl bg-[#22C55E] active:bg-[#16A34A] text-[#0C2B1C] font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
        >
          <MessageCircle className="w-4 h-4 shrink-0 fill-current" />
          <span>WhatsApp Us</span>
        </a>

        {/* Call Button */}
        <a
          href={`tel:${config.phoneDial}`}
          className="h-11 rounded-xl bg-[#163E2B] active:bg-[#1F543B] text-white border border-[#27593E] font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          <Phone className="w-4 h-4 shrink-0 text-[#4ADE80]" />
          <span>Call Now</span>
        </a>
      </div>
    </aside>
  );
};
