import React from 'react';
import { MessageCircle, Settings, Phone } from 'lucide-react';
import { CompanyConfig, getWhatsAppUrl } from '../config/company';

interface NavbarProps {
  config: CompanyConfig;
  onOpenSettings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ config, onOpenSettings }) => {
  const quoteUrl = getWhatsAppUrl(
    config.whatsappNumber,
    "Hello ApexShield Roofing, I would like to get a fast quotation for roofing my property in Abuja. My site is at: "
  );

  return (
    <header className="sticky top-0 z-40 bg-[#0C2B1C]/95 backdrop-blur-md border-b border-[#1C4330] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element) */}
        <a
          href="#"
          className="text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-[#4ADE80] transition-colors"
        >
          {config.name}
        </a>

        {/* Zone 2: 4 single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-200">
          <a
            href="#roof-types"
            className="hover:text-[#4ADE80] transition-colors whitespace-nowrap shrink-0"
          >
            Roof Types & Prices
          </a>
          <a
            href="#recent-works"
            className="hover:text-[#4ADE80] transition-colors whitespace-nowrap shrink-0"
          >
            Recent Works
          </a>
          <a
            href="#why-choose-us"
            className="hover:text-[#4ADE80] transition-colors whitespace-nowrap shrink-0"
          >
            Why Choose Us
          </a>
          <a
            href="#faqs"
            className="hover:text-[#4ADE80] transition-colors whitespace-nowrap shrink-0"
          >
            FAQs
          </a>
        </nav>

        {/* Zone 3: 1 primary action + config trigger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenSettings}
            title="Edit Business Details"
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-[#163E2B] transition-colors"
            aria-label="Edit business settings"
          >
            <Settings className="w-4 h-4" />
          </button>

          <a
            href={`tel:${config.phoneDial}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-[#153D2A] border border-[#27593E] rounded-lg hover:bg-[#1C4D35] transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#4ADE80]" />
            <span>{config.phoneDisplay}</span>
          </a>

          <a
            href={quoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-[#0C2B1C] bg-[#22C55E] hover:bg-[#16A34A] hover:text-white rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </header>
  );
};
