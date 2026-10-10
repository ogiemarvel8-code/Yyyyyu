import React from 'react';
import { MapPin, Phone, MessageCircle, ExternalLink, Settings } from 'lucide-react';
import { CompanyConfig, getWhatsAppUrl } from '../config/company';

interface FooterProps {
  config: CompanyConfig;
  onOpenSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenSettings }) => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl(
    config.whatsappNumber,
    "Hello ApexShield Roofing, I would like to get more information about your roofing materials and services in Abuja."
  );

  return (
    <footer className="bg-[#081E13] text-white border-t border-[#1C4330] pt-14 pb-28 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Company Profile */}
          <div className="md:col-span-5">
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              {config.name}
            </h3>
            <p className="text-sm text-slate-300 mb-6 max-w-sm leading-relaxed">
              Abuja’s trusted provider of premium Stone Coated tiles, genuine 0.55 Aluminium longspan, and step tile roofing. Built with a 10-year no-leak warranty.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-[#86EFAC] bg-[#123825] px-3.5 py-1.5 rounded-lg border border-[#27593E]">
              <span>Operating Hours:</span>
              <span className="text-white font-medium">{config.operatingHours}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Roofing Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#roof-types" className="hover:text-[#4ADE80] transition-colors">
                  Stone Coated Roofing
                </a>
              </li>
              <li>
                <a href="#roof-types" className="hover:text-[#4ADE80] transition-colors">
                  Aluminium Longspan 0.55
                </a>
              </li>
              <li>
                <a href="#roof-types" className="hover:text-[#4ADE80] transition-colors">
                  Step Tiles Aluminium
                </a>
              </li>
              <li>
                <a href="#recent-works" className="hover:text-[#4ADE80] transition-colors">
                  Abuja Projects Gallery
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#4ADE80] transition-colors">
                  Pricing & FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Yard Address */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Yard & Contact Details
            </h4>
            <div className="space-y-3.5 text-sm text-slate-300">
              
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Direct Phone:</span>
                  <a
                    href={`tel:${config.phoneDial}`}
                    className="font-bold text-white hover:text-[#4ADE80] transition-colors"
                  >
                    {config.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">WhatsApp Contact:</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-[#4ADE80] transition-colors"
                  >
                    +{config.whatsappNumber}
                  </a>
                </div>
              </div>

              {/* Yard Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-slate-400">Actual Yard Address in Abuja:</span>
                  <p className="text-xs text-slate-200 mt-0.5 leading-relaxed">
                    {config.yardAddress}
                  </p>
                  
                  {/* Google Maps link */}
                  <a
                    href={config.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#86EFAC] hover:text-[#4ADE80] font-semibold mt-1.5 transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Settings Trigger */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {config.name}. All rights reserved. Registered roofing contractor in Abuja, FCT.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenSettings}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Edit Business Details</span>
            </button>
            <a href="#" className="hover:text-white transition-colors">
              Back to top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
