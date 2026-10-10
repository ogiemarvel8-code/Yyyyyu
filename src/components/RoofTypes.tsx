import React, { useState } from 'react';
import { MessageCircle, Calculator, Check, ArrowRight } from 'lucide-react';
import { CompanyConfig, getWhatsAppUrl } from '../config/company';

interface RoofTypesProps {
  config: CompanyConfig;
}

export const RoofTypes: React.FC<RoofTypesProps> = ({ config }) => {
  const [selectedCalcMaterial, setSelectedCalcMaterial] = useState<'stone' | 'aluminium' | 'steptile'>('stone');
  const [houseType, setHouseType] = useState<string>('3bed_bungalow');
  const [customSqm, setCustomSqm] = useState<number>(300);

  const products = [
    {
      id: "stone",
      name: "Stone Coated",
      priceDisplay: `₦${config.stoneCoatedPrice.toLocaleString()}/sqm`,
      priceNumber: config.stoneCoatedPrice,
      description:
        "Premium natural basalt stone chips bonded to zinc-aluminium steel. Zero noise during heavy rainfall, rust-proof, and fire resistant.",
      specs: [
        "Milano, Shingle & Bond profiles available",
        "50-year steel core lifespan with 10-year no-leak warranty",
        "Heavy rain sound dampening (no metallic echo)",
        "Interlocking leak-proof screw installation",
      ],
      image: "/src/assets/images/stone_coated_tiles_1791627925112.jpg",
      whatsappMessage: `Hello ApexShield Roofing, I want to get a quote for Stone Coated roofing (₦${config.stoneCoatedPrice.toLocaleString()}/sqm) for my building in Abuja. My site location is: `,
    },
    {
      id: "aluminium",
      name: "Aluminium 0.55",
      priceDisplay: `₦${config.aluminiumPrice.toLocaleString()}/sqm`,
      priceNumber: config.aluminiumPrice,
      description:
        "Full certified 0.55mm gauge longspan aluminium. Cut to exact roof slope length on site with zero horizontal joints to eliminate leak points.",
      specs: [
        "True 0.55mm original thickness (verified with micrometer)",
        "Zero joint leakage — continuous slope length profiling",
        "Never rusts or fades under Abuja sunny heat",
        "Fast 3 to 5 days on-site fabrication & mounting",
      ],
      image: "/src/assets/images/aluminium_longspan_1791627936218.jpg",
      whatsappMessage: `Hello ApexShield Roofing, I want to get a quote for Aluminium 0.55 longspan (₦${config.aluminiumPrice.toLocaleString()}/sqm) for my building in Abuja. My site location is: `,
    },
    {
      id: "steptile",
      name: "Step Tiles",
      priceDisplay: `₦${config.stepTilesPrice.toLocaleString()}/sqm`,
      priceNumber: config.stepTilesPrice,
      description:
        "Architectural stepped tile profile offering the bold appearance of clay tiles with lightweight high-tensile aluminium durability.",
      specs: [
        "Bold stepped ridge design for modern duplexes & bungalows",
        "High water discharge channels for heavy Abuja downpours",
        "Available in Dark Grey, Wine Red, Forest Green, Black",
        "Includes matching ridge caps and leak-proof valley trays",
      ],
      image: "/src/assets/images/step_tiles_roof_1791627945954.jpg",
      whatsappMessage: `Hello ApexShield Roofing, I want to get a quote for Step Tiles roofing (₦${config.stepTilesPrice.toLocaleString()}/sqm) for my building in Abuja. My site location is: `,
    },
  ];

  // Calculation logic
  const housePresets: { [key: string]: { label: string; sqm: number } } = {
    '2bed_bungalow': { label: '2-Bedroom Bungalow (~220 sqm)', sqm: 220 },
    '3bed_bungalow': { label: '3-Bedroom Bungalow (~300 sqm)', sqm: 300 },
    '4bed_duplex': { label: '4-Bedroom Duplex (~450 sqm)', sqm: 450 },
    '5bed_duplex': { label: '5-Bedroom Duplex (~550 sqm)', sqm: 550 },
    'custom': { label: 'Custom Roof Area', sqm: customSqm },
  };

  const activeSqm = houseType === 'custom' ? customSqm : housePresets[houseType].sqm;
  const currentPricePerSqm =
    selectedCalcMaterial === 'stone'
      ? config.stoneCoatedPrice
      : selectedCalcMaterial === 'aluminium'
      ? config.aluminiumPrice
      : config.stepTilesPrice;

  const currentMaterialName =
    selectedCalcMaterial === 'stone'
      ? 'Stone Coated'
      : selectedCalcMaterial === 'aluminium'
      ? 'Aluminium 0.55'
      : 'Step Tiles';

  const estimatedTotalCost = activeSqm * currentPricePerSqm;

  const calculatorWhatsAppUrl = getWhatsAppUrl(
    config.whatsappNumber,
    `Hello ApexShield Roofing, I used your website estimator for ${currentMaterialName} on my ${housePresets[houseType].label} (${activeSqm} sqm, Approx: ₦${estimatedTotalCost.toLocaleString()}). Please confirm and send me a detailed quotation for my site in Abuja:`
  );

  return (
    <section id="roof-types" className="py-16 sm:py-24 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-bold text-[#16A34A] tracking-wider uppercase mb-2">
            Transparent Abuja Factory Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2B1C] tracking-tight">
            Roof Types & Prices
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Certified gauge materials directly profiled for Abuja weather. All prices include supply and certified workmanship with 10-year warranty.
          </p>
        </div>

        {/* 3 Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((prod) => {
            const productWhatsAppUrl = getWhatsAppUrl(
              config.whatsappNumber,
              prod.whatsappMessage
            );

            return (
              <div
                key={prod.id}
                className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={prod.image}
                    alt={`${prod.name} roofing installed in Abuja`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-[#0C2B1C]/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm">
                    {prod.name}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Title and Price */}
                    <div className="flex items-baseline justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-[#0C2B1C]">
                        {prod.name}
                      </h3>
                      <div className="text-xl sm:text-2xl font-extrabold text-[#16A34A] tabular-nums">
                        {prod.priceDisplay}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2 mb-6">
                      {prod.specs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Get Quote Button - Prefilled WhatsApp */}
                  <div className="pt-2">
                    <a
                      href={productWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-[48px] px-5 py-3 rounded-xl bg-[#0C2B1C] hover:bg-[#15462D] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors active:scale-[0.98]"
                    >
                      <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
                      <span>Get {prod.name} Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Instant Roof Cost Estimator */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#16A34A] uppercase tracking-wider mb-1">
                <Calculator className="w-4 h-4" />
                <span>Instant Roof Budget Calculator</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0C2B1C]">
                Estimate Your Abuja Roofing Cost in Seconds
              </h3>
            </div>
            <div className="text-xs text-slate-500">
              * Estimate includes profiling, sheets, and professional installation.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                  1. Select Roofing Material
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { key: 'stone', label: 'Stone Coated', rate: `₦${config.stoneCoatedPrice.toLocaleString()}/sqm` },
                    { key: 'aluminium', label: 'Aluminium 0.55', rate: `₦${config.aluminiumPrice.toLocaleString()}/sqm` },
                    { key: 'steptile', label: 'Step Tiles', rate: `₦${config.stepTilesPrice.toLocaleString()}/sqm` },
                  ].map((m) => (
                    <button
                      key={m.key}
                      type="button"
                      onClick={() => setSelectedCalcMaterial(m.key as any)}
                      className={`p-3 text-left rounded-xl border text-xs sm:text-sm font-semibold transition-all ${
                        selectedCalcMaterial === m.key
                          ? 'border-[#16A34A] bg-[#F0FDF4] text-[#0C2B1C] ring-2 ring-[#16A34A]/20'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="font-bold">{m.label}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{m.rate}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                  2. Select Building Type or Size
                </label>
                <select
                  value={houseType}
                  onChange={(e) => setHouseType(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                >
                  <option value="2bed_bungalow">2-Bedroom Bungalow (approx. 220 sqm)</option>
                  <option value="3bed_bungalow">3-Bedroom Bungalow (approx. 300 sqm)</option>
                  <option value="4bed_duplex">4-Bedroom Duplex (approx. 450 sqm)</option>
                  <option value="5bed_duplex">5-Bedroom Duplex (approx. 550 sqm)</option>
                  <option value="custom">Custom Area (Enter square meters)</option>
                </select>
              </div>

              {houseType === 'custom' && (
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                    Enter Exact Roof Surface Area (sqm)
                  </label>
                  <input
                    type="number"
                    min="50"
                    max="5000"
                    value={customSqm}
                    onChange={(e) => setCustomSqm(Number(e.target.value) || 0)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                    placeholder="e.g. 350"
                  />
                </div>
              )}
            </div>

            {/* Calculated Output Card */}
            <div className="lg:col-span-5 bg-[#0C2B1C] text-white p-6 sm:p-7 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="text-xs text-[#86EFAC] font-semibold uppercase tracking-wider mb-1">
                  Estimated Project Total
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight tabular-nums mb-2">
                  ₦{estimatedTotalCost.toLocaleString()}
                </div>
                <div className="text-xs text-slate-300 space-y-1 mb-5">
                  <div>· Material: <span className="font-semibold text-white">{currentMaterialName}</span></div>
                  <div>· Estimated Area: <span className="font-semibold text-white">{activeSqm} square meters</span></div>
                  <div>· Rate: <span className="font-semibold text-white">₦{currentPricePerSqm.toLocaleString()} per sqm</span></div>
                </div>
              </div>

              <a
                href={calculatorWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-5 py-3 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] text-[#0C2B1C] hover:text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Estimate to WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
