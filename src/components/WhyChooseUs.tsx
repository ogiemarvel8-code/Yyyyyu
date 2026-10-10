import React from 'react';
import { WalletCards, Compass, FileCheck2, TimerReset } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: "No full payment before work",
      description:
        "Protect your hard-earned money. Pay only for profiling and transport; inspect physical sheets on your site before balance. Full completion before final settlement.",
      icon: WalletCards,
    },
    {
      title: "Free site inspection in Abuja",
      description:
        "Our certified roofing engineer visits your construction site anywhere in Abuja FCT at zero cost. We bring genuine samples, gauge micrometers, and take accurate measurements.",
      icon: Compass,
    },
    {
      title: "Written warranty",
      description:
        "Receive a signed 10-year no-leak guarantee certificate covering material integrity, stone-chip bonding, valley gutters, and leak-proof joint fasteners.",
      icon: FileCheck2,
    },
    {
      title: "We respect agreed deadlines",
      description:
        "We agree on a delivery schedule and stick to it. Standard 3 to 5 working days turnaround without artisanal excuses or site delays.",
      icon: TimerReset,
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-[#0C2B1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-bold text-[#86EFAC] tracking-wider uppercase mb-2">
            The Abuja Builder's Trusted Partner
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Choose Us
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-200">
            We eliminate the headaches of fake roofing gauge, delayed craftsmen, and leaking valleys with ironclad guarantees.
          </p>
        </div>

        {/* Exactly 4 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-[#123825] rounded-2xl p-6 sm:p-7 border border-[#27593E] hover:border-[#4ADE80]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1C4D35] flex items-center justify-center text-[#4ADE80] mb-5">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C4D35] flex items-center justify-between text-xs text-[#86EFAC] font-semibold">
                  <span>Guaranteed</span>
                  <span className="font-mono text-slate-400">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
