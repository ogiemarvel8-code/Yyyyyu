import React from 'react';
import { Home, CalendarCheck, Headset } from 'lucide-react';

export const ProofBar: React.FC = () => {
  const stats = [
    {
      value: "250+",
      label: "Roofs Done",
      detail: "Across Abuja & environs",
      icon: Home,
    },
    {
      value: "8 Years",
      label: "Experience",
      detail: "Specialized roofing crew",
      icon: CalendarCheck,
    },
    {
      value: "24/7",
      label: "Support",
      detail: "Emergency leak assistance",
      icon: Headset,
    },
  ];

  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-3 divide-x divide-slate-100 text-center">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="px-2 sm:px-6 flex flex-col items-center justify-center">
                <div className="mb-1 sm:mb-2 text-[#16A34A] hidden sm:block">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 mx-auto stroke-[2.2]" />
                </div>
                <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#0C2B1C] tracking-tight tabular-nums">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-base font-bold text-slate-800 mt-0.5">
                  {item.label}
                </div>
                <div className="hidden md:block text-xs text-slate-500 mt-0.5">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
