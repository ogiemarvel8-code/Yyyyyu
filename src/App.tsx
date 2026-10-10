import React, { useState, useEffect } from 'react';
import { CompanyConfig, DEFAULT_COMPANY_CONFIG } from './config/company';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProofBar } from './components/ProofBar';
import { RoofTypes } from './components/RoofTypes';
import { RecentWorks } from './components/RecentWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomerTestimonial } from './components/CustomerTestimonial';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { SettingsModal } from './components/SettingsModal';

const STORAGE_KEY = 'apexshield_company_config_v1';

export default function App() {
  const [config, setConfig] = useState<CompanyConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_COMPANY_CONFIG, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Failed to parse saved config', e);
    }
    return DEFAULT_COMPANY_CONFIG;
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSaveConfig = (updated: CompanyConfig) => {
    setConfig(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save config', e);
    }
  };

  const handleResetConfig = () => {
    setConfig(DEFAULT_COMPANY_CONFIG);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to reset config', e);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9] text-slate-800 font-sans selection:bg-[#22C55E]/30 selection:text-[#0C2B1C]">
      {/* Top Bar Contract Navigation */}
      <Navbar
        config={config}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Main Content Sections (IN EXACT ORDER) */}
      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <Hero config={config} />

        {/* 2. PROOF BAR */}
        <ProofBar />

        {/* 3. ROOF TYPES & PRICES */}
        <RoofTypes config={config} />

        {/* 4. RECENT WORKS */}
        <RecentWorks config={config} />

        {/* 5. WHY CHOOSE US */}
        <WhyChooseUs />

        {/* 6. CUSTOMER TESTIMONIAL */}
        <CustomerTestimonial config={config} />

        {/* 7. FAQ */}
        <FAQ config={config} />

        {/* 8. FINAL CALL TO ACTION */}
        <FinalCTA config={config} />
      </main>

      {/* 9. FOOTER */}
      <Footer
        config={config}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* CONVERSION FEATURE: Mobile Sticky WhatsApp and Call Bar */}
      <MobileStickyBar config={config} />

      {/* Editable Business Details Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onSave={handleSaveConfig}
        onReset={handleResetConfig}
      />
    </div>
  );
}
